import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, Unauthorized } from "../src/errors.ts";
import { addGalleryImage } from "../src/operations/addGalleryImage.ts";
import { deleteGalleryImage } from "../src/operations/deleteGalleryImage.ts";
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

describe("deleteGalleryImage", () => {
  it.skipIf(!OWNED_PROJECT_ID || !OWNED_GALLERY_URL)(
    "deletes a gallery image on a project the caller owns",
    async () => {
      // DELETE /project/{slug}/gallery?url=... removes the gallery image
      // identified by url. Owners get 204. We re-add the image afterwards
      // so this test stays self-contained on the shared owned project.
      const projectId = OWNED_PROJECT_ID as string;
      const url = OWNED_GALLERY_URL as string;
      await runEffect(
        deleteGalleryImage({ id_or_slug: projectId, url }).pipe(
          Effect.ensuring(
            addGalleryImage({
              id_or_slug: projectId,
              ext: "png",
              featured: false,
              title: `distilled-mr-restore-${testRunId}`,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns BadRequest for a gallery url that is not on the project",
    async () => {
      // With auth, Modrinth validates the gallery url against the project's
      // gallery items; an unknown url yields a 400 invalid_input.
      const projectId = (OWNED_PROJECT_ID ?? "sodium") as string;
      const error = await runEffect(
        deleteGalleryImage({
          id_or_slug: projectId,
          url: `https://cdn-raw.modrinth.com/data/missing/gallery/missing-${testRunId}.png`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("BadRequest");
      expect(error).toBeInstanceOf(BadRequest);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // DELETE /project/{slug}/gallery requires auth. With url as a valid query
    // param Modrinth reaches the auth check and returns 401.
    const error = await Effect.runPromise(
      deleteGalleryImage({
        id_or_slug: "sodium",
        url: `https://cdn-raw.modrinth.com/data/sodium/gallery/example-${testRunId}.png`,
      }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
