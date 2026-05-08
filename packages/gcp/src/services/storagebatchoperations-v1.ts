// ==========================================================================
// Storage Batch Operations API (storagebatchoperations v1)
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
  name: "storagebatchoperations",
  version: "v1",
  rootUrl: "https://storagebatchoperations.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ObjectCustomContextPayload {
  /** The value of the object custom context. If set, `value` must NOT be an empty string since it is a required field in custom context. If unset, `value` will be ignored and no changes will be made to the `value` field of the custom context payload. */
  value?: string;
}

export const ObjectCustomContextPayload: Schema.Schema<ObjectCustomContextPayload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "ObjectCustomContextPayload" });

export interface CustomContextUpdates {
  /** Optional. Insert or update the existing custom contexts. */
  updates?: Record<string, ObjectCustomContextPayload>;
  /** Optional. Custom contexts to clear by key. A key cannot be present in both `updates` and `keys_to_clear`. */
  keysToClear?: ReadonlyArray<string>;
}

export const CustomContextUpdates: Schema.Schema<CustomContextUpdates> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updates: Schema.optional(
      Schema.Record(Schema.String, ObjectCustomContextPayload),
    ),
    keysToClear: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CustomContextUpdates" });

export interface UpdateObjectCustomContext {
  /** A collection of updates to apply to specific custom contexts. Use this to add, update or delete individual contexts by key. */
  customContextUpdates?: CustomContextUpdates;
  /** If set, must be set to true and all existing object custom contexts will be deleted. */
  clearAll?: boolean;
}

export const UpdateObjectCustomContext: Schema.Schema<UpdateObjectCustomContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customContextUpdates: Schema.optional(CustomContextUpdates),
    clearAll: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "UpdateObjectCustomContext" });

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

export const LoggingConfig: Schema.Schema<LoggingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logActions: Schema.optional(Schema.Array(Schema.String)),
    logActionStates: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LoggingConfig" });

export interface ErrorLogEntry {
  /** Required. Output only. Object URL. e.g. gs://my_bucket/object.txt */
  objectUri?: string;
  /** Optional. Output only. At most 5 error log entries are recorded for a given error code for a job. */
  errorDetails?: ReadonlyArray<string>;
}

export const ErrorLogEntry: Schema.Schema<ErrorLogEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectUri: Schema.optional(Schema.String),
    errorDetails: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ErrorLogEntry" });

export interface ErrorSummary {
  /** Required. Number of errors encountered per `error_code`. */
  errorCount?: string;
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
  /** Required. Sample error logs. */
  errorLogEntries?: ReadonlyArray<ErrorLogEntry>;
}

export const ErrorSummary: Schema.Schema<ErrorSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorCount: Schema.optional(Schema.String),
    errorCode: Schema.optional(Schema.String),
    errorLogEntries: Schema.optional(Schema.Array(ErrorLogEntry)),
  }).annotate({ identifier: "ErrorSummary" });

export interface PrefixList {
  /** Optional. Include prefixes of the objects to be transformed. * Supports full object name * Supports prefix of the object name * Wildcards are not supported * Supports empty string for all objects in a bucket. */
  includedObjectPrefixes?: ReadonlyArray<string>;
}

export const PrefixList: Schema.Schema<PrefixList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includedObjectPrefixes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PrefixList" });

export interface Manifest {
  /** Required. `manifest_location` must contain the manifest source file that is a CSV file in a Google Cloud Storage bucket. Each row in the file must include the object details i.e. BucketId and Name. Generation may optionally be specified. When it is not specified the live object is acted upon. `manifest_location` should either be 1) An absolute path to the object in the format of `gs://bucket_name/path/file_name.csv`. 2) An absolute path with a single wildcard character in the file name, for example `gs://bucket_name/path/file_name*.csv`. If manifest location is specified with a wildcard, objects in all manifest files matching the pattern will be acted upon. */
  manifestLocation?: string;
}

export const Manifest: Schema.Schema<Manifest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    manifestLocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "Manifest" });

export interface Bucket {
  /** Required. Bucket name for the objects to be transformed. */
  bucket?: string;
  /** Specifies objects matching a prefix set. */
  prefixList?: PrefixList;
  /** Specifies objects in a manifest file. */
  manifest?: Manifest;
}

export const Bucket: Schema.Schema<Bucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
    prefixList: Schema.optional(PrefixList),
    manifest: Schema.optional(Manifest),
  }).annotate({ identifier: "Bucket" });

export interface BucketList {
  /** Required. List of buckets and their objects to be transformed. Currently, only one bucket configuration is supported. If multiple buckets are specified, an error will be returned. */
  buckets?: ReadonlyArray<Bucket>;
}

