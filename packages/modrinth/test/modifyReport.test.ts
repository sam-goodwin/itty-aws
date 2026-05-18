import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, NotFound, Unauthorized } from "../src/errors.ts";
import { getOpenReports } from "../src/operations/getOpenReports.ts";
import { getReport } from "../src/operations/getReport.ts";
import { modifyReport } from "../src/operations/modifyReport.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
// PATCH /report/{id} mutates a real moderation report. Even though the
// reporter is allowed to edit the body of their own report, we keep the
// happy path opt-in (matches the submitReport.test.ts gating) so CI runs
// without the env var don't poke at live moderation state.
const ALLOW_MODIFY = process.env.MODRINTH_TEST_ALLOW_MODIFY_REPORT === "1";
const SHOULD_RUN_HAPPY = HAS_API_KEY && ALLOW_MODIFY;

// Layer with no API key so we can deterministically trigger 401 even when
// MODRINTH_API_KEY is set in the environment.
const NoAuthLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: undefined,
    apiBaseUrl: DEFAULT_API_BASE_URL,
    userAgent: DEFAULT_USER_AGENT,
  }),
  FetchHttpClient.layer,
);

describe("modifyReport", () => {
  it.skipIf(!SHOULD_RUN_HAPPY)(
    "updates the body of an existing report and restores it on cleanup",
    async () => {
      // Bootstrap: list the auth'd user's open reports. If the user has
      // no open reports we cannot exercise the happy path round-trip and
      // the test returns early — the listing call still confirms auth.
      const open = await runEffect(getOpenReports({}));
      const seed = open.find((r) => r.id !== undefined && !r.closed);
      if (!seed || !seed.id) {
        return;
      }
      const reportId = seed.id;
      const originalBody = seed.body;
      const newBody = `${originalBody}\n\n[distilled SDK modifyReport probe — run ${testRunId}]`;

      await runEffect(
        modifyReport({ id: reportId, body: newBody }).pipe(
          Effect.ensuring(
            // Always restore the original body, even if the assertion below
            // throws. Effect.ignore swallows any failure of the restore call
            // itself so cleanup never masks the real test result.
            modifyReport({ id: reportId, body: originalBody }).pipe(
              Effect.ignore,
            ),
          ),
        ),
      );

      // PATCH returns 204/Void — verify the mutation took effect via GET.
      const after = await runEffect(getReport({ id: reportId }));
      expect(after.body).toBe(newBody);
    },
    30_000,
  );

  it("returns BadRequest for an id that is not valid base62", async () => {
    // Modrinth ids are base62-encoded; the path validator rejects ids
    // containing non-base62 characters (e.g. `!`) with a
    // `400 invalid_input` before any auth or DB lookup, so the typed
    // BadRequest is reachable without an API key.
    const error = await runEffect(
      modifyReport({ id: `zz!${testRunId}`, body: "noop" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a base62-shaped id that does not exist",
    async () => {
      // With auth and a base62-shaped id Modrinth resolves the route,
      // looks up the report, and returns 404 when nothing matches. We
      // pad the testRunId so the path validator accepts it and the
      // lookup actually fires.
      const id = `zz${testRunId.slice(0, 6)}`;
      const error = await runEffect(
        modifyReport({ id, body: "noop" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // PATCH /report/{id} requires auth. With a base62-shaped id the path
    // validator passes, the auth check fires next, and Modrinth returns
    // 401 without an API key.
    const id = `zz${testRunId.slice(0, 6)}`;
    const error = await Effect.runPromise(
      modifyReport({ id, body: "noop" }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
