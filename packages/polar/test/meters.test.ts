import * as Effect from "effect/Effect";
import * as Schedule from "effect/Schedule";
import { describe, expect, it } from "vitest";
import { meterscreate } from "../src/operations/meterscreate.ts";
import { metersget } from "../src/operations/metersget.ts";
import { meterslist } from "../src/operations/meterslist.ts";
import { metersquantities } from "../src/operations/metersquantities.ts";
import { metersupdate } from "../src/operations/metersupdate.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("Meters", () => {
  it(
    "creates, gets, lists, reads quantities, and archives a meter",
    { timeout: 90_000 },
    async () => {
      const name = `Distilled Meter ${testRunId}`;
      const updatedName = `${name} Updated`;

      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* meterscreate({
            name,
            unit: "scalar",
            organization_id: organizationId,
            metadata: {
              distilled: true,
              testRunId,
            },
            filter: {
              conjunction: "and",
              clauses: [],
            },
            aggregation: {
              func: "count",
            },
          });

          return yield* Effect.gen(function* () {
            const fetched = yield* metersget({ id: created.id });
            const listed = yield* meterslist({
              query: name,
              is_archived: false,
              organization_id: organizationId,
              limit: 100,
            });
            const quantities = yield* metersquantities({
              id: created.id,
              start_timestamp: "2026-01-01T00:00:00Z",
              end_timestamp: "2026-01-02T00:00:00Z",
              interval: "day",
            }).pipe(
              Effect.retry({
                while: (err) => err._tag === "NotFound",
                schedule: Schedule.spaced("1 second").pipe(
                  Schedule.both(Schedule.recurs(10)),
                ),
              }),
            );
            const updated = yield* metersupdate({
              id: created.id,
              name: updatedName,
            });
            const archived = yield* metersupdate({
              id: created.id,
              is_archived: true,
            });

            return { created, fetched, listed, quantities, updated, archived };
          }).pipe(
            Effect.ensuring(
              metersupdate({ id: created.id, is_archived: true }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }),
      );

      expect(result.created.id).toBeTruthy();
      expect(result.created.name).toBe(name);
      expect(result.created.aggregation.func).toBe("count");
      expect(result.fetched.id).toBe(result.created.id);
      expect(
        result.listed.items.some((meter) => meter.id === result.created.id),
      ).toBe(true);
      expect(result.quantities.total).toBe(0);
      expect(result.quantities.quantities.length).toBeGreaterThan(0);
      expect(result.updated.name).toBe(updatedName);
      expect(result.archived.archived_at).toBeTruthy();
    },
  );

  it(
    "fails with NotFound for a missing meter",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        metersget({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
  );
});
