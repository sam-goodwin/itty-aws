import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetOrganizationVPCEndpointDetailsInput {
  org_id: string;
  region_id: string;
  vpc_endpoint_id: string;
}
export const GetOrganizationVPCEndpointDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    org_id: Schema.String.pipe(T.PathParam()),
    region_id: Schema.String.pipe(T.PathParam()),
    vpc_endpoint_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}",
    }),
  ) as unknown as Schema.Codec<GetOrganizationVPCEndpointDetailsInput>;

// Output Schema
export interface GetOrganizationVPCEndpointDetailsOutput {
  vpc_endpoint_id: string;
  label: string;
  state: string;
  num_restricted_projects: number;
  example_restricted_projects: string[];
}
export const GetOrganizationVPCEndpointDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    vpc_endpoint_id: Schema.String,
    label: Schema.String,
    state: Schema.String,
    num_restricted_projects: Schema.Number,
    example_restricted_projects: Schema.Array(Schema.String),
  }) as unknown as Schema.Codec<GetOrganizationVPCEndpointDetailsOutput>;

// The operation
/**
 * Retrieve VPC endpoint details
 *
 * Retrieves the current state and configuration details of a specified VPC endpoint.
 *
 * @param org_id - The Neon organization ID
 * @param region_id - The Neon region ID.
Azure regions are currently not supported.

 * @param vpc_endpoint_id - The VPC endpoint ID
 */
export const getOrganizationVPCEndpointDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetOrganizationVPCEndpointDetailsInput,
    outputSchema: GetOrganizationVPCEndpointDetailsOutput,
  }));
