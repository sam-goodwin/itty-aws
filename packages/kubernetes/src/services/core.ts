/**
 * Kubernetes Core API
 *
 * Generated from the Kubernetes OpenAPI spec.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import { Conflict, NotFound, UnprocessableEntity } from "../errors.ts";
import {
  io_k8s_api_authentication_v1_TokenRequestSpecSchema,
  io_k8s_api_authentication_v1_TokenRequestStatusSchema,
  io_k8s_api_autoscaling_v1_ScaleSpecSchema,
  io_k8s_api_autoscaling_v1_ScaleStatusSchema,
  io_k8s_api_core_v1_ComponentConditionSchema,
  io_k8s_api_core_v1_ComponentStatusSchema,
  io_k8s_api_core_v1_ConfigMapSchema,
  io_k8s_api_core_v1_EndpointSubsetSchema,
  io_k8s_api_core_v1_EndpointsSchema,
  io_k8s_api_core_v1_EventSchema,
  io_k8s_api_core_v1_EventSeriesSchema,
  io_k8s_api_core_v1_EventSourceSchema,
  io_k8s_api_core_v1_LimitRangeSchema,
  io_k8s_api_core_v1_LimitRangeSpecSchema,
  io_k8s_api_core_v1_LocalObjectReferenceSchema,
  io_k8s_api_core_v1_NamespaceSchema,
  io_k8s_api_core_v1_NamespaceSpecSchema,
  io_k8s_api_core_v1_NamespaceStatusSchema,
  io_k8s_api_core_v1_NodeSchema,
  io_k8s_api_core_v1_NodeSpecSchema,
  io_k8s_api_core_v1_NodeStatusSchema,
  io_k8s_api_core_v1_ObjectReferenceSchema,
  io_k8s_api_core_v1_PersistentVolumeClaimSchema,
  io_k8s_api_core_v1_PersistentVolumeClaimSpecSchema,
  io_k8s_api_core_v1_PersistentVolumeClaimStatusSchema,
  io_k8s_api_core_v1_PersistentVolumeSchema,
  io_k8s_api_core_v1_PersistentVolumeSpecSchema,
  io_k8s_api_core_v1_PersistentVolumeStatusSchema,
  io_k8s_api_core_v1_PodSchema,
  io_k8s_api_core_v1_PodSpecSchema,
  io_k8s_api_core_v1_PodStatusSchema,
  io_k8s_api_core_v1_PodTemplateSchema,
  io_k8s_api_core_v1_PodTemplateSpecSchema,
  io_k8s_api_core_v1_ReplicationControllerSchema,
  io_k8s_api_core_v1_ReplicationControllerSpecSchema,
  io_k8s_api_core_v1_ReplicationControllerStatusSchema,
  io_k8s_api_core_v1_ResourceQuotaSchema,
  io_k8s_api_core_v1_ResourceQuotaSpecSchema,
  io_k8s_api_core_v1_ResourceQuotaStatusSchema,
  io_k8s_api_core_v1_SecretSchema,
  io_k8s_api_core_v1_ServiceAccountSchema,
  io_k8s_api_core_v1_ServiceSchema,
  io_k8s_api_core_v1_ServiceSpecSchema,
  io_k8s_api_core_v1_ServiceStatusSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptionsSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDRSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetailsSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema,
  io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
} from "./_schemas.ts";

// Input Schema
export const ConnectCoreV1DeleteNamespacedPodProxyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/proxy",
    }),
  );
export type ConnectCoreV1DeleteNamespacedPodProxyInput =
  typeof ConnectCoreV1DeleteNamespacedPodProxyInput.Type;

// Output Schema
export const ConnectCoreV1DeleteNamespacedPodProxyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1DeleteNamespacedPodProxyOutput =
  typeof ConnectCoreV1DeleteNamespacedPodProxyOutput.Type;

// The operation
/**
 * connect DELETE requests to proxy of Pod
 */
export const connectCoreV1DeleteNamespacedPodProxy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1DeleteNamespacedPodProxyInput,
    outputSchema: ConnectCoreV1DeleteNamespacedPodProxyOutput,
  }));
// Input Schema
export const ConnectCoreV1DeleteNamespacedPodProxyWithPathInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}",
    }),
  );
export type ConnectCoreV1DeleteNamespacedPodProxyWithPathInput =
  typeof ConnectCoreV1DeleteNamespacedPodProxyWithPathInput.Type;

// Output Schema
export const ConnectCoreV1DeleteNamespacedPodProxyWithPathOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1DeleteNamespacedPodProxyWithPathOutput =
  typeof ConnectCoreV1DeleteNamespacedPodProxyWithPathOutput.Type;

// The operation
/**
 * connect DELETE requests to proxy of Pod
 */
export const connectCoreV1DeleteNamespacedPodProxyWithPath =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1DeleteNamespacedPodProxyWithPathInput,
    outputSchema: ConnectCoreV1DeleteNamespacedPodProxyWithPathOutput,
  }));
// Input Schema
export const ConnectCoreV1DeleteNamespacedServiceProxyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/services/{name}/proxy",
    }),
  );
export type ConnectCoreV1DeleteNamespacedServiceProxyInput =
  typeof ConnectCoreV1DeleteNamespacedServiceProxyInput.Type;

// Output Schema
export const ConnectCoreV1DeleteNamespacedServiceProxyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1DeleteNamespacedServiceProxyOutput =
  typeof ConnectCoreV1DeleteNamespacedServiceProxyOutput.Type;

// The operation
/**
 * connect DELETE requests to proxy of Service
 */
export const connectCoreV1DeleteNamespacedServiceProxy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1DeleteNamespacedServiceProxyInput,
    outputSchema: ConnectCoreV1DeleteNamespacedServiceProxyOutput,
  }));
// Input Schema
export const ConnectCoreV1DeleteNamespacedServiceProxyWithPathInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}",
    }),
  );
export type ConnectCoreV1DeleteNamespacedServiceProxyWithPathInput =
  typeof ConnectCoreV1DeleteNamespacedServiceProxyWithPathInput.Type;

// Output Schema
export const ConnectCoreV1DeleteNamespacedServiceProxyWithPathOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1DeleteNamespacedServiceProxyWithPathOutput =
  typeof ConnectCoreV1DeleteNamespacedServiceProxyWithPathOutput.Type;

// The operation
/**
 * connect DELETE requests to proxy of Service
 */
export const connectCoreV1DeleteNamespacedServiceProxyWithPath =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1DeleteNamespacedServiceProxyWithPathInput,
    outputSchema: ConnectCoreV1DeleteNamespacedServiceProxyWithPathOutput,
  }));
// Input Schema
export const ConnectCoreV1DeleteNodeProxyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "DELETE", path: "/api/v1/nodes/{name}/proxy" }),
  );
export type ConnectCoreV1DeleteNodeProxyInput =
  typeof ConnectCoreV1DeleteNodeProxyInput.Type;

// Output Schema
export const ConnectCoreV1DeleteNodeProxyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1DeleteNodeProxyOutput =
  typeof ConnectCoreV1DeleteNodeProxyOutput.Type;

// The operation
/**
 * connect DELETE requests to proxy of Node
 */
export const connectCoreV1DeleteNodeProxy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1DeleteNodeProxyInput,
    outputSchema: ConnectCoreV1DeleteNodeProxyOutput,
  }));
// Input Schema
export const ConnectCoreV1DeleteNodeProxyWithPathInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "DELETE", path: "/api/v1/nodes/{name}/proxy/{path}" }),
  );
export type ConnectCoreV1DeleteNodeProxyWithPathInput =
  typeof ConnectCoreV1DeleteNodeProxyWithPathInput.Type;

// Output Schema
export const ConnectCoreV1DeleteNodeProxyWithPathOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1DeleteNodeProxyWithPathOutput =
  typeof ConnectCoreV1DeleteNodeProxyWithPathOutput.Type;

// The operation
/**
 * connect DELETE requests to proxy of Node
 */
export const connectCoreV1DeleteNodeProxyWithPath =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1DeleteNodeProxyWithPathInput,
    outputSchema: ConnectCoreV1DeleteNodeProxyWithPathOutput,
  }));
// Input Schema
export const ConnectCoreV1GetNamespacedPodAttachInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/attach",
    }),
  );
export type ConnectCoreV1GetNamespacedPodAttachInput =
  typeof ConnectCoreV1GetNamespacedPodAttachInput.Type;

// Output Schema
export const ConnectCoreV1GetNamespacedPodAttachOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1GetNamespacedPodAttachOutput =
  typeof ConnectCoreV1GetNamespacedPodAttachOutput.Type;

// The operation
/**
 * connect GET requests to attach of Pod
 */
export const connectCoreV1GetNamespacedPodAttach =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1GetNamespacedPodAttachInput,
    outputSchema: ConnectCoreV1GetNamespacedPodAttachOutput,
  }));
// Input Schema
export const ConnectCoreV1GetNamespacedPodExecInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/exec",
    }),
  );
export type ConnectCoreV1GetNamespacedPodExecInput =
  typeof ConnectCoreV1GetNamespacedPodExecInput.Type;

// Output Schema
export const ConnectCoreV1GetNamespacedPodExecOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1GetNamespacedPodExecOutput =
  typeof ConnectCoreV1GetNamespacedPodExecOutput.Type;

// The operation
/**
 * connect GET requests to exec of Pod
 */
export const connectCoreV1GetNamespacedPodExec =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1GetNamespacedPodExecInput,
    outputSchema: ConnectCoreV1GetNamespacedPodExecOutput,
  }));
// Input Schema
export const ConnectCoreV1GetNamespacedPodPortforwardInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/portforward",
    }),
  );
export type ConnectCoreV1GetNamespacedPodPortforwardInput =
  typeof ConnectCoreV1GetNamespacedPodPortforwardInput.Type;

// Output Schema
export const ConnectCoreV1GetNamespacedPodPortforwardOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1GetNamespacedPodPortforwardOutput =
  typeof ConnectCoreV1GetNamespacedPodPortforwardOutput.Type;

// The operation
/**
 * connect GET requests to portforward of Pod
 */
export const connectCoreV1GetNamespacedPodPortforward =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1GetNamespacedPodPortforwardInput,
    outputSchema: ConnectCoreV1GetNamespacedPodPortforwardOutput,
  }));
// Input Schema
export const ConnectCoreV1GetNamespacedPodProxyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/proxy",
    }),
  );
export type ConnectCoreV1GetNamespacedPodProxyInput =
  typeof ConnectCoreV1GetNamespacedPodProxyInput.Type;

// Output Schema
export const ConnectCoreV1GetNamespacedPodProxyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1GetNamespacedPodProxyOutput =
  typeof ConnectCoreV1GetNamespacedPodProxyOutput.Type;

// The operation
/**
 * connect GET requests to proxy of Pod
 */
export const connectCoreV1GetNamespacedPodProxy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1GetNamespacedPodProxyInput,
    outputSchema: ConnectCoreV1GetNamespacedPodProxyOutput,
  }));
// Input Schema
export const ConnectCoreV1GetNamespacedPodProxyWithPathInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}",
    }),
  );
export type ConnectCoreV1GetNamespacedPodProxyWithPathInput =
  typeof ConnectCoreV1GetNamespacedPodProxyWithPathInput.Type;

// Output Schema
export const ConnectCoreV1GetNamespacedPodProxyWithPathOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1GetNamespacedPodProxyWithPathOutput =
  typeof ConnectCoreV1GetNamespacedPodProxyWithPathOutput.Type;

// The operation
/**
 * connect GET requests to proxy of Pod
 */
export const connectCoreV1GetNamespacedPodProxyWithPath =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1GetNamespacedPodProxyWithPathInput,
    outputSchema: ConnectCoreV1GetNamespacedPodProxyWithPathOutput,
  }));
// Input Schema
export const ConnectCoreV1GetNamespacedServiceProxyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/services/{name}/proxy",
    }),
  );
export type ConnectCoreV1GetNamespacedServiceProxyInput =
  typeof ConnectCoreV1GetNamespacedServiceProxyInput.Type;

// Output Schema
export const ConnectCoreV1GetNamespacedServiceProxyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1GetNamespacedServiceProxyOutput =
  typeof ConnectCoreV1GetNamespacedServiceProxyOutput.Type;

// The operation
/**
 * connect GET requests to proxy of Service
 */
export const connectCoreV1GetNamespacedServiceProxy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1GetNamespacedServiceProxyInput,
    outputSchema: ConnectCoreV1GetNamespacedServiceProxyOutput,
  }));
// Input Schema
export const ConnectCoreV1GetNamespacedServiceProxyWithPathInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}",
    }),
  );
export type ConnectCoreV1GetNamespacedServiceProxyWithPathInput =
  typeof ConnectCoreV1GetNamespacedServiceProxyWithPathInput.Type;

// Output Schema
export const ConnectCoreV1GetNamespacedServiceProxyWithPathOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1GetNamespacedServiceProxyWithPathOutput =
  typeof ConnectCoreV1GetNamespacedServiceProxyWithPathOutput.Type;

// The operation
/**
 * connect GET requests to proxy of Service
 */
export const connectCoreV1GetNamespacedServiceProxyWithPath =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1GetNamespacedServiceProxyWithPathInput,
    outputSchema: ConnectCoreV1GetNamespacedServiceProxyWithPathOutput,
  }));
// Input Schema
export const ConnectCoreV1GetNodeProxyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/nodes/{name}/proxy" }),
  );
export type ConnectCoreV1GetNodeProxyInput =
  typeof ConnectCoreV1GetNodeProxyInput.Type;

// Output Schema
export const ConnectCoreV1GetNodeProxyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1GetNodeProxyOutput =
  typeof ConnectCoreV1GetNodeProxyOutput.Type;

// The operation
/**
 * connect GET requests to proxy of Node
 */
export const connectCoreV1GetNodeProxy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectCoreV1GetNodeProxyInput,
    outputSchema: ConnectCoreV1GetNodeProxyOutput,
  }),
);
// Input Schema
export const ConnectCoreV1GetNodeProxyWithPathInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/nodes/{name}/proxy/{path}" }),
  );
export type ConnectCoreV1GetNodeProxyWithPathInput =
  typeof ConnectCoreV1GetNodeProxyWithPathInput.Type;

// Output Schema
export const ConnectCoreV1GetNodeProxyWithPathOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1GetNodeProxyWithPathOutput =
  typeof ConnectCoreV1GetNodeProxyWithPathOutput.Type;

// The operation
/**
 * connect GET requests to proxy of Node
 */
export const connectCoreV1GetNodeProxyWithPath =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1GetNodeProxyWithPathInput,
    outputSchema: ConnectCoreV1GetNodeProxyWithPathOutput,
  }));
// Input Schema
export const ConnectCoreV1PatchNamespacedPodProxyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/proxy",
    }),
  );
export type ConnectCoreV1PatchNamespacedPodProxyInput =
  typeof ConnectCoreV1PatchNamespacedPodProxyInput.Type;

// Output Schema
export const ConnectCoreV1PatchNamespacedPodProxyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PatchNamespacedPodProxyOutput =
  typeof ConnectCoreV1PatchNamespacedPodProxyOutput.Type;

// The operation
/**
 * connect PATCH requests to proxy of Pod
 */
export const connectCoreV1PatchNamespacedPodProxy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PatchNamespacedPodProxyInput,
    outputSchema: ConnectCoreV1PatchNamespacedPodProxyOutput,
  }));
// Input Schema
export const ConnectCoreV1PatchNamespacedPodProxyWithPathInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}",
    }),
  );
export type ConnectCoreV1PatchNamespacedPodProxyWithPathInput =
  typeof ConnectCoreV1PatchNamespacedPodProxyWithPathInput.Type;

// Output Schema
export const ConnectCoreV1PatchNamespacedPodProxyWithPathOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PatchNamespacedPodProxyWithPathOutput =
  typeof ConnectCoreV1PatchNamespacedPodProxyWithPathOutput.Type;

// The operation
/**
 * connect PATCH requests to proxy of Pod
 */
export const connectCoreV1PatchNamespacedPodProxyWithPath =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PatchNamespacedPodProxyWithPathInput,
    outputSchema: ConnectCoreV1PatchNamespacedPodProxyWithPathOutput,
  }));
// Input Schema
export const ConnectCoreV1PatchNamespacedServiceProxyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/services/{name}/proxy",
    }),
  );
export type ConnectCoreV1PatchNamespacedServiceProxyInput =
  typeof ConnectCoreV1PatchNamespacedServiceProxyInput.Type;

// Output Schema
export const ConnectCoreV1PatchNamespacedServiceProxyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PatchNamespacedServiceProxyOutput =
  typeof ConnectCoreV1PatchNamespacedServiceProxyOutput.Type;

// The operation
/**
 * connect PATCH requests to proxy of Service
 */
export const connectCoreV1PatchNamespacedServiceProxy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PatchNamespacedServiceProxyInput,
    outputSchema: ConnectCoreV1PatchNamespacedServiceProxyOutput,
  }));
// Input Schema
export const ConnectCoreV1PatchNamespacedServiceProxyWithPathInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}",
    }),
  );
export type ConnectCoreV1PatchNamespacedServiceProxyWithPathInput =
  typeof ConnectCoreV1PatchNamespacedServiceProxyWithPathInput.Type;

// Output Schema
export const ConnectCoreV1PatchNamespacedServiceProxyWithPathOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PatchNamespacedServiceProxyWithPathOutput =
  typeof ConnectCoreV1PatchNamespacedServiceProxyWithPathOutput.Type;

// The operation
/**
 * connect PATCH requests to proxy of Service
 */
export const connectCoreV1PatchNamespacedServiceProxyWithPath =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PatchNamespacedServiceProxyWithPathInput,
    outputSchema: ConnectCoreV1PatchNamespacedServiceProxyWithPathOutput,
  }));
// Input Schema
export const ConnectCoreV1PatchNodeProxyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "PATCH", path: "/api/v1/nodes/{name}/proxy" }),
  );
export type ConnectCoreV1PatchNodeProxyInput =
  typeof ConnectCoreV1PatchNodeProxyInput.Type;

// Output Schema
export const ConnectCoreV1PatchNodeProxyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PatchNodeProxyOutput =
  typeof ConnectCoreV1PatchNodeProxyOutput.Type;

// The operation
/**
 * connect PATCH requests to proxy of Node
 */
export const connectCoreV1PatchNodeProxy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectCoreV1PatchNodeProxyInput,
    outputSchema: ConnectCoreV1PatchNodeProxyOutput,
  }),
);
// Input Schema
export const ConnectCoreV1PatchNodeProxyWithPathInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "PATCH", path: "/api/v1/nodes/{name}/proxy/{path}" }),
  );
export type ConnectCoreV1PatchNodeProxyWithPathInput =
  typeof ConnectCoreV1PatchNodeProxyWithPathInput.Type;

// Output Schema
export const ConnectCoreV1PatchNodeProxyWithPathOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PatchNodeProxyWithPathOutput =
  typeof ConnectCoreV1PatchNodeProxyWithPathOutput.Type;

// The operation
/**
 * connect PATCH requests to proxy of Node
 */
export const connectCoreV1PatchNodeProxyWithPath =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PatchNodeProxyWithPathInput,
    outputSchema: ConnectCoreV1PatchNodeProxyWithPathOutput,
  }));
// Input Schema
export const ConnectCoreV1PostNamespacedPodAttachInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/attach",
    }),
  );
export type ConnectCoreV1PostNamespacedPodAttachInput =
  typeof ConnectCoreV1PostNamespacedPodAttachInput.Type;

// Output Schema
export const ConnectCoreV1PostNamespacedPodAttachOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PostNamespacedPodAttachOutput =
  typeof ConnectCoreV1PostNamespacedPodAttachOutput.Type;

// The operation
/**
 * connect POST requests to attach of Pod
 */
export const connectCoreV1PostNamespacedPodAttach =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PostNamespacedPodAttachInput,
    outputSchema: ConnectCoreV1PostNamespacedPodAttachOutput,
  }));
// Input Schema
export const ConnectCoreV1PostNamespacedPodExecInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/exec",
    }),
  );
export type ConnectCoreV1PostNamespacedPodExecInput =
  typeof ConnectCoreV1PostNamespacedPodExecInput.Type;

// Output Schema
export const ConnectCoreV1PostNamespacedPodExecOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PostNamespacedPodExecOutput =
  typeof ConnectCoreV1PostNamespacedPodExecOutput.Type;

// The operation
/**
 * connect POST requests to exec of Pod
 */
export const connectCoreV1PostNamespacedPodExec =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PostNamespacedPodExecInput,
    outputSchema: ConnectCoreV1PostNamespacedPodExecOutput,
  }));
// Input Schema
export const ConnectCoreV1PostNamespacedPodPortforwardInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/portforward",
    }),
  );
export type ConnectCoreV1PostNamespacedPodPortforwardInput =
  typeof ConnectCoreV1PostNamespacedPodPortforwardInput.Type;

// Output Schema
export const ConnectCoreV1PostNamespacedPodPortforwardOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PostNamespacedPodPortforwardOutput =
  typeof ConnectCoreV1PostNamespacedPodPortforwardOutput.Type;

