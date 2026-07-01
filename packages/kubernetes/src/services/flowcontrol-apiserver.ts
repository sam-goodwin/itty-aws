/**
 * Kubernetes Flow Control API Server API
 *
 * Generated from the Kubernetes OpenAPI spec.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import { Conflict, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface CreateFlowcontrolApiserverV1FlowSchemaInput {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    distinguisherMethod?: { type: string };
    matchingPrecedence?: number;
    priorityLevelConfiguration: { name: string };
    rules?: {
      nonResourceRules?: { nonResourceURLs: string[]; verbs: string[] }[];
      resourceRules?: {
        apiGroups: string[];
        clusterScope?: boolean;
        namespaces?: string[];
        resources: string[];
        verbs: string[];
      }[];
      subjects: {
        group?: { name: string };
        kind: string;
        serviceAccount?: { name: string; namespace: string };
        user?: { name: string };
      }[];
    }[];
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const CreateFlowcontrolApiserverV1FlowSchemaInput =
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
    spec: Schema.optional(
      Schema.Struct({
        distinguisherMethod: Schema.optional(
          Schema.Struct({
            type: Schema.String,
          }),
        ),
        matchingPrecedence: Schema.optional(Schema.Number),
        priorityLevelConfiguration: Schema.Struct({
          name: Schema.String,
        }),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              nonResourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    nonResourceURLs: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              resourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    apiGroups: Schema.Array(Schema.String),
                    clusterScope: Schema.optional(Schema.Boolean),
                    namespaces: Schema.optional(Schema.Array(Schema.String)),
                    resources: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              subjects: Schema.Array(
                Schema.Struct({
                  group: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                  kind: Schema.String,
                  serviceAccount: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                    }),
                  ),
                  user: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas",
    }),
  ) as unknown as Schema.Codec<CreateFlowcontrolApiserverV1FlowSchemaInput>;

// Output Schema
export interface CreateFlowcontrolApiserverV1FlowSchemaOutput {
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    distinguisherMethod?: { type: string };
    matchingPrecedence?: number;
    priorityLevelConfiguration: { name: string };
    rules?: {
      nonResourceRules?: { nonResourceURLs: string[]; verbs: string[] }[];
      resourceRules?: {
        apiGroups: string[];
        clusterScope?: boolean;
        namespaces?: string[];
        resources: string[];
        verbs: string[];
      }[];
      subjects: {
        group?: { name: string };
        kind: string;
        serviceAccount?: { name: string; namespace: string };
        user?: { name: string };
      }[];
    }[];
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const CreateFlowcontrolApiserverV1FlowSchemaOutput =
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
        distinguisherMethod: Schema.optional(
          Schema.Struct({
            type: Schema.String,
          }),
        ),
        matchingPrecedence: Schema.optional(Schema.Number),
        priorityLevelConfiguration: Schema.Struct({
          name: Schema.String,
        }),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              nonResourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    nonResourceURLs: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              resourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    apiGroups: Schema.Array(Schema.String),
                    clusterScope: Schema.optional(Schema.Boolean),
                    namespaces: Schema.optional(Schema.Array(Schema.String)),
                    resources: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              subjects: Schema.Array(
                Schema.Struct({
                  group: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                  kind: Schema.String,
                  serviceAccount: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                    }),
                  ),
                  user: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<CreateFlowcontrolApiserverV1FlowSchemaOutput>;

// The operation
/**
 * create a FlowSchema
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createFlowcontrolApiserverV1FlowSchema =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateFlowcontrolApiserverV1FlowSchemaInput,
    outputSchema: CreateFlowcontrolApiserverV1FlowSchemaOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface CreateFlowcontrolApiserverV1PriorityLevelConfigurationInput {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    exempt?: { lendablePercent?: number; nominalConcurrencyShares?: number };
    limited?: {
      borrowingLimitPercent?: number;
      lendablePercent?: number;
      limitResponse?: {
        queuing?: {
          handSize?: number;
          queueLengthLimit?: number;
          queues?: number;
        };
        type: string;
      };
      nominalConcurrencyShares?: number;
    };
    type: string;
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const CreateFlowcontrolApiserverV1PriorityLevelConfigurationInput =
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
    spec: Schema.optional(
      Schema.Struct({
        exempt: Schema.optional(
          Schema.Struct({
            lendablePercent: Schema.optional(Schema.Number),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        limited: Schema.optional(
          Schema.Struct({
            borrowingLimitPercent: Schema.optional(Schema.Number),
            lendablePercent: Schema.optional(Schema.Number),
            limitResponse: Schema.optional(
              Schema.Struct({
                queuing: Schema.optional(
                  Schema.Struct({
                    handSize: Schema.optional(Schema.Number),
                    queueLengthLimit: Schema.optional(Schema.Number),
                    queues: Schema.optional(Schema.Number),
                  }),
                ),
                type: Schema.String,
              }),
            ),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        type: Schema.String,
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations",
    }),
  ) as unknown as Schema.Codec<CreateFlowcontrolApiserverV1PriorityLevelConfigurationInput>;

// Output Schema
export interface CreateFlowcontrolApiserverV1PriorityLevelConfigurationOutput {
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    exempt?: { lendablePercent?: number; nominalConcurrencyShares?: number };
    limited?: {
      borrowingLimitPercent?: number;
      lendablePercent?: number;
      limitResponse?: {
        queuing?: {
          handSize?: number;
          queueLengthLimit?: number;
          queues?: number;
        };
        type: string;
      };
      nominalConcurrencyShares?: number;
    };
    type: string;
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const CreateFlowcontrolApiserverV1PriorityLevelConfigurationOutput =
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
        exempt: Schema.optional(
          Schema.Struct({
            lendablePercent: Schema.optional(Schema.Number),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        limited: Schema.optional(
          Schema.Struct({
            borrowingLimitPercent: Schema.optional(Schema.Number),
            lendablePercent: Schema.optional(Schema.Number),
            limitResponse: Schema.optional(
              Schema.Struct({
                queuing: Schema.optional(
                  Schema.Struct({
                    handSize: Schema.optional(Schema.Number),
                    queueLengthLimit: Schema.optional(Schema.Number),
                    queues: Schema.optional(Schema.Number),
                  }),
                ),
                type: Schema.String,
              }),
            ),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        type: Schema.String,
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<CreateFlowcontrolApiserverV1PriorityLevelConfigurationOutput>;

// The operation
/**
 * create a PriorityLevelConfiguration
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createFlowcontrolApiserverV1PriorityLevelConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateFlowcontrolApiserverV1PriorityLevelConfigurationInput,
    outputSchema: CreateFlowcontrolApiserverV1PriorityLevelConfigurationOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface DeleteFlowcontrolApiserverV1CollectionFlowSchemaInput {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  ignoreStoreReadErrorWithClusterBreakingPotential?: boolean;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  sendInitialEvents?: boolean;
  shardSelector?: string;
  timeoutSeconds?: number;
  apiVersion?: string;
  kind?: string;
  preconditions?: { resourceVersion?: string; uid?: string };
}
export const DeleteFlowcontrolApiserverV1CollectionFlowSchemaInput =
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
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas",
    }),
  ) as unknown as Schema.Codec<DeleteFlowcontrolApiserverV1CollectionFlowSchemaInput>;

// Output Schema
export interface DeleteFlowcontrolApiserverV1CollectionFlowSchemaOutput {
  apiVersion?: string;
  code?: number;
  details?: {
    causes?: { field?: string; message?: string; reason?: string }[];
    group?: string;
    kind?: string;
    name?: string;
    retryAfterSeconds?: number;
    uid?: string;
  };
  kind?: string;
  message?: string;
  metadata?: {
    continue?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
    selfLink?: string;
    shardInfo?: { selector: string };
  };
  reason?: string;
  status?: string;
}
export const DeleteFlowcontrolApiserverV1CollectionFlowSchemaOutput =
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
  }) as unknown as Schema.Codec<DeleteFlowcontrolApiserverV1CollectionFlowSchemaOutput>;

// The operation
/**
 * delete collection of FlowSchema
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
export const deleteFlowcontrolApiserverV1CollectionFlowSchema =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteFlowcontrolApiserverV1CollectionFlowSchemaInput,
    outputSchema: DeleteFlowcontrolApiserverV1CollectionFlowSchemaOutput,
  }));
// Input Schema
export interface DeleteFlowcontrolApiserverV1CollectionPriorityLevelConfigurationInput {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  ignoreStoreReadErrorWithClusterBreakingPotential?: boolean;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  sendInitialEvents?: boolean;
  shardSelector?: string;
  timeoutSeconds?: number;
  apiVersion?: string;
  kind?: string;
  preconditions?: { resourceVersion?: string; uid?: string };
}
export const DeleteFlowcontrolApiserverV1CollectionPriorityLevelConfigurationInput =
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
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations",
    }),
  ) as unknown as Schema.Codec<DeleteFlowcontrolApiserverV1CollectionPriorityLevelConfigurationInput>;

// Output Schema
export interface DeleteFlowcontrolApiserverV1CollectionPriorityLevelConfigurationOutput {
  apiVersion?: string;
  code?: number;
  details?: {
    causes?: { field?: string; message?: string; reason?: string }[];
    group?: string;
    kind?: string;
    name?: string;
    retryAfterSeconds?: number;
    uid?: string;
  };
  kind?: string;
  message?: string;
  metadata?: {
    continue?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
    selfLink?: string;
    shardInfo?: { selector: string };
  };
  reason?: string;
  status?: string;
}
export const DeleteFlowcontrolApiserverV1CollectionPriorityLevelConfigurationOutput =
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
  }) as unknown as Schema.Codec<DeleteFlowcontrolApiserverV1CollectionPriorityLevelConfigurationOutput>;

// The operation
/**
 * delete collection of PriorityLevelConfiguration
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
export const deleteFlowcontrolApiserverV1CollectionPriorityLevelConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      DeleteFlowcontrolApiserverV1CollectionPriorityLevelConfigurationInput,
    outputSchema:
      DeleteFlowcontrolApiserverV1CollectionPriorityLevelConfigurationOutput,
  }));
// Input Schema
export interface DeleteFlowcontrolApiserverV1FlowSchemaInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  ignoreStoreReadErrorWithClusterBreakingPotential?: boolean;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  apiVersion?: string;
  kind?: string;
  preconditions?: { resourceVersion?: string; uid?: string };
}
export const DeleteFlowcontrolApiserverV1FlowSchemaInput =
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
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}",
    }),
  ) as unknown as Schema.Codec<DeleteFlowcontrolApiserverV1FlowSchemaInput>;

// Output Schema
export interface DeleteFlowcontrolApiserverV1FlowSchemaOutput {
  apiVersion?: string;
  code?: number;
  details?: {
    causes?: { field?: string; message?: string; reason?: string }[];
    group?: string;
    kind?: string;
    name?: string;
    retryAfterSeconds?: number;
    uid?: string;
  };
  kind?: string;
  message?: string;
  metadata?: {
    continue?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
    selfLink?: string;
    shardInfo?: { selector: string };
  };
  reason?: string;
  status?: string;
}
export const DeleteFlowcontrolApiserverV1FlowSchemaOutput =
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
  }) as unknown as Schema.Codec<DeleteFlowcontrolApiserverV1FlowSchemaOutput>;

// The operation
/**
 * delete a FlowSchema
 *
 * @param name - name of the FlowSchema
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteFlowcontrolApiserverV1FlowSchema =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteFlowcontrolApiserverV1FlowSchemaInput,
    outputSchema: DeleteFlowcontrolApiserverV1FlowSchemaOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export interface DeleteFlowcontrolApiserverV1PriorityLevelConfigurationInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  ignoreStoreReadErrorWithClusterBreakingPotential?: boolean;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  apiVersion?: string;
  kind?: string;
  preconditions?: { resourceVersion?: string; uid?: string };
}
export const DeleteFlowcontrolApiserverV1PriorityLevelConfigurationInput =
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
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}",
    }),
  ) as unknown as Schema.Codec<DeleteFlowcontrolApiserverV1PriorityLevelConfigurationInput>;

// Output Schema
export interface DeleteFlowcontrolApiserverV1PriorityLevelConfigurationOutput {
  apiVersion?: string;
  code?: number;
  details?: {
    causes?: { field?: string; message?: string; reason?: string }[];
    group?: string;
    kind?: string;
    name?: string;
    retryAfterSeconds?: number;
    uid?: string;
  };
  kind?: string;
  message?: string;
  metadata?: {
    continue?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
    selfLink?: string;
    shardInfo?: { selector: string };
  };
  reason?: string;
  status?: string;
}
export const DeleteFlowcontrolApiserverV1PriorityLevelConfigurationOutput =
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
  }) as unknown as Schema.Codec<DeleteFlowcontrolApiserverV1PriorityLevelConfigurationOutput>;

// The operation
/**
 * delete a PriorityLevelConfiguration
 *
 * @param name - name of the PriorityLevelConfiguration
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteFlowcontrolApiserverV1PriorityLevelConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteFlowcontrolApiserverV1PriorityLevelConfigurationInput,
    outputSchema: DeleteFlowcontrolApiserverV1PriorityLevelConfigurationOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export interface GetFlowcontrolApiserverAPIGroupInput {}
export const GetFlowcontrolApiserverAPIGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/flowcontrol.apiserver.k8s.io/" }),
  ) as unknown as Schema.Codec<GetFlowcontrolApiserverAPIGroupInput>;

// Output Schema
export interface GetFlowcontrolApiserverAPIGroupOutput {
  apiVersion?: string;
  kind?: string;
  name: string;
  preferredVersion?: { groupVersion: string; version: string };
  serverAddressByClientCIDRs?: { clientCIDR: string; serverAddress: string }[];
  versions: { groupVersion: string; version: string }[];
}
export const GetFlowcontrolApiserverAPIGroupOutput =
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
  }) as unknown as Schema.Codec<GetFlowcontrolApiserverAPIGroupOutput>;

// The operation
/**
 * get information of a group
 */
export const getFlowcontrolApiserverAPIGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetFlowcontrolApiserverAPIGroupInput,
    outputSchema: GetFlowcontrolApiserverAPIGroupOutput,
  }));
// Input Schema
export interface GetFlowcontrolApiserverV1APIResourcesInput {}
export const GetFlowcontrolApiserverV1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/flowcontrol.apiserver.k8s.io/v1/" }),
  ) as unknown as Schema.Codec<GetFlowcontrolApiserverV1APIResourcesInput>;

// Output Schema
export interface GetFlowcontrolApiserverV1APIResourcesOutput {
  apiVersion?: string;
  groupVersion: string;
  kind?: string;
  resources: {
    categories?: string[];
    group?: string;
    kind: string;
    name: string;
    namespaced: boolean;
    shortNames?: string[];
    singularName: string;
    storageVersionHash?: string;
    verbs: string[];
    version?: string;
  }[];
}
export const GetFlowcontrolApiserverV1APIResourcesOutput =
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
  }) as unknown as Schema.Codec<GetFlowcontrolApiserverV1APIResourcesOutput>;

// The operation
/**
 * get available resources
 */
export const getFlowcontrolApiserverV1APIResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetFlowcontrolApiserverV1APIResourcesInput,
    outputSchema: GetFlowcontrolApiserverV1APIResourcesOutput,
  }));
