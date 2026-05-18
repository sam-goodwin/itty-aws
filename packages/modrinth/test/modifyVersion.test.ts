import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { NotFound, Unauthorized } from "../src/errors.ts";
import { getProjectVersions } from "../src/operations/getProjectVersions.ts";
import { getVersion } from "../src/operations/getVersion.ts";
import { modifyVersion } from "../src/operations/modifyVersion.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
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

describe("modifyVersion", () => {
  it.skipIf(!OWNED_VERSION_ID)(
    "modifies the name of a version the caller owns and restores it",
    async () => {
      // PATCH /version/{id} returns 204 when the change is accepted. We
      // capture the original name first and use Effect.ensuring to restore
      // it, so the test mutates a real version safely.
      const id = OWNED_VERSION_ID as string;
      const original = await runEffect(getVersion({ id }));
      const restoredName = original.name;
      const newName = `distilled-mr-version-${testRunId}`;

      await runEffect(
        modifyVersion({ id, name: newName }).pipe(
          Effect.ensuring(
            modifyVersion({ id, name: restoredName }).pipe(Effect.ignore),
          ),
        ),
      );
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a version id that does not exist",
    async () => {
      // With auth, an 8-character base62 id that doesn't exist yields a 404
      // from the version PATCH route.
      const id = `zz${testRunId.slice(0, 6)}`;
      const error = await runEffect(
        modifyVersion({ id, name: `distilled-mr-${testRunId}` }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // PATCH /version/{id} requires auth. We fetch a real version id from the
    // public `sodium` project so Modrinth resolves the path and reaches the
    // auth check, which returns 401 with no API key.
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(versions.length).toBeGreaterThan(0);
    const id = versions[0]!.id;

    const error = await Effect.runPromise(
      modifyVersion({ id, name: `distilled-mr-noauth-${testRunId}` }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
