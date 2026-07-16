// ==========================================================================
// Firebase Hosting API (firebasehosting v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "firebasehosting",
  version: "v1",
  rootUrl: "https://firebasehosting.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface HttpUpdate {
  /** Output only. A text string to serve at the path. */
  desired?: string;
  /** Output only. Whether Hosting was able to find the required file contents on the specified path during its last check. */
  discovered?: string;
  /** Output only. The last time Hosting systems checked for the file contents. */
  lastCheckTime?: string;
  /** Output only. An error encountered during the last contents check. If null, the check completed successfully. */
  checkError?: Status;
  /** Output only. The path to the file. */
  path?: string;
}

export const HttpUpdate: Schema.Codec<HttpUpdate> =
  /*@__PURE__*/ Schema.Struct({
    desired: Schema.optional(Schema.String),
    discovered: Schema.optional(Schema.String),
    lastCheckTime: Schema.optional(Schema.String),
    checkError: Schema.optional(Status),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpUpdate" });

export interface DnsRecord {
  /** Output only. The domain name the record pertains to, e.g. `foo.bar.com.`. */
  domainName?: string;
  /** Output only. The record's type, which determines what data the record contains. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "A"
    | "CNAME"
    | "TXT"
    | "AAAA"
    | "CAA"
    | (string & {});
  /** Output only. The data of the record. The meaning of the value depends on record type: - A and AAAA: IP addresses for the domain name. - CNAME: Another domain to check for records. - TXT: Arbitrary text strings associated with the domain name. Hosting uses TXT records to determine which Firebase projects have permission to act on the domain name's behalf. - CAA: The record's flags, tag, and value, e.g. `0 issue "pki.goog"`. */
  rdata?: string;
  /** Output only. An enum that indicates the a required action for this record. */
  requiredAction?: "NONE" | "ADD" | "REMOVE" | (string & {});
}

export const DnsRecord: Schema.Codec<DnsRecord> =
  /*@__PURE__*/ Schema.Struct({
    domainName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    rdata: Schema.optional(Schema.String),
    requiredAction: Schema.optional(Schema.String),
  }).annotate({ identifier: "DnsRecord" });

export interface DnsRecordSet {
  /** Output only. An error Hosting services encountered when querying your domain name's DNS records. Note: Hosting ignores `NXDOMAIN` errors, as those generally just mean that a domain name hasn't been set up yet. */
  checkError?: Status;
  /** Output only. The domain name the record set pertains to. */
  domainName?: string;
  /** Output only. Records on the domain. */
  records?: ReadonlyArray<DnsRecord>;
}

export const DnsRecordSet: Schema.Codec<DnsRecordSet> =
  /*@__PURE__*/ Schema.Struct({
    checkError: Schema.optional(Status),
    domainName: Schema.optional(Schema.String),
    records: Schema.optional(Schema.Array(DnsRecord)),
  }).annotate({ identifier: "DnsRecordSet" });

export interface DnsUpdates {
  /** The last time Hosting checked your custom domain's DNS records. */
  checkTime?: string;
  /** The set of DNS records Hosting discovered when inspecting a domain. */
  discovered?: ReadonlyArray<DnsRecordSet>;
  /** The set of DNS records Hosting needs to serve secure content on the domain. */
  desired?: ReadonlyArray<DnsRecordSet>;
}

export const DnsUpdates: Schema.Codec<DnsUpdates> =
  /*@__PURE__*/ Schema.Struct({
    checkTime: Schema.optional(Schema.String),
    discovered: Schema.optional(Schema.Array(DnsRecordSet)),
    desired: Schema.optional(Schema.Array(DnsRecordSet)),
  }).annotate({ identifier: "DnsUpdates" });

export interface CertVerification {
  /** Output only. A file to add to your existing, non-Hosting hosting service that confirms your intent to let Hosting create an SSL cert for your domain name. */
  http?: HttpUpdate;
  /** Output only. A `TXT` record to add to your DNS records that confirms your intent to let Hosting create an SSL cert for your domain name. */
  dns?: DnsUpdates;
}

export const CertVerification: Schema.Codec<CertVerification> =
  /*@__PURE__*/ Schema.Struct({
    http: Schema.optional(HttpUpdate),
    dns: Schema.optional(DnsUpdates),
  }).annotate({ identifier: "CertVerification" });

export interface LiveMigrationStep {
  /** Output only. DNS updates to facilitate your domain's zero-downtime migration to Hosting. */
  dnsUpdates?: DnsUpdates;
  /** Output only. Issues that prevent the current step from completing. */
  issues?: ReadonlyArray<Status>;
  /** Output only. A pair of ACME challenges that Hosting's Certificate Authority (CA) can use to create an SSL cert for your domain name. Use either the DNS or HTTP challenge; it's not necessary to provide both. */
  certVerification?: CertVerification;
  /** Output only. The state of the live migration step, indicates whether you should work to complete the step now, in the future, or have already completed it. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PREPARING"
    | "PENDING"
    | "INCOMPLETE"
    | "PROCESSING"
    | "COMPLETE"
    | (string & {});
}

export const LiveMigrationStep: Schema.Codec<LiveMigrationStep> =
  /*@__PURE__*/ Schema.Struct({
    dnsUpdates: Schema.optional(DnsUpdates),
    issues: Schema.optional(Schema.Array(Status)),
    certVerification: Schema.optional(CertVerification),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveMigrationStep" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Codec<CancelOperationRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface CustomDomainMetadata {
  /** The `HostState` of the domain name this `CustomDomain` refers to. */
  hostState?:
    | "HOST_STATE_UNSPECIFIED"
    | "HOST_UNHOSTED"
    | "HOST_UNREACHABLE"
    | "HOST_MISMATCH"
    | "HOST_CONFLICT"
    | "HOST_ACTIVE"
    | (string & {});
  /** A list of issues that are currently preventing Hosting from completing the operation. These are generally DNS-related issues that Hosting encounters when querying a domain name's records or attempting to mint an SSL certificate. */
  issues?: ReadonlyArray<Status>;
  /** A set of DNS record updates that allow Hosting to serve secure content on your domain name. The record type determines the update's purpose: - `A` and `AAAA`: Updates your domain name's IP addresses so that they direct traffic to Hosting servers. - `TXT`: Updates ownership permissions on your domain name, letting Hosting know that your custom domain's project has permission to perform actions for that domain name. - `CAA`: Updates your domain name's list of authorized Certificate Authorities (CAs). Only present if you have existing `CAA` records that prohibit Hosting's CA from minting certs for your domain name. These updates include all DNS changes you'll need to get started with Hosting, but, if made all at once, can result in a brief period of downtime for your domain name--while Hosting creates and uploads an SSL cert, for example. If you'd like to add your domain name to Hosting without downtime, complete the `liveMigrationSteps` first, before making the remaining updates in this field. */
  quickSetupUpdates?: DnsUpdates;
  /** The `OwnershipState` of the domain name this `CustomDomain` refers to. */
  ownershipState?:
    | "OWNERSHIP_STATE_UNSPECIFIED"
    | "OWNERSHIP_MISSING"
    | "OWNERSHIP_UNREACHABLE"
    | "OWNERSHIP_MISMATCH"
    | "OWNERSHIP_CONFLICT"
    | "OWNERSHIP_PENDING"
    | "OWNERSHIP_ACTIVE"
    | (string & {});
  /** The `CertState` of the domain name's SSL certificate. */
  certState?:
    | "CERT_STATE_UNSPECIFIED"
    | "CERT_PREPARING"
    | "CERT_VALIDATING"
    | "CERT_PROPAGATING"
    | "CERT_ACTIVE"
    | "CERT_EXPIRING_SOON"
    | "CERT_EXPIRED"
    | (string & {});
  /** A set of DNS record updates and ACME challenges that allow you to transition domain names to Firebase Hosting with zero downtime. These updates allow Hosting to create an SSL certificate and establish ownership for your custom domain before Hosting begins serving traffic on it. If your domain name is already in active use with another provider, add one of the challenges and make the recommended DNS updates. After adding challenges and adjusting DNS records as necessary, wait for the `ownershipState` to be `OWNERSHIP_ACTIVE` and the `certState` to be `CERT_ACTIVE` before sending traffic to Hosting. */
  liveMigrationSteps?: ReadonlyArray<LiveMigrationStep>;
}

export const CustomDomainMetadata: Schema.Codec<CustomDomainMetadata> =
  /*@__PURE__*/ Schema.Struct({
    hostState: Schema.optional(Schema.String),
    issues: Schema.optional(Schema.Array(Status)),
    quickSetupUpdates: Schema.optional(DnsUpdates),
    ownershipState: Schema.optional(Schema.String),
    certState: Schema.optional(Schema.String),
    liveMigrationSteps: Schema.optional(Schema.Array(LiveMigrationStep)),
  }).annotate({ identifier: "CustomDomainMetadata" });

export interface ListOperationsResponse {
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface ListOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page size. */
  pageSize?: number;
}

export const ListOperationsRequest = /*@__PURE__*/ Schema.Struct({
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  name: Schema.String.pipe(T.HttpPath("name")),
  returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("returnPartialSuccess"),
  ),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Codec<ListOperationsRequest>;

export type ListOperationsResponse_Op = ListOperationsResponse;
export const ListOperationsResponse_Op = /*@__PURE__*/ ListOperationsResponse;

export type ListOperationsError = DefaultErrors | NotFound | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listOperations: API.PaginatedOperationMethod<
  ListOperationsRequest,
  ListOperationsResponse_Op,
  ListOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOperationsRequest,
  output: ListOperationsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelOperationsRequest>;

export type CancelOperationsResponse = Empty;
export const CancelOperationsResponse = /*@__PURE__*/ Empty;

export type CancelOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelOperations: API.OperationMethod<
  CancelOperationsRequest,
  CancelOperationsResponse,
  CancelOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelOperationsRequest,
  output: CancelOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOperationsRequest>;

export type DeleteOperationsResponse = Empty;
export const DeleteOperationsResponse = /*@__PURE__*/ Empty;

export type DeleteOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteOperations: API.OperationMethod<
  DeleteOperationsRequest,
  DeleteOperationsResponse,
  DeleteOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOperationsRequest,
  output: DeleteOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsSitesCustomDomainsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsSitesCustomDomainsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsSitesCustomDomainsOperationsRequest>;

export type DeleteProjectsSitesCustomDomainsOperationsResponse = Empty;
export const DeleteProjectsSitesCustomDomainsOperationsResponse =
  /*@__PURE__*/ Empty;

export type DeleteProjectsSitesCustomDomainsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** DeleteOperation is a part of the google.longrunning.Operations interface, but is not implemented for CustomDomain resources. */
export const deleteProjectsSitesCustomDomainsOperations: API.OperationMethod<
  DeleteProjectsSitesCustomDomainsOperationsRequest,
  DeleteProjectsSitesCustomDomainsOperationsResponse,
  DeleteProjectsSitesCustomDomainsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsSitesCustomDomainsOperationsRequest,
  output: DeleteProjectsSitesCustomDomainsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsSitesCustomDomainsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsSitesCustomDomainsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsSitesCustomDomainsOperationsRequest>;

export type CancelProjectsSitesCustomDomainsOperationsResponse = Empty;
export const CancelProjectsSitesCustomDomainsOperationsResponse =
  /*@__PURE__*/ Empty;

export type CancelProjectsSitesCustomDomainsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** CancelOperation is a part of the google.longrunning.Operations interface, but is not implemented for CustomDomain resources. */
export const cancelProjectsSitesCustomDomainsOperations: API.OperationMethod<
  CancelProjectsSitesCustomDomainsOperationsRequest,
  CancelProjectsSitesCustomDomainsOperationsResponse,
  CancelProjectsSitesCustomDomainsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsSitesCustomDomainsOperationsRequest,
  output: CancelProjectsSitesCustomDomainsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
