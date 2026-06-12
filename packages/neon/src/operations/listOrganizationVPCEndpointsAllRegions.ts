import * as Schema from "effect/Schema";
import { VPCEndpointWithRegionSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListOrganizationVPCEndpointsAllRegionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    org_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{org_id}/vpc/vpc_endpoints",
    }),
  );
export type ListOrganizationVPCEndpointsAllRegionsInput =
  typeof ListOrganizationVPCEndpointsAllRegionsInput.Type;

// Output Schema
export const ListOrganizationVPCEndpointsAllRegionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoints: Schema.Array(Schema.suspend(() => VPCEndpointWithRegionSchema)),
  });
export type ListOrganizationVPCEndpointsAllRegionsOutput =
  typeof ListOrganizationVPCEndpointsAllRegionsOutput.Type;

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
