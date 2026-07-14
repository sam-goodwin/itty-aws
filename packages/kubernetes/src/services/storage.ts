/**
 * Kubernetes Storage API
 *
 * Generated from the Kubernetes OpenAPI spec.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import { Conflict, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface CreateStorageV1CSIDriverInput {
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
  spec: {
    attachRequired?: boolean;
    fsGroupPolicy?: string;
    nodeAllocatableUpdatePeriodSeconds?: number;
    podInfoOnMount?: boolean;
    preventPodSchedulingIfMissing?: boolean;
    requiresRepublish?: boolean;
    seLinuxMount?: boolean;
    serviceAccountTokenInSecrets?: boolean;
    storageCapacity?: boolean;
    tokenRequests?: { audience: string; expirationSeconds?: number }[];
    volumeLifecycleModes?: string[];
  };
}
export const CreateStorageV1CSIDriverInput =
  /*@__PURE__*/ Schema.Struct({
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
      attachRequired: Schema.optional(Schema.Boolean),
      fsGroupPolicy: Schema.optional(Schema.String),
      nodeAllocatableUpdatePeriodSeconds: Schema.optional(Schema.Number),
      podInfoOnMount: Schema.optional(Schema.Boolean),
      preventPodSchedulingIfMissing: Schema.optional(Schema.Boolean),
      requiresRepublish: Schema.optional(Schema.Boolean),
      seLinuxMount: Schema.optional(Schema.Boolean),
      serviceAccountTokenInSecrets: Schema.optional(Schema.Boolean),
      storageCapacity: Schema.optional(Schema.Boolean),
      tokenRequests: Schema.optional(
        Schema.Array(
          Schema.Struct({
            audience: Schema.String,
            expirationSeconds: Schema.optional(Schema.Number),
          }),
        ),
      ),
      volumeLifecycleModes: Schema.optional(Schema.Array(Schema.String)),
    }),
  }).pipe(
    T.Http({ method: "POST", path: "/apis/storage.k8s.io/v1/csidrivers" }),
  ) as unknown as Schema.Codec<CreateStorageV1CSIDriverInput>;

// Output Schema
export interface CreateStorageV1CSIDriverOutput {
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
  spec: {
    attachRequired?: boolean;
    fsGroupPolicy?: string;
    nodeAllocatableUpdatePeriodSeconds?: number;
    podInfoOnMount?: boolean;
    preventPodSchedulingIfMissing?: boolean;
    requiresRepublish?: boolean;
    seLinuxMount?: boolean;
    serviceAccountTokenInSecrets?: boolean;
    storageCapacity?: boolean;
    tokenRequests?: { audience: string; expirationSeconds?: number }[];
    volumeLifecycleModes?: string[];
  };
}
export const CreateStorageV1CSIDriverOutput =
  /*@__PURE__*/ Schema.Struct({
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
      attachRequired: Schema.optional(Schema.Boolean),
      fsGroupPolicy: Schema.optional(Schema.String),
      nodeAllocatableUpdatePeriodSeconds: Schema.optional(Schema.Number),
      podInfoOnMount: Schema.optional(Schema.Boolean),
      preventPodSchedulingIfMissing: Schema.optional(Schema.Boolean),
      requiresRepublish: Schema.optional(Schema.Boolean),
      seLinuxMount: Schema.optional(Schema.Boolean),
      serviceAccountTokenInSecrets: Schema.optional(Schema.Boolean),
      storageCapacity: Schema.optional(Schema.Boolean),
      tokenRequests: Schema.optional(
        Schema.Array(
          Schema.Struct({
            audience: Schema.String,
            expirationSeconds: Schema.optional(Schema.Number),
          }),
        ),
      ),
      volumeLifecycleModes: Schema.optional(Schema.Array(Schema.String)),
    }),
  }) as unknown as Schema.Codec<CreateStorageV1CSIDriverOutput>;

// The operation
/**
 * create a CSIDriver
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createStorageV1CSIDriver = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateStorageV1CSIDriverInput,
  outputSchema: CreateStorageV1CSIDriverOutput,
  errors: [Conflict, UnprocessableEntity] as const,
}));
// Input Schema
export interface CreateStorageV1CSINodeInput {
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
  spec: {
    drivers: {
      allocatable?: { count?: number };
      name: string;
      nodeID: string;
      topologyKeys?: string[];
    }[];
  };
}
export const CreateStorageV1CSINodeInput =
  /*@__PURE__*/ Schema.Struct({
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
      drivers: Schema.Array(
        Schema.Struct({
          allocatable: Schema.optional(
            Schema.Struct({
              count: Schema.optional(Schema.Number),
            }),
          ),
          name: Schema.String,
          nodeID: Schema.String,
          topologyKeys: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    }),
  }).pipe(
    T.Http({ method: "POST", path: "/apis/storage.k8s.io/v1/csinodes" }),
  ) as unknown as Schema.Codec<CreateStorageV1CSINodeInput>;

// Output Schema
export interface CreateStorageV1CSINodeOutput {
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
  spec: {
    drivers: {
      allocatable?: { count?: number };
      name: string;
      nodeID: string;
      topologyKeys?: string[];
    }[];
  };
}
export const CreateStorageV1CSINodeOutput =
  /*@__PURE__*/ Schema.Struct({
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
      drivers: Schema.Array(
        Schema.Struct({
          allocatable: Schema.optional(
            Schema.Struct({
              count: Schema.optional(Schema.Number),
            }),
          ),
          name: Schema.String,
          nodeID: Schema.String,
          topologyKeys: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    }),
  }) as unknown as Schema.Codec<CreateStorageV1CSINodeOutput>;

// The operation
/**
 * create a CSINode
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createStorageV1CSINode = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateStorageV1CSINodeInput,
  outputSchema: CreateStorageV1CSINodeOutput,
  errors: [Conflict, UnprocessableEntity] as const,
}));
// Input Schema
export interface CreateStorageV1NamespacedCSIStorageCapacityInput {
  namespace: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  apiVersion?: string;
  capacity?: string;
  kind?: string;
  maximumVolumeSize?: string;
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
  nodeTopology?: {
    matchExpressions?: { key: string; operator: string; values?: string[] }[];
    matchLabels?: Record<string, string>;
  };
  storageClassName: string;
}
export const CreateStorageV1NamespacedCSIStorageCapacityInput =
  /*@__PURE__*/ Schema.Struct({
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    capacity: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    maximumVolumeSize: Schema.optional(Schema.String),
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
    nodeTopology: Schema.optional(
      Schema.Struct({
        matchExpressions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.String,
              operator: Schema.String,
              values: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        matchLabels: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
      }),
    ),
    storageClassName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities",
    }),
  ) as unknown as Schema.Codec<CreateStorageV1NamespacedCSIStorageCapacityInput>;

// Output Schema
export interface CreateStorageV1NamespacedCSIStorageCapacityOutput {
  apiVersion?: string;
  capacity?: string;
  kind?: string;
  maximumVolumeSize?: string;
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
  nodeTopology?: {
    matchExpressions?: { key: string; operator: string; values?: string[] }[];
    matchLabels?: Record<string, string>;
  };
  storageClassName: string;
}
export const CreateStorageV1NamespacedCSIStorageCapacityOutput =
  /*@__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    capacity: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    maximumVolumeSize: Schema.optional(Schema.String),
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
    nodeTopology: Schema.optional(
      Schema.Struct({
        matchExpressions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.String,
              operator: Schema.String,
              values: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        matchLabels: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
      }),
    ),
    storageClassName: Schema.String,
  }) as unknown as Schema.Codec<CreateStorageV1NamespacedCSIStorageCapacityOutput>;

// The operation
/**
 * create a CSIStorageCapacity
 *
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createStorageV1NamespacedCSIStorageCapacity =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CreateStorageV1NamespacedCSIStorageCapacityInput,
    outputSchema: CreateStorageV1NamespacedCSIStorageCapacityOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface CreateStorageV1StorageClassInput {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  allowVolumeExpansion?: boolean;
  allowedTopologies?: {
    matchLabelExpressions?: { key: string; values: string[] }[];
  }[];
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
  mountOptions?: string[];
  parameters?: Record<string, string>;
  provisioner: string;
  reclaimPolicy?: string;
  volumeBindingMode?: string;
}
export const CreateStorageV1StorageClassInput =
  /*@__PURE__*/ Schema.Struct({
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    allowVolumeExpansion: Schema.optional(Schema.Boolean),
    allowedTopologies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          matchLabelExpressions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.String,
                values: Schema.Array(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
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
    mountOptions: Schema.optional(Schema.Array(Schema.String)),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    provisioner: Schema.String,
    reclaimPolicy: Schema.optional(Schema.String),
    volumeBindingMode: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/apis/storage.k8s.io/v1/storageclasses" }),
  ) as unknown as Schema.Codec<CreateStorageV1StorageClassInput>;

// Output Schema
export interface CreateStorageV1StorageClassOutput {
  allowVolumeExpansion?: boolean;
  allowedTopologies?: {
    matchLabelExpressions?: { key: string; values: string[] }[];
  }[];
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
  mountOptions?: string[];
  parameters?: Record<string, string>;
  provisioner: string;
  reclaimPolicy?: string;
  volumeBindingMode?: string;
}
export const CreateStorageV1StorageClassOutput =
  /*@__PURE__*/ Schema.Struct({
    allowVolumeExpansion: Schema.optional(Schema.Boolean),
    allowedTopologies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          matchLabelExpressions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.String,
                values: Schema.Array(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
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
    mountOptions: Schema.optional(Schema.Array(Schema.String)),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    provisioner: Schema.String,
    reclaimPolicy: Schema.optional(Schema.String),
    volumeBindingMode: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CreateStorageV1StorageClassOutput>;

// The operation
/**
 * create a StorageClass
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createStorageV1StorageClass = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateStorageV1StorageClassInput,
  outputSchema: CreateStorageV1StorageClassOutput,
  errors: [Conflict, UnprocessableEntity] as const,
}));
// Input Schema
export interface CreateStorageV1VolumeAttachmentInput {
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
  spec: {
    attacher: string;
    nodeName: string;
    source: {
      inlineVolumeSpec?: {
        accessModes?: string[];
        awsElasticBlockStore?: {
          fsType?: string;
          partition?: number;
          readOnly?: boolean;
          volumeID: string;
        };
        azureDisk?: {
          cachingMode?: string;
          diskName: string;
          diskURI: string;
          fsType?: string;
          kind?: string;
          readOnly?: boolean;
        };
        azureFile?: {
          readOnly?: boolean;
          secretName: string;
          secretNamespace?: string;
          shareName: string;
        };
        capacity?: Record<string, string>;
        cephfs?: {
          monitors: string[];
          path?: string;
          readOnly?: boolean;
          secretFile?: string;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        cinder?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          volumeID: string;
        };
        claimRef?: {
          apiVersion?: string;
          fieldPath?: string;
          kind?: string;
          name?: string;
          namespace?: string;
          resourceVersion?: string;
          uid?: string;
        };
        csi?: {
          controllerExpandSecretRef?: { name?: string; namespace?: string };
          controllerPublishSecretRef?: { name?: string; namespace?: string };
          driver: string;
          fsType?: string;
          nodeExpandSecretRef?: { name?: string; namespace?: string };
          nodePublishSecretRef?: { name?: string; namespace?: string };
          nodeStageSecretRef?: { name?: string; namespace?: string };
          readOnly?: boolean;
          volumeAttributes?: Record<string, string>;
          volumeHandle: string;
        };
        fc?: {
          fsType?: string;
          lun?: number;
          readOnly?: boolean;
          targetWWNs?: string[];
          wwids?: string[];
        };
        flexVolume?: {
          driver: string;
          fsType?: string;
          options?: Record<string, string>;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
        };
        flocker?: { datasetName?: string; datasetUUID?: string };
        gcePersistentDisk?: {
          fsType?: string;
          partition?: number;
          pdName: string;
          readOnly?: boolean;
        };
        glusterfs?: {
          endpoints: string;
          endpointsNamespace?: string;
          path: string;
          readOnly?: boolean;
        };
        hostPath?: { path: string; type?: string };
        iscsi?: {
          chapAuthDiscovery?: boolean;
          chapAuthSession?: boolean;
          fsType?: string;
          initiatorName?: string;
          iqn: string;
          iscsiInterface?: string;
          lun: number;
          portals?: string[];
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          targetPortal: string;
        };
        local?: { fsType?: string; path: string };
        mountOptions?: string[];
        nfs?: { path: string; readOnly?: boolean; server: string };
        nodeAffinity?: {
          required?: {
            nodeSelectorTerms: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
            }[];
          };
        };
        persistentVolumeReclaimPolicy?: string;
        photonPersistentDisk?: { fsType?: string; pdID: string };
        portworxVolume?: {
          fsType?: string;
          readOnly?: boolean;
          volumeID: string;
        };
        quobyte?: {
          group?: string;
          readOnly?: boolean;
          registry: string;
          tenant?: string;
          user?: string;
          volume: string;
        };
        rbd?: {
          fsType?: string;
          image: string;
          keyring?: string;
          monitors: string[];
          pool?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        scaleIO?: {
          fsType?: string;
          gateway: string;
          protectionDomain?: string;
          readOnly?: boolean;
          secretRef: { name?: string; namespace?: string };
          sslEnabled?: boolean;
          storageMode?: string;
          storagePool?: string;
          system: string;
          volumeName?: string;
        };
        storageClassName?: string;
        storageos?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            apiVersion?: string;
            fieldPath?: string;
            kind?: string;
            name?: string;
            namespace?: string;
            resourceVersion?: string;
            uid?: string;
          };
          volumeName?: string;
          volumeNamespace?: string;
        };
        volumeAttributesClassName?: string;
        volumeMode?: string;
        vsphereVolume?: {
          fsType?: string;
          storagePolicyID?: string;
          storagePolicyName?: string;
          volumePath: string;
        };
      };
      persistentVolumeName?: string;
    };
  };
  status?: {
    attachError?: { errorCode?: number; message?: string; time?: string };
    attached: boolean;
    attachmentMetadata?: Record<string, string>;
    detachError?: { errorCode?: number; message?: string; time?: string };
  };
}
export const CreateStorageV1VolumeAttachmentInput =
  /*@__PURE__*/ Schema.Struct({
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
      attacher: Schema.String,
      nodeName: Schema.String,
      source: Schema.Struct({
        inlineVolumeSpec: Schema.optional(
          Schema.Struct({
            accessModes: Schema.optional(Schema.Array(Schema.String)),
            awsElasticBlockStore: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            azureDisk: Schema.optional(
              Schema.Struct({
                cachingMode: Schema.optional(Schema.String),
                diskName: Schema.String,
                diskURI: Schema.String,
                fsType: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            azureFile: Schema.optional(
              Schema.Struct({
                readOnly: Schema.optional(Schema.Boolean),
                secretName: Schema.String,
                secretNamespace: Schema.optional(Schema.String),
                shareName: Schema.String,
              }),
            ),
            capacity: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            cephfs: Schema.optional(
              Schema.Struct({
                monitors: Schema.Array(Schema.String),
                path: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretFile: Schema.optional(Schema.String),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            cinder: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                volumeID: Schema.String,
              }),
            ),
            claimRef: Schema.optional(
              Schema.Struct({
                apiVersion: Schema.optional(Schema.String),
                fieldPath: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
                resourceVersion: Schema.optional(Schema.String),
                uid: Schema.optional(Schema.String),
              }),
            ),
            csi: Schema.optional(
              Schema.Struct({
                controllerExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                controllerPublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                nodeExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodePublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodeStageSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                volumeAttributes: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                volumeHandle: Schema.String,
              }),
            ),
            fc: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                lun: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                targetWWNs: Schema.optional(Schema.Array(Schema.String)),
                wwids: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            flexVolume: Schema.optional(
              Schema.Struct({
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                options: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            flocker: Schema.optional(
              Schema.Struct({
                datasetName: Schema.optional(Schema.String),
                datasetUUID: Schema.optional(Schema.String),
              }),
            ),
            gcePersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                pdName: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            glusterfs: Schema.optional(
              Schema.Struct({
                endpoints: Schema.String,
                endpointsNamespace: Schema.optional(Schema.String),
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            hostPath: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                type: Schema.optional(Schema.String),
              }),
            ),
            iscsi: Schema.optional(
              Schema.Struct({
                chapAuthDiscovery: Schema.optional(Schema.Boolean),
                chapAuthSession: Schema.optional(Schema.Boolean),
                fsType: Schema.optional(Schema.String),
                initiatorName: Schema.optional(Schema.String),
                iqn: Schema.String,
                iscsiInterface: Schema.optional(Schema.String),
                lun: Schema.Number,
                portals: Schema.optional(Schema.Array(Schema.String)),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                targetPortal: Schema.String,
              }),
            ),
            local: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                path: Schema.String,
              }),
            ),
            mountOptions: Schema.optional(Schema.Array(Schema.String)),
            nfs: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
                server: Schema.String,
              }),
            ),
            nodeAffinity: Schema.optional(
              Schema.Struct({
                required: Schema.optional(
                  Schema.Struct({
                    nodeSelectorTerms: Schema.Array(
                      Schema.Struct({
                        matchExpressions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                        matchFields: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            persistentVolumeReclaimPolicy: Schema.optional(Schema.String),
            photonPersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                pdID: Schema.String,
              }),
            ),
            portworxVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            quobyte: Schema.optional(
              Schema.Struct({
                group: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                registry: Schema.String,
                tenant: Schema.optional(Schema.String),
                user: Schema.optional(Schema.String),
                volume: Schema.String,
              }),
            ),
            rbd: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                image: Schema.String,
                keyring: Schema.optional(Schema.String),
                monitors: Schema.Array(Schema.String),
                pool: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            scaleIO: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                gateway: Schema.String,
                protectionDomain: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.Struct({
                  name: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                }),
                sslEnabled: Schema.optional(Schema.Boolean),
                storageMode: Schema.optional(Schema.String),
                storagePool: Schema.optional(Schema.String),
                system: Schema.String,
                volumeName: Schema.optional(Schema.String),
              }),
            ),
            storageClassName: Schema.optional(Schema.String),
            storageos: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    fieldPath: Schema.optional(Schema.String),
                    kind: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    resourceVersion: Schema.optional(Schema.String),
                    uid: Schema.optional(Schema.String),
                  }),
                ),
                volumeName: Schema.optional(Schema.String),
                volumeNamespace: Schema.optional(Schema.String),
              }),
            ),
            volumeAttributesClassName: Schema.optional(Schema.String),
            volumeMode: Schema.optional(Schema.String),
            vsphereVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                storagePolicyID: Schema.optional(Schema.String),
                storagePolicyName: Schema.optional(Schema.String),
                volumePath: Schema.String,
              }),
            ),
          }),
        ),
        persistentVolumeName: Schema.optional(Schema.String),
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        attachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
        attached: Schema.Boolean,
        attachmentMetadata: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        detachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/storage.k8s.io/v1/volumeattachments",
    }),
  ) as unknown as Schema.Codec<CreateStorageV1VolumeAttachmentInput>;

// Output Schema
export interface CreateStorageV1VolumeAttachmentOutput {
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
  spec: {
    attacher: string;
    nodeName: string;
    source: {
      inlineVolumeSpec?: {
        accessModes?: string[];
        awsElasticBlockStore?: {
          fsType?: string;
          partition?: number;
          readOnly?: boolean;
          volumeID: string;
        };
        azureDisk?: {
          cachingMode?: string;
          diskName: string;
          diskURI: string;
          fsType?: string;
          kind?: string;
          readOnly?: boolean;
        };
        azureFile?: {
          readOnly?: boolean;
          secretName: string;
          secretNamespace?: string;
          shareName: string;
        };
        capacity?: Record<string, string>;
        cephfs?: {
          monitors: string[];
          path?: string;
          readOnly?: boolean;
          secretFile?: string;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        cinder?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          volumeID: string;
        };
        claimRef?: {
          apiVersion?: string;
          fieldPath?: string;
          kind?: string;
          name?: string;
          namespace?: string;
          resourceVersion?: string;
          uid?: string;
        };
        csi?: {
          controllerExpandSecretRef?: { name?: string; namespace?: string };
          controllerPublishSecretRef?: { name?: string; namespace?: string };
          driver: string;
          fsType?: string;
          nodeExpandSecretRef?: { name?: string; namespace?: string };
          nodePublishSecretRef?: { name?: string; namespace?: string };
          nodeStageSecretRef?: { name?: string; namespace?: string };
          readOnly?: boolean;
          volumeAttributes?: Record<string, string>;
          volumeHandle: string;
        };
        fc?: {
          fsType?: string;
          lun?: number;
          readOnly?: boolean;
          targetWWNs?: string[];
          wwids?: string[];
        };
        flexVolume?: {
          driver: string;
          fsType?: string;
          options?: Record<string, string>;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
        };
        flocker?: { datasetName?: string; datasetUUID?: string };
        gcePersistentDisk?: {
          fsType?: string;
          partition?: number;
          pdName: string;
          readOnly?: boolean;
        };
        glusterfs?: {
          endpoints: string;
          endpointsNamespace?: string;
          path: string;
          readOnly?: boolean;
        };
        hostPath?: { path: string; type?: string };
        iscsi?: {
          chapAuthDiscovery?: boolean;
          chapAuthSession?: boolean;
          fsType?: string;
          initiatorName?: string;
          iqn: string;
          iscsiInterface?: string;
          lun: number;
          portals?: string[];
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          targetPortal: string;
        };
        local?: { fsType?: string; path: string };
        mountOptions?: string[];
        nfs?: { path: string; readOnly?: boolean; server: string };
        nodeAffinity?: {
          required?: {
            nodeSelectorTerms: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
            }[];
          };
        };
        persistentVolumeReclaimPolicy?: string;
        photonPersistentDisk?: { fsType?: string; pdID: string };
        portworxVolume?: {
          fsType?: string;
          readOnly?: boolean;
          volumeID: string;
        };
        quobyte?: {
          group?: string;
          readOnly?: boolean;
          registry: string;
          tenant?: string;
          user?: string;
          volume: string;
        };
        rbd?: {
          fsType?: string;
          image: string;
          keyring?: string;
          monitors: string[];
          pool?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        scaleIO?: {
          fsType?: string;
          gateway: string;
          protectionDomain?: string;
          readOnly?: boolean;
          secretRef: { name?: string; namespace?: string };
          sslEnabled?: boolean;
          storageMode?: string;
          storagePool?: string;
          system: string;
          volumeName?: string;
        };
        storageClassName?: string;
        storageos?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            apiVersion?: string;
            fieldPath?: string;
            kind?: string;
            name?: string;
            namespace?: string;
            resourceVersion?: string;
            uid?: string;
          };
          volumeName?: string;
          volumeNamespace?: string;
        };
        volumeAttributesClassName?: string;
        volumeMode?: string;
        vsphereVolume?: {
          fsType?: string;
          storagePolicyID?: string;
          storagePolicyName?: string;
          volumePath: string;
        };
      };
      persistentVolumeName?: string;
    };
  };
  status?: {
    attachError?: { errorCode?: number; message?: string; time?: string };
    attached: boolean;
    attachmentMetadata?: Record<string, string>;
    detachError?: { errorCode?: number; message?: string; time?: string };
  };
}
export const CreateStorageV1VolumeAttachmentOutput =
  /*@__PURE__*/ Schema.Struct({
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
      attacher: Schema.String,
      nodeName: Schema.String,
      source: Schema.Struct({
        inlineVolumeSpec: Schema.optional(
          Schema.Struct({
            accessModes: Schema.optional(Schema.Array(Schema.String)),
            awsElasticBlockStore: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            azureDisk: Schema.optional(
              Schema.Struct({
                cachingMode: Schema.optional(Schema.String),
                diskName: Schema.String,
                diskURI: Schema.String,
                fsType: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            azureFile: Schema.optional(
              Schema.Struct({
                readOnly: Schema.optional(Schema.Boolean),
                secretName: Schema.String,
                secretNamespace: Schema.optional(Schema.String),
                shareName: Schema.String,
              }),
            ),
            capacity: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            cephfs: Schema.optional(
              Schema.Struct({
                monitors: Schema.Array(Schema.String),
                path: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretFile: Schema.optional(Schema.String),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            cinder: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                volumeID: Schema.String,
              }),
            ),
            claimRef: Schema.optional(
              Schema.Struct({
                apiVersion: Schema.optional(Schema.String),
                fieldPath: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
                resourceVersion: Schema.optional(Schema.String),
                uid: Schema.optional(Schema.String),
              }),
            ),
            csi: Schema.optional(
              Schema.Struct({
                controllerExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                controllerPublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                nodeExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodePublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodeStageSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                volumeAttributes: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                volumeHandle: Schema.String,
              }),
            ),
            fc: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                lun: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                targetWWNs: Schema.optional(Schema.Array(Schema.String)),
                wwids: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            flexVolume: Schema.optional(
              Schema.Struct({
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                options: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            flocker: Schema.optional(
              Schema.Struct({
                datasetName: Schema.optional(Schema.String),
                datasetUUID: Schema.optional(Schema.String),
              }),
            ),
            gcePersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                pdName: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            glusterfs: Schema.optional(
              Schema.Struct({
                endpoints: Schema.String,
                endpointsNamespace: Schema.optional(Schema.String),
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            hostPath: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                type: Schema.optional(Schema.String),
              }),
            ),
            iscsi: Schema.optional(
              Schema.Struct({
                chapAuthDiscovery: Schema.optional(Schema.Boolean),
                chapAuthSession: Schema.optional(Schema.Boolean),
                fsType: Schema.optional(Schema.String),
                initiatorName: Schema.optional(Schema.String),
                iqn: Schema.String,
                iscsiInterface: Schema.optional(Schema.String),
                lun: Schema.Number,
                portals: Schema.optional(Schema.Array(Schema.String)),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                targetPortal: Schema.String,
              }),
            ),
            local: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                path: Schema.String,
              }),
            ),
            mountOptions: Schema.optional(Schema.Array(Schema.String)),
            nfs: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
                server: Schema.String,
              }),
            ),
            nodeAffinity: Schema.optional(
              Schema.Struct({
                required: Schema.optional(
                  Schema.Struct({
                    nodeSelectorTerms: Schema.Array(
                      Schema.Struct({
                        matchExpressions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                        matchFields: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            persistentVolumeReclaimPolicy: Schema.optional(Schema.String),
            photonPersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                pdID: Schema.String,
              }),
            ),
            portworxVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            quobyte: Schema.optional(
              Schema.Struct({
                group: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                registry: Schema.String,
                tenant: Schema.optional(Schema.String),
                user: Schema.optional(Schema.String),
                volume: Schema.String,
              }),
            ),
            rbd: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                image: Schema.String,
                keyring: Schema.optional(Schema.String),
                monitors: Schema.Array(Schema.String),
                pool: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            scaleIO: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                gateway: Schema.String,
                protectionDomain: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.Struct({
                  name: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                }),
                sslEnabled: Schema.optional(Schema.Boolean),
                storageMode: Schema.optional(Schema.String),
                storagePool: Schema.optional(Schema.String),
                system: Schema.String,
                volumeName: Schema.optional(Schema.String),
              }),
            ),
            storageClassName: Schema.optional(Schema.String),
            storageos: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    fieldPath: Schema.optional(Schema.String),
                    kind: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    resourceVersion: Schema.optional(Schema.String),
                    uid: Schema.optional(Schema.String),
                  }),
                ),
                volumeName: Schema.optional(Schema.String),
                volumeNamespace: Schema.optional(Schema.String),
              }),
            ),
            volumeAttributesClassName: Schema.optional(Schema.String),
            volumeMode: Schema.optional(Schema.String),
            vsphereVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                storagePolicyID: Schema.optional(Schema.String),
                storagePolicyName: Schema.optional(Schema.String),
                volumePath: Schema.String,
              }),
            ),
          }),
        ),
        persistentVolumeName: Schema.optional(Schema.String),
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        attachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
        attached: Schema.Boolean,
        attachmentMetadata: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        detachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<CreateStorageV1VolumeAttachmentOutput>;

