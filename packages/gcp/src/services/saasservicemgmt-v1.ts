// ==========================================================================
// App Lifecycle Manager API (saasservicemgmt v1)
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
  name: "saasservicemgmt",
  version: "v1",
  rootUrl: "https://saasservicemgmt.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface Aggregate {
  /** Required. Number of records in the group. */
  count?: number;
  /** Required. Group by which to aggregate. */
  group?: string;
}

export const Aggregate: Schema.Codec<Aggregate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    group: Schema.optional(Schema.String),
  }).annotate({ identifier: "Aggregate" });

export interface RolloutStats {
  /** Optional. Output only. Unordered list. A breakdown of the progress of operations triggered by the rollout. Provides a count of Operations by their state. This can be used to determine the number of units which have been updated, or are scheduled to be updated. There will be at most one entry per group. Possible values for operation groups are: - "SCHEDULED" - "PENDING" - "RUNNING" - "SUCCEEDED" - "FAILED" - "CANCELLED" */
  operationsByState?: ReadonlyArray<Aggregate>;
  /** Optional. Output only. Estimated number of units based. The estimation is computed upon creation of the rollout. */
  estimatedTotalUnitCount?: string;
}

export const RolloutStats: Schema.Codec<RolloutStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationsByState: Schema.optional(Schema.Array(Aggregate)),
    estimatedTotalUnitCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "RolloutStats" });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface FromMapping {
  /** Required. Name of the outputVariable on the dependency */
  outputVariable?: string;
  /** Required. Alias of the dependency that the outputVariable will pass its value to */
  dependency?: string;
}

export const FromMapping: Schema.Codec<FromMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputVariable: Schema.optional(Schema.String),
    dependency: Schema.optional(Schema.String),
  }).annotate({ identifier: "FromMapping" });

export interface Deprovision {}

export const Deprovision: Schema.Codec<Deprovision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Deprovision",
  });

export interface UnitVariable {
  /** Optional. Immutable. Name of a supported variable type. Supported types are string, int, bool. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "STRING"
    | "INT"
    | "BOOL"
    | "STRUCT"
    | "LIST"
    | (string & {});
  /** Optional. String encoded value for the variable. */
  value?: string;
  /** Required. Immutable. Name of the variable from actuation configs. */
  variable?: string;
}

export const UnitVariable: Schema.Codec<UnitVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    variable: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitVariable" });

export interface Provision {
  /** Optional. Reference to the Release object to use for the Unit. (optional). */
  release?: string;
  /** Optional. Set of input variables. Maximum 100. (optional) */
  inputVariables?: ReadonlyArray<UnitVariable>;
}

export const Provision: Schema.Codec<Provision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    release: Schema.optional(Schema.String),
    inputVariables: Schema.optional(Schema.Array(UnitVariable)),
  }).annotate({ identifier: "Provision" });

export interface FlagUpdate {
  /** Required. Flag release being applied by UnitOperation. */
  flagRelease?: string;
}

export const FlagUpdate: Schema.Codec<FlagUpdate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flagRelease: Schema.optional(Schema.String),
  }).annotate({ identifier: "FlagUpdate" });

export interface Upgrade {
  /** Optional. Reference to the Release object to use for the Unit. (optional). */
  release?: string;
  /** Optional. Set of input variables. Maximum 100. (optional) */
  inputVariables?: ReadonlyArray<UnitVariable>;
}

export const Upgrade: Schema.Codec<Upgrade> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    release: Schema.optional(Schema.String),
    inputVariables: Schema.optional(Schema.Array(UnitVariable)),
  }).annotate({ identifier: "Upgrade" });

export interface Schedule {
  /** Optional. Start of operation. If not set, will be set to the start of the next window. (optional) */
  startTime?: string;
}

export const Schedule: Schema.Codec<Schedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Schedule" });

export interface UnitOperationCondition {
  /** Required. Status of the condition. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "STATUS_UNKNOWN"
    | "STATUS_TRUE"
    | "STATUS_FALSE"
    | (string & {});
  /** Required. Type of the condition. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_SCHEDULED"
    | "TYPE_RUNNING"
    | "TYPE_SUCCEEDED"
    | "TYPE_CANCELLED"
    | "TYPE_APP_CREATED"
    | "TYPE_APP_COMPONENTS_REGISTERED"
    | "TYPE_WORKLOAD_SUCCEEDED"
    | (string & {});
  /** Required. Human readable message indicating details about the last transition. */
  message?: string;
  /** Required. Brief reason for the condition's last transition. */
  reason?: string;
  /** Required. Last time the condition transited from one status to another. */
  lastTransitionTime?: string;
}

export const UnitOperationCondition: Schema.Codec<UnitOperationCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    lastTransitionTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitOperationCondition" });

export interface UnitOperation {
  /** Optional. Deprovision operation. */
  deprovision?: Deprovision;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Optional. Provision operation. */
  provision?: Provision;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Required. Immutable. The Unit a given UnitOperation will act upon. */
  unit?: string;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. Reference to parent resource: UnitOperation. If an operation needs to create other operations as part of its workflow, each of the child operations should have this field set to the parent. This can be used for tracing. (Optional) */
  parentUnitOperation?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Output only. The timestamp when the resource was marked for deletion (deletion is an asynchronous operation). */
  deleteTime?: string;
  /** Optional. Output only. UnitOperationState describes the current state of the unit operation. */
  state?:
    | "UNIT_OPERATION_STATE_UNKNOWN"
    | "UNIT_OPERATION_STATE_PENDING"
    | "UNIT_OPERATION_STATE_SCHEDULED"
    | "UNIT_OPERATION_STATE_RUNNING"
    | "UNIT_OPERATION_STATE_SUCCEEDED"
    | "UNIT_OPERATION_STATE_FAILED"
    | "UNIT_OPERATION_STATE_CANCELLED"
    | (string & {});
  /** Optional. Flag update operation. */
  flagUpdate?: FlagUpdate;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Output only. The engine state for on-going deployment engine operation(s). This field is opaque for external usage. */
  engineState?: string;
  /** Optional. Upgrade operation. */
  upgrade?: Upgrade;
  /** Optional. When to schedule this operation. */
  schedule?: Schedule;
  /** Optional. Output only. A set of conditions which indicate the various conditions this resource can have. */
  conditions?: ReadonlyArray<UnitOperationCondition>;
  /** Optional. Specifies which rollout created this Unit Operation. This cannot be modified and is used for filtering purposes only. If a dependent unit and unit operation are created as part of another unit operation, they will use the same rolloutId. */
  rollout?: string;
  /** Optional. Output only. UnitOperationErrorCategory describe the error category. */
  errorCategory?:
    | "UNIT_OPERATION_ERROR_CATEGORY_UNSPECIFIED"
    | "NOT_APPLICABLE"
    | "FATAL"
    | "RETRIABLE"
    | "IGNORABLE"
    | "STANDARD"
    | (string & {});
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitOperations/{unitOperation}" */
  name?: string;
  /** Optional. When true, attempt to cancel the operation. Cancellation may fail if the operation is already executing. (Optional) */
  cancel?: boolean;
}

export const UnitOperation: Schema.Codec<UnitOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deprovision: Schema.optional(Deprovision),
    uid: Schema.optional(Schema.String),
    provision: Schema.optional(Provision),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    unit: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    parentUnitOperation: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    deleteTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    flagUpdate: Schema.optional(FlagUpdate),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    engineState: Schema.optional(Schema.String),
    upgrade: Schema.optional(Upgrade),
    schedule: Schema.optional(Schedule),
    conditions: Schema.optional(Schema.Array(UnitOperationCondition)),
    rollout: Schema.optional(Schema.String),
    errorCategory: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    cancel: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "UnitOperation" });

