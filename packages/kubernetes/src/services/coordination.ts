/**
 * Kubernetes Coordination API
 *
 * Generated from the Kubernetes OpenAPI spec.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import { Conflict, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateCoordinationV1NamespacedLeaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.optional(
      Schema.Struct({
        acquireTime: Schema.optional(Schema.String),
        holderIdentity: Schema.optional(Schema.String),
        leaseDurationSeconds: Schema.optional(Schema.Number),
        leaseTransitions: Schema.optional(Schema.Number),
        preferredHolder: Schema.optional(Schema.String),
        renewTime: Schema.optional(Schema.String),
        strategy: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases",
    }),
  );
export type CreateCoordinationV1NamespacedLeaseInput =
  typeof CreateCoordinationV1NamespacedLeaseInput.Type;

// Output Schema
export const CreateCoordinationV1NamespacedLeaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.optional(
      Schema.Struct({
        acquireTime: Schema.optional(Schema.String),
        holderIdentity: Schema.optional(Schema.String),
        leaseDurationSeconds: Schema.optional(Schema.Number),
        leaseTransitions: Schema.optional(Schema.Number),
        preferredHolder: Schema.optional(Schema.String),
        renewTime: Schema.optional(Schema.String),
        strategy: Schema.optional(Schema.String),
      }),
    ),
  });
export type CreateCoordinationV1NamespacedLeaseOutput =
  typeof CreateCoordinationV1NamespacedLeaseOutput.Type;

// The operation
/**
 * create a Lease
 *
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoordinationV1NamespacedLease =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoordinationV1NamespacedLeaseInput,
    outputSchema: CreateCoordinationV1NamespacedLeaseOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoordinationV1alpha2NamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.Struct({
      binaryVersion: Schema.String,
      emulationVersion: Schema.optional(Schema.String),
      leaseName: Schema.String,
      pingTime: Schema.optional(Schema.String),
      renewTime: Schema.optional(Schema.String),
      strategy: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/coordination.k8s.io/v1alpha2/namespaces/{namespace}/leasecandidates",
    }),
  );
export type CreateCoordinationV1alpha2NamespacedLeaseCandidateInput =
  typeof CreateCoordinationV1alpha2NamespacedLeaseCandidateInput.Type;

// Output Schema
export const CreateCoordinationV1alpha2NamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.Struct({
      binaryVersion: Schema.String,
      emulationVersion: Schema.optional(Schema.String),
      leaseName: Schema.String,
      pingTime: Schema.optional(Schema.String),
      renewTime: Schema.optional(Schema.String),
      strategy: Schema.String,
    }),
  });
export type CreateCoordinationV1alpha2NamespacedLeaseCandidateOutput =
  typeof CreateCoordinationV1alpha2NamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * create a LeaseCandidate
 *
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoordinationV1alpha2NamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoordinationV1alpha2NamespacedLeaseCandidateInput,
    outputSchema: CreateCoordinationV1alpha2NamespacedLeaseCandidateOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCoordinationV1beta1NamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.Struct({
      binaryVersion: Schema.String,
      emulationVersion: Schema.optional(Schema.String),
      leaseName: Schema.String,
      pingTime: Schema.optional(Schema.String),
      renewTime: Schema.optional(Schema.String),
      strategy: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leasecandidates",
    }),
  );
export type CreateCoordinationV1beta1NamespacedLeaseCandidateInput =
  typeof CreateCoordinationV1beta1NamespacedLeaseCandidateInput.Type;

// Output Schema
export const CreateCoordinationV1beta1NamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.Struct({
      binaryVersion: Schema.String,
      emulationVersion: Schema.optional(Schema.String),
      leaseName: Schema.String,
      pingTime: Schema.optional(Schema.String),
      renewTime: Schema.optional(Schema.String),
      strategy: Schema.String,
    }),
  });
export type CreateCoordinationV1beta1NamespacedLeaseCandidateOutput =
  typeof CreateCoordinationV1beta1NamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * create a LeaseCandidate
 *
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCoordinationV1beta1NamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCoordinationV1beta1NamespacedLeaseCandidateInput,
    outputSchema: CreateCoordinationV1beta1NamespacedLeaseCandidateOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const DeleteCoordinationV1CollectionNamespacedLeaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    continue: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    gracePeriodSeconds: Schema.optional(Schema.Number),
    ignoreStoreReadErrorWithClusterBreakingPotential: Schema.optional(
      Schema.Boolean,
    ),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    orphanDependents: Schema.optional(Schema.Boolean),
    propagationPolicy: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    preconditions: Schema.optional(
      Schema.Struct({
        resourceVersion: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases",
    }),
  );
export type DeleteCoordinationV1CollectionNamespacedLeaseInput =
  typeof DeleteCoordinationV1CollectionNamespacedLeaseInput.Type;

// Output Schema
export const DeleteCoordinationV1CollectionNamespacedLeaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Struct({
        causes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              field: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
            }),
          ),
        ),
        group: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        retryAfterSeconds: Schema.optional(Schema.Number),
        uid: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        continue: Schema.optional(Schema.String),
        remainingItemCount: Schema.optional(Schema.Number),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        shardInfo: Schema.optional(
          Schema.Struct({
            selector: Schema.String,
          }),
        ),
      }),
    ),
    reason: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  });
export type DeleteCoordinationV1CollectionNamespacedLeaseOutput =
  typeof DeleteCoordinationV1CollectionNamespacedLeaseOutput.Type;

// The operation
/**
 * delete collection of Lease
 *
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
export const deleteCoordinationV1CollectionNamespacedLease =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoordinationV1CollectionNamespacedLeaseInput,
    outputSchema: DeleteCoordinationV1CollectionNamespacedLeaseOutput,
  }));
// Input Schema
export const DeleteCoordinationV1NamespacedLeaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    gracePeriodSeconds: Schema.optional(Schema.Number),
    ignoreStoreReadErrorWithClusterBreakingPotential: Schema.optional(
      Schema.Boolean,
    ),
    orphanDependents: Schema.optional(Schema.Boolean),
    propagationPolicy: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    preconditions: Schema.optional(
      Schema.Struct({
        resourceVersion: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}",
    }),
  );
export type DeleteCoordinationV1NamespacedLeaseInput =
  typeof DeleteCoordinationV1NamespacedLeaseInput.Type;

// Output Schema
export const DeleteCoordinationV1NamespacedLeaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Struct({
        causes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              field: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
            }),
          ),
        ),
        group: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        retryAfterSeconds: Schema.optional(Schema.Number),
        uid: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        continue: Schema.optional(Schema.String),
        remainingItemCount: Schema.optional(Schema.Number),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        shardInfo: Schema.optional(
          Schema.Struct({
            selector: Schema.String,
          }),
        ),
      }),
    ),
    reason: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  });
export type DeleteCoordinationV1NamespacedLeaseOutput =
  typeof DeleteCoordinationV1NamespacedLeaseOutput.Type;

// The operation
/**
 * delete a Lease
 *
 * @param name - name of the Lease
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteCoordinationV1NamespacedLease =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoordinationV1NamespacedLeaseInput,
    outputSchema: DeleteCoordinationV1NamespacedLeaseOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteCoordinationV1alpha2CollectionNamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    continue: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    gracePeriodSeconds: Schema.optional(Schema.Number),
    ignoreStoreReadErrorWithClusterBreakingPotential: Schema.optional(
      Schema.Boolean,
    ),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    orphanDependents: Schema.optional(Schema.Boolean),
    propagationPolicy: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    preconditions: Schema.optional(
      Schema.Struct({
        resourceVersion: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/coordination.k8s.io/v1alpha2/namespaces/{namespace}/leasecandidates",
    }),
  );
export type DeleteCoordinationV1alpha2CollectionNamespacedLeaseCandidateInput =
  typeof DeleteCoordinationV1alpha2CollectionNamespacedLeaseCandidateInput.Type;

// Output Schema
export const DeleteCoordinationV1alpha2CollectionNamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Struct({
        causes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              field: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
            }),
          ),
        ),
        group: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        retryAfterSeconds: Schema.optional(Schema.Number),
        uid: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        continue: Schema.optional(Schema.String),
        remainingItemCount: Schema.optional(Schema.Number),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        shardInfo: Schema.optional(
          Schema.Struct({
            selector: Schema.String,
          }),
        ),
      }),
    ),
    reason: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  });
export type DeleteCoordinationV1alpha2CollectionNamespacedLeaseCandidateOutput =
  typeof DeleteCoordinationV1alpha2CollectionNamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * delete collection of LeaseCandidate
 *
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
export const deleteCoordinationV1alpha2CollectionNamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      DeleteCoordinationV1alpha2CollectionNamespacedLeaseCandidateInput,
    outputSchema:
      DeleteCoordinationV1alpha2CollectionNamespacedLeaseCandidateOutput,
  }));
// Input Schema
export const DeleteCoordinationV1alpha2NamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    gracePeriodSeconds: Schema.optional(Schema.Number),
    ignoreStoreReadErrorWithClusterBreakingPotential: Schema.optional(
      Schema.Boolean,
    ),
    orphanDependents: Schema.optional(Schema.Boolean),
    propagationPolicy: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    preconditions: Schema.optional(
      Schema.Struct({
        resourceVersion: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/coordination.k8s.io/v1alpha2/namespaces/{namespace}/leasecandidates/{name}",
    }),
  );
export type DeleteCoordinationV1alpha2NamespacedLeaseCandidateInput =
  typeof DeleteCoordinationV1alpha2NamespacedLeaseCandidateInput.Type;

// Output Schema
export const DeleteCoordinationV1alpha2NamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Struct({
        causes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              field: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
            }),
          ),
        ),
        group: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        retryAfterSeconds: Schema.optional(Schema.Number),
        uid: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        continue: Schema.optional(Schema.String),
        remainingItemCount: Schema.optional(Schema.Number),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        shardInfo: Schema.optional(
          Schema.Struct({
            selector: Schema.String,
          }),
        ),
      }),
    ),
    reason: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  });
export type DeleteCoordinationV1alpha2NamespacedLeaseCandidateOutput =
  typeof DeleteCoordinationV1alpha2NamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * delete a LeaseCandidate
 *
 * @param name - name of the LeaseCandidate
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteCoordinationV1alpha2NamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoordinationV1alpha2NamespacedLeaseCandidateInput,
    outputSchema: DeleteCoordinationV1alpha2NamespacedLeaseCandidateOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteCoordinationV1beta1CollectionNamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    continue: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    gracePeriodSeconds: Schema.optional(Schema.Number),
    ignoreStoreReadErrorWithClusterBreakingPotential: Schema.optional(
      Schema.Boolean,
    ),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    orphanDependents: Schema.optional(Schema.Boolean),
    propagationPolicy: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    preconditions: Schema.optional(
      Schema.Struct({
        resourceVersion: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leasecandidates",
    }),
  );
export type DeleteCoordinationV1beta1CollectionNamespacedLeaseCandidateInput =
  typeof DeleteCoordinationV1beta1CollectionNamespacedLeaseCandidateInput.Type;

// Output Schema
export const DeleteCoordinationV1beta1CollectionNamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Struct({
        causes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              field: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
            }),
          ),
        ),
        group: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        retryAfterSeconds: Schema.optional(Schema.Number),
        uid: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        continue: Schema.optional(Schema.String),
        remainingItemCount: Schema.optional(Schema.Number),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        shardInfo: Schema.optional(
          Schema.Struct({
            selector: Schema.String,
          }),
        ),
      }),
    ),
    reason: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  });
export type DeleteCoordinationV1beta1CollectionNamespacedLeaseCandidateOutput =
  typeof DeleteCoordinationV1beta1CollectionNamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * delete collection of LeaseCandidate
 *
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
export const deleteCoordinationV1beta1CollectionNamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      DeleteCoordinationV1beta1CollectionNamespacedLeaseCandidateInput,
    outputSchema:
      DeleteCoordinationV1beta1CollectionNamespacedLeaseCandidateOutput,
  }));
// Input Schema
export const DeleteCoordinationV1beta1NamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    gracePeriodSeconds: Schema.optional(Schema.Number),
    ignoreStoreReadErrorWithClusterBreakingPotential: Schema.optional(
      Schema.Boolean,
    ),
    orphanDependents: Schema.optional(Schema.Boolean),
    propagationPolicy: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    preconditions: Schema.optional(
      Schema.Struct({
        resourceVersion: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leasecandidates/{name}",
    }),
  );
export type DeleteCoordinationV1beta1NamespacedLeaseCandidateInput =
  typeof DeleteCoordinationV1beta1NamespacedLeaseCandidateInput.Type;

// Output Schema
export const DeleteCoordinationV1beta1NamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Struct({
        causes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              field: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
            }),
          ),
        ),
        group: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        retryAfterSeconds: Schema.optional(Schema.Number),
        uid: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        continue: Schema.optional(Schema.String),
        remainingItemCount: Schema.optional(Schema.Number),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        shardInfo: Schema.optional(
          Schema.Struct({
            selector: Schema.String,
          }),
        ),
      }),
    ),
    reason: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  });
export type DeleteCoordinationV1beta1NamespacedLeaseCandidateOutput =
  typeof DeleteCoordinationV1beta1NamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * delete a LeaseCandidate
 *
 * @param name - name of the LeaseCandidate
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteCoordinationV1beta1NamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCoordinationV1beta1NamespacedLeaseCandidateInput,
    outputSchema: DeleteCoordinationV1beta1NamespacedLeaseCandidateOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const GetCoordinationAPIGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/coordination.k8s.io/" }),
  );
export type GetCoordinationAPIGroupInput =
  typeof GetCoordinationAPIGroupInput.Type;

// Output Schema
export const GetCoordinationAPIGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.String,
    preferredVersion: Schema.optional(
      Schema.Struct({
        groupVersion: Schema.String,
        version: Schema.String,
      }),
    ),
    serverAddressByClientCIDRs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          clientCIDR: Schema.String,
          serverAddress: Schema.String,
        }),
      ),
    ),
    versions: Schema.Array(
      Schema.Struct({
        groupVersion: Schema.String,
        version: Schema.String,
      }),
    ),
  });
export type GetCoordinationAPIGroupOutput =
  typeof GetCoordinationAPIGroupOutput.Type;

// The operation
/**
 * get information of a group
 */