// The operation
/**
 * connect POST requests to portforward of Pod
 */
export const connectCoreV1PostNamespacedPodPortforward =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PostNamespacedPodPortforwardInput,
    outputSchema: ConnectCoreV1PostNamespacedPodPortforwardOutput,
  }));
// Input Schema
export const ConnectCoreV1PostNamespacedPodProxyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/proxy",
    }),
  );
export type ConnectCoreV1PostNamespacedPodProxyInput =
  typeof ConnectCoreV1PostNamespacedPodProxyInput.Type;

// Output Schema
export const ConnectCoreV1PostNamespacedPodProxyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PostNamespacedPodProxyOutput =
  typeof ConnectCoreV1PostNamespacedPodProxyOutput.Type;

// The operation
/**
 * connect POST requests to proxy of Pod
 */
export const connectCoreV1PostNamespacedPodProxy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PostNamespacedPodProxyInput,
    outputSchema: ConnectCoreV1PostNamespacedPodProxyOutput,
  }));
// Input Schema
export const ConnectCoreV1PostNamespacedPodProxyWithPathInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}",
    }),
  );
export type ConnectCoreV1PostNamespacedPodProxyWithPathInput =
  typeof ConnectCoreV1PostNamespacedPodProxyWithPathInput.Type;

// Output Schema
export const ConnectCoreV1PostNamespacedPodProxyWithPathOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PostNamespacedPodProxyWithPathOutput =
  typeof ConnectCoreV1PostNamespacedPodProxyWithPathOutput.Type;

// The operation
/**
 * connect POST requests to proxy of Pod
 */
export const connectCoreV1PostNamespacedPodProxyWithPath =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PostNamespacedPodProxyWithPathInput,
    outputSchema: ConnectCoreV1PostNamespacedPodProxyWithPathOutput,
  }));
// Input Schema
export const ConnectCoreV1PostNamespacedServiceProxyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/services/{name}/proxy",
    }),
  );
export type ConnectCoreV1PostNamespacedServiceProxyInput =
  typeof ConnectCoreV1PostNamespacedServiceProxyInput.Type;

// Output Schema
export const ConnectCoreV1PostNamespacedServiceProxyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PostNamespacedServiceProxyOutput =
  typeof ConnectCoreV1PostNamespacedServiceProxyOutput.Type;

// The operation
/**
 * connect POST requests to proxy of Service
 */
export const connectCoreV1PostNamespacedServiceProxy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PostNamespacedServiceProxyInput,
    outputSchema: ConnectCoreV1PostNamespacedServiceProxyOutput,
  }));
// Input Schema
export const ConnectCoreV1PostNamespacedServiceProxyWithPathInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}",
    }),
  );
export type ConnectCoreV1PostNamespacedServiceProxyWithPathInput =
  typeof ConnectCoreV1PostNamespacedServiceProxyWithPathInput.Type;

// Output Schema
export const ConnectCoreV1PostNamespacedServiceProxyWithPathOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PostNamespacedServiceProxyWithPathOutput =
  typeof ConnectCoreV1PostNamespacedServiceProxyWithPathOutput.Type;

// The operation
/**
 * connect POST requests to proxy of Service
 */
export const connectCoreV1PostNamespacedServiceProxyWithPath =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PostNamespacedServiceProxyWithPathInput,
    outputSchema: ConnectCoreV1PostNamespacedServiceProxyWithPathOutput,
  }));
// Input Schema
export const ConnectCoreV1PostNodeProxyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/api/v1/nodes/{name}/proxy" }),
  );
export type ConnectCoreV1PostNodeProxyInput =
  typeof ConnectCoreV1PostNodeProxyInput.Type;

// Output Schema
export const ConnectCoreV1PostNodeProxyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PostNodeProxyOutput =
  typeof ConnectCoreV1PostNodeProxyOutput.Type;

// The operation
/**
 * connect POST requests to proxy of Node
 */
export const connectCoreV1PostNodeProxy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectCoreV1PostNodeProxyInput,
    outputSchema: ConnectCoreV1PostNodeProxyOutput,
  }),
);
// Input Schema
export const ConnectCoreV1PostNodeProxyWithPathInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/api/v1/nodes/{name}/proxy/{path}" }),
  );
export type ConnectCoreV1PostNodeProxyWithPathInput =
  typeof ConnectCoreV1PostNodeProxyWithPathInput.Type;

// Output Schema
export const ConnectCoreV1PostNodeProxyWithPathOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PostNodeProxyWithPathOutput =
  typeof ConnectCoreV1PostNodeProxyWithPathOutput.Type;

// The operation
/**
 * connect POST requests to proxy of Node
 */
export const connectCoreV1PostNodeProxyWithPath =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PostNodeProxyWithPathInput,
    outputSchema: ConnectCoreV1PostNodeProxyWithPathOutput,
  }));
// Input Schema
export const ConnectCoreV1PutNamespacedPodProxyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/proxy",
    }),
  );
export type ConnectCoreV1PutNamespacedPodProxyInput =
  typeof ConnectCoreV1PutNamespacedPodProxyInput.Type;

// Output Schema
export const ConnectCoreV1PutNamespacedPodProxyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PutNamespacedPodProxyOutput =
  typeof ConnectCoreV1PutNamespacedPodProxyOutput.Type;

// The operation
/**
 * connect PUT requests to proxy of Pod
 */
export const connectCoreV1PutNamespacedPodProxy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PutNamespacedPodProxyInput,
    outputSchema: ConnectCoreV1PutNamespacedPodProxyOutput,
  }));
// Input Schema
export const ConnectCoreV1PutNamespacedPodProxyWithPathInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}",
    }),
  );
export type ConnectCoreV1PutNamespacedPodProxyWithPathInput =
  typeof ConnectCoreV1PutNamespacedPodProxyWithPathInput.Type;

// Output Schema
export const ConnectCoreV1PutNamespacedPodProxyWithPathOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PutNamespacedPodProxyWithPathOutput =
  typeof ConnectCoreV1PutNamespacedPodProxyWithPathOutput.Type;

// The operation
/**
 * connect PUT requests to proxy of Pod
 */
export const connectCoreV1PutNamespacedPodProxyWithPath =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PutNamespacedPodProxyWithPathInput,
    outputSchema: ConnectCoreV1PutNamespacedPodProxyWithPathOutput,
  }));
// Input Schema
export const ConnectCoreV1PutNamespacedServiceProxyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/services/{name}/proxy",
    }),
  );
export type ConnectCoreV1PutNamespacedServiceProxyInput =
  typeof ConnectCoreV1PutNamespacedServiceProxyInput.Type;

// Output Schema
export const ConnectCoreV1PutNamespacedServiceProxyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PutNamespacedServiceProxyOutput =
  typeof ConnectCoreV1PutNamespacedServiceProxyOutput.Type;

// The operation
/**
 * connect PUT requests to proxy of Service
 */
export const connectCoreV1PutNamespacedServiceProxy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PutNamespacedServiceProxyInput,
    outputSchema: ConnectCoreV1PutNamespacedServiceProxyOutput,
  }));
// Input Schema
export const ConnectCoreV1PutNamespacedServiceProxyWithPathInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}",
    }),
  );
export type ConnectCoreV1PutNamespacedServiceProxyWithPathInput =
  typeof ConnectCoreV1PutNamespacedServiceProxyWithPathInput.Type;

// Output Schema
export const ConnectCoreV1PutNamespacedServiceProxyWithPathOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PutNamespacedServiceProxyWithPathOutput =
  typeof ConnectCoreV1PutNamespacedServiceProxyWithPathOutput.Type;

// The operation
/**
 * connect PUT requests to proxy of Service
 */
export const connectCoreV1PutNamespacedServiceProxyWithPath =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PutNamespacedServiceProxyWithPathInput,
    outputSchema: ConnectCoreV1PutNamespacedServiceProxyWithPathOutput,
  }));
// Input Schema
export const ConnectCoreV1PutNodeProxyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "PUT", path: "/api/v1/nodes/{name}/proxy" }),
  );
export type ConnectCoreV1PutNodeProxyInput =
  typeof ConnectCoreV1PutNodeProxyInput.Type;

// Output Schema
export const ConnectCoreV1PutNodeProxyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PutNodeProxyOutput =
  typeof ConnectCoreV1PutNodeProxyOutput.Type;

// The operation
/**
 * connect PUT requests to proxy of Node
 */
export const connectCoreV1PutNodeProxy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectCoreV1PutNodeProxyInput,
    outputSchema: ConnectCoreV1PutNodeProxyOutput,
  }),
);
// Input Schema
export const ConnectCoreV1PutNodeProxyWithPathInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "PUT", path: "/api/v1/nodes/{name}/proxy/{path}" }),
  );
export type ConnectCoreV1PutNodeProxyWithPathInput =
  typeof ConnectCoreV1PutNodeProxyWithPathInput.Type;

// Output Schema
export const ConnectCoreV1PutNodeProxyWithPathOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ConnectCoreV1PutNodeProxyWithPathOutput =
  typeof ConnectCoreV1PutNodeProxyWithPathOutput.Type;

// The operation
/**
 * connect PUT requests to proxy of Node
 */
export const connectCoreV1PutNodeProxyWithPath =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectCoreV1PutNodeProxyWithPathInput,
    outputSchema: ConnectCoreV1PutNodeProxyWithPathOutput,
  }));
// Input Schema
export const CreateCoreV1NamespaceInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceStatusSchema),
    ),
  }).pipe(T.Http({ method: "POST", path: "/api/v1/namespaces" }));
export type CreateCoreV1NamespaceInput = typeof CreateCoreV1NamespaceInput.Type;

// Output Schema
export const CreateCoreV1NamespaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceStatusSchema),
    ),
  });
export type CreateCoreV1NamespaceOutput =
  typeof CreateCoreV1NamespaceOutput.Type;

// The operation
/**
 * create a Namespace
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoreV1Namespace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateCoreV1NamespaceInput,
    outputSchema: CreateCoreV1NamespaceOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const CreateCoreV1NamespacedBindingInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    target: Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
  }).pipe(
    T.Http({ method: "POST", path: "/api/v1/namespaces/{namespace}/bindings" }),
  );
export type CreateCoreV1NamespacedBindingInput =
  typeof CreateCoreV1NamespacedBindingInput.Type;

// Output Schema
export const CreateCoreV1NamespacedBindingOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    target: Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
  });
export type CreateCoreV1NamespacedBindingOutput =
  typeof CreateCoreV1NamespacedBindingOutput.Type;

// The operation
/**
 * create a Binding
 */
export const createCoreV1NamespacedBinding =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoreV1NamespacedBindingInput,
    outputSchema: CreateCoreV1NamespacedBindingOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoreV1NamespacedConfigMapInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    binaryData: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    data: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    immutable: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/configmaps",
    }),
  );
export type CreateCoreV1NamespacedConfigMapInput =
  typeof CreateCoreV1NamespacedConfigMapInput.Type;

// Output Schema
export const CreateCoreV1NamespacedConfigMapOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    binaryData: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    data: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    immutable: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
  });
export type CreateCoreV1NamespacedConfigMapOutput =
  typeof CreateCoreV1NamespacedConfigMapOutput.Type;

// The operation
/**
 * create a ConfigMap
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoreV1NamespacedConfigMap =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoreV1NamespacedConfigMapInput,
    outputSchema: CreateCoreV1NamespacedConfigMapOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoreV1NamespacedEndpointsInput =
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
    subsets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_EndpointSubsetSchema),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/endpoints",
    }),
  );
export type CreateCoreV1NamespacedEndpointsInput =
  typeof CreateCoreV1NamespacedEndpointsInput.Type;

// Output Schema
export const CreateCoreV1NamespacedEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    subsets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_EndpointSubsetSchema),
      ),
    ),
  });
export type CreateCoreV1NamespacedEndpointsOutput =
  typeof CreateCoreV1NamespacedEndpointsOutput.Type;

// The operation
/**
 * create Endpoints
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoreV1NamespacedEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoreV1NamespacedEndpointsInput,
    outputSchema: CreateCoreV1NamespacedEndpointsOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoreV1NamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
    eventTime: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
      ),
    ),
    firstTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    involvedObject: Schema.suspend(
      () => io_k8s_api_core_v1_ObjectReferenceSchema,
    ),
    kind: Schema.optional(Schema.String),
    lastTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    metadata: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
    ),
    reason: Schema.optional(Schema.String),
    related: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    reportingComponent: Schema.optional(Schema.String),
    reportingInstance: Schema.optional(Schema.String),
    series: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSeriesSchema),
    ),
    source: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSourceSchema),
    ),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/api/v1/namespaces/{namespace}/events" }),
  );
export type CreateCoreV1NamespacedEventInput =
  typeof CreateCoreV1NamespacedEventInput.Type;

// Output Schema
export const CreateCoreV1NamespacedEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
    eventTime: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
      ),
    ),
    firstTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    involvedObject: Schema.suspend(
      () => io_k8s_api_core_v1_ObjectReferenceSchema,
    ),
    kind: Schema.optional(Schema.String),
    lastTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    metadata: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
    ),
    reason: Schema.optional(Schema.String),
    related: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    reportingComponent: Schema.optional(Schema.String),
    reportingInstance: Schema.optional(Schema.String),
    series: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSeriesSchema),
    ),
    source: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSourceSchema),
    ),
    type: Schema.optional(Schema.String),
  });
export type CreateCoreV1NamespacedEventOutput =
  typeof CreateCoreV1NamespacedEventOutput.Type;

// The operation
/**
 * create an Event
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoreV1NamespacedEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateCoreV1NamespacedEventInput,
    outputSchema: CreateCoreV1NamespacedEventOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const CreateCoreV1NamespacedLimitRangeInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_LimitRangeSpecSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/limitranges",
    }),
  );
export type CreateCoreV1NamespacedLimitRangeInput =
  typeof CreateCoreV1NamespacedLimitRangeInput.Type;

// Output Schema
export const CreateCoreV1NamespacedLimitRangeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LimitRangeSpecSchema),
    ),
  });
export type CreateCoreV1NamespacedLimitRangeOutput =
  typeof CreateCoreV1NamespacedLimitRangeOutput.Type;

// The operation
/**
 * create a LimitRange
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoreV1NamespacedLimitRange =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoreV1NamespacedLimitRangeInput,
    outputSchema: CreateCoreV1NamespacedLimitRangeOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoreV1NamespacedPersistentVolumeClaimInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeClaimSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PersistentVolumeClaimStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/persistentvolumeclaims",
    }),
  );
export type CreateCoreV1NamespacedPersistentVolumeClaimInput =
  typeof CreateCoreV1NamespacedPersistentVolumeClaimInput.Type;

// Output Schema
export const CreateCoreV1NamespacedPersistentVolumeClaimOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeClaimSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PersistentVolumeClaimStatusSchema,
      ),
    ),
  });
export type CreateCoreV1NamespacedPersistentVolumeClaimOutput =
  typeof CreateCoreV1NamespacedPersistentVolumeClaimOutput.Type;

// The operation
/**
 * create a PersistentVolumeClaim
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoreV1NamespacedPersistentVolumeClaim =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoreV1NamespacedPersistentVolumeClaimInput,
    outputSchema: CreateCoreV1NamespacedPersistentVolumeClaimOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoreV1NamespacedPodInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/api/v1/namespaces/{namespace}/pods" }),
  );
export type CreateCoreV1NamespacedPodInput =
  typeof CreateCoreV1NamespacedPodInput.Type;

// Output Schema
export const CreateCoreV1NamespacedPodOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  });
export type CreateCoreV1NamespacedPodOutput =
  typeof CreateCoreV1NamespacedPodOutput.Type;

// The operation
/**
 * create a Pod
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoreV1NamespacedPod = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateCoreV1NamespacedPodInput,
    outputSchema: CreateCoreV1NamespacedPodOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const CreateCoreV1NamespacedPodBindingInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    target: Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/binding",
    }),
  );
export type CreateCoreV1NamespacedPodBindingInput =
  typeof CreateCoreV1NamespacedPodBindingInput.Type;

// Output Schema
export const CreateCoreV1NamespacedPodBindingOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    target: Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
  });
export type CreateCoreV1NamespacedPodBindingOutput =
  typeof CreateCoreV1NamespacedPodBindingOutput.Type;

// The operation
/**
 * create binding of a Pod
 */
export const createCoreV1NamespacedPodBinding =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoreV1NamespacedPodBindingInput,
    outputSchema: CreateCoreV1NamespacedPodBindingOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoreV1NamespacedPodEvictionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    deleteOptions: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptionsSchema,
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/eviction",
    }),
  );
export type CreateCoreV1NamespacedPodEvictionInput =
  typeof CreateCoreV1NamespacedPodEvictionInput.Type;

// Output Schema
export const CreateCoreV1NamespacedPodEvictionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    deleteOptions: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptionsSchema,
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
  });
export type CreateCoreV1NamespacedPodEvictionOutput =
  typeof CreateCoreV1NamespacedPodEvictionOutput.Type;

// The operation
/**
 * create eviction of a Pod
 */
export const createCoreV1NamespacedPodEviction =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoreV1NamespacedPodEvictionInput,
    outputSchema: CreateCoreV1NamespacedPodEvictionOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoreV1NamespacedPodTemplateInput =
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
    template: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodTemplateSpecSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/podtemplates",
    }),
  );
export type CreateCoreV1NamespacedPodTemplateInput =
  typeof CreateCoreV1NamespacedPodTemplateInput.Type;

// Output Schema
export const CreateCoreV1NamespacedPodTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    template: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodTemplateSpecSchema),
    ),
  });
export type CreateCoreV1NamespacedPodTemplateOutput =
  typeof CreateCoreV1NamespacedPodTemplateOutput.Type;

// The operation
/**
 * create a PodTemplate
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoreV1NamespacedPodTemplate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoreV1NamespacedPodTemplateInput,
    outputSchema: CreateCoreV1NamespacedPodTemplateOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoreV1NamespacedReplicationControllerInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_ReplicationControllerSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_ReplicationControllerStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/replicationcontrollers",
    }),
  );
export type CreateCoreV1NamespacedReplicationControllerInput =
  typeof CreateCoreV1NamespacedReplicationControllerInput.Type;

// Output Schema
export const CreateCoreV1NamespacedReplicationControllerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ReplicationControllerSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_ReplicationControllerStatusSchema,
      ),
    ),
  });
export type CreateCoreV1NamespacedReplicationControllerOutput =
  typeof CreateCoreV1NamespacedReplicationControllerOutput.Type;

// The operation
/**
 * create a ReplicationController
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoreV1NamespacedReplicationController =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoreV1NamespacedReplicationControllerInput,
    outputSchema: CreateCoreV1NamespacedReplicationControllerOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoreV1NamespacedResourceQuotaInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/resourcequotas",
    }),
  );
export type CreateCoreV1NamespacedResourceQuotaInput =
  typeof CreateCoreV1NamespacedResourceQuotaInput.Type;

// Output Schema
export const CreateCoreV1NamespacedResourceQuotaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaStatusSchema),
    ),
  });
export type CreateCoreV1NamespacedResourceQuotaOutput =
  typeof CreateCoreV1NamespacedResourceQuotaOutput.Type;

// The operation
/**
 * create a ResourceQuota
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoreV1NamespacedResourceQuota =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoreV1NamespacedResourceQuotaInput,
    outputSchema: CreateCoreV1NamespacedResourceQuotaOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoreV1NamespacedSecretInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    immutable: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    stringData: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/api/v1/namespaces/{namespace}/secrets" }),
  );
export type CreateCoreV1NamespacedSecretInput =
  typeof CreateCoreV1NamespacedSecretInput.Type;

// Output Schema
export const CreateCoreV1NamespacedSecretOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    immutable: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    stringData: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.optional(Schema.String),
  });
export type CreateCoreV1NamespacedSecretOutput =
  typeof CreateCoreV1NamespacedSecretOutput.Type;

// The operation
/**
 * create a Secret
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoreV1NamespacedSecret =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoreV1NamespacedSecretInput,
    outputSchema: CreateCoreV1NamespacedSecretOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoreV1NamespacedServiceInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_ServiceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceStatusSchema),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/api/v1/namespaces/{namespace}/services" }),
  );
export type CreateCoreV1NamespacedServiceInput =
  typeof CreateCoreV1NamespacedServiceInput.Type;

// Output Schema
export const CreateCoreV1NamespacedServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceStatusSchema),
    ),
  });
export type CreateCoreV1NamespacedServiceOutput =
  typeof CreateCoreV1NamespacedServiceOutput.Type;

// The operation
/**
 * create a Service
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoreV1NamespacedService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoreV1NamespacedServiceInput,
    outputSchema: CreateCoreV1NamespacedServiceOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoreV1NamespacedServiceAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    automountServiceAccountToken: Schema.optional(Schema.Boolean),
    imagePullSecrets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_LocalObjectReferenceSchema),
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    secrets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/serviceaccounts",
    }),
  );
export type CreateCoreV1NamespacedServiceAccountInput =
  typeof CreateCoreV1NamespacedServiceAccountInput.Type;

// Output Schema
export const CreateCoreV1NamespacedServiceAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    automountServiceAccountToken: Schema.optional(Schema.Boolean),
    imagePullSecrets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_LocalObjectReferenceSchema),
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    secrets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
      ),
    ),
  });
export type CreateCoreV1NamespacedServiceAccountOutput =
  typeof CreateCoreV1NamespacedServiceAccountOutput.Type;

// The operation
/**
 * create a ServiceAccount
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoreV1NamespacedServiceAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoreV1NamespacedServiceAccountInput,
    outputSchema: CreateCoreV1NamespacedServiceAccountOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoreV1NamespacedServiceAccountTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_authentication_v1_TokenRequestSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authentication_v1_TokenRequestStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/v1/namespaces/{namespace}/serviceaccounts/{name}/token",
    }),
  );
export type CreateCoreV1NamespacedServiceAccountTokenInput =
  typeof CreateCoreV1NamespacedServiceAccountTokenInput.Type;

// Output Schema
export const CreateCoreV1NamespacedServiceAccountTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_authentication_v1_TokenRequestSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authentication_v1_TokenRequestStatusSchema,
      ),
    ),
  });
export type CreateCoreV1NamespacedServiceAccountTokenOutput =
  typeof CreateCoreV1NamespacedServiceAccountTokenOutput.Type;

// The operation
/**
 * create token of a ServiceAccount
 */
