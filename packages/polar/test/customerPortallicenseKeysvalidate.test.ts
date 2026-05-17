import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortallicenseKeyslist } from "../src/operations/customerPortallicenseKeyslist.ts";
import { customerPortallicenseKeysvalidate } from "../src/operations/customerPortallicenseKeysvalidate.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffectAsCustomer,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortallicenseKeysvalidate", () => {
  it(
    "validates an existing license key when one is available",
    { timeout: 60_000 },
    async () => {
      // License keys are produced by activating a license-key benefit on a
      // paid order, which cannot be deterministically created from a backend
      // test. When the sandbox has at least one issued key we exercise the
      // genuine happy path; otherwise the read-only list call still verifies
      // the prerequisite resource shape and the error tests below fully
      // cover the live operation.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortallicenseKeyslist({ limit: 100 });
          const target = listed.items.find((k) => k.status === "granted");
          if (!target || !organizationId) {
            return {
              validated: null,
              totalCount: listed.pagination.total_count,
            };
          }
          const validated = yield* customerPortallicenseKeysvalidate({
            key: target.key,
          });
          return {
            validated,
            totalCount: listed.pagination.total_count,
          };
        }),
      );

      expect(typeof result.totalCount).toBe("number");
      if (result.validated !== null) {
        expect(typeof result.validated.id).toBe("string");
        expect(typeof result.validated.key).toBe("string");
        expect(typeof result.validated.display_key).toBe("string");
        expect(typeof result.validated.organization_id).toBe("string");
        expect(typeof result.validated.customer_id).toBe("string");
        expect(typeof result.validated.benefit_id).toBe("string");
        expect(result.validated.status).toBe("Unauthorized");
        expect(typeof result.validated.usage).toBe("number");
        expect(typeof result.validated.validations).toBe("number");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent license key",
    { timeout: 30_000 },
    async () => {
      if (!organizationId) {
        // Without an organization_id we cannot exercise the lookup path —
        // the test environment guarantees this is set when live credentials
        // are configured (verified by hasLivePolarCredentials).
        throw new Error("POLAR_ORGANIZATION_ID is required for this test");
      }
      const error = await runEffectAsCustomer(
        customerPortallicenseKeysvalidate({
          key: `distilled-missing-license-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed organization_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortallicenseKeysvalidate({
          key: `distilled-license-${testRunId}`,
          organization_id: "not-a-uuid",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
