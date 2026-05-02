import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation serviceInstanceUpdate($environmentId: String, $input: ServiceInstanceUpdateInput!, $serviceId: String!) {\n  serviceInstanceUpdate(environmentId: $environmentId, input: $input, serviceId: $serviceId)\n}";

// Input Schema (GraphQL variables)
export const ServiceInstanceUpdateInput = Schema.Struct({
  environmentId: Schema.optional(Schema.NullOr(Schema.String)),
  input: Schema.Struct({
    buildCommand: Schema.optional(Schema.NullOr(Schema.String)),
    builder: Schema.optional(
      Schema.NullOr(
        Schema.Literals(["HEROKU", "NIXPACKS", "PAKETO", "RAILPACK"]),
      ),
    ),
    cronSchedule: Schema.optional(Schema.NullOr(Schema.String)),
    dockerfilePath: Schema.optional(Schema.NullOr(Schema.String)),
    drainingSeconds: Schema.optional(Schema.NullOr(Schema.Number)),
    healthcheckPath: Schema.optional(Schema.NullOr(Schema.String)),
    healthcheckTimeout: Schema.optional(Schema.NullOr(Schema.Number)),
    ipv6EgressEnabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
    multiRegionConfig: Schema.optional(Schema.NullOr(Schema.Unknown)),
    nixpacksPlan: Schema.optional(Schema.NullOr(Schema.Unknown)),
    numReplicas: Schema.optional(Schema.NullOr(Schema.Number)),
    overlapSeconds: Schema.optional(Schema.NullOr(Schema.Number)),
    preDeployCommand: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    railwayConfigFile: Schema.optional(Schema.NullOr(Schema.String)),
    region: Schema.optional(Schema.NullOr(Schema.String)),
    registryCredentials: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          password: Schema.String,
          username: Schema.String,
        }),
      ),
    ),
    restartPolicyMaxRetries: Schema.optional(Schema.NullOr(Schema.Number)),
    restartPolicyType: Schema.optional(
      Schema.NullOr(Schema.Literals(["ALWAYS", "NEVER", "ON_FAILURE"])),
    ),
    rootDirectory: Schema.optional(Schema.NullOr(Schema.String)),
    sleepApplication: Schema.optional(Schema.NullOr(Schema.Boolean)),
    source: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          image: Schema.optional(Schema.NullOr(Schema.String)),
          repo: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
    startCommand: Schema.optional(Schema.NullOr(Schema.String)),
    watchPatterns: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  }),
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceInstanceUpdate",
    type: "mutation",
  }),
);
export type ServiceInstanceUpdateInput = typeof ServiceInstanceUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const ServiceInstanceUpdateOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceInstanceUpdate"),
);
export type ServiceInstanceUpdateOutput =
  typeof ServiceInstanceUpdateOutput.Type;

/**
 * Update a service instance
 */
export const serviceInstanceUpdate = API.make(() => ({
  inputSchema: ServiceInstanceUpdateInput,
  outputSchema: ServiceInstanceUpdateOutput,
}));
