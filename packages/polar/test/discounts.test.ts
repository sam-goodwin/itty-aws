import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { discountscreate } from "../src/operations/discountscreate.ts";
import { discountsdelete } from "../src/operations/discountsdelete.ts";
import { discountsget } from "../src/operations/discountsget.ts";
import { discountslist } from "../src/operations/discountslist.ts";
import { discountsupdate } from "../src/operations/discountsupdate.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("Discounts", () => {
  it(
    "creates, gets, lists, updates, and deletes a percentage discount",
    { timeout: 60_000 },
    async () => {
      const name = `Distilled Discount ${testRunId}`;
      const updatedName = `${name} Updated`;
      const code = `DISTILLED${testRunId.replace(/[^a-z0-9]/gi, "").slice(-16)}`.toUpperCase();

      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* discountscreate({
            name,
            code,
            type: "percentage",
            duration: "once",
            basis_points: 1000,
            organization_id: organizationId,
            metadata: {
              distilled: true,
              testRunId,
            },
          });

          return yield* Effect.gen(function* () {
            const fetched = yield* discountsget({ id: created.id });
            const listed = yield* discountslist({
              query: name,
              organization_id: organizationId,
              limit: 100,
            });
            const updated = yield* discountsupdate({
              id: created.id,
              name: updatedName,
            });
            const deleted = yield* discountsdelete({ id: created.id });

            return { created, fetched, listed, updated, deleted };
          }).pipe(
            Effect.ensuring(
              discountsdelete({ id: created.id }).pipe(Effect.ignore),
            ),
          );
        }),
      );

      expect(result.created.id).toBeTruthy();
      expect(result.created.name).toBe(name);
      expect(result.created.code).toBe(code);
      expect(result.created.type).toBe("percentage");
      expect(result.created.basis_points).toBe(1000);
      expect(result.fetched.id).toBe(result.created.id);
      expect(
        result.listed.items.some(
          (discount) =>
            discount.id === result.created.id && discount.code === code,
        ),
      ).toBe(true);
      expect(result.updated.name).toBe(updatedName);
      expect(result.deleted).toBeUndefined();
    },
  );

  it(
    "fails with NotFound for a missing discount",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        discountsget({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
  );
});
