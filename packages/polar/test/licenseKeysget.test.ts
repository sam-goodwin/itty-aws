import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { licenseKeysget } from "../src/operations/licenseKeysget.ts";
import { licenseKeyslist } from "../src/operations/licenseKeyslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("licenseKeysget", () => {
  it(
    "gets the first license key returned by the list endpoint",
    { timeout: 30_000 },
    async () => {
      const list = await runEffect(licenseKeyslist({ limit: 1 }));
      const first = list.items[0];

      if (first === undefined) {
        const error = await runEffect(
          licenseKeysget({
            id: "00000000-0000-0000-0000-000000000000",
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("ResourceNotFound");
        return;
      }

      const result = await runEffect(licenseKeysget({ id: first.id }));
      expect(result.id).toBe(first.id);
      expect(typeof result.organization_id).toBe("string");
      expect(typeof result.customer_id).toBe("string");
      expect(typeof result.benefit_id).toBe("string");
      expect(typeof result.key).toBe("string");
      expect(typeof result.display_key).toBe("string");
      expect(result.status).toBe("granted");
      expect(typeof result.usage).toBe("number");
      expect(typeof result.validations).toBe("number");
      expect(Array.isArray(result.activations)).toBe(true);
      expect(typeof result.customer.id).toBe("string");
      expect(result.customer.type).toBe("individual");
    },
  );

  it(
    "returns NotFound for a non-existent license key id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        licenseKeysget({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "rejects a malformed license key id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        licenseKeysget({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