// The operation
/**
 * create a VolumeAttachment
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createStorageV1VolumeAttachment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CreateStorageV1VolumeAttachmentInput,
    outputSchema: CreateStorageV1VolumeAttachmentOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface CreateStorageV1VolumeAttributesClassInput {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  apiVersion?: string;
  driverName: string;
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
  parameters?: Record<string, string>;
}
export const CreateStorageV1VolumeAttributesClassInput =
  /*@__PURE__*/ Schema.Struct({
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    driverName: Schema.String,
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
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/storage.k8s.io/v1/volumeattributesclasses",
    }),
  ) as unknown as Schema.Codec<CreateStorageV1VolumeAttributesClassInput>;

// Output Schema
export interface CreateStorageV1VolumeAttributesClassOutput {
  apiVersion?: string;
  driverName: string;
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
  parameters?: Record<string, string>;
}
export const CreateStorageV1VolumeAttributesClassOutput =
  /*@__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    driverName: Schema.String,
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
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<CreateStorageV1VolumeAttributesClassOutput>;

// The operation
/**
 * create a VolumeAttributesClass
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createStorageV1VolumeAttributesClass =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CreateStorageV1VolumeAttributesClassInput,
    outputSchema: CreateStorageV1VolumeAttributesClassOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface DeleteStorageV1CSIDriverInput {
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
export const DeleteStorageV1CSIDriverInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/csidrivers/{name}",
    }),
  ) as unknown as Schema.Codec<DeleteStorageV1CSIDriverInput>;

// Output Schema
export interface DeleteStorageV1CSIDriverOutput {
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
  spec: {
    attachRequired?: boolean;
    fsGroupPolicy?: string;
    nodeAllocatableUpdatePeriodSeconds?: number;
    podInfoOnMount?: boolean;
    preventPodSchedulingIfMissing?: boolean;
    requiresRepublish?: boolean;
    seLinuxMount?: boolean;
    serviceAccountTokenInSecrets?: boolean;
    storageCapacity?: boolean;
    tokenRequests?: { audience: string; expirationSeconds?: number }[];
    volumeLifecycleModes?: string[];
  };
}
export const DeleteStorageV1CSIDriverOutput =
  /*@__PURE__*/ Schema.Struct({
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
      attachRequired: Schema.optional(Schema.Boolean),
      fsGroupPolicy: Schema.optional(Schema.String),
      nodeAllocatableUpdatePeriodSeconds: Schema.optional(Schema.Number),
      podInfoOnMount: Schema.optional(Schema.Boolean),
      preventPodSchedulingIfMissing: Schema.optional(Schema.Boolean),
      requiresRepublish: Schema.optional(Schema.Boolean),
      seLinuxMount: Schema.optional(Schema.Boolean),
      serviceAccountTokenInSecrets: Schema.optional(Schema.Boolean),
      storageCapacity: Schema.optional(Schema.Boolean),
      tokenRequests: Schema.optional(
        Schema.Array(
          Schema.Struct({
            audience: Schema.String,
            expirationSeconds: Schema.optional(Schema.Number),
          }),
        ),
      ),
      volumeLifecycleModes: Schema.optional(Schema.Array(Schema.String)),
    }),
  }) as unknown as Schema.Codec<DeleteStorageV1CSIDriverOutput>;

