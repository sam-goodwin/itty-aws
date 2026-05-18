import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, Unauthorized } from "../src/errors.ts";
import { submitReport } from "../src/operations/submitReport.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
const OWNED_USER_ID = process.env.MODRINTH_TEST_OWNED_USER_ID;
// POST /report files a real moderation report against a real Modrinth resource
// — there is no "sandbox" report and the report goes straight onto the
// moderator queue. The happy path is therefore double-gated: callers must
// explicitly set MODRINTH_TEST_ALLOW_SUBMIT_REPORT=1 in addition to providing
// an owned user id, and the report targets the auth'd user themselves
// (item_type=user, item_id=OWNED_USER_ID) with a body that flags it as a
// distilled SDK test so moderators can dismiss it quickly. If the opt-in
// variable isn't set the happy path skips.
const ALLOW_SUBMIT = process.env.MODRINTH_TEST_ALLOW_SUBMIT_REPORT === "1";
const SHOULD_RUN_HAPPY = !!OWNED_USER_ID && ALLOW_SUBMIT;

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

describe("submitReport", () => {
  it.skipIf(!SHOULD_RUN_HAPPY)(
    "files a self-report and returns the persisted report",
    async () => {
      // Self-report the auth'd user with a clear "distilled test" body so
      // moderators can identify and dismiss the report quickly. Modrinth
      // returns the persisted report including its server-issued id and
      // thread_id. There is no API to delete an open report, so this is
      // intentionally low-frequency and gated on MODRINTH_TEST_ALLOW_SUBMIT_REPORT.
      const id = OWNED_USER_ID as string;
      const report = await runEffect(
        submitReport({
          report_type: "spam",
          item_id: id,
          item_type: "user",
          body: `distilled SDK test report — please ignore (run ${testRunId})`,
        }),
      );

      expect(report.report_type).toBe("spam");
      expect(report.item_id).toBe(id);
      expect(report.item_type).toBe("user");
      expect(typeof report.body).toBe("string");
      expect(typeof report.reporter).toBe("string");
      expect(typeof report.created).toBe("string");
      expect(report.closed).toBe(false);
      expect(typeof report.thread_id).toBe("string");
      if (report.id !== undefined) {
        expect(typeof report.id).toBe("string");
      }
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns BadRequest for an item_id that does not match a project",
    async () => {
      // Modrinth validates that `item_id` resolves to a resource of
      // `item_type`. A syntactically-valid base62-shaped id that does not
      // correspond to any project causes a 400 invalid_input response (the
      // moderation pipeline cannot file a report against a phantom resource),
      // which the SDK maps to the typed `BadRequest`.
      const phantomId = `zz${testRunId}`;
      const error = await runEffect(
        submitReport({
          report_type: "spam",
          item_id: phantomId,
          item_type: "project",
          body: `distilled SDK BadRequest probe — phantom id (run ${testRunId})`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("BadRequest");
      expect(error).toBeInstanceOf(BadRequest);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // POST /report requires authentication — moderation reports must be
    // attributable to a real reporter. Modrinth runs the auth check before
    // any payload validation, so any well-formed body yields 401 with no
    // API key, mapped by the SDK to the typed `Unauthorized`.
    const error = await Effect.runPromise(
      submitReport({
        report_type: "spam",
        item_id: "00000000",
        item_type: "project",
        body: `distilled SDK Unauthorized probe (run ${testRunId})`,
      }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
