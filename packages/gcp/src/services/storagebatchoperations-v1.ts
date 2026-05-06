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

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  message: Schema.optional(Schema.String),
  code: Schema.optional(Schema.Number),
}).annotate({ identifier: "Status" });

export interface Operation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  name: Schema.optional(Schema.String),
  done: Schema.optional(Schema.Boolean),
  error: Schema.optional(Status),
}).annotate({ identifier: "Operation" });

export interface PutObjectHold {
  /** Required. Updates object temporary holds state. When object temporary hold is set, object cannot be deleted or replaced. */
  temporaryHold?: "HOLD_STATUS_UNSPECIFIED" | "SET" | "UNSET" | (string & {});
  /** Required. Updates object event based holds state. When object event based hold is set, object cannot be deleted or replaced. Resets object's time in the bucket for the purposes of the retention period. */
  eventBasedHold?: "HOLD_STATUS_UNSPECIFIED" | "SET" | "UNSET" | (string & {});
}

export const PutObjectHold = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  temporaryHold: Schema.optional(Schema.String),
  eventBasedHold: Schema.optional(Schema.String),
}).annotate({ identifier: "PutObjectHold" });

export interface Location {
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  displayName: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  locationId: Schema.optional(Schema.String),
}).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  locations: Schema.optional(Schema.Array(Location)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListLocationsResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CancelOperationRequest" });

export interface ObjectCustomContextPayload {
  /** The value of the object custom context. If set, `value` must NOT be an empty string since it is a required field in custom context. If unset, `value` will be ignored and no changes will be made to the `value` field of the custom context payload. */
  value?: string;
}

export const ObjectCustomContextPayload =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "ObjectCustomContextPayload" });

export interface CustomContextUpdates {
  /** Optional. Insert or update the existing custom contexts. */
  updates?: Record<string, ObjectCustomContextPayload>;
  /** Optional. Custom contexts to clear by key. A key cannot be present in both `updates` and `keys_to_clear`. */
  keysToClear?: ReadonlyArray<string>;
}

export const CustomContextUpdates = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updates: Schema.optional(
    Schema.Record(Schema.String, ObjectCustomContextPayload),
  ),
  keysToClear: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "CustomContextUpdates" });