export const BucketList: Schema.Schema<BucketList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buckets: Schema.optional(Schema.Array(Bucket)),
  }).annotate({ identifier: "BucketList" });

export interface ObjectRetention {
  /** Required. The time when the object will be retained until. UNSET will clear the retention. Must be specified in RFC 3339 format e.g. YYYY-MM-DD'T'HH:MM:SS.SS'Z' or YYYY-MM-DD'T'HH:MM:SS'Z'. */
  retainUntilTime?: string;
  /** Required. The retention mode of the object. */
  retentionMode?:
    | "RETENTION_MODE_UNSPECIFIED"
    | "LOCKED"
    | "UNLOCKED"
    | (string & {});
}

export const ObjectRetention: Schema.Schema<ObjectRetention> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retainUntilTime: Schema.optional(Schema.String),
    retentionMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "ObjectRetention" });

export interface PutMetadata {
  /** Optional. Updates objects Content-Encoding fixed metadata. Unset values will be ignored. Set empty values to clear the metadata. Refer to documentation in https://cloud.google.com/storage/docs/metadata#content-encoding. */
  contentEncoding?: string;
  /** Optional. Updates objects Content-Type fixed metadata. Unset values will be ignored. Set empty values to clear the metadata. Refer to documentation in https://cloud.google.com/storage/docs/metadata#content-type */
  contentType?: string;
  /** Optional. Updates objects Cache-Control fixed metadata. Unset values will be ignored. Set empty values to clear the metadata. Additionally, the value for Custom-Time cannot decrease. Refer to documentation in https://cloud.google.com/storage/docs/metadata#caching_data. */
  cacheControl?: string;
  /** Optional. Updates objects custom metadata. Adds or sets individual custom metadata key value pairs on objects. Keys that are set with empty custom metadata values will have its value cleared. Existing custom metadata not specified with this flag is not changed. Refer to documentation in https://cloud.google.com/storage/docs/metadata#custom-metadata */
  customMetadata?: Record<string, string>;
  /** Optional. Updates objects Content-Disposition fixed metadata. Unset values will be ignored. Set empty values to clear the metadata. Refer https://cloud.google.com/storage/docs/metadata#content-disposition for additional documentation. */
  contentDisposition?: string;
  /** Optional. Updates objects Custom-Time fixed metadata. Unset values will be ignored. Set empty values to clear the metadata. Refer to documentation in https://cloud.google.com/storage/docs/metadata#custom-time. */
  customTime?: string;
  /** Optional. Updates objects Content-Language fixed metadata. Refer to ISO 639-1 language codes for typical values of this metadata. Max length 100 characters. Unset values will be ignored. Set empty values to clear the metadata. Refer to documentation in https://cloud.google.com/storage/docs/metadata#content-language. */
  contentLanguage?: string;
  /** Optional. Updates objects retention lock configuration. Unset values will be ignored. Set empty values to clear the retention for the object with existing `Unlocked` retention mode. Object with existing `Locked` retention mode cannot be cleared or reduce retain_until_time. Refer to documentation in https://cloud.google.com/storage/docs/object-lock */
  objectRetention?: ObjectRetention;
}

export const PutMetadata: Schema.Schema<PutMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentEncoding: Schema.optional(Schema.String),
    contentType: Schema.optional(Schema.String),
    cacheControl: Schema.optional(Schema.String),
    customMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    contentDisposition: Schema.optional(Schema.String),
    customTime: Schema.optional(Schema.String),
    contentLanguage: Schema.optional(Schema.String),
    objectRetention: Schema.optional(ObjectRetention),
  }).annotate({ identifier: "PutMetadata" });

export interface Counters {
  /** Output only. The number of objects that failed due to user errors or service errors. */
  failedObjectCount?: string;
  /** Output only. Number of object custom contexts updated. This counter tracks custom contexts where the key already existed, but the payload was modified. This field is only populated for jobs with the UpdateObjectCustomContext transformation. */
  objectCustomContextsUpdated?: string;
  /** Output only. The total number of bytes affected by the transformation. For example, this counts bytes deleted for `DeleteObject` operations and bytes rewritten for `RewriteObject` operations. */
  totalBytesTransformed?: string;
  /** Output only. Number of object custom contexts created. This field is only populated for jobs with the UpdateObjectCustomContext transformation. */
  objectCustomContextsCreated?: string;
  /** Output only. Number of objects listed. */
  totalObjectCount?: string;
  /** Output only. Number of bytes found from source. This field is only populated for jobs with a prefix list object configuration. */
  totalBytesFound?: string;
  /** Output only. Number of objects completed. */
  succeededObjectCount?: string;
  /** Output only. Number of object custom contexts deleted. This field is only populated for jobs with the UpdateObjectCustomContext transformation. */
  objectCustomContextsDeleted?: string;
}

