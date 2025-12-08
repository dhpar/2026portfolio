import { useEffect, useState } from "react";
import type { Resume } from "@/types/schema"; // or wherever schema.ts lives

export function useResume() {
  const [resume, setResume] = useState<Resume | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/resume");
        if (!res.ok) throw new Error("Failed to load resume");

        const data: Resume = await res.json();
        setResume(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { resume, loading, error };
}
