import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { NotFound, Unauthorized } from "../src/errors.ts";
import { deleteVersion } from "../src/operations/deleteVersion.ts";
import { getProjectVersions } from "../src/operations/getProjectVersions.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
// Truly destructive: provide a version id that is safe to delete (typically
// a draft or unlisted upload created specifically for this test run).
const DELETABLE_VERSION_ID = process.env.MODRINTH_TEST_DELETABLE_VERSION_ID;

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

describe("deleteVersion", () => {
  it.skipIf(!DELETABLE_VERSION_ID)(
    "deletes a version the caller owns",
    async () => {
      // DELETE /version/{id} returns 204. The version pointed at by the env
      // var is consumed by this run; the caller is expected to provide a
      // freshly-uploaded version id each time.
      const id = DELETABLE_VERSION_ID as string;
      await runEffect(deleteVersion({ id }));
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a version id that does not exist",
    async () => {
      // With auth, a well-formed but non-existent 8-character id yields a 404
      // from the version DELETE route.
      const id = `zz${testRunId.slice(0, 6)}`;
      const error = await runEffect(deleteVersion({ id }).pipe(Effect.flip));

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // DELETE /version/{id} requires auth. We fetch a real version id from
    // the public `sodium` project so the path resolves and Modrinth reaches
    // the auth check, which returns 401 with no API key.
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(versions.length).toBeGreaterThan(0);
    const id = versions[0]!.id;

    const error = await Effect.runPromise(
      deleteVersion({ id }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
