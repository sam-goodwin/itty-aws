import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query resourceAccess($explicitResourceOwner: ExplicitOwnerInput!) {\n  resourceAccess(explicitResourceOwner: $explicitResourceOwner) {\n    deployment {\n      disallowed\n    }\n    project {\n      disallowed\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetResourceAccessInput = Schema.Struct({
  explicitResourceOwner: Schema.Struct({
    id: Schema.String,
    type: Schema.optional(Schema.NullOr(Schema.Literals(["WORKSPACE"]))),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "resourceAccess",
    type: "query",
  }),
);
export type GetResourceAccessInput = typeof GetResourceAccessInput.Type;

// Output Schema (GraphQL selection set)
export const GetResourceAccessOutput = Schema.Struct({
  deployment: Schema.Struct({
    disallowed: Schema.NullOr(Schema.String),
  }),
  project: Schema.Struct({
    disallowed: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("resourceAccess"));
export type GetResourceAccessOutput = typeof GetResourceAccessOutput.Type;

/**
 * Get resource access for the current user or workspace
 */
export const getResourceAccess = API.make(() => ({
  inputSchema: GetResourceAccessInput,
  outputSchema: GetResourceAccessOutput,
}));
