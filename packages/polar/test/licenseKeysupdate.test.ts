import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { licenseKeyslist } from "../src/operations/licenseKeyslist.ts";
import { licenseKeysupdate } from "../src/operations/licenseKeysupdate.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("licenseKeysupdate", () => {
  it(
    "updates the first license key returned by the list endpoint",
    { timeout: 30_000 },
    async () => {
      const list = await runEffect(licenseKeyslist({ limit: 1 }));
      const first = list.items[0];

      if (first === undefined) {
        const error = await runEffect(
          licenseKeysupdate({
            id: "00000000-0000-0000-0000-000000000000",
            status: "granted",
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("ResourceNotFound");
        return;
      }

      const result = await runEffect(
        licenseKeysupdate({
          id: first.id,
          status: first.status,
        }),
      );
      expect(result.id).toBe(first.id);
      expect(result.status).toBe("granted");
      expect(typeof result.organization_id).toBe("string");
      expect(typeof result.customer_id).toBe("string");
      expect(typeof result.benefit_id).toBe("string");
      expect(typeof result.key).toBe("string");
      expect(typeof result.usage).toBe("number");
      expect(typeof result.validations).toBe("number");
    },
  );

  it(
    "returns NotFound for a non-existent license key id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        licenseKeysupdate({
          id: "00000000-0000-0000-0000-000000000000",
          status: "granted",
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
        licenseKeysupdate({
          id: "not-a-valid-uuid",
          status: "granted",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
