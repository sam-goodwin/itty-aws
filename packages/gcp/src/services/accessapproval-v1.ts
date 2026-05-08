// ==========================================================================
// Access Approval API (accessapproval v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "accessapproval",
  version: "v1",
  rootUrl: "https://accessapproval.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ApproveApprovalRequestMessage {
  /** The expiration time of this approval. */
  expireTime?: string;
}

export const ApproveApprovalRequestMessage: Schema.Schema<ApproveApprovalRequestMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expireTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApproveApprovalRequestMessage" });

export interface DismissDecision {
  /** The time at which the approval request was dismissed. */
  dismissTime?: string;
  /** This field will be true if the ApprovalRequest was implicitly dismissed due to inaction by the access approval approvers (the request is not acted on by the approvers before the exiration time). */
  implicit?: boolean;
}

export const DismissDecision: Schema.Schema<DismissDecision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dismissTime: Schema.optional(Schema.String),
    implicit: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DismissDecision" });

export interface EnrolledService {
  /** The product for which Access Approval will be enrolled. Allowed values are listed below (case-sensitive): * all * GA * Access Context Manager * Anthos Identity Service * AlloyDB for PostgreSQL * Apigee * Application Integration * App Hub * Artifact Registry * Anthos Service Mesh * Access Transparency * BigQuery * Certificate Authority Service * Cloud Bigtable * CCAI Assist and Knowledge * Cloud Dataflow * Cloud Dataproc * CEP Security Gateway * Compliance Evaluation Service * Cloud Firestore * Cloud Healthcare API * Chronicle * Cloud AI Companion Gateway - Titan * Google Cloud Armor * Cloud Asset Inventory * Cloud Asset Search * Cloud Deploy * Cloud DNS * Cloud Latency * Cloud Memorystore for Redis * CloudNet Control * Cloud Riptide * Cloud Tasks * Cloud Trace * Cloud Data Transfer * Cloud Composer * Integration Connectors * Contact Center AI Insights * Cloud Pub/Sub * Cloud Run * Resource Manager * Cloud Spanner * Database Center * Cloud Dataform * Cloud Data Fusion * Dataplex * Dialogflow Customer Experience Edition * Cloud DLP * Document AI * Edge Container * Edge Network * Cloud EKM * Eventarc * Firebase Data Connect * Firebase Rules * App Engine * Cloud Build * Compute Engine * Cloud Functions (2nd Gen) * Cloud Filestore * Cloud Interconnect * Cloud NetApp Volumes * Cloud Storage * Generative AI App Builder * Google Kubernetes Engine * Backup for GKE API * GKE Connect * GKE Hub * Hoverboard * Cloud HSM * Cloud Identity and Access Management * Cloud Identity-Aware Proxy * Infrastructure Manager * Identity Storage Service * Key Access Justifications * Cloud Key Management Service * Cloud Logging * Looker (Google Cloud core) * Looker Studio * Management Hub * Model Armor * Cloud Monitoring * Cloud NAT * Connectivity Hub * External passthrough Network Load Balancer * OIDC One * Organization Policy Service * Org Lifecycle * Persistent Disk * Parameter Manager * Private Services Access * Regional Internal Application Load Balancer * Storage Batch Operations * Cloud Security Command Center * Secure Source Manager * Seeker * Service Provisioning * Speaker ID * Secret Manager * Cloud SQL * Cloud Speech-to-Text * Traffic Director * Cloud Text-to-Speech * USPS Andromeda * Vertex AI * Virtual Private Cloud (VPC) * VPC Access * VPC Service Controls Troubleshooter * VPC virtnet * Cloud Workstations * Web Risk Note: These values are supported as input for legacy purposes, but will not be returned from the API. * all * ga-only * appengine.googleapis.com * artifactregistry.googleapis.com * bigquery.googleapis.com * bigtable.googleapis.com * container.googleapis.com * cloudkms.googleapis.com * cloudresourcemanager.googleapis.com * cloudsql.googleapis.com * compute.googleapis.com * dataflow.googleapis.com * dataproc.googleapis.com * dlp.googleapis.com * iam.googleapis.com * logging.googleapis.com * orgpolicy.googleapis.com * pubsub.googleapis.com * spanner.googleapis.com * secretmanager.googleapis.com * speakerid.googleapis.com * storage.googleapis.com Calls to UpdateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.). Note: 'all' will enroll the resource in all products supported at both 'GA' and 'Preview' levels. More information about levels of support is available at https://cloud.google.com/access-approval/docs/supported-services */
  cloudProduct?: string;
  /** The enrollment level of the service. */
  enrollmentLevel?:
    | "ENROLLMENT_LEVEL_UNSPECIFIED"
    | "BLOCK_ALL"
    | (string & {});
}

export const EnrolledService: Schema.Schema<EnrolledService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudProduct: Schema.optional(Schema.String),
    enrollmentLevel: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnrolledService" });

export interface AugmentedInfo {
  /** For command-line tools, the full command-line exactly as entered by the actor without adding any additional characters (such as quotation marks). */
  command?: string;
}

export const AugmentedInfo: Schema.Schema<AugmentedInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    command: Schema.optional(Schema.String),
  }).annotate({ identifier: "AugmentedInfo" });

export interface DismissApprovalRequestMessage {}

