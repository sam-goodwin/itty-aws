/**
 * Kubernetes Batch API
 *
 * Generated from the Kubernetes OpenAPI spec.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import { Conflict, NotFound, UnprocessableEntity } from "../errors.ts";
import {
  io_k8s_api_batch_v1_CronJobSchema,
  io_k8s_api_batch_v1_CronJobSpecSchema,
  io_k8s_api_batch_v1_CronJobStatusSchema,
  io_k8s_api_batch_v1_JobSchema,
  io_k8s_api_batch_v1_JobSpecSchema,
  io_k8s_api_batch_v1_JobStatusSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscoverySchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDRSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetailsSchema,
  io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
} from "./_schemas.ts";

// Input Schema
export const CreateBatchV1NamespacedCronJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_batch_v1_CronJobSpecSchema),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_CronJobStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/batch/v1/namespaces/{namespace}/cronjobs",
    }),
  );
export type CreateBatchV1NamespacedCronJobInput =
  typeof CreateBatchV1NamespacedCronJobInput.Type;

// Output Schema
export const CreateBatchV1NamespacedCronJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_batch_v1_CronJobSpecSchema),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_CronJobStatusSchema),
    ),
  });
export type CreateBatchV1NamespacedCronJobOutput =
  typeof CreateBatchV1NamespacedCronJobOutput.Type;

// The operation
/**
 * create a CronJob
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createBatchV1NamespacedCronJob =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateBatchV1NamespacedCronJobInput,
    outputSchema: CreateBatchV1NamespacedCronJobOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateBatchV1NamespacedJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/batch/v1/namespaces/{namespace}/jobs",
    }),
  );
export type CreateBatchV1NamespacedJobInput =
  typeof CreateBatchV1NamespacedJobInput.Type;

// Output Schema
export const CreateBatchV1NamespacedJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobStatusSchema),
    ),
  });
export type CreateBatchV1NamespacedJobOutput =
  typeof CreateBatchV1NamespacedJobOutput.Type;

// The operation
/**
 * create a Job
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createBatchV1NamespacedJob = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateBatchV1NamespacedJobInput,
    outputSchema: CreateBatchV1NamespacedJobOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const DeleteBatchV1CollectionNamespacedCronJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/batch/v1/namespaces/{namespace}/cronjobs",
    }),
  );
export type DeleteBatchV1CollectionNamespacedCronJobInput =
  typeof DeleteBatchV1CollectionNamespacedCronJobInput.Type;

// Output Schema
export const DeleteBatchV1CollectionNamespacedCronJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetailsSchema,
      ),
    ),
    kind: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
    reason: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  });
export type DeleteBatchV1CollectionNamespacedCronJobOutput =
  typeof DeleteBatchV1CollectionNamespacedCronJobOutput.Type;

// The operation
/**
 * delete collection of CronJob
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteBatchV1CollectionNamespacedCronJob =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteBatchV1CollectionNamespacedCronJobInput,
    outputSchema: DeleteBatchV1CollectionNamespacedCronJobOutput,
  }));
// Input Schema
export const DeleteBatchV1CollectionNamespacedJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/batch/v1/namespaces/{namespace}/jobs",
    }),
  );
export type DeleteBatchV1CollectionNamespacedJobInput =
  typeof DeleteBatchV1CollectionNamespacedJobInput.Type;

// Output Schema
export const DeleteBatchV1CollectionNamespacedJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetailsSchema,
      ),
    ),
    kind: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
    reason: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  });
export type DeleteBatchV1CollectionNamespacedJobOutput =
  typeof DeleteBatchV1CollectionNamespacedJobOutput.Type;

// The operation
/**
 * delete collection of Job
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteBatchV1CollectionNamespacedJob =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteBatchV1CollectionNamespacedJobInput,
    outputSchema: DeleteBatchV1CollectionNamespacedJobOutput,
  }));
// Input Schema
export const DeleteBatchV1NamespacedCronJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}",
    }),
  );
export type DeleteBatchV1NamespacedCronJobInput =
  typeof DeleteBatchV1NamespacedCronJobInput.Type;

// Output Schema
export const DeleteBatchV1NamespacedCronJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetailsSchema,
      ),
    ),
    kind: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
    reason: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  });
export type DeleteBatchV1NamespacedCronJobOutput =
  typeof DeleteBatchV1NamespacedCronJobOutput.Type;

// The operation
/**
 * delete a CronJob
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteBatchV1NamespacedCronJob =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteBatchV1NamespacedCronJobInput,
    outputSchema: DeleteBatchV1NamespacedCronJobOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteBatchV1NamespacedJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/batch/v1/namespaces/{namespace}/jobs/{name}",
    }),
  );
export type DeleteBatchV1NamespacedJobInput =
  typeof DeleteBatchV1NamespacedJobInput.Type;

// Output Schema
export const DeleteBatchV1NamespacedJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetailsSchema,
      ),
    ),
    kind: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
    reason: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  });
export type DeleteBatchV1NamespacedJobOutput =
  typeof DeleteBatchV1NamespacedJobOutput.Type;

// The operation
/**
 * delete a Job
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteBatchV1NamespacedJob = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteBatchV1NamespacedJobInput,
    outputSchema: DeleteBatchV1NamespacedJobOutput,
    errors: [NotFound, Conflict] as const,
  }),
);
// Input Schema
export const GetBatchAPIGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/apis/batch/" }));
export type GetBatchAPIGroupInput = typeof GetBatchAPIGroupInput.Type;

// Output Schema
export const GetBatchAPIGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.String,
    preferredVersion: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscoverySchema,
      ),
    ),
    serverAddressByClientCIDRs: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDRSchema,
        ),
      ),
    ),
    versions: Schema.Array(
      Schema.suspend(
        () =>
          io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscoverySchema,
      ),
    ),
  },
);
export type GetBatchAPIGroupOutput = typeof GetBatchAPIGroupOutput.Type;

// The operation
/**
 * get information of a group
 */
