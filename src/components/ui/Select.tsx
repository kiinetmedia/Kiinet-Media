import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

export type SelectOption = { value: string; label: string };

type Props = {
  id?: string;
  name?: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
};

/**
 * Div-based combobox. The popup is regular DOM so the global
 * custom-cursor (`cursor: none`) applies. Submits via a hidden input.
 */
export default function Select({
  id,
  name,
  options,
  placeholder = "Select",
  required,
  defaultValue = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [focusIdx, setFocusIdx] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reactId = useId();
  const listId = `${id ?? reactId}-list`;

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  useEffect(() => {
    if (open) {
      const i = options.findIndex((o) => o.value === value);
      setFocusIdx(i >= 0 ? i : 0);
    }
  }, [open, options, value]);

  const selected = options.find((o) => o.value === value);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Escape") {
      setOpen(false);
      triggerRef.current?.focus();
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      if (focusIdx >= 0 && focusIdx < options.length) {
        setValue(options[focusIdx].value);
        setOpen(false);
      }
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
      } else {
        setFocusIdx((i) => Math.min(i + 1, options.length - 1));
      }
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
      } else {
        setFocusIdx((i) => Math.max(i - 1, 0));
      }
    }
    if (e.key === "Home") {
      e.preventDefault();
      setFocusIdx(0);
    }
    if (e.key === "End") {
      e.preventDefault();
      setFocusIdx(options.length - 1);
    }
  };

  return (
    <div ref={wrapRef} className={`kb-select ${open ? "open" : ""}`}>
      <button
        ref={triggerRef}
        type="button"
        id={id}
        className="kb-select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKey}
      >
        <span className={selected ? "kb-select-val" : "kb-select-placeholder"}>
          {selected ? selected.label : placeholder}
        </span>
        <span className="kb-select-chev" aria-hidden="true">▾</span>
      </button>

      {open && (
        <ul className="kb-select-list" id={listId} role="listbox">
          {options.map((o, i) => {
            const isSelected = value === o.value;
            const isActive = i === focusIdx;
            return (
              <li
                key={o.value}
                role="option"
                aria-selected={isSelected}
                className={`kb-select-opt${isSelected ? " selected" : ""}${isActive ? " active" : ""}`}
                onMouseDown={(e) => {
                  e.preventDefault();
                  setValue(o.value);
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
                onMouseEnter={() => setFocusIdx(i)}
              >
                {o.label}
              </li>
            );
          })}
        </ul>
      )}

      <input type="hidden" name={name} value={value} required={required} readOnly />
    </div>
  );
}