export const Counters: Schema.Schema<Counters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failedObjectCount: Schema.optional(Schema.String),
    objectCustomContextsUpdated: Schema.optional(Schema.String),
    totalBytesTransformed: Schema.optional(Schema.String),
    objectCustomContextsCreated: Schema.optional(Schema.String),
    totalObjectCount: Schema.optional(Schema.String),
    totalBytesFound: Schema.optional(Schema.String),
    succeededObjectCount: Schema.optional(Schema.String),
    objectCustomContextsDeleted: Schema.optional(Schema.String),
  }).annotate({ identifier: "Counters" });

export interface DeleteObject {
  /** Required. Controls deletion behavior when versioning is enabled for the object's bucket. If true both live and noncurrent objects will be permanently deleted. Otherwise live objects in versioned buckets will become noncurrent and objects that were already noncurrent will be skipped. This setting doesn't have any impact on the Soft Delete feature. All objects deleted by this service can be be restored for the duration of the Soft Delete retention duration if enabled. If enabled and the manifest doesn't specify an object's generation, a GetObjectMetadata call (a Class B operation) will be made to determine the live object generation. */
  permanentObjectDeletionEnabled?: boolean;
}

export const DeleteObject: Schema.Schema<DeleteObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permanentObjectDeletionEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DeleteObject" });

export interface PutObjectHold {
  /** Required. Updates object temporary holds state. When object temporary hold is set, object cannot be deleted or replaced. */
  temporaryHold?: "HOLD_STATUS_UNSPECIFIED" | "SET" | "UNSET" | (string & {});
  /** Required. Updates object event based holds state. When object event based hold is set, object cannot be deleted or replaced. Resets object's time in the bucket for the purposes of the retention period. */
  eventBasedHold?: "HOLD_STATUS_UNSPECIFIED" | "SET" | "UNSET" | (string & {});
}

export const PutObjectHold: Schema.Schema<PutObjectHold> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    temporaryHold: Schema.optional(Schema.String),
    eventBasedHold: Schema.optional(Schema.String),
  }).annotate({ identifier: "PutObjectHold" });

export interface RewriteObject {
  /** Required. Resource name of the Cloud KMS key that will be used to encrypt the object. The Cloud KMS key must be located in same location as the object. Refer to https://cloud.google.com/storage/docs/encryption/using-customer-managed-keys#add-object-key for additional documentation. Format: projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key} For example: "projects/123456/locations/us-central1/keyRings/my-keyring/cryptoKeys/my-key". The object will be rewritten and set with the specified KMS key. */
  kmsKey?: string;
}

export const RewriteObject: Schema.Schema<RewriteObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "RewriteObject" });

export interface Job {
  /** Optional. Logging configuration. */
  loggingConfig?: LoggingConfig;
  /** Output only. The time that the job was scheduled. */
  scheduleTime?: string;
  /** Update object custom context. */
  updateObjectCustomContext?: UpdateObjectCustomContext;
  /** Output only. If true, this Job operates on multiple buckets. Multibucket jobs are subject to different quota limits than single-bucket jobs. */
  isMultiBucketJob?: boolean;
  /** Optional. If true, the job will run in dry run mode, returning the total object count and, if the object configuration is a prefix list, the bytes found from source. No transformations will be performed. */
  dryRun?: boolean;
  /** Output only. The time that the job was completed. */
  completeTime?: string;
  /** Output only. Summarizes errors encountered with sample error log entries. */
  errorSummaries?: ReadonlyArray<ErrorSummary>;
  /** Specifies a list of buckets and their objects to be transformed. */
  bucketList?: BucketList;
  /** Identifier. The resource name of the Job. job_id is unique within the project, that is either set by the customer or defined by the service. Format: projects/{project}/locations/global/jobs/{job_id} . For example: "projects/123456/locations/global/jobs/job01". */
  name?: string;
  /** Updates object metadata. Allows updating fixed-key and custom metadata and fixed-key metadata i.e. Cache-Control, Content-Disposition, Content-Encoding, Content-Language, Content-Type, Custom-Time. */
  putMetadata?: PutMetadata;
  /** Output only. State of the job. */
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "SUCCEEDED"
    | "CANCELED"
    | "FAILED"
    | "QUEUED"
    | (string & {});
  /** Optional. A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded. */
  description?: string;
  /** Output only. Information about the progress of the job. */
  counters?: Counters;
  /** Output only. The time that the job was created. */
  createTime?: string;
  /** Delete objects. */
  deleteObject?: DeleteObject;
  /** Changes object hold status. */
  putObjectHold?: PutObjectHold;
  /** Rewrite the object and updates metadata like KMS key. */
  rewriteObject?: RewriteObject;
}

