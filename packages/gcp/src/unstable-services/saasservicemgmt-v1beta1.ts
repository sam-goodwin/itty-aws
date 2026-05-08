// ==========================================================================
// App Lifecycle Manager API (saasservicemgmt v1beta1)
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
  name: "saasservicemgmt",
  version: "v1beta1",
  rootUrl: "https://saasservicemgmt.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Variant {
  /** Required. Name of the variant. Max length: 128 bytes. */
  name?: string;
  /** Optional. Integer flag value. */
  intValue?: string;
  /** Optional. Double flag value. */
  doubleValue?: number;
  /** Optional. Boolean flag value. */
  boolValue?: boolean;
  /** Optional. String flag value. */
  stringValue?: string;
}

export const Variant: Schema.Schema<Variant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    intValue: Schema.optional(Schema.String),
    doubleValue: Schema.optional(Schema.Number),
    boolValue: Schema.optional(Schema.Boolean),
    stringValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "Variant" });

export interface AllocationSlot {
  /** Required. Variant of the allocation slot. */
  variant?: string;
  /** Required. Weight defines the proportion of traffic to allocate to the variant, relative to other slots in the same allocation. */
  weight?: number;
}

export const AllocationSlot: Schema.Schema<AllocationSlot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variant: Schema.optional(Schema.String),
    weight: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AllocationSlot" });

export interface Allocation {
  /** Required. Slots defines the weighted distribution of variants. */
  slots?: ReadonlyArray<AllocationSlot>;
  /** Required. Allocation ID. Max length: 128 bytes. */
  id?: string;
  /** Required. Key of the context attribute that is used for traffic splitting. */
  randomizedOn?: string;
  /** Optional. Description of the allocation. Max length: 500 bytes. */
  description?: string;
}

export const Allocation: Schema.Schema<Allocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slots: Schema.optional(Schema.Array(AllocationSlot)),
    id: Schema.optional(Schema.String),
    randomizedOn: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Allocation" });

export interface EvaluationRule {
  /** Required. The target variant or allocation to apply if the condition is met. This should match the name of a defined variant or allocation's ID. */
  target?: string;
  /** Required. Evaluation rule ID. Max length: 128 bytes. */
  id?: string;
  /** Required. A Common Expression Language (CEL) expression that evaluates to a boolean. The expression is evaluated against the provided context. If it returns true, the rule's target is applied. */
  condition?: string;
}

export const EvaluationRule: Schema.Schema<EvaluationRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationRule" });

export interface EvaluationSpec {
  /** Optional. A list of variants. */
  variants?: ReadonlyArray<Variant>;
  /** Optional. A list of allocations. */
  allocations?: ReadonlyArray<Allocation>;
  /** Optional. Names of the context attributes that are used in the evaluation rules and allocations. */
  attributes?: ReadonlyArray<string>;
  /** Required. Default variant or allocation of the flag. */
  defaultTarget?: string;
  /** Optional. Evaluation rules define the logic for evaluating the flag against a given context. The rules are evaluated sequentially in their specified order. */
  rules?: ReadonlyArray<EvaluationRule>;
}

export const EvaluationSpec: Schema.Schema<EvaluationSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variants: Schema.optional(Schema.Array(Variant)),
    allocations: Schema.optional(Schema.Array(Allocation)),
    attributes: Schema.optional(Schema.Array(Schema.String)),
    defaultTarget: Schema.optional(Schema.String),
    rules: Schema.optional(Schema.Array(EvaluationRule)),
  }).annotate({ identifier: "EvaluationSpec" });

export interface FlagVariant {
  /** Optional. Integer variant value. */
  integerValue?: string;
  /** Required. Variant ID. Max length: 128 bytes. */
  id?: string;
  /** Optional. trackingId is unique depending on name and value of the variant within the scope of the service. It is typically generated by the server and must not be changed. trackingId is used to uniquely identify and track variants. */
  trackingId?: string;
  /** Optional. Boolean variant value. */
  booleanValue?: boolean;
  /** Optional. A human-readable description of what this variant does or represents. */
  description?: string;
  /** Optional. String variant value. */
  stringValue?: string;
  /** Optional. Double variant value. */
  doubleValue?: number;
}

export const FlagVariant: Schema.Schema<FlagVariant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integerValue: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    trackingId: Schema.optional(Schema.String),
    booleanValue: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    stringValue: Schema.optional(Schema.String),
    doubleValue: Schema.optional(Schema.Number),
  }).annotate({ identifier: "FlagVariant" });

export interface Flag {
  /** Optional. Description of the flag. Max length: 500 bytes. */
  description?: string;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Specification of how the flag value should be evaluated. If a bool flag is created without an evaluation_spec specified, two default variants, "Enabled" (with bool_value = true) and "Disabled" (with bool_value = false), are created by default, and "Disabled" is set as the default_target. */
  evaluationSpec?: EvaluationSpec;
  /** Optional. Immutable. Deprecated: Use `flag_value_type` instead. Flag value type. */
  valueType?:
    | "FLAG_VALUE_TYPE_UNSPECIFIED"
    | "FLAG_VALUE_TYPE_BOOL"
    | "FLAG_VALUE_TYPE_INT"
    | "FLAG_VALUE_TYPE_STRING"
    | "FLAG_VALUE_TYPE_DOUBLE"
    | (string & {});
  /** Required. Immutable. Flag key used in runtime evaluation APIs (OpenFeature). Max length: 256 bytes. */
  key?: string;
  /** Optional. Flag set this flag belongs to. */
  flagSet?: string;
  /** Optional. Current state of the flag. */
  state?:
    | "FLAG_STATE_UNSPECIFIED"
    | "FLAG_STATE_IN_DEVELOPMENT"
    | "FLAG_STATE_ACTIVE"
    | "FLAG_STATE_SUNSETTING"
    | "FLAG_STATE_CLEANUP"
    | (string & {});
  /** Optional. A list of variants. */
  variants?: ReadonlyArray<FlagVariant>;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Required. Immutable. UnitKind that can consume this flag. */
  unitKind?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flags/{flag_id}" */
  name?: string;
  /** Optional. Immutable. Flag value type. */
  flagValueType?:
    | "FLAG_VALUE_TYPE_UNSPECIFIED"
    | "FLAG_VALUE_TYPE_BOOLEAN"
    | "FLAG_VALUE_TYPE_INTEGER"
    | "FLAG_VALUE_TYPE_STRING"
    | "FLAG_VALUE_TYPE_DOUBLE"
    | (string & {});
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
}

export const Flag: Schema.Schema<Flag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    evaluationSpec: Schema.optional(EvaluationSpec),
    valueType: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    flagSet: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    variants: Schema.optional(Schema.Array(FlagVariant)),
    updateTime: Schema.optional(Schema.String),
    unitKind: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    flagValueType: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
  }).annotate({ identifier: "Flag" });

export interface FlagRevision {
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Required. Immutable. Name of the Flag this is a revision of. */
  flag?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. Immutable. Snapshot of the Flag. */
  snapshot?: Flag;
  /** Output only. Immutable. Snapshot of the EvaluationSpec for the flag. DEPRECATED: Use snapshot instead. */
  evaluationSpec?: EvaluationSpec;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flagRevisions/{flag_revision_id}" */
  name?: string;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
}

export const FlagRevision: Schema.Schema<FlagRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    flag: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    snapshot: Schema.optional(Flag),
    evaluationSpec: Schema.optional(EvaluationSpec),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
  }).annotate({ identifier: "FlagRevision" });

