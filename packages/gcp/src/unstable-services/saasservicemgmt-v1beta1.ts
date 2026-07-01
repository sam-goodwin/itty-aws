// ==========================================================================
// App Lifecycle Manager API (saasservicemgmt v1beta1)
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
  version: "v1beta1",
  rootUrl: "https://saasservicemgmt.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Scope {
  /** Required. Scope Type. */
  type?: "TYPE_UNSPECIFIED" | "TYPE_REGIONAL" | "TYPE_GLOBAL" | (string & {});
}

export const Scope: Schema.Codec<Scope> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Scope" });

export interface AppParams {
  /** Grouping used to construct the name of the AppHub Application. Multiple UnitKinds can specify the same group to use the same Application across their respective units. Corresponds to the app_boundary_id in the ADC composite ApplicationTemplate. Defaults to UnitKind.name */
  group?: string;
  /** Corresponds to the scope in the ADC composite ApplicationTemplate. Defaults to TYPE_REGIONAL. */
  scope?: Scope;
}

export const AppParams: Schema.Codec<AppParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.String),
    scope: Schema.optional(Scope),
  }).annotate({ identifier: "AppParams" });

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

export interface ToMapping {
  /** Required. Alias of the dependency that the inputVariable will pass its value to */
  dependency?: string;
  /** Optional. Tells App Lifecycle Manager if this mapping should be used during lookup or not */
  ignoreForLookup?: boolean;
  /** Required. Name of the inputVariable on the dependency */
  inputVariable?: string;
}

export const ToMapping: Schema.Codec<ToMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dependency: Schema.optional(Schema.String),
    ignoreForLookup: Schema.optional(Schema.Boolean),
    inputVariable: Schema.optional(Schema.String),
  }).annotate({ identifier: "ToMapping" });

export interface FromMapping {
  /** Required. Alias of the dependency that the outputVariable will pass its value to */
  dependency?: string;
  /** Required. Name of the outputVariable on the dependency */
  outputVariable?: string;
}

export const FromMapping: Schema.Codec<FromMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dependency: Schema.optional(Schema.String),
    outputVariable: Schema.optional(Schema.String),
  }).annotate({ identifier: "FromMapping" });

export interface VariableMapping {
  /** Optional. Input variables whose values will be passed on to dependencies. */
  to?: ToMapping;
  /** Optional. Output variables which will get their values from dependencies */
  from?: FromMapping;
  /** Required. name of the variable */
  variable?: string;
}

export const VariableMapping: Schema.Codec<VariableMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    to: Schema.optional(ToMapping),
    from: Schema.optional(FromMapping),
    variable: Schema.optional(Schema.String),
  }).annotate({ identifier: "VariableMapping" });

export interface CompositeRef {
  /** Required. Reference to the ApplicationTemplate resource. */
  applicationTemplate?: string;
  /** Revision of the ApplicationTemplate to use. Changes to revision will trigger manual resynchronization. If empty, ApplicationTemplate will be ignored. */
  revision?: string;
  /** Output only. Reference to on-going AppTemplate import and replication operation (i.e. the operation_id for the long-running operation). This field is opaque for external usage. */
  syncOperation?: string;
}

export const CompositeRef: Schema.Codec<CompositeRef> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationTemplate: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
    syncOperation: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompositeRef" });

export interface ComponentRef {
  /** Name of the component in composite.Components */
  component?: string;
  /** Revision of the component. If the component does not have a revision, this field will be explicitly set to the revision of the composite ApplicationTemplate. */
  revision?: string;
  /** Reference to the Composite ApplicationTemplate. */
  compositeRef?: CompositeRef;
}

export const ComponentRef: Schema.Codec<ComponentRef> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    component: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
    compositeRef: Schema.optional(CompositeRef),
  }).annotate({ identifier: "ComponentRef" });

export interface UnitKind {
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** AppParams contains the parameters for creating an AppHub Application. */
  appParams?: AppParams;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Optional. Immutable. List of other unit kinds that this release will depend on. Dependencies will be automatically provisioned if not found. Maximum 10. */
  dependencies?: ReadonlyArray<Dependency>;
  /** Optional. Default revisions of flags for this UnitKind. Newly created units will use the flag default_flag_revisions present at the time of creation. */
  defaultFlagRevisions?: ReadonlyArray<string>;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Required. Immutable. A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. Part of the App Lifecycle Manager common data model. Immutable once set. */
  saas?: string;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. List of outputVariables for this unit kind will be passed to this unit's outputVariables. Maximum 100. */
  outputVariableMappings?: ReadonlyArray<VariableMapping>;
  /** Optional. List of inputVariables for this release that will either be retrieved from a dependency's outputVariables, or will be passed on to a dependency's inputVariables. Maximum 100. */
  inputVariableMappings?: ReadonlyArray<VariableMapping>;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitKinds/{unitKind}" */
  name?: string;
  /** Optional. Output only. BoundaryType describes the type of boundary the Unit Kind represents. */
  boundaryType?:
    | "BOUNDARY_TYPE_UNSPECIFIED"
    | "BOUNDARY_TYPE_TENANT_PROJECT"
    | "BOUNDARY_TYPE_MANAGED_PROJECT"
    | (string & {});
  /** Output only. Reference to component and revision in a composite ApplicationTemplate. */
  applicationTemplateComponent?: ComponentRef;
  /** Optional. A reference to the Release object to use as default for creating new units of this UnitKind (optional). If not specified, a new unit must explicitly reference which release to use for its creation. */
  defaultRelease?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
}

export const UnitKind: Schema.Codec<UnitKind> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    appParams: Schema.optional(AppParams),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    dependencies: Schema.optional(Schema.Array(Dependency)),
    defaultFlagRevisions: Schema.optional(Schema.Array(Schema.String)),
    etag: Schema.optional(Schema.String),
    saas: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    outputVariableMappings: Schema.optional(Schema.Array(VariableMapping)),
    inputVariableMappings: Schema.optional(Schema.Array(VariableMapping)),
    name: Schema.optional(Schema.String),
    boundaryType: Schema.optional(Schema.String),
    applicationTemplateComponent: Schema.optional(ComponentRef),
    defaultRelease: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitKind" });

export interface FlagUpdate {
  /** Required. Flag release being applied by UnitOperation. */
  flagRelease?: string;
}

export const FlagUpdate: Schema.Codec<FlagUpdate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flagRelease: Schema.optional(Schema.String),
  }).annotate({ identifier: "FlagUpdate" });

export interface Schedule {
  /** Optional. Start of operation. If not set, will be set to the start of the next window. (optional) */
  startTime?: string;
}

export const Schedule: Schema.Codec<Schedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Schedule" });

export interface UnitOperationCondition {
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
    | "TYPE_WORKLOAD_SUCCEEDED"
    | (string & {});
  /** Required. Last time the condition transited from one status to another. */
  lastTransitionTime?: string;
  /** Required. Human readable message indicating details about the last transition. */
  message?: string;
  /** Required. Status of the condition. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "STATUS_UNKNOWN"
    | "STATUS_TRUE"
    | "STATUS_FALSE"
    | (string & {});
}

export const UnitOperationCondition: Schema.Codec<UnitOperationCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    lastTransitionTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitOperationCondition" });

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

export const UnitVariable: Schema.Codec<UnitVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variable: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitVariable" });

export interface Provision {
  /** Optional. Set of input variables. Maximum 100. (optional) */
  inputVariables?: ReadonlyArray<UnitVariable>;
  /** Optional. Reference to the Release object to use for the Unit. (optional). */
  release?: string;
}

export const Provision: Schema.Codec<Provision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputVariables: Schema.optional(Schema.Array(UnitVariable)),
    release: Schema.optional(Schema.String),
  }).annotate({ identifier: "Provision" });

export interface Deprovision {}

export const Deprovision: Schema.Codec<Deprovision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Deprovision",
  });

export interface Upgrade {
  /** Optional. Set of input variables. Maximum 100. (optional) */
  inputVariables?: ReadonlyArray<UnitVariable>;
  /** Optional. Reference to the Release object to use for the Unit. (optional). */
  release?: string;
}

export const Upgrade: Schema.Codec<Upgrade> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputVariables: Schema.optional(Schema.Array(UnitVariable)),
    release: Schema.optional(Schema.String),
  }).annotate({ identifier: "Upgrade" });

