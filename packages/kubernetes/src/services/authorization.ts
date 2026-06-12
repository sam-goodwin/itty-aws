/**
 * Kubernetes Authorization API
 *
 * Generated from the Kubernetes OpenAPI spec.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import { Conflict, UnprocessableEntity } from "../errors.ts";
import {
  io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpecSchema,
  io_k8s_api_authorization_v1_SelfSubjectRulesReviewSpecSchema,
  io_k8s_api_authorization_v1_SubjectAccessReviewSpecSchema,
  io_k8s_api_authorization_v1_SubjectAccessReviewStatusSchema,
  io_k8s_api_authorization_v1_SubjectRulesReviewStatusSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscoverySchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDRSchema,
} from "./_schemas.ts";

// Input Schema
export const CreateAuthorizationV1NamespacedLocalSubjectAccessReviewInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_authorization_v1_SubjectAccessReviewSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authorization_v1_SubjectAccessReviewStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/authorization.k8s.io/v1/namespaces/{namespace}/localsubjectaccessreviews",
    }),
  );
export type CreateAuthorizationV1NamespacedLocalSubjectAccessReviewInput =
  typeof CreateAuthorizationV1NamespacedLocalSubjectAccessReviewInput.Type;

// Output Schema
export const CreateAuthorizationV1NamespacedLocalSubjectAccessReviewOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_authorization_v1_SubjectAccessReviewSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authorization_v1_SubjectAccessReviewStatusSchema,
      ),
    ),
  });
export type CreateAuthorizationV1NamespacedLocalSubjectAccessReviewOutput =
  typeof CreateAuthorizationV1NamespacedLocalSubjectAccessReviewOutput.Type;

// The operation
/**
 * create a LocalSubjectAccessReview
 */
export const createAuthorizationV1NamespacedLocalSubjectAccessReview =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateAuthorizationV1NamespacedLocalSubjectAccessReviewInput,
    outputSchema: CreateAuthorizationV1NamespacedLocalSubjectAccessReviewOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateAuthorizationV1SelfSubjectAccessReviewInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authorization_v1_SubjectAccessReviewStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/authorization.k8s.io/v1/selfsubjectaccessreviews",
    }),
  );
export type CreateAuthorizationV1SelfSubjectAccessReviewInput =
  typeof CreateAuthorizationV1SelfSubjectAccessReviewInput.Type;

// Output Schema
export const CreateAuthorizationV1SelfSubjectAccessReviewOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authorization_v1_SubjectAccessReviewStatusSchema,
      ),
    ),
  });
export type CreateAuthorizationV1SelfSubjectAccessReviewOutput =
  typeof CreateAuthorizationV1SelfSubjectAccessReviewOutput.Type;

// The operation
/**
 * create a SelfSubjectAccessReview
 */
export const createAuthorizationV1SelfSubjectAccessReview =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateAuthorizationV1SelfSubjectAccessReviewInput,
    outputSchema: CreateAuthorizationV1SelfSubjectAccessReviewOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateAuthorizationV1SelfSubjectRulesReviewInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_authorization_v1_SelfSubjectRulesReviewSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authorization_v1_SubjectRulesReviewStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/authorization.k8s.io/v1/selfsubjectrulesreviews",
    }),
  );
export type CreateAuthorizationV1SelfSubjectRulesReviewInput =
  typeof CreateAuthorizationV1SelfSubjectRulesReviewInput.Type;

// Output Schema
export const CreateAuthorizationV1SelfSubjectRulesReviewOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_authorization_v1_SelfSubjectRulesReviewSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authorization_v1_SubjectRulesReviewStatusSchema,
      ),
    ),
  });
export type CreateAuthorizationV1SelfSubjectRulesReviewOutput =
  typeof CreateAuthorizationV1SelfSubjectRulesReviewOutput.Type;

// The operation
/**
 * create a SelfSubjectRulesReview
 */
export const createAuthorizationV1SelfSubjectRulesReview =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateAuthorizationV1SelfSubjectRulesReviewInput,
    outputSchema: CreateAuthorizationV1SelfSubjectRulesReviewOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateAuthorizationV1SubjectAccessReviewInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_authorization_v1_SubjectAccessReviewSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authorization_v1_SubjectAccessReviewStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/authorization.k8s.io/v1/subjectaccessreviews",
    }),
  );
export type CreateAuthorizationV1SubjectAccessReviewInput =
  typeof CreateAuthorizationV1SubjectAccessReviewInput.Type;

// Output Schema
export const CreateAuthorizationV1SubjectAccessReviewOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_authorization_v1_SubjectAccessReviewSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authorization_v1_SubjectAccessReviewStatusSchema,
      ),
    ),
  });
export type CreateAuthorizationV1SubjectAccessReviewOutput =
  typeof CreateAuthorizationV1SubjectAccessReviewOutput.Type;

// The operation
/**
 * create a SubjectAccessReview
 */
export const createAuthorizationV1SubjectAccessReview =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateAuthorizationV1SubjectAccessReviewInput,
    outputSchema: CreateAuthorizationV1SubjectAccessReviewOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const GetAuthorizationAPIGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/authorization.k8s.io/" }),
  );
export type GetAuthorizationAPIGroupInput =
  typeof GetAuthorizationAPIGroupInput.Type;

// Output Schema
export const GetAuthorizationAPIGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type GetAuthorizationAPIGroupOutput =
  typeof GetAuthorizationAPIGroupOutput.Type;

// The operation
/**
 * get information of a group
 */
export const getAuthorizationAPIGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetAuthorizationAPIGroupInput,
    outputSchema: GetAuthorizationAPIGroupOutput,
  }),
);
// Input Schema
export const GetAuthorizationV1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/authorization.k8s.io/v1/" }),
  );
export type GetAuthorizationV1APIResourcesInput =
  typeof GetAuthorizationV1APIResourcesInput.Type;

// Output Schema
export const GetAuthorizationV1APIResourcesOutput =
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
export type GetAuthorizationV1APIResourcesOutput =
  typeof GetAuthorizationV1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getAuthorizationV1APIResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetAuthorizationV1APIResourcesInput,
    outputSchema: GetAuthorizationV1APIResourcesOutput,
  }));
