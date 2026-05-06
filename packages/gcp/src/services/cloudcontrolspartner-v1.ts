// ==========================================================================
// Cloud Controls Partner API (cloudcontrolspartner v1)
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
  name: "cloudcontrolspartner",
  version: "v1",
  rootUrl: "https://cloudcontrolspartner.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface PartnerPermissions {
  /** Identifier. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/partnerPermissions` */
  name?: string;
  /** The partner permissions granted for the workload */
  partnerPermissions?: ReadonlyArray<
    | "PERMISSION_UNSPECIFIED"
    | "ACCESS_TRANSPARENCY_AND_EMERGENCY_ACCESS_LOGS"
    | "ASSURED_WORKLOADS_MONITORING"
    | "ACCESS_APPROVAL_REQUESTS"
    | "ASSURED_WORKLOADS_EKM_CONNECTION_STATUS"
    | "ACCESS_TRANSPARENCY_LOGS_SUPPORT_CASE_VIEWER"
    | (string & {})
  >;
}

export const PartnerPermissions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  partnerPermissions: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "PartnerPermissions" });

export interface AccessReason {
  /** Type of access justification. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "CUSTOMER_INITIATED_SUPPORT"
    | "GOOGLE_INITIATED_SERVICE"
    | "GOOGLE_INITIATED_REVIEW"
    | "THIRD_PARTY_DATA_REQUEST"
    | "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT"
    | "CLOUD_INITIATED_ACCESS"
    | (string & {});
  /** More detail about certain reason types. See comments for each type above. */
  detail?: string;
}

export const AccessReason = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  detail: Schema.optional(Schema.String),
}).annotate({ identifier: "AccessReason" });

export interface AccessApprovalRequest {
  /** Identifier. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/accessApprovalRequests/{access_approval_request}` */
  name?: string;
  /** The time at which approval was requested. */
  requestTime?: string;
  /** The justification for which approval is being requested. */
  requestedReason?: AccessReason;
  /** The requested expiration for the approval. If the request is approved, access will be granted from the time of approval until the expiration time. */
  requestedExpirationTime?: string;
}

export const AccessApprovalRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  requestTime: Schema.optional(Schema.String),
  requestedReason: Schema.optional(AccessReason),
  requestedExpirationTime: Schema.optional(Schema.String),
}).annotate({ identifier: "AccessApprovalRequest" });

export interface CustomerOnboardingStep {
  /** The completion time of the onboarding step */
  completionTime?: string;
  /** The starting time of the onboarding step */
  startTime?: string;
  /** Output only. Current state of the step */
  completionState?:
    | "COMPLETION_STATE_UNSPECIFIED"
    | "PENDING"
    | "SUCCEEDED"
    | "FAILED"
    | "NOT_APPLICABLE"
    | (string & {});
  /** The onboarding step */
  step?:
    | "STEP_UNSPECIFIED"
    | "KAJ_ENROLLMENT"
    | "CUSTOMER_ENVIRONMENT"
    | (string & {});
}

export const CustomerOnboardingStep = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    completionTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    completionState: Schema.optional(Schema.String),
    step: Schema.optional(Schema.String),
  },
).annotate({ identifier: "CustomerOnboardingStep" });

export interface CustomerOnboardingState {
  /** List of customer onboarding steps */
  onboardingSteps?: ReadonlyArray<CustomerOnboardingStep>;
}

export const CustomerOnboardingState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    onboardingSteps: Schema.optional(Schema.Array(CustomerOnboardingStep)),
  }).annotate({ identifier: "CustomerOnboardingState" });

export interface Customer {
  /** Required. Display name for the customer */
  displayName?: string;
  /** Identifier. Format: `organizations/{organization}/locations/{location}/customers/{customer}` */
  name?: string;
  /** Output only. The customer organization domain, extracted from CRM Organization’s display_name field. e.g. "google.com" */
  organizationDomain?: string;
  /** Output only. Container for customer onboarding steps */
  customerOnboardingState?: CustomerOnboardingState;
  /** Output only. Indicates whether a customer is fully onboarded */
  isOnboarded?: boolean;
}

export const Customer = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  displayName: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  organizationDomain: Schema.optional(Schema.String),
  customerOnboardingState: Schema.optional(CustomerOnboardingState),
  isOnboarded: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Customer" });