export const createCoreV1NamespacedServiceAccountToken =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoreV1NamespacedServiceAccountTokenInput,
    outputSchema: CreateCoreV1NamespacedServiceAccountTokenOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoreV1NodeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dryRun: Schema.optional(Schema.String),
  fieldValidation: Schema.optional(Schema.String),
  apiVersion: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(
    Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema),
  ),
  spec: Schema.optional(
    Schema.suspend(() => io_k8s_api_core_v1_NodeSpecSchema),
  ),
  status: Schema.optional(
    Schema.suspend(() => io_k8s_api_core_v1_NodeStatusSchema),
  ),
}).pipe(T.Http({ method: "POST", path: "/api/v1/nodes" }));
export type CreateCoreV1NodeInput = typeof CreateCoreV1NodeInput.Type;

// Output Schema
export const CreateCoreV1NodeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeStatusSchema),
    ),
  },
);
export type CreateCoreV1NodeOutput = typeof CreateCoreV1NodeOutput.Type;

// The operation
/**
 * create a Node
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoreV1Node = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateCoreV1NodeInput,
  outputSchema: CreateCoreV1NodeOutput,
  errors: [Conflict, UnprocessableEntity] as const,
}));
// Input Schema
export const CreateCoreV1PersistentVolumeInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeStatusSchema),
    ),
  }).pipe(T.Http({ method: "POST", path: "/api/v1/persistentvolumes" }));
export type CreateCoreV1PersistentVolumeInput =
  typeof CreateCoreV1PersistentVolumeInput.Type;

// Output Schema
export const CreateCoreV1PersistentVolumeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeStatusSchema),
    ),
  });
export type CreateCoreV1PersistentVolumeOutput =
  typeof CreateCoreV1PersistentVolumeOutput.Type;

// The operation
/**
 * create a PersistentVolume
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoreV1PersistentVolume =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoreV1PersistentVolumeInput,
    outputSchema: CreateCoreV1PersistentVolumeOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const DeleteCoreV1CollectionNamespacedConfigMapInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/configmaps",
    }),
  );
export type DeleteCoreV1CollectionNamespacedConfigMapInput =
  typeof DeleteCoreV1CollectionNamespacedConfigMapInput.Type;

// Output Schema
export const DeleteCoreV1CollectionNamespacedConfigMapOutput =
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
export type DeleteCoreV1CollectionNamespacedConfigMapOutput =
  typeof DeleteCoreV1CollectionNamespacedConfigMapOutput.Type;

// The operation
/**
 * delete collection of ConfigMap
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1CollectionNamespacedConfigMap =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1CollectionNamespacedConfigMapInput,
    outputSchema: DeleteCoreV1CollectionNamespacedConfigMapOutput,
  }));
// Input Schema
export const DeleteCoreV1CollectionNamespacedEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/endpoints",
    }),
  );
export type DeleteCoreV1CollectionNamespacedEndpointsInput =
  typeof DeleteCoreV1CollectionNamespacedEndpointsInput.Type;

// Output Schema
export const DeleteCoreV1CollectionNamespacedEndpointsOutput =
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
export type DeleteCoreV1CollectionNamespacedEndpointsOutput =
  typeof DeleteCoreV1CollectionNamespacedEndpointsOutput.Type;

// The operation
/**
 * delete collection of Endpoints
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1CollectionNamespacedEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1CollectionNamespacedEndpointsInput,
    outputSchema: DeleteCoreV1CollectionNamespacedEndpointsOutput,
  }));
// Input Schema
export const DeleteCoreV1CollectionNamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "DELETE", path: "/api/v1/namespaces/{namespace}/events" }),
  );
export type DeleteCoreV1CollectionNamespacedEventInput =
  typeof DeleteCoreV1CollectionNamespacedEventInput.Type;

// Output Schema
export const DeleteCoreV1CollectionNamespacedEventOutput =
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
export type DeleteCoreV1CollectionNamespacedEventOutput =
  typeof DeleteCoreV1CollectionNamespacedEventOutput.Type;

// The operation
/**
 * delete collection of Event
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1CollectionNamespacedEvent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1CollectionNamespacedEventInput,
    outputSchema: DeleteCoreV1CollectionNamespacedEventOutput,
  }));
// Input Schema
export const DeleteCoreV1CollectionNamespacedLimitRangeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/limitranges",
    }),
  );
export type DeleteCoreV1CollectionNamespacedLimitRangeInput =
  typeof DeleteCoreV1CollectionNamespacedLimitRangeInput.Type;

// Output Schema
export const DeleteCoreV1CollectionNamespacedLimitRangeOutput =
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
export type DeleteCoreV1CollectionNamespacedLimitRangeOutput =
  typeof DeleteCoreV1CollectionNamespacedLimitRangeOutput.Type;

// The operation
/**
 * delete collection of LimitRange
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1CollectionNamespacedLimitRange =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1CollectionNamespacedLimitRangeInput,
    outputSchema: DeleteCoreV1CollectionNamespacedLimitRangeOutput,
  }));
// Input Schema
export const DeleteCoreV1CollectionNamespacedPersistentVolumeClaimInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/persistentvolumeclaims",
    }),
  );
export type DeleteCoreV1CollectionNamespacedPersistentVolumeClaimInput =
  typeof DeleteCoreV1CollectionNamespacedPersistentVolumeClaimInput.Type;

// Output Schema
export const DeleteCoreV1CollectionNamespacedPersistentVolumeClaimOutput =
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
export type DeleteCoreV1CollectionNamespacedPersistentVolumeClaimOutput =
  typeof DeleteCoreV1CollectionNamespacedPersistentVolumeClaimOutput.Type;

// The operation
/**
 * delete collection of PersistentVolumeClaim
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1CollectionNamespacedPersistentVolumeClaim =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1CollectionNamespacedPersistentVolumeClaimInput,
    outputSchema: DeleteCoreV1CollectionNamespacedPersistentVolumeClaimOutput,
  }));
// Input Schema
export const DeleteCoreV1CollectionNamespacedPodInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "DELETE", path: "/api/v1/namespaces/{namespace}/pods" }),
  );
export type DeleteCoreV1CollectionNamespacedPodInput =
  typeof DeleteCoreV1CollectionNamespacedPodInput.Type;

// Output Schema
export const DeleteCoreV1CollectionNamespacedPodOutput =
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
export type DeleteCoreV1CollectionNamespacedPodOutput =
  typeof DeleteCoreV1CollectionNamespacedPodOutput.Type;

// The operation
/**
 * delete collection of Pod
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1CollectionNamespacedPod =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1CollectionNamespacedPodInput,
    outputSchema: DeleteCoreV1CollectionNamespacedPodOutput,
  }));
// Input Schema
export const DeleteCoreV1CollectionNamespacedPodTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/podtemplates",
    }),
  );
export type DeleteCoreV1CollectionNamespacedPodTemplateInput =
  typeof DeleteCoreV1CollectionNamespacedPodTemplateInput.Type;

// Output Schema
export const DeleteCoreV1CollectionNamespacedPodTemplateOutput =
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
export type DeleteCoreV1CollectionNamespacedPodTemplateOutput =
  typeof DeleteCoreV1CollectionNamespacedPodTemplateOutput.Type;

// The operation
/**
 * delete collection of PodTemplate
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1CollectionNamespacedPodTemplate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1CollectionNamespacedPodTemplateInput,
    outputSchema: DeleteCoreV1CollectionNamespacedPodTemplateOutput,
  }));
// Input Schema
export const DeleteCoreV1CollectionNamespacedReplicationControllerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/replicationcontrollers",
    }),
  );
export type DeleteCoreV1CollectionNamespacedReplicationControllerInput =
  typeof DeleteCoreV1CollectionNamespacedReplicationControllerInput.Type;

// Output Schema
export const DeleteCoreV1CollectionNamespacedReplicationControllerOutput =
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
export type DeleteCoreV1CollectionNamespacedReplicationControllerOutput =
  typeof DeleteCoreV1CollectionNamespacedReplicationControllerOutput.Type;

// The operation
/**
 * delete collection of ReplicationController
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1CollectionNamespacedReplicationController =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1CollectionNamespacedReplicationControllerInput,
    outputSchema: DeleteCoreV1CollectionNamespacedReplicationControllerOutput,
  }));
// Input Schema
export const DeleteCoreV1CollectionNamespacedResourceQuotaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/resourcequotas",
    }),
  );
export type DeleteCoreV1CollectionNamespacedResourceQuotaInput =
  typeof DeleteCoreV1CollectionNamespacedResourceQuotaInput.Type;

// Output Schema
export const DeleteCoreV1CollectionNamespacedResourceQuotaOutput =
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
export type DeleteCoreV1CollectionNamespacedResourceQuotaOutput =
  typeof DeleteCoreV1CollectionNamespacedResourceQuotaOutput.Type;

// The operation
/**
 * delete collection of ResourceQuota
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1CollectionNamespacedResourceQuota =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1CollectionNamespacedResourceQuotaInput,
    outputSchema: DeleteCoreV1CollectionNamespacedResourceQuotaOutput,
  }));
// Input Schema
export const DeleteCoreV1CollectionNamespacedSecretInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/secrets",
    }),
  );
export type DeleteCoreV1CollectionNamespacedSecretInput =
  typeof DeleteCoreV1CollectionNamespacedSecretInput.Type;

// Output Schema
export const DeleteCoreV1CollectionNamespacedSecretOutput =
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
export type DeleteCoreV1CollectionNamespacedSecretOutput =
  typeof DeleteCoreV1CollectionNamespacedSecretOutput.Type;

// The operation
/**
 * delete collection of Secret
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1CollectionNamespacedSecret =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1CollectionNamespacedSecretInput,
    outputSchema: DeleteCoreV1CollectionNamespacedSecretOutput,
  }));
// Input Schema
export const DeleteCoreV1CollectionNamespacedServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/services",
    }),
  );
export type DeleteCoreV1CollectionNamespacedServiceInput =
  typeof DeleteCoreV1CollectionNamespacedServiceInput.Type;

// Output Schema
export const DeleteCoreV1CollectionNamespacedServiceOutput =
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
export type DeleteCoreV1CollectionNamespacedServiceOutput =
  typeof DeleteCoreV1CollectionNamespacedServiceOutput.Type;

// The operation
/**
 * delete collection of Service
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1CollectionNamespacedService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1CollectionNamespacedServiceInput,
    outputSchema: DeleteCoreV1CollectionNamespacedServiceOutput,
  }));
// Input Schema
export const DeleteCoreV1CollectionNamespacedServiceAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/serviceaccounts",
    }),
  );
export type DeleteCoreV1CollectionNamespacedServiceAccountInput =
  typeof DeleteCoreV1CollectionNamespacedServiceAccountInput.Type;

// Output Schema
export const DeleteCoreV1CollectionNamespacedServiceAccountOutput =
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
export type DeleteCoreV1CollectionNamespacedServiceAccountOutput =
  typeof DeleteCoreV1CollectionNamespacedServiceAccountOutput.Type;

// The operation
/**
 * delete collection of ServiceAccount
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1CollectionNamespacedServiceAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1CollectionNamespacedServiceAccountInput,
    outputSchema: DeleteCoreV1CollectionNamespacedServiceAccountOutput,
  }));
// Input Schema
export const DeleteCoreV1CollectionNodeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "DELETE", path: "/api/v1/nodes" }));
export type DeleteCoreV1CollectionNodeInput =
  typeof DeleteCoreV1CollectionNodeInput.Type;

// Output Schema
export const DeleteCoreV1CollectionNodeOutput =
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
export type DeleteCoreV1CollectionNodeOutput =
  typeof DeleteCoreV1CollectionNodeOutput.Type;

// The operation
/**
 * delete collection of Node
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1CollectionNode = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteCoreV1CollectionNodeInput,
    outputSchema: DeleteCoreV1CollectionNodeOutput,
  }),
);
// Input Schema
export const DeleteCoreV1CollectionPersistentVolumeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "DELETE", path: "/api/v1/persistentvolumes" }));
export type DeleteCoreV1CollectionPersistentVolumeInput =
  typeof DeleteCoreV1CollectionPersistentVolumeInput.Type;

// Output Schema
export const DeleteCoreV1CollectionPersistentVolumeOutput =
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
export type DeleteCoreV1CollectionPersistentVolumeOutput =
  typeof DeleteCoreV1CollectionPersistentVolumeOutput.Type;

// The operation
/**
 * delete collection of PersistentVolume
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1CollectionPersistentVolume =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1CollectionPersistentVolumeInput,
    outputSchema: DeleteCoreV1CollectionPersistentVolumeOutput,
  }));
// Input Schema
export const DeleteCoreV1NamespaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "DELETE", path: "/api/v1/namespaces/{name}" }));
export type DeleteCoreV1NamespaceInput = typeof DeleteCoreV1NamespaceInput.Type;

// Output Schema
export const DeleteCoreV1NamespaceOutput =
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
export type DeleteCoreV1NamespaceOutput =
  typeof DeleteCoreV1NamespaceOutput.Type;

// The operation
/**
 * delete a Namespace
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1Namespace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteCoreV1NamespaceInput,
    outputSchema: DeleteCoreV1NamespaceOutput,
    errors: [NotFound, Conflict] as const,
  }),
);
// Input Schema
export const DeleteCoreV1NamespacedConfigMapInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/configmaps/{name}",
    }),
  );
export type DeleteCoreV1NamespacedConfigMapInput =
  typeof DeleteCoreV1NamespacedConfigMapInput.Type;

// Output Schema
export const DeleteCoreV1NamespacedConfigMapOutput =
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
export type DeleteCoreV1NamespacedConfigMapOutput =
  typeof DeleteCoreV1NamespacedConfigMapOutput.Type;

// The operation
/**
 * delete a ConfigMap
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1NamespacedConfigMap =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1NamespacedConfigMapInput,
    outputSchema: DeleteCoreV1NamespacedConfigMapOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteCoreV1NamespacedEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/endpoints/{name}",
    }),
  );
export type DeleteCoreV1NamespacedEndpointsInput =
  typeof DeleteCoreV1NamespacedEndpointsInput.Type;

// Output Schema
export const DeleteCoreV1NamespacedEndpointsOutput =
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
export type DeleteCoreV1NamespacedEndpointsOutput =
  typeof DeleteCoreV1NamespacedEndpointsOutput.Type;

// The operation
/**
 * delete Endpoints
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1NamespacedEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1NamespacedEndpointsInput,
    outputSchema: DeleteCoreV1NamespacedEndpointsOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteCoreV1NamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/events/{name}",
    }),
  );
export type DeleteCoreV1NamespacedEventInput =
  typeof DeleteCoreV1NamespacedEventInput.Type;

// Output Schema
export const DeleteCoreV1NamespacedEventOutput =
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
export type DeleteCoreV1NamespacedEventOutput =
  typeof DeleteCoreV1NamespacedEventOutput.Type;

// The operation
/**
 * delete an Event
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1NamespacedEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteCoreV1NamespacedEventInput,
    outputSchema: DeleteCoreV1NamespacedEventOutput,
    errors: [NotFound, Conflict] as const,
  }),
);
// Input Schema
export const DeleteCoreV1NamespacedLimitRangeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/limitranges/{name}",
    }),
  );
export type DeleteCoreV1NamespacedLimitRangeInput =
  typeof DeleteCoreV1NamespacedLimitRangeInput.Type;

// Output Schema
export const DeleteCoreV1NamespacedLimitRangeOutput =
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
export type DeleteCoreV1NamespacedLimitRangeOutput =
  typeof DeleteCoreV1NamespacedLimitRangeOutput.Type;

// The operation
/**
 * delete a LimitRange
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1NamespacedLimitRange =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1NamespacedLimitRangeInput,
    outputSchema: DeleteCoreV1NamespacedLimitRangeOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteCoreV1NamespacedPersistentVolumeClaimInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}",
    }),
  );
export type DeleteCoreV1NamespacedPersistentVolumeClaimInput =
  typeof DeleteCoreV1NamespacedPersistentVolumeClaimInput.Type;

// Output Schema
export const DeleteCoreV1NamespacedPersistentVolumeClaimOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeClaimSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PersistentVolumeClaimStatusSchema,
      ),
    ),
  });
export type DeleteCoreV1NamespacedPersistentVolumeClaimOutput =
  typeof DeleteCoreV1NamespacedPersistentVolumeClaimOutput.Type;

// The operation
/**
 * delete a PersistentVolumeClaim
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1NamespacedPersistentVolumeClaim =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1NamespacedPersistentVolumeClaimInput,
    outputSchema: DeleteCoreV1NamespacedPersistentVolumeClaimOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteCoreV1NamespacedPodInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/pods/{name}",
    }),
  );
export type DeleteCoreV1NamespacedPodInput =
  typeof DeleteCoreV1NamespacedPodInput.Type;

// Output Schema
export const DeleteCoreV1NamespacedPodOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  });
export type DeleteCoreV1NamespacedPodOutput =
  typeof DeleteCoreV1NamespacedPodOutput.Type;

// The operation
/**
 * delete a Pod
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1NamespacedPod = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteCoreV1NamespacedPodInput,
    outputSchema: DeleteCoreV1NamespacedPodOutput,
    errors: [NotFound, Conflict] as const,
  }),
);
// Input Schema
export const DeleteCoreV1NamespacedPodTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/podtemplates/{name}",
    }),
  );
export type DeleteCoreV1NamespacedPodTemplateInput =
  typeof DeleteCoreV1NamespacedPodTemplateInput.Type;

// Output Schema
export const DeleteCoreV1NamespacedPodTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    template: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodTemplateSpecSchema),
    ),
  });
export type DeleteCoreV1NamespacedPodTemplateOutput =
  typeof DeleteCoreV1NamespacedPodTemplateOutput.Type;

// The operation
/**
 * delete a PodTemplate
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1NamespacedPodTemplate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1NamespacedPodTemplateInput,
    outputSchema: DeleteCoreV1NamespacedPodTemplateOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteCoreV1NamespacedReplicationControllerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}",
    }),
  );
export type DeleteCoreV1NamespacedReplicationControllerInput =
  typeof DeleteCoreV1NamespacedReplicationControllerInput.Type;

// Output Schema
export const DeleteCoreV1NamespacedReplicationControllerOutput =
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
export type DeleteCoreV1NamespacedReplicationControllerOutput =
  typeof DeleteCoreV1NamespacedReplicationControllerOutput.Type;

// The operation
/**
 * delete a ReplicationController
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1NamespacedReplicationController =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1NamespacedReplicationControllerInput,
    outputSchema: DeleteCoreV1NamespacedReplicationControllerOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteCoreV1NamespacedResourceQuotaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/resourcequotas/{name}",
    }),
  );
export type DeleteCoreV1NamespacedResourceQuotaInput =
  typeof DeleteCoreV1NamespacedResourceQuotaInput.Type;

// Output Schema
export const DeleteCoreV1NamespacedResourceQuotaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaStatusSchema),
    ),
  });
export type DeleteCoreV1NamespacedResourceQuotaOutput =
  typeof DeleteCoreV1NamespacedResourceQuotaOutput.Type;

// The operation
/**
 * delete a ResourceQuota
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1NamespacedResourceQuota =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1NamespacedResourceQuotaInput,
    outputSchema: DeleteCoreV1NamespacedResourceQuotaOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteCoreV1NamespacedSecretInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/secrets/{name}",
    }),
  );
export type DeleteCoreV1NamespacedSecretInput =
  typeof DeleteCoreV1NamespacedSecretInput.Type;

// Output Schema
export const DeleteCoreV1NamespacedSecretOutput =
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
export type DeleteCoreV1NamespacedSecretOutput =
  typeof DeleteCoreV1NamespacedSecretOutput.Type;

// The operation
/**
 * delete a Secret
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1NamespacedSecret =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1NamespacedSecretInput,
    outputSchema: DeleteCoreV1NamespacedSecretOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteCoreV1NamespacedServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/services/{name}",
    }),
  );
export type DeleteCoreV1NamespacedServiceInput =
  typeof DeleteCoreV1NamespacedServiceInput.Type;

// Output Schema
export const DeleteCoreV1NamespacedServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceStatusSchema),
    ),
  });
export type DeleteCoreV1NamespacedServiceOutput =
  typeof DeleteCoreV1NamespacedServiceOutput.Type;

// The operation
/**
 * delete a Service
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1NamespacedService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1NamespacedServiceInput,
    outputSchema: DeleteCoreV1NamespacedServiceOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteCoreV1NamespacedServiceAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/v1/namespaces/{namespace}/serviceaccounts/{name}",
    }),
  );
export type DeleteCoreV1NamespacedServiceAccountInput =
  typeof DeleteCoreV1NamespacedServiceAccountInput.Type;

// Output Schema
export const DeleteCoreV1NamespacedServiceAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    automountServiceAccountToken: Schema.optional(Schema.Boolean),
    imagePullSecrets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_LocalObjectReferenceSchema),
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    secrets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
      ),
    ),
  });
export type DeleteCoreV1NamespacedServiceAccountOutput =
  typeof DeleteCoreV1NamespacedServiceAccountOutput.Type;

// The operation
/**
 * delete a ServiceAccount
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1NamespacedServiceAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1NamespacedServiceAccountInput,
    outputSchema: DeleteCoreV1NamespacedServiceAccountOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteCoreV1NodeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dryRun: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "DELETE", path: "/api/v1/nodes/{name}" }));
export type DeleteCoreV1NodeInput = typeof DeleteCoreV1NodeInput.Type;

// Output Schema
export const DeleteCoreV1NodeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type DeleteCoreV1NodeOutput = typeof DeleteCoreV1NodeOutput.Type;

// The operation
/**
 * delete a Node
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1Node = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteCoreV1NodeInput,
  outputSchema: DeleteCoreV1NodeOutput,
  errors: [NotFound, Conflict] as const,
}));
// Input Schema
export const DeleteCoreV1PersistentVolumeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "DELETE", path: "/api/v1/persistentvolumes/{name}" }),
  );
export type DeleteCoreV1PersistentVolumeInput =
  typeof DeleteCoreV1PersistentVolumeInput.Type;

// Output Schema
export const DeleteCoreV1PersistentVolumeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeStatusSchema),
    ),
  });
export type DeleteCoreV1PersistentVolumeOutput =
  typeof DeleteCoreV1PersistentVolumeOutput.Type;

// The operation
/**
 * delete a PersistentVolume
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteCoreV1PersistentVolume =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoreV1PersistentVolumeInput,
    outputSchema: DeleteCoreV1PersistentVolumeOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const GetAPIVersionsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/apis/" }));
export type GetAPIVersionsInput = typeof GetAPIVersionsInput.Type;

// Output Schema
export const GetAPIVersionsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiVersion: Schema.optional(Schema.String),
  groups: Schema.Array(
    Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupSchema),
  ),
  kind: Schema.optional(Schema.String),
});
export type GetAPIVersionsOutput = typeof GetAPIVersionsOutput.Type;

// The operation
/**
 * get available API versions
 */
