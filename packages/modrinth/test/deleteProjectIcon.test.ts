import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, Unauthorized } from "../src/errors.ts";
import { deleteProjectIcon } from "../src/operations/deleteProjectIcon.ts";
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

describe("deleteProjectIcon", () => {
  it.skipIf(!OWNED_PROJECT_ID)(
    "deletes the icon on a project the caller owns",
    async () => {
      // Output schema is Schema.Void; reaching here means the API responded
      // with 204 No Content. Re-running on a project with no icon is itself
      // a no-op success.
      const projectId = OWNED_PROJECT_ID as string;
      await runEffect(deleteProjectIcon({ id_or_slug: projectId }));
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns BadRequest for an invalid project identifier",
    async () => {
      // With auth, Modrinth's icon route validates the path identifier and
      // surfaces a 400 invalid_input for unparseable slugs/ids.
      const error = await runEffect(
        deleteProjectIcon({
          id_or_slug: `distilled-mr-missing-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("BadRequest");
      expect(error).toBeInstanceOf(BadRequest);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // DELETE /project/{slug}/icon requires auth. Without a credential the
    // server returns 401 before any project lookup.
    const error = await Effect.runPromise(
      deleteProjectIcon({ id_or_slug: "sodium" }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
