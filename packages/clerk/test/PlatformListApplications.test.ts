import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformListApplications } from "../src/operations/platform/PlatformListApplications";
import { runEffect } from "./setup";

describe("PlatformListApplications", () => {
  it("lists applications in the authenticated workspace", async () => {
    await runEffect(
      Effect.gen(function* () {
        const apps = yield* PlatformListApplications({});

        expect(Array.isArray(apps)).toBe(true);
        for (const app of apps) {
          expect(typeof app.application_id).toBe("string");
          expect(app.application_id.length).toBeGreaterThan(0);
          expect(typeof app.name).toBe("string");
          expect(Array.isArray(app.instances)).toBe(true);
          for (const instance of app.instances) {
            expect(typeof instance.instance_id).toBe("string");
            expect(["development", "production"]).toContain(
              instance.environment_type,
            );
          }
        }
      }),
    );
  });

  it("returns BadRequest for a malformed include_secret_keys value", async () => {
    await runEffect(
      Effect.gen(function* () {
        // The schema types `include_secret_keys` as a boolean, but the
        // wire format is a query string. Sending a non-boolean token
        // bypasses Effect's schema (via cast) and lets the server reject
        // the raw query value with 400.
        const error = yield* PlatformListApplications({
          include_secret_keys: "not-a-boolean" as unknown as boolean,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns Forbidden when requesting secret keys without the required scope", async () => {
    await runEffect(
      Effect.gen(function* () {
        // `include_secret_keys: true` requires a scope above the default
        // applications:read. Calling it with a token that lacks the
        // elevated scope yields 403 Forbidden.
        const error = yield* PlatformListApplications({
          include_secret_keys: true,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });
});
