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
import { getThreads } from "../src/operations/getThreads.ts";
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

describe("getThreads", () => {
  it.skipIf(!HAS_API_KEY)(
    "returns the requested threads for a list of valid ids",
    async () => {
      // Bootstrap: list the auth'd user's open reports and round-trip
      // their thread_ids through GET /threads?ids=[...]. If the queue
      // is empty we cannot exercise the batch lookup and return early —
      // the listing call still confirms auth.
      const open = await runEffect(getOpenReports({}));
      const ids = open
        .map((r) => r.thread_id)
        .filter((id): id is string => typeof id === "string")
        .slice(0, 2);
      if (ids.length === 0) {
        return;
      }

      const threads = await runEffect(
        getThreads({ ids: JSON.stringify(ids) }),
      );

      expect(Array.isArray(threads)).toBe(true);
      expect(threads.length).toBe(ids.length);
      for (const id of ids) {
        const match = threads.find((t) => t.id === id);
        expect(match).toBeDefined();
        expect(["project", "report", "direct_message"]).toContain(match!.type);
        expect(Array.isArray(match!.messages)).toBe(true);
        expect(Array.isArray(match!.members)).toBe(true);
      }
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns BadRequest when the ids query is not valid JSON",
    async () => {
      // Modrinth parses `ids` as a JSON array; a non-JSON value yields a
      // 400 invalid_input. This 400 mapping is added by
      // patches/002-add-mutation-bad-request.patch.json. Auth runs before
      // the query parse here, so we send an API key to reach the validator.
      const error = await runEffect(
        getThreads({ ids: "not-json" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("BadRequest");
      expect(error).toBeInstanceOf(BadRequest);
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound when the ids list contains a non-existent base62 id",
    async () => {
      // With auth and a syntactically-valid JSON array of base62-shaped
      // ids that resolve to nothing, Modrinth's thread lookup returns
      // 404 (the spec lists NotFound for /threads). We pad the testRunId
      // so each id is base62-shaped and the path-level validator passes.
      const phantomId = `zz${testRunId.slice(0, 6)}`;
      const error = await runEffect(
        getThreads({ ids: JSON.stringify([phantomId]) }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // GET /threads requires auth — threads are user-scoped. With a
    // well-formed JSON ids query the auth check fires first and Modrinth
    // returns 401 without an API key.
    const phantomId = `zz${testRunId.slice(0, 6)}`;
    const error = await Effect.runPromise(
      getThreads({ ids: JSON.stringify([phantomId]) }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
