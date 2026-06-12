/**
 * Live long-running-operation smoke test (non-profit account, free resources).
 *
 * Creating a storage account is an ARM long-running operation: the PUT returns a
 * `202` ack and the resource provisions asynchronously. This exercises the full
 * LRO path end-to-end against real ARM — if the poller works, the call resolves
 * to a provisioned resource (`provisioningState: "Succeeded"`) instead of the
 * intermediate ack. An empty `Standard_LRS` account is negligible at rest and is
 * torn down immediately.
 */
import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import {
  ResourceGroupsCreateOrUpdate,
  ResourceGroupsDelete,
} from "../src/services/resources";
import {
  StorageAccountsCreate,
  StorageAccountsDelete,
} from "../src/services/storage";
import { runEffect, testRunId } from "./setup";

const LOCATION = "eastus";
const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID ?? "";

describe("StorageAccounts (live LRO smoke test)", () => {
  it("creates a Standard_LRS account; the poller resolves the provisioned resource (not the 202 ack)", async () => {
    const resourceGroupName = `distilled-azure-lro-${testRunId}`;
    const accountName = `distilledlro${testRunId}`;

    const effect = Effect.gen(function* () {
      yield* ResourceGroupsCreateOrUpdate({
        resourceGroupName,
        location: LOCATION,
      });

      const created = yield* StorageAccountsCreate({
        subscriptionId,
        resourceGroupName,
        accountName,
        sku: { name: "Standard_LRS" },
        kind: "StorageV2",
        location: LOCATION,
      });

      // The poller drove the `202` ack to completion and resolved the
      // fully-provisioned resource at the original URI (a `PUT` create).
      expect(created.name).toBe(accountName);
      expect(created.properties?.provisioningState).toBe("Succeeded");
    }).pipe(
      Effect.ensuring(
        StorageAccountsDelete({
          subscriptionId,
          resourceGroupName,
          accountName,
        }).pipe(Effect.ignore),
      ),
      Effect.ensuring(
        ResourceGroupsDelete({ resourceGroupName }).pipe(Effect.ignore),
      ),
    );

    await runEffect(effect);
  }, 240_000);
});