export const getCoordinationAPIGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetCoordinationAPIGroupInput,
    outputSchema: GetCoordinationAPIGroupOutput,
  }),
);
// Input Schema
export const GetCoordinationV1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/coordination.k8s.io/v1/" }),
  );
export type GetCoordinationV1APIResourcesInput =
  typeof GetCoordinationV1APIResourcesInput.Type;

// Output Schema
export const GetCoordinationV1APIResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    groupVersion: Schema.String,
    kind: Schema.optional(Schema.String),
    resources: Schema.Array(
      Schema.Struct({
        categories: Schema.optional(Schema.Array(Schema.String)),
        group: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
        namespaced: Schema.Boolean,
        shortNames: Schema.optional(Schema.Array(Schema.String)),
        singularName: Schema.String,
        storageVersionHash: Schema.optional(Schema.String),
        verbs: Schema.Array(Schema.String),
        version: Schema.optional(Schema.String),
      }),
    ),
  });
export type GetCoordinationV1APIResourcesOutput =
  typeof GetCoordinationV1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getCoordinationV1APIResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetCoordinationV1APIResourcesInput,
    outputSchema: GetCoordinationV1APIResourcesOutput,
  }));
// Input Schema
export const GetCoordinationV1alpha2APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/coordination.k8s.io/v1alpha2/" }),
  );
