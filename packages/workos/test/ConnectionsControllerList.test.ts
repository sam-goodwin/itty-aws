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
    30_000,
  );

});
