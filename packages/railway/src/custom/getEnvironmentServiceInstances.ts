import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotAuthorized } from "../operations/errors.ts";

/**
 * Hand-written operation (not generated). Railway has no top-level query
 * that lists a project's services — the only way to enumerate them is the
 * `Environment.serviceInstances` connection, which sits one level deeper
 * than the generator's `maxDepth: 3` selection expansion reaches. This
 * file lives outside `src/operations/` so `bun run generate` (which wipes
 * that directory) leaves it intact.
 */
const __document =
  "query environmentServiceInstances($id: String!, $after: String, $before: String, $first: Int, $last: Int) {\n  environment(id: $id) {\n    serviceInstances(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        cursor\n        node {\n          createdAt\n          deletedAt\n          environmentId\n          id\n          serviceId\n          serviceName\n          updatedAt\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetEnvironmentServiceInstancesInput = Schema.Struct({
  /** Environment id whose service instances are listed. */
  id: Schema.String,
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentServiceInstances",
    type: "query",
  }),
);
export type GetEnvironmentServiceInstancesInput =
  typeof GetEnvironmentServiceInstancesInput.Type;

// Output Schema (GraphQL selection set)
export const GetEnvironmentServiceInstancesOutput = Schema.Struct({
  serviceInstances: Schema.Struct({
    edges: Schema.Array(
      Schema.Struct({
        cursor: Schema.String,
        node: Schema.Struct({
          createdAt: Schema.String,
          deletedAt: Schema.NullOr(Schema.String),
          environmentId: Schema.String,
          id: Schema.String,
          serviceId: Schema.String,
          serviceName: Schema.String,
          updatedAt: Schema.String,
        }),
      }),
    ),
    pageInfo: Schema.Struct({
      endCursor: Schema.NullOr(Schema.String),
      hasNextPage: Schema.Boolean,
      hasPreviousPage: Schema.Boolean,
      startCursor: Schema.NullOr(Schema.String),
    }),
  }),
}).pipe(T.ResponsePath("environment"));
export type GetEnvironmentServiceInstancesOutput =
  typeof GetEnvironmentServiceInstancesOutput.Type;

/**
 * Lists the service instances of an environment (one per service in the
 * project) — the only public API for enumerating a project's services,
 * e.g. to find a service id by name.
 */
export const getEnvironmentServiceInstances = API.make(() => ({
  inputSchema: GetEnvironmentServiceInstancesInput,
  outputSchema: GetEnvironmentServiceInstancesOutput,
  errors: [NotAuthorized],
}));
