import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandSsoControllerDeviceAuthorization } from "../src/operations/UserlandSsoControllerDeviceAuthorization.ts";
import { runEffect, testRunId } from "./setup.ts";

const clientId = process.env.WORKOS_CLIENT_ID ?? `client_test_${testRunId}`;

describe("UserlandSsoControllerDeviceAuthorization", () => {
  it(
    "issues a device code and verification URL",
    async () => {
      const result = await runEffect(
        UserlandSsoControllerDeviceAuthorization({
          client_id: clientId,
        }),
      );
      expect(result).toBeDefined();
      expect(typeof result.device_code).toBe("string");
      expect(result.device_code.length).toBeGreaterThan(0);
      expect(typeof result.user_code).toBe("string");
      expect(result.user_code.length).toBeGreaterThan(0);
      expect(typeof result.verification_uri).toBe("string");
      expect(result.verification_uri.startsWith("http")).toBe(true);
      expect(typeof result.expires_in).toBe("number");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when client_id is empty",
    async () => {
      const error = await runEffect(
        UserlandSsoControllerDeviceAuthorization({
          client_id: "",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when client_id belongs to another environment",
    async () => {
      const error = await runEffect(
        UserlandSsoControllerDeviceAuthorization({
          client_id: "client_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );
      expect(["BadRequest", "Forbidden"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
