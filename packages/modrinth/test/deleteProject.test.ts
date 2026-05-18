import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, Unauthorized } from "../src/errors.ts";
import { deleteProject } from "../src/operations/deleteProject.ts";
import { runEffect } from "./setup.ts";

// Project the test account owns and is willing to have deleted by the test.
// Provided externally so we never destroy something we don't intend to.
const DELETABLE_PROJECT_ID = process.env.MODRINTH_TEST_DELETABLE_PROJECT_ID;

// Project that the API will refuse to delete with a 400 (e.g. because other
// projects depend on its versions). Provided externally so the test is
// deterministic without having to set up complex prerequisite state.
const PROTECTED_PROJECT_ID = process.env.MODRINTH_TEST_PROTECTED_PROJECT_ID;

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

describe("deleteProject", () => {
  it.skipIf(!DELETABLE_PROJECT_ID)(
    "deletes a project the caller owns",
    async () => {
      const projectId = DELETABLE_PROJECT_ID as string;
      // Output schema is Schema.Void; success means no thrown error.
      await runEffect(deleteProject({ id_or_slug: projectId }));
    },
  );

  it.skipIf(!PROTECTED_PROJECT_ID)(
    "returns BadRequest when the project cannot be deleted (e.g. has dependents)",
    async () => {
      const projectId = PROTECTED_PROJECT_ID as string;
      const error = await runEffect(
        deleteProject({ id_or_slug: projectId }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("BadRequest");
      expect(error).toBeInstanceOf(BadRequest);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // DELETE /project/{slug} requires auth. Without a credential, Modrinth
    // returns 401 before any project lookup, regardless of the slug given.
    const error = await Effect.runPromise(
      deleteProject({ id_or_slug: "sodium" }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