export interface UnitOperation {
  /** Optional. When true, attempt to cancel the operation. Cancellation may fail if the operation is already executing. (Optional) */
  cancel?: boolean;
  /** Optional. Output only. The engine state for on-going deployment engine operation(s). This field is opaque for external usage. */
  engineState?: string;
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
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Output only. The timestamp when the resource was marked for deletion (deletion is an asynchronous operation). */
  deleteTime?: string;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Optional. When to schedule this operation. */
  schedule?: Schedule;
  /** Optional. Output only. UnitOperationErrorCategory describe the error category. */
  errorCategory?:
    | "UNIT_OPERATION_ERROR_CATEGORY_UNSPECIFIED"
    | "NOT_APPLICABLE"
    | "FATAL"
    | "RETRIABLE"
    | "IGNORABLE"
    | "STANDARD"
    | (string & {});
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Optional. Output only. A set of conditions which indicate the various conditions this resource can have. */
  conditions?: ReadonlyArray<UnitOperationCondition>;
  /** Optional. Provision operation. */
  provision?: Provision;
  /** Required. Immutable. The Unit a given UnitOperation will act upon. */
  unit?: string;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. Deprovision operation. */
  deprovision?: Deprovision;
  /** Optional. Reference to parent resource: UnitOperation. If an operation needs to create other operations as part of its workflow, each of the child operations should have this field set to the parent. This can be used for tracing. (Optional) */
  parentUnitOperation?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Specifies which rollout created this Unit Operation. This cannot be modified and is used for filtering purposes only. If a dependent unit and unit operation are created as part of another unit operation, they will use the same rolloutId. */
  rollout?: string;
  /** Optional. Upgrade operation. */
  upgrade?: Upgrade;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitOperations/{unitOperation}" */
  name?: string;
}

export const UnitOperation: Schema.Codec<UnitOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cancel: Schema.optional(Schema.Boolean),
    engineState: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    flagUpdate: Schema.optional(FlagUpdate),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    deleteTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    schedule: Schema.optional(Schedule),
    errorCategory: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    conditions: Schema.optional(Schema.Array(UnitOperationCondition)),
    provision: Schema.optional(Provision),
    unit: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    deprovision: Schema.optional(Deprovision),
    parentUnitOperation: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    rollout: Schema.optional(Schema.String),
    upgrade: Schema.optional(Upgrade),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitOperation" });

export interface ListUnitOperationsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The resulting unit operations. */
  unitOperations?: ReadonlyArray<UnitOperation>;
  /** If present, the next page token can be provided to a subsequent ListUnitOperations call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListUnitOperationsResponse: Schema.Codec<ListUnitOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    unitOperations: Schema.optional(Schema.Array(UnitOperation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListUnitOperationsResponse" });

export interface ReleaseRequirements {
  /** Optional. A list of releases from which a unit can be upgraded to this one (optional). If left empty no constraints will be applied. When provided, unit upgrade requests to this release will check and enforce this constraint. */
  upgradeableFromReleases?: ReadonlyArray<string>;
}

export const ReleaseRequirements: Schema.Codec<ReleaseRequirements> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upgradeableFromReleases: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ReleaseRequirements" });

export interface UnitGroupOperation {
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitGroupOperations/{unitGroupOperation}" */
  name?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
}

export const UnitGroupOperation: Schema.Codec<UnitGroupOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "UnitGroupOperation" });

export interface ListUnitGroupOperationsResponse {
  /** The resulting unit group operations. */
  unitGroupOperations?: ReadonlyArray<UnitGroupOperation>;
  /** If present, the next page token can be provided to a subsequent ListUnitGroupOperations call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListUnitGroupOperationsResponse: Schema.Codec<ListUnitGroupOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unitGroupOperations: Schema.optional(Schema.Array(UnitGroupOperation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListUnitGroupOperationsResponse" });

export interface UnitCondition {
  /** Required. Brief reason for the condition's last transition. */
  reason?: string;
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
  /** Required. Last time the condition transited from one status to another. */
  lastTransitionTime?: string;
  /** Required. Human readable message indicating details about the last transition. */
  message?: string;
  /** Required. Status of the condition. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "STATUS_UNKNOWN"
    | "STATUS_TRUE"
    | "STATUS_FALSE"
    | (string & {});
}

export const UnitCondition: Schema.Codec<UnitCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    lastTransitionTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitCondition" });

export interface FlagSetList {
  /** Required. Flag sets to be rolled out. */
  sets?: ReadonlyArray<string>;
}

export const FlagSetList: Schema.Codec<FlagSetList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sets: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FlagSetList" });

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
  /** Required. Last time the condition transited from one status to another. */
  lastTransitionTime?: string;
  /** Required. Human readable message indicating details about the last transition. */
  message?: string;
}

export const SaasCondition: Schema.Codec<SaasCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    lastTransitionTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "SaasCondition" });

export interface Location {
  /** Optional. Name of location. */
  name?: string;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface Saas {
  /** Output only. State of the Saas. It is always in STATE_ACTIVE state if the application_template is empty. */
  state?:
    | "STATE_TYPE_UNSPECIFIED"
    | "STATE_ACTIVE"
    | "STATE_RUNNING"
    | "STATE_FAILED"
    | (string & {});
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Output only. If the state is FAILED, the corresponding error code and message. Defaults to code=OK for all other states. */
  error?: Status;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Output only. A set of conditions which indicate the various conditions this resource can have. */
  conditions?: ReadonlyArray<SaasCondition>;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Reference to composite ApplicationTemplate. When specified, the template components will be imported into their equivalent UnitKind, Release and Blueprint resources. Deleted references will not delete imported resources. Should only be specified on source regions, and be unspecified on replica regions. */
  applicationTemplate?: CompositeRef;
  /** Optional. List of locations that the service is available in. Rollout refers to the list to generate a rollout plan. */
  locations?: ReadonlyArray<Location>;
  /** Output only. Name of repository in Artifact Registry for system-generated Blueprints, eg. Blueprints of imported ApplicationTemplates. */
  blueprintRepo?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/saas/{saas}" */
  name?: string;
}

export const Saas: Schema.Codec<Saas> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    error: Schema.optional(Status),
    uid: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Array(SaasCondition)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    applicationTemplate: Schema.optional(CompositeRef),
    locations: Schema.optional(Schema.Array(Location)),
    blueprintRepo: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Saas" });

export interface ListSaasResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The resulting saas. */
  saas?: ReadonlyArray<Saas>;
  /** If present, the next page token can be provided to a subsequent ListSaas call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListSaasResponse: Schema.Codec<ListSaasResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    saas: Schema.optional(Schema.Array(Saas)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSaasResponse" });

export interface Tenant {
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/tenants/{tenant}" */
  name?: string;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Required. Immutable. A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. Part of the App Lifecycle Manager common data model. */
  saas?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Immutable. A reference to the consumer resource this SaaS Tenant is representing. The relationship with a consumer resource can be used by App Lifecycle Manager for retrieving consumer-defined settings and policies such as maintenance policies (using Unified Maintenance Policy API). */
  consumerResource?: string;
}

export const Tenant: Schema.Codec<Tenant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    saas: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    consumerResource: Schema.optional(Schema.String),
  }).annotate({ identifier: "Tenant" });

export interface ListTenantsResponse {
  /** If present, the next page token can be provided to a subsequent ListTenants call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** The resulting tenants. */
  tenants?: ReadonlyArray<Tenant>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListTenantsResponse: Schema.Codec<ListTenantsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    tenants: Schema.optional(Schema.Array(Tenant)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListTenantsResponse" });

export interface Blueprint {
  /** Output only. Type of the engine used to actuate the blueprint. e.g. terraform, helm etc. */
  engine?: string;
  /** Output only. Version metadata if present on the blueprint. */
  version?: string;
  /** Optional. Immutable. URI to a blueprint used by the Unit (required unless unitKind or release is set). */
  package?: string;
}

export const Blueprint: Schema.Codec<Blueprint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    engine: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    package: Schema.optional(Schema.String),
  }).annotate({ identifier: "Blueprint" });

export interface Release {
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Optional. Output only. List of input variables declared on the blueprint and can be present with their values on the unit spec */
  inputVariables?: ReadonlyArray<UnitVariable>;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Required. Immutable. Reference to the UnitKind this Release corresponds to (required and immutable once created). */
  unitKind?: string;
  /** Output only. Reference to component and revision in a composite ApplicationTemplate. */
  applicationTemplateComponent?: ComponentRef;
  /** Optional. Output only. List of output variables declared on the blueprint and can be present with their values on the unit status */
  outputVariables?: ReadonlyArray<UnitVariable>;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/releases/{release}" */
  name?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Set of requirements to be fulfilled on the Unit when using this Release. */
  releaseRequirements?: ReleaseRequirements;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Blueprints are OCI Images that contain all of the artifacts needed to provision a unit. */
  blueprint?: Blueprint;
  /** Optional. Mapping of input variables to default values. Maximum 100 */
  inputVariableDefaults?: ReadonlyArray<UnitVariable>;
}