export const getAPIVersions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAPIVersionsInput,
  outputSchema: GetAPIVersionsOutput,
}));
// Input Schema
export const GetCodeVersionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/version/" }));
export type GetCodeVersionInput = typeof GetCodeVersionInput.Type;

// Output Schema
export const GetCodeVersionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  buildDate: Schema.String,
  compiler: Schema.String,
  emulationMajor: Schema.optional(Schema.String),
  emulationMinor: Schema.optional(Schema.String),
  gitCommit: Schema.String,
  gitTreeState: Schema.String,
  gitVersion: Schema.String,
  goVersion: Schema.String,
  major: Schema.String,
  minCompatibilityMajor: Schema.optional(Schema.String),
  minCompatibilityMinor: Schema.optional(Schema.String),
  minor: Schema.String,
  platform: Schema.String,
});
export type GetCodeVersionOutput = typeof GetCodeVersionOutput.Type;

// The operation
/**
 * get the version information for this server
 */
export const getCodeVersion = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetCodeVersionInput,
  outputSchema: GetCodeVersionOutput,
}));
// Input Schema
export const GetCoreAPIVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/" }),
  );
export type GetCoreAPIVersionsInput = typeof GetCoreAPIVersionsInput.Type;

// Output Schema
export const GetCoreAPIVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    serverAddressByClientCIDRs: Schema.Array(
      Schema.suspend(
        () =>
          io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDRSchema,
      ),
    ),
    versions: Schema.Array(Schema.String),
  });
export type GetCoreAPIVersionsOutput = typeof GetCoreAPIVersionsOutput.Type;

// The operation
/**
 * get available API versions
 */
export const getCoreAPIVersions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetCoreAPIVersionsInput,
  outputSchema: GetCoreAPIVersionsOutput,
}));
// Input Schema
export const GetCoreV1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/" }),
  );
export type GetCoreV1APIResourcesInput = typeof GetCoreV1APIResourcesInput.Type;

// Output Schema
export const GetCoreV1APIResourcesOutput =
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
export type GetCoreV1APIResourcesOutput =
  typeof GetCoreV1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getCoreV1APIResources = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetCoreV1APIResourcesInput,
    outputSchema: GetCoreV1APIResourcesOutput,
  }),
);
// Input Schema
export const GetServiceAccountIssuerOpenIDConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/.well-known/openid-configuration/" }),
  );
export type GetServiceAccountIssuerOpenIDConfigurationInput =
  typeof GetServiceAccountIssuerOpenIDConfigurationInput.Type;

// Output Schema
export const GetServiceAccountIssuerOpenIDConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type GetServiceAccountIssuerOpenIDConfigurationOutput =
  typeof GetServiceAccountIssuerOpenIDConfigurationOutput.Type;

// The operation
/**
 * get service account issuer OpenID configuration, also known as the 'OIDC discovery doc'
 */
export const getServiceAccountIssuerOpenIDConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetServiceAccountIssuerOpenIDConfigurationInput,
    outputSchema: GetServiceAccountIssuerOpenIDConfigurationOutput,
  }));
// Input Schema
export const GetServiceAccountIssuerOpenIDKeysetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/openid/v1/jwks/" }),
  );
export type GetServiceAccountIssuerOpenIDKeysetInput =
  typeof GetServiceAccountIssuerOpenIDKeysetInput.Type;

// Output Schema
export const GetServiceAccountIssuerOpenIDKeysetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type GetServiceAccountIssuerOpenIDKeysetOutput =
  typeof GetServiceAccountIssuerOpenIDKeysetOutput.Type;

// The operation
/**
 * get service account issuer OpenID JSON Web Key Set (contains public token verification keys)
 */
export const getServiceAccountIssuerOpenIDKeyset =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetServiceAccountIssuerOpenIDKeysetInput,
    outputSchema: GetServiceAccountIssuerOpenIDKeysetOutput,
  }));
// Input Schema
export const ListCoreV1ComponentStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/componentstatuses" }),
  );
export type ListCoreV1ComponentStatusInput =
  typeof ListCoreV1ComponentStatusInput.Type;

// Output Schema
export const ListCoreV1ComponentStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_ComponentStatusSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1ComponentStatusOutput =
  typeof ListCoreV1ComponentStatusOutput.Type;

// The operation
/**
 * list objects of kind ComponentStatus
 */
export const listCoreV1ComponentStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListCoreV1ComponentStatusInput,
    outputSchema: ListCoreV1ComponentStatusOutput,
  }),
);
// Input Schema
export const ListCoreV1ConfigMapForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/configmaps" }),
  );
export type ListCoreV1ConfigMapForAllNamespacesInput =
  typeof ListCoreV1ConfigMapForAllNamespacesInput.Type;

// Output Schema
export const ListCoreV1ConfigMapForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_ConfigMapSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1ConfigMapForAllNamespacesOutput =
  typeof ListCoreV1ConfigMapForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind ConfigMap
 */
export const listCoreV1ConfigMapForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1ConfigMapForAllNamespacesInput,
    outputSchema: ListCoreV1ConfigMapForAllNamespacesOutput,
  }));
// Input Schema
export const ListCoreV1EndpointsForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/endpoints" }),
  );
export type ListCoreV1EndpointsForAllNamespacesInput =
  typeof ListCoreV1EndpointsForAllNamespacesInput.Type;

// Output Schema
export const ListCoreV1EndpointsForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_EndpointsSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1EndpointsForAllNamespacesOutput =
  typeof ListCoreV1EndpointsForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind Endpoints
 */
export const listCoreV1EndpointsForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1EndpointsForAllNamespacesInput,
    outputSchema: ListCoreV1EndpointsForAllNamespacesOutput,
  }));
// Input Schema
export const ListCoreV1EventForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/events" }),
  );
export type ListCoreV1EventForAllNamespacesInput =
  typeof ListCoreV1EventForAllNamespacesInput.Type;

// Output Schema
export const ListCoreV1EventForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_EventSchema)),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1EventForAllNamespacesOutput =
  typeof ListCoreV1EventForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind Event
 */
export const listCoreV1EventForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1EventForAllNamespacesInput,
    outputSchema: ListCoreV1EventForAllNamespacesOutput,
  }));
// Input Schema
export const ListCoreV1LimitRangeForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/limitranges" }),
  );
export type ListCoreV1LimitRangeForAllNamespacesInput =
  typeof ListCoreV1LimitRangeForAllNamespacesInput.Type;

// Output Schema
export const ListCoreV1LimitRangeForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_LimitRangeSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1LimitRangeForAllNamespacesOutput =
  typeof ListCoreV1LimitRangeForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind LimitRange
 */
export const listCoreV1LimitRangeForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1LimitRangeForAllNamespacesInput,
    outputSchema: ListCoreV1LimitRangeForAllNamespacesOutput,
  }));
// Input Schema
export const ListCoreV1NamespaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/namespaces" }),
  );
export type ListCoreV1NamespaceInput = typeof ListCoreV1NamespaceInput.Type;

// Output Schema
export const ListCoreV1NamespaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1NamespaceOutput = typeof ListCoreV1NamespaceOutput.Type;

// The operation
/**
 * list or watch objects of kind Namespace
 */
export const listCoreV1Namespace = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListCoreV1NamespaceInput,
  outputSchema: ListCoreV1NamespaceOutput,
}));
// Input Schema
export const ListCoreV1NamespacedConfigMapInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/configmaps",
    }),
  );
export type ListCoreV1NamespacedConfigMapInput =
  typeof ListCoreV1NamespacedConfigMapInput.Type;

// Output Schema
export const ListCoreV1NamespacedConfigMapOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_ConfigMapSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1NamespacedConfigMapOutput =
  typeof ListCoreV1NamespacedConfigMapOutput.Type;

// The operation
/**
 * list or watch objects of kind ConfigMap
 */
export const listCoreV1NamespacedConfigMap =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1NamespacedConfigMapInput,
    outputSchema: ListCoreV1NamespacedConfigMapOutput,
  }));
// Input Schema
export const ListCoreV1NamespacedEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/namespaces/{namespace}/endpoints" }),
  );
export type ListCoreV1NamespacedEndpointsInput =
  typeof ListCoreV1NamespacedEndpointsInput.Type;

// Output Schema
export const ListCoreV1NamespacedEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_EndpointsSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1NamespacedEndpointsOutput =
  typeof ListCoreV1NamespacedEndpointsOutput.Type;

// The operation
/**
 * list or watch objects of kind Endpoints
 */
export const listCoreV1NamespacedEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1NamespacedEndpointsInput,
    outputSchema: ListCoreV1NamespacedEndpointsOutput,
  }));
// Input Schema
export const ListCoreV1NamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/namespaces/{namespace}/events" }),
  );
export type ListCoreV1NamespacedEventInput =
  typeof ListCoreV1NamespacedEventInput.Type;

// Output Schema
export const ListCoreV1NamespacedEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_EventSchema)),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1NamespacedEventOutput =
  typeof ListCoreV1NamespacedEventOutput.Type;

// The operation
/**
 * list or watch objects of kind Event
 */
export const listCoreV1NamespacedEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListCoreV1NamespacedEventInput,
    outputSchema: ListCoreV1NamespacedEventOutput,
  }),
);
// Input Schema
export const ListCoreV1NamespacedLimitRangeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/limitranges",
    }),
  );
export type ListCoreV1NamespacedLimitRangeInput =
  typeof ListCoreV1NamespacedLimitRangeInput.Type;

// Output Schema
export const ListCoreV1NamespacedLimitRangeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_LimitRangeSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1NamespacedLimitRangeOutput =
  typeof ListCoreV1NamespacedLimitRangeOutput.Type;

// The operation
/**
 * list or watch objects of kind LimitRange
 */
export const listCoreV1NamespacedLimitRange =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1NamespacedLimitRangeInput,
    outputSchema: ListCoreV1NamespacedLimitRangeOutput,
  }));
// Input Schema
export const ListCoreV1NamespacedPersistentVolumeClaimInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/persistentvolumeclaims",
    }),
  );
export type ListCoreV1NamespacedPersistentVolumeClaimInput =
  typeof ListCoreV1NamespacedPersistentVolumeClaimInput.Type;

// Output Schema
export const ListCoreV1NamespacedPersistentVolumeClaimOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeClaimSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1NamespacedPersistentVolumeClaimOutput =
  typeof ListCoreV1NamespacedPersistentVolumeClaimOutput.Type;

// The operation
/**
 * list or watch objects of kind PersistentVolumeClaim
 */
export const listCoreV1NamespacedPersistentVolumeClaim =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1NamespacedPersistentVolumeClaimInput,
    outputSchema: ListCoreV1NamespacedPersistentVolumeClaimOutput,
  }));
// Input Schema
export const ListCoreV1NamespacedPodInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/namespaces/{namespace}/pods" }),
  );
export type ListCoreV1NamespacedPodInput =
  typeof ListCoreV1NamespacedPodInput.Type;

// Output Schema
export const ListCoreV1NamespacedPodOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_PodSchema)),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1NamespacedPodOutput =
  typeof ListCoreV1NamespacedPodOutput.Type;

// The operation
/**
 * list or watch objects of kind Pod
 */
export const listCoreV1NamespacedPod = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListCoreV1NamespacedPodInput,
    outputSchema: ListCoreV1NamespacedPodOutput,
  }),
);
// Input Schema
export const ListCoreV1NamespacedPodTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/podtemplates",
    }),
  );
export type ListCoreV1NamespacedPodTemplateInput =
  typeof ListCoreV1NamespacedPodTemplateInput.Type;

// Output Schema
export const ListCoreV1NamespacedPodTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_PodTemplateSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1NamespacedPodTemplateOutput =
  typeof ListCoreV1NamespacedPodTemplateOutput.Type;

// The operation
/**
 * list or watch objects of kind PodTemplate
 */
export const listCoreV1NamespacedPodTemplate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1NamespacedPodTemplateInput,
    outputSchema: ListCoreV1NamespacedPodTemplateOutput,
  }));
// Input Schema
export const ListCoreV1NamespacedReplicationControllerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/replicationcontrollers",
    }),
  );
export type ListCoreV1NamespacedReplicationControllerInput =
  typeof ListCoreV1NamespacedReplicationControllerInput.Type;

// Output Schema
export const ListCoreV1NamespacedReplicationControllerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_ReplicationControllerSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1NamespacedReplicationControllerOutput =
  typeof ListCoreV1NamespacedReplicationControllerOutput.Type;

// The operation
/**
 * list or watch objects of kind ReplicationController
 */
export const listCoreV1NamespacedReplicationController =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1NamespacedReplicationControllerInput,
    outputSchema: ListCoreV1NamespacedReplicationControllerOutput,
  }));
// Input Schema
export const ListCoreV1NamespacedResourceQuotaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/resourcequotas",
    }),
  );
export type ListCoreV1NamespacedResourceQuotaInput =
  typeof ListCoreV1NamespacedResourceQuotaInput.Type;

// Output Schema
export const ListCoreV1NamespacedResourceQuotaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1NamespacedResourceQuotaOutput =
  typeof ListCoreV1NamespacedResourceQuotaOutput.Type;

// The operation
/**
 * list or watch objects of kind ResourceQuota
 */
export const listCoreV1NamespacedResourceQuota =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1NamespacedResourceQuotaInput,
    outputSchema: ListCoreV1NamespacedResourceQuotaOutput,
  }));
// Input Schema
export const ListCoreV1NamespacedSecretInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/namespaces/{namespace}/secrets" }),
  );
export type ListCoreV1NamespacedSecretInput =
  typeof ListCoreV1NamespacedSecretInput.Type;

// Output Schema
export const ListCoreV1NamespacedSecretOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_SecretSchema)),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1NamespacedSecretOutput =
  typeof ListCoreV1NamespacedSecretOutput.Type;

// The operation
/**
 * list or watch objects of kind Secret
 */
export const listCoreV1NamespacedSecret = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListCoreV1NamespacedSecretInput,
    outputSchema: ListCoreV1NamespacedSecretOutput,
  }),
);
// Input Schema
export const ListCoreV1NamespacedServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/namespaces/{namespace}/services" }),
  );
export type ListCoreV1NamespacedServiceInput =
  typeof ListCoreV1NamespacedServiceInput.Type;

// Output Schema
export const ListCoreV1NamespacedServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_ServiceSchema)),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1NamespacedServiceOutput =
  typeof ListCoreV1NamespacedServiceOutput.Type;

// The operation
/**
 * list or watch objects of kind Service
 */
export const listCoreV1NamespacedService = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListCoreV1NamespacedServiceInput,
    outputSchema: ListCoreV1NamespacedServiceOutput,
  }),
);
// Input Schema
export const ListCoreV1NamespacedServiceAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/serviceaccounts",
    }),
  );
export type ListCoreV1NamespacedServiceAccountInput =
  typeof ListCoreV1NamespacedServiceAccountInput.Type;

// Output Schema
export const ListCoreV1NamespacedServiceAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceAccountSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1NamespacedServiceAccountOutput =
  typeof ListCoreV1NamespacedServiceAccountOutput.Type;

// The operation
/**
 * list or watch objects of kind ServiceAccount
 */
export const listCoreV1NamespacedServiceAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1NamespacedServiceAccountInput,
    outputSchema: ListCoreV1NamespacedServiceAccountOutput,
  }));
// Input Schema
export const ListCoreV1NodeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/api/v1/nodes" }));
export type ListCoreV1NodeInput = typeof ListCoreV1NodeInput.Type;

// Output Schema
export const ListCoreV1NodeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiVersion: Schema.optional(Schema.String),
  items: Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_NodeSchema)),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(
    Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
  ),
});
export type ListCoreV1NodeOutput = typeof ListCoreV1NodeOutput.Type;

// The operation
/**
 * list or watch objects of kind Node
 */
export const listCoreV1Node = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListCoreV1NodeInput,
  outputSchema: ListCoreV1NodeOutput,
}));
// Input Schema
export const ListCoreV1PersistentVolumeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/persistentvolumes" }),
  );
export type ListCoreV1PersistentVolumeInput =
  typeof ListCoreV1PersistentVolumeInput.Type;

// Output Schema
export const ListCoreV1PersistentVolumeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1PersistentVolumeOutput =
  typeof ListCoreV1PersistentVolumeOutput.Type;

// The operation
/**
 * list or watch objects of kind PersistentVolume
 */
export const listCoreV1PersistentVolume = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListCoreV1PersistentVolumeInput,
    outputSchema: ListCoreV1PersistentVolumeOutput,
  }),
);
// Input Schema
export const ListCoreV1PersistentVolumeClaimForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/persistentvolumeclaims" }),
  );
export type ListCoreV1PersistentVolumeClaimForAllNamespacesInput =
  typeof ListCoreV1PersistentVolumeClaimForAllNamespacesInput.Type;

// Output Schema
export const ListCoreV1PersistentVolumeClaimForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeClaimSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1PersistentVolumeClaimForAllNamespacesOutput =
  typeof ListCoreV1PersistentVolumeClaimForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind PersistentVolumeClaim
 */
export const listCoreV1PersistentVolumeClaimForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1PersistentVolumeClaimForAllNamespacesInput,
    outputSchema: ListCoreV1PersistentVolumeClaimForAllNamespacesOutput,
  }));
// Input Schema
export const ListCoreV1PodForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/pods" }),
  );
export type ListCoreV1PodForAllNamespacesInput =
  typeof ListCoreV1PodForAllNamespacesInput.Type;

// Output Schema
export const ListCoreV1PodForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_PodSchema)),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1PodForAllNamespacesOutput =
  typeof ListCoreV1PodForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind Pod
 */
export const listCoreV1PodForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1PodForAllNamespacesInput,
    outputSchema: ListCoreV1PodForAllNamespacesOutput,
  }));
// Input Schema
export const ListCoreV1PodTemplateForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/podtemplates" }),
  );
export type ListCoreV1PodTemplateForAllNamespacesInput =
  typeof ListCoreV1PodTemplateForAllNamespacesInput.Type;

