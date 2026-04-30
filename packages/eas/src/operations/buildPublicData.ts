import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query buildPublicData {\n  buildPublicData\n}";

// Input Schema (GraphQL variables)
export const BuildPublicDataInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "buildPublicData",
    type: "query",
  }),
);
export type BuildPublicDataInput = typeof BuildPublicDataInput.Type;

// Output Schema (GraphQL selection set)
export const BuildPublicDataOutput = Schema.Unknown;
export type BuildPublicDataOutput = typeof BuildPublicDataOutput.Type;

/**
 * Top-level query object for querying BuildPublicData publicly.
 */
export const buildPublicData = API.make(() => ({
  inputSchema: BuildPublicDataInput,
  outputSchema: BuildPublicDataOutput,
}));