export interface CancelJobRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` will be ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const CancelJobRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requestId: Schema.optional(Schema.String),
}).annotate({ identifier: "CancelJobRequest" });

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

export const LoggingConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  logActions: Schema.optional(Schema.Array(Schema.String)),
  logActionStates: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "LoggingConfig" });

export interface DeleteObject {
  /** Required. Controls deletion behavior when versioning is enabled for the object's bucket. If true both live and noncurrent objects will be permanently deleted. Otherwise live objects in versioned buckets will become noncurrent and objects that were already noncurrent will be skipped. This setting doesn't have any impact on the Soft Delete feature. All objects deleted by this service can be be restored for the duration of the Soft Delete retention duration if enabled. If enabled and the manifest doesn't specify an object's generation, a GetObjectMetadata call (a Class B operation) will be made to determine the live object generation. */
  permanentObjectDeletionEnabled?: boolean;
}

export const DeleteObject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  permanentObjectDeletionEnabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "DeleteObject" });

export interface Counters {
  /** Output only. Number of objects completed. */
  succeededObjectCount?: string;
  /** Output only. Number of object custom contexts updated. This counter tracks custom contexts where the key already existed, but the payload was modified. This field is only populated for jobs with the UpdateObjectCustomContext transformation. */
  objectCustomContextsUpdated?: string;
  /** Output only. Number of object custom contexts created. This field is only populated for jobs with the UpdateObjectCustomContext transformation. */
  objectCustomContextsCreated?: string;
  /** Output only. The number of objects that failed due to user errors or service errors. */
  failedObjectCount?: string;
  /** Output only. Number of object custom contexts deleted. This field is only populated for jobs with the UpdateObjectCustomContext transformation. */
  objectCustomContextsDeleted?: string;
  /** Output only. Number of objects listed. */
  totalObjectCount?: string;
  /** Output only. Number of bytes found from source. This field is only populated for jobs with a prefix list object configuration. */
  totalBytesFound?: string;
}

export const Counters = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  succeededObjectCount: Schema.optional(Schema.String),
  objectCustomContextsUpdated: Schema.optional(Schema.String),
  objectCustomContextsCreated: Schema.optional(Schema.String),
  failedObjectCount: Schema.optional(Schema.String),
  objectCustomContextsDeleted: Schema.optional(Schema.String),
  totalObjectCount: Schema.optional(Schema.String),
  totalBytesFound: Schema.optional(Schema.String),
}).annotate({ identifier: "Counters" });

export interface UpdateObjectCustomContext {
  /** A collection of updates to apply to specific custom contexts. Use this to add, update or delete individual contexts by key. */
  customContextUpdates?: CustomContextUpdates;
  /** If set, must be set to true and all existing object custom contexts will be deleted. */
  clearAll?: boolean;
}

export const UpdateObjectCustomContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customContextUpdates: Schema.optional(CustomContextUpdates),
    clearAll: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "UpdateObjectCustomContext" });

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

export const ObjectRetention = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  retainUntilTime: Schema.optional(Schema.String),
  retentionMode: Schema.optional(Schema.String),
}).annotate({ identifier: "ObjectRetention" });

export interface PutMetadata {
  /** Optional. Updates objects Custom-Time fixed metadata. Unset values will be ignored. Set empty values to clear the metadata. Refer to documentation in https://cloud.google.com/storage/docs/metadata#custom-time. */
  customTime?: string;
  /** Optional. Updates objects custom metadata. Adds or sets individual custom metadata key value pairs on objects. Keys that are set with empty custom metadata values will have its value cleared. Existing custom metadata not specified with this flag is not changed. Refer to documentation in https://cloud.google.com/storage/docs/metadata#custom-metadata */
  customMetadata?: Record<string, string>;
  /** Optional. Updates objects Content-Encoding fixed metadata. Unset values will be ignored. Set empty values to clear the metadata. Refer to documentation in https://cloud.google.com/storage/docs/metadata#content-encoding. */
  contentEncoding?: string;
  /** Optional. Updates objects Content-Language fixed metadata. Refer to ISO 639-1 language codes for typical values of this metadata. Max length 100 characters. Unset values will be ignored. Set empty values to clear the metadata. Refer to documentation in https://cloud.google.com/storage/docs/metadata#content-language. */
  contentLanguage?: string;
  /** Optional. Updates objects retention lock configuration. Unset values will be ignored. Set empty values to clear the retention for the object with existing `Unlocked` retention mode. Object with existing `Locked` retention mode cannot be cleared or reduce retain_until_time. Refer to documentation in https://cloud.google.com/storage/docs/object-lock */
  objectRetention?: ObjectRetention;
  /** Optional. Updates objects Content-Disposition fixed metadata. Unset values will be ignored. Set empty values to clear the metadata. Refer https://cloud.google.com/storage/docs/metadata#content-disposition for additional documentation. */
  contentDisposition?: string;
  /** Optional. Updates objects Content-Type fixed metadata. Unset values will be ignored. Set empty values to clear the metadata. Refer to documentation in https://cloud.google.com/storage/docs/metadata#content-type */
  contentType?: string;
  /** Optional. Updates objects Cache-Control fixed metadata. Unset values will be ignored. Set empty values to clear the metadata. Additionally, the value for Custom-Time cannot decrease. Refer to documentation in https://cloud.google.com/storage/docs/metadata#caching_data. */
  cacheControl?: string;
}

export const PutMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customTime: Schema.optional(Schema.String),
  customMetadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  contentEncoding: Schema.optional(Schema.String),
  contentLanguage: Schema.optional(Schema.String),
  objectRetention: Schema.optional(ObjectRetention),
  contentDisposition: Schema.optional(Schema.String),
  contentType: Schema.optional(Schema.String),
  cacheControl: Schema.optional(Schema.String),
}).annotate({ identifier: "PutMetadata" });

export interface RewriteObject {
  /** Required. Resource name of the Cloud KMS key that will be used to encrypt the object. The Cloud KMS key must be located in same location as the object. Refer to https://cloud.google.com/storage/docs/encryption/using-customer-managed-keys#add-object-key for additional documentation. Format: projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key} For example: "projects/123456/locations/us-central1/keyRings/my-keyring/cryptoKeys/my-key". The object will be rewritten and set with the specified KMS key. */
  kmsKey?: string;
}

export const RewriteObject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kmsKey: Schema.optional(Schema.String),
}).annotate({ identifier: "RewriteObject" });

export interface ErrorLogEntry {
  /** Required. Output only. Object URL. e.g. gs://my_bucket/object.txt */
  objectUri?: string;
  /** Optional. Output only. At most 5 error log entries are recorded for a given error code for a job. */
  errorDetails?: ReadonlyArray<string>;
}

export const ErrorLogEntry = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  objectUri: Schema.optional(Schema.String),
  errorDetails: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ErrorLogEntry" });

export interface ErrorSummary {
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
  /** Required. Number of errors encountered per `error_code`. */
  errorCount?: string;
  /** Required. Sample error logs. */
  errorLogEntries?: ReadonlyArray<ErrorLogEntry>;
}

export const ErrorSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  errorCode: Schema.optional(Schema.String),
  errorCount: Schema.optional(Schema.String),
  errorLogEntries: Schema.optional(Schema.Array(ErrorLogEntry)),
}).annotate({ identifier: "ErrorSummary" });

export interface Manifest {
  /** Required. `manifest_location` must contain the manifest source file that is a CSV file in a Google Cloud Storage bucket. Each row in the file must include the object details i.e. BucketId and Name. Generation may optionally be specified. When it is not specified the live object is acted upon. `manifest_location` should either be 1) An absolute path to the object in the format of `gs://bucket_name/path/file_name.csv`. 2) An absolute path with a single wildcard character in the file name, for example `gs://bucket_name/path/file_name*.csv`. If manifest location is specified with a wildcard, objects in all manifest files matching the pattern will be acted upon. */
  manifestLocation?: string;
}

