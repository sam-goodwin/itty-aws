import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { licenseKeysactivate } from "../src/operations/licenseKeysactivate.ts";
import { licenseKeysdeactivate } from "../src/operations/licenseKeysdeactivate.ts";
import { licenseKeysget } from "../src/operations/licenseKeysget.ts";
import { licenseKeyslist } from "../src/operations/licenseKeyslist.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("licenseKeysdeactivate", () => {
  it(
    "deactivates a freshly-created activation",
    { timeout: 60_000 },
    async () => {
      const list = await runEffect(
        licenseKeyslist({ limit: 100, status: "granted" }),
      );

      let candidate:
        | { id: string; key: string; organization_id: string }
        | undefined;
      for (const lk of list.items) {
        const detail = await runEffect(licenseKeysget({ id: lk.id }));
        const remaining =
          detail.limit_activations === null
            ? Number.POSITIVE_INFINITY
            : detail.limit_activations - detail.activations.length;
        if (remaining > 0) {
          candidate = {
            id: detail.id,
            key: detail.key,
            organization_id: detail.organization_id,
          };
          break;
        }
      }

      if (candidate === undefined) {
        const error = await runEffect(
          licenseKeysdeactivate({
            key: "DOES-NOT-EXIST-0000-0000-0000-000000000000",
            organization_id: "00000000-0000-0000-0000-000000000000",
            activation_id: "00000000-0000-0000-0000-000000000000",
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("ResourceNotFound");
        return;
      }

      const activation = await runEffect(
        licenseKeysactivate({
          key: candidate.key,
          organization_id: candidate.organization_id,
          label: `distilled-polar-lkd-${testRunId}`,
        }),
      );

      const result = await runEffect(
        licenseKeysdeactivate({
          key: candidate.key,
          organization_id: candidate.organization_id,
          activation_id: activation.id,
        }),
      );
      expect(result).toBeUndefined();

      const error = await runEffect(
        licenseKeysdeactivate({
          key: candidate.key,
          organization_id: candidate.organization_id,
          activation_id: activation.id,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "returns NotFound for a non-existent activation",
    { timeout: 30_000 },
    async () => {
      const list = await runEffect(licenseKeyslist({ limit: 1 }));
      const orgId =
        list.items[0]?.organization_id ??
        "00000000-0000-0000-0000-000000000000";

      const error = await runEffect(
        licenseKeysdeactivate({
          key: "DOES-NOT-EXIST-0000-0000-0000-000000000000",
          organization_id: orgId,
          activation_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "rejects a malformed organization_id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        licenseKeysdeactivate({
          key: "any-key",
          organization_id: "not-a-valid-uuid",
          activation_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
