/**
 * Kubernetes Apps API
 *
 * Generated from the Kubernetes OpenAPI spec.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import { Conflict, NotFound, UnprocessableEntity } from "../errors.ts";
import {
  io_k8s_api_apps_v1_ControllerRevisionSchema,
  io_k8s_api_apps_v1_DaemonSetSchema,
  io_k8s_api_apps_v1_DaemonSetSpecSchema,
  io_k8s_api_apps_v1_DaemonSetStatusSchema,
  io_k8s_api_apps_v1_DeploymentSchema,
  io_k8s_api_apps_v1_DeploymentSpecSchema,
  io_k8s_api_apps_v1_DeploymentStatusSchema,
  io_k8s_api_apps_v1_ReplicaSetSchema,
  io_k8s_api_apps_v1_ReplicaSetSpecSchema,
  io_k8s_api_apps_v1_ReplicaSetStatusSchema,
  io_k8s_api_apps_v1_StatefulSetSchema,
  io_k8s_api_apps_v1_StatefulSetSpecSchema,
  io_k8s_api_apps_v1_StatefulSetStatusSchema,
  io_k8s_api_autoscaling_v1_ScaleSpecSchema,
  io_k8s_api_autoscaling_v1_ScaleStatusSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscoverySchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDRSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetailsSchema,
  io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
} from "./_schemas.ts";

// Input Schema
export const CreateAppsV1NamespacedControllerRevisionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    revision: Schema.Number,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/apps/v1/namespaces/{namespace}/controllerrevisions",
    }),
  );
export type CreateAppsV1NamespacedControllerRevisionInput =
  typeof CreateAppsV1NamespacedControllerRevisionInput.Type;

// Output Schema
export const CreateAppsV1NamespacedControllerRevisionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    revision: Schema.Number,
  });
export type CreateAppsV1NamespacedControllerRevisionOutput =
  typeof CreateAppsV1NamespacedControllerRevisionOutput.Type;

// The operation
/**
 * create a ControllerRevision
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createAppsV1NamespacedControllerRevision =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateAppsV1NamespacedControllerRevisionInput,
    outputSchema: CreateAppsV1NamespacedControllerRevisionOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateAppsV1NamespacedDaemonSetInput =
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
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/apps/v1/namespaces/{namespace}/daemonsets",
    }),
  );
export type CreateAppsV1NamespacedDaemonSetInput =
  typeof CreateAppsV1NamespacedDaemonSetInput.Type;

// Output Schema
export const CreateAppsV1NamespacedDaemonSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetStatusSchema),
    ),
  });
export type CreateAppsV1NamespacedDaemonSetOutput =
  typeof CreateAppsV1NamespacedDaemonSetOutput.Type;

// The operation
/**
 * create a DaemonSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createAppsV1NamespacedDaemonSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateAppsV1NamespacedDaemonSetInput,
    outputSchema: CreateAppsV1NamespacedDaemonSetOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateAppsV1NamespacedDeploymentInput =
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
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/apps/v1/namespaces/{namespace}/deployments",
    }),
  );
export type CreateAppsV1NamespacedDeploymentInput =
  typeof CreateAppsV1NamespacedDeploymentInput.Type;

// Output Schema
export const CreateAppsV1NamespacedDeploymentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentStatusSchema),
    ),
  });
export type CreateAppsV1NamespacedDeploymentOutput =
  typeof CreateAppsV1NamespacedDeploymentOutput.Type;

// The operation
/**
 * create a Deployment
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createAppsV1NamespacedDeployment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateAppsV1NamespacedDeploymentInput,
    outputSchema: CreateAppsV1NamespacedDeploymentOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateAppsV1NamespacedReplicaSetInput =
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
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/apps/v1/namespaces/{namespace}/replicasets",
    }),
  );
export type CreateAppsV1NamespacedReplicaSetInput =
  typeof CreateAppsV1NamespacedReplicaSetInput.Type;

// Output Schema
export const CreateAppsV1NamespacedReplicaSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetStatusSchema),
    ),
  });
export type CreateAppsV1NamespacedReplicaSetOutput =
  typeof CreateAppsV1NamespacedReplicaSetOutput.Type;

// The operation
/**
 * create a ReplicaSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createAppsV1NamespacedReplicaSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateAppsV1NamespacedReplicaSetInput,
    outputSchema: CreateAppsV1NamespacedReplicaSetOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateAppsV1NamespacedStatefulSetInput =
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
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/apps/v1/namespaces/{namespace}/statefulsets",
    }),
  );
export type CreateAppsV1NamespacedStatefulSetInput =
  typeof CreateAppsV1NamespacedStatefulSetInput.Type;

// Output Schema
export const CreateAppsV1NamespacedStatefulSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetStatusSchema),
    ),
  });
export type CreateAppsV1NamespacedStatefulSetOutput =
  typeof CreateAppsV1NamespacedStatefulSetOutput.Type;

// The operation
/**
 * create a StatefulSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createAppsV1NamespacedStatefulSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateAppsV1NamespacedStatefulSetInput,
    outputSchema: CreateAppsV1NamespacedStatefulSetOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const DeleteAppsV1CollectionNamespacedControllerRevisionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/apps/v1/namespaces/{namespace}/controllerrevisions",
    }),
  );
export type DeleteAppsV1CollectionNamespacedControllerRevisionInput =
  typeof DeleteAppsV1CollectionNamespacedControllerRevisionInput.Type;

// Output Schema
export const DeleteAppsV1CollectionNamespacedControllerRevisionOutput =
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
export type DeleteAppsV1CollectionNamespacedControllerRevisionOutput =
  typeof DeleteAppsV1CollectionNamespacedControllerRevisionOutput.Type;

// The operation
/**
 * delete collection of ControllerRevision
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteAppsV1CollectionNamespacedControllerRevision =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteAppsV1CollectionNamespacedControllerRevisionInput,
    outputSchema: DeleteAppsV1CollectionNamespacedControllerRevisionOutput,
  }));
// Input Schema
export const DeleteAppsV1CollectionNamespacedDaemonSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/apps/v1/namespaces/{namespace}/daemonsets",
    }),
  );
export type DeleteAppsV1CollectionNamespacedDaemonSetInput =
  typeof DeleteAppsV1CollectionNamespacedDaemonSetInput.Type;

// Output Schema
export const DeleteAppsV1CollectionNamespacedDaemonSetOutput =
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
export type DeleteAppsV1CollectionNamespacedDaemonSetOutput =
  typeof DeleteAppsV1CollectionNamespacedDaemonSetOutput.Type;

// The operation
/**
 * delete collection of DaemonSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteAppsV1CollectionNamespacedDaemonSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteAppsV1CollectionNamespacedDaemonSetInput,
    outputSchema: DeleteAppsV1CollectionNamespacedDaemonSetOutput,
  }));
// Input Schema
export const DeleteAppsV1CollectionNamespacedDeploymentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/apps/v1/namespaces/{namespace}/deployments",
    }),
  );
export type DeleteAppsV1CollectionNamespacedDeploymentInput =
  typeof DeleteAppsV1CollectionNamespacedDeploymentInput.Type;

// Output Schema
export const DeleteAppsV1CollectionNamespacedDeploymentOutput =
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
export type DeleteAppsV1CollectionNamespacedDeploymentOutput =
  typeof DeleteAppsV1CollectionNamespacedDeploymentOutput.Type;

// The operation
/**
 * delete collection of Deployment
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteAppsV1CollectionNamespacedDeployment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteAppsV1CollectionNamespacedDeploymentInput,
    outputSchema: DeleteAppsV1CollectionNamespacedDeploymentOutput,
  }));
// Input Schema
export const DeleteAppsV1CollectionNamespacedReplicaSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/apps/v1/namespaces/{namespace}/replicasets",
    }),
  );
export type DeleteAppsV1CollectionNamespacedReplicaSetInput =
  typeof DeleteAppsV1CollectionNamespacedReplicaSetInput.Type;

// Output Schema
export const DeleteAppsV1CollectionNamespacedReplicaSetOutput =
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
export type DeleteAppsV1CollectionNamespacedReplicaSetOutput =
  typeof DeleteAppsV1CollectionNamespacedReplicaSetOutput.Type;

// The operation
/**
 * delete collection of ReplicaSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteAppsV1CollectionNamespacedReplicaSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteAppsV1CollectionNamespacedReplicaSetInput,
    outputSchema: DeleteAppsV1CollectionNamespacedReplicaSetOutput,
  }));
// Input Schema
export const DeleteAppsV1CollectionNamespacedStatefulSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/apps/v1/namespaces/{namespace}/statefulsets",
    }),
  );
export type DeleteAppsV1CollectionNamespacedStatefulSetInput =
  typeof DeleteAppsV1CollectionNamespacedStatefulSetInput.Type;

// Output Schema
export const DeleteAppsV1CollectionNamespacedStatefulSetOutput =
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
export type DeleteAppsV1CollectionNamespacedStatefulSetOutput =
  typeof DeleteAppsV1CollectionNamespacedStatefulSetOutput.Type;

// The operation
/**
 * delete collection of StatefulSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteAppsV1CollectionNamespacedStatefulSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteAppsV1CollectionNamespacedStatefulSetInput,
    outputSchema: DeleteAppsV1CollectionNamespacedStatefulSetOutput,
  }));
// Input Schema
export const DeleteAppsV1NamespacedControllerRevisionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}",
    }),
  );
export type DeleteAppsV1NamespacedControllerRevisionInput =
  typeof DeleteAppsV1NamespacedControllerRevisionInput.Type;

// Output Schema
export const DeleteAppsV1NamespacedControllerRevisionOutput =
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
export type DeleteAppsV1NamespacedControllerRevisionOutput =
  typeof DeleteAppsV1NamespacedControllerRevisionOutput.Type;

// The operation
/**
 * delete a ControllerRevision
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteAppsV1NamespacedControllerRevision =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteAppsV1NamespacedControllerRevisionInput,
    outputSchema: DeleteAppsV1NamespacedControllerRevisionOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteAppsV1NamespacedDaemonSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}",
    }),
  );
export type DeleteAppsV1NamespacedDaemonSetInput =
  typeof DeleteAppsV1NamespacedDaemonSetInput.Type;

// Output Schema
export const DeleteAppsV1NamespacedDaemonSetOutput =
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
export type DeleteAppsV1NamespacedDaemonSetOutput =
  typeof DeleteAppsV1NamespacedDaemonSetOutput.Type;

// The operation
/**
 * delete a DaemonSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteAppsV1NamespacedDaemonSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteAppsV1NamespacedDaemonSetInput,
    outputSchema: DeleteAppsV1NamespacedDaemonSetOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteAppsV1NamespacedDeploymentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/apps/v1/namespaces/{namespace}/deployments/{name}",
    }),
  );
export type DeleteAppsV1NamespacedDeploymentInput =
  typeof DeleteAppsV1NamespacedDeploymentInput.Type;

// Output Schema
export const DeleteAppsV1NamespacedDeploymentOutput =
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
export type DeleteAppsV1NamespacedDeploymentOutput =
  typeof DeleteAppsV1NamespacedDeploymentOutput.Type;

// The operation
/**
 * delete a Deployment
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteAppsV1NamespacedDeployment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteAppsV1NamespacedDeploymentInput,
    outputSchema: DeleteAppsV1NamespacedDeploymentOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteAppsV1NamespacedReplicaSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}",
    }),
  );
export type DeleteAppsV1NamespacedReplicaSetInput =
  typeof DeleteAppsV1NamespacedReplicaSetInput.Type;

// Output Schema
export const DeleteAppsV1NamespacedReplicaSetOutput =
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
export type DeleteAppsV1NamespacedReplicaSetOutput =
  typeof DeleteAppsV1NamespacedReplicaSetOutput.Type;

// The operation
/**
 * delete a ReplicaSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteAppsV1NamespacedReplicaSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteAppsV1NamespacedReplicaSetInput,
    outputSchema: DeleteAppsV1NamespacedReplicaSetOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteAppsV1NamespacedStatefulSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}",
    }),
  );
export type DeleteAppsV1NamespacedStatefulSetInput =
  typeof DeleteAppsV1NamespacedStatefulSetInput.Type;

// Output Schema
export const DeleteAppsV1NamespacedStatefulSetOutput =
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
export type DeleteAppsV1NamespacedStatefulSetOutput =
  typeof DeleteAppsV1NamespacedStatefulSetOutput.Type;

// The operation
/**
 * delete a StatefulSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteAppsV1NamespacedStatefulSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteAppsV1NamespacedStatefulSetInput,
    outputSchema: DeleteAppsV1NamespacedStatefulSetOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const GetAppsAPIGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/apis/apps/" }));
export type GetAppsAPIGroupInput = typeof GetAppsAPIGroupInput.Type;

// Output Schema
export const GetAppsAPIGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiVersion: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  name: Schema.String,
  preferredVersion: Schema.optional(
    Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscoverySchema,
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
      () => io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscoverySchema,
    ),
  ),
});
export type GetAppsAPIGroupOutput = typeof GetAppsAPIGroupOutput.Type;

// The operation
/**
 * get information of a group
 */
