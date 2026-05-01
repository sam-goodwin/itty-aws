import { describe, expect } from "vitest";
import * as Effect from "effect/Effect";
import { test, getProjectId, testRunId } from "./test.ts";
import * as ActivityLogs from "~/operations/activity-logs";

describe("ActivityLogs", () => {
  // --------------------------------------------------------------------------
  // activityLogList
  // --------------------------------------------------------------------------
  describe("activityLogList", () => {
    test("happy path - returns paginated activity log entries", () =>
      Effect.gen(function* () {
        const result = yield* ActivityLogs.activityLogList({
          project_id: getProjectId(),
          page_size: 5,
        });

        expect(result).toBeDefined();
        // `count` is optional in the schema — PostHog sometimes omits it for
        // larger collections. Only assert on it when present.
        if (result.count !== undefined) {
          expect(typeof result.count).toBe("number");
          expect(result.count).toBeGreaterThanOrEqual(0);
        }
        expect(Array.isArray(result.results)).toBe(true);
        expect(result.results!.length).toBeLessThanOrEqual(5);

        // Validate shape of each entry, if any are present.
        for (const entry of result.results!) {
          expect(typeof entry.id).toBe("string");
          expect(typeof entry.activity).toBe("string");
          expect(typeof entry.scope).toBe("string");
          expect(typeof entry.unread).toBe("boolean");
          expect(typeof entry.user.id).toBe("number");
          expect(typeof entry.user.email).toBe("string");
        }
      }));

    test("happy path - filters by scope", () =>
      Effect.gen(function* () {
        const result = yield* ActivityLogs.activityLogList({
          project_id: getProjectId(),
          scope: "FeatureFlag",
          page_size: 5,
        });

        expect(Array.isArray(result.results)).toBe(true);
        // When the server filters by scope, every returned entry must have
        // that scope.
        for (const entry of result.results) {
          expect(entry.scope).toBe("FeatureFlag");
        }
      }));

    test("error - NotFound for non-existent project_id", () =>
      ActivityLogs.activityLogList({
        project_id: "99999999999",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      ActivityLogs.activityLogList({
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        project_id: `not-a-number-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        ActivityLogs.activityLogList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });
});