export type GetCoordinationV1alpha2APIResourcesInput =
  typeof GetCoordinationV1alpha2APIResourcesInput.Type;

// Output Schema
export const GetCoordinationV1alpha2APIResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    groupVersion: Schema.String,
    kind: Schema.optional(Schema.String),
    resources: Schema.Array(
      Schema.Struct({
        categories: Schema.optional(Schema.Array(Schema.String)),
        group: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
        namespaced: Schema.Boolean,
        shortNames: Schema.optional(Schema.Array(Schema.String)),
        singularName: Schema.String,
        storageVersionHash: Schema.optional(Schema.String),
        verbs: Schema.Array(Schema.String),
        version: Schema.optional(Schema.String),
      }),
    ),
  });
export type GetCoordinationV1alpha2APIResourcesOutput =
  typeof GetCoordinationV1alpha2APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getCoordinationV1alpha2APIResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetCoordinationV1alpha2APIResourcesInput,
    outputSchema: GetCoordinationV1alpha2APIResourcesOutput,
  }));
// Input Schema
export const GetCoordinationV1beta1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/coordination.k8s.io/v1beta1/" }),
  );
export type GetCoordinationV1beta1APIResourcesInput =
  typeof GetCoordinationV1beta1APIResourcesInput.Type;

// Output Schema
export const GetCoordinationV1beta1APIResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    groupVersion: Schema.String,
    kind: Schema.optional(Schema.String),
    resources: Schema.Array(
      Schema.Struct({
        categories: Schema.optional(Schema.Array(Schema.String)),
        group: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
        namespaced: Schema.Boolean,
        shortNames: Schema.optional(Schema.Array(Schema.String)),
        singularName: Schema.String,
        storageVersionHash: Schema.optional(Schema.String),
        verbs: Schema.Array(Schema.String),
        version: Schema.optional(Schema.String),
      }),
    ),
  });
export type GetCoordinationV1beta1APIResourcesOutput =
  typeof GetCoordinationV1beta1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getCoordinationV1beta1APIResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetCoordinationV1beta1APIResourcesInput,
    outputSchema: GetCoordinationV1beta1APIResourcesOutput,
  }));
// Input Schema
export const ListCoordinationV1LeaseForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowWatchBookmarks: Schema.optional(Schema.Boolean),
    continue: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    watch: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "GET", path: "/apis/coordination.k8s.io/v1/leases" }),
  );
export type ListCoordinationV1LeaseForAllNamespacesInput =
  typeof ListCoordinationV1LeaseForAllNamespacesInput.Type;

// Output Schema
export const ListCoordinationV1LeaseForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        metadata: Schema.optional(
          Schema.Struct({
            annotations: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            creationTimestamp: Schema.optional(Schema.String),
            deletionGracePeriodSeconds: Schema.optional(Schema.Number),
            deletionTimestamp: Schema.optional(Schema.String),
            finalizers: Schema.optional(Schema.Array(Schema.String)),
            generateName: Schema.optional(Schema.String),
            generation: Schema.optional(Schema.Number),
            labels: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            managedFields: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  fieldsType: Schema.optional(Schema.String),
                  fieldsV1: Schema.optional(Schema.Unknown),
                  manager: Schema.optional(Schema.String),
                  operation: Schema.optional(Schema.String),
                  subresource: Schema.optional(Schema.String),
                  time: Schema.optional(Schema.String),
                }),
              ),
            ),
            name: Schema.optional(Schema.String),
            namespace: Schema.optional(Schema.String),
            ownerReferences: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  apiVersion: Schema.String,
                  blockOwnerDeletion: Schema.optional(Schema.Boolean),
                  controller: Schema.optional(Schema.Boolean),
                  kind: Schema.String,
                  name: Schema.String,
                  uid: Schema.String,
                }),
              ),
            ),
            resourceVersion: Schema.optional(Schema.String),
            selfLink: Schema.optional(Schema.String),
            uid: Schema.optional(Schema.String),
          }),
        ),
        spec: Schema.optional(
          Schema.Struct({
            acquireTime: Schema.optional(Schema.String),
            holderIdentity: Schema.optional(Schema.String),
            leaseDurationSeconds: Schema.optional(Schema.Number),
            leaseTransitions: Schema.optional(Schema.Number),
            preferredHolder: Schema.optional(Schema.String),
            renewTime: Schema.optional(Schema.String),
            strategy: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        continue: Schema.optional(Schema.String),
        remainingItemCount: Schema.optional(Schema.Number),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        shardInfo: Schema.optional(
          Schema.Struct({
            selector: Schema.String,
          }),
        ),
      }),
    ),
  });
export type ListCoordinationV1LeaseForAllNamespacesOutput =
  typeof ListCoordinationV1LeaseForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind Lease
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 * @param watch - Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
export const listCoordinationV1LeaseForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoordinationV1LeaseForAllNamespacesInput,
    outputSchema: ListCoordinationV1LeaseForAllNamespacesOutput,
  }));
// Input Schema
export const ListCoordinationV1NamespacedLeaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    allowWatchBookmarks: Schema.optional(Schema.Boolean),
    continue: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    watch: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases",
    }),
  );
export type ListCoordinationV1NamespacedLeaseInput =
  typeof ListCoordinationV1NamespacedLeaseInput.Type;

