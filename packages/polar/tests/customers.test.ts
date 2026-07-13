import { describe, expect, it } from "vitest";
import { Effect } from "effect";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersget } from "../src/operations/customersget.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { hasCredentials, runEffect, testRunId } from "./setup.ts";

// Live lifecycle tests against the Polar sandbox — require `POLAR_ACCESS_TOKEN`
// (with `POLAR_SERVER=sandbox`). They skip without it. The created customer is
// cleaned up via `Effect.ensuring`, even on failure.
describe.skipIf(!hasCredentials)("Polar customers (live)", () => {
  it(
    "creates, reads, and deletes a customer",
    { timeout: 30_000 },
    async () => {
      const email = `distilled-polar-${testRunId}@example.com`;
      let createdId: string | undefined;

      await runEffect(
        Effect.gen(function* () {
          const created = (yield* customerscreate({
            email,
            name: `Distilled Test ${testRunId}`,
          })) as { id: string; email: string };
          createdId = created.id;

          expect(created.id).toBeTruthy();
          expect(created.email).toBe(email);

          const fetched = (yield* customersget({ id: created.id })) as {
            id: string;
            email: string;
          };
          expect(fetched.id).toBe(created.id);
          expect(fetched.email).toBe(email);
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : customersdelete({ id: createdId }).pipe(Effect.ignore),
            ),
          ),
        ),
      );
    },
  );
});