export const DismissApprovalRequestMessage: Schema.Schema<DismissApprovalRequestMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DismissApprovalRequestMessage",
  });

export interface ResourceProperties {
  /** Whether an approval will exclude the descendants of the resource being requested. */
  excludesDescendants?: boolean;
}

export const ResourceProperties: Schema.Schema<ResourceProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    excludesDescendants: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ResourceProperties" });

export interface AccessReason {
  /** More detail about certain reason types. See comments for each type above. */
  detail?: string;
  /** Type of access reason. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "CUSTOMER_INITIATED_SUPPORT"
    | "GOOGLE_INITIATED_SERVICE"
    | "GOOGLE_INITIATED_REVIEW"
    | "THIRD_PARTY_DATA_REQUEST"
    | "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT"
    | "CLOUD_INITIATED_ACCESS"
    | (string & {});
}

export const AccessReason: Schema.Schema<AccessReason> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detail: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessReason" });

export interface AccessLocations {
  /** The "home office" location of the Google administrator. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location */
  principalOfficeCountry?: string;
  /** Physical location of the Google administrator at the time of the access. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location */
  principalPhysicalLocationCountry?: string;
}

export const AccessLocations: Schema.Schema<AccessLocations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalOfficeCountry: Schema.optional(Schema.String),
    principalPhysicalLocationCountry: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessLocations" });

export interface SignatureInfo {
  /** The hashing algorithm used for signature verification. It will only be present in the case of Google managed keys. */
  googleKeyAlgorithm?:
    | "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED"
    | "GOOGLE_SYMMETRIC_ENCRYPTION"
    | "AES_128_GCM"
    | "AES_256_GCM"
    | "AES_128_CBC"
    | "AES_256_CBC"
    | "AES_128_CTR"
    | "AES_256_CTR"
    | "RSA_SIGN_PSS_2048_SHA256"
    | "RSA_SIGN_PSS_3072_SHA256"
    | "RSA_SIGN_PSS_4096_SHA256"
    | "RSA_SIGN_PSS_4096_SHA512"
    | "RSA_SIGN_PKCS1_2048_SHA256"
    | "RSA_SIGN_PKCS1_3072_SHA256"
    | "RSA_SIGN_PKCS1_4096_SHA256"
    | "RSA_SIGN_PKCS1_4096_SHA512"
    | "RSA_SIGN_RAW_PKCS1_2048"
    | "RSA_SIGN_RAW_PKCS1_3072"
    | "RSA_SIGN_RAW_PKCS1_4096"
    | "RSA_DECRYPT_OAEP_2048_SHA256"
    | "RSA_DECRYPT_OAEP_3072_SHA256"
    | "RSA_DECRYPT_OAEP_4096_SHA256"
    | "RSA_DECRYPT_OAEP_4096_SHA512"
    | "RSA_DECRYPT_OAEP_2048_SHA1"
    | "RSA_DECRYPT_OAEP_3072_SHA1"
    | "RSA_DECRYPT_OAEP_4096_SHA1"
    | "EC_SIGN_P256_SHA256"
    | "EC_SIGN_P384_SHA384"
    | "EC_SIGN_SECP256K1_SHA256"
    | "EC_SIGN_ED25519"
    | "HMAC_SHA256"
    | "HMAC_SHA1"
    | "HMAC_SHA384"
    | "HMAC_SHA512"
    | "HMAC_SHA224"
    | "EXTERNAL_SYMMETRIC_ENCRYPTION"
    | "ML_KEM_768"
    | "ML_KEM_1024"
    | "KEM_XWING"
    | "PQ_SIGN_ML_DSA_44"
    | "PQ_SIGN_ML_DSA_65"
    | "PQ_SIGN_ML_DSA_87"
    | "PQ_SIGN_SLH_DSA_SHA2_128S"
    | "PQ_SIGN_HASH_SLH_DSA_SHA2_128S_SHA256"
    | "PQ_SIGN_ML_DSA_44_EXTERNAL_MU"
    | "PQ_SIGN_ML_DSA_65_EXTERNAL_MU"
    | "PQ_SIGN_ML_DSA_87_EXTERNAL_MU"
    | (string & {});
  /** The public key for the Google default signing, encoded in PEM format. The signature was created using a private key which may be verified using this public key. */
  googlePublicKeyPem?: string;
  /** The digital signature. */
  signature?: string;
  /** The resource name of the customer CryptoKeyVersion used for signing. */
  customerKmsKeyVersion?: string;
  /** The ApprovalRequest that is serialized without the SignatureInfo message field. This data is used with the hashing algorithm to generate the digital signature, and it can be used for signature verification. */
  serializedApprovalRequest?: string;
}

export const SignatureInfo: Schema.Schema<SignatureInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleKeyAlgorithm: Schema.optional(Schema.String),
    googlePublicKeyPem: Schema.optional(Schema.String),
    signature: Schema.optional(Schema.String),
    customerKmsKeyVersion: Schema.optional(Schema.String),
    serializedApprovalRequest: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignatureInfo" });

export interface ApproveDecision {
  /** If set, denotes the timestamp at which the approval is invalidated. */
  invalidateTime?: string;
  /** The signature for the ApprovalRequest and details on how it was signed. */
  signatureInfo?: SignatureInfo;
  /** The time at which the approval expires. */
  expireTime?: string;
  /** The time at which approval was granted. */
  approveTime?: string;
  /** True when the request has been approved by the customer's defined policy. */
  policyApproved?: boolean;
  /** True when the request has been auto-approved. */
  autoApproved?: boolean;
}

