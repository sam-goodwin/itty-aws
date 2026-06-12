/**
 * Kubernetes API Extensions API
 *
 * Generated from the Kubernetes OpenAPI spec.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import { Conflict, NotFound, UnprocessableEntity } from "../errors.ts";
import {
  io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSchema,
  io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpecSchema,
  io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatusSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscoverySchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDRSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetailsSchema,
  io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
} from "./_schemas.ts";

// Input Schema
export const CreateApiextensionsV1CustomResourceDefinitionInput =
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
    spec: Schema.suspend(
      () =>
        io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/apiextensions.k8s.io/v1/customresourcedefinitions",
    }),
  );
export type CreateApiextensionsV1CustomResourceDefinitionInput =
  typeof CreateApiextensionsV1CustomResourceDefinitionInput.Type;

// Output Schema
export const CreateApiextensionsV1CustomResourceDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () =>
        io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatusSchema,
      ),
    ),
  });
export type CreateApiextensionsV1CustomResourceDefinitionOutput =
  typeof CreateApiextensionsV1CustomResourceDefinitionOutput.Type;

// The operation
/**
 * create a CustomResourceDefinition
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createApiextensionsV1CustomResourceDefinition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateApiextensionsV1CustomResourceDefinitionInput,
    outputSchema: CreateApiextensionsV1CustomResourceDefinitionOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const DeleteApiextensionsV1CollectionCustomResourceDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/apiextensions.k8s.io/v1/customresourcedefinitions",
    }),
  );
export type DeleteApiextensionsV1CollectionCustomResourceDefinitionInput =
  typeof DeleteApiextensionsV1CollectionCustomResourceDefinitionInput.Type;

// Output Schema
export const DeleteApiextensionsV1CollectionCustomResourceDefinitionOutput =
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
export type DeleteApiextensionsV1CollectionCustomResourceDefinitionOutput =
  typeof DeleteApiextensionsV1CollectionCustomResourceDefinitionOutput.Type;

// The operation
/**
 * delete collection of CustomResourceDefinition
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteApiextensionsV1CollectionCustomResourceDefinition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteApiextensionsV1CollectionCustomResourceDefinitionInput,
    outputSchema: DeleteApiextensionsV1CollectionCustomResourceDefinitionOutput,
  }));
// Input Schema
export const DeleteApiextensionsV1CustomResourceDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}",
    }),
  );
export type DeleteApiextensionsV1CustomResourceDefinitionInput =
  typeof DeleteApiextensionsV1CustomResourceDefinitionInput.Type;

// Output Schema
export const DeleteApiextensionsV1CustomResourceDefinitionOutput =
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
export type DeleteApiextensionsV1CustomResourceDefinitionOutput =
  typeof DeleteApiextensionsV1CustomResourceDefinitionOutput.Type;

// The operation
/**
 * delete a CustomResourceDefinition
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteApiextensionsV1CustomResourceDefinition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteApiextensionsV1CustomResourceDefinitionInput,
    outputSchema: DeleteApiextensionsV1CustomResourceDefinitionOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const GetApiextensionsAPIGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/apiextensions.k8s.io/" }),
  );
export type GetApiextensionsAPIGroupInput =
  typeof GetApiextensionsAPIGroupInput.Type;

// Output Schema
export const GetApiextensionsAPIGroupOutput =
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
export type GetApiextensionsAPIGroupOutput =
  typeof GetApiextensionsAPIGroupOutput.Type;

// The operation
/**
 * get information of a group
 */
export const getApiextensionsAPIGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetApiextensionsAPIGroupInput,
    outputSchema: GetApiextensionsAPIGroupOutput,
  }),
);
// Input Schema
export const GetApiextensionsV1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/apiextensions.k8s.io/v1/" }),
  );
export type GetApiextensionsV1APIResourcesInput =
  typeof GetApiextensionsV1APIResourcesInput.Type;