export const Manifest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  manifestLocation: Schema.optional(Schema.String),
}).annotate({ identifier: "Manifest" });

export interface PrefixList {
  /** Optional. Include prefixes of the objects to be transformed. * Supports full object name * Supports prefix of the object name * Wildcards are not supported * Supports empty string for all objects in a bucket. */
  includedObjectPrefixes?: ReadonlyArray<string>;
}

export const PrefixList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includedObjectPrefixes: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "PrefixList" });

export interface Bucket {
  /** Specifies objects in a manifest file. */
  manifest?: Manifest;
  /** Specifies objects matching a prefix set. */
  prefixList?: PrefixList;
  /** Required. Bucket name for the objects to be transformed. */
  bucket?: string;
}

export const Bucket = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  manifest: Schema.optional(Manifest),
  prefixList: Schema.optional(PrefixList),
  bucket: Schema.optional(Schema.String),
}).annotate({ identifier: "Bucket" });

export interface BucketList {
  /** Required. List of buckets and their objects to be transformed. Currently, only one bucket configuration is supported. If multiple buckets are specified, an error will be returned. */
  buckets?: ReadonlyArray<Bucket>;
}

export const BucketList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  buckets: Schema.optional(Schema.Array(Bucket)),
}).annotate({ identifier: "BucketList" });

