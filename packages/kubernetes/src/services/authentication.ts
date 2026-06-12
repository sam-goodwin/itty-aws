/**
 * Kubernetes Authentication API
 *
 * Generated from the Kubernetes OpenAPI spec.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import { Conflict, UnprocessableEntity } from "../errors.ts";
import {
  io_k8s_api_authentication_v1_SelfSubjectReviewStatusSchema,
  io_k8s_api_authentication_v1_TokenReviewSpecSchema,
  io_k8s_api_authentication_v1_TokenReviewStatusSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscoverySchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDRSchema,
} from "./_schemas.ts";

// Input Schema
export const CreateAuthenticationV1SelfSubjectReviewInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authentication_v1_SelfSubjectReviewStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/authentication.k8s.io/v1/selfsubjectreviews",
    }),
  );
export type CreateAuthenticationV1SelfSubjectReviewInput =
  typeof CreateAuthenticationV1SelfSubjectReviewInput.Type;

// Output Schema
export const CreateAuthenticationV1SelfSubjectReviewOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authentication_v1_SelfSubjectReviewStatusSchema,
      ),
    ),
  });
export type CreateAuthenticationV1SelfSubjectReviewOutput =
  typeof CreateAuthenticationV1SelfSubjectReviewOutput.Type;

// The operation
/**
 * create a SelfSubjectReview
 */
export const createAuthenticationV1SelfSubjectReview =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateAuthenticationV1SelfSubjectReviewInput,
    outputSchema: CreateAuthenticationV1SelfSubjectReviewOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateAuthenticationV1TokenReviewInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_authentication_v1_TokenReviewSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authentication_v1_TokenReviewStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/authentication.k8s.io/v1/tokenreviews",
    }),
  );
export type CreateAuthenticationV1TokenReviewInput =
  typeof CreateAuthenticationV1TokenReviewInput.Type;

// Output Schema
export const CreateAuthenticationV1TokenReviewOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_authentication_v1_TokenReviewSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authentication_v1_TokenReviewStatusSchema,
      ),
    ),
  });
export type CreateAuthenticationV1TokenReviewOutput =
  typeof CreateAuthenticationV1TokenReviewOutput.Type;

// The operation
/**
 * create a TokenReview
 */
export const createAuthenticationV1TokenReview =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateAuthenticationV1TokenReviewInput,
    outputSchema: CreateAuthenticationV1TokenReviewOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const GetAuthenticationAPIGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/authentication.k8s.io/" }),
  );
export type GetAuthenticationAPIGroupInput =
  typeof GetAuthenticationAPIGroupInput.Type;

// Output Schema
export const GetAuthenticationAPIGroupOutput =
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
export type GetAuthenticationAPIGroupOutput =
  typeof GetAuthenticationAPIGroupOutput.Type;

// The operation
/**
 * get information of a group
 */
export const getAuthenticationAPIGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetAuthenticationAPIGroupInput,
    outputSchema: GetAuthenticationAPIGroupOutput,
  }),
);
// Input Schema
export const GetAuthenticationV1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/authentication.k8s.io/v1/" }),
  );
export type GetAuthenticationV1APIResourcesInput =
  typeof GetAuthenticationV1APIResourcesInput.Type;

// Output Schema
export const GetAuthenticationV1APIResourcesOutput =
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
export type GetAuthenticationV1APIResourcesOutput =
  typeof GetAuthenticationV1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getAuthenticationV1APIResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetAuthenticationV1APIResourcesInput,
    outputSchema: GetAuthenticationV1APIResourcesOutput,
  }));