export const getAppsAPIGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAppsAPIGroupInput,
  outputSchema: GetAppsAPIGroupOutput,
}));
// Input Schema
export const GetAppsV1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/apps/v1/" }),
  );
export type GetAppsV1APIResourcesInput = typeof GetAppsV1APIResourcesInput.Type;

// Output Schema
export const GetAppsV1APIResourcesOutput =
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
export type GetAppsV1APIResourcesOutput =
  typeof GetAppsV1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getAppsV1APIResources = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetAppsV1APIResourcesInput,
    outputSchema: GetAppsV1APIResourcesOutput,
  }),
);
// Input Schema
export const ListAppsV1ControllerRevisionForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/apps/v1/controllerrevisions" }),
  );
export type ListAppsV1ControllerRevisionForAllNamespacesInput =
  typeof ListAppsV1ControllerRevisionForAllNamespacesInput.Type;

// Output Schema
export const ListAppsV1ControllerRevisionForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_apps_v1_ControllerRevisionSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListAppsV1ControllerRevisionForAllNamespacesOutput =
  typeof ListAppsV1ControllerRevisionForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind ControllerRevision
 */
export const listAppsV1ControllerRevisionForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAppsV1ControllerRevisionForAllNamespacesInput,
    outputSchema: ListAppsV1ControllerRevisionForAllNamespacesOutput,
  }));
