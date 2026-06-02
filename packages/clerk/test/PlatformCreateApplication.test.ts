import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformCreateApplication } from "../src/operations/platform/PlatformCreateApplication";
import { PlatformDeleteApplication } from "../src/operations/platform/PlatformDeleteApplication";
import { runEffect, testRunId } from "./setup";

const appName = (suffix: string): string =>
  `distilled-clerk-createapp-${suffix}-${testRunId}`;

describe("PlatformCreateApplication", () => {
  it("creates a new application and returns its details", async () => {
    await runEffect(
      Effect.gen(function* () {
        const created = yield* PlatformCreateApplication({
          name: appName("happy"),
        });

        yield* Effect.gen(function* () {
          expect(typeof created.application_id).toBe("string");
          expect(created.application_id.length).toBeGreaterThan(0);
          expect(created.name).toBe(appName("happy"));
          expect(Array.isArray(created.instances)).toBe(true);
          expect(created.instances.length).toBeGreaterThan(0);
          for (const instance of created.instances) {
            expect(typeof instance.instance_id).toBe("string");
            expect(["development", "production"]).toContain(
              instance.environment_type,
            );
          }
        }).pipe(
          Effect.ensuring(
            PlatformDeleteApplication({
              applicationID: created.application_id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("returns BadRequest when the name is empty", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformCreateApplication({
          name: "",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns UnprocessableEntity for an invalid environment_types value", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformCreateApplication({
          name: appName("unproc"),
          // The API only accepts "development" and "production" here;
          // any other token is a semantically invalid enum value.
          environment_types: ["not_a_real_environment"],
        }).pipe(Effect.flip);

        expect(error._tag).toBe("UnprocessableEntity");
      }),
    );
  });

  it("returns Forbidden when the template references a resource the caller cannot access", async () => {
    await runEffect(
      Effect.gen(function* () {
        // Templates are workspace-scoped. Passing a template id that
        // belongs to a different workspace must fail authorization
        // rather than fall through to a 404 or 422.
        const error = yield* PlatformCreateApplication({
          name: appName("forbidden"),
          template: `tmpl_2ForeignWorkspaceTemplate${testRunId}`,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });
});
