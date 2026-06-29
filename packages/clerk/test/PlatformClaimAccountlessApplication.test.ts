import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { claimAccountlessApplication as PlatformClaimAccountlessApplication } from "../src/operations/platform/applications/claimAccountlessApplication";
import { deleteApplication as PlatformDeleteApplication } from "../src/operations/platform/applications/deleteApplication";
import { runEffect, testRunId } from "./setup";

const applicationName = (suffix: string): string =>
  `distilled-clerk-accountless-${suffix}-${testRunId}`;

// Accountless applications are created by Clerk framework integrations
// (e.g. the Next.js/React middleware in keyless mode). There is no
// platform API to create one, so a valid single-use claim token must be
// supplied via the CLERK_ACCOUNTLESS_CLAIM_TOKEN environment variable
// for the happy path to run. Without it, the happy path test fails loudly.
const CLAIM_TOKEN: string | undefined =
  process.env.CLERK_ACCOUNTLESS_CLAIM_TOKEN;

const NON_EXISTENT_TOKEN = `accto_does_not_exist_${testRunId}`;

describe("PlatformClaimAccountlessApplication", () => {
  it("claims an accountless application using a valid single-use token", async () => {
    await runEffect(
      Effect.gen(function* () {
        if (!CLAIM_TOKEN) {
          return yield* Effect.die(
            new Error(
              "CLERK_ACCOUNTLESS_CLAIM_TOKEN env var is required for the PlatformClaimAccountlessApplication happy path",
            ),
          );
        }

        const claimed = yield* PlatformClaimAccountlessApplication({
          token: CLAIM_TOKEN,
          name: applicationName("happy"),
        });

        yield* Effect.gen(function* () {
          expect(typeof claimed.application_id).toBe("string");
          expect(claimed.application_id.length).toBeGreaterThan(0);
          expect(claimed.name).toBe(applicationName("happy"));
          expect(Array.isArray(claimed.instances)).toBe(true);
          expect(claimed.instances.length).toBeGreaterThan(0);
          for (const instance of claimed.instances) {
            expect(typeof instance.instance_id).toBe("string");
            expect(["development", "production"]).toContain(
              instance.environment_type,
            );
          }
        }).pipe(
          // Once the token is consumed the application belongs to the
          // workspace and must be cleaned up so subsequent test runs do
          // not accumulate dangling applications.
          Effect.ensuring(
            PlatformDeleteApplication({
              applicationID: claimed.application_id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("returns BadRequest when the token is empty", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformClaimAccountlessApplication({
          token: "",
          name: applicationName("bad-request"),
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns NotFound for a token that does not match any accountless application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformClaimAccountlessApplication({
          token: NON_EXISTENT_TOKEN,
          name: applicationName("not-found"),
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });

  it("returns Forbidden when the caller is not allowed to claim the accountless application", async () => {
    await runEffect(
      Effect.gen(function* () {
        // A token from another workspace cannot be claimed by this caller.
        // We deliberately use a value that is well-formed enough to pass
        // initial validation but does not belong to the authenticated
        // principal, so the API responds with 403 Forbidden.
        const error = yield* PlatformClaimAccountlessApplication({
          token: `accto_foreign_workspace_${testRunId}`,
          name: applicationName("forbidden"),
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns UnprocessableEntity when the name is empty", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformClaimAccountlessApplication({
          token: NON_EXISTENT_TOKEN,
          name: "",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("UnprocessableEntity");
      }),
    );
  });
});
