import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getCustomDomain($id: String!, $projectId: String!) {\n  customDomain(id: $id, projectId: $projectId) {\n    cdnMode\n    cnameCheck {\n      link\n      message\n      status\n    }\n    createdAt\n    deletedAt\n    domain\n    edgeId\n    environmentId\n    id\n    projectId\n    serviceId\n    status {\n      cdnProvider\n      certificateErrorMessage\n      certificateErrorType\n      certificateRetryable\n      certificateStatus\n      certificateStatusDetailed\n      certificates {\n        domainNames\n        expiresAt\n        fingerprintSha256\n        issuedAt\n        keyType\n      }\n      dnsRecords {\n        currentValue\n        fqdn\n        hostlabel\n        purpose\n        recordType\n        requiredValue\n        status\n        zone\n      }\n      verificationDnsHost\n      verificationToken\n      verified\n    }\n    syncStatus\n    targetPort\n    updatedAt\n  }\n}";

// Input Schema (GraphQL variables)
export const GetCustomDomainInput = Schema.Struct({
  id: Schema.String,
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getCustomDomain",
    type: "query",
  }),
);
export type GetCustomDomainInput = typeof GetCustomDomainInput.Type;

// Output Schema (GraphQL selection set)
export const GetCustomDomainOutput = Schema.Struct({
  cdnMode: Schema.NullOr(Schema.String),
  cnameCheck: Schema.Struct({
    link: Schema.NullOr(Schema.String),
    message: Schema.String,
    status: Schema.Literals(["ERROR", "INFO", "INVALID", "VALID", "WAITING"]),
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
    certificates: Schema.NullOr(
      Schema.Array(
        Schema.Struct({
          domainNames: Schema.Array(Schema.String),
          expiresAt: Schema.NullOr(Schema.String),
          fingerprintSha256: Schema.String,
          issuedAt: Schema.NullOr(Schema.String),
          keyType: Schema.Literals([
            "KEY_TYPE_ECDSA",
            "KEY_TYPE_RSA_2048",
            "KEY_TYPE_RSA_4096",
            "KEY_TYPE_UNSPECIFIED",
            "UNRECOGNIZED",
          ]),
        }),
      ),
    ),
    dnsRecords: Schema.Array(
      Schema.Struct({
        currentValue: Schema.String,
        fqdn: Schema.String,
        hostlabel: Schema.String,
        purpose: Schema.Literals([
          "DNS_RECORD_PURPOSE_ACME_DNS01_CHALLENGE",
          "DNS_RECORD_PURPOSE_TRAFFIC_ROUTE",
          "DNS_RECORD_PURPOSE_UNSPECIFIED",
          "UNRECOGNIZED",
        ]),
        recordType: Schema.Literals([
          "DNS_RECORD_TYPE_A",
          "DNS_RECORD_TYPE_CNAME",
          "DNS_RECORD_TYPE_NS",
          "DNS_RECORD_TYPE_TXT",
          "DNS_RECORD_TYPE_UNSPECIFIED",
          "UNRECOGNIZED",
        ]),
        requiredValue: Schema.String,
        status: Schema.Literals([
          "DNS_RECORD_STATUS_PROPAGATED",
          "DNS_RECORD_STATUS_REQUIRES_UPDATE",
          "DNS_RECORD_STATUS_UNSPECIFIED",
          "UNRECOGNIZED",
        ]),
        zone: Schema.String,
      }),
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
}).pipe(T.ResponsePath("customDomain"));
export type GetCustomDomainOutput = typeof GetCustomDomainOutput.Type;

/**
 * Fetch details for a custom domain
 */
export const getCustomDomain = API.make(() => ({
  inputSchema: GetCustomDomainInput,
  outputSchema: GetCustomDomainOutput,
}));