// Output Schema
export const ListCoreV1PodTemplateForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_PodTemplateSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1PodTemplateForAllNamespacesOutput =
  typeof ListCoreV1PodTemplateForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind PodTemplate
 */
export const listCoreV1PodTemplateForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1PodTemplateForAllNamespacesInput,
    outputSchema: ListCoreV1PodTemplateForAllNamespacesOutput,
  }));
// Input Schema
export const ListCoreV1ReplicationControllerForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/replicationcontrollers" }),
  );
export type ListCoreV1ReplicationControllerForAllNamespacesInput =
  typeof ListCoreV1ReplicationControllerForAllNamespacesInput.Type;

// Output Schema
export const ListCoreV1ReplicationControllerForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_ReplicationControllerSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1ReplicationControllerForAllNamespacesOutput =
  typeof ListCoreV1ReplicationControllerForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind ReplicationController
 */
export const listCoreV1ReplicationControllerForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1ReplicationControllerForAllNamespacesInput,
    outputSchema: ListCoreV1ReplicationControllerForAllNamespacesOutput,
  }));
// Input Schema
export const ListCoreV1ResourceQuotaForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/resourcequotas" }),
  );
export type ListCoreV1ResourceQuotaForAllNamespacesInput =
  typeof ListCoreV1ResourceQuotaForAllNamespacesInput.Type;

// Output Schema
export const ListCoreV1ResourceQuotaForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1ResourceQuotaForAllNamespacesOutput =
  typeof ListCoreV1ResourceQuotaForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind ResourceQuota
 */
export const listCoreV1ResourceQuotaForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1ResourceQuotaForAllNamespacesInput,
    outputSchema: ListCoreV1ResourceQuotaForAllNamespacesOutput,
  }));
// Input Schema
export const ListCoreV1SecretForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/secrets" }),
  );
export type ListCoreV1SecretForAllNamespacesInput =
  typeof ListCoreV1SecretForAllNamespacesInput.Type;

// Output Schema
export const ListCoreV1SecretForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_SecretSchema)),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1SecretForAllNamespacesOutput =
  typeof ListCoreV1SecretForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind Secret
 */
export const listCoreV1SecretForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1SecretForAllNamespacesInput,
    outputSchema: ListCoreV1SecretForAllNamespacesOutput,
  }));
// Input Schema
export const ListCoreV1ServiceAccountForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/serviceaccounts" }),
  );
export type ListCoreV1ServiceAccountForAllNamespacesInput =
  typeof ListCoreV1ServiceAccountForAllNamespacesInput.Type;

// Output Schema
export const ListCoreV1ServiceAccountForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceAccountSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1ServiceAccountForAllNamespacesOutput =
  typeof ListCoreV1ServiceAccountForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind ServiceAccount
 */
export const listCoreV1ServiceAccountForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1ServiceAccountForAllNamespacesInput,
    outputSchema: ListCoreV1ServiceAccountForAllNamespacesOutput,
  }));
// Input Schema
export const ListCoreV1ServiceForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/services" }),
  );
export type ListCoreV1ServiceForAllNamespacesInput =
  typeof ListCoreV1ServiceForAllNamespacesInput.Type;

// Output Schema
export const ListCoreV1ServiceForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_ServiceSchema)),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListCoreV1ServiceForAllNamespacesOutput =
  typeof ListCoreV1ServiceForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind Service
 */
export const listCoreV1ServiceForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoreV1ServiceForAllNamespacesInput,
    outputSchema: ListCoreV1ServiceForAllNamespacesOutput,
  }));
// Input Schema
export const LogFileHandlerInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/logs/{logpath}" }));
export type LogFileHandlerInput = typeof LogFileHandlerInput.Type;

// Output Schema
export const LogFileHandlerOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LogFileHandlerOutput = typeof LogFileHandlerOutput.Type;

// The operation
export const logFileHandler = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogFileHandlerInput,
  outputSchema: LogFileHandlerOutput,
}));
// Input Schema
export const LogFileListHandlerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/logs/" }),
  );
export type LogFileListHandlerInput = typeof LogFileListHandlerInput.Type;

// Output Schema
export const LogFileListHandlerOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LogFileListHandlerOutput = typeof LogFileListHandlerOutput.Type;

// The operation
export const logFileListHandler = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogFileListHandlerInput,
  outputSchema: LogFileListHandlerOutput,
}));
// Input Schema
export const PatchCoreV1NamespaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "PATCH", path: "/api/v1/namespaces/{name}" }));
export type PatchCoreV1NamespaceInput = typeof PatchCoreV1NamespaceInput.Type;

// Output Schema
export const PatchCoreV1NamespaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceStatusSchema),
    ),
  });
export type PatchCoreV1NamespaceOutput = typeof PatchCoreV1NamespaceOutput.Type;

// The operation
/**
 * partially update the specified Namespace
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1Namespace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PatchCoreV1NamespaceInput,
    outputSchema: PatchCoreV1NamespaceOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const PatchCoreV1NamespaceStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "PATCH", path: "/api/v1/namespaces/{name}/status" }),
  );
export type PatchCoreV1NamespaceStatusInput =
  typeof PatchCoreV1NamespaceStatusInput.Type;

// Output Schema
export const PatchCoreV1NamespaceStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceStatusSchema),
    ),
  });
export type PatchCoreV1NamespaceStatusOutput =
  typeof PatchCoreV1NamespaceStatusOutput.Type;

// The operation
/**
 * partially update status of the specified Namespace
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespaceStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PatchCoreV1NamespaceStatusInput,
    outputSchema: PatchCoreV1NamespaceStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const PatchCoreV1NamespacedConfigMapInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/configmaps/{name}",
    }),
  );
export type PatchCoreV1NamespacedConfigMapInput =
  typeof PatchCoreV1NamespacedConfigMapInput.Type;

// Output Schema
export const PatchCoreV1NamespacedConfigMapOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    binaryData: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    data: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    immutable: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
  });
export type PatchCoreV1NamespacedConfigMapOutput =
  typeof PatchCoreV1NamespacedConfigMapOutput.Type;

// The operation
/**
 * partially update the specified ConfigMap
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedConfigMap =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedConfigMapInput,
    outputSchema: PatchCoreV1NamespacedConfigMapOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/endpoints/{name}",
    }),
  );
export type PatchCoreV1NamespacedEndpointsInput =
  typeof PatchCoreV1NamespacedEndpointsInput.Type;

// Output Schema
export const PatchCoreV1NamespacedEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    subsets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_EndpointSubsetSchema),
      ),
    ),
  });
export type PatchCoreV1NamespacedEndpointsOutput =
  typeof PatchCoreV1NamespacedEndpointsOutput.Type;

// The operation
/**
 * partially update the specified Endpoints
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedEndpointsInput,
    outputSchema: PatchCoreV1NamespacedEndpointsOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/events/{name}",
    }),
  );
export type PatchCoreV1NamespacedEventInput =
  typeof PatchCoreV1NamespacedEventInput.Type;

// Output Schema
export const PatchCoreV1NamespacedEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
    eventTime: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
      ),
    ),
    firstTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    involvedObject: Schema.suspend(
      () => io_k8s_api_core_v1_ObjectReferenceSchema,
    ),
    kind: Schema.optional(Schema.String),
    lastTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    metadata: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
    ),
    reason: Schema.optional(Schema.String),
    related: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    reportingComponent: Schema.optional(Schema.String),
    reportingInstance: Schema.optional(Schema.String),
    series: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSeriesSchema),
    ),
    source: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSourceSchema),
    ),
    type: Schema.optional(Schema.String),
  });
export type PatchCoreV1NamespacedEventOutput =
  typeof PatchCoreV1NamespacedEventOutput.Type;

// The operation
/**
 * partially update the specified Event
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PatchCoreV1NamespacedEventInput,
    outputSchema: PatchCoreV1NamespacedEventOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const PatchCoreV1NamespacedLimitRangeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/limitranges/{name}",
    }),
  );
export type PatchCoreV1NamespacedLimitRangeInput =
  typeof PatchCoreV1NamespacedLimitRangeInput.Type;

// Output Schema
export const PatchCoreV1NamespacedLimitRangeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LimitRangeSpecSchema),
    ),
  });
export type PatchCoreV1NamespacedLimitRangeOutput =
  typeof PatchCoreV1NamespacedLimitRangeOutput.Type;

// The operation
/**
 * partially update the specified LimitRange
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedLimitRange =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedLimitRangeInput,
    outputSchema: PatchCoreV1NamespacedLimitRangeOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedPersistentVolumeClaimInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}",
    }),
  );
export type PatchCoreV1NamespacedPersistentVolumeClaimInput =
  typeof PatchCoreV1NamespacedPersistentVolumeClaimInput.Type;

// Output Schema
export const PatchCoreV1NamespacedPersistentVolumeClaimOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeClaimSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PersistentVolumeClaimStatusSchema,
      ),
    ),
  });
export type PatchCoreV1NamespacedPersistentVolumeClaimOutput =
  typeof PatchCoreV1NamespacedPersistentVolumeClaimOutput.Type;

// The operation
/**
 * partially update the specified PersistentVolumeClaim
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedPersistentVolumeClaim =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedPersistentVolumeClaimInput,
    outputSchema: PatchCoreV1NamespacedPersistentVolumeClaimOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedPersistentVolumeClaimStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status",
    }),
  );
export type PatchCoreV1NamespacedPersistentVolumeClaimStatusInput =
  typeof PatchCoreV1NamespacedPersistentVolumeClaimStatusInput.Type;

// Output Schema
export const PatchCoreV1NamespacedPersistentVolumeClaimStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeClaimSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PersistentVolumeClaimStatusSchema,
      ),
    ),
  });
export type PatchCoreV1NamespacedPersistentVolumeClaimStatusOutput =
  typeof PatchCoreV1NamespacedPersistentVolumeClaimStatusOutput.Type;

// The operation
/**
 * partially update status of the specified PersistentVolumeClaim
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedPersistentVolumeClaimStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedPersistentVolumeClaimStatusInput,
    outputSchema: PatchCoreV1NamespacedPersistentVolumeClaimStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedPodInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/pods/{name}",
    }),
  );
export type PatchCoreV1NamespacedPodInput =
  typeof PatchCoreV1NamespacedPodInput.Type;

// Output Schema
export const PatchCoreV1NamespacedPodOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  });
export type PatchCoreV1NamespacedPodOutput =
  typeof PatchCoreV1NamespacedPodOutput.Type;

// The operation
/**
 * partially update the specified Pod
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedPod = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PatchCoreV1NamespacedPodInput,
    outputSchema: PatchCoreV1NamespacedPodOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const PatchCoreV1NamespacedPodEphemeralcontainersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers",
    }),
  );
export type PatchCoreV1NamespacedPodEphemeralcontainersInput =
  typeof PatchCoreV1NamespacedPodEphemeralcontainersInput.Type;

// Output Schema
export const PatchCoreV1NamespacedPodEphemeralcontainersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  });
export type PatchCoreV1NamespacedPodEphemeralcontainersOutput =
  typeof PatchCoreV1NamespacedPodEphemeralcontainersOutput.Type;

// The operation
/**
 * partially update ephemeralcontainers of the specified Pod
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedPodEphemeralcontainers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedPodEphemeralcontainersInput,
    outputSchema: PatchCoreV1NamespacedPodEphemeralcontainersOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedPodResizeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/resize",
    }),
  );
export type PatchCoreV1NamespacedPodResizeInput =
  typeof PatchCoreV1NamespacedPodResizeInput.Type;

// Output Schema
export const PatchCoreV1NamespacedPodResizeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  });
export type PatchCoreV1NamespacedPodResizeOutput =
  typeof PatchCoreV1NamespacedPodResizeOutput.Type;

// The operation
/**
 * partially update resize of the specified Pod
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedPodResize =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedPodResizeInput,
    outputSchema: PatchCoreV1NamespacedPodResizeOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedPodStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/status",
    }),
  );
export type PatchCoreV1NamespacedPodStatusInput =
  typeof PatchCoreV1NamespacedPodStatusInput.Type;

// Output Schema
export const PatchCoreV1NamespacedPodStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  });
export type PatchCoreV1NamespacedPodStatusOutput =
  typeof PatchCoreV1NamespacedPodStatusOutput.Type;

// The operation
/**
 * partially update status of the specified Pod
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedPodStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedPodStatusInput,
    outputSchema: PatchCoreV1NamespacedPodStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedPodTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/podtemplates/{name}",
    }),
  );
export type PatchCoreV1NamespacedPodTemplateInput =
  typeof PatchCoreV1NamespacedPodTemplateInput.Type;

// Output Schema
export const PatchCoreV1NamespacedPodTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    template: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodTemplateSpecSchema),
    ),
  });
export type PatchCoreV1NamespacedPodTemplateOutput =
  typeof PatchCoreV1NamespacedPodTemplateOutput.Type;

// The operation
/**
 * partially update the specified PodTemplate
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedPodTemplate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedPodTemplateInput,
    outputSchema: PatchCoreV1NamespacedPodTemplateOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedReplicationControllerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}",
    }),
  );
export type PatchCoreV1NamespacedReplicationControllerInput =
  typeof PatchCoreV1NamespacedReplicationControllerInput.Type;

// Output Schema
export const PatchCoreV1NamespacedReplicationControllerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ReplicationControllerSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_ReplicationControllerStatusSchema,
      ),
    ),
  });
export type PatchCoreV1NamespacedReplicationControllerOutput =
  typeof PatchCoreV1NamespacedReplicationControllerOutput.Type;

// The operation
/**
 * partially update the specified ReplicationController
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedReplicationController =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedReplicationControllerInput,
    outputSchema: PatchCoreV1NamespacedReplicationControllerOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedReplicationControllerScaleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale",
    }),
  );
export type PatchCoreV1NamespacedReplicationControllerScaleInput =
  typeof PatchCoreV1NamespacedReplicationControllerScaleInput.Type;

// Output Schema
export const PatchCoreV1NamespacedReplicationControllerScaleOutput =
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
export type PatchCoreV1NamespacedReplicationControllerScaleOutput =
  typeof PatchCoreV1NamespacedReplicationControllerScaleOutput.Type;

// The operation
/**
 * partially update scale of the specified ReplicationController
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedReplicationControllerScale =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedReplicationControllerScaleInput,
    outputSchema: PatchCoreV1NamespacedReplicationControllerScaleOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedReplicationControllerStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status",
    }),
  );
export type PatchCoreV1NamespacedReplicationControllerStatusInput =
  typeof PatchCoreV1NamespacedReplicationControllerStatusInput.Type;

// Output Schema
export const PatchCoreV1NamespacedReplicationControllerStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ReplicationControllerSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_ReplicationControllerStatusSchema,
      ),
    ),
  });
export type PatchCoreV1NamespacedReplicationControllerStatusOutput =
  typeof PatchCoreV1NamespacedReplicationControllerStatusOutput.Type;

// The operation
/**
 * partially update status of the specified ReplicationController
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedReplicationControllerStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedReplicationControllerStatusInput,
    outputSchema: PatchCoreV1NamespacedReplicationControllerStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedResourceQuotaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/resourcequotas/{name}",
    }),
  );
export type PatchCoreV1NamespacedResourceQuotaInput =
  typeof PatchCoreV1NamespacedResourceQuotaInput.Type;

// Output Schema
export const PatchCoreV1NamespacedResourceQuotaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaStatusSchema),
    ),
  });
export type PatchCoreV1NamespacedResourceQuotaOutput =
  typeof PatchCoreV1NamespacedResourceQuotaOutput.Type;

// The operation
/**
 * partially update the specified ResourceQuota
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedResourceQuota =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedResourceQuotaInput,
    outputSchema: PatchCoreV1NamespacedResourceQuotaOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedResourceQuotaStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/resourcequotas/{name}/status",
    }),
  );
export type PatchCoreV1NamespacedResourceQuotaStatusInput =
  typeof PatchCoreV1NamespacedResourceQuotaStatusInput.Type;

// Output Schema
export const PatchCoreV1NamespacedResourceQuotaStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaStatusSchema),
    ),
  });
export type PatchCoreV1NamespacedResourceQuotaStatusOutput =
  typeof PatchCoreV1NamespacedResourceQuotaStatusOutput.Type;

// The operation
/**
 * partially update status of the specified ResourceQuota
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedResourceQuotaStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedResourceQuotaStatusInput,
    outputSchema: PatchCoreV1NamespacedResourceQuotaStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedSecretInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/secrets/{name}",
    }),
  );
export type PatchCoreV1NamespacedSecretInput =
  typeof PatchCoreV1NamespacedSecretInput.Type;

// Output Schema
export const PatchCoreV1NamespacedSecretOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    immutable: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    stringData: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.optional(Schema.String),
  });
export type PatchCoreV1NamespacedSecretOutput =
  typeof PatchCoreV1NamespacedSecretOutput.Type;

// The operation
/**
 * partially update the specified Secret
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedSecret = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PatchCoreV1NamespacedSecretInput,
    outputSchema: PatchCoreV1NamespacedSecretOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const PatchCoreV1NamespacedServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/services/{name}",
    }),
  );
export type PatchCoreV1NamespacedServiceInput =
  typeof PatchCoreV1NamespacedServiceInput.Type;

// Output Schema
export const PatchCoreV1NamespacedServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceStatusSchema),
    ),
  });
export type PatchCoreV1NamespacedServiceOutput =
  typeof PatchCoreV1NamespacedServiceOutput.Type;

// The operation
/**
 * partially update the specified Service
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedServiceInput,
    outputSchema: PatchCoreV1NamespacedServiceOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedServiceAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/serviceaccounts/{name}",
    }),
  );
export type PatchCoreV1NamespacedServiceAccountInput =
  typeof PatchCoreV1NamespacedServiceAccountInput.Type;

// Output Schema
export const PatchCoreV1NamespacedServiceAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    automountServiceAccountToken: Schema.optional(Schema.Boolean),
    imagePullSecrets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_LocalObjectReferenceSchema),
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    secrets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
      ),
    ),
  });
export type PatchCoreV1NamespacedServiceAccountOutput =
  typeof PatchCoreV1NamespacedServiceAccountOutput.Type;

// The operation
/**
 * partially update the specified ServiceAccount
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedServiceAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedServiceAccountInput,
    outputSchema: PatchCoreV1NamespacedServiceAccountOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NamespacedServiceStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/namespaces/{namespace}/services/{name}/status",
    }),
  );
export type PatchCoreV1NamespacedServiceStatusInput =
  typeof PatchCoreV1NamespacedServiceStatusInput.Type;

// Output Schema
export const PatchCoreV1NamespacedServiceStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceStatusSchema),
    ),
  });
export type PatchCoreV1NamespacedServiceStatusOutput =
  typeof PatchCoreV1NamespacedServiceStatusOutput.Type;

// The operation
/**
 * partially update status of the specified Service
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NamespacedServiceStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1NamespacedServiceStatusInput,
    outputSchema: PatchCoreV1NamespacedServiceStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoreV1NodeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dryRun: Schema.optional(Schema.String),
  fieldValidation: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "PATCH", path: "/api/v1/nodes/{name}" }));
export type PatchCoreV1NodeInput = typeof PatchCoreV1NodeInput.Type;

// Output Schema
export const PatchCoreV1NodeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiVersion: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(
    Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema),
  ),
  spec: Schema.optional(
    Schema.suspend(() => io_k8s_api_core_v1_NodeSpecSchema),
  ),
  status: Schema.optional(
    Schema.suspend(() => io_k8s_api_core_v1_NodeStatusSchema),
  ),
});
export type PatchCoreV1NodeOutput = typeof PatchCoreV1NodeOutput.Type;

// The operation
/**
 * partially update the specified Node
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1Node = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PatchCoreV1NodeInput,
  outputSchema: PatchCoreV1NodeOutput,
  errors: [NotFound, Conflict, UnprocessableEntity] as const,
}));
// Input Schema
export const PatchCoreV1NodeStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "PATCH", path: "/api/v1/nodes/{name}/status" }));
export type PatchCoreV1NodeStatusInput = typeof PatchCoreV1NodeStatusInput.Type;

// Output Schema
export const PatchCoreV1NodeStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeStatusSchema),
    ),
  });
export type PatchCoreV1NodeStatusOutput =
  typeof PatchCoreV1NodeStatusOutput.Type;

// The operation
/**
 * partially update status of the specified Node
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1NodeStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PatchCoreV1NodeStatusInput,
    outputSchema: PatchCoreV1NodeStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const PatchCoreV1PersistentVolumeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "PATCH", path: "/api/v1/persistentvolumes/{name}" }),
  );
export type PatchCoreV1PersistentVolumeInput =
  typeof PatchCoreV1PersistentVolumeInput.Type;

// Output Schema
export const PatchCoreV1PersistentVolumeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeStatusSchema),
    ),
  });
export type PatchCoreV1PersistentVolumeOutput =
  typeof PatchCoreV1PersistentVolumeOutput.Type;

// The operation
/**
 * partially update the specified PersistentVolume
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1PersistentVolume = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PatchCoreV1PersistentVolumeInput,
    outputSchema: PatchCoreV1PersistentVolumeOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const PatchCoreV1PersistentVolumeStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/v1/persistentvolumes/{name}/status",
    }),
  );
export type PatchCoreV1PersistentVolumeStatusInput =
  typeof PatchCoreV1PersistentVolumeStatusInput.Type;

// Output Schema
export const PatchCoreV1PersistentVolumeStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeStatusSchema),
    ),
  });
export type PatchCoreV1PersistentVolumeStatusOutput =
  typeof PatchCoreV1PersistentVolumeStatusOutput.Type;

// The operation
/**
 * partially update status of the specified PersistentVolume
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchCoreV1PersistentVolumeStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoreV1PersistentVolumeStatusInput,
    outputSchema: PatchCoreV1PersistentVolumeStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReadCoreV1ComponentStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/componentstatuses/{name}" }),
  );
export type ReadCoreV1ComponentStatusInput =
  typeof ReadCoreV1ComponentStatusInput.Type;

// Output Schema
export const ReadCoreV1ComponentStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ComponentConditionSchema),
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
  });
export type ReadCoreV1ComponentStatusOutput =
  typeof ReadCoreV1ComponentStatusOutput.Type;

// The operation
/**
 * read the specified ComponentStatus
 */