export const getBatchAPIGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBatchAPIGroupInput,
  outputSchema: GetBatchAPIGroupOutput,
}));
// Input Schema
export const GetBatchV1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/batch/v1/" }),
  );
export type GetBatchV1APIResourcesInput =
  typeof GetBatchV1APIResourcesInput.Type;

// Output Schema
export const GetBatchV1APIResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    groupVersion: Schema.String,
    kind: Schema.optional(Schema.String),
    resources: Schema.Array(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceSchema,
      ),
    ),
  });
export type GetBatchV1APIResourcesOutput =
  typeof GetBatchV1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getBatchV1APIResources = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetBatchV1APIResourcesInput,
    outputSchema: GetBatchV1APIResourcesOutput,
  }),
);
// Input Schema
export const ListBatchV1CronJobForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/batch/v1/cronjobs" }),
  );
export type ListBatchV1CronJobForAllNamespacesInput =
  typeof ListBatchV1CronJobForAllNamespacesInput.Type;

// Output Schema
export const ListBatchV1CronJobForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_batch_v1_CronJobSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListBatchV1CronJobForAllNamespacesOutput =
  typeof ListBatchV1CronJobForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind CronJob
 */
export const listBatchV1CronJobForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListBatchV1CronJobForAllNamespacesInput,
    outputSchema: ListBatchV1CronJobForAllNamespacesOutput,
  }));
// Input Schema
export const ListBatchV1JobForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/batch/v1/jobs" }),
  );
export type ListBatchV1JobForAllNamespacesInput =
  typeof ListBatchV1JobForAllNamespacesInput.Type;

// Output Schema
export const ListBatchV1JobForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(Schema.suspend(() => io_k8s_api_batch_v1_JobSchema)),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListBatchV1JobForAllNamespacesOutput =
  typeof ListBatchV1JobForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind Job
 */
export const listBatchV1JobForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListBatchV1JobForAllNamespacesInput,
    outputSchema: ListBatchV1JobForAllNamespacesOutput,
  }));
// Input Schema
export const ListBatchV1NamespacedCronJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/batch/v1/namespaces/{namespace}/cronjobs",
    }),
  );
export type ListBatchV1NamespacedCronJobInput =
  typeof ListBatchV1NamespacedCronJobInput.Type;

// Output Schema
export const ListBatchV1NamespacedCronJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_batch_v1_CronJobSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListBatchV1NamespacedCronJobOutput =
  typeof ListBatchV1NamespacedCronJobOutput.Type;

// The operation
/**
 * list or watch objects of kind CronJob
 */
export const listBatchV1NamespacedCronJob =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListBatchV1NamespacedCronJobInput,
    outputSchema: ListBatchV1NamespacedCronJobOutput,
  }));