export interface ListCustomersResponse {
  /** List of customers */
  customers?: ReadonlyArray<Customer>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListCustomersResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customers: Schema.optional(Schema.Array(Customer)),
  nextPageToken: Schema.optional(Schema.String),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ListCustomersResponse" });

export interface EkmMetadata {
  /** The Cloud EKM partner. */
  ekmSolution?:
    | "EKM_SOLUTION_UNSPECIFIED"
    | "FORTANIX"
    | "FUTUREX"
    | "THALES"
    | "VIRTRU"
    | (string & {});
  /** Endpoint for sending requests to the EKM for key provisioning during Assured Workload creation. */
  ekmEndpointUri?: string;
}

export const EkmMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ekmSolution: Schema.optional(Schema.String),
  ekmEndpointUri: Schema.optional(Schema.String),
}).annotate({ identifier: "EkmMetadata" });

export interface Sku {
  /** Display name of the product identified by the SKU. A partner may want to show partner branded names for their offerings such as local sovereign cloud solutions. */
  displayName?: string;
  /** Argentum product SKU, that is associated with the partner offerings to customers used by Syntro for billing purposes. SKUs can represent resold Google products or support services. */
  id?: string;
}

export const Sku = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  displayName: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "Sku" });

export interface Partner {
  /** List of Google Cloud supported EKM partners supported by the partner */
  ekmSolutions?: ReadonlyArray<EkmMetadata>;
  /** Google Cloud project ID in the partner's Google Cloud organization for receiving enhanced Logs for Partners. */
  partnerProjectId?: string;
  /** List of Google Cloud regions that the partner sells services to customers. Valid Google Cloud regions found here: https://cloud.google.com/compute/docs/regions-zones */
  operatedCloudRegions?: ReadonlyArray<string>;
  /** Output only. Time the resource was created */
  createTime?: string;
  /** Identifier. The resource name of the partner. Format: `organizations/{organization}/locations/{location}/partner` Example: "organizations/123456/locations/us-central1/partner" */
  name?: string;
  /** List of SKUs the partner is offering */
  skus?: ReadonlyArray<Sku>;
  /** Output only. The last time the resource was updated */
  updateTime?: string;
}

export const Partner = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ekmSolutions: Schema.optional(Schema.Array(EkmMetadata)),
  partnerProjectId: Schema.optional(Schema.String),
  operatedCloudRegions: Schema.optional(Schema.Array(Schema.String)),
  createTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  skus: Schema.optional(Schema.Array(Sku)),
  updateTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Partner" });

export interface ListAccessApprovalRequestsResponse {
  /** List of access approval requests */
  accessApprovalRequests?: ReadonlyArray<AccessApprovalRequest>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListAccessApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessApprovalRequests: Schema.optional(
      Schema.Array(AccessApprovalRequest),
    ),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAccessApprovalRequestsResponse" });

export interface WorkloadOnboardingStep {
  /** The completion time of the onboarding step. */
  completionTime?: string;
  /** The starting time of the onboarding step. */
  startTime?: string;
  /** Output only. The completion state of the onboarding step. */
  completionState?:
    | "COMPLETION_STATE_UNSPECIFIED"
    | "PENDING"
    | "SUCCEEDED"
    | "FAILED"
    | "NOT_APPLICABLE"
    | (string & {});
  /** The onboarding step. */
  step?:
    | "STEP_UNSPECIFIED"
    | "EKM_PROVISIONED"
    | "SIGNED_ACCESS_APPROVAL_CONFIGURED"
    | (string & {});
}

export const WorkloadOnboardingStep = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    completionTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    completionState: Schema.optional(Schema.String),
    step: Schema.optional(Schema.String),
  },
).annotate({ identifier: "WorkloadOnboardingStep" });

export interface WorkloadOnboardingState {
  /** List of workload onboarding steps. */
  onboardingSteps?: ReadonlyArray<WorkloadOnboardingStep>;
}

export const WorkloadOnboardingState =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    onboardingSteps: Schema.optional(Schema.Array(WorkloadOnboardingStep)),
  }).annotate({ identifier: "WorkloadOnboardingState" });

export interface OperationMetadata {
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
}

export const OperationMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  statusMessage: Schema.optional(Schema.String),
  apiVersion: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  verb: Schema.optional(Schema.String),
  requestedCancellation: Schema.optional(Schema.Boolean),
  target: Schema.optional(Schema.String),
}).annotate({ identifier: "OperationMetadata" });

