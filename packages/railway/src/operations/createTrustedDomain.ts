import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation createTrustedDomain($input: WorkspaceTrustedDomainCreateInput!) {\n  trustedDomainCreate(input: $input) {\n    domainName\n    id\n    role\n    status\n    verificationData {\n      dnsHost\n      domainMatch {\n        cdnMode\n        createdAt\n        deletedAt\n        domain\n        edgeId\n        environmentId\n        id\n        projectId\n        serviceId\n        targetPort\n        updatedAt\n      }\n      domainStatus {\n        cdnProvider\n        certificateErrorMessage\n        certificateErrorType\n        certificateRetryable\n        certificateStatus\n        certificateStatusDetailed\n        verificationDnsHost\n        verificationToken\n        verified\n      }\n      token\n    }\n    verificationType\n    workspaceId\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateTrustedDomainInput = Schema.Struct({
  input: Schema.Struct({
    domainName: Schema.String,
    role: Schema.String,
    workspaceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "createTrustedDomain",
    type: "mutation",
  }),
);
export type CreateTrustedDomainInput = typeof CreateTrustedDomainInput.Type;

// Output Schema (GraphQL selection set)
export const CreateTrustedDomainOutput = Schema.Struct({
  domainName: Schema.String,
  id: Schema.String,
  role: Schema.String,
  status: Schema.Literals(["FAILED", "PENDING", "VERIFIED"]),
  verificationData: Schema.Struct({
    dnsHost: Schema.NullOr(Schema.String),
    domainMatch: Schema.NullOr(
      Schema.Struct({
        cdnMode: Schema.NullOr(Schema.String),
        createdAt: Schema.NullOr(Schema.String),
        deletedAt: Schema.NullOr(Schema.String),
        domain: Schema.String,
        edgeId: Schema.NullOr(Schema.String),
        environmentId: Schema.String,
        id: Schema.String,
        projectId: Schema.NullOr(Schema.String),
        serviceId: Schema.String,
        targetPort: Schema.NullOr(Schema.Number),
        updatedAt: Schema.NullOr(Schema.String),
      }),
    ),
    domainStatus: Schema.NullOr(
      Schema.Struct({
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
    ),
    token: Schema.NullOr(Schema.String),
  }),
  verificationType: Schema.String,
  workspaceId: Schema.String,
}).pipe(T.ResponsePath("trustedDomainCreate"));
export type CreateTrustedDomainOutput = typeof CreateTrustedDomainOutput.Type;

/**
 * Create a new trusted domain for this workspace
 */
export const createTrustedDomain = API.make(() => ({
  inputSchema: CreateTrustedDomainInput,
  outputSchema: CreateTrustedDomainOutput,
}));
