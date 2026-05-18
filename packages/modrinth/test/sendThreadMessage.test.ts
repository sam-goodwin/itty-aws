import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, NotFound, Unauthorized } from "../src/errors.ts";
import { deleteThreadMessage } from "../src/operations/deleteThreadMessage.ts";
import { getOpenReports } from "../src/operations/getOpenReports.ts";
import { sendThreadMessage } from "../src/operations/sendThreadMessage.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
// POST /thread/{id} writes a real, moderator-visible message into a live
// Modrinth thread. Even though we self-clean via deleteThreadMessage,
// keep the happy path opt-in (mirrors submitReport.test.ts gating) so CI
// runs without the env var don't poke at live moderation state.
const ALLOW_SEND = process.env.MODRINTH_TEST_ALLOW_SEND_THREAD_MESSAGE === "1";
const SHOULD_RUN_HAPPY = HAS_API_KEY && ALLOW_SEND;

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

describe("sendThreadMessage", () => {
  it.skipIf(!SHOULD_RUN_HAPPY)(
    "appends a text message to an existing thread and cleans it up",
    async () => {
      // Bootstrap: list the auth'd user's open reports and post into the
      // first report's thread. If the queue is empty we cannot exercise
      // the round-trip and return early — the listing call still
      // confirms auth.
      const open = await runEffect(getOpenReports({}));
      const seed = open.find((r) => typeof r.thread_id === "string");
      if (!seed) {
        return;
      }
      const threadId = seed.thread_id;
      const messageBody = `distilled SDK sendThreadMessage probe — please ignore (run ${testRunId})`;

      const updated = await runEffect(
        sendThreadMessage({
          id: threadId,
          type: "text",
          body: messageBody,
        }),
      );

      // The response is the updated thread including all messages. Locate
      // the message we just posted by its body, then delete it via
      // ensuring-style cleanup so the moderator queue isn't littered.
      expect(updated.id).toBe(threadId);
      const posted = updated.messages.find(
        (m) => m.body.type === "text" && m.body.body === messageBody,
      );
      expect(posted).toBeDefined();
      const postedId = posted!.id;

      try {
        expect(typeof postedId).toBe("string");
        expect(["project", "report", "direct_message"]).toContain(updated.type);
        expect(Array.isArray(updated.members)).toBe(true);
      } finally {
        // Always clean up the message we posted, even if the assertions
        // above throw. Effect.ignore swallows any failure of the delete
        // call itself so cleanup never masks the real test result.
        await runEffect(
          deleteThreadMessage({ id: postedId }).pipe(Effect.ignore),
        );
      }
    },
    30_000,
  );

  it("returns BadRequest for an id that is not valid base62", async () => {
    // Modrinth ids are base62-encoded; the path validator rejects ids
    // containing non-base62 characters (e.g. `!`) with a
    // `400 invalid_input` before any auth or DB lookup, so the typed
    // BadRequest is reachable without an API key.
    const error = await runEffect(
      sendThreadMessage({
        id: `zz!${testRunId}`,
        type: "text",
        body: "noop",
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a base62-shaped id that does not exist",
    async () => {
      // With auth and a base62-shaped id Modrinth resolves the route,
      // looks up the thread, and returns 404 when nothing matches. We
      // pad the testRunId so the path validator accepts it and the
      // lookup actually fires.
      const id = `zz${testRunId.slice(0, 6)}`;
      const error = await runEffect(
        sendThreadMessage({
          id,
          type: "text",
          body: `distilled SDK NotFound probe (run ${testRunId})`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // POST /thread/{id} requires auth. With a base62-shaped id the path
    // validator passes, the auth check fires next, and Modrinth returns
    // 401 without an API key.
    const id = `zz${testRunId.slice(0, 6)}`;
    const error = await Effect.runPromise(
      sendThreadMessage({
        id,
        type: "text",
        body: `distilled SDK Unauthorized probe (run ${testRunId})`,
      }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