// The operation
/**
 * delete a CSIDriver
 *
 * @param name - name of the CSIDriver
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteStorageV1CSIDriver = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteStorageV1CSIDriverInput,
  outputSchema: DeleteStorageV1CSIDriverOutput,
  errors: [NotFound, Conflict] as const,
}));
// Input Schema
export interface DeleteStorageV1CSINodeInput {
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
export const DeleteStorageV1CSINodeInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/csinodes/{name}",
    }),
  ) as unknown as Schema.Codec<DeleteStorageV1CSINodeInput>;

// Output Schema
export interface DeleteStorageV1CSINodeOutput {
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
  spec: {
    drivers: {
      allocatable?: { count?: number };
      name: string;
      nodeID: string;
      topologyKeys?: string[];
    }[];
  };
}
export const DeleteStorageV1CSINodeOutput =
  /*@__PURE__*/ Schema.Struct({
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
      drivers: Schema.Array(
        Schema.Struct({
          allocatable: Schema.optional(
            Schema.Struct({
              count: Schema.optional(Schema.Number),
            }),
          ),
          name: Schema.String,
          nodeID: Schema.String,
          topologyKeys: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    }),
  }) as unknown as Schema.Codec<DeleteStorageV1CSINodeOutput>;

// The operation
/**
 * delete a CSINode
 *
 * @param name - name of the CSINode
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteStorageV1CSINode = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteStorageV1CSINodeInput,
  outputSchema: DeleteStorageV1CSINodeOutput,
  errors: [NotFound, Conflict] as const,
}));
// Input Schema
export interface DeleteStorageV1CollectionCSIDriverInput {
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
export const DeleteStorageV1CollectionCSIDriverInput =
  /*@__PURE__*/ Schema.Struct({
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
    T.Http({ method: "DELETE", path: "/apis/storage.k8s.io/v1/csidrivers" }),
  ) as unknown as Schema.Codec<DeleteStorageV1CollectionCSIDriverInput>;

// Output Schema
export interface DeleteStorageV1CollectionCSIDriverOutput {
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
export const DeleteStorageV1CollectionCSIDriverOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DeleteStorageV1CollectionCSIDriverOutput>;

// The operation
/**
 * delete collection of CSIDriver
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
export const deleteStorageV1CollectionCSIDriver =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteStorageV1CollectionCSIDriverInput,
    outputSchema: DeleteStorageV1CollectionCSIDriverOutput,
  }));
// Input Schema
export interface DeleteStorageV1CollectionCSINodeInput {
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
export const DeleteStorageV1CollectionCSINodeInput =
  /*@__PURE__*/ Schema.Struct({
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
    T.Http({ method: "DELETE", path: "/apis/storage.k8s.io/v1/csinodes" }),
  ) as unknown as Schema.Codec<DeleteStorageV1CollectionCSINodeInput>;

// Output Schema
export interface DeleteStorageV1CollectionCSINodeOutput {
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
export const DeleteStorageV1CollectionCSINodeOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DeleteStorageV1CollectionCSINodeOutput>;

// The operation
/**
 * delete collection of CSINode
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
export const deleteStorageV1CollectionCSINode =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteStorageV1CollectionCSINodeInput,
    outputSchema: DeleteStorageV1CollectionCSINodeOutput,
  }));
// Input Schema
export interface DeleteStorageV1CollectionNamespacedCSIStorageCapacityInput {
  namespace: string;
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
export const DeleteStorageV1CollectionNamespacedCSIStorageCapacityInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities",
    }),
  ) as unknown as Schema.Codec<DeleteStorageV1CollectionNamespacedCSIStorageCapacityInput>;

// Output Schema
export interface DeleteStorageV1CollectionNamespacedCSIStorageCapacityOutput {
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
export const DeleteStorageV1CollectionNamespacedCSIStorageCapacityOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DeleteStorageV1CollectionNamespacedCSIStorageCapacityOutput>;

// The operation
/**
 * delete collection of CSIStorageCapacity
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
export const deleteStorageV1CollectionNamespacedCSIStorageCapacity =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteStorageV1CollectionNamespacedCSIStorageCapacityInput,
    outputSchema: DeleteStorageV1CollectionNamespacedCSIStorageCapacityOutput,
  }));
// Input Schema
export interface DeleteStorageV1CollectionStorageClassInput {
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
export const DeleteStorageV1CollectionStorageClassInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/storageclasses",
    }),
  ) as unknown as Schema.Codec<DeleteStorageV1CollectionStorageClassInput>;

// Output Schema
export interface DeleteStorageV1CollectionStorageClassOutput {
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
export const DeleteStorageV1CollectionStorageClassOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DeleteStorageV1CollectionStorageClassOutput>;

// The operation
/**
 * delete collection of StorageClass
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
export const deleteStorageV1CollectionStorageClass =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteStorageV1CollectionStorageClassInput,
    outputSchema: DeleteStorageV1CollectionStorageClassOutput,
  }));
// Input Schema
export interface DeleteStorageV1CollectionVolumeAttachmentInput {
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
export const DeleteStorageV1CollectionVolumeAttachmentInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/volumeattachments",
    }),
  ) as unknown as Schema.Codec<DeleteStorageV1CollectionVolumeAttachmentInput>;

// Output Schema
export interface DeleteStorageV1CollectionVolumeAttachmentOutput {
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
export const DeleteStorageV1CollectionVolumeAttachmentOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DeleteStorageV1CollectionVolumeAttachmentOutput>;

// The operation
/**
 * delete collection of VolumeAttachment
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
export const deleteStorageV1CollectionVolumeAttachment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteStorageV1CollectionVolumeAttachmentInput,
    outputSchema: DeleteStorageV1CollectionVolumeAttachmentOutput,
  }));
// Input Schema
export interface DeleteStorageV1CollectionVolumeAttributesClassInput {
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
export const DeleteStorageV1CollectionVolumeAttributesClassInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/volumeattributesclasses",
    }),
  ) as unknown as Schema.Codec<DeleteStorageV1CollectionVolumeAttributesClassInput>;

// Output Schema
export interface DeleteStorageV1CollectionVolumeAttributesClassOutput {
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
export const DeleteStorageV1CollectionVolumeAttributesClassOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DeleteStorageV1CollectionVolumeAttributesClassOutput>;

// The operation
/**
 * delete collection of VolumeAttributesClass
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
export const deleteStorageV1CollectionVolumeAttributesClass =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteStorageV1CollectionVolumeAttributesClassInput,
    outputSchema: DeleteStorageV1CollectionVolumeAttributesClassOutput,
  }));
// Input Schema
export interface DeleteStorageV1NamespacedCSIStorageCapacityInput {
  name: string;
  namespace: string;
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
export const DeleteStorageV1NamespacedCSIStorageCapacityInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}",
    }),
  ) as unknown as Schema.Codec<DeleteStorageV1NamespacedCSIStorageCapacityInput>;

// Output Schema
export interface DeleteStorageV1NamespacedCSIStorageCapacityOutput {
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
export const DeleteStorageV1NamespacedCSIStorageCapacityOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DeleteStorageV1NamespacedCSIStorageCapacityOutput>;

// The operation
/**
 * delete a CSIStorageCapacity
 *
 * @param name - name of the CSIStorageCapacity
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteStorageV1NamespacedCSIStorageCapacity =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteStorageV1NamespacedCSIStorageCapacityInput,
    outputSchema: DeleteStorageV1NamespacedCSIStorageCapacityOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export interface DeleteStorageV1StorageClassInput {
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
export const DeleteStorageV1StorageClassInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/storageclasses/{name}",
    }),
  ) as unknown as Schema.Codec<DeleteStorageV1StorageClassInput>;

// Output Schema
export interface DeleteStorageV1StorageClassOutput {
  allowVolumeExpansion?: boolean;
  allowedTopologies?: {
    matchLabelExpressions?: { key: string; values: string[] }[];
  }[];
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
  mountOptions?: string[];
  parameters?: Record<string, string>;
  provisioner: string;
  reclaimPolicy?: string;
  volumeBindingMode?: string;
}
export const DeleteStorageV1StorageClassOutput =
  /*@__PURE__*/ Schema.Struct({
    allowVolumeExpansion: Schema.optional(Schema.Boolean),
    allowedTopologies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          matchLabelExpressions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.String,
                values: Schema.Array(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
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
    mountOptions: Schema.optional(Schema.Array(Schema.String)),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    provisioner: Schema.String,
    reclaimPolicy: Schema.optional(Schema.String),
    volumeBindingMode: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DeleteStorageV1StorageClassOutput>;

// The operation
/**
 * delete a StorageClass
 *
 * @param name - name of the StorageClass
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteStorageV1StorageClass = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteStorageV1StorageClassInput,
  outputSchema: DeleteStorageV1StorageClassOutput,
  errors: [NotFound, Conflict] as const,
}));
// Input Schema
export interface DeleteStorageV1VolumeAttachmentInput {
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
export const DeleteStorageV1VolumeAttachmentInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/volumeattachments/{name}",
    }),
  ) as unknown as Schema.Codec<DeleteStorageV1VolumeAttachmentInput>;

// Output Schema
export interface DeleteStorageV1VolumeAttachmentOutput {
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
  spec: {
    attacher: string;
    nodeName: string;
    source: {
      inlineVolumeSpec?: {
        accessModes?: string[];
        awsElasticBlockStore?: {
          fsType?: string;
          partition?: number;
          readOnly?: boolean;
          volumeID: string;
        };
        azureDisk?: {
          cachingMode?: string;
          diskName: string;
          diskURI: string;
          fsType?: string;
          kind?: string;
          readOnly?: boolean;
        };
        azureFile?: {
          readOnly?: boolean;
          secretName: string;
          secretNamespace?: string;
          shareName: string;
        };
        capacity?: Record<string, string>;
        cephfs?: {
          monitors: string[];
          path?: string;
          readOnly?: boolean;
          secretFile?: string;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        cinder?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          volumeID: string;
        };
        claimRef?: {
          apiVersion?: string;
          fieldPath?: string;
          kind?: string;
          name?: string;
          namespace?: string;
          resourceVersion?: string;
          uid?: string;
        };
        csi?: {
          controllerExpandSecretRef?: { name?: string; namespace?: string };
          controllerPublishSecretRef?: { name?: string; namespace?: string };
          driver: string;
          fsType?: string;
          nodeExpandSecretRef?: { name?: string; namespace?: string };
          nodePublishSecretRef?: { name?: string; namespace?: string };
          nodeStageSecretRef?: { name?: string; namespace?: string };
          readOnly?: boolean;
          volumeAttributes?: Record<string, string>;
          volumeHandle: string;
        };
        fc?: {
          fsType?: string;
          lun?: number;
          readOnly?: boolean;
          targetWWNs?: string[];
          wwids?: string[];
        };
        flexVolume?: {
          driver: string;
          fsType?: string;
          options?: Record<string, string>;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
        };
        flocker?: { datasetName?: string; datasetUUID?: string };
        gcePersistentDisk?: {
          fsType?: string;
          partition?: number;
          pdName: string;
          readOnly?: boolean;
        };
        glusterfs?: {
          endpoints: string;
          endpointsNamespace?: string;
          path: string;
          readOnly?: boolean;
        };
        hostPath?: { path: string; type?: string };
        iscsi?: {
          chapAuthDiscovery?: boolean;
          chapAuthSession?: boolean;
          fsType?: string;
          initiatorName?: string;
          iqn: string;
          iscsiInterface?: string;
          lun: number;
          portals?: string[];
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          targetPortal: string;
        };
        local?: { fsType?: string; path: string };
        mountOptions?: string[];
        nfs?: { path: string; readOnly?: boolean; server: string };
        nodeAffinity?: {
          required?: {
            nodeSelectorTerms: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
            }[];
          };
        };
        persistentVolumeReclaimPolicy?: string;
        photonPersistentDisk?: { fsType?: string; pdID: string };
        portworxVolume?: {
          fsType?: string;
          readOnly?: boolean;
          volumeID: string;
        };
        quobyte?: {
          group?: string;
          readOnly?: boolean;
          registry: string;
          tenant?: string;
          user?: string;
          volume: string;
        };
        rbd?: {
          fsType?: string;
          image: string;
          keyring?: string;
          monitors: string[];
          pool?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        scaleIO?: {
          fsType?: string;
          gateway: string;
          protectionDomain?: string;
          readOnly?: boolean;
          secretRef: { name?: string; namespace?: string };
          sslEnabled?: boolean;
          storageMode?: string;
          storagePool?: string;
          system: string;
          volumeName?: string;
        };
        storageClassName?: string;
        storageos?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            apiVersion?: string;
            fieldPath?: string;
            kind?: string;
            name?: string;
            namespace?: string;
            resourceVersion?: string;
            uid?: string;
          };
          volumeName?: string;
          volumeNamespace?: string;
        };
        volumeAttributesClassName?: string;
        volumeMode?: string;
        vsphereVolume?: {
          fsType?: string;
          storagePolicyID?: string;
          storagePolicyName?: string;
          volumePath: string;
        };
      };
      persistentVolumeName?: string;
    };
  };
  status?: {
    attachError?: { errorCode?: number; message?: string; time?: string };
    attached: boolean;
    attachmentMetadata?: Record<string, string>;
    detachError?: { errorCode?: number; message?: string; time?: string };
  };
}
export const DeleteStorageV1VolumeAttachmentOutput =
  /*@__PURE__*/ Schema.Struct({
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
      attacher: Schema.String,
      nodeName: Schema.String,
      source: Schema.Struct({
        inlineVolumeSpec: Schema.optional(
          Schema.Struct({
            accessModes: Schema.optional(Schema.Array(Schema.String)),
            awsElasticBlockStore: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            azureDisk: Schema.optional(
              Schema.Struct({
                cachingMode: Schema.optional(Schema.String),
                diskName: Schema.String,
                diskURI: Schema.String,
                fsType: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            azureFile: Schema.optional(
              Schema.Struct({
                readOnly: Schema.optional(Schema.Boolean),
                secretName: Schema.String,
                secretNamespace: Schema.optional(Schema.String),
                shareName: Schema.String,
              }),
            ),
            capacity: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            cephfs: Schema.optional(
              Schema.Struct({
                monitors: Schema.Array(Schema.String),
                path: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretFile: Schema.optional(Schema.String),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            cinder: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                volumeID: Schema.String,
              }),
            ),
            claimRef: Schema.optional(
              Schema.Struct({
                apiVersion: Schema.optional(Schema.String),
                fieldPath: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
                resourceVersion: Schema.optional(Schema.String),
                uid: Schema.optional(Schema.String),
              }),
            ),
            csi: Schema.optional(
              Schema.Struct({
                controllerExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                controllerPublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                nodeExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodePublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodeStageSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                volumeAttributes: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                volumeHandle: Schema.String,
              }),
            ),
            fc: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                lun: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                targetWWNs: Schema.optional(Schema.Array(Schema.String)),
                wwids: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            flexVolume: Schema.optional(
              Schema.Struct({
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                options: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            flocker: Schema.optional(
              Schema.Struct({
                datasetName: Schema.optional(Schema.String),
                datasetUUID: Schema.optional(Schema.String),
              }),
            ),
            gcePersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                pdName: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            glusterfs: Schema.optional(
              Schema.Struct({
                endpoints: Schema.String,
                endpointsNamespace: Schema.optional(Schema.String),
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            hostPath: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                type: Schema.optional(Schema.String),
              }),
            ),
            iscsi: Schema.optional(
              Schema.Struct({
                chapAuthDiscovery: Schema.optional(Schema.Boolean),
                chapAuthSession: Schema.optional(Schema.Boolean),
                fsType: Schema.optional(Schema.String),
                initiatorName: Schema.optional(Schema.String),
                iqn: Schema.String,
                iscsiInterface: Schema.optional(Schema.String),
                lun: Schema.Number,
                portals: Schema.optional(Schema.Array(Schema.String)),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                targetPortal: Schema.String,
              }),
            ),
            local: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                path: Schema.String,
              }),
            ),
            mountOptions: Schema.optional(Schema.Array(Schema.String)),
            nfs: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
                server: Schema.String,
              }),
            ),
            nodeAffinity: Schema.optional(
              Schema.Struct({
                required: Schema.optional(
                  Schema.Struct({
                    nodeSelectorTerms: Schema.Array(
                      Schema.Struct({
                        matchExpressions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                        matchFields: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            persistentVolumeReclaimPolicy: Schema.optional(Schema.String),
            photonPersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                pdID: Schema.String,
              }),
            ),
            portworxVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            quobyte: Schema.optional(
              Schema.Struct({
                group: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                registry: Schema.String,
                tenant: Schema.optional(Schema.String),
                user: Schema.optional(Schema.String),
                volume: Schema.String,
              }),
            ),
            rbd: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                image: Schema.String,
                keyring: Schema.optional(Schema.String),
                monitors: Schema.Array(Schema.String),
                pool: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            scaleIO: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                gateway: Schema.String,
                protectionDomain: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.Struct({
                  name: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                }),
                sslEnabled: Schema.optional(Schema.Boolean),
                storageMode: Schema.optional(Schema.String),
                storagePool: Schema.optional(Schema.String),
                system: Schema.String,
                volumeName: Schema.optional(Schema.String),
              }),
            ),
            storageClassName: Schema.optional(Schema.String),
            storageos: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    fieldPath: Schema.optional(Schema.String),
                    kind: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    resourceVersion: Schema.optional(Schema.String),
                    uid: Schema.optional(Schema.String),
                  }),
                ),
                volumeName: Schema.optional(Schema.String),
                volumeNamespace: Schema.optional(Schema.String),
              }),
            ),
            volumeAttributesClassName: Schema.optional(Schema.String),
            volumeMode: Schema.optional(Schema.String),
            vsphereVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                storagePolicyID: Schema.optional(Schema.String),
                storagePolicyName: Schema.optional(Schema.String),
                volumePath: Schema.String,
              }),
            ),
          }),
        ),
        persistentVolumeName: Schema.optional(Schema.String),
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        attachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
        attached: Schema.Boolean,
        attachmentMetadata: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        detachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<DeleteStorageV1VolumeAttachmentOutput>;

// The operation
/**
 * delete a VolumeAttachment
 *
 * @param name - name of the VolumeAttachment
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteStorageV1VolumeAttachment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteStorageV1VolumeAttachmentInput,
    outputSchema: DeleteStorageV1VolumeAttachmentOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export interface DeleteStorageV1VolumeAttributesClassInput {
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
export const DeleteStorageV1VolumeAttributesClassInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/volumeattributesclasses/{name}",
    }),
  ) as unknown as Schema.Codec<DeleteStorageV1VolumeAttributesClassInput>;

// Output Schema
export interface DeleteStorageV1VolumeAttributesClassOutput {
  apiVersion?: string;
  driverName: string;
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
  parameters?: Record<string, string>;
}
export const DeleteStorageV1VolumeAttributesClassOutput =
  /*@__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    driverName: Schema.String,
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
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<DeleteStorageV1VolumeAttributesClassOutput>;

// The operation
/**
 * delete a VolumeAttributesClass
 *
 * @param name - name of the VolumeAttributesClass
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteStorageV1VolumeAttributesClass =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteStorageV1VolumeAttributesClassInput,
    outputSchema: DeleteStorageV1VolumeAttributesClassOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export interface GetStorageAPIGroupInput {}
export const GetStorageAPIGroupInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/storage.k8s.io/" }),
  ) as unknown as Schema.Codec<GetStorageAPIGroupInput>;

// Output Schema
export interface GetStorageAPIGroupOutput {
  apiVersion?: string;
  kind?: string;
  name: string;
  preferredVersion?: { groupVersion: string; version: string };
  serverAddressByClientCIDRs?: { clientCIDR: string; serverAddress: string }[];
  versions: { groupVersion: string; version: string }[];
}
export const GetStorageAPIGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GetStorageAPIGroupOutput>;

// The operation
/**
 * get information of a group
 */
export const getStorageAPIGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetStorageAPIGroupInput,
  outputSchema: GetStorageAPIGroupOutput,
}));
// Input Schema
export interface GetStorageV1APIResourcesInput {}
export const GetStorageV1APIResourcesInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/storage.k8s.io/v1/" }),
  ) as unknown as Schema.Codec<GetStorageV1APIResourcesInput>;

// Output Schema
export interface GetStorageV1APIResourcesOutput {
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
export const GetStorageV1APIResourcesOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GetStorageV1APIResourcesOutput>;

// The operation
/**
 * get available resources
 */
export const getStorageV1APIResources = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetStorageV1APIResourcesInput,
  outputSchema: GetStorageV1APIResourcesOutput,
}));
// Input Schema
export interface ListStorageV1CSIDriverInput {
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
export const ListStorageV1CSIDriverInput =
  /*@__PURE__*/ Schema.Struct({
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
    T.Http({ method: "GET", path: "/apis/storage.k8s.io/v1/csidrivers" }),
  ) as unknown as Schema.Codec<ListStorageV1CSIDriverInput>;

// Output Schema
export interface ListStorageV1CSIDriverOutput {
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
    spec: {
      attachRequired?: boolean;
      fsGroupPolicy?: string;
      nodeAllocatableUpdatePeriodSeconds?: number;
      podInfoOnMount?: boolean;
      preventPodSchedulingIfMissing?: boolean;
      requiresRepublish?: boolean;
      seLinuxMount?: boolean;
      serviceAccountTokenInSecrets?: boolean;
      storageCapacity?: boolean;
      tokenRequests?: { audience: string; expirationSeconds?: number }[];
      volumeLifecycleModes?: string[];
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
export const ListStorageV1CSIDriverOutput =
  /*@__PURE__*/ Schema.Struct({
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
          attachRequired: Schema.optional(Schema.Boolean),
          fsGroupPolicy: Schema.optional(Schema.String),
          nodeAllocatableUpdatePeriodSeconds: Schema.optional(Schema.Number),
          podInfoOnMount: Schema.optional(Schema.Boolean),
          preventPodSchedulingIfMissing: Schema.optional(Schema.Boolean),
          requiresRepublish: Schema.optional(Schema.Boolean),
          seLinuxMount: Schema.optional(Schema.Boolean),
          serviceAccountTokenInSecrets: Schema.optional(Schema.Boolean),
          storageCapacity: Schema.optional(Schema.Boolean),
          tokenRequests: Schema.optional(
            Schema.Array(
              Schema.Struct({
                audience: Schema.String,
                expirationSeconds: Schema.optional(Schema.Number),
              }),
            ),
          ),
          volumeLifecycleModes: Schema.optional(Schema.Array(Schema.String)),
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
  }) as unknown as Schema.Codec<ListStorageV1CSIDriverOutput>;

// The operation
/**
 * list or watch objects of kind CSIDriver
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
export const listStorageV1CSIDriver = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListStorageV1CSIDriverInput,
  outputSchema: ListStorageV1CSIDriverOutput,
}));
// Input Schema
export interface ListStorageV1CSINodeInput {
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
export const ListStorageV1CSINodeInput =
  /*@__PURE__*/ Schema.Struct({
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
    T.Http({ method: "GET", path: "/apis/storage.k8s.io/v1/csinodes" }),
  ) as unknown as Schema.Codec<ListStorageV1CSINodeInput>;

// Output Schema
export interface ListStorageV1CSINodeOutput {
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
    spec: {
      drivers: {
        allocatable?: { count?: number };
        name: string;
        nodeID: string;
        topologyKeys?: string[];
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
export const ListStorageV1CSINodeOutput =
  /*@__PURE__*/ Schema.Struct({
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
          drivers: Schema.Array(
            Schema.Struct({
              allocatable: Schema.optional(
                Schema.Struct({
                  count: Schema.optional(Schema.Number),
                }),
              ),
              name: Schema.String,
              nodeID: Schema.String,
              topologyKeys: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
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
  }) as unknown as Schema.Codec<ListStorageV1CSINodeOutput>;

// The operation
/**
 * list or watch objects of kind CSINode
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
export const listStorageV1CSINode = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListStorageV1CSINodeInput,
  outputSchema: ListStorageV1CSINodeOutput,
}));
// Input Schema
export interface ListStorageV1CSIStorageCapacityForAllNamespacesInput {
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
export const ListStorageV1CSIStorageCapacityForAllNamespacesInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/csistoragecapacities",
    }),
  ) as unknown as Schema.Codec<ListStorageV1CSIStorageCapacityForAllNamespacesInput>;

// Output Schema
export interface ListStorageV1CSIStorageCapacityForAllNamespacesOutput {
  apiVersion?: string;
  items: {
    apiVersion?: string;
    capacity?: string;
    kind?: string;
    maximumVolumeSize?: string;
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
    nodeTopology?: {
      matchExpressions?: { key: string; operator: string; values?: string[] }[];
      matchLabels?: Record<string, string>;
    };
    storageClassName: string;
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
export const ListStorageV1CSIStorageCapacityForAllNamespacesOutput =
  /*@__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        maximumVolumeSize: Schema.optional(Schema.String),
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
        nodeTopology: Schema.optional(
          Schema.Struct({
            matchExpressions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  key: Schema.String,
                  operator: Schema.String,
                  values: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
            matchLabels: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
        storageClassName: Schema.String,
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
  }) as unknown as Schema.Codec<ListStorageV1CSIStorageCapacityForAllNamespacesOutput>;

// The operation
/**
 * list or watch objects of kind CSIStorageCapacity
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
export const listStorageV1CSIStorageCapacityForAllNamespaces =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ListStorageV1CSIStorageCapacityForAllNamespacesInput,
    outputSchema: ListStorageV1CSIStorageCapacityForAllNamespacesOutput,
  }));
// Input Schema
export interface ListStorageV1NamespacedCSIStorageCapacityInput {
  namespace: string;
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
export const ListStorageV1NamespacedCSIStorageCapacityInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities",
    }),
  ) as unknown as Schema.Codec<ListStorageV1NamespacedCSIStorageCapacityInput>;

// Output Schema
export interface ListStorageV1NamespacedCSIStorageCapacityOutput {
  apiVersion?: string;
  items: {
    apiVersion?: string;
    capacity?: string;
    kind?: string;
    maximumVolumeSize?: string;
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
    nodeTopology?: {
      matchExpressions?: { key: string; operator: string; values?: string[] }[];
      matchLabels?: Record<string, string>;
    };
    storageClassName: string;
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
export const ListStorageV1NamespacedCSIStorageCapacityOutput =
  /*@__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        maximumVolumeSize: Schema.optional(Schema.String),
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
        nodeTopology: Schema.optional(
          Schema.Struct({
            matchExpressions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  key: Schema.String,
                  operator: Schema.String,
                  values: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
            matchLabels: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
        storageClassName: Schema.String,
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
  }) as unknown as Schema.Codec<ListStorageV1NamespacedCSIStorageCapacityOutput>;

// The operation
/**
 * list or watch objects of kind CSIStorageCapacity
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
export const listStorageV1NamespacedCSIStorageCapacity =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ListStorageV1NamespacedCSIStorageCapacityInput,
    outputSchema: ListStorageV1NamespacedCSIStorageCapacityOutput,
  }));
// Input Schema
export interface ListStorageV1StorageClassInput {
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
export const ListStorageV1StorageClassInput =
  /*@__PURE__*/ Schema.Struct({
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
    T.Http({ method: "GET", path: "/apis/storage.k8s.io/v1/storageclasses" }),
  ) as unknown as Schema.Codec<ListStorageV1StorageClassInput>;

// Output Schema
export interface ListStorageV1StorageClassOutput {
  apiVersion?: string;
  items: {
    allowVolumeExpansion?: boolean;
    allowedTopologies?: {
      matchLabelExpressions?: { key: string; values: string[] }[];
    }[];
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
    mountOptions?: string[];
    parameters?: Record<string, string>;
    provisioner: string;
    reclaimPolicy?: string;
    volumeBindingMode?: string;
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
export const ListStorageV1StorageClassOutput =
  /*@__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.Struct({
        allowVolumeExpansion: Schema.optional(Schema.Boolean),
        allowedTopologies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              matchLabelExpressions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    key: Schema.String,
                    values: Schema.Array(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
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
        mountOptions: Schema.optional(Schema.Array(Schema.String)),
        parameters: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        provisioner: Schema.String,
        reclaimPolicy: Schema.optional(Schema.String),
        volumeBindingMode: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<ListStorageV1StorageClassOutput>;

// The operation
/**
 * list or watch objects of kind StorageClass
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
export const listStorageV1StorageClass = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListStorageV1StorageClassInput,
  outputSchema: ListStorageV1StorageClassOutput,
}));
// Input Schema
export interface ListStorageV1VolumeAttachmentInput {
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
export const ListStorageV1VolumeAttachmentInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/volumeattachments",
    }),
  ) as unknown as Schema.Codec<ListStorageV1VolumeAttachmentInput>;

// Output Schema
export interface ListStorageV1VolumeAttachmentOutput {
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
    spec: {
      attacher: string;
      nodeName: string;
      source: {
        inlineVolumeSpec?: {
          accessModes?: string[];
          awsElasticBlockStore?: {
            fsType?: string;
            partition?: number;
            readOnly?: boolean;
            volumeID: string;
          };
          azureDisk?: {
            cachingMode?: string;
            diskName: string;
            diskURI: string;
            fsType?: string;
            kind?: string;
            readOnly?: boolean;
          };
          azureFile?: {
            readOnly?: boolean;
            secretName: string;
            secretNamespace?: string;
            shareName: string;
          };
          capacity?: Record<string, string>;
          cephfs?: {
            monitors: string[];
            path?: string;
            readOnly?: boolean;
            secretFile?: string;
            secretRef?: { name?: string; namespace?: string };
            user?: string;
          };
          cinder?: {
            fsType?: string;
            readOnly?: boolean;
            secretRef?: { name?: string; namespace?: string };
            volumeID: string;
          };
          claimRef?: {
            apiVersion?: string;
            fieldPath?: string;
            kind?: string;
            name?: string;
            namespace?: string;
            resourceVersion?: string;
            uid?: string;
          };
          csi?: {
            controllerExpandSecretRef?: { name?: string; namespace?: string };
            controllerPublishSecretRef?: { name?: string; namespace?: string };
            driver: string;
            fsType?: string;
            nodeExpandSecretRef?: { name?: string; namespace?: string };
            nodePublishSecretRef?: { name?: string; namespace?: string };
            nodeStageSecretRef?: { name?: string; namespace?: string };
            readOnly?: boolean;
            volumeAttributes?: Record<string, string>;
            volumeHandle: string;
          };
          fc?: {
            fsType?: string;
            lun?: number;
            readOnly?: boolean;
            targetWWNs?: string[];
            wwids?: string[];
          };
          flexVolume?: {
            driver: string;
            fsType?: string;
            options?: Record<string, string>;
            readOnly?: boolean;
            secretRef?: { name?: string; namespace?: string };
          };
          flocker?: { datasetName?: string; datasetUUID?: string };
          gcePersistentDisk?: {
            fsType?: string;
            partition?: number;
            pdName: string;
            readOnly?: boolean;
          };
          glusterfs?: {
            endpoints: string;
            endpointsNamespace?: string;
            path: string;
            readOnly?: boolean;
          };
          hostPath?: { path: string; type?: string };
          iscsi?: {
            chapAuthDiscovery?: boolean;
            chapAuthSession?: boolean;
            fsType?: string;
            initiatorName?: string;
            iqn: string;
            iscsiInterface?: string;
            lun: number;
            portals?: string[];
            readOnly?: boolean;
            secretRef?: { name?: string; namespace?: string };
            targetPortal: string;
          };
          local?: { fsType?: string; path: string };
          mountOptions?: string[];
          nfs?: { path: string; readOnly?: boolean; server: string };
          nodeAffinity?: {
            required?: {
              nodeSelectorTerms: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                }[];
                matchFields?: {
                  key: string;
                  operator: string;
                  values?: string[];
                }[];
              }[];
            };
          };
          persistentVolumeReclaimPolicy?: string;
          photonPersistentDisk?: { fsType?: string; pdID: string };
          portworxVolume?: {
            fsType?: string;
            readOnly?: boolean;
            volumeID: string;
          };
          quobyte?: {
            group?: string;
            readOnly?: boolean;
            registry: string;
            tenant?: string;
            user?: string;
            volume: string;
          };
          rbd?: {
            fsType?: string;
            image: string;
            keyring?: string;
            monitors: string[];
            pool?: string;
            readOnly?: boolean;
            secretRef?: { name?: string; namespace?: string };
            user?: string;
          };
          scaleIO?: {
            fsType?: string;
            gateway: string;
            protectionDomain?: string;
            readOnly?: boolean;
            secretRef: { name?: string; namespace?: string };
            sslEnabled?: boolean;
            storageMode?: string;
            storagePool?: string;
            system: string;
            volumeName?: string;
          };
          storageClassName?: string;
          storageos?: {
            fsType?: string;
            readOnly?: boolean;
            secretRef?: {
              apiVersion?: string;
              fieldPath?: string;
              kind?: string;
              name?: string;
              namespace?: string;
              resourceVersion?: string;
              uid?: string;
            };
            volumeName?: string;
            volumeNamespace?: string;
          };
          volumeAttributesClassName?: string;
          volumeMode?: string;
          vsphereVolume?: {
            fsType?: string;
            storagePolicyID?: string;
            storagePolicyName?: string;
            volumePath: string;
          };
        };
        persistentVolumeName?: string;
      };
    };
    status?: {
      attachError?: { errorCode?: number; message?: string; time?: string };
      attached: boolean;
      attachmentMetadata?: Record<string, string>;
      detachError?: { errorCode?: number; message?: string; time?: string };
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
export const ListStorageV1VolumeAttachmentOutput =
  /*@__PURE__*/ Schema.Struct({
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
          attacher: Schema.String,
          nodeName: Schema.String,
          source: Schema.Struct({
            inlineVolumeSpec: Schema.optional(
              Schema.Struct({
                accessModes: Schema.optional(Schema.Array(Schema.String)),
                awsElasticBlockStore: Schema.optional(
                  Schema.Struct({
                    fsType: Schema.optional(Schema.String),
                    partition: Schema.optional(Schema.Number),
                    readOnly: Schema.optional(Schema.Boolean),
                    volumeID: Schema.String,
                  }),
                ),
                azureDisk: Schema.optional(
                  Schema.Struct({
                    cachingMode: Schema.optional(Schema.String),
                    diskName: Schema.String,
                    diskURI: Schema.String,
                    fsType: Schema.optional(Schema.String),
                    kind: Schema.optional(Schema.String),
                    readOnly: Schema.optional(Schema.Boolean),
                  }),
                ),
                azureFile: Schema.optional(
                  Schema.Struct({
                    readOnly: Schema.optional(Schema.Boolean),
                    secretName: Schema.String,
                    secretNamespace: Schema.optional(Schema.String),
                    shareName: Schema.String,
                  }),
                ),
                capacity: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                cephfs: Schema.optional(
                  Schema.Struct({
                    monitors: Schema.Array(Schema.String),
                    path: Schema.optional(Schema.String),
                    readOnly: Schema.optional(Schema.Boolean),
                    secretFile: Schema.optional(Schema.String),
                    secretRef: Schema.optional(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        namespace: Schema.optional(Schema.String),
                      }),
                    ),
                    user: Schema.optional(Schema.String),
                  }),
                ),
                cinder: Schema.optional(
                  Schema.Struct({
                    fsType: Schema.optional(Schema.String),
                    readOnly: Schema.optional(Schema.Boolean),
                    secretRef: Schema.optional(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        namespace: Schema.optional(Schema.String),
                      }),
                    ),
                    volumeID: Schema.String,
                  }),
                ),
                claimRef: Schema.optional(
                  Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    fieldPath: Schema.optional(Schema.String),
                    kind: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    resourceVersion: Schema.optional(Schema.String),
                    uid: Schema.optional(Schema.String),
                  }),
                ),
                csi: Schema.optional(
                  Schema.Struct({
                    controllerExpandSecretRef: Schema.optional(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        namespace: Schema.optional(Schema.String),
                      }),
                    ),
                    controllerPublishSecretRef: Schema.optional(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        namespace: Schema.optional(Schema.String),
                      }),
                    ),
                    driver: Schema.String,
                    fsType: Schema.optional(Schema.String),
                    nodeExpandSecretRef: Schema.optional(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        namespace: Schema.optional(Schema.String),
                      }),
                    ),
                    nodePublishSecretRef: Schema.optional(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        namespace: Schema.optional(Schema.String),
                      }),
                    ),
                    nodeStageSecretRef: Schema.optional(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        namespace: Schema.optional(Schema.String),
                      }),
                    ),
                    readOnly: Schema.optional(Schema.Boolean),
                    volumeAttributes: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    volumeHandle: Schema.String,
                  }),
                ),
                fc: Schema.optional(
                  Schema.Struct({
                    fsType: Schema.optional(Schema.String),
                    lun: Schema.optional(Schema.Number),
                    readOnly: Schema.optional(Schema.Boolean),
                    targetWWNs: Schema.optional(Schema.Array(Schema.String)),
                    wwids: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
                flexVolume: Schema.optional(
                  Schema.Struct({
                    driver: Schema.String,
                    fsType: Schema.optional(Schema.String),
                    options: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    readOnly: Schema.optional(Schema.Boolean),
                    secretRef: Schema.optional(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        namespace: Schema.optional(Schema.String),
                      }),
                    ),
                  }),
                ),
                flocker: Schema.optional(
                  Schema.Struct({
                    datasetName: Schema.optional(Schema.String),
                    datasetUUID: Schema.optional(Schema.String),
                  }),
                ),
                gcePersistentDisk: Schema.optional(
                  Schema.Struct({
                    fsType: Schema.optional(Schema.String),
                    partition: Schema.optional(Schema.Number),
                    pdName: Schema.String,
                    readOnly: Schema.optional(Schema.Boolean),
                  }),
                ),
                glusterfs: Schema.optional(
                  Schema.Struct({
                    endpoints: Schema.String,
                    endpointsNamespace: Schema.optional(Schema.String),
                    path: Schema.String,
                    readOnly: Schema.optional(Schema.Boolean),
                  }),
                ),
                hostPath: Schema.optional(
                  Schema.Struct({
                    path: Schema.String,
                    type: Schema.optional(Schema.String),
                  }),
                ),
                iscsi: Schema.optional(
                  Schema.Struct({
                    chapAuthDiscovery: Schema.optional(Schema.Boolean),
                    chapAuthSession: Schema.optional(Schema.Boolean),
                    fsType: Schema.optional(Schema.String),
                    initiatorName: Schema.optional(Schema.String),
                    iqn: Schema.String,
                    iscsiInterface: Schema.optional(Schema.String),
                    lun: Schema.Number,
                    portals: Schema.optional(Schema.Array(Schema.String)),
                    readOnly: Schema.optional(Schema.Boolean),
                    secretRef: Schema.optional(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        namespace: Schema.optional(Schema.String),
                      }),
                    ),
                    targetPortal: Schema.String,
                  }),
                ),
                local: Schema.optional(
                  Schema.Struct({
                    fsType: Schema.optional(Schema.String),
                    path: Schema.String,
                  }),
                ),
                mountOptions: Schema.optional(Schema.Array(Schema.String)),
                nfs: Schema.optional(
                  Schema.Struct({
                    path: Schema.String,
                    readOnly: Schema.optional(Schema.Boolean),
                    server: Schema.String,
                  }),
                ),
                nodeAffinity: Schema.optional(
                  Schema.Struct({
                    required: Schema.optional(
                      Schema.Struct({
                        nodeSelectorTerms: Schema.Array(
                          Schema.Struct({
                            matchExpressions: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  key: Schema.String,
                                  operator: Schema.String,
                                  values: Schema.optional(
                                    Schema.Array(Schema.String),
                                  ),
                                }),
                              ),
                            ),
                            matchFields: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  key: Schema.String,
                                  operator: Schema.String,
                                  values: Schema.optional(
                                    Schema.Array(Schema.String),
                                  ),
                                }),
                              ),
                            ),
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
                persistentVolumeReclaimPolicy: Schema.optional(Schema.String),
                photonPersistentDisk: Schema.optional(
                  Schema.Struct({
                    fsType: Schema.optional(Schema.String),
                    pdID: Schema.String,
                  }),
                ),
                portworxVolume: Schema.optional(
                  Schema.Struct({
                    fsType: Schema.optional(Schema.String),
                    readOnly: Schema.optional(Schema.Boolean),
                    volumeID: Schema.String,
                  }),
                ),
                quobyte: Schema.optional(
                  Schema.Struct({
                    group: Schema.optional(Schema.String),
                    readOnly: Schema.optional(Schema.Boolean),
                    registry: Schema.String,
                    tenant: Schema.optional(Schema.String),
                    user: Schema.optional(Schema.String),
                    volume: Schema.String,
                  }),
                ),
                rbd: Schema.optional(
                  Schema.Struct({
                    fsType: Schema.optional(Schema.String),
                    image: Schema.String,
                    keyring: Schema.optional(Schema.String),
                    monitors: Schema.Array(Schema.String),
                    pool: Schema.optional(Schema.String),
                    readOnly: Schema.optional(Schema.Boolean),
                    secretRef: Schema.optional(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        namespace: Schema.optional(Schema.String),
                      }),
                    ),
                    user: Schema.optional(Schema.String),
                  }),
                ),
                scaleIO: Schema.optional(
                  Schema.Struct({
                    fsType: Schema.optional(Schema.String),
                    gateway: Schema.String,
                    protectionDomain: Schema.optional(Schema.String),
                    readOnly: Schema.optional(Schema.Boolean),
                    secretRef: Schema.Struct({
                      name: Schema.optional(Schema.String),
                      namespace: Schema.optional(Schema.String),
                    }),
                    sslEnabled: Schema.optional(Schema.Boolean),
                    storageMode: Schema.optional(Schema.String),
                    storagePool: Schema.optional(Schema.String),
                    system: Schema.String,
                    volumeName: Schema.optional(Schema.String),
                  }),
                ),
                storageClassName: Schema.optional(Schema.String),
                storageos: Schema.optional(
                  Schema.Struct({
                    fsType: Schema.optional(Schema.String),
                    readOnly: Schema.optional(Schema.Boolean),
                    secretRef: Schema.optional(
                      Schema.Struct({
                        apiVersion: Schema.optional(Schema.String),
                        fieldPath: Schema.optional(Schema.String),
                        kind: Schema.optional(Schema.String),
                        name: Schema.optional(Schema.String),
                        namespace: Schema.optional(Schema.String),
                        resourceVersion: Schema.optional(Schema.String),
                        uid: Schema.optional(Schema.String),
                      }),
                    ),
                    volumeName: Schema.optional(Schema.String),
                    volumeNamespace: Schema.optional(Schema.String),
                  }),
                ),
                volumeAttributesClassName: Schema.optional(Schema.String),
                volumeMode: Schema.optional(Schema.String),
                vsphereVolume: Schema.optional(
                  Schema.Struct({
                    fsType: Schema.optional(Schema.String),
                    storagePolicyID: Schema.optional(Schema.String),
                    storagePolicyName: Schema.optional(Schema.String),
                    volumePath: Schema.String,
                  }),
                ),
              }),
            ),
            persistentVolumeName: Schema.optional(Schema.String),
          }),
        }),
        status: Schema.optional(
          Schema.Struct({
            attachError: Schema.optional(
              Schema.Struct({
                errorCode: Schema.optional(Schema.Number),
                message: Schema.optional(Schema.String),
                time: Schema.optional(Schema.String),
              }),
            ),
            attached: Schema.Boolean,
            attachmentMetadata: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            detachError: Schema.optional(
              Schema.Struct({
                errorCode: Schema.optional(Schema.Number),
                message: Schema.optional(Schema.String),
                time: Schema.optional(Schema.String),
              }),
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
  }) as unknown as Schema.Codec<ListStorageV1VolumeAttachmentOutput>;

// The operation
/**
 * list or watch objects of kind VolumeAttachment
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
export const listStorageV1VolumeAttachment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ListStorageV1VolumeAttachmentInput,
    outputSchema: ListStorageV1VolumeAttachmentOutput,
  }));
// Input Schema
export interface ListStorageV1VolumeAttributesClassInput {
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
export const ListStorageV1VolumeAttributesClassInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/volumeattributesclasses",
    }),
  ) as unknown as Schema.Codec<ListStorageV1VolumeAttributesClassInput>;

// Output Schema
export interface ListStorageV1VolumeAttributesClassOutput {
  apiVersion?: string;
  items: {
    apiVersion?: string;
    driverName: string;
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
    parameters?: Record<string, string>;
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
export const ListStorageV1VolumeAttributesClassOutput =
  /*@__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    items: Schema.Array(
      Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        driverName: Schema.String,
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
        parameters: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
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
  }) as unknown as Schema.Codec<ListStorageV1VolumeAttributesClassOutput>;

// The operation
/**
 * list or watch objects of kind VolumeAttributesClass
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
export const listStorageV1VolumeAttributesClass =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ListStorageV1VolumeAttributesClassInput,
    outputSchema: ListStorageV1VolumeAttributesClassOutput,
  }));
// Input Schema
export interface PatchStorageV1CSIDriverInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  force?: boolean;
}
export const PatchStorageV1CSIDriverInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/storage.k8s.io/v1/csidrivers/{name}",
    }),
  ) as unknown as Schema.Codec<PatchStorageV1CSIDriverInput>;

// Output Schema
export interface PatchStorageV1CSIDriverOutput {
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
  spec: {
    attachRequired?: boolean;
    fsGroupPolicy?: string;
    nodeAllocatableUpdatePeriodSeconds?: number;
    podInfoOnMount?: boolean;
    preventPodSchedulingIfMissing?: boolean;
    requiresRepublish?: boolean;
    seLinuxMount?: boolean;
    serviceAccountTokenInSecrets?: boolean;
    storageCapacity?: boolean;
    tokenRequests?: { audience: string; expirationSeconds?: number }[];
    volumeLifecycleModes?: string[];
  };
}
export const PatchStorageV1CSIDriverOutput =
  /*@__PURE__*/ Schema.Struct({
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
      attachRequired: Schema.optional(Schema.Boolean),
      fsGroupPolicy: Schema.optional(Schema.String),
      nodeAllocatableUpdatePeriodSeconds: Schema.optional(Schema.Number),
      podInfoOnMount: Schema.optional(Schema.Boolean),
      preventPodSchedulingIfMissing: Schema.optional(Schema.Boolean),
      requiresRepublish: Schema.optional(Schema.Boolean),
      seLinuxMount: Schema.optional(Schema.Boolean),
      serviceAccountTokenInSecrets: Schema.optional(Schema.Boolean),
      storageCapacity: Schema.optional(Schema.Boolean),
      tokenRequests: Schema.optional(
        Schema.Array(
          Schema.Struct({
            audience: Schema.String,
            expirationSeconds: Schema.optional(Schema.Number),
          }),
        ),
      ),
      volumeLifecycleModes: Schema.optional(Schema.Array(Schema.String)),
    }),
  }) as unknown as Schema.Codec<PatchStorageV1CSIDriverOutput>;

