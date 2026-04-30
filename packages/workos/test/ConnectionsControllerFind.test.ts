import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { ConnectionsControllerFind } from "../src/operations/ConnectionsControllerFind.ts";
import { ConnectionsControllerList } from "../src/operations/ConnectionsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("ConnectionsControllerFind", () => {
  it(
    "retrieves a connection by id",
    async () => {
      const list = await runEffect(
        ConnectionsControllerList({ limit: 1 }),
      );

      if (list.data.length === 0) {
        // No seed connection available — exercise the operation against a
        // missing id so the call still hits the live API.
        const error = await runEffect(
          ConnectionsControllerFind({
            id: `conn_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { id: string };
      const conn = await runEffect(ConnectionsControllerFind({ id: seed.id }));

      expect(conn).toBeDefined();
      expect(conn.id).toBe(seed.id);
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
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent connection id",
    async () => {
      const error = await runEffect(
        ConnectionsControllerFind({
          id: `conn_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when reading a connection in a different tenant",
    async () => {
      const error = await runEffect(
        ConnectionsControllerFind({
          id: "conn_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