// Input Schema
export const ListAppsV1DaemonSetForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/apps/v1/daemonsets" }),
  );
export type ListAppsV1DaemonSetForAllNamespacesInput =
  typeof ListAppsV1DaemonSetForAllNamespacesInput.Type;

// Output Schema
export const ListAppsV1DaemonSetForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListAppsV1DaemonSetForAllNamespacesOutput =
  typeof ListAppsV1DaemonSetForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind DaemonSet
 */
export const listAppsV1DaemonSetForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAppsV1DaemonSetForAllNamespacesInput,
    outputSchema: ListAppsV1DaemonSetForAllNamespacesOutput,
  }));
// Input Schema
export const ListAppsV1DeploymentForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/apps/v1/deployments" }),
  );
export type ListAppsV1DeploymentForAllNamespacesInput =
  typeof ListAppsV1DeploymentForAllNamespacesInput.Type;

// Output Schema
export const ListAppsV1DeploymentForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListAppsV1DeploymentForAllNamespacesOutput =
  typeof ListAppsV1DeploymentForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind Deployment
 */
export const listAppsV1DeploymentForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAppsV1DeploymentForAllNamespacesInput,
    outputSchema: ListAppsV1DeploymentForAllNamespacesOutput,
  }));
// Input Schema
export const ListAppsV1NamespacedControllerRevisionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/controllerrevisions",
    }),
  );
export type ListAppsV1NamespacedControllerRevisionInput =
  typeof ListAppsV1NamespacedControllerRevisionInput.Type;

// Output Schema
export const ListAppsV1NamespacedControllerRevisionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_apps_v1_ControllerRevisionSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListAppsV1NamespacedControllerRevisionOutput =
  typeof ListAppsV1NamespacedControllerRevisionOutput.Type;

// The operation
/**
 * list or watch objects of kind ControllerRevision
 */
export const listAppsV1NamespacedControllerRevision =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAppsV1NamespacedControllerRevisionInput,
    outputSchema: ListAppsV1NamespacedControllerRevisionOutput,
  }));
// Input Schema
export const ListAppsV1NamespacedDaemonSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/daemonsets",
    }),
  );
export type ListAppsV1NamespacedDaemonSetInput =
  typeof ListAppsV1NamespacedDaemonSetInput.Type;

// Output Schema
export const ListAppsV1NamespacedDaemonSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListAppsV1NamespacedDaemonSetOutput =
  typeof ListAppsV1NamespacedDaemonSetOutput.Type;

// The operation
/**
 * list or watch objects of kind DaemonSet
 */
export const listAppsV1NamespacedDaemonSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAppsV1NamespacedDaemonSetInput,
    outputSchema: ListAppsV1NamespacedDaemonSetOutput,
  }));
// Input Schema
export const ListAppsV1NamespacedDeploymentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/deployments",
    }),
  );
export type ListAppsV1NamespacedDeploymentInput =
  typeof ListAppsV1NamespacedDeploymentInput.Type;

// Output Schema
export const ListAppsV1NamespacedDeploymentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListAppsV1NamespacedDeploymentOutput =
  typeof ListAppsV1NamespacedDeploymentOutput.Type;

// The operation
/**
 * list or watch objects of kind Deployment
 */
export const listAppsV1NamespacedDeployment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAppsV1NamespacedDeploymentInput,
    outputSchema: ListAppsV1NamespacedDeploymentOutput,
  }));
// Input Schema
export const ListAppsV1NamespacedReplicaSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/replicasets",
    }),
  );
export type ListAppsV1NamespacedReplicaSetInput =
  typeof ListAppsV1NamespacedReplicaSetInput.Type;

// Output Schema
export const ListAppsV1NamespacedReplicaSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListAppsV1NamespacedReplicaSetOutput =
  typeof ListAppsV1NamespacedReplicaSetOutput.Type;

// The operation
/**
 * list or watch objects of kind ReplicaSet
 */
export const listAppsV1NamespacedReplicaSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAppsV1NamespacedReplicaSetInput,
    outputSchema: ListAppsV1NamespacedReplicaSetOutput,
  }));
// Input Schema
export const ListAppsV1NamespacedStatefulSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/statefulsets",
    }),
  );
export type ListAppsV1NamespacedStatefulSetInput =
  typeof ListAppsV1NamespacedStatefulSetInput.Type;

// Output Schema
export const ListAppsV1NamespacedStatefulSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListAppsV1NamespacedStatefulSetOutput =
  typeof ListAppsV1NamespacedStatefulSetOutput.Type;

// The operation
/**
 * list or watch objects of kind StatefulSet
 */
export const listAppsV1NamespacedStatefulSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAppsV1NamespacedStatefulSetInput,
    outputSchema: ListAppsV1NamespacedStatefulSetOutput,
  }));
// Input Schema
export const ListAppsV1ReplicaSetForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/apps/v1/replicasets" }),
  );
export type ListAppsV1ReplicaSetForAllNamespacesInput =
  typeof ListAppsV1ReplicaSetForAllNamespacesInput.Type;

// Output Schema
export const ListAppsV1ReplicaSetForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListAppsV1ReplicaSetForAllNamespacesOutput =
  typeof ListAppsV1ReplicaSetForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind ReplicaSet
 */
export const listAppsV1ReplicaSetForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAppsV1ReplicaSetForAllNamespacesInput,
    outputSchema: ListAppsV1ReplicaSetForAllNamespacesOutput,
  }));
// Input Schema
export const ListAppsV1StatefulSetForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/apps/v1/statefulsets" }),
  );
export type ListAppsV1StatefulSetForAllNamespacesInput =
  typeof ListAppsV1StatefulSetForAllNamespacesInput.Type;

// Output Schema
export const ListAppsV1StatefulSetForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListAppsV1StatefulSetForAllNamespacesOutput =
  typeof ListAppsV1StatefulSetForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind StatefulSet
 */
export const listAppsV1StatefulSetForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAppsV1StatefulSetForAllNamespacesInput,
    outputSchema: ListAppsV1StatefulSetForAllNamespacesOutput,
  }));
// Input Schema
export const PatchAppsV1NamespacedControllerRevisionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}",
    }),
  );
export type PatchAppsV1NamespacedControllerRevisionInput =
  typeof PatchAppsV1NamespacedControllerRevisionInput.Type;

// Output Schema
export const PatchAppsV1NamespacedControllerRevisionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    revision: Schema.Number,
  });
export type PatchAppsV1NamespacedControllerRevisionOutput =
  typeof PatchAppsV1NamespacedControllerRevisionOutput.Type;