export const ApproveDecision: Schema.Schema<ApproveDecision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invalidateTime: Schema.optional(Schema.String),
    signatureInfo: Schema.optional(SignatureInfo),
    expireTime: Schema.optional(Schema.String),
    approveTime: Schema.optional(Schema.String),
    policyApproved: Schema.optional(Schema.Boolean),
    autoApproved: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ApproveDecision" });

export interface ApprovalRequest {
  /** The time at which approval was requested. */
  requestTime?: string;
  /** Properties related to the resource represented by requested_resource_name. */
  requestedResourceProperties?: ResourceProperties;
  /** The requested access duration. */
  requestedDuration?: string;
  /** The request was dismissed. */
  dismiss?: DismissDecision;
  /** The resource name of the request. Format is "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}". */
  name?: string;
  /** This field contains the augmented information of the request. */
  requestedAugmentedInfo?: AugmentedInfo;
  /** The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification. */
  requestedResourceName?: string;
  /** The access reason for which approval is being requested. */
  requestedReason?: AccessReason;
  /** The locations for which approval is being requested. */
  requestedLocations?: AccessLocations;
  /** Access was approved. */
  approve?: ApproveDecision;
  /** The original requested expiration for the approval. Calculated by adding the requested_duration to the request_time. */
  requestedExpiration?: string;
}

export const ApprovalRequest: Schema.Schema<ApprovalRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestTime: Schema.optional(Schema.String),
    requestedResourceProperties: Schema.optional(ResourceProperties),
    requestedDuration: Schema.optional(Schema.String),
    dismiss: Schema.optional(DismissDecision),
    name: Schema.optional(Schema.String),
    requestedAugmentedInfo: Schema.optional(AugmentedInfo),
    requestedResourceName: Schema.optional(Schema.String),
    requestedReason: Schema.optional(AccessReason),
    requestedLocations: Schema.optional(AccessLocations),
    approve: Schema.optional(ApproveDecision),
    requestedExpiration: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApprovalRequest" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ListApprovalRequestsResponse {
  /** Approval request details. */
  approvalRequests?: ReadonlyArray<ApprovalRequest>;
  /** Token to retrieve the next page of results, or empty if there are no more. */
  nextPageToken?: string;
}

export const ListApprovalRequestsResponse: Schema.Schema<ListApprovalRequestsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approvalRequests: Schema.optional(Schema.Array(ApprovalRequest)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListApprovalRequestsResponse" });

export interface CustomerApprovalApprovalPolicy {
  /** Optional. Policy for approval based on the justification given. */
  justificationBasedApprovalPolicy?:
    | "JUSTIFICATION_BASED_APPROVAL_POLICY_UNSPECIFIED"
    | "JUSTIFICATION_BASED_APPROVAL_ENABLED_ALL"
    | "JUSTIFICATION_BASED_APPROVAL_ENABLED_EXTERNAL_JUSTIFICATIONS"
    | "JUSTIFICATION_BASED_APPROVAL_NOT_ENABLED"
    | "JUSTIFICATION_BASED_APPROVAL_INHERITED"
    | (string & {});
}

export const CustomerApprovalApprovalPolicy: Schema.Schema<CustomerApprovalApprovalPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    justificationBasedApprovalPolicy: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerApprovalApprovalPolicy" });

export interface InvalidateApprovalRequestMessage {}

export const InvalidateApprovalRequestMessage: Schema.Schema<InvalidateApprovalRequestMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "InvalidateApprovalRequestMessage",
  });

export interface AccessApprovalServiceAccount {
  /** Email address of the service account. */
  accountEmail?: string;
  /** The resource name of the Access Approval service account. Format is one of: * "projects/{project}/serviceAccount" * "folders/{folder}/serviceAccount" * "organizations/{organization}/serviceAccount" */
  name?: string;
}

export const AccessApprovalServiceAccount: Schema.Schema<AccessApprovalServiceAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountEmail: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessApprovalServiceAccount" });

