import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getSticker } from "../src/operations/getSticker.ts";
import { listStickerPacks } from "../src/operations/listStickerPacks.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /stickers/{sticker_id} resolves any sticker visible to the bot. Standard
// Discord sticker-pack stickers are public, so the happy path resolves a real
// sticker id by listing sticker packs and reading the first sticker.

// Snowflake-shaped ids unlikely to resolve to any real sticker.
const NON_EXISTENT_STICKER_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_STICKER_ID = "100000000000000001";

describe("getSticker", () => {
  it(
    "happy path - fetches a standard sticker",
    async () => {
      const packs = await runEffect(listStickerPacks({}));
      const firstPack = packs.sticker_packs.find((p) => p.stickers.length > 0);
      if (!firstPack) {
        throw new Error(
          "No sticker packs with stickers were returned by listStickerPacks; " +
            "cannot run getSticker happy path.",
        );
      }
      const stickerId = firstPack.stickers[0]!.id;
      const result = await runEffect(getSticker({ sticker_id: stickerId }));
      expect(result).not.toBeNull();
      expect(typeof result).toBe("object");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sticker = result as any;
      expect(sticker.id).toBe(stickerId);
      expect(typeof sticker.name).toBe("string");
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent sticker id", async () => {
    await runEffect(
      getSticker({ sticker_id: NON_EXISTENT_STICKER_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing sticker as NotFound. Some malformed or
          // out-of-range snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a sticker the bot cannot access", async () => {
    await runEffect(
      getSticker({ sticker_id: INACCESSIBLE_STICKER_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // A guild sticker the bot is not in typically surfaces as Forbidden,
          // but Discord often returns NotFound to avoid leaking existence.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
