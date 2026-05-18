import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { NotFound, Unauthorized } from "../src/errors.ts";
import { addFilesToVersion } from "../src/operations/addFilesToVersion.ts";
import { getProjectVersions } from "../src/operations/getProjectVersions.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
// The generated input schema for this multipart route is incomplete (the
// `data` field is a placeholder literal and there is no way to attach real
// file binary parts). The happy path therefore needs an env var that points
// at a version the caller owns AND a schema that supports file uploads — the
// latter is tracked separately. With just an owned version id we still get
// the chance to hit the real route under auth, even though the empty body
// will be rejected once the schema is fixed; for now we env-gate the happy
// path on the owned-version id and let it run against the live API.
const OWNED_VERSION_ID = process.env.MODRINTH_TEST_OWNED_VERSION_ID;

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

describe("addFilesToVersion", () => {
  it.skipIf(!OWNED_VERSION_ID)(
    "calls the add-files route on a version the caller owns",
    async () => {
      // POST /version/{id}/file accepts a multipart body containing one or
      // more file parts. The currently generated schema does not yet expose
      // a way to attach binary file parts, so we exercise the route with the
      // placeholder input the schema offers — this validates that the SDK
      // wiring (path params, multipart content-type, auth) reaches Modrinth
      // and is accepted as a 2xx (no files = no-op acknowledged).
      const id = OWNED_VERSION_ID as string;
      await runEffect(addFilesToVersion({ id }));
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a version id that does not exist",
    async () => {
      // With auth, a well-formed but non-existent 8-character id yields a 404
      // from the version add-files route.
      const id = `zz${testRunId.slice(0, 6)}`;
      const error = await runEffect(
        addFilesToVersion({ id }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // POST /version/{id}/file requires auth. We fetch a real version id from
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
      addFilesToVersion({ id }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