// Output Schema
export const GetApiextensionsV1APIResourcesOutput =
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
export type GetApiextensionsV1APIResourcesOutput =
  typeof GetApiextensionsV1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getApiextensionsV1APIResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetApiextensionsV1APIResourcesInput,
    outputSchema: GetApiextensionsV1APIResourcesOutput,
  }));
// Input Schema
export const ListApiextensionsV1CustomResourceDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apiextensions.k8s.io/v1/customresourcedefinitions",
    }),
  );
export type ListApiextensionsV1CustomResourceDefinitionInput =
  typeof ListApiextensionsV1CustomResourceDefinitionInput.Type;

// Output Schema
export const ListApiextensionsV1CustomResourceDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSchema,
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListApiextensionsV1CustomResourceDefinitionOutput =
  typeof ListApiextensionsV1CustomResourceDefinitionOutput.Type;

// The operation
/**
 * list or watch objects of kind CustomResourceDefinition
 */
export const listApiextensionsV1CustomResourceDefinition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListApiextensionsV1CustomResourceDefinitionInput,
    outputSchema: ListApiextensionsV1CustomResourceDefinitionOutput,
  }));
// Input Schema
export const PatchApiextensionsV1CustomResourceDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}",
    }),
  );
export type PatchApiextensionsV1CustomResourceDefinitionInput =
  typeof PatchApiextensionsV1CustomResourceDefinitionInput.Type;

// Output Schema
export const PatchApiextensionsV1CustomResourceDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () =>
        io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatusSchema,
      ),
    ),
  });
export type PatchApiextensionsV1CustomResourceDefinitionOutput =
  typeof PatchApiextensionsV1CustomResourceDefinitionOutput.Type;

// The operation
/**
 * partially update the specified CustomResourceDefinition
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchApiextensionsV1CustomResourceDefinition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchApiextensionsV1CustomResourceDefinitionInput,
    outputSchema: PatchApiextensionsV1CustomResourceDefinitionOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchApiextensionsV1CustomResourceDefinitionStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status",
    }),
  );
export type PatchApiextensionsV1CustomResourceDefinitionStatusInput =
  typeof PatchApiextensionsV1CustomResourceDefinitionStatusInput.Type;

// Output Schema
export const PatchApiextensionsV1CustomResourceDefinitionStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () =>
        io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatusSchema,
      ),
    ),
  });
export type PatchApiextensionsV1CustomResourceDefinitionStatusOutput =
  typeof PatchApiextensionsV1CustomResourceDefinitionStatusOutput.Type;

// The operation
/**
 * partially update status of the specified CustomResourceDefinition
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchApiextensionsV1CustomResourceDefinitionStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchApiextensionsV1CustomResourceDefinitionStatusInput,
    outputSchema: PatchApiextensionsV1CustomResourceDefinitionStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReadApiextensionsV1CustomResourceDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}",
    }),
  );
export type ReadApiextensionsV1CustomResourceDefinitionInput =
  typeof ReadApiextensionsV1CustomResourceDefinitionInput.Type;

// Output Schema
export const ReadApiextensionsV1CustomResourceDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () =>
        io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatusSchema,
      ),
    ),
  });
export type ReadApiextensionsV1CustomResourceDefinitionOutput =
  typeof ReadApiextensionsV1CustomResourceDefinitionOutput.Type;

// The operation
/**
 * read the specified CustomResourceDefinition
 */
export const readApiextensionsV1CustomResourceDefinition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadApiextensionsV1CustomResourceDefinitionInput,
    outputSchema: ReadApiextensionsV1CustomResourceDefinitionOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadApiextensionsV1CustomResourceDefinitionStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status",
    }),
  );
export type ReadApiextensionsV1CustomResourceDefinitionStatusInput =
  typeof ReadApiextensionsV1CustomResourceDefinitionStatusInput.Type;

