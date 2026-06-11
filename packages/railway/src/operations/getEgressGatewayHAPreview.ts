import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getEgressGatewayHAPreview($environmentId: String!, $serviceId: String!) {\n  egressGatewayHAPreview(environmentId: $environmentId, serviceId: $serviceId) {\n    ipv4\n    region\n    zone\n  }\n}";

// Input Schema (GraphQL variables)
export const GetEgressGatewayHAPreviewInput = Schema.Struct({
  environmentId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getEgressGatewayHAPreview",
    type: "query",
  }),
);
export type GetEgressGatewayHAPreviewInput =
  typeof GetEgressGatewayHAPreviewInput.Type;

// Output Schema (GraphQL selection set)
export const GetEgressGatewayHAPreviewOutput = Schema.Array(
  Schema.Struct({
    ipv4: Schema.String,
    region: Schema.String,
    zone: Schema.NullOr(Schema.String),
  }),
).pipe(T.ResponsePath("egressGatewayHAPreview"));
export type GetEgressGatewayHAPreviewOutput =
  typeof GetEgressGatewayHAPreviewOutput.Type;

/**
 * Preview HA static egress IPs that would be assigned without persisting
 */
export const getEgressGatewayHAPreview = API.make(() => ({
  inputSchema: GetEgressGatewayHAPreviewInput,
  outputSchema: GetEgressGatewayHAPreviewOutput,
}));
