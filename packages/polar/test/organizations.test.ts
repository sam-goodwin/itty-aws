import { describe, expect, it } from "vitest";
import { organizationsget } from "../src/operations/organizationsget.ts";
import { organizationslist } from "../src/operations/organizationslist.ts";
import { hasLivePolarCredentials, organizationId, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("Organizations", () => {
  it(
    "lists and gets the configured organization",
    { timeout: 30_000 },
    async () => {
      const listed = await runEffect(organizationslist({ limit: 100 }));
      const organization = organizationId ?? listed.items[0]?.id;

      expect(organization).toBeTruthy();

      const fetched = await runEffect(organizationsget({ id: organization }));

      expect(listed.items.some((item) => item.id === fetched.id)).toBe(true);
      expect(fetched.id).toBe(organization);
      expect(fetched.name).toBeTruthy();
    },
  );
});
