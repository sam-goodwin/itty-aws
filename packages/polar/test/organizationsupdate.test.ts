import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { organizationsget } from "../src/operations/organizationsget.ts";
import { organizationslist } from "../src/operations/organizationslist.ts";
import { organizationsupdate } from "../src/operations/organizationsupdate.ts";
import { hasLivePolarCredentials, organizationId, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

const resolveOrgId = Effect.gen(function* () {
  if (organizationId) return organizationId;
  const listed = yield* organizationslist({ limit: 1 });
  const id = listed.items[0]?.id;
  if (!id) throw new Error("No organization available for update tests");
  return id;
});

describeLive("organizationsupdate", () => {
  it(
    "updates the configured organization (idempotent name re-set)",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const id = yield* resolveOrgId;
          const original = yield* organizationsget({ id });
          const updated = yield* organizationsupdate({
            id,
            name: original.name,
          });
          return { original, updated };
        }),
      );

      expect(result.updated.id).toBe(result.original.id);
      expect(result.updated.name).toBe(result.original.name);
      expect(result.updated.slug).toBe(result.original.slug);
    },
  );

  it(
    "fails with NotFound for a non-existent organization id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        organizationsupdate({
          id: "00000000-0000-4000-8000-000000000000",
          name: "should-not-apply",
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
        organizationsupdate({
          id: "not-a-uuid",
          name: "should-not-apply",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with Forbidden when toggling admin-controlled feature_settings",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const id = yield* resolveOrgId;
          return yield* organizationsupdate({
            id,
            feature_settings: {
              issue_funding_enabled: true,
            },
          }).pipe(Effect.flip);
        }),
      );

      expect(error._tag).toBe("Forbidden");
    },
  );
});
