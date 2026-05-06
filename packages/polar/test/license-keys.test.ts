import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { licenseKeysactivate } from "../src/operations/licenseKeysactivate.ts";
import { licenseKeysdeactivate } from "../src/operations/licenseKeysdeactivate.ts";
import { licenseKeysget } from "../src/operations/licenseKeysget.ts";
import { licenseKeysgetActivation } from "../src/operations/licenseKeysgetActivation.ts";
import { licenseKeyslist } from "../src/operations/licenseKeyslist.ts";
import { licenseKeysupdate } from "../src/operations/licenseKeysupdate.ts";
import { licenseKeysvalidate } from "../src/operations/licenseKeysvalidate.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;
const missingId = "00000000-0000-4000-8000-000000000000";

describeLive("License keys", () => {
  it("lists license keys", { timeout: 30_000 }, async () => {
    const listed = await runEffect(
      licenseKeyslist({ organization_id: organizationId, limit: 10 }),
    );

    expect(Array.isArray(listed.items)).toBe(true);
  });

  it(
    "maps missing license key operations to typed errors",
    { timeout: 60_000 },
    async () => {
      const key = `distilled-license-${testRunId}`;
      const [
        getError,
        updateError,
        validateError,
        activateError,
        deactivateError,
        activationError,
      ] = await Promise.all([
        runEffect(licenseKeysget({ id: missingId }).pipe(Effect.flip)),
        runEffect(
          licenseKeysupdate({
            id: missingId,
            status: "disabled",
          }).pipe(Effect.flip),
        ),
        runEffect(
          licenseKeysvalidate({
            key,
            organization_id: organizationId ?? missingId,
          }).pipe(Effect.flip),
        ),
        runEffect(
          licenseKeysactivate({
            key,
            organization_id: organizationId ?? missingId,
            label: `distilled-${testRunId}`,
          }).pipe(Effect.flip),
        ),
        runEffect(
          licenseKeysdeactivate({
            key,
            organization_id: organizationId ?? missingId,
            activation_id: missingId,
          }).pipe(Effect.flip),
        ),
        runEffect(
          licenseKeysgetActivation({
            id: missingId,
            activation_id: missingId,
          }).pipe(Effect.flip),
        ),
      ]);

      expect(getError._tag).toBe("NotFound");
      expect(updateError._tag).toBe("NotFound");
      expect(validateError._tag).toBe("NotFound");
      expect(activateError._tag).toBe("NotFound");
      expect(deactivateError._tag).toBe("NotFound");
      expect(activationError._tag).toBe("NotFound");
    },
  );
});
