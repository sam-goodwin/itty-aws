import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query egressGatewayLegacyPreview($environmentId: String!, $serviceId: String!) {\n  egressGatewayLegacyPreview(environmentId: $environmentId, serviceId: $serviceId) {\n    ipv4\n    region\n    zone\n  }\n}";

// Input Schema (GraphQL variables)
export const GetEgressGatewayLegacyPreviewInput = Schema.Struct({
  environmentId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "egressGatewayLegacyPreview",
    type: "query",
  }),
);
export type GetEgressGatewayLegacyPreviewInput =
  typeof GetEgressGatewayLegacyPreviewInput.Type;

// Output Schema (GraphQL selection set)
export const GetEgressGatewayLegacyPreviewOutput = Schema.Array(
  Schema.Struct({
    ipv4: Schema.String,
    region: Schema.String,
    zone: Schema.NullOr(Schema.String),
  }),
).pipe(T.ResponsePath("egressGatewayLegacyPreview"));
export type GetEgressGatewayLegacyPreviewOutput =
  typeof GetEgressGatewayLegacyPreviewOutput.Type;

/**
 * Preview legacy static egress IP that would be assigned without persisting
 */
export const getEgressGatewayLegacyPreview = API.make(() => ({
  inputSchema: GetEgressGatewayLegacyPreviewInput,
  outputSchema: GetEgressGatewayLegacyPreviewOutput,
}));
