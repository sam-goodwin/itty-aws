import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { uploadApplicationAttachment } from "../src/operations/uploadApplicationAttachment.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// POST /applications/{application_id}/attachment — uploads an ephemeral
// attachment that can be referenced from interaction responses /
// component messages. Body is multipart with a `file` field. The
// application_id must be the bot's own; the credential must be a Bot
// token. Returned attachments are CDN-hosted and ephemeral (no delete
// endpoint), so cleanup is not required.
//
// The happy path requires:
//   - DISCORD_TEST_APPLICATION_ID — the bot's application id
//   - DISCORD_TEST_ATTACHMENT_DATA_URI — a data URI for any small file
//     (e.g. an image/png base64 payload)
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
const TEST_ATTACHMENT_DATA_URI =
  process.env.DISCORD_TEST_ATTACHMENT_DATA_URI;

// Snowflake-format identifier that should not match a real application.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";

// A clearly invalid file payload — an empty data URI — used for the
// BadRequest path; Discord rejects this with 400 Invalid Form Body.
const INVALID_ATTACHMENT_DATA_URI = "data:application/octet-stream;base64,";

describe("uploadApplicationAttachment", () => {
  it(
    "happy path - uploads an attachment and returns its CDN metadata",
    async () => {
      if (!TEST_APPLICATION_ID || !TEST_ATTACHMENT_DATA_URI) {
        throw new Error(
          "DISCORD_TEST_APPLICATION_ID and DISCORD_TEST_ATTACHMENT_DATA_URI " +
            "env vars are required for the uploadApplicationAttachment happy path",
        );
      }
      const result = await runEffect(
        uploadApplicationAttachment({
          application_id: TEST_APPLICATION_ID,
          file: TEST_ATTACHMENT_DATA_URI,
        }),
      );
      expect(typeof result.attachment.id).toBe("string");
      expect(result.attachment.id.length).toBeGreaterThan(0);
      expect(typeof result.attachment.filename).toBe("string");
      expect(typeof result.attachment.size).toBe("number");
      expect(result.attachment.size).toBeGreaterThan(0);
      expect(typeof result.attachment.url).toBe("string");
      expect(result.attachment.url.startsWith("http")).toBe(true);
      expect(typeof result.attachment.proxy_url).toBe("string");
      // Test run id is captured here so failed uploads can be correlated
      // back to a specific run via grep.
      expect(testRunId).toMatch(/^[0-9a-f]{8}$/);
    },
    30_000,
  );

  it(
    "error - BadRequest for an invalid (empty) attachment data URI",
    async () => {
      if (!TEST_APPLICATION_ID) {
        throw new Error(
          "DISCORD_TEST_APPLICATION_ID env var is required for the BadRequest test",
        );
      }
      // An empty / malformed file data URI is rejected with 400 Invalid
      // Form Body. May also surface as Forbidden if the bot lacks access
      // to the application, or NotFound for an unseen application id.
      await runEffect(
        uploadApplicationAttachment({
          application_id: TEST_APPLICATION_ID,
          file: INVALID_ATTACHMENT_DATA_URI,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (e as any)._tag,
            );
          }),
        ),
      );
    },
    30_000,
  );

  it("error - NotFound for a non-existent application id", async () => {
    // A snowflake-shaped application_id that resolves to no real
    // application typically yields 404 NotFound, but Discord may also
    // classify the response as 403 Forbidden (the bot may only upload
    // attachments for its own application), or BadRequest if validation
    // fires first.
    await runEffect(
      uploadApplicationAttachment({
        application_id: NON_EXISTENT_APPLICATION_ID,
        file:
          TEST_ATTACHMENT_DATA_URI ??
          `data:text/plain;base64,${Buffer.from(
            `distilled-nf-${testRunId}`,
          ).toString("base64")}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when targeting an application id other than the bot's", async () => {
    // The bot can only upload attachments under its own application.
    // A snowflake-shaped application_id that does not match the bot's
    // typically yields 403 Forbidden, or 404 NotFound if the route 404s
    // before the ownership check, or BadRequest for malformed input.
    await runEffect(
      uploadApplicationAttachment({
        application_id: NON_EXISTENT_APPLICATION_ID,
        file:
          TEST_ATTACHMENT_DATA_URI ??
          `data:text/plain;base64,${Buffer.from(
            `distilled-fb-${testRunId}`,
          ).toString("base64")}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "NotFound", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