export interface AccessApprovalSettings {
  /** A list of Google Cloud Services for which the given resource has Access Approval enrolled. Access requests for the resource given by name against any of these services contained here will be required to have explicit approval. If name refers to an organization, enrollment can be done for individual services. If name refers to a folder or project, enrollment can only be done on an all or nothing basis. If a cloud_product is repeated in this list, the first entry will be honored and all following entries will be discarded. */
  enrolledServices?: ReadonlyArray<EnrolledService>;
  /** Set the default access approval request expiration time. This value is able to be set directly by the customer at the time of approval, overriding this suggested value. We recommend setting this value to 30 days. */
  preferredRequestExpirationDays?: number;
  /** Optional. A setting that indicates the maximum scope of an Access Approval request: either organization, folder, or project. Google administrators will be asked to send requests no broader than the configured scope. */
  requestScopeMaxWidthPreference?:
    | "REQUEST_SCOPE_MAX_WIDTH_PREFERENCE_UNSPECIFIED"
    | "ORGANIZATION"
    | "FOLDER"
    | "PROJECT"
    | (string & {});
  /** Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that an ancestor of this Project or Folder has set active_key_version (this field will always be unset for the organization since organizations do not have ancestors). */
  ancestorHasActiveKeyVersion?: boolean;
  /** Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that there is some configuration issue with the active_key_version configured at this level in the resource hierarchy (e.g. it doesn't exist or the Access Approval service account doesn't have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down. */
  invalidKeyVersion?: boolean;
  /** The asymmetric crypto key version to use for signing approval requests. Empty active_key_version indicates that a Google-managed key should be used for signing. This property will be ignored if set by an ancestor of this resource, and new non-empty values may not be set. */
  activeKeyVersion?: string;
  /** Optional. Policy configuration for Access Approval that sets the operating mode. The available policies are Transparency, Streamlined Support, and Approval Required. */
  approvalPolicy?: CustomerApprovalApprovalPolicy;
  /** Output only. Effective policy applied for Access Approval, inclusive of inheritance. */
  effectiveApprovalPolicy?: CustomerApprovalApprovalPolicy;
  /** Output only. Field to differentiate ancestor enrolled services from locally enrolled services. */
  ancestorsEnrolledServices?: ReadonlyArray<EnrolledService>;
  /** The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings" */
  name?: string;
  /** A list of email addresses to which notifications relating to approval requests should be sent. Notifications relating to a resource will be sent to all emails in the settings of ancestor resources of that resource. A maximum of 50 email addresses are allowed. */
  notificationEmails?: ReadonlyArray<string>;
  /** Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors). */
  enrolledAncestor?: boolean;
  /** This field is used to set a preference for granularity of an access approval request. If true, Google personnel will be asked to send resource-level requests when possible. If false, Google personnel will be asked to send requests at the project level. */
  preferNoBroadApprovalRequests?: boolean;
  /** Optional. A pubsub topic that notifications relating to access approval are published to. Notifications include pre-approved accesses. */
  notificationPubsubTopic?: string;
  /** Optional. When enabled, Google will only be able to send approval requests for access reasons with a customer accessible case ID in the reason detail. Also known as "Require customer initiated support case justification" */
  requireCustomerVisibleJustification?: boolean;
}

export const AccessApprovalSettings: Schema.Schema<AccessApprovalSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enrolledServices: Schema.optional(Schema.Array(EnrolledService)),
    preferredRequestExpirationDays: Schema.optional(Schema.Number),
    requestScopeMaxWidthPreference: Schema.optional(Schema.String),
    ancestorHasActiveKeyVersion: Schema.optional(Schema.Boolean),
    invalidKeyVersion: Schema.optional(Schema.Boolean),
    activeKeyVersion: Schema.optional(Schema.String),
    approvalPolicy: Schema.optional(CustomerApprovalApprovalPolicy),
    effectiveApprovalPolicy: Schema.optional(CustomerApprovalApprovalPolicy),
    ancestorsEnrolledServices: Schema.optional(Schema.Array(EnrolledService)),
    name: Schema.optional(Schema.String),
    notificationEmails: Schema.optional(Schema.Array(Schema.String)),
    enrolledAncestor: Schema.optional(Schema.Boolean),
    preferNoBroadApprovalRequests: Schema.optional(Schema.Boolean),
    notificationPubsubTopic: Schema.optional(Schema.String),
    requireCustomerVisibleJustification: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AccessApprovalSettings" });

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

export interface UpdateAccessApprovalSettingsProjectsRequest {
  /** The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings" */
  name: string;
  /** The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated. */
  updateMask?: string;
  /** Request body */
  body?: AccessApprovalSettings;
}