export interface ListUnitOperationsResponse {
  /** If present, the next page token can be provided to a subsequent ListUnitOperations call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The resulting unit operations. */
  unitOperations?: ReadonlyArray<UnitOperation>;
}

export const ListUnitOperationsResponse: Schema.Codec<ListUnitOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    unitOperations: Schema.optional(Schema.Array(UnitOperation)),
  }).annotate({ identifier: "ListUnitOperationsResponse" });

export interface Blueprint {
  /** Output only. Type of the engine used to actuate the blueprint. e.g. terraform, helm etc. */
  engine?: string;
  /** Optional. Immutable. URI to a blueprint used by the Unit (required unless unitKind or release is set). */
  package?: string;
  /** Output only. Version metadata if present on the blueprint. */
  version?: string;
}

export const Blueprint: Schema.Codec<Blueprint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    engine: Schema.optional(Schema.String),
    package: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "Blueprint" });

export interface ReleaseRequirements {
  /** Optional. A list of releases from which a unit can be upgraded to this one (optional). If left empty no constraints will be applied. When provided, unit upgrade requests to this release will check and enforce this constraint. */
  upgradeableFromReleases?: ReadonlyArray<string>;
}

export const ReleaseRequirements: Schema.Codec<ReleaseRequirements> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upgradeableFromReleases: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ReleaseRequirements" });

export interface Release {
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Mapping of input variables to default values. Maximum 100 */
  inputVariableDefaults?: ReadonlyArray<UnitVariable>;
  /** Required. Immutable. Reference to the UnitKind this Release corresponds to (required and immutable once created). */
  unitKind?: string;
  /** Optional. Blueprints are OCI Images that contain all of the artifacts needed to provision a unit. */
  blueprint?: Blueprint;
  /** Optional. Set of requirements to be fulfilled on the Unit when using this Release. */
  releaseRequirements?: ReleaseRequirements;
  /** Optional. Output only. List of input variables declared on the blueprint and can be present with their values on the unit spec */
  inputVariables?: ReadonlyArray<UnitVariable>;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/releases/{release}" */
  name?: string;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Optional. Output only. List of output variables declared on the blueprint and can be present with their values on the unit status */
  outputVariables?: ReadonlyArray<UnitVariable>;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
}

export const Release: Schema.Codec<Release> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    inputVariableDefaults: Schema.optional(Schema.Array(UnitVariable)),
    unitKind: Schema.optional(Schema.String),
    blueprint: Schema.optional(Blueprint),
    releaseRequirements: Schema.optional(ReleaseRequirements),
    inputVariables: Schema.optional(Schema.Array(UnitVariable)),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    outputVariables: Schema.optional(Schema.Array(UnitVariable)),
    etag: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Release" });

export interface RunRolloutActionParams {
  /** Required. If true, the rollout will retry failed operations when resumed. This is applicable only the current state of the Rollout is PAUSED and the requested action is RUN. */
  retryFailedOperations?: boolean;
}

export const RunRolloutActionParams: Schema.Codec<RunRolloutActionParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retryFailedOperations: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RunRolloutActionParams" });

export interface RolloutControl {
  /** Optional. Parameters for the RUN action. It is an error to specify this if the RolloutAction is not set to RUN. By default, the rollout will retry failed operations when resumed. */
  runParams?: RunRolloutActionParams;
  /** Required. Action to be performed on the Rollout. The default behavior is to run the rollout until it naturally reaches a terminal state. */
  action?:
    | "ROLLOUT_ACTION_UNSPECIFIED"
    | "ROLLOUT_ACTION_RUN"
    | "ROLLOUT_ACTION_PAUSE"
    | "ROLLOUT_ACTION_CANCEL"
    | (string & {});
}

export const RolloutControl: Schema.Codec<RolloutControl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runParams: Schema.optional(RunRolloutActionParams),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "RolloutControl" });

export interface Dependency {
  /** Required. Immutable. The unit kind of the dependency. */
  unitKind?: string;
  /** Required. An alias for the dependency. Used for input variable mapping. */
  alias?: string;
}

export const Dependency: Schema.Codec<Dependency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unitKind: Schema.optional(Schema.String),
    alias: Schema.optional(Schema.String),
  }).annotate({ identifier: "Dependency" });

export interface Decimal {
  /** The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' | [Sign] Significand [Exponent]; Sign = '+' | '-'; Significand = Digits '.' | [Digits] '.' Digits; Exponent = ('e' | 'E') [Sign] Digits; Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' }; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range. */
  value?: string;
}

export const Decimal: Schema.Codec<Decimal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Decimal" });

export interface UnitUpdatePacing {
  /** Optional. The maximum percentage of total units in the scope that can be in-flight. Example: 10.5 for 10.5%. If both percent and count are provided, the system uses the MINIMUM (most restrictive). */
  maxConcurrentOperationsPercent?: Decimal;
  /** Optional. An absolute cap on concurrent units operations. If both percent and count are provided, the system uses the MINIMUM (most restrictive). */
  maxConcurrentOperationsCount?: number;
}

export const UnitUpdatePacing: Schema.Codec<UnitUpdatePacing> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxConcurrentOperationsPercent: Schema.optional(Decimal),
    maxConcurrentOperationsCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "UnitUpdatePacing" });

export interface ToMapping {
  /** Required. Name of the inputVariable on the dependency */
  inputVariable?: string;
  /** Optional. Tells App Lifecycle Manager if this mapping should be used during lookup or not */
  ignoreForLookup?: boolean;
  /** Required. Alias of the dependency that the inputVariable will pass its value to */
  dependency?: string;
}

export const ToMapping: Schema.Codec<ToMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputVariable: Schema.optional(Schema.String),
    ignoreForLookup: Schema.optional(Schema.Boolean),
    dependency: Schema.optional(Schema.String),
  }).annotate({ identifier: "ToMapping" });

export interface VariableMapping {
  /** Optional. Output variables which will get their values from dependencies */
  from?: FromMapping;
  /** Required. name of the variable */
  variable?: string;
  /** Optional. Input variables whose values will be passed on to dependencies. */
  to?: ToMapping;
}

export const VariableMapping: Schema.Codec<VariableMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    from: Schema.optional(FromMapping),
    variable: Schema.optional(Schema.String),
    to: Schema.optional(ToMapping),
  }).annotate({ identifier: "VariableMapping" });

export interface UnitKind {
  /** Optional. Output only. BoundaryType describes the type of boundary the Unit Kind represents. */
  boundaryType?:
    | "BOUNDARY_TYPE_UNSPECIFIED"
    | "BOUNDARY_TYPE_TENANT_PROJECT"
    | "BOUNDARY_TYPE_MANAGED_PROJECT"
    | (string & {});
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitKinds/{unitKind}" */
  name?: string;
  /** Optional. List of inputVariables for this release that will either be retrieved from a dependency's outputVariables, or will be passed on to a dependency's inputVariables. Maximum 100. */
  inputVariableMappings?: ReadonlyArray<VariableMapping>;
  /** Optional. List of outputVariables for this unit kind will be passed to this unit's outputVariables. Maximum 100. */
  outputVariableMappings?: ReadonlyArray<VariableMapping>;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Immutable. List of other unit kinds that this release will depend on. Dependencies will be automatically provisioned if not found. Maximum 10. */
  dependencies?: ReadonlyArray<Dependency>;
  /** Required. Immutable. A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. Part of the App Lifecycle Manager common data model. Immutable once set. */
  saas?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Optional. A reference to the Release object to use as default for creating new units of this UnitKind (optional). If not specified, a new unit must explicitly reference which release to use for its creation. */
  defaultRelease?: string;
  /** Optional. Default revisions of flags for this UnitKind. Newly created units will use the flag default_flag_revisions present at the time of creation. */
  defaultFlagRevisions?: ReadonlyArray<string>;
}

