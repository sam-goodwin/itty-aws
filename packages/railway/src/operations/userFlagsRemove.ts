import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userFlagsRemove($input: UserFlagsRemoveInput!) {\n  userFlagsRemove(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UserFlagsRemoveInput = Schema.Struct({
  input: Schema.Struct({
    flags: Schema.Array(Schema.Literals(["BETA"])),
    userId: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userFlagsRemove",
    type: "mutation",
  }),
);
export type UserFlagsRemoveInput = typeof UserFlagsRemoveInput.Type;

// Output Schema (GraphQL selection set)
export const UserFlagsRemoveOutput = Schema.Boolean.pipe(
  T.ResponsePath("userFlagsRemove"),
);
export type UserFlagsRemoveOutput = typeof UserFlagsRemoveOutput.Type;

/**
 * Remove a flag on the user.
 */
export const userFlagsRemove = API.make(() => ({
  inputSchema: UserFlagsRemoveInput,
  outputSchema: UserFlagsRemoveOutput,
}));