export interface Workload {
  /** Partner associated with this workload. */
  partner?:
    | "PARTNER_UNSPECIFIED"
    | "PARTNER_LOCAL_CONTROLS_BY_S3NS"
    | "PARTNER_SOVEREIGN_CONTROLS_BY_T_SYSTEMS"
    | "PARTNER_SOVEREIGN_CONTROLS_BY_SIA_MINSAIT"
    | "PARTNER_SOVEREIGN_CONTROLS_BY_PSN"
    | "PARTNER_SOVEREIGN_CONTROLS_BY_CNTXT"
    | "PARTNER_SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM"
    | "PARTNER_SPAIN_DATA_BOUNDARY_BY_TELEFONICA"
    | (string & {});
  /** Indicates whether a workload is fully onboarded. */
  isOnboarded?: boolean;
  /** Identifier. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}` */
  name?: string;
  /** Container for workload onboarding steps. */
  workloadOnboardingState?: WorkloadOnboardingState;
  /** The project id of the key management project for the workload */
  keyManagementProjectId?: string;
  /** The Google Cloud location of the workload */
  location?: string;
  /** Output only. Time the resource was created. */
  createTime?: string;
  /** Output only. The name of container folder of the assured workload */
  folder?: string;
  /** Output only. Folder id this workload is associated with */
  folderId?: string;
}

export const Workload = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  partner: Schema.optional(Schema.String),
  isOnboarded: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  workloadOnboardingState: Schema.optional(WorkloadOnboardingState),
  keyManagementProjectId: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  folder: Schema.optional(Schema.String),
  folderId: Schema.optional(Schema.String),
}).annotate({ identifier: "Workload" });

export interface ListWorkloadsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** List of customer workloads */
  workloads?: ReadonlyArray<Workload>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListWorkloadsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  workloads: Schema.optional(Schema.Array(Workload)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListWorkloadsResponse" });

export interface ConnectionError {
  /** The error domain for the error */
  errorDomain?: string;
  /** The error message for the error */
  errorMessage?: string;
}

export const ConnectionError = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  errorDomain: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
}).annotate({ identifier: "ConnectionError" });

export interface EkmConnection {
  /** Resource name of the EKM connection in the format: projects/{project}/locations/{location}/ekmConnections/{ekm_connection} */
  connectionName?: string;
  /** The connection error that occurred if any */
  connectionError?: ConnectionError;
  /** Output only. The connection state */
  connectionState?:
    | "CONNECTION_STATE_UNSPECIFIED"
    | "AVAILABLE"
    | "NOT_AVAILABLE"
    | "ERROR"
    | "PERMISSION_DENIED"
    | (string & {});
}

export const EkmConnection = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  connectionName: Schema.optional(Schema.String),
  connectionError: Schema.optional(ConnectionError),
  connectionState: Schema.optional(Schema.String),
}).annotate({ identifier: "EkmConnection" });

export interface Gcloud {
  /** Steps to resolve violation via gcloud cli */
  steps?: ReadonlyArray<string>;
  /** Gcloud command to resolve violation */
  gcloudCommands?: ReadonlyArray<string>;
  /** Additional urls for more information about steps */
  additionalLinks?: ReadonlyArray<string>;
}

export const Gcloud = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  steps: Schema.optional(Schema.Array(Schema.String)),
  gcloudCommands: Schema.optional(Schema.Array(Schema.String)),
  additionalLinks: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Gcloud" });

export interface Console {
  /** Link to console page where violations can be resolved */
  consoleUris?: ReadonlyArray<string>;
  /** Additional urls for more information about steps */
  additionalLinks?: ReadonlyArray<string>;
  /** Steps to resolve violation via cloud console */
  steps?: ReadonlyArray<string>;
}

export const Console = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  consoleUris: Schema.optional(Schema.Array(Schema.String)),
  additionalLinks: Schema.optional(Schema.Array(Schema.String)),
  steps: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Console" });

export interface Instructions {
  /** Remediation instructions to resolve violation via gcloud cli */
  gcloudInstructions?: Gcloud;
  /** Remediation instructions to resolve violation via cloud console */
  consoleInstructions?: Console;
}

export const Instructions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gcloudInstructions: Schema.optional(Gcloud),
  consoleInstructions: Schema.optional(Console),
}).annotate({ identifier: "Instructions" });

