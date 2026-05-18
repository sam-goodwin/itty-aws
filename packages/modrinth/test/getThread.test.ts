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
import { getThread } from "../src/operations/getThread.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;

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

describe("getThread", () => {
  it.skipIf(!HAS_API_KEY)(
    "fetches a thread reachable from the authenticated user's open reports",
    async () => {
      // GET /thread/{id} requires auth and returns the matching thread.
      // We bootstrap by listing the auth'd user's open reports and
      // round-tripping the first report's thread_id; if the queue is
      // empty we cannot exercise the lookup and return early — the
      // listing call still confirms auth.
      const open = await runEffect(getOpenReports({}));
      const seed = open.find((r) => typeof r.thread_id === "string");
      if (!seed) {
        return;
      }
      const threadId = seed.thread_id;

      const result = await runEffect(getThread({ id: threadId }));

      expect(result.id).toBe(threadId);
      expect(["project", "report", "direct_message"]).toContain(result.type);
      expect(Array.isArray(result.messages)).toBe(true);
      expect(Array.isArray(result.members)).toBe(true);
    },
  );

  it("returns BadRequest for an id that is not valid base62", async () => {
    // Modrinth ids are base62-encoded; the path validator rejects ids
    // containing non-base62 characters (e.g. `!`) with a
    // `400 invalid_input` before any auth or DB lookup, so the typed
    // BadRequest is reachable without an API key. This 400 mapping is
    // added by patches/001-add-error-responses.patch.json.
    const error = await runEffect(
      getThread({ id: `zz!${testRunId}` }).pipe(Effect.flip),
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
        getThread({ id }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // GET /thread/{id} requires auth. With a base62-shaped id the path
    // validator passes, the auth check fires next, and Modrinth returns
    // 401 without an API key.
    const id = `zz${testRunId.slice(0, 6)}`;
    const error = await Effect.runPromise(
      getThread({ id }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