// The operation
/**
 * partially update the specified CSIDriver
 *
 * @param name - name of the CSIDriver
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchStorageV1CSIDriver = /*@__PURE__*/ API.make(() => ({
  inputSchema: PatchStorageV1CSIDriverInput,
  outputSchema: PatchStorageV1CSIDriverOutput,
  errors: [NotFound, Conflict, UnprocessableEntity] as const,
}));
// Input Schema
export interface PatchStorageV1CSINodeInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  force?: boolean;
}
export const PatchStorageV1CSINodeInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/storage.k8s.io/v1/csinodes/{name}",
    }),
  ) as unknown as Schema.Codec<PatchStorageV1CSINodeInput>;

// Output Schema
export interface PatchStorageV1CSINodeOutput {
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
  spec: {
    drivers: {
      allocatable?: { count?: number };
      name: string;
      nodeID: string;
      topologyKeys?: string[];
    }[];
  };
}
export const PatchStorageV1CSINodeOutput =
  /*@__PURE__*/ Schema.Struct({
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
      drivers: Schema.Array(
        Schema.Struct({
          allocatable: Schema.optional(
            Schema.Struct({
              count: Schema.optional(Schema.Number),
            }),
          ),
          name: Schema.String,
          nodeID: Schema.String,
          topologyKeys: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    }),
  }) as unknown as Schema.Codec<PatchStorageV1CSINodeOutput>;

// The operation
/**
 * partially update the specified CSINode
 *
 * @param name - name of the CSINode
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchStorageV1CSINode = /*@__PURE__*/ API.make(() => ({
  inputSchema: PatchStorageV1CSINodeInput,
  outputSchema: PatchStorageV1CSINodeOutput,
  errors: [NotFound, Conflict, UnprocessableEntity] as const,
}));
// Input Schema
export interface PatchStorageV1NamespacedCSIStorageCapacityInput {
  name: string;
  namespace: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  force?: boolean;
}
export const PatchStorageV1NamespacedCSIStorageCapacityInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}",
    }),
  ) as unknown as Schema.Codec<PatchStorageV1NamespacedCSIStorageCapacityInput>;

// Output Schema
export interface PatchStorageV1NamespacedCSIStorageCapacityOutput {
  apiVersion?: string;
  capacity?: string;
  kind?: string;
  maximumVolumeSize?: string;
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
  nodeTopology?: {
    matchExpressions?: { key: string; operator: string; values?: string[] }[];
    matchLabels?: Record<string, string>;
  };
  storageClassName: string;
}
export const PatchStorageV1NamespacedCSIStorageCapacityOutput =
  /*@__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    capacity: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    maximumVolumeSize: Schema.optional(Schema.String),
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
    nodeTopology: Schema.optional(
      Schema.Struct({
        matchExpressions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.String,
              operator: Schema.String,
              values: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        matchLabels: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
      }),
    ),
    storageClassName: Schema.String,
  }) as unknown as Schema.Codec<PatchStorageV1NamespacedCSIStorageCapacityOutput>;

// The operation
/**
 * partially update the specified CSIStorageCapacity
 *
 * @param name - name of the CSIStorageCapacity
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchStorageV1NamespacedCSIStorageCapacity =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PatchStorageV1NamespacedCSIStorageCapacityInput,
    outputSchema: PatchStorageV1NamespacedCSIStorageCapacityOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface PatchStorageV1StorageClassInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  force?: boolean;
}
export const PatchStorageV1StorageClassInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/storage.k8s.io/v1/storageclasses/{name}",
    }),
  ) as unknown as Schema.Codec<PatchStorageV1StorageClassInput>;

// Output Schema
export interface PatchStorageV1StorageClassOutput {
  allowVolumeExpansion?: boolean;
  allowedTopologies?: {
    matchLabelExpressions?: { key: string; values: string[] }[];
  }[];
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
  mountOptions?: string[];
  parameters?: Record<string, string>;
  provisioner: string;
  reclaimPolicy?: string;
  volumeBindingMode?: string;
}
export const PatchStorageV1StorageClassOutput =
  /*@__PURE__*/ Schema.Struct({
    allowVolumeExpansion: Schema.optional(Schema.Boolean),
    allowedTopologies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          matchLabelExpressions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.String,
                values: Schema.Array(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
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
    mountOptions: Schema.optional(Schema.Array(Schema.String)),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    provisioner: Schema.String,
    reclaimPolicy: Schema.optional(Schema.String),
    volumeBindingMode: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PatchStorageV1StorageClassOutput>;

// The operation
/**
 * partially update the specified StorageClass
 *
 * @param name - name of the StorageClass
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchStorageV1StorageClass = /*@__PURE__*/ API.make(() => ({
  inputSchema: PatchStorageV1StorageClassInput,
  outputSchema: PatchStorageV1StorageClassOutput,
  errors: [NotFound, Conflict, UnprocessableEntity] as const,
}));
// Input Schema
export interface PatchStorageV1VolumeAttachmentInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  force?: boolean;
}
export const PatchStorageV1VolumeAttachmentInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/storage.k8s.io/v1/volumeattachments/{name}",
    }),
  ) as unknown as Schema.Codec<PatchStorageV1VolumeAttachmentInput>;

// Output Schema
export interface PatchStorageV1VolumeAttachmentOutput {
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
  spec: {
    attacher: string;
    nodeName: string;
    source: {
      inlineVolumeSpec?: {
        accessModes?: string[];
        awsElasticBlockStore?: {
          fsType?: string;
          partition?: number;
          readOnly?: boolean;
          volumeID: string;
        };
        azureDisk?: {
          cachingMode?: string;
          diskName: string;
          diskURI: string;
          fsType?: string;
          kind?: string;
          readOnly?: boolean;
        };
        azureFile?: {
          readOnly?: boolean;
          secretName: string;
          secretNamespace?: string;
          shareName: string;
        };
        capacity?: Record<string, string>;
        cephfs?: {
          monitors: string[];
          path?: string;
          readOnly?: boolean;
          secretFile?: string;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        cinder?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          volumeID: string;
        };
        claimRef?: {
          apiVersion?: string;
          fieldPath?: string;
          kind?: string;
          name?: string;
          namespace?: string;
          resourceVersion?: string;
          uid?: string;
        };
        csi?: {
          controllerExpandSecretRef?: { name?: string; namespace?: string };
          controllerPublishSecretRef?: { name?: string; namespace?: string };
          driver: string;
          fsType?: string;
          nodeExpandSecretRef?: { name?: string; namespace?: string };
          nodePublishSecretRef?: { name?: string; namespace?: string };
          nodeStageSecretRef?: { name?: string; namespace?: string };
          readOnly?: boolean;
          volumeAttributes?: Record<string, string>;
          volumeHandle: string;
        };
        fc?: {
          fsType?: string;
          lun?: number;
          readOnly?: boolean;
          targetWWNs?: string[];
          wwids?: string[];
        };
        flexVolume?: {
          driver: string;
          fsType?: string;
          options?: Record<string, string>;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
        };
        flocker?: { datasetName?: string; datasetUUID?: string };
        gcePersistentDisk?: {
          fsType?: string;
          partition?: number;
          pdName: string;
          readOnly?: boolean;
        };
        glusterfs?: {
          endpoints: string;
          endpointsNamespace?: string;
          path: string;
          readOnly?: boolean;
        };
        hostPath?: { path: string; type?: string };
        iscsi?: {
          chapAuthDiscovery?: boolean;
          chapAuthSession?: boolean;
          fsType?: string;
          initiatorName?: string;
          iqn: string;
          iscsiInterface?: string;
          lun: number;
          portals?: string[];
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          targetPortal: string;
        };
        local?: { fsType?: string; path: string };
        mountOptions?: string[];
        nfs?: { path: string; readOnly?: boolean; server: string };
        nodeAffinity?: {
          required?: {
            nodeSelectorTerms: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
            }[];
          };
        };
        persistentVolumeReclaimPolicy?: string;
        photonPersistentDisk?: { fsType?: string; pdID: string };
        portworxVolume?: {
          fsType?: string;
          readOnly?: boolean;
          volumeID: string;
        };
        quobyte?: {
          group?: string;
          readOnly?: boolean;
          registry: string;
          tenant?: string;
          user?: string;
          volume: string;
        };
        rbd?: {
          fsType?: string;
          image: string;
          keyring?: string;
          monitors: string[];
          pool?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        scaleIO?: {
          fsType?: string;
          gateway: string;
          protectionDomain?: string;
          readOnly?: boolean;
          secretRef: { name?: string; namespace?: string };
          sslEnabled?: boolean;
          storageMode?: string;
          storagePool?: string;
          system: string;
          volumeName?: string;
        };
        storageClassName?: string;
        storageos?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            apiVersion?: string;
            fieldPath?: string;
            kind?: string;
            name?: string;
            namespace?: string;
            resourceVersion?: string;
            uid?: string;
          };
          volumeName?: string;
          volumeNamespace?: string;
        };
        volumeAttributesClassName?: string;
        volumeMode?: string;
        vsphereVolume?: {
          fsType?: string;
          storagePolicyID?: string;
          storagePolicyName?: string;
          volumePath: string;
        };
      };
      persistentVolumeName?: string;
    };
  };
  status?: {
    attachError?: { errorCode?: number; message?: string; time?: string };
    attached: boolean;
    attachmentMetadata?: Record<string, string>;
    detachError?: { errorCode?: number; message?: string; time?: string };
  };
}
export const PatchStorageV1VolumeAttachmentOutput =
  /*@__PURE__*/ Schema.Struct({
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
      attacher: Schema.String,
      nodeName: Schema.String,
      source: Schema.Struct({
        inlineVolumeSpec: Schema.optional(
          Schema.Struct({
            accessModes: Schema.optional(Schema.Array(Schema.String)),
            awsElasticBlockStore: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            azureDisk: Schema.optional(
              Schema.Struct({
                cachingMode: Schema.optional(Schema.String),
                diskName: Schema.String,
                diskURI: Schema.String,
                fsType: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            azureFile: Schema.optional(
              Schema.Struct({
                readOnly: Schema.optional(Schema.Boolean),
                secretName: Schema.String,
                secretNamespace: Schema.optional(Schema.String),
                shareName: Schema.String,
              }),
            ),
            capacity: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            cephfs: Schema.optional(
              Schema.Struct({
                monitors: Schema.Array(Schema.String),
                path: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretFile: Schema.optional(Schema.String),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            cinder: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                volumeID: Schema.String,
              }),
            ),
            claimRef: Schema.optional(
              Schema.Struct({
                apiVersion: Schema.optional(Schema.String),
                fieldPath: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
                resourceVersion: Schema.optional(Schema.String),
                uid: Schema.optional(Schema.String),
              }),
            ),
            csi: Schema.optional(
              Schema.Struct({
                controllerExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                controllerPublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                nodeExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodePublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodeStageSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                volumeAttributes: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                volumeHandle: Schema.String,
              }),
            ),
            fc: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                lun: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                targetWWNs: Schema.optional(Schema.Array(Schema.String)),
                wwids: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            flexVolume: Schema.optional(
              Schema.Struct({
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                options: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            flocker: Schema.optional(
              Schema.Struct({
                datasetName: Schema.optional(Schema.String),
                datasetUUID: Schema.optional(Schema.String),
              }),
            ),
            gcePersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                pdName: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            glusterfs: Schema.optional(
              Schema.Struct({
                endpoints: Schema.String,
                endpointsNamespace: Schema.optional(Schema.String),
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            hostPath: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                type: Schema.optional(Schema.String),
              }),
            ),
            iscsi: Schema.optional(
              Schema.Struct({
                chapAuthDiscovery: Schema.optional(Schema.Boolean),
                chapAuthSession: Schema.optional(Schema.Boolean),
                fsType: Schema.optional(Schema.String),
                initiatorName: Schema.optional(Schema.String),
                iqn: Schema.String,
                iscsiInterface: Schema.optional(Schema.String),
                lun: Schema.Number,
                portals: Schema.optional(Schema.Array(Schema.String)),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                targetPortal: Schema.String,
              }),
            ),
            local: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                path: Schema.String,
              }),
            ),
            mountOptions: Schema.optional(Schema.Array(Schema.String)),
            nfs: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
                server: Schema.String,
              }),
            ),
            nodeAffinity: Schema.optional(
              Schema.Struct({
                required: Schema.optional(
                  Schema.Struct({
                    nodeSelectorTerms: Schema.Array(
                      Schema.Struct({
                        matchExpressions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                        matchFields: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            persistentVolumeReclaimPolicy: Schema.optional(Schema.String),
            photonPersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                pdID: Schema.String,
              }),
            ),
            portworxVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            quobyte: Schema.optional(
              Schema.Struct({
                group: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                registry: Schema.String,
                tenant: Schema.optional(Schema.String),
                user: Schema.optional(Schema.String),
                volume: Schema.String,
              }),
            ),
            rbd: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                image: Schema.String,
                keyring: Schema.optional(Schema.String),
                monitors: Schema.Array(Schema.String),
                pool: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            scaleIO: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                gateway: Schema.String,
                protectionDomain: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.Struct({
                  name: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                }),
                sslEnabled: Schema.optional(Schema.Boolean),
                storageMode: Schema.optional(Schema.String),
                storagePool: Schema.optional(Schema.String),
                system: Schema.String,
                volumeName: Schema.optional(Schema.String),
              }),
            ),
            storageClassName: Schema.optional(Schema.String),
            storageos: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    fieldPath: Schema.optional(Schema.String),
                    kind: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    resourceVersion: Schema.optional(Schema.String),
                    uid: Schema.optional(Schema.String),
                  }),
                ),
                volumeName: Schema.optional(Schema.String),
                volumeNamespace: Schema.optional(Schema.String),
              }),
            ),
            volumeAttributesClassName: Schema.optional(Schema.String),
            volumeMode: Schema.optional(Schema.String),
            vsphereVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                storagePolicyID: Schema.optional(Schema.String),
                storagePolicyName: Schema.optional(Schema.String),
                volumePath: Schema.String,
              }),
            ),
          }),
        ),
        persistentVolumeName: Schema.optional(Schema.String),
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        attachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
        attached: Schema.Boolean,
        attachmentMetadata: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        detachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<PatchStorageV1VolumeAttachmentOutput>;

