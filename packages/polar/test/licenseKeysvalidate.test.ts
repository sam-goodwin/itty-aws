import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { licenseKeyslist } from "../src/operations/licenseKeyslist.ts";
import { licenseKeysvalidate } from "../src/operations/licenseKeysvalidate.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("licenseKeysvalidate", () => {
  it("validates an existing license key", { timeout: 30_000 }, async () => {
    const list = await runEffect(
      licenseKeyslist({ limit: 100, status: "granted" }),
    );
    const first = list.items[0];

    if (first === undefined) {
      const error = await runEffect(
        licenseKeysvalidate({
          key: "DOES-NOT-EXIST-0000-0000-0000-000000000000",
          organization_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
      return;
    }

    const result = await runEffect(
      licenseKeysvalidate({
        key: first.key,
        organization_id: first.organization_id,
      }),
    );
    expect(result.id).toBe(first.id);
    expect(result.organization_id).toBe(first.organization_id);
    expect(result.customer_id).toBe(first.customer_id);
    expect(result.benefit_id).toBe(first.benefit_id);
    expect(result.key).toBe(first.key);
    expect(result.status).toBe("granted");
    expect(typeof result.usage).toBe("number");
    expect(typeof result.validations).toBe("number");
  });

  it(
    "returns NotFound for a non-existent license key",
    { timeout: 30_000 },
    async () => {
      const list = await runEffect(licenseKeyslist({ limit: 1 }));
      const orgId =
        list.items[0]?.organization_id ??
        "00000000-0000-0000-0000-000000000000";

      const error = await runEffect(
        licenseKeysvalidate({
          key: "DOES-NOT-EXIST-0000-0000-0000-000000000000",
          organization_id: orgId,
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
        licenseKeysvalidate({
          key: "any-key",
          organization_id: "not-a-valid-uuid",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
