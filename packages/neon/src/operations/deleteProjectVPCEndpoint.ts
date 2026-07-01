import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteProjectVPCEndpointInput {
  project_id: string;
  vpc_endpoint_id: string;
}
export const DeleteProjectVPCEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    vpc_endpoint_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}",
    }),
  ) as unknown as Schema.Codec<DeleteProjectVPCEndpointInput>;

// Output Schema
export type DeleteProjectVPCEndpointOutput = void;
export const DeleteProjectVPCEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteProjectVPCEndpointOutput>;

// The operation
/**
 * Delete VPC endpoint restriction
 *
 * Removes the specified VPC endpoint restriction from a Neon project.
 *
 * @param project_id - The Neon project ID
 * @param vpc_endpoint_id - The VPC endpoint ID
 */
export const deleteProjectVPCEndpoint = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteProjectVPCEndpointInput,
    outputSchema: DeleteProjectVPCEndpointOutput,
  }),
);
