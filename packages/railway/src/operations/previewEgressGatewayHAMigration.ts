import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation egressGatewayHAMigrationPreview($input: EgressGatewayServiceTargetInput!) {\n  egressGatewayHAMigrationPreview(input: $input) {\n    environments {\n      environmentId\n      environmentName\n      error\n      gateways {\n        ipv4\n        region\n        zone\n      }\n      success\n    }\n    ips {\n      ipv4\n      region\n      zone\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const PreviewEgressGatewayHAMigrationInput = Schema.Struct({
  input: Schema.Struct({
    allEnvironments: Schema.optional(Schema.NullOr(Schema.Boolean)),
    environmentId: Schema.String,
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "egressGatewayHAMigrationPreview",
    type: "mutation",
  }),
);
export type PreviewEgressGatewayHAMigrationInput =
  typeof PreviewEgressGatewayHAMigrationInput.Type;

// Output Schema (GraphQL selection set)
export const PreviewEgressGatewayHAMigrationOutput = Schema.Struct({
  environments: Schema.Array(
    Schema.Struct({
      environmentId: Schema.String,
      environmentName: Schema.String,
      error: Schema.NullOr(Schema.String),
      gateways: Schema.Array(
        Schema.Struct({
          ipv4: Schema.String,
          region: Schema.String,
          zone: Schema.NullOr(Schema.String),
        }),
      ),
      success: Schema.Boolean,
    }),
  ),
  ips: Schema.Array(
    Schema.Struct({
      ipv4: Schema.String,
      region: Schema.String,
      zone: Schema.NullOr(Schema.String),
    }),
  ),
}).pipe(T.ResponsePath("egressGatewayHAMigrationPreview"));
export type PreviewEgressGatewayHAMigrationOutput =
  typeof PreviewEgressGatewayHAMigrationOutput.Type;

/**
 * Preview the HA static egress IPs that would be assigned, without applying them. Set allEnvironments to cover all of the service's environments.
 */
export const previewEgressGatewayHAMigration = API.make(() => ({
  inputSchema: PreviewEgressGatewayHAMigrationInput,
  outputSchema: PreviewEgressGatewayHAMigrationOutput,
}));
