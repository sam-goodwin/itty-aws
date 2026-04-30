import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation fingerprint {\n  fingerprint\n}";

// Input Schema (GraphQL variables)
export const FingerprintInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "fingerprint",
    type: "mutation",
  }),
);
export type FingerprintInput = typeof FingerprintInput.Type;

// Output Schema (GraphQL selection set)
export const FingerprintOutput = Schema.Unknown;
export type FingerprintOutput = typeof FingerprintOutput.Type;

/**
 * Mutations that modify App fingerprints
 */
export const fingerprint = API.make(() => ({
  inputSchema: FingerprintInput,
  outputSchema: FingerprintOutput,
}));
