import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformListDomains } from "../src/operations/platform/PlatformListDomains";
import { runEffect, testRunId } from "./setup";

const FOREIGN_DOMAIN_CURSOR = `dmn_foreign_workspace_${testRunId}`;

describe("PlatformListDomains", () => {
  it("lists production domains in the authenticated workspace", async () => {
    await runEffect(
      Effect.gen(function* () {
        const result = yield* PlatformListDomains({});

        expect(typeof result.total_count).toBe("number");
        expect(result.total_count).toBeGreaterThanOrEqual(0);
        expect(Array.isArray(result.data)).toBe(true);
        for (const domain of result.data) {
          expect(domain.object).toBe("domain");
          expect(typeof domain.id).toBe("string");
          expect(typeof domain.name).toBe("string");
          expect(typeof domain.frontend_api_url).toBe("string");
          expect(["production", "development"]).toContain(
            domain.instance.environment_type,
          );
          // Default scope is production-only.
          expect(domain.instance.environment_type).toBe("production");
        }
      }),
    );
  });

  it("includes development domains when include_development is set", async () => {
    await runEffect(
      Effect.gen(function* () {
        const result = yield* PlatformListDomains({
          include_development: "true",
          limit: 50,
        });

        expect(typeof result.total_count).toBe("number");
        expect(Array.isArray(result.data)).toBe(true);
        for (const domain of result.data) {
          expect(["production", "development"]).toContain(
            domain.instance.environment_type,
          );
        }
      }),
    );
  });

  it("returns Forbidden when the pagination cursor references a domain outside the caller's workspace", async () => {
    await runEffect(
      Effect.gen(function* () {
        // `starting_after` cursors are domain IDs. Pointing it at an id
        // that does not belong to the authenticated workspace must not
        // leak data; Clerk responds with 403 Forbidden rather than
        // silently treating it as an empty page.
        const error = yield* PlatformListDomains({
          starting_after: FOREIGN_DOMAIN_CURSOR,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns UnprocessableEntity for a limit value outside the allowed range", async () => {
    await runEffect(
      Effect.gen(function* () {
        // Per the operation docs, `limit` must be in [1, 500]. A value
        // far above that bound is rejected as semantically invalid.
        const error = yield* PlatformListDomains({
          limit: 100_000,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("UnprocessableEntity");
      }),
    );
  });
});
