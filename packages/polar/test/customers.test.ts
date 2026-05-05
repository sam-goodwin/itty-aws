import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { customersget } from "../src/operations/customersget.ts";
import { customersgetState } from "../src/operations/customersgetState.ts";
import { customersgetStateExternal } from "../src/operations/customersgetStateExternal.ts";
import { customerslist } from "../src/operations/customerslist.ts";
import { customersupdate } from "../src/operations/customersupdate.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("Customers", () => {
  it(
    "creates, gets, lists, updates, and deletes a customer",
    { timeout: 60_000 },
    async () => {
      const email = `distilled.polar.${testRunId.replace(/[^a-z0-9]/gi, ".")}@gmail.com`;
      const externalId = `distilled-customer-${testRunId}`;
      const name = `Distilled Customer ${testRunId}`;
      const updatedName = `${name} Updated`;

      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* customerscreate({
            email,
            external_id: externalId,
            name,
            organization_id: organizationId,
            metadata: {
              distilled: true,
              testRunId,
            },
          });

          return yield* Effect.gen(function* () {
            const fetched = yield* customersget({ id: created.id });
            const listed = yield* customerslist({
              email,
              organization_id: organizationId,
              limit: 100,
            });
            const state = yield* customersgetState({ id: created.id });
            const stateByExternalId = yield* customersgetStateExternal({
              external_id: externalId,
            });
            const updated = yield* customersupdate({
              id: created.id,
              name: updatedName,
            });
            const deleted = yield* customersdelete({ id: created.id });

            return {
              created,
              fetched,
              listed,
              state,
              stateByExternalId,
              updated,
              deleted,
            };
          }).pipe(
            Effect.ensuring(
              customersdelete({ id: created.id }).pipe(Effect.ignore),
            ),
          );
        }),
      );

      expect(result.created.id).toBeTruthy();
      expect(result.created.email).toBe(email);
      expect(result.created.type).toBe("individual");
      expect(result.created.name).toBe(name);
      expect(result.fetched.id).toBe(result.created.id);
      expect(result.fetched.external_id).toBe(externalId);
      expect(
        result.listed.items.some(
          (customer) =>
            customer.id === result.created.id && customer.email === email,
        ),
      ).toBe(true);
      expect(result.state.id).toBe(result.created.id);
      expect(result.state.external_id).toBe(externalId);
      expect(result.state.active_subscriptions).toEqual([]);
      expect(result.state.granted_benefits).toEqual([]);
      expect(result.state.active_meters).toEqual([]);
      expect(result.stateByExternalId.id).toBe(result.created.id);
      expect(result.updated.name).toBe(updatedName);
      expect(result.deleted).toBeUndefined();
    },
  );

  it(
    "fails with NotFound for a missing customer",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customersget({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
  );

  it(
    "fails with NotFound for missing customer state",
    { timeout: 30_000 },
    async () => {
      const missingId = "00000000-0000-4000-8000-000000000000";

      const byId = await runEffect(
        customersgetState({ id: missingId }).pipe(Effect.flip),
      );
      const byExternalId = await runEffect(
        customersgetStateExternal({
          external_id: `missing-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(byId._tag).toBe("NotFound");
      expect(byExternalId._tag).toBe("NotFound");
    },
  );
});
