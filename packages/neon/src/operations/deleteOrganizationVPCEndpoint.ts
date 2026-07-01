import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteOrganizationVPCEndpointInput {
  org_id: string;
  region_id: string;
  vpc_endpoint_id: string;
}
export const DeleteOrganizationVPCEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    org_id: Schema.String.pipe(T.PathParam()),
    region_id: Schema.String.pipe(T.PathParam()),
    vpc_endpoint_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}",
    }),
  ) as unknown as Schema.Codec<DeleteOrganizationVPCEndpointInput>;

// Output Schema
export type DeleteOrganizationVPCEndpointOutput = void;
export const DeleteOrganizationVPCEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteOrganizationVPCEndpointOutput>;

// The operation
/**
 * Delete VPC endpoint
 *
 * Deletes the VPC endpoint from the specified Neon organization.
 * If you delete a VPC endpoint from a Neon organization, that VPC endpoint cannot
 * be added back to the Neon organization.
 *
 * @param org_id - The Neon organization ID
 * @param region_id - The Neon region ID.
Azure regions are currently not supported.

 * @param vpc_endpoint_id - The VPC endpoint ID
 */
export const deleteOrganizationVPCEndpoint =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteOrganizationVPCEndpointInput,
    outputSchema: DeleteOrganizationVPCEndpointOutput,
  }));