// The operation
/**
 * partially update the specified VolumeAttachment
 *
 * @param name - name of the VolumeAttachment
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchStorageV1VolumeAttachment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PatchStorageV1VolumeAttachmentInput,
    outputSchema: PatchStorageV1VolumeAttachmentOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface PatchStorageV1VolumeAttachmentStatusInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  force?: boolean;
}
export const PatchStorageV1VolumeAttachmentStatusInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/storage.k8s.io/v1/volumeattachments/{name}/status",
    }),
  ) as unknown as Schema.Codec<PatchStorageV1VolumeAttachmentStatusInput>;

// Output Schema
export interface PatchStorageV1VolumeAttachmentStatusOutput {
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
  spec: {
    attacher: string;
    nodeName: string;
    source: {
      inlineVolumeSpec?: {
        accessModes?: string[];
        awsElasticBlockStore?: {
          fsType?: string;
          partition?: number;
          readOnly?: boolean;
          volumeID: string;
        };
        azureDisk?: {
          cachingMode?: string;
          diskName: string;
          diskURI: string;
          fsType?: string;
          kind?: string;
          readOnly?: boolean;
        };
        azureFile?: {
          readOnly?: boolean;
          secretName: string;
          secretNamespace?: string;
          shareName: string;
        };
        capacity?: Record<string, string>;
        cephfs?: {
          monitors: string[];
          path?: string;
          readOnly?: boolean;
          secretFile?: string;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        cinder?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          volumeID: string;
        };
        claimRef?: {
          apiVersion?: string;
          fieldPath?: string;
          kind?: string;
          name?: string;
          namespace?: string;
          resourceVersion?: string;
          uid?: string;
        };
        csi?: {
          controllerExpandSecretRef?: { name?: string; namespace?: string };
          controllerPublishSecretRef?: { name?: string; namespace?: string };
          driver: string;
          fsType?: string;
          nodeExpandSecretRef?: { name?: string; namespace?: string };
          nodePublishSecretRef?: { name?: string; namespace?: string };
          nodeStageSecretRef?: { name?: string; namespace?: string };
          readOnly?: boolean;
          volumeAttributes?: Record<string, string>;
          volumeHandle: string;
        };
        fc?: {
          fsType?: string;
          lun?: number;
          readOnly?: boolean;
          targetWWNs?: string[];
          wwids?: string[];
        };
        flexVolume?: {
          driver: string;
          fsType?: string;
          options?: Record<string, string>;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
        };
        flocker?: { datasetName?: string; datasetUUID?: string };
        gcePersistentDisk?: {
          fsType?: string;
          partition?: number;
          pdName: string;
          readOnly?: boolean;
        };
        glusterfs?: {
          endpoints: string;
          endpointsNamespace?: string;
          path: string;
          readOnly?: boolean;
        };
        hostPath?: { path: string; type?: string };
        iscsi?: {
          chapAuthDiscovery?: boolean;
          chapAuthSession?: boolean;
          fsType?: string;
          initiatorName?: string;
          iqn: string;
          iscsiInterface?: string;
          lun: number;
          portals?: string[];
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          targetPortal: string;
        };
        local?: { fsType?: string; path: string };
        mountOptions?: string[];
        nfs?: { path: string; readOnly?: boolean; server: string };
        nodeAffinity?: {
          required?: {
            nodeSelectorTerms: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
            }[];
          };
        };
        persistentVolumeReclaimPolicy?: string;
        photonPersistentDisk?: { fsType?: string; pdID: string };
        portworxVolume?: {
          fsType?: string;
          readOnly?: boolean;
          volumeID: string;
        };
        quobyte?: {
          group?: string;
          readOnly?: boolean;
          registry: string;
          tenant?: string;
          user?: string;
          volume: string;
        };
        rbd?: {
          fsType?: string;
          image: string;
          keyring?: string;
          monitors: string[];
          pool?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        scaleIO?: {
          fsType?: string;
          gateway: string;
          protectionDomain?: string;
          readOnly?: boolean;
          secretRef: { name?: string; namespace?: string };
          sslEnabled?: boolean;
          storageMode?: string;
          storagePool?: string;
          system: string;
          volumeName?: string;
        };
        storageClassName?: string;
        storageos?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            apiVersion?: string;
            fieldPath?: string;
            kind?: string;
            name?: string;
            namespace?: string;
            resourceVersion?: string;
            uid?: string;
          };
          volumeName?: string;
          volumeNamespace?: string;
        };
        volumeAttributesClassName?: string;
        volumeMode?: string;
        vsphereVolume?: {
          fsType?: string;
          storagePolicyID?: string;
          storagePolicyName?: string;
          volumePath: string;
        };
      };
      persistentVolumeName?: string;
    };
  };
  status?: {
    attachError?: { errorCode?: number; message?: string; time?: string };
    attached: boolean;
    attachmentMetadata?: Record<string, string>;
    detachError?: { errorCode?: number; message?: string; time?: string };
  };
}
export const PatchStorageV1VolumeAttachmentStatusOutput =
  /*@__PURE__*/ Schema.Struct({
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
      attacher: Schema.String,
      nodeName: Schema.String,
      source: Schema.Struct({
        inlineVolumeSpec: Schema.optional(
          Schema.Struct({
            accessModes: Schema.optional(Schema.Array(Schema.String)),
            awsElasticBlockStore: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            azureDisk: Schema.optional(
              Schema.Struct({
                cachingMode: Schema.optional(Schema.String),
                diskName: Schema.String,
                diskURI: Schema.String,
                fsType: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            azureFile: Schema.optional(
              Schema.Struct({
                readOnly: Schema.optional(Schema.Boolean),
                secretName: Schema.String,
                secretNamespace: Schema.optional(Schema.String),
                shareName: Schema.String,
              }),
            ),
            capacity: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            cephfs: Schema.optional(
              Schema.Struct({
                monitors: Schema.Array(Schema.String),
                path: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretFile: Schema.optional(Schema.String),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            cinder: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                volumeID: Schema.String,
              }),
            ),
            claimRef: Schema.optional(
              Schema.Struct({
                apiVersion: Schema.optional(Schema.String),
                fieldPath: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
                resourceVersion: Schema.optional(Schema.String),
                uid: Schema.optional(Schema.String),
              }),
            ),
            csi: Schema.optional(
              Schema.Struct({
                controllerExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                controllerPublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                nodeExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodePublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodeStageSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                volumeAttributes: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                volumeHandle: Schema.String,
              }),
            ),
            fc: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                lun: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                targetWWNs: Schema.optional(Schema.Array(Schema.String)),
                wwids: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            flexVolume: Schema.optional(
              Schema.Struct({
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                options: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            flocker: Schema.optional(
              Schema.Struct({
                datasetName: Schema.optional(Schema.String),
                datasetUUID: Schema.optional(Schema.String),
              }),
            ),
            gcePersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                pdName: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            glusterfs: Schema.optional(
              Schema.Struct({
                endpoints: Schema.String,
                endpointsNamespace: Schema.optional(Schema.String),
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            hostPath: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                type: Schema.optional(Schema.String),
              }),
            ),
            iscsi: Schema.optional(
              Schema.Struct({
                chapAuthDiscovery: Schema.optional(Schema.Boolean),
                chapAuthSession: Schema.optional(Schema.Boolean),
                fsType: Schema.optional(Schema.String),
                initiatorName: Schema.optional(Schema.String),
                iqn: Schema.String,
                iscsiInterface: Schema.optional(Schema.String),
                lun: Schema.Number,
                portals: Schema.optional(Schema.Array(Schema.String)),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                targetPortal: Schema.String,
              }),
            ),
            local: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                path: Schema.String,
              }),
            ),
            mountOptions: Schema.optional(Schema.Array(Schema.String)),
            nfs: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
                server: Schema.String,
              }),
            ),
            nodeAffinity: Schema.optional(
              Schema.Struct({
                required: Schema.optional(
                  Schema.Struct({
                    nodeSelectorTerms: Schema.Array(
                      Schema.Struct({
                        matchExpressions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                        matchFields: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            persistentVolumeReclaimPolicy: Schema.optional(Schema.String),
            photonPersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                pdID: Schema.String,
              }),
            ),
            portworxVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            quobyte: Schema.optional(
              Schema.Struct({
                group: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                registry: Schema.String,
                tenant: Schema.optional(Schema.String),
                user: Schema.optional(Schema.String),
                volume: Schema.String,
              }),
            ),
            rbd: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                image: Schema.String,
                keyring: Schema.optional(Schema.String),
                monitors: Schema.Array(Schema.String),
                pool: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            scaleIO: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                gateway: Schema.String,
                protectionDomain: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.Struct({
                  name: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                }),
                sslEnabled: Schema.optional(Schema.Boolean),
                storageMode: Schema.optional(Schema.String),
                storagePool: Schema.optional(Schema.String),
                system: Schema.String,
                volumeName: Schema.optional(Schema.String),
              }),
            ),
            storageClassName: Schema.optional(Schema.String),
            storageos: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    fieldPath: Schema.optional(Schema.String),
                    kind: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    resourceVersion: Schema.optional(Schema.String),
                    uid: Schema.optional(Schema.String),
                  }),
                ),
                volumeName: Schema.optional(Schema.String),
                volumeNamespace: Schema.optional(Schema.String),
              }),
            ),
            volumeAttributesClassName: Schema.optional(Schema.String),
            volumeMode: Schema.optional(Schema.String),
            vsphereVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                storagePolicyID: Schema.optional(Schema.String),
                storagePolicyName: Schema.optional(Schema.String),
                volumePath: Schema.String,
              }),
            ),
          }),
        ),
        persistentVolumeName: Schema.optional(Schema.String),
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        attachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
        attached: Schema.Boolean,
        attachmentMetadata: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        detachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<PatchStorageV1VolumeAttachmentStatusOutput>;

// The operation
/**
 * partially update status of the specified VolumeAttachment
 *
 * @param name - name of the VolumeAttachment
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchStorageV1VolumeAttachmentStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PatchStorageV1VolumeAttachmentStatusInput,
    outputSchema: PatchStorageV1VolumeAttachmentStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface PatchStorageV1VolumeAttributesClassInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  force?: boolean;
}
export const PatchStorageV1VolumeAttributesClassInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apis/storage.k8s.io/v1/volumeattributesclasses/{name}",
    }),
  ) as unknown as Schema.Codec<PatchStorageV1VolumeAttributesClassInput>;

// Output Schema
export interface PatchStorageV1VolumeAttributesClassOutput {
  apiVersion?: string;
  driverName: string;
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
  parameters?: Record<string, string>;
}
export const PatchStorageV1VolumeAttributesClassOutput =
  /*@__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    driverName: Schema.String,
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
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<PatchStorageV1VolumeAttributesClassOutput>;

// The operation
/**
 * partially update the specified VolumeAttributesClass
 *
 * @param name - name of the VolumeAttributesClass
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchStorageV1VolumeAttributesClass =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PatchStorageV1VolumeAttributesClassInput,
    outputSchema: PatchStorageV1VolumeAttributesClassOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface ReadStorageV1CSIDriverInput {
  name: string;
  pretty?: string;
}
export const ReadStorageV1CSIDriverInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/storage.k8s.io/v1/csidrivers/{name}",
    }),
  ) as unknown as Schema.Codec<ReadStorageV1CSIDriverInput>;

// Output Schema
export interface ReadStorageV1CSIDriverOutput {
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
  spec: {
    attachRequired?: boolean;
    fsGroupPolicy?: string;
    nodeAllocatableUpdatePeriodSeconds?: number;
    podInfoOnMount?: boolean;
    preventPodSchedulingIfMissing?: boolean;
    requiresRepublish?: boolean;
    seLinuxMount?: boolean;
    serviceAccountTokenInSecrets?: boolean;
    storageCapacity?: boolean;
    tokenRequests?: { audience: string; expirationSeconds?: number }[];
    volumeLifecycleModes?: string[];
  };
}
export const ReadStorageV1CSIDriverOutput =
  /*@__PURE__*/ Schema.Struct({
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
      attachRequired: Schema.optional(Schema.Boolean),
      fsGroupPolicy: Schema.optional(Schema.String),
      nodeAllocatableUpdatePeriodSeconds: Schema.optional(Schema.Number),
      podInfoOnMount: Schema.optional(Schema.Boolean),
      preventPodSchedulingIfMissing: Schema.optional(Schema.Boolean),
      requiresRepublish: Schema.optional(Schema.Boolean),
      seLinuxMount: Schema.optional(Schema.Boolean),
      serviceAccountTokenInSecrets: Schema.optional(Schema.Boolean),
      storageCapacity: Schema.optional(Schema.Boolean),
      tokenRequests: Schema.optional(
        Schema.Array(
          Schema.Struct({
            audience: Schema.String,
            expirationSeconds: Schema.optional(Schema.Number),
          }),
        ),
      ),
      volumeLifecycleModes: Schema.optional(Schema.Array(Schema.String)),
    }),
  }) as unknown as Schema.Codec<ReadStorageV1CSIDriverOutput>;

// The operation
/**
 * read the specified CSIDriver
 *
 * @param name - name of the CSIDriver
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readStorageV1CSIDriver = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReadStorageV1CSIDriverInput,
  outputSchema: ReadStorageV1CSIDriverOutput,
  errors: [NotFound] as const,
}));
// Input Schema
export interface ReadStorageV1CSINodeInput {
  name: string;
  pretty?: string;
}
export const ReadStorageV1CSINodeInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/apis/storage.k8s.io/v1/csinodes/{name}" }),
  ) as unknown as Schema.Codec<ReadStorageV1CSINodeInput>;

// Output Schema
export interface ReadStorageV1CSINodeOutput {
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
  spec: {
    drivers: {
      allocatable?: { count?: number };
      name: string;
      nodeID: string;
      topologyKeys?: string[];
    }[];
  };
}
export const ReadStorageV1CSINodeOutput =
  /*@__PURE__*/ Schema.Struct({
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
      drivers: Schema.Array(
        Schema.Struct({
          allocatable: Schema.optional(
            Schema.Struct({
              count: Schema.optional(Schema.Number),
            }),
          ),
          name: Schema.String,
          nodeID: Schema.String,
          topologyKeys: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    }),
  }) as unknown as Schema.Codec<ReadStorageV1CSINodeOutput>;

// The operation
/**
 * read the specified CSINode
 *
 * @param name - name of the CSINode
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readStorageV1CSINode = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReadStorageV1CSINodeInput,
  outputSchema: ReadStorageV1CSINodeOutput,
  errors: [NotFound] as const,
}));
// Input Schema
export interface ReadStorageV1NamespacedCSIStorageCapacityInput {
  name: string;
  namespace: string;
  pretty?: string;
}
export const ReadStorageV1NamespacedCSIStorageCapacityInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}",
    }),
  ) as unknown as Schema.Codec<ReadStorageV1NamespacedCSIStorageCapacityInput>;

// Output Schema
export interface ReadStorageV1NamespacedCSIStorageCapacityOutput {
  apiVersion?: string;
  capacity?: string;
  kind?: string;
  maximumVolumeSize?: string;
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
  nodeTopology?: {
    matchExpressions?: { key: string; operator: string; values?: string[] }[];
    matchLabels?: Record<string, string>;
  };
  storageClassName: string;
}
export const ReadStorageV1NamespacedCSIStorageCapacityOutput =
  /*@__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    capacity: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    maximumVolumeSize: Schema.optional(Schema.String),
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
    nodeTopology: Schema.optional(
      Schema.Struct({
        matchExpressions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.String,
              operator: Schema.String,
              values: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        matchLabels: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
      }),
    ),
    storageClassName: Schema.String,
  }) as unknown as Schema.Codec<ReadStorageV1NamespacedCSIStorageCapacityOutput>;

// The operation
/**
 * read the specified CSIStorageCapacity
 *
 * @param name - name of the CSIStorageCapacity
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readStorageV1NamespacedCSIStorageCapacity =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ReadStorageV1NamespacedCSIStorageCapacityInput,
    outputSchema: ReadStorageV1NamespacedCSIStorageCapacityOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export interface ReadStorageV1StorageClassInput {
  name: string;
  pretty?: string;
}
export const ReadStorageV1StorageClassInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/storage.k8s.io/v1/storageclasses/{name}",
    }),
  ) as unknown as Schema.Codec<ReadStorageV1StorageClassInput>;

// Output Schema
export interface ReadStorageV1StorageClassOutput {
  allowVolumeExpansion?: boolean;
  allowedTopologies?: {
    matchLabelExpressions?: { key: string; values: string[] }[];
  }[];
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
  mountOptions?: string[];
  parameters?: Record<string, string>;
  provisioner: string;
  reclaimPolicy?: string;
  volumeBindingMode?: string;
}
export const ReadStorageV1StorageClassOutput =
  /*@__PURE__*/ Schema.Struct({
    allowVolumeExpansion: Schema.optional(Schema.Boolean),
    allowedTopologies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          matchLabelExpressions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.String,
                values: Schema.Array(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
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
    mountOptions: Schema.optional(Schema.Array(Schema.String)),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    provisioner: Schema.String,
    reclaimPolicy: Schema.optional(Schema.String),
    volumeBindingMode: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ReadStorageV1StorageClassOutput>;

// The operation
/**
 * read the specified StorageClass
 *
 * @param name - name of the StorageClass
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readStorageV1StorageClass = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReadStorageV1StorageClassInput,
  outputSchema: ReadStorageV1StorageClassOutput,
  errors: [NotFound] as const,
}));
// Input Schema
export interface ReadStorageV1VolumeAttachmentInput {
  name: string;
  pretty?: string;
}
export const ReadStorageV1VolumeAttachmentInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/storage.k8s.io/v1/volumeattachments/{name}",
    }),
  ) as unknown as Schema.Codec<ReadStorageV1VolumeAttachmentInput>;

// Output Schema
export interface ReadStorageV1VolumeAttachmentOutput {
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
  spec: {
    attacher: string;
    nodeName: string;
    source: {
      inlineVolumeSpec?: {
        accessModes?: string[];
        awsElasticBlockStore?: {
          fsType?: string;
          partition?: number;
          readOnly?: boolean;
          volumeID: string;
        };
        azureDisk?: {
          cachingMode?: string;
          diskName: string;
          diskURI: string;
          fsType?: string;
          kind?: string;
          readOnly?: boolean;
        };
        azureFile?: {
          readOnly?: boolean;
          secretName: string;
          secretNamespace?: string;
          shareName: string;
        };
        capacity?: Record<string, string>;
        cephfs?: {
          monitors: string[];
          path?: string;
          readOnly?: boolean;
          secretFile?: string;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        cinder?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          volumeID: string;
        };
        claimRef?: {
          apiVersion?: string;
          fieldPath?: string;
          kind?: string;
          name?: string;
          namespace?: string;
          resourceVersion?: string;
          uid?: string;
        };
        csi?: {
          controllerExpandSecretRef?: { name?: string; namespace?: string };
          controllerPublishSecretRef?: { name?: string; namespace?: string };
          driver: string;
          fsType?: string;
          nodeExpandSecretRef?: { name?: string; namespace?: string };
          nodePublishSecretRef?: { name?: string; namespace?: string };
          nodeStageSecretRef?: { name?: string; namespace?: string };
          readOnly?: boolean;
          volumeAttributes?: Record<string, string>;
          volumeHandle: string;
        };
        fc?: {
          fsType?: string;
          lun?: number;
          readOnly?: boolean;
          targetWWNs?: string[];
          wwids?: string[];
        };
        flexVolume?: {
          driver: string;
          fsType?: string;
          options?: Record<string, string>;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
        };
        flocker?: { datasetName?: string; datasetUUID?: string };
        gcePersistentDisk?: {
          fsType?: string;
          partition?: number;
          pdName: string;
          readOnly?: boolean;
        };
        glusterfs?: {
          endpoints: string;
          endpointsNamespace?: string;
          path: string;
          readOnly?: boolean;
        };
        hostPath?: { path: string; type?: string };
        iscsi?: {
          chapAuthDiscovery?: boolean;
          chapAuthSession?: boolean;
          fsType?: string;
          initiatorName?: string;
          iqn: string;
          iscsiInterface?: string;
          lun: number;
          portals?: string[];
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          targetPortal: string;
        };
        local?: { fsType?: string; path: string };
        mountOptions?: string[];
        nfs?: { path: string; readOnly?: boolean; server: string };
        nodeAffinity?: {
          required?: {
            nodeSelectorTerms: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
            }[];
          };
        };
        persistentVolumeReclaimPolicy?: string;
        photonPersistentDisk?: { fsType?: string; pdID: string };
        portworxVolume?: {
          fsType?: string;
          readOnly?: boolean;
          volumeID: string;
        };
        quobyte?: {
          group?: string;
          readOnly?: boolean;
          registry: string;
          tenant?: string;
          user?: string;
          volume: string;
        };
        rbd?: {
          fsType?: string;
          image: string;
          keyring?: string;
          monitors: string[];
          pool?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        scaleIO?: {
          fsType?: string;
          gateway: string;
          protectionDomain?: string;
          readOnly?: boolean;
          secretRef: { name?: string; namespace?: string };
          sslEnabled?: boolean;
          storageMode?: string;
          storagePool?: string;
          system: string;
          volumeName?: string;
        };
        storageClassName?: string;
        storageos?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            apiVersion?: string;
            fieldPath?: string;
            kind?: string;
            name?: string;
            namespace?: string;
            resourceVersion?: string;
            uid?: string;
          };
          volumeName?: string;
          volumeNamespace?: string;
        };
        volumeAttributesClassName?: string;
        volumeMode?: string;
        vsphereVolume?: {
          fsType?: string;
          storagePolicyID?: string;
          storagePolicyName?: string;
          volumePath: string;
        };
      };
      persistentVolumeName?: string;
    };
  };
  status?: {
    attachError?: { errorCode?: number; message?: string; time?: string };
    attached: boolean;
    attachmentMetadata?: Record<string, string>;
    detachError?: { errorCode?: number; message?: string; time?: string };
  };
}
export const ReadStorageV1VolumeAttachmentOutput =
  /*@__PURE__*/ Schema.Struct({
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
      attacher: Schema.String,
      nodeName: Schema.String,
      source: Schema.Struct({
        inlineVolumeSpec: Schema.optional(
          Schema.Struct({
            accessModes: Schema.optional(Schema.Array(Schema.String)),
            awsElasticBlockStore: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            azureDisk: Schema.optional(
              Schema.Struct({
                cachingMode: Schema.optional(Schema.String),
                diskName: Schema.String,
                diskURI: Schema.String,
                fsType: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            azureFile: Schema.optional(
              Schema.Struct({
                readOnly: Schema.optional(Schema.Boolean),
                secretName: Schema.String,
                secretNamespace: Schema.optional(Schema.String),
                shareName: Schema.String,
              }),
            ),
            capacity: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            cephfs: Schema.optional(
              Schema.Struct({
                monitors: Schema.Array(Schema.String),
                path: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretFile: Schema.optional(Schema.String),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            cinder: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                volumeID: Schema.String,
              }),
            ),
            claimRef: Schema.optional(
              Schema.Struct({
                apiVersion: Schema.optional(Schema.String),
                fieldPath: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
                resourceVersion: Schema.optional(Schema.String),
                uid: Schema.optional(Schema.String),
              }),
            ),
            csi: Schema.optional(
              Schema.Struct({
                controllerExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                controllerPublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                nodeExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodePublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodeStageSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                volumeAttributes: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                volumeHandle: Schema.String,
              }),
            ),
            fc: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                lun: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                targetWWNs: Schema.optional(Schema.Array(Schema.String)),
                wwids: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            flexVolume: Schema.optional(
              Schema.Struct({
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                options: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            flocker: Schema.optional(
              Schema.Struct({
                datasetName: Schema.optional(Schema.String),
                datasetUUID: Schema.optional(Schema.String),
              }),
            ),
            gcePersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                pdName: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            glusterfs: Schema.optional(
              Schema.Struct({
                endpoints: Schema.String,
                endpointsNamespace: Schema.optional(Schema.String),
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            hostPath: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                type: Schema.optional(Schema.String),
              }),
            ),
            iscsi: Schema.optional(
              Schema.Struct({
                chapAuthDiscovery: Schema.optional(Schema.Boolean),
                chapAuthSession: Schema.optional(Schema.Boolean),
                fsType: Schema.optional(Schema.String),
                initiatorName: Schema.optional(Schema.String),
                iqn: Schema.String,
                iscsiInterface: Schema.optional(Schema.String),
                lun: Schema.Number,
                portals: Schema.optional(Schema.Array(Schema.String)),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                targetPortal: Schema.String,
              }),
            ),
            local: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                path: Schema.String,
              }),
            ),
            mountOptions: Schema.optional(Schema.Array(Schema.String)),
            nfs: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
                server: Schema.String,
              }),
            ),
            nodeAffinity: Schema.optional(
              Schema.Struct({
                required: Schema.optional(
                  Schema.Struct({
                    nodeSelectorTerms: Schema.Array(
                      Schema.Struct({
                        matchExpressions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                        matchFields: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            persistentVolumeReclaimPolicy: Schema.optional(Schema.String),
            photonPersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                pdID: Schema.String,
              }),
            ),
            portworxVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            quobyte: Schema.optional(
              Schema.Struct({
                group: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                registry: Schema.String,
                tenant: Schema.optional(Schema.String),
                user: Schema.optional(Schema.String),
                volume: Schema.String,
              }),
            ),
            rbd: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                image: Schema.String,
                keyring: Schema.optional(Schema.String),
                monitors: Schema.Array(Schema.String),
                pool: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            scaleIO: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                gateway: Schema.String,
                protectionDomain: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.Struct({
                  name: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                }),
                sslEnabled: Schema.optional(Schema.Boolean),
                storageMode: Schema.optional(Schema.String),
                storagePool: Schema.optional(Schema.String),
                system: Schema.String,
                volumeName: Schema.optional(Schema.String),
              }),
            ),
            storageClassName: Schema.optional(Schema.String),
            storageos: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    fieldPath: Schema.optional(Schema.String),
                    kind: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    resourceVersion: Schema.optional(Schema.String),
                    uid: Schema.optional(Schema.String),
                  }),
                ),
                volumeName: Schema.optional(Schema.String),
                volumeNamespace: Schema.optional(Schema.String),
              }),
            ),
            volumeAttributesClassName: Schema.optional(Schema.String),
            volumeMode: Schema.optional(Schema.String),
            vsphereVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                storagePolicyID: Schema.optional(Schema.String),
                storagePolicyName: Schema.optional(Schema.String),
                volumePath: Schema.String,
              }),
            ),
          }),
        ),
        persistentVolumeName: Schema.optional(Schema.String),
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        attachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
        attached: Schema.Boolean,
        attachmentMetadata: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        detachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ReadStorageV1VolumeAttachmentOutput>;

// The operation
/**
 * read the specified VolumeAttachment
 *
 * @param name - name of the VolumeAttachment
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readStorageV1VolumeAttachment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ReadStorageV1VolumeAttachmentInput,
    outputSchema: ReadStorageV1VolumeAttachmentOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export interface ReadStorageV1VolumeAttachmentStatusInput {
  name: string;
  pretty?: string;
}
export const ReadStorageV1VolumeAttachmentStatusInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/storage.k8s.io/v1/volumeattachments/{name}/status",
    }),
  ) as unknown as Schema.Codec<ReadStorageV1VolumeAttachmentStatusInput>;

// Output Schema
export interface ReadStorageV1VolumeAttachmentStatusOutput {
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
  spec: {
    attacher: string;
    nodeName: string;
    source: {
      inlineVolumeSpec?: {
        accessModes?: string[];
        awsElasticBlockStore?: {
          fsType?: string;
          partition?: number;
          readOnly?: boolean;
          volumeID: string;
        };
        azureDisk?: {
          cachingMode?: string;
          diskName: string;
          diskURI: string;
          fsType?: string;
          kind?: string;
          readOnly?: boolean;
        };
        azureFile?: {
          readOnly?: boolean;
          secretName: string;
          secretNamespace?: string;
          shareName: string;
        };
        capacity?: Record<string, string>;
        cephfs?: {
          monitors: string[];
          path?: string;
          readOnly?: boolean;
          secretFile?: string;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        cinder?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          volumeID: string;
        };
        claimRef?: {
          apiVersion?: string;
          fieldPath?: string;
          kind?: string;
          name?: string;
          namespace?: string;
          resourceVersion?: string;
          uid?: string;
        };
        csi?: {
          controllerExpandSecretRef?: { name?: string; namespace?: string };
          controllerPublishSecretRef?: { name?: string; namespace?: string };
          driver: string;
          fsType?: string;
          nodeExpandSecretRef?: { name?: string; namespace?: string };
          nodePublishSecretRef?: { name?: string; namespace?: string };
          nodeStageSecretRef?: { name?: string; namespace?: string };
          readOnly?: boolean;
          volumeAttributes?: Record<string, string>;
          volumeHandle: string;
        };
        fc?: {
          fsType?: string;
          lun?: number;
          readOnly?: boolean;
          targetWWNs?: string[];
          wwids?: string[];
        };
        flexVolume?: {
          driver: string;
          fsType?: string;
          options?: Record<string, string>;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
        };
        flocker?: { datasetName?: string; datasetUUID?: string };
        gcePersistentDisk?: {
          fsType?: string;
          partition?: number;
          pdName: string;
          readOnly?: boolean;
        };
        glusterfs?: {
          endpoints: string;
          endpointsNamespace?: string;
          path: string;
          readOnly?: boolean;
        };
        hostPath?: { path: string; type?: string };
        iscsi?: {
          chapAuthDiscovery?: boolean;
          chapAuthSession?: boolean;
          fsType?: string;
          initiatorName?: string;
          iqn: string;
          iscsiInterface?: string;
          lun: number;
          portals?: string[];
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          targetPortal: string;
        };
        local?: { fsType?: string; path: string };
        mountOptions?: string[];
        nfs?: { path: string; readOnly?: boolean; server: string };
        nodeAffinity?: {
          required?: {
            nodeSelectorTerms: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
            }[];
          };
        };
        persistentVolumeReclaimPolicy?: string;
        photonPersistentDisk?: { fsType?: string; pdID: string };
        portworxVolume?: {
          fsType?: string;
          readOnly?: boolean;
          volumeID: string;
        };
        quobyte?: {
          group?: string;
          readOnly?: boolean;
          registry: string;
          tenant?: string;
          user?: string;
          volume: string;
        };
        rbd?: {
          fsType?: string;
          image: string;
          keyring?: string;
          monitors: string[];
          pool?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        scaleIO?: {
          fsType?: string;
          gateway: string;
          protectionDomain?: string;
          readOnly?: boolean;
          secretRef: { name?: string; namespace?: string };
          sslEnabled?: boolean;
          storageMode?: string;
          storagePool?: string;
          system: string;
          volumeName?: string;
        };
        storageClassName?: string;
        storageos?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            apiVersion?: string;
            fieldPath?: string;
            kind?: string;
            name?: string;
            namespace?: string;
            resourceVersion?: string;
            uid?: string;
          };
          volumeName?: string;
          volumeNamespace?: string;
        };
        volumeAttributesClassName?: string;
        volumeMode?: string;
        vsphereVolume?: {
          fsType?: string;
          storagePolicyID?: string;
          storagePolicyName?: string;
          volumePath: string;
        };
      };
      persistentVolumeName?: string;
    };
  };
  status?: {
    attachError?: { errorCode?: number; message?: string; time?: string };
    attached: boolean;
    attachmentMetadata?: Record<string, string>;
    detachError?: { errorCode?: number; message?: string; time?: string };
  };
}
export const ReadStorageV1VolumeAttachmentStatusOutput =
  /*@__PURE__*/ Schema.Struct({
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
      attacher: Schema.String,
      nodeName: Schema.String,
      source: Schema.Struct({
        inlineVolumeSpec: Schema.optional(
          Schema.Struct({
            accessModes: Schema.optional(Schema.Array(Schema.String)),
            awsElasticBlockStore: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            azureDisk: Schema.optional(
              Schema.Struct({
                cachingMode: Schema.optional(Schema.String),
                diskName: Schema.String,
                diskURI: Schema.String,
                fsType: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            azureFile: Schema.optional(
              Schema.Struct({
                readOnly: Schema.optional(Schema.Boolean),
                secretName: Schema.String,
                secretNamespace: Schema.optional(Schema.String),
                shareName: Schema.String,
              }),
            ),
            capacity: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            cephfs: Schema.optional(
              Schema.Struct({
                monitors: Schema.Array(Schema.String),
                path: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretFile: Schema.optional(Schema.String),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            cinder: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                volumeID: Schema.String,
              }),
            ),
            claimRef: Schema.optional(
              Schema.Struct({
                apiVersion: Schema.optional(Schema.String),
                fieldPath: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
                resourceVersion: Schema.optional(Schema.String),
                uid: Schema.optional(Schema.String),
              }),
            ),
            csi: Schema.optional(
              Schema.Struct({
                controllerExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                controllerPublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                nodeExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodePublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodeStageSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                volumeAttributes: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                volumeHandle: Schema.String,
              }),
            ),
            fc: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                lun: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                targetWWNs: Schema.optional(Schema.Array(Schema.String)),
                wwids: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            flexVolume: Schema.optional(
              Schema.Struct({
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                options: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            flocker: Schema.optional(
              Schema.Struct({
                datasetName: Schema.optional(Schema.String),
                datasetUUID: Schema.optional(Schema.String),
              }),
            ),
            gcePersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                pdName: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            glusterfs: Schema.optional(
              Schema.Struct({
                endpoints: Schema.String,
                endpointsNamespace: Schema.optional(Schema.String),
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            hostPath: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                type: Schema.optional(Schema.String),
              }),
            ),
            iscsi: Schema.optional(
              Schema.Struct({
                chapAuthDiscovery: Schema.optional(Schema.Boolean),
                chapAuthSession: Schema.optional(Schema.Boolean),
                fsType: Schema.optional(Schema.String),
                initiatorName: Schema.optional(Schema.String),
                iqn: Schema.String,
                iscsiInterface: Schema.optional(Schema.String),
                lun: Schema.Number,
                portals: Schema.optional(Schema.Array(Schema.String)),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                targetPortal: Schema.String,
              }),
            ),
            local: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                path: Schema.String,
              }),
            ),
            mountOptions: Schema.optional(Schema.Array(Schema.String)),
            nfs: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
                server: Schema.String,
              }),
            ),
            nodeAffinity: Schema.optional(
              Schema.Struct({
                required: Schema.optional(
                  Schema.Struct({
                    nodeSelectorTerms: Schema.Array(
                      Schema.Struct({
                        matchExpressions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                        matchFields: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            persistentVolumeReclaimPolicy: Schema.optional(Schema.String),
            photonPersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                pdID: Schema.String,
              }),
            ),
            portworxVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            quobyte: Schema.optional(
              Schema.Struct({
                group: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                registry: Schema.String,
                tenant: Schema.optional(Schema.String),
                user: Schema.optional(Schema.String),
                volume: Schema.String,
              }),
            ),
            rbd: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                image: Schema.String,
                keyring: Schema.optional(Schema.String),
                monitors: Schema.Array(Schema.String),
                pool: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            scaleIO: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                gateway: Schema.String,
                protectionDomain: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.Struct({
                  name: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                }),
                sslEnabled: Schema.optional(Schema.Boolean),
                storageMode: Schema.optional(Schema.String),
                storagePool: Schema.optional(Schema.String),
                system: Schema.String,
                volumeName: Schema.optional(Schema.String),
              }),
            ),
            storageClassName: Schema.optional(Schema.String),
            storageos: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    fieldPath: Schema.optional(Schema.String),
                    kind: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    resourceVersion: Schema.optional(Schema.String),
                    uid: Schema.optional(Schema.String),
                  }),
                ),
                volumeName: Schema.optional(Schema.String),
                volumeNamespace: Schema.optional(Schema.String),
              }),
            ),
            volumeAttributesClassName: Schema.optional(Schema.String),
            volumeMode: Schema.optional(Schema.String),
            vsphereVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                storagePolicyID: Schema.optional(Schema.String),
                storagePolicyName: Schema.optional(Schema.String),
                volumePath: Schema.String,
              }),
            ),
          }),
        ),
        persistentVolumeName: Schema.optional(Schema.String),
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        attachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
        attached: Schema.Boolean,
        attachmentMetadata: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        detachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ReadStorageV1VolumeAttachmentStatusOutput>;

