import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getStickerPack } from "../src/operations/getStickerPack.ts";
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

// GET /sticker-packs/{pack_id} fetches a single sticker pack. Sticker packs
// are public Discord-curated content, so the happy path resolves a real
// pack id by listing sticker packs and reading the first one.

// Snowflake-shaped ids unlikely to resolve to any real sticker pack.
const NON_EXISTENT_PACK_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_PACK_ID = "100000000000000001";

describe("getStickerPack", () => {
  it(
    "happy path - fetches a sticker pack",
    async () => {
      const packs = await runEffect(listStickerPacks({}));
      const firstPack = packs.sticker_packs[0];
      if (!firstPack) {
        throw new Error(
          "No sticker packs were returned by listStickerPacks; cannot run getStickerPack happy path.",
        );
      }
      const result = await runEffect(getStickerPack({ pack_id: firstPack.id }));
      expect(result.id).toBe(firstPack.id);
      expect(typeof result.name).toBe("string");
      expect(typeof result.sku_id).toBe("string");
      expect(
        result.description === null || typeof result.description === "string",
      ).toBe(true);
      expect(Array.isArray(result.stickers)).toBe(true);
      for (const s of result.stickers) {
        expect(typeof s.id).toBe("string");
        expect(typeof s.name).toBe("string");
        expect(s.pack_id).toBe(firstPack.id);
        expect(typeof s.sort_value).toBe("number");
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent sticker pack id", async () => {
    await runEffect(
      getStickerPack({ pack_id: NON_EXISTENT_PACK_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing sticker pack as NotFound. Some
          // malformed or out-of-range snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a sticker pack the bot cannot access", async () => {
    await runEffect(
      getStickerPack({ pack_id: INACCESSIBLE_PACK_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // A pack id the bot is not entitled to typically surfaces as
          // Forbidden, but Discord often returns NotFound to avoid leaking
          // existence.
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
