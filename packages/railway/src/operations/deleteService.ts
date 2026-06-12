import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotAuthorized, ProjectNotFound } from "./errors.ts";

const __document =
  "mutation serviceDelete($environmentId: String, $id: String!) {\n  serviceDelete(environmentId: $environmentId, id: $id)\n}";

// Input Schema (GraphQL variables)
export const DeleteServiceInput = Schema.Struct({
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
export type DeleteServiceInput = typeof DeleteServiceInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteServiceOutput = Schema.Boolean.pipe(
  T.ResponsePath("serviceDelete"),
);
export type DeleteServiceOutput = typeof DeleteServiceOutput.Type;

/**
 * Deletes a service.
 */
export const deleteService = API.make(() => ({
  inputSchema: DeleteServiceInput,
  outputSchema: DeleteServiceOutput,
  errors: [NotAuthorized, ProjectNotFound],
}));
