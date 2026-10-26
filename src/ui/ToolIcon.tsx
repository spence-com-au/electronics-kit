import type { ReactNode } from 'react';

export type ToolIconName =
  | 'undo'
  | 'redo'
  | 'zoom-in'
  | 'zoom-out'
  | 'rotate'
  | 'remove'
  | 'speed'
  | 'sound-on'
  | 'sound-off'
  | 'meter'
  | 'settings';

/**
 * A picture beside a toolbar button's word, for a child who can't read it yet. It is decoration:
 * the word stays the button's name. The level list's settings gear is the one button with no word,
 * so its `aria-label` names it instead.
 */
export function ToolIcon({ name }: { name: ToolIconName }) {
  return (
    <svg className="tool-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const paths: Readonly<Record<ToolIconName, ReactNode>> = {
  undo: (
    <>
      <path d="M9 14 4 9l5-5" />
      <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
    </>
  ),
  redo: (
    <>
      <path d="m15 14 5-5-5-5" />
      <path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13" />
    </>
  ),
  'zoom-in': (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5M10.5 7.5v6M7.5 10.5h6" />
    </>
  ),
  'zoom-out': (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5M7.5 10.5h6" />
    </>
  ),
  rotate: (
    <>
      <path d="M20 12a8 8 0 1 1-2.34-5.66" />
      <path d="M20 3v5h-5" />
    </>
  ),
  remove: (
    <>
      <path d="M4 7h16M9.5 7V4.5h5V7M6 7l1 13h10l1-13" />
      <path d="M10 11v5M14 11v5" />
    </>
  ),
  speed: (
    <>
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M10 3h4M12 3v3M12 13.5l3-3" />
    </>
  ),
  'sound-on': (
    <>
      <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
      <path d="M15.5 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11" />
    </>
  ),
  'sound-off': (
    <>
      <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
      <path d="m15.5 9.5 5 5M20.5 9.5l-5 5" />
    </>
  ),
  meter: (
    <>
      <rect x="5" y="2.5" width="14" height="19" rx="2.5" />
      <path d="M8 6h8v4H8zM12 16l1.8-1.8" />
      <circle cx="12" cy="16" r="2.5" />
    </>
  ),
  settings: (
    <>
      <path d="M19.3 9.8L21.8 10.3L21.8 13.7L19.3 14.2L18.7 15.6L20.2 17.7L17.7 20.2L15.6 18.7L14.2 19.3L13.7 21.8L10.3 21.8L9.8 19.3L8.4 18.7L6.3 20.2L3.8 17.7L5.3 15.6L4.7 14.2L2.2 13.7L2.2 10.3L4.7 9.8L5.3 8.4L3.8 6.3L6.3 3.8L8.4 5.3L9.8 4.7L10.3 2.2L13.7 2.2L14.2 4.7L15.6 5.3L17.7 3.8L20.2 6.3L18.7 8.4z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
};