export const Release: Schema.Codec<Release> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    inputVariables: Schema.optional(Schema.Array(UnitVariable)),
    uid: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    unitKind: Schema.optional(Schema.String),
    applicationTemplateComponent: Schema.optional(ComponentRef),
    outputVariables: Schema.optional(Schema.Array(UnitVariable)),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    releaseRequirements: Schema.optional(ReleaseRequirements),
    createTime: Schema.optional(Schema.String),
    blueprint: Schema.optional(Blueprint),
    inputVariableDefaults: Schema.optional(Schema.Array(UnitVariable)),
  }).annotate({ identifier: "Release" });

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

export interface RolloutKind {
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rolloutKinds/{rollout_kind_id}" */
  name?: string;
  /** Optional. CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. */
  unitFilter?: string;
  /** Optional. The configuration for error budget. If the number of failed units exceeds max(allowed_count, allowed_ratio * total_units), the rollout will be paused. If not set, all units will be attempted to be updated regardless of the number of failures encountered. */
  errorBudget?: ErrorBudget;
  /** Required. Immutable. UnitKind that this rollout kind corresponds to. Rollouts stemming from this rollout kind will target the units of this unit kind. In other words, this defines the population of target units to be upgraded by rollouts. */
  unitKind?: string;
  /** Optional. The strategy used for executing a Rollout. This is a required field. There are two supported values strategies which are used to control - "Google.Cloud.Simple.AllAtOnce" - "Google.Cloud.Simple.OneLocationAtATime" A rollout with one of these simple strategies will rollout across all locations defined in the associated UnitKind's Saas Locations. */
  rolloutOrchestrationStrategy?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Optional. Settings for controlling the pacing of rollouts i.e. the number of units to be rolled out in parallel in a region. */
  unitUpdatePacing?: UnitUpdatePacing;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Optional. The config for updating the unit kind. By default, the unit kind will be updated on the rollout start. */
  updateUnitKindStrategy?:
    | "UPDATE_UNIT_KIND_STRATEGY_UNSPECIFIED"
    | "UPDATE_UNIT_KIND_STRATEGY_ON_START"
    | "UPDATE_UNIT_KIND_STRATEGY_NEVER"
    | (string & {});
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
}

export const RolloutKind: Schema.Codec<RolloutKind> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    unitFilter: Schema.optional(Schema.String),
    errorBudget: Schema.optional(ErrorBudget),
    unitKind: Schema.optional(Schema.String),
    rolloutOrchestrationStrategy: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    unitUpdatePacing: Schema.optional(UnitUpdatePacing),
    uid: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateUnitKindStrategy: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "RolloutKind" });

export interface GoogleCloudLocationLocation {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const GoogleCloudLocationLocation: Schema.Codec<GoogleCloudLocationLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
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

export interface SaasRelease {
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/saasReleases/{saasRelease}" */
  name?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
}

export const SaasRelease: Schema.Codec<SaasRelease> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "SaasRelease" });

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

export interface Aggregate {
  /** Required. Group by which to aggregate. */
  group?: string;
  /** Required. Number of records in the group. */
  count?: number;
}

export const Aggregate: Schema.Codec<Aggregate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Aggregate" });

export interface RolloutStats {
  /** Optional. Output only. Estimated number of units based. The estimation is computed upon creation of the rollout. */
  estimatedTotalUnitCount?: string;
  /** Optional. Output only. Unordered list. A breakdown of the progress of operations triggered by the rollout. Provides a count of Operations by their state. This can be used to determine the number of units which have been updated, or are scheduled to be updated. There will be at most one entry per group. Possible values for operation groups are: - "SCHEDULED" - "PENDING" - "RUNNING" - "SUCCEEDED" - "FAILED" - "CANCELLED" */
  operationsByState?: ReadonlyArray<Aggregate>;
}

export const RolloutStats: Schema.Codec<RolloutStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    estimatedTotalUnitCount: Schema.optional(Schema.String),
    operationsByState: Schema.optional(Schema.Array(Aggregate)),
  }).annotate({ identifier: "RolloutStats" });

export interface Rollout {
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Optional. Output only. The root rollout that this rollout is stemming from. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollouts/{rollout_id}" */
  rootRollout?: string;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
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
  /** Optional. Requested change to the execution of this rollout. Default RolloutControl.action is ROLLOUT_ACTION_RUN meaning the rollout will be executed to completion while progressing through all natural Rollout States (such as RUNNING -> SUCCEEDED or RUNNING -> FAILED). Requests can only be made when the Rollout is in a non-terminal state. */
  control?: RolloutControl;
  /** Optional. Output only. Details about the progress of the rollout. */
  stats?: RolloutStats;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Output only. The timestamp when the resource was marked for deletion (deletion is an asynchronous operation). */
  deleteTime?: string;
  /** Output only. Human readable message indicating details about the last state transition. */
  stateMessage?: string;
  /** Optional. The strategy used for executing this Rollout. This strategy will override whatever strategy is specified in the RolloutKind. If not specified on creation, the strategy from RolloutKind will be used. There are two supported values strategies which are used to control - "Google.Cloud.Simple.AllAtOnce" - "Google.Cloud.Simple.OneLocationAtATime" A rollout with one of these simple strategies will rollout across all locations defined in the targeted UnitKind's Saas Locations. */
  rolloutOrchestrationStrategy?: string;
  /** Optional. Immutable. Name of the FlagRelease to be rolled out to the target Units. Release and FlagRelease are mutually exclusive. Note: `release` comment needs to be adjusted to mention that "Release and FlagRelease are mutually exclusive" when visibility restriction will be lifted. */
  flagRelease?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. Output only. Output only snapshot of the effective unit filter at Rollout start time. Contains a CEL(https://github.com/google/cel-spec) expression consisting of a conjunction of Rollout.unit_filter and RolloutKind.unit_filter. This field captures the filter applied by the Rollout to determine the Unit population. If the associated RolloutKind's unit_filter is modified after the rollout is started, it will not be updated here. */
  effectiveUnitFilter?: string;
  /** Optional. Output only. The time when the rollout transitioned into its current state. */
  stateTransitionTime?: string;
  /** Optional. CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. If not provided, the unit_filter from the RolloutKind will be used. */
  unitFilter?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollout/{rollout_id}" */
  name?: string;
  /** Optional. Output only. The time when the rollout started executing. Will be empty if the rollout hasn't started yet. */
  startTime?: string;
  /** Optional. Immutable. Name of the Release that gets rolled out to target Units. Required if no other type of release is specified. */
  release?: string;
  /** Optional. Output only. The direct parent rollout that this rollout is stemming from. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollouts/{rollout_id}" */
  parentRollout?: string;
  /** Optional. Output only. The time when the rollout finished execution (regardless of success, failure, or cancellation). Will be empty if the rollout hasn't finished yet. Once set, the rollout is in terminal state and all the results are final. */
  endTime?: string;
  /** Required. Immutable. Name of the RolloutKind this rollout is stemming from and adhering to. */
  rolloutKind?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
}

export const Rollout: Schema.Codec<Rollout> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    rootRollout: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
    control: Schema.optional(RolloutControl),
    stats: Schema.optional(RolloutStats),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    deleteTime: Schema.optional(Schema.String),
    stateMessage: Schema.optional(Schema.String),
    rolloutOrchestrationStrategy: Schema.optional(Schema.String),
    flagRelease: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    effectiveUnitFilter: Schema.optional(Schema.String),
    stateTransitionTime: Schema.optional(Schema.String),
    unitFilter: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    release: Schema.optional(Schema.String),
    parentRollout: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    rolloutKind: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Rollout" });

export interface ListRolloutsResponse {
  /** If present, the next page token can be provided to a subsequent ListRollouts call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The resulting rollouts. */
  rollouts?: ReadonlyArray<Rollout>;
}

export const ListRolloutsResponse: Schema.Codec<ListRolloutsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    rollouts: Schema.optional(Schema.Array(Rollout)),
  }).annotate({ identifier: "ListRolloutsResponse" });

export interface MaintenanceSettings {
  /** Optional. If present, it fixes the release on the unit until the given time; i.e. changes to the release field will be rejected. Rollouts should and will also respect this by not requesting an upgrade in the first place. */
  pinnedUntilTime?: string;
}

