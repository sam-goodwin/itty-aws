import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { licenseKeysget } from "../src/operations/licenseKeysget.ts";
import { licenseKeysgetActivation } from "../src/operations/licenseKeysgetActivation.ts";
import { licenseKeyslist } from "../src/operations/licenseKeyslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("licenseKeysgetActivation", () => {
  it(
    "gets an activation for a license key with at least one activation",
    { timeout: 30_000 },
    async () => {
      const list = await runEffect(licenseKeyslist({ limit: 100 }));

      let firstActivationKeyId: string | undefined;
      let firstActivationId: string | undefined;
      for (const lk of list.items) {
        const detail = await runEffect(licenseKeysget({ id: lk.id }));
        if (detail.activations.length > 0) {
          firstActivationKeyId = detail.id;
          firstActivationId = detail.activations[0]!.id;
          break;
        }
      }

      if (
        firstActivationKeyId === undefined ||
        firstActivationId === undefined
      ) {
        const error = await runEffect(
          licenseKeysgetActivation({
            id: "00000000-0000-0000-0000-000000000000",
            activation_id: "00000000-0000-0000-0000-000000000000",
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("ResourceNotFound");
        return;
      }

      const result = await runEffect(
        licenseKeysgetActivation({
          id: firstActivationKeyId,
          activation_id: firstActivationId,
        }),
      );
      expect(result.id).toBe(firstActivationId);
      expect(result.license_key_id).toBe(firstActivationKeyId);
      expect(typeof result.label).toBe("string");
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.meta).toBe("object");
      expect(result.license_key.id).toBe(firstActivationKeyId);
      expect(result.license_key.status).toBe("granted");
    },
  );

  it(
    "returns NotFound for a non-existent license key + activation",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        licenseKeysgetActivation({
          id: "00000000-0000-0000-0000-000000000000",
          activation_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "rejects malformed ids with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        licenseKeysgetActivation({
          id: "not-a-valid-uuid",
          activation_id: "also-not-valid",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