// The operation
/**
 * partially update the specified ControllerRevision
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchAppsV1NamespacedControllerRevision =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAppsV1NamespacedControllerRevisionInput,
    outputSchema: PatchAppsV1NamespacedControllerRevisionOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchAppsV1NamespacedDaemonSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}",
    }),
  );
export type PatchAppsV1NamespacedDaemonSetInput =
  typeof PatchAppsV1NamespacedDaemonSetInput.Type;

// Output Schema
export const PatchAppsV1NamespacedDaemonSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetStatusSchema),
    ),
  });
export type PatchAppsV1NamespacedDaemonSetOutput =
  typeof PatchAppsV1NamespacedDaemonSetOutput.Type;

// The operation
/**
 * partially update the specified DaemonSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchAppsV1NamespacedDaemonSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAppsV1NamespacedDaemonSetInput,
    outputSchema: PatchAppsV1NamespacedDaemonSetOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchAppsV1NamespacedDaemonSetStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status",
    }),
  );
export type PatchAppsV1NamespacedDaemonSetStatusInput =
  typeof PatchAppsV1NamespacedDaemonSetStatusInput.Type;

// Output Schema
export const PatchAppsV1NamespacedDaemonSetStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetStatusSchema),
    ),
  });
export type PatchAppsV1NamespacedDaemonSetStatusOutput =
  typeof PatchAppsV1NamespacedDaemonSetStatusOutput.Type;

// The operation
/**
 * partially update status of the specified DaemonSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchAppsV1NamespacedDaemonSetStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAppsV1NamespacedDaemonSetStatusInput,
    outputSchema: PatchAppsV1NamespacedDaemonSetStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchAppsV1NamespacedDeploymentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/apps/v1/namespaces/{namespace}/deployments/{name}",
    }),
  );
export type PatchAppsV1NamespacedDeploymentInput =
  typeof PatchAppsV1NamespacedDeploymentInput.Type;

// Output Schema
export const PatchAppsV1NamespacedDeploymentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentStatusSchema),
    ),
  });
export type PatchAppsV1NamespacedDeploymentOutput =
  typeof PatchAppsV1NamespacedDeploymentOutput.Type;

// The operation
/**
 * partially update the specified Deployment
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchAppsV1NamespacedDeployment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAppsV1NamespacedDeploymentInput,
    outputSchema: PatchAppsV1NamespacedDeploymentOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchAppsV1NamespacedDeploymentScaleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale",
    }),
  );
export type PatchAppsV1NamespacedDeploymentScaleInput =
  typeof PatchAppsV1NamespacedDeploymentScaleInput.Type;

// Output Schema
export const PatchAppsV1NamespacedDeploymentScaleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleStatusSchema),
    ),
  });
export type PatchAppsV1NamespacedDeploymentScaleOutput =
  typeof PatchAppsV1NamespacedDeploymentScaleOutput.Type;

// The operation
/**
 * partially update scale of the specified Deployment
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchAppsV1NamespacedDeploymentScale =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAppsV1NamespacedDeploymentScaleInput,
    outputSchema: PatchAppsV1NamespacedDeploymentScaleOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchAppsV1NamespacedDeploymentStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status",
    }),
  );
export type PatchAppsV1NamespacedDeploymentStatusInput =
  typeof PatchAppsV1NamespacedDeploymentStatusInput.Type;

// Output Schema
export const PatchAppsV1NamespacedDeploymentStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentStatusSchema),
    ),
  });
export type PatchAppsV1NamespacedDeploymentStatusOutput =
  typeof PatchAppsV1NamespacedDeploymentStatusOutput.Type;

// The operation
/**
 * partially update status of the specified Deployment
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchAppsV1NamespacedDeploymentStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAppsV1NamespacedDeploymentStatusInput,
    outputSchema: PatchAppsV1NamespacedDeploymentStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchAppsV1NamespacedReplicaSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}",
    }),
  );
export type PatchAppsV1NamespacedReplicaSetInput =
  typeof PatchAppsV1NamespacedReplicaSetInput.Type;

// Output Schema
export const PatchAppsV1NamespacedReplicaSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetStatusSchema),
    ),
  });
export type PatchAppsV1NamespacedReplicaSetOutput =
  typeof PatchAppsV1NamespacedReplicaSetOutput.Type;

// The operation
/**
 * partially update the specified ReplicaSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchAppsV1NamespacedReplicaSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAppsV1NamespacedReplicaSetInput,
    outputSchema: PatchAppsV1NamespacedReplicaSetOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchAppsV1NamespacedReplicaSetScaleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale",
    }),
  );
export type PatchAppsV1NamespacedReplicaSetScaleInput =
  typeof PatchAppsV1NamespacedReplicaSetScaleInput.Type;

// Output Schema
export const PatchAppsV1NamespacedReplicaSetScaleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleStatusSchema),
    ),
  });
export type PatchAppsV1NamespacedReplicaSetScaleOutput =
  typeof PatchAppsV1NamespacedReplicaSetScaleOutput.Type;

// The operation
/**
 * partially update scale of the specified ReplicaSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchAppsV1NamespacedReplicaSetScale =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAppsV1NamespacedReplicaSetScaleInput,
    outputSchema: PatchAppsV1NamespacedReplicaSetScaleOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchAppsV1NamespacedReplicaSetStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status",
    }),
  );
export type PatchAppsV1NamespacedReplicaSetStatusInput =
  typeof PatchAppsV1NamespacedReplicaSetStatusInput.Type;

// Output Schema
export const PatchAppsV1NamespacedReplicaSetStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetStatusSchema),
    ),
  });
export type PatchAppsV1NamespacedReplicaSetStatusOutput =
  typeof PatchAppsV1NamespacedReplicaSetStatusOutput.Type;

// The operation
/**
 * partially update status of the specified ReplicaSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchAppsV1NamespacedReplicaSetStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAppsV1NamespacedReplicaSetStatusInput,
    outputSchema: PatchAppsV1NamespacedReplicaSetStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchAppsV1NamespacedStatefulSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}",
    }),
  );
export type PatchAppsV1NamespacedStatefulSetInput =
  typeof PatchAppsV1NamespacedStatefulSetInput.Type;

// Output Schema
export const PatchAppsV1NamespacedStatefulSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetStatusSchema),
    ),
  });
export type PatchAppsV1NamespacedStatefulSetOutput =
  typeof PatchAppsV1NamespacedStatefulSetOutput.Type;

// The operation
/**
 * partially update the specified StatefulSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchAppsV1NamespacedStatefulSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAppsV1NamespacedStatefulSetInput,
    outputSchema: PatchAppsV1NamespacedStatefulSetOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchAppsV1NamespacedStatefulSetScaleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale",
    }),
  );
export type PatchAppsV1NamespacedStatefulSetScaleInput =
  typeof PatchAppsV1NamespacedStatefulSetScaleInput.Type;

// Output Schema
export const PatchAppsV1NamespacedStatefulSetScaleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleStatusSchema),
    ),
  });
export type PatchAppsV1NamespacedStatefulSetScaleOutput =
  typeof PatchAppsV1NamespacedStatefulSetScaleOutput.Type;

// The operation
/**
 * partially update scale of the specified StatefulSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchAppsV1NamespacedStatefulSetScale =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAppsV1NamespacedStatefulSetScaleInput,
    outputSchema: PatchAppsV1NamespacedStatefulSetScaleOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchAppsV1NamespacedStatefulSetStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status",
    }),
  );
export type PatchAppsV1NamespacedStatefulSetStatusInput =
  typeof PatchAppsV1NamespacedStatefulSetStatusInput.Type;

// Output Schema
export const PatchAppsV1NamespacedStatefulSetStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetStatusSchema),
    ),
  });
export type PatchAppsV1NamespacedStatefulSetStatusOutput =
  typeof PatchAppsV1NamespacedStatefulSetStatusOutput.Type;

// The operation
/**
 * partially update status of the specified StatefulSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchAppsV1NamespacedStatefulSetStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAppsV1NamespacedStatefulSetStatusInput,
    outputSchema: PatchAppsV1NamespacedStatefulSetStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReadAppsV1NamespacedControllerRevisionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}",
    }),
  );
export type ReadAppsV1NamespacedControllerRevisionInput =
  typeof ReadAppsV1NamespacedControllerRevisionInput.Type;

// Output Schema
export const ReadAppsV1NamespacedControllerRevisionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    revision: Schema.Number,
  });
export type ReadAppsV1NamespacedControllerRevisionOutput =
  typeof ReadAppsV1NamespacedControllerRevisionOutput.Type;

// The operation
/**
 * read the specified ControllerRevision
 */