export const UpdateAccessApprovalSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(AccessApprovalSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccessApprovalSettingsProjectsRequest>;

export type UpdateAccessApprovalSettingsProjectsResponse =
  AccessApprovalSettings;
export const UpdateAccessApprovalSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessApprovalSettings;

export type UpdateAccessApprovalSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask. */
export const updateAccessApprovalSettingsProjects: API.OperationMethod<
  UpdateAccessApprovalSettingsProjectsRequest,
  UpdateAccessApprovalSettingsProjectsResponse,
  UpdateAccessApprovalSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccessApprovalSettingsProjectsRequest,
  output: UpdateAccessApprovalSettingsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccessApprovalSettingsProjectsRequest {
  /** Name of the AccessApprovalSettings to delete. */
  name: string;
}

export const DeleteAccessApprovalSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccessApprovalSettingsProjectsRequest>;

export type DeleteAccessApprovalSettingsProjectsResponse = Empty;
export const DeleteAccessApprovalSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteAccessApprovalSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the resource. Access Approval may remain active based on parent resource settings. To confirm the effective settings, call GetAccessApprovalSettings and verify effective setting is disabled. */
export const deleteAccessApprovalSettingsProjects: API.OperationMethod<
  DeleteAccessApprovalSettingsProjectsRequest,
  DeleteAccessApprovalSettingsProjectsResponse,
  DeleteAccessApprovalSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccessApprovalSettingsProjectsRequest,
  output: DeleteAccessApprovalSettingsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccessApprovalSettingsProjectsRequest {
  /** The name of the AccessApprovalSettings to retrieve. Format: "{projects|folders|organizations}/{id}/accessApprovalSettings" */
  name: string;
}

export const GetAccessApprovalSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccessApprovalSettingsProjectsRequest>;

export type GetAccessApprovalSettingsProjectsResponse = AccessApprovalSettings;
export const GetAccessApprovalSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessApprovalSettings;

export type GetAccessApprovalSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the Access Approval settings associated with a project, folder, or organization. */
export const getAccessApprovalSettingsProjects: API.OperationMethod<
  GetAccessApprovalSettingsProjectsRequest,
  GetAccessApprovalSettingsProjectsResponse,
  GetAccessApprovalSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccessApprovalSettingsProjectsRequest,
  output: GetAccessApprovalSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetServiceAccountProjectsRequest {
  /** Name of the AccessApprovalServiceAccount to retrieve. */
  name: string;
}

export const GetServiceAccountProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetServiceAccountProjectsRequest>;

export type GetServiceAccountProjectsResponse = AccessApprovalServiceAccount;
export const GetServiceAccountProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessApprovalServiceAccount;

export type GetServiceAccountProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests. */
export const getServiceAccountProjects: API.OperationMethod<
  GetServiceAccountProjectsRequest,
  GetServiceAccountProjectsResponse,
  GetServiceAccountProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetServiceAccountProjectsRequest,
  output: GetServiceAccountProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsApprovalRequestsRequest {
  /** A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests. */
  filter?: string;
  /** The parent resource. This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}". */
  parent: string;
  /** Requested page size. */
  pageSize?: number;
  /** A token identifying the page of results to return. */
  pageToken?: string;
}

export const ListProjectsApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/approvalRequests" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsApprovalRequestsRequest>;

export type ListProjectsApprovalRequestsResponse = ListApprovalRequestsResponse;
export const ListProjectsApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListApprovalRequestsResponse;

export type ListProjectsApprovalRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological. */
export const listProjectsApprovalRequests: API.PaginatedOperationMethod<
  ListProjectsApprovalRequestsRequest,
  ListProjectsApprovalRequestsResponse,
  ListProjectsApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsApprovalRequestsRequest,
  output: ListProjectsApprovalRequestsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsApprovalRequestsRequest {
  /** The name of the approval request to retrieve. Format: "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}" */
  name: string;
}

export const GetProjectsApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsApprovalRequestsRequest>;

export type GetProjectsApprovalRequestsResponse = ApprovalRequest;
export const GetProjectsApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApprovalRequest;

export type GetProjectsApprovalRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an approval request. Returns NOT_FOUND if the request does not exist. */
export const getProjectsApprovalRequests: API.OperationMethod<
  GetProjectsApprovalRequestsRequest,
  GetProjectsApprovalRequestsResponse,
  GetProjectsApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsApprovalRequestsRequest,
  output: GetProjectsApprovalRequestsResponse,
  errors: [NotFound, Forbidden],
}));

export interface InvalidateProjectsApprovalRequestsRequest {
  /** Name of the ApprovalRequest to invalidate. */
  name: string;
  /** Request body */
  body?: InvalidateApprovalRequestMessage;
}