export interface Job {
  /** Optional. Logging configuration. */
  loggingConfig?: LoggingConfig;
  /** Optional. If true, the job will run in dry run mode, returning the total object count and, if the object configuration is a prefix list, the bytes found from source. No transformations will be performed. */
  dryRun?: boolean;
  /** Output only. The time that the job was created. */
  createTime?: string;
  /** Delete objects. */
  deleteObject?: DeleteObject;
  /** Output only. The time that the job was completed. */
  completeTime?: string;
  /** Output only. The time that the job was scheduled. */
  scheduleTime?: string;
  /** Identifier. The resource name of the Job. job_id is unique within the project, that is either set by the customer or defined by the service. Format: projects/{project}/locations/global/jobs/{job_id} . For example: "projects/123456/locations/global/jobs/job01". */
  name?: string;
  /** Output only. Information about the progress of the job. */
  counters?: Counters;
  /** Changes object hold status. */
  putObjectHold?: PutObjectHold;
  /** Update object custom context. */
  updateObjectCustomContext?: UpdateObjectCustomContext;
  /** Updates object metadata. Allows updating fixed-key and custom metadata and fixed-key metadata i.e. Cache-Control, Content-Disposition, Content-Encoding, Content-Language, Content-Type, Custom-Time. */
  putMetadata?: PutMetadata;
  /** Rewrite the object and updates metadata like KMS key. */
  rewriteObject?: RewriteObject;
  /** Output only. If true, this Job operates on multiple buckets. Multibucket jobs are subject to different quota limits than single-bucket jobs. */
  isMultiBucketJob?: boolean;
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
  /** Optional. A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded. */
  description?: string;
  /** Specifies a list of buckets and their objects to be transformed. */
  bucketList?: BucketList;
}

export const Job = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  loggingConfig: Schema.optional(LoggingConfig),
  dryRun: Schema.optional(Schema.Boolean),
  createTime: Schema.optional(Schema.String),
  deleteObject: Schema.optional(DeleteObject),
  completeTime: Schema.optional(Schema.String),
  scheduleTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  counters: Schema.optional(Counters),
  putObjectHold: Schema.optional(PutObjectHold),
  updateObjectCustomContext: Schema.optional(UpdateObjectCustomContext),
  putMetadata: Schema.optional(PutMetadata),
  rewriteObject: Schema.optional(RewriteObject),
  isMultiBucketJob: Schema.optional(Schema.Boolean),
  state: Schema.optional(Schema.String),
  errorSummaries: Schema.optional(Schema.Array(ErrorSummary)),
  description: Schema.optional(Schema.String),
  bucketList: Schema.optional(BucketList),
}).annotate({ identifier: "Job" });

export interface ListJobsResponse {
  /** A list of storage batch jobs. */
  jobs?: ReadonlyArray<Job>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results. */
  nextPageToken?: string;
}

export const ListJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jobs: Schema.optional(Schema.Array(Job)),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListJobsResponse" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface BucketOperation {
  /** Output only. The time that the BucketOperation was started. */
  startTime?: string;
  /** Output only. Summarizes errors encountered with sample error log entries. */
  errorSummaries?: ReadonlyArray<ErrorSummary>;
  /** Output only. State of the BucketOperation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "QUEUED"
    | "RUNNING"
    | "SUCCEEDED"
    | "CANCELED"
    | "FAILED"
    | (string & {});
  /** Updates object metadata. Allows updating fixed-key and custom metadata and fixed-key metadata i.e. Cache-Control, Content-Disposition, Content-Encoding, Content-Language, Content-Type, Custom-Time. */
  putMetadata?: PutMetadata;
  /** Rewrite the object and updates metadata like KMS key. */
  rewriteObject?: RewriteObject;
  /** Specifies objects in a manifest file. */
  manifest?: Manifest;
  /** Update object custom context. */
  updateObjectCustomContext?: UpdateObjectCustomContext;
  /** Changes object hold status. */
  putObjectHold?: PutObjectHold;
  /** Identifier. The resource name of the BucketOperation. This is defined by the service. Format: projects/{project}/locations/global/jobs/{job_id}/bucketOperations/{bucket_operation}. */
  name?: string;
  /** Output only. Information about the progress of the bucket operation. */
  counters?: Counters;
  /** Output only. The time that the BucketOperation was created. */
  createTime?: string;
  /** Delete objects. */
  deleteObject?: DeleteObject;
  /** Output only. The time that the BucketOperation was completed. */
  completeTime?: string;
  /** The bucket name of the objects to be transformed in the BucketOperation. */
  bucketName?: string;
  /** Specifies objects matching a prefix set. */
  prefixList?: PrefixList;
}

