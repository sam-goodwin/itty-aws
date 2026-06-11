import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getDomains($environmentId: String!, $projectId: String!, $serviceId: String!) {\n  domains(environmentId: $environmentId, projectId: $projectId, serviceId: $serviceId) {\n    customDomains {\n      cdnMode\n      cnameCheck {\n        link\n        message\n        status\n      }\n      createdAt\n      deletedAt\n      domain\n      edgeId\n      environmentId\n      id\n      projectId\n      serviceId\n      status {\n        cdnProvider\n        certificateErrorMessage\n        certificateErrorType\n        certificateRetryable\n        certificateStatus\n        certificateStatusDetailed\n        verificationDnsHost\n        verificationToken\n        verified\n      }\n      syncStatus\n      targetPort\n      updatedAt\n    }\n    serviceDomains {\n      cdnMode\n      createdAt\n      deletedAt\n      domain\n      edgeId\n      environmentId\n      id\n      newDomainName\n      newHostLabel\n      projectId\n      serviceId\n      suffix\n      syncStatus\n      targetPort\n      updatedAt\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetDomainsInput = Schema.Struct({
  environmentId: Schema.String,
  projectId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getDomains",
    type: "query",
  }),
);
export type GetDomainsInput = typeof GetDomainsInput.Type;

// Output Schema (GraphQL selection set)
export const GetDomainsOutput = Schema.Struct({
  customDomains: Schema.Array(
    Schema.Struct({
      cdnMode: Schema.NullOr(Schema.String),
      cnameCheck: Schema.Struct({
        link: Schema.NullOr(Schema.String),
        message: Schema.String,
        status: Schema.Literals([
          "ERROR",
          "INFO",
          "INVALID",
          "VALID",
          "WAITING",
        ]),
      }),
      createdAt: Schema.NullOr(Schema.String),
      deletedAt: Schema.NullOr(Schema.String),
      domain: Schema.String,
      edgeId: Schema.NullOr(Schema.String),
      environmentId: Schema.String,
      id: Schema.String,
      projectId: Schema.NullOr(Schema.String),
      serviceId: Schema.String,
      status: Schema.Struct({
        cdnProvider: Schema.NullOr(
          Schema.Literals([
            "DETECTED_CDN_PROVIDER_CLOUDFLARE",
            "DETECTED_CDN_PROVIDER_UNSPECIFIED",
            "UNRECOGNIZED",
          ]),
        ),
        certificateErrorMessage: Schema.NullOr(Schema.String),
        certificateErrorType: Schema.NullOr(
          Schema.Literals([
            "CERTIFICATE_ERROR_TYPE_AUTHORIZATION_FAILED",
            "CERTIFICATE_ERROR_TYPE_DNS_VALIDATION",
            "CERTIFICATE_ERROR_TYPE_INTERNAL",
            "CERTIFICATE_ERROR_TYPE_KEY_GENERATION",
            "CERTIFICATE_ERROR_TYPE_ORDER_CREATION",
            "CERTIFICATE_ERROR_TYPE_RATE_LIMIT",
            "CERTIFICATE_ERROR_TYPE_UNSPECIFIED",
            "UNRECOGNIZED",
          ]),
        ),
        certificateRetryable: Schema.NullOr(Schema.Boolean),
        certificateStatus: Schema.Literals([
          "CERTIFICATE_STATUS_TYPE_ISSUE_FAILED",
          "CERTIFICATE_STATUS_TYPE_ISSUING",
          "CERTIFICATE_STATUS_TYPE_UNSPECIFIED",
          "CERTIFICATE_STATUS_TYPE_VALID",
          "CERTIFICATE_STATUS_TYPE_VALIDATING_OWNERSHIP",
          "UNRECOGNIZED",
        ]),
        certificateStatusDetailed: Schema.NullOr(
          Schema.Literals([
            "CERTIFICATE_STATUS_TYPE_DETAILED_CLEANING_UP",
            "CERTIFICATE_STATUS_TYPE_DETAILED_COMPLETE",
            "CERTIFICATE_STATUS_TYPE_DETAILED_CREATING_ORDER",
            "CERTIFICATE_STATUS_TYPE_DETAILED_DOWNLOADING_CERTIFICATE",
            "CERTIFICATE_STATUS_TYPE_DETAILED_FAILED",
            "CERTIFICATE_STATUS_TYPE_DETAILED_FETCHING_AUTHORIZATIONS",
            "CERTIFICATE_STATUS_TYPE_DETAILED_FINALIZING_ORDER",
            "CERTIFICATE_STATUS_TYPE_DETAILED_GENERATING_KEYS",
            "CERTIFICATE_STATUS_TYPE_DETAILED_INITIATING_CHALLENGES",
            "CERTIFICATE_STATUS_TYPE_DETAILED_POLLING_AUTHORIZATIONS",
            "CERTIFICATE_STATUS_TYPE_DETAILED_PRESENTING_CHALLENGES",
            "CERTIFICATE_STATUS_TYPE_DETAILED_UNSPECIFIED",
            "UNRECOGNIZED",
          ]),
        ),
        verificationDnsHost: Schema.NullOr(Schema.String),
        verificationToken: Schema.NullOr(Schema.String),
        verified: Schema.Boolean,
      }),
      syncStatus: Schema.Literals([
        "ACTIVE",
        "CREATING",
        "DELETED",
        "DELETING",
        "UNSPECIFIED",
        "UPDATING",
      ]),
      targetPort: Schema.NullOr(Schema.Number),
      updatedAt: Schema.NullOr(Schema.String),
    }),
  ),
  serviceDomains: Schema.Array(
    Schema.Struct({
      cdnMode: Schema.NullOr(Schema.String),
      createdAt: Schema.NullOr(Schema.String),
      deletedAt: Schema.NullOr(Schema.String),
      domain: Schema.String,
      edgeId: Schema.NullOr(Schema.String),
      environmentId: Schema.String,
      id: Schema.String,
      newDomainName: Schema.NullOr(Schema.String),
      newHostLabel: Schema.NullOr(Schema.String),
      projectId: Schema.NullOr(Schema.String),
      serviceId: Schema.String,
      suffix: Schema.NullOr(Schema.String),
      syncStatus: Schema.Literals([
        "ACTIVE",
        "CREATING",
        "DELETED",
        "DELETING",
        "UNSPECIFIED",
        "UPDATING",
      ]),
      targetPort: Schema.NullOr(Schema.Number),
      updatedAt: Schema.NullOr(Schema.String),
    }),
  ),
}).pipe(T.ResponsePath("domains"));
export type GetDomainsOutput = typeof GetDomainsOutput.Type;

/**
 * All domains for a service instance
 */
export const getDomains = API.make(() => ({
  inputSchema: GetDomainsInput,
  outputSchema: GetDomainsOutput,
}));
