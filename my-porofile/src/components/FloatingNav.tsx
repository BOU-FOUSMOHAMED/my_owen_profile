import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { LucideIcon } from "lucide-react";
import { Menu, X } from "lucide-react";

const FAB_SIZE = 56;
const FAB_MARGIN = 12;
const PANEL_GAP = 14;
const DRAG_THRESHOLD = 6;
const SNAP_MS = 320;

interface FloatingNavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface FloatingNavProps {
  items: FloatingNavItem[];
  active: string;
  onNavigate: (href: string) => void;
}

interface DragState {
  pointerId: number;
  startX: number;
  startY: number;
  offsetX: number;
  offsetY: number;
  moved: boolean;
}

export default function FloatingNav({ items, active, onNavigate }: FloatingNavProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const [snapping, setSnapping] = useState(false);
  const [panelDir, setPanelDir] = useState<"up" | "down">("up");
  const [panelShift, setPanelShift] = useState(0);
  const dragRef = useRef<DragState | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const coords = pos ?? { x: FAB_MARGIN, y: Math.max(FAB_MARGIN, window.innerHeight - FAB_SIZE - 28) };
  const activeIndex = items.findIndex((item) => item.href === active);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      setPos((p) => {
        if (!p) return p;
        return {
          x: Math.min(Math.max(p.x, FAB_MARGIN), window.innerWidth - FAB_SIZE - FAB_MARGIN),
          y: Math.min(Math.max(p.y, FAB_MARGIN), window.innerHeight - FAB_SIZE - FAB_MARGIN),
        };
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useLayoutEffect(() => {
    if (!open || !panelRef.current) return;
    const el = panelRef.current;
    const above = coords.y - FAB_MARGIN - PANEL_GAP;
    const below = window.innerHeight - (coords.y + FAB_SIZE) - FAB_MARGIN - PANEL_GAP;
    setPanelDir(above >= el.offsetHeight ? "up" : below >= el.offsetHeight ? "down" : "up");
    setPanelShift(Math.min(0, window.innerWidth - (coords.x + el.offsetWidth) - FAB_MARGIN));
  }, [open, coords.x, coords.y, items.length]);

  const handlePointerDown = (e: ReactPointerEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.setPointerCapture(e.pointerId);
    setSnapping(false);
    dragRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      offsetX: e.clientX - btn.getBoundingClientRect().left,
      offsetY: e.clientY - btn.getBoundingClientRect().top,
      moved: false,
    };
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLButtonElement>) => {
    const d = dragRef.current;
    if (!d || d.pointerId !== e.pointerId) return;

    const dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;
    if (!d.moved) {
      if (Math.hypot(dx, dy) <= DRAG_THRESHOLD) return;
      d.moved = true;
      setOpen(false);
    }
    setDragging(true);

    const nx = Math.min(
      Math.max(e.clientX - d.offsetX, FAB_MARGIN),
      window.innerWidth - FAB_SIZE - FAB_MARGIN
    );
    const ny = Math.min(
      Math.max(e.clientY - d.offsetY, FAB_MARGIN),
      window.innerHeight - FAB_SIZE - FAB_MARGIN
    );
    setPos({ x: nx, y: ny });
  };

  const handlePointerEnd = (e: ReactPointerEvent<HTMLButtonElement>) => {
    const d = dragRef.current;
    if (!d) return;
    if (e.currentTarget.hasPointerCapture(d.pointerId)) {
      e.currentTarget.releasePointerCapture(d.pointerId);
    }
    dragRef.current = null;
    setDragging(false);

    if (d.moved) {
      setPos((p) => {
        if (!p) return p;
        return {
          ...p,
          x: p.x < window.innerWidth / 2 ? FAB_MARGIN : window.innerWidth - FAB_SIZE - FAB_MARGIN,
        };
      });
      setSnapping(true);
      window.setTimeout(() => setSnapping(false), SNAP_MS);
      return;
    }
    setOpen((o) => !o);
  };

  const go = (href: string) => {
    setOpen(false);
    onNavigate(href);
  };

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Fermer le menu"
          className="fixed inset-0 z-[940] bg-black/20 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed z-[960] select-none lg:hidden ${
          snapping && !dragging ? "transition-[left] duration-[320ms] ease-out" : ""
        }`}
        style={{ left: coords.x, top: coords.y }}
      >
        {open && (
          <div
            ref={panelRef}
            id="floating-nav-panel"
            className={`absolute w-56 rounded-2xl border border-line bg-nav p-2 shadow-glow backdrop-blur-[20px] backdrop-saturate-150 ${
              panelDir === "up" ? "bottom-full mb-3" : "top-full mt-3"
            }`}
            style={{ transform: `translateX(${panelShift}px)` }}
          >
            <div className="animate-menu-in motion-reduce:animate-none">
              <ul className="grid gap-1">
                {items.map((item) => {
                  const Icon = item.icon;
                  const isActive = active === item.href;
                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        onClick={() => go(item.href)}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-start text-[0.92rem] font-semibold transition ${
                          isActive
                            ? "bg-grad text-white shadow-[var(--btn-glow)]"
                            : "text-muted hover:bg-badge hover:text-accent"
                        }`}
                      >
                        <Icon size={18} />
                        <span>{item.label}</span>
                        {isActive && <span className="ms-auto size-2 rounded-full bg-white/90" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="floating-nav-panel"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          className="relative grid size-14 touch-none place-items-center rounded-2xl border border-line bg-grad text-white shadow-[var(--btn-glow)] transition hover:scale-[1.04] active:scale-95"
          style={{ cursor: dragging ? "grabbing" : "grab" }}
        >
          {open ? <X size={22} /> : <Menu size={22} aria-hidden="true" />}
          {!open && activeIndex >= 0 && (
            <span className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full border-2 border-bg bg-grad text-[0.66rem] font-bold leading-none text-white">
              {activeIndex + 1}
            </span>
          )}
        </button>
      </div>
    </>
  );
}