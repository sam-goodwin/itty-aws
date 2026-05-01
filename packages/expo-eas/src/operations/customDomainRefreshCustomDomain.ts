import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation customDomainRefreshCustomDomain($customDomainId: ID!) {\n  customDomain {\n    refreshCustomDomain(customDomainId: $customDomainId) {\n      alias {\n        aliasName\n        createdAt\n        deploymentDomain\n        devDomainName\n        id\n        subdomain\n        updatedAt\n        url\n        workerDeployment {\n          activityTimestamp\n          createdAt\n          deploymentDomain\n          deploymentIdentifier\n          devDomainName\n          id\n          signedAssetsURL\n          signedDeploymentURL\n          subdomain\n          url\n        }\n      }\n      createdAt\n      dcvDelegationRecord {\n        dnsContent\n        dnsName\n        dnsType\n        isConfigured\n      }\n      devDomainName\n      dnsRecord {\n        dnsContent\n        dnsName\n        dnsType\n        isConfigured\n      }\n      hostname\n      id\n      setup {\n        sslErrors\n        sslStatus\n        status\n        verificationErrors\n        verificationStatus\n      }\n      updatedAt\n      verificationRecord {\n        dnsContent\n        dnsName\n        dnsType\n        isConfigured\n      }\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const CustomDomainRefreshCustomDomainInput = Schema.Struct({
  customDomainId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "customDomainRefreshCustomDomain",
    type: "mutation",
  }),
);
export type CustomDomainRefreshCustomDomainInput =
  typeof CustomDomainRefreshCustomDomainInput.Type;

// Output Schema (GraphQL selection set)
export const CustomDomainRefreshCustomDomainOutput = Schema.Struct({
  alias: Schema.Struct({
    aliasName: Schema.NullOr(Schema.Unknown),
    createdAt: Schema.String,
    deploymentDomain: Schema.String,
    devDomainName: Schema.Unknown,
    id: Schema.String,
    subdomain: Schema.String,
    updatedAt: Schema.String,
    url: Schema.String,
    workerDeployment: Schema.Struct({
      activityTimestamp: Schema.String,
      createdAt: Schema.String,
      deploymentDomain: Schema.String,
      deploymentIdentifier: Schema.Unknown,
      devDomainName: Schema.Unknown,
      id: Schema.String,
      signedAssetsURL: Schema.String,
      signedDeploymentURL: Schema.String,
      subdomain: Schema.String,
      url: Schema.String,
    }),
  }),
  createdAt: Schema.String,
  dcvDelegationRecord: Schema.NullOr(
    Schema.Struct({
      dnsContent: Schema.String,
      dnsName: Schema.String,
      dnsType: Schema.Literals(["A", "CNAME", "TXT"]),
      isConfigured: Schema.Boolean,
    }),
  ),
  devDomainName: Schema.Unknown,
  dnsRecord: Schema.Struct({
    dnsContent: Schema.String,
    dnsName: Schema.String,
    dnsType: Schema.Literals(["A", "CNAME", "TXT"]),
    isConfigured: Schema.Boolean,
  }),
  hostname: Schema.String,
  id: Schema.String,
  setup: Schema.NullOr(
    Schema.Struct({
      sslErrors: Schema.NullOr(Schema.Array(Schema.String)),
      sslStatus: Schema.NullOr(
        Schema.Literals(["ACTIVE", "ERROR", "PENDING", "TIMED_OUT"]),
      ),
      status: Schema.Literals(["ACTIVE", "ERROR", "PENDING", "TIMED_OUT"]),
      verificationErrors: Schema.NullOr(Schema.Array(Schema.String)),
      verificationStatus: Schema.NullOr(
        Schema.Literals(["ACTIVE", "ERROR", "PENDING", "TIMED_OUT"]),
      ),
    }),
  ),
  updatedAt: Schema.String,
  verificationRecord: Schema.NullOr(
    Schema.Struct({
      dnsContent: Schema.String,
      dnsName: Schema.String,
      dnsType: Schema.Literals(["A", "CNAME", "TXT"]),
      isConfigured: Schema.Boolean,
    }),
  ),
}).pipe(T.ResponsePath("customDomain.refreshCustomDomain"));
export type CustomDomainRefreshCustomDomainOutput =
  typeof CustomDomainRefreshCustomDomainOutput.Type;

export const customDomainRefreshCustomDomain = API.make(() => ({
  inputSchema: CustomDomainRefreshCustomDomainInput,
  outputSchema: CustomDomainRefreshCustomDomainOutput,
}));
