'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';

/**
 * M3-style theme toggle. Persists to localStorage; default = system preference.
 * No flash on load because the pre-hydration script in layout.tsx sets the
 * .dark class on <html> before React mounts.
 */
export function ThemeToggle() {
  const [dark, setDark] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('fof-theme', next ? 'dark' : 'light'); } catch {}
    setDark(next);
  };

  // Don't render the icon until we know the state, to avoid hydration mismatch
  if (dark === null) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        <span className="block h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
