import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListOrganizationVPCEndpointsAllRegionsInput {
  org_id: string;
}
export const ListOrganizationVPCEndpointsAllRegionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    org_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{org_id}/vpc/vpc_endpoints",
    }),
  ) as unknown as Schema.Codec<ListOrganizationVPCEndpointsAllRegionsInput>;

// Output Schema
export interface ListOrganizationVPCEndpointsAllRegionsOutput {
  endpoints: { vpc_endpoint_id: string; label: string; region_id: string }[];
}
export const ListOrganizationVPCEndpointsAllRegionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoints: Schema.Array(
      Schema.Struct({
        vpc_endpoint_id: Schema.String,
        label: Schema.String,
        region_id: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<ListOrganizationVPCEndpointsAllRegionsOutput>;

// The operation
/**
 * List VPC endpoints across all regions
 *
 * Retrieves the list of VPC endpoints for the specified Neon organization across all regions.
 *
 * @param org_id - The Neon organization ID
 */
export const listOrganizationVPCEndpointsAllRegions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListOrganizationVPCEndpointsAllRegionsInput,
    outputSchema: ListOrganizationVPCEndpointsAllRegionsOutput,
  }));