export const readCoreV1ComponentStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReadCoreV1ComponentStatusInput,
    outputSchema: ReadCoreV1ComponentStatusOutput,
    errors: [NotFound] as const,
  }),
);
// Input Schema
export const ReadCoreV1NamespaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/namespaces/{name}" }),
  );
export type ReadCoreV1NamespaceInput = typeof ReadCoreV1NamespaceInput.Type;

// Output Schema
export const ReadCoreV1NamespaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceStatusSchema),
    ),
  });
export type ReadCoreV1NamespaceOutput = typeof ReadCoreV1NamespaceOutput.Type;

// The operation
/**
 * read the specified Namespace
 */
export const readCoreV1Namespace = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReadCoreV1NamespaceInput,
  outputSchema: ReadCoreV1NamespaceOutput,
  errors: [NotFound] as const,
}));
// Input Schema
export const ReadCoreV1NamespaceStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/namespaces/{name}/status" }),
  );
export type ReadCoreV1NamespaceStatusInput =
  typeof ReadCoreV1NamespaceStatusInput.Type;

// Output Schema
export const ReadCoreV1NamespaceStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceStatusSchema),
    ),
  });
export type ReadCoreV1NamespaceStatusOutput =
  typeof ReadCoreV1NamespaceStatusOutput.Type;

// The operation
/**
 * read status of the specified Namespace
 */
export const readCoreV1NamespaceStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReadCoreV1NamespaceStatusInput,
    outputSchema: ReadCoreV1NamespaceStatusOutput,
    errors: [NotFound] as const,
  }),
);
// Input Schema
export const ReadCoreV1NamespacedConfigMapInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/configmaps/{name}",
    }),
  );
export type ReadCoreV1NamespacedConfigMapInput =
  typeof ReadCoreV1NamespacedConfigMapInput.Type;

// Output Schema
export const ReadCoreV1NamespacedConfigMapOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    binaryData: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    data: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    immutable: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
  });
export type ReadCoreV1NamespacedConfigMapOutput =
  typeof ReadCoreV1NamespacedConfigMapOutput.Type;

// The operation
/**
 * read the specified ConfigMap
 */
export const readCoreV1NamespacedConfigMap =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedConfigMapInput,
    outputSchema: ReadCoreV1NamespacedConfigMapOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NamespacedEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/endpoints/{name}",
    }),
  );
export type ReadCoreV1NamespacedEndpointsInput =
  typeof ReadCoreV1NamespacedEndpointsInput.Type;

// Output Schema
export const ReadCoreV1NamespacedEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    subsets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_EndpointSubsetSchema),
      ),
    ),
  });
export type ReadCoreV1NamespacedEndpointsOutput =
  typeof ReadCoreV1NamespacedEndpointsOutput.Type;

// The operation
/**
 * read the specified Endpoints
 */
export const readCoreV1NamespacedEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedEndpointsInput,
    outputSchema: ReadCoreV1NamespacedEndpointsOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/events/{name}",
    }),
  );
export type ReadCoreV1NamespacedEventInput =
  typeof ReadCoreV1NamespacedEventInput.Type;

// Output Schema
export const ReadCoreV1NamespacedEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
    eventTime: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
      ),
    ),
    firstTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    involvedObject: Schema.suspend(
      () => io_k8s_api_core_v1_ObjectReferenceSchema,
    ),
    kind: Schema.optional(Schema.String),
    lastTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    metadata: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
    ),
    reason: Schema.optional(Schema.String),
    related: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    reportingComponent: Schema.optional(Schema.String),
    reportingInstance: Schema.optional(Schema.String),
    series: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSeriesSchema),
    ),
    source: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSourceSchema),
    ),
    type: Schema.optional(Schema.String),
  });
export type ReadCoreV1NamespacedEventOutput =
  typeof ReadCoreV1NamespacedEventOutput.Type;

// The operation
/**
 * read the specified Event
 */
export const readCoreV1NamespacedEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReadCoreV1NamespacedEventInput,
    outputSchema: ReadCoreV1NamespacedEventOutput,
    errors: [NotFound] as const,
  }),
);
// Input Schema
export const ReadCoreV1NamespacedLimitRangeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/limitranges/{name}",
    }),
  );
export type ReadCoreV1NamespacedLimitRangeInput =
  typeof ReadCoreV1NamespacedLimitRangeInput.Type;

// Output Schema
export const ReadCoreV1NamespacedLimitRangeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LimitRangeSpecSchema),
    ),
  });
export type ReadCoreV1NamespacedLimitRangeOutput =
  typeof ReadCoreV1NamespacedLimitRangeOutput.Type;

// The operation
/**
 * read the specified LimitRange
 */
export const readCoreV1NamespacedLimitRange =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedLimitRangeInput,
    outputSchema: ReadCoreV1NamespacedLimitRangeOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NamespacedPersistentVolumeClaimInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}",
    }),
  );
export type ReadCoreV1NamespacedPersistentVolumeClaimInput =
  typeof ReadCoreV1NamespacedPersistentVolumeClaimInput.Type;

// Output Schema
export const ReadCoreV1NamespacedPersistentVolumeClaimOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeClaimSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PersistentVolumeClaimStatusSchema,
      ),
    ),
  });
export type ReadCoreV1NamespacedPersistentVolumeClaimOutput =
  typeof ReadCoreV1NamespacedPersistentVolumeClaimOutput.Type;

// The operation
/**
 * read the specified PersistentVolumeClaim
 */
export const readCoreV1NamespacedPersistentVolumeClaim =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedPersistentVolumeClaimInput,
    outputSchema: ReadCoreV1NamespacedPersistentVolumeClaimOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NamespacedPersistentVolumeClaimStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status",
    }),
  );
export type ReadCoreV1NamespacedPersistentVolumeClaimStatusInput =
  typeof ReadCoreV1NamespacedPersistentVolumeClaimStatusInput.Type;

// Output Schema
export const ReadCoreV1NamespacedPersistentVolumeClaimStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeClaimSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PersistentVolumeClaimStatusSchema,
      ),
    ),
  });
export type ReadCoreV1NamespacedPersistentVolumeClaimStatusOutput =
  typeof ReadCoreV1NamespacedPersistentVolumeClaimStatusOutput.Type;

// The operation
/**
 * read status of the specified PersistentVolumeClaim
 */
export const readCoreV1NamespacedPersistentVolumeClaimStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedPersistentVolumeClaimStatusInput,
    outputSchema: ReadCoreV1NamespacedPersistentVolumeClaimStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NamespacedPodInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/pods/{name}",
    }),
  );
export type ReadCoreV1NamespacedPodInput =
  typeof ReadCoreV1NamespacedPodInput.Type;

// Output Schema
export const ReadCoreV1NamespacedPodOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  });
export type ReadCoreV1NamespacedPodOutput =
  typeof ReadCoreV1NamespacedPodOutput.Type;

// The operation
/**
 * read the specified Pod
 */
export const readCoreV1NamespacedPod = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReadCoreV1NamespacedPodInput,
    outputSchema: ReadCoreV1NamespacedPodOutput,
    errors: [NotFound] as const,
  }),
);
// Input Schema
export const ReadCoreV1NamespacedPodEphemeralcontainersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers",
    }),
  );
export type ReadCoreV1NamespacedPodEphemeralcontainersInput =
  typeof ReadCoreV1NamespacedPodEphemeralcontainersInput.Type;

// Output Schema
export const ReadCoreV1NamespacedPodEphemeralcontainersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  });
export type ReadCoreV1NamespacedPodEphemeralcontainersOutput =
  typeof ReadCoreV1NamespacedPodEphemeralcontainersOutput.Type;

// The operation
/**
 * read ephemeralcontainers of the specified Pod
 */
export const readCoreV1NamespacedPodEphemeralcontainers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedPodEphemeralcontainersInput,
    outputSchema: ReadCoreV1NamespacedPodEphemeralcontainersOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NamespacedPodLogInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/log",
    }),
  );
export type ReadCoreV1NamespacedPodLogInput =
  typeof ReadCoreV1NamespacedPodLogInput.Type;

// Output Schema
export const ReadCoreV1NamespacedPodLogOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export type ReadCoreV1NamespacedPodLogOutput =
  typeof ReadCoreV1NamespacedPodLogOutput.Type;

// The operation
/**
 * read log of the specified Pod
 */
export const readCoreV1NamespacedPodLog = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReadCoreV1NamespacedPodLogInput,
    outputSchema: ReadCoreV1NamespacedPodLogOutput,
    errors: [NotFound] as const,
  }),
);
// Input Schema
export const ReadCoreV1NamespacedPodResizeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/resize",
    }),
  );
export type ReadCoreV1NamespacedPodResizeInput =
  typeof ReadCoreV1NamespacedPodResizeInput.Type;

// Output Schema
export const ReadCoreV1NamespacedPodResizeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  });
export type ReadCoreV1NamespacedPodResizeOutput =
  typeof ReadCoreV1NamespacedPodResizeOutput.Type;

// The operation
/**
 * read resize of the specified Pod
 */
export const readCoreV1NamespacedPodResize =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedPodResizeInput,
    outputSchema: ReadCoreV1NamespacedPodResizeOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NamespacedPodStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/status",
    }),
  );
export type ReadCoreV1NamespacedPodStatusInput =
  typeof ReadCoreV1NamespacedPodStatusInput.Type;

// Output Schema
export const ReadCoreV1NamespacedPodStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  });
export type ReadCoreV1NamespacedPodStatusOutput =
  typeof ReadCoreV1NamespacedPodStatusOutput.Type;

// The operation
/**
 * read status of the specified Pod
 */
export const readCoreV1NamespacedPodStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedPodStatusInput,
    outputSchema: ReadCoreV1NamespacedPodStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NamespacedPodTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/podtemplates/{name}",
    }),
  );
export type ReadCoreV1NamespacedPodTemplateInput =
  typeof ReadCoreV1NamespacedPodTemplateInput.Type;

// Output Schema
export const ReadCoreV1NamespacedPodTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    template: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodTemplateSpecSchema),
    ),
  });
export type ReadCoreV1NamespacedPodTemplateOutput =
  typeof ReadCoreV1NamespacedPodTemplateOutput.Type;

// The operation
/**
 * read the specified PodTemplate
 */
export const readCoreV1NamespacedPodTemplate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedPodTemplateInput,
    outputSchema: ReadCoreV1NamespacedPodTemplateOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NamespacedReplicationControllerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}",
    }),
  );
export type ReadCoreV1NamespacedReplicationControllerInput =
  typeof ReadCoreV1NamespacedReplicationControllerInput.Type;

// Output Schema
export const ReadCoreV1NamespacedReplicationControllerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ReplicationControllerSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_ReplicationControllerStatusSchema,
      ),
    ),
  });
export type ReadCoreV1NamespacedReplicationControllerOutput =
  typeof ReadCoreV1NamespacedReplicationControllerOutput.Type;

// The operation
/**
 * read the specified ReplicationController
 */
export const readCoreV1NamespacedReplicationController =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedReplicationControllerInput,
    outputSchema: ReadCoreV1NamespacedReplicationControllerOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NamespacedReplicationControllerScaleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale",
    }),
  );
export type ReadCoreV1NamespacedReplicationControllerScaleInput =
  typeof ReadCoreV1NamespacedReplicationControllerScaleInput.Type;

// Output Schema
export const ReadCoreV1NamespacedReplicationControllerScaleOutput =
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
export type ReadCoreV1NamespacedReplicationControllerScaleOutput =
  typeof ReadCoreV1NamespacedReplicationControllerScaleOutput.Type;

// The operation
/**
 * read scale of the specified ReplicationController
 */
export const readCoreV1NamespacedReplicationControllerScale =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedReplicationControllerScaleInput,
    outputSchema: ReadCoreV1NamespacedReplicationControllerScaleOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NamespacedReplicationControllerStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status",
    }),
  );
export type ReadCoreV1NamespacedReplicationControllerStatusInput =
  typeof ReadCoreV1NamespacedReplicationControllerStatusInput.Type;

// Output Schema
export const ReadCoreV1NamespacedReplicationControllerStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ReplicationControllerSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_ReplicationControllerStatusSchema,
      ),
    ),
  });
export type ReadCoreV1NamespacedReplicationControllerStatusOutput =
  typeof ReadCoreV1NamespacedReplicationControllerStatusOutput.Type;

// The operation
/**
 * read status of the specified ReplicationController
 */
export const readCoreV1NamespacedReplicationControllerStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedReplicationControllerStatusInput,
    outputSchema: ReadCoreV1NamespacedReplicationControllerStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NamespacedResourceQuotaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/resourcequotas/{name}",
    }),
  );
export type ReadCoreV1NamespacedResourceQuotaInput =
  typeof ReadCoreV1NamespacedResourceQuotaInput.Type;

// Output Schema
export const ReadCoreV1NamespacedResourceQuotaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaStatusSchema),
    ),
  });
export type ReadCoreV1NamespacedResourceQuotaOutput =
  typeof ReadCoreV1NamespacedResourceQuotaOutput.Type;

// The operation
/**
 * read the specified ResourceQuota
 */
export const readCoreV1NamespacedResourceQuota =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedResourceQuotaInput,
    outputSchema: ReadCoreV1NamespacedResourceQuotaOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NamespacedResourceQuotaStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/resourcequotas/{name}/status",
    }),
  );
export type ReadCoreV1NamespacedResourceQuotaStatusInput =
  typeof ReadCoreV1NamespacedResourceQuotaStatusInput.Type;

// Output Schema
export const ReadCoreV1NamespacedResourceQuotaStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaStatusSchema),
    ),
  });
export type ReadCoreV1NamespacedResourceQuotaStatusOutput =
  typeof ReadCoreV1NamespacedResourceQuotaStatusOutput.Type;

// The operation
/**
 * read status of the specified ResourceQuota
 */
export const readCoreV1NamespacedResourceQuotaStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedResourceQuotaStatusInput,
    outputSchema: ReadCoreV1NamespacedResourceQuotaStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NamespacedSecretInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/secrets/{name}",
    }),
  );
export type ReadCoreV1NamespacedSecretInput =
  typeof ReadCoreV1NamespacedSecretInput.Type;

// Output Schema
export const ReadCoreV1NamespacedSecretOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    immutable: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    stringData: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.optional(Schema.String),
  });
export type ReadCoreV1NamespacedSecretOutput =
  typeof ReadCoreV1NamespacedSecretOutput.Type;

// The operation
/**
 * read the specified Secret
 */
export const readCoreV1NamespacedSecret = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReadCoreV1NamespacedSecretInput,
    outputSchema: ReadCoreV1NamespacedSecretOutput,
    errors: [NotFound] as const,
  }),
);
// Input Schema
export const ReadCoreV1NamespacedServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/services/{name}",
    }),
  );
export type ReadCoreV1NamespacedServiceInput =
  typeof ReadCoreV1NamespacedServiceInput.Type;

// Output Schema
export const ReadCoreV1NamespacedServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceStatusSchema),
    ),
  });
export type ReadCoreV1NamespacedServiceOutput =
  typeof ReadCoreV1NamespacedServiceOutput.Type;

// The operation
/**
 * read the specified Service
 */
export const readCoreV1NamespacedService = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReadCoreV1NamespacedServiceInput,
    outputSchema: ReadCoreV1NamespacedServiceOutput,
    errors: [NotFound] as const,
  }),
);
// Input Schema
export const ReadCoreV1NamespacedServiceAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/serviceaccounts/{name}",
    }),
  );
export type ReadCoreV1NamespacedServiceAccountInput =
  typeof ReadCoreV1NamespacedServiceAccountInput.Type;

// Output Schema
export const ReadCoreV1NamespacedServiceAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    automountServiceAccountToken: Schema.optional(Schema.Boolean),
    imagePullSecrets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_LocalObjectReferenceSchema),
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    secrets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
      ),
    ),
  });
export type ReadCoreV1NamespacedServiceAccountOutput =
  typeof ReadCoreV1NamespacedServiceAccountOutput.Type;

// The operation
/**
 * read the specified ServiceAccount
 */
export const readCoreV1NamespacedServiceAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedServiceAccountInput,
    outputSchema: ReadCoreV1NamespacedServiceAccountOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NamespacedServiceStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/namespaces/{namespace}/services/{name}/status",
    }),
  );
export type ReadCoreV1NamespacedServiceStatusInput =
  typeof ReadCoreV1NamespacedServiceStatusInput.Type;

// Output Schema
export const ReadCoreV1NamespacedServiceStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceStatusSchema),
    ),
  });
export type ReadCoreV1NamespacedServiceStatusOutput =
  typeof ReadCoreV1NamespacedServiceStatusOutput.Type;

// The operation
/**
 * read status of the specified Service
 */
export const readCoreV1NamespacedServiceStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1NamespacedServiceStatusInput,
    outputSchema: ReadCoreV1NamespacedServiceStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoreV1NodeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/api/v1/nodes/{name}" }));
export type ReadCoreV1NodeInput = typeof ReadCoreV1NodeInput.Type;

// Output Schema
export const ReadCoreV1NodeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiVersion: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  metadata: Schema.optional(
    Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema),
  ),
  spec: Schema.optional(
    Schema.suspend(() => io_k8s_api_core_v1_NodeSpecSchema),
  ),
  status: Schema.optional(
    Schema.suspend(() => io_k8s_api_core_v1_NodeStatusSchema),
  ),
});
export type ReadCoreV1NodeOutput = typeof ReadCoreV1NodeOutput.Type;

// The operation
/**
 * read the specified Node
 */
export const readCoreV1Node = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReadCoreV1NodeInput,
  outputSchema: ReadCoreV1NodeOutput,
  errors: [NotFound] as const,
}));
// Input Schema
export const ReadCoreV1NodeStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/nodes/{name}/status" }),
  );
export type ReadCoreV1NodeStatusInput = typeof ReadCoreV1NodeStatusInput.Type;

// Output Schema
export const ReadCoreV1NodeStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeStatusSchema),
    ),
  });
export type ReadCoreV1NodeStatusOutput = typeof ReadCoreV1NodeStatusOutput.Type;

// The operation
/**
 * read status of the specified Node
 */
export const readCoreV1NodeStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReadCoreV1NodeStatusInput,
    outputSchema: ReadCoreV1NodeStatusOutput,
    errors: [NotFound] as const,
  }),
);
// Input Schema
export const ReadCoreV1PersistentVolumeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/persistentvolumes/{name}" }),
  );
export type ReadCoreV1PersistentVolumeInput =
  typeof ReadCoreV1PersistentVolumeInput.Type;

// Output Schema
export const ReadCoreV1PersistentVolumeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeStatusSchema),
    ),
  });
export type ReadCoreV1PersistentVolumeOutput =
  typeof ReadCoreV1PersistentVolumeOutput.Type;

// The operation
/**
 * read the specified PersistentVolume
 */
export const readCoreV1PersistentVolume = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReadCoreV1PersistentVolumeInput,
    outputSchema: ReadCoreV1PersistentVolumeOutput,
    errors: [NotFound] as const,
  }),
);
// Input Schema
export const ReadCoreV1PersistentVolumeStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/persistentvolumes/{name}/status" }),
  );
export type ReadCoreV1PersistentVolumeStatusInput =
  typeof ReadCoreV1PersistentVolumeStatusInput.Type;

// Output Schema
export const ReadCoreV1PersistentVolumeStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeStatusSchema),
    ),
  });
export type ReadCoreV1PersistentVolumeStatusOutput =
  typeof ReadCoreV1PersistentVolumeStatusOutput.Type;

// The operation
/**
 * read status of the specified PersistentVolume
 */
export const readCoreV1PersistentVolumeStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoreV1PersistentVolumeStatusInput,
    outputSchema: ReadCoreV1PersistentVolumeStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespaceInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceStatusSchema),
    ),
  }).pipe(T.Http({ method: "PUT", path: "/api/v1/namespaces/{name}" }));