export interface ListFlagRevisionsResponse {
  /** The resulting flag revisions. */
  flagRevisions?: ReadonlyArray<FlagRevision>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** If present, the next page token can be provided to a subsequent ListFlagRevisions call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListFlagRevisionsResponse: Schema.Schema<ListFlagRevisionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flagRevisions: Schema.optional(Schema.Array(FlagRevision)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListFlagRevisionsResponse" });

export interface FlagSetList {
  /** Required. Flag sets to be rolled out. */
  sets?: ReadonlyArray<string>;
}

export const FlagSetList: Schema.Schema<FlagSetList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sets: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FlagSetList" });

export interface FlagRevisionList {
  /** Required. FlagRevisions to be rolled out. */
  revisions?: ReadonlyArray<string>;
}

export const FlagRevisionList: Schema.Schema<FlagRevisionList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revisions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FlagRevisionList" });

export interface FlagRelease {
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flagReleases/{flag_release_id}" */
  name?: string;
  /** Optional. Immutable. DEPRECATED: Use all_flags_release instead. Rollout all flags in the provided UnitKind. Only one of flag_revisions, all_flags, or flag_sets can be set. */
  allFlags?: boolean;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Optional. Immutable. Deprecated: Use the 'state' field in the 'Flag' resource to manage the cleanup of flag lifecycles including removal from UnitKind and Units. Flags to be removed from given UnitKind and all related Units. If Flag is provided here, its FlagRevisions will be removed from UnitKind and Units. */
  obsoleteFlags?: ReadonlyArray<string>;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Required. Immutable. The UnitKind this FlagRelease applies to. */
  unitKind?: string;
  /** Optional. Immutable. Specifies the release consists of a list of flag sets. */
  flagSetsRelease?: FlagSetList;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Optional. Immutable. Specifies the release consists of a list of flag revisions. */
  flagRevisionsRelease?: FlagRevisionList;
  /** Optional. Immutable. DEPRECATED: Use flag_revisions_release instead. FlagRevisions to be rolled out. Only one of flag_revisions, all_flags, or flag_sets can be set. It used to be the ultimate source to truth and has been moved to effective_flag_revisions. */
  flagRevisions?: ReadonlyArray<string>;
  /** Optional. Immutable. DEPRECATED: Use flag_sets_release instead. Flag sets to be rolled out. Only one of flag_revisions, all_flags, or flag_sets can be set. */
  flagSets?: ReadonlyArray<string>;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. Immutable. Specifies the release includes all flags. */
  allFlagsRelease?: boolean;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. An OUTPUT_ONLY field that contains FlagRevisions to be rolled out. This is the ultimate source of truth of what a Rollout or a UnitOperation carries. */
  effectiveFlagRevisions?: ReadonlyArray<string>;
}

export const FlagRelease: Schema.Schema<FlagRelease> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    allFlags: Schema.optional(Schema.Boolean),
    uid: Schema.optional(Schema.String),
    obsoleteFlags: Schema.optional(Schema.Array(Schema.String)),
    updateTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    unitKind: Schema.optional(Schema.String),
    flagSetsRelease: Schema.optional(FlagSetList),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    flagRevisionsRelease: Schema.optional(FlagRevisionList),
    flagRevisions: Schema.optional(Schema.Array(Schema.String)),
    flagSets: Schema.optional(Schema.Array(Schema.String)),
    etag: Schema.optional(Schema.String),
    allFlagsRelease: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    effectiveFlagRevisions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FlagRelease" });

export interface ListFlagReleasesResponse {
  /** The resulting flag releases. */
  flagReleases?: ReadonlyArray<FlagRelease>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** If present, the next page token can be provided to a subsequent ListFlagReleases call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListFlagReleasesResponse: Schema.Schema<ListFlagReleasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flagReleases: Schema.optional(Schema.Array(FlagRelease)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListFlagReleasesResponse" });

export interface RunRolloutActionParams {
  /** Required. If true, the rollout will retry failed operations when resumed. This is applicable only the current state of the Rollout is PAUSED and the requested action is RUN. */
  retryFailedOperations?: boolean;
}

export const RunRolloutActionParams: Schema.Schema<RunRolloutActionParams> =
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

export const RolloutControl: Schema.Schema<RolloutControl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runParams: Schema.optional(RunRolloutActionParams),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "RolloutControl" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface UnitOperationCondition {
  /** Required. Status of the condition. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "STATUS_UNKNOWN"
    | "STATUS_TRUE"
    | "STATUS_FALSE"
    | (string & {});
  /** Required. Brief reason for the condition's last transition. */
  reason?: string;
  /** Required. Type of the condition. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_SCHEDULED"
    | "TYPE_RUNNING"
    | "TYPE_SUCCEEDED"
    | "TYPE_CANCELLED"
    | "TYPE_APP_CREATED"
    | "TYPE_APP_COMPONENTS_REGISTERED"
    | (string & {});
  /** Required. Last time the condition transited from one status to another. */
  lastTransitionTime?: string;
  /** Required. Human readable message indicating details about the last transition. */
  message?: string;
}

export const UnitOperationCondition: Schema.Schema<UnitOperationCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    lastTransitionTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitOperationCondition" });

export interface Schedule {
  /** Optional. Start of operation. If not set, will be set to the start of the next window. (optional) */
  startTime?: string;
}

export const Schedule: Schema.Schema<Schedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Schedule" });

export interface UnitVariable {
  /** Required. Immutable. Name of the variable from actuation configs. */
  variable?: string;
  /** Optional. String encoded value for the variable. */
  value?: string;
  /** Optional. Immutable. Name of a supported variable type. Supported types are string, int, bool. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "STRING"
    | "INT"
    | "BOOL"
    | "STRUCT"
    | "LIST"
    | (string & {});
}

export const UnitVariable: Schema.Schema<UnitVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variable: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitVariable" });

export interface Upgrade {
  /** Optional. Set of input variables. Maximum 100. (optional) */
  inputVariables?: ReadonlyArray<UnitVariable>;
  /** Optional. Reference to the Release object to use for the Unit. (optional). */
  release?: string;
}

export const Upgrade: Schema.Schema<Upgrade> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputVariables: Schema.optional(Schema.Array(UnitVariable)),
    release: Schema.optional(Schema.String),
  }).annotate({ identifier: "Upgrade" });

export interface Provision {
  /** Optional. Set of input variables. Maximum 100. (optional) */
  inputVariables?: ReadonlyArray<UnitVariable>;
  /** Optional. Reference to the Release object to use for the Unit. (optional). */
  release?: string;
}

export const Provision: Schema.Schema<Provision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputVariables: Schema.optional(Schema.Array(UnitVariable)),
    release: Schema.optional(Schema.String),
  }).annotate({ identifier: "Provision" });

export interface FlagUpdate {
  /** Required. Flag release being applied by UnitOperation. */
  flagRelease?: string;
}

export const FlagUpdate: Schema.Schema<FlagUpdate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flagRelease: Schema.optional(Schema.String),
  }).annotate({ identifier: "FlagUpdate" });

export interface Deprovision {}

export const Deprovision: Schema.Schema<Deprovision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Deprovision",
  });

export interface UnitOperation {
  /** Optional. When true, attempt to cancel the operation. Cancellation may fail if the operation is already executing. (Optional) */
  cancel?: boolean;
  /** Optional. Output only. A set of conditions which indicate the various conditions this resource can have. */
  conditions?: ReadonlyArray<UnitOperationCondition>;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. When to schedule this operation. */
  schedule?: Schedule;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Required. Immutable. The Unit a given UnitOperation will act upon. */
  unit?: string;
  /** Optional. Reference to parent resource: UnitOperation. If an operation needs to create other operations as part of its workflow, each of the child operations should have this field set to the parent. This can be used for tracing. (Optional) */
  parentUnitOperation?: string;
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
  upgrade?: Upgrade;
  provision?: Provision;
  flagUpdate?: FlagUpdate;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Optional. Output only. The engine state for on-going deployment engine operation(s). This field is opaque for external usage. */
  engineState?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Optional. Specifies which rollout created this Unit Operation. This cannot be modified and is used for filtering purposes only. If a dependent unit and unit operation are created as part of another unit operation, they will use the same rolloutId. */
  rollout?: string;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  deprovision?: Deprovision;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitOperations/{unitOperation}" */
  name?: string;
  /** Optional. Output only. UnitOperationErrorCategory describe the error category. */
  errorCategory?:
    | "UNIT_OPERATION_ERROR_CATEGORY_UNSPECIFIED"
    | "NOT_APPLICABLE"
    | "FATAL"
    | "RETRIABLE"
    | "IGNORABLE"
    | "STANDARD"
    | (string & {});
  /** Output only. The timestamp when the resource was marked for deletion (deletion is an asynchronous operation). */
  deleteTime?: string;
}

export const UnitOperation: Schema.Schema<UnitOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cancel: Schema.optional(Schema.Boolean),
    conditions: Schema.optional(Schema.Array(UnitOperationCondition)),
    createTime: Schema.optional(Schema.String),
    schedule: Schema.optional(Schedule),
    etag: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
    parentUnitOperation: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    upgrade: Schema.optional(Upgrade),
    provision: Schema.optional(Provision),
    flagUpdate: Schema.optional(FlagUpdate),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    engineState: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    rollout: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    deprovision: Schema.optional(Deprovision),
    name: Schema.optional(Schema.String),
    errorCategory: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitOperation" });

export interface Dependency {
  /** Required. Immutable. The unit kind of the dependency. */
  unitKind?: string;
  /** Required. An alias for the dependency. Used for input variable mapping. */
  alias?: string;
}

