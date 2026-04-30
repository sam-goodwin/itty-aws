import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation appleDistributionCertificate {\n  appleDistributionCertificate\n}";

// Input Schema (GraphQL variables)
export const AppleDistributionCertificateInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "appleDistributionCertificate",
    type: "mutation",
  }),
);
export type AppleDistributionCertificateInput =
  typeof AppleDistributionCertificateInput.Type;

// Output Schema (GraphQL selection set)
export const AppleDistributionCertificateOutput = Schema.Unknown;
export type AppleDistributionCertificateOutput =
  typeof AppleDistributionCertificateOutput.Type;

/**
 * Mutations that modify a Distribution Certificate
 */
export const appleDistributionCertificate = API.make(() => ({
  inputSchema: AppleDistributionCertificateInput,
  outputSchema: AppleDistributionCertificateOutput,
}));
