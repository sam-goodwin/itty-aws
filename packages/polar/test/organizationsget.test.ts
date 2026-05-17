import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { organizationsget } from "../src/operations/organizationsget.ts";
import { organizationslist } from "../src/operations/organizationslist.ts";
import { hasLivePolarCredentials, organizationId, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("organizationsget", () => {
  it(
    "fetches the configured organization by id",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const id =
            organizationId ??
            (yield* organizationslist({ limit: 1 })).items[0]?.id;
          expect(id).toBeTruthy();
          return yield* organizationsget({ id: id! });
        }),
      );

      expect(result.id).toBeTruthy();
      expect(typeof result.name).toBe("string");
      expect(typeof result.slug).toBe("string");
      expect(typeof result.created_at).toBe("string");
    },
  );

  it(
    "fails with NotFound for a non-existent organization id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        organizationsget({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "surfaces validation details for a malformed organization id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        organizationsget({ id: "not-a-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
