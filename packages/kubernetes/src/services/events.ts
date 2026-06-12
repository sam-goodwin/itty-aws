/**
 * Kubernetes Events API
 *
 * Generated from the Kubernetes OpenAPI spec.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import { Conflict, NotFound, UnprocessableEntity } from "../errors.ts";
import {
  io_k8s_api_core_v1_EventSourceSchema,
  io_k8s_api_core_v1_ObjectReferenceSchema,
  io_k8s_api_events_v1_EventSchema,
  io_k8s_api_events_v1_EventSeriesSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscoverySchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDRSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetailsSchema,
  io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema,
  io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
} from "./_schemas.ts";

// Input Schema
export const CreateEventsV1NamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    deprecatedCount: Schema.optional(Schema.Number),
    deprecatedFirstTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    deprecatedLastTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    deprecatedSource: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSourceSchema),
    ),
    eventTime: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    note: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    regarding: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    related: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    reportingController: Schema.optional(Schema.String),
    reportingInstance: Schema.optional(Schema.String),
    series: Schema.optional(
      Schema.suspend(() => io_k8s_api_events_v1_EventSeriesSchema),
    ),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/events.k8s.io/v1/namespaces/{namespace}/events",
    }),
  );
export type CreateEventsV1NamespacedEventInput =
  typeof CreateEventsV1NamespacedEventInput.Type;

// Output Schema
export const CreateEventsV1NamespacedEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    deprecatedCount: Schema.optional(Schema.Number),
    deprecatedFirstTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    deprecatedLastTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    deprecatedSource: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSourceSchema),
    ),
    eventTime: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    note: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    regarding: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    related: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    reportingController: Schema.optional(Schema.String),
    reportingInstance: Schema.optional(Schema.String),
    series: Schema.optional(
      Schema.suspend(() => io_k8s_api_events_v1_EventSeriesSchema),
    ),
    type: Schema.optional(Schema.String),
  });
export type CreateEventsV1NamespacedEventOutput =
  typeof CreateEventsV1NamespacedEventOutput.Type;

// The operation
/**
 * create an Event
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createEventsV1NamespacedEvent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateEventsV1NamespacedEventInput,
    outputSchema: CreateEventsV1NamespacedEventOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const DeleteEventsV1CollectionNamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/events.k8s.io/v1/namespaces/{namespace}/events",
    }),
  );
export type DeleteEventsV1CollectionNamespacedEventInput =
  typeof DeleteEventsV1CollectionNamespacedEventInput.Type;

// Output Schema
export const DeleteEventsV1CollectionNamespacedEventOutput =
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
export type DeleteEventsV1CollectionNamespacedEventOutput =
  typeof DeleteEventsV1CollectionNamespacedEventOutput.Type;

// The operation
/**
 * delete collection of Event
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteEventsV1CollectionNamespacedEvent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteEventsV1CollectionNamespacedEventInput,
    outputSchema: DeleteEventsV1CollectionNamespacedEventOutput,
  }));
// Input Schema
export const DeleteEventsV1NamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}",
    }),
  );
export type DeleteEventsV1NamespacedEventInput =
  typeof DeleteEventsV1NamespacedEventInput.Type;

// Output Schema
export const DeleteEventsV1NamespacedEventOutput =
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
export type DeleteEventsV1NamespacedEventOutput =
  typeof DeleteEventsV1NamespacedEventOutput.Type;

// The operation
/**
 * delete an Event
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
export const deleteEventsV1NamespacedEvent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteEventsV1NamespacedEventInput,
    outputSchema: DeleteEventsV1NamespacedEventOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const GetEventsAPIGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/apis/events.k8s.io/" }));
export type GetEventsAPIGroupInput = typeof GetEventsAPIGroupInput.Type;

// Output Schema
export const GetEventsAPIGroupOutput =
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
export type GetEventsAPIGroupOutput = typeof GetEventsAPIGroupOutput.Type;

// The operation
/**
 * get information of a group
 */
export const getEventsAPIGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetEventsAPIGroupInput,
  outputSchema: GetEventsAPIGroupOutput,
}));
// Input Schema
export const GetEventsV1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/events.k8s.io/v1/" }),
  );
export type GetEventsV1APIResourcesInput =
  typeof GetEventsV1APIResourcesInput.Type;

// Output Schema
export const GetEventsV1APIResourcesOutput =
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
export type GetEventsV1APIResourcesOutput =
  typeof GetEventsV1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getEventsV1APIResources = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetEventsV1APIResourcesInput,
    outputSchema: GetEventsV1APIResourcesOutput,
  }),
);
// Input Schema
export const ListEventsV1EventForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/events.k8s.io/v1/events" }),
  );
export type ListEventsV1EventForAllNamespacesInput =
  typeof ListEventsV1EventForAllNamespacesInput.Type;

// Output Schema
export const ListEventsV1EventForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(Schema.suspend(() => io_k8s_api_events_v1_EventSchema)),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListEventsV1EventForAllNamespacesOutput =
  typeof ListEventsV1EventForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind Event
 */
export const listEventsV1EventForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListEventsV1EventForAllNamespacesInput,
    outputSchema: ListEventsV1EventForAllNamespacesOutput,
  }));
// Input Schema
export const ListEventsV1NamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/events.k8s.io/v1/namespaces/{namespace}/events",
    }),
  );
export type ListEventsV1NamespacedEventInput =
  typeof ListEventsV1NamespacedEventInput.Type;

// Output Schema
export const ListEventsV1NamespacedEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(Schema.suspend(() => io_k8s_api_events_v1_EventSchema)),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema),
    ),
  });
export type ListEventsV1NamespacedEventOutput =
  typeof ListEventsV1NamespacedEventOutput.Type;

// The operation
/**
 * list or watch objects of kind Event
 */