export const Dependency: Schema.Schema<Dependency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unitKind: Schema.optional(Schema.String),
    alias: Schema.optional(Schema.String),
  }).annotate({ identifier: "Dependency" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Location {
  /** Optional. Name of location. */
  name?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface CompositeRef {
  /** Output only. Reference to on-going AppTemplate import and replication operation (i.e. the operation_id for the long-running operation). This field is opaque for external usage. */
  syncOperation?: string;
  /** Revision of the ApplicationTemplate to use. Changes to revision will trigger manual resynchronization. If empty, ApplicationTemplate will be ignored. */
  revision?: string;
  /** Required. Reference to the ApplicationTemplate resource. */
  applicationTemplate?: string;
}

export const CompositeRef: Schema.Schema<CompositeRef> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    syncOperation: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
    applicationTemplate: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompositeRef" });

export interface SaasCondition {
  /** Required. Human readable message indicating details about the last transition. */
  message?: string;
  /** Required. Type of the condition. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_READY"
    | "TYPE_SYNCHRONIZED"
    | (string & {});
  /** Required. Last time the condition transited from one status to another. */
  lastTransitionTime?: string;
  /** Required. Status of the condition. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "STATUS_UNKNOWN"
    | "STATUS_TRUE"
    | "STATUS_FALSE"
    | (string & {});
  /** Required. Brief reason for the condition's last transition. */
  reason?: string;
}

export const SaasCondition: Schema.Schema<SaasCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    lastTransitionTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "SaasCondition" });

export interface Saas {
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/saas/{saas}" */
  name?: string;
  /** Output only. Name of repository in Artifact Registry for system-generated Blueprints, eg. Blueprints of imported ApplicationTemplates. */
  blueprintRepo?: string;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Output only. If the state is FAILED, the corresponding error code and message. Defaults to code=OK for all other states. */
  error?: Status;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Optional. List of locations that the service is available in. Rollout refers to the list to generate a rollout plan. */
  locations?: ReadonlyArray<Location>;
  /** Output only. State of the Saas. It is always in ACTIVE state if the application_template is empty. */
  state?:
    | "STATE_TYPE_UNSPECIFIED"
    | "STATE_ACTIVE"
    | "STATE_RUNNING"
    | "STATE_FAILED"
    | "ACTIVE"
    | "RUNNING"
    | "FAILED"
    | (string & {});
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Reference to composite ApplicationTemplate. When specified, the template components will be imported into their equivalent UnitKind, Release and Blueprint resources. Deleted references will not delete imported resources. Should only be specified on source regions, and be unspecified on replica regions. */
  applicationTemplate?: CompositeRef;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. A set of conditions which indicate the various conditions this resource can have. */
  conditions?: ReadonlyArray<SaasCondition>;
}

export const Saas: Schema.Schema<Saas> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    blueprintRepo: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    updateTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locations: Schema.optional(Schema.Array(Location)),
    state: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    applicationTemplate: Schema.optional(CompositeRef),
    createTime: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Array(SaasCondition)),
  }).annotate({ identifier: "Saas" });

export interface Tenant {
  /** Required. Immutable. A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. Part of the App Lifecycle Manager common data model. */
  saas?: string;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Immutable. A reference to the consumer resource this SaaS Tenant is representing. The relationship with a consumer resource can be used by App Lifecycle Manager for retrieving consumer-defined settings and policies such as maintenance policies (using Unified Maintenance Policy API). */
  consumerResource?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/tenants/{tenant}" */
  name?: string;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
}

export const Tenant: Schema.Schema<Tenant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    saas: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    consumerResource: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
  }).annotate({ identifier: "Tenant" });

export interface ListTenantsResponse {
  /** The resulting tenants. */
  tenants?: ReadonlyArray<Tenant>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** If present, the next page token can be provided to a subsequent ListTenants call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListTenantsResponse: Schema.Schema<ListTenantsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tenants: Schema.optional(Schema.Array(Tenant)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListTenantsResponse" });

export interface Scope {
  /** Required. Scope Type. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_REGIONAL"
    | "TYPE_GLOBAL"
    | "REGIONAL"
    | "GLOBAL"
    | (string & {});
}

export const Scope: Schema.Schema<Scope> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Scope" });

export interface FlagAttribute {
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Required. Immutable. The identifier for the attribute, used as the key in the evaluation context. The attribute key is referenced in the evaluation rules and used in the OpenFeature evaluation API to specify the attribute context. */
  key?: string;
  /** Optional. Immutable. Deprecated: Use `attribute_value_type` instead. Type of the attribute. */
  valueType?:
    | "FLAG_ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
    | "BOOLEAN"
    | "INTEGER"
    | "STRING"
    | "DOUBLE"
    | (string & {});
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flagAttributes/{flag_attribute_id}" */
  name?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Optional. Immutable. Type of the attribute. */
  attributeValueType?:
    | "FLAG_ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
    | "FLAG_ATTRIBUTE_VALUE_TYPE_BOOLEAN"
    | "FLAG_ATTRIBUTE_VALUE_TYPE_INTEGER"
    | "FLAG_ATTRIBUTE_VALUE_TYPE_STRING"
    | "FLAG_ATTRIBUTE_VALUE_TYPE_DOUBLE"
    | (string & {});
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
}

export const FlagAttribute: Schema.Schema<FlagAttribute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    valueType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    attributeValueType: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "FlagAttribute" });

export interface ListFlagsResponse {
  /** The resulting flags. */
  flags?: ReadonlyArray<Flag>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** If present, the next page token can be provided to a subsequent ListFlags call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListFlagsResponse: Schema.Schema<ListFlagsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flags: Schema.optional(Schema.Array(Flag)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListFlagsResponse" });

export interface FromMapping {
  /** Required. Alias of the dependency that the outputVariable will pass its value to */
  dependency?: string;
  /** Required. Name of the outputVariable on the dependency */
  outputVariable?: string;
}

export const FromMapping: Schema.Schema<FromMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dependency: Schema.optional(Schema.String),
    outputVariable: Schema.optional(Schema.String),
  }).annotate({ identifier: "FromMapping" });

export interface ToMapping {
  /** Required. Alias of the dependency that the inputVariable will pass its value to */
  dependency?: string;
  /** Optional. Tells App Lifecycle Manager if this mapping should be used during lookup or not */
  ignoreForLookup?: boolean;
  /** Required. Name of the inputVariable on the dependency */
  inputVariable?: string;
}

export const ToMapping: Schema.Schema<ToMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dependency: Schema.optional(Schema.String),
    ignoreForLookup: Schema.optional(Schema.Boolean),
    inputVariable: Schema.optional(Schema.String),
  }).annotate({ identifier: "ToMapping" });

export interface VariableMapping {
  /** Optional. Output variables which will get their values from dependencies */
  from?: FromMapping;
  /** Required. name of the variable */
  variable?: string;
  /** Optional. Input variables whose values will be passed on to dependencies. */
  to?: ToMapping;
}

export const VariableMapping: Schema.Schema<VariableMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    from: Schema.optional(FromMapping),
    variable: Schema.optional(Schema.String),
    to: Schema.optional(ToMapping),
  }).annotate({ identifier: "VariableMapping" });

export interface ComponentRef {
  /** Reference to the Composite ApplicationTemplate. */
  compositeRef?: CompositeRef;
  /** Name of the component in composite.Components */
  component?: string;
  /** Revision of the component. If the component does not have a revision, this field will be explicitly set to the revision of the composite ApplicationTemplate. */
  revision?: string;
}

export const ComponentRef: Schema.Schema<ComponentRef> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    compositeRef: Schema.optional(CompositeRef),
    component: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComponentRef" });

export interface AppParams {
  /** Grouping used to construct the name of the AppHub Application. Multiple UnitKinds can specify the same group to use the same Application across their respective units. Corresponds to the app_boundary_id in the ADC composite ApplicationTemplate. Defaults to UnitKind.name */
  group?: string;
  /** Corresponds to the scope in the ADC composite ApplicationTemplate. Defaults to TYPE_REGIONAL. */
  scope?: Scope;
}

export const AppParams: Schema.Schema<AppParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.String),
    scope: Schema.optional(Scope),
  }).annotate({ identifier: "AppParams" });

