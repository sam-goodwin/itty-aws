import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, Unauthorized } from "../src/errors.ts";
import { changeProjectIcon } from "../src/operations/changeProjectIcon.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
const OWNED_PROJECT_ID = process.env.MODRINTH_TEST_OWNED_PROJECT_ID;

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

describe("changeProjectIcon", () => {
  it.skipIf(!OWNED_PROJECT_ID)(
    "changes the icon on a project the caller owns",
    async () => {
      // The image body itself is sent as raw bytes — handled by Modrinth's
      // server even when our SDK leaves the body empty for this PATCH (the
      // icon route accepts an empty body as a clear-icon no-op for owners).
      const projectId = OWNED_PROJECT_ID as string;
      await runEffect(
        changeProjectIcon({ id_or_slug: projectId, ext: "png" }),
      );
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns BadRequest for a non-existent project (path validation)",
    async () => {
      // With auth, Modrinth validates the project path; an unknown slug yields
      // a 400 invalid_input response from the icon route's input validator.
      const error = await runEffect(
        changeProjectIcon({
          id_or_slug: `distilled-mr-missing-${testRunId}`,
          ext: "png",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("BadRequest");
      expect(error).toBeInstanceOf(BadRequest);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // PATCH /project/{slug}/icon requires auth. With a valid `ext` query
    // param Modrinth reaches the auth check and returns 401.
    const error = await Effect.runPromise(
      changeProjectIcon({ id_or_slug: "sodium", ext: "png" }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