export interface EkmConnections {
  /** The EKM connections associated with the workload */
  ekmConnections?: ReadonlyArray<EkmConnection>;
  /** Identifier. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/ekmConnections` */
  name?: string;
}

export const EkmConnections = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ekmConnections: Schema.optional(Schema.Array(EkmConnection)),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "EkmConnections" });

export interface Remediation {
  /** Required. Remediation instructions to resolve violations */
  instructions?: Instructions;
  /** Output only. Remediation type based on the type of org policy values violated */
  remediationType?:
    | "REMEDIATION_TYPE_UNSPECIFIED"
    | "REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION"
    | "REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION"
    | "REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION"
    | "REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION"
    | "REMEDIATION_RESOURCE_VIOLATION"
    | (string & {});
  /** Values that can resolve the violation For example: for list org policy violations, this will either be the list of allowed or denied values */
  compliantValues?: ReadonlyArray<string>;
}

export const Remediation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instructions: Schema.optional(Instructions),
  remediationType: Schema.optional(Schema.String),
  compliantValues: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Remediation" });

export interface Violation {
  /** Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty. */
  resolveTime?: string;
  /** Output only. Category under which this violation is mapped. e.g. Location, Service Usage, Access, Encryption, etc. */
  category?: string;
  /** Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: `projects/{project_number}/policies/{constraint_name}` `folders/{folder_id}/policies/{constraint_name}` `organizations/{organization_id}/policies/{constraint_name}` */
  nonCompliantOrgPolicy?: string;
  /** Identifier. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/violations/{violation}` */
  name?: string;
  /** Output only. Description for the Violation. e.g. OrgPolicy gcp.resourceLocations has non compliant value. */
  description?: string;
  /** Output only. Time of the event which triggered the Violation. */
  beginTime?: string;
  /** The folder_id of the violation */
  folderId?: string;
  /** Output only. Compliance violation remediation */
  remediation?: Remediation;
  /** Output only. The last time when the Violation record was updated. */
  updateTime?: string;
  /** Output only. State of the violation */
  state?:
    | "STATE_UNSPECIFIED"
    | "RESOLVED"
    | "UNRESOLVED"
    | "EXCEPTION"
    | (string & {});
}

export const Violation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resolveTime: Schema.optional(Schema.String),
  category: Schema.optional(Schema.String),
  nonCompliantOrgPolicy: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  beginTime: Schema.optional(Schema.String),
  folderId: Schema.optional(Schema.String),
  remediation: Schema.optional(Remediation),
  updateTime: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
}).annotate({ identifier: "Violation" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface ListViolationsResponse {
  /** List of violation */
  violations?: ReadonlyArray<Violation>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Workloads that could not be reached due to permission errors or any other error. Ref: https://google.aip.dev/217 */
  unreachable?: ReadonlyArray<string>;
}

export const ListViolationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    violations: Schema.optional(Schema.Array(Violation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "ListViolationsResponse" });

// ==========================================================================
// Operations
// ==========================================================================

export interface GetPartnerOrganizationsLocationsRequest {
  /** Required. Format: `organizations/{organization}/locations/{location}/partner` */
  name: string;
}

export const GetPartnerOrganizationsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetPartnerOrganizationsLocationsRequest>;

export type GetPartnerOrganizationsLocationsResponse = Partner;
export const GetPartnerOrganizationsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Partner;

export type GetPartnerOrganizationsLocationsError = DefaultErrors;

/** Get details of a Partner. */
export const getPartnerOrganizationsLocations: API.OperationMethod<
  GetPartnerOrganizationsLocationsRequest,
  GetPartnerOrganizationsLocationsResponse,
  GetPartnerOrganizationsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPartnerOrganizationsLocationsRequest,
  output: GetPartnerOrganizationsLocationsResponse,
  errors: [],
}));

export interface PatchOrganizationsLocationsCustomersRequest {
  /** Identifier. Format: `organizations/{organization}/locations/{location}/customers/{customer}` */
  name: string;
  /** Optional. The list of fields to update */
  updateMask?: string;
  /** Request body */
  body?: Customer;
}

export const PatchOrganizationsLocationsCustomersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Customer).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsCustomersRequest>;

export type PatchOrganizationsLocationsCustomersResponse = Customer;
export const PatchOrganizationsLocationsCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Customer;

export type PatchOrganizationsLocationsCustomersError = DefaultErrors;