export interface UnitKind {
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitKinds/{unitKind}" */
  name?: string;
  /** Optional. A reference to the Release object to use as default for creating new units of this UnitKind (optional). If not specified, a new unit must explicitly reference which release to use for its creation. */
  defaultRelease?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Optional. Default revisions of flags for this UnitKind. Newly created units will use the flag default_flag_revisions present at the time of creation. */
  defaultFlagRevisions?: ReadonlyArray<string>;
  /** Optional. List of inputVariables for this release that will either be retrieved from a dependency’s outputVariables, or will be passed on to a dependency’s inputVariables. Maximum 100. */
  inputVariableMappings?: ReadonlyArray<VariableMapping>;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. List of outputVariables for this unit kind will be passed to this unit's outputVariables. Maximum 100. */
  outputVariableMappings?: ReadonlyArray<VariableMapping>;
  /** Required. Immutable. A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. Part of the App Lifecycle Manager common data model. Immutable once set. */
  saas?: string;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Output only. Reference to component and revision in a composite ApplicationTemplate. */
  applicationTemplateComponent?: ComponentRef;
  /** Optional. Immutable. List of other unit kinds that this release will depend on. Dependencies will be automatically provisioned if not found. Maximum 10. */
  dependencies?: ReadonlyArray<Dependency>;
  /** AppParams contains the parameters for creating an AppHub Application. */
  appParams?: AppParams;
}

export const UnitKind: Schema.Schema<UnitKind> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    defaultRelease: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    defaultFlagRevisions: Schema.optional(Schema.Array(Schema.String)),
    inputVariableMappings: Schema.optional(Schema.Array(VariableMapping)),
    createTime: Schema.optional(Schema.String),
    outputVariableMappings: Schema.optional(Schema.Array(VariableMapping)),
    saas: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    applicationTemplateComponent: Schema.optional(ComponentRef),
    dependencies: Schema.optional(Schema.Array(Dependency)),
    appParams: Schema.optional(AppParams),
  }).annotate({ identifier: "UnitKind" });

export interface MaintenanceSettings {
  /** Optional. If present, it fixes the release on the unit until the given time; i.e. changes to the release field will be rejected. Rollouts should and will also respect this by not requesting an upgrade in the first place. */
  pinnedUntilTime?: string;
}

export const MaintenanceSettings: Schema.Schema<MaintenanceSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pinnedUntilTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaintenanceSettings" });

export interface UnitDependency {
  /** Output only. Alias for the name of the dependency. */
  alias?: string;
  /** Output only. A reference to the Unit object. */
  unit?: string;
}

export const UnitDependency: Schema.Schema<UnitDependency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alias: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitDependency" });

export interface UnitCondition {
  /** Required. Status of the condition. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "STATUS_UNKNOWN"
    | "STATUS_TRUE"
    | "STATUS_FALSE"
    | (string & {});
  /** Required. Brief reason for the condition's last transition. */
  reason?: string;
  /** Required. Type of the condition. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_READY"
    | "TYPE_UPDATING"
    | "TYPE_PROVISIONED"
    | "TYPE_OPERATION_ERROR"
    | (string & {});
  /** Required. Last time the condition transited from one status to another. */
  lastTransitionTime?: string;
  /** Required. Human readable message indicating details about the last transition. */
  message?: string;
}

export const UnitCondition: Schema.Schema<UnitCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    lastTransitionTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitCondition" });

export interface Unit {
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Optional. Captures requested directives for performing future maintenance on the unit. This includes a request for the unit to skip maintenance for a period of time and remain pinned to its current release as well as controls for postponing maintenance scheduled in future. */
  maintenance?: MaintenanceSettings;
  /** Optional. Reference to the Saas Tenant resource this unit belongs to. This for example informs the maintenance policies to use for scheduling future updates on a unit. (optional and immutable once created) */
  tenant?: string;
  /** Optional. Output only. Indicates the system managed state of the unit. */
  systemManagedState?:
    | "SYSTEM_MANAGED_STATE_UNSPECIFIED"
    | "SYSTEM_MANAGED_STATE_ACTIVE"
    | "SYSTEM_MANAGED_STATE_INACTIVE"
    | "SYSTEM_MANAGED_STATE_DECOMMISSIONED"
    | (string & {});
  /** Optional. Reference to the UnitKind this Unit belongs to. Immutable once set. */
  unitKind?: string;
  /** Optional. Output only. List of scheduled UnitOperations for this unit. */
  scheduledOperations?: ReadonlyArray<string>;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Optional. Immutable. Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created. */
  managementMode?:
    | "MANAGEMENT_MODE_UNSPECIFIED"
    | "MANAGEMENT_MODE_USER"
    | "MANAGEMENT_MODE_SYSTEM"
    | (string & {});
  /** Optional. Output only. List of concurrent UnitOperations that are operating on this Unit. */
  ongoingOperations?: ReadonlyArray<string>;
  /** Optional. Output only. Flag revisions used by this Unit. */
  flagRevisions?: ReadonlyArray<string>;
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
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Output only. Indicates the current input variables deployed by the unit */
  inputVariables?: ReadonlyArray<UnitVariable>;
  /** Optional. Output only. Set of dependencies for this unit. Maximum 10. */
  dependencies?: ReadonlyArray<UnitDependency>;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. Output only. Set of key/value pairs corresponding to output variables from execution of actuation templates. The variables are declared in actuation configs (e.g in helm chart or terraform) and the values are fetched and returned by the actuation engine upon completion of execution. */
  outputVariables?: ReadonlyArray<UnitVariable>;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/units/{unit}" */
  name?: string;
  /** Output only. This field stores the unique identifier for the flag configuration to be used by this Unit. */
  flagConfigName?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Optional. Output only. The current Release object for this Unit. */
  release?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Output only. List of Units that depend on this unit. Unit can only be deprovisioned if this list is empty. Maximum 1000. */
  dependents?: ReadonlyArray<UnitDependency>;
  /** Output only. Indicates whether the resource location satisfies Zone Separation constraints. This is false by default. */
  satisfiesPzs?: boolean;
  /** Optional. Output only. List of pending (wait to be executed) UnitOperations for this unit. */
  pendingOperations?: ReadonlyArray<string>;
  /** Optional. Output only. A set of conditions which indicate the various conditions this resource can have. */
  conditions?: ReadonlyArray<UnitCondition>;
  /** Optional. Reference to the AppHub Application this unit belongs to. All resources deployed in this Unit will be associated with the specified Application. */
  application?: string;
  /** Optional. Output only. If set, indicates the time when the system will start removing the unit. */
  systemCleanupAt?: string;
}

export const Unit: Schema.Schema<Unit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    maintenance: Schema.optional(MaintenanceSettings),
    tenant: Schema.optional(Schema.String),
    systemManagedState: Schema.optional(Schema.String),
    unitKind: Schema.optional(Schema.String),
    scheduledOperations: Schema.optional(Schema.Array(Schema.String)),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    managementMode: Schema.optional(Schema.String),
    ongoingOperations: Schema.optional(Schema.Array(Schema.String)),
    flagRevisions: Schema.optional(Schema.Array(Schema.String)),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    inputVariables: Schema.optional(Schema.Array(UnitVariable)),
    dependencies: Schema.optional(Schema.Array(UnitDependency)),
    etag: Schema.optional(Schema.String),
    outputVariables: Schema.optional(Schema.Array(UnitVariable)),
    name: Schema.optional(Schema.String),
    flagConfigName: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    release: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    dependents: Schema.optional(Schema.Array(UnitDependency)),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    pendingOperations: Schema.optional(Schema.Array(Schema.String)),
    conditions: Schema.optional(Schema.Array(UnitCondition)),
    application: Schema.optional(Schema.String),
    systemCleanupAt: Schema.optional(Schema.String),
  }).annotate({ identifier: "Unit" });

export interface ReleaseRequirements {
  /** Optional. A list of releases from which a unit can be upgraded to this one (optional). If left empty no constraints will be applied. When provided, unit upgrade requests to this release will check and enforce this constraint. */
  upgradeableFromReleases?: ReadonlyArray<string>;
}

export const ReleaseRequirements: Schema.Schema<ReleaseRequirements> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upgradeableFromReleases: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ReleaseRequirements" });

export interface ListUnitsResponse {
  /** If present, the next page token can be provided to a subsequent ListUnits call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** The resulting units. */
  units?: ReadonlyArray<Unit>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListUnitsResponse: Schema.Schema<ListUnitsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    units: Schema.optional(Schema.Array(Unit)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListUnitsResponse" });

export interface Aggregate {
  /** Required. Group by which to aggregate. */
  group?: string;
  /** Required. Number of records in the group. */
  count?: number;
}

export const Aggregate: Schema.Schema<Aggregate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Aggregate" });

export interface RolloutStats {
  /** Optional. Output only. Unordered list. A breakdown of the progress of operations triggered by the rollout. Provides a count of Operations by their state. This can be used to determine the number of units which have been updated, or are scheduled to be updated. There will be at most one entry per group. Possible values for operation groups are: - "SCHEDULED" - "PENDING" - "RUNNING" - "SUCCEEDED" - "FAILED" - "CANCELLED" */
  operationsByState?: ReadonlyArray<Aggregate>;
  /** Optional. Output only. Estimated number of units based. The estimation is computed upon creation of the rollout. */
  estimatedTotalUnitCount?: string;
}

export const RolloutStats: Schema.Schema<RolloutStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationsByState: Schema.optional(Schema.Array(Aggregate)),
    estimatedTotalUnitCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "RolloutStats" });