// The operation
/**
 * read status of the specified VolumeAttachment
 *
 * @param name - name of the VolumeAttachment
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readStorageV1VolumeAttachmentStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ReadStorageV1VolumeAttachmentStatusInput,
    outputSchema: ReadStorageV1VolumeAttachmentStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export interface ReadStorageV1VolumeAttributesClassInput {
  name: string;
  pretty?: string;
}
export const ReadStorageV1VolumeAttributesClassInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/storage.k8s.io/v1/volumeattributesclasses/{name}",
    }),
  ) as unknown as Schema.Codec<ReadStorageV1VolumeAttributesClassInput>;

// Output Schema
export interface ReadStorageV1VolumeAttributesClassOutput {
  apiVersion?: string;
  driverName: string;
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
  parameters?: Record<string, string>;
}
export const ReadStorageV1VolumeAttributesClassOutput =
  /*@__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    driverName: Schema.String,
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
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<ReadStorageV1VolumeAttributesClassOutput>;

// The operation
/**
 * read the specified VolumeAttributesClass
 *
 * @param name - name of the VolumeAttributesClass
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readStorageV1VolumeAttributesClass =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ReadStorageV1VolumeAttributesClassInput,
    outputSchema: ReadStorageV1VolumeAttributesClassOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export interface ReplaceStorageV1CSIDriverInput {
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
  spec: {
    attachRequired?: boolean;
    fsGroupPolicy?: string;
    nodeAllocatableUpdatePeriodSeconds?: number;
    podInfoOnMount?: boolean;
    preventPodSchedulingIfMissing?: boolean;
    requiresRepublish?: boolean;
    seLinuxMount?: boolean;
    serviceAccountTokenInSecrets?: boolean;
    storageCapacity?: boolean;
    tokenRequests?: { audience: string; expirationSeconds?: number }[];
    volumeLifecycleModes?: string[];
  };
}
export const ReplaceStorageV1CSIDriverInput =
  /*@__PURE__*/ Schema.Struct({
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
      attachRequired: Schema.optional(Schema.Boolean),
      fsGroupPolicy: Schema.optional(Schema.String),
      nodeAllocatableUpdatePeriodSeconds: Schema.optional(Schema.Number),
      podInfoOnMount: Schema.optional(Schema.Boolean),
      preventPodSchedulingIfMissing: Schema.optional(Schema.Boolean),
      requiresRepublish: Schema.optional(Schema.Boolean),
      seLinuxMount: Schema.optional(Schema.Boolean),
      serviceAccountTokenInSecrets: Schema.optional(Schema.Boolean),
      storageCapacity: Schema.optional(Schema.Boolean),
      tokenRequests: Schema.optional(
        Schema.Array(
          Schema.Struct({
            audience: Schema.String,
            expirationSeconds: Schema.optional(Schema.Number),
          }),
        ),
      ),
      volumeLifecycleModes: Schema.optional(Schema.Array(Schema.String)),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/storage.k8s.io/v1/csidrivers/{name}",
    }),
  ) as unknown as Schema.Codec<ReplaceStorageV1CSIDriverInput>;

// Output Schema
export interface ReplaceStorageV1CSIDriverOutput {
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
  spec: {
    attachRequired?: boolean;
    fsGroupPolicy?: string;
    nodeAllocatableUpdatePeriodSeconds?: number;
    podInfoOnMount?: boolean;
    preventPodSchedulingIfMissing?: boolean;
    requiresRepublish?: boolean;
    seLinuxMount?: boolean;
    serviceAccountTokenInSecrets?: boolean;
    storageCapacity?: boolean;
    tokenRequests?: { audience: string; expirationSeconds?: number }[];
    volumeLifecycleModes?: string[];
  };
}
export const ReplaceStorageV1CSIDriverOutput =
  /*@__PURE__*/ Schema.Struct({
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
      attachRequired: Schema.optional(Schema.Boolean),
      fsGroupPolicy: Schema.optional(Schema.String),
      nodeAllocatableUpdatePeriodSeconds: Schema.optional(Schema.Number),
      podInfoOnMount: Schema.optional(Schema.Boolean),
      preventPodSchedulingIfMissing: Schema.optional(Schema.Boolean),
      requiresRepublish: Schema.optional(Schema.Boolean),
      seLinuxMount: Schema.optional(Schema.Boolean),
      serviceAccountTokenInSecrets: Schema.optional(Schema.Boolean),
      storageCapacity: Schema.optional(Schema.Boolean),
      tokenRequests: Schema.optional(
        Schema.Array(
          Schema.Struct({
            audience: Schema.String,
            expirationSeconds: Schema.optional(Schema.Number),
          }),
        ),
      ),
      volumeLifecycleModes: Schema.optional(Schema.Array(Schema.String)),
    }),
  }) as unknown as Schema.Codec<ReplaceStorageV1CSIDriverOutput>;

// The operation
/**
 * replace the specified CSIDriver
 *
 * @param name - name of the CSIDriver
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceStorageV1CSIDriver = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReplaceStorageV1CSIDriverInput,
  outputSchema: ReplaceStorageV1CSIDriverOutput,
  errors: [NotFound, Conflict, UnprocessableEntity] as const,
}));
// Input Schema
export interface ReplaceStorageV1CSINodeInput {
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
  spec: {
    drivers: {
      allocatable?: { count?: number };
      name: string;
      nodeID: string;
      topologyKeys?: string[];
    }[];
  };
}
export const ReplaceStorageV1CSINodeInput =
  /*@__PURE__*/ Schema.Struct({
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
      drivers: Schema.Array(
        Schema.Struct({
          allocatable: Schema.optional(
            Schema.Struct({
              count: Schema.optional(Schema.Number),
            }),
          ),
          name: Schema.String,
          nodeID: Schema.String,
          topologyKeys: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    }),
  }).pipe(
    T.Http({ method: "PUT", path: "/apis/storage.k8s.io/v1/csinodes/{name}" }),
  ) as unknown as Schema.Codec<ReplaceStorageV1CSINodeInput>;

// Output Schema
export interface ReplaceStorageV1CSINodeOutput {
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
  spec: {
    drivers: {
      allocatable?: { count?: number };
      name: string;
      nodeID: string;
      topologyKeys?: string[];
    }[];
  };
}
export const ReplaceStorageV1CSINodeOutput =
  /*@__PURE__*/ Schema.Struct({
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
      drivers: Schema.Array(
        Schema.Struct({
          allocatable: Schema.optional(
            Schema.Struct({
              count: Schema.optional(Schema.Number),
            }),
          ),
          name: Schema.String,
          nodeID: Schema.String,
          topologyKeys: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    }),
  }) as unknown as Schema.Codec<ReplaceStorageV1CSINodeOutput>;

// The operation
/**
 * replace the specified CSINode
 *
 * @param name - name of the CSINode
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceStorageV1CSINode = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReplaceStorageV1CSINodeInput,
  outputSchema: ReplaceStorageV1CSINodeOutput,
  errors: [NotFound, Conflict, UnprocessableEntity] as const,
}));
// Input Schema
export interface ReplaceStorageV1NamespacedCSIStorageCapacityInput {
  name: string;
  namespace: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  apiVersion?: string;
  capacity?: string;
  kind?: string;
  maximumVolumeSize?: string;
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
  nodeTopology?: {
    matchExpressions?: { key: string; operator: string; values?: string[] }[];
    matchLabels?: Record<string, string>;
  };
  storageClassName: string;
}
export const ReplaceStorageV1NamespacedCSIStorageCapacityInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    capacity: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    maximumVolumeSize: Schema.optional(Schema.String),
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
    nodeTopology: Schema.optional(
      Schema.Struct({
        matchExpressions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.String,
              operator: Schema.String,
              values: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        matchLabels: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
      }),
    ),
    storageClassName: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}",
    }),
  ) as unknown as Schema.Codec<ReplaceStorageV1NamespacedCSIStorageCapacityInput>;

// Output Schema
export interface ReplaceStorageV1NamespacedCSIStorageCapacityOutput {
  apiVersion?: string;
  capacity?: string;
  kind?: string;
  maximumVolumeSize?: string;
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
  nodeTopology?: {
    matchExpressions?: { key: string; operator: string; values?: string[] }[];
    matchLabels?: Record<string, string>;
  };
  storageClassName: string;
}
export const ReplaceStorageV1NamespacedCSIStorageCapacityOutput =
  /*@__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    capacity: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    maximumVolumeSize: Schema.optional(Schema.String),
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
    nodeTopology: Schema.optional(
      Schema.Struct({
        matchExpressions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.String,
              operator: Schema.String,
              values: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        matchLabels: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
      }),
    ),
    storageClassName: Schema.String,
  }) as unknown as Schema.Codec<ReplaceStorageV1NamespacedCSIStorageCapacityOutput>;

// The operation
/**
 * replace the specified CSIStorageCapacity
 *
 * @param name - name of the CSIStorageCapacity
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceStorageV1NamespacedCSIStorageCapacity =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ReplaceStorageV1NamespacedCSIStorageCapacityInput,
    outputSchema: ReplaceStorageV1NamespacedCSIStorageCapacityOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface ReplaceStorageV1StorageClassInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  allowVolumeExpansion?: boolean;
  allowedTopologies?: {
    matchLabelExpressions?: { key: string; values: string[] }[];
  }[];
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
  mountOptions?: string[];
  parameters?: Record<string, string>;
  provisioner: string;
  reclaimPolicy?: string;
  volumeBindingMode?: string;
}
export const ReplaceStorageV1StorageClassInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    allowVolumeExpansion: Schema.optional(Schema.Boolean),
    allowedTopologies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          matchLabelExpressions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.String,
                values: Schema.Array(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
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
    mountOptions: Schema.optional(Schema.Array(Schema.String)),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    provisioner: Schema.String,
    reclaimPolicy: Schema.optional(Schema.String),
    volumeBindingMode: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/storage.k8s.io/v1/storageclasses/{name}",
    }),
  ) as unknown as Schema.Codec<ReplaceStorageV1StorageClassInput>;

// Output Schema
export interface ReplaceStorageV1StorageClassOutput {
  allowVolumeExpansion?: boolean;
  allowedTopologies?: {
    matchLabelExpressions?: { key: string; values: string[] }[];
  }[];
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
  mountOptions?: string[];
  parameters?: Record<string, string>;
  provisioner: string;
  reclaimPolicy?: string;
  volumeBindingMode?: string;
}
export const ReplaceStorageV1StorageClassOutput =
  /*@__PURE__*/ Schema.Struct({
    allowVolumeExpansion: Schema.optional(Schema.Boolean),
    allowedTopologies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          matchLabelExpressions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.String,
                values: Schema.Array(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
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
    mountOptions: Schema.optional(Schema.Array(Schema.String)),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    provisioner: Schema.String,
    reclaimPolicy: Schema.optional(Schema.String),
    volumeBindingMode: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ReplaceStorageV1StorageClassOutput>;

// The operation
/**
 * replace the specified StorageClass
 *
 * @param name - name of the StorageClass
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceStorageV1StorageClass =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ReplaceStorageV1StorageClassInput,
    outputSchema: ReplaceStorageV1StorageClassOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface ReplaceStorageV1VolumeAttachmentInput {
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
  spec: {
    attacher: string;
    nodeName: string;
    source: {
      inlineVolumeSpec?: {
        accessModes?: string[];
        awsElasticBlockStore?: {
          fsType?: string;
          partition?: number;
          readOnly?: boolean;
          volumeID: string;
        };
        azureDisk?: {
          cachingMode?: string;
          diskName: string;
          diskURI: string;
          fsType?: string;
          kind?: string;
          readOnly?: boolean;
        };
        azureFile?: {
          readOnly?: boolean;
          secretName: string;
          secretNamespace?: string;
          shareName: string;
        };
        capacity?: Record<string, string>;
        cephfs?: {
          monitors: string[];
          path?: string;
          readOnly?: boolean;
          secretFile?: string;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        cinder?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          volumeID: string;
        };
        claimRef?: {
          apiVersion?: string;
          fieldPath?: string;
          kind?: string;
          name?: string;
          namespace?: string;
          resourceVersion?: string;
          uid?: string;
        };
        csi?: {
          controllerExpandSecretRef?: { name?: string; namespace?: string };
          controllerPublishSecretRef?: { name?: string; namespace?: string };
          driver: string;
          fsType?: string;
          nodeExpandSecretRef?: { name?: string; namespace?: string };
          nodePublishSecretRef?: { name?: string; namespace?: string };
          nodeStageSecretRef?: { name?: string; namespace?: string };
          readOnly?: boolean;
          volumeAttributes?: Record<string, string>;
          volumeHandle: string;
        };
        fc?: {
          fsType?: string;
          lun?: number;
          readOnly?: boolean;
          targetWWNs?: string[];
          wwids?: string[];
        };
        flexVolume?: {
          driver: string;
          fsType?: string;
          options?: Record<string, string>;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
        };
        flocker?: { datasetName?: string; datasetUUID?: string };
        gcePersistentDisk?: {
          fsType?: string;
          partition?: number;
          pdName: string;
          readOnly?: boolean;
        };
        glusterfs?: {
          endpoints: string;
          endpointsNamespace?: string;
          path: string;
          readOnly?: boolean;
        };
        hostPath?: { path: string; type?: string };
        iscsi?: {
          chapAuthDiscovery?: boolean;
          chapAuthSession?: boolean;
          fsType?: string;
          initiatorName?: string;
          iqn: string;
          iscsiInterface?: string;
          lun: number;
          portals?: string[];
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          targetPortal: string;
        };
        local?: { fsType?: string; path: string };
        mountOptions?: string[];
        nfs?: { path: string; readOnly?: boolean; server: string };
        nodeAffinity?: {
          required?: {
            nodeSelectorTerms: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
            }[];
          };
        };
        persistentVolumeReclaimPolicy?: string;
        photonPersistentDisk?: { fsType?: string; pdID: string };
        portworxVolume?: {
          fsType?: string;
          readOnly?: boolean;
          volumeID: string;
        };
        quobyte?: {
          group?: string;
          readOnly?: boolean;
          registry: string;
          tenant?: string;
          user?: string;
          volume: string;
        };
        rbd?: {
          fsType?: string;
          image: string;
          keyring?: string;
          monitors: string[];
          pool?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        scaleIO?: {
          fsType?: string;
          gateway: string;
          protectionDomain?: string;
          readOnly?: boolean;
          secretRef: { name?: string; namespace?: string };
          sslEnabled?: boolean;
          storageMode?: string;
          storagePool?: string;
          system: string;
          volumeName?: string;
        };
        storageClassName?: string;
        storageos?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            apiVersion?: string;
            fieldPath?: string;
            kind?: string;
            name?: string;
            namespace?: string;
            resourceVersion?: string;
            uid?: string;
          };
          volumeName?: string;
          volumeNamespace?: string;
        };
        volumeAttributesClassName?: string;
        volumeMode?: string;
        vsphereVolume?: {
          fsType?: string;
          storagePolicyID?: string;
          storagePolicyName?: string;
          volumePath: string;
        };
      };
      persistentVolumeName?: string;
    };
  };
  status?: {
    attachError?: { errorCode?: number; message?: string; time?: string };
    attached: boolean;
    attachmentMetadata?: Record<string, string>;
    detachError?: { errorCode?: number; message?: string; time?: string };
  };
}
export const ReplaceStorageV1VolumeAttachmentInput =
  /*@__PURE__*/ Schema.Struct({
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
      attacher: Schema.String,
      nodeName: Schema.String,
      source: Schema.Struct({
        inlineVolumeSpec: Schema.optional(
          Schema.Struct({
            accessModes: Schema.optional(Schema.Array(Schema.String)),
            awsElasticBlockStore: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            azureDisk: Schema.optional(
              Schema.Struct({
                cachingMode: Schema.optional(Schema.String),
                diskName: Schema.String,
                diskURI: Schema.String,
                fsType: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            azureFile: Schema.optional(
              Schema.Struct({
                readOnly: Schema.optional(Schema.Boolean),
                secretName: Schema.String,
                secretNamespace: Schema.optional(Schema.String),
                shareName: Schema.String,
              }),
            ),
            capacity: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            cephfs: Schema.optional(
              Schema.Struct({
                monitors: Schema.Array(Schema.String),
                path: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretFile: Schema.optional(Schema.String),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            cinder: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                volumeID: Schema.String,
              }),
            ),
            claimRef: Schema.optional(
              Schema.Struct({
                apiVersion: Schema.optional(Schema.String),
                fieldPath: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
                resourceVersion: Schema.optional(Schema.String),
                uid: Schema.optional(Schema.String),
              }),
            ),
            csi: Schema.optional(
              Schema.Struct({
                controllerExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                controllerPublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                nodeExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodePublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodeStageSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                volumeAttributes: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                volumeHandle: Schema.String,
              }),
            ),
            fc: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                lun: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                targetWWNs: Schema.optional(Schema.Array(Schema.String)),
                wwids: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            flexVolume: Schema.optional(
              Schema.Struct({
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                options: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            flocker: Schema.optional(
              Schema.Struct({
                datasetName: Schema.optional(Schema.String),
                datasetUUID: Schema.optional(Schema.String),
              }),
            ),
            gcePersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                pdName: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            glusterfs: Schema.optional(
              Schema.Struct({
                endpoints: Schema.String,
                endpointsNamespace: Schema.optional(Schema.String),
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            hostPath: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                type: Schema.optional(Schema.String),
              }),
            ),
            iscsi: Schema.optional(
              Schema.Struct({
                chapAuthDiscovery: Schema.optional(Schema.Boolean),
                chapAuthSession: Schema.optional(Schema.Boolean),
                fsType: Schema.optional(Schema.String),
                initiatorName: Schema.optional(Schema.String),
                iqn: Schema.String,
                iscsiInterface: Schema.optional(Schema.String),
                lun: Schema.Number,
                portals: Schema.optional(Schema.Array(Schema.String)),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                targetPortal: Schema.String,
              }),
            ),
            local: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                path: Schema.String,
              }),
            ),
            mountOptions: Schema.optional(Schema.Array(Schema.String)),
            nfs: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
                server: Schema.String,
              }),
            ),
            nodeAffinity: Schema.optional(
              Schema.Struct({
                required: Schema.optional(
                  Schema.Struct({
                    nodeSelectorTerms: Schema.Array(
                      Schema.Struct({
                        matchExpressions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                        matchFields: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            persistentVolumeReclaimPolicy: Schema.optional(Schema.String),
            photonPersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                pdID: Schema.String,
              }),
            ),
            portworxVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            quobyte: Schema.optional(
              Schema.Struct({
                group: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                registry: Schema.String,
                tenant: Schema.optional(Schema.String),
                user: Schema.optional(Schema.String),
                volume: Schema.String,
              }),
            ),
            rbd: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                image: Schema.String,
                keyring: Schema.optional(Schema.String),
                monitors: Schema.Array(Schema.String),
                pool: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            scaleIO: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                gateway: Schema.String,
                protectionDomain: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.Struct({
                  name: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                }),
                sslEnabled: Schema.optional(Schema.Boolean),
                storageMode: Schema.optional(Schema.String),
                storagePool: Schema.optional(Schema.String),
                system: Schema.String,
                volumeName: Schema.optional(Schema.String),
              }),
            ),
            storageClassName: Schema.optional(Schema.String),
            storageos: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    fieldPath: Schema.optional(Schema.String),
                    kind: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    resourceVersion: Schema.optional(Schema.String),
                    uid: Schema.optional(Schema.String),
                  }),
                ),
                volumeName: Schema.optional(Schema.String),
                volumeNamespace: Schema.optional(Schema.String),
              }),
            ),
            volumeAttributesClassName: Schema.optional(Schema.String),
            volumeMode: Schema.optional(Schema.String),
            vsphereVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                storagePolicyID: Schema.optional(Schema.String),
                storagePolicyName: Schema.optional(Schema.String),
                volumePath: Schema.String,
              }),
            ),
          }),
        ),
        persistentVolumeName: Schema.optional(Schema.String),
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        attachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
        attached: Schema.Boolean,
        attachmentMetadata: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        detachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/storage.k8s.io/v1/volumeattachments/{name}",
    }),
  ) as unknown as Schema.Codec<ReplaceStorageV1VolumeAttachmentInput>;

