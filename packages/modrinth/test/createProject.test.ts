import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, Unauthorized } from "../src/errors.ts";
import { createProject } from "../src/operations/createProject.ts";
import { deleteProject } from "../src/operations/deleteProject.ts";
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

const validData = (slug: string) =>
  ({
    project_type: "mod" as const,
    slug,
    title: `Distilled Test ${testRunId}`,
    description: "Distilled SDK integration test project.",
    body: "Created by automated tests; safe to delete.",
    categories: [],
    client_side: "optional" as const,
    server_side: "optional" as const,
    license_id: "MIT",
    is_draft: true,
    initial_versions: [],
  });

describe("createProject", () => {
  it.skipIf(!HAS_API_KEY)(
    "creates a draft project owned by the caller",
    async () => {
      const slug = `distilled-mr-cp-${testRunId}`;
      const result = await runEffect(
        Effect.gen(function* () {
          const project = yield* createProject({ data: validData(slug) });
          // Always clean up the freshly created project.
          return yield* Effect.succeed(project).pipe(
            Effect.ensuring(
              deleteProject({ id_or_slug: project.id }).pipe(Effect.ignore),
            ),
          );
        }),
      );

      expect(typeof result.id).toBe("string");
      expect(result.id.length).toBeGreaterThan(0);
      expect(typeof result.team).toBe("string");
      expect(typeof result.published).toBe("string");
      expect(typeof result.updated).toBe("string");
    },
    60_000,
  );

  it("returns BadRequest when required body fields are missing", async () => {
    // Modrinth validates the multipart `data` JSON BEFORE auth, so omitting
    // required fields (title, slug, description, etc.) yields 400 even without
    // a credential.
    const error = await runEffect(
      createProject({ data: { project_type: "mod" } }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });

  it("returns Unauthorized when no API key is provided", async () => {
    // With a fully-valid `data` JSON, the request reaches the auth check and
    // Modrinth returns 401 because no Authorization header was sent.
    const slug = `distilled-mr-cp-unauth-${testRunId}`;
    const error = await Effect.runPromise(
      createProject({ data: validData(slug) }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