export const readAppsV1NamespacedControllerRevision =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAppsV1NamespacedControllerRevisionInput,
    outputSchema: ReadAppsV1NamespacedControllerRevisionOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadAppsV1NamespacedDaemonSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}",
    }),
  );
export type ReadAppsV1NamespacedDaemonSetInput =
  typeof ReadAppsV1NamespacedDaemonSetInput.Type;

// Output Schema
export const ReadAppsV1NamespacedDaemonSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetStatusSchema),
    ),
  });
export type ReadAppsV1NamespacedDaemonSetOutput =
  typeof ReadAppsV1NamespacedDaemonSetOutput.Type;

// The operation
/**
 * read the specified DaemonSet
 */
export const readAppsV1NamespacedDaemonSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAppsV1NamespacedDaemonSetInput,
    outputSchema: ReadAppsV1NamespacedDaemonSetOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadAppsV1NamespacedDaemonSetStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status",
    }),
  );
export type ReadAppsV1NamespacedDaemonSetStatusInput =
  typeof ReadAppsV1NamespacedDaemonSetStatusInput.Type;

// Output Schema
export const ReadAppsV1NamespacedDaemonSetStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetStatusSchema),
    ),
  });
export type ReadAppsV1NamespacedDaemonSetStatusOutput =
  typeof ReadAppsV1NamespacedDaemonSetStatusOutput.Type;

// The operation
/**
 * read status of the specified DaemonSet
 */
export const readAppsV1NamespacedDaemonSetStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAppsV1NamespacedDaemonSetStatusInput,
    outputSchema: ReadAppsV1NamespacedDaemonSetStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadAppsV1NamespacedDeploymentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/deployments/{name}",
    }),
  );
export type ReadAppsV1NamespacedDeploymentInput =
  typeof ReadAppsV1NamespacedDeploymentInput.Type;

// Output Schema
export const ReadAppsV1NamespacedDeploymentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentStatusSchema),
    ),
  });
export type ReadAppsV1NamespacedDeploymentOutput =
  typeof ReadAppsV1NamespacedDeploymentOutput.Type;

// The operation
/**
 * read the specified Deployment
 */
export const readAppsV1NamespacedDeployment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAppsV1NamespacedDeploymentInput,
    outputSchema: ReadAppsV1NamespacedDeploymentOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadAppsV1NamespacedDeploymentScaleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale",
    }),
  );
export type ReadAppsV1NamespacedDeploymentScaleInput =
  typeof ReadAppsV1NamespacedDeploymentScaleInput.Type;

// Output Schema
export const ReadAppsV1NamespacedDeploymentScaleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleStatusSchema),
    ),
  });
export type ReadAppsV1NamespacedDeploymentScaleOutput =
  typeof ReadAppsV1NamespacedDeploymentScaleOutput.Type;

// The operation
/**
 * read scale of the specified Deployment
 */
export const readAppsV1NamespacedDeploymentScale =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAppsV1NamespacedDeploymentScaleInput,
    outputSchema: ReadAppsV1NamespacedDeploymentScaleOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadAppsV1NamespacedDeploymentStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status",
    }),
  );
export type ReadAppsV1NamespacedDeploymentStatusInput =
  typeof ReadAppsV1NamespacedDeploymentStatusInput.Type;

// Output Schema
export const ReadAppsV1NamespacedDeploymentStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentStatusSchema),
    ),
  });
export type ReadAppsV1NamespacedDeploymentStatusOutput =
  typeof ReadAppsV1NamespacedDeploymentStatusOutput.Type;

// The operation
/**
 * read status of the specified Deployment
 */
export const readAppsV1NamespacedDeploymentStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAppsV1NamespacedDeploymentStatusInput,
    outputSchema: ReadAppsV1NamespacedDeploymentStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadAppsV1NamespacedReplicaSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}",
    }),
  );
export type ReadAppsV1NamespacedReplicaSetInput =
  typeof ReadAppsV1NamespacedReplicaSetInput.Type;

// Output Schema
export const ReadAppsV1NamespacedReplicaSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetStatusSchema),
    ),
  });
export type ReadAppsV1NamespacedReplicaSetOutput =
  typeof ReadAppsV1NamespacedReplicaSetOutput.Type;

// The operation
/**
 * read the specified ReplicaSet
 */
export const readAppsV1NamespacedReplicaSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAppsV1NamespacedReplicaSetInput,
    outputSchema: ReadAppsV1NamespacedReplicaSetOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadAppsV1NamespacedReplicaSetScaleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale",
    }),
  );
export type ReadAppsV1NamespacedReplicaSetScaleInput =
  typeof ReadAppsV1NamespacedReplicaSetScaleInput.Type;

// Output Schema
export const ReadAppsV1NamespacedReplicaSetScaleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleStatusSchema),
    ),
  });
export type ReadAppsV1NamespacedReplicaSetScaleOutput =
  typeof ReadAppsV1NamespacedReplicaSetScaleOutput.Type;

// The operation
/**
 * read scale of the specified ReplicaSet
 */
export const readAppsV1NamespacedReplicaSetScale =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAppsV1NamespacedReplicaSetScaleInput,
    outputSchema: ReadAppsV1NamespacedReplicaSetScaleOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadAppsV1NamespacedReplicaSetStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status",
    }),
  );
export type ReadAppsV1NamespacedReplicaSetStatusInput =
  typeof ReadAppsV1NamespacedReplicaSetStatusInput.Type;

// Output Schema
export const ReadAppsV1NamespacedReplicaSetStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetStatusSchema),
    ),
  });
export type ReadAppsV1NamespacedReplicaSetStatusOutput =
  typeof ReadAppsV1NamespacedReplicaSetStatusOutput.Type;

// The operation
/**
 * read status of the specified ReplicaSet
 */
export const readAppsV1NamespacedReplicaSetStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAppsV1NamespacedReplicaSetStatusInput,
    outputSchema: ReadAppsV1NamespacedReplicaSetStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadAppsV1NamespacedStatefulSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}",
    }),
  );
export type ReadAppsV1NamespacedStatefulSetInput =
  typeof ReadAppsV1NamespacedStatefulSetInput.Type;

