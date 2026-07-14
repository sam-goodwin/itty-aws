// ==========================================================================
// Storage Batch Operations API (storagebatchoperations v1)
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
  name: "storagebatchoperations",
  version: "v1",
  rootUrl: "https://storagebatchoperations.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface RewriteObject {
  /** Optional. Rewrites the object to the specified storage class. Setting this field will perform a full byte copy of the object if the storage class is different from the object's current storage class. If Autoclass is enabled on the bucket, storage class changes are ignored by Cloud Storage. */
  storageClass?:
    | "STORAGE_CLASS_UNSPECIFIED"
    | "STANDARD"
    | "NEARLINE"
    | "COLDLINE"
    | "ARCHIVE"
    | (string & {});
  /** Optional. Resource name of the Cloud KMS key that is used to encrypt the object. The Cloud KMS key must be located in same location as the object. For details, see https://cloud.google.com/storage/docs/encryption/using-customer-managed-keys#add-object-key Format: `projects/{project_id}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}` For example: `projects/123456/locations/us-central1/keyRings/my-keyring/cryptoKeys/my-key`. The object will be rewritten and set with the specified KMS key. */
  kmsKey?: string;
}

export const RewriteObject: Schema.Codec<RewriteObject> =
  /*@__PURE__*/ Schema.Struct({
    storageClass: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "RewriteObject" });

export interface ErrorLogEntry {
  /** Required. Output only. Object URL. e.g. gs://my_bucket/object.txt */
  objectUri?: string;
  /** Optional. Output only. At most 5 error log entries are recorded for a given error code for a job. */
  errorDetails?: ReadonlyArray<string>;
}

export const ErrorLogEntry: Schema.Codec<ErrorLogEntry> =
  /*@__PURE__*/ Schema.Struct({
    objectUri: Schema.optional(Schema.String),
    errorDetails: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ErrorLogEntry" });

export interface ErrorSummary {
  /** Required. Number of errors encountered per `error_code`. */
  errorCount?: string;
  /** Required. Sample error logs. */
  errorLogEntries?: ReadonlyArray<ErrorLogEntry>;
  /** Required. The canonical error code. */
  errorCode?:
    | "OK"
    | "CANCELLED"
    | "UNKNOWN"
    | "INVALID_ARGUMENT"
    | "DEADLINE_EXCEEDED"
    | "NOT_FOUND"
    | "ALREADY_EXISTS"
    | "PERMISSION_DENIED"
    | "UNAUTHENTICATED"
    | "RESOURCE_EXHAUSTED"
    | "FAILED_PRECONDITION"
    | "ABORTED"
    | "OUT_OF_RANGE"
    | "UNIMPLEMENTED"
    | "INTERNAL"
    | "UNAVAILABLE"
    | "DATA_LOSS"
    | (string & {});
}

export const ErrorSummary: Schema.Codec<ErrorSummary> =
  /*@__PURE__*/ Schema.Struct({
    errorCount: Schema.optional(Schema.String),
    errorLogEntries: Schema.optional(Schema.Array(ErrorLogEntry)),
    errorCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "ErrorSummary" });

export interface ObjectCustomContextPayload {
  /** The value of the object custom context. If set, `value` can't be an empty string because it is a required field in custom context. If unset, `value` is ignored and no changes are made to the `value` field of the custom context payload. */
  value?: string;
}

export const ObjectCustomContextPayload: Schema.Codec<ObjectCustomContextPayload> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "ObjectCustomContextPayload" });

export interface CustomContextUpdates {
  /** Optional. Insert or update the existing custom contexts. */
  updates?: Record<string, ObjectCustomContextPayload>;
  /** Optional. Custom contexts to clear by key. A key can't be present in both `updates` and `keys_to_clear`. */
  keysToClear?: ReadonlyArray<string>;
}