export const Job: Schema.Schema<Job> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loggingConfig: Schema.optional(LoggingConfig),
    scheduleTime: Schema.optional(Schema.String),
    updateObjectCustomContext: Schema.optional(UpdateObjectCustomContext),
    isMultiBucketJob: Schema.optional(Schema.Boolean),
    dryRun: Schema.optional(Schema.Boolean),
    completeTime: Schema.optional(Schema.String),
    errorSummaries: Schema.optional(Schema.Array(ErrorSummary)),
    bucketList: Schema.optional(BucketList),
    name: Schema.optional(Schema.String),
    putMetadata: Schema.optional(PutMetadata),
    state: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    counters: Schema.optional(Counters),
    createTime: Schema.optional(Schema.String),
    deleteObject: Schema.optional(DeleteObject),
    putObjectHold: Schema.optional(PutObjectHold),
    rewriteObject: Schema.optional(RewriteObject),
  }).annotate({ identifier: "Job" });

export interface OperationMetadata {
  /** Output only. The unique operation resource name. Format: projects/{project}/locations/global/operations/{operation}. */
  operation?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The Job associated with the operation. */
  job?: Job;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    job: Schema.optional(Job),
  }).annotate({ identifier: "OperationMetadata" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface BucketOperation {
  /** The bucket name of the objects to be transformed in the BucketOperation. */
  bucketName?: string;
  /** Specifies objects matching a prefix set. */
  prefixList?: PrefixList;
  /** Update object custom context. */
  updateObjectCustomContext?: UpdateObjectCustomContext;
  /** Output only. State of the BucketOperation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "QUEUED"
    | "RUNNING"
    | "SUCCEEDED"
    | "CANCELED"
    | "FAILED"
    | (string & {});
  /** Identifier. The resource name of the BucketOperation. This is defined by the service. Format: projects/{project}/locations/global/jobs/{job_id}/bucketOperations/{bucket_operation}. */
  name?: string;
  /** Specifies objects in a manifest file. */
  manifest?: Manifest;
  /** Updates object metadata. Allows updating fixed-key and custom metadata and fixed-key metadata i.e. Cache-Control, Content-Disposition, Content-Encoding, Content-Language, Content-Type, Custom-Time. */
  putMetadata?: PutMetadata;
  /** Output only. The time that the BucketOperation was started. */
  startTime?: string;
  /** Output only. The time that the BucketOperation was completed. */
  completeTime?: string;
  /** Output only. Summarizes errors encountered with sample error log entries. */
  errorSummaries?: ReadonlyArray<ErrorSummary>;
  /** Changes object hold status. */
  putObjectHold?: PutObjectHold;
  /** Rewrite the object and updates metadata like KMS key. */
  rewriteObject?: RewriteObject;
  /** Delete objects. */
  deleteObject?: DeleteObject;
  /** Output only. Information about the progress of the bucket operation. */
  counters?: Counters;
  /** Output only. The time that the BucketOperation was created. */
  createTime?: string;
}

export const BucketOperation: Schema.Schema<BucketOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucketName: Schema.optional(Schema.String),
    prefixList: Schema.optional(PrefixList),
    updateObjectCustomContext: Schema.optional(UpdateObjectCustomContext),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    manifest: Schema.optional(Manifest),
    putMetadata: Schema.optional(PutMetadata),
    startTime: Schema.optional(Schema.String),
    completeTime: Schema.optional(Schema.String),
    errorSummaries: Schema.optional(Schema.Array(ErrorSummary)),
    putObjectHold: Schema.optional(PutObjectHold),
    rewriteObject: Schema.optional(RewriteObject),
    deleteObject: Schema.optional(DeleteObject),
    counters: Schema.optional(Counters),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "BucketOperation" });

export interface ListBucketOperationsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results. */
  nextPageToken?: string;
  /** A list of storage batch bucket operations. */
  bucketOperations?: ReadonlyArray<BucketOperation>;
}

export const ListBucketOperationsResponse: Schema.Schema<ListBucketOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    bucketOperations: Schema.optional(Schema.Array(BucketOperation)),
  }).annotate({ identifier: "ListBucketOperationsResponse" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(Operation)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface CancelJobResponse {}

export const CancelJobResponse: Schema.Schema<CancelJobResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelJobResponse",
  });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Location" });