// Output Schema
export const ReadAppsV1NamespacedStatefulSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetStatusSchema),
    ),
  });
export type ReadAppsV1NamespacedStatefulSetOutput =
  typeof ReadAppsV1NamespacedStatefulSetOutput.Type;

// The operation
/**
 * read the specified StatefulSet
 */
export const readAppsV1NamespacedStatefulSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAppsV1NamespacedStatefulSetInput,
    outputSchema: ReadAppsV1NamespacedStatefulSetOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadAppsV1NamespacedStatefulSetScaleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale",
    }),
  );
export type ReadAppsV1NamespacedStatefulSetScaleInput =
  typeof ReadAppsV1NamespacedStatefulSetScaleInput.Type;

// Output Schema
export const ReadAppsV1NamespacedStatefulSetScaleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleStatusSchema),
    ),
  });
export type ReadAppsV1NamespacedStatefulSetScaleOutput =
  typeof ReadAppsV1NamespacedStatefulSetScaleOutput.Type;

// The operation
/**
 * read scale of the specified StatefulSet
 */
export const readAppsV1NamespacedStatefulSetScale =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAppsV1NamespacedStatefulSetScaleInput,
    outputSchema: ReadAppsV1NamespacedStatefulSetScaleOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadAppsV1NamespacedStatefulSetStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status",
    }),
  );
export type ReadAppsV1NamespacedStatefulSetStatusInput =
  typeof ReadAppsV1NamespacedStatefulSetStatusInput.Type;

// Output Schema
export const ReadAppsV1NamespacedStatefulSetStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetStatusSchema),
    ),
  });
export type ReadAppsV1NamespacedStatefulSetStatusOutput =
  typeof ReadAppsV1NamespacedStatefulSetStatusOutput.Type;

// The operation
/**
 * read status of the specified StatefulSet
 */
export const readAppsV1NamespacedStatefulSetStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAppsV1NamespacedStatefulSetStatusInput,
    outputSchema: ReadAppsV1NamespacedStatefulSetStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReplaceAppsV1NamespacedControllerRevisionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    revision: Schema.Number,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}",
    }),
  );
export type ReplaceAppsV1NamespacedControllerRevisionInput =
  typeof ReplaceAppsV1NamespacedControllerRevisionInput.Type;

// Output Schema
export const ReplaceAppsV1NamespacedControllerRevisionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    revision: Schema.Number,
  });
export type ReplaceAppsV1NamespacedControllerRevisionOutput =
  typeof ReplaceAppsV1NamespacedControllerRevisionOutput.Type;

