import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { ConnectionsControllerList } from "../src/operations/ConnectionsControllerList.ts";
import { runEffect } from "./setup.ts";

describe("ConnectionsControllerList", () => {
  it(
    "lists connections",
    async () => {
      const result = await runEffect(
        ConnectionsControllerList({ limit: 10 }),
      );

      expect(result).toBeDefined();
      expect(typeof result.object).toBe("string");
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();

      for (const conn of result.data) {
        expect(typeof conn.id).toBe("string");
        expect(typeof conn.connection_type).toBe("string");
        expect(typeof conn.name).toBe("string");
        expect(["linked", "unlinked"]).toContain(conn.status);
        expect([
          "requires_type",
          "draft",
          "active",
          "validating",
          "inactive",
          "deleting",
        ]).toContain(conn.state);
        expect(Array.isArray(conn.domains)).toBe(true);
        expect(typeof conn.created_at).toBe("string");
        expect(typeof conn.updated_at).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when filtering by an organization in a different tenant",
    async () => {
      const error = await runEffect(
        ConnectionsControllerList({
          organization_id: "org_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("Forbidden");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when the organization_id is malformed",
    async () => {
      const error = await runEffect(
        ConnectionsControllerList({
          organization_id: "not a valid org id!!",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
