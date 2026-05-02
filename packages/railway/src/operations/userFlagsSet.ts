import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userFlagsSet($input: UserFlagsSetInput!) {\n  userFlagsSet(input: $input)\n}";

// Input Schema (GraphQL variables)
export const UserFlagsSetInput = Schema.Struct({
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
export type UserFlagsSetInput = typeof UserFlagsSetInput.Type;

// Output Schema (GraphQL selection set)
export const UserFlagsSetOutput = Schema.Boolean.pipe(
  T.ResponsePath("userFlagsSet"),
);
export type UserFlagsSetOutput = typeof UserFlagsSetOutput.Type;

/**
 * Set flags on the authenticated user.
 */
export const userFlagsSet = API.make(() => ({
  inputSchema: UserFlagsSetInput,
  outputSchema: UserFlagsSetOutput,
}));
