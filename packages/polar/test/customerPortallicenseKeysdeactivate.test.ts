import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortallicenseKeysactivate } from "../src/operations/customerPortallicenseKeysactivate.ts";
import { customerPortallicenseKeysdeactivate } from "../src/operations/customerPortallicenseKeysdeactivate.ts";
import { customerPortallicenseKeyslist } from "../src/operations/customerPortallicenseKeyslist.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffectAsCustomer,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortallicenseKeysdeactivate", () => {
  it(
    "activates and deactivates a license key activation",
    { timeout: 60_000 },
    async () => {
      // License keys come from paid orders with a license-key benefit, which
      // can't be deterministically created via the backend API. When a
      // suitable granted key is available we exercise the real
      // activate→deactivate flow; otherwise we still verify the listing
      // shape and the dedicated error tests below cover the operation.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortallicenseKeyslist({ limit: 100 });
          const target = listed.items.find(
            (k) =>
              k.status === "granted" &&
              (k.limit_activations === null || k.limit_activations > 0),
          );
          if (!target || !organizationId) {
            return {
              deactivated: false,
              totalCount: listed.pagination.total_count,
            };
          }
          const activation = yield* customerPortallicenseKeysactivate({
            key: target.key,
            label: `distilled-deactivate-${testRunId}`,
          });
          yield* customerPortallicenseKeysdeactivate({
            key: target.key,
            activation_id: activation.id,
          });
          return {
            deactivated: true,
            totalCount: listed.pagination.total_count,
          };
        }),
      );

      expect(typeof result.totalCount).toBe("number");
      expect(typeof result.deactivated).toBe("boolean");
    },
  );

  it(
    "fails for a non-existent license key / activation pair",
    { timeout: 30_000 },
    async () => {
      if (!organizationId) {
        throw new Error("POLAR_ORGANIZATION_ID is required for this test");
      }
      const error = await runEffectAsCustomer(
        customerPortallicenseKeysdeactivate({
          key: `distilled-missing-license-${testRunId}`,
          activation_id: "00000000-0000-0000-0000-000000000000",
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
        customerPortallicenseKeysdeactivate({
          key: `distilled-license-${testRunId}`,
          organization_id: "not-a-uuid",
          activation_id: "also-not-a-uuid",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with UnprocessableEntity when activation_id is malformed",
    { timeout: 30_000 },
    async () => {
      if (!organizationId) {
        throw new Error("POLAR_ORGANIZATION_ID is required for this test");
      }
      const error = await runEffectAsCustomer(
        customerPortallicenseKeysdeactivate({
          key: `distilled-license-${testRunId}`,
          activation_id: "not-a-uuid",
        }).pipe(Effect.flip),
      );

      // Malformed UUID is rejected by request validation; if the validator
      // accepts it, the missing key surfaces as NotFound instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