export const InvalidateProjectsApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(InvalidateApprovalRequestMessage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:invalidate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<InvalidateProjectsApprovalRequestsRequest>;

export type InvalidateProjectsApprovalRequestsResponse = ApprovalRequest;
export const InvalidateProjectsApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApprovalRequest;

export type InvalidateProjectsApprovalRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This action revokes Google access based on this approval request. If the resource has other active approvals, access will remain granted. Returns FAILED_PRECONDITION if the request exists but is not in an approved state. */
export const invalidateProjectsApprovalRequests: API.OperationMethod<
  InvalidateProjectsApprovalRequestsRequest,
  InvalidateProjectsApprovalRequestsResponse,
  InvalidateProjectsApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InvalidateProjectsApprovalRequestsRequest,
  output: InvalidateProjectsApprovalRequestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ApproveProjectsApprovalRequestsRequest {
  /** Name of the approval request to approve. */
  name: string;
  /** Request body */
  body?: ApproveApprovalRequestMessage;
}

export const ApproveProjectsApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ApproveApprovalRequestMessage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:approve", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ApproveProjectsApprovalRequestsRequest>;

export type ApproveProjectsApprovalRequestsResponse = ApprovalRequest;
export const ApproveProjectsApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApprovalRequest;

export type ApproveProjectsApprovalRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state. */
export const approveProjectsApprovalRequests: API.OperationMethod<
  ApproveProjectsApprovalRequestsRequest,
  ApproveProjectsApprovalRequestsResponse,
  ApproveProjectsApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ApproveProjectsApprovalRequestsRequest,
  output: ApproveProjectsApprovalRequestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DismissProjectsApprovalRequestsRequest {
  /** Name of the ApprovalRequest to dismiss. */
  name: string;
  /** Request body */
  body?: DismissApprovalRequestMessage;
}

export const DismissProjectsApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DismissApprovalRequestMessage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:dismiss", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DismissProjectsApprovalRequestsRequest>;

export type DismissProjectsApprovalRequestsResponse = ApprovalRequest;
export const DismissProjectsApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApprovalRequest;

export type DismissProjectsApprovalRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Dismisses a request. Returns the updated ApprovalRequest. NOTE: When a request is dismissed, it is considered ignored. Dismissing a request does not prevent access granted by other Access Approval requests. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state. */
export const dismissProjectsApprovalRequests: API.OperationMethod<
  DismissProjectsApprovalRequestsRequest,
  DismissProjectsApprovalRequestsResponse,
  DismissProjectsApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DismissProjectsApprovalRequestsRequest,
  output: DismissProjectsApprovalRequestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccessApprovalSettingsFoldersRequest {
  /** The name of the AccessApprovalSettings to retrieve. Format: "{projects|folders|organizations}/{id}/accessApprovalSettings" */
  name: string;
}

export const GetAccessApprovalSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccessApprovalSettingsFoldersRequest>;

export type GetAccessApprovalSettingsFoldersResponse = AccessApprovalSettings;
export const GetAccessApprovalSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessApprovalSettings;

export type GetAccessApprovalSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the Access Approval settings associated with a project, folder, or organization. */
export const getAccessApprovalSettingsFolders: API.OperationMethod<
  GetAccessApprovalSettingsFoldersRequest,
  GetAccessApprovalSettingsFoldersResponse,
  GetAccessApprovalSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccessApprovalSettingsFoldersRequest,
  output: GetAccessApprovalSettingsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetServiceAccountFoldersRequest {
  /** Name of the AccessApprovalServiceAccount to retrieve. */
  name: string;
}

export const GetServiceAccountFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetServiceAccountFoldersRequest>;

export type GetServiceAccountFoldersResponse = AccessApprovalServiceAccount;
export const GetServiceAccountFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessApprovalServiceAccount;

export type GetServiceAccountFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests. */
export const getServiceAccountFolders: API.OperationMethod<
  GetServiceAccountFoldersRequest,
  GetServiceAccountFoldersResponse,
  GetServiceAccountFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetServiceAccountFoldersRequest,
  output: GetServiceAccountFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateAccessApprovalSettingsFoldersRequest {
  /** The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings" */
  name: string;
  /** The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated. */
  updateMask?: string;
  /** Request body */
  body?: AccessApprovalSettings;
}

export const UpdateAccessApprovalSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(AccessApprovalSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccessApprovalSettingsFoldersRequest>;

export type UpdateAccessApprovalSettingsFoldersResponse =
  AccessApprovalSettings;
export const UpdateAccessApprovalSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessApprovalSettings;

export type UpdateAccessApprovalSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask. */
export const updateAccessApprovalSettingsFolders: API.OperationMethod<
  UpdateAccessApprovalSettingsFoldersRequest,
  UpdateAccessApprovalSettingsFoldersResponse,
  UpdateAccessApprovalSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccessApprovalSettingsFoldersRequest,
  output: UpdateAccessApprovalSettingsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccessApprovalSettingsFoldersRequest {
  /** Name of the AccessApprovalSettings to delete. */
  name: string;
}

export const DeleteAccessApprovalSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccessApprovalSettingsFoldersRequest>;

export type DeleteAccessApprovalSettingsFoldersResponse = Empty;
export const DeleteAccessApprovalSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteAccessApprovalSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the resource. Access Approval may remain active based on parent resource settings. To confirm the effective settings, call GetAccessApprovalSettings and verify effective setting is disabled. */
export const deleteAccessApprovalSettingsFolders: API.OperationMethod<
  DeleteAccessApprovalSettingsFoldersRequest,
  DeleteAccessApprovalSettingsFoldersResponse,
  DeleteAccessApprovalSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccessApprovalSettingsFoldersRequest,
  output: DeleteAccessApprovalSettingsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersApprovalRequestsRequest {
  /** A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests. */
  filter?: string;
  /** The parent resource. This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}". */
  parent: string;
  /** Requested page size. */
  pageSize?: number;
  /** A token identifying the page of results to return. */
  pageToken?: string;
}

export const ListFoldersApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/approvalRequests" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersApprovalRequestsRequest>;

export type ListFoldersApprovalRequestsResponse = ListApprovalRequestsResponse;
export const ListFoldersApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListApprovalRequestsResponse;

export type ListFoldersApprovalRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological. */
export const listFoldersApprovalRequests: API.PaginatedOperationMethod<
  ListFoldersApprovalRequestsRequest,
  ListFoldersApprovalRequestsResponse,
  ListFoldersApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersApprovalRequestsRequest,
  output: ListFoldersApprovalRequestsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetFoldersApprovalRequestsRequest {
  /** The name of the approval request to retrieve. Format: "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}" */
  name: string;
}

export const GetFoldersApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersApprovalRequestsRequest>;

export type GetFoldersApprovalRequestsResponse = ApprovalRequest;
export const GetFoldersApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApprovalRequest;

export type GetFoldersApprovalRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an approval request. Returns NOT_FOUND if the request does not exist. */
export const getFoldersApprovalRequests: API.OperationMethod<
  GetFoldersApprovalRequestsRequest,
  GetFoldersApprovalRequestsResponse,
  GetFoldersApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersApprovalRequestsRequest,
  output: GetFoldersApprovalRequestsResponse,
  errors: [NotFound, Forbidden],
}));

export interface InvalidateFoldersApprovalRequestsRequest {
  /** Name of the ApprovalRequest to invalidate. */
  name: string;
  /** Request body */
  body?: InvalidateApprovalRequestMessage;
}