// Output Schema
export interface ReplaceStorageV1VolumeAttachmentOutput {
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
  spec: {
    attacher: string;
    nodeName: string;
    source: {
      inlineVolumeSpec?: {
        accessModes?: string[];
        awsElasticBlockStore?: {
          fsType?: string;
          partition?: number;
          readOnly?: boolean;
          volumeID: string;
        };
        azureDisk?: {
          cachingMode?: string;
          diskName: string;
          diskURI: string;
          fsType?: string;
          kind?: string;
          readOnly?: boolean;
        };
        azureFile?: {
          readOnly?: boolean;
          secretName: string;
          secretNamespace?: string;
          shareName: string;
        };
        capacity?: Record<string, string>;
        cephfs?: {
          monitors: string[];
          path?: string;
          readOnly?: boolean;
          secretFile?: string;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        cinder?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          volumeID: string;
        };
        claimRef?: {
          apiVersion?: string;
          fieldPath?: string;
          kind?: string;
          name?: string;
          namespace?: string;
          resourceVersion?: string;
          uid?: string;
        };
        csi?: {
          controllerExpandSecretRef?: { name?: string; namespace?: string };
          controllerPublishSecretRef?: { name?: string; namespace?: string };
          driver: string;
          fsType?: string;
          nodeExpandSecretRef?: { name?: string; namespace?: string };
          nodePublishSecretRef?: { name?: string; namespace?: string };
          nodeStageSecretRef?: { name?: string; namespace?: string };
          readOnly?: boolean;
          volumeAttributes?: Record<string, string>;
          volumeHandle: string;
        };
        fc?: {
          fsType?: string;
          lun?: number;
          readOnly?: boolean;
          targetWWNs?: string[];
          wwids?: string[];
        };
        flexVolume?: {
          driver: string;
          fsType?: string;
          options?: Record<string, string>;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
        };
        flocker?: { datasetName?: string; datasetUUID?: string };
        gcePersistentDisk?: {
          fsType?: string;
          partition?: number;
          pdName: string;
          readOnly?: boolean;
        };
        glusterfs?: {
          endpoints: string;
          endpointsNamespace?: string;
          path: string;
          readOnly?: boolean;
        };
        hostPath?: { path: string; type?: string };
        iscsi?: {
          chapAuthDiscovery?: boolean;
          chapAuthSession?: boolean;
          fsType?: string;
          initiatorName?: string;
          iqn: string;
          iscsiInterface?: string;
          lun: number;
          portals?: string[];
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          targetPortal: string;
        };
        local?: { fsType?: string; path: string };
        mountOptions?: string[];
        nfs?: { path: string; readOnly?: boolean; server: string };
        nodeAffinity?: {
          required?: {
            nodeSelectorTerms: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
            }[];
          };
        };
        persistentVolumeReclaimPolicy?: string;
        photonPersistentDisk?: { fsType?: string; pdID: string };
        portworxVolume?: {
          fsType?: string;
          readOnly?: boolean;
          volumeID: string;
        };
        quobyte?: {
          group?: string;
          readOnly?: boolean;
          registry: string;
          tenant?: string;
          user?: string;
          volume: string;
        };
        rbd?: {
          fsType?: string;
          image: string;
          keyring?: string;
          monitors: string[];
          pool?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        scaleIO?: {
          fsType?: string;
          gateway: string;
          protectionDomain?: string;
          readOnly?: boolean;
          secretRef: { name?: string; namespace?: string };
          sslEnabled?: boolean;
          storageMode?: string;
          storagePool?: string;
          system: string;
          volumeName?: string;
        };
        storageClassName?: string;
        storageos?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            apiVersion?: string;
            fieldPath?: string;
            kind?: string;
            name?: string;
            namespace?: string;
            resourceVersion?: string;
            uid?: string;
          };
          volumeName?: string;
          volumeNamespace?: string;
        };
        volumeAttributesClassName?: string;
        volumeMode?: string;
        vsphereVolume?: {
          fsType?: string;
          storagePolicyID?: string;
          storagePolicyName?: string;
          volumePath: string;
        };
      };
      persistentVolumeName?: string;
    };
  };
  status?: {
    attachError?: { errorCode?: number; message?: string; time?: string };
    attached: boolean;
    attachmentMetadata?: Record<string, string>;
    detachError?: { errorCode?: number; message?: string; time?: string };
  };
}
export const ReplaceStorageV1VolumeAttachmentOutput =
  /*@__PURE__*/ Schema.Struct({
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
      attacher: Schema.String,
      nodeName: Schema.String,
      source: Schema.Struct({
        inlineVolumeSpec: Schema.optional(
          Schema.Struct({
            accessModes: Schema.optional(Schema.Array(Schema.String)),
            awsElasticBlockStore: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            azureDisk: Schema.optional(
              Schema.Struct({
                cachingMode: Schema.optional(Schema.String),
                diskName: Schema.String,
                diskURI: Schema.String,
                fsType: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            azureFile: Schema.optional(
              Schema.Struct({
                readOnly: Schema.optional(Schema.Boolean),
                secretName: Schema.String,
                secretNamespace: Schema.optional(Schema.String),
                shareName: Schema.String,
              }),
            ),
            capacity: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            cephfs: Schema.optional(
              Schema.Struct({
                monitors: Schema.Array(Schema.String),
                path: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretFile: Schema.optional(Schema.String),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            cinder: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                volumeID: Schema.String,
              }),
            ),
            claimRef: Schema.optional(
              Schema.Struct({
                apiVersion: Schema.optional(Schema.String),
                fieldPath: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
                resourceVersion: Schema.optional(Schema.String),
                uid: Schema.optional(Schema.String),
              }),
            ),
            csi: Schema.optional(
              Schema.Struct({
                controllerExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                controllerPublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                nodeExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodePublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodeStageSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                volumeAttributes: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                volumeHandle: Schema.String,
              }),
            ),
            fc: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                lun: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                targetWWNs: Schema.optional(Schema.Array(Schema.String)),
                wwids: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            flexVolume: Schema.optional(
              Schema.Struct({
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                options: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            flocker: Schema.optional(
              Schema.Struct({
                datasetName: Schema.optional(Schema.String),
                datasetUUID: Schema.optional(Schema.String),
              }),
            ),
            gcePersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                pdName: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            glusterfs: Schema.optional(
              Schema.Struct({
                endpoints: Schema.String,
                endpointsNamespace: Schema.optional(Schema.String),
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            hostPath: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                type: Schema.optional(Schema.String),
              }),
            ),
            iscsi: Schema.optional(
              Schema.Struct({
                chapAuthDiscovery: Schema.optional(Schema.Boolean),
                chapAuthSession: Schema.optional(Schema.Boolean),
                fsType: Schema.optional(Schema.String),
                initiatorName: Schema.optional(Schema.String),
                iqn: Schema.String,
                iscsiInterface: Schema.optional(Schema.String),
                lun: Schema.Number,
                portals: Schema.optional(Schema.Array(Schema.String)),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                targetPortal: Schema.String,
              }),
            ),
            local: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                path: Schema.String,
              }),
            ),
            mountOptions: Schema.optional(Schema.Array(Schema.String)),
            nfs: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
                server: Schema.String,
              }),
            ),
            nodeAffinity: Schema.optional(
              Schema.Struct({
                required: Schema.optional(
                  Schema.Struct({
                    nodeSelectorTerms: Schema.Array(
                      Schema.Struct({
                        matchExpressions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                        matchFields: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            persistentVolumeReclaimPolicy: Schema.optional(Schema.String),
            photonPersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                pdID: Schema.String,
              }),
            ),
            portworxVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            quobyte: Schema.optional(
              Schema.Struct({
                group: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                registry: Schema.String,
                tenant: Schema.optional(Schema.String),
                user: Schema.optional(Schema.String),
                volume: Schema.String,
              }),
            ),
            rbd: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                image: Schema.String,
                keyring: Schema.optional(Schema.String),
                monitors: Schema.Array(Schema.String),
                pool: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            scaleIO: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                gateway: Schema.String,
                protectionDomain: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.Struct({
                  name: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                }),
                sslEnabled: Schema.optional(Schema.Boolean),
                storageMode: Schema.optional(Schema.String),
                storagePool: Schema.optional(Schema.String),
                system: Schema.String,
                volumeName: Schema.optional(Schema.String),
              }),
            ),
            storageClassName: Schema.optional(Schema.String),
            storageos: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    fieldPath: Schema.optional(Schema.String),
                    kind: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    resourceVersion: Schema.optional(Schema.String),
                    uid: Schema.optional(Schema.String),
                  }),
                ),
                volumeName: Schema.optional(Schema.String),
                volumeNamespace: Schema.optional(Schema.String),
              }),
            ),
            volumeAttributesClassName: Schema.optional(Schema.String),
            volumeMode: Schema.optional(Schema.String),
            vsphereVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                storagePolicyID: Schema.optional(Schema.String),
                storagePolicyName: Schema.optional(Schema.String),
                volumePath: Schema.String,
              }),
            ),
          }),
        ),
        persistentVolumeName: Schema.optional(Schema.String),
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        attachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
        attached: Schema.Boolean,
        attachmentMetadata: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        detachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ReplaceStorageV1VolumeAttachmentOutput>;

// The operation
/**
 * replace the specified VolumeAttachment
 *
 * @param name - name of the VolumeAttachment
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceStorageV1VolumeAttachment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ReplaceStorageV1VolumeAttachmentInput,
    outputSchema: ReplaceStorageV1VolumeAttachmentOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface ReplaceStorageV1VolumeAttachmentStatusInput {
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
  spec: {
    attacher: string;
    nodeName: string;
    source: {
      inlineVolumeSpec?: {
        accessModes?: string[];
        awsElasticBlockStore?: {
          fsType?: string;
          partition?: number;
          readOnly?: boolean;
          volumeID: string;
        };
        azureDisk?: {
          cachingMode?: string;
          diskName: string;
          diskURI: string;
          fsType?: string;
          kind?: string;
          readOnly?: boolean;
        };
        azureFile?: {
          readOnly?: boolean;
          secretName: string;
          secretNamespace?: string;
          shareName: string;
        };
        capacity?: Record<string, string>;
        cephfs?: {
          monitors: string[];
          path?: string;
          readOnly?: boolean;
          secretFile?: string;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        cinder?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          volumeID: string;
        };
        claimRef?: {
          apiVersion?: string;
          fieldPath?: string;
          kind?: string;
          name?: string;
          namespace?: string;
          resourceVersion?: string;
          uid?: string;
        };
        csi?: {
          controllerExpandSecretRef?: { name?: string; namespace?: string };
          controllerPublishSecretRef?: { name?: string; namespace?: string };
          driver: string;
          fsType?: string;
          nodeExpandSecretRef?: { name?: string; namespace?: string };
          nodePublishSecretRef?: { name?: string; namespace?: string };
          nodeStageSecretRef?: { name?: string; namespace?: string };
          readOnly?: boolean;
          volumeAttributes?: Record<string, string>;
          volumeHandle: string;
        };
        fc?: {
          fsType?: string;
          lun?: number;
          readOnly?: boolean;
          targetWWNs?: string[];
          wwids?: string[];
        };
        flexVolume?: {
          driver: string;
          fsType?: string;
          options?: Record<string, string>;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
        };
        flocker?: { datasetName?: string; datasetUUID?: string };
        gcePersistentDisk?: {
          fsType?: string;
          partition?: number;
          pdName: string;
          readOnly?: boolean;
        };
        glusterfs?: {
          endpoints: string;
          endpointsNamespace?: string;
          path: string;
          readOnly?: boolean;
        };
        hostPath?: { path: string; type?: string };
        iscsi?: {
          chapAuthDiscovery?: boolean;
          chapAuthSession?: boolean;
          fsType?: string;
          initiatorName?: string;
          iqn: string;
          iscsiInterface?: string;
          lun: number;
          portals?: string[];
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          targetPortal: string;
        };
        local?: { fsType?: string; path: string };
        mountOptions?: string[];
        nfs?: { path: string; readOnly?: boolean; server: string };
        nodeAffinity?: {
          required?: {
            nodeSelectorTerms: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
            }[];
          };
        };
        persistentVolumeReclaimPolicy?: string;
        photonPersistentDisk?: { fsType?: string; pdID: string };
        portworxVolume?: {
          fsType?: string;
          readOnly?: boolean;
          volumeID: string;
        };
        quobyte?: {
          group?: string;
          readOnly?: boolean;
          registry: string;
          tenant?: string;
          user?: string;
          volume: string;
        };
        rbd?: {
          fsType?: string;
          image: string;
          keyring?: string;
          monitors: string[];
          pool?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        scaleIO?: {
          fsType?: string;
          gateway: string;
          protectionDomain?: string;
          readOnly?: boolean;
          secretRef: { name?: string; namespace?: string };
          sslEnabled?: boolean;
          storageMode?: string;
          storagePool?: string;
          system: string;
          volumeName?: string;
        };
        storageClassName?: string;
        storageos?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            apiVersion?: string;
            fieldPath?: string;
            kind?: string;
            name?: string;
            namespace?: string;
            resourceVersion?: string;
            uid?: string;
          };
          volumeName?: string;
          volumeNamespace?: string;
        };
        volumeAttributesClassName?: string;
        volumeMode?: string;
        vsphereVolume?: {
          fsType?: string;
          storagePolicyID?: string;
          storagePolicyName?: string;
          volumePath: string;
        };
      };
      persistentVolumeName?: string;
    };
  };
  status?: {
    attachError?: { errorCode?: number; message?: string; time?: string };
    attached: boolean;
    attachmentMetadata?: Record<string, string>;
    detachError?: { errorCode?: number; message?: string; time?: string };
  };
}
export const ReplaceStorageV1VolumeAttachmentStatusInput =
  /*@__PURE__*/ Schema.Struct({
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
      attacher: Schema.String,
      nodeName: Schema.String,
      source: Schema.Struct({
        inlineVolumeSpec: Schema.optional(
          Schema.Struct({
            accessModes: Schema.optional(Schema.Array(Schema.String)),
            awsElasticBlockStore: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            azureDisk: Schema.optional(
              Schema.Struct({
                cachingMode: Schema.optional(Schema.String),
                diskName: Schema.String,
                diskURI: Schema.String,
                fsType: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            azureFile: Schema.optional(
              Schema.Struct({
                readOnly: Schema.optional(Schema.Boolean),
                secretName: Schema.String,
                secretNamespace: Schema.optional(Schema.String),
                shareName: Schema.String,
              }),
            ),
            capacity: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            cephfs: Schema.optional(
              Schema.Struct({
                monitors: Schema.Array(Schema.String),
                path: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretFile: Schema.optional(Schema.String),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            cinder: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                volumeID: Schema.String,
              }),
            ),
            claimRef: Schema.optional(
              Schema.Struct({
                apiVersion: Schema.optional(Schema.String),
                fieldPath: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
                resourceVersion: Schema.optional(Schema.String),
                uid: Schema.optional(Schema.String),
              }),
            ),
            csi: Schema.optional(
              Schema.Struct({
                controllerExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                controllerPublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                nodeExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodePublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodeStageSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                volumeAttributes: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                volumeHandle: Schema.String,
              }),
            ),
            fc: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                lun: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                targetWWNs: Schema.optional(Schema.Array(Schema.String)),
                wwids: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            flexVolume: Schema.optional(
              Schema.Struct({
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                options: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            flocker: Schema.optional(
              Schema.Struct({
                datasetName: Schema.optional(Schema.String),
                datasetUUID: Schema.optional(Schema.String),
              }),
            ),
            gcePersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                pdName: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            glusterfs: Schema.optional(
              Schema.Struct({
                endpoints: Schema.String,
                endpointsNamespace: Schema.optional(Schema.String),
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            hostPath: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                type: Schema.optional(Schema.String),
              }),
            ),
            iscsi: Schema.optional(
              Schema.Struct({
                chapAuthDiscovery: Schema.optional(Schema.Boolean),
                chapAuthSession: Schema.optional(Schema.Boolean),
                fsType: Schema.optional(Schema.String),
                initiatorName: Schema.optional(Schema.String),
                iqn: Schema.String,
                iscsiInterface: Schema.optional(Schema.String),
                lun: Schema.Number,
                portals: Schema.optional(Schema.Array(Schema.String)),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                targetPortal: Schema.String,
              }),
            ),
            local: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                path: Schema.String,
              }),
            ),
            mountOptions: Schema.optional(Schema.Array(Schema.String)),
            nfs: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
                server: Schema.String,
              }),
            ),
            nodeAffinity: Schema.optional(
              Schema.Struct({
                required: Schema.optional(
                  Schema.Struct({
                    nodeSelectorTerms: Schema.Array(
                      Schema.Struct({
                        matchExpressions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                        matchFields: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            persistentVolumeReclaimPolicy: Schema.optional(Schema.String),
            photonPersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                pdID: Schema.String,
              }),
            ),
            portworxVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            quobyte: Schema.optional(
              Schema.Struct({
                group: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                registry: Schema.String,
                tenant: Schema.optional(Schema.String),
                user: Schema.optional(Schema.String),
                volume: Schema.String,
              }),
            ),
            rbd: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                image: Schema.String,
                keyring: Schema.optional(Schema.String),
                monitors: Schema.Array(Schema.String),
                pool: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            scaleIO: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                gateway: Schema.String,
                protectionDomain: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.Struct({
                  name: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                }),
                sslEnabled: Schema.optional(Schema.Boolean),
                storageMode: Schema.optional(Schema.String),
                storagePool: Schema.optional(Schema.String),
                system: Schema.String,
                volumeName: Schema.optional(Schema.String),
              }),
            ),
            storageClassName: Schema.optional(Schema.String),
            storageos: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    fieldPath: Schema.optional(Schema.String),
                    kind: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    resourceVersion: Schema.optional(Schema.String),
                    uid: Schema.optional(Schema.String),
                  }),
                ),
                volumeName: Schema.optional(Schema.String),
                volumeNamespace: Schema.optional(Schema.String),
              }),
            ),
            volumeAttributesClassName: Schema.optional(Schema.String),
            volumeMode: Schema.optional(Schema.String),
            vsphereVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                storagePolicyID: Schema.optional(Schema.String),
                storagePolicyName: Schema.optional(Schema.String),
                volumePath: Schema.String,
              }),
            ),
          }),
        ),
        persistentVolumeName: Schema.optional(Schema.String),
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        attachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
        attached: Schema.Boolean,
        attachmentMetadata: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        detachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/storage.k8s.io/v1/volumeattachments/{name}/status",
    }),
  ) as unknown as Schema.Codec<ReplaceStorageV1VolumeAttachmentStatusInput>;

