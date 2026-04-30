import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation appleAppIdentifier {\n  appleAppIdentifier\n}";

// Input Schema (GraphQL variables)
export const AppleAppIdentifierInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "appleAppIdentifier",
    type: "mutation",
  }),
);
export type AppleAppIdentifierInput = typeof AppleAppIdentifierInput.Type;

// Output Schema (GraphQL selection set)
export const AppleAppIdentifierOutput = Schema.Unknown;
export type AppleAppIdentifierOutput = typeof AppleAppIdentifierOutput.Type;

/**
 * Mutations that modify an Identifier for an iOS App
 */
export const appleAppIdentifier = API.make(() => ({
  inputSchema: AppleAppIdentifierInput,
  outputSchema: AppleAppIdentifierOutput,
}));
