import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userFlagsSet($input: UserFlagsSetInput!) {\n  userFlagsSet(input: $input)\n}";

// Input Schema (GraphQL variables)
export const SetUserFlagsInput = Schema.Struct({
  input: Schema.Struct({
    flags: Schema.Array(Schema.Literals(["BETA"])),
    userId: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userFlagsSet",
    type: "mutation",
  }),
);
export type SetUserFlagsInput = typeof SetUserFlagsInput.Type;

// Output Schema (GraphQL selection set)
export const SetUserFlagsOutput = Schema.Boolean.pipe(
  T.ResponsePath("userFlagsSet"),
);
export type SetUserFlagsOutput = typeof SetUserFlagsOutput.Type;

/**
 * Set flags on the authenticated user.
 */
export const setUserFlags = API.make(() => ({
  inputSchema: SetUserFlagsInput,
  outputSchema: SetUserFlagsOutput,
}));