export const InvalidateFoldersApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(InvalidateApprovalRequestMessage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:invalidate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<InvalidateFoldersApprovalRequestsRequest>;

export type InvalidateFoldersApprovalRequestsResponse = ApprovalRequest;
export const InvalidateFoldersApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApprovalRequest;

export type InvalidateFoldersApprovalRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This action revokes Google access based on this approval request. If the resource has other active approvals, access will remain granted. Returns FAILED_PRECONDITION if the request exists but is not in an approved state. */
export const invalidateFoldersApprovalRequests: API.OperationMethod<
  InvalidateFoldersApprovalRequestsRequest,
  InvalidateFoldersApprovalRequestsResponse,
  InvalidateFoldersApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InvalidateFoldersApprovalRequestsRequest,
  output: InvalidateFoldersApprovalRequestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ApproveFoldersApprovalRequestsRequest {
  /** Name of the approval request to approve. */
  name: string;
  /** Request body */
  body?: ApproveApprovalRequestMessage;
}

export const ApproveFoldersApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ApproveApprovalRequestMessage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:approve", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ApproveFoldersApprovalRequestsRequest>;

export type ApproveFoldersApprovalRequestsResponse = ApprovalRequest;
export const ApproveFoldersApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApprovalRequest;

export type ApproveFoldersApprovalRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state. */
export const approveFoldersApprovalRequests: API.OperationMethod<
  ApproveFoldersApprovalRequestsRequest,
  ApproveFoldersApprovalRequestsResponse,
  ApproveFoldersApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ApproveFoldersApprovalRequestsRequest,
  output: ApproveFoldersApprovalRequestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DismissFoldersApprovalRequestsRequest {
  /** Name of the ApprovalRequest to dismiss. */
  name: string;
  /** Request body */
  body?: DismissApprovalRequestMessage;
}

export const DismissFoldersApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DismissApprovalRequestMessage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:dismiss", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DismissFoldersApprovalRequestsRequest>;

export type DismissFoldersApprovalRequestsResponse = ApprovalRequest;
export const DismissFoldersApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApprovalRequest;

export type DismissFoldersApprovalRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Dismisses a request. Returns the updated ApprovalRequest. NOTE: When a request is dismissed, it is considered ignored. Dismissing a request does not prevent access granted by other Access Approval requests. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state. */
export const dismissFoldersApprovalRequests: API.OperationMethod<
  DismissFoldersApprovalRequestsRequest,
  DismissFoldersApprovalRequestsResponse,
  DismissFoldersApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DismissFoldersApprovalRequestsRequest,
  output: DismissFoldersApprovalRequestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccessApprovalSettingsOrganizationsRequest {
  /** The name of the AccessApprovalSettings to retrieve. Format: "{projects|folders|organizations}/{id}/accessApprovalSettings" */
  name: string;
}

export const GetAccessApprovalSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccessApprovalSettingsOrganizationsRequest>;

export type GetAccessApprovalSettingsOrganizationsResponse =
  AccessApprovalSettings;
export const GetAccessApprovalSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessApprovalSettings;

export type GetAccessApprovalSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the Access Approval settings associated with a project, folder, or organization. */
export const getAccessApprovalSettingsOrganizations: API.OperationMethod<
  GetAccessApprovalSettingsOrganizationsRequest,
  GetAccessApprovalSettingsOrganizationsResponse,
  GetAccessApprovalSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccessApprovalSettingsOrganizationsRequest,
  output: GetAccessApprovalSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetServiceAccountOrganizationsRequest {
  /** Name of the AccessApprovalServiceAccount to retrieve. */
  name: string;
}

export const GetServiceAccountOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetServiceAccountOrganizationsRequest>;

export type GetServiceAccountOrganizationsResponse =
  AccessApprovalServiceAccount;
export const GetServiceAccountOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessApprovalServiceAccount;

export type GetServiceAccountOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests. */
export const getServiceAccountOrganizations: API.OperationMethod<
  GetServiceAccountOrganizationsRequest,
  GetServiceAccountOrganizationsResponse,
  GetServiceAccountOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetServiceAccountOrganizationsRequest,
  output: GetServiceAccountOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateAccessApprovalSettingsOrganizationsRequest {
  /** The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings" */
  name: string;
  /** The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated. */
  updateMask?: string;
  /** Request body */
  body?: AccessApprovalSettings;
}

export const UpdateAccessApprovalSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(AccessApprovalSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccessApprovalSettingsOrganizationsRequest>;

export type UpdateAccessApprovalSettingsOrganizationsResponse =
  AccessApprovalSettings;
export const UpdateAccessApprovalSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccessApprovalSettings;

export type UpdateAccessApprovalSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask. */
export const updateAccessApprovalSettingsOrganizations: API.OperationMethod<
  UpdateAccessApprovalSettingsOrganizationsRequest,
  UpdateAccessApprovalSettingsOrganizationsResponse,
  UpdateAccessApprovalSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccessApprovalSettingsOrganizationsRequest,
  output: UpdateAccessApprovalSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccessApprovalSettingsOrganizationsRequest {
  /** Name of the AccessApprovalSettings to delete. */
  name: string;
}

export const DeleteAccessApprovalSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccessApprovalSettingsOrganizationsRequest>;

export type DeleteAccessApprovalSettingsOrganizationsResponse = Empty;
export const DeleteAccessApprovalSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteAccessApprovalSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the resource. Access Approval may remain active based on parent resource settings. To confirm the effective settings, call GetAccessApprovalSettings and verify effective setting is disabled. */
export const deleteAccessApprovalSettingsOrganizations: API.OperationMethod<
  DeleteAccessApprovalSettingsOrganizationsRequest,
  DeleteAccessApprovalSettingsOrganizationsResponse,
  DeleteAccessApprovalSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccessApprovalSettingsOrganizationsRequest,
  output: DeleteAccessApprovalSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsApprovalRequestsRequest {
  /** The name of the approval request to retrieve. Format: "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}" */
  name: string;
}

export const GetOrganizationsApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsApprovalRequestsRequest>;

export type GetOrganizationsApprovalRequestsResponse = ApprovalRequest;
export const GetOrganizationsApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApprovalRequest;

export type GetOrganizationsApprovalRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an approval request. Returns NOT_FOUND if the request does not exist. */
export const getOrganizationsApprovalRequests: API.OperationMethod<
  GetOrganizationsApprovalRequestsRequest,
  GetOrganizationsApprovalRequestsResponse,
  GetOrganizationsApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsApprovalRequestsRequest,
  output: GetOrganizationsApprovalRequestsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsApprovalRequestsRequest {
  /** The parent resource. This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}". */
  parent: string;
  /** Requested page size. */
  pageSize?: number;
  /** A token identifying the page of results to return. */
  pageToken?: string;
  /** A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests. */
  filter?: string;
}

export const ListOrganizationsApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/approvalRequests" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsApprovalRequestsRequest>;

export type ListOrganizationsApprovalRequestsResponse =
  ListApprovalRequestsResponse;
export const ListOrganizationsApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListApprovalRequestsResponse;

export type ListOrganizationsApprovalRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological. */
export const listOrganizationsApprovalRequests: API.PaginatedOperationMethod<
  ListOrganizationsApprovalRequestsRequest,
  ListOrganizationsApprovalRequestsResponse,
  ListOrganizationsApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsApprovalRequestsRequest,
  output: ListOrganizationsApprovalRequestsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ApproveOrganizationsApprovalRequestsRequest {
  /** Name of the approval request to approve. */
  name: string;
  /** Request body */
  body?: ApproveApprovalRequestMessage;
}

export const ApproveOrganizationsApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ApproveApprovalRequestMessage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:approve", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ApproveOrganizationsApprovalRequestsRequest>;

export type ApproveOrganizationsApprovalRequestsResponse = ApprovalRequest;
export const ApproveOrganizationsApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApprovalRequest;

export type ApproveOrganizationsApprovalRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state. */
export const approveOrganizationsApprovalRequests: API.OperationMethod<
  ApproveOrganizationsApprovalRequestsRequest,
  ApproveOrganizationsApprovalRequestsResponse,
  ApproveOrganizationsApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ApproveOrganizationsApprovalRequestsRequest,
  output: ApproveOrganizationsApprovalRequestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DismissOrganizationsApprovalRequestsRequest {
  /** Name of the ApprovalRequest to dismiss. */
  name: string;
  /** Request body */
  body?: DismissApprovalRequestMessage;
}

export const DismissOrganizationsApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DismissApprovalRequestMessage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:dismiss", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DismissOrganizationsApprovalRequestsRequest>;

export type DismissOrganizationsApprovalRequestsResponse = ApprovalRequest;
export const DismissOrganizationsApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApprovalRequest;

export type DismissOrganizationsApprovalRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Dismisses a request. Returns the updated ApprovalRequest. NOTE: When a request is dismissed, it is considered ignored. Dismissing a request does not prevent access granted by other Access Approval requests. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state. */
export const dismissOrganizationsApprovalRequests: API.OperationMethod<
  DismissOrganizationsApprovalRequestsRequest,
  DismissOrganizationsApprovalRequestsResponse,
  DismissOrganizationsApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DismissOrganizationsApprovalRequestsRequest,
  output: DismissOrganizationsApprovalRequestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InvalidateOrganizationsApprovalRequestsRequest {
  /** Name of the ApprovalRequest to invalidate. */
  name: string;
  /** Request body */
  body?: InvalidateApprovalRequestMessage;
}

export const InvalidateOrganizationsApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(InvalidateApprovalRequestMessage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:invalidate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<InvalidateOrganizationsApprovalRequestsRequest>;

export type InvalidateOrganizationsApprovalRequestsResponse = ApprovalRequest;
export const InvalidateOrganizationsApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApprovalRequest;

export type InvalidateOrganizationsApprovalRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This action revokes Google access based on this approval request. If the resource has other active approvals, access will remain granted. Returns FAILED_PRECONDITION if the request exists but is not in an approved state. */
export const invalidateOrganizationsApprovalRequests: API.OperationMethod<
  InvalidateOrganizationsApprovalRequestsRequest,
  InvalidateOrganizationsApprovalRequestsResponse,
  InvalidateOrganizationsApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InvalidateOrganizationsApprovalRequestsRequest,
  output: InvalidateOrganizationsApprovalRequestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