export const MaintenanceSettings: Schema.Codec<MaintenanceSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pinnedUntilTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaintenanceSettings" });

export interface FlagRevisionList {
  /** Required. FlagRevisions to be rolled out. */
  revisions?: ReadonlyArray<string>;
}

export const FlagRevisionList: Schema.Codec<FlagRevisionList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revisions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FlagRevisionList" });

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

export interface Unit {
  /** Optional. Output only. Reference to the UnitGroup this unit belongs to. */
  unitGroup?: string;
  /** Optional. Output only. List of Units that depend on this unit. Unit can only be deprovisioned if this list is empty. Maximum 1000. */
  dependents?: ReadonlyArray<UnitDependency>;
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
  /** Optional. Output only. Set of dependencies for this unit. Maximum 10. */
  dependencies?: ReadonlyArray<UnitDependency>;
  /** Optional. Output only. Flag revisions used by this Unit. */
  flagRevisions?: ReadonlyArray<string>;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Optional. Captures requested directives for performing future maintenance on the unit. This includes a request for the unit to skip maintenance for a period of time and remain pinned to its current release as well as controls for postponing maintenance scheduled in future. */
  maintenance?: MaintenanceSettings;
  /** Output only. Indicates whether the resource location satisfies Zone Separation constraints. This is false by default. */
  satisfiesPzs?: boolean;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/units/{unit}" */
  name?: string;
  /** Optional. Output only. List of scheduled UnitOperations for this unit. */
  scheduledOperations?: ReadonlyArray<string>;
  /** Optional. Immutable. Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created. */
  managementMode?:
    | "MANAGEMENT_MODE_UNSPECIFIED"
    | "MANAGEMENT_MODE_USER"
    | "MANAGEMENT_MODE_SYSTEM"
    | (string & {});
  /** Optional. Output only. The current Release object for this Unit. */
  release?: string;
  /** Optional. Output only. Set of key/value pairs corresponding to output variables from execution of actuation templates. The variables are declared in actuation configs (e.g in helm chart or terraform) and the values are fetched and returned by the actuation engine upon completion of execution. */
  outputVariables?: ReadonlyArray<UnitVariable>;
  /** Optional. Output only. List of pending (wait to be executed) UnitOperations for this unit. */
  pendingOperations?: ReadonlyArray<string>;
  /** Optional. Output only. If set, indicates the time when the system will start removing the unit. */
  systemCleanupAt?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Optional. Reference to the UnitKind this Unit belongs to. Immutable once set. */
  unitKind?: string;
  /** Optional. Output only. List of concurrent UnitOperations that are operating on this Unit. */
  ongoingOperations?: ReadonlyArray<string>;
  /** Optional. Output only. A set of conditions which indicate the various conditions this resource can have. */
  conditions?: ReadonlyArray<UnitCondition>;
  /** Optional. Output only. Indicates the current input variables deployed by the unit */
  inputVariables?: ReadonlyArray<UnitVariable>;
  /** Optional. Reference to the AppHub Application this unit belongs to. All resources deployed in this Unit will be associated with the specified Application. */
  application?: string;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Output only. Indicates the system managed state of the unit. */
  systemManagedState?:
    | "SYSTEM_MANAGED_STATE_UNSPECIFIED"
    | "SYSTEM_MANAGED_STATE_ACTIVE"
    | "SYSTEM_MANAGED_STATE_INACTIVE"
    | "SYSTEM_MANAGED_STATE_DECOMMISSIONED"
    | (string & {});
  /** Output only. This field stores the unique identifier for the flag configuration to be used by this Unit. */
  flagConfigName?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Optional. Reference to the Saas Tenant resource this unit belongs to. This for example informs the maintenance policies to use for scheduling future updates on a unit. (optional and immutable once created) */
  tenant?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
}

export const Unit: Schema.Codec<Unit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unitGroup: Schema.optional(Schema.String),
    dependents: Schema.optional(Schema.Array(UnitDependency)),
    state: Schema.optional(Schema.String),
    dependencies: Schema.optional(Schema.Array(UnitDependency)),
    flagRevisions: Schema.optional(Schema.Array(Schema.String)),
    etag: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    maintenance: Schema.optional(MaintenanceSettings),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    scheduledOperations: Schema.optional(Schema.Array(Schema.String)),
    managementMode: Schema.optional(Schema.String),
    release: Schema.optional(Schema.String),
    outputVariables: Schema.optional(Schema.Array(UnitVariable)),
    pendingOperations: Schema.optional(Schema.Array(Schema.String)),
    systemCleanupAt: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    unitKind: Schema.optional(Schema.String),
    ongoingOperations: Schema.optional(Schema.Array(Schema.String)),
    conditions: Schema.optional(Schema.Array(UnitCondition)),
    inputVariables: Schema.optional(Schema.Array(UnitVariable)),
    application: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    systemManagedState: Schema.optional(Schema.String),
    flagConfigName: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    tenant: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Unit" });

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

export interface Variant {
  /** Optional. Double flag value. */
  doubleValue?: number;
  /** Optional. Boolean flag value. */
  boolValue?: boolean;
  /** Required. Name of the variant. Max length: 128 bytes. */
  name?: string;
  /** Optional. Integer flag value. */
  intValue?: string;
  /** Optional. String flag value. */
  stringValue?: string;
}

export const Variant: Schema.Codec<Variant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    doubleValue: Schema.optional(Schema.Number),
    boolValue: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    intValue: Schema.optional(Schema.String),
    stringValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "Variant" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface FlagRelease {
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Immutable. Specifies the release consists of a list of flag revisions. */
  flagRevisionsRelease?: FlagRevisionList;
  /** Optional. Immutable. DEPRECATED: Use flag_sets_release instead. Flag sets to be rolled out. Only one of flag_revisions, all_flags, or flag_sets can be set. */
  flagSets?: ReadonlyArray<string>;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Output only. An OUTPUT_ONLY field that contains FlagRevisions to be rolled out. This is the ultimate source of truth of what a Rollout or a UnitOperation carries. */
  effectiveFlagRevisions?: ReadonlyArray<string>;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flagReleases/{flag_release_id}" */
  name?: string;
  /** Optional. Immutable. Specifies the release includes all flags. */
  allFlagsRelease?: boolean;
  /** Optional. Immutable. Deprecated: Use the 'state' field in the 'Flag' resource to manage the cleanup of flag lifecycles including removal from UnitKind and Units. Flags to be removed from given UnitKind and all related Units. If Flag is provided here, its FlagRevisions will be removed from UnitKind and Units. */
  obsoleteFlags?: ReadonlyArray<string>;
  /** Required. Immutable. The UnitKind this FlagRelease applies to. */
  unitKind?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Optional. Immutable. Specifies the release consists of a list of flag sets. */
  flagSetsRelease?: FlagSetList;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Optional. Immutable. DEPRECATED: Use all_flags_release instead. Rollout all flags in the provided UnitKind. Only one of flag_revisions, all_flags, or flag_sets can be set. */
  allFlags?: boolean;
  /** Optional. Immutable. DEPRECATED: Use flag_revisions_release instead. FlagRevisions to be rolled out. Only one of flag_revisions, all_flags, or flag_sets can be set. It used to be the ultimate source to truth and has been moved to effective_flag_revisions. */
  flagRevisions?: ReadonlyArray<string>;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
}

export const FlagRelease: Schema.Codec<FlagRelease> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    flagRevisionsRelease: Schema.optional(FlagRevisionList),
    flagSets: Schema.optional(Schema.Array(Schema.String)),
    updateTime: Schema.optional(Schema.String),
    effectiveFlagRevisions: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    allFlagsRelease: Schema.optional(Schema.Boolean),
    obsoleteFlags: Schema.optional(Schema.Array(Schema.String)),
    unitKind: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    flagSetsRelease: Schema.optional(FlagSetList),
    uid: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    allFlags: Schema.optional(Schema.Boolean),
    flagRevisions: Schema.optional(Schema.Array(Schema.String)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "FlagRelease" });

export interface ListFlagReleasesResponse {
  /** The resulting flag releases. */
  flagReleases?: ReadonlyArray<FlagRelease>;
  /** If present, the next page token can be provided to a subsequent ListFlagReleases call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListFlagReleasesResponse: Schema.Codec<ListFlagReleasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flagReleases: Schema.optional(Schema.Array(FlagRelease)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListFlagReleasesResponse" });

export interface EvaluationRule {
  /** Required. Evaluation rule ID. Max length: 128 bytes. */
  id?: string;
  /** Required. A Common Expression Language (CEL) expression that evaluates to a boolean. The expression is evaluated against the provided context. If it returns true, the rule's target is applied. */
  condition?: string;
  /** Optional. The ID of an allocation to target. */
  allocationId?: string;
  /** Optional. The name of a variant to target. */
  variantId?: string;
  /** Optional. Deprecated: Use `rule_target` instead. The target variant or allocation to apply if the condition is met. This should match the name of a defined variant or allocation's ID. */
  target?: string;
}

