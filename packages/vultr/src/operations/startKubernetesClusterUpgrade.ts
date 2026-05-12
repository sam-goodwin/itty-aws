import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const StartKubernetesClusterUpgradeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
    upgrade_version: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/kubernetes/clusters/{vkeId}/upgrades" }),
  );
export type StartKubernetesClusterUpgradeInput =
  typeof StartKubernetesClusterUpgradeInput.Type;

// Output Schema
export const StartKubernetesClusterUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StartKubernetesClusterUpgradeOutput =
  typeof StartKubernetesClusterUpgradeOutput.Type;

// The operation
/**
 * Start Kubernetes Cluster Upgrade
 *
 * Start a Kubernetes cluster upgrade.
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 */
export const startKubernetesClusterUpgrade =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StartKubernetesClusterUpgradeInput,
    outputSchema: StartKubernetesClusterUpgradeOutput,
    errors: [BadRequest, NotFound] as const,
  }));
