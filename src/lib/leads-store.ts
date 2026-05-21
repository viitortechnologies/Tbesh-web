import { promises as fs } from "fs";
import path from "path";
import type { LeadInput } from "./validation";

export type StoredLead = LeadInput & {
  id: string;
  createdAt: string;
};

const leadsFile = path.join(process.cwd(), "data", "leads.json");

/** Local dev only — Vercel/serverless filesystem is read-only. */
export function shouldPersistLeadsToDisk(): boolean {
  return process.env.NODE_ENV === "development";
}

function createStoredLead(lead: LeadInput): StoredLead {
  return {
    ...lead,
    company: lead.company ?? "",
    message: lead.message ?? "",
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
}

export async function persistLead(lead: LeadInput): Promise<StoredLead> {
  const stored = createStoredLead(lead);

  if (!shouldPersistLeadsToDisk()) {
    return stored;
  }

  await fs.mkdir(path.dirname(leadsFile), { recursive: true });

  let existing: StoredLead[] = [];
  try {
    const raw = await fs.readFile(leadsFile, "utf8");
    existing = JSON.parse(raw) as StoredLead[];
  } catch {
    existing = [];
  }

  existing.push(stored);
  await fs.writeFile(leadsFile, JSON.stringify(existing, null, 2), "utf8");

  return stored;
}