export type ReplaceCoreV1NamespaceInput =
  typeof ReplaceCoreV1NamespaceInput.Type;

// Output Schema
export const ReplaceCoreV1NamespaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceStatusSchema),
    ),
  });
export type ReplaceCoreV1NamespaceOutput =
  typeof ReplaceCoreV1NamespaceOutput.Type;

// The operation
/**
 * replace the specified Namespace
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1Namespace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplaceCoreV1NamespaceInput,
    outputSchema: ReplaceCoreV1NamespaceOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const ReplaceCoreV1NamespaceFinalizeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceStatusSchema),
    ),
  }).pipe(
    T.Http({ method: "PUT", path: "/api/v1/namespaces/{name}/finalize" }),
  );
export type ReplaceCoreV1NamespaceFinalizeInput =
  typeof ReplaceCoreV1NamespaceFinalizeInput.Type;

// Output Schema
export const ReplaceCoreV1NamespaceFinalizeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceStatusSchema),
    ),
  });
export type ReplaceCoreV1NamespaceFinalizeOutput =
  typeof ReplaceCoreV1NamespaceFinalizeOutput.Type;

// The operation
/**
 * replace finalize of the specified Namespace
 */
export const replaceCoreV1NamespaceFinalize =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespaceFinalizeInput,
    outputSchema: ReplaceCoreV1NamespaceFinalizeOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespaceStatusInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceStatusSchema),
    ),
  }).pipe(T.Http({ method: "PUT", path: "/api/v1/namespaces/{name}/status" }));
export type ReplaceCoreV1NamespaceStatusInput =
  typeof ReplaceCoreV1NamespaceStatusInput.Type;

// Output Schema
export const ReplaceCoreV1NamespaceStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NamespaceStatusSchema),
    ),
  });
export type ReplaceCoreV1NamespaceStatusOutput =
  typeof ReplaceCoreV1NamespaceStatusOutput.Type;

