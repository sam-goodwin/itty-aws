import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation removeUserFlags($input: UserFlagsRemoveInput!) {\n  userFlagsRemove(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const RemoveUserFlagsInput = Schema.Struct({
  input: Schema.Struct({
    flags: Schema.Array(Schema.Literals(["BETA"])),
    userId: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "removeUserFlags",
    type: "mutation",
  }),
);
export type RemoveUserFlagsInput = typeof RemoveUserFlagsInput.Type;

// Output Schema (GraphQL selection set)
export const RemoveUserFlagsOutput = Schema.Boolean.pipe(
  T.ResponsePath("userFlagsRemove"),
);
export type RemoveUserFlagsOutput = typeof RemoveUserFlagsOutput.Type;

/**
 * Remove a flag on the user.
 */
export const removeUserFlags = API.make(() => ({
  inputSchema: RemoveUserFlagsInput,
  outputSchema: RemoveUserFlagsOutput,
}));
