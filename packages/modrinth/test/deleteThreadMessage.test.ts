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
// The happy path bootstraps by posting a real message into a live
// Modrinth thread (visible to moderators) and then deleting it. Even
// though we self-clean on the same call we're testing, keep the happy
// path opt-in (mirrors submitReport.test.ts / sendThreadMessage.test.ts
// gating) so CI runs without the env var don't poke at live moderation
// state.
const ALLOW_BOOTSTRAP =
  process.env.MODRINTH_TEST_ALLOW_SEND_THREAD_MESSAGE === "1";
const SHOULD_RUN_HAPPY = HAS_API_KEY && ALLOW_BOOTSTRAP;

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

describe("deleteThreadMessage", () => {
  it.skipIf(!SHOULD_RUN_HAPPY)(
    "deletes a freshly-posted thread message",
    async () => {
      // Bootstrap: list the auth'd user's open reports, post a probe
      // message into the first report's thread, then delete it. If the
      // queue is empty we cannot exercise the round-trip and return
      // early — the listing call still confirms auth.
      const open = await runEffect(getOpenReports({}));
      const seed = open.find((r) => typeof r.thread_id === "string");
      if (!seed) {
        return;
      }
      const threadId = seed.thread_id;
      const messageBody = `distilled SDK deleteThreadMessage probe — please ignore (run ${testRunId})`;

      const updated = await runEffect(
        sendThreadMessage({
          id: threadId,
          type: "text",
          body: messageBody,
        }),
      );

      const posted = updated.messages.find(
        (m) => m.body.type === "text" && m.body.body === messageBody,
      );
      expect(posted).toBeDefined();
      const messageId = posted!.id;
      expect(typeof messageId).toBe("string");

      // The actual operation under test. DELETE /message/{id} returns
      // 204/Void; if the call resolves without an error the message is
      // deleted (Modrinth replaces the body with type="deleted" rather
      // than removing the entry from the messages list).
      const result = await runEffect(deleteThreadMessage({ id: messageId }));
      expect(result).toBeUndefined();
    },
    30_000,
  );

  it("returns BadRequest for an id that is not valid base62", async () => {
    // Modrinth ids are base62-encoded; the path validator rejects ids
    // containing non-base62 characters (e.g. `!`) with a
    // `400 invalid_input` before any auth or DB lookup, so the typed
    // BadRequest is reachable without an API key. This 400 mapping is
    // added by patches/002-add-mutation-bad-request.patch.json.
    const error = await runEffect(
      deleteThreadMessage({ id: `zz!${testRunId}` }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a base62-shaped id that does not exist",
    async () => {
      // With auth and a base62-shaped id Modrinth resolves the route,
      // looks up the message, and returns 404 when nothing matches. We
      // pad the testRunId so the path validator accepts it and the
      // lookup actually fires.
      const id = `zz${testRunId.slice(0, 6)}`;
      const error = await runEffect(
        deleteThreadMessage({ id }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // DELETE /message/{id} requires auth. With a base62-shaped id the
    // path validator passes, the auth check fires next, and Modrinth
    // returns 401 without an API key.
    const id = `zz${testRunId.slice(0, 6)}`;
    const error = await Effect.runPromise(
      deleteThreadMessage({ id }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