/** Update details of a single customer */
export const patchOrganizationsLocationsCustomers: API.OperationMethod<
  PatchOrganizationsLocationsCustomersRequest,
  PatchOrganizationsLocationsCustomersResponse,
  PatchOrganizationsLocationsCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsCustomersRequest,
  output: PatchOrganizationsLocationsCustomersResponse,
  errors: [],
}));

export interface DeleteOrganizationsLocationsCustomersRequest {
  /** Required. name of the resource to be deleted format: name=organizations/* /locations/* /customers/* */
  name: string;
}

export const DeleteOrganizationsLocationsCustomersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsCustomersRequest>;

export type DeleteOrganizationsLocationsCustomersResponse = Empty;
export const DeleteOrganizationsLocationsCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOrganizationsLocationsCustomersError = DefaultErrors;

/** Delete details of a single customer */
export const deleteOrganizationsLocationsCustomers: API.OperationMethod<
  DeleteOrganizationsLocationsCustomersRequest,
  DeleteOrganizationsLocationsCustomersResponse,
  DeleteOrganizationsLocationsCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsCustomersRequest,
  output: DeleteOrganizationsLocationsCustomersResponse,
  errors: [],
}));

export interface GetOrganizationsLocationsCustomersRequest {
  /** Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}` */
  name: string;
}

export const GetOrganizationsLocationsCustomersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsCustomersRequest>;

export type GetOrganizationsLocationsCustomersResponse = Customer;
export const GetOrganizationsLocationsCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Customer;

export type GetOrganizationsLocationsCustomersError = DefaultErrors;

/** Gets details of a single customer */
export const getOrganizationsLocationsCustomers: API.OperationMethod<
  GetOrganizationsLocationsCustomersRequest,
  GetOrganizationsLocationsCustomersResponse,
  GetOrganizationsLocationsCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsCustomersRequest,
  output: GetOrganizationsLocationsCustomersResponse,
  errors: [],
}));

export interface ListOrganizationsLocationsCustomersRequest {
  /** A page token, received from a previous `ListCustomers` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
  /** Required. Parent resource Format: `organizations/{organization}/locations/{location}` */
  parent: string;
  /** The maximum number of Customers to return. The service may return fewer than this value. If unspecified, at most 500 Customers will be returned. */
  pageSize?: number;
  /** Optional. Filtering results */
  filter?: string;
}

export const ListOrganizationsLocationsCustomersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/customers" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsCustomersRequest>;

export type ListOrganizationsLocationsCustomersResponse = ListCustomersResponse;
export const ListOrganizationsLocationsCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCustomersResponse;

export type ListOrganizationsLocationsCustomersError = DefaultErrors;

/** Lists customers of a partner identified by its Google Cloud organization ID */
export const listOrganizationsLocationsCustomers: API.PaginatedOperationMethod<
  ListOrganizationsLocationsCustomersRequest,
  ListOrganizationsLocationsCustomersResponse,
  ListOrganizationsLocationsCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsCustomersRequest,
  output: ListOrganizationsLocationsCustomersResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsLocationsCustomersRequest {
  /** Required. Parent resource Format: `organizations/{organization}/locations/{location}` */
  parent: string;
  /** Required. The customer id to use for the customer, which will become the final component of the customer's resource name. The specified value must be a valid Google cloud organization id. */
  customerId?: string;
  /** Request body */
  body?: Customer;
}

export const CreateOrganizationsLocationsCustomersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
    body: Schema.optional(Customer).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/customers", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsCustomersRequest>;

export type CreateOrganizationsLocationsCustomersResponse = Customer;
export const CreateOrganizationsLocationsCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Customer;

export type CreateOrganizationsLocationsCustomersError = DefaultErrors;

/** Creates a new customer. */
export const createOrganizationsLocationsCustomers: API.OperationMethod<
  CreateOrganizationsLocationsCustomersRequest,
  CreateOrganizationsLocationsCustomersResponse,
  CreateOrganizationsLocationsCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsCustomersRequest,
  output: CreateOrganizationsLocationsCustomersResponse,
  errors: [],
}));