export interface Rollout {
  /** Optional. Output only. The direct parent rollout that this rollout is stemming from. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollouts/{rollout_id}" */
  parentRollout?: string;
  /** Optional. Output only. The time when the rollout finished execution (regardless of success, failure, or cancellation). Will be empty if the rollout hasn't finished yet. Once set, the rollout is in terminal state and all the results are final. */
  endTime?: string;
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
  /** Optional. Output only. Details about the progress of the rollout. */
  stats?: RolloutStats;
  /** Optional. Requested change to the execution of this rollout. Default RolloutControl.action is ROLLOUT_ACTION_RUN meaning the rollout will be executed to completion while progressing through all natural Rollout States (such as RUNNING -> SUCCEEDED or RUNNING -> FAILED). Requests can only be made when the Rollout is in a non-terminal state. */
  control?: RolloutControl;
  /** Optional. Immutable. Name of the FlagRelease to be rolled out to the target Units. Release and FlagRelease are mutually exclusive. Note: `release` comment needs to be adjusted to mention that "Release and FlagRelease are mutually exclusive" when visibility restriction will be lifted. */
  flagRelease?: string;
  /** Optional. CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. If not provided, the unit_filter from the RolloutKind will be used. */
  unitFilter?: string;
  /** Optional. Output only. The root rollout that this rollout is stemming from. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollouts/{rollout_id}" */
  rootRollout?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. Human readable message indicating details about the last state transition. */
  stateMessage?: string;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Optional. Output only. The time when the rollout started executing. Will be empty if the rollout hasn't started yet. */
  startTime?: string;
  /** Output only. The timestamp when the resource was marked for deletion (deletion is an asynchronous operation). */
  deleteTime?: string;
  /** Required. Immutable. Name of the RolloutKind this rollout is stemming from and adhering to. */
  rolloutKind?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollout/{rollout_id}" */
  name?: string;
  /** Optional. The strategy used for executing this Rollout. This strategy will override whatever strategy is specified in the RolloutKind. If not specified on creation, the strategy from RolloutKind will be used. There are two supported values strategies which are used to control - "Google.Cloud.Simple.AllAtOnce" - "Google.Cloud.Simple.OneLocationAtATime" A rollout with one of these simple strategies will rollout across all locations defined in the targeted UnitKind's Saas Locations. */
  rolloutOrchestrationStrategy?: string;
  /** Optional. Output only. The time when the rollout transitioned into its current state. */
  stateTransitionTime?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Optional. Output only. Output only snapshot of the effective unit filter at Rollout start time. Contains a CEL(https://github.com/google/cel-spec) expression consisting of a conjunction of Rollout.unit_filter and RolloutKind.unit_filter. This field captures the filter applied by the Rollout to determine the Unit population. If the associated RolloutKind's unit_filter is modified after the rollout is started, it will not be updated here. */
  effectiveUnitFilter?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Optional. Immutable. Name of the Release that gets rolled out to target Units. Required if no other type of release is specified. */
  release?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
}

export const Rollout: Schema.Schema<Rollout> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parentRollout: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    stats: Schema.optional(RolloutStats),
    control: Schema.optional(RolloutControl),
    flagRelease: Schema.optional(Schema.String),
    unitFilter: Schema.optional(Schema.String),
    rootRollout: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    stateMessage: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    rolloutKind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    rolloutOrchestrationStrategy: Schema.optional(Schema.String),
    stateTransitionTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    effectiveUnitFilter: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    release: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Rollout" });

export interface ListRolloutsResponse {
  /** The resulting rollouts. */
  rollouts?: ReadonlyArray<Rollout>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** If present, the next page token can be provided to a subsequent ListRollouts call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListRolloutsResponse: Schema.Schema<ListRolloutsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rollouts: Schema.optional(Schema.Array(Rollout)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListRolloutsResponse" });

export interface ListUnitOperationsResponse {
  /** The resulting unit operations. */
  unitOperations?: ReadonlyArray<UnitOperation>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** If present, the next page token can be provided to a subsequent ListUnitOperations call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListUnitOperationsResponse: Schema.Schema<ListUnitOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unitOperations: Schema.optional(Schema.Array(UnitOperation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListUnitOperationsResponse" });

export interface ListFlagAttributesResponse {
  /** If present, the next page token can be provided to a subsequent ListFlagAttributes call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** The resulting flag attributes. */
  flagAttributes?: ReadonlyArray<FlagAttribute>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListFlagAttributesResponse: Schema.Schema<ListFlagAttributesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    flagAttributes: Schema.optional(Schema.Array(FlagAttribute)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListFlagAttributesResponse" });

export interface ErrorBudget {
  /** Optional. The maximum number of failed units allowed in a location without pausing the rollout. */
  allowedCount?: number;
  /** Optional. The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout. */
  allowedPercentage?: number;
}

export const ErrorBudget: Schema.Schema<ErrorBudget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedCount: Schema.optional(Schema.Number),
    allowedPercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ErrorBudget" });

export interface RolloutKind {
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. The config for updating the unit kind. By default, the unit kind will be updated on the rollout start. */
  updateUnitKindStrategy?:
    | "UPDATE_UNIT_KIND_STRATEGY_UNSPECIFIED"
    | "UPDATE_UNIT_KIND_STRATEGY_ON_START"
    | "UPDATE_UNIT_KIND_STRATEGY_NEVER"
    | (string & {});
  /** Optional. The strategy used for executing a Rollout. This is a required field. There are two supported values strategies which are used to control - "Google.Cloud.Simple.AllAtOnce" - "Google.Cloud.Simple.OneLocationAtATime" A rollout with one of these simple strategies will rollout across all locations defined in the associated UnitKind's Saas Locations. */
  rolloutOrchestrationStrategy?: string;
  /** Optional. CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. */
  unitFilter?: string;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Required. Immutable. UnitKind that this rollout kind corresponds to. Rollouts stemming from this rollout kind will target the units of this unit kind. In other words, this defines the population of target units to be upgraded by rollouts. */
  unitKind?: string;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Optional. The configuration for error budget. If the number of failed units exceeds max(allowed_count, allowed_ratio * total_units), the rollout will be paused. If not set, all units will be attempted to be updated regardless of the number of failures encountered. */
  errorBudget?: ErrorBudget;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rolloutKinds/{rollout_kind_id}" */
  name?: string;
}

export const RolloutKind: Schema.Schema<RolloutKind> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    updateUnitKindStrategy: Schema.optional(Schema.String),
    rolloutOrchestrationStrategy: Schema.optional(Schema.String),
    unitFilter: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    unitKind: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    errorBudget: Schema.optional(ErrorBudget),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "RolloutKind" });

export interface ListRolloutKindsResponse {
  /** The resulting rollout kinds. */
  rolloutKinds?: ReadonlyArray<RolloutKind>;
  /** If present, the next page token can be provided to a subsequent ListRolloutKinds call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListRolloutKindsResponse: Schema.Schema<ListRolloutKindsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rolloutKinds: Schema.optional(Schema.Array(RolloutKind)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListRolloutKindsResponse" });

export interface Blueprint {
  /** Output only. Type of the engine used to actuate the blueprint. e.g. terraform, helm etc. */
  engine?: string;
  /** Output only. Version metadata if present on the blueprint. */
  version?: string;
  /** Optional. Immutable. URI to a blueprint used by the Unit (required unless unitKind or release is set). */
  package?: string;
}

export const Blueprint: Schema.Schema<Blueprint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    engine: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    package: Schema.optional(Schema.String),
  }).annotate({ identifier: "Blueprint" });

export interface Release {
  /** Optional. Output only. List of input variables declared on the blueprint and can be present with their values on the unit spec */
  inputVariables?: ReadonlyArray<UnitVariable>;
  /** Output only. Reference to component and revision in a composite ApplicationTemplate. */
  applicationTemplateComponent?: ComponentRef;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. Set of requirements to be fulfilled on the Unit when using this Release. */
  releaseRequirements?: ReleaseRequirements;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Blueprints are OCI Images that contain all of the artifacts needed to provision a unit. */
  blueprint?: Blueprint;
  /** Optional. Mapping of input variables to default values. Maximum 100 */
  inputVariableDefaults?: ReadonlyArray<UnitVariable>;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Required. Immutable. Reference to the UnitKind this Release corresponds to (required and immutable once created). */
  unitKind?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/releases/{release}" */
  name?: string;
  /** Optional. Output only. List of output variables declared on the blueprint and can be present with their values on the unit status */
  outputVariables?: ReadonlyArray<UnitVariable>;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
}

export const Release: Schema.Schema<Release> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputVariables: Schema.optional(Schema.Array(UnitVariable)),
    applicationTemplateComponent: Schema.optional(ComponentRef),
    etag: Schema.optional(Schema.String),
    releaseRequirements: Schema.optional(ReleaseRequirements),
    createTime: Schema.optional(Schema.String),
    blueprint: Schema.optional(Blueprint),
    inputVariableDefaults: Schema.optional(Schema.Array(UnitVariable)),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    unitKind: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    outputVariables: Schema.optional(Schema.Array(UnitVariable)),
    uid: Schema.optional(Schema.String),
  }).annotate({ identifier: "Release" });

export interface ListReleasesResponse {
  /** The resulting releases. */
  releases?: ReadonlyArray<Release>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** If present, the next page token can be provided to a subsequent ListReleases call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListReleasesResponse: Schema.Schema<ListReleasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    releases: Schema.optional(Schema.Array(Release)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListReleasesResponse" });

export interface GoogleCloudLocationLocation {
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const GoogleCloudLocationLocation: Schema.Schema<GoogleCloudLocationLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleCloudLocationLocation" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<GoogleCloudLocationLocation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(GoogleCloudLocationLocation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface ListSaasResponse {
  /** The resulting saas. */
  saas?: ReadonlyArray<Saas>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** If present, the next page token can be provided to a subsequent ListSaas call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListSaasResponse: Schema.Schema<ListSaasResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    saas: Schema.optional(Schema.Array(Saas)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSaasResponse" });

export interface ListUnitKindsResponse {
  /** The resulting unit kinds. */
  unitKinds?: ReadonlyArray<UnitKind>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** If present, the next page token can be provided to a subsequent ListUnitKinds call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListUnitKindsResponse: Schema.Schema<ListUnitKindsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unitKinds: Schema.optional(Schema.Array(UnitKind)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListUnitKindsResponse" });

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
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

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
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

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

export interface GetProjectsLocationsFlagReleasesRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsFlagReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsFlagReleasesRequest>;

export type GetProjectsLocationsFlagReleasesResponse = FlagRelease;
export const GetProjectsLocationsFlagReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlagRelease;

export type GetProjectsLocationsFlagReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single flag release. */
export const getProjectsLocationsFlagReleases: API.OperationMethod<
  GetProjectsLocationsFlagReleasesRequest,
  GetProjectsLocationsFlagReleasesResponse,
  GetProjectsLocationsFlagReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsFlagReleasesRequest,
  output: GetProjectsLocationsFlagReleasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsFlagReleasesRequest {
  /** The maximum number of flag releases to send per page. */
  pageSize?: number;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Required. The parent of the flag release. */
  parent: string;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
}

export const ListProjectsLocationsFlagReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/flagReleases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsFlagReleasesRequest>;

export type ListProjectsLocationsFlagReleasesResponse =
  ListFlagReleasesResponse;
export const ListProjectsLocationsFlagReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFlagReleasesResponse;

export type ListProjectsLocationsFlagReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a collection of flag releases. */
export const listProjectsLocationsFlagReleases: API.PaginatedOperationMethod<
  ListProjectsLocationsFlagReleasesRequest,
  ListProjectsLocationsFlagReleasesResponse,
  ListProjectsLocationsFlagReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsFlagReleasesRequest,
  output: ListProjectsLocationsFlagReleasesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsFlagReleasesRequest {
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flagReleases/{flag_release_id}" */
  name: string;
  /** Field mask is used to specify the fields to be overwritten in the FlagRelease resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the FlagRelease will be overwritten. */
  updateMask?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: FlagRelease;
}

export const PatchProjectsLocationsFlagReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(FlagRelease).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsFlagReleasesRequest>;

export type PatchProjectsLocationsFlagReleasesResponse = FlagRelease;
export const PatchProjectsLocationsFlagReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlagRelease;

export type PatchProjectsLocationsFlagReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single flag release. */
export const patchProjectsLocationsFlagReleases: API.OperationMethod<
  PatchProjectsLocationsFlagReleasesRequest,
  PatchProjectsLocationsFlagReleasesResponse,
  PatchProjectsLocationsFlagReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsFlagReleasesRequest,
  output: PatchProjectsLocationsFlagReleasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsFlagReleasesRequest {
  /** The etag known to the client for the expected state of the flag release. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the flag release. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsFlagReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsFlagReleasesRequest>;

export type DeleteProjectsLocationsFlagReleasesResponse = Empty;
export const DeleteProjectsLocationsFlagReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsFlagReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single flag release. */
export const deleteProjectsLocationsFlagReleases: API.OperationMethod<
  DeleteProjectsLocationsFlagReleasesRequest,
  DeleteProjectsLocationsFlagReleasesResponse,
  DeleteProjectsLocationsFlagReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsFlagReleasesRequest,
  output: DeleteProjectsLocationsFlagReleasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsFlagReleasesRequest {
  /** Required. The parent of the flag release. */
  parent: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The ID value for the new flag release. */
  flagReleaseId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: FlagRelease;
}

export const CreateProjectsLocationsFlagReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    flagReleaseId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("flagReleaseId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(FlagRelease).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/flagReleases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsFlagReleasesRequest>;

export type CreateProjectsLocationsFlagReleasesResponse = FlagRelease;
export const CreateProjectsLocationsFlagReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlagRelease;

export type CreateProjectsLocationsFlagReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new flag release. */
export const createProjectsLocationsFlagReleases: API.OperationMethod<
  CreateProjectsLocationsFlagReleasesRequest,
  CreateProjectsLocationsFlagReleasesResponse,
  CreateProjectsLocationsFlagReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsFlagReleasesRequest,
  output: CreateProjectsLocationsFlagReleasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsFlagAttributesRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsFlagAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsFlagAttributesRequest>;

export type GetProjectsLocationsFlagAttributesResponse = FlagAttribute;
export const GetProjectsLocationsFlagAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlagAttribute;

export type GetProjectsLocationsFlagAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single flag attribute. */
export const getProjectsLocationsFlagAttributes: API.OperationMethod<
  GetProjectsLocationsFlagAttributesRequest,
  GetProjectsLocationsFlagAttributesResponse,
  GetProjectsLocationsFlagAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsFlagAttributesRequest,
  output: GetProjectsLocationsFlagAttributesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsFlagAttributesRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The parent of the flag attribute. */
  parent: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The ID value for the new flag attribute. */
  flagAttributeId?: string;
  /** Request body */
  body?: FlagAttribute;
}

export const CreateProjectsLocationsFlagAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    flagAttributeId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("flagAttributeId"),
    ),
    body: Schema.optional(FlagAttribute).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/flagAttributes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsFlagAttributesRequest>;

export type CreateProjectsLocationsFlagAttributesResponse = FlagAttribute;
export const CreateProjectsLocationsFlagAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlagAttribute;

export type CreateProjectsLocationsFlagAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new flag attribute. */
export const createProjectsLocationsFlagAttributes: API.OperationMethod<
  CreateProjectsLocationsFlagAttributesRequest,
  CreateProjectsLocationsFlagAttributesResponse,
  CreateProjectsLocationsFlagAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsFlagAttributesRequest,
  output: CreateProjectsLocationsFlagAttributesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsFlagAttributesRequest {
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Required. The parent of the flag attribute. */
  parent: string;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** The maximum number of flag attributes to send per page. */
  pageSize?: number;
}

export const ListProjectsLocationsFlagAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/flagAttributes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsFlagAttributesRequest>;

export type ListProjectsLocationsFlagAttributesResponse =
  ListFlagAttributesResponse;
export const ListProjectsLocationsFlagAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFlagAttributesResponse;

export type ListProjectsLocationsFlagAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a collection of flag attributes. */
export const listProjectsLocationsFlagAttributes: API.PaginatedOperationMethod<
  ListProjectsLocationsFlagAttributesRequest,
  ListProjectsLocationsFlagAttributesResponse,
  ListProjectsLocationsFlagAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsFlagAttributesRequest,
  output: ListProjectsLocationsFlagAttributesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsFlagAttributesRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flagAttributes/{flag_attribute_id}" */
  name: string;
  /** Field mask is used to specify the fields to be overwritten in the FlagAttribute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the FlagAttribute will be overwritten. */
  updateMask?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: FlagAttribute;
}

export const PatchProjectsLocationsFlagAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(FlagAttribute).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsFlagAttributesRequest>;

export type PatchProjectsLocationsFlagAttributesResponse = FlagAttribute;
export const PatchProjectsLocationsFlagAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlagAttribute;

export type PatchProjectsLocationsFlagAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single flag attribute. */
export const patchProjectsLocationsFlagAttributes: API.OperationMethod<
  PatchProjectsLocationsFlagAttributesRequest,
  PatchProjectsLocationsFlagAttributesResponse,
  PatchProjectsLocationsFlagAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsFlagAttributesRequest,
  output: PatchProjectsLocationsFlagAttributesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsFlagAttributesRequest {
  /** The etag known to the client for the expected state of the flag attribute. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the flag attribute. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsFlagAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsFlagAttributesRequest>;

export type DeleteProjectsLocationsFlagAttributesResponse = Empty;
export const DeleteProjectsLocationsFlagAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsFlagAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single flag attribute. */
export const deleteProjectsLocationsFlagAttributes: API.OperationMethod<
  DeleteProjectsLocationsFlagAttributesRequest,
  DeleteProjectsLocationsFlagAttributesResponse,
  DeleteProjectsLocationsFlagAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsFlagAttributesRequest,
  output: DeleteProjectsLocationsFlagAttributesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsUnitKindsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The parent of the unit kind. */
  parent: string;
  /** Required. The ID value for the new unit kind. */
  unitKindId?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: UnitKind;
}

export const CreateProjectsLocationsUnitKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    unitKindId: Schema.optional(Schema.String).pipe(T.HttpQuery("unitKindId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(UnitKind).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/unitKinds",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsUnitKindsRequest>;

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

export interface PatchProjectsLocationsUnitKindsRequest {
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitKinds/{unitKind}" */
  name: string;
  /** Field mask is used to specify the fields to be overwritten in the UnitKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitKind will be overwritten. */
  updateMask?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: UnitKind;
}

export const PatchProjectsLocationsUnitKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(UnitKind).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsUnitKindsRequest>;

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

export interface DeleteProjectsLocationsUnitKindsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the unit kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsUnitKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsUnitKindsRequest>;

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

export interface ListProjectsLocationsUnitKindsRequest {
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** The maximum number of unit kinds to send per page. */
  pageSize?: number;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Required. The parent of the unit kind. */
  parent: string;
}

export const ListProjectsLocationsUnitKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/unitKinds" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsUnitKindsRequest>;

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

export interface GetProjectsLocationsUnitKindsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsUnitKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsUnitKindsRequest>;

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

export interface CreateProjectsLocationsReleasesRequest {
  /** Required. The ID value for the new release. */
  releaseId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The parent of the release. */
  parent: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Release;
}

export const CreateProjectsLocationsReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    releaseId: Schema.optional(Schema.String).pipe(T.HttpQuery("releaseId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Release).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/releases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsReleasesRequest>;

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
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/releases/{release}" */
  name: string;
  /** Field mask is used to specify the fields to be overwritten in the Release resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Release will be overwritten. */
  updateMask?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: Release;
}

export const PatchProjectsLocationsReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Release).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsReleasesRequest>;

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

export interface DeleteProjectsLocationsReleasesRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the release. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the release. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsReleasesRequest>;

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

export interface ListProjectsLocationsReleasesRequest {
  /** The maximum number of releases to send per page. */
  pageSize?: number;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Required. The parent of the release. */
  parent: string;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
}

export const ListProjectsLocationsReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/releases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsReleasesRequest>;

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

export interface GetProjectsLocationsReleasesRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsReleasesRequest>;

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

export interface CreateProjectsLocationsFlagRevisionsRequest {
  /** Required. The parent of the flag revision. */
  parent: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The ID value for the new flag revision. */
  flagRevisionId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: FlagRevision;
}

export const CreateProjectsLocationsFlagRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    flagRevisionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("flagRevisionId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(FlagRevision).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/flagRevisions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsFlagRevisionsRequest>;

export type CreateProjectsLocationsFlagRevisionsResponse = FlagRevision;
export const CreateProjectsLocationsFlagRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlagRevision;

export type CreateProjectsLocationsFlagRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new flag revision. */
export const createProjectsLocationsFlagRevisions: API.OperationMethod<
  CreateProjectsLocationsFlagRevisionsRequest,
  CreateProjectsLocationsFlagRevisionsResponse,
  CreateProjectsLocationsFlagRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsFlagRevisionsRequest,
  output: CreateProjectsLocationsFlagRevisionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsFlagRevisionsRequest {
  /** Required. The parent of the flag revision. */
  parent: string;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** The maximum number of flag revisions to send per page. */
  pageSize?: number;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsFlagRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/flagRevisions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsFlagRevisionsRequest>;

export type ListProjectsLocationsFlagRevisionsResponse =
  ListFlagRevisionsResponse;
export const ListProjectsLocationsFlagRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFlagRevisionsResponse;

export type ListProjectsLocationsFlagRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a collection of flag revisions. */
export const listProjectsLocationsFlagRevisions: API.PaginatedOperationMethod<
  ListProjectsLocationsFlagRevisionsRequest,
  ListProjectsLocationsFlagRevisionsResponse,
  ListProjectsLocationsFlagRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsFlagRevisionsRequest,
  output: ListProjectsLocationsFlagRevisionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsFlagRevisionsRequest {
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flagRevisions/{flag_revision_id}" */
  name: string;
  /** Field mask is used to specify the fields to be overwritten in the FlagRevision resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the FlagRevision will be overwritten. */
  updateMask?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: FlagRevision;
}

export const PatchProjectsLocationsFlagRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(FlagRevision).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsFlagRevisionsRequest>;

export type PatchProjectsLocationsFlagRevisionsResponse = FlagRevision;
export const PatchProjectsLocationsFlagRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlagRevision;

export type PatchProjectsLocationsFlagRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single flag revision. */
export const patchProjectsLocationsFlagRevisions: API.OperationMethod<
  PatchProjectsLocationsFlagRevisionsRequest,
  PatchProjectsLocationsFlagRevisionsResponse,
  PatchProjectsLocationsFlagRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsFlagRevisionsRequest,
  output: PatchProjectsLocationsFlagRevisionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsFlagRevisionsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the flag revision. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the flag revision. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsFlagRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsFlagRevisionsRequest>;

export type DeleteProjectsLocationsFlagRevisionsResponse = Empty;
export const DeleteProjectsLocationsFlagRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsFlagRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single flag revision. */
export const deleteProjectsLocationsFlagRevisions: API.OperationMethod<
  DeleteProjectsLocationsFlagRevisionsRequest,
  DeleteProjectsLocationsFlagRevisionsResponse,
  DeleteProjectsLocationsFlagRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsFlagRevisionsRequest,
  output: DeleteProjectsLocationsFlagRevisionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsFlagRevisionsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsFlagRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsFlagRevisionsRequest>;

export type GetProjectsLocationsFlagRevisionsResponse = FlagRevision;
export const GetProjectsLocationsFlagRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FlagRevision;

export type GetProjectsLocationsFlagRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single flag revision. */
export const getProjectsLocationsFlagRevisions: API.OperationMethod<
  GetProjectsLocationsFlagRevisionsRequest,
  GetProjectsLocationsFlagRevisionsResponse,
  GetProjectsLocationsFlagRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsFlagRevisionsRequest,
  output: GetProjectsLocationsFlagRevisionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsUnitOperationsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsUnitOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsUnitOperationsRequest>;

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

export interface CreateProjectsLocationsUnitOperationsRequest {
  /** Required. The parent of the unit operation. */
  parent: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The ID value for the new unit operation. */
  unitOperationId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: UnitOperation;
}

export const CreateProjectsLocationsUnitOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    unitOperationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("unitOperationId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(UnitOperation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/unitOperations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsUnitOperationsRequest>;

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

export interface ListProjectsLocationsUnitOperationsRequest {
  /** The maximum number of unit operations to send per page. */
  pageSize?: number;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Required. The parent of the unit operation. */
  parent: string;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
}

export const ListProjectsLocationsUnitOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/unitOperations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsUnitOperationsRequest>;

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

export interface PatchProjectsLocationsUnitOperationsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitOperations/{unitOperation}" */
  name: string;
  /** Field mask is used to specify the fields to be overwritten in the UnitOperation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitOperation will be overwritten. */
  updateMask?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: UnitOperation;
}

export const PatchProjectsLocationsUnitOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(UnitOperation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsUnitOperationsRequest>;

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

export interface DeleteProjectsLocationsUnitOperationsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the unit operation. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit operation. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsUnitOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsUnitOperationsRequest>;

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

export interface GetProjectsLocationsUnitsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsUnitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsUnitsRequest>;

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

export interface CreateProjectsLocationsUnitsRequest {
  /** Required. The parent of the unit. */
  parent: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The ID value for the new unit. */
  unitId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: Unit;
}

export const CreateProjectsLocationsUnitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    unitId: Schema.optional(Schema.String).pipe(T.HttpQuery("unitId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Unit).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+parent}/units", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsUnitsRequest>;

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

export interface ListProjectsLocationsUnitsRequest {
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** The maximum number of units to send per page. */
  pageSize?: number;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Required. The parent of the unit. */
  parent: string;
}

export const ListProjectsLocationsUnitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/units" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsUnitsRequest>;

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

export interface PatchProjectsLocationsUnitsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/units/{unit}" */
  name: string;
  /** Field mask is used to specify the fields to be overwritten in the Unit resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Unit will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Unit;
}

export const PatchProjectsLocationsUnitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Unit).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsUnitsRequest>;

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

export interface DeleteProjectsLocationsUnitsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** The etag known to the client for the expected state of the unit. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const DeleteProjectsLocationsUnitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsUnitsRequest>;

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

export interface CreateProjectsLocationsRolloutKindsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The parent of the rollout kind. */
  parent: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The ID value for the new rollout kind. */
  rolloutKindId?: string;
  /** Request body */
  body?: RolloutKind;
}

export const CreateProjectsLocationsRolloutKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    rolloutKindId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("rolloutKindId"),
    ),
    body: Schema.optional(RolloutKind).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/rolloutKinds",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRolloutKindsRequest>;

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
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rolloutKinds/{rollout_kind_id}" */
  name: string;
  /** Field mask is used to specify the fields to be overwritten in the RolloutKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the RolloutKind will be overwritten. */
  updateMask?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: RolloutKind;
}

export const PatchProjectsLocationsRolloutKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(RolloutKind).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsRolloutKindsRequest>;

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

export interface DeleteProjectsLocationsRolloutKindsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the rollout kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsRolloutKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRolloutKindsRequest>;

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
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Required. The parent of the rollout kind. */
  parent: string;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** The maximum number of rollout kinds to send per page. */
  pageSize?: number;
}

export const ListProjectsLocationsRolloutKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/rolloutKinds" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRolloutKindsRequest>;

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

export interface GetProjectsLocationsRolloutKindsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsRolloutKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRolloutKindsRequest>;

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

export interface ListProjectsLocationsTenantsRequest {
  /** Required. The parent of the tenant. */
  parent: string;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** The maximum number of tenants to send per page. */
  pageSize?: number;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/tenants" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTenantsRequest>;

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

export interface PatchProjectsLocationsTenantsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/tenants/{tenant}" */
  name: string;
  /** Field mask is used to specify the fields to be overwritten in the Tenant resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Tenant will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Tenant;
}

export const PatchProjectsLocationsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Tenant).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTenantsRequest>;

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

export interface DeleteProjectsLocationsTenantsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** The etag known to the client for the expected state of the tenant. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the tenant. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const DeleteProjectsLocationsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTenantsRequest>;

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

export interface CreateProjectsLocationsTenantsRequest {
  /** Required. The parent of the tenant. */
  parent: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The ID value for the new tenant. */
  tenantId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: Tenant;
}

export const CreateProjectsLocationsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    tenantId: Schema.optional(Schema.String).pipe(T.HttpQuery("tenantId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Tenant).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/tenants",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTenantsRequest>;

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

export interface GetProjectsLocationsTenantsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTenantsRequest>;

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

export interface GetProjectsLocationsRolloutsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRolloutsRequest>;

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

export interface CreateProjectsLocationsRolloutsRequest {
  /** Required. The parent of the rollout. */
  parent: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The ID value for the new rollout. */
  rolloutId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: Rollout;
}

export const CreateProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    rolloutId: Schema.optional(Schema.String).pipe(T.HttpQuery("rolloutId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Rollout).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/rollouts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRolloutsRequest>;

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
    T.Http({ method: "GET", path: "v1beta1/{+parent}/rollouts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRolloutsRequest>;

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

export interface PatchProjectsLocationsRolloutsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollout/{rollout_id}" */
  name: string;
  /** Field mask is used to specify the fields to be overwritten in the Rollout resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Rollout will be overwritten. */
  updateMask?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Rollout;
}

export const PatchProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Rollout).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsRolloutsRequest>;

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

export interface DeleteProjectsLocationsRolloutsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** The etag known to the client for the expected state of the rollout. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const DeleteProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRolloutsRequest>;

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

export interface ListProjectsLocationsSaasRequest {
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** The maximum number of saas to send per page. */
  pageSize?: number;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Required. The parent of the saas. */
  parent: string;
}

export const ListProjectsLocationsSaasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/saas" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSaasRequest>;

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

export interface PatchProjectsLocationsSaasRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/saas/{saas}" */
  name: string;
  /** Field mask is used to specify the fields to be overwritten in the Saas resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Saas will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Saas;
}

export const PatchProjectsLocationsSaasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Saas).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSaasRequest>;

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

export interface DeleteProjectsLocationsSaasRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the saas. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the saas. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsSaasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSaasRequest>;

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

export interface CreateProjectsLocationsSaasRequest {
  /** Required. The parent of the saas. */
  parent: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The ID value for the new saas. */
  saasId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: Saas;
}

export const CreateProjectsLocationsSaasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    saasId: Schema.optional(Schema.String).pipe(T.HttpQuery("saasId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Saas).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+parent}/saas", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSaasRequest>;

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

export interface GetProjectsLocationsSaasRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsSaasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSaasRequest>;

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

export interface ListProjectsLocationsFlagsRequest {
  /** Required. The parent of the flag. */
  parent: string;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** The maximum number of flags to send per page. */
  pageSize?: number;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsFlagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/flags" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsFlagsRequest>;

export type ListProjectsLocationsFlagsResponse = ListFlagsResponse;
export const ListProjectsLocationsFlagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFlagsResponse;

export type ListProjectsLocationsFlagsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a collection of flags. */
export const listProjectsLocationsFlags: API.PaginatedOperationMethod<
  ListProjectsLocationsFlagsRequest,
  ListProjectsLocationsFlagsResponse,
  ListProjectsLocationsFlagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsFlagsRequest,
  output: ListProjectsLocationsFlagsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsFlagsRequest {
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flags/{flag_id}" */
  name: string;
  /** Field mask is used to specify the fields to be overwritten in the Flag resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Flag will be overwritten. */
  updateMask?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: Flag;
}

export const PatchProjectsLocationsFlagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Flag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsFlagsRequest>;

export type PatchProjectsLocationsFlagsResponse = Flag;
export const PatchProjectsLocationsFlagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Flag;

export type PatchProjectsLocationsFlagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single flag. */
export const patchProjectsLocationsFlags: API.OperationMethod<
  PatchProjectsLocationsFlagsRequest,
  PatchProjectsLocationsFlagsResponse,
  PatchProjectsLocationsFlagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsFlagsRequest,
  output: PatchProjectsLocationsFlagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsFlagsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the flag. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the flag. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsFlagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsFlagsRequest>;

export type DeleteProjectsLocationsFlagsResponse = Empty;
export const DeleteProjectsLocationsFlagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsFlagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single flag. */
export const deleteProjectsLocationsFlags: API.OperationMethod<
  DeleteProjectsLocationsFlagsRequest,
  DeleteProjectsLocationsFlagsResponse,
  DeleteProjectsLocationsFlagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsFlagsRequest,
  output: DeleteProjectsLocationsFlagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsFlagsRequest {
  /** Required. The ID value for the new flag. */
  flagId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The parent of the flag. */
  parent: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Flag;
}

export const CreateProjectsLocationsFlagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flagId: Schema.optional(Schema.String).pipe(T.HttpQuery("flagId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Flag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+parent}/flags", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsFlagsRequest>;

export type CreateProjectsLocationsFlagsResponse = Flag;
export const CreateProjectsLocationsFlagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Flag;

export type CreateProjectsLocationsFlagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new flag. */
export const createProjectsLocationsFlags: API.OperationMethod<
  CreateProjectsLocationsFlagsRequest,
  CreateProjectsLocationsFlagsResponse,
  CreateProjectsLocationsFlagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsFlagsRequest,
  output: CreateProjectsLocationsFlagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsFlagsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsFlagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsFlagsRequest>;

export type GetProjectsLocationsFlagsResponse = Flag;
export const GetProjectsLocationsFlagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Flag;

export type GetProjectsLocationsFlagsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single flag. */
export const getProjectsLocationsFlags: API.OperationMethod<
  GetProjectsLocationsFlagsRequest,
  GetProjectsLocationsFlagsResponse,
  GetProjectsLocationsFlagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsFlagsRequest,
  output: GetProjectsLocationsFlagsResponse,
  errors: [NotFound, Forbidden],
}));