// Input Schema
export const ListBatchV1NamespacedJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/batch/v1/namespaces/{namespace}/jobs",
    }),
  );
export type ListBatchV1NamespacedJobInput =
  typeof ListBatchV1NamespacedJobInput.Type;

// Output Schema
export const ListBatchV1NamespacedJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(Schema.suspend(() => io_k8s_api_batch_v1_JobSchema)),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListBatchV1NamespacedJobOutput =
  typeof ListBatchV1NamespacedJobOutput.Type;

// The operation
/**
 * list or watch objects of kind Job
 */
export const listBatchV1NamespacedJob = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListBatchV1NamespacedJobInput,
    outputSchema: ListBatchV1NamespacedJobOutput,
  }),
);
// Input Schema
export const PatchBatchV1NamespacedCronJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}",
    }),
  );
export type PatchBatchV1NamespacedCronJobInput =
  typeof PatchBatchV1NamespacedCronJobInput.Type;

// Output Schema
export const PatchBatchV1NamespacedCronJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_batch_v1_CronJobSpecSchema),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_CronJobStatusSchema),
    ),
  });
export type PatchBatchV1NamespacedCronJobOutput =
  typeof PatchBatchV1NamespacedCronJobOutput.Type;

// The operation
/**
 * partially update the specified CronJob
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchBatchV1NamespacedCronJob =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchBatchV1NamespacedCronJobInput,
    outputSchema: PatchBatchV1NamespacedCronJobOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchBatchV1NamespacedCronJobStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status",
    }),
  );
export type PatchBatchV1NamespacedCronJobStatusInput =
  typeof PatchBatchV1NamespacedCronJobStatusInput.Type;

// Output Schema
export const PatchBatchV1NamespacedCronJobStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_batch_v1_CronJobSpecSchema),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_CronJobStatusSchema),
    ),
  });
export type PatchBatchV1NamespacedCronJobStatusOutput =
  typeof PatchBatchV1NamespacedCronJobStatusOutput.Type;

// The operation
/**
 * partially update status of the specified CronJob
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchBatchV1NamespacedCronJobStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchBatchV1NamespacedCronJobStatusInput,
    outputSchema: PatchBatchV1NamespacedCronJobStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchBatchV1NamespacedJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/batch/v1/namespaces/{namespace}/jobs/{name}",
    }),
  );
export type PatchBatchV1NamespacedJobInput =
  typeof PatchBatchV1NamespacedJobInput.Type;

// Output Schema
export const PatchBatchV1NamespacedJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobStatusSchema),
    ),
  });
export type PatchBatchV1NamespacedJobOutput =
  typeof PatchBatchV1NamespacedJobOutput.Type;

// The operation
/**
 * partially update the specified Job
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchBatchV1NamespacedJob = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PatchBatchV1NamespacedJobInput,
    outputSchema: PatchBatchV1NamespacedJobOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const PatchBatchV1NamespacedJobStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status",
    }),
  );
export type PatchBatchV1NamespacedJobStatusInput =
  typeof PatchBatchV1NamespacedJobStatusInput.Type;

// Output Schema
export const PatchBatchV1NamespacedJobStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobStatusSchema),
    ),
  });
export type PatchBatchV1NamespacedJobStatusOutput =
  typeof PatchBatchV1NamespacedJobStatusOutput.Type;

// The operation
/**
 * partially update status of the specified Job
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchBatchV1NamespacedJobStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchBatchV1NamespacedJobStatusInput,
    outputSchema: PatchBatchV1NamespacedJobStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReadBatchV1NamespacedCronJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}",
    }),
  );
export type ReadBatchV1NamespacedCronJobInput =
  typeof ReadBatchV1NamespacedCronJobInput.Type;

// Output Schema
export const ReadBatchV1NamespacedCronJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_batch_v1_CronJobSpecSchema),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_CronJobStatusSchema),
    ),
  });
export type ReadBatchV1NamespacedCronJobOutput =
  typeof ReadBatchV1NamespacedCronJobOutput.Type;

// The operation
/**
 * read the specified CronJob
 */
export const readBatchV1NamespacedCronJob =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadBatchV1NamespacedCronJobInput,
    outputSchema: ReadBatchV1NamespacedCronJobOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadBatchV1NamespacedCronJobStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status",
    }),
  );
export type ReadBatchV1NamespacedCronJobStatusInput =
  typeof ReadBatchV1NamespacedCronJobStatusInput.Type;

