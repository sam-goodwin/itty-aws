import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { eventTypeslist } from "../src/operations/eventTypeslist.ts";
import { eventsget } from "../src/operations/eventsget.ts";
import { eventsingest } from "../src/operations/eventsingest.ts";
import { eventslist } from "../src/operations/eventslist.ts";
import { eventslistNames } from "../src/operations/eventslistNames.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

const eventually = async <A>(
  action: () => Promise<A | undefined>,
): Promise<A> => {
  for (let attempt = 0; attempt < 10; attempt++) {
    const result = await action();
    if (result !== undefined) {
      return result;
    }
    await new Promise((resolve) => setTimeout(resolve, 1_000));
  }

  throw new Error("Timed out waiting for Polar event indexing");
};

describeLive("Events", () => {
  it(
    "ingests, lists, gets, and lists event types",
    { timeout: 90_000 },
    async () => {
      const name = `distilled.event.${testRunId}`;
      const externalCustomerId = `distilled-customer-${testRunId}`;
      const externalId = `distilled-event-${testRunId}`;

      const ingested = await runEffect(
        eventsingest({
          events: [
            {
              name,
              external_customer_id: externalCustomerId,
              external_id: externalId,
              organization_id: organizationId,
              timestamp: new Date().toISOString(),
              metadata: {
                distilled: true,
                testRunId,
                quantity: 1,
              },
            },
          ],
        }),
      );

      const listed = await eventually(async () => {
        const result = await runEffect(
          eventslist({
            external_customer_id: externalCustomerId,
            name,
            limit: 100,
          }),
        );

        return result.items.some((item) => item.name === name)
          ? result
          : undefined;
      });

      const event = listed.items.find((item) => item.name === name);
      const fetched = event
        ? await runEffect(eventsget({ id: event.id }))
        : undefined;

      const names = await eventually(async () => {
        const result = await runEffect(
          eventslistNames({
            external_customer_id: externalCustomerId,
            query: name,
            limit: 100,
          }),
        );

        return result.items.some((item) => item.name === name)
          ? result
          : undefined;
      });

      const eventTypes = await runEffect(
        eventTypeslist({
          source: "user",
          limit: 1,
        }),
      );

      const result = {
        ingested,
        listed,
        fetched,
        names,
        eventTypes,
      };

      expect(result.ingested.inserted).toBeGreaterThanOrEqual(1);
      expect(result.listed.items.length).toBeGreaterThan(0);
      expect(result.listed.items[0].source).toBe("user");

      expect(result.fetched?.name).toBe(name);
      expect(result.fetched?.external_customer_id).toBe(externalCustomerId);
      expect(result.fetched?.metadata.testRunId).toBe(testRunId);

      expect(result.names.items.some((item) => item.name === name)).toBe(true);
      expect(result.eventTypes.pagination.max_page).toBeGreaterThanOrEqual(0);
    },
  );

  it(
    "fails with NotFound for a missing event",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        eventsget({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
  );
});