export const UnitKind: Schema.Codec<UnitKind> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundaryType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    inputVariableMappings: Schema.optional(Schema.Array(VariableMapping)),
    outputVariableMappings: Schema.optional(Schema.Array(VariableMapping)),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    dependencies: Schema.optional(Schema.Array(Dependency)),
    saas: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uid: Schema.optional(Schema.String),
    defaultRelease: Schema.optional(Schema.String),
    defaultFlagRevisions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "UnitKind" });

export interface Tenant {
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/tenants/{tenant}" */
  name?: string;
  /** Required. Immutable. A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. Part of the App Lifecycle Manager common data model. */
  saas?: string;
  /** Optional. Immutable. A reference to the consumer resource this SaaS Tenant is representing. The relationship with a consumer resource can be used by App Lifecycle Manager for retrieving consumer-defined settings and policies such as maintenance policies (using Unified Maintenance Policy API). */
  consumerResource?: string;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
}

export const Tenant: Schema.Codec<Tenant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    saas: Schema.optional(Schema.String),
    consumerResource: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Tenant" });

export interface ErrorBudget {
  /** Optional. The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout. */
  allowedPercentage?: number;
  /** Optional. The maximum number of failed units allowed in a location without pausing the rollout. */
  allowedCount?: number;
}

export const ErrorBudget: Schema.Codec<ErrorBudget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedPercentage: Schema.optional(Schema.Number),
    allowedCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ErrorBudget" });