// The operation
/**
 * replace status of the specified Namespace
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespaceStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespaceStatusInput,
    outputSchema: ReplaceCoreV1NamespaceStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedConfigMapInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    binaryData: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    data: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    immutable: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/configmaps/{name}",
    }),
  );
export type ReplaceCoreV1NamespacedConfigMapInput =
  typeof ReplaceCoreV1NamespacedConfigMapInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedConfigMapOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    binaryData: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    data: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    immutable: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
  });
export type ReplaceCoreV1NamespacedConfigMapOutput =
  typeof ReplaceCoreV1NamespacedConfigMapOutput.Type;

// The operation
/**
 * replace the specified ConfigMap
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedConfigMap =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedConfigMapInput,
    outputSchema: ReplaceCoreV1NamespacedConfigMapOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedEndpointsInput =
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
    subsets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_EndpointSubsetSchema),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/endpoints/{name}",
    }),
  );
export type ReplaceCoreV1NamespacedEndpointsInput =
  typeof ReplaceCoreV1NamespacedEndpointsInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    subsets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_EndpointSubsetSchema),
      ),
    ),
  });
export type ReplaceCoreV1NamespacedEndpointsOutput =
  typeof ReplaceCoreV1NamespacedEndpointsOutput.Type;

// The operation
/**
 * replace the specified Endpoints
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedEndpointsInput,
    outputSchema: ReplaceCoreV1NamespacedEndpointsOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
    eventTime: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
      ),
    ),
    firstTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    involvedObject: Schema.suspend(
      () => io_k8s_api_core_v1_ObjectReferenceSchema,
    ),
    kind: Schema.optional(Schema.String),
    lastTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    metadata: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
    ),
    reason: Schema.optional(Schema.String),
    related: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    reportingComponent: Schema.optional(Schema.String),
    reportingInstance: Schema.optional(Schema.String),
    series: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSeriesSchema),
    ),
    source: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSourceSchema),
    ),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/events/{name}",
    }),
  );
export type ReplaceCoreV1NamespacedEventInput =
  typeof ReplaceCoreV1NamespacedEventInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
    eventTime: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
      ),
    ),
    firstTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    involvedObject: Schema.suspend(
      () => io_k8s_api_core_v1_ObjectReferenceSchema,
    ),
    kind: Schema.optional(Schema.String),
    lastTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    metadata: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
    ),
    reason: Schema.optional(Schema.String),
    related: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    reportingComponent: Schema.optional(Schema.String),
    reportingInstance: Schema.optional(Schema.String),
    series: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSeriesSchema),
    ),
    source: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSourceSchema),
    ),
    type: Schema.optional(Schema.String),
  });
export type ReplaceCoreV1NamespacedEventOutput =
  typeof ReplaceCoreV1NamespacedEventOutput.Type;

// The operation
/**
 * replace the specified Event
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedEvent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedEventInput,
    outputSchema: ReplaceCoreV1NamespacedEventOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedLimitRangeInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_LimitRangeSpecSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/limitranges/{name}",
    }),
  );
export type ReplaceCoreV1NamespacedLimitRangeInput =
  typeof ReplaceCoreV1NamespacedLimitRangeInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedLimitRangeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LimitRangeSpecSchema),
    ),
  });
export type ReplaceCoreV1NamespacedLimitRangeOutput =
  typeof ReplaceCoreV1NamespacedLimitRangeOutput.Type;

// The operation
/**
 * replace the specified LimitRange
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedLimitRange =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedLimitRangeInput,
    outputSchema: ReplaceCoreV1NamespacedLimitRangeOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedPersistentVolumeClaimInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeClaimSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PersistentVolumeClaimStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}",
    }),
  );
export type ReplaceCoreV1NamespacedPersistentVolumeClaimInput =
  typeof ReplaceCoreV1NamespacedPersistentVolumeClaimInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedPersistentVolumeClaimOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeClaimSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PersistentVolumeClaimStatusSchema,
      ),
    ),
  });
export type ReplaceCoreV1NamespacedPersistentVolumeClaimOutput =
  typeof ReplaceCoreV1NamespacedPersistentVolumeClaimOutput.Type;

// The operation
/**
 * replace the specified PersistentVolumeClaim
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedPersistentVolumeClaim =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedPersistentVolumeClaimInput,
    outputSchema: ReplaceCoreV1NamespacedPersistentVolumeClaimOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedPersistentVolumeClaimStatusInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeClaimSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PersistentVolumeClaimStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status",
    }),
  );
export type ReplaceCoreV1NamespacedPersistentVolumeClaimStatusInput =
  typeof ReplaceCoreV1NamespacedPersistentVolumeClaimStatusInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedPersistentVolumeClaimStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeClaimSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PersistentVolumeClaimStatusSchema,
      ),
    ),
  });
export type ReplaceCoreV1NamespacedPersistentVolumeClaimStatusOutput =
  typeof ReplaceCoreV1NamespacedPersistentVolumeClaimStatusOutput.Type;

// The operation
/**
 * replace status of the specified PersistentVolumeClaim
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedPersistentVolumeClaimStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedPersistentVolumeClaimStatusInput,
    outputSchema: ReplaceCoreV1NamespacedPersistentVolumeClaimStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedPodInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/pods/{name}",
    }),
  );
export type ReplaceCoreV1NamespacedPodInput =
  typeof ReplaceCoreV1NamespacedPodInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedPodOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  });
export type ReplaceCoreV1NamespacedPodOutput =
  typeof ReplaceCoreV1NamespacedPodOutput.Type;

// The operation
/**
 * replace the specified Pod
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedPod = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplaceCoreV1NamespacedPodInput,
    outputSchema: ReplaceCoreV1NamespacedPodOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const ReplaceCoreV1NamespacedPodEphemeralcontainersInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers",
    }),
  );
export type ReplaceCoreV1NamespacedPodEphemeralcontainersInput =
  typeof ReplaceCoreV1NamespacedPodEphemeralcontainersInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedPodEphemeralcontainersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  });
export type ReplaceCoreV1NamespacedPodEphemeralcontainersOutput =
  typeof ReplaceCoreV1NamespacedPodEphemeralcontainersOutput.Type;

// The operation
/**
 * replace ephemeralcontainers of the specified Pod
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedPodEphemeralcontainers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedPodEphemeralcontainersInput,
    outputSchema: ReplaceCoreV1NamespacedPodEphemeralcontainersOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedPodResizeInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/resize",
    }),
  );
export type ReplaceCoreV1NamespacedPodResizeInput =
  typeof ReplaceCoreV1NamespacedPodResizeInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedPodResizeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  });
export type ReplaceCoreV1NamespacedPodResizeOutput =
  typeof ReplaceCoreV1NamespacedPodResizeOutput.Type;

// The operation
/**
 * replace resize of the specified Pod
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedPodResize =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedPodResizeInput,
    outputSchema: ReplaceCoreV1NamespacedPodResizeOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedPodStatusInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/pods/{name}/status",
    }),
  );
export type ReplaceCoreV1NamespacedPodStatusInput =
  typeof ReplaceCoreV1NamespacedPodStatusInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedPodStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodStatusSchema),
    ),
  });
export type ReplaceCoreV1NamespacedPodStatusOutput =
  typeof ReplaceCoreV1NamespacedPodStatusOutput.Type;

// The operation
/**
 * replace status of the specified Pod
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedPodStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedPodStatusInput,
    outputSchema: ReplaceCoreV1NamespacedPodStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedPodTemplateInput =
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
    template: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodTemplateSpecSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/podtemplates/{name}",
    }),
  );
export type ReplaceCoreV1NamespacedPodTemplateInput =
  typeof ReplaceCoreV1NamespacedPodTemplateInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedPodTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    template: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodTemplateSpecSchema),
    ),
  });
export type ReplaceCoreV1NamespacedPodTemplateOutput =
  typeof ReplaceCoreV1NamespacedPodTemplateOutput.Type;

// The operation
/**
 * replace the specified PodTemplate
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedPodTemplate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedPodTemplateInput,
    outputSchema: ReplaceCoreV1NamespacedPodTemplateOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedReplicationControllerInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_ReplicationControllerSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_ReplicationControllerStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}",
    }),
  );
export type ReplaceCoreV1NamespacedReplicationControllerInput =
  typeof ReplaceCoreV1NamespacedReplicationControllerInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedReplicationControllerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ReplicationControllerSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_ReplicationControllerStatusSchema,
      ),
    ),
  });
export type ReplaceCoreV1NamespacedReplicationControllerOutput =
  typeof ReplaceCoreV1NamespacedReplicationControllerOutput.Type;

// The operation
/**
 * replace the specified ReplicationController
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedReplicationController =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedReplicationControllerInput,
    outputSchema: ReplaceCoreV1NamespacedReplicationControllerOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedReplicationControllerScaleInput =
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
      path: "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale",
    }),
  );
export type ReplaceCoreV1NamespacedReplicationControllerScaleInput =
  typeof ReplaceCoreV1NamespacedReplicationControllerScaleInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedReplicationControllerScaleOutput =
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
export type ReplaceCoreV1NamespacedReplicationControllerScaleOutput =
  typeof ReplaceCoreV1NamespacedReplicationControllerScaleOutput.Type;

// The operation
/**
 * replace scale of the specified ReplicationController
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedReplicationControllerScale =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedReplicationControllerScaleInput,
    outputSchema: ReplaceCoreV1NamespacedReplicationControllerScaleOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedReplicationControllerStatusInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_ReplicationControllerSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_ReplicationControllerStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status",
    }),
  );
export type ReplaceCoreV1NamespacedReplicationControllerStatusInput =
  typeof ReplaceCoreV1NamespacedReplicationControllerStatusInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedReplicationControllerStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ReplicationControllerSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_ReplicationControllerStatusSchema,
      ),
    ),
  });
export type ReplaceCoreV1NamespacedReplicationControllerStatusOutput =
  typeof ReplaceCoreV1NamespacedReplicationControllerStatusOutput.Type;

// The operation
/**
 * replace status of the specified ReplicationController
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedReplicationControllerStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedReplicationControllerStatusInput,
    outputSchema: ReplaceCoreV1NamespacedReplicationControllerStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedResourceQuotaInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/resourcequotas/{name}",
    }),
  );
export type ReplaceCoreV1NamespacedResourceQuotaInput =
  typeof ReplaceCoreV1NamespacedResourceQuotaInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedResourceQuotaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaStatusSchema),
    ),
  });
export type ReplaceCoreV1NamespacedResourceQuotaOutput =
  typeof ReplaceCoreV1NamespacedResourceQuotaOutput.Type;

// The operation
/**
 * replace the specified ResourceQuota
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedResourceQuota =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedResourceQuotaInput,
    outputSchema: ReplaceCoreV1NamespacedResourceQuotaOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedResourceQuotaStatusInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/resourcequotas/{name}/status",
    }),
  );
export type ReplaceCoreV1NamespacedResourceQuotaStatusInput =
  typeof ReplaceCoreV1NamespacedResourceQuotaStatusInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedResourceQuotaStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceQuotaStatusSchema),
    ),
  });
export type ReplaceCoreV1NamespacedResourceQuotaStatusOutput =
  typeof ReplaceCoreV1NamespacedResourceQuotaStatusOutput.Type;

// The operation
/**
 * replace status of the specified ResourceQuota
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedResourceQuotaStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedResourceQuotaStatusInput,
    outputSchema: ReplaceCoreV1NamespacedResourceQuotaStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedSecretInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    immutable: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    stringData: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/secrets/{name}",
    }),
  );
export type ReplaceCoreV1NamespacedSecretInput =
  typeof ReplaceCoreV1NamespacedSecretInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedSecretOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    immutable: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    stringData: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.optional(Schema.String),
  });
export type ReplaceCoreV1NamespacedSecretOutput =
  typeof ReplaceCoreV1NamespacedSecretOutput.Type;

// The operation
/**
 * replace the specified Secret
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedSecret =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedSecretInput,
    outputSchema: ReplaceCoreV1NamespacedSecretOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedServiceInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_ServiceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/services/{name}",
    }),
  );
export type ReplaceCoreV1NamespacedServiceInput =
  typeof ReplaceCoreV1NamespacedServiceInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceStatusSchema),
    ),
  });
export type ReplaceCoreV1NamespacedServiceOutput =
  typeof ReplaceCoreV1NamespacedServiceOutput.Type;

// The operation
/**
 * replace the specified Service
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedServiceInput,
    outputSchema: ReplaceCoreV1NamespacedServiceOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedServiceAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    automountServiceAccountToken: Schema.optional(Schema.Boolean),
    imagePullSecrets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_LocalObjectReferenceSchema),
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    secrets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/serviceaccounts/{name}",
    }),
  );
export type ReplaceCoreV1NamespacedServiceAccountInput =
  typeof ReplaceCoreV1NamespacedServiceAccountInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedServiceAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    automountServiceAccountToken: Schema.optional(Schema.Boolean),
    imagePullSecrets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_LocalObjectReferenceSchema),
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    secrets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
      ),
    ),
  });
export type ReplaceCoreV1NamespacedServiceAccountOutput =
  typeof ReplaceCoreV1NamespacedServiceAccountOutput.Type;

// The operation
/**
 * replace the specified ServiceAccount
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedServiceAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedServiceAccountInput,
    outputSchema: ReplaceCoreV1NamespacedServiceAccountOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NamespacedServiceStatusInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_ServiceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceStatusSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/v1/namespaces/{namespace}/services/{name}/status",
    }),
  );
export type ReplaceCoreV1NamespacedServiceStatusInput =
  typeof ReplaceCoreV1NamespacedServiceStatusInput.Type;

// Output Schema
export const ReplaceCoreV1NamespacedServiceStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ServiceStatusSchema),
    ),
  });
export type ReplaceCoreV1NamespacedServiceStatusOutput =
  typeof ReplaceCoreV1NamespacedServiceStatusOutput.Type;

// The operation
/**
 * replace status of the specified Service
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NamespacedServiceStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1NamespacedServiceStatusInput,
    outputSchema: ReplaceCoreV1NamespacedServiceStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1NodeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
      Schema.suspend(() => io_k8s_api_core_v1_NodeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeStatusSchema),
    ),
  },
).pipe(T.Http({ method: "PUT", path: "/api/v1/nodes/{name}" }));
export type ReplaceCoreV1NodeInput = typeof ReplaceCoreV1NodeInput.Type;

// Output Schema
export const ReplaceCoreV1NodeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeStatusSchema),
    ),
  });
export type ReplaceCoreV1NodeOutput = typeof ReplaceCoreV1NodeOutput.Type;

// The operation
/**
 * replace the specified Node
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1Node = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReplaceCoreV1NodeInput,
  outputSchema: ReplaceCoreV1NodeOutput,
  errors: [NotFound, Conflict, UnprocessableEntity] as const,
}));
// Input Schema
export const ReplaceCoreV1NodeStatusInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_NodeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeStatusSchema),
    ),
  }).pipe(T.Http({ method: "PUT", path: "/api/v1/nodes/{name}/status" }));
export type ReplaceCoreV1NodeStatusInput =
  typeof ReplaceCoreV1NodeStatusInput.Type;

// Output Schema
export const ReplaceCoreV1NodeStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeStatusSchema),
    ),
  });
export type ReplaceCoreV1NodeStatusOutput =
  typeof ReplaceCoreV1NodeStatusOutput.Type;

// The operation
/**
 * replace status of the specified Node
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1NodeStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplaceCoreV1NodeStatusInput,
    outputSchema: ReplaceCoreV1NodeStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const ReplaceCoreV1PersistentVolumeInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeStatusSchema),
    ),
  }).pipe(T.Http({ method: "PUT", path: "/api/v1/persistentvolumes/{name}" }));
export type ReplaceCoreV1PersistentVolumeInput =
  typeof ReplaceCoreV1PersistentVolumeInput.Type;

// Output Schema
export const ReplaceCoreV1PersistentVolumeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeStatusSchema),
    ),
  });
export type ReplaceCoreV1PersistentVolumeOutput =
  typeof ReplaceCoreV1PersistentVolumeOutput.Type;

// The operation
/**
 * replace the specified PersistentVolume
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1PersistentVolume =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1PersistentVolumeInput,
    outputSchema: ReplaceCoreV1PersistentVolumeOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoreV1PersistentVolumeStatusInput =
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
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeStatusSchema),
    ),
  }).pipe(
    T.Http({ method: "PUT", path: "/api/v1/persistentvolumes/{name}/status" }),
  );
export type ReplaceCoreV1PersistentVolumeStatusInput =
  typeof ReplaceCoreV1PersistentVolumeStatusInput.Type;

// Output Schema
export const ReplaceCoreV1PersistentVolumeStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeStatusSchema),
    ),
  });
export type ReplaceCoreV1PersistentVolumeStatusOutput =
  typeof ReplaceCoreV1PersistentVolumeStatusOutput.Type;

// The operation
/**
 * replace status of the specified PersistentVolume
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoreV1PersistentVolumeStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoreV1PersistentVolumeStatusInput,
    outputSchema: ReplaceCoreV1PersistentVolumeStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const WatchCoreV1ConfigMapListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/configmaps" }),
  );
export type WatchCoreV1ConfigMapListForAllNamespacesInput =
  typeof WatchCoreV1ConfigMapListForAllNamespacesInput.Type;

// Output Schema
export const WatchCoreV1ConfigMapListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1ConfigMapListForAllNamespacesOutput =
  typeof WatchCoreV1ConfigMapListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1ConfigMapListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1ConfigMapListForAllNamespacesInput,
    outputSchema: WatchCoreV1ConfigMapListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchCoreV1EndpointsListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/endpoints" }),
  );
export type WatchCoreV1EndpointsListForAllNamespacesInput =
  typeof WatchCoreV1EndpointsListForAllNamespacesInput.Type;

// Output Schema
export const WatchCoreV1EndpointsListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1EndpointsListForAllNamespacesOutput =
  typeof WatchCoreV1EndpointsListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1EndpointsListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1EndpointsListForAllNamespacesInput,
    outputSchema: WatchCoreV1EndpointsListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchCoreV1EventListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/events" }),
  );
export type WatchCoreV1EventListForAllNamespacesInput =
  typeof WatchCoreV1EventListForAllNamespacesInput.Type;

// Output Schema
export const WatchCoreV1EventListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1EventListForAllNamespacesOutput =
  typeof WatchCoreV1EventListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1EventListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1EventListForAllNamespacesInput,
    outputSchema: WatchCoreV1EventListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchCoreV1LimitRangeListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/limitranges" }),
  );
export type WatchCoreV1LimitRangeListForAllNamespacesInput =
  typeof WatchCoreV1LimitRangeListForAllNamespacesInput.Type;

// Output Schema
export const WatchCoreV1LimitRangeListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1LimitRangeListForAllNamespacesOutput =
  typeof WatchCoreV1LimitRangeListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1LimitRangeListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1LimitRangeListForAllNamespacesInput,
    outputSchema: WatchCoreV1LimitRangeListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchCoreV1NamespaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/namespaces/{name}" }),
  );
export type WatchCoreV1NamespaceInput = typeof WatchCoreV1NamespaceInput.Type;

// Output Schema
export const WatchCoreV1NamespaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespaceOutput = typeof WatchCoreV1NamespaceOutput.Type;

// The operation
/**
 * watch changes to an object of kind Namespace. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchCoreV1Namespace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WatchCoreV1NamespaceInput,
    outputSchema: WatchCoreV1NamespaceOutput,
  }),
);
// Input Schema
export const WatchCoreV1NamespaceListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/namespaces" }),
  );
export type WatchCoreV1NamespaceListInput =
  typeof WatchCoreV1NamespaceListInput.Type;

// Output Schema
export const WatchCoreV1NamespaceListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespaceListOutput =
  typeof WatchCoreV1NamespaceListOutput.Type;

// The operation
/**
 * watch individual changes to a list of Namespace. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1NamespaceList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WatchCoreV1NamespaceListInput,
    outputSchema: WatchCoreV1NamespaceListOutput,
  }),
);
// Input Schema
export const WatchCoreV1NamespacedConfigMapInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/configmaps/{name}",
    }),
  );
export type WatchCoreV1NamespacedConfigMapInput =
  typeof WatchCoreV1NamespacedConfigMapInput.Type;

// Output Schema
export const WatchCoreV1NamespacedConfigMapOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedConfigMapOutput =
  typeof WatchCoreV1NamespacedConfigMapOutput.Type;

// The operation
/**
 * watch changes to an object of kind ConfigMap. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchCoreV1NamespacedConfigMap =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedConfigMapInput,
    outputSchema: WatchCoreV1NamespacedConfigMapOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedConfigMapListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/configmaps",
    }),
  );
export type WatchCoreV1NamespacedConfigMapListInput =
  typeof WatchCoreV1NamespacedConfigMapListInput.Type;

// Output Schema
export const WatchCoreV1NamespacedConfigMapListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedConfigMapListOutput =
  typeof WatchCoreV1NamespacedConfigMapListOutput.Type;

// The operation
/**
 * watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1NamespacedConfigMapList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedConfigMapListInput,
    outputSchema: WatchCoreV1NamespacedConfigMapListOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/endpoints/{name}",
    }),
  );
export type WatchCoreV1NamespacedEndpointsInput =
  typeof WatchCoreV1NamespacedEndpointsInput.Type;

// Output Schema
export const WatchCoreV1NamespacedEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedEndpointsOutput =
  typeof WatchCoreV1NamespacedEndpointsOutput.Type;

// The operation
/**
 * watch changes to an object of kind Endpoints. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchCoreV1NamespacedEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedEndpointsInput,
    outputSchema: WatchCoreV1NamespacedEndpointsOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedEndpointsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/endpoints",
    }),
  );
export type WatchCoreV1NamespacedEndpointsListInput =
  typeof WatchCoreV1NamespacedEndpointsListInput.Type;

// Output Schema
export const WatchCoreV1NamespacedEndpointsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedEndpointsListOutput =
  typeof WatchCoreV1NamespacedEndpointsListOutput.Type;

// The operation
/**
 * watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1NamespacedEndpointsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedEndpointsListInput,
    outputSchema: WatchCoreV1NamespacedEndpointsListOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/events/{name}",
    }),
  );
export type WatchCoreV1NamespacedEventInput =
  typeof WatchCoreV1NamespacedEventInput.Type;

// Output Schema
export const WatchCoreV1NamespacedEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedEventOutput =
  typeof WatchCoreV1NamespacedEventOutput.Type;

// The operation
/**
 * watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchCoreV1NamespacedEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WatchCoreV1NamespacedEventInput,
    outputSchema: WatchCoreV1NamespacedEventOutput,
  }),
);
// Input Schema
export const WatchCoreV1NamespacedEventListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/events",
    }),
  );
export type WatchCoreV1NamespacedEventListInput =
  typeof WatchCoreV1NamespacedEventListInput.Type;

// Output Schema
export const WatchCoreV1NamespacedEventListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedEventListOutput =
  typeof WatchCoreV1NamespacedEventListOutput.Type;

// The operation
/**
 * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1NamespacedEventList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedEventListInput,
    outputSchema: WatchCoreV1NamespacedEventListOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedLimitRangeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/limitranges/{name}",
    }),
  );
export type WatchCoreV1NamespacedLimitRangeInput =
  typeof WatchCoreV1NamespacedLimitRangeInput.Type;

// Output Schema
export const WatchCoreV1NamespacedLimitRangeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedLimitRangeOutput =
  typeof WatchCoreV1NamespacedLimitRangeOutput.Type;

// The operation
/**
 * watch changes to an object of kind LimitRange. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchCoreV1NamespacedLimitRange =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedLimitRangeInput,
    outputSchema: WatchCoreV1NamespacedLimitRangeOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedLimitRangeListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/limitranges",
    }),
  );
export type WatchCoreV1NamespacedLimitRangeListInput =
  typeof WatchCoreV1NamespacedLimitRangeListInput.Type;

// Output Schema
export const WatchCoreV1NamespacedLimitRangeListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedLimitRangeListOutput =
  typeof WatchCoreV1NamespacedLimitRangeListOutput.Type;

// The operation
/**
 * watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1NamespacedLimitRangeList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedLimitRangeListInput,
    outputSchema: WatchCoreV1NamespacedLimitRangeListOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedPersistentVolumeClaimInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/persistentvolumeclaims/{name}",
    }),
  );
export type WatchCoreV1NamespacedPersistentVolumeClaimInput =
  typeof WatchCoreV1NamespacedPersistentVolumeClaimInput.Type;

// Output Schema
export const WatchCoreV1NamespacedPersistentVolumeClaimOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedPersistentVolumeClaimOutput =
  typeof WatchCoreV1NamespacedPersistentVolumeClaimOutput.Type;

// The operation
/**
 * watch changes to an object of kind PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchCoreV1NamespacedPersistentVolumeClaim =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedPersistentVolumeClaimInput,
    outputSchema: WatchCoreV1NamespacedPersistentVolumeClaimOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedPersistentVolumeClaimListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/persistentvolumeclaims",
    }),
  );
export type WatchCoreV1NamespacedPersistentVolumeClaimListInput =
  typeof WatchCoreV1NamespacedPersistentVolumeClaimListInput.Type;

// Output Schema
export const WatchCoreV1NamespacedPersistentVolumeClaimListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedPersistentVolumeClaimListOutput =
  typeof WatchCoreV1NamespacedPersistentVolumeClaimListOutput.Type;

// The operation
/**
 * watch individual changes to a list of PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1NamespacedPersistentVolumeClaimList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedPersistentVolumeClaimListInput,
    outputSchema: WatchCoreV1NamespacedPersistentVolumeClaimListOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedPodInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/pods/{name}",
    }),
  );
export type WatchCoreV1NamespacedPodInput =
  typeof WatchCoreV1NamespacedPodInput.Type;

// Output Schema
export const WatchCoreV1NamespacedPodOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedPodOutput =
  typeof WatchCoreV1NamespacedPodOutput.Type;

// The operation
/**
 * watch changes to an object of kind Pod. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchCoreV1NamespacedPod = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WatchCoreV1NamespacedPodInput,
    outputSchema: WatchCoreV1NamespacedPodOutput,
  }),
);
// Input Schema
export const WatchCoreV1NamespacedPodListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/pods",
    }),
  );
export type WatchCoreV1NamespacedPodListInput =
  typeof WatchCoreV1NamespacedPodListInput.Type;

// Output Schema
export const WatchCoreV1NamespacedPodListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedPodListOutput =
  typeof WatchCoreV1NamespacedPodListOutput.Type;

// The operation
/**
 * watch individual changes to a list of Pod. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1NamespacedPodList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedPodListInput,
    outputSchema: WatchCoreV1NamespacedPodListOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedPodTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/podtemplates/{name}",
    }),
  );
export type WatchCoreV1NamespacedPodTemplateInput =
  typeof WatchCoreV1NamespacedPodTemplateInput.Type;

// Output Schema
export const WatchCoreV1NamespacedPodTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedPodTemplateOutput =
  typeof WatchCoreV1NamespacedPodTemplateOutput.Type;

// The operation
/**
 * watch changes to an object of kind PodTemplate. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchCoreV1NamespacedPodTemplate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedPodTemplateInput,
    outputSchema: WatchCoreV1NamespacedPodTemplateOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedPodTemplateListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/podtemplates",
    }),
  );
export type WatchCoreV1NamespacedPodTemplateListInput =
  typeof WatchCoreV1NamespacedPodTemplateListInput.Type;

// Output Schema
export const WatchCoreV1NamespacedPodTemplateListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedPodTemplateListOutput =
  typeof WatchCoreV1NamespacedPodTemplateListOutput.Type;

// The operation
/**
 * watch individual changes to a list of PodTemplate. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1NamespacedPodTemplateList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedPodTemplateListInput,
    outputSchema: WatchCoreV1NamespacedPodTemplateListOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedReplicationControllerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/replicationcontrollers/{name}",
    }),
  );
export type WatchCoreV1NamespacedReplicationControllerInput =
  typeof WatchCoreV1NamespacedReplicationControllerInput.Type;

// Output Schema
export const WatchCoreV1NamespacedReplicationControllerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedReplicationControllerOutput =
  typeof WatchCoreV1NamespacedReplicationControllerOutput.Type;

// The operation
/**
 * watch changes to an object of kind ReplicationController. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchCoreV1NamespacedReplicationController =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedReplicationControllerInput,
    outputSchema: WatchCoreV1NamespacedReplicationControllerOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedReplicationControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/replicationcontrollers",
    }),
  );
export type WatchCoreV1NamespacedReplicationControllerListInput =
  typeof WatchCoreV1NamespacedReplicationControllerListInput.Type;

// Output Schema
export const WatchCoreV1NamespacedReplicationControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedReplicationControllerListOutput =
  typeof WatchCoreV1NamespacedReplicationControllerListOutput.Type;

// The operation
/**
 * watch individual changes to a list of ReplicationController. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1NamespacedReplicationControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedReplicationControllerListInput,
    outputSchema: WatchCoreV1NamespacedReplicationControllerListOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedResourceQuotaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/resourcequotas/{name}",
    }),
  );
export type WatchCoreV1NamespacedResourceQuotaInput =
  typeof WatchCoreV1NamespacedResourceQuotaInput.Type;

// Output Schema
export const WatchCoreV1NamespacedResourceQuotaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedResourceQuotaOutput =
  typeof WatchCoreV1NamespacedResourceQuotaOutput.Type;

// The operation
/**
 * watch changes to an object of kind ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchCoreV1NamespacedResourceQuota =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedResourceQuotaInput,
    outputSchema: WatchCoreV1NamespacedResourceQuotaOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedResourceQuotaListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/resourcequotas",
    }),
  );
export type WatchCoreV1NamespacedResourceQuotaListInput =
  typeof WatchCoreV1NamespacedResourceQuotaListInput.Type;

// Output Schema
export const WatchCoreV1NamespacedResourceQuotaListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedResourceQuotaListOutput =
  typeof WatchCoreV1NamespacedResourceQuotaListOutput.Type;

// The operation
/**
 * watch individual changes to a list of ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1NamespacedResourceQuotaList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedResourceQuotaListInput,
    outputSchema: WatchCoreV1NamespacedResourceQuotaListOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedSecretInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/secrets/{name}",
    }),
  );
export type WatchCoreV1NamespacedSecretInput =
  typeof WatchCoreV1NamespacedSecretInput.Type;

// Output Schema
export const WatchCoreV1NamespacedSecretOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedSecretOutput =
  typeof WatchCoreV1NamespacedSecretOutput.Type;

// The operation
/**
 * watch changes to an object of kind Secret. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchCoreV1NamespacedSecret = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WatchCoreV1NamespacedSecretInput,
    outputSchema: WatchCoreV1NamespacedSecretOutput,
  }),
);
// Input Schema
export const WatchCoreV1NamespacedSecretListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/secrets",
    }),
  );
export type WatchCoreV1NamespacedSecretListInput =
  typeof WatchCoreV1NamespacedSecretListInput.Type;

// Output Schema
export const WatchCoreV1NamespacedSecretListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedSecretListOutput =
  typeof WatchCoreV1NamespacedSecretListOutput.Type;

// The operation
/**
 * watch individual changes to a list of Secret. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1NamespacedSecretList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedSecretListInput,
    outputSchema: WatchCoreV1NamespacedSecretListOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/services/{name}",
    }),
  );
export type WatchCoreV1NamespacedServiceInput =
  typeof WatchCoreV1NamespacedServiceInput.Type;

// Output Schema
export const WatchCoreV1NamespacedServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedServiceOutput =
  typeof WatchCoreV1NamespacedServiceOutput.Type;

// The operation
/**
 * watch changes to an object of kind Service. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchCoreV1NamespacedService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedServiceInput,
    outputSchema: WatchCoreV1NamespacedServiceOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedServiceAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/serviceaccounts/{name}",
    }),
  );
export type WatchCoreV1NamespacedServiceAccountInput =
  typeof WatchCoreV1NamespacedServiceAccountInput.Type;

// Output Schema
export const WatchCoreV1NamespacedServiceAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedServiceAccountOutput =
  typeof WatchCoreV1NamespacedServiceAccountOutput.Type;

// The operation
/**
 * watch changes to an object of kind ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchCoreV1NamespacedServiceAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedServiceAccountInput,
    outputSchema: WatchCoreV1NamespacedServiceAccountOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedServiceAccountListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/serviceaccounts",
    }),
  );
export type WatchCoreV1NamespacedServiceAccountListInput =
  typeof WatchCoreV1NamespacedServiceAccountListInput.Type;

// Output Schema
export const WatchCoreV1NamespacedServiceAccountListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedServiceAccountListOutput =
  typeof WatchCoreV1NamespacedServiceAccountListOutput.Type;

// The operation
/**
 * watch individual changes to a list of ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1NamespacedServiceAccountList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedServiceAccountListInput,
    outputSchema: WatchCoreV1NamespacedServiceAccountListOutput,
  }));
// Input Schema
export const WatchCoreV1NamespacedServiceListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/api/v1/watch/namespaces/{namespace}/services",
    }),
  );
export type WatchCoreV1NamespacedServiceListInput =
  typeof WatchCoreV1NamespacedServiceListInput.Type;

// Output Schema
export const WatchCoreV1NamespacedServiceListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NamespacedServiceListOutput =
  typeof WatchCoreV1NamespacedServiceListOutput.Type;

// The operation
/**
 * watch individual changes to a list of Service. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1NamespacedServiceList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1NamespacedServiceListInput,
    outputSchema: WatchCoreV1NamespacedServiceListOutput,
  }));
// Input Schema
export const WatchCoreV1NodeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/api/v1/watch/nodes/{name}" }));
export type WatchCoreV1NodeInput = typeof WatchCoreV1NodeInput.Type;

// Output Schema
export const WatchCoreV1NodeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.suspend(
    () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
  ),
  type: Schema.String,
});
export type WatchCoreV1NodeOutput = typeof WatchCoreV1NodeOutput.Type;

// The operation
/**
 * watch changes to an object of kind Node. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchCoreV1Node = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WatchCoreV1NodeInput,
  outputSchema: WatchCoreV1NodeOutput,
}));
// Input Schema
export const WatchCoreV1NodeListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/nodes" }),
  );
export type WatchCoreV1NodeListInput = typeof WatchCoreV1NodeListInput.Type;

// Output Schema
export const WatchCoreV1NodeListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1NodeListOutput = typeof WatchCoreV1NodeListOutput.Type;

// The operation
/**
 * watch individual changes to a list of Node. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1NodeList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WatchCoreV1NodeListInput,
  outputSchema: WatchCoreV1NodeListOutput,
}));
// Input Schema
export const WatchCoreV1PersistentVolumeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/persistentvolumes/{name}" }),
  );
export type WatchCoreV1PersistentVolumeInput =
  typeof WatchCoreV1PersistentVolumeInput.Type;

// Output Schema
export const WatchCoreV1PersistentVolumeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1PersistentVolumeOutput =
  typeof WatchCoreV1PersistentVolumeOutput.Type;

// The operation
/**
 * watch changes to an object of kind PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchCoreV1PersistentVolume = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WatchCoreV1PersistentVolumeInput,
    outputSchema: WatchCoreV1PersistentVolumeOutput,
  }),
);
// Input Schema
export const WatchCoreV1PersistentVolumeClaimListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/persistentvolumeclaims" }),
  );
export type WatchCoreV1PersistentVolumeClaimListForAllNamespacesInput =
  typeof WatchCoreV1PersistentVolumeClaimListForAllNamespacesInput.Type;

// Output Schema
export const WatchCoreV1PersistentVolumeClaimListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1PersistentVolumeClaimListForAllNamespacesOutput =
  typeof WatchCoreV1PersistentVolumeClaimListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1PersistentVolumeClaimListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1PersistentVolumeClaimListForAllNamespacesInput,
    outputSchema: WatchCoreV1PersistentVolumeClaimListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchCoreV1PersistentVolumeListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/persistentvolumes" }),
  );
export type WatchCoreV1PersistentVolumeListInput =
  typeof WatchCoreV1PersistentVolumeListInput.Type;

// Output Schema
export const WatchCoreV1PersistentVolumeListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1PersistentVolumeListOutput =
  typeof WatchCoreV1PersistentVolumeListOutput.Type;

// The operation
/**
 * watch individual changes to a list of PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1PersistentVolumeList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1PersistentVolumeListInput,
    outputSchema: WatchCoreV1PersistentVolumeListOutput,
  }));
// Input Schema
export const WatchCoreV1PodListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/pods" }),
  );
export type WatchCoreV1PodListForAllNamespacesInput =
  typeof WatchCoreV1PodListForAllNamespacesInput.Type;

// Output Schema
export const WatchCoreV1PodListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1PodListForAllNamespacesOutput =
  typeof WatchCoreV1PodListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of Pod. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1PodListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1PodListForAllNamespacesInput,
    outputSchema: WatchCoreV1PodListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchCoreV1PodTemplateListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/podtemplates" }),
  );
export type WatchCoreV1PodTemplateListForAllNamespacesInput =
  typeof WatchCoreV1PodTemplateListForAllNamespacesInput.Type;

// Output Schema
export const WatchCoreV1PodTemplateListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1PodTemplateListForAllNamespacesOutput =
  typeof WatchCoreV1PodTemplateListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of PodTemplate. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1PodTemplateListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1PodTemplateListForAllNamespacesInput,
    outputSchema: WatchCoreV1PodTemplateListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchCoreV1ReplicationControllerListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/replicationcontrollers" }),
  );
export type WatchCoreV1ReplicationControllerListForAllNamespacesInput =
  typeof WatchCoreV1ReplicationControllerListForAllNamespacesInput.Type;

// Output Schema
export const WatchCoreV1ReplicationControllerListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1ReplicationControllerListForAllNamespacesOutput =
  typeof WatchCoreV1ReplicationControllerListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of ReplicationController. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1ReplicationControllerListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1ReplicationControllerListForAllNamespacesInput,
    outputSchema: WatchCoreV1ReplicationControllerListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchCoreV1ResourceQuotaListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/resourcequotas" }),
  );
export type WatchCoreV1ResourceQuotaListForAllNamespacesInput =
  typeof WatchCoreV1ResourceQuotaListForAllNamespacesInput.Type;

// Output Schema
export const WatchCoreV1ResourceQuotaListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1ResourceQuotaListForAllNamespacesOutput =
  typeof WatchCoreV1ResourceQuotaListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1ResourceQuotaListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1ResourceQuotaListForAllNamespacesInput,
    outputSchema: WatchCoreV1ResourceQuotaListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchCoreV1SecretListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/secrets" }),
  );
export type WatchCoreV1SecretListForAllNamespacesInput =
  typeof WatchCoreV1SecretListForAllNamespacesInput.Type;

// Output Schema
export const WatchCoreV1SecretListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1SecretListForAllNamespacesOutput =
  typeof WatchCoreV1SecretListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of Secret. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1SecretListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1SecretListForAllNamespacesInput,
    outputSchema: WatchCoreV1SecretListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchCoreV1ServiceAccountListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/serviceaccounts" }),
  );
export type WatchCoreV1ServiceAccountListForAllNamespacesInput =
  typeof WatchCoreV1ServiceAccountListForAllNamespacesInput.Type;

// Output Schema
export const WatchCoreV1ServiceAccountListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1ServiceAccountListForAllNamespacesOutput =
  typeof WatchCoreV1ServiceAccountListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1ServiceAccountListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1ServiceAccountListForAllNamespacesInput,
    outputSchema: WatchCoreV1ServiceAccountListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchCoreV1ServiceListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/v1/watch/services" }),
  );
export type WatchCoreV1ServiceListForAllNamespacesInput =
  typeof WatchCoreV1ServiceListForAllNamespacesInput.Type;

// Output Schema
export const WatchCoreV1ServiceListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchCoreV1ServiceListForAllNamespacesOutput =
  typeof WatchCoreV1ServiceListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of Service. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchCoreV1ServiceListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoreV1ServiceListForAllNamespacesInput,
    outputSchema: WatchCoreV1ServiceListForAllNamespacesOutput,
  }));
