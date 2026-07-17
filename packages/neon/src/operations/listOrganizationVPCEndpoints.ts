import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListOrganizationVPCEndpointsInput {
  org_id: string;
  region_id: string;
}
export const ListOrganizationVPCEndpointsInput =
  /*@__PURE__*/ Schema.Struct({
    org_id: Schema.String.pipe(T.PathParam()),
    region_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints",
    }),
  ) as unknown as Schema.Codec<ListOrganizationVPCEndpointsInput>;

// Output Schema
export interface ListOrganizationVPCEndpointsOutput {
  endpoints: { vpc_endpoint_id: string; label: string }[];
}
export const ListOrganizationVPCEndpointsOutput =
  /*@__PURE__*/ Schema.Struct({
    endpoints: Schema.Array(
      Schema.Struct({
        vpc_endpoint_id: Schema.String,
        label: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<ListOrganizationVPCEndpointsOutput>;

// The operation
/**
 * List VPC endpoints
 *
 * Retrieves the list of VPC endpoints for the specified Neon organization.
 *
 * @param org_id - The Neon organization ID
 * @param region_id - The Neon region ID
 */
export const listOrganizationVPCEndpoints =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ListOrganizationVPCEndpointsInput,
    outputSchema: ListOrganizationVPCEndpointsOutput,
  }));