// Output Schema
export const ListCoordinationV1NamespacedLeaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        metadata: Schema.optional(
          Schema.Struct({
            annotations: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            creationTimestamp: Schema.optional(Schema.String),
            deletionGracePeriodSeconds: Schema.optional(Schema.Number),
            deletionTimestamp: Schema.optional(Schema.String),
            finalizers: Schema.optional(Schema.Array(Schema.String)),
            generateName: Schema.optional(Schema.String),
            generation: Schema.optional(Schema.Number),
            labels: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            managedFields: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  fieldsType: Schema.optional(Schema.String),
                  fieldsV1: Schema.optional(Schema.Unknown),
                  manager: Schema.optional(Schema.String),
                  operation: Schema.optional(Schema.String),
                  subresource: Schema.optional(Schema.String),
                  time: Schema.optional(Schema.String),
                }),
              ),
            ),
            name: Schema.optional(Schema.String),
            namespace: Schema.optional(Schema.String),
            ownerReferences: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  apiVersion: Schema.String,
                  blockOwnerDeletion: Schema.optional(Schema.Boolean),
                  controller: Schema.optional(Schema.Boolean),
                  kind: Schema.String,
                  name: Schema.String,
                  uid: Schema.String,
                }),
              ),
            ),
            resourceVersion: Schema.optional(Schema.String),
            selfLink: Schema.optional(Schema.String),
            uid: Schema.optional(Schema.String),
          }),
        ),
        spec: Schema.optional(
          Schema.Struct({
            acquireTime: Schema.optional(Schema.String),
            holderIdentity: Schema.optional(Schema.String),
            leaseDurationSeconds: Schema.optional(Schema.Number),
            leaseTransitions: Schema.optional(Schema.Number),
            preferredHolder: Schema.optional(Schema.String),
            renewTime: Schema.optional(Schema.String),
            strategy: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        continue: Schema.optional(Schema.String),
        remainingItemCount: Schema.optional(Schema.Number),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        shardInfo: Schema.optional(
          Schema.Struct({
            selector: Schema.String,
          }),
        ),
      }),
    ),
  });
export type ListCoordinationV1NamespacedLeaseOutput =
  typeof ListCoordinationV1NamespacedLeaseOutput.Type;