export interface CancelJobRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` will be ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const CancelJobRequest: Schema.Schema<CancelJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CancelJobRequest" });

export interface ListJobsResponse {
  /** A list of storage batch jobs. */
  jobs?: ReadonlyArray<Job>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results. */
  nextPageToken?: string;
}

export const ListJobsResponse: Schema.Schema<ListJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobs: Schema.optional(Schema.Array(Job)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListJobsResponse" });

export interface ListLocationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(Location)),
  }).annotate({ identifier: "ListLocationsResponse" });

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
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

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

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsJobsRequest {
  /** Required. The optional `job_id` for this Job . If not specified, an id is generated. `job_id` should be no more than 128 characters and must include only characters available in DNS names, as defined by RFC-1123. */
  jobId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` will be ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Request body */
  body?: Job;
}

export const CreateProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobId: Schema.optional(Schema.String).pipe(T.HttpQuery("jobId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Job).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/jobs", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsJobsRequest>;

export type CreateProjectsLocationsJobsResponse = Operation;
export const CreateProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsJobsRequest,
  output: CreateProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsJobsRequest {
  /** Required. The `name` of the job to delete. Format: projects/{project_id}/locations/global/jobs/{job_id} . */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` will be ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, any child bucket operations of the job will also be deleted. Highly recommended to be set to true by all clients. Users cannot mutate bucket operations directly, so only the jobs.delete permission is required to delete a job (and its child bucket operations). */
  force?: boolean;
}

export const DeleteProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsJobsRequest>;

export type DeleteProjectsLocationsJobsResponse = Empty;
export const DeleteProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsJobsRequest,
  output: DeleteProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsJobsRequest {
  /** Optional. The list page size. default page size is 100. */
  pageSize?: number;
  /** Required. Format: projects/{project_id}/locations/global. */
  parent: string;
  /** Optional. Filters results as defined by https://google.aip.dev/160. */
  filter?: string;
  /** Optional. The list page token. */
  pageToken?: string;
  /** Optional. Field to sort by. Supported fields are name, create_time. */
  orderBy?: string;
}

export const ListProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/jobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsJobsRequest>;

export type ListProjectsLocationsJobsResponse = ListJobsResponse;
export const ListProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListJobsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobsRequest,
  output: ListProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsJobsRequest {
  /** Required. `name` of the job to retrieve. Format: projects/{project_id}/locations/global/jobs/{job_id} . */
  name: string;
}

export const GetProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsJobsRequest>;

export type GetProjectsLocationsJobsResponse = Job;
export const GetProjectsLocationsJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Job;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsJobsRequest,
  output: GetProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsLocationsJobsRequest {
  /** Required. The `name` of the job to cancel. Format: projects/{project_id}/locations/global/jobs/{job_id}. */
  name: string;
  /** Request body */
  body?: CancelJobRequest;
}

export const CancelProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsJobsRequest>;

export type CancelProjectsLocationsJobsResponse = CancelJobResponse;
export const CancelProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CancelJobResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsJobsRequest,
  output: CancelProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsJobsBucketOperationsRequest {
  /** Required. Format: projects/{project_id}/locations/global/jobs/{job_id}. */
  parent: string;
  /** Optional. Filters results as defined by https://google.aip.dev/160. */
  filter?: string;
  /** Optional. The list page token. */
  pageToken?: string;
  /** Optional. Field to sort by. Supported fields are name, create_time. */
  orderBy?: string;
  /** Optional. The list page size. Default page size is 100. */
  pageSize?: number;
}

export const ListProjectsLocationsJobsBucketOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/bucketOperations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsJobsBucketOperationsRequest>;

export type ListProjectsLocationsJobsBucketOperationsResponse =
  ListBucketOperationsResponse;
export const ListProjectsLocationsJobsBucketOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBucketOperationsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobsBucketOperationsRequest,
  output: ListProjectsLocationsJobsBucketOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsJobsBucketOperationsRequest {
  /** Required. `name` of the bucket operation to retrieve. Format: projects/{project_id}/locations/global/jobs/{job_id}/bucketOperations/{bucket_operation_id}. */
  name: string;
}

export const GetProjectsLocationsJobsBucketOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsJobsBucketOperationsRequest>;

export type GetProjectsLocationsJobsBucketOperationsResponse = BucketOperation;
export const GetProjectsLocationsJobsBucketOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BucketOperation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsJobsBucketOperationsRequest,
  output: GetProjectsLocationsJobsBucketOperationsResponse,
  errors: [NotFound, Forbidden],
}));
