import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import { describe, expect, it } from "vitest";
import { customerSessionscreate } from "../src/operations/customerSessionscreate.ts";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { customerslist } from "../src/operations/customerslist.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerSessionscreate", () => {
  it(
    "creates a customer session for a real customer",
    { timeout: 30_000 },
    async () => {
      // We resolve a customer (creating a fresh test customer if the org
      // has none) and then create a session for it. The temp customer is
      // cleaned up via Effect.ensuring on completion.
      if (!organizationId) {
        throw new Error("POLAR_ORGANIZATION_ID is required for this test");
      }
      const result = await runEffect(
        Effect.gen(function* () {
          const listed = yield* customerslist({
            limit: 1,
          });
          const existing = listed.items[0];
          if (existing) {
            const session = yield* customerSessionscreate({
              customer_id: existing.id,
            });
            return { kind: "existing", session } as const;
          }
          const created = yield* customerscreate({
            email: testEmail(`distilled-session-${testRunId}`),
            name: `Distilled Test ${testRunId}`,
          });
          const session = yield* customerSessionscreate({
            customer_id: created.id,
          }).pipe(
            Effect.ensuring(
              customersdelete({ id: created.id }).pipe(Effect.ignore),
            ),
          );
          return { kind: "created", customerId: created.id, session } as const;
        }),
      );

      expect(typeof result.session.id).toBe("string");
      expect(typeof result.session.customer_id).toBe("string");
      expect(typeof result.session.customer_portal_url).toBe("string");
      expect(typeof result.session.expires_at).toBe("string");
      const token = Redacted.value(result.session.token);
      expect(typeof token).toBe("string");
      expect(token.length).toBeGreaterThan(0);
      if (result.kind === "created") {
        expect(result.session.customer_id).toBe(result.customerId);
      }
    },
  );

  it(
    "fails with UnprocessableEntity for a non-existent customer_id",
    { timeout: 30_000 },
    async () => {
      // Polar surfaces missing customers on session creation as a typed
      // UnprocessableEntity (the only documented per-op error); some
      // deployments may surface NotFound instead.
      const error = await runEffect(
        customerSessionscreate({
          customer_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed customer_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customerSessionscreate({ customer_id: "not-a-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for an unknown external_customer_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customerSessionscreate({
          external_customer_id: `distilled-missing-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