export const BucketOperation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(Schema.String),
  errorSummaries: Schema.optional(Schema.Array(ErrorSummary)),
  state: Schema.optional(Schema.String),
  putMetadata: Schema.optional(PutMetadata),
  rewriteObject: Schema.optional(RewriteObject),
  manifest: Schema.optional(Manifest),
  updateObjectCustomContext: Schema.optional(UpdateObjectCustomContext),
  putObjectHold: Schema.optional(PutObjectHold),
  name: Schema.optional(Schema.String),
  counters: Schema.optional(Counters),
  createTime: Schema.optional(Schema.String),
  deleteObject: Schema.optional(DeleteObject),
  completeTime: Schema.optional(Schema.String),
  bucketName: Schema.optional(Schema.String),
  prefixList: Schema.optional(PrefixList),
}).annotate({ identifier: "BucketOperation" });

export interface ListBucketOperationsResponse {
  /** A token identifying a page of results. */
  nextPageToken?: string;
  /** A list of storage batch bucket operations. */
  bucketOperations?: ReadonlyArray<BucketOperation>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListBucketOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    bucketOperations: Schema.optional(Schema.Array(BucketOperation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListBucketOperationsResponse" });

export interface OperationMetadata {
  /** Output only. The Job associated with the operation. */
  job?: Job;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The unique operation resource name. Format: projects/{project}/locations/global/operations/{operation}. */
  operation?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
}

export const OperationMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  job: Schema.optional(Job),
  requestedCancellation: Schema.optional(Schema.Boolean),
  operation: Schema.optional(Schema.String),
  apiVersion: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
}).annotate({ identifier: "OperationMetadata" });

export interface CancelJobResponse {}

export const CancelJobResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CancelJobResponse" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "ListOperationsResponse" });

// ==========================================================================
// Operations
// ==========================================================================

export interface ListProjectsLocationsRequest {
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError = DefaultErrors;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError = DefaultErrors;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError = DefaultErrors;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v1/{name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError = DefaultErrors;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsJobsRequest {
  /** Required. The optional `job_id` for this Job . If not specified, an id is generated. `job_id` should be no more than 128 characters and must include only characters available in DNS names, as defined by RFC-1123. */
  jobId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` will be ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Job;
}

export const CreateProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobId: Schema.optional(Schema.String).pipe(T.HttpQuery("jobId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Job).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/jobs", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsJobsRequest>;

export type CreateProjectsLocationsJobsResponse = Operation;
export const CreateProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsJobsError = DefaultErrors;

/** Creates a batch job. */
export const createProjectsLocationsJobs: API.OperationMethod<
  CreateProjectsLocationsJobsRequest,
  CreateProjectsLocationsJobsResponse,
  CreateProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsJobsRequest,
  output: CreateProjectsLocationsJobsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v1/{name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsJobsRequest>;

export type CancelProjectsLocationsJobsResponse = CancelJobResponse;
export const CancelProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CancelJobResponse;

export type CancelProjectsLocationsJobsError = DefaultErrors;

/** Cancels a batch job. */
export const cancelProjectsLocationsJobs: API.OperationMethod<
  CancelProjectsLocationsJobsRequest,
  CancelProjectsLocationsJobsResponse,
  CancelProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsJobsRequest,
  output: CancelProjectsLocationsJobsResponse,
  errors: [],
}));

export interface GetProjectsLocationsJobsRequest {
  /** Required. `name` of the job to retrieve. Format: projects/{project_id}/locations/global/jobs/{job_id} . */
  name: string;
}

export const GetProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsJobsRequest>;

export type GetProjectsLocationsJobsResponse = Job;
export const GetProjectsLocationsJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Job;

export type GetProjectsLocationsJobsError = DefaultErrors;

/** Gets a batch job. */
export const getProjectsLocationsJobs: API.OperationMethod<
  GetProjectsLocationsJobsRequest,
  GetProjectsLocationsJobsResponse,
  GetProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsJobsRequest,
  output: GetProjectsLocationsJobsResponse,
  errors: [],
}));

export interface ListProjectsLocationsJobsRequest {
  /** Required. Format: projects/{project_id}/locations/global. */
  parent: string;
  /** Optional. Field to sort by. Supported fields are name, create_time. */
  orderBy?: string;
  /** Optional. The list page size. default page size is 100. */
  pageSize?: number;
  /** Optional. Filters results as defined by https://google.aip.dev/160. */
  filter?: string;
  /** Optional. The list page token. */
  pageToken?: string;
}

export const ListProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/jobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsJobsRequest>;

export type ListProjectsLocationsJobsResponse = ListJobsResponse;
export const ListProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListJobsResponse;

export type ListProjectsLocationsJobsError = DefaultErrors;

/** Lists Jobs in a given project. */
export const listProjectsLocationsJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsJobsRequest,
  ListProjectsLocationsJobsResponse,
  ListProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobsRequest,
  output: ListProjectsLocationsJobsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsJobsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` will be ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The `name` of the job to delete. Format: projects/{project_id}/locations/global/jobs/{job_id} . */
  name: string;
  /** Optional. If set to true, any child bucket operations of the job will also be deleted. Highly recommended to be set to true by all clients. Users cannot mutate bucket operations directly, so only the jobs.delete permission is required to delete a job (and its child bucket operations). */
  force?: boolean;
}

export const DeleteProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsJobsRequest>;

export type DeleteProjectsLocationsJobsResponse = Empty;
export const DeleteProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsJobsError = DefaultErrors;

/** Deletes a batch job. */
export const deleteProjectsLocationsJobs: API.OperationMethod<
  DeleteProjectsLocationsJobsRequest,
  DeleteProjectsLocationsJobsResponse,
  DeleteProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsJobsRequest,
  output: DeleteProjectsLocationsJobsResponse,
  errors: [],
}));