// Input Schema
export interface ListFlowcontrolApiserverV1FlowSchemaInput {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  sendInitialEvents?: boolean;
  shardSelector?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export const ListFlowcontrolApiserverV1FlowSchemaInput =
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
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas",
    }),
  ) as unknown as Schema.Codec<ListFlowcontrolApiserverV1FlowSchemaInput>;

// Output Schema
export interface ListFlowcontrolApiserverV1FlowSchemaOutput {
  apiVersion?: string;
  items: {
    apiVersion?: string;
    kind?: string;
    metadata?: {
      annotations?: Record<string, string>;
      creationTimestamp?: string;
      deletionGracePeriodSeconds?: number;
      deletionTimestamp?: string;
      finalizers?: string[];
      generateName?: string;
      generation?: number;
      labels?: Record<string, string>;
      managedFields?: {
        apiVersion?: string;
        fieldsType?: string;
        fieldsV1?: unknown;
        manager?: string;
        operation?: string;
        subresource?: string;
        time?: string;
      }[];
      name?: string;
      namespace?: string;
      ownerReferences?: {
        apiVersion: string;
        blockOwnerDeletion?: boolean;
        controller?: boolean;
        kind: string;
        name: string;
        uid: string;
      }[];
      resourceVersion?: string;
      selfLink?: string;
      uid?: string;
    };
    spec?: {
      distinguisherMethod?: { type: string };
      matchingPrecedence?: number;
      priorityLevelConfiguration: { name: string };
      rules?: {
        nonResourceRules?: { nonResourceURLs: string[]; verbs: string[] }[];
        resourceRules?: {
          apiGroups: string[];
          clusterScope?: boolean;
          namespaces?: string[];
          resources: string[];
          verbs: string[];
        }[];
        subjects: {
          group?: { name: string };
          kind: string;
          serviceAccount?: { name: string; namespace: string };
          user?: { name: string };
        }[];
      }[];
    };
    status?: {
      conditions?: {
        lastTransitionTime?: string;
        message?: string;
        reason?: string;
        status?: string;
        type?: string;
      }[];
    };
  }[];
  kind?: string;
  metadata?: {
    continue?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
    selfLink?: string;
    shardInfo?: { selector: string };
  };
}
export const ListFlowcontrolApiserverV1FlowSchemaOutput =
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
            distinguisherMethod: Schema.optional(
              Schema.Struct({
                type: Schema.String,
              }),
            ),
            matchingPrecedence: Schema.optional(Schema.Number),
            priorityLevelConfiguration: Schema.Struct({
              name: Schema.String,
            }),
            rules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  nonResourceRules: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        nonResourceURLs: Schema.Array(Schema.String),
                        verbs: Schema.Array(Schema.String),
                      }),
                    ),
                  ),
                  resourceRules: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        apiGroups: Schema.Array(Schema.String),
                        clusterScope: Schema.optional(Schema.Boolean),
                        namespaces: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        resources: Schema.Array(Schema.String),
                        verbs: Schema.Array(Schema.String),
                      }),
                    ),
                  ),
                  subjects: Schema.Array(
                    Schema.Struct({
                      group: Schema.optional(
                        Schema.Struct({
                          name: Schema.String,
                        }),
                      ),
                      kind: Schema.String,
                      serviceAccount: Schema.optional(
                        Schema.Struct({
                          name: Schema.String,
                          namespace: Schema.String,
                        }),
                      ),
                      user: Schema.optional(
                        Schema.Struct({
                          name: Schema.String,
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            ),
          }),
        ),
        status: Schema.optional(
          Schema.Struct({
            conditions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  lastTransitionTime: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  reason: Schema.optional(Schema.String),
                  status: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                }),
              ),
            ),
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
  }) as unknown as Schema.Codec<ListFlowcontrolApiserverV1FlowSchemaOutput>;

