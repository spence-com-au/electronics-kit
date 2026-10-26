import { useEffect, useId, useRef, useState } from 'react';
import { InstallPrompt } from './InstallPrompt';
import { strings } from './strings';
import { ToolIcon } from './ToolIcon';

interface SettingsMenuProps {
  /** Null until saved players arrive, which would undo a change made before them. */
  onPlayers: (() => void) | null;
  /** The grown-ups' settings; null until saved players arrive, like `onPlayers`. */
  onGrownUps: (() => void) | null;
}

/**
 * The level list's gear, and the menu it drops down (docs/design.md §2): changing player,
 * installing the game, the grown-ups' settings and the version, kept out of a child's way. A tap
 * anywhere else, or Escape, closes it.
 */
export function SettingsMenu({ onPlayers, onGrownUps }: SettingsMenuProps) {
  const [open, setOpen] = useState(false);
  const menu = useId();
  const root = useRef<HTMLDivElement>(null);
  const gear = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        gear.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className="settings" ref={root}>
      <button
        ref={gear}
        type="button"
        className="settings-gear"
        aria-label={strings.settings}
        title={strings.settings}
        aria-expanded={open}
        aria-controls={menu}
        onClick={() => setOpen(!open)}
      >
        <ToolIcon name="settings" />
      </button>
      <section id={menu} className="settings-menu" aria-label={strings.settings} hidden={!open}>
        <button type="button" onClick={onPlayers ?? undefined} disabled={!onPlayers}>
          {strings.changePlayer}
        </button>
        <InstallPrompt />
        <button
          type="button"
          className="grown-ups"
          onClick={onGrownUps ?? undefined}
          disabled={!onGrownUps}
        >
          {strings.forGrownUps}
        </button>
        <p className="version-text">{strings.version(__APP_VERSION__, __APP_COMMIT__)}</p>
      </section>
    </div>
  );
}
