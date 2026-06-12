/**
 * Kubernetes Discovery API
 *
 * Generated from the Kubernetes OpenAPI spec.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import { Conflict, NotFound, UnprocessableEntity } from "../errors.ts";
import {
  io_k8s_api_discovery_v1_EndpointPortSchema,
  io_k8s_api_discovery_v1_EndpointSchema,
  io_k8s_api_discovery_v1_EndpointSliceSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscoverySchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDRSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetailsSchema,
  io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
} from "./_schemas.ts";

// Input Schema
export const CreateDiscoveryV1NamespacedEndpointSliceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    addressType: Schema.String,
    apiVersion: Schema.optional(Schema.String),
    endpoints: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_discovery_v1_EndpointSchema),
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    ports: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_discovery_v1_EndpointPortSchema),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices",
    }),
  );
export type CreateDiscoveryV1NamespacedEndpointSliceInput =
  typeof CreateDiscoveryV1NamespacedEndpointSliceInput.Type;

// Output Schema
export const CreateDiscoveryV1NamespacedEndpointSliceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressType: Schema.String,
    apiVersion: Schema.optional(Schema.String),
    endpoints: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_discovery_v1_EndpointSchema),
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    ports: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_discovery_v1_EndpointPortSchema),
      ),
    ),
  });
export type CreateDiscoveryV1NamespacedEndpointSliceOutput =
  typeof CreateDiscoveryV1NamespacedEndpointSliceOutput.Type;

// The operation
/**
 * create an EndpointSlice
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createDiscoveryV1NamespacedEndpointSlice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateDiscoveryV1NamespacedEndpointSliceInput,
    outputSchema: CreateDiscoveryV1NamespacedEndpointSliceOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const DeleteDiscoveryV1CollectionNamespacedEndpointSliceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices",
    }),
  );
export type DeleteDiscoveryV1CollectionNamespacedEndpointSliceInput =
  typeof DeleteDiscoveryV1CollectionNamespacedEndpointSliceInput.Type;

// Output Schema
export const DeleteDiscoveryV1CollectionNamespacedEndpointSliceOutput =
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
export type DeleteDiscoveryV1CollectionNamespacedEndpointSliceOutput =
  typeof DeleteDiscoveryV1CollectionNamespacedEndpointSliceOutput.Type;

// The operation
/**
 * delete collection of EndpointSlice
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteDiscoveryV1CollectionNamespacedEndpointSlice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteDiscoveryV1CollectionNamespacedEndpointSliceInput,
    outputSchema: DeleteDiscoveryV1CollectionNamespacedEndpointSliceOutput,
  }));
// Input Schema
export const DeleteDiscoveryV1NamespacedEndpointSliceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}",
    }),
  );
export type DeleteDiscoveryV1NamespacedEndpointSliceInput =
  typeof DeleteDiscoveryV1NamespacedEndpointSliceInput.Type;

// Output Schema
export const DeleteDiscoveryV1NamespacedEndpointSliceOutput =
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
export type DeleteDiscoveryV1NamespacedEndpointSliceOutput =
  typeof DeleteDiscoveryV1NamespacedEndpointSliceOutput.Type;

// The operation
/**
 * delete an EndpointSlice
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteDiscoveryV1NamespacedEndpointSlice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteDiscoveryV1NamespacedEndpointSliceInput,
    outputSchema: DeleteDiscoveryV1NamespacedEndpointSliceOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const GetDiscoveryAPIGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/discovery.k8s.io/" }),
  );
export type GetDiscoveryAPIGroupInput = typeof GetDiscoveryAPIGroupInput.Type;

// Output Schema
export const GetDiscoveryAPIGroupOutput =
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
export type GetDiscoveryAPIGroupOutput = typeof GetDiscoveryAPIGroupOutput.Type;

// The operation
/**
 * get information of a group
 */
