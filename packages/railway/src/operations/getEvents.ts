import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getEvents($after: String, $before: String, $environmentId: String, $filter: EventFilterInput, $first: Int, $last: Int, $projectId: String!) {\n  events(after: $after, before: $before, environmentId: $environmentId, filter: $filter, first: $first, last: $last, projectId: $projectId) {\n    edges {\n      cursor\n      node {\n        action\n        activityPayload\n        createdAt\n        environmentId\n        id\n        object\n        payload\n        projectId\n        severity\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetEventsInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  environmentId: Schema.optional(Schema.NullOr(Schema.String)),
  filter: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        action: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              in: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
              notIn: Schema.optional(
                Schema.NullOr(Schema.Array(Schema.String)),
              ),
            }),
          ),
        ),
        object: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              in: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
              notIn: Schema.optional(
                Schema.NullOr(Schema.Array(Schema.String)),
              ),
            }),
          ),
        ),
        serviceId: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              in: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
              notIn: Schema.optional(
                Schema.NullOr(Schema.Array(Schema.String)),
              ),
            }),
          ),
        ),
      }),
    ),
  ),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getEvents",
    type: "query",
  }),
);
export type GetEventsInput = typeof GetEventsInput.Type;

// Output Schema (GraphQL selection set)
export const GetEventsOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        action: Schema.String,
        activityPayload: Schema.NullOr(Schema.Unknown),
        createdAt: Schema.String,
        environmentId: Schema.NullOr(Schema.String),
        id: Schema.String,
        object: Schema.String,
        payload: Schema.NullOr(Schema.Unknown),
        projectId: Schema.NullOr(Schema.String),
        severity: Schema.Literals(["CRITICAL", "INFO", "NOTICE", "WARNING"]),
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("events"));
export type GetEventsOutput = typeof GetEventsOutput.Type;

/**
 * Gets the events for a project.
 */
export const getEvents = API.make(() => ({
  inputSchema: GetEventsInput,
  outputSchema: GetEventsOutput,
}));