export interface ListUnitKindsResponse {
  /** If present, the next page token can be provided to a subsequent ListUnitKinds call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** The resulting unit kinds. */
  unitKinds?: ReadonlyArray<UnitKind>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListUnitKindsResponse: Schema.Codec<ListUnitKindsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unitKinds: Schema.optional(Schema.Array(UnitKind)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListUnitKindsResponse" });

export interface Location {
  /** Optional. Name of location. */
  name?: string;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface RolloutKind {
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Optional. The strategy used for executing a Rollout. This is a required field. There are two supported values strategies which are used to control - "Google.Cloud.Simple.AllAtOnce" - "Google.Cloud.Simple.OneLocationAtATime" A rollout with one of these simple strategies will rollout across all locations defined in the associated UnitKind's Saas Locations. */
  rolloutOrchestrationStrategy?: string;
  /** Optional. The config for updating the unit kind. By default, the unit kind will be updated on the rollout start. */
  updateUnitKindStrategy?:
    | "UPDATE_UNIT_KIND_STRATEGY_UNSPECIFIED"
    | "UPDATE_UNIT_KIND_STRATEGY_ON_START"
    | "UPDATE_UNIT_KIND_STRATEGY_NEVER"
    | (string & {});
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Optional. The configuration for error budget. If the number of failed units exceeds max(allowed_count, allowed_ratio * total_units), the rollout will be paused. If not set, all units will be attempted to be updated regardless of the number of failures encountered. */
  errorBudget?: ErrorBudget;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. */
  unitFilter?: string;
  /** Required. Immutable. UnitKind that this rollout kind corresponds to. Rollouts stemming from this rollout kind will target the units of this unit kind. In other words, this defines the population of target units to be upgraded by rollouts. */
  unitKind?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Settings for controlling the pacing of rollouts i.e. the number of units to be rolled out in parallel in a region. */
  unitUpdatePacing?: UnitUpdatePacing;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rolloutKinds/{rollout_kind_id}" */
  name?: string;
}

export const RolloutKind: Schema.Codec<RolloutKind> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    rolloutOrchestrationStrategy: Schema.optional(Schema.String),
    updateUnitKindStrategy: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    errorBudget: Schema.optional(ErrorBudget),
    etag: Schema.optional(Schema.String),
    unitFilter: Schema.optional(Schema.String),
    unitKind: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    unitUpdatePacing: Schema.optional(UnitUpdatePacing),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "RolloutKind" });

export interface Rollout {
  /** Optional. Output only. The root rollout that this rollout is stemming from. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollouts/{rollout_id}" */
  rootRollout?: string;
  /** Optional. CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. If not provided, the unit_filter from the RolloutKind will be used. */
  unitFilter?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Output only. Human readable message indicating details about the last state transition. */
  stateMessage?: string;
  /** Optional. Immutable. Name of the Release that gets rolled out to target Units. Required if no other type of release is specified. */
  release?: string;
  /** Optional. Requested change to the execution of this rollout. Default RolloutControl.action is ROLLOUT_ACTION_RUN meaning the rollout will be executed to completion while progressing through all natural Rollout States (such as RUNNING -> SUCCEEDED or RUNNING -> FAILED). Requests can only be made when the Rollout is in a non-terminal state. */
  control?: RolloutControl;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollout/{rollout_id}" */
  name?: string;
  /** Required. Immutable. Name of the RolloutKind this rollout is stemming from and adhering to. */
  rolloutKind?: string;
  /** Optional. The strategy used for executing this Rollout. This strategy will override whatever strategy is specified in the RolloutKind. If not specified on creation, the strategy from RolloutKind will be used. There are two supported values strategies which are used to control - "Google.Cloud.Simple.AllAtOnce" - "Google.Cloud.Simple.OneLocationAtATime" A rollout with one of these simple strategies will rollout across all locations defined in the targeted UnitKind's Saas Locations. */
  rolloutOrchestrationStrategy?: string;
  /** Optional. Output only. Output only snapshot of the effective unit filter at Rollout start time. Contains a CEL(https://github.com/google/cel-spec) expression consisting of a conjunction of Rollout.unit_filter and RolloutKind.unit_filter. This field captures the filter applied by the Rollout to determine the Unit population. If the associated RolloutKind's unit_filter is modified after the rollout is started, it will not be updated here. */
  effectiveUnitFilter?: string;
  /** Optional. Output only. The time when the rollout finished execution (regardless of success, failure, or cancellation). Will be empty if the rollout hasn't finished yet. Once set, the rollout is in terminal state and all the results are final. */
  endTime?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Output only. Current state of the rollout. */
  state?:
    | "ROLLOUT_STATE_UNSPECIFIED"
    | "ROLLOUT_STATE_RUNNING"
    | "ROLLOUT_STATE_PAUSED"
    | "ROLLOUT_STATE_SUCCEEDED"
    | "ROLLOUT_STATE_FAILED"
    | "ROLLOUT_STATE_CANCELLED"
    | "ROLLOUT_STATE_WAITING"
    | "ROLLOUT_STATE_CANCELLING"
    | "ROLLOUT_STATE_RESUMING"
    | "ROLLOUT_STATE_PAUSING"
    | (string & {});
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Output only. The timestamp when the resource was marked for deletion (deletion is an asynchronous operation). */
  deleteTime?: string;
  /** Optional. Immutable. Name of the FlagRelease to be rolled out to the target Units. Release and FlagRelease are mutually exclusive. Note: `release` comment needs to be adjusted to mention that "Release and FlagRelease are mutually exclusive" when visibility restriction will be lifted. */
  flagRelease?: string;
  /** Optional. Output only. The time when the rollout started executing. Will be empty if the rollout hasn't started yet. */
  startTime?: string;
  /** Optional. Output only. The time when the rollout transitioned into its current state. */
  stateTransitionTime?: string;
  /** Optional. Output only. The direct parent rollout that this rollout is stemming from. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollouts/{rollout_id}" */
  parentRollout?: string;
  /** Optional. Output only. Details about the progress of the rollout. */
  stats?: RolloutStats;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
}

export const Rollout: Schema.Codec<Rollout> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rootRollout: Schema.optional(Schema.String),
    unitFilter: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    stateMessage: Schema.optional(Schema.String),
    release: Schema.optional(Schema.String),
    control: Schema.optional(RolloutControl),
    name: Schema.optional(Schema.String),
    rolloutKind: Schema.optional(Schema.String),
    rolloutOrchestrationStrategy: Schema.optional(Schema.String),
    effectiveUnitFilter: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uid: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    deleteTime: Schema.optional(Schema.String),
    flagRelease: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    stateTransitionTime: Schema.optional(Schema.String),
    parentRollout: Schema.optional(Schema.String),
    stats: Schema.optional(RolloutStats),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Rollout" });

export interface ListRolloutsResponse {
  /** The resulting rollouts. */
  rollouts?: ReadonlyArray<Rollout>;
  /** If present, the next page token can be provided to a subsequent ListRollouts call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListRolloutsResponse: Schema.Codec<ListRolloutsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rollouts: Schema.optional(Schema.Array(Rollout)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListRolloutsResponse" });

export interface GoogleCloudLocationLocation {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const GoogleCloudLocationLocation: Schema.Codec<GoogleCloudLocationLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudLocationLocation" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<GoogleCloudLocationLocation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Codec<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(GoogleCloudLocationLocation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface UnitCondition {
  /** Required. Last time the condition transited from one status to another. */
  lastTransitionTime?: string;
  /** Required. Status of the condition. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "STATUS_UNKNOWN"
    | "STATUS_TRUE"
    | "STATUS_FALSE"
    | (string & {});
  /** Required. Type of the condition. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_READY"
    | "TYPE_UPDATING"
    | "TYPE_PROVISIONED"
    | "TYPE_OPERATION_ERROR"
    | "TYPE_FLAGS_CONFIG_INITIALIZED"
    | "TYPE_APP_CREATED_OR_ALREADY_EXISTS"
    | "TYPE_APP_COMPONENTS_REGISTERED"
    | (string & {});
  /** Required. Human readable message indicating details about the last transition. */
  message?: string;
  /** Required. Brief reason for the condition's last transition. */
  reason?: string;
}

export const UnitCondition: Schema.Codec<UnitCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTransitionTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitCondition" });

export interface UnitDependency {
  /** Output only. A reference to the Unit object. */
  unit?: string;
  /** Output only. Alias for the name of the dependency. */
  alias?: string;
}

export const UnitDependency: Schema.Codec<UnitDependency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unit: Schema.optional(Schema.String),
    alias: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitDependency" });

export interface MaintenanceSettings {
  /** Optional. If present, it fixes the release on the unit until the given time; i.e. changes to the release field will be rejected. Rollouts should and will also respect this by not requesting an upgrade in the first place. */
  pinnedUntilTime?: string;
}

export const MaintenanceSettings: Schema.Codec<MaintenanceSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pinnedUntilTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaintenanceSettings" });

export interface Unit {
  /** Optional. Immutable. Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created. */
  managementMode?:
    | "MANAGEMENT_MODE_UNSPECIFIED"
    | "MANAGEMENT_MODE_USER"
    | "MANAGEMENT_MODE_SYSTEM"
    | (string & {});
  /** Optional. Output only. Indicates the system managed state of the unit. */
  systemManagedState?:
    | "SYSTEM_MANAGED_STATE_UNSPECIFIED"
    | "SYSTEM_MANAGED_STATE_ACTIVE"
    | "SYSTEM_MANAGED_STATE_INACTIVE"
    | "SYSTEM_MANAGED_STATE_DECOMMISSIONED"
    | (string & {});
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/units/{unit}" */
  name?: string;
  /** Optional. Output only. A set of conditions which indicate the various conditions this resource can have. */
  conditions?: ReadonlyArray<UnitCondition>;
  /** Optional. Output only. List of scheduled UnitOperations for this unit. */
  scheduledOperations?: ReadonlyArray<string>;
  /** Optional. Output only. Indicates the current input variables deployed by the unit */
  inputVariables?: ReadonlyArray<UnitVariable>;
  /** Optional. Output only. If set, indicates the time when the system will start removing the unit. */
  systemCleanupAt?: string;
  /** Optional. Reference to the UnitKind this Unit belongs to. Immutable once set. */
  unitKind?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Output only. List of Units that depend on this unit. Unit can only be deprovisioned if this list is empty. Maximum 1000. */
  dependents?: ReadonlyArray<UnitDependency>;
  /** Optional. Output only. Set of dependencies for this unit. Maximum 10. */
  dependencies?: ReadonlyArray<UnitDependency>;
  /** Optional. Output only. List of concurrent UnitOperations that are operating on this Unit. */
  ongoingOperations?: ReadonlyArray<string>;
  /** Optional. Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use). */
  state?:
    | "UNIT_STATE_UNSPECIFIED"
    | "UNIT_STATE_NOT_PROVISIONED"
    | "UNIT_STATE_PROVISIONING"
    | "UNIT_STATE_UPDATING"
    | "UNIT_STATE_DEPROVISIONING"
    | "UNIT_STATE_READY"
    | "UNIT_STATE_ERROR"
    | (string & {});
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Optional. Reference to the Saas Tenant resource this unit belongs to. This for example informs the maintenance policies to use for scheduling future updates on a unit. (optional and immutable once created) */
  tenant?: string;
  /** Optional. Output only. Set of key/value pairs corresponding to output variables from execution of actuation templates. The variables are declared in actuation configs (e.g in helm chart or terraform) and the values are fetched and returned by the actuation engine upon completion of execution. */
  outputVariables?: ReadonlyArray<UnitVariable>;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Optional. Output only. Flag revisions used by this Unit. */
  flagRevisions?: ReadonlyArray<string>;
  /** Optional. Output only. The current Release object for this Unit. */
  release?: string;
  /** Output only. Indicates whether the resource location satisfies Zone Separation constraints. This is false by default. */
  satisfiesPzs?: boolean;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Captures requested directives for performing future maintenance on the unit. This includes a request for the unit to skip maintenance for a period of time and remain pinned to its current release as well as controls for postponing maintenance scheduled in future. */
  maintenance?: MaintenanceSettings;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. Output only. List of pending (wait to be executed) UnitOperations for this unit. */
  pendingOperations?: ReadonlyArray<string>;
}

export const Unit: Schema.Codec<Unit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managementMode: Schema.optional(Schema.String),
    systemManagedState: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Array(UnitCondition)),
    scheduledOperations: Schema.optional(Schema.Array(Schema.String)),
    inputVariables: Schema.optional(Schema.Array(UnitVariable)),
    systemCleanupAt: Schema.optional(Schema.String),
    unitKind: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    dependents: Schema.optional(Schema.Array(UnitDependency)),
    dependencies: Schema.optional(Schema.Array(UnitDependency)),
    ongoingOperations: Schema.optional(Schema.Array(Schema.String)),
    state: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    tenant: Schema.optional(Schema.String),
    outputVariables: Schema.optional(Schema.Array(UnitVariable)),
    uid: Schema.optional(Schema.String),
    flagRevisions: Schema.optional(Schema.Array(Schema.String)),
    release: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    maintenance: Schema.optional(MaintenanceSettings),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    pendingOperations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Unit" });

export interface ListTenantsResponse {
  /** The resulting tenants. */
  tenants?: ReadonlyArray<Tenant>;
  /** If present, the next page token can be provided to a subsequent ListTenants call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListTenantsResponse: Schema.Codec<ListTenantsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tenants: Schema.optional(Schema.Array(Tenant)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListTenantsResponse" });

export interface ListReleasesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** If present, the next page token can be provided to a subsequent ListReleases call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** The resulting releases. */
  releases?: ReadonlyArray<Release>;
}