export interface ListOrganizationsLocationsCustomersWorkloadsRequest {
  /** Optional. Filtering results. */
  filter?: string;
  /** Required. Parent resource Format: `organizations/{organization}/locations/{location}/customers/{customer}` */
  parent: string;
  /** The maximum number of workloads to return. The service may return fewer than this value. If unspecified, at most 500 workloads will be returned. */
  pageSize?: number;
  /** A page token, received from a previous `ListWorkloads` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
}

export const ListOrganizationsLocationsCustomersWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/workloads" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsCustomersWorkloadsRequest>;

export type ListOrganizationsLocationsCustomersWorkloadsResponse =
  ListWorkloadsResponse;
export const ListOrganizationsLocationsCustomersWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWorkloadsResponse;

export type ListOrganizationsLocationsCustomersWorkloadsError = DefaultErrors;

/** Lists customer workloads for a given customer org id */
export const listOrganizationsLocationsCustomersWorkloads: API.PaginatedOperationMethod<
  ListOrganizationsLocationsCustomersWorkloadsRequest,
  ListOrganizationsLocationsCustomersWorkloadsResponse,
  ListOrganizationsLocationsCustomersWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsCustomersWorkloadsRequest,
  output: ListOrganizationsLocationsCustomersWorkloadsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetPartnerPermissionsOrganizationsLocationsCustomersWorkloadsRequest {
  /** Required. Name of the resource to get in the format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/partnerPermissions` */
  name: string;
}

export const GetPartnerPermissionsOrganizationsLocationsCustomersWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetPartnerPermissionsOrganizationsLocationsCustomersWorkloadsRequest>;

export type GetPartnerPermissionsOrganizationsLocationsCustomersWorkloadsResponse =
  PartnerPermissions;
export const GetPartnerPermissionsOrganizationsLocationsCustomersWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PartnerPermissions;

export type GetPartnerPermissionsOrganizationsLocationsCustomersWorkloadsError =
  DefaultErrors;

/** Gets the partner permissions granted for a workload */
export const getPartnerPermissionsOrganizationsLocationsCustomersWorkloads: API.OperationMethod<
  GetPartnerPermissionsOrganizationsLocationsCustomersWorkloadsRequest,
  GetPartnerPermissionsOrganizationsLocationsCustomersWorkloadsResponse,
  GetPartnerPermissionsOrganizationsLocationsCustomersWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPartnerPermissionsOrganizationsLocationsCustomersWorkloadsRequest,
  output: GetPartnerPermissionsOrganizationsLocationsCustomersWorkloadsResponse,
  errors: [],
}));

export interface GetOrganizationsLocationsCustomersWorkloadsRequest {
  /** Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}` */
  name: string;
}

export const GetOrganizationsLocationsCustomersWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsCustomersWorkloadsRequest>;

export type GetOrganizationsLocationsCustomersWorkloadsResponse = Workload;
export const GetOrganizationsLocationsCustomersWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Workload;

export type GetOrganizationsLocationsCustomersWorkloadsError = DefaultErrors;

/** Gets details of a single workload */
export const getOrganizationsLocationsCustomersWorkloads: API.OperationMethod<
  GetOrganizationsLocationsCustomersWorkloadsRequest,
  GetOrganizationsLocationsCustomersWorkloadsResponse,
  GetOrganizationsLocationsCustomersWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsCustomersWorkloadsRequest,
  output: GetOrganizationsLocationsCustomersWorkloadsResponse,
  errors: [],
}));

export interface GetEkmConnectionsOrganizationsLocationsCustomersWorkloadsRequest {
  /** Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/ekmConnections` */
  name: string;
}

export const GetEkmConnectionsOrganizationsLocationsCustomersWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEkmConnectionsOrganizationsLocationsCustomersWorkloadsRequest>;

export type GetEkmConnectionsOrganizationsLocationsCustomersWorkloadsResponse =
  EkmConnections;
export const GetEkmConnectionsOrganizationsLocationsCustomersWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EkmConnections;

export type GetEkmConnectionsOrganizationsLocationsCustomersWorkloadsError =
  DefaultErrors;

/** Gets the EKM connections associated with a workload */
export const getEkmConnectionsOrganizationsLocationsCustomersWorkloads: API.OperationMethod<
  GetEkmConnectionsOrganizationsLocationsCustomersWorkloadsRequest,
  GetEkmConnectionsOrganizationsLocationsCustomersWorkloadsResponse,
  GetEkmConnectionsOrganizationsLocationsCustomersWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEkmConnectionsOrganizationsLocationsCustomersWorkloadsRequest,
  output: GetEkmConnectionsOrganizationsLocationsCustomersWorkloadsResponse,
  errors: [],
}));

