import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { SsoControllerJsonWebKeySet } from "../src/operations/SsoControllerJsonWebKeySet.ts";
import { runEffect, testRunId } from "./setup.ts";

const clientId = process.env.WORKOS_CLIENT_ID ?? `client_test_${testRunId}`;

describe("SsoControllerJsonWebKeySet", () => {
  it(
    "returns the JSON Web Key Set for a client",
    async () => {
      const result = await runEffect(
        SsoControllerJsonWebKeySet({ clientId }),
      );
      expect(result).toBeDefined();
      expect(Array.isArray(result.keys)).toBe(true);
      for (const key of result.keys) {
        expect(typeof key.alg).toBe("string");
        expect(typeof key.kty).toBe("string");
        expect(typeof key.use).toBe("string");
        expect(Array.isArray(key.x5c)).toBe(true);
        expect(typeof key.n).toBe("string");
        expect(typeof key.e).toBe("string");
        expect(typeof key.kid).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent client id",
    async () => {
      const error = await runEffect(
        SsoControllerJsonWebKeySet({
          clientId: `client_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