export const ListReleasesResponse: Schema.Codec<ListReleasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    releases: Schema.optional(Schema.Array(Release)),
  }).annotate({ identifier: "ListReleasesResponse" });

export interface SaasCondition {
  /** Required. Brief reason for the condition's last transition. */
  reason?: string;
  /** Required. Status of the condition. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "STATUS_UNKNOWN"
    | "STATUS_TRUE"
    | "STATUS_FALSE"
    | (string & {});
  /** Required. Type of the condition. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_READY"
    | "TYPE_SYNCHRONIZED"
    | (string & {});
  /** Required. Human readable message indicating details about the last transition. */
  message?: string;
  /** Required. Last time the condition transited from one status to another. */
  lastTransitionTime?: string;
}

export const SaasCondition: Schema.Codec<SaasCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    lastTransitionTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SaasCondition" });

export interface Saas {
  /** Optional. List of locations that the service is available in. Rollout refers to the list to generate a rollout plan. */
  locations?: ReadonlyArray<Location>;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/saas/{saas}" */
  name?: string;
  /** Output only. State of the Saas. It is always in STATE_ACTIVE state if the application_template is empty. */
  state?:
    | "STATE_TYPE_UNSPECIFIED"
    | "STATE_ACTIVE"
    | "STATE_RUNNING"
    | "STATE_FAILED"
    | (string & {});
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Output only. If the state is FAILED, the corresponding error code and message. Defaults to code=OK for all other states. */
  error?: Status;
  /** Output only. A set of conditions which indicate the various conditions this resource can have. */
  conditions?: ReadonlyArray<SaasCondition>;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
}

export const Saas: Schema.Codec<Saas> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    conditions: Schema.optional(Schema.Array(SaasCondition)),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Saas" });

export interface ListSaasResponse {
  /** The resulting saas. */
  saas?: ReadonlyArray<Saas>;
  /** If present, the next page token can be provided to a subsequent ListSaas call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListSaasResponse: Schema.Codec<ListSaasResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    saas: Schema.optional(Schema.Array(Saas)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListSaasResponse" });

export interface ListRolloutKindsResponse {
  /** If present, the next page token can be provided to a subsequent ListRolloutKinds call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The resulting rollout kinds. */
  rolloutKinds?: ReadonlyArray<RolloutKind>;
}

export const ListRolloutKindsResponse: Schema.Codec<ListRolloutKindsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    rolloutKinds: Schema.optional(Schema.Array(RolloutKind)),
  }).annotate({ identifier: "ListRolloutKindsResponse" });

export interface ListUnitsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The resulting units. */
  units?: ReadonlyArray<Unit>;
  /** If present, the next page token can be provided to a subsequent ListUnits call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListUnitsResponse: Schema.Codec<ListUnitsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    units: Schema.optional(Schema.Array(Unit)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListUnitsResponse" });

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

export interface ListProjectsLocationsRequest {
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = GoogleCloudLocationLocation;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudLocationLocation;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsReleasesRequest {
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** The maximum number of releases to send per page. */
  pageSize?: number;
  /** Required. The parent of the release. */
  parent: string;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/releases" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsReleasesRequest>;

export type ListProjectsLocationsReleasesResponse = ListReleasesResponse;
export const ListProjectsLocationsReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListReleasesResponse;

export type ListProjectsLocationsReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a collection of releases. */
export const listProjectsLocationsReleases: API.PaginatedOperationMethod<
  ListProjectsLocationsReleasesRequest,
  ListProjectsLocationsReleasesResponse,
  ListProjectsLocationsReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsReleasesRequest,
  output: ListProjectsLocationsReleasesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsReleasesRequest {
  /** Required. The parent of the release. */
  parent: string;
  /** Required. The ID value for the new release. */
  releaseId?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: Release;
}

export const CreateProjectsLocationsReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    releaseId: Schema.optional(Schema.String).pipe(T.HttpQuery("releaseId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Release).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/releases", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsReleasesRequest>;

export type CreateProjectsLocationsReleasesResponse = Release;
export const CreateProjectsLocationsReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Release;

export type CreateProjectsLocationsReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new release. */
export const createProjectsLocationsReleases: API.OperationMethod<
  CreateProjectsLocationsReleasesRequest,
  CreateProjectsLocationsReleasesResponse,
  CreateProjectsLocationsReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsReleasesRequest,
  output: CreateProjectsLocationsReleasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsReleasesRequest {
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Field mask is used to specify the fields to be overwritten in the Release resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Release will be overwritten. */
  updateMask?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/releases/{release}" */
  name: string;
  /** Request body */
  body?: Release;
}

export const PatchProjectsLocationsReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Release).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsReleasesRequest>;

export type PatchProjectsLocationsReleasesResponse = Release;
export const PatchProjectsLocationsReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Release;

export type PatchProjectsLocationsReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single release. */
export const patchProjectsLocationsReleases: API.OperationMethod<
  PatchProjectsLocationsReleasesRequest,
  PatchProjectsLocationsReleasesResponse,
  PatchProjectsLocationsReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsReleasesRequest,
  output: PatchProjectsLocationsReleasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsReleasesRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsReleasesRequest>;

export type GetProjectsLocationsReleasesResponse = Release;
export const GetProjectsLocationsReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Release;

export type GetProjectsLocationsReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single release. */
export const getProjectsLocationsReleases: API.OperationMethod<
  GetProjectsLocationsReleasesRequest,
  GetProjectsLocationsReleasesResponse,
  GetProjectsLocationsReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsReleasesRequest,
  output: GetProjectsLocationsReleasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsReleasesRequest {
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the release. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the release. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
}

export const DeleteProjectsLocationsReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsReleasesRequest>;

export type DeleteProjectsLocationsReleasesResponse = Empty;
export const DeleteProjectsLocationsReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single release. */
export const deleteProjectsLocationsReleases: API.OperationMethod<
  DeleteProjectsLocationsReleasesRequest,
  DeleteProjectsLocationsReleasesResponse,
  DeleteProjectsLocationsReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsReleasesRequest,
  output: DeleteProjectsLocationsReleasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRolloutKindsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsRolloutKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRolloutKindsRequest>;

export type GetProjectsLocationsRolloutKindsResponse = RolloutKind;
export const GetProjectsLocationsRolloutKindsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RolloutKind;

export type GetProjectsLocationsRolloutKindsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single rollout kind. */
export const getProjectsLocationsRolloutKinds: API.OperationMethod<
  GetProjectsLocationsRolloutKindsRequest,
  GetProjectsLocationsRolloutKindsResponse,
  GetProjectsLocationsRolloutKindsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRolloutKindsRequest,
  output: GetProjectsLocationsRolloutKindsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsRolloutKindsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the rollout kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
}

export const DeleteProjectsLocationsRolloutKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsRolloutKindsRequest>;

export type DeleteProjectsLocationsRolloutKindsResponse = Empty;
export const DeleteProjectsLocationsRolloutKindsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsRolloutKindsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single rollout kind. */
export const deleteProjectsLocationsRolloutKinds: API.OperationMethod<
  DeleteProjectsLocationsRolloutKindsRequest,
  DeleteProjectsLocationsRolloutKindsResponse,
  DeleteProjectsLocationsRolloutKindsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRolloutKindsRequest,
  output: DeleteProjectsLocationsRolloutKindsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRolloutKindsRequest {
  /** The maximum number of rollout kinds to send per page. */
  pageSize?: number;
  /** Required. The parent of the rollout kind. */
  parent: string;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
}

export const ListProjectsLocationsRolloutKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/rolloutKinds" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRolloutKindsRequest>;

export type ListProjectsLocationsRolloutKindsResponse =
  ListRolloutKindsResponse;
export const ListProjectsLocationsRolloutKindsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRolloutKindsResponse;

export type ListProjectsLocationsRolloutKindsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a collection of rollout kinds. */
export const listProjectsLocationsRolloutKinds: API.PaginatedOperationMethod<
  ListProjectsLocationsRolloutKindsRequest,
  ListProjectsLocationsRolloutKindsResponse,
  ListProjectsLocationsRolloutKindsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRolloutKindsRequest,
  output: ListProjectsLocationsRolloutKindsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsRolloutKindsRequest {
  /** Required. The ID value for the new rollout kind. */
  rolloutKindId?: string;
  /** Required. The parent of the rollout kind. */
  parent: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: RolloutKind;
}

export const CreateProjectsLocationsRolloutKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rolloutKindId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("rolloutKindId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(RolloutKind).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/rolloutKinds",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsRolloutKindsRequest>;

export type CreateProjectsLocationsRolloutKindsResponse = RolloutKind;
export const CreateProjectsLocationsRolloutKindsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RolloutKind;

export type CreateProjectsLocationsRolloutKindsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new rollout kind. */
export const createProjectsLocationsRolloutKinds: API.OperationMethod<
  CreateProjectsLocationsRolloutKindsRequest,
  CreateProjectsLocationsRolloutKindsResponse,
  CreateProjectsLocationsRolloutKindsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRolloutKindsRequest,
  output: CreateProjectsLocationsRolloutKindsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsRolloutKindsRequest {
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rolloutKinds/{rollout_kind_id}" */
  name: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Field mask is used to specify the fields to be overwritten in the RolloutKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the RolloutKind will be overwritten. */
  updateMask?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: RolloutKind;
}

export const PatchProjectsLocationsRolloutKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(RolloutKind).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsRolloutKindsRequest>;

export type PatchProjectsLocationsRolloutKindsResponse = RolloutKind;
export const PatchProjectsLocationsRolloutKindsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RolloutKind;

export type PatchProjectsLocationsRolloutKindsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single rollout kind. */
export const patchProjectsLocationsRolloutKinds: API.OperationMethod<
  PatchProjectsLocationsRolloutKindsRequest,
  PatchProjectsLocationsRolloutKindsResponse,
  PatchProjectsLocationsRolloutKindsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRolloutKindsRequest,
  output: PatchProjectsLocationsRolloutKindsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsUnitsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsUnitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsUnitsRequest>;

export type GetProjectsLocationsUnitsResponse = Unit;
export const GetProjectsLocationsUnitsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Unit;

export type GetProjectsLocationsUnitsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single unit. */
export const getProjectsLocationsUnits: API.OperationMethod<
  GetProjectsLocationsUnitsRequest,
  GetProjectsLocationsUnitsResponse,
  GetProjectsLocationsUnitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsUnitsRequest,
  output: GetProjectsLocationsUnitsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsUnitsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the unit. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsUnitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsUnitsRequest>;

export type DeleteProjectsLocationsUnitsResponse = Empty;
export const DeleteProjectsLocationsUnitsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsUnitsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single unit. */
export const deleteProjectsLocationsUnits: API.OperationMethod<
  DeleteProjectsLocationsUnitsRequest,
  DeleteProjectsLocationsUnitsResponse,
  DeleteProjectsLocationsUnitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsUnitsRequest,
  output: DeleteProjectsLocationsUnitsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsUnitsRequest {
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Required. The parent of the unit. */
  parent: string;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** The maximum number of units to send per page. */
  pageSize?: number;
}

export const ListProjectsLocationsUnitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/units" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsUnitsRequest>;

export type ListProjectsLocationsUnitsResponse = ListUnitsResponse;
export const ListProjectsLocationsUnitsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUnitsResponse;

export type ListProjectsLocationsUnitsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a collection of units. */
export const listProjectsLocationsUnits: API.PaginatedOperationMethod<
  ListProjectsLocationsUnitsRequest,
  ListProjectsLocationsUnitsResponse,
  ListProjectsLocationsUnitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsUnitsRequest,
  output: ListProjectsLocationsUnitsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsUnitsRequest {
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The ID value for the new unit. */
  unitId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The parent of the unit. */
  parent: string;
  /** Request body */
  body?: Unit;
}

export const CreateProjectsLocationsUnitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    unitId: Schema.optional(Schema.String).pipe(T.HttpQuery("unitId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Unit).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/units", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsUnitsRequest>;

export type CreateProjectsLocationsUnitsResponse = Unit;
export const CreateProjectsLocationsUnitsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Unit;

export type CreateProjectsLocationsUnitsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new unit. */
export const createProjectsLocationsUnits: API.OperationMethod<
  CreateProjectsLocationsUnitsRequest,
  CreateProjectsLocationsUnitsResponse,
  CreateProjectsLocationsUnitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsUnitsRequest,
  output: CreateProjectsLocationsUnitsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsUnitsRequest {
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/units/{unit}" */
  name: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Field mask is used to specify the fields to be overwritten in the Unit resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Unit will be overwritten. */
  updateMask?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Unit;
}

export const PatchProjectsLocationsUnitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Unit).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsUnitsRequest>;

export type PatchProjectsLocationsUnitsResponse = Unit;
export const PatchProjectsLocationsUnitsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Unit;

export type PatchProjectsLocationsUnitsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single unit. */
export const patchProjectsLocationsUnits: API.OperationMethod<
  PatchProjectsLocationsUnitsRequest,
  PatchProjectsLocationsUnitsResponse,
  PatchProjectsLocationsUnitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsUnitsRequest,
  output: PatchProjectsLocationsUnitsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRolloutsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRolloutsRequest>;

export type GetProjectsLocationsRolloutsResponse = Rollout;
export const GetProjectsLocationsRolloutsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Rollout;

export type GetProjectsLocationsRolloutsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single rollout. */
export const getProjectsLocationsRollouts: API.OperationMethod<
  GetProjectsLocationsRolloutsRequest,
  GetProjectsLocationsRolloutsResponse,
  GetProjectsLocationsRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRolloutsRequest,
  output: GetProjectsLocationsRolloutsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsRolloutsRequest {
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the rollout. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
}

export const DeleteProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsRolloutsRequest>;

export type DeleteProjectsLocationsRolloutsResponse = Empty;
export const DeleteProjectsLocationsRolloutsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsRolloutsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single rollout. */
export const deleteProjectsLocationsRollouts: API.OperationMethod<
  DeleteProjectsLocationsRolloutsRequest,
  DeleteProjectsLocationsRolloutsResponse,
  DeleteProjectsLocationsRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRolloutsRequest,
  output: DeleteProjectsLocationsRolloutsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsRolloutsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Field mask is used to specify the fields to be overwritten in the Rollout resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Rollout will be overwritten. */
  updateMask?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollout/{rollout_id}" */
  name: string;
  /** Request body */
  body?: Rollout;
}

export const PatchProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Rollout).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsRolloutsRequest>;

export type PatchProjectsLocationsRolloutsResponse = Rollout;
export const PatchProjectsLocationsRolloutsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Rollout;

export type PatchProjectsLocationsRolloutsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single rollout. */
export const patchProjectsLocationsRollouts: API.OperationMethod<
  PatchProjectsLocationsRolloutsRequest,
  PatchProjectsLocationsRolloutsResponse,
  PatchProjectsLocationsRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRolloutsRequest,
  output: PatchProjectsLocationsRolloutsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRolloutsRequest {
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Required. The parent of the rollout. */
  parent: string;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** The maximum number of rollouts to send per page. */
  pageSize?: number;
}

export const ListProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/rollouts" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRolloutsRequest>;

export type ListProjectsLocationsRolloutsResponse = ListRolloutsResponse;
export const ListProjectsLocationsRolloutsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRolloutsResponse;

export type ListProjectsLocationsRolloutsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a collection of rollouts. */
export const listProjectsLocationsRollouts: API.PaginatedOperationMethod<
  ListProjectsLocationsRolloutsRequest,
  ListProjectsLocationsRolloutsResponse,
  ListProjectsLocationsRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRolloutsRequest,
  output: ListProjectsLocationsRolloutsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsRolloutsRequest {
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The parent of the rollout. */
  parent: string;
  /** Required. The ID value for the new rollout. */
  rolloutId?: string;
  /** Request body */
  body?: Rollout;
}

export const CreateProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    rolloutId: Schema.optional(Schema.String).pipe(T.HttpQuery("rolloutId")),
    body: Schema.optional(Rollout).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/rollouts", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsRolloutsRequest>;

export type CreateProjectsLocationsRolloutsResponse = Rollout;
export const CreateProjectsLocationsRolloutsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Rollout;

export type CreateProjectsLocationsRolloutsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new rollout. */
export const createProjectsLocationsRollouts: API.OperationMethod<
  CreateProjectsLocationsRolloutsRequest,
  CreateProjectsLocationsRolloutsResponse,
  CreateProjectsLocationsRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRolloutsRequest,
  output: CreateProjectsLocationsRolloutsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsUnitOperationsRequest {
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Field mask is used to specify the fields to be overwritten in the UnitOperation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitOperation will be overwritten. */
  updateMask?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitOperations/{unitOperation}" */
  name: string;
  /** Request body */
  body?: UnitOperation;
}

export const PatchProjectsLocationsUnitOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UnitOperation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsUnitOperationsRequest>;

export type PatchProjectsLocationsUnitOperationsResponse = UnitOperation;
export const PatchProjectsLocationsUnitOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UnitOperation;

export type PatchProjectsLocationsUnitOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single unit operation. */
export const patchProjectsLocationsUnitOperations: API.OperationMethod<
  PatchProjectsLocationsUnitOperationsRequest,
  PatchProjectsLocationsUnitOperationsResponse,
  PatchProjectsLocationsUnitOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsUnitOperationsRequest,
  output: PatchProjectsLocationsUnitOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsUnitOperationsRequest {
  /** Required. The parent of the unit operation. */
  parent: string;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** The maximum number of unit operations to send per page. */
  pageSize?: number;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
}

export const ListProjectsLocationsUnitOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/unitOperations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsUnitOperationsRequest>;

export type ListProjectsLocationsUnitOperationsResponse =
  ListUnitOperationsResponse;
export const ListProjectsLocationsUnitOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUnitOperationsResponse;

export type ListProjectsLocationsUnitOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a collection of unit operations. */
export const listProjectsLocationsUnitOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsUnitOperationsRequest,
  ListProjectsLocationsUnitOperationsResponse,
  ListProjectsLocationsUnitOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsUnitOperationsRequest,
  output: ListProjectsLocationsUnitOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsUnitOperationsRequest {
  /** Required. The ID value for the new unit operation. */
  unitOperationId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent of the unit operation. */
  parent: string;
  /** Request body */
  body?: UnitOperation;
}

export const CreateProjectsLocationsUnitOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unitOperationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("unitOperationId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UnitOperation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/unitOperations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsUnitOperationsRequest>;

export type CreateProjectsLocationsUnitOperationsResponse = UnitOperation;
export const CreateProjectsLocationsUnitOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UnitOperation;

export type CreateProjectsLocationsUnitOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new unit operation. */
export const createProjectsLocationsUnitOperations: API.OperationMethod<
  CreateProjectsLocationsUnitOperationsRequest,
  CreateProjectsLocationsUnitOperationsResponse,
  CreateProjectsLocationsUnitOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsUnitOperationsRequest,
  output: CreateProjectsLocationsUnitOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsUnitOperationsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsUnitOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsUnitOperationsRequest>;

export type GetProjectsLocationsUnitOperationsResponse = UnitOperation;
export const GetProjectsLocationsUnitOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UnitOperation;

export type GetProjectsLocationsUnitOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single unit operation. */
export const getProjectsLocationsUnitOperations: API.OperationMethod<
  GetProjectsLocationsUnitOperationsRequest,
  GetProjectsLocationsUnitOperationsResponse,
  GetProjectsLocationsUnitOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsUnitOperationsRequest,
  output: GetProjectsLocationsUnitOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsUnitOperationsRequest {
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the unit operation. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit operation. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
}

export const DeleteProjectsLocationsUnitOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsUnitOperationsRequest>;

export type DeleteProjectsLocationsUnitOperationsResponse = Empty;
export const DeleteProjectsLocationsUnitOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsUnitOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single unit operation. */
export const deleteProjectsLocationsUnitOperations: API.OperationMethod<
  DeleteProjectsLocationsUnitOperationsRequest,
  DeleteProjectsLocationsUnitOperationsResponse,
  DeleteProjectsLocationsUnitOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsUnitOperationsRequest,
  output: DeleteProjectsLocationsUnitOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsTenantsRequest {
  /** Required. The parent of the tenant. */
  parent: string;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** The maximum number of tenants to send per page. */
  pageSize?: number;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
}

export const ListProjectsLocationsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/tenants" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsTenantsRequest>;

export type ListProjectsLocationsTenantsResponse = ListTenantsResponse;
export const ListProjectsLocationsTenantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTenantsResponse;

export type ListProjectsLocationsTenantsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a collection of tenants. */
export const listProjectsLocationsTenants: API.PaginatedOperationMethod<
  ListProjectsLocationsTenantsRequest,
  ListProjectsLocationsTenantsResponse,
  ListProjectsLocationsTenantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTenantsRequest,
  output: ListProjectsLocationsTenantsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsTenantsRequest {
  /** Required. The parent of the tenant. */
  parent: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The ID value for the new tenant. */
  tenantId?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Tenant;
}

export const CreateProjectsLocationsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    tenantId: Schema.optional(Schema.String).pipe(T.HttpQuery("tenantId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Tenant).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/tenants", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsTenantsRequest>;

export type CreateProjectsLocationsTenantsResponse = Tenant;
export const CreateProjectsLocationsTenantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Tenant;

export type CreateProjectsLocationsTenantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new tenant. */
export const createProjectsLocationsTenants: API.OperationMethod<
  CreateProjectsLocationsTenantsRequest,
  CreateProjectsLocationsTenantsResponse,
  CreateProjectsLocationsTenantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTenantsRequest,
  output: CreateProjectsLocationsTenantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsTenantsRequest {
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/tenants/{tenant}" */
  name: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Field mask is used to specify the fields to be overwritten in the Tenant resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Tenant will be overwritten. */
  updateMask?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Tenant;
}

export const PatchProjectsLocationsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Tenant).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsTenantsRequest>;

export type PatchProjectsLocationsTenantsResponse = Tenant;
export const PatchProjectsLocationsTenantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Tenant;

export type PatchProjectsLocationsTenantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single tenant. */
export const patchProjectsLocationsTenants: API.OperationMethod<
  PatchProjectsLocationsTenantsRequest,
  PatchProjectsLocationsTenantsResponse,
  PatchProjectsLocationsTenantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTenantsRequest,
  output: PatchProjectsLocationsTenantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsTenantsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsTenantsRequest>;

export type GetProjectsLocationsTenantsResponse = Tenant;
export const GetProjectsLocationsTenantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Tenant;

export type GetProjectsLocationsTenantsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single tenant. */
export const getProjectsLocationsTenants: API.OperationMethod<
  GetProjectsLocationsTenantsRequest,
  GetProjectsLocationsTenantsResponse,
  GetProjectsLocationsTenantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTenantsRequest,
  output: GetProjectsLocationsTenantsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsTenantsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the tenant. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the tenant. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsTenantsRequest>;

export type DeleteProjectsLocationsTenantsResponse = Empty;
export const DeleteProjectsLocationsTenantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsTenantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single tenant. */
export const deleteProjectsLocationsTenants: API.OperationMethod<
  DeleteProjectsLocationsTenantsRequest,
  DeleteProjectsLocationsTenantsResponse,
  DeleteProjectsLocationsTenantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTenantsRequest,
  output: DeleteProjectsLocationsTenantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSaasRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsSaasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsSaasRequest>;

export type GetProjectsLocationsSaasResponse = Saas;
export const GetProjectsLocationsSaasResponse =
  /*@__PURE__*/ /*#__PURE__*/ Saas;

export type GetProjectsLocationsSaasError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single saas. */
export const getProjectsLocationsSaas: API.OperationMethod<
  GetProjectsLocationsSaasRequest,
  GetProjectsLocationsSaasResponse,
  GetProjectsLocationsSaasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSaasRequest,
  output: GetProjectsLocationsSaasResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsSaasRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the saas. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the saas. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
}

export const DeleteProjectsLocationsSaasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsSaasRequest>;

export type DeleteProjectsLocationsSaasResponse = Empty;
export const DeleteProjectsLocationsSaasResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsSaasError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single saas. */
export const deleteProjectsLocationsSaas: API.OperationMethod<
  DeleteProjectsLocationsSaasRequest,
  DeleteProjectsLocationsSaasResponse,
  DeleteProjectsLocationsSaasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSaasRequest,
  output: DeleteProjectsLocationsSaasResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsSaasRequest {
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Field mask is used to specify the fields to be overwritten in the Saas resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Saas will be overwritten. */
  updateMask?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/saas/{saas}" */
  name: string;
  /** Request body */
  body?: Saas;
}

export const PatchProjectsLocationsSaasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Saas).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsSaasRequest>;