export const listEventsV1NamespacedEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListEventsV1NamespacedEventInput,
    outputSchema: ListEventsV1NamespacedEventOutput,
  }),
);
// Input Schema
export const PatchEventsV1NamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}",
    }),
  );
export type PatchEventsV1NamespacedEventInput =
  typeof PatchEventsV1NamespacedEventInput.Type;

// Output Schema
export const PatchEventsV1NamespacedEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    deprecatedCount: Schema.optional(Schema.Number),
    deprecatedFirstTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    deprecatedLastTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    deprecatedSource: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSourceSchema),
    ),
    eventTime: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    note: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    regarding: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    related: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    reportingController: Schema.optional(Schema.String),
    reportingInstance: Schema.optional(Schema.String),
    series: Schema.optional(
      Schema.suspend(() => io_k8s_api_events_v1_EventSeriesSchema),
    ),
    type: Schema.optional(Schema.String),
  });
export type PatchEventsV1NamespacedEventOutput =
  typeof PatchEventsV1NamespacedEventOutput.Type;

// The operation
/**
 * partially update the specified Event
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const patchEventsV1NamespacedEvent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchEventsV1NamespacedEventInput,
    outputSchema: PatchEventsV1NamespacedEventOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReadEventsV1NamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}",
    }),
  );
export type ReadEventsV1NamespacedEventInput =
  typeof ReadEventsV1NamespacedEventInput.Type;

// Output Schema
export const ReadEventsV1NamespacedEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    deprecatedCount: Schema.optional(Schema.Number),
    deprecatedFirstTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    deprecatedLastTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    deprecatedSource: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSourceSchema),
    ),
    eventTime: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    note: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    regarding: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    related: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    reportingController: Schema.optional(Schema.String),
    reportingInstance: Schema.optional(Schema.String),
    series: Schema.optional(
      Schema.suspend(() => io_k8s_api_events_v1_EventSeriesSchema),
    ),
    type: Schema.optional(Schema.String),
  });
export type ReadEventsV1NamespacedEventOutput =
  typeof ReadEventsV1NamespacedEventOutput.Type;

// The operation
/**
 * read the specified Event
 */
export const readEventsV1NamespacedEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReadEventsV1NamespacedEventInput,
    outputSchema: ReadEventsV1NamespacedEventOutput,
    errors: [NotFound] as const,
  }),
);
// Input Schema
export const ReplaceEventsV1NamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    deprecatedCount: Schema.optional(Schema.Number),
    deprecatedFirstTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    deprecatedLastTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    deprecatedSource: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSourceSchema),
    ),
    eventTime: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    note: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    regarding: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    related: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    reportingController: Schema.optional(Schema.String),
    reportingInstance: Schema.optional(Schema.String),
    series: Schema.optional(
      Schema.suspend(() => io_k8s_api_events_v1_EventSeriesSchema),
    ),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}",
    }),
  );
export type ReplaceEventsV1NamespacedEventInput =
  typeof ReplaceEventsV1NamespacedEventInput.Type;

// Output Schema
export const ReplaceEventsV1NamespacedEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    deprecatedCount: Schema.optional(Schema.Number),
    deprecatedFirstTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    deprecatedLastTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    deprecatedSource: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EventSourceSchema),
    ),
    eventTime: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    note: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    regarding: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    related: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    reportingController: Schema.optional(Schema.String),
    reportingInstance: Schema.optional(Schema.String),
    series: Schema.optional(
      Schema.suspend(() => io_k8s_api_events_v1_EventSeriesSchema),
    ),
    type: Schema.optional(Schema.String),
  });
export type ReplaceEventsV1NamespacedEventOutput =
  typeof ReplaceEventsV1NamespacedEventOutput.Type;

// The operation
/**
 * replace the specified Event
 *
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceEventsV1NamespacedEvent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceEventsV1NamespacedEventInput,
    outputSchema: ReplaceEventsV1NamespacedEventOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const WatchEventsV1EventListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/events.k8s.io/v1/watch/events" }),
  );
export type WatchEventsV1EventListForAllNamespacesInput =
  typeof WatchEventsV1EventListForAllNamespacesInput.Type;

// Output Schema
export const WatchEventsV1EventListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchEventsV1EventListForAllNamespacesOutput =
  typeof WatchEventsV1EventListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchEventsV1EventListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchEventsV1EventListForAllNamespacesInput,
    outputSchema: WatchEventsV1EventListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchEventsV1NamespacedEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/events.k8s.io/v1/watch/namespaces/{namespace}/events/{name}",
    }),
  );
export type WatchEventsV1NamespacedEventInput =
  typeof WatchEventsV1NamespacedEventInput.Type;

// Output Schema
export const WatchEventsV1NamespacedEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchEventsV1NamespacedEventOutput =
  typeof WatchEventsV1NamespacedEventOutput.Type;

// The operation
/**
 * watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export const watchEventsV1NamespacedEvent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchEventsV1NamespacedEventInput,
    outputSchema: WatchEventsV1NamespacedEventOutput,
  }));
// Input Schema
export const WatchEventsV1NamespacedEventListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/apis/events.k8s.io/v1/watch/namespaces/{namespace}/events",
    }),
  );
export type WatchEventsV1NamespacedEventListInput =
  typeof WatchEventsV1NamespacedEventListInput.Type;

// Output Schema
export const WatchEventsV1NamespacedEventListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
    type: Schema.String,
  });
export type WatchEventsV1NamespacedEventListOutput =
  typeof WatchEventsV1NamespacedEventListOutput.Type;

// The operation
/**
 * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
 */
export const watchEventsV1NamespacedEventList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchEventsV1NamespacedEventListInput,
    outputSchema: WatchEventsV1NamespacedEventListOutput,
  }));