// Output Schema
export const ReadBatchV1NamespacedCronJobStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_batch_v1_CronJobSpecSchema),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_CronJobStatusSchema),
    ),
  });
export type ReadBatchV1NamespacedCronJobStatusOutput =
  typeof ReadBatchV1NamespacedCronJobStatusOutput.Type;

// The operation
/**
 * read status of the specified CronJob
 */
export const readBatchV1NamespacedCronJobStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadBatchV1NamespacedCronJobStatusInput,
    outputSchema: ReadBatchV1NamespacedCronJobStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadBatchV1NamespacedJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/batch/v1/namespaces/{namespace}/jobs/{name}",
    }),
  );
export type ReadBatchV1NamespacedJobInput =
  typeof ReadBatchV1NamespacedJobInput.Type;

// Output Schema
export const ReadBatchV1NamespacedJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobStatusSchema),
    ),
  });
export type ReadBatchV1NamespacedJobOutput =
  typeof ReadBatchV1NamespacedJobOutput.Type;

// The operation
/**
 * read the specified Job
 */
export const readBatchV1NamespacedJob = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReadBatchV1NamespacedJobInput,
    outputSchema: ReadBatchV1NamespacedJobOutput,
    errors: [NotFound] as const,
  }),
);
// Input Schema
export const ReadBatchV1NamespacedJobStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status",
    }),
  );
export type ReadBatchV1NamespacedJobStatusInput =
  typeof ReadBatchV1NamespacedJobStatusInput.Type;

// Output Schema
export const ReadBatchV1NamespacedJobStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobStatusSchema),
    ),
  });
export type ReadBatchV1NamespacedJobStatusOutput =
  typeof ReadBatchV1NamespacedJobStatusOutput.Type;

// The operation
/**
 * read status of the specified Job
 */
export const readBatchV1NamespacedJobStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadBatchV1NamespacedJobStatusInput,
    outputSchema: ReadBatchV1NamespacedJobStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReplaceBatchV1NamespacedCronJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_batch_v1_CronJobSpecSchema),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_CronJobStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}",
    }),
  );
export type ReplaceBatchV1NamespacedCronJobInput =
  typeof ReplaceBatchV1NamespacedCronJobInput.Type;

// Output Schema
export const ReplaceBatchV1NamespacedCronJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_batch_v1_CronJobSpecSchema),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_CronJobStatusSchema),
    ),
  });
export type ReplaceBatchV1NamespacedCronJobOutput =
  typeof ReplaceBatchV1NamespacedCronJobOutput.Type;