export interface ListProjectsLocationsJobsBucketOperationsRequest {
  /** Optional. The list page token. */
  pageToken?: string;
  /** Optional. Filters results as defined by https://google.aip.dev/160. */
  filter?: string;
  /** Optional. The list page size. Default page size is 100. */
  pageSize?: number;
  /** Required. Format: projects/{project_id}/locations/global/jobs/{job_id}. */
  parent: string;
  /** Optional. Field to sort by. Supported fields are name, create_time. */
  orderBy?: string;
}

export const ListProjectsLocationsJobsBucketOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/bucketOperations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsJobsBucketOperationsRequest>;

export type ListProjectsLocationsJobsBucketOperationsResponse =
  ListBucketOperationsResponse;
export const ListProjectsLocationsJobsBucketOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBucketOperationsResponse;

export type ListProjectsLocationsJobsBucketOperationsError = DefaultErrors;

/** Lists BucketOperations in a given project and job. */
export const listProjectsLocationsJobsBucketOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsJobsBucketOperationsRequest,
  ListProjectsLocationsJobsBucketOperationsResponse,
  ListProjectsLocationsJobsBucketOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobsBucketOperationsRequest,
  output: ListProjectsLocationsJobsBucketOperationsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsJobsBucketOperationsRequest>;

export type GetProjectsLocationsJobsBucketOperationsResponse = BucketOperation;
export const GetProjectsLocationsJobsBucketOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BucketOperation;

export type GetProjectsLocationsJobsBucketOperationsError = DefaultErrors;

/** Gets a BucketOperation. */
export const getProjectsLocationsJobsBucketOperations: API.OperationMethod<
  GetProjectsLocationsJobsBucketOperationsRequest,
  GetProjectsLocationsJobsBucketOperationsResponse,
  GetProjectsLocationsJobsBucketOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsJobsBucketOperationsRequest,
  output: GetProjectsLocationsJobsBucketOperationsResponse,
  errors: [],
}));
