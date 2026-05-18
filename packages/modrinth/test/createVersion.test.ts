import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, Unauthorized } from "../src/errors.ts";
import { createVersion } from "../src/operations/createVersion.ts";
import { deleteVersion } from "../src/operations/deleteVersion.ts";
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

const validData = (projectId: string, suffix: string) => ({
  name: `Distilled Test Version ${suffix}`,
  version_number: `0.0.0-${suffix}`,
  changelog: "Created by automated tests; safe to delete.",
  dependencies: [],
  game_versions: ["1.21"],
  version_type: "release" as const,
  loaders: ["fabric"],
  featured: false,
  status: "draft" as const,
  project_id: projectId,
  file_parts: [],
});

describe("createVersion", () => {
  it.skipIf(!OWNED_PROJECT_ID)(
    "creates a draft version on a project owned by the caller",
    async () => {
      // POST /version with status=draft does not require any uploaded file
      // parts, so the multipart body only carries the JSON `data` field.
      // Modrinth returns the freshly created version metadata.
      const projectId = OWNED_PROJECT_ID as string;
      const result = await runEffect(
        Effect.gen(function* () {
          const version = yield* createVersion({
            data: validData(projectId, testRunId),
          });
          // Always clean up the freshly created version.
          return yield* Effect.succeed(version).pipe(
            Effect.ensuring(
              deleteVersion({ id: version.id }).pipe(Effect.ignore),
            ),
          );
        }),
      );

      expect(typeof result.id).toBe("string");
      expect(result.id.length).toBeGreaterThan(0);
      expect(result.project_id).toBe(projectId);
      expect(result.version_number).toBe(`0.0.0-${testRunId}`);
    },
    60_000,
  );

  it.skipIf(!HAS_API_KEY || !OWNED_PROJECT_ID)(
    "returns BadRequest when the body fails server-side validation",
    async () => {
      // With auth on an owned project, a `release` version with no file
      // parts fails the server-side rule that every non-draft version must
      // include at least one uploaded file. Modrinth returns 400.
      const projectId = OWNED_PROJECT_ID as string;
      const error = await runEffect(
        createVersion({
          data: {
            ...validData(projectId, `bad-${testRunId}`),
            status: "listed",
            version_type: "release",
            file_parts: [],
          },
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("BadRequest");
      expect(error).toBeInstanceOf(BadRequest);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // With a fully-valid `data` JSON the request reaches the auth check and
    // Modrinth returns 401 because no Authorization header was sent.
    // The project_id can be any well-formed Modrinth id; with no auth the
    // request never gets far enough for ownership validation.
    const error = await Effect.runPromise(
      createVersion({
        data: validData("AANobbMI", `noauth-${testRunId}`),
      }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