export type PatchProjectsLocationsSaasResponse = Saas;
export const PatchProjectsLocationsSaasResponse =
  /*@__PURE__*/ /*#__PURE__*/ Saas;

export type PatchProjectsLocationsSaasError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single saas. */
export const patchProjectsLocationsSaas: API.OperationMethod<
  PatchProjectsLocationsSaasRequest,
  PatchProjectsLocationsSaasResponse,
  PatchProjectsLocationsSaasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSaasRequest,
  output: PatchProjectsLocationsSaasResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSaasRequest {
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** The maximum number of saas to send per page. */
  pageSize?: number;
  /** Required. The parent of the saas. */
  parent: string;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsSaasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/saas" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsSaasRequest>;

export type ListProjectsLocationsSaasResponse = ListSaasResponse;
export const ListProjectsLocationsSaasResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSaasResponse;

export type ListProjectsLocationsSaasError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a collection of saas. */
export const listProjectsLocationsSaas: API.PaginatedOperationMethod<
  ListProjectsLocationsSaasRequest,
  ListProjectsLocationsSaasResponse,
  ListProjectsLocationsSaasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSaasRequest,
  output: ListProjectsLocationsSaasResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsSaasRequest {
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The parent of the saas. */
  parent: string;
  /** Required. The ID value for the new saas. */
  saasId?: string;
  /** Request body */
  body?: Saas;
}

export const CreateProjectsLocationsSaasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    saasId: Schema.optional(Schema.String).pipe(T.HttpQuery("saasId")),
    body: Schema.optional(Saas).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/saas", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsSaasRequest>;

export type CreateProjectsLocationsSaasResponse = Saas;
export const CreateProjectsLocationsSaasResponse =
  /*@__PURE__*/ /*#__PURE__*/ Saas;

export type CreateProjectsLocationsSaasError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new saas. */
export const createProjectsLocationsSaas: API.OperationMethod<
  CreateProjectsLocationsSaasRequest,
  CreateProjectsLocationsSaasResponse,
  CreateProjectsLocationsSaasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSaasRequest,
  output: CreateProjectsLocationsSaasResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsUnitKindsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Field mask is used to specify the fields to be overwritten in the UnitKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitKind will be overwritten. */
  updateMask?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitKinds/{unitKind}" */
  name: string;
  /** Request body */
  body?: UnitKind;
}

export const PatchProjectsLocationsUnitKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UnitKind).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsUnitKindsRequest>;

export type PatchProjectsLocationsUnitKindsResponse = UnitKind;
export const PatchProjectsLocationsUnitKindsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UnitKind;

export type PatchProjectsLocationsUnitKindsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single unit kind. */
export const patchProjectsLocationsUnitKinds: API.OperationMethod<
  PatchProjectsLocationsUnitKindsRequest,
  PatchProjectsLocationsUnitKindsResponse,
  PatchProjectsLocationsUnitKindsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsUnitKindsRequest,
  output: PatchProjectsLocationsUnitKindsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsUnitKindsRequest {
  /** The maximum number of unit kinds to send per page. */
  pageSize?: number;
  /** Required. The parent of the unit kind. */
  parent: string;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
}

export const ListProjectsLocationsUnitKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/unitKinds" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsUnitKindsRequest>;

export type ListProjectsLocationsUnitKindsResponse = ListUnitKindsResponse;
export const ListProjectsLocationsUnitKindsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUnitKindsResponse;

export type ListProjectsLocationsUnitKindsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a collection of unit kinds. */
export const listProjectsLocationsUnitKinds: API.PaginatedOperationMethod<
  ListProjectsLocationsUnitKindsRequest,
  ListProjectsLocationsUnitKindsResponse,
  ListProjectsLocationsUnitKindsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsUnitKindsRequest,
  output: ListProjectsLocationsUnitKindsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsUnitKindsRequest {
  /** Required. The ID value for the new unit kind. */
  unitKindId?: string;
  /** Required. The parent of the unit kind. */
  parent: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: UnitKind;
}

export const CreateProjectsLocationsUnitKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unitKindId: Schema.optional(Schema.String).pipe(T.HttpQuery("unitKindId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(UnitKind).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/unitKinds", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsUnitKindsRequest>;

export type CreateProjectsLocationsUnitKindsResponse = UnitKind;
export const CreateProjectsLocationsUnitKindsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UnitKind;

export type CreateProjectsLocationsUnitKindsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new unit kind. */
export const createProjectsLocationsUnitKinds: API.OperationMethod<
  CreateProjectsLocationsUnitKindsRequest,
  CreateProjectsLocationsUnitKindsResponse,
  CreateProjectsLocationsUnitKindsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsUnitKindsRequest,
  output: CreateProjectsLocationsUnitKindsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsUnitKindsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsUnitKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsUnitKindsRequest>;

export type GetProjectsLocationsUnitKindsResponse = UnitKind;
export const GetProjectsLocationsUnitKindsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UnitKind;

export type GetProjectsLocationsUnitKindsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single unit kind. */
export const getProjectsLocationsUnitKinds: API.OperationMethod<
  GetProjectsLocationsUnitKindsRequest,
  GetProjectsLocationsUnitKindsResponse,
  GetProjectsLocationsUnitKindsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsUnitKindsRequest,
  output: GetProjectsLocationsUnitKindsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsUnitKindsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the unit kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
}

export const DeleteProjectsLocationsUnitKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsUnitKindsRequest>;

export type DeleteProjectsLocationsUnitKindsResponse = Empty;
export const DeleteProjectsLocationsUnitKindsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsUnitKindsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single unit kind. */
export const deleteProjectsLocationsUnitKinds: API.OperationMethod<
  DeleteProjectsLocationsUnitKindsRequest,
  DeleteProjectsLocationsUnitKindsResponse,
  DeleteProjectsLocationsUnitKindsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsUnitKindsRequest,
  output: DeleteProjectsLocationsUnitKindsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