// The operation
/**
 * replace the specified CronJob
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceBatchV1NamespacedCronJob =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceBatchV1NamespacedCronJobInput,
    outputSchema: ReplaceBatchV1NamespacedCronJobOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceBatchV1NamespacedCronJobStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_batch_v1_CronJobSpecSchema),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_CronJobStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status",
    }),
  );
export type ReplaceBatchV1NamespacedCronJobStatusInput =
  typeof ReplaceBatchV1NamespacedCronJobStatusInput.Type;

// Output Schema
export const ReplaceBatchV1NamespacedCronJobStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_batch_v1_CronJobSpecSchema),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_CronJobStatusSchema),
    ),
  });
export type ReplaceBatchV1NamespacedCronJobStatusOutput =
  typeof ReplaceBatchV1NamespacedCronJobStatusOutput.Type;

// The operation
/**
 * replace status of the specified CronJob
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceBatchV1NamespacedCronJobStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceBatchV1NamespacedCronJobStatusInput,
    outputSchema: ReplaceBatchV1NamespacedCronJobStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceBatchV1NamespacedJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/batch/v1/namespaces/{namespace}/jobs/{name}",
    }),
  );
export type ReplaceBatchV1NamespacedJobInput =
  typeof ReplaceBatchV1NamespacedJobInput.Type;

// Output Schema
export const ReplaceBatchV1NamespacedJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobStatusSchema),
    ),
  });
export type ReplaceBatchV1NamespacedJobOutput =
  typeof ReplaceBatchV1NamespacedJobOutput.Type;

// The operation
/**
 * replace the specified Job
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceBatchV1NamespacedJob = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplaceBatchV1NamespacedJobInput,
    outputSchema: ReplaceBatchV1NamespacedJobOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const ReplaceBatchV1NamespacedJobStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status",
    }),
  );
export type ReplaceBatchV1NamespacedJobStatusInput =
  typeof ReplaceBatchV1NamespacedJobStatusInput.Type;

// Output Schema
export const ReplaceBatchV1NamespacedJobStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobStatusSchema),
    ),
  });
export type ReplaceBatchV1NamespacedJobStatusOutput =
  typeof ReplaceBatchV1NamespacedJobStatusOutput.Type;

// The operation
/**
 * replace status of the specified Job
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceBatchV1NamespacedJobStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceBatchV1NamespacedJobStatusInput,
    outputSchema: ReplaceBatchV1NamespacedJobStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const WatchBatchV1CronJobListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/batch/v1/watch/cronjobs" }),
  );
export type WatchBatchV1CronJobListForAllNamespacesInput =
  typeof WatchBatchV1CronJobListForAllNamespacesInput.Type;

// Output Schema
export const WatchBatchV1CronJobListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchBatchV1CronJobListForAllNamespacesOutput =
  typeof WatchBatchV1CronJobListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchBatchV1CronJobListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchBatchV1CronJobListForAllNamespacesInput,
    outputSchema: WatchBatchV1CronJobListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchBatchV1JobListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/batch/v1/watch/jobs" }),
  );
export type WatchBatchV1JobListForAllNamespacesInput =
  typeof WatchBatchV1JobListForAllNamespacesInput.Type;

// Output Schema
export const WatchBatchV1JobListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchBatchV1JobListForAllNamespacesOutput =
  typeof WatchBatchV1JobListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchBatchV1JobListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchBatchV1JobListForAllNamespacesInput,
    outputSchema: WatchBatchV1JobListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchBatchV1NamespacedCronJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/batch/v1/watch/namespaces/{namespace}/cronjobs/{name}",
    }),
  );
export type WatchBatchV1NamespacedCronJobInput =
  typeof WatchBatchV1NamespacedCronJobInput.Type;

// Output Schema
export const WatchBatchV1NamespacedCronJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchBatchV1NamespacedCronJobOutput =
  typeof WatchBatchV1NamespacedCronJobOutput.Type;

// The operation
/**
 * watch changes to an object of kind CronJob. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchBatchV1NamespacedCronJob =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchBatchV1NamespacedCronJobInput,
    outputSchema: WatchBatchV1NamespacedCronJobOutput,
  }));
// Input Schema
export const WatchBatchV1NamespacedCronJobListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/batch/v1/watch/namespaces/{namespace}/cronjobs",
    }),
  );
export type WatchBatchV1NamespacedCronJobListInput =
  typeof WatchBatchV1NamespacedCronJobListInput.Type;

// Output Schema
export const WatchBatchV1NamespacedCronJobListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchBatchV1NamespacedCronJobListOutput =
  typeof WatchBatchV1NamespacedCronJobListOutput.Type;

// The operation
/**
 * watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchBatchV1NamespacedCronJobList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchBatchV1NamespacedCronJobListInput,
    outputSchema: WatchBatchV1NamespacedCronJobListOutput,
  }));
// Input Schema
export const WatchBatchV1NamespacedJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/batch/v1/watch/namespaces/{namespace}/jobs/{name}",
    }),
  );
export type WatchBatchV1NamespacedJobInput =
  typeof WatchBatchV1NamespacedJobInput.Type;

// Output Schema
export const WatchBatchV1NamespacedJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchBatchV1NamespacedJobOutput =
  typeof WatchBatchV1NamespacedJobOutput.Type;

// The operation
/**
 * watch changes to an object of kind Job. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchBatchV1NamespacedJob = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WatchBatchV1NamespacedJobInput,
    outputSchema: WatchBatchV1NamespacedJobOutput,
  }),
);
// Input Schema
export const WatchBatchV1NamespacedJobListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/batch/v1/watch/namespaces/{namespace}/jobs",
    }),
  );
export type WatchBatchV1NamespacedJobListInput =
  typeof WatchBatchV1NamespacedJobListInput.Type;

// Output Schema
export const WatchBatchV1NamespacedJobListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchBatchV1NamespacedJobListOutput =
  typeof WatchBatchV1NamespacedJobListOutput.Type;

// The operation
/**
 * watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchBatchV1NamespacedJobList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchBatchV1NamespacedJobListInput,
    outputSchema: WatchBatchV1NamespacedJobListOutput,
  }));
