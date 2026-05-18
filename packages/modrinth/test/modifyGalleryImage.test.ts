import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { NotFound, Unauthorized } from "../src/errors.ts";
import { modifyGalleryImage } from "../src/operations/modifyGalleryImage.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
const OWNED_PROJECT_ID = process.env.MODRINTH_TEST_OWNED_PROJECT_ID;
const OWNED_GALLERY_URL = process.env.MODRINTH_TEST_OWNED_GALLERY_URL;

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

describe("modifyGalleryImage", () => {
  it.skipIf(!OWNED_PROJECT_ID || !OWNED_GALLERY_URL)(
    "modifies an existing gallery image on a project the caller owns",
    async () => {
      // PATCH /project/{slug}/gallery?url=...&title=... rewrites the metadata
      // for the gallery image identified by url. Owners get 204.
      const projectId = OWNED_PROJECT_ID as string;
      const url = OWNED_GALLERY_URL as string;
      await runEffect(
        modifyGalleryImage({
          id_or_slug: projectId,
          url,
          featured: false,
          title: `distilled-mr-gallery-${testRunId}`,
          description: `distilled gallery patch ${testRunId}`,
          ordering: 0,
        }),
      );
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a project slug that does not exist",
    async () => {
      // With auth, Modrinth resolves the project slug first; an unknown slug
      // produces a 404 from the gallery PATCH route.
      const error = await runEffect(
        modifyGalleryImage({
          id_or_slug: `distilled-mr-missing-${testRunId}`,
          url: `https://cdn-raw.modrinth.com/data/missing-${testRunId}/gallery/missing.png`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // PATCH /project/{slug}/gallery requires auth. With url as a valid query
    // param Modrinth reaches the auth check and returns 401.
    const error = await Effect.runPromise(
      modifyGalleryImage({
        id_or_slug: "sodium",
        url: `https://cdn-raw.modrinth.com/data/sodium/gallery/example-${testRunId}.png`,
      }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
