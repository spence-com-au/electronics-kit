import type { Profile } from '../core/profiles';
import { InstallPrompt } from './InstallPrompt';
import { strings } from './strings';

interface SettingsScreenProps {
  /** Who's playing, beside the button to change it. */
  profile: Profile;
  /** Null until saved players arrive, which would undo a change made before them. */
  onPlayers: (() => void) | null;
  /** The grown-ups' settings; null until saved players arrive, like `onPlayers`. */
  onGrownUps: (() => void) | null;
  onBack: () => void;
}

/**
 * What the level list keeps behind its gear button (docs/design.md §2), so the list is just the
 * levels: changing player, installing the game, the grown-ups' settings and the version.
 */
export function SettingsScreen({ profile, onPlayers, onGrownUps, onBack }: SettingsScreenProps) {
  return (
    <main>
      <header className="level-header">
        <button type="button" onClick={onBack}>
          {strings.backToLevels}
        </button>
        <h1>{strings.settings}</h1>
      </header>
      <p className="playing-as">
        <span className="avatar" aria-hidden="true">
          {profile.avatar}
        </span>
        {strings.playingAs(profile.name)}
        <button type="button" onClick={onPlayers ?? undefined} disabled={!onPlayers}>
          {strings.changePlayer}
        </button>
      </p>
      <InstallPrompt />
      <footer className="version">
        <span className="version-text">{strings.version(__APP_VERSION__, __APP_COMMIT__)}</span>
        <button type="button" onClick={onGrownUps ?? undefined} disabled={!onGrownUps}>
          {strings.forGrownUps}
        </button>
      </footer>
    </main>
  );
}
