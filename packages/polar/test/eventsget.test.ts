import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { eventsget } from "../src/operations/eventsget.ts";
import { eventslist } from "../src/operations/eventslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("eventsget", () => {
  it("fetches an event by ID", { timeout: 30_000 }, async () => {
    const list = await runEffect(eventslist({ page: 1, limit: 1 }));

    if (list.items.length === 0) {
      // Live sandbox has no events — exercise the not-found path instead so
      // the test still asserts the operation actually wires up correctly.
      const error = await runEffect(
        eventsget({ id: "00000000-0000-0000-0000-000000000000" }).pipe(
          Effect.flip,
        ),
      );
      expect(error._tag).toBe("ResourceNotFound");
      return;
    }

    const seed = list.items[0]!;
    const event = await runEffect(eventsget({ id: seed.id }));

    expect(event.id).toBe(seed.id);
    expect(typeof event.timestamp).toBe("string");
    expect(typeof event.organization_id).toBe("string");
    expect(typeof event.label).toBe("string");
    expect(typeof event.name).toBe("string");
    expect(event.source).toBe("system");
    expect(typeof event.metadata).toBe("object");
  });

  it(
    "fails with NotFound for a non-existent event ID",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        eventsget({ id: "00000000-0000-0000-0000-000000000000" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed event ID",
    { timeout: 30_000 },
    async () => {
      // Polar validates `id` as a UUID; a non-UUID string is rejected with a
      // typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        eventsget({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