export const EvaluationRule: Schema.Codec<EvaluationRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    condition: Schema.optional(Schema.String),
    allocationId: Schema.optional(Schema.String),
    variantId: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
  }).annotate({ identifier: "EvaluationRule" });

export interface AllocationSlot {
  /** Required. Variant of the allocation slot. */
  variant?: string;
  /** Required. Weight defines the proportion of traffic to allocate to the variant, relative to other slots in the same allocation. */
  weight?: number;
}

export const AllocationSlot: Schema.Codec<AllocationSlot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variant: Schema.optional(Schema.String),
    weight: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AllocationSlot" });

export interface Allocation {
  /** Optional. Description of the allocation. Max length: 500 bytes. */
  description?: string;
  /** Required. Allocation ID. Max length: 128 bytes. */
  id?: string;
  /** Required. Slots defines the weighted distribution of variants. */
  slots?: ReadonlyArray<AllocationSlot>;
  /** Required. Key of the context attribute that is used for traffic splitting. */
  randomizedOn?: string;
}

export const Allocation: Schema.Codec<Allocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    slots: Schema.optional(Schema.Array(AllocationSlot)),
    randomizedOn: Schema.optional(Schema.String),
  }).annotate({ identifier: "Allocation" });

export interface EvaluationSpec {
  /** Optional. Names of the context attributes that are used in the evaluation rules and allocations. */
  attributes?: ReadonlyArray<string>;
  /** Optional. Evaluation rules define the logic for evaluating the flag against a given context. The rules are evaluated sequentially in their specified order. */
  rules?: ReadonlyArray<EvaluationRule>;
  /** Optional. Deprecated: Use `base_target` instead. Default variant or allocation of the flag. */
  defaultTarget?: string;
  /** Optional. A list of allocations. */
  allocations?: ReadonlyArray<Allocation>;
  /** Optional. A list of variants. */
  variants?: ReadonlyArray<Variant>;
}

export const EvaluationSpec: Schema.Codec<EvaluationSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributes: Schema.optional(Schema.Array(Schema.String)),
    rules: Schema.optional(Schema.Array(EvaluationRule)),
    defaultTarget: Schema.optional(Schema.String),
    allocations: Schema.optional(Schema.Array(Allocation)),
    variants: Schema.optional(Schema.Array(Variant)),
  }).annotate({ identifier: "EvaluationSpec" });

export interface FlagVariant {
  /** Optional. Double variant value. */
  doubleValue?: number;
  /** Required. Variant ID. Max length: 128 bytes. */
  id?: string;
  /** Optional. Integer variant value. */
  integerValue?: string;
  /** Optional. trackingId is unique depending on name and value of the variant within the scope of the service. It is typically generated by the server and must not be changed. trackingId is used to uniquely identify and track variants. */
  trackingId?: string;
  /** Optional. Boolean variant value. */
  booleanValue?: boolean;
  /** Optional. String variant value. */
  stringValue?: string;
  /** Optional. A human-readable description of what this variant does or represents. */
  description?: string;
}

export const FlagVariant: Schema.Codec<FlagVariant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    doubleValue: Schema.optional(Schema.Number),
    id: Schema.optional(Schema.String),
    integerValue: Schema.optional(Schema.String),
    trackingId: Schema.optional(Schema.String),
    booleanValue: Schema.optional(Schema.Boolean),
    stringValue: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "FlagVariant" });

export interface Flag {
  /** Optional. Specification of how the flag value should be evaluated. If a bool flag is created without an evaluation_spec specified, two default variants, "Enabled" (with bool_value = true) and "Disabled" (with bool_value = false), are created by default, and "Disabled" is set as the default_target. */
  evaluationSpec?: EvaluationSpec;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
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
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Optional. Current state of the flag. */
  state?:
    | "FLAG_STATE_UNSPECIFIED"
    | "FLAG_STATE_IN_DEVELOPMENT"
    | "FLAG_STATE_ACTIVE"
    | "FLAG_STATE_SUNSETTING"
    | "FLAG_STATE_CLEANUP"
    | (string & {});
  /** Optional. Flag set this flag belongs to. */
  flagSet?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Optional. Description of the flag. Max length: 500 bytes. */
  description?: string;
  /** Required. Immutable. UnitKind that can consume this flag. */
  unitKind?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Optional. A list of variants. */
  variants?: ReadonlyArray<FlagVariant>;
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
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
}

export const Flag: Schema.Codec<Flag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationSpec: Schema.optional(EvaluationSpec),
    uid: Schema.optional(Schema.String),
    valueType: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
    flagSet: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    unitKind: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    variants: Schema.optional(Schema.Array(FlagVariant)),
    name: Schema.optional(Schema.String),
    flagValueType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Flag" });

export interface FlagRevision {
  /** Output only. Immutable. Snapshot of the EvaluationSpec for the flag. DEPRECATED: Use snapshot instead. */
  evaluationSpec?: EvaluationSpec;
  /** Output only. Immutable. Snapshot of the Flag. */
  snapshot?: Flag;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flagRevisions/{flag_revision_id}" */
  name?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Required. Immutable. Name of the Flag this is a revision of. */
  flag?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
}

export const FlagRevision: Schema.Codec<FlagRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationSpec: Schema.optional(EvaluationSpec),
    snapshot: Schema.optional(Flag),
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    flag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "FlagRevision" });

export interface ListFlagRevisionsResponse {
  /** The resulting flag revisions. */
  flagRevisions?: ReadonlyArray<FlagRevision>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** If present, the next page token can be provided to a subsequent ListFlagRevisions call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListFlagRevisionsResponse: Schema.Codec<ListFlagRevisionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flagRevisions: Schema.optional(Schema.Array(FlagRevision)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListFlagRevisionsResponse" });

export interface ListRolloutKindsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The resulting rollout kinds. */
  rolloutKinds?: ReadonlyArray<RolloutKind>;
  /** If present, the next page token can be provided to a subsequent ListRolloutKinds call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListRolloutKindsResponse: Schema.Codec<ListRolloutKindsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    rolloutKinds: Schema.optional(Schema.Array(RolloutKind)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListRolloutKindsResponse" });

export interface FlagAttribute {
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flagAttributes/{flag_attribute_id}" */
  name?: string;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
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
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
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
}

export const FlagAttribute: Schema.Codec<FlagAttribute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    valueType: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    attributeValueType: Schema.optional(Schema.String),
  }).annotate({ identifier: "FlagAttribute" });

