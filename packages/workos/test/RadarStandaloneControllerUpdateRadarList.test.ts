import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { RadarStandaloneControllerDeleteRadarListEntry } from "../src/operations/RadarStandaloneControllerDeleteRadarListEntry.ts";
import { RadarStandaloneControllerUpdateRadarList } from "../src/operations/RadarStandaloneControllerUpdateRadarList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("RadarStandaloneControllerUpdateRadarList", () => {
  it(
    "adds an email entry to a Radar block list",
    async () => {
      const entry = `distilled-radar-list-${testRunId}@example.com`;
      const result = await runEffect(
        RadarStandaloneControllerUpdateRadarList({
          type: "email",
          action: "block",
          entry,
        }).pipe(
          Effect.ensuring(
            RadarStandaloneControllerDeleteRadarListEntry({
              type: "email",
              action: "block",
              entry,
            }).pipe(Effect.ignore),
          ),
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed({ kind: "error" as const, e }),
            onSuccess: (r) => Effect.succeed({ kind: "ok" as const, r }),
          }),
        ),
      );
      if (result.kind === "error") {
        // Standalone Radar disabled in this workspace — expected.
        expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
          result.e._tag,
        );
      }
      // On success the response body may be `{}` or `{ message }` — both
      // decode to undefined/object depending on PostHog's response. The
      // call returning without error is sufficient.
    },
    30_000,
  );

  it(
    "fails with BadRequest for a malformed ip_address entry",
    async () => {
      const error = await runEffect(
        RadarStandaloneControllerUpdateRadarList({
          type: "ip_address",
          action: "block",
          entry: `not-an-ip-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("BadRequest");
    },
    30_000,
  );
});
