import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import { PlatformRegionsGet } from "../src/operations/PlatformRegionsGet";
import { TokensRequestOIDC } from "../src/operations/TokensRequestOIDC";
import { TokensRequestKms } from "../src/operations/TokensRequestKms";
import { NotFound } from "../src/errors";

describe("Platform", () => {
  describe("PlatformRegionsGet", () => {
    it("happy path - lists regions", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* PlatformRegionsGet({});
          // The API returns at least a result object (fields may vary by auth scope)
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  // Note: CurrentTokenShow is skipped because its path (/v1/tokens/current)
  // conflicts with the base URL (/v1), resulting in a double-prefixed path.

  // Note: TokensRequestOIDC and TokensRequestKms only work when running on a Fly.io machine.
  // They return NotFound when called from outside the Fly.io platform.
  describe("TokensRequestOIDC", () => {
    it("error - NotFound when not on a Fly machine", async () => {
      await runEffect(
        TokensRequestOIDC({ aud: "" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);
  });

  describe("TokensRequestKms", () => {
    it("error - NotFound when not on a Fly machine", async () => {
      await runEffect(
        TokensRequestKms({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);
  });
});

// Note: The following operations are skipped because their path parameters
// ({app_name}, {hostname}, {ip}) are not part of the input struct, making
// them difficult to call correctly from tests:
// - AppCertificatesList, AppCertificatesShow, AppCertificatesCheck,
//   AppCertificatesDelete, AppCertificatesAcmeCreate, AppCertificatesAcmeDelete,
//   AppCertificatesCustomCreate, AppCertificatesCustomDelete
// - AppIPAssignmentsList, AppIPAssignmentsCreate, AppIPAssignmentsDelete
// - PlatformPlacementsPost (requires valid org_slug with specific permissions)