export interface ListFlagAttributesResponse {
  /** The resulting flag attributes. */
  flagAttributes?: ReadonlyArray<FlagAttribute>;
  /** If present, the next page token can be provided to a subsequent ListFlagAttributes call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListFlagAttributesResponse: Schema.Codec<ListFlagAttributesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flagAttributes: Schema.optional(Schema.Array(FlagAttribute)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListFlagAttributesResponse" });

export interface ListReleasesResponse {
  /** The resulting releases. */
  releases?: ReadonlyArray<Release>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** If present, the next page token can be provided to a subsequent ListReleases call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListReleasesResponse: Schema.Codec<ListReleasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    releases: Schema.optional(Schema.Array(Release)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListReleasesResponse" });

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

export interface UnitGroup {
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitGroups/{unitGroup}" */
  name?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations */
  annotations?: Record<string, string>;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
}

export const UnitGroup: Schema.Codec<UnitGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnitGroup" });

export interface ListUnitGroupsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The resulting unit groups. */
  unitGroups?: ReadonlyArray<UnitGroup>;
  /** If present, the next page token can be provided to a subsequent ListUnitGroups call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListUnitGroupsResponse: Schema.Codec<ListUnitGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    unitGroups: Schema.optional(Schema.Array(UnitGroup)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListUnitGroupsResponse" });

export interface ListFlagsResponse {
  /** If present, the next page token can be provided to a subsequent ListFlags call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** The resulting flags. */
  flags?: ReadonlyArray<Flag>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListFlagsResponse: Schema.Codec<ListFlagsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    flags: Schema.optional(Schema.Array(Flag)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListFlagsResponse" });

export interface ListSaasReleasesResponse {
  /** If present, the next page token can be provided to a subsequent ListSaasReleases call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
  /** The resulting saas releases. */
  saasReleases?: ReadonlyArray<SaasRelease>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListSaasReleasesResponse: Schema.Codec<ListSaasReleasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    saasReleases: Schema.optional(Schema.Array(SaasRelease)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListSaasReleasesResponse" });

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

export interface ListProjectsLocationsRequest {
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/locations" }),
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
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** The etag known to the client for the expected state of the saas. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the saas. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsSaasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
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

export interface ListProjectsLocationsSaasRequest {
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Required. The parent of the saas. */
  parent: string;
  /** The maximum number of saas to send per page. */
  pageSize?: number;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsSaasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/saas" }),
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
  /** Required. The ID value for the new saas. */
  saasId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The parent of the saas. */
  parent: string;
  /** Request body */
  body?: Saas;
}

export const CreateProjectsLocationsSaasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    saasId: Schema.optional(Schema.String).pipe(T.HttpQuery("saasId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Saas).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+parent}/saas", hasBody: true }),
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

export interface PatchProjectsLocationsSaasRequest {
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/saas/{saas}" */
  name: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Field mask is used to specify the fields to be overwritten in the Saas resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Saas will be overwritten. */
  updateMask?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: Saas;
}

export const PatchProjectsLocationsSaasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Saas).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
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

export interface ListProjectsLocationsTenantsRequest {
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Required. The parent of the tenant. */
  parent: string;
  /** The maximum number of tenants to send per page. */
  pageSize?: number;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/tenants" }),
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
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent of the tenant. */
  parent: string;
  /** Required. The ID value for the new tenant. */
  tenantId?: string;
  /** Request body */
  body?: Tenant;
}

export const CreateProjectsLocationsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    tenantId: Schema.optional(Schema.String).pipe(T.HttpQuery("tenantId")),
    body: Schema.optional(Tenant).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/tenants",
      hasBody: true,
    }),
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
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Field mask is used to specify the fields to be overwritten in the Tenant resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Tenant will be overwritten. */
  updateMask?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/tenants/{tenant}" */
  name: string;
  /** Request body */
  body?: Tenant;
}

export const PatchProjectsLocationsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Tenant).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
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
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
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
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsTenantsRequest =
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
  ) as unknown as Schema.Codec<GetProjectsLocationsFlagAttributesRequest>;

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

export interface DeleteProjectsLocationsFlagAttributesRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** The etag known to the client for the expected state of the flag attribute. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the flag attribute. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const DeleteProjectsLocationsFlagAttributesRequest =
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
  ) as unknown as Schema.Codec<DeleteProjectsLocationsFlagAttributesRequest>;

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

export interface ListProjectsLocationsFlagAttributesRequest {
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Required. The parent of the flag attribute. */
  parent: string;
  /** The maximum number of flag attributes to send per page. */
  pageSize?: number;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsFlagAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/flagAttributes" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsFlagAttributesRequest>;

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

export interface CreateProjectsLocationsFlagAttributesRequest {
  /** Required. The ID value for the new flag attribute. */
  flagAttributeId?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The parent of the flag attribute. */
  parent: string;
  /** Request body */
  body?: FlagAttribute;
}

export const CreateProjectsLocationsFlagAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flagAttributeId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("flagAttributeId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(FlagAttribute).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/flagAttributes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsFlagAttributesRequest>;

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

export interface PatchProjectsLocationsFlagAttributesRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Field mask is used to specify the fields to be overwritten in the FlagAttribute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the FlagAttribute will be overwritten. */
  updateMask?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flagAttributes/{flag_attribute_id}" */
  name: string;
  /** Request body */
  body?: FlagAttribute;
}

export const PatchProjectsLocationsFlagAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(FlagAttribute).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsFlagAttributesRequest>;

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

export interface ListProjectsLocationsFlagRevisionsRequest {
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Required. The parent of the flag revision. */
  parent: string;
  /** The maximum number of flag revisions to send per page. */
  pageSize?: number;
}

export const ListProjectsLocationsFlagRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/flagRevisions" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsFlagRevisionsRequest>;

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

export interface CreateProjectsLocationsFlagRevisionsRequest {
  /** Required. The ID value for the new flag revision. */
  flagRevisionId?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The parent of the flag revision. */
  parent: string;
  /** Request body */
  body?: FlagRevision;
}

export const CreateProjectsLocationsFlagRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flagRevisionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("flagRevisionId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(FlagRevision).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/flagRevisions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsFlagRevisionsRequest>;

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

export interface PatchProjectsLocationsFlagRevisionsRequest {
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flagRevisions/{flag_revision_id}" */
  name: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Field mask is used to specify the fields to be overwritten in the FlagRevision resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the FlagRevision will be overwritten. */
  updateMask?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: FlagRevision;
}

export const PatchProjectsLocationsFlagRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(FlagRevision).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsFlagRevisionsRequest>;

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
  ) as unknown as Schema.Codec<GetProjectsLocationsFlagRevisionsRequest>;

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
  ) as unknown as Schema.Codec<DeleteProjectsLocationsFlagRevisionsRequest>;

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

export interface ListProjectsLocationsUnitOperationsRequest {
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Required. The parent of the unit operation. */
  parent: string;
  /** The maximum number of unit operations to send per page. */
  pageSize?: number;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsUnitOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/unitOperations" }),
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
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The parent of the unit operation. */
  parent: string;
  /** Required. The ID value for the new unit operation. */
  unitOperationId?: string;
  /** Request body */
  body?: UnitOperation;
}

export const CreateProjectsLocationsUnitOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    unitOperationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("unitOperationId"),
    ),
    body: Schema.optional(UnitOperation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/unitOperations",
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

export interface PatchProjectsLocationsUnitOperationsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Field mask is used to specify the fields to be overwritten in the UnitOperation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitOperation will be overwritten. */
  updateMask?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitOperations/{unitOperation}" */
  name: string;
  /** Request body */
  body?: UnitOperation;
}

export const PatchProjectsLocationsUnitOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UnitOperation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
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
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** The etag known to the client for the expected state of the unit operation. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit operation. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsUnitOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
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

export interface GetProjectsLocationsUnitGroupsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsUnitGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsUnitGroupsRequest>;

export type GetProjectsLocationsUnitGroupsResponse = UnitGroup;
export const GetProjectsLocationsUnitGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UnitGroup;

export type GetProjectsLocationsUnitGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single unit group. */
export const getProjectsLocationsUnitGroups: API.OperationMethod<
  GetProjectsLocationsUnitGroupsRequest,
  GetProjectsLocationsUnitGroupsResponse,
  GetProjectsLocationsUnitGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsUnitGroupsRequest,
  output: GetProjectsLocationsUnitGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsUnitGroupsRequest {
  /** The etag known to the client for the expected state of the unit group. */
  etag?: string;
  /** An optional request ID to identify requests. */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const DeleteProjectsLocationsUnitGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsUnitGroupsRequest>;

export type DeleteProjectsLocationsUnitGroupsResponse = Empty;
export const DeleteProjectsLocationsUnitGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsUnitGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single unit group. */
export const deleteProjectsLocationsUnitGroups: API.OperationMethod<
  DeleteProjectsLocationsUnitGroupsRequest,
  DeleteProjectsLocationsUnitGroupsResponse,
  DeleteProjectsLocationsUnitGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsUnitGroupsRequest,
  output: DeleteProjectsLocationsUnitGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsUnitGroupsRequest {
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Required. The parent of the unit group. */
  parent: string;
  /** The maximum number of unit groups to send per page. */
  pageSize?: number;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsUnitGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/unitGroups" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsUnitGroupsRequest>;

export type ListProjectsLocationsUnitGroupsResponse = ListUnitGroupsResponse;
export const ListProjectsLocationsUnitGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUnitGroupsResponse;

export type ListProjectsLocationsUnitGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a collection of unit groups. */
export const listProjectsLocationsUnitGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsUnitGroupsRequest,
  ListProjectsLocationsUnitGroupsResponse,
  ListProjectsLocationsUnitGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsUnitGroupsRequest,
  output: ListProjectsLocationsUnitGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsUnitGroupsRequest {
  /** An optional request ID to identify requests. */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The parent of the unit group. */
  parent: string;
  /** Required. The ID value for the new unit group. */
  unitGroupId?: string;
  /** Request body */
  body?: UnitGroup;
}

export const CreateProjectsLocationsUnitGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    unitGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("unitGroupId"),
    ),
    body: Schema.optional(UnitGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/unitGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsUnitGroupsRequest>;

export type CreateProjectsLocationsUnitGroupsResponse = UnitGroup;
export const CreateProjectsLocationsUnitGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UnitGroup;

export type CreateProjectsLocationsUnitGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new unit group. */
export const createProjectsLocationsUnitGroups: API.OperationMethod<
  CreateProjectsLocationsUnitGroupsRequest,
  CreateProjectsLocationsUnitGroupsResponse,
  CreateProjectsLocationsUnitGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsUnitGroupsRequest,
  output: CreateProjectsLocationsUnitGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsUnitGroupsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. */
  requestId?: string;
  /** Field mask is used to specify the fields to be overwritten. */
  updateMask?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitGroups/{unitGroup}" */
  name: string;
  /** Request body */
  body?: UnitGroup;
}

export const PatchProjectsLocationsUnitGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UnitGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsUnitGroupsRequest>;

export type PatchProjectsLocationsUnitGroupsResponse = UnitGroup;
export const PatchProjectsLocationsUnitGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UnitGroup;

export type PatchProjectsLocationsUnitGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single unit group. */
export const patchProjectsLocationsUnitGroups: API.OperationMethod<
  PatchProjectsLocationsUnitGroupsRequest,
  PatchProjectsLocationsUnitGroupsResponse,
  PatchProjectsLocationsUnitGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsUnitGroupsRequest,
  output: PatchProjectsLocationsUnitGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsUnitsRequest {
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Required. The parent of the unit. */
  parent: string;
  /** The maximum number of units to send per page. */
  pageSize?: number;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsUnitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/units" }),
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
  /** Required. The ID value for the new unit. */
  unitId?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The parent of the unit. */
  parent: string;
  /** Request body */
  body?: Unit;
}

export const CreateProjectsLocationsUnitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unitId: Schema.optional(Schema.String).pipe(T.HttpQuery("unitId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Unit).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+parent}/units", hasBody: true }),
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
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Field mask is used to specify the fields to be overwritten in the Unit resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Unit will be overwritten. */
  updateMask?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: Unit;
}

export const PatchProjectsLocationsUnitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Unit).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
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
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** The etag known to the client for the expected state of the rollout kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsRolloutKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
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
  /** Required. The parent of the rollout kind. */
  parent: string;
  /** The maximum number of rollout kinds to send per page. */
  pageSize?: number;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
}

export const ListProjectsLocationsRolloutKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/rolloutKinds" }),
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
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The ID value for the new rollout kind. */
  rolloutKindId?: string;
  /** Required. The parent of the rollout kind. */
  parent: string;
  /** Request body */
  body?: RolloutKind;
}

export const CreateProjectsLocationsRolloutKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    rolloutKindId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("rolloutKindId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(RolloutKind).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/rolloutKinds",
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
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Field mask is used to specify the fields to be overwritten in the RolloutKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the RolloutKind will be overwritten. */
  updateMask?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rolloutKinds/{rollout_kind_id}" */
  name: string;
  /** Request body */
  body?: RolloutKind;
}

export const PatchProjectsLocationsRolloutKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RolloutKind).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
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

export interface ListProjectsLocationsUnitGroupOperationsRequest {
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Required. The parent of the unit group operation. */
  parent: string;
  /** The maximum number of unit group operations to send per page. */
  pageSize?: number;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
}

export const ListProjectsLocationsUnitGroupOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/unitGroupOperations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsUnitGroupOperationsRequest>;

export type ListProjectsLocationsUnitGroupOperationsResponse =
  ListUnitGroupOperationsResponse;
export const ListProjectsLocationsUnitGroupOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUnitGroupOperationsResponse;

export type ListProjectsLocationsUnitGroupOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a collection of unit group operations. */
export const listProjectsLocationsUnitGroupOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsUnitGroupOperationsRequest,
  ListProjectsLocationsUnitGroupOperationsResponse,
  ListProjectsLocationsUnitGroupOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsUnitGroupOperationsRequest,
  output: ListProjectsLocationsUnitGroupOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsUnitGroupOperationsRequest {
  /** Required. The ID value for the new unit group operation. */
  unitGroupOperationId?: string;
  /** Optional. If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent of the unit group operation. */
  parent: string;
  /** Request body */
  body?: UnitGroupOperation;
}

export const CreateProjectsLocationsUnitGroupOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unitGroupOperationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("unitGroupOperationId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UnitGroupOperation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/unitGroupOperations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsUnitGroupOperationsRequest>;

export type CreateProjectsLocationsUnitGroupOperationsResponse =
  UnitGroupOperation;
export const CreateProjectsLocationsUnitGroupOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UnitGroupOperation;

export type CreateProjectsLocationsUnitGroupOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new unit group operation. */
export const createProjectsLocationsUnitGroupOperations: API.OperationMethod<
  CreateProjectsLocationsUnitGroupOperationsRequest,
  CreateProjectsLocationsUnitGroupOperationsResponse,
  CreateProjectsLocationsUnitGroupOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsUnitGroupOperationsRequest,
  output: CreateProjectsLocationsUnitGroupOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsUnitGroupOperationsRequest {
  /** Optional. If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the UnitGroupOperation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitGroupOperation will be overwritten. */
  updateMask?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitGroupOperations/{unitGroupOperation}" */
  name: string;
  /** Request body */
  body?: UnitGroupOperation;
}

export const PatchProjectsLocationsUnitGroupOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UnitGroupOperation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsUnitGroupOperationsRequest>;

export type PatchProjectsLocationsUnitGroupOperationsResponse =
  UnitGroupOperation;
export const PatchProjectsLocationsUnitGroupOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UnitGroupOperation;

export type PatchProjectsLocationsUnitGroupOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single unit group operation. */
export const patchProjectsLocationsUnitGroupOperations: API.OperationMethod<
  PatchProjectsLocationsUnitGroupOperationsRequest,
  PatchProjectsLocationsUnitGroupOperationsResponse,
  PatchProjectsLocationsUnitGroupOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsUnitGroupOperationsRequest,
  output: PatchProjectsLocationsUnitGroupOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsUnitGroupOperationsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsUnitGroupOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsUnitGroupOperationsRequest>;

export type GetProjectsLocationsUnitGroupOperationsResponse =
  UnitGroupOperation;
export const GetProjectsLocationsUnitGroupOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UnitGroupOperation;

export type GetProjectsLocationsUnitGroupOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single unit group operation. */
export const getProjectsLocationsUnitGroupOperations: API.OperationMethod<
  GetProjectsLocationsUnitGroupOperationsRequest,
  GetProjectsLocationsUnitGroupOperationsResponse,
  GetProjectsLocationsUnitGroupOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsUnitGroupOperationsRequest,
  output: GetProjectsLocationsUnitGroupOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsUnitGroupOperationsRequest {
  /** Optional. The etag known to the client for the expected state of the unit group operation. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit group operation. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const DeleteProjectsLocationsUnitGroupOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsUnitGroupOperationsRequest>;

export type DeleteProjectsLocationsUnitGroupOperationsResponse = Empty;
export const DeleteProjectsLocationsUnitGroupOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsUnitGroupOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single unit group operation. */
export const deleteProjectsLocationsUnitGroupOperations: API.OperationMethod<
  DeleteProjectsLocationsUnitGroupOperationsRequest,
  DeleteProjectsLocationsUnitGroupOperationsResponse,
  DeleteProjectsLocationsUnitGroupOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsUnitGroupOperationsRequest,
  output: DeleteProjectsLocationsUnitGroupOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSaasReleasesRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const GetProjectsLocationsSaasReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsSaasReleasesRequest>;

export type GetProjectsLocationsSaasReleasesResponse = SaasRelease;
export const GetProjectsLocationsSaasReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SaasRelease;

export type GetProjectsLocationsSaasReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a single saas release. */
export const getProjectsLocationsSaasReleases: API.OperationMethod<
  GetProjectsLocationsSaasReleasesRequest,
  GetProjectsLocationsSaasReleasesResponse,
  GetProjectsLocationsSaasReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSaasReleasesRequest,
  output: GetProjectsLocationsSaasReleasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsSaasReleasesRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** The etag known to the client for the expected state of the saas release. */
  etag?: string;
  /** An optional request ID to identify requests. */
  requestId?: string;
}

export const DeleteProjectsLocationsSaasReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsSaasReleasesRequest>;

export type DeleteProjectsLocationsSaasReleasesResponse = Empty;
export const DeleteProjectsLocationsSaasReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsSaasReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single saas release. */
export const deleteProjectsLocationsSaasReleases: API.OperationMethod<
  DeleteProjectsLocationsSaasReleasesRequest,
  DeleteProjectsLocationsSaasReleasesResponse,
  DeleteProjectsLocationsSaasReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSaasReleasesRequest,
  output: DeleteProjectsLocationsSaasReleasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSaasReleasesRequest {
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
  /** Required. The parent of the saas releases. */
  parent: string;
  /** The maximum number of saas releases to send per page. */
  pageSize?: number;
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsSaasReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/saasReleases" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsSaasReleasesRequest>;

export type ListProjectsLocationsSaasReleasesResponse =
  ListSaasReleasesResponse;
export const ListProjectsLocationsSaasReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSaasReleasesResponse;

export type ListProjectsLocationsSaasReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a collection of saas releases. */
export const listProjectsLocationsSaasReleases: API.PaginatedOperationMethod<
  ListProjectsLocationsSaasReleasesRequest,
  ListProjectsLocationsSaasReleasesResponse,
  ListProjectsLocationsSaasReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSaasReleasesRequest,
  output: ListProjectsLocationsSaasReleasesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsSaasReleasesRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. */
  requestId?: string;
  /** Required. The ID value for the new saas release. */
  saasReleaseId?: string;
  /** Required. The parent of the saas release. */
  parent: string;
  /** Request body */
  body?: SaasRelease;
}

export const CreateProjectsLocationsSaasReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    saasReleaseId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("saasReleaseId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SaasRelease).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/saasReleases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsSaasReleasesRequest>;

export type CreateProjectsLocationsSaasReleasesResponse = SaasRelease;
export const CreateProjectsLocationsSaasReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SaasRelease;

export type CreateProjectsLocationsSaasReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new saas release. */
export const createProjectsLocationsSaasReleases: API.OperationMethod<
  CreateProjectsLocationsSaasReleasesRequest,
  CreateProjectsLocationsSaasReleasesResponse,
  CreateProjectsLocationsSaasReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSaasReleasesRequest,
  output: CreateProjectsLocationsSaasReleasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsSaasReleasesRequest {
  /** An optional request ID to identify requests. */
  requestId?: string;
  /** Field mask is used to specify the fields to be overwritten. */
  updateMask?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/saasReleases/{saasRelease}" */
  name: string;
  /** Request body */
  body?: SaasRelease;
}

export const PatchProjectsLocationsSaasReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SaasRelease).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsSaasReleasesRequest>;

export type PatchProjectsLocationsSaasReleasesResponse = SaasRelease;
export const PatchProjectsLocationsSaasReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SaasRelease;

export type PatchProjectsLocationsSaasReleasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single saas release. */
export const patchProjectsLocationsSaasReleases: API.OperationMethod<
  PatchProjectsLocationsSaasReleasesRequest,
  PatchProjectsLocationsSaasReleasesResponse,
  PatchProjectsLocationsSaasReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSaasReleasesRequest,
  output: PatchProjectsLocationsSaasReleasesResponse,
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
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
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
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** The etag known to the client for the expected state of the unit kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsUnitKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
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

export interface ListProjectsLocationsUnitKindsRequest {
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Required. The parent of the unit kind. */
  parent: string;
  /** The maximum number of unit kinds to send per page. */
  pageSize?: number;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
}

export const ListProjectsLocationsUnitKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/unitKinds" }),
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
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The ID value for the new unit kind. */
  unitKindId?: string;
  /** Required. The parent of the unit kind. */
  parent: string;
  /** Request body */
  body?: UnitKind;
}

export const CreateProjectsLocationsUnitKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    unitKindId: Schema.optional(Schema.String).pipe(T.HttpQuery("unitKindId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UnitKind).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/unitKinds",
      hasBody: true,
    }),
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

export interface PatchProjectsLocationsUnitKindsRequest {
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Field mask is used to specify the fields to be overwritten in the UnitKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitKind will be overwritten. */
  updateMask?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitKinds/{unitKind}" */
  name: string;
  /** Request body */
  body?: UnitKind;
}

export const PatchProjectsLocationsUnitKindsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UnitKind).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
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

export interface ListProjectsLocationsRolloutsRequest {
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Required. The parent of the rollout. */
  parent: string;
  /** The maximum number of rollouts to send per page. */
  pageSize?: number;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
}

export const ListProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/rollouts" }),
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
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/rollouts",
      hasBody: true,
    }),
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

export interface PatchProjectsLocationsRolloutsRequest {
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Field mask is used to specify the fields to be overwritten in the Rollout resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Rollout will be overwritten. */
  updateMask?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollout/{rollout_id}" */
  name: string;
  /** Request body */
  body?: Rollout;
}

export const PatchProjectsLocationsRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Rollout).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
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

export interface ListProjectsLocationsReleasesRequest {
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Required. The parent of the release. */
  parent: string;
  /** The maximum number of releases to send per page. */
  pageSize?: number;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
}

export const ListProjectsLocationsReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/releases" }),
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
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The ID value for the new release. */
  releaseId?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Release;
}

export const CreateProjectsLocationsReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    releaseId: Schema.optional(Schema.String).pipe(T.HttpQuery("releaseId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Release).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/releases",
      hasBody: true,
    }),
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
  /** Field mask is used to specify the fields to be overwritten in the Release resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Release will be overwritten. */
  updateMask?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/releases/{release}" */
  name: string;
  /** Request body */
  body?: Release;
}

export const PatchProjectsLocationsReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Release).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
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
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
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
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** The etag known to the client for the expected state of the release. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the release. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsReleasesRequest =
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
  ) as unknown as Schema.Codec<GetProjectsLocationsFlagReleasesRequest>;

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

export interface DeleteProjectsLocationsFlagReleasesRequest {
  /** The etag known to the client for the expected state of the flag release. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the flag release. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The resource name of the resource within a service. */
  name: string;
}

export const DeleteProjectsLocationsFlagReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsFlagReleasesRequest>;

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

export interface ListProjectsLocationsFlagReleasesRequest {
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Required. The parent of the flag release. */
  parent: string;
  /** The maximum number of flag releases to send per page. */
  pageSize?: number;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
}

export const ListProjectsLocationsFlagReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/flagReleases" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsFlagReleasesRequest>;

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

export interface CreateProjectsLocationsFlagReleasesRequest {
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Required. The parent of the flag release. */
  parent: string;
  /** Required. The ID value for the new flag release. */
  flagReleaseId?: string;
  /** Request body */
  body?: FlagRelease;
}

export const CreateProjectsLocationsFlagReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    flagReleaseId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("flagReleaseId"),
    ),
    body: Schema.optional(FlagRelease).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/flagReleases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsFlagReleasesRequest>;

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

export interface PatchProjectsLocationsFlagReleasesRequest {
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flagReleases/{flag_release_id}" */
  name: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Field mask is used to specify the fields to be overwritten in the FlagRelease resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the FlagRelease will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: FlagRelease;
}

export const PatchProjectsLocationsFlagReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(FlagRelease).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsFlagReleasesRequest>;

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

export interface ListProjectsLocationsFlagsRequest {
  /** Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Required. The parent of the flag. */
  parent: string;
  /** The maximum number of flags to send per page. */
  pageSize?: number;
  /** The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. */
  pageToken?: string;
  /** Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
}

export const ListProjectsLocationsFlagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/flags" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsFlagsRequest>;

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

export interface CreateProjectsLocationsFlagsRequest {
  /** Required. The parent of the flag. */
  parent: string;
  /** Required. The ID value for the new flag. */
  flagId?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** Request body */
  body?: Flag;
}

export const CreateProjectsLocationsFlagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    flagId: Schema.optional(Schema.String).pipe(T.HttpQuery("flagId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Flag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+parent}/flags", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsFlagsRequest>;

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

export interface PatchProjectsLocationsFlagsRequest {
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Field mask is used to specify the fields to be overwritten in the Flag resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Flag will be overwritten. */
  updateMask?: string;
  /** Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flags/{flag_id}" */
  name: string;
  /** Request body */
  body?: Flag;
}

export const PatchProjectsLocationsFlagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Flag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsFlagsRequest>;

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
  ) as unknown as Schema.Codec<GetProjectsLocationsFlagsRequest>;

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

export interface DeleteProjectsLocationsFlagsRequest {
  /** Required. The resource name of the resource within a service. */
  name: string;
  /** If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. */
  validateOnly?: boolean;
  /** The etag known to the client for the expected state of the flag. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the flag. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. */
  etag?: string;
  /** An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsFlagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsFlagsRequest>;

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