export const CustomContextUpdates: Schema.Codec<CustomContextUpdates> =
  /*@__PURE__*/ Schema.Struct({
    updates: Schema.optional(
      Schema.Record(Schema.String, ObjectCustomContextPayload),
    ),
    keysToClear: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CustomContextUpdates" });

export interface UpdateObjectCustomContext {
  /** A collection of updates to apply to specific custom contexts. Use this to add, update or delete individual contexts by key. */
  customContextUpdates?: CustomContextUpdates;
  /** If set, must be set to true and all existing object custom contexts are deleted. */
  clearAll?: boolean;
}

export const UpdateObjectCustomContext: Schema.Codec<UpdateObjectCustomContext> =
  /*@__PURE__*/ Schema.Struct({
    customContextUpdates: Schema.optional(CustomContextUpdates),
    clearAll: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "UpdateObjectCustomContext" });

export interface Expr {
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const Expr: Schema.Codec<Expr> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface TargetLocations {
  /** Optional. OPTIONAL. The exact Storage Insights snapshot timestamp to use for the job compatible with the RFC 3339 format (e.g., `2024-01-02T03:04:05Z`). If specified, this exact snapshot must exist in BOTH the `object_attributes_view` and `bucket_attributes_view` for every location listed in `locations`. If the snapshot is missing from either view in any of the locations, the job fails. */
  snapshotTime?: string;
  /** Required. REQUIRED. A list of Cloud Storage locations (e.g., `us-central1`) to include in the job. If `snapshot_time` is omitted, the job automatically defaults to the most recent snapshot timestamp that is successfully populated in BOTH the `object_attributes_view` and `bucket_attributes_view` across ALL specified locations. For details on Storage Insights dataset snapshots and views, see: https://docs.cloud.google.com/storage/docs/insights/dataset-tables-and-schemas#schema */
  locations?: ReadonlyArray<string>;
}

export const TargetLocations: Schema.Codec<TargetLocations> =
  /*@__PURE__*/ Schema.Struct({
    snapshotTime: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TargetLocations" });

export interface ProjectSource {
  /** Optional. Filters expressed in Common Expression Language (CEL) to apply to objects to identify objects to be transformed. */
  objectFilters?: Expr;
  /** Required. The resource identifier of the Storage Insights dataset configuration. Storage batch operations uses the latest snapshot from this dataset as the source to list and filter target objects. Format: `projects/{project_id}/locations/{location}/datasetConfigs/{dataset_config}`. */
  insightsDatasetConfig?: string;
  /** Optional. Specifies the Cloud Storage locations to include in the job. If provided, only buckets and objects within these locations will be discovered from the Storage Insights dataset as configured in the `insights_dataset_config`. If omitted, the job will discover buckets and objects from all locations configured in the `insights_dataset_config`. */
  targetLocations?: TargetLocations;
  /** Optional. Filters expressed in Common Expression Language (CEL) to apply to buckets to identify buckets with objects to be transformed. */
  bucketFilters?: Expr;
  /** Output only. The snapshot time used by the job to read the Storage Insights dataset for bucket and object discovery. This field is populated by the service and reflects the exact timestamp of the dataset snapshot used. */
  snapshotTime?: string;
  /** Optional. The unique identifier of a dry run job to use as the baseline for the current job. Specifying this ID ensures the job is executed against the same set of objects validated during the dry run. The value corresponds to the {job_id} segment of the resource name: `projects/{project_id}/locations/{location}/jobs/{job_id}`. */
  dryRunJobId?: string;
  /** Required. Project name of the objects to be transformed. e.g. projects/my-project or projects/123456. */
  project?: string;
}

export const ProjectSource: Schema.Codec<ProjectSource> =
  /*@__PURE__*/ Schema.Struct({
    objectFilters: Schema.optional(Expr),
    insightsDatasetConfig: Schema.optional(Schema.String),
    targetLocations: Schema.optional(TargetLocations),
    bucketFilters: Schema.optional(Expr),
    snapshotTime: Schema.optional(Schema.String),
    dryRunJobId: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProjectSource" });

export interface ObjectAccessControl {
  /** Required. The entity holding the permission, in one of the following forms: * `allUsers` * `allAuthenticatedUsers` */
  entity?: string;
  /** Required. The role to grant. Acceptable values are: * `READER` - gives read access to the object. * `OWNER` - gives owner access to the object. */
  role?: string;
}

export const ObjectAccessControl: Schema.Codec<ObjectAccessControl> =
  /*@__PURE__*/ Schema.Struct({
    entity: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "ObjectAccessControl" });

export interface AccessControlsUpdates {
  /** Optional. Grants to add or update. If a grant for same entity exists, its role is updated. */
  grants?: ReadonlyArray<ObjectAccessControl>;
  /** Optional. Entities for which all grants should be removed. An entity can't be in both `grants` and `remove_entities`. */
  removeEntities?: ReadonlyArray<string>;
}

export const AccessControlsUpdates: Schema.Codec<AccessControlsUpdates> =
  /*@__PURE__*/ Schema.Struct({
    grants: Schema.optional(Schema.Array(ObjectAccessControl)),
    removeEntities: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AccessControlsUpdates" });

export interface SetObjectAcls {
  /** Required. Add, update, or remove grants from the object's existing ACLs. */
  accessControlsUpdates?: AccessControlsUpdates;
}

export const SetObjectAcls: Schema.Codec<SetObjectAcls> =
  /*@__PURE__*/ Schema.Struct({
    accessControlsUpdates: Schema.optional(AccessControlsUpdates),
  }).annotate({ identifier: "SetObjectAcls" });

export interface PrefixList {
  /** Optional. Specify one or more object prefixes. For example: * To match one object, use a single prefix, `prefix1`. * To match multiple objects, use comma-separated prefixes, `prefix1, prefix2`. * To match all objects, use an empty prefix, `''` */
  includedObjectPrefixes?: ReadonlyArray<string>;
}

export const PrefixList: Schema.Codec<PrefixList> =
  /*@__PURE__*/ Schema.Struct({
    includedObjectPrefixes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PrefixList" });

export interface ObjectRetention {
  /** Required. The object's retention expiration time, during which, the object is protected from being deleted or overwritten. The time must be specified in RFC 3339 format, for example `YYYY-MM-DD'T'HH:MM:SS'Z'` or `YYYY-MM-DD'T'HH:MM:SS.SS'Z'`. To clear an object's retention, both `retentionMode` and `retainUntilTime` must be left unset (omitted). Setting `retentionMode` to `RETENTION_MODE_UNSPECIFIED` is treated as a no-op. Unlike an unset field, it doesn't modify or clear the retention settings. */
  retainUntilTime?: string;
  /** Required. The retention mode. */
  retentionMode?:
    | "RETENTION_MODE_UNSPECIFIED"
    | "LOCKED"
    | "UNLOCKED"
    | (string & {});
}

export const ObjectRetention: Schema.Codec<ObjectRetention> =
  /*@__PURE__*/ Schema.Struct({
    retainUntilTime: Schema.optional(Schema.String),
    retentionMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "ObjectRetention" });

export interface PutMetadata {
  /** Optional. Updates the object's custom metadata. This operation adds or sets individual custom metadata key-value pairs. Keys specified with empty values have their values cleared. Existing custom metadata keys not included in the request remain unchanged. For details, see [Custom metadata](https://cloud.google.com/storage/docs/metadata#custom-metadata). */
  customMetadata?: Record<string, string>;
  /** Optional. Updates the objects `Content-Language` fixed metadata. Metadata values must use ISO 639-1 language codes. The maximum length for metadata values is 100 characters. Unset values in the request are ignored. To clear the metadata, set an empty value. For details, see [Content-Language](https://cloud.google.com/storage/docs/metadata#content-language). */
  contentLanguage?: string;
  /** Optional. Updates objects `Content-Type` fixed metadata. Unset values in the request are ignored. To clear the metadata, set an empty value. For details, see [Content-Type](https://cloud.google.com/storage/docs/metadata#content-type). */
  contentType?: string;
  /** Optional. Updates objects `Content-Disposition` fixed metadata. Unset values in the request are ignored. To clear the metadata, set an empty value. For details, see [Content-Disposition](https://cloud.google.com/storage/docs/metadata#content-disposition). */
  contentDisposition?: string;
  /** Optional. Updates an object's retention configuration. To clear an object's retention, both `retentionMode` and `retainUntilTime` must be left unset (omitted). Setting `retentionMode` to `RETENTION_MODE_UNSPECIFIED` is treated as a no-op. Unlike an unset field, it doesn't modify or clear the retention settings. An object with `LOCKED` retention mode can't have its retention cleared or its `retainUntilTime` reduced. For more information, see [Object retention](https://cloud.google.com/storage/docs/batch-operations/create-manage-batch-operation-jobs#retain-until-time). */
  objectRetention?: ObjectRetention;
  /** Optional. Updates the objects `Content-Encoding` fixed metadata. Unset values in the request are ignored. To clear the metadata, set an empty value. For details, see [Content-Encoding](https://cloud.google.com/storage/docs/metadata#content-encoding). */
  contentEncoding?: string;
  /** Optional. Updates the objects `Custom-Time` fixed metadata. Unset values in the request are ignored. To clear the metadata, set an empty value. The time must be specified in RFC 3339 format, for example `YYYY-MM-DD'T'HH:MM:SS'Z'` or `YYYY-MM-DD'T'HH:MM:SS.SS'Z'`. For details, see [Custom-Time](https://cloud.google.com/storage/docs/metadata#custom-time). */
  customTime?: string;
  /** Optional. Updates the objects `Cache-Control` fixed metadata. Unset values in the request are ignored. To clear the metadata, set an empty value. Additionally, the value for `Custom-Time` can't decrease. For details, see [Cache-Control](https://cloud.google.com/storage/docs/metadata#caching_data). */
  cacheControl?: string;
}

export const PutMetadata: Schema.Codec<PutMetadata> =
  /*@__PURE__*/ Schema.Struct({
    customMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    contentLanguage: Schema.optional(Schema.String),
    contentType: Schema.optional(Schema.String),
    contentDisposition: Schema.optional(Schema.String),
    objectRetention: Schema.optional(ObjectRetention),
    contentEncoding: Schema.optional(Schema.String),
    customTime: Schema.optional(Schema.String),
    cacheControl: Schema.optional(Schema.String),
  }).annotate({ identifier: "PutMetadata" });

export interface Manifest {
  /** Required. Specify the manifest file location. The format of manifest location can be an absolute path to the object in the format of `gs://bucket_name/path/object_name`. For example, `gs://bucket_name/path/object_name.csv`. Alternatively, you can specify an absolute path with a single wildcard character in the file name, for example `gs://bucket_name/path/file_name*.csv`. If the manifest location is specified with a wildcard, objects in all manifest files matching the pattern will be acted upon. The manifest is a CSV file, uploaded to Cloud Storage, that contains one object or a list of objects that you want to process. Each row in the manifest must include the `bucket` and `name` of the object. You can optionally specify the `generation` of the object. If you don't specify the `generation`, the current version of the object is used. You can optionally include a header row with the following format: `bucket,name,generation`. For example, bucket,name,generation bucket_1,object_1,generation_1 bucket_1,object_2,generation_2 bucket_1,object_3,generation_3 Note: The manifest file must specify only objects within the bucket provided to the job. Rows referencing objects in other buckets are ignored. */
  manifestLocation?: string;
}

export const Manifest: Schema.Codec<Manifest> =
  /*@__PURE__*/ Schema.Struct({
    manifestLocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "Manifest" });

export interface Counters {
  /** Output only. Number of object custom contexts deleted. This field is only populated for jobs with the UpdateObjectCustomContext transformation. */
  objectCustomContextsDeleted?: string;
  /** Output only. Number of objects listed. */
  totalObjectCount?: string;
  /** Output only. Number of object custom contexts created. This field is only populated for jobs with the UpdateObjectCustomContext transformation. */
  objectCustomContextsCreated?: string;
  /** Output only. Number of object custom contexts updated. This counter tracks custom contexts where the key already existed, but the payload was modified. This field is only populated for jobs with the UpdateObjectCustomContext transformation. */
  objectCustomContextsUpdated?: string;
  /** Output only. The total number of bytes affected by the transformation. For example, this counts bytes deleted for `DeleteObject` operations and bytes rewritten for `RewriteObject` operations. */
  totalBytesTransformed?: string;
  /** Output only. The number of objects that failed due to user errors or service errors. */
  failedObjectCount?: string;
  /** Output only. Number of bytes found from source. This field is only populated for jobs with a prefix list object configuration. */
  totalBytesFound?: string;
  /** Output only. Number of objects completed. */
  succeededObjectCount?: string;
}

export const Counters: Schema.Codec<Counters> =
  /*@__PURE__*/ Schema.Struct({
    objectCustomContextsDeleted: Schema.optional(Schema.String),
    totalObjectCount: Schema.optional(Schema.String),
    objectCustomContextsCreated: Schema.optional(Schema.String),
    objectCustomContextsUpdated: Schema.optional(Schema.String),
    totalBytesTransformed: Schema.optional(Schema.String),
    failedObjectCount: Schema.optional(Schema.String),
    totalBytesFound: Schema.optional(Schema.String),
    succeededObjectCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "Counters" });

export interface PutObjectHold {
  /** Required. Updates object event based holds state. When object event based hold is set, object can't be deleted or replaced. Resets object's time in the bucket for the purposes of the retention period. */
  eventBasedHold?: "HOLD_STATUS_UNSPECIFIED" | "SET" | "UNSET" | (string & {});
  /** Required. Updates object temporary holds state. When object temporary hold is set, object can't be deleted or replaced. */
  temporaryHold?: "HOLD_STATUS_UNSPECIFIED" | "SET" | "UNSET" | (string & {});
}

export const PutObjectHold: Schema.Codec<PutObjectHold> =
  /*@__PURE__*/ Schema.Struct({
    eventBasedHold: Schema.optional(Schema.String),
    temporaryHold: Schema.optional(Schema.String),
  }).annotate({ identifier: "PutObjectHold" });

export interface DeleteObject {
  /** Required. Controls deletion behavior when versioning is enabled for the object's bucket. If true, both live and noncurrent objects will be permanently deleted. Otherwise live objects in versioned buckets will become noncurrent and objects that were already noncurrent will be skipped. This setting doesn't have any impact on the Soft Delete feature. All objects deleted by this service can be be restored for the duration of the Soft Delete retention duration if enabled. If enabled and the manifest doesn't specify an object's generation, a `GetObjectMetadata` call is made to determine the live object generation. */
  permanentObjectDeletionEnabled?: boolean;
}

export const DeleteObject: Schema.Codec<DeleteObject> =
  /*@__PURE__*/ Schema.Struct({
    permanentObjectDeletionEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DeleteObject" });

export interface BucketOperation {
  /** Output only. The time that the BucketOperation was created. */
  createTime?: string;
  /** Rewrite the object and updates metadata like KMS key. */
  rewriteObject?: RewriteObject;
  /** Output only. State of the BucketOperation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "QUEUED"
    | "RUNNING"
    | "SUCCEEDED"
    | "CANCELED"
    | "FAILED"
    | (string & {});
  /** Output only. Summarizes errors encountered with sample error log entries. */
  errorSummaries?: ReadonlyArray<ErrorSummary>;
  /** Update object custom context. */
  updateObjectCustomContext?: UpdateObjectCustomContext;
  /** Identifier. The resource name of the BucketOperation. This is defined by the service. Format: `projects/{project_id}/locations/global/jobs/{job_id}/bucketOperations/{bucket_operation}`. */
  name?: string;
  /** Specifies objects matching the object filters in a project source. */
  projectSource?: ProjectSource;
  /** Updates object ACLs. */
  setObjectAcls?: SetObjectAcls;
  /** Specifies objects matching a prefix set. */
  prefixList?: PrefixList;
  /** Updates object metadata. Allows updating fixed-key and custom metadata and fixed-key metadata i.e. Cache-Control, Content-Disposition, Content-Encoding, Content-Language, Content-Type, Custom-Time. */
  putMetadata?: PutMetadata;
  /** Specifies objects in a manifest file. */
  manifest?: Manifest;
  /** The bucket name of the objects to be transformed in the BucketOperation. */
  bucketName?: string;
  /** Output only. The time that the BucketOperation was started. */
  startTime?: string;
  /** Output only. Information about the progress of the bucket operation. */
  counters?: Counters;
  /** Changes object hold status. */
  putObjectHold?: PutObjectHold;
  /** Output only. The time that the BucketOperation was completed. */
  completeTime?: string;
  /** Delete objects. */
  deleteObject?: DeleteObject;
}

export const BucketOperation: Schema.Codec<BucketOperation> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    rewriteObject: Schema.optional(RewriteObject),
    state: Schema.optional(Schema.String),
    errorSummaries: Schema.optional(Schema.Array(ErrorSummary)),
    updateObjectCustomContext: Schema.optional(UpdateObjectCustomContext),
    name: Schema.optional(Schema.String),
    projectSource: Schema.optional(ProjectSource),
    setObjectAcls: Schema.optional(SetObjectAcls),
    prefixList: Schema.optional(PrefixList),
    putMetadata: Schema.optional(PutMetadata),
    manifest: Schema.optional(Manifest),
    bucketName: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    counters: Schema.optional(Counters),
    putObjectHold: Schema.optional(PutObjectHold),
    completeTime: Schema.optional(Schema.String),
    deleteObject: Schema.optional(DeleteObject),
  }).annotate({ identifier: "BucketOperation" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Codec<CancelOperationRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

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

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface CancelJobRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` are ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID isn't supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const CancelJobRequest: Schema.Codec<CancelJobRequest> =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CancelJobRequest" });

export interface ListBucketOperationsResponse {
  /** A list of storage batch bucket operations. */
  bucketOperations?: ReadonlyArray<BucketOperation>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results. */
  nextPageToken?: string;
}

export const ListBucketOperationsResponse: Schema.Codec<ListBucketOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    bucketOperations: Schema.optional(Schema.Array(BucketOperation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListBucketOperationsResponse" });

export interface LoggingConfig {
  /** Required. Specifies the actions to be logged. */
  logActions?: ReadonlyArray<
    "LOGGABLE_ACTION_UNSPECIFIED" | "TRANSFORM" | (string & {})
  >;
  /** Required. States in which Action are logged.If empty, no logs are generated. */
  logActionStates?: ReadonlyArray<
    "LOGGABLE_ACTION_STATE_UNSPECIFIED" | "SUCCEEDED" | "FAILED" | (string & {})
  >;
}

export const LoggingConfig: Schema.Codec<LoggingConfig> =
  /*@__PURE__*/ Schema.Struct({
    logActions: Schema.optional(Schema.Array(Schema.String)),
    logActionStates: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LoggingConfig" });

export interface Bucket {
  /** Required. Bucket name for the objects to be transformed. */
  bucket?: string;
  /** Specifies objects in a manifest file. */
  manifest?: Manifest;
  /** Specifies objects matching a prefix set. */
  prefixList?: PrefixList;
}

export const Bucket: Schema.Codec<Bucket> =
  /*@__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
    manifest: Schema.optional(Manifest),
    prefixList: Schema.optional(PrefixList),
  }).annotate({ identifier: "Bucket" });

export interface CancelJobResponse {}

export const CancelJobResponse: Schema.Codec<CancelJobResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelJobResponse",
  });

export interface Location {
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Codec<ListLocationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface BucketList {
  /** Required. List of buckets and their objects to be transformed. You can specify only one bucket per job. If multiple buckets are specified, an error occurs. */
  buckets?: ReadonlyArray<Bucket>;
}

export const BucketList: Schema.Codec<BucketList> =
  /*@__PURE__*/ Schema.Struct({
    buckets: Schema.optional(Schema.Array(Bucket)),
  }).annotate({ identifier: "BucketList" });

export interface Job {
  /** Optional. A user-provided description for the job. Maximum length: 1024 bytes when unicode-encoded. */
  description?: string;
  /** Output only. The time that the job was scheduled. */
  scheduleTime?: string;
  /** Updates object metadata. Allows updating fixed-key and custom metadata. For example, `Cache-Control`, `Content-Disposition`, `Content-Encoding`, `Content-Language`, `Content-Type`, `Custom-Time`, and `Retention configuration`. */
  putMetadata?: PutMetadata;
  /** Delete objects. */
  deleteObject?: DeleteObject;
  /** Changes object hold status. */
  putObjectHold?: PutObjectHold;
  /** Output only. The time that the job was completed. */
  completeTime?: string;
  /** Output only. Information about the progress of the job. */
  counters?: Counters;
  /** Optional. If true, the job runs in dry run mode, returning the total object count and, if the object configuration is a prefix list, the bytes found from source. No transformations are performed. */
  dryRun?: boolean;
  /** Rewrite the object and updates metadata like KMS key. */
  rewriteObject?: RewriteObject;
  /** Output only. State of the job. */
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "SUCCEEDED"
    | "CANCELED"
    | "FAILED"
    | "QUEUED"
    | (string & {});
  /** Output only. Summarizes errors encountered with sample error log entries. */
  errorSummaries?: ReadonlyArray<ErrorSummary>;
  /** Output only. The time that the job was created. */
  createTime?: string;
  /** Output only. If true, this job operates on multiple buckets. Multi-bucket jobs are subject to different quota limits than single-bucket jobs. */
  isMultiBucketJob?: boolean;
  /** Specifies a list of buckets and their objects to be transformed. */
  bucketList?: BucketList;
  /** Specifies a project source and filters to identify objects to be transformed. */
  projectSource?: ProjectSource;
  /** Updates object ACLs. */
  setObjectAcls?: SetObjectAcls;
  /** Optional. Logging configuration. */
  loggingConfig?: LoggingConfig;
  /** Update object custom context. */
  updateObjectCustomContext?: UpdateObjectCustomContext;
  /** Identifier. The resource name of the job. Format: `projects/{project_id}/locations/global/jobs/{job_id}`. For example: `projects/123456/locations/global/jobs/job01`. `job_id` is unique in a given project. */
  name?: string;
}

export const Job: Schema.Codec<Job> = /*@__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  scheduleTime: Schema.optional(Schema.String),
  putMetadata: Schema.optional(PutMetadata),
  deleteObject: Schema.optional(DeleteObject),
  putObjectHold: Schema.optional(PutObjectHold),
  completeTime: Schema.optional(Schema.String),
  counters: Schema.optional(Counters),
  dryRun: Schema.optional(Schema.Boolean),
  rewriteObject: Schema.optional(RewriteObject),
  state: Schema.optional(Schema.String),
  errorSummaries: Schema.optional(Schema.Array(ErrorSummary)),
  createTime: Schema.optional(Schema.String),
  isMultiBucketJob: Schema.optional(Schema.Boolean),
  bucketList: Schema.optional(BucketList),
  projectSource: Schema.optional(ProjectSource),
  setObjectAcls: Schema.optional(SetObjectAcls),
  loggingConfig: Schema.optional(LoggingConfig),
  updateObjectCustomContext: Schema.optional(UpdateObjectCustomContext),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "Job" });

export interface ListJobsResponse {
  /** A token identifying a page of results. */
  nextPageToken?: string;
  /** A list of storage batch jobs. */
  jobs?: ReadonlyArray<Job>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListJobsResponse: Schema.Codec<ListJobsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    jobs: Schema.optional(Schema.Array(Job)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListJobsResponse" });

export interface OperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The Job associated with the operation. */
  job?: Job;
  /** Output only. The unique operation resource name. Format: projects/{project_id}/locations/global/operations/{operation}. */
  operation?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata: Schema.Codec<OperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    job: Schema.optional(Job),
    operation: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

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
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
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
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse = /*@__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse = /*@__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsJobsRequest {
  /** Optional. The list page size. The default page size is 100. */
  pageSize?: number;
  /** Optional. The list page token. */
  pageToken?: string;
  /** Required. Format: projects/{project_id}/locations/global. */
  parent: string;
  /** Optional. Field to sort by. Supported fields are `name` and `create_time`. */
  orderBy?: string;
  /** Optional. Filters results as defined by https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/jobs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsJobsRequest>;

export type ListProjectsLocationsJobsResponse = ListJobsResponse;
export const ListProjectsLocationsJobsResponse = /*@__PURE__*/ ListJobsResponse;

export type ListProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Jobs in a given project. */
export const listProjectsLocationsJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsJobsRequest,
  ListProjectsLocationsJobsResponse,
  ListProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobsRequest,
  output: ListProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsJobsRequest {
  /** Required. The `name` of the job to retrieve. Format: `projects/{project_id}/locations/global/jobs/{job_id}`. */
  name: string;
}

export const GetProjectsLocationsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsJobsRequest>;

export type GetProjectsLocationsJobsResponse = Job;
export const GetProjectsLocationsJobsResponse = /*@__PURE__*/ Job;

export type GetProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a batch job. */
export const getProjectsLocationsJobs: API.OperationMethod<
  GetProjectsLocationsJobsRequest,
  GetProjectsLocationsJobsResponse,
  GetProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsJobsRequest,
  output: GetProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsJobsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` are ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID isn't supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The `name` of the job to delete. Format: `projects/{project_id}/locations/global/jobs/{job_id}`. */
  name: string;
  /** Optional. If set to true, any child bucket operations of the job are deleted. We recommend setting this to `true`. You can't mutate bucket operations directly, so only the `jobs.delete` permission is required to delete a job (and its child bucket operations). */
  force?: boolean;
}

export const DeleteProjectsLocationsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsJobsRequest>;

export type DeleteProjectsLocationsJobsResponse = Empty;
export const DeleteProjectsLocationsJobsResponse = /*@__PURE__*/ Empty;

export type DeleteProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a batch job. */
export const deleteProjectsLocationsJobs: API.OperationMethod<
  DeleteProjectsLocationsJobsRequest,
  DeleteProjectsLocationsJobsResponse,
  DeleteProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsJobsRequest,
  output: DeleteProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsLocationsJobsRequest {
  /** Required. The `name` of the job to cancel. Format: `projects/{project_id}/locations/global/jobs/{job_id}`. */
  name: string;
  /** Request body */
  body?: CancelJobRequest;
}

export const CancelProjectsLocationsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsLocationsJobsRequest>;

export type CancelProjectsLocationsJobsResponse = CancelJobResponse;
export const CancelProjectsLocationsJobsResponse =
  /*@__PURE__*/ CancelJobResponse;

export type CancelProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels a batch job. */
export const cancelProjectsLocationsJobs: API.OperationMethod<
  CancelProjectsLocationsJobsRequest,
  CancelProjectsLocationsJobsResponse,
  CancelProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsJobsRequest,
  output: CancelProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsJobsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` are ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID isn't supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The value for parent. */
  parent: string;
  /** Required. A unique identifier for the job. `job_id` must be up to 128 characters and must include only characters available in DNS names, as defined by RFC-1123. */
  jobId?: string;
  /** Request body */
  body?: Job;
}

export const CreateProjectsLocationsJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    jobId: Schema.optional(Schema.String).pipe(T.HttpQuery("jobId")),
    body: Schema.optional(Job).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/jobs", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsJobsRequest>;

export type CreateProjectsLocationsJobsResponse = Operation;
export const CreateProjectsLocationsJobsResponse = /*@__PURE__*/ Operation;

export type CreateProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a batch job. */
export const createProjectsLocationsJobs: API.OperationMethod<
  CreateProjectsLocationsJobsRequest,
  CreateProjectsLocationsJobsResponse,
  CreateProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsJobsRequest,
  output: CreateProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsJobsBucketOperationsRequest {
  /** Optional. The list page size. Default page size is 100. */
  pageSize?: number;
  /** Optional. The list page token. */
  pageToken?: string;
  /** Required. Format: `projects/{project_id}/locations/global/jobs/{job_id}`. */
  parent: string;
  /** Optional. Field to sort by. Supported fields are `name` and `create_time`. */
  orderBy?: string;
  /** Optional. Filters results as defined by https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsJobsBucketOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/bucketOperations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsJobsBucketOperationsRequest>;

export type ListProjectsLocationsJobsBucketOperationsResponse =
  ListBucketOperationsResponse;
export const ListProjectsLocationsJobsBucketOperationsResponse =
  /*@__PURE__*/ ListBucketOperationsResponse;

export type ListProjectsLocationsJobsBucketOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists BucketOperations in a given project and job. */
export const listProjectsLocationsJobsBucketOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsJobsBucketOperationsRequest,
  ListProjectsLocationsJobsBucketOperationsResponse,
  ListProjectsLocationsJobsBucketOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobsBucketOperationsRequest,
  output: ListProjectsLocationsJobsBucketOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsJobsBucketOperationsRequest {
  /** Required. The `name` of the bucket operation to retrieve. Format: `projects/{project_id}/locations/global/jobs/{job_id}/bucketOperations/{bucket_operation_id}`. */
  name: string;
}

export const GetProjectsLocationsJobsBucketOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsJobsBucketOperationsRequest>;

export type GetProjectsLocationsJobsBucketOperationsResponse = BucketOperation;
export const GetProjectsLocationsJobsBucketOperationsResponse =
  /*@__PURE__*/ BucketOperation;

export type GetProjectsLocationsJobsBucketOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a BucketOperation. */
export const getProjectsLocationsJobsBucketOperations: API.OperationMethod<
  GetProjectsLocationsJobsBucketOperationsRequest,
  GetProjectsLocationsJobsBucketOperationsResponse,
  GetProjectsLocationsJobsBucketOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsJobsBucketOperationsRequest,
  output: GetProjectsLocationsJobsBucketOperationsResponse,
  errors: [NotFound, Forbidden],
}));
