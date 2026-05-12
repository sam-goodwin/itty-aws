import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteKubernetesClusterVkeIdDeleteWithLinkedResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vkeId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/kubernetes/clusters/{vkeId}/delete-with-linked-resources",
    }),
  );
export type DeleteKubernetesClusterVkeIdDeleteWithLinkedResourcesInput =
  typeof DeleteKubernetesClusterVkeIdDeleteWithLinkedResourcesInput.Type;

// Output Schema
export const DeleteKubernetesClusterVkeIdDeleteWithLinkedResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteKubernetesClusterVkeIdDeleteWithLinkedResourcesOutput =
  typeof DeleteKubernetesClusterVkeIdDeleteWithLinkedResourcesOutput.Type;

// The operation
/**
 * Delete VKE Cluster and All Related Resources
 *
 * Delete Kubernetes Cluster and all related resources.
 */
export const deleteKubernetesClusterVkeIdDeleteWithLinkedResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteKubernetesClusterVkeIdDeleteWithLinkedResourcesInput,
    outputSchema: DeleteKubernetesClusterVkeIdDeleteWithLinkedResourcesOutput,
    errors: [BadRequest, NotFound] as const,
  }));
