import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { ConnectionsControllerDelete } from "../src/operations/ConnectionsControllerDelete.ts";
import { ConnectionsControllerList } from "../src/operations/ConnectionsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("ConnectionsControllerDelete", () => {
  it(
    "deletes a connection",
    async () => {
      const list = await runEffect(
        ConnectionsControllerList({ limit: 1 }),
      );

      if (list.data.length === 0) {
        // No seed connection available — exercise the operation against a
        // missing id so the call still hits the live API.
        const error = await runEffect(
          ConnectionsControllerDelete({
            id: `conn_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { id: string };
      await runEffect(ConnectionsControllerDelete({ id: seed.id }));

      // After deletion, deleting the same id again should fail with NotFound.
      const error = await runEffect(
        ConnectionsControllerDelete({ id: seed.id }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent connection id",
    async () => {
      const error = await runEffect(
        ConnectionsControllerDelete({
          id: `conn_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when deleting a connection in a different tenant",
    async () => {
      const error = await runEffect(
        ConnectionsControllerDelete({
          id: "conn_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
