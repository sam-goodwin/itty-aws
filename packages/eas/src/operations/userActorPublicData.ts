import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query userActorPublicData {\n  userActorPublicData\n}";

// Input Schema (GraphQL variables)
export const UserActorPublicDataInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userActorPublicData",
    type: "query",
  }),
);
export type UserActorPublicDataInput = typeof UserActorPublicDataInput.Type;

// Output Schema (GraphQL selection set)
export const UserActorPublicDataOutput = Schema.Unknown;
export type UserActorPublicDataOutput = typeof UserActorPublicDataOutput.Type;

/**
 * Top-level query object for querying UserActorPublicData publicly.
 */
export const userActorPublicData = API.make(() => ({
  inputSchema: UserActorPublicDataInput,
  outputSchema: UserActorPublicDataOutput,
}));