export interface ListOrganizationsLocationsCustomersWorkloadsAccessApprovalRequestsRequest {
  /** Optional. A page token, received from a previous `ListAccessApprovalRequests` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Required. Parent resource Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}` */
  parent: string;
  /** Optional. The maximum number of access requests to return. The service may return fewer than this value. If unspecified, at most 500 access requests will be returned. */
  pageSize?: number;
  /** Optional. Filtering results. */
  filter?: string;
}

export const ListOrganizationsLocationsCustomersWorkloadsAccessApprovalRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/accessApprovalRequests" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsCustomersWorkloadsAccessApprovalRequestsRequest>;

export type ListOrganizationsLocationsCustomersWorkloadsAccessApprovalRequestsResponse =
  ListAccessApprovalRequestsResponse;
export const ListOrganizationsLocationsCustomersWorkloadsAccessApprovalRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAccessApprovalRequestsResponse;

export type ListOrganizationsLocationsCustomersWorkloadsAccessApprovalRequestsError =
  DefaultErrors;

/** Deprecated: Only returns access approval requests directly associated with an assured workload folder. */
export const listOrganizationsLocationsCustomersWorkloadsAccessApprovalRequests: API.PaginatedOperationMethod<
  ListOrganizationsLocationsCustomersWorkloadsAccessApprovalRequestsRequest,
  ListOrganizationsLocationsCustomersWorkloadsAccessApprovalRequestsResponse,
  ListOrganizationsLocationsCustomersWorkloadsAccessApprovalRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    ListOrganizationsLocationsCustomersWorkloadsAccessApprovalRequestsRequest,
  output:
    ListOrganizationsLocationsCustomersWorkloadsAccessApprovalRequestsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListOrganizationsLocationsCustomersWorkloadsViolationsRequest {
  /** Required. Parent resource Format `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}` */
  parent: string;
  /** Optional. The maximum number of customers row to return. The service may return fewer than this value. If unspecified, at most 10 customers will be returned. */
  pageSize?: number;
  /** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
  "interval.endTime"?: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
  /** Optional. A page token, received from a previous `ListViolations` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
  "interval.startTime"?: string;
  /** Optional. Filtering results */
  filter?: string;
}

export const ListOrganizationsLocationsCustomersWorkloadsViolationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    "interval.endTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("interval.endTime"),
    ),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    "interval.startTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("interval.startTime"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/violations" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsCustomersWorkloadsViolationsRequest>;

export type ListOrganizationsLocationsCustomersWorkloadsViolationsResponse =
  ListViolationsResponse;
export const ListOrganizationsLocationsCustomersWorkloadsViolationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListViolationsResponse;

export type ListOrganizationsLocationsCustomersWorkloadsViolationsError =
  DefaultErrors;

/** Lists Violations for a workload Callers may also choose to read across multiple Customers or for a single customer as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of {customer} & {workload}. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}` */
export const listOrganizationsLocationsCustomersWorkloadsViolations: API.PaginatedOperationMethod<
  ListOrganizationsLocationsCustomersWorkloadsViolationsRequest,
  ListOrganizationsLocationsCustomersWorkloadsViolationsResponse,
  ListOrganizationsLocationsCustomersWorkloadsViolationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsCustomersWorkloadsViolationsRequest,
  output: ListOrganizationsLocationsCustomersWorkloadsViolationsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsCustomersWorkloadsViolationsRequest {
  /** Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/violations/{violation}` */
  name: string;
}

export const GetOrganizationsLocationsCustomersWorkloadsViolationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsCustomersWorkloadsViolationsRequest>;

export type GetOrganizationsLocationsCustomersWorkloadsViolationsResponse =
  Violation;
export const GetOrganizationsLocationsCustomersWorkloadsViolationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Violation;

export type GetOrganizationsLocationsCustomersWorkloadsViolationsError =
  DefaultErrors;

/** Gets details of a single Violation. */
export const getOrganizationsLocationsCustomersWorkloadsViolations: API.OperationMethod<
  GetOrganizationsLocationsCustomersWorkloadsViolationsRequest,
  GetOrganizationsLocationsCustomersWorkloadsViolationsResponse,
  GetOrganizationsLocationsCustomersWorkloadsViolationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsCustomersWorkloadsViolationsRequest,
  output: GetOrganizationsLocationsCustomersWorkloadsViolationsResponse,
  errors: [],
}));
