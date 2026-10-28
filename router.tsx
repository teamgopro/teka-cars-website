import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const ROUTES = {
  home: "/",
  theCar: "/the-car",
  design: "/design",
  technology: "/technology",
  vision: "/our-vision",
  invitation: "/invitation",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES] | string;

function normalize(hash: string): string {
  const path = hash.replace(/^#/, "") || "/";
  return path === "" ? "/" : path;
}

function getCurrentPath(): string {
  if (typeof window === "undefined") return "/";
  return normalize(window.location.hash);
}

interface RouterContextValue {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<string>(getCurrentPath());

  useEffect(() => {
    const onHashChange = () => setPath(getCurrentPath());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (to: string) => {
    if (window.location.hash === `#${to}`) {
      // Force scroll + state refresh even if same route requested
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    window.location.hash = to;
  };

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter(): RouterContextValue {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter must be used within RouterProvider");
  return ctx;
}