export const getDiscoveryAPIGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetDiscoveryAPIGroupInput,
    outputSchema: GetDiscoveryAPIGroupOutput,
  }),
);
// Input Schema
export const GetDiscoveryV1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/discovery.k8s.io/v1/" }),
  );
export type GetDiscoveryV1APIResourcesInput =
  typeof GetDiscoveryV1APIResourcesInput.Type;

// Output Schema
export const GetDiscoveryV1APIResourcesOutput =
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
export type GetDiscoveryV1APIResourcesOutput =
  typeof GetDiscoveryV1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getDiscoveryV1APIResources = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetDiscoveryV1APIResourcesInput,
    outputSchema: GetDiscoveryV1APIResourcesOutput,
  }),
);
// Input Schema
export const ListDiscoveryV1EndpointSliceForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/discovery.k8s.io/v1/endpointslices" }),
  );
export type ListDiscoveryV1EndpointSliceForAllNamespacesInput =
  typeof ListDiscoveryV1EndpointSliceForAllNamespacesInput.Type;

// Output Schema
export const ListDiscoveryV1EndpointSliceForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_discovery_v1_EndpointSliceSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListDiscoveryV1EndpointSliceForAllNamespacesOutput =
  typeof ListDiscoveryV1EndpointSliceForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind EndpointSlice
 */
export const listDiscoveryV1EndpointSliceForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListDiscoveryV1EndpointSliceForAllNamespacesInput,
    outputSchema: ListDiscoveryV1EndpointSliceForAllNamespacesOutput,
  }));
// Input Schema
export const ListDiscoveryV1NamespacedEndpointSliceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices",
    }),
  );
export type ListDiscoveryV1NamespacedEndpointSliceInput =
  typeof ListDiscoveryV1NamespacedEndpointSliceInput.Type;

// Output Schema
export const ListDiscoveryV1NamespacedEndpointSliceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.suspend(() => io_k8s_api_discovery_v1_EndpointSliceSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListDiscoveryV1NamespacedEndpointSliceOutput =
  typeof ListDiscoveryV1NamespacedEndpointSliceOutput.Type;

// The operation
/**
 * list or watch objects of kind EndpointSlice
 */
export const listDiscoveryV1NamespacedEndpointSlice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListDiscoveryV1NamespacedEndpointSliceInput,
    outputSchema: ListDiscoveryV1NamespacedEndpointSliceOutput,
  }));
// Input Schema
export const PatchDiscoveryV1NamespacedEndpointSliceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}",
    }),
  );
export type PatchDiscoveryV1NamespacedEndpointSliceInput =
  typeof PatchDiscoveryV1NamespacedEndpointSliceInput.Type;

// Output Schema
export const PatchDiscoveryV1NamespacedEndpointSliceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressType: Schema.String,
    apiVersion: Schema.optional(Schema.String),
    endpoints: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_discovery_v1_EndpointSchema),
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    ports: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_discovery_v1_EndpointPortSchema),
      ),
    ),
  });
export type PatchDiscoveryV1NamespacedEndpointSliceOutput =
  typeof PatchDiscoveryV1NamespacedEndpointSliceOutput.Type;

// The operation
/**
 * partially update the specified EndpointSlice
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchDiscoveryV1NamespacedEndpointSlice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchDiscoveryV1NamespacedEndpointSliceInput,
    outputSchema: PatchDiscoveryV1NamespacedEndpointSliceOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReadDiscoveryV1NamespacedEndpointSliceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}",
    }),
  );
export type ReadDiscoveryV1NamespacedEndpointSliceInput =
  typeof ReadDiscoveryV1NamespacedEndpointSliceInput.Type;

// Output Schema
export const ReadDiscoveryV1NamespacedEndpointSliceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressType: Schema.String,
    apiVersion: Schema.optional(Schema.String),
    endpoints: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_discovery_v1_EndpointSchema),
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    ports: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_discovery_v1_EndpointPortSchema),
      ),
    ),
  });
export type ReadDiscoveryV1NamespacedEndpointSliceOutput =
  typeof ReadDiscoveryV1NamespacedEndpointSliceOutput.Type;

// The operation
/**
 * read the specified EndpointSlice
 */
