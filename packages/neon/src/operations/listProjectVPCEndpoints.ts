import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListProjectVPCEndpointsInput {
  project_id: string;
}
export const ListProjectVPCEndpointsInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/projects/{project_id}/vpc_endpoints" }),
  ) as unknown as Schema.Codec<ListProjectVPCEndpointsInput>;

// Output Schema
export interface ListProjectVPCEndpointsOutput {
  endpoints: { vpc_endpoint_id: string; label: string }[];
}
export const ListProjectVPCEndpointsOutput =
  /*@__PURE__*/ Schema.Struct({
    endpoints: Schema.Array(
      Schema.Struct({
        vpc_endpoint_id: Schema.String,
        label: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<ListProjectVPCEndpointsOutput>;

// The operation
/**
 * List VPC endpoint restrictions
 *
 * Lists VPC endpoint restrictions for the specified Neon project.
 *
 * @param project_id - The Neon project ID
 */
export const listProjectVPCEndpoints = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListProjectVPCEndpointsInput,
  outputSchema: ListProjectVPCEndpointsOutput,
}));