// The operation
/**
 * list or watch objects of kind Lease
 *
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 * @param watch - Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
export const listCoordinationV1NamespacedLease =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoordinationV1NamespacedLeaseInput,
    outputSchema: ListCoordinationV1NamespacedLeaseOutput,
  }));
// Input Schema
export const ListCoordinationV1alpha2LeaseCandidateForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowWatchBookmarks: Schema.optional(Schema.Boolean),
    continue: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    watch: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1alpha2/leasecandidates",
    }),
  );
export type ListCoordinationV1alpha2LeaseCandidateForAllNamespacesInput =
  typeof ListCoordinationV1alpha2LeaseCandidateForAllNamespacesInput.Type;

// Output Schema
export const ListCoordinationV1alpha2LeaseCandidateForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        metadata: Schema.optional(
          Schema.Struct({
            annotations: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            creationTimestamp: Schema.optional(Schema.String),
            deletionGracePeriodSeconds: Schema.optional(Schema.Number),
            deletionTimestamp: Schema.optional(Schema.String),
            finalizers: Schema.optional(Schema.Array(Schema.String)),
            generateName: Schema.optional(Schema.String),
            generation: Schema.optional(Schema.Number),
            labels: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            managedFields: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  fieldsType: Schema.optional(Schema.String),
                  fieldsV1: Schema.optional(Schema.Unknown),
                  manager: Schema.optional(Schema.String),
                  operation: Schema.optional(Schema.String),
                  subresource: Schema.optional(Schema.String),
                  time: Schema.optional(Schema.String),
                }),
              ),
            ),
            name: Schema.optional(Schema.String),
            namespace: Schema.optional(Schema.String),
            ownerReferences: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  apiVersion: Schema.String,
                  blockOwnerDeletion: Schema.optional(Schema.Boolean),
                  controller: Schema.optional(Schema.Boolean),
                  kind: Schema.String,
                  name: Schema.String,
                  uid: Schema.String,
                }),
              ),
            ),
            resourceVersion: Schema.optional(Schema.String),
            selfLink: Schema.optional(Schema.String),
            uid: Schema.optional(Schema.String),
          }),
        ),
        spec: Schema.Struct({
          binaryVersion: Schema.String,
          emulationVersion: Schema.optional(Schema.String),
          leaseName: Schema.String,
          pingTime: Schema.optional(Schema.String),
          renewTime: Schema.optional(Schema.String),
          strategy: Schema.String,
        }),
      }),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        continue: Schema.optional(Schema.String),
        remainingItemCount: Schema.optional(Schema.Number),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        shardInfo: Schema.optional(
          Schema.Struct({
            selector: Schema.String,
          }),
        ),
      }),
    ),
  });
export type ListCoordinationV1alpha2LeaseCandidateForAllNamespacesOutput =
  typeof ListCoordinationV1alpha2LeaseCandidateForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind LeaseCandidate
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 * @param watch - Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
export const listCoordinationV1alpha2LeaseCandidateForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoordinationV1alpha2LeaseCandidateForAllNamespacesInput,
    outputSchema: ListCoordinationV1alpha2LeaseCandidateForAllNamespacesOutput,
  }));
// Input Schema
export const ListCoordinationV1alpha2NamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    allowWatchBookmarks: Schema.optional(Schema.Boolean),
    continue: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    watch: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1alpha2/namespaces/{namespace}/leasecandidates",
    }),
  );
export type ListCoordinationV1alpha2NamespacedLeaseCandidateInput =
  typeof ListCoordinationV1alpha2NamespacedLeaseCandidateInput.Type;

// Output Schema
export const ListCoordinationV1alpha2NamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        metadata: Schema.optional(
          Schema.Struct({
            annotations: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            creationTimestamp: Schema.optional(Schema.String),
            deletionGracePeriodSeconds: Schema.optional(Schema.Number),
            deletionTimestamp: Schema.optional(Schema.String),
            finalizers: Schema.optional(Schema.Array(Schema.String)),
            generateName: Schema.optional(Schema.String),
            generation: Schema.optional(Schema.Number),
            labels: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            managedFields: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  fieldsType: Schema.optional(Schema.String),
                  fieldsV1: Schema.optional(Schema.Unknown),
                  manager: Schema.optional(Schema.String),
                  operation: Schema.optional(Schema.String),
                  subresource: Schema.optional(Schema.String),
                  time: Schema.optional(Schema.String),
                }),
              ),
            ),
            name: Schema.optional(Schema.String),
            namespace: Schema.optional(Schema.String),
            ownerReferences: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  apiVersion: Schema.String,
                  blockOwnerDeletion: Schema.optional(Schema.Boolean),
                  controller: Schema.optional(Schema.Boolean),
                  kind: Schema.String,
                  name: Schema.String,
                  uid: Schema.String,
                }),
              ),
            ),
            resourceVersion: Schema.optional(Schema.String),
            selfLink: Schema.optional(Schema.String),
            uid: Schema.optional(Schema.String),
          }),
        ),
        spec: Schema.Struct({
          binaryVersion: Schema.String,
          emulationVersion: Schema.optional(Schema.String),
          leaseName: Schema.String,
          pingTime: Schema.optional(Schema.String),
          renewTime: Schema.optional(Schema.String),
          strategy: Schema.String,
        }),
      }),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        continue: Schema.optional(Schema.String),
        remainingItemCount: Schema.optional(Schema.Number),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        shardInfo: Schema.optional(
          Schema.Struct({
            selector: Schema.String,
          }),
        ),
      }),
    ),
  });
export type ListCoordinationV1alpha2NamespacedLeaseCandidateOutput =
  typeof ListCoordinationV1alpha2NamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * list or watch objects of kind LeaseCandidate
 *
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 * @param watch - Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
export const listCoordinationV1alpha2NamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoordinationV1alpha2NamespacedLeaseCandidateInput,
    outputSchema: ListCoordinationV1alpha2NamespacedLeaseCandidateOutput,
  }));
// Input Schema
export const ListCoordinationV1beta1LeaseCandidateForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowWatchBookmarks: Schema.optional(Schema.Boolean),
    continue: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    watch: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1beta1/leasecandidates",
    }),
  );
export type ListCoordinationV1beta1LeaseCandidateForAllNamespacesInput =
  typeof ListCoordinationV1beta1LeaseCandidateForAllNamespacesInput.Type;

// Output Schema
export const ListCoordinationV1beta1LeaseCandidateForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        metadata: Schema.optional(
          Schema.Struct({
            annotations: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            creationTimestamp: Schema.optional(Schema.String),
            deletionGracePeriodSeconds: Schema.optional(Schema.Number),
            deletionTimestamp: Schema.optional(Schema.String),
            finalizers: Schema.optional(Schema.Array(Schema.String)),
            generateName: Schema.optional(Schema.String),
            generation: Schema.optional(Schema.Number),
            labels: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            managedFields: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  fieldsType: Schema.optional(Schema.String),
                  fieldsV1: Schema.optional(Schema.Unknown),
                  manager: Schema.optional(Schema.String),
                  operation: Schema.optional(Schema.String),
                  subresource: Schema.optional(Schema.String),
                  time: Schema.optional(Schema.String),
                }),
              ),
            ),
            name: Schema.optional(Schema.String),
            namespace: Schema.optional(Schema.String),
            ownerReferences: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  apiVersion: Schema.String,
                  blockOwnerDeletion: Schema.optional(Schema.Boolean),
                  controller: Schema.optional(Schema.Boolean),
                  kind: Schema.String,
                  name: Schema.String,
                  uid: Schema.String,
                }),
              ),
            ),
            resourceVersion: Schema.optional(Schema.String),
            selfLink: Schema.optional(Schema.String),
            uid: Schema.optional(Schema.String),
          }),
        ),
        spec: Schema.Struct({
          binaryVersion: Schema.String,
          emulationVersion: Schema.optional(Schema.String),
          leaseName: Schema.String,
          pingTime: Schema.optional(Schema.String),
          renewTime: Schema.optional(Schema.String),
          strategy: Schema.String,
        }),
      }),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        continue: Schema.optional(Schema.String),
        remainingItemCount: Schema.optional(Schema.Number),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        shardInfo: Schema.optional(
          Schema.Struct({
            selector: Schema.String,
          }),
        ),
      }),
    ),
  });
export type ListCoordinationV1beta1LeaseCandidateForAllNamespacesOutput =
  typeof ListCoordinationV1beta1LeaseCandidateForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind LeaseCandidate
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 * @param watch - Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
export const listCoordinationV1beta1LeaseCandidateForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoordinationV1beta1LeaseCandidateForAllNamespacesInput,
    outputSchema: ListCoordinationV1beta1LeaseCandidateForAllNamespacesOutput,
  }));
// Input Schema
export const ListCoordinationV1beta1NamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    allowWatchBookmarks: Schema.optional(Schema.Boolean),
    continue: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    watch: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leasecandidates",
    }),
  );
export type ListCoordinationV1beta1NamespacedLeaseCandidateInput =
  typeof ListCoordinationV1beta1NamespacedLeaseCandidateInput.Type;

// Output Schema
export const ListCoordinationV1beta1NamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        metadata: Schema.optional(
          Schema.Struct({
            annotations: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            creationTimestamp: Schema.optional(Schema.String),
            deletionGracePeriodSeconds: Schema.optional(Schema.Number),
            deletionTimestamp: Schema.optional(Schema.String),
            finalizers: Schema.optional(Schema.Array(Schema.String)),
            generateName: Schema.optional(Schema.String),
            generation: Schema.optional(Schema.Number),
            labels: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            managedFields: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  fieldsType: Schema.optional(Schema.String),
                  fieldsV1: Schema.optional(Schema.Unknown),
                  manager: Schema.optional(Schema.String),
                  operation: Schema.optional(Schema.String),
                  subresource: Schema.optional(Schema.String),
                  time: Schema.optional(Schema.String),
                }),
              ),
            ),
            name: Schema.optional(Schema.String),
            namespace: Schema.optional(Schema.String),
            ownerReferences: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  apiVersion: Schema.String,
                  blockOwnerDeletion: Schema.optional(Schema.Boolean),
                  controller: Schema.optional(Schema.Boolean),
                  kind: Schema.String,
                  name: Schema.String,
                  uid: Schema.String,
                }),
              ),
            ),
            resourceVersion: Schema.optional(Schema.String),
            selfLink: Schema.optional(Schema.String),
            uid: Schema.optional(Schema.String),
          }),
        ),
        spec: Schema.Struct({
          binaryVersion: Schema.String,
          emulationVersion: Schema.optional(Schema.String),
          leaseName: Schema.String,
          pingTime: Schema.optional(Schema.String),
          renewTime: Schema.optional(Schema.String),
          strategy: Schema.String,
        }),
      }),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        continue: Schema.optional(Schema.String),
        remainingItemCount: Schema.optional(Schema.Number),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        shardInfo: Schema.optional(
          Schema.Struct({
            selector: Schema.String,
          }),
        ),
      }),
    ),
  });
export type ListCoordinationV1beta1NamespacedLeaseCandidateOutput =
  typeof ListCoordinationV1beta1NamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * list or watch objects of kind LeaseCandidate
 *
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 * @param watch - Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
export const listCoordinationV1beta1NamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCoordinationV1beta1NamespacedLeaseCandidateInput,
    outputSchema: ListCoordinationV1beta1NamespacedLeaseCandidateOutput,
  }));
// Input Schema
export const PatchCoordinationV1NamespacedLeaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}",
    }),
  );
export type PatchCoordinationV1NamespacedLeaseInput =
  typeof PatchCoordinationV1NamespacedLeaseInput.Type;

// Output Schema
export const PatchCoordinationV1NamespacedLeaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.optional(
      Schema.Struct({
        acquireTime: Schema.optional(Schema.String),
        holderIdentity: Schema.optional(Schema.String),
        leaseDurationSeconds: Schema.optional(Schema.Number),
        leaseTransitions: Schema.optional(Schema.Number),
        preferredHolder: Schema.optional(Schema.String),
        renewTime: Schema.optional(Schema.String),
        strategy: Schema.optional(Schema.String),
      }),
    ),
  });
export type PatchCoordinationV1NamespacedLeaseOutput =
  typeof PatchCoordinationV1NamespacedLeaseOutput.Type;

// The operation
/**
 * partially update the specified Lease
 *
 * @param name - name of the Lease
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchCoordinationV1NamespacedLease =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoordinationV1NamespacedLeaseInput,
    outputSchema: PatchCoordinationV1NamespacedLeaseOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoordinationV1alpha2NamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/coordination.k8s.io/v1alpha2/namespaces/{namespace}/leasecandidates/{name}",
    }),
  );
export type PatchCoordinationV1alpha2NamespacedLeaseCandidateInput =
  typeof PatchCoordinationV1alpha2NamespacedLeaseCandidateInput.Type;

// Output Schema
export const PatchCoordinationV1alpha2NamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.Struct({
      binaryVersion: Schema.String,
      emulationVersion: Schema.optional(Schema.String),
      leaseName: Schema.String,
      pingTime: Schema.optional(Schema.String),
      renewTime: Schema.optional(Schema.String),
      strategy: Schema.String,
    }),
  });
export type PatchCoordinationV1alpha2NamespacedLeaseCandidateOutput =
  typeof PatchCoordinationV1alpha2NamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * partially update the specified LeaseCandidate
 *
 * @param name - name of the LeaseCandidate
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchCoordinationV1alpha2NamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoordinationV1alpha2NamespacedLeaseCandidateInput,
    outputSchema: PatchCoordinationV1alpha2NamespacedLeaseCandidateOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCoordinationV1beta1NamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leasecandidates/{name}",
    }),
  );
export type PatchCoordinationV1beta1NamespacedLeaseCandidateInput =
  typeof PatchCoordinationV1beta1NamespacedLeaseCandidateInput.Type;

// Output Schema
export const PatchCoordinationV1beta1NamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.Struct({
      binaryVersion: Schema.String,
      emulationVersion: Schema.optional(Schema.String),
      leaseName: Schema.String,
      pingTime: Schema.optional(Schema.String),
      renewTime: Schema.optional(Schema.String),
      strategy: Schema.String,
    }),
  });
export type PatchCoordinationV1beta1NamespacedLeaseCandidateOutput =
  typeof PatchCoordinationV1beta1NamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * partially update the specified LeaseCandidate
 *
 * @param name - name of the LeaseCandidate
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchCoordinationV1beta1NamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCoordinationV1beta1NamespacedLeaseCandidateInput,
    outputSchema: PatchCoordinationV1beta1NamespacedLeaseCandidateOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReadCoordinationV1NamespacedLeaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}",
    }),
  );
export type ReadCoordinationV1NamespacedLeaseInput =
  typeof ReadCoordinationV1NamespacedLeaseInput.Type;

// Output Schema
export const ReadCoordinationV1NamespacedLeaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.optional(
      Schema.Struct({
        acquireTime: Schema.optional(Schema.String),
        holderIdentity: Schema.optional(Schema.String),
        leaseDurationSeconds: Schema.optional(Schema.Number),
        leaseTransitions: Schema.optional(Schema.Number),
        preferredHolder: Schema.optional(Schema.String),
        renewTime: Schema.optional(Schema.String),
        strategy: Schema.optional(Schema.String),
      }),
    ),
  });
export type ReadCoordinationV1NamespacedLeaseOutput =
  typeof ReadCoordinationV1NamespacedLeaseOutput.Type;

// The operation
/**
 * read the specified Lease
 *
 * @param name - name of the Lease
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readCoordinationV1NamespacedLease =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoordinationV1NamespacedLeaseInput,
    outputSchema: ReadCoordinationV1NamespacedLeaseOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoordinationV1alpha2NamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1alpha2/namespaces/{namespace}/leasecandidates/{name}",
    }),
  );
export type ReadCoordinationV1alpha2NamespacedLeaseCandidateInput =
  typeof ReadCoordinationV1alpha2NamespacedLeaseCandidateInput.Type;

// Output Schema
export const ReadCoordinationV1alpha2NamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.Struct({
      binaryVersion: Schema.String,
      emulationVersion: Schema.optional(Schema.String),
      leaseName: Schema.String,
      pingTime: Schema.optional(Schema.String),
      renewTime: Schema.optional(Schema.String),
      strategy: Schema.String,
    }),
  });
export type ReadCoordinationV1alpha2NamespacedLeaseCandidateOutput =
  typeof ReadCoordinationV1alpha2NamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * read the specified LeaseCandidate
 *
 * @param name - name of the LeaseCandidate
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readCoordinationV1alpha2NamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoordinationV1alpha2NamespacedLeaseCandidateInput,
    outputSchema: ReadCoordinationV1alpha2NamespacedLeaseCandidateOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCoordinationV1beta1NamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leasecandidates/{name}",
    }),
  );
export type ReadCoordinationV1beta1NamespacedLeaseCandidateInput =
  typeof ReadCoordinationV1beta1NamespacedLeaseCandidateInput.Type;

// Output Schema
export const ReadCoordinationV1beta1NamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.Struct({
      binaryVersion: Schema.String,
      emulationVersion: Schema.optional(Schema.String),
      leaseName: Schema.String,
      pingTime: Schema.optional(Schema.String),
      renewTime: Schema.optional(Schema.String),
      strategy: Schema.String,
    }),
  });
export type ReadCoordinationV1beta1NamespacedLeaseCandidateOutput =
  typeof ReadCoordinationV1beta1NamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * read the specified LeaseCandidate
 *
 * @param name - name of the LeaseCandidate
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readCoordinationV1beta1NamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCoordinationV1beta1NamespacedLeaseCandidateInput,
    outputSchema: ReadCoordinationV1beta1NamespacedLeaseCandidateOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReplaceCoordinationV1NamespacedLeaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.optional(
      Schema.Struct({
        acquireTime: Schema.optional(Schema.String),
        holderIdentity: Schema.optional(Schema.String),
        leaseDurationSeconds: Schema.optional(Schema.Number),
        leaseTransitions: Schema.optional(Schema.Number),
        preferredHolder: Schema.optional(Schema.String),
        renewTime: Schema.optional(Schema.String),
        strategy: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}",
    }),
  );
export type ReplaceCoordinationV1NamespacedLeaseInput =
  typeof ReplaceCoordinationV1NamespacedLeaseInput.Type;

// Output Schema
export const ReplaceCoordinationV1NamespacedLeaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.optional(
      Schema.Struct({
        acquireTime: Schema.optional(Schema.String),
        holderIdentity: Schema.optional(Schema.String),
        leaseDurationSeconds: Schema.optional(Schema.Number),
        leaseTransitions: Schema.optional(Schema.Number),
        preferredHolder: Schema.optional(Schema.String),
        renewTime: Schema.optional(Schema.String),
        strategy: Schema.optional(Schema.String),
      }),
    ),
  });
export type ReplaceCoordinationV1NamespacedLeaseOutput =
  typeof ReplaceCoordinationV1NamespacedLeaseOutput.Type;

// The operation
/**
 * replace the specified Lease
 *
 * @param name - name of the Lease
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoordinationV1NamespacedLease =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoordinationV1NamespacedLeaseInput,
    outputSchema: ReplaceCoordinationV1NamespacedLeaseOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoordinationV1alpha2NamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.Struct({
      binaryVersion: Schema.String,
      emulationVersion: Schema.optional(Schema.String),
      leaseName: Schema.String,
      pingTime: Schema.optional(Schema.String),
      renewTime: Schema.optional(Schema.String),
      strategy: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/coordination.k8s.io/v1alpha2/namespaces/{namespace}/leasecandidates/{name}",
    }),
  );
export type ReplaceCoordinationV1alpha2NamespacedLeaseCandidateInput =
  typeof ReplaceCoordinationV1alpha2NamespacedLeaseCandidateInput.Type;

// Output Schema
export const ReplaceCoordinationV1alpha2NamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.Struct({
      binaryVersion: Schema.String,
      emulationVersion: Schema.optional(Schema.String),
      leaseName: Schema.String,
      pingTime: Schema.optional(Schema.String),
      renewTime: Schema.optional(Schema.String),
      strategy: Schema.String,
    }),
  });
export type ReplaceCoordinationV1alpha2NamespacedLeaseCandidateOutput =
  typeof ReplaceCoordinationV1alpha2NamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * replace the specified LeaseCandidate
 *
 * @param name - name of the LeaseCandidate
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoordinationV1alpha2NamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoordinationV1alpha2NamespacedLeaseCandidateInput,
    outputSchema: ReplaceCoordinationV1alpha2NamespacedLeaseCandidateOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCoordinationV1beta1NamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.Struct({
      binaryVersion: Schema.String,
      emulationVersion: Schema.optional(Schema.String),
      leaseName: Schema.String,
      pingTime: Schema.optional(Schema.String),
      renewTime: Schema.optional(Schema.String),
      strategy: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leasecandidates/{name}",
    }),
  );
export type ReplaceCoordinationV1beta1NamespacedLeaseCandidateInput =
  typeof ReplaceCoordinationV1beta1NamespacedLeaseCandidateInput.Type;

// Output Schema
export const ReplaceCoordinationV1beta1NamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        creationTimestamp: Schema.optional(Schema.String),
        deletionGracePeriodSeconds: Schema.optional(Schema.Number),
        deletionTimestamp: Schema.optional(Schema.String),
        finalizers: Schema.optional(Schema.Array(Schema.String)),
        generateName: Schema.optional(Schema.String),
        generation: Schema.optional(Schema.Number),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        managedFields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.optional(Schema.String),
              fieldsType: Schema.optional(Schema.String),
              fieldsV1: Schema.optional(Schema.Unknown),
              manager: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              subresource: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        namespace: Schema.optional(Schema.String),
        ownerReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersion: Schema.String,
              blockOwnerDeletion: Schema.optional(Schema.Boolean),
              controller: Schema.optional(Schema.Boolean),
              kind: Schema.String,
              name: Schema.String,
              uid: Schema.String,
            }),
          ),
        ),
        resourceVersion: Schema.optional(Schema.String),
        selfLink: Schema.optional(Schema.String),
        uid: Schema.optional(Schema.String),
      }),
    ),
    spec: Schema.Struct({
      binaryVersion: Schema.String,
      emulationVersion: Schema.optional(Schema.String),
      leaseName: Schema.String,
      pingTime: Schema.optional(Schema.String),
      renewTime: Schema.optional(Schema.String),
      strategy: Schema.String,
    }),
  });
export type ReplaceCoordinationV1beta1NamespacedLeaseCandidateOutput =
  typeof ReplaceCoordinationV1beta1NamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * replace the specified LeaseCandidate
 *
 * @param name - name of the LeaseCandidate
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCoordinationV1beta1NamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCoordinationV1beta1NamespacedLeaseCandidateInput,
    outputSchema: ReplaceCoordinationV1beta1NamespacedLeaseCandidateOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const WatchCoordinationV1LeaseListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowWatchBookmarks: Schema.optional(Schema.Boolean),
    continue: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    watch: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1/watch/leases",
    }),
  );
export type WatchCoordinationV1LeaseListForAllNamespacesInput =
  typeof WatchCoordinationV1LeaseListForAllNamespacesInput.Type;

// Output Schema
export const WatchCoordinationV1LeaseListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCoordinationV1LeaseListForAllNamespacesOutput =
  typeof WatchCoordinationV1LeaseListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of Lease. deprecated: use the 'watch' parameter with a list operation instead.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 * @param watch - Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
export const watchCoordinationV1LeaseListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoordinationV1LeaseListForAllNamespacesInput,
    outputSchema: WatchCoordinationV1LeaseListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchCoordinationV1NamespacedLeaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    allowWatchBookmarks: Schema.optional(Schema.Boolean),
    continue: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    watch: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1/watch/namespaces/{namespace}/leases/{name}",
    }),
  );
export type WatchCoordinationV1NamespacedLeaseInput =
  typeof WatchCoordinationV1NamespacedLeaseInput.Type;

// Output Schema
export const WatchCoordinationV1NamespacedLeaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCoordinationV1NamespacedLeaseOutput =
  typeof WatchCoordinationV1NamespacedLeaseOutput.Type;

// The operation
/**
 * watch changes to an object of kind Lease. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the Lease
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 * @param watch - Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
export const watchCoordinationV1NamespacedLease =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoordinationV1NamespacedLeaseInput,
    outputSchema: WatchCoordinationV1NamespacedLeaseOutput,
  }));
// Input Schema
export const WatchCoordinationV1NamespacedLeaseListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    allowWatchBookmarks: Schema.optional(Schema.Boolean),
    continue: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    watch: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1/watch/namespaces/{namespace}/leases",
    }),
  );
export type WatchCoordinationV1NamespacedLeaseListInput =
  typeof WatchCoordinationV1NamespacedLeaseListInput.Type;

// Output Schema
export const WatchCoordinationV1NamespacedLeaseListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCoordinationV1NamespacedLeaseListOutput =
  typeof WatchCoordinationV1NamespacedLeaseListOutput.Type;

// The operation
/**
 * watch individual changes to a list of Lease. deprecated: use the 'watch' parameter with a list operation instead.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 * @param watch - Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
export const watchCoordinationV1NamespacedLeaseList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoordinationV1NamespacedLeaseListInput,
    outputSchema: WatchCoordinationV1NamespacedLeaseListOutput,
  }));
// Input Schema
export const WatchCoordinationV1alpha2LeaseCandidateListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowWatchBookmarks: Schema.optional(Schema.Boolean),
    continue: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    watch: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1alpha2/watch/leasecandidates",
    }),
  );
export type WatchCoordinationV1alpha2LeaseCandidateListForAllNamespacesInput =
  typeof WatchCoordinationV1alpha2LeaseCandidateListForAllNamespacesInput.Type;

// Output Schema
export const WatchCoordinationV1alpha2LeaseCandidateListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCoordinationV1alpha2LeaseCandidateListForAllNamespacesOutput =
  typeof WatchCoordinationV1alpha2LeaseCandidateListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of LeaseCandidate. deprecated: use the 'watch' parameter with a list operation instead.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 * @param watch - Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
export const watchCoordinationV1alpha2LeaseCandidateListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WatchCoordinationV1alpha2LeaseCandidateListForAllNamespacesInput,
    outputSchema:
      WatchCoordinationV1alpha2LeaseCandidateListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchCoordinationV1alpha2NamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    allowWatchBookmarks: Schema.optional(Schema.Boolean),
    continue: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    watch: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1alpha2/watch/namespaces/{namespace}/leasecandidates/{name}",
    }),
  );
export type WatchCoordinationV1alpha2NamespacedLeaseCandidateInput =
  typeof WatchCoordinationV1alpha2NamespacedLeaseCandidateInput.Type;

// Output Schema
export const WatchCoordinationV1alpha2NamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCoordinationV1alpha2NamespacedLeaseCandidateOutput =
  typeof WatchCoordinationV1alpha2NamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * watch changes to an object of kind LeaseCandidate. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the LeaseCandidate
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 * @param watch - Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
export const watchCoordinationV1alpha2NamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoordinationV1alpha2NamespacedLeaseCandidateInput,
    outputSchema: WatchCoordinationV1alpha2NamespacedLeaseCandidateOutput,
  }));
// Input Schema
export const WatchCoordinationV1alpha2NamespacedLeaseCandidateListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    allowWatchBookmarks: Schema.optional(Schema.Boolean),
    continue: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    watch: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1alpha2/watch/namespaces/{namespace}/leasecandidates",
    }),
  );
export type WatchCoordinationV1alpha2NamespacedLeaseCandidateListInput =
  typeof WatchCoordinationV1alpha2NamespacedLeaseCandidateListInput.Type;

// Output Schema
export const WatchCoordinationV1alpha2NamespacedLeaseCandidateListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCoordinationV1alpha2NamespacedLeaseCandidateListOutput =
  typeof WatchCoordinationV1alpha2NamespacedLeaseCandidateListOutput.Type;

// The operation
/**
 * watch individual changes to a list of LeaseCandidate. deprecated: use the 'watch' parameter with a list operation instead.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 * @param watch - Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
export const watchCoordinationV1alpha2NamespacedLeaseCandidateList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoordinationV1alpha2NamespacedLeaseCandidateListInput,
    outputSchema: WatchCoordinationV1alpha2NamespacedLeaseCandidateListOutput,
  }));
// Input Schema
export const WatchCoordinationV1beta1LeaseCandidateListForAllNamespacesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowWatchBookmarks: Schema.optional(Schema.Boolean),
    continue: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    watch: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1beta1/watch/leasecandidates",
    }),
  );
export type WatchCoordinationV1beta1LeaseCandidateListForAllNamespacesInput =
  typeof WatchCoordinationV1beta1LeaseCandidateListForAllNamespacesInput.Type;

// Output Schema
export const WatchCoordinationV1beta1LeaseCandidateListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCoordinationV1beta1LeaseCandidateListForAllNamespacesOutput =
  typeof WatchCoordinationV1beta1LeaseCandidateListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of LeaseCandidate. deprecated: use the 'watch' parameter with a list operation instead.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 * @param watch - Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
export const watchCoordinationV1beta1LeaseCandidateListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WatchCoordinationV1beta1LeaseCandidateListForAllNamespacesInput,
    outputSchema:
      WatchCoordinationV1beta1LeaseCandidateListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchCoordinationV1beta1NamespacedLeaseCandidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    allowWatchBookmarks: Schema.optional(Schema.Boolean),
    continue: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    watch: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1beta1/watch/namespaces/{namespace}/leasecandidates/{name}",
    }),
  );
export type WatchCoordinationV1beta1NamespacedLeaseCandidateInput =
  typeof WatchCoordinationV1beta1NamespacedLeaseCandidateInput.Type;

// Output Schema
export const WatchCoordinationV1beta1NamespacedLeaseCandidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCoordinationV1beta1NamespacedLeaseCandidateOutput =
  typeof WatchCoordinationV1beta1NamespacedLeaseCandidateOutput.Type;

// The operation
/**
 * watch changes to an object of kind LeaseCandidate. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the LeaseCandidate
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 * @param watch - Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
export const watchCoordinationV1beta1NamespacedLeaseCandidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoordinationV1beta1NamespacedLeaseCandidateInput,
    outputSchema: WatchCoordinationV1beta1NamespacedLeaseCandidateOutput,
  }));
// Input Schema
export const WatchCoordinationV1beta1NamespacedLeaseCandidateListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    allowWatchBookmarks: Schema.optional(Schema.Boolean),
    continue: Schema.optional(Schema.String),
    fieldSelector: Schema.optional(Schema.String),
    labelSelector: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    resourceVersionMatch: Schema.optional(Schema.String),
    sendInitialEvents: Schema.optional(Schema.Boolean),
    shardSelector: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    watch: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/coordination.k8s.io/v1beta1/watch/namespaces/{namespace}/leasecandidates",
    }),
  );
export type WatchCoordinationV1beta1NamespacedLeaseCandidateListInput =
  typeof WatchCoordinationV1beta1NamespacedLeaseCandidateListInput.Type;

// Output Schema
export const WatchCoordinationV1beta1NamespacedLeaseCandidateListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCoordinationV1beta1NamespacedLeaseCandidateListOutput =
  typeof WatchCoordinationV1beta1NamespacedLeaseCandidateListOutput.Type;

// The operation
/**
 * watch individual changes to a list of LeaseCandidate. deprecated: use the 'watch' parameter with a list operation instead.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param resourceVersion - resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param resourceVersionMatch - resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.

Defaults to unset
 * @param sendInitialEvents - `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.

When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
  is interpreted as "data at least as new as the provided `resourceVersion`"
  and the bookmark event is send when the state is synced
  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
  If `resourceVersion` is unset, this is interpreted as "consistent read" and the
  bookmark event is send when the state is synced at least to the moment
  when request started being processed.
- `resourceVersionMatch` set to any other value or unset
  Invalid error is returned.

Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 * @param shardSelector - shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:

  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')
  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')

Field paths use CEL-style object-rooted syntax (e.g. "object.metadata.uid"), NOT the fieldSelector format ("metadata.uid"). Currently supported paths:
  - object.metadata.uid
  - object.metadata.namespace

hexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.

Examples:
  2-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')
  4-shard split:
    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')
    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')
    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')
    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')

This is an alpha field and requires enabling the ShardedListAndWatch feature gate.
 * @param timeoutSeconds - Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 * @param watch - Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
export const watchCoordinationV1beta1NamespacedLeaseCandidateList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCoordinationV1beta1NamespacedLeaseCandidateListInput,
    outputSchema: WatchCoordinationV1beta1NamespacedLeaseCandidateListOutput,
  }));
