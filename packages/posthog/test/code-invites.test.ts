import { describe, expect } from "vitest";
import * as Effect from "effect/Effect";
import { test, testRunId } from "./test.ts";
import { Credentials, DEFAULT_API_BASE_URL } from "~/credentials";
import * as CodeInvites from "~/operations/code-invites";

describe("CodeInvites", () => {
  // --------------------------------------------------------------------------
  // codeInvitesCheckAccessRetrieve
  // --------------------------------------------------------------------------
  describe("codeInvitesCheckAccessRetrieve", () => {
    // GET checks whether the authenticated user has access to PostHog Code.
    // Takes no parameters — the answer depends entirely on the credentials
    // attached by the SDK layer.
    //
    // The happy path is opt-in via POSTHOG_HAS_CODE_ACCESS=1 because the
    // base API key may not have Code access enabled. Output schema is
    // Schema.Void — successful response decodes to `undefined`.
    //
    // The Forbidden path needs a *different* API key — one that is valid
    // (so the request authenticates) but lacks Code access. We accept it
    // via POSTHOG_NO_CODE_ACCESS_API_KEY and override the Credentials
    // service for that single test. Without that env var the test is
    // skipped.

    test.skipIf(!process.env.POSTHOG_HAS_CODE_ACCESS)(
      "happy path - returns void when the user has Code access",
      () =>
        Effect.gen(function* () {
          const result = yield* CodeInvites.codeInvitesCheckAccessRetrieve({});

          // Output schema is Schema.Void — successful response decodes to
          // `undefined`. Assert the call succeeded and returned void.
          expect(result, `run ${testRunId}`).toBeUndefined();
        }),
    );

    test.skipIf(!process.env.POSTHOG_NO_CODE_ACCESS_API_KEY)(
      "error - Forbidden when the API key lacks Code access",
      () =>
        CodeInvites.codeInvitesCheckAccessRetrieve({}).pipe(
          Effect.provideService(Credentials, {
            apiKey: process.env.POSTHOG_NO_CODE_ACCESS_API_KEY!,
            apiBaseUrl: process.env.POSTHOG_HOST ?? DEFAULT_API_BASE_URL,
          }),
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // codeInvitesRedeemCreate
  // --------------------------------------------------------------------------
  describe("codeInvitesRedeemCreate", () => {
    // POST redeems a one-time PostHog Code invite code, granting the
    // authenticated user Code access. The happy path is opt-in via
    // POSTHOG_CODE_INVITE_CODE because invite codes are single-use — once
    // redeemed they cannot be reused — so we only run it when the operator
    // has provisioned a fresh code dedicated to this test run.
    //
    // Output schema is Schema.Void — successful response decodes to
    // `undefined`.
    //
    // BadRequest is triggered by sending an obviously-invalid code (empty
    // string or non-existent token). Forbidden requires a key that lacks
    // permission to redeem invites; we override Credentials with
    // POSTHOG_NO_CODE_ACCESS_API_KEY when present, otherwise the test is
    // skipped.

    test.skipIf(!process.env.POSTHOG_CODE_INVITE_CODE)(
      "happy path - redeems a PostHog Code invite",
      () =>
        Effect.gen(function* () {
          const result = yield* CodeInvites.codeInvitesRedeemCreate({
            code: process.env.POSTHOG_CODE_INVITE_CODE!,
          });

          // Output schema is Schema.Void — successful response decodes to
          // `undefined`. Assert the call succeeded and returned void.
          expect(result, `run ${testRunId}`).toBeUndefined();
        }),
    );

    test("error - BadRequest for an empty invite code", () =>
      CodeInvites.codeInvitesRedeemCreate({
        code: "",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test("error - BadRequest for an unknown invite code", () =>
      CodeInvites.codeInvitesRedeemCreate({
        code: `not-a-real-code-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_NO_CODE_ACCESS_API_KEY)(
      "error - Forbidden when the API key cannot redeem invites",
      () =>
        CodeInvites.codeInvitesRedeemCreate({
          code: `not-a-real-code-${testRunId}`,
        }).pipe(
          Effect.provideService(Credentials, {
            apiKey: process.env.POSTHOG_NO_CODE_ACCESS_API_KEY!,
            apiBaseUrl: process.env.POSTHOG_HOST ?? DEFAULT_API_BASE_URL,
          }),
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });
});
