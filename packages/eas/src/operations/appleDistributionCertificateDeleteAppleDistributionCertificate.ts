import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation appleDistributionCertificateDeleteAppleDistributionCertificate($id: ID!) {\n  appleDistributionCertificate {\n    deleteAppleDistributionCertificate(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AppleDistributionCertificateDeleteAppleDistributionCertificateInput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName:
        "appleDistributionCertificateDeleteAppleDistributionCertificate",
      type: "mutation",
    }),
  );
export type AppleDistributionCertificateDeleteAppleDistributionCertificateInput =
  typeof AppleDistributionCertificateDeleteAppleDistributionCertificateInput.Type;

// Output Schema (GraphQL selection set)
export const AppleDistributionCertificateDeleteAppleDistributionCertificateOutput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.ResponsePath(
      "appleDistributionCertificate.deleteAppleDistributionCertificate",
    ),
  );
export type AppleDistributionCertificateDeleteAppleDistributionCertificateOutput =
  typeof AppleDistributionCertificateDeleteAppleDistributionCertificateOutput.Type;

export const appleDistributionCertificateDeleteAppleDistributionCertificate =
  API.make(() => ({
    inputSchema:
      AppleDistributionCertificateDeleteAppleDistributionCertificateInput,
    outputSchema:
      AppleDistributionCertificateDeleteAppleDistributionCertificateOutput,
  }));