// The operation
/**
 * list or watch objects of kind FlowSchema
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
export const listFlowcontrolApiserverV1FlowSchema =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListFlowcontrolApiserverV1FlowSchemaInput,
    outputSchema: ListFlowcontrolApiserverV1FlowSchemaOutput,
  }));
// Input Schema
export interface ListFlowcontrolApiserverV1PriorityLevelConfigurationInput {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  sendInitialEvents?: boolean;
  shardSelector?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export const ListFlowcontrolApiserverV1PriorityLevelConfigurationInput =
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
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations",
    }),
  ) as unknown as Schema.Codec<ListFlowcontrolApiserverV1PriorityLevelConfigurationInput>;

// Output Schema
export interface ListFlowcontrolApiserverV1PriorityLevelConfigurationOutput {
  apiVersion?: string;
  items: {
    apiVersion?: string;
    kind?: string;
    metadata?: {
      annotations?: Record<string, string>;
      creationTimestamp?: string;
      deletionGracePeriodSeconds?: number;
      deletionTimestamp?: string;
      finalizers?: string[];
      generateName?: string;
      generation?: number;
      labels?: Record<string, string>;
      managedFields?: {
        apiVersion?: string;
        fieldsType?: string;
        fieldsV1?: unknown;
        manager?: string;
        operation?: string;
        subresource?: string;
        time?: string;
      }[];
      name?: string;
      namespace?: string;
      ownerReferences?: {
        apiVersion: string;
        blockOwnerDeletion?: boolean;
        controller?: boolean;
        kind: string;
        name: string;
        uid: string;
      }[];
      resourceVersion?: string;
      selfLink?: string;
      uid?: string;
    };
    spec?: {
      exempt?: { lendablePercent?: number; nominalConcurrencyShares?: number };
      limited?: {
        borrowingLimitPercent?: number;
        lendablePercent?: number;
        limitResponse?: {
          queuing?: {
            handSize?: number;
            queueLengthLimit?: number;
            queues?: number;
          };
          type: string;
        };
        nominalConcurrencyShares?: number;
      };
      type: string;
    };
    status?: {
      conditions?: {
        lastTransitionTime?: string;
        message?: string;
        reason?: string;
        status?: string;
        type?: string;
      }[];
    };
  }[];
  kind?: string;
  metadata?: {
    continue?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
    selfLink?: string;
    shardInfo?: { selector: string };
  };
}
export const ListFlowcontrolApiserverV1PriorityLevelConfigurationOutput =
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
            exempt: Schema.optional(
              Schema.Struct({
                lendablePercent: Schema.optional(Schema.Number),
                nominalConcurrencyShares: Schema.optional(Schema.Number),
              }),
            ),
            limited: Schema.optional(
              Schema.Struct({
                borrowingLimitPercent: Schema.optional(Schema.Number),
                lendablePercent: Schema.optional(Schema.Number),
                limitResponse: Schema.optional(
                  Schema.Struct({
                    queuing: Schema.optional(
                      Schema.Struct({
                        handSize: Schema.optional(Schema.Number),
                        queueLengthLimit: Schema.optional(Schema.Number),
                        queues: Schema.optional(Schema.Number),
                      }),
                    ),
                    type: Schema.String,
                  }),
                ),
                nominalConcurrencyShares: Schema.optional(Schema.Number),
              }),
            ),
            type: Schema.String,
          }),
        ),
        status: Schema.optional(
          Schema.Struct({
            conditions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  lastTransitionTime: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  reason: Schema.optional(Schema.String),
                  status: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                }),
              ),
            ),
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
  }) as unknown as Schema.Codec<ListFlowcontrolApiserverV1PriorityLevelConfigurationOutput>;

// The operation
/**
 * list or watch objects of kind PriorityLevelConfiguration
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
export const listFlowcontrolApiserverV1PriorityLevelConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListFlowcontrolApiserverV1PriorityLevelConfigurationInput,
    outputSchema: ListFlowcontrolApiserverV1PriorityLevelConfigurationOutput,
  }));
// Input Schema
export interface PatchFlowcontrolApiserverV1FlowSchemaInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  force?: boolean;
}
export const PatchFlowcontrolApiserverV1FlowSchemaInput =
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
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}",
    }),
  ) as unknown as Schema.Codec<PatchFlowcontrolApiserverV1FlowSchemaInput>;

// Output Schema
export interface PatchFlowcontrolApiserverV1FlowSchemaOutput {
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    distinguisherMethod?: { type: string };
    matchingPrecedence?: number;
    priorityLevelConfiguration: { name: string };
    rules?: {
      nonResourceRules?: { nonResourceURLs: string[]; verbs: string[] }[];
      resourceRules?: {
        apiGroups: string[];
        clusterScope?: boolean;
        namespaces?: string[];
        resources: string[];
        verbs: string[];
      }[];
      subjects: {
        group?: { name: string };
        kind: string;
        serviceAccount?: { name: string; namespace: string };
        user?: { name: string };
      }[];
    }[];
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const PatchFlowcontrolApiserverV1FlowSchemaOutput =
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
        distinguisherMethod: Schema.optional(
          Schema.Struct({
            type: Schema.String,
          }),
        ),
        matchingPrecedence: Schema.optional(Schema.Number),
        priorityLevelConfiguration: Schema.Struct({
          name: Schema.String,
        }),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              nonResourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    nonResourceURLs: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              resourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    apiGroups: Schema.Array(Schema.String),
                    clusterScope: Schema.optional(Schema.Boolean),
                    namespaces: Schema.optional(Schema.Array(Schema.String)),
                    resources: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              subjects: Schema.Array(
                Schema.Struct({
                  group: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                  kind: Schema.String,
                  serviceAccount: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                    }),
                  ),
                  user: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<PatchFlowcontrolApiserverV1FlowSchemaOutput>;

// The operation
/**
 * partially update the specified FlowSchema
 *
 * @param name - name of the FlowSchema
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchFlowcontrolApiserverV1FlowSchema =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchFlowcontrolApiserverV1FlowSchemaInput,
    outputSchema: PatchFlowcontrolApiserverV1FlowSchemaOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface PatchFlowcontrolApiserverV1FlowSchemaStatusInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  force?: boolean;
}
export const PatchFlowcontrolApiserverV1FlowSchemaStatusInput =
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
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}/status",
    }),
  ) as unknown as Schema.Codec<PatchFlowcontrolApiserverV1FlowSchemaStatusInput>;

// Output Schema
export interface PatchFlowcontrolApiserverV1FlowSchemaStatusOutput {
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    distinguisherMethod?: { type: string };
    matchingPrecedence?: number;
    priorityLevelConfiguration: { name: string };
    rules?: {
      nonResourceRules?: { nonResourceURLs: string[]; verbs: string[] }[];
      resourceRules?: {
        apiGroups: string[];
        clusterScope?: boolean;
        namespaces?: string[];
        resources: string[];
        verbs: string[];
      }[];
      subjects: {
        group?: { name: string };
        kind: string;
        serviceAccount?: { name: string; namespace: string };
        user?: { name: string };
      }[];
    }[];
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const PatchFlowcontrolApiserverV1FlowSchemaStatusOutput =
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
        distinguisherMethod: Schema.optional(
          Schema.Struct({
            type: Schema.String,
          }),
        ),
        matchingPrecedence: Schema.optional(Schema.Number),
        priorityLevelConfiguration: Schema.Struct({
          name: Schema.String,
        }),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              nonResourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    nonResourceURLs: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              resourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    apiGroups: Schema.Array(Schema.String),
                    clusterScope: Schema.optional(Schema.Boolean),
                    namespaces: Schema.optional(Schema.Array(Schema.String)),
                    resources: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              subjects: Schema.Array(
                Schema.Struct({
                  group: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                  kind: Schema.String,
                  serviceAccount: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                    }),
                  ),
                  user: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<PatchFlowcontrolApiserverV1FlowSchemaStatusOutput>;

// The operation
/**
 * partially update status of the specified FlowSchema
 *
 * @param name - name of the FlowSchema
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchFlowcontrolApiserverV1FlowSchemaStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchFlowcontrolApiserverV1FlowSchemaStatusInput,
    outputSchema: PatchFlowcontrolApiserverV1FlowSchemaStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface PatchFlowcontrolApiserverV1PriorityLevelConfigurationInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  force?: boolean;
}
export const PatchFlowcontrolApiserverV1PriorityLevelConfigurationInput =
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
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}",
    }),
  ) as unknown as Schema.Codec<PatchFlowcontrolApiserverV1PriorityLevelConfigurationInput>;

// Output Schema
export interface PatchFlowcontrolApiserverV1PriorityLevelConfigurationOutput {
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    exempt?: { lendablePercent?: number; nominalConcurrencyShares?: number };
    limited?: {
      borrowingLimitPercent?: number;
      lendablePercent?: number;
      limitResponse?: {
        queuing?: {
          handSize?: number;
          queueLengthLimit?: number;
          queues?: number;
        };
        type: string;
      };
      nominalConcurrencyShares?: number;
    };
    type: string;
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const PatchFlowcontrolApiserverV1PriorityLevelConfigurationOutput =
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
        exempt: Schema.optional(
          Schema.Struct({
            lendablePercent: Schema.optional(Schema.Number),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        limited: Schema.optional(
          Schema.Struct({
            borrowingLimitPercent: Schema.optional(Schema.Number),
            lendablePercent: Schema.optional(Schema.Number),
            limitResponse: Schema.optional(
              Schema.Struct({
                queuing: Schema.optional(
                  Schema.Struct({
                    handSize: Schema.optional(Schema.Number),
                    queueLengthLimit: Schema.optional(Schema.Number),
                    queues: Schema.optional(Schema.Number),
                  }),
                ),
                type: Schema.String,
              }),
            ),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        type: Schema.String,
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<PatchFlowcontrolApiserverV1PriorityLevelConfigurationOutput>;

// The operation
/**
 * partially update the specified PriorityLevelConfiguration
 *
 * @param name - name of the PriorityLevelConfiguration
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchFlowcontrolApiserverV1PriorityLevelConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchFlowcontrolApiserverV1PriorityLevelConfigurationInput,
    outputSchema: PatchFlowcontrolApiserverV1PriorityLevelConfigurationOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface PatchFlowcontrolApiserverV1PriorityLevelConfigurationStatusInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  force?: boolean;
}
export const PatchFlowcontrolApiserverV1PriorityLevelConfigurationStatusInput =
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
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}/status",
    }),
  ) as unknown as Schema.Codec<PatchFlowcontrolApiserverV1PriorityLevelConfigurationStatusInput>;

// Output Schema
export interface PatchFlowcontrolApiserverV1PriorityLevelConfigurationStatusOutput {
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    exempt?: { lendablePercent?: number; nominalConcurrencyShares?: number };
    limited?: {
      borrowingLimitPercent?: number;
      lendablePercent?: number;
      limitResponse?: {
        queuing?: {
          handSize?: number;
          queueLengthLimit?: number;
          queues?: number;
        };
        type: string;
      };
      nominalConcurrencyShares?: number;
    };
    type: string;
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const PatchFlowcontrolApiserverV1PriorityLevelConfigurationStatusOutput =
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
        exempt: Schema.optional(
          Schema.Struct({
            lendablePercent: Schema.optional(Schema.Number),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        limited: Schema.optional(
          Schema.Struct({
            borrowingLimitPercent: Schema.optional(Schema.Number),
            lendablePercent: Schema.optional(Schema.Number),
            limitResponse: Schema.optional(
              Schema.Struct({
                queuing: Schema.optional(
                  Schema.Struct({
                    handSize: Schema.optional(Schema.Number),
                    queueLengthLimit: Schema.optional(Schema.Number),
                    queues: Schema.optional(Schema.Number),
                  }),
                ),
                type: Schema.String,
              }),
            ),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        type: Schema.String,
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<PatchFlowcontrolApiserverV1PriorityLevelConfigurationStatusOutput>;

// The operation
/**
 * partially update status of the specified PriorityLevelConfiguration
 *
 * @param name - name of the PriorityLevelConfiguration
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchFlowcontrolApiserverV1PriorityLevelConfigurationStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PatchFlowcontrolApiserverV1PriorityLevelConfigurationStatusInput,
    outputSchema:
      PatchFlowcontrolApiserverV1PriorityLevelConfigurationStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface ReadFlowcontrolApiserverV1FlowSchemaInput {
  name: string;
  pretty?: string;
}
export const ReadFlowcontrolApiserverV1FlowSchemaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}",
    }),
  ) as unknown as Schema.Codec<ReadFlowcontrolApiserverV1FlowSchemaInput>;

// Output Schema
export interface ReadFlowcontrolApiserverV1FlowSchemaOutput {
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    distinguisherMethod?: { type: string };
    matchingPrecedence?: number;
    priorityLevelConfiguration: { name: string };
    rules?: {
      nonResourceRules?: { nonResourceURLs: string[]; verbs: string[] }[];
      resourceRules?: {
        apiGroups: string[];
        clusterScope?: boolean;
        namespaces?: string[];
        resources: string[];
        verbs: string[];
      }[];
      subjects: {
        group?: { name: string };
        kind: string;
        serviceAccount?: { name: string; namespace: string };
        user?: { name: string };
      }[];
    }[];
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const ReadFlowcontrolApiserverV1FlowSchemaOutput =
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
        distinguisherMethod: Schema.optional(
          Schema.Struct({
            type: Schema.String,
          }),
        ),
        matchingPrecedence: Schema.optional(Schema.Number),
        priorityLevelConfiguration: Schema.Struct({
          name: Schema.String,
        }),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              nonResourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    nonResourceURLs: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              resourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    apiGroups: Schema.Array(Schema.String),
                    clusterScope: Schema.optional(Schema.Boolean),
                    namespaces: Schema.optional(Schema.Array(Schema.String)),
                    resources: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              subjects: Schema.Array(
                Schema.Struct({
                  group: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                  kind: Schema.String,
                  serviceAccount: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                    }),
                  ),
                  user: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ReadFlowcontrolApiserverV1FlowSchemaOutput>;

// The operation
/**
 * read the specified FlowSchema
 *
 * @param name - name of the FlowSchema
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readFlowcontrolApiserverV1FlowSchema =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadFlowcontrolApiserverV1FlowSchemaInput,
    outputSchema: ReadFlowcontrolApiserverV1FlowSchemaOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export interface ReadFlowcontrolApiserverV1FlowSchemaStatusInput {
  name: string;
  pretty?: string;
}
export const ReadFlowcontrolApiserverV1FlowSchemaStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}/status",
    }),
  ) as unknown as Schema.Codec<ReadFlowcontrolApiserverV1FlowSchemaStatusInput>;

// Output Schema
export interface ReadFlowcontrolApiserverV1FlowSchemaStatusOutput {
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    distinguisherMethod?: { type: string };
    matchingPrecedence?: number;
    priorityLevelConfiguration: { name: string };
    rules?: {
      nonResourceRules?: { nonResourceURLs: string[]; verbs: string[] }[];
      resourceRules?: {
        apiGroups: string[];
        clusterScope?: boolean;
        namespaces?: string[];
        resources: string[];
        verbs: string[];
      }[];
      subjects: {
        group?: { name: string };
        kind: string;
        serviceAccount?: { name: string; namespace: string };
        user?: { name: string };
      }[];
    }[];
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const ReadFlowcontrolApiserverV1FlowSchemaStatusOutput =
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
        distinguisherMethod: Schema.optional(
          Schema.Struct({
            type: Schema.String,
          }),
        ),
        matchingPrecedence: Schema.optional(Schema.Number),
        priorityLevelConfiguration: Schema.Struct({
          name: Schema.String,
        }),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              nonResourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    nonResourceURLs: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              resourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    apiGroups: Schema.Array(Schema.String),
                    clusterScope: Schema.optional(Schema.Boolean),
                    namespaces: Schema.optional(Schema.Array(Schema.String)),
                    resources: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              subjects: Schema.Array(
                Schema.Struct({
                  group: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                  kind: Schema.String,
                  serviceAccount: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                    }),
                  ),
                  user: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ReadFlowcontrolApiserverV1FlowSchemaStatusOutput>;

// The operation
/**
 * read status of the specified FlowSchema
 *
 * @param name - name of the FlowSchema
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readFlowcontrolApiserverV1FlowSchemaStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadFlowcontrolApiserverV1FlowSchemaStatusInput,
    outputSchema: ReadFlowcontrolApiserverV1FlowSchemaStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export interface ReadFlowcontrolApiserverV1PriorityLevelConfigurationInput {
  name: string;
  pretty?: string;
}
export const ReadFlowcontrolApiserverV1PriorityLevelConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}",
    }),
  ) as unknown as Schema.Codec<ReadFlowcontrolApiserverV1PriorityLevelConfigurationInput>;

// Output Schema
export interface ReadFlowcontrolApiserverV1PriorityLevelConfigurationOutput {
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    exempt?: { lendablePercent?: number; nominalConcurrencyShares?: number };
    limited?: {
      borrowingLimitPercent?: number;
      lendablePercent?: number;
      limitResponse?: {
        queuing?: {
          handSize?: number;
          queueLengthLimit?: number;
          queues?: number;
        };
        type: string;
      };
      nominalConcurrencyShares?: number;
    };
    type: string;
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const ReadFlowcontrolApiserverV1PriorityLevelConfigurationOutput =
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
        exempt: Schema.optional(
          Schema.Struct({
            lendablePercent: Schema.optional(Schema.Number),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        limited: Schema.optional(
          Schema.Struct({
            borrowingLimitPercent: Schema.optional(Schema.Number),
            lendablePercent: Schema.optional(Schema.Number),
            limitResponse: Schema.optional(
              Schema.Struct({
                queuing: Schema.optional(
                  Schema.Struct({
                    handSize: Schema.optional(Schema.Number),
                    queueLengthLimit: Schema.optional(Schema.Number),
                    queues: Schema.optional(Schema.Number),
                  }),
                ),
                type: Schema.String,
              }),
            ),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        type: Schema.String,
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ReadFlowcontrolApiserverV1PriorityLevelConfigurationOutput>;

// The operation
/**
 * read the specified PriorityLevelConfiguration
 *
 * @param name - name of the PriorityLevelConfiguration
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readFlowcontrolApiserverV1PriorityLevelConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadFlowcontrolApiserverV1PriorityLevelConfigurationInput,
    outputSchema: ReadFlowcontrolApiserverV1PriorityLevelConfigurationOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export interface ReadFlowcontrolApiserverV1PriorityLevelConfigurationStatusInput {
  name: string;
  pretty?: string;
}
export const ReadFlowcontrolApiserverV1PriorityLevelConfigurationStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}/status",
    }),
  ) as unknown as Schema.Codec<ReadFlowcontrolApiserverV1PriorityLevelConfigurationStatusInput>;

// Output Schema
export interface ReadFlowcontrolApiserverV1PriorityLevelConfigurationStatusOutput {
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    exempt?: { lendablePercent?: number; nominalConcurrencyShares?: number };
    limited?: {
      borrowingLimitPercent?: number;
      lendablePercent?: number;
      limitResponse?: {
        queuing?: {
          handSize?: number;
          queueLengthLimit?: number;
          queues?: number;
        };
        type: string;
      };
      nominalConcurrencyShares?: number;
    };
    type: string;
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const ReadFlowcontrolApiserverV1PriorityLevelConfigurationStatusOutput =
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
        exempt: Schema.optional(
          Schema.Struct({
            lendablePercent: Schema.optional(Schema.Number),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        limited: Schema.optional(
          Schema.Struct({
            borrowingLimitPercent: Schema.optional(Schema.Number),
            lendablePercent: Schema.optional(Schema.Number),
            limitResponse: Schema.optional(
              Schema.Struct({
                queuing: Schema.optional(
                  Schema.Struct({
                    handSize: Schema.optional(Schema.Number),
                    queueLengthLimit: Schema.optional(Schema.Number),
                    queues: Schema.optional(Schema.Number),
                  }),
                ),
                type: Schema.String,
              }),
            ),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        type: Schema.String,
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ReadFlowcontrolApiserverV1PriorityLevelConfigurationStatusOutput>;

// The operation
/**
 * read status of the specified PriorityLevelConfiguration
 *
 * @param name - name of the PriorityLevelConfiguration
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readFlowcontrolApiserverV1PriorityLevelConfigurationStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ReadFlowcontrolApiserverV1PriorityLevelConfigurationStatusInput,
    outputSchema:
      ReadFlowcontrolApiserverV1PriorityLevelConfigurationStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export interface ReplaceFlowcontrolApiserverV1FlowSchemaInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    distinguisherMethod?: { type: string };
    matchingPrecedence?: number;
    priorityLevelConfiguration: { name: string };
    rules?: {
      nonResourceRules?: { nonResourceURLs: string[]; verbs: string[] }[];
      resourceRules?: {
        apiGroups: string[];
        clusterScope?: boolean;
        namespaces?: string[];
        resources: string[];
        verbs: string[];
      }[];
      subjects: {
        group?: { name: string };
        kind: string;
        serviceAccount?: { name: string; namespace: string };
        user?: { name: string };
      }[];
    }[];
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const ReplaceFlowcontrolApiserverV1FlowSchemaInput =
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
    spec: Schema.optional(
      Schema.Struct({
        distinguisherMethod: Schema.optional(
          Schema.Struct({
            type: Schema.String,
          }),
        ),
        matchingPrecedence: Schema.optional(Schema.Number),
        priorityLevelConfiguration: Schema.Struct({
          name: Schema.String,
        }),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              nonResourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    nonResourceURLs: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              resourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    apiGroups: Schema.Array(Schema.String),
                    clusterScope: Schema.optional(Schema.Boolean),
                    namespaces: Schema.optional(Schema.Array(Schema.String)),
                    resources: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              subjects: Schema.Array(
                Schema.Struct({
                  group: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                  kind: Schema.String,
                  serviceAccount: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                    }),
                  ),
                  user: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}",
    }),
  ) as unknown as Schema.Codec<ReplaceFlowcontrolApiserverV1FlowSchemaInput>;

// Output Schema
export interface ReplaceFlowcontrolApiserverV1FlowSchemaOutput {
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    distinguisherMethod?: { type: string };
    matchingPrecedence?: number;
    priorityLevelConfiguration: { name: string };
    rules?: {
      nonResourceRules?: { nonResourceURLs: string[]; verbs: string[] }[];
      resourceRules?: {
        apiGroups: string[];
        clusterScope?: boolean;
        namespaces?: string[];
        resources: string[];
        verbs: string[];
      }[];
      subjects: {
        group?: { name: string };
        kind: string;
        serviceAccount?: { name: string; namespace: string };
        user?: { name: string };
      }[];
    }[];
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const ReplaceFlowcontrolApiserverV1FlowSchemaOutput =
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
        distinguisherMethod: Schema.optional(
          Schema.Struct({
            type: Schema.String,
          }),
        ),
        matchingPrecedence: Schema.optional(Schema.Number),
        priorityLevelConfiguration: Schema.Struct({
          name: Schema.String,
        }),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              nonResourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    nonResourceURLs: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              resourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    apiGroups: Schema.Array(Schema.String),
                    clusterScope: Schema.optional(Schema.Boolean),
                    namespaces: Schema.optional(Schema.Array(Schema.String)),
                    resources: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              subjects: Schema.Array(
                Schema.Struct({
                  group: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                  kind: Schema.String,
                  serviceAccount: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                    }),
                  ),
                  user: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ReplaceFlowcontrolApiserverV1FlowSchemaOutput>;

// The operation
/**
 * replace the specified FlowSchema
 *
 * @param name - name of the FlowSchema
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceFlowcontrolApiserverV1FlowSchema =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceFlowcontrolApiserverV1FlowSchemaInput,
    outputSchema: ReplaceFlowcontrolApiserverV1FlowSchemaOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface ReplaceFlowcontrolApiserverV1FlowSchemaStatusInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    distinguisherMethod?: { type: string };
    matchingPrecedence?: number;
    priorityLevelConfiguration: { name: string };
    rules?: {
      nonResourceRules?: { nonResourceURLs: string[]; verbs: string[] }[];
      resourceRules?: {
        apiGroups: string[];
        clusterScope?: boolean;
        namespaces?: string[];
        resources: string[];
        verbs: string[];
      }[];
      subjects: {
        group?: { name: string };
        kind: string;
        serviceAccount?: { name: string; namespace: string };
        user?: { name: string };
      }[];
    }[];
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const ReplaceFlowcontrolApiserverV1FlowSchemaStatusInput =
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
    spec: Schema.optional(
      Schema.Struct({
        distinguisherMethod: Schema.optional(
          Schema.Struct({
            type: Schema.String,
          }),
        ),
        matchingPrecedence: Schema.optional(Schema.Number),
        priorityLevelConfiguration: Schema.Struct({
          name: Schema.String,
        }),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              nonResourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    nonResourceURLs: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              resourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    apiGroups: Schema.Array(Schema.String),
                    clusterScope: Schema.optional(Schema.Boolean),
                    namespaces: Schema.optional(Schema.Array(Schema.String)),
                    resources: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              subjects: Schema.Array(
                Schema.Struct({
                  group: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                  kind: Schema.String,
                  serviceAccount: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                    }),
                  ),
                  user: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}/status",
    }),
  ) as unknown as Schema.Codec<ReplaceFlowcontrolApiserverV1FlowSchemaStatusInput>;

// Output Schema
export interface ReplaceFlowcontrolApiserverV1FlowSchemaStatusOutput {
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    distinguisherMethod?: { type: string };
    matchingPrecedence?: number;
    priorityLevelConfiguration: { name: string };
    rules?: {
      nonResourceRules?: { nonResourceURLs: string[]; verbs: string[] }[];
      resourceRules?: {
        apiGroups: string[];
        clusterScope?: boolean;
        namespaces?: string[];
        resources: string[];
        verbs: string[];
      }[];
      subjects: {
        group?: { name: string };
        kind: string;
        serviceAccount?: { name: string; namespace: string };
        user?: { name: string };
      }[];
    }[];
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const ReplaceFlowcontrolApiserverV1FlowSchemaStatusOutput =
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
        distinguisherMethod: Schema.optional(
          Schema.Struct({
            type: Schema.String,
          }),
        ),
        matchingPrecedence: Schema.optional(Schema.Number),
        priorityLevelConfiguration: Schema.Struct({
          name: Schema.String,
        }),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              nonResourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    nonResourceURLs: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              resourceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    apiGroups: Schema.Array(Schema.String),
                    clusterScope: Schema.optional(Schema.Boolean),
                    namespaces: Schema.optional(Schema.Array(Schema.String)),
                    resources: Schema.Array(Schema.String),
                    verbs: Schema.Array(Schema.String),
                  }),
                ),
              ),
              subjects: Schema.Array(
                Schema.Struct({
                  group: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                  kind: Schema.String,
                  serviceAccount: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      namespace: Schema.String,
                    }),
                  ),
                  user: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ReplaceFlowcontrolApiserverV1FlowSchemaStatusOutput>;

// The operation
/**
 * replace status of the specified FlowSchema
 *
 * @param name - name of the FlowSchema
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceFlowcontrolApiserverV1FlowSchemaStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceFlowcontrolApiserverV1FlowSchemaStatusInput,
    outputSchema: ReplaceFlowcontrolApiserverV1FlowSchemaStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    exempt?: { lendablePercent?: number; nominalConcurrencyShares?: number };
    limited?: {
      borrowingLimitPercent?: number;
      lendablePercent?: number;
      limitResponse?: {
        queuing?: {
          handSize?: number;
          queueLengthLimit?: number;
          queues?: number;
        };
        type: string;
      };
      nominalConcurrencyShares?: number;
    };
    type: string;
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationInput =
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
    spec: Schema.optional(
      Schema.Struct({
        exempt: Schema.optional(
          Schema.Struct({
            lendablePercent: Schema.optional(Schema.Number),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        limited: Schema.optional(
          Schema.Struct({
            borrowingLimitPercent: Schema.optional(Schema.Number),
            lendablePercent: Schema.optional(Schema.Number),
            limitResponse: Schema.optional(
              Schema.Struct({
                queuing: Schema.optional(
                  Schema.Struct({
                    handSize: Schema.optional(Schema.Number),
                    queueLengthLimit: Schema.optional(Schema.Number),
                    queues: Schema.optional(Schema.Number),
                  }),
                ),
                type: Schema.String,
              }),
            ),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        type: Schema.String,
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}",
    }),
  ) as unknown as Schema.Codec<ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationInput>;

// Output Schema
export interface ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationOutput {
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    exempt?: { lendablePercent?: number; nominalConcurrencyShares?: number };
    limited?: {
      borrowingLimitPercent?: number;
      lendablePercent?: number;
      limitResponse?: {
        queuing?: {
          handSize?: number;
          queueLengthLimit?: number;
          queues?: number;
        };
        type: string;
      };
      nominalConcurrencyShares?: number;
    };
    type: string;
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationOutput =
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
        exempt: Schema.optional(
          Schema.Struct({
            lendablePercent: Schema.optional(Schema.Number),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        limited: Schema.optional(
          Schema.Struct({
            borrowingLimitPercent: Schema.optional(Schema.Number),
            lendablePercent: Schema.optional(Schema.Number),
            limitResponse: Schema.optional(
              Schema.Struct({
                queuing: Schema.optional(
                  Schema.Struct({
                    handSize: Schema.optional(Schema.Number),
                    queueLengthLimit: Schema.optional(Schema.Number),
                    queues: Schema.optional(Schema.Number),
                  }),
                ),
                type: Schema.String,
              }),
            ),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        type: Schema.String,
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationOutput>;

// The operation
/**
 * replace the specified PriorityLevelConfiguration
 *
 * @param name - name of the PriorityLevelConfiguration
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceFlowcontrolApiserverV1PriorityLevelConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationInput,
    outputSchema: ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationStatusInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    exempt?: { lendablePercent?: number; nominalConcurrencyShares?: number };
    limited?: {
      borrowingLimitPercent?: number;
      lendablePercent?: number;
      limitResponse?: {
        queuing?: {
          handSize?: number;
          queueLengthLimit?: number;
          queues?: number;
        };
        type: string;
      };
      nominalConcurrencyShares?: number;
    };
    type: string;
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationStatusInput =
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
    spec: Schema.optional(
      Schema.Struct({
        exempt: Schema.optional(
          Schema.Struct({
            lendablePercent: Schema.optional(Schema.Number),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        limited: Schema.optional(
          Schema.Struct({
            borrowingLimitPercent: Schema.optional(Schema.Number),
            lendablePercent: Schema.optional(Schema.Number),
            limitResponse: Schema.optional(
              Schema.Struct({
                queuing: Schema.optional(
                  Schema.Struct({
                    handSize: Schema.optional(Schema.Number),
                    queueLengthLimit: Schema.optional(Schema.Number),
                    queues: Schema.optional(Schema.Number),
                  }),
                ),
                type: Schema.String,
              }),
            ),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        type: Schema.String,
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}/status",
    }),
  ) as unknown as Schema.Codec<ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationStatusInput>;

// Output Schema
export interface ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationStatusOutput {
  apiVersion?: string;
  kind?: string;
  metadata?: {
    annotations?: Record<string, string>;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: string[];
    generateName?: string;
    generation?: number;
    labels?: Record<string, string>;
    managedFields?: {
      apiVersion?: string;
      fieldsType?: string;
      fieldsV1?: unknown;
      manager?: string;
      operation?: string;
      subresource?: string;
      time?: string;
    }[];
    name?: string;
    namespace?: string;
    ownerReferences?: {
      apiVersion: string;
      blockOwnerDeletion?: boolean;
      controller?: boolean;
      kind: string;
      name: string;
      uid: string;
    }[];
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
  };
  spec?: {
    exempt?: { lendablePercent?: number; nominalConcurrencyShares?: number };
    limited?: {
      borrowingLimitPercent?: number;
      lendablePercent?: number;
      limitResponse?: {
        queuing?: {
          handSize?: number;
          queueLengthLimit?: number;
          queues?: number;
        };
        type: string;
      };
      nominalConcurrencyShares?: number;
    };
    type: string;
  };
  status?: {
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status?: string;
      type?: string;
    }[];
  };
}
export const ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationStatusOutput =
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
        exempt: Schema.optional(
          Schema.Struct({
            lendablePercent: Schema.optional(Schema.Number),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        limited: Schema.optional(
          Schema.Struct({
            borrowingLimitPercent: Schema.optional(Schema.Number),
            lendablePercent: Schema.optional(Schema.Number),
            limitResponse: Schema.optional(
              Schema.Struct({
                queuing: Schema.optional(
                  Schema.Struct({
                    handSize: Schema.optional(Schema.Number),
                    queueLengthLimit: Schema.optional(Schema.Number),
                    queues: Schema.optional(Schema.Number),
                  }),
                ),
                type: Schema.String,
              }),
            ),
            nominalConcurrencyShares: Schema.optional(Schema.Number),
          }),
        ),
        type: Schema.String,
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationStatusOutput>;

// The operation
/**
 * replace status of the specified PriorityLevelConfiguration
 *
 * @param name - name of the PriorityLevelConfiguration
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceFlowcontrolApiserverV1PriorityLevelConfigurationStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationStatusInput,
    outputSchema:
      ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface WatchFlowcontrolApiserverV1FlowSchemaInput {
  name: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  sendInitialEvents?: boolean;
  shardSelector?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export const WatchFlowcontrolApiserverV1FlowSchemaInput =
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
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/{name}",
    }),
  ) as unknown as Schema.Codec<WatchFlowcontrolApiserverV1FlowSchemaInput>;

// Output Schema
export interface WatchFlowcontrolApiserverV1FlowSchemaOutput {
  object: unknown;
  type: string;
}
export const WatchFlowcontrolApiserverV1FlowSchemaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchFlowcontrolApiserverV1FlowSchemaOutput>;

// The operation
/**
 * watch changes to an object of kind FlowSchema. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the FlowSchema
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
export const watchFlowcontrolApiserverV1FlowSchema =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchFlowcontrolApiserverV1FlowSchemaInput,
    outputSchema: WatchFlowcontrolApiserverV1FlowSchemaOutput,
  }));
// Input Schema
export interface WatchFlowcontrolApiserverV1FlowSchemaListInput {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  sendInitialEvents?: boolean;
  shardSelector?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export const WatchFlowcontrolApiserverV1FlowSchemaListInput =
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
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas",
    }),
  ) as unknown as Schema.Codec<WatchFlowcontrolApiserverV1FlowSchemaListInput>;

// Output Schema
export interface WatchFlowcontrolApiserverV1FlowSchemaListOutput {
  object: unknown;
  type: string;
}
export const WatchFlowcontrolApiserverV1FlowSchemaListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchFlowcontrolApiserverV1FlowSchemaListOutput>;

// The operation
/**
 * watch individual changes to a list of FlowSchema. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchFlowcontrolApiserverV1FlowSchemaList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchFlowcontrolApiserverV1FlowSchemaListInput,
    outputSchema: WatchFlowcontrolApiserverV1FlowSchemaListOutput,
  }));
// Input Schema
export interface WatchFlowcontrolApiserverV1PriorityLevelConfigurationInput {
  name: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  sendInitialEvents?: boolean;
  shardSelector?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export const WatchFlowcontrolApiserverV1PriorityLevelConfigurationInput =
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
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/{name}",
    }),
  ) as unknown as Schema.Codec<WatchFlowcontrolApiserverV1PriorityLevelConfigurationInput>;

// Output Schema
export interface WatchFlowcontrolApiserverV1PriorityLevelConfigurationOutput {
  object: unknown;
  type: string;
}
export const WatchFlowcontrolApiserverV1PriorityLevelConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchFlowcontrolApiserverV1PriorityLevelConfigurationOutput>;

// The operation
/**
 * watch changes to an object of kind PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the PriorityLevelConfiguration
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
export const watchFlowcontrolApiserverV1PriorityLevelConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchFlowcontrolApiserverV1PriorityLevelConfigurationInput,
    outputSchema: WatchFlowcontrolApiserverV1PriorityLevelConfigurationOutput,
  }));
// Input Schema
export interface WatchFlowcontrolApiserverV1PriorityLevelConfigurationListInput {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  sendInitialEvents?: boolean;
  shardSelector?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export const WatchFlowcontrolApiserverV1PriorityLevelConfigurationListInput =
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
      path: "/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations",
    }),
  ) as unknown as Schema.Codec<WatchFlowcontrolApiserverV1PriorityLevelConfigurationListInput>;

// Output Schema
export interface WatchFlowcontrolApiserverV1PriorityLevelConfigurationListOutput {
  object: unknown;
  type: string;
}
export const WatchFlowcontrolApiserverV1PriorityLevelConfigurationListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchFlowcontrolApiserverV1PriorityLevelConfigurationListOutput>;

// The operation
/**
 * watch individual changes to a list of PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchFlowcontrolApiserverV1PriorityLevelConfigurationList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchFlowcontrolApiserverV1PriorityLevelConfigurationListInput,
    outputSchema:
      WatchFlowcontrolApiserverV1PriorityLevelConfigurationListOutput,
  }));
