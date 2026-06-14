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

// Input Schema
export const CreateApiextensionsV1CustomResourceDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      conversion: Schema.optional(
        Schema.Struct({
          strategy: Schema.String,
          webhook: Schema.optional(
            Schema.Struct({
              clientConfig: Schema.optional(
                Schema.Struct({
                  caBundle: Schema.optional(Schema.String),
                  service: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                      path: Schema.optional(Schema.String),
                      port: Schema.optional(Schema.Number),
                    }),
                  ),
                  url: Schema.optional(Schema.String),
                }),
              ),
              conversionReviewVersions: Schema.Array(Schema.String),
            }),
          ),
        }),
      ),
      group: Schema.String,
      names: Schema.Struct({
        categories: Schema.optional(Schema.Array(Schema.String)),
        kind: Schema.String,
        listKind: Schema.optional(Schema.String),
        plural: Schema.String,
        shortNames: Schema.optional(Schema.Array(Schema.String)),
        singular: Schema.optional(Schema.String),
      }),
      preserveUnknownFields: Schema.optional(Schema.Boolean),
      scope: Schema.String,
      versions: Schema.Array(
        Schema.Struct({
          additionalPrinterColumns: Schema.optional(
            Schema.Array(
              Schema.Struct({
                description: Schema.optional(Schema.String),
                format: Schema.optional(Schema.String),
                jsonPath: Schema.String,
                name: Schema.String,
                priority: Schema.optional(Schema.Number),
                type: Schema.String,
              }),
            ),
          ),
          deprecated: Schema.optional(Schema.Boolean),
          deprecationWarning: Schema.optional(Schema.String),
          name: Schema.String,
          schema: Schema.optional(
            Schema.Struct({
              openAPIV3Schema: Schema.optional(
                Schema.Struct({
                  $ref: Schema.optional(Schema.String),
                  $schema: Schema.optional(Schema.String),
                  additionalItems: Schema.optional(Schema.Unknown),
                  additionalProperties: Schema.optional(Schema.Unknown),
                  allOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  anyOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  default: Schema.optional(Schema.Unknown),
                  definitions: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  dependencies: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  description: Schema.optional(Schema.String),
                  enum: Schema.optional(Schema.Array(Schema.Unknown)),
                  example: Schema.optional(Schema.Unknown),
                  exclusiveMaximum: Schema.optional(Schema.Boolean),
                  exclusiveMinimum: Schema.optional(Schema.Boolean),
                  externalDocs: Schema.optional(
                    Schema.Struct({
                      description: Schema.optional(Schema.String),
                      url: Schema.optional(Schema.String),
                    }),
                  ),
                  format: Schema.optional(Schema.String),
                  id: Schema.optional(Schema.String),
                  items: Schema.optional(Schema.Unknown),
                  maxItems: Schema.optional(Schema.Number),
                  maxLength: Schema.optional(Schema.Number),
                  maxProperties: Schema.optional(Schema.Number),
                  maximum: Schema.optional(Schema.Number),
                  minItems: Schema.optional(Schema.Number),
                  minLength: Schema.optional(Schema.Number),
                  minProperties: Schema.optional(Schema.Number),
                  minimum: Schema.optional(Schema.Number),
                  multipleOf: Schema.optional(Schema.Number),
                  not: Schema.optional(Schema.Unknown),
                  nullable: Schema.optional(Schema.Boolean),
                  oneOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  pattern: Schema.optional(Schema.String),
                  patternProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  properties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  required: Schema.optional(Schema.Array(Schema.String)),
                  title: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                  uniqueItems: Schema.optional(Schema.Boolean),
                  "x-kubernetes-embedded-resource": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-int-or-string": Schema.optional(Schema.Boolean),
                  "x-kubernetes-list-map-keys": Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  "x-kubernetes-list-type": Schema.optional(Schema.String),
                  "x-kubernetes-map-type": Schema.optional(Schema.String),
                  "x-kubernetes-preserve-unknown-fields": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-validations": Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        fieldPath: Schema.optional(Schema.String),
                        message: Schema.optional(Schema.String),
                        messageExpression: Schema.optional(Schema.String),
                        optionalOldSelf: Schema.optional(Schema.Boolean),
                        reason: Schema.optional(Schema.String),
                        rule: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
          selectableFields: Schema.optional(
            Schema.Array(
              Schema.Struct({
                jsonPath: Schema.String,
              }),
            ),
          ),
          served: Schema.Boolean,
          storage: Schema.Boolean,
          subresources: Schema.optional(
            Schema.Struct({
              scale: Schema.optional(
                Schema.Struct({
                  labelSelectorPath: Schema.optional(Schema.String),
                  specReplicasPath: Schema.String,
                  statusReplicasPath: Schema.String,
                }),
              ),
              status: Schema.optional(Schema.Unknown),
            }),
          ),
        }),
      ),
    }),
    status: Schema.optional(
      Schema.Struct({
        acceptedNames: Schema.optional(
          Schema.Struct({
            categories: Schema.optional(Schema.Array(Schema.String)),
            kind: Schema.String,
            listKind: Schema.optional(Schema.String),
            plural: Schema.String,
            shortNames: Schema.optional(Schema.Array(Schema.String)),
            singular: Schema.optional(Schema.String),
          }),
        ),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        observedGeneration: Schema.optional(Schema.Number),
        storedVersions: Schema.optional(Schema.Array(Schema.String)),
      }),
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
      conversion: Schema.optional(
        Schema.Struct({
          strategy: Schema.String,
          webhook: Schema.optional(
            Schema.Struct({
              clientConfig: Schema.optional(
                Schema.Struct({
                  caBundle: Schema.optional(Schema.String),
                  service: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                      path: Schema.optional(Schema.String),
                      port: Schema.optional(Schema.Number),
                    }),
                  ),
                  url: Schema.optional(Schema.String),
                }),
              ),
              conversionReviewVersions: Schema.Array(Schema.String),
            }),
          ),
        }),
      ),
      group: Schema.String,
      names: Schema.Struct({
        categories: Schema.optional(Schema.Array(Schema.String)),
        kind: Schema.String,
        listKind: Schema.optional(Schema.String),
        plural: Schema.String,
        shortNames: Schema.optional(Schema.Array(Schema.String)),
        singular: Schema.optional(Schema.String),
      }),
      preserveUnknownFields: Schema.optional(Schema.Boolean),
      scope: Schema.String,
      versions: Schema.Array(
        Schema.Struct({
          additionalPrinterColumns: Schema.optional(
            Schema.Array(
              Schema.Struct({
                description: Schema.optional(Schema.String),
                format: Schema.optional(Schema.String),
                jsonPath: Schema.String,
                name: Schema.String,
                priority: Schema.optional(Schema.Number),
                type: Schema.String,
              }),
            ),
          ),
          deprecated: Schema.optional(Schema.Boolean),
          deprecationWarning: Schema.optional(Schema.String),
          name: Schema.String,
          schema: Schema.optional(
            Schema.Struct({
              openAPIV3Schema: Schema.optional(
                Schema.Struct({
                  $ref: Schema.optional(Schema.String),
                  $schema: Schema.optional(Schema.String),
                  additionalItems: Schema.optional(Schema.Unknown),
                  additionalProperties: Schema.optional(Schema.Unknown),
                  allOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  anyOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  default: Schema.optional(Schema.Unknown),
                  definitions: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  dependencies: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  description: Schema.optional(Schema.String),
                  enum: Schema.optional(Schema.Array(Schema.Unknown)),
                  example: Schema.optional(Schema.Unknown),
                  exclusiveMaximum: Schema.optional(Schema.Boolean),
                  exclusiveMinimum: Schema.optional(Schema.Boolean),
                  externalDocs: Schema.optional(
                    Schema.Struct({
                      description: Schema.optional(Schema.String),
                      url: Schema.optional(Schema.String),
                    }),
                  ),
                  format: Schema.optional(Schema.String),
                  id: Schema.optional(Schema.String),
                  items: Schema.optional(Schema.Unknown),
                  maxItems: Schema.optional(Schema.Number),
                  maxLength: Schema.optional(Schema.Number),
                  maxProperties: Schema.optional(Schema.Number),
                  maximum: Schema.optional(Schema.Number),
                  minItems: Schema.optional(Schema.Number),
                  minLength: Schema.optional(Schema.Number),
                  minProperties: Schema.optional(Schema.Number),
                  minimum: Schema.optional(Schema.Number),
                  multipleOf: Schema.optional(Schema.Number),
                  not: Schema.optional(Schema.Unknown),
                  nullable: Schema.optional(Schema.Boolean),
                  oneOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  pattern: Schema.optional(Schema.String),
                  patternProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  properties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  required: Schema.optional(Schema.Array(Schema.String)),
                  title: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                  uniqueItems: Schema.optional(Schema.Boolean),
                  "x-kubernetes-embedded-resource": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-int-or-string": Schema.optional(Schema.Boolean),
                  "x-kubernetes-list-map-keys": Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  "x-kubernetes-list-type": Schema.optional(Schema.String),
                  "x-kubernetes-map-type": Schema.optional(Schema.String),
                  "x-kubernetes-preserve-unknown-fields": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-validations": Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        fieldPath: Schema.optional(Schema.String),
                        message: Schema.optional(Schema.String),
                        messageExpression: Schema.optional(Schema.String),
                        optionalOldSelf: Schema.optional(Schema.Boolean),
                        reason: Schema.optional(Schema.String),
                        rule: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
          selectableFields: Schema.optional(
            Schema.Array(
              Schema.Struct({
                jsonPath: Schema.String,
              }),
            ),
          ),
          served: Schema.Boolean,
          storage: Schema.Boolean,
          subresources: Schema.optional(
            Schema.Struct({
              scale: Schema.optional(
                Schema.Struct({
                  labelSelectorPath: Schema.optional(Schema.String),
                  specReplicasPath: Schema.String,
                  statusReplicasPath: Schema.String,
                }),
              ),
              status: Schema.optional(Schema.Unknown),
            }),
          ),
        }),
      ),
    }),
    status: Schema.optional(
      Schema.Struct({
        acceptedNames: Schema.optional(
          Schema.Struct({
            categories: Schema.optional(Schema.Array(Schema.String)),
            kind: Schema.String,
            listKind: Schema.optional(Schema.String),
            plural: Schema.String,
            shortNames: Schema.optional(Schema.Array(Schema.String)),
            singular: Schema.optional(Schema.String),
          }),
        ),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        observedGeneration: Schema.optional(Schema.Number),
        storedVersions: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type CreateApiextensionsV1CustomResourceDefinitionOutput =
  typeof CreateApiextensionsV1CustomResourceDefinitionOutput.Type;

// The operation
/**
 * create a CustomResourceDefinition
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
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
export type DeleteApiextensionsV1CollectionCustomResourceDefinitionOutput =
  typeof DeleteApiextensionsV1CollectionCustomResourceDefinitionOutput.Type;

// The operation
/**
 * delete collection of CustomResourceDefinition
 *
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
export const deleteApiextensionsV1CollectionCustomResourceDefinition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteApiextensionsV1CollectionCustomResourceDefinitionInput,
    outputSchema: DeleteApiextensionsV1CollectionCustomResourceDefinitionOutput,
  }));
// Input Schema
export const DeleteApiextensionsV1CustomResourceDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
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
export type DeleteApiextensionsV1CustomResourceDefinitionOutput =
  typeof DeleteApiextensionsV1CustomResourceDefinitionOutput.Type;

// The operation
/**
 * delete a CustomResourceDefinition
 *
 * @param name - name of the CustomResourceDefinition
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
          conversion: Schema.optional(
            Schema.Struct({
              strategy: Schema.String,
              webhook: Schema.optional(
                Schema.Struct({
                  clientConfig: Schema.optional(
                    Schema.Struct({
                      caBundle: Schema.optional(Schema.String),
                      service: Schema.optional(
                        Schema.Struct({
                          name: Schema.String,
                          namespace: Schema.String,
                          path: Schema.optional(Schema.String),
                          port: Schema.optional(Schema.Number),
                        }),
                      ),
                      url: Schema.optional(Schema.String),
                    }),
                  ),
                  conversionReviewVersions: Schema.Array(Schema.String),
                }),
              ),
            }),
          ),
          group: Schema.String,
          names: Schema.Struct({
            categories: Schema.optional(Schema.Array(Schema.String)),
            kind: Schema.String,
            listKind: Schema.optional(Schema.String),
            plural: Schema.String,
            shortNames: Schema.optional(Schema.Array(Schema.String)),
            singular: Schema.optional(Schema.String),
          }),
          preserveUnknownFields: Schema.optional(Schema.Boolean),
          scope: Schema.String,
          versions: Schema.Array(
            Schema.Struct({
              additionalPrinterColumns: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    description: Schema.optional(Schema.String),
                    format: Schema.optional(Schema.String),
                    jsonPath: Schema.String,
                    name: Schema.String,
                    priority: Schema.optional(Schema.Number),
                    type: Schema.String,
                  }),
                ),
              ),
              deprecated: Schema.optional(Schema.Boolean),
              deprecationWarning: Schema.optional(Schema.String),
              name: Schema.String,
              schema: Schema.optional(
                Schema.Struct({
                  openAPIV3Schema: Schema.optional(
                    Schema.Struct({
                      $ref: Schema.optional(Schema.String),
                      $schema: Schema.optional(Schema.String),
                      additionalItems: Schema.optional(Schema.Unknown),
                      additionalProperties: Schema.optional(Schema.Unknown),
                      allOf: Schema.optional(Schema.Array(Schema.Unknown)),
                      anyOf: Schema.optional(Schema.Array(Schema.Unknown)),
                      default: Schema.optional(Schema.Unknown),
                      definitions: Schema.optional(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                      dependencies: Schema.optional(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                      description: Schema.optional(Schema.String),
                      enum: Schema.optional(Schema.Array(Schema.Unknown)),
                      example: Schema.optional(Schema.Unknown),
                      exclusiveMaximum: Schema.optional(Schema.Boolean),
                      exclusiveMinimum: Schema.optional(Schema.Boolean),
                      externalDocs: Schema.optional(
                        Schema.Struct({
                          description: Schema.optional(Schema.String),
                          url: Schema.optional(Schema.String),
                        }),
                      ),
                      format: Schema.optional(Schema.String),
                      id: Schema.optional(Schema.String),
                      items: Schema.optional(Schema.Unknown),
                      maxItems: Schema.optional(Schema.Number),
                      maxLength: Schema.optional(Schema.Number),
                      maxProperties: Schema.optional(Schema.Number),
                      maximum: Schema.optional(Schema.Number),
                      minItems: Schema.optional(Schema.Number),
                      minLength: Schema.optional(Schema.Number),
                      minProperties: Schema.optional(Schema.Number),
                      minimum: Schema.optional(Schema.Number),
                      multipleOf: Schema.optional(Schema.Number),
                      not: Schema.optional(Schema.Unknown),
                      nullable: Schema.optional(Schema.Boolean),
                      oneOf: Schema.optional(Schema.Array(Schema.Unknown)),
                      pattern: Schema.optional(Schema.String),
                      patternProperties: Schema.optional(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                      properties: Schema.optional(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                      required: Schema.optional(Schema.Array(Schema.String)),
                      title: Schema.optional(Schema.String),
                      type: Schema.optional(Schema.String),
                      uniqueItems: Schema.optional(Schema.Boolean),
                      "x-kubernetes-embedded-resource": Schema.optional(
                        Schema.Boolean,
                      ),
                      "x-kubernetes-int-or-string": Schema.optional(
                        Schema.Boolean,
                      ),
                      "x-kubernetes-list-map-keys": Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      "x-kubernetes-list-type": Schema.optional(Schema.String),
                      "x-kubernetes-map-type": Schema.optional(Schema.String),
                      "x-kubernetes-preserve-unknown-fields": Schema.optional(
                        Schema.Boolean,
                      ),
                      "x-kubernetes-validations": Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            fieldPath: Schema.optional(Schema.String),
                            message: Schema.optional(Schema.String),
                            messageExpression: Schema.optional(Schema.String),
                            optionalOldSelf: Schema.optional(Schema.Boolean),
                            reason: Schema.optional(Schema.String),
                            rule: Schema.String,
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
              selectableFields: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    jsonPath: Schema.String,
                  }),
                ),
              ),
              served: Schema.Boolean,
              storage: Schema.Boolean,
              subresources: Schema.optional(
                Schema.Struct({
                  scale: Schema.optional(
                    Schema.Struct({
                      labelSelectorPath: Schema.optional(Schema.String),
                      specReplicasPath: Schema.String,
                      statusReplicasPath: Schema.String,
                    }),
                  ),
                  status: Schema.optional(Schema.Unknown),
                }),
              ),
            }),
          ),
        }),
        status: Schema.optional(
          Schema.Struct({
            acceptedNames: Schema.optional(
              Schema.Struct({
                categories: Schema.optional(Schema.Array(Schema.String)),
                kind: Schema.String,
                listKind: Schema.optional(Schema.String),
                plural: Schema.String,
                shortNames: Schema.optional(Schema.Array(Schema.String)),
                singular: Schema.optional(Schema.String),
              }),
            ),
            conditions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  lastTransitionTime: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  observedGeneration: Schema.optional(Schema.Number),
                  reason: Schema.optional(Schema.String),
                  status: Schema.String,
                  type: Schema.String,
                }),
              ),
            ),
            observedGeneration: Schema.optional(Schema.Number),
            storedVersions: Schema.optional(Schema.Array(Schema.String)),
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
export type ListApiextensionsV1CustomResourceDefinitionOutput =
  typeof ListApiextensionsV1CustomResourceDefinitionOutput.Type;

// The operation
/**
 * list or watch objects of kind CustomResourceDefinition
 *
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
export const listApiextensionsV1CustomResourceDefinition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListApiextensionsV1CustomResourceDefinitionInput,
    outputSchema: ListApiextensionsV1CustomResourceDefinitionOutput,
  }));
// Input Schema
export const PatchApiextensionsV1CustomResourceDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
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
      conversion: Schema.optional(
        Schema.Struct({
          strategy: Schema.String,
          webhook: Schema.optional(
            Schema.Struct({
              clientConfig: Schema.optional(
                Schema.Struct({
                  caBundle: Schema.optional(Schema.String),
                  service: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                      path: Schema.optional(Schema.String),
                      port: Schema.optional(Schema.Number),
                    }),
                  ),
                  url: Schema.optional(Schema.String),
                }),
              ),
              conversionReviewVersions: Schema.Array(Schema.String),
            }),
          ),
        }),
      ),
      group: Schema.String,
      names: Schema.Struct({
        categories: Schema.optional(Schema.Array(Schema.String)),
        kind: Schema.String,
        listKind: Schema.optional(Schema.String),
        plural: Schema.String,
        shortNames: Schema.optional(Schema.Array(Schema.String)),
        singular: Schema.optional(Schema.String),
      }),
      preserveUnknownFields: Schema.optional(Schema.Boolean),
      scope: Schema.String,
      versions: Schema.Array(
        Schema.Struct({
          additionalPrinterColumns: Schema.optional(
            Schema.Array(
              Schema.Struct({
                description: Schema.optional(Schema.String),
                format: Schema.optional(Schema.String),
                jsonPath: Schema.String,
                name: Schema.String,
                priority: Schema.optional(Schema.Number),
                type: Schema.String,
              }),
            ),
          ),
          deprecated: Schema.optional(Schema.Boolean),
          deprecationWarning: Schema.optional(Schema.String),
          name: Schema.String,
          schema: Schema.optional(
            Schema.Struct({
              openAPIV3Schema: Schema.optional(
                Schema.Struct({
                  $ref: Schema.optional(Schema.String),
                  $schema: Schema.optional(Schema.String),
                  additionalItems: Schema.optional(Schema.Unknown),
                  additionalProperties: Schema.optional(Schema.Unknown),
                  allOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  anyOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  default: Schema.optional(Schema.Unknown),
                  definitions: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  dependencies: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  description: Schema.optional(Schema.String),
                  enum: Schema.optional(Schema.Array(Schema.Unknown)),
                  example: Schema.optional(Schema.Unknown),
                  exclusiveMaximum: Schema.optional(Schema.Boolean),
                  exclusiveMinimum: Schema.optional(Schema.Boolean),
                  externalDocs: Schema.optional(
                    Schema.Struct({
                      description: Schema.optional(Schema.String),
                      url: Schema.optional(Schema.String),
                    }),
                  ),
                  format: Schema.optional(Schema.String),
                  id: Schema.optional(Schema.String),
                  items: Schema.optional(Schema.Unknown),
                  maxItems: Schema.optional(Schema.Number),
                  maxLength: Schema.optional(Schema.Number),
                  maxProperties: Schema.optional(Schema.Number),
                  maximum: Schema.optional(Schema.Number),
                  minItems: Schema.optional(Schema.Number),
                  minLength: Schema.optional(Schema.Number),
                  minProperties: Schema.optional(Schema.Number),
                  minimum: Schema.optional(Schema.Number),
                  multipleOf: Schema.optional(Schema.Number),
                  not: Schema.optional(Schema.Unknown),
                  nullable: Schema.optional(Schema.Boolean),
                  oneOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  pattern: Schema.optional(Schema.String),
                  patternProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  properties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  required: Schema.optional(Schema.Array(Schema.String)),
                  title: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                  uniqueItems: Schema.optional(Schema.Boolean),
                  "x-kubernetes-embedded-resource": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-int-or-string": Schema.optional(Schema.Boolean),
                  "x-kubernetes-list-map-keys": Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  "x-kubernetes-list-type": Schema.optional(Schema.String),
                  "x-kubernetes-map-type": Schema.optional(Schema.String),
                  "x-kubernetes-preserve-unknown-fields": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-validations": Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        fieldPath: Schema.optional(Schema.String),
                        message: Schema.optional(Schema.String),
                        messageExpression: Schema.optional(Schema.String),
                        optionalOldSelf: Schema.optional(Schema.Boolean),
                        reason: Schema.optional(Schema.String),
                        rule: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
          selectableFields: Schema.optional(
            Schema.Array(
              Schema.Struct({
                jsonPath: Schema.String,
              }),
            ),
          ),
          served: Schema.Boolean,
          storage: Schema.Boolean,
          subresources: Schema.optional(
            Schema.Struct({
              scale: Schema.optional(
                Schema.Struct({
                  labelSelectorPath: Schema.optional(Schema.String),
                  specReplicasPath: Schema.String,
                  statusReplicasPath: Schema.String,
                }),
              ),
              status: Schema.optional(Schema.Unknown),
            }),
          ),
        }),
      ),
    }),
    status: Schema.optional(
      Schema.Struct({
        acceptedNames: Schema.optional(
          Schema.Struct({
            categories: Schema.optional(Schema.Array(Schema.String)),
            kind: Schema.String,
            listKind: Schema.optional(Schema.String),
            plural: Schema.String,
            shortNames: Schema.optional(Schema.Array(Schema.String)),
            singular: Schema.optional(Schema.String),
          }),
        ),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        observedGeneration: Schema.optional(Schema.Number),
        storedVersions: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type PatchApiextensionsV1CustomResourceDefinitionOutput =
  typeof PatchApiextensionsV1CustomResourceDefinitionOutput.Type;

// The operation
/**
 * partially update the specified CustomResourceDefinition
 *
 * @param name - name of the CustomResourceDefinition
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
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
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
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
      conversion: Schema.optional(
        Schema.Struct({
          strategy: Schema.String,
          webhook: Schema.optional(
            Schema.Struct({
              clientConfig: Schema.optional(
                Schema.Struct({
                  caBundle: Schema.optional(Schema.String),
                  service: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                      path: Schema.optional(Schema.String),
                      port: Schema.optional(Schema.Number),
                    }),
                  ),
                  url: Schema.optional(Schema.String),
                }),
              ),
              conversionReviewVersions: Schema.Array(Schema.String),
            }),
          ),
        }),
      ),
      group: Schema.String,
      names: Schema.Struct({
        categories: Schema.optional(Schema.Array(Schema.String)),
        kind: Schema.String,
        listKind: Schema.optional(Schema.String),
        plural: Schema.String,
        shortNames: Schema.optional(Schema.Array(Schema.String)),
        singular: Schema.optional(Schema.String),
      }),
      preserveUnknownFields: Schema.optional(Schema.Boolean),
      scope: Schema.String,
      versions: Schema.Array(
        Schema.Struct({
          additionalPrinterColumns: Schema.optional(
            Schema.Array(
              Schema.Struct({
                description: Schema.optional(Schema.String),
                format: Schema.optional(Schema.String),
                jsonPath: Schema.String,
                name: Schema.String,
                priority: Schema.optional(Schema.Number),
                type: Schema.String,
              }),
            ),
          ),
          deprecated: Schema.optional(Schema.Boolean),
          deprecationWarning: Schema.optional(Schema.String),
          name: Schema.String,
          schema: Schema.optional(
            Schema.Struct({
              openAPIV3Schema: Schema.optional(
                Schema.Struct({
                  $ref: Schema.optional(Schema.String),
                  $schema: Schema.optional(Schema.String),
                  additionalItems: Schema.optional(Schema.Unknown),
                  additionalProperties: Schema.optional(Schema.Unknown),
                  allOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  anyOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  default: Schema.optional(Schema.Unknown),
                  definitions: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  dependencies: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  description: Schema.optional(Schema.String),
                  enum: Schema.optional(Schema.Array(Schema.Unknown)),
                  example: Schema.optional(Schema.Unknown),
                  exclusiveMaximum: Schema.optional(Schema.Boolean),
                  exclusiveMinimum: Schema.optional(Schema.Boolean),
                  externalDocs: Schema.optional(
                    Schema.Struct({
                      description: Schema.optional(Schema.String),
                      url: Schema.optional(Schema.String),
                    }),
                  ),
                  format: Schema.optional(Schema.String),
                  id: Schema.optional(Schema.String),
                  items: Schema.optional(Schema.Unknown),
                  maxItems: Schema.optional(Schema.Number),
                  maxLength: Schema.optional(Schema.Number),
                  maxProperties: Schema.optional(Schema.Number),
                  maximum: Schema.optional(Schema.Number),
                  minItems: Schema.optional(Schema.Number),
                  minLength: Schema.optional(Schema.Number),
                  minProperties: Schema.optional(Schema.Number),
                  minimum: Schema.optional(Schema.Number),
                  multipleOf: Schema.optional(Schema.Number),
                  not: Schema.optional(Schema.Unknown),
                  nullable: Schema.optional(Schema.Boolean),
                  oneOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  pattern: Schema.optional(Schema.String),
                  patternProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  properties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  required: Schema.optional(Schema.Array(Schema.String)),
                  title: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                  uniqueItems: Schema.optional(Schema.Boolean),
                  "x-kubernetes-embedded-resource": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-int-or-string": Schema.optional(Schema.Boolean),
                  "x-kubernetes-list-map-keys": Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  "x-kubernetes-list-type": Schema.optional(Schema.String),
                  "x-kubernetes-map-type": Schema.optional(Schema.String),
                  "x-kubernetes-preserve-unknown-fields": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-validations": Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        fieldPath: Schema.optional(Schema.String),
                        message: Schema.optional(Schema.String),
                        messageExpression: Schema.optional(Schema.String),
                        optionalOldSelf: Schema.optional(Schema.Boolean),
                        reason: Schema.optional(Schema.String),
                        rule: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
          selectableFields: Schema.optional(
            Schema.Array(
              Schema.Struct({
                jsonPath: Schema.String,
              }),
            ),
          ),
          served: Schema.Boolean,
          storage: Schema.Boolean,
          subresources: Schema.optional(
            Schema.Struct({
              scale: Schema.optional(
                Schema.Struct({
                  labelSelectorPath: Schema.optional(Schema.String),
                  specReplicasPath: Schema.String,
                  statusReplicasPath: Schema.String,
                }),
              ),
              status: Schema.optional(Schema.Unknown),
            }),
          ),
        }),
      ),
    }),
    status: Schema.optional(
      Schema.Struct({
        acceptedNames: Schema.optional(
          Schema.Struct({
            categories: Schema.optional(Schema.Array(Schema.String)),
            kind: Schema.String,
            listKind: Schema.optional(Schema.String),
            plural: Schema.String,
            shortNames: Schema.optional(Schema.Array(Schema.String)),
            singular: Schema.optional(Schema.String),
          }),
        ),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        observedGeneration: Schema.optional(Schema.Number),
        storedVersions: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type PatchApiextensionsV1CustomResourceDefinitionStatusOutput =
  typeof PatchApiextensionsV1CustomResourceDefinitionStatusOutput.Type;

// The operation
/**
 * partially update status of the specified CustomResourceDefinition
 *
 * @param name - name of the CustomResourceDefinition
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchApiextensionsV1CustomResourceDefinitionStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchApiextensionsV1CustomResourceDefinitionStatusInput,
    outputSchema: PatchApiextensionsV1CustomResourceDefinitionStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReadApiextensionsV1CustomResourceDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
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
      conversion: Schema.optional(
        Schema.Struct({
          strategy: Schema.String,
          webhook: Schema.optional(
            Schema.Struct({
              clientConfig: Schema.optional(
                Schema.Struct({
                  caBundle: Schema.optional(Schema.String),
                  service: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                      path: Schema.optional(Schema.String),
                      port: Schema.optional(Schema.Number),
                    }),
                  ),
                  url: Schema.optional(Schema.String),
                }),
              ),
              conversionReviewVersions: Schema.Array(Schema.String),
            }),
          ),
        }),
      ),
      group: Schema.String,
      names: Schema.Struct({
        categories: Schema.optional(Schema.Array(Schema.String)),
        kind: Schema.String,
        listKind: Schema.optional(Schema.String),
        plural: Schema.String,
        shortNames: Schema.optional(Schema.Array(Schema.String)),
        singular: Schema.optional(Schema.String),
      }),
      preserveUnknownFields: Schema.optional(Schema.Boolean),
      scope: Schema.String,
      versions: Schema.Array(
        Schema.Struct({
          additionalPrinterColumns: Schema.optional(
            Schema.Array(
              Schema.Struct({
                description: Schema.optional(Schema.String),
                format: Schema.optional(Schema.String),
                jsonPath: Schema.String,
                name: Schema.String,
                priority: Schema.optional(Schema.Number),
                type: Schema.String,
              }),
            ),
          ),
          deprecated: Schema.optional(Schema.Boolean),
          deprecationWarning: Schema.optional(Schema.String),
          name: Schema.String,
          schema: Schema.optional(
            Schema.Struct({
              openAPIV3Schema: Schema.optional(
                Schema.Struct({
                  $ref: Schema.optional(Schema.String),
                  $schema: Schema.optional(Schema.String),
                  additionalItems: Schema.optional(Schema.Unknown),
                  additionalProperties: Schema.optional(Schema.Unknown),
                  allOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  anyOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  default: Schema.optional(Schema.Unknown),
                  definitions: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  dependencies: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  description: Schema.optional(Schema.String),
                  enum: Schema.optional(Schema.Array(Schema.Unknown)),
                  example: Schema.optional(Schema.Unknown),
                  exclusiveMaximum: Schema.optional(Schema.Boolean),
                  exclusiveMinimum: Schema.optional(Schema.Boolean),
                  externalDocs: Schema.optional(
                    Schema.Struct({
                      description: Schema.optional(Schema.String),
                      url: Schema.optional(Schema.String),
                    }),
                  ),
                  format: Schema.optional(Schema.String),
                  id: Schema.optional(Schema.String),
                  items: Schema.optional(Schema.Unknown),
                  maxItems: Schema.optional(Schema.Number),
                  maxLength: Schema.optional(Schema.Number),
                  maxProperties: Schema.optional(Schema.Number),
                  maximum: Schema.optional(Schema.Number),
                  minItems: Schema.optional(Schema.Number),
                  minLength: Schema.optional(Schema.Number),
                  minProperties: Schema.optional(Schema.Number),
                  minimum: Schema.optional(Schema.Number),
                  multipleOf: Schema.optional(Schema.Number),
                  not: Schema.optional(Schema.Unknown),
                  nullable: Schema.optional(Schema.Boolean),
                  oneOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  pattern: Schema.optional(Schema.String),
                  patternProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  properties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  required: Schema.optional(Schema.Array(Schema.String)),
                  title: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                  uniqueItems: Schema.optional(Schema.Boolean),
                  "x-kubernetes-embedded-resource": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-int-or-string": Schema.optional(Schema.Boolean),
                  "x-kubernetes-list-map-keys": Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  "x-kubernetes-list-type": Schema.optional(Schema.String),
                  "x-kubernetes-map-type": Schema.optional(Schema.String),
                  "x-kubernetes-preserve-unknown-fields": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-validations": Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        fieldPath: Schema.optional(Schema.String),
                        message: Schema.optional(Schema.String),
                        messageExpression: Schema.optional(Schema.String),
                        optionalOldSelf: Schema.optional(Schema.Boolean),
                        reason: Schema.optional(Schema.String),
                        rule: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
          selectableFields: Schema.optional(
            Schema.Array(
              Schema.Struct({
                jsonPath: Schema.String,
              }),
            ),
          ),
          served: Schema.Boolean,
          storage: Schema.Boolean,
          subresources: Schema.optional(
            Schema.Struct({
              scale: Schema.optional(
                Schema.Struct({
                  labelSelectorPath: Schema.optional(Schema.String),
                  specReplicasPath: Schema.String,
                  statusReplicasPath: Schema.String,
                }),
              ),
              status: Schema.optional(Schema.Unknown),
            }),
          ),
        }),
      ),
    }),
    status: Schema.optional(
      Schema.Struct({
        acceptedNames: Schema.optional(
          Schema.Struct({
            categories: Schema.optional(Schema.Array(Schema.String)),
            kind: Schema.String,
            listKind: Schema.optional(Schema.String),
            plural: Schema.String,
            shortNames: Schema.optional(Schema.Array(Schema.String)),
            singular: Schema.optional(Schema.String),
          }),
        ),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        observedGeneration: Schema.optional(Schema.Number),
        storedVersions: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type ReadApiextensionsV1CustomResourceDefinitionOutput =
  typeof ReadApiextensionsV1CustomResourceDefinitionOutput.Type;

// The operation
/**
 * read the specified CustomResourceDefinition
 *
 * @param name - name of the CustomResourceDefinition
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readApiextensionsV1CustomResourceDefinition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadApiextensionsV1CustomResourceDefinitionInput,
    outputSchema: ReadApiextensionsV1CustomResourceDefinitionOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadApiextensionsV1CustomResourceDefinitionStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
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
      conversion: Schema.optional(
        Schema.Struct({
          strategy: Schema.String,
          webhook: Schema.optional(
            Schema.Struct({
              clientConfig: Schema.optional(
                Schema.Struct({
                  caBundle: Schema.optional(Schema.String),
                  service: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                      path: Schema.optional(Schema.String),
                      port: Schema.optional(Schema.Number),
                    }),
                  ),
                  url: Schema.optional(Schema.String),
                }),
              ),
              conversionReviewVersions: Schema.Array(Schema.String),
            }),
          ),
        }),
      ),
      group: Schema.String,
      names: Schema.Struct({
        categories: Schema.optional(Schema.Array(Schema.String)),
        kind: Schema.String,
        listKind: Schema.optional(Schema.String),
        plural: Schema.String,
        shortNames: Schema.optional(Schema.Array(Schema.String)),
        singular: Schema.optional(Schema.String),
      }),
      preserveUnknownFields: Schema.optional(Schema.Boolean),
      scope: Schema.String,
      versions: Schema.Array(
        Schema.Struct({
          additionalPrinterColumns: Schema.optional(
            Schema.Array(
              Schema.Struct({
                description: Schema.optional(Schema.String),
                format: Schema.optional(Schema.String),
                jsonPath: Schema.String,
                name: Schema.String,
                priority: Schema.optional(Schema.Number),
                type: Schema.String,
              }),
            ),
          ),
          deprecated: Schema.optional(Schema.Boolean),
          deprecationWarning: Schema.optional(Schema.String),
          name: Schema.String,
          schema: Schema.optional(
            Schema.Struct({
              openAPIV3Schema: Schema.optional(
                Schema.Struct({
                  $ref: Schema.optional(Schema.String),
                  $schema: Schema.optional(Schema.String),
                  additionalItems: Schema.optional(Schema.Unknown),
                  additionalProperties: Schema.optional(Schema.Unknown),
                  allOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  anyOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  default: Schema.optional(Schema.Unknown),
                  definitions: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  dependencies: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  description: Schema.optional(Schema.String),
                  enum: Schema.optional(Schema.Array(Schema.Unknown)),
                  example: Schema.optional(Schema.Unknown),
                  exclusiveMaximum: Schema.optional(Schema.Boolean),
                  exclusiveMinimum: Schema.optional(Schema.Boolean),
                  externalDocs: Schema.optional(
                    Schema.Struct({
                      description: Schema.optional(Schema.String),
                      url: Schema.optional(Schema.String),
                    }),
                  ),
                  format: Schema.optional(Schema.String),
                  id: Schema.optional(Schema.String),
                  items: Schema.optional(Schema.Unknown),
                  maxItems: Schema.optional(Schema.Number),
                  maxLength: Schema.optional(Schema.Number),
                  maxProperties: Schema.optional(Schema.Number),
                  maximum: Schema.optional(Schema.Number),
                  minItems: Schema.optional(Schema.Number),
                  minLength: Schema.optional(Schema.Number),
                  minProperties: Schema.optional(Schema.Number),
                  minimum: Schema.optional(Schema.Number),
                  multipleOf: Schema.optional(Schema.Number),
                  not: Schema.optional(Schema.Unknown),
                  nullable: Schema.optional(Schema.Boolean),
                  oneOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  pattern: Schema.optional(Schema.String),
                  patternProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  properties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  required: Schema.optional(Schema.Array(Schema.String)),
                  title: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                  uniqueItems: Schema.optional(Schema.Boolean),
                  "x-kubernetes-embedded-resource": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-int-or-string": Schema.optional(Schema.Boolean),
                  "x-kubernetes-list-map-keys": Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  "x-kubernetes-list-type": Schema.optional(Schema.String),
                  "x-kubernetes-map-type": Schema.optional(Schema.String),
                  "x-kubernetes-preserve-unknown-fields": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-validations": Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        fieldPath: Schema.optional(Schema.String),
                        message: Schema.optional(Schema.String),
                        messageExpression: Schema.optional(Schema.String),
                        optionalOldSelf: Schema.optional(Schema.Boolean),
                        reason: Schema.optional(Schema.String),
                        rule: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
          selectableFields: Schema.optional(
            Schema.Array(
              Schema.Struct({
                jsonPath: Schema.String,
              }),
            ),
          ),
          served: Schema.Boolean,
          storage: Schema.Boolean,
          subresources: Schema.optional(
            Schema.Struct({
              scale: Schema.optional(
                Schema.Struct({
                  labelSelectorPath: Schema.optional(Schema.String),
                  specReplicasPath: Schema.String,
                  statusReplicasPath: Schema.String,
                }),
              ),
              status: Schema.optional(Schema.Unknown),
            }),
          ),
        }),
      ),
    }),
    status: Schema.optional(
      Schema.Struct({
        acceptedNames: Schema.optional(
          Schema.Struct({
            categories: Schema.optional(Schema.Array(Schema.String)),
            kind: Schema.String,
            listKind: Schema.optional(Schema.String),
            plural: Schema.String,
            shortNames: Schema.optional(Schema.Array(Schema.String)),
            singular: Schema.optional(Schema.String),
          }),
        ),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        observedGeneration: Schema.optional(Schema.Number),
        storedVersions: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type ReadApiextensionsV1CustomResourceDefinitionStatusOutput =
  typeof ReadApiextensionsV1CustomResourceDefinitionStatusOutput.Type;

// The operation
/**
 * read status of the specified CustomResourceDefinition
 *
 * @param name - name of the CustomResourceDefinition
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
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
    name: Schema.String.pipe(T.PathParam()),
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
      conversion: Schema.optional(
        Schema.Struct({
          strategy: Schema.String,
          webhook: Schema.optional(
            Schema.Struct({
              clientConfig: Schema.optional(
                Schema.Struct({
                  caBundle: Schema.optional(Schema.String),
                  service: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                      path: Schema.optional(Schema.String),
                      port: Schema.optional(Schema.Number),
                    }),
                  ),
                  url: Schema.optional(Schema.String),
                }),
              ),
              conversionReviewVersions: Schema.Array(Schema.String),
            }),
          ),
        }),
      ),
      group: Schema.String,
      names: Schema.Struct({
        categories: Schema.optional(Schema.Array(Schema.String)),
        kind: Schema.String,
        listKind: Schema.optional(Schema.String),
        plural: Schema.String,
        shortNames: Schema.optional(Schema.Array(Schema.String)),
        singular: Schema.optional(Schema.String),
      }),
      preserveUnknownFields: Schema.optional(Schema.Boolean),
      scope: Schema.String,
      versions: Schema.Array(
        Schema.Struct({
          additionalPrinterColumns: Schema.optional(
            Schema.Array(
              Schema.Struct({
                description: Schema.optional(Schema.String),
                format: Schema.optional(Schema.String),
                jsonPath: Schema.String,
                name: Schema.String,
                priority: Schema.optional(Schema.Number),
                type: Schema.String,
              }),
            ),
          ),
          deprecated: Schema.optional(Schema.Boolean),
          deprecationWarning: Schema.optional(Schema.String),
          name: Schema.String,
          schema: Schema.optional(
            Schema.Struct({
              openAPIV3Schema: Schema.optional(
                Schema.Struct({
                  $ref: Schema.optional(Schema.String),
                  $schema: Schema.optional(Schema.String),
                  additionalItems: Schema.optional(Schema.Unknown),
                  additionalProperties: Schema.optional(Schema.Unknown),
                  allOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  anyOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  default: Schema.optional(Schema.Unknown),
                  definitions: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  dependencies: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  description: Schema.optional(Schema.String),
                  enum: Schema.optional(Schema.Array(Schema.Unknown)),
                  example: Schema.optional(Schema.Unknown),
                  exclusiveMaximum: Schema.optional(Schema.Boolean),
                  exclusiveMinimum: Schema.optional(Schema.Boolean),
                  externalDocs: Schema.optional(
                    Schema.Struct({
                      description: Schema.optional(Schema.String),
                      url: Schema.optional(Schema.String),
                    }),
                  ),
                  format: Schema.optional(Schema.String),
                  id: Schema.optional(Schema.String),
                  items: Schema.optional(Schema.Unknown),
                  maxItems: Schema.optional(Schema.Number),
                  maxLength: Schema.optional(Schema.Number),
                  maxProperties: Schema.optional(Schema.Number),
                  maximum: Schema.optional(Schema.Number),
                  minItems: Schema.optional(Schema.Number),
                  minLength: Schema.optional(Schema.Number),
                  minProperties: Schema.optional(Schema.Number),
                  minimum: Schema.optional(Schema.Number),
                  multipleOf: Schema.optional(Schema.Number),
                  not: Schema.optional(Schema.Unknown),
                  nullable: Schema.optional(Schema.Boolean),
                  oneOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  pattern: Schema.optional(Schema.String),
                  patternProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  properties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  required: Schema.optional(Schema.Array(Schema.String)),
                  title: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                  uniqueItems: Schema.optional(Schema.Boolean),
                  "x-kubernetes-embedded-resource": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-int-or-string": Schema.optional(Schema.Boolean),
                  "x-kubernetes-list-map-keys": Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  "x-kubernetes-list-type": Schema.optional(Schema.String),
                  "x-kubernetes-map-type": Schema.optional(Schema.String),
                  "x-kubernetes-preserve-unknown-fields": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-validations": Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        fieldPath: Schema.optional(Schema.String),
                        message: Schema.optional(Schema.String),
                        messageExpression: Schema.optional(Schema.String),
                        optionalOldSelf: Schema.optional(Schema.Boolean),
                        reason: Schema.optional(Schema.String),
                        rule: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
          selectableFields: Schema.optional(
            Schema.Array(
              Schema.Struct({
                jsonPath: Schema.String,
              }),
            ),
          ),
          served: Schema.Boolean,
          storage: Schema.Boolean,
          subresources: Schema.optional(
            Schema.Struct({
              scale: Schema.optional(
                Schema.Struct({
                  labelSelectorPath: Schema.optional(Schema.String),
                  specReplicasPath: Schema.String,
                  statusReplicasPath: Schema.String,
                }),
              ),
              status: Schema.optional(Schema.Unknown),
            }),
          ),
        }),
      ),
    }),
    status: Schema.optional(
      Schema.Struct({
        acceptedNames: Schema.optional(
          Schema.Struct({
            categories: Schema.optional(Schema.Array(Schema.String)),
            kind: Schema.String,
            listKind: Schema.optional(Schema.String),
            plural: Schema.String,
            shortNames: Schema.optional(Schema.Array(Schema.String)),
            singular: Schema.optional(Schema.String),
          }),
        ),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        observedGeneration: Schema.optional(Schema.Number),
        storedVersions: Schema.optional(Schema.Array(Schema.String)),
      }),
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
      conversion: Schema.optional(
        Schema.Struct({
          strategy: Schema.String,
          webhook: Schema.optional(
            Schema.Struct({
              clientConfig: Schema.optional(
                Schema.Struct({
                  caBundle: Schema.optional(Schema.String),
                  service: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                      path: Schema.optional(Schema.String),
                      port: Schema.optional(Schema.Number),
                    }),
                  ),
                  url: Schema.optional(Schema.String),
                }),
              ),
              conversionReviewVersions: Schema.Array(Schema.String),
            }),
          ),
        }),
      ),
      group: Schema.String,
      names: Schema.Struct({
        categories: Schema.optional(Schema.Array(Schema.String)),
        kind: Schema.String,
        listKind: Schema.optional(Schema.String),
        plural: Schema.String,
        shortNames: Schema.optional(Schema.Array(Schema.String)),
        singular: Schema.optional(Schema.String),
      }),
      preserveUnknownFields: Schema.optional(Schema.Boolean),
      scope: Schema.String,
      versions: Schema.Array(
        Schema.Struct({
          additionalPrinterColumns: Schema.optional(
            Schema.Array(
              Schema.Struct({
                description: Schema.optional(Schema.String),
                format: Schema.optional(Schema.String),
                jsonPath: Schema.String,
                name: Schema.String,
                priority: Schema.optional(Schema.Number),
                type: Schema.String,
              }),
            ),
          ),
          deprecated: Schema.optional(Schema.Boolean),
          deprecationWarning: Schema.optional(Schema.String),
          name: Schema.String,
          schema: Schema.optional(
            Schema.Struct({
              openAPIV3Schema: Schema.optional(
                Schema.Struct({
                  $ref: Schema.optional(Schema.String),
                  $schema: Schema.optional(Schema.String),
                  additionalItems: Schema.optional(Schema.Unknown),
                  additionalProperties: Schema.optional(Schema.Unknown),
                  allOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  anyOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  default: Schema.optional(Schema.Unknown),
                  definitions: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  dependencies: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  description: Schema.optional(Schema.String),
                  enum: Schema.optional(Schema.Array(Schema.Unknown)),
                  example: Schema.optional(Schema.Unknown),
                  exclusiveMaximum: Schema.optional(Schema.Boolean),
                  exclusiveMinimum: Schema.optional(Schema.Boolean),
                  externalDocs: Schema.optional(
                    Schema.Struct({
                      description: Schema.optional(Schema.String),
                      url: Schema.optional(Schema.String),
                    }),
                  ),
                  format: Schema.optional(Schema.String),
                  id: Schema.optional(Schema.String),
                  items: Schema.optional(Schema.Unknown),
                  maxItems: Schema.optional(Schema.Number),
                  maxLength: Schema.optional(Schema.Number),
                  maxProperties: Schema.optional(Schema.Number),
                  maximum: Schema.optional(Schema.Number),
                  minItems: Schema.optional(Schema.Number),
                  minLength: Schema.optional(Schema.Number),
                  minProperties: Schema.optional(Schema.Number),
                  minimum: Schema.optional(Schema.Number),
                  multipleOf: Schema.optional(Schema.Number),
                  not: Schema.optional(Schema.Unknown),
                  nullable: Schema.optional(Schema.Boolean),
                  oneOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  pattern: Schema.optional(Schema.String),
                  patternProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  properties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  required: Schema.optional(Schema.Array(Schema.String)),
                  title: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                  uniqueItems: Schema.optional(Schema.Boolean),
                  "x-kubernetes-embedded-resource": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-int-or-string": Schema.optional(Schema.Boolean),
                  "x-kubernetes-list-map-keys": Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  "x-kubernetes-list-type": Schema.optional(Schema.String),
                  "x-kubernetes-map-type": Schema.optional(Schema.String),
                  "x-kubernetes-preserve-unknown-fields": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-validations": Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        fieldPath: Schema.optional(Schema.String),
                        message: Schema.optional(Schema.String),
                        messageExpression: Schema.optional(Schema.String),
                        optionalOldSelf: Schema.optional(Schema.Boolean),
                        reason: Schema.optional(Schema.String),
                        rule: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
          selectableFields: Schema.optional(
            Schema.Array(
              Schema.Struct({
                jsonPath: Schema.String,
              }),
            ),
          ),
          served: Schema.Boolean,
          storage: Schema.Boolean,
          subresources: Schema.optional(
            Schema.Struct({
              scale: Schema.optional(
                Schema.Struct({
                  labelSelectorPath: Schema.optional(Schema.String),
                  specReplicasPath: Schema.String,
                  statusReplicasPath: Schema.String,
                }),
              ),
              status: Schema.optional(Schema.Unknown),
            }),
          ),
        }),
      ),
    }),
    status: Schema.optional(
      Schema.Struct({
        acceptedNames: Schema.optional(
          Schema.Struct({
            categories: Schema.optional(Schema.Array(Schema.String)),
            kind: Schema.String,
            listKind: Schema.optional(Schema.String),
            plural: Schema.String,
            shortNames: Schema.optional(Schema.Array(Schema.String)),
            singular: Schema.optional(Schema.String),
          }),
        ),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        observedGeneration: Schema.optional(Schema.Number),
        storedVersions: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type ReplaceApiextensionsV1CustomResourceDefinitionOutput =
  typeof ReplaceApiextensionsV1CustomResourceDefinitionOutput.Type;

// The operation
/**
 * replace the specified CustomResourceDefinition
 *
 * @param name - name of the CustomResourceDefinition
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
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
    name: Schema.String.pipe(T.PathParam()),
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
      conversion: Schema.optional(
        Schema.Struct({
          strategy: Schema.String,
          webhook: Schema.optional(
            Schema.Struct({
              clientConfig: Schema.optional(
                Schema.Struct({
                  caBundle: Schema.optional(Schema.String),
                  service: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                      path: Schema.optional(Schema.String),
                      port: Schema.optional(Schema.Number),
                    }),
                  ),
                  url: Schema.optional(Schema.String),
                }),
              ),
              conversionReviewVersions: Schema.Array(Schema.String),
            }),
          ),
        }),
      ),
      group: Schema.String,
      names: Schema.Struct({
        categories: Schema.optional(Schema.Array(Schema.String)),
        kind: Schema.String,
        listKind: Schema.optional(Schema.String),
        plural: Schema.String,
        shortNames: Schema.optional(Schema.Array(Schema.String)),
        singular: Schema.optional(Schema.String),
      }),
      preserveUnknownFields: Schema.optional(Schema.Boolean),
      scope: Schema.String,
      versions: Schema.Array(
        Schema.Struct({
          additionalPrinterColumns: Schema.optional(
            Schema.Array(
              Schema.Struct({
                description: Schema.optional(Schema.String),
                format: Schema.optional(Schema.String),
                jsonPath: Schema.String,
                name: Schema.String,
                priority: Schema.optional(Schema.Number),
                type: Schema.String,
              }),
            ),
          ),
          deprecated: Schema.optional(Schema.Boolean),
          deprecationWarning: Schema.optional(Schema.String),
          name: Schema.String,
          schema: Schema.optional(
            Schema.Struct({
              openAPIV3Schema: Schema.optional(
                Schema.Struct({
                  $ref: Schema.optional(Schema.String),
                  $schema: Schema.optional(Schema.String),
                  additionalItems: Schema.optional(Schema.Unknown),
                  additionalProperties: Schema.optional(Schema.Unknown),
                  allOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  anyOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  default: Schema.optional(Schema.Unknown),
                  definitions: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  dependencies: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  description: Schema.optional(Schema.String),
                  enum: Schema.optional(Schema.Array(Schema.Unknown)),
                  example: Schema.optional(Schema.Unknown),
                  exclusiveMaximum: Schema.optional(Schema.Boolean),
                  exclusiveMinimum: Schema.optional(Schema.Boolean),
                  externalDocs: Schema.optional(
                    Schema.Struct({
                      description: Schema.optional(Schema.String),
                      url: Schema.optional(Schema.String),
                    }),
                  ),
                  format: Schema.optional(Schema.String),
                  id: Schema.optional(Schema.String),
                  items: Schema.optional(Schema.Unknown),
                  maxItems: Schema.optional(Schema.Number),
                  maxLength: Schema.optional(Schema.Number),
                  maxProperties: Schema.optional(Schema.Number),
                  maximum: Schema.optional(Schema.Number),
                  minItems: Schema.optional(Schema.Number),
                  minLength: Schema.optional(Schema.Number),
                  minProperties: Schema.optional(Schema.Number),
                  minimum: Schema.optional(Schema.Number),
                  multipleOf: Schema.optional(Schema.Number),
                  not: Schema.optional(Schema.Unknown),
                  nullable: Schema.optional(Schema.Boolean),
                  oneOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  pattern: Schema.optional(Schema.String),
                  patternProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  properties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  required: Schema.optional(Schema.Array(Schema.String)),
                  title: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                  uniqueItems: Schema.optional(Schema.Boolean),
                  "x-kubernetes-embedded-resource": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-int-or-string": Schema.optional(Schema.Boolean),
                  "x-kubernetes-list-map-keys": Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  "x-kubernetes-list-type": Schema.optional(Schema.String),
                  "x-kubernetes-map-type": Schema.optional(Schema.String),
                  "x-kubernetes-preserve-unknown-fields": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-validations": Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        fieldPath: Schema.optional(Schema.String),
                        message: Schema.optional(Schema.String),
                        messageExpression: Schema.optional(Schema.String),
                        optionalOldSelf: Schema.optional(Schema.Boolean),
                        reason: Schema.optional(Schema.String),
                        rule: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
          selectableFields: Schema.optional(
            Schema.Array(
              Schema.Struct({
                jsonPath: Schema.String,
              }),
            ),
          ),
          served: Schema.Boolean,
          storage: Schema.Boolean,
          subresources: Schema.optional(
            Schema.Struct({
              scale: Schema.optional(
                Schema.Struct({
                  labelSelectorPath: Schema.optional(Schema.String),
                  specReplicasPath: Schema.String,
                  statusReplicasPath: Schema.String,
                }),
              ),
              status: Schema.optional(Schema.Unknown),
            }),
          ),
        }),
      ),
    }),
    status: Schema.optional(
      Schema.Struct({
        acceptedNames: Schema.optional(
          Schema.Struct({
            categories: Schema.optional(Schema.Array(Schema.String)),
            kind: Schema.String,
            listKind: Schema.optional(Schema.String),
            plural: Schema.String,
            shortNames: Schema.optional(Schema.Array(Schema.String)),
            singular: Schema.optional(Schema.String),
          }),
        ),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        observedGeneration: Schema.optional(Schema.Number),
        storedVersions: Schema.optional(Schema.Array(Schema.String)),
      }),
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
      conversion: Schema.optional(
        Schema.Struct({
          strategy: Schema.String,
          webhook: Schema.optional(
            Schema.Struct({
              clientConfig: Schema.optional(
                Schema.Struct({
                  caBundle: Schema.optional(Schema.String),
                  service: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                      path: Schema.optional(Schema.String),
                      port: Schema.optional(Schema.Number),
                    }),
                  ),
                  url: Schema.optional(Schema.String),
                }),
              ),
              conversionReviewVersions: Schema.Array(Schema.String),
            }),
          ),
        }),
      ),
      group: Schema.String,
      names: Schema.Struct({
        categories: Schema.optional(Schema.Array(Schema.String)),
        kind: Schema.String,
        listKind: Schema.optional(Schema.String),
        plural: Schema.String,
        shortNames: Schema.optional(Schema.Array(Schema.String)),
        singular: Schema.optional(Schema.String),
      }),
      preserveUnknownFields: Schema.optional(Schema.Boolean),
      scope: Schema.String,
      versions: Schema.Array(
        Schema.Struct({
          additionalPrinterColumns: Schema.optional(
            Schema.Array(
              Schema.Struct({
                description: Schema.optional(Schema.String),
                format: Schema.optional(Schema.String),
                jsonPath: Schema.String,
                name: Schema.String,
                priority: Schema.optional(Schema.Number),
                type: Schema.String,
              }),
            ),
          ),
          deprecated: Schema.optional(Schema.Boolean),
          deprecationWarning: Schema.optional(Schema.String),
          name: Schema.String,
          schema: Schema.optional(
            Schema.Struct({
              openAPIV3Schema: Schema.optional(
                Schema.Struct({
                  $ref: Schema.optional(Schema.String),
                  $schema: Schema.optional(Schema.String),
                  additionalItems: Schema.optional(Schema.Unknown),
                  additionalProperties: Schema.optional(Schema.Unknown),
                  allOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  anyOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  default: Schema.optional(Schema.Unknown),
                  definitions: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  dependencies: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  description: Schema.optional(Schema.String),
                  enum: Schema.optional(Schema.Array(Schema.Unknown)),
                  example: Schema.optional(Schema.Unknown),
                  exclusiveMaximum: Schema.optional(Schema.Boolean),
                  exclusiveMinimum: Schema.optional(Schema.Boolean),
                  externalDocs: Schema.optional(
                    Schema.Struct({
                      description: Schema.optional(Schema.String),
                      url: Schema.optional(Schema.String),
                    }),
                  ),
                  format: Schema.optional(Schema.String),
                  id: Schema.optional(Schema.String),
                  items: Schema.optional(Schema.Unknown),
                  maxItems: Schema.optional(Schema.Number),
                  maxLength: Schema.optional(Schema.Number),
                  maxProperties: Schema.optional(Schema.Number),
                  maximum: Schema.optional(Schema.Number),
                  minItems: Schema.optional(Schema.Number),
                  minLength: Schema.optional(Schema.Number),
                  minProperties: Schema.optional(Schema.Number),
                  minimum: Schema.optional(Schema.Number),
                  multipleOf: Schema.optional(Schema.Number),
                  not: Schema.optional(Schema.Unknown),
                  nullable: Schema.optional(Schema.Boolean),
                  oneOf: Schema.optional(Schema.Array(Schema.Unknown)),
                  pattern: Schema.optional(Schema.String),
                  patternProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  properties: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  required: Schema.optional(Schema.Array(Schema.String)),
                  title: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                  uniqueItems: Schema.optional(Schema.Boolean),
                  "x-kubernetes-embedded-resource": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-int-or-string": Schema.optional(Schema.Boolean),
                  "x-kubernetes-list-map-keys": Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  "x-kubernetes-list-type": Schema.optional(Schema.String),
                  "x-kubernetes-map-type": Schema.optional(Schema.String),
                  "x-kubernetes-preserve-unknown-fields": Schema.optional(
                    Schema.Boolean,
                  ),
                  "x-kubernetes-validations": Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        fieldPath: Schema.optional(Schema.String),
                        message: Schema.optional(Schema.String),
                        messageExpression: Schema.optional(Schema.String),
                        optionalOldSelf: Schema.optional(Schema.Boolean),
                        reason: Schema.optional(Schema.String),
                        rule: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
          selectableFields: Schema.optional(
            Schema.Array(
              Schema.Struct({
                jsonPath: Schema.String,
              }),
            ),
          ),
          served: Schema.Boolean,
          storage: Schema.Boolean,
          subresources: Schema.optional(
            Schema.Struct({
              scale: Schema.optional(
                Schema.Struct({
                  labelSelectorPath: Schema.optional(Schema.String),
                  specReplicasPath: Schema.String,
                  statusReplicasPath: Schema.String,
                }),
              ),
              status: Schema.optional(Schema.Unknown),
            }),
          ),
        }),
      ),
    }),
    status: Schema.optional(
      Schema.Struct({
        acceptedNames: Schema.optional(
          Schema.Struct({
            categories: Schema.optional(Schema.Array(Schema.String)),
            kind: Schema.String,
            listKind: Schema.optional(Schema.String),
            plural: Schema.String,
            shortNames: Schema.optional(Schema.Array(Schema.String)),
            singular: Schema.optional(Schema.String),
          }),
        ),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        observedGeneration: Schema.optional(Schema.Number),
        storedVersions: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type ReplaceApiextensionsV1CustomResourceDefinitionStatusOutput =
  typeof ReplaceApiextensionsV1CustomResourceDefinitionStatusOutput.Type;

// The operation
/**
 * replace status of the specified CustomResourceDefinition
 *
 * @param name - name of the CustomResourceDefinition
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
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
      path: "/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/{name}",
    }),
  );
export type WatchApiextensionsV1CustomResourceDefinitionInput =
  typeof WatchApiextensionsV1CustomResourceDefinitionInput.Type;

// Output Schema
export const WatchApiextensionsV1CustomResourceDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchApiextensionsV1CustomResourceDefinitionOutput =
  typeof WatchApiextensionsV1CustomResourceDefinitionOutput.Type;

// The operation
/**
 * watch changes to an object of kind CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the CustomResourceDefinition
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
export const watchApiextensionsV1CustomResourceDefinition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchApiextensionsV1CustomResourceDefinitionInput,
    outputSchema: WatchApiextensionsV1CustomResourceDefinitionOutput,
  }));
// Input Schema
export const WatchApiextensionsV1CustomResourceDefinitionListInput =
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
      path: "/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions",
    }),
  );
export type WatchApiextensionsV1CustomResourceDefinitionListInput =
  typeof WatchApiextensionsV1CustomResourceDefinitionListInput.Type;

// Output Schema
export const WatchApiextensionsV1CustomResourceDefinitionListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchApiextensionsV1CustomResourceDefinitionListOutput =
  typeof WatchApiextensionsV1CustomResourceDefinitionListOutput.Type;

// The operation
/**
 * watch individual changes to a list of CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchApiextensionsV1CustomResourceDefinitionList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchApiextensionsV1CustomResourceDefinitionListInput,
    outputSchema: WatchApiextensionsV1CustomResourceDefinitionListOutput,
  }));
