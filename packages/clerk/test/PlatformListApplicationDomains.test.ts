import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listApplicationDomains as PlatformListApplicationDomains } from "../src/operations/platform/domains/listApplicationDomains";
import { listApplications as PlatformListApplications } from "../src/operations/platform/applications/listApplications";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_APP = `app_does_not_exist_${testRunId}`;

const pickApplication = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformListApplicationDomains",
      ),
    );
  }
  return app;
});

describe("PlatformListApplicationDomains", () => {
  it("lists domains for an existing application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const app = yield* pickApplication;

        const result = yield* PlatformListApplicationDomains({
          applicationID: app.application_id,
        });

        expect(Array.isArray(result.data)).toBe(true);
        expect(typeof result.total_count).toBe("number");
        expect(result.total_count).toBeGreaterThanOrEqual(0);

        for (const domain of result.data) {
          expect(domain.object).toBe("domain");
          expect(typeof domain.id).toBe("string");
          expect(typeof domain.name).toBe("string");
          expect(typeof domain.frontend_api_url).toBe("string");
          expect(typeof domain.development_origin).toBe("string");
          expect(typeof domain.created_at).toBe("string");
          expect(typeof domain.updated_at).toBe("string");

          if (domain.application) {
            expect(domain.application.object).toBe("application");
          }
          if (domain.instance) {
            expect(domain.instance.object).toBe("instance");
            expect(["production", "development"]).toContain(
              domain.instance.environment_type,
            );
          }
        }
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformListApplicationDomains({
          applicationID: NON_EXISTENT_FOREIGN_APP,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for an application id that does not exist", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformListApplicationDomains({
          applicationID: NON_EXISTENT_APP,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
