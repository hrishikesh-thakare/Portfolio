"use client";
import { useSyncExternalStore } from "react";
import ShortcutsPanel from "./ShortcutsPanel";
import LinkHoverCursor from "./LinkHoverCursor";

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export default function GlobalShell() {
  const mounted = useIsMounted();
  if (!mounted) return null;
  return (
    <>
      <ShortcutsPanel />
      <LinkHoverCursor />
    </>
  );
}