export const readDiscoveryV1NamespacedEndpointSlice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadDiscoveryV1NamespacedEndpointSliceInput,
    outputSchema: ReadDiscoveryV1NamespacedEndpointSliceOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReplaceDiscoveryV1NamespacedEndpointSliceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    addressType: Schema.String,
    apiVersion: Schema.optional(Schema.String),
    endpoints: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_discovery_v1_EndpointSchema),
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    ports: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_discovery_v1_EndpointPortSchema),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}",
    }),
  );
export type ReplaceDiscoveryV1NamespacedEndpointSliceInput =
  typeof ReplaceDiscoveryV1NamespacedEndpointSliceInput.Type;

// Output Schema
export const ReplaceDiscoveryV1NamespacedEndpointSliceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addressType: Schema.String,
    apiVersion: Schema.optional(Schema.String),
    endpoints: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_discovery_v1_EndpointSchema),
      ),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    ports: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_discovery_v1_EndpointPortSchema),
      ),
    ),
  });
export type ReplaceDiscoveryV1NamespacedEndpointSliceOutput =
  typeof ReplaceDiscoveryV1NamespacedEndpointSliceOutput.Type;

// The operation
/**
 * replace the specified EndpointSlice
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceDiscoveryV1NamespacedEndpointSlice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceDiscoveryV1NamespacedEndpointSliceInput,
    outputSchema: ReplaceDiscoveryV1NamespacedEndpointSliceOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const WatchDiscoveryV1EndpointSliceListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/discovery.k8s.io/v1/watch/endpointslices",
    }),
  );
export type WatchDiscoveryV1EndpointSliceListForAllNamespacesInput =
  typeof WatchDiscoveryV1EndpointSliceListForAllNamespacesInput.Type;

// Output Schema
export const WatchDiscoveryV1EndpointSliceListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchDiscoveryV1EndpointSliceListForAllNamespacesOutput =
  typeof WatchDiscoveryV1EndpointSliceListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchDiscoveryV1EndpointSliceListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchDiscoveryV1EndpointSliceListForAllNamespacesInput,
    outputSchema: WatchDiscoveryV1EndpointSliceListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchDiscoveryV1NamespacedEndpointSliceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/discovery.k8s.io/v1/watch/namespaces/{namespace}/endpointslices/{name}",
    }),
  );
export type WatchDiscoveryV1NamespacedEndpointSliceInput =
  typeof WatchDiscoveryV1NamespacedEndpointSliceInput.Type;

// Output Schema
export const WatchDiscoveryV1NamespacedEndpointSliceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchDiscoveryV1NamespacedEndpointSliceOutput =
  typeof WatchDiscoveryV1NamespacedEndpointSliceOutput.Type;

// The operation
/**
 * watch changes to an object of kind EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchDiscoveryV1NamespacedEndpointSlice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchDiscoveryV1NamespacedEndpointSliceInput,
    outputSchema: WatchDiscoveryV1NamespacedEndpointSliceOutput,
  }));
// Input Schema
export const WatchDiscoveryV1NamespacedEndpointSliceListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/discovery.k8s.io/v1/watch/namespaces/{namespace}/endpointslices",
    }),
  );
export type WatchDiscoveryV1NamespacedEndpointSliceListInput =
  typeof WatchDiscoveryV1NamespacedEndpointSliceListInput.Type;

// Output Schema
export const WatchDiscoveryV1NamespacedEndpointSliceListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchDiscoveryV1NamespacedEndpointSliceListOutput =
  typeof WatchDiscoveryV1NamespacedEndpointSliceListOutput.Type;

// The operation
/**
 * watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchDiscoveryV1NamespacedEndpointSliceList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchDiscoveryV1NamespacedEndpointSliceListInput,
    outputSchema: WatchDiscoveryV1NamespacedEndpointSliceListOutput,
  }));
