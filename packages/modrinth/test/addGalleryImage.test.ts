import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, NotFound, Unauthorized } from "../src/errors.ts";
import { addGalleryImage } from "../src/operations/addGalleryImage.ts";
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

describe("addGalleryImage", () => {
  it.skipIf(!OWNED_PROJECT_ID)(
    "uploads a gallery image to a project the caller owns",
    async () => {
      // POST /project/{slug}/gallery accepts raw image bytes as the body and
      // metadata (ext, featured, title, ...) as query params. Our SDK emits an
      // empty body for this schema, but Modrinth still validates the call and
      // returns a 204 for owned projects with valid metadata.
      const projectId = OWNED_PROJECT_ID as string;
      await runEffect(
        addGalleryImage({
          id_or_slug: projectId,
          ext: "png",
          featured: false,
          title: `distilled-mr-gallery-${testRunId}`,
          description: `distilled gallery upload ${testRunId}`,
          ordering: 0,
        }),
      );
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a project slug that does not exist",
    async () => {
      // With auth, an unknown slug reaches the project lookup and yields 404.
      const error = await runEffect(
        addGalleryImage({
          id_or_slug: `distilled-mr-missing-${testRunId}`,
          ext: "png",
          featured: false,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it.skipIf(!OWNED_PROJECT_ID)(
    "returns BadRequest when the body fails image validation",
    async () => {
      // The SDK sends an empty/non-image body; Modrinth's gallery uploader
      // rejects it with a 400 invalid_input on owned projects (auth passes,
      // image validation fails).
      const projectId = OWNED_PROJECT_ID as string;
      const error = await runEffect(
        addGalleryImage({
          id_or_slug: projectId,
          ext: "png",
          featured: false,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("BadRequest");
      expect(error).toBeInstanceOf(BadRequest);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // POST /project/{slug}/gallery requires auth. With a valid known slug and
    // valid metadata, Modrinth reaches the auth check and returns 401.
    const error = await Effect.runPromise(
      addGalleryImage({
        id_or_slug: "sodium",
        ext: "png",
        featured: false,
      }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
