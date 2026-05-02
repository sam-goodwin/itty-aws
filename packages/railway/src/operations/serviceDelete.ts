import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation serviceDelete($environmentId: String, $id: String!) {\n  serviceDelete(environmentId: $environmentId, id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ServiceDeleteInput = Schema.Struct({
  environmentId: Schema.optional(Schema.NullOr(Schema.String)),
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "serviceDelete",
    type: "mutation",
  }),
);
export type ServiceDeleteInput = typeof ServiceDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const ServiceDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceDelete"),
);
export type ServiceDeleteOutput = typeof ServiceDeleteOutput.Type;

/**
 * Deletes a service.
 */
export const serviceDelete = API.make(() => ({
  inputSchema: ServiceDeleteInput,
  outputSchema: ServiceDeleteOutput,
}));
