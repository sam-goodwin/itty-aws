import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetKubernetesAvailableUpgradesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/kubernetes/clusters/{vkeId}/available-upgrades",
    }),
  );
export type GetKubernetesAvailableUpgradesInput =
  typeof GetKubernetesAvailableUpgradesInput.Type;

// Output Schema
export const GetKubernetesAvailableUpgradesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    available_upgrades: Schema.optional(Schema.Array(Schema.String)),
  });
export type GetKubernetesAvailableUpgradesOutput =
  typeof GetKubernetesAvailableUpgradesOutput.Type;

// The operation
/**
 * Get Kubernetes Available Upgrades
 *
 * Get the available upgrades for the specified Kubernetes cluster.
 *
 * @param vkeId - The [VKE ID](#operation/list-kubernetes-clusters).
 */
export const getKubernetesAvailableUpgrades =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetKubernetesAvailableUpgradesInput,
    outputSchema: GetKubernetesAvailableUpgradesOutput,
    errors: [BadRequest, NotFound] as const,
  }));