// The operation
/**
 * replace the specified ControllerRevision
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAppsV1NamespacedControllerRevision =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceAppsV1NamespacedControllerRevisionInput,
    outputSchema: ReplaceAppsV1NamespacedControllerRevisionOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceAppsV1NamespacedDaemonSetInput =
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
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}",
    }),
  );
export type ReplaceAppsV1NamespacedDaemonSetInput =
  typeof ReplaceAppsV1NamespacedDaemonSetInput.Type;

// Output Schema
export const ReplaceAppsV1NamespacedDaemonSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetStatusSchema),
    ),
  });
export type ReplaceAppsV1NamespacedDaemonSetOutput =
  typeof ReplaceAppsV1NamespacedDaemonSetOutput.Type;

// The operation
/**
 * replace the specified DaemonSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAppsV1NamespacedDaemonSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceAppsV1NamespacedDaemonSetInput,
    outputSchema: ReplaceAppsV1NamespacedDaemonSetOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceAppsV1NamespacedDaemonSetStatusInput =
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
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status",
    }),
  );
export type ReplaceAppsV1NamespacedDaemonSetStatusInput =
  typeof ReplaceAppsV1NamespacedDaemonSetStatusInput.Type;

// Output Schema
export const ReplaceAppsV1NamespacedDaemonSetStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetStatusSchema),
    ),
  });
export type ReplaceAppsV1NamespacedDaemonSetStatusOutput =
  typeof ReplaceAppsV1NamespacedDaemonSetStatusOutput.Type;

// The operation
/**
 * replace status of the specified DaemonSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAppsV1NamespacedDaemonSetStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceAppsV1NamespacedDaemonSetStatusInput,
    outputSchema: ReplaceAppsV1NamespacedDaemonSetStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceAppsV1NamespacedDeploymentInput =
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
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/apps/v1/namespaces/{namespace}/deployments/{name}",
    }),
  );
export type ReplaceAppsV1NamespacedDeploymentInput =
  typeof ReplaceAppsV1NamespacedDeploymentInput.Type;

// Output Schema
export const ReplaceAppsV1NamespacedDeploymentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentStatusSchema),
    ),
  });
export type ReplaceAppsV1NamespacedDeploymentOutput =
  typeof ReplaceAppsV1NamespacedDeploymentOutput.Type;

// The operation
/**
 * replace the specified Deployment
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAppsV1NamespacedDeployment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceAppsV1NamespacedDeploymentInput,
    outputSchema: ReplaceAppsV1NamespacedDeploymentOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceAppsV1NamespacedDeploymentScaleInput =
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
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale",
    }),
  );
export type ReplaceAppsV1NamespacedDeploymentScaleInput =
  typeof ReplaceAppsV1NamespacedDeploymentScaleInput.Type;

// Output Schema
export const ReplaceAppsV1NamespacedDeploymentScaleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleStatusSchema),
    ),
  });
export type ReplaceAppsV1NamespacedDeploymentScaleOutput =
  typeof ReplaceAppsV1NamespacedDeploymentScaleOutput.Type;

// The operation
/**
 * replace scale of the specified Deployment
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAppsV1NamespacedDeploymentScale =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceAppsV1NamespacedDeploymentScaleInput,
    outputSchema: ReplaceAppsV1NamespacedDeploymentScaleOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceAppsV1NamespacedDeploymentStatusInput =
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
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status",
    }),
  );
export type ReplaceAppsV1NamespacedDeploymentStatusInput =
  typeof ReplaceAppsV1NamespacedDeploymentStatusInput.Type;

// Output Schema
export const ReplaceAppsV1NamespacedDeploymentStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentStatusSchema),
    ),
  });
export type ReplaceAppsV1NamespacedDeploymentStatusOutput =
  typeof ReplaceAppsV1NamespacedDeploymentStatusOutput.Type;

// The operation
/**
 * replace status of the specified Deployment
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAppsV1NamespacedDeploymentStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceAppsV1NamespacedDeploymentStatusInput,
    outputSchema: ReplaceAppsV1NamespacedDeploymentStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceAppsV1NamespacedReplicaSetInput =
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
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}",
    }),
  );
export type ReplaceAppsV1NamespacedReplicaSetInput =
  typeof ReplaceAppsV1NamespacedReplicaSetInput.Type;

// Output Schema
export const ReplaceAppsV1NamespacedReplicaSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetStatusSchema),
    ),
  });
export type ReplaceAppsV1NamespacedReplicaSetOutput =
  typeof ReplaceAppsV1NamespacedReplicaSetOutput.Type;

// The operation
/**
 * replace the specified ReplicaSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAppsV1NamespacedReplicaSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceAppsV1NamespacedReplicaSetInput,
    outputSchema: ReplaceAppsV1NamespacedReplicaSetOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceAppsV1NamespacedReplicaSetScaleInput =
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
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale",
    }),
  );
export type ReplaceAppsV1NamespacedReplicaSetScaleInput =
  typeof ReplaceAppsV1NamespacedReplicaSetScaleInput.Type;

// Output Schema
export const ReplaceAppsV1NamespacedReplicaSetScaleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleStatusSchema),
    ),
  });
export type ReplaceAppsV1NamespacedReplicaSetScaleOutput =
  typeof ReplaceAppsV1NamespacedReplicaSetScaleOutput.Type;

// The operation
/**
 * replace scale of the specified ReplicaSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAppsV1NamespacedReplicaSetScale =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceAppsV1NamespacedReplicaSetScaleInput,
    outputSchema: ReplaceAppsV1NamespacedReplicaSetScaleOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceAppsV1NamespacedReplicaSetStatusInput =
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
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status",
    }),
  );
export type ReplaceAppsV1NamespacedReplicaSetStatusInput =
  typeof ReplaceAppsV1NamespacedReplicaSetStatusInput.Type;

// Output Schema
export const ReplaceAppsV1NamespacedReplicaSetStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetStatusSchema),
    ),
  });
export type ReplaceAppsV1NamespacedReplicaSetStatusOutput =
  typeof ReplaceAppsV1NamespacedReplicaSetStatusOutput.Type;

// The operation
/**
 * replace status of the specified ReplicaSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAppsV1NamespacedReplicaSetStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceAppsV1NamespacedReplicaSetStatusInput,
    outputSchema: ReplaceAppsV1NamespacedReplicaSetStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceAppsV1NamespacedStatefulSetInput =
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
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}",
    }),
  );
export type ReplaceAppsV1NamespacedStatefulSetInput =
  typeof ReplaceAppsV1NamespacedStatefulSetInput.Type;

// Output Schema
export const ReplaceAppsV1NamespacedStatefulSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetStatusSchema),
    ),
  });
export type ReplaceAppsV1NamespacedStatefulSetOutput =
  typeof ReplaceAppsV1NamespacedStatefulSetOutput.Type;

// The operation
/**
 * replace the specified StatefulSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAppsV1NamespacedStatefulSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceAppsV1NamespacedStatefulSetInput,
    outputSchema: ReplaceAppsV1NamespacedStatefulSetOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceAppsV1NamespacedStatefulSetScaleInput =
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
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale",
    }),
  );
export type ReplaceAppsV1NamespacedStatefulSetScaleInput =
  typeof ReplaceAppsV1NamespacedStatefulSetScaleInput.Type;

// Output Schema
export const ReplaceAppsV1NamespacedStatefulSetScaleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v1_ScaleStatusSchema),
    ),
  });
export type ReplaceAppsV1NamespacedStatefulSetScaleOutput =
  typeof ReplaceAppsV1NamespacedStatefulSetScaleOutput.Type;

// The operation
/**
 * replace scale of the specified StatefulSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAppsV1NamespacedStatefulSetScale =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceAppsV1NamespacedStatefulSetScaleInput,
    outputSchema: ReplaceAppsV1NamespacedStatefulSetScaleOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceAppsV1NamespacedStatefulSetStatusInput =
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
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status",
    }),
  );
export type ReplaceAppsV1NamespacedStatefulSetStatusInput =
  typeof ReplaceAppsV1NamespacedStatefulSetStatusInput.Type;

// Output Schema
export const ReplaceAppsV1NamespacedStatefulSetStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetStatusSchema),
    ),
  });
export type ReplaceAppsV1NamespacedStatefulSetStatusOutput =
  typeof ReplaceAppsV1NamespacedStatefulSetStatusOutput.Type;

// The operation
/**
 * replace status of the specified StatefulSet
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAppsV1NamespacedStatefulSetStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceAppsV1NamespacedStatefulSetStatusInput,
    outputSchema: ReplaceAppsV1NamespacedStatefulSetStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const WatchAppsV1ControllerRevisionListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/apps/v1/watch/controllerrevisions" }),
  );
export type WatchAppsV1ControllerRevisionListForAllNamespacesInput =
  typeof WatchAppsV1ControllerRevisionListForAllNamespacesInput.Type;

// Output Schema
export const WatchAppsV1ControllerRevisionListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchAppsV1ControllerRevisionListForAllNamespacesOutput =
  typeof WatchAppsV1ControllerRevisionListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchAppsV1ControllerRevisionListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAppsV1ControllerRevisionListForAllNamespacesInput,
    outputSchema: WatchAppsV1ControllerRevisionListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchAppsV1DaemonSetListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/apps/v1/watch/daemonsets" }),
  );
export type WatchAppsV1DaemonSetListForAllNamespacesInput =
  typeof WatchAppsV1DaemonSetListForAllNamespacesInput.Type;

// Output Schema
export const WatchAppsV1DaemonSetListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchAppsV1DaemonSetListForAllNamespacesOutput =
  typeof WatchAppsV1DaemonSetListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of DaemonSet. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchAppsV1DaemonSetListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAppsV1DaemonSetListForAllNamespacesInput,
    outputSchema: WatchAppsV1DaemonSetListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchAppsV1DeploymentListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/apps/v1/watch/deployments" }),
  );
export type WatchAppsV1DeploymentListForAllNamespacesInput =
  typeof WatchAppsV1DeploymentListForAllNamespacesInput.Type;

// Output Schema
export const WatchAppsV1DeploymentListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchAppsV1DeploymentListForAllNamespacesOutput =
  typeof WatchAppsV1DeploymentListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchAppsV1DeploymentListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAppsV1DeploymentListForAllNamespacesInput,
    outputSchema: WatchAppsV1DeploymentListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchAppsV1NamespacedControllerRevisionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/watch/namespaces/{namespace}/controllerrevisions/{name}",
    }),
  );
export type WatchAppsV1NamespacedControllerRevisionInput =
  typeof WatchAppsV1NamespacedControllerRevisionInput.Type;

// Output Schema
export const WatchAppsV1NamespacedControllerRevisionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchAppsV1NamespacedControllerRevisionOutput =
  typeof WatchAppsV1NamespacedControllerRevisionOutput.Type;

// The operation
/**
 * watch changes to an object of kind ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchAppsV1NamespacedControllerRevision =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAppsV1NamespacedControllerRevisionInput,
    outputSchema: WatchAppsV1NamespacedControllerRevisionOutput,
  }));
// Input Schema
export const WatchAppsV1NamespacedControllerRevisionListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/watch/namespaces/{namespace}/controllerrevisions",
    }),
  );
export type WatchAppsV1NamespacedControllerRevisionListInput =
  typeof WatchAppsV1NamespacedControllerRevisionListInput.Type;

// Output Schema
export const WatchAppsV1NamespacedControllerRevisionListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchAppsV1NamespacedControllerRevisionListOutput =
  typeof WatchAppsV1NamespacedControllerRevisionListOutput.Type;

// The operation
/**
 * watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchAppsV1NamespacedControllerRevisionList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAppsV1NamespacedControllerRevisionListInput,
    outputSchema: WatchAppsV1NamespacedControllerRevisionListOutput,
  }));
// Input Schema
export const WatchAppsV1NamespacedDaemonSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/watch/namespaces/{namespace}/daemonsets/{name}",
    }),
  );
export type WatchAppsV1NamespacedDaemonSetInput =
  typeof WatchAppsV1NamespacedDaemonSetInput.Type;

// Output Schema
export const WatchAppsV1NamespacedDaemonSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchAppsV1NamespacedDaemonSetOutput =
  typeof WatchAppsV1NamespacedDaemonSetOutput.Type;

// The operation
/**
 * watch changes to an object of kind DaemonSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchAppsV1NamespacedDaemonSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAppsV1NamespacedDaemonSetInput,
    outputSchema: WatchAppsV1NamespacedDaemonSetOutput,
  }));
// Input Schema
export const WatchAppsV1NamespacedDaemonSetListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/watch/namespaces/{namespace}/daemonsets",
    }),
  );
export type WatchAppsV1NamespacedDaemonSetListInput =
  typeof WatchAppsV1NamespacedDaemonSetListInput.Type;

// Output Schema
export const WatchAppsV1NamespacedDaemonSetListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchAppsV1NamespacedDaemonSetListOutput =
  typeof WatchAppsV1NamespacedDaemonSetListOutput.Type;

// The operation
/**
 * watch individual changes to a list of DaemonSet. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchAppsV1NamespacedDaemonSetList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAppsV1NamespacedDaemonSetListInput,
    outputSchema: WatchAppsV1NamespacedDaemonSetListOutput,
  }));
// Input Schema
export const WatchAppsV1NamespacedDeploymentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/watch/namespaces/{namespace}/deployments/{name}",
    }),
  );
export type WatchAppsV1NamespacedDeploymentInput =
  typeof WatchAppsV1NamespacedDeploymentInput.Type;

// Output Schema
export const WatchAppsV1NamespacedDeploymentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchAppsV1NamespacedDeploymentOutput =
  typeof WatchAppsV1NamespacedDeploymentOutput.Type;

// The operation
/**
 * watch changes to an object of kind Deployment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchAppsV1NamespacedDeployment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAppsV1NamespacedDeploymentInput,
    outputSchema: WatchAppsV1NamespacedDeploymentOutput,
  }));
// Input Schema
export const WatchAppsV1NamespacedDeploymentListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/watch/namespaces/{namespace}/deployments",
    }),
  );
export type WatchAppsV1NamespacedDeploymentListInput =
  typeof WatchAppsV1NamespacedDeploymentListInput.Type;

// Output Schema
export const WatchAppsV1NamespacedDeploymentListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchAppsV1NamespacedDeploymentListOutput =
  typeof WatchAppsV1NamespacedDeploymentListOutput.Type;

// The operation
/**
 * watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchAppsV1NamespacedDeploymentList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAppsV1NamespacedDeploymentListInput,
    outputSchema: WatchAppsV1NamespacedDeploymentListOutput,
  }));
// Input Schema
export const WatchAppsV1NamespacedReplicaSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/watch/namespaces/{namespace}/replicasets/{name}",
    }),
  );
export type WatchAppsV1NamespacedReplicaSetInput =
  typeof WatchAppsV1NamespacedReplicaSetInput.Type;

// Output Schema
export const WatchAppsV1NamespacedReplicaSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchAppsV1NamespacedReplicaSetOutput =
  typeof WatchAppsV1NamespacedReplicaSetOutput.Type;

// The operation
/**
 * watch changes to an object of kind ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchAppsV1NamespacedReplicaSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAppsV1NamespacedReplicaSetInput,
    outputSchema: WatchAppsV1NamespacedReplicaSetOutput,
  }));
// Input Schema
export const WatchAppsV1NamespacedReplicaSetListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/watch/namespaces/{namespace}/replicasets",
    }),
  );
export type WatchAppsV1NamespacedReplicaSetListInput =
  typeof WatchAppsV1NamespacedReplicaSetListInput.Type;

// Output Schema
export const WatchAppsV1NamespacedReplicaSetListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchAppsV1NamespacedReplicaSetListOutput =
  typeof WatchAppsV1NamespacedReplicaSetListOutput.Type;

// The operation
/**
 * watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchAppsV1NamespacedReplicaSetList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAppsV1NamespacedReplicaSetListInput,
    outputSchema: WatchAppsV1NamespacedReplicaSetListOutput,
  }));
// Input Schema
export const WatchAppsV1NamespacedStatefulSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/watch/namespaces/{namespace}/statefulsets/{name}",
    }),
  );
export type WatchAppsV1NamespacedStatefulSetInput =
  typeof WatchAppsV1NamespacedStatefulSetInput.Type;

// Output Schema
export const WatchAppsV1NamespacedStatefulSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchAppsV1NamespacedStatefulSetOutput =
  typeof WatchAppsV1NamespacedStatefulSetOutput.Type;

// The operation
/**
 * watch changes to an object of kind StatefulSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchAppsV1NamespacedStatefulSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAppsV1NamespacedStatefulSetInput,
    outputSchema: WatchAppsV1NamespacedStatefulSetOutput,
  }));
// Input Schema
export const WatchAppsV1NamespacedStatefulSetListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apps/v1/watch/namespaces/{namespace}/statefulsets",
    }),
  );
export type WatchAppsV1NamespacedStatefulSetListInput =
  typeof WatchAppsV1NamespacedStatefulSetListInput.Type;

// Output Schema
export const WatchAppsV1NamespacedStatefulSetListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchAppsV1NamespacedStatefulSetListOutput =
  typeof WatchAppsV1NamespacedStatefulSetListOutput.Type;

// The operation
/**
 * watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchAppsV1NamespacedStatefulSetList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAppsV1NamespacedStatefulSetListInput,
    outputSchema: WatchAppsV1NamespacedStatefulSetListOutput,
  }));
// Input Schema
export const WatchAppsV1ReplicaSetListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/apps/v1/watch/replicasets" }),
  );
export type WatchAppsV1ReplicaSetListForAllNamespacesInput =
  typeof WatchAppsV1ReplicaSetListForAllNamespacesInput.Type;

// Output Schema
export const WatchAppsV1ReplicaSetListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchAppsV1ReplicaSetListForAllNamespacesOutput =
  typeof WatchAppsV1ReplicaSetListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchAppsV1ReplicaSetListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAppsV1ReplicaSetListForAllNamespacesInput,
    outputSchema: WatchAppsV1ReplicaSetListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchAppsV1StatefulSetListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/apps/v1/watch/statefulsets" }),
  );
export type WatchAppsV1StatefulSetListForAllNamespacesInput =
  typeof WatchAppsV1StatefulSetListForAllNamespacesInput.Type;

// Output Schema
export const WatchAppsV1StatefulSetListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchAppsV1StatefulSetListForAllNamespacesOutput =
  typeof WatchAppsV1StatefulSetListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchAppsV1StatefulSetListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAppsV1StatefulSetListForAllNamespacesInput,
    outputSchema: WatchAppsV1StatefulSetListForAllNamespacesOutput,
  }));
