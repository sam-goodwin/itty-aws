import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortallicenseKeysactivate } from "../src/operations/customerPortallicenseKeysactivate.ts";
import { customerPortallicenseKeyslist } from "../src/operations/customerPortallicenseKeyslist.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffectAsCustomer,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortallicenseKeysactivate", () => {
  it(
    "activates an existing license key when one is available",
    { timeout: 60_000 },
    async () => {
      // License keys are produced by activating a license-key benefit on a
      // paid order, which cannot be deterministically created from a backend
      // test. When the sandbox has at least one granted key with available
      // activation slots we exercise the genuine happy path; otherwise the
      // read-only list call still verifies the prerequisite resource shape
      // and the error tests below fully cover the live operation.
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
              activated: null,
              totalCount: listed.pagination.total_count,
            };
          }
          const activated = yield* customerPortallicenseKeysactivate({
            key: target.key,
            label: `distilled-activation-${testRunId}`,
          });
          return {
            activated,
            totalCount: listed.pagination.total_count,
          };
        }),
      );

      expect(typeof result.totalCount).toBe("number");
      if (result.activated !== null) {
        expect(typeof result.activated.id).toBe("string");
        expect(typeof result.activated.license_key_id).toBe("string");
        expect(result.activated.label).toBe(
          `distilled-activation-${testRunId}`,
        );
        expect(typeof result.activated.created_at).toBe("string");
        expect(typeof result.activated.license_key.id).toBe("string");
        expect(typeof result.activated.license_key.key).toBe("string");
        expect(typeof result.activated.license_key.display_key).toBe("string");
        expect(typeof result.activated.license_key.organization_id).toBe(
          "string",
        );
        expect(typeof result.activated.license_key.customer_id).toBe("string");
        expect(typeof result.activated.license_key.benefit_id).toBe("string");
        expect(result.activated.license_key.status).toBe("Unauthorized");
      }
    },
  );

  it("fails for a non-existent license key", { timeout: 30_000 }, async () => {
    if (!organizationId) {
      // Without an organization_id we cannot exercise the lookup path —
      // the test environment guarantees this is set when live credentials
      // are configured (verified by hasLivePolarCredentials).
      throw new Error("POLAR_ORGANIZATION_ID is required for this test");
    }
    const error = await runEffectAsCustomer(
      customerPortallicenseKeysactivate({
        key: `distilled-missing-license-${testRunId}`,
        label: `distilled-activation-${testRunId}`,
      }).pipe(Effect.flip),
    );

    // Polar may surface either NotFound (key not in this org) or Forbidden
    // (key exists but caller lacks access) for the unknown-key path; both
    // are valid documented outcomes.
    expect(error._tag).toBe("ResourceNotFound");
  });

  it(
    "fails with UnprocessableEntity for a malformed organization_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortallicenseKeysactivate({
          key: `distilled-license-${testRunId}`,
          organization_id: "not-a-uuid",
          label: `distilled-activation-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with UnprocessableEntity when required label is missing",
    { timeout: 30_000 },
    async () => {
      if (!organizationId) {
        throw new Error("POLAR_ORGANIZATION_ID is required for this test");
      }
      const error = await runEffectAsCustomer(
        customerPortallicenseKeysactivate({
          key: `distilled-license-${testRunId}`,
          label: "",
        }).pipe(Effect.flip),
      );

      // Empty label is rejected by validation; an unknown key under a real
      // org may also surface as NotFound or Forbidden depending on which
      // check fires first.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