// Output Schema
export const ReadApiextensionsV1CustomResourceDefinitionStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () =>
        io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatusSchema,
      ),
    ),
  });
export type ReadApiextensionsV1CustomResourceDefinitionStatusOutput =
  typeof ReadApiextensionsV1CustomResourceDefinitionStatusOutput.Type;

// The operation
/**
 * read status of the specified CustomResourceDefinition
 */
export const readApiextensionsV1CustomResourceDefinitionStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadApiextensionsV1CustomResourceDefinitionStatusInput,
    outputSchema: ReadApiextensionsV1CustomResourceDefinitionStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReplaceApiextensionsV1CustomResourceDefinitionInput =
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
    spec: Schema.suspend(
      () =>
        io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}",
    }),
  );
export type ReplaceApiextensionsV1CustomResourceDefinitionInput =
  typeof ReplaceApiextensionsV1CustomResourceDefinitionInput.Type;

// Output Schema
export const ReplaceApiextensionsV1CustomResourceDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () =>
        io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatusSchema,
      ),
    ),
  });
export type ReplaceApiextensionsV1CustomResourceDefinitionOutput =
  typeof ReplaceApiextensionsV1CustomResourceDefinitionOutput.Type;

// The operation
/**
 * replace the specified CustomResourceDefinition
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceApiextensionsV1CustomResourceDefinition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceApiextensionsV1CustomResourceDefinitionInput,
    outputSchema: ReplaceApiextensionsV1CustomResourceDefinitionOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceApiextensionsV1CustomResourceDefinitionStatusInput =
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
    spec: Schema.suspend(
      () =>
        io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatusSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status",
    }),
  );
export type ReplaceApiextensionsV1CustomResourceDefinitionStatusInput =
  typeof ReplaceApiextensionsV1CustomResourceDefinitionStatusInput.Type;

// Output Schema
export const ReplaceApiextensionsV1CustomResourceDefinitionStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () =>
        io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatusSchema,
      ),
    ),
  });
export type ReplaceApiextensionsV1CustomResourceDefinitionStatusOutput =
  typeof ReplaceApiextensionsV1CustomResourceDefinitionStatusOutput.Type;

// The operation
/**
 * replace status of the specified CustomResourceDefinition
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceApiextensionsV1CustomResourceDefinitionStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceApiextensionsV1CustomResourceDefinitionStatusInput,
    outputSchema: ReplaceApiextensionsV1CustomResourceDefinitionStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const WatchApiextensionsV1CustomResourceDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/{name}",
    }),
  );
export type WatchApiextensionsV1CustomResourceDefinitionInput =
  typeof WatchApiextensionsV1CustomResourceDefinitionInput.Type;

// Output Schema
export const WatchApiextensionsV1CustomResourceDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchApiextensionsV1CustomResourceDefinitionOutput =
  typeof WatchApiextensionsV1CustomResourceDefinitionOutput.Type;

// The operation
/**
 * watch changes to an object of kind CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchApiextensionsV1CustomResourceDefinition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchApiextensionsV1CustomResourceDefinitionInput,
    outputSchema: WatchApiextensionsV1CustomResourceDefinitionOutput,
  }));
// Input Schema
export const WatchApiextensionsV1CustomResourceDefinitionListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions",
    }),
  );
export type WatchApiextensionsV1CustomResourceDefinitionListInput =
  typeof WatchApiextensionsV1CustomResourceDefinitionListInput.Type;

// Output Schema
export const WatchApiextensionsV1CustomResourceDefinitionListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchApiextensionsV1CustomResourceDefinitionListOutput =
  typeof WatchApiextensionsV1CustomResourceDefinitionListOutput.Type;

// The operation
/**
 * watch individual changes to a list of CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchApiextensionsV1CustomResourceDefinitionList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchApiextensionsV1CustomResourceDefinitionListInput,
    outputSchema: WatchApiextensionsV1CustomResourceDefinitionListOutput,
  }));
