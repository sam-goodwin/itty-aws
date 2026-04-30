import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { EventsControllerList } from "../src/operations/EventsControllerList.ts";
import { runEffect } from "./setup.ts";

describe("EventsControllerList", () => {
  it(
    "lists events filtered by event type",
    async () => {
      const result = await runEffect(
        EventsControllerList({
          events: "dsync.user.created",
          limit: 10,
        }),
      );

      expect(result).toBeDefined();
      expect(typeof result.object).toBe("string");
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();

      for (const event of result.data) {
        expect(typeof event.id).toBe("string");
        expect(typeof event.event).toBe("string");
        expect(typeof event.created_at).toBe("string");
        expect(typeof event.data).toBe("object");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when no events filter is provided",
    async () => {
      const error = await runEffect(
        EventsControllerList({ limit: 10 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity for an unknown event type",
    async () => {
      const error = await runEffect(
        EventsControllerList({
          events: "not.a.real.event.type",
        }).pipe(Effect.flip),
      );

      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