// Output Schema
export interface ReplaceStorageV1VolumeAttachmentStatusOutput {
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
  spec: {
    attacher: string;
    nodeName: string;
    source: {
      inlineVolumeSpec?: {
        accessModes?: string[];
        awsElasticBlockStore?: {
          fsType?: string;
          partition?: number;
          readOnly?: boolean;
          volumeID: string;
        };
        azureDisk?: {
          cachingMode?: string;
          diskName: string;
          diskURI: string;
          fsType?: string;
          kind?: string;
          readOnly?: boolean;
        };
        azureFile?: {
          readOnly?: boolean;
          secretName: string;
          secretNamespace?: string;
          shareName: string;
        };
        capacity?: Record<string, string>;
        cephfs?: {
          monitors: string[];
          path?: string;
          readOnly?: boolean;
          secretFile?: string;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        cinder?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          volumeID: string;
        };
        claimRef?: {
          apiVersion?: string;
          fieldPath?: string;
          kind?: string;
          name?: string;
          namespace?: string;
          resourceVersion?: string;
          uid?: string;
        };
        csi?: {
          controllerExpandSecretRef?: { name?: string; namespace?: string };
          controllerPublishSecretRef?: { name?: string; namespace?: string };
          driver: string;
          fsType?: string;
          nodeExpandSecretRef?: { name?: string; namespace?: string };
          nodePublishSecretRef?: { name?: string; namespace?: string };
          nodeStageSecretRef?: { name?: string; namespace?: string };
          readOnly?: boolean;
          volumeAttributes?: Record<string, string>;
          volumeHandle: string;
        };
        fc?: {
          fsType?: string;
          lun?: number;
          readOnly?: boolean;
          targetWWNs?: string[];
          wwids?: string[];
        };
        flexVolume?: {
          driver: string;
          fsType?: string;
          options?: Record<string, string>;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
        };
        flocker?: { datasetName?: string; datasetUUID?: string };
        gcePersistentDisk?: {
          fsType?: string;
          partition?: number;
          pdName: string;
          readOnly?: boolean;
        };
        glusterfs?: {
          endpoints: string;
          endpointsNamespace?: string;
          path: string;
          readOnly?: boolean;
        };
        hostPath?: { path: string; type?: string };
        iscsi?: {
          chapAuthDiscovery?: boolean;
          chapAuthSession?: boolean;
          fsType?: string;
          initiatorName?: string;
          iqn: string;
          iscsiInterface?: string;
          lun: number;
          portals?: string[];
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          targetPortal: string;
        };
        local?: { fsType?: string; path: string };
        mountOptions?: string[];
        nfs?: { path: string; readOnly?: boolean; server: string };
        nodeAffinity?: {
          required?: {
            nodeSelectorTerms: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
            }[];
          };
        };
        persistentVolumeReclaimPolicy?: string;
        photonPersistentDisk?: { fsType?: string; pdID: string };
        portworxVolume?: {
          fsType?: string;
          readOnly?: boolean;
          volumeID: string;
        };
        quobyte?: {
          group?: string;
          readOnly?: boolean;
          registry: string;
          tenant?: string;
          user?: string;
          volume: string;
        };
        rbd?: {
          fsType?: string;
          image: string;
          keyring?: string;
          monitors: string[];
          pool?: string;
          readOnly?: boolean;
          secretRef?: { name?: string; namespace?: string };
          user?: string;
        };
        scaleIO?: {
          fsType?: string;
          gateway: string;
          protectionDomain?: string;
          readOnly?: boolean;
          secretRef: { name?: string; namespace?: string };
          sslEnabled?: boolean;
          storageMode?: string;
          storagePool?: string;
          system: string;
          volumeName?: string;
        };
        storageClassName?: string;
        storageos?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            apiVersion?: string;
            fieldPath?: string;
            kind?: string;
            name?: string;
            namespace?: string;
            resourceVersion?: string;
            uid?: string;
          };
          volumeName?: string;
          volumeNamespace?: string;
        };
        volumeAttributesClassName?: string;
        volumeMode?: string;
        vsphereVolume?: {
          fsType?: string;
          storagePolicyID?: string;
          storagePolicyName?: string;
          volumePath: string;
        };
      };
      persistentVolumeName?: string;
    };
  };
  status?: {
    attachError?: { errorCode?: number; message?: string; time?: string };
    attached: boolean;
    attachmentMetadata?: Record<string, string>;
    detachError?: { errorCode?: number; message?: string; time?: string };
  };
}
export const ReplaceStorageV1VolumeAttachmentStatusOutput =
  /*@__PURE__*/ Schema.Struct({
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
      attacher: Schema.String,
      nodeName: Schema.String,
      source: Schema.Struct({
        inlineVolumeSpec: Schema.optional(
          Schema.Struct({
            accessModes: Schema.optional(Schema.Array(Schema.String)),
            awsElasticBlockStore: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            azureDisk: Schema.optional(
              Schema.Struct({
                cachingMode: Schema.optional(Schema.String),
                diskName: Schema.String,
                diskURI: Schema.String,
                fsType: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            azureFile: Schema.optional(
              Schema.Struct({
                readOnly: Schema.optional(Schema.Boolean),
                secretName: Schema.String,
                secretNamespace: Schema.optional(Schema.String),
                shareName: Schema.String,
              }),
            ),
            capacity: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            cephfs: Schema.optional(
              Schema.Struct({
                monitors: Schema.Array(Schema.String),
                path: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretFile: Schema.optional(Schema.String),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            cinder: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                volumeID: Schema.String,
              }),
            ),
            claimRef: Schema.optional(
              Schema.Struct({
                apiVersion: Schema.optional(Schema.String),
                fieldPath: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
                resourceVersion: Schema.optional(Schema.String),
                uid: Schema.optional(Schema.String),
              }),
            ),
            csi: Schema.optional(
              Schema.Struct({
                controllerExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                controllerPublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                nodeExpandSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodePublishSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                nodeStageSecretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                volumeAttributes: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                volumeHandle: Schema.String,
              }),
            ),
            fc: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                lun: Schema.optional(Schema.Number),
                readOnly: Schema.optional(Schema.Boolean),
                targetWWNs: Schema.optional(Schema.Array(Schema.String)),
                wwids: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            flexVolume: Schema.optional(
              Schema.Struct({
                driver: Schema.String,
                fsType: Schema.optional(Schema.String),
                options: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            flocker: Schema.optional(
              Schema.Struct({
                datasetName: Schema.optional(Schema.String),
                datasetUUID: Schema.optional(Schema.String),
              }),
            ),
            gcePersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                partition: Schema.optional(Schema.Number),
                pdName: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            glusterfs: Schema.optional(
              Schema.Struct({
                endpoints: Schema.String,
                endpointsNamespace: Schema.optional(Schema.String),
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
              }),
            ),
            hostPath: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                type: Schema.optional(Schema.String),
              }),
            ),
            iscsi: Schema.optional(
              Schema.Struct({
                chapAuthDiscovery: Schema.optional(Schema.Boolean),
                chapAuthSession: Schema.optional(Schema.Boolean),
                fsType: Schema.optional(Schema.String),
                initiatorName: Schema.optional(Schema.String),
                iqn: Schema.String,
                iscsiInterface: Schema.optional(Schema.String),
                lun: Schema.Number,
                portals: Schema.optional(Schema.Array(Schema.String)),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                targetPortal: Schema.String,
              }),
            ),
            local: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                path: Schema.String,
              }),
            ),
            mountOptions: Schema.optional(Schema.Array(Schema.String)),
            nfs: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
                server: Schema.String,
              }),
            ),
            nodeAffinity: Schema.optional(
              Schema.Struct({
                required: Schema.optional(
                  Schema.Struct({
                    nodeSelectorTerms: Schema.Array(
                      Schema.Struct({
                        matchExpressions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                        matchFields: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              key: Schema.String,
                              operator: Schema.String,
                              values: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            persistentVolumeReclaimPolicy: Schema.optional(Schema.String),
            photonPersistentDisk: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                pdID: Schema.String,
              }),
            ),
            portworxVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                volumeID: Schema.String,
              }),
            ),
            quobyte: Schema.optional(
              Schema.Struct({
                group: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                registry: Schema.String,
                tenant: Schema.optional(Schema.String),
                user: Schema.optional(Schema.String),
                volume: Schema.String,
              }),
            ),
            rbd: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                image: Schema.String,
                keyring: Schema.optional(Schema.String),
                monitors: Schema.Array(Schema.String),
                pool: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                user: Schema.optional(Schema.String),
              }),
            ),
            scaleIO: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                gateway: Schema.String,
                protectionDomain: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.Struct({
                  name: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                }),
                sslEnabled: Schema.optional(Schema.Boolean),
                storageMode: Schema.optional(Schema.String),
                storagePool: Schema.optional(Schema.String),
                system: Schema.String,
                volumeName: Schema.optional(Schema.String),
              }),
            ),
            storageClassName: Schema.optional(Schema.String),
            storageos: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                readOnly: Schema.optional(Schema.Boolean),
                secretRef: Schema.optional(
                  Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    fieldPath: Schema.optional(Schema.String),
                    kind: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    resourceVersion: Schema.optional(Schema.String),
                    uid: Schema.optional(Schema.String),
                  }),
                ),
                volumeName: Schema.optional(Schema.String),
                volumeNamespace: Schema.optional(Schema.String),
              }),
            ),
            volumeAttributesClassName: Schema.optional(Schema.String),
            volumeMode: Schema.optional(Schema.String),
            vsphereVolume: Schema.optional(
              Schema.Struct({
                fsType: Schema.optional(Schema.String),
                storagePolicyID: Schema.optional(Schema.String),
                storagePolicyName: Schema.optional(Schema.String),
                volumePath: Schema.String,
              }),
            ),
          }),
        ),
        persistentVolumeName: Schema.optional(Schema.String),
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        attachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
        attached: Schema.Boolean,
        attachmentMetadata: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        detachError: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.Number),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ReplaceStorageV1VolumeAttachmentStatusOutput>;

// The operation
/**
 * replace status of the specified VolumeAttachment
 *
 * @param name - name of the VolumeAttachment
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceStorageV1VolumeAttachmentStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ReplaceStorageV1VolumeAttachmentStatusInput,
    outputSchema: ReplaceStorageV1VolumeAttachmentStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface ReplaceStorageV1VolumeAttributesClassInput {
  name: string;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  apiVersion?: string;
  driverName: string;
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
  parameters?: Record<string, string>;
}
export const ReplaceStorageV1VolumeAttributesClassInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.String),
    fieldManager: Schema.optional(Schema.String),
    fieldValidation: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    driverName: Schema.String,
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
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/storage.k8s.io/v1/volumeattributesclasses/{name}",
    }),
  ) as unknown as Schema.Codec<ReplaceStorageV1VolumeAttributesClassInput>;

// Output Schema
export interface ReplaceStorageV1VolumeAttributesClassOutput {
  apiVersion?: string;
  driverName: string;
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
  parameters?: Record<string, string>;
}
export const ReplaceStorageV1VolumeAttributesClassOutput =
  /*@__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    driverName: Schema.String,
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
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<ReplaceStorageV1VolumeAttributesClassOutput>;

// The operation
/**
 * replace the specified VolumeAttributesClass
 *
 * @param name - name of the VolumeAttributesClass
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceStorageV1VolumeAttributesClass =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ReplaceStorageV1VolumeAttributesClassInput,
    outputSchema: ReplaceStorageV1VolumeAttributesClassOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export interface WatchStorageV1CSIDriverInput {
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
export const WatchStorageV1CSIDriverInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/watch/csidrivers/{name}",
    }),
  ) as unknown as Schema.Codec<WatchStorageV1CSIDriverInput>;

// Output Schema
export interface WatchStorageV1CSIDriverOutput {
  object: unknown;
  type: string;
}
export const WatchStorageV1CSIDriverOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchStorageV1CSIDriverOutput>;

// The operation
/**
 * watch changes to an object of kind CSIDriver. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the CSIDriver
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
export const watchStorageV1CSIDriver = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchStorageV1CSIDriverInput,
  outputSchema: WatchStorageV1CSIDriverOutput,
}));
// Input Schema
export interface WatchStorageV1CSIDriverListInput {
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
export const WatchStorageV1CSIDriverListInput =
  /*@__PURE__*/ Schema.Struct({
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
    T.Http({ method: "GET", path: "/apis/storage.k8s.io/v1/watch/csidrivers" }),
  ) as unknown as Schema.Codec<WatchStorageV1CSIDriverListInput>;

// Output Schema
export interface WatchStorageV1CSIDriverListOutput {
  object: unknown;
  type: string;
}
export const WatchStorageV1CSIDriverListOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchStorageV1CSIDriverListOutput>;

// The operation
/**
 * watch individual changes to a list of CSIDriver. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchStorageV1CSIDriverList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchStorageV1CSIDriverListInput,
  outputSchema: WatchStorageV1CSIDriverListOutput,
}));
// Input Schema
export interface WatchStorageV1CSINodeInput {
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
export const WatchStorageV1CSINodeInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/watch/csinodes/{name}",
    }),
  ) as unknown as Schema.Codec<WatchStorageV1CSINodeInput>;

// Output Schema
export interface WatchStorageV1CSINodeOutput {
  object: unknown;
  type: string;
}
export const WatchStorageV1CSINodeOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchStorageV1CSINodeOutput>;

// The operation
/**
 * watch changes to an object of kind CSINode. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the CSINode
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
export const watchStorageV1CSINode = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchStorageV1CSINodeInput,
  outputSchema: WatchStorageV1CSINodeOutput,
}));
// Input Schema
export interface WatchStorageV1CSINodeListInput {
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
export const WatchStorageV1CSINodeListInput =
  /*@__PURE__*/ Schema.Struct({
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
    T.Http({ method: "GET", path: "/apis/storage.k8s.io/v1/watch/csinodes" }),
  ) as unknown as Schema.Codec<WatchStorageV1CSINodeListInput>;

// Output Schema
export interface WatchStorageV1CSINodeListOutput {
  object: unknown;
  type: string;
}
export const WatchStorageV1CSINodeListOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchStorageV1CSINodeListOutput>;

// The operation
/**
 * watch individual changes to a list of CSINode. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchStorageV1CSINodeList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchStorageV1CSINodeListInput,
  outputSchema: WatchStorageV1CSINodeListOutput,
}));
// Input Schema
export interface WatchStorageV1CSIStorageCapacityListForAllNamespacesInput {
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
export const WatchStorageV1CSIStorageCapacityListForAllNamespacesInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/watch/csistoragecapacities",
    }),
  ) as unknown as Schema.Codec<WatchStorageV1CSIStorageCapacityListForAllNamespacesInput>;

// Output Schema
export interface WatchStorageV1CSIStorageCapacityListForAllNamespacesOutput {
  object: unknown;
  type: string;
}
export const WatchStorageV1CSIStorageCapacityListForAllNamespacesOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchStorageV1CSIStorageCapacityListForAllNamespacesOutput>;

// The operation
/**
 * watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchStorageV1CSIStorageCapacityListForAllNamespaces =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WatchStorageV1CSIStorageCapacityListForAllNamespacesInput,
    outputSchema: WatchStorageV1CSIStorageCapacityListForAllNamespacesOutput,
  }));
// Input Schema
export interface WatchStorageV1NamespacedCSIStorageCapacityInput {
  name: string;
  namespace: string;
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
export const WatchStorageV1NamespacedCSIStorageCapacityInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/watch/namespaces/{namespace}/csistoragecapacities/{name}",
    }),
  ) as unknown as Schema.Codec<WatchStorageV1NamespacedCSIStorageCapacityInput>;

// Output Schema
export interface WatchStorageV1NamespacedCSIStorageCapacityOutput {
  object: unknown;
  type: string;
}
export const WatchStorageV1NamespacedCSIStorageCapacityOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchStorageV1NamespacedCSIStorageCapacityOutput>;

// The operation
/**
 * watch changes to an object of kind CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the CSIStorageCapacity
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
export const watchStorageV1NamespacedCSIStorageCapacity =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WatchStorageV1NamespacedCSIStorageCapacityInput,
    outputSchema: WatchStorageV1NamespacedCSIStorageCapacityOutput,
  }));
// Input Schema
export interface WatchStorageV1NamespacedCSIStorageCapacityListInput {
  namespace: string;
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
export const WatchStorageV1NamespacedCSIStorageCapacityListInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/watch/namespaces/{namespace}/csistoragecapacities",
    }),
  ) as unknown as Schema.Codec<WatchStorageV1NamespacedCSIStorageCapacityListInput>;

// Output Schema
export interface WatchStorageV1NamespacedCSIStorageCapacityListOutput {
  object: unknown;
  type: string;
}
export const WatchStorageV1NamespacedCSIStorageCapacityListOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchStorageV1NamespacedCSIStorageCapacityListOutput>;

// The operation
/**
 * watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchStorageV1NamespacedCSIStorageCapacityList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WatchStorageV1NamespacedCSIStorageCapacityListInput,
    outputSchema: WatchStorageV1NamespacedCSIStorageCapacityListOutput,
  }));
// Input Schema
export interface WatchStorageV1StorageClassInput {
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
export const WatchStorageV1StorageClassInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/watch/storageclasses/{name}",
    }),
  ) as unknown as Schema.Codec<WatchStorageV1StorageClassInput>;

// Output Schema
export interface WatchStorageV1StorageClassOutput {
  object: unknown;
  type: string;
}
export const WatchStorageV1StorageClassOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchStorageV1StorageClassOutput>;

// The operation
/**
 * watch changes to an object of kind StorageClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the StorageClass
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
export const watchStorageV1StorageClass = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchStorageV1StorageClassInput,
  outputSchema: WatchStorageV1StorageClassOutput,
}));
// Input Schema
export interface WatchStorageV1StorageClassListInput {
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
export const WatchStorageV1StorageClassListInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/watch/storageclasses",
    }),
  ) as unknown as Schema.Codec<WatchStorageV1StorageClassListInput>;

// Output Schema
export interface WatchStorageV1StorageClassListOutput {
  object: unknown;
  type: string;
}
export const WatchStorageV1StorageClassListOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchStorageV1StorageClassListOutput>;

// The operation
/**
 * watch individual changes to a list of StorageClass. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchStorageV1StorageClassList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WatchStorageV1StorageClassListInput,
    outputSchema: WatchStorageV1StorageClassListOutput,
  }));
// Input Schema
export interface WatchStorageV1VolumeAttachmentInput {
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
export const WatchStorageV1VolumeAttachmentInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/watch/volumeattachments/{name}",
    }),
  ) as unknown as Schema.Codec<WatchStorageV1VolumeAttachmentInput>;

// Output Schema
export interface WatchStorageV1VolumeAttachmentOutput {
  object: unknown;
  type: string;
}
export const WatchStorageV1VolumeAttachmentOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchStorageV1VolumeAttachmentOutput>;

// The operation
/**
 * watch changes to an object of kind VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the VolumeAttachment
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
export const watchStorageV1VolumeAttachment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WatchStorageV1VolumeAttachmentInput,
    outputSchema: WatchStorageV1VolumeAttachmentOutput,
  }));
// Input Schema
export interface WatchStorageV1VolumeAttachmentListInput {
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
export const WatchStorageV1VolumeAttachmentListInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/watch/volumeattachments",
    }),
  ) as unknown as Schema.Codec<WatchStorageV1VolumeAttachmentListInput>;

// Output Schema
export interface WatchStorageV1VolumeAttachmentListOutput {
  object: unknown;
  type: string;
}
export const WatchStorageV1VolumeAttachmentListOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchStorageV1VolumeAttachmentListOutput>;

// The operation
/**
 * watch individual changes to a list of VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchStorageV1VolumeAttachmentList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WatchStorageV1VolumeAttachmentListInput,
    outputSchema: WatchStorageV1VolumeAttachmentListOutput,
  }));
// Input Schema
export interface WatchStorageV1VolumeAttributesClassInput {
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
export const WatchStorageV1VolumeAttributesClassInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/watch/volumeattributesclasses/{name}",
    }),
  ) as unknown as Schema.Codec<WatchStorageV1VolumeAttributesClassInput>;

// Output Schema
export interface WatchStorageV1VolumeAttributesClassOutput {
  object: unknown;
  type: string;
}
export const WatchStorageV1VolumeAttributesClassOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchStorageV1VolumeAttributesClassOutput>;

// The operation
/**
 * watch changes to an object of kind VolumeAttributesClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the VolumeAttributesClass
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
export const watchStorageV1VolumeAttributesClass =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WatchStorageV1VolumeAttributesClassInput,
    outputSchema: WatchStorageV1VolumeAttributesClassOutput,
  }));
// Input Schema
export interface WatchStorageV1VolumeAttributesClassListInput {
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
export const WatchStorageV1VolumeAttributesClassListInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/apis/storage.k8s.io/v1/watch/volumeattributesclasses",
    }),
  ) as unknown as Schema.Codec<WatchStorageV1VolumeAttributesClassListInput>;

// Output Schema
export interface WatchStorageV1VolumeAttributesClassListOutput {
  object: unknown;
  type: string;
}
export const WatchStorageV1VolumeAttributesClassListOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  }) as unknown as Schema.Codec<WatchStorageV1VolumeAttributesClassListOutput>;

// The operation
/**
 * watch individual changes to a list of VolumeAttributesClass. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchStorageV1VolumeAttributesClassList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WatchStorageV1VolumeAttributesClassListInput,
    outputSchema: WatchStorageV1VolumeAttributesClassListOutput,
  }));
