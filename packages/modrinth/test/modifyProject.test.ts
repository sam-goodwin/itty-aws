import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { NotFound, Unauthorized } from "../src/errors.ts";
import { modifyProject } from "../src/operations/modifyProject.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
const TEST_PROJECT_ID = process.env.MODRINTH_TEST_PROJECT_ID;

// Deterministic no-auth layer so the Unauthorized test triggers 401 even when
// MODRINTH_API_KEY is set in the environment.
const NoAuthLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: undefined,
    apiBaseUrl: DEFAULT_API_BASE_URL,
    userAgent: DEFAULT_USER_AGENT,
  }),
  FetchHttpClient.layer,
);

describe("modifyProject", () => {
  it.skipIf(!TEST_PROJECT_ID)(
    "performs a no-op patch on a project the caller owns",
    async () => {
      const projectId = TEST_PROJECT_ID as string;
      // Empty PATCH body should succeed (204 No Content) for project owners.
      // Output schema is Schema.Void, so success means no thrown error.
      await runEffect(modifyProject({ id_or_slug: projectId }));
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a non-existent project slug",
    async () => {
      const error = await runEffect(
        modifyProject({
          id_or_slug: `distilled-mr-missing-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // Modrinth validates body shape BEFORE auth, so we must send a non-empty
    // body with a recognised field (`moderation_message`) for the server to
    // get to the auth check and respond 401.
    const error = await Effect.runPromise(
      modifyProject({
        id_or_slug: "sodium",
        moderation_message: "distilled-test",
      }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
