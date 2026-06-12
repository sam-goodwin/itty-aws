import * as Schema from "effect/Schema";

export const io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDRSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientCIDR: Schema.String,
    serverAddress: Schema.String,
  });
export const io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export const io_k8s_api_core_v1_ComponentStatusSchema =
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
export const io_k8s_api_core_v1_ComponentConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    creationTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    deletionGracePeriodSeconds: Schema.optional(Schema.Number),
    deletionTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    finalizers: Schema.optional(Schema.Array(Schema.String)),
    generateName: Schema.optional(Schema.String),
    generation: Schema.optional(Schema.Number),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    managedFields: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntrySchema,
        ),
      ),
    ),
    name: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
    ownerReferences: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_OwnerReferenceSchema,
        ),
      ),
    ),
    resourceVersion: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
  });
export const io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const io_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    fieldsType: Schema.optional(Schema.String),
    fieldsV1: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_FieldsV1Schema),
    ),
    manager: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    subresource: Schema.optional(Schema.String),
    time: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
  });
export const io_k8s_apimachinery_pkg_apis_meta_v1_FieldsV1Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const io_k8s_apimachinery_pkg_apis_meta_v1_OwnerReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.String,
    blockOwnerDeletion: Schema.optional(Schema.Boolean),
    controller: Schema.optional(Schema.Boolean),
    kind: Schema.String,
    name: Schema.String,
    uid: Schema.String,
  });
export const io_k8s_apimachinery_pkg_apis_meta_v1_ListMetaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    continue: Schema.optional(Schema.String),
    remainingItemCount: Schema.optional(Schema.Number),
    resourceVersion: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    shardInfo: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ShardInfoSchema,
      ),
    ),
  });
export const io_k8s_apimachinery_pkg_apis_meta_v1_ShardInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selector: Schema.String,
  });
export const io_k8s_api_core_v1_ConfigMapSchema =
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
export const io_k8s_api_core_v1_EndpointsSchema =
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
export const io_k8s_api_core_v1_EndpointSubsetSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addresses: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_EndpointAddressSchema),
      ),
    ),
    notReadyAddresses: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_EndpointAddressSchema),
      ),
    ),
    ports: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_EndpointPortSchema)),
    ),
  });
export const io_k8s_api_core_v1_EndpointAddressSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostname: Schema.optional(Schema.String),
    ip: Schema.String,
    nodeName: Schema.optional(Schema.String),
    targetRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
  });
export const io_k8s_api_core_v1_ObjectReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    fieldPath: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
    resourceVersion: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_EndpointPortSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appProtocol: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    port: Schema.Number,
    protocol: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_EventSchema =
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
export const io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const io_k8s_api_core_v1_EventSeriesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    lastObservedTime: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
      ),
    ),
  });
export const io_k8s_api_core_v1_EventSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    component: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_LimitRangeSchema =
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
export const io_k8s_api_core_v1_LimitRangeSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    limits: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_LimitRangeItemSchema),
    ),
  });
export const io_k8s_api_core_v1_LimitRangeItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    default: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    defaultRequest: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    max: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    maxLimitRequestRatio: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    min: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    type: Schema.String,
  });
export const io_k8s_apimachinery_pkg_api_resource_QuantitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const io_k8s_api_core_v1_NamespaceSchema =
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
export const io_k8s_api_core_v1_NamespaceSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    finalizers: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_core_v1_NamespaceStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_NamespaceConditionSchema),
      ),
    ),
    phase: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_NamespaceConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    causes: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_StatusCauseSchema,
        ),
      ),
    ),
    group: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    retryAfterSeconds: Schema.optional(Schema.Number),
    uid: Schema.optional(Schema.String),
  });
export const io_k8s_apimachinery_pkg_apis_meta_v1_StatusCauseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_PersistentVolumeClaimSchema =
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
export const io_k8s_api_core_v1_PersistentVolumeClaimSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessModes: Schema.optional(Schema.Array(Schema.String)),
    dataSource: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_TypedLocalObjectReferenceSchema),
    ),
    dataSourceRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_TypedObjectReferenceSchema),
    ),
    resources: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_VolumeResourceRequirementsSchema),
    ),
    selector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    storageClassName: Schema.optional(Schema.String),
    volumeAttributesClassName: Schema.optional(Schema.String),
    volumeMode: Schema.optional(Schema.String),
    volumeName: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_TypedLocalObjectReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroup: Schema.optional(Schema.String),
    kind: Schema.String,
    name: Schema.String,
  });
export const io_k8s_api_core_v1_TypedObjectReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroup: Schema.optional(Schema.String),
    kind: Schema.String,
    name: Schema.String,
    namespace: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_VolumeResourceRequirementsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    limits: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    requests: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
  });
export const io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchExpressions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorRequirementSchema,
        ),
      ),
    ),
    matchLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export const io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorRequirementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    operator: Schema.String,
    values: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_core_v1_PersistentVolumeClaimStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessModes: Schema.optional(Schema.Array(Schema.String)),
    allocatedResourceStatuses: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    allocatedResources: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    capacity: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_core_v1_PersistentVolumeClaimConditionSchema,
        ),
      ),
    ),
    currentVolumeAttributesClassName: Schema.optional(Schema.String),
    modifyVolumeStatus: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ModifyVolumeStatusSchema),
    ),
    phase: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_PersistentVolumeClaimConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastProbeTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_api_core_v1_ModifyVolumeStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.String,
    targetVolumeAttributesClassName: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_PodSchema =
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
export const io_k8s_api_core_v1_PodSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activeDeadlineSeconds: Schema.optional(Schema.Number),
    affinity: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_AffinitySchema),
    ),
    automountServiceAccountToken: Schema.optional(Schema.Boolean),
    containers: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_ContainerSchema),
    ),
    dnsConfig: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodDNSConfigSchema),
    ),
    dnsPolicy: Schema.optional(Schema.String),
    enableServiceLinks: Schema.optional(Schema.Boolean),
    ephemeralContainers: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_EphemeralContainerSchema),
      ),
    ),
    hostAliases: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_HostAliasSchema)),
    ),
    hostIPC: Schema.optional(Schema.Boolean),
    hostNetwork: Schema.optional(Schema.Boolean),
    hostPID: Schema.optional(Schema.Boolean),
    hostUsers: Schema.optional(Schema.Boolean),
    hostname: Schema.optional(Schema.String),
    hostnameOverride: Schema.optional(Schema.String),
    imagePullSecrets: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_LocalObjectReferenceSchema),
      ),
    ),
    initContainers: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_ContainerSchema)),
    ),
    nodeName: Schema.optional(Schema.String),
    nodeSelector: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    os: Schema.optional(Schema.suspend(() => io_k8s_api_core_v1_PodOSSchema)),
    overhead: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    preemptionPolicy: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
    priorityClassName: Schema.optional(Schema.String),
    readinessGates: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_PodReadinessGateSchema),
      ),
    ),
    resourceClaims: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_PodResourceClaimSchema),
      ),
    ),
    resources: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceRequirementsSchema),
    ),
    restartPolicy: Schema.optional(Schema.String),
    runtimeClassName: Schema.optional(Schema.String),
    schedulerName: Schema.optional(Schema.String),
    schedulingGates: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_PodSchedulingGateSchema),
      ),
    ),
    schedulingGroup: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSchedulingGroupSchema),
    ),
    securityContext: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSecurityContextSchema),
    ),
    serviceAccount: Schema.optional(Schema.String),
    serviceAccountName: Schema.optional(Schema.String),
    setHostnameAsFQDN: Schema.optional(Schema.Boolean),
    shareProcessNamespace: Schema.optional(Schema.Boolean),
    subdomain: Schema.optional(Schema.String),
    terminationGracePeriodSeconds: Schema.optional(Schema.Number),
    tolerations: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_TolerationSchema)),
    ),
    topologySpreadConstraints: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_TopologySpreadConstraintSchema),
      ),
    ),
    volumes: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_VolumeSchema)),
    ),
  });
export const io_k8s_api_core_v1_AffinitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeAffinity: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeAffinitySchema),
    ),
    podAffinity: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodAffinitySchema),
    ),
    podAntiAffinity: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodAntiAffinitySchema),
    ),
  });
export const io_k8s_api_core_v1_NodeAffinitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preferredDuringSchedulingIgnoredDuringExecution: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_PreferredSchedulingTermSchema),
      ),
    ),
    requiredDuringSchedulingIgnoredDuringExecution: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSelectorSchema),
    ),
  });
export const io_k8s_api_core_v1_PreferredSchedulingTermSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preference: Schema.suspend(() => io_k8s_api_core_v1_NodeSelectorTermSchema),
    weight: Schema.Number,
  });
export const io_k8s_api_core_v1_NodeSelectorTermSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchExpressions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_NodeSelectorRequirementSchema),
      ),
    ),
    matchFields: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_NodeSelectorRequirementSchema),
      ),
    ),
  });
export const io_k8s_api_core_v1_NodeSelectorRequirementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    operator: Schema.String,
    values: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_core_v1_NodeSelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeSelectorTerms: Schema.Array(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSelectorTermSchema),
    ),
  });
export const io_k8s_api_core_v1_PodAffinitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preferredDuringSchedulingIgnoredDuringExecution: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_WeightedPodAffinityTermSchema),
      ),
    ),
    requiredDuringSchedulingIgnoredDuringExecution: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_PodAffinityTermSchema),
      ),
    ),
  });
export const io_k8s_api_core_v1_WeightedPodAffinityTermSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    podAffinityTerm: Schema.suspend(
      () => io_k8s_api_core_v1_PodAffinityTermSchema,
    ),
    weight: Schema.Number,
  });
export const io_k8s_api_core_v1_PodAffinityTermSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    matchLabelKeys: Schema.optional(Schema.Array(Schema.String)),
    mismatchLabelKeys: Schema.optional(Schema.Array(Schema.String)),
    namespaceSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    namespaces: Schema.optional(Schema.Array(Schema.String)),
    topologyKey: Schema.String,
  });
export const io_k8s_api_core_v1_PodAntiAffinitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preferredDuringSchedulingIgnoredDuringExecution: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_WeightedPodAffinityTermSchema),
      ),
    ),
    requiredDuringSchedulingIgnoredDuringExecution: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_PodAffinityTermSchema),
      ),
    ),
  });
export const io_k8s_api_core_v1_ContainerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    args: Schema.optional(Schema.Array(Schema.String)),
    command: Schema.optional(Schema.Array(Schema.String)),
    env: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_EnvVarSchema)),
    ),
    envFrom: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_EnvFromSourceSchema),
      ),
    ),
    image: Schema.optional(Schema.String),
    imagePullPolicy: Schema.optional(Schema.String),
    lifecycle: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LifecycleSchema),
    ),
    livenessProbe: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ProbeSchema),
    ),
    name: Schema.String,
    ports: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ContainerPortSchema),
      ),
    ),
    readinessProbe: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ProbeSchema),
    ),
    resizePolicy: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ContainerResizePolicySchema),
      ),
    ),
    resources: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceRequirementsSchema),
    ),
    restartPolicy: Schema.optional(Schema.String),
    restartPolicyRules: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ContainerRestartRuleSchema),
      ),
    ),
    securityContext: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SecurityContextSchema),
    ),
    startupProbe: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ProbeSchema),
    ),
    stdin: Schema.optional(Schema.Boolean),
    stdinOnce: Schema.optional(Schema.Boolean),
    terminationMessagePath: Schema.optional(Schema.String),
    terminationMessagePolicy: Schema.optional(Schema.String),
    tty: Schema.optional(Schema.Boolean),
    volumeDevices: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_VolumeDeviceSchema)),
    ),
    volumeMounts: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_VolumeMountSchema)),
    ),
    workingDir: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_EnvVarSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    value: Schema.optional(Schema.String),
    valueFrom: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EnvVarSourceSchema),
    ),
  });
export const io_k8s_api_core_v1_EnvVarSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configMapKeyRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ConfigMapKeySelectorSchema),
    ),
    fieldRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectFieldSelectorSchema),
    ),
    fileKeyRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_FileKeySelectorSchema),
    ),
    resourceFieldRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceFieldSelectorSchema),
    ),
    secretKeyRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SecretKeySelectorSchema),
    ),
  });
export const io_k8s_api_core_v1_ConfigMapKeySelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    name: Schema.optional(Schema.String),
    optional: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_core_v1_ObjectFieldSelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    fieldPath: Schema.String,
  });
export const io_k8s_api_core_v1_FileKeySelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    optional: Schema.optional(Schema.Boolean),
    path: Schema.String,
    volumeName: Schema.String,
  });
export const io_k8s_api_core_v1_ResourceFieldSelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerName: Schema.optional(Schema.String),
    divisor: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
    resource: Schema.String,
  });
export const io_k8s_api_core_v1_SecretKeySelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    name: Schema.optional(Schema.String),
    optional: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_core_v1_EnvFromSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configMapRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ConfigMapEnvSourceSchema),
    ),
    prefix: Schema.optional(Schema.String),
    secretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SecretEnvSourceSchema),
    ),
  });
export const io_k8s_api_core_v1_ConfigMapEnvSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    optional: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_core_v1_SecretEnvSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    optional: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_core_v1_LifecycleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postStart: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LifecycleHandlerSchema),
    ),
    preStop: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LifecycleHandlerSchema),
    ),
    stopSignal: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_LifecycleHandlerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ExecActionSchema),
    ),
    httpGet: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_HTTPGetActionSchema),
    ),
    sleep: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SleepActionSchema),
    ),
    tcpSocket: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_TCPSocketActionSchema),
    ),
  });
export const io_k8s_api_core_v1_ExecActionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    command: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_core_v1_HTTPGetActionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    host: Schema.optional(Schema.String),
    httpHeaders: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_HTTPHeaderSchema)),
    ),
    path: Schema.optional(Schema.String),
    port: Schema.suspend(
      () => io_k8s_apimachinery_pkg_util_intstr_IntOrStringSchema,
    ),
    scheme: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_HTTPHeaderSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    value: Schema.String,
  });
export const io_k8s_apimachinery_pkg_util_intstr_IntOrStringSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const io_k8s_api_core_v1_SleepActionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    seconds: Schema.Number,
  });
export const io_k8s_api_core_v1_TCPSocketActionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    host: Schema.optional(Schema.String),
    port: Schema.suspend(
      () => io_k8s_apimachinery_pkg_util_intstr_IntOrStringSchema,
    ),
  });
export const io_k8s_api_core_v1_ProbeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ExecActionSchema),
    ),
    failureThreshold: Schema.optional(Schema.Number),
    grpc: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_GRPCActionSchema),
    ),
    httpGet: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_HTTPGetActionSchema),
    ),
    initialDelaySeconds: Schema.optional(Schema.Number),
    periodSeconds: Schema.optional(Schema.Number),
    successThreshold: Schema.optional(Schema.Number),
    tcpSocket: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_TCPSocketActionSchema),
    ),
    terminationGracePeriodSeconds: Schema.optional(Schema.Number),
    timeoutSeconds: Schema.optional(Schema.Number),
  });
export const io_k8s_api_core_v1_GRPCActionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.Number,
    service: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_ContainerPortSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerPort: Schema.Number,
    hostIP: Schema.optional(Schema.String),
    hostPort: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_ContainerResizePolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.String,
    restartPolicy: Schema.String,
  });
export const io_k8s_api_core_v1_ResourceRequirementsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    claims: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ResourceClaimSchema),
      ),
    ),
    limits: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    requests: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
  });
export const io_k8s_api_core_v1_ResourceClaimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    request: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_ContainerRestartRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.String,
    exitCodes: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_ContainerRestartRuleOnExitCodesSchema,
      ),
    ),
  });
export const io_k8s_api_core_v1_ContainerRestartRuleOnExitCodesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operator: Schema.String,
    values: Schema.optional(Schema.Array(Schema.Number)),
  });
export const io_k8s_api_core_v1_SecurityContextSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowPrivilegeEscalation: Schema.optional(Schema.Boolean),
    appArmorProfile: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_AppArmorProfileSchema),
    ),
    capabilities: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_CapabilitiesSchema),
    ),
    privileged: Schema.optional(Schema.Boolean),
    procMount: Schema.optional(Schema.String),
    readOnlyRootFilesystem: Schema.optional(Schema.Boolean),
    runAsGroup: Schema.optional(Schema.Number),
    runAsNonRoot: Schema.optional(Schema.Boolean),
    runAsUser: Schema.optional(Schema.Number),
    seLinuxOptions: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SELinuxOptionsSchema),
    ),
    seccompProfile: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SeccompProfileSchema),
    ),
    windowsOptions: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_WindowsSecurityContextOptionsSchema,
      ),
    ),
  });
export const io_k8s_api_core_v1_AppArmorProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localhostProfile: Schema.optional(Schema.String),
    type: Schema.String,
  });
export const io_k8s_api_core_v1_CapabilitiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    add: Schema.optional(Schema.Array(Schema.String)),
    drop: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_core_v1_SELinuxOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    level: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    user: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_SeccompProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localhostProfile: Schema.optional(Schema.String),
    type: Schema.String,
  });
export const io_k8s_api_core_v1_WindowsSecurityContextOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gmsaCredentialSpec: Schema.optional(Schema.String),
    gmsaCredentialSpecName: Schema.optional(Schema.String),
    hostProcess: Schema.optional(Schema.Boolean),
    runAsUserName: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_VolumeDeviceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    devicePath: Schema.String,
    name: Schema.String,
  });
export const io_k8s_api_core_v1_VolumeMountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mountPath: Schema.String,
    mountPropagation: Schema.optional(Schema.String),
    name: Schema.String,
    readOnly: Schema.optional(Schema.Boolean),
    recursiveReadOnly: Schema.optional(Schema.String),
    subPath: Schema.optional(Schema.String),
    subPathExpr: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_PodDNSConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameservers: Schema.optional(Schema.Array(Schema.String)),
    options: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_PodDNSConfigOptionSchema),
      ),
    ),
    searches: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_core_v1_PodDNSConfigOptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_EphemeralContainerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    args: Schema.optional(Schema.Array(Schema.String)),
    command: Schema.optional(Schema.Array(Schema.String)),
    env: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_EnvVarSchema)),
    ),
    envFrom: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_EnvFromSourceSchema),
      ),
    ),
    image: Schema.optional(Schema.String),
    imagePullPolicy: Schema.optional(Schema.String),
    lifecycle: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LifecycleSchema),
    ),
    livenessProbe: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ProbeSchema),
    ),
    name: Schema.String,
    ports: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ContainerPortSchema),
      ),
    ),
    readinessProbe: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ProbeSchema),
    ),
    resizePolicy: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ContainerResizePolicySchema),
      ),
    ),
    resources: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceRequirementsSchema),
    ),
    restartPolicy: Schema.optional(Schema.String),
    restartPolicyRules: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ContainerRestartRuleSchema),
      ),
    ),
    securityContext: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SecurityContextSchema),
    ),
    startupProbe: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ProbeSchema),
    ),
    stdin: Schema.optional(Schema.Boolean),
    stdinOnce: Schema.optional(Schema.Boolean),
    targetContainerName: Schema.optional(Schema.String),
    terminationMessagePath: Schema.optional(Schema.String),
    terminationMessagePolicy: Schema.optional(Schema.String),
    tty: Schema.optional(Schema.Boolean),
    volumeDevices: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_VolumeDeviceSchema)),
    ),
    volumeMounts: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_VolumeMountSchema)),
    ),
    workingDir: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_HostAliasSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostnames: Schema.optional(Schema.Array(Schema.String)),
    ip: Schema.String,
  });
export const io_k8s_api_core_v1_LocalObjectReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_PodOSSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  });
export const io_k8s_api_core_v1_PodReadinessGateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditionType: Schema.String,
  });
export const io_k8s_api_core_v1_PodResourceClaimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    resourceClaimName: Schema.optional(Schema.String),
    resourceClaimTemplateName: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_PodSchedulingGateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  });
export const io_k8s_api_core_v1_PodSchedulingGroupSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    podGroupName: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_PodSecurityContextSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appArmorProfile: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_AppArmorProfileSchema),
    ),
    fsGroup: Schema.optional(Schema.Number),
    fsGroupChangePolicy: Schema.optional(Schema.String),
    runAsGroup: Schema.optional(Schema.Number),
    runAsNonRoot: Schema.optional(Schema.Boolean),
    runAsUser: Schema.optional(Schema.Number),
    seLinuxChangePolicy: Schema.optional(Schema.String),
    seLinuxOptions: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SELinuxOptionsSchema),
    ),
    seccompProfile: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SeccompProfileSchema),
    ),
    supplementalGroups: Schema.optional(Schema.Array(Schema.Number)),
    supplementalGroupsPolicy: Schema.optional(Schema.String),
    sysctls: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_SysctlSchema)),
    ),
    windowsOptions: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_WindowsSecurityContextOptionsSchema,
      ),
    ),
  });
export const io_k8s_api_core_v1_SysctlSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    value: Schema.String,
  });
export const io_k8s_api_core_v1_TolerationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effect: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    operator: Schema.optional(Schema.String),
    tolerationSeconds: Schema.optional(Schema.Number),
    value: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_TopologySpreadConstraintSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    matchLabelKeys: Schema.optional(Schema.Array(Schema.String)),
    maxSkew: Schema.Number,
    minDomains: Schema.optional(Schema.Number),
    nodeAffinityPolicy: Schema.optional(Schema.String),
    nodeTaintsPolicy: Schema.optional(Schema.String),
    topologyKey: Schema.String,
    whenUnsatisfiable: Schema.String,
  });
export const io_k8s_api_core_v1_VolumeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    awsElasticBlockStore: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSourceSchema,
      ),
    ),
    azureDisk: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_AzureDiskVolumeSourceSchema),
    ),
    azureFile: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_AzureFileVolumeSourceSchema),
    ),
    cephfs: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_CephFSVolumeSourceSchema),
    ),
    cinder: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_CinderVolumeSourceSchema),
    ),
    configMap: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ConfigMapVolumeSourceSchema),
    ),
    csi: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_CSIVolumeSourceSchema),
    ),
    downwardAPI: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_DownwardAPIVolumeSourceSchema),
    ),
    emptyDir: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EmptyDirVolumeSourceSchema),
    ),
    ephemeral: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_EphemeralVolumeSourceSchema),
    ),
    fc: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_FCVolumeSourceSchema),
    ),
    flexVolume: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_FlexVolumeSourceSchema),
    ),
    flocker: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_FlockerVolumeSourceSchema),
    ),
    gcePersistentDisk: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_GCEPersistentDiskVolumeSourceSchema,
      ),
    ),
    gitRepo: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_GitRepoVolumeSourceSchema),
    ),
    glusterfs: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_GlusterfsVolumeSourceSchema),
    ),
    hostPath: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_HostPathVolumeSourceSchema),
    ),
    image: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ImageVolumeSourceSchema),
    ),
    iscsi: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ISCSIVolumeSourceSchema),
    ),
    name: Schema.String,
    nfs: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NFSVolumeSourceSchema),
    ),
    persistentVolumeClaim: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PersistentVolumeClaimVolumeSourceSchema,
      ),
    ),
    photonPersistentDisk: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PhotonPersistentDiskVolumeSourceSchema,
      ),
    ),
    portworxVolume: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PortworxVolumeSourceSchema),
    ),
    projected: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ProjectedVolumeSourceSchema),
    ),
    quobyte: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_QuobyteVolumeSourceSchema),
    ),
    rbd: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_RBDVolumeSourceSchema),
    ),
    scaleIO: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ScaleIOVolumeSourceSchema),
    ),
    secret: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SecretVolumeSourceSchema),
    ),
    storageos: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_StorageOSVolumeSourceSchema),
    ),
    vsphereVolume: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_VsphereVirtualDiskVolumeSourceSchema,
      ),
    ),
  });
export const io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fsType: Schema.optional(Schema.String),
    partition: Schema.optional(Schema.Number),
    readOnly: Schema.optional(Schema.Boolean),
    volumeID: Schema.String,
  });
export const io_k8s_api_core_v1_AzureDiskVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cachingMode: Schema.optional(Schema.String),
    diskName: Schema.String,
    diskURI: Schema.String,
    fsType: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_core_v1_AzureFileVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readOnly: Schema.optional(Schema.Boolean),
    secretName: Schema.String,
    shareName: Schema.String,
  });
export const io_k8s_api_core_v1_CephFSVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    monitors: Schema.Array(Schema.String),
    path: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    secretFile: Schema.optional(Schema.String),
    secretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LocalObjectReferenceSchema),
    ),
    user: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_CinderVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fsType: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    secretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LocalObjectReferenceSchema),
    ),
    volumeID: Schema.String,
  });
export const io_k8s_api_core_v1_ConfigMapVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultMode: Schema.optional(Schema.Number),
    items: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_KeyToPathSchema)),
    ),
    name: Schema.optional(Schema.String),
    optional: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_core_v1_KeyToPathSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    mode: Schema.optional(Schema.Number),
    path: Schema.String,
  });
export const io_k8s_api_core_v1_CSIVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    driver: Schema.String,
    fsType: Schema.optional(Schema.String),
    nodePublishSecretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LocalObjectReferenceSchema),
    ),
    readOnly: Schema.optional(Schema.Boolean),
    volumeAttributes: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  });
export const io_k8s_api_core_v1_DownwardAPIVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultMode: Schema.optional(Schema.Number),
    items: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_DownwardAPIVolumeFileSchema),
      ),
    ),
  });
export const io_k8s_api_core_v1_DownwardAPIVolumeFileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectFieldSelectorSchema),
    ),
    mode: Schema.optional(Schema.Number),
    path: Schema.String,
    resourceFieldRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceFieldSelectorSchema),
    ),
  });
export const io_k8s_api_core_v1_EmptyDirVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    medium: Schema.optional(Schema.String),
    sizeLimit: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
  });
export const io_k8s_api_core_v1_EphemeralVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumeClaimTemplate: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PersistentVolumeClaimTemplateSchema,
      ),
    ),
  });
export const io_k8s_api_core_v1_PersistentVolumeClaimTemplateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_core_v1_PersistentVolumeClaimSpecSchema,
    ),
  });
export const io_k8s_api_core_v1_FCVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fsType: Schema.optional(Schema.String),
    lun: Schema.optional(Schema.Number),
    readOnly: Schema.optional(Schema.Boolean),
    targetWWNs: Schema.optional(Schema.Array(Schema.String)),
    wwids: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_core_v1_FlexVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    driver: Schema.String,
    fsType: Schema.optional(Schema.String),
    options: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    readOnly: Schema.optional(Schema.Boolean),
    secretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LocalObjectReferenceSchema),
    ),
  });
export const io_k8s_api_core_v1_FlockerVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasetName: Schema.optional(Schema.String),
    datasetUUID: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_GCEPersistentDiskVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fsType: Schema.optional(Schema.String),
    partition: Schema.optional(Schema.Number),
    pdName: Schema.String,
    readOnly: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_core_v1_GitRepoVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    directory: Schema.optional(Schema.String),
    repository: Schema.String,
    revision: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_GlusterfsVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoints: Schema.String,
    path: Schema.String,
    readOnly: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_core_v1_HostPathVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String,
    type: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_ImageVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pullPolicy: Schema.optional(Schema.String),
    reference: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_ISCSIVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      Schema.suspend(() => io_k8s_api_core_v1_LocalObjectReferenceSchema),
    ),
    targetPortal: Schema.String,
  });
export const io_k8s_api_core_v1_NFSVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String,
    readOnly: Schema.optional(Schema.Boolean),
    server: Schema.String,
  });
export const io_k8s_api_core_v1_PersistentVolumeClaimVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    claimName: Schema.String,
    readOnly: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_core_v1_PhotonPersistentDiskVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fsType: Schema.optional(Schema.String),
    pdID: Schema.String,
  });
export const io_k8s_api_core_v1_PortworxVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fsType: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    volumeID: Schema.String,
  });
export const io_k8s_api_core_v1_ProjectedVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultMode: Schema.optional(Schema.Number),
    sources: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_VolumeProjectionSchema),
      ),
    ),
  });
export const io_k8s_api_core_v1_VolumeProjectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterTrustBundle: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_ClusterTrustBundleProjectionSchema,
      ),
    ),
    configMap: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ConfigMapProjectionSchema),
    ),
    downwardAPI: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_DownwardAPIProjectionSchema),
    ),
    podCertificate: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodCertificateProjectionSchema),
    ),
    secret: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SecretProjectionSchema),
    ),
    serviceAccountToken: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_ServiceAccountTokenProjectionSchema,
      ),
    ),
  });
export const io_k8s_api_core_v1_ClusterTrustBundleProjectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    name: Schema.optional(Schema.String),
    optional: Schema.optional(Schema.Boolean),
    path: Schema.String,
    signerName: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_ConfigMapProjectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_KeyToPathSchema)),
    ),
    name: Schema.optional(Schema.String),
    optional: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_core_v1_DownwardAPIProjectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_DownwardAPIVolumeFileSchema),
      ),
    ),
  });
export const io_k8s_api_core_v1_PodCertificateProjectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateChainPath: Schema.optional(Schema.String),
    credentialBundlePath: Schema.optional(Schema.String),
    keyPath: Schema.optional(Schema.String),
    keyType: Schema.String,
    maxExpirationSeconds: Schema.optional(Schema.Number),
    signerName: Schema.String,
    userAnnotations: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  });
export const io_k8s_api_core_v1_SecretProjectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_KeyToPathSchema)),
    ),
    name: Schema.optional(Schema.String),
    optional: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_core_v1_ServiceAccountTokenProjectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audience: Schema.optional(Schema.String),
    expirationSeconds: Schema.optional(Schema.Number),
    path: Schema.String,
  });
export const io_k8s_api_core_v1_QuobyteVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    registry: Schema.String,
    tenant: Schema.optional(Schema.String),
    user: Schema.optional(Schema.String),
    volume: Schema.String,
  });
export const io_k8s_api_core_v1_RBDVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fsType: Schema.optional(Schema.String),
    image: Schema.String,
    keyring: Schema.optional(Schema.String),
    monitors: Schema.Array(Schema.String),
    pool: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    secretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LocalObjectReferenceSchema),
    ),
    user: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_ScaleIOVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fsType: Schema.optional(Schema.String),
    gateway: Schema.String,
    protectionDomain: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    secretRef: Schema.suspend(
      () => io_k8s_api_core_v1_LocalObjectReferenceSchema,
    ),
    sslEnabled: Schema.optional(Schema.Boolean),
    storageMode: Schema.optional(Schema.String),
    storagePool: Schema.optional(Schema.String),
    system: Schema.String,
    volumeName: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_SecretVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultMode: Schema.optional(Schema.Number),
    items: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_KeyToPathSchema)),
    ),
    optional: Schema.optional(Schema.Boolean),
    secretName: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_StorageOSVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fsType: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    secretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LocalObjectReferenceSchema),
    ),
    volumeName: Schema.optional(Schema.String),
    volumeNamespace: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_VsphereVirtualDiskVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fsType: Schema.optional(Schema.String),
    storagePolicyID: Schema.optional(Schema.String),
    storagePolicyName: Schema.optional(Schema.String),
    volumePath: Schema.String,
  });
export const io_k8s_api_core_v1_PodStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocatedResources: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    conditions: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_PodConditionSchema)),
    ),
    containerStatuses: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ContainerStatusSchema),
      ),
    ),
    ephemeralContainerStatuses: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ContainerStatusSchema),
      ),
    ),
    extendedResourceClaimStatus: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PodExtendedResourceClaimStatusSchema,
      ),
    ),
    hostIP: Schema.optional(Schema.String),
    hostIPs: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_HostIPSchema)),
    ),
    initContainerStatuses: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ContainerStatusSchema),
      ),
    ),
    message: Schema.optional(Schema.String),
    nodeAllocatableResourceClaimStatuses: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_core_v1_NodeAllocatableResourceClaimStatusSchema,
        ),
      ),
    ),
    nominatedNodeName: Schema.optional(Schema.String),
    observedGeneration: Schema.optional(Schema.Number),
    phase: Schema.optional(Schema.String),
    podIP: Schema.optional(Schema.String),
    podIPs: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_PodIPSchema)),
    ),
    qosClass: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    resize: Schema.optional(Schema.String),
    resourceClaimStatuses: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_PodResourceClaimStatusSchema),
      ),
    ),
    resources: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceRequirementsSchema),
    ),
    startTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
  });
export const io_k8s_api_core_v1_PodConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastProbeTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    observedGeneration: Schema.optional(Schema.Number),
    reason: Schema.optional(Schema.String),
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_api_core_v1_ContainerStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocatedResources: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    allocatedResourcesStatus: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ResourceStatusSchema),
      ),
    ),
    containerID: Schema.optional(Schema.String),
    image: Schema.String,
    imageID: Schema.String,
    lastState: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ContainerStateSchema),
    ),
    name: Schema.String,
    ready: Schema.Boolean,
    resources: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ResourceRequirementsSchema),
    ),
    restartCount: Schema.Number,
    started: Schema.optional(Schema.Boolean),
    state: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ContainerStateSchema),
    ),
    stopSignal: Schema.optional(Schema.String),
    user: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ContainerUserSchema),
    ),
    volumeMounts: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_VolumeMountStatusSchema),
      ),
    ),
  });
export const io_k8s_api_core_v1_ResourceStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    resources: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ResourceHealthSchema),
      ),
    ),
  });
export const io_k8s_api_core_v1_ResourceHealthSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    health: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    resourceID: Schema.String,
  });
export const io_k8s_api_core_v1_ContainerStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    running: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ContainerStateRunningSchema),
    ),
    terminated: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ContainerStateTerminatedSchema),
    ),
    waiting: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ContainerStateWaitingSchema),
    ),
  });
export const io_k8s_api_core_v1_ContainerStateRunningSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startedAt: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
  });
export const io_k8s_api_core_v1_ContainerStateTerminatedSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerID: Schema.optional(Schema.String),
    exitCode: Schema.Number,
    finishedAt: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    signal: Schema.optional(Schema.Number),
    startedAt: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
  });
export const io_k8s_api_core_v1_ContainerStateWaitingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_ContainerUserSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linux: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LinuxContainerUserSchema),
    ),
  });
export const io_k8s_api_core_v1_LinuxContainerUserSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gid: Schema.Number,
    supplementalGroups: Schema.optional(Schema.Array(Schema.Number)),
    uid: Schema.Number,
  });
export const io_k8s_api_core_v1_VolumeMountStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mountPath: Schema.String,
    name: Schema.String,
    readOnly: Schema.optional(Schema.Boolean),
    recursiveReadOnly: Schema.optional(Schema.String),
    volumeStatus: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_VolumeStatusSchema),
    ),
  });
export const io_k8s_api_core_v1_VolumeStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    image: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ImageVolumeStatusSchema),
    ),
  });
export const io_k8s_api_core_v1_ImageVolumeStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageRef: Schema.String,
  });
export const io_k8s_api_core_v1_PodExtendedResourceClaimStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestMappings: Schema.Array(
      Schema.suspend(
        () => io_k8s_api_core_v1_ContainerExtendedResourceRequestSchema,
      ),
    ),
    resourceClaimName: Schema.String,
  });
export const io_k8s_api_core_v1_ContainerExtendedResourceRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerName: Schema.String,
    requestName: Schema.String,
    resourceName: Schema.String,
  });
export const io_k8s_api_core_v1_HostIPSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ip: Schema.String,
  });
export const io_k8s_api_core_v1_NodeAllocatableResourceClaimStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containers: Schema.optional(Schema.Array(Schema.String)),
    resourceClaimName: Schema.String,
    resources: Schema.Record(
      Schema.String,
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
  });
export const io_k8s_api_core_v1_PodIPSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ip: Schema.String,
  });
export const io_k8s_api_core_v1_PodResourceClaimStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    resourceClaimName: Schema.optional(Schema.String),
  });
export const io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.Array(Schema.String)),
    gracePeriodSeconds: Schema.optional(Schema.Number),
    ignoreStoreReadErrorWithClusterBreakingPotential: Schema.optional(
      Schema.Boolean,
    ),
    kind: Schema.optional(Schema.String),
    orphanDependents: Schema.optional(Schema.Boolean),
    preconditions: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_PreconditionsSchema,
      ),
    ),
    propagationPolicy: Schema.optional(Schema.String),
  });
export const io_k8s_apimachinery_pkg_apis_meta_v1_PreconditionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceVersion: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_PodTemplateSchema =
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
export const io_k8s_api_core_v1_PodTemplateSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodSpecSchema),
    ),
  });
export const io_k8s_api_core_v1_ReplicationControllerSchema =
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
export const io_k8s_api_core_v1_ReplicationControllerSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minReadySeconds: Schema.optional(Schema.Number),
    replicas: Schema.optional(Schema.Number),
    selector: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    template: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodTemplateSpecSchema),
    ),
  });
export const io_k8s_api_core_v1_ReplicationControllerStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availableReplicas: Schema.optional(Schema.Number),
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_core_v1_ReplicationControllerConditionSchema,
        ),
      ),
    ),
    fullyLabeledReplicas: Schema.optional(Schema.Number),
    observedGeneration: Schema.optional(Schema.Number),
    readyReplicas: Schema.optional(Schema.Number),
    replicas: Schema.Number,
  });
export const io_k8s_api_core_v1_ReplicationControllerConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_api_autoscaling_v1_ScaleSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    replicas: Schema.optional(Schema.Number),
  });
export const io_k8s_api_autoscaling_v1_ScaleStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    replicas: Schema.Number,
    selector: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_ResourceQuotaSchema =
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
export const io_k8s_api_core_v1_ResourceQuotaSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hard: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    scopeSelector: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ScopeSelectorSchema),
    ),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_core_v1_ScopeSelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchExpressions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_core_v1_ScopedResourceSelectorRequirementSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_core_v1_ScopedResourceSelectorRequirementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operator: Schema.String,
    scopeName: Schema.String,
    values: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_core_v1_ResourceQuotaStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hard: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    used: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
  });
export const io_k8s_api_core_v1_SecretSchema =
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
export const io_k8s_api_core_v1_ServiceAccountSchema =
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
export const io_k8s_api_authentication_v1_TokenRequestSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audiences: Schema.optional(Schema.Array(Schema.String)),
    boundObjectRef: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authentication_v1_BoundObjectReferenceSchema,
      ),
    ),
    expirationSeconds: Schema.optional(Schema.Number),
  });
export const io_k8s_api_authentication_v1_BoundObjectReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
  });
export const io_k8s_api_authentication_v1_TokenRequestStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expirationTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    token: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_ServiceSchema =
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
export const io_k8s_api_core_v1_ServiceSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocateLoadBalancerNodePorts: Schema.optional(Schema.Boolean),
    clusterIP: Schema.optional(Schema.String),
    clusterIPs: Schema.optional(Schema.Array(Schema.String)),
    externalIPs: Schema.optional(Schema.Array(Schema.String)),
    externalName: Schema.optional(Schema.String),
    externalTrafficPolicy: Schema.optional(Schema.String),
    healthCheckNodePort: Schema.optional(Schema.Number),
    internalTrafficPolicy: Schema.optional(Schema.String),
    ipFamilies: Schema.optional(Schema.Array(Schema.String)),
    ipFamilyPolicy: Schema.optional(Schema.String),
    loadBalancerClass: Schema.optional(Schema.String),
    loadBalancerIP: Schema.optional(Schema.String),
    loadBalancerSourceRanges: Schema.optional(Schema.Array(Schema.String)),
    ports: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_ServicePortSchema)),
    ),
    publishNotReadyAddresses: Schema.optional(Schema.Boolean),
    selector: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sessionAffinity: Schema.optional(Schema.String),
    sessionAffinityConfig: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SessionAffinityConfigSchema),
    ),
    trafficDistribution: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_ServicePortSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appProtocol: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    nodePort: Schema.optional(Schema.Number),
    port: Schema.Number,
    protocol: Schema.optional(Schema.String),
    targetPort: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_util_intstr_IntOrStringSchema,
      ),
    ),
  });
export const io_k8s_api_core_v1_SessionAffinityConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientIP: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ClientIPConfigSchema),
    ),
  });
export const io_k8s_api_core_v1_ClientIPConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeoutSeconds: Schema.optional(Schema.Number),
  });
export const io_k8s_api_core_v1_ServiceStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_ConditionSchema,
        ),
      ),
    ),
    loadBalancer: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LoadBalancerStatusSchema),
    ),
  });
export const io_k8s_apimachinery_pkg_apis_meta_v1_ConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTransitionTime: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema,
    ),
    message: Schema.String,
    observedGeneration: Schema.optional(Schema.Number),
    reason: Schema.String,
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_api_core_v1_LoadBalancerStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingress: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_LoadBalancerIngressSchema),
      ),
    ),
  });
export const io_k8s_api_core_v1_LoadBalancerIngressSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostname: Schema.optional(Schema.String),
    ip: Schema.optional(Schema.String),
    ipMode: Schema.optional(Schema.String),
    ports: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_PortStatusSchema)),
    ),
  });
export const io_k8s_api_core_v1_PortStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Schema.String),
    port: Schema.Number,
    protocol: Schema.String,
  });
export const io_k8s_api_core_v1_NodeSchema =
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
export const io_k8s_api_core_v1_NodeSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configSource: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeConfigSourceSchema),
    ),
    externalID: Schema.optional(Schema.String),
    podCIDR: Schema.optional(Schema.String),
    podCIDRs: Schema.optional(Schema.Array(Schema.String)),
    providerID: Schema.optional(Schema.String),
    taints: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_TaintSchema)),
    ),
    unschedulable: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_core_v1_NodeConfigSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configMap: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ConfigMapNodeConfigSourceSchema),
    ),
  });
export const io_k8s_api_core_v1_ConfigMapNodeConfigSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kubeletConfigKey: Schema.String,
    name: Schema.String,
    namespace: Schema.String,
    resourceVersion: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_TaintSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effect: Schema.String,
    key: Schema.String,
    timeAdded: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    value: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_NodeStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addresses: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_NodeAddressSchema)),
    ),
    allocatable: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    capacity: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_NodeConditionSchema),
      ),
    ),
    config: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeConfigStatusSchema),
    ),
    daemonEndpoints: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeDaemonEndpointsSchema),
    ),
    declaredFeatures: Schema.optional(Schema.Array(Schema.String)),
    features: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeFeaturesSchema),
    ),
    images: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ContainerImageSchema),
      ),
    ),
    nodeInfo: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSystemInfoSchema),
    ),
    phase: Schema.optional(Schema.String),
    runtimeHandlers: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_NodeRuntimeHandlerSchema),
      ),
    ),
    volumesAttached: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_AttachedVolumeSchema),
      ),
    ),
    volumesInUse: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_core_v1_NodeAddressSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.String,
    type: Schema.String,
  });
export const io_k8s_api_core_v1_NodeConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastHeartbeatTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_api_core_v1_NodeConfigStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeConfigSourceSchema),
    ),
    assigned: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeConfigSourceSchema),
    ),
    error: Schema.optional(Schema.String),
    lastKnownGood: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeConfigSourceSchema),
    ),
  });
export const io_k8s_api_core_v1_NodeDaemonEndpointsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kubeletEndpoint: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_DaemonEndpointSchema),
    ),
  });
export const io_k8s_api_core_v1_DaemonEndpointSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    Port: Schema.Number,
  });
export const io_k8s_api_core_v1_NodeFeaturesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supplementalGroupsPolicy: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_core_v1_ContainerImageSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
    sizeBytes: Schema.optional(Schema.Number),
  });
export const io_k8s_api_core_v1_NodeSystemInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    architecture: Schema.String,
    bootID: Schema.String,
    containerRuntimeVersion: Schema.String,
    kernelVersion: Schema.String,
    kubeProxyVersion: Schema.String,
    kubeletVersion: Schema.String,
    machineID: Schema.String,
    operatingSystem: Schema.String,
    osImage: Schema.String,
    swap: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSwapStatusSchema),
    ),
    systemUUID: Schema.String,
  });
export const io_k8s_api_core_v1_NodeSwapStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    capacity: Schema.optional(Schema.Number),
  });
export const io_k8s_api_core_v1_NodeRuntimeHandlerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    features: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeRuntimeHandlerFeaturesSchema),
    ),
    name: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_NodeRuntimeHandlerFeaturesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recursiveReadOnlyMounts: Schema.optional(Schema.Boolean),
    userNamespaces: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_core_v1_AttachedVolumeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    devicePath: Schema.String,
    name: Schema.String,
  });
export const io_k8s_api_core_v1_PersistentVolumeSchema =
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
export const io_k8s_api_core_v1_PersistentVolumeSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessModes: Schema.optional(Schema.Array(Schema.String)),
    awsElasticBlockStore: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSourceSchema,
      ),
    ),
    azureDisk: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_AzureDiskVolumeSourceSchema),
    ),
    azureFile: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_AzureFilePersistentVolumeSourceSchema,
      ),
    ),
    capacity: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    cephfs: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_CephFSPersistentVolumeSourceSchema,
      ),
    ),
    cinder: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_CinderPersistentVolumeSourceSchema,
      ),
    ),
    claimRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    csi: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_CSIPersistentVolumeSourceSchema),
    ),
    fc: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_FCVolumeSourceSchema),
    ),
    flexVolume: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_FlexPersistentVolumeSourceSchema),
    ),
    flocker: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_FlockerVolumeSourceSchema),
    ),
    gcePersistentDisk: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_GCEPersistentDiskVolumeSourceSchema,
      ),
    ),
    glusterfs: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_GlusterfsPersistentVolumeSourceSchema,
      ),
    ),
    hostPath: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_HostPathVolumeSourceSchema),
    ),
    iscsi: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_ISCSIPersistentVolumeSourceSchema,
      ),
    ),
    local: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_LocalVolumeSourceSchema),
    ),
    mountOptions: Schema.optional(Schema.Array(Schema.String)),
    nfs: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NFSVolumeSourceSchema),
    ),
    nodeAffinity: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_VolumeNodeAffinitySchema),
    ),
    persistentVolumeReclaimPolicy: Schema.optional(Schema.String),
    photonPersistentDisk: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_PhotonPersistentDiskVolumeSourceSchema,
      ),
    ),
    portworxVolume: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PortworxVolumeSourceSchema),
    ),
    quobyte: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_QuobyteVolumeSourceSchema),
    ),
    rbd: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_RBDPersistentVolumeSourceSchema),
    ),
    scaleIO: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_ScaleIOPersistentVolumeSourceSchema,
      ),
    ),
    storageClassName: Schema.optional(Schema.String),
    storageos: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_StorageOSPersistentVolumeSourceSchema,
      ),
    ),
    volumeAttributesClassName: Schema.optional(Schema.String),
    volumeMode: Schema.optional(Schema.String),
    vsphereVolume: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_core_v1_VsphereVirtualDiskVolumeSourceSchema,
      ),
    ),
  });
export const io_k8s_api_core_v1_AzureFilePersistentVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readOnly: Schema.optional(Schema.Boolean),
    secretName: Schema.String,
    secretNamespace: Schema.optional(Schema.String),
    shareName: Schema.String,
  });
export const io_k8s_api_core_v1_CephFSPersistentVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    monitors: Schema.Array(Schema.String),
    path: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    secretFile: Schema.optional(Schema.String),
    secretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SecretReferenceSchema),
    ),
    user: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_SecretReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_CinderPersistentVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fsType: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    secretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SecretReferenceSchema),
    ),
    volumeID: Schema.String,
  });
export const io_k8s_api_core_v1_CSIPersistentVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controllerExpandSecretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SecretReferenceSchema),
    ),
    controllerPublishSecretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SecretReferenceSchema),
    ),
    driver: Schema.String,
    fsType: Schema.optional(Schema.String),
    nodeExpandSecretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SecretReferenceSchema),
    ),
    nodePublishSecretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SecretReferenceSchema),
    ),
    nodeStageSecretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SecretReferenceSchema),
    ),
    readOnly: Schema.optional(Schema.Boolean),
    volumeAttributes: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    volumeHandle: Schema.String,
  });
export const io_k8s_api_core_v1_FlexPersistentVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    driver: Schema.String,
    fsType: Schema.optional(Schema.String),
    options: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    readOnly: Schema.optional(Schema.Boolean),
    secretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SecretReferenceSchema),
    ),
  });
export const io_k8s_api_core_v1_GlusterfsPersistentVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoints: Schema.String,
    endpointsNamespace: Schema.optional(Schema.String),
    path: Schema.String,
    readOnly: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_core_v1_ISCSIPersistentVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      Schema.suspend(() => io_k8s_api_core_v1_SecretReferenceSchema),
    ),
    targetPortal: Schema.String,
  });
export const io_k8s_api_core_v1_LocalVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fsType: Schema.optional(Schema.String),
    path: Schema.String,
  });
export const io_k8s_api_core_v1_VolumeNodeAffinitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    required: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSelectorSchema),
    ),
  });
export const io_k8s_api_core_v1_RBDPersistentVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fsType: Schema.optional(Schema.String),
    image: Schema.String,
    keyring: Schema.optional(Schema.String),
    monitors: Schema.Array(Schema.String),
    pool: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    secretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_SecretReferenceSchema),
    ),
    user: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_ScaleIOPersistentVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fsType: Schema.optional(Schema.String),
    gateway: Schema.String,
    protectionDomain: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    secretRef: Schema.suspend(() => io_k8s_api_core_v1_SecretReferenceSchema),
    sslEnabled: Schema.optional(Schema.Boolean),
    storageMode: Schema.optional(Schema.String),
    storagePool: Schema.optional(Schema.String),
    system: Schema.String,
    volumeName: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_StorageOSPersistentVolumeSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fsType: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    secretRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    volumeName: Schema.optional(Schema.String),
    volumeNamespace: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_PersistentVolumeStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastPhaseTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    phase: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  });
export const io_k8s_apimachinery_pkg_runtime_RawExtensionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupSchema =
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
export const io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscoverySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupVersion: Schema.String,
    version: Schema.String,
  });
export const io_k8s_api_admissionregistration_v1_MutatingAdmissionPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_admissionregistration_v1_MutatingAdmissionPolicySpecSchema,
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1_MutatingAdmissionPolicySpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failurePolicy: Schema.optional(Schema.String),
    matchConditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1_MatchConditionSchema,
        ),
      ),
    ),
    matchConstraints: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1_MatchResourcesSchema,
      ),
    ),
    mutations: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1_MutationSchema,
        ),
      ),
    ),
    paramKind: Schema.optional(
      Schema.suspend(() => io_k8s_api_admissionregistration_v1_ParamKindSchema),
    ),
    reinvocationPolicy: Schema.optional(Schema.String),
    variables: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1_VariableSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1_MatchConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.String,
    name: Schema.String,
  });
export const io_k8s_api_admissionregistration_v1_MatchResourcesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    excludeResourceRules: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_api_admissionregistration_v1_NamedRuleWithOperationsSchema,
        ),
      ),
    ),
    matchPolicy: Schema.optional(Schema.String),
    namespaceSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    objectSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    resourceRules: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_api_admissionregistration_v1_NamedRuleWithOperationsSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1_NamedRuleWithOperationsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroups: Schema.optional(Schema.Array(Schema.String)),
    apiVersions: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Schema.String)),
    resourceNames: Schema.optional(Schema.Array(Schema.String)),
    resources: Schema.optional(Schema.Array(Schema.String)),
    scope: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1_MutationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applyConfiguration: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1_ApplyConfigurationSchema,
      ),
    ),
    jsonPatch: Schema.optional(
      Schema.suspend(() => io_k8s_api_admissionregistration_v1_JSONPatchSchema),
    ),
    patchType: Schema.String,
  });
export const io_k8s_api_admissionregistration_v1_ApplyConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1_JSONPatchSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1_ParamKindSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1_VariableSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.String,
    name: Schema.String,
  });
export const io_k8s_api_admissionregistration_v1_MutatingAdmissionPolicyBindingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_admissionregistration_v1_MutatingAdmissionPolicyBindingSpecSchema,
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1_MutatingAdmissionPolicyBindingSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchResources: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1_MatchResourcesSchema,
      ),
    ),
    paramRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_admissionregistration_v1_ParamRefSchema),
    ),
    policyName: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1_ParamRefSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
    parameterNotFoundAction: Schema.optional(Schema.String),
    selector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1_MutatingWebhookConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    webhooks: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1_MutatingWebhookSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1_MutatingWebhookSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    admissionReviewVersions: Schema.Array(Schema.String),
    clientConfig: Schema.suspend(
      () => io_k8s_api_admissionregistration_v1_WebhookClientConfigSchema,
    ),
    failurePolicy: Schema.optional(Schema.String),
    matchConditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1_MatchConditionSchema,
        ),
      ),
    ),
    matchPolicy: Schema.optional(Schema.String),
    name: Schema.String,
    namespaceSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    objectSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    reinvocationPolicy: Schema.optional(Schema.String),
    rules: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1_RuleWithOperationsSchema,
        ),
      ),
    ),
    sideEffects: Schema.String,
    timeoutSeconds: Schema.optional(Schema.Number),
  });
export const io_k8s_api_admissionregistration_v1_WebhookClientConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caBundle: Schema.optional(Schema.String),
    service: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1_ServiceReferenceSchema,
      ),
    ),
    url: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1_ServiceReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    namespace: Schema.String,
    path: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
  });
export const io_k8s_api_admissionregistration_v1_RuleWithOperationsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroups: Schema.optional(Schema.Array(Schema.String)),
    apiVersions: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Schema.String)),
    resources: Schema.optional(Schema.Array(Schema.String)),
    scope: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpecSchema,
      ),
    ),
    status: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatusSchema,
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auditAnnotations: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1_AuditAnnotationSchema,
        ),
      ),
    ),
    failurePolicy: Schema.optional(Schema.String),
    matchConditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1_MatchConditionSchema,
        ),
      ),
    ),
    matchConstraints: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1_MatchResourcesSchema,
      ),
    ),
    paramKind: Schema.optional(
      Schema.suspend(() => io_k8s_api_admissionregistration_v1_ParamKindSchema),
    ),
    validations: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1_ValidationSchema,
        ),
      ),
    ),
    variables: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1_VariableSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1_AuditAnnotationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    valueExpression: Schema.String,
  });
export const io_k8s_api_admissionregistration_v1_ValidationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.String,
    message: Schema.optional(Schema.String),
    messageExpression: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_ConditionSchema,
        ),
      ),
    ),
    observedGeneration: Schema.optional(Schema.Number),
    typeChecking: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1_TypeCheckingSchema,
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1_TypeCheckingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expressionWarnings: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1_ExpressionWarningSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1_ExpressionWarningSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldRef: Schema.String,
    warning: Schema.String,
  });
export const io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingSchema =
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
        io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingSpecSchema,
    ),
  });
export const io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchResources: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1_MatchResourcesSchema,
      ),
    ),
    paramRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_admissionregistration_v1_ParamRefSchema),
    ),
    policyName: Schema.String,
    validationActions: Schema.Array(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1_ValidatingWebhookConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    webhooks: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1_ValidatingWebhookSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1_ValidatingWebhookSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    admissionReviewVersions: Schema.Array(Schema.String),
    clientConfig: Schema.suspend(
      () => io_k8s_api_admissionregistration_v1_WebhookClientConfigSchema,
    ),
    failurePolicy: Schema.optional(Schema.String),
    matchConditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1_MatchConditionSchema,
        ),
      ),
    ),
    matchPolicy: Schema.optional(Schema.String),
    name: Schema.String,
    namespaceSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    objectSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    rules: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1_RuleWithOperationsSchema,
        ),
      ),
    ),
    sideEffects: Schema.String,
    timeoutSeconds: Schema.optional(Schema.Number),
  });
export const io_k8s_api_admissionregistration_v1alpha1_MutatingAdmissionPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_admissionregistration_v1alpha1_MutatingAdmissionPolicySpecSchema,
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1alpha1_MutatingAdmissionPolicySpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failurePolicy: Schema.optional(Schema.String),
    matchConditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1alpha1_MatchConditionSchema,
        ),
      ),
    ),
    matchConstraints: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1alpha1_MatchResourcesSchema,
      ),
    ),
    mutations: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1alpha1_MutationSchema,
        ),
      ),
    ),
    paramKind: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1alpha1_ParamKindSchema,
      ),
    ),
    reinvocationPolicy: Schema.optional(Schema.String),
    variables: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1alpha1_VariableSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1alpha1_MatchConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.String,
    name: Schema.String,
  });
export const io_k8s_api_admissionregistration_v1alpha1_MatchResourcesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    excludeResourceRules: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_api_admissionregistration_v1alpha1_NamedRuleWithOperationsSchema,
        ),
      ),
    ),
    matchPolicy: Schema.optional(Schema.String),
    namespaceSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    objectSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    resourceRules: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_api_admissionregistration_v1alpha1_NamedRuleWithOperationsSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1alpha1_NamedRuleWithOperationsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroups: Schema.optional(Schema.Array(Schema.String)),
    apiVersions: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Schema.String)),
    resourceNames: Schema.optional(Schema.Array(Schema.String)),
    resources: Schema.optional(Schema.Array(Schema.String)),
    scope: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1alpha1_MutationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applyConfiguration: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_admissionregistration_v1alpha1_ApplyConfigurationSchema,
      ),
    ),
    jsonPatch: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1alpha1_JSONPatchSchema,
      ),
    ),
    patchType: Schema.String,
  });
export const io_k8s_api_admissionregistration_v1alpha1_ApplyConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1alpha1_JSONPatchSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1alpha1_ParamKindSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1alpha1_VariableSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.String,
    name: Schema.String,
  });
export const io_k8s_api_admissionregistration_v1alpha1_MutatingAdmissionPolicyBindingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_admissionregistration_v1alpha1_MutatingAdmissionPolicyBindingSpecSchema,
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1alpha1_MutatingAdmissionPolicyBindingSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchResources: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1alpha1_MatchResourcesSchema,
      ),
    ),
    paramRef: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1alpha1_ParamRefSchema,
      ),
    ),
    policyName: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1alpha1_ParamRefSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
    parameterNotFoundAction: Schema.optional(Schema.String),
    selector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1beta1_MutatingAdmissionPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_admissionregistration_v1beta1_MutatingAdmissionPolicySpecSchema,
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1beta1_MutatingAdmissionPolicySpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failurePolicy: Schema.optional(Schema.String),
    matchConditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1beta1_MatchConditionSchema,
        ),
      ),
    ),
    matchConstraints: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1beta1_MatchResourcesSchema,
      ),
    ),
    mutations: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1beta1_MutationSchema,
        ),
      ),
    ),
    paramKind: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1beta1_ParamKindSchema,
      ),
    ),
    reinvocationPolicy: Schema.optional(Schema.String),
    variables: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_admissionregistration_v1beta1_VariableSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1beta1_MatchConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.String,
    name: Schema.String,
  });
export const io_k8s_api_admissionregistration_v1beta1_MatchResourcesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    excludeResourceRules: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_api_admissionregistration_v1beta1_NamedRuleWithOperationsSchema,
        ),
      ),
    ),
    matchPolicy: Schema.optional(Schema.String),
    namespaceSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    objectSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    resourceRules: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_api_admissionregistration_v1beta1_NamedRuleWithOperationsSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1beta1_NamedRuleWithOperationsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroups: Schema.optional(Schema.Array(Schema.String)),
    apiVersions: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Schema.String)),
    resourceNames: Schema.optional(Schema.Array(Schema.String)),
    resources: Schema.optional(Schema.Array(Schema.String)),
    scope: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1beta1_MutationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applyConfiguration: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1beta1_ApplyConfigurationSchema,
      ),
    ),
    jsonPatch: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1beta1_JSONPatchSchema,
      ),
    ),
    patchType: Schema.String,
  });
export const io_k8s_api_admissionregistration_v1beta1_ApplyConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1beta1_JSONPatchSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1beta1_ParamKindSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1beta1_VariableSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.String,
    name: Schema.String,
  });
export const io_k8s_api_admissionregistration_v1beta1_MutatingAdmissionPolicyBindingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_admissionregistration_v1beta1_MutatingAdmissionPolicyBindingSpecSchema,
      ),
    ),
  });
export const io_k8s_api_admissionregistration_v1beta1_MutatingAdmissionPolicyBindingSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchResources: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1beta1_MatchResourcesSchema,
      ),
    ),
    paramRef: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_admissionregistration_v1beta1_ParamRefSchema,
      ),
    ),
    policyName: Schema.optional(Schema.String),
  });
export const io_k8s_api_admissionregistration_v1beta1_ParamRefSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
    parameterNotFoundAction: Schema.optional(Schema.String),
    selector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSchema =
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
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversion: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversionSchema,
      ),
    ),
    group: Schema.String,
    names: Schema.suspend(
      () =>
        io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNamesSchema,
    ),
    preserveUnknownFields: Schema.optional(Schema.Boolean),
    scope: Schema.String,
    versions: Schema.Array(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionVersionSchema,
      ),
    ),
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    strategy: Schema.String,
    webhook: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookConversionSchema,
      ),
    ),
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookConversionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientConfig: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookClientConfigSchema,
      ),
    ),
    conversionReviewVersions: Schema.Array(Schema.String),
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookClientConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caBundle: Schema.optional(Schema.String),
    service: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ServiceReferenceSchema,
      ),
    ),
    url: Schema.optional(Schema.String),
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ServiceReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    namespace: Schema.String,
    path: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNamesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    categories: Schema.optional(Schema.Array(Schema.String)),
    kind: Schema.String,
    listKind: Schema.optional(Schema.String),
    plural: Schema.String,
    shortNames: Schema.optional(Schema.Array(Schema.String)),
    singular: Schema.optional(Schema.String),
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionVersionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additionalPrinterColumns: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceColumnDefinitionSchema,
        ),
      ),
    ),
    deprecated: Schema.optional(Schema.Boolean),
    deprecationWarning: Schema.optional(Schema.String),
    name: Schema.String,
    schema: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceValidationSchema,
      ),
    ),
    selectableFields: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_SelectableFieldSchema,
        ),
      ),
    ),
    served: Schema.Boolean,
    storage: Schema.Boolean,
    subresources: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourcesSchema,
      ),
    ),
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceColumnDefinitionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    format: Schema.optional(Schema.String),
    jsonPath: Schema.String,
    name: Schema.String,
    priority: Schema.optional(Schema.Number),
    type: Schema.String,
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceValidationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    openAPIV3Schema: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsSchema,
      ),
    ),
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    $ref: Schema.optional(Schema.String),
    $schema: Schema.optional(Schema.String),
    additionalItems: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrBoolSchema,
      ),
    ),
    additionalProperties: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrBoolSchema,
      ),
    ),
    allOf: Schema.optional(Schema.Array(Schema.Unknown)),
    anyOf: Schema.optional(Schema.Array(Schema.Unknown)),
    default: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchema,
      ),
    ),
    definitions: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    dependencies: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () =>
            io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrStringArraySchema,
        ),
      ),
    ),
    description: Schema.optional(Schema.String),
    enum: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchema,
        ),
      ),
    ),
    example: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchema,
      ),
    ),
    exclusiveMaximum: Schema.optional(Schema.Boolean),
    exclusiveMinimum: Schema.optional(Schema.Boolean),
    externalDocs: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentationSchema,
      ),
    ),
    format: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    items: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrArraySchema,
      ),
    ),
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
    properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    required: Schema.optional(Schema.Array(Schema.String)),
    title: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    uniqueItems: Schema.optional(Schema.Boolean),
    "x-kubernetes-embedded-resource": Schema.optional(Schema.Boolean),
    "x-kubernetes-int-or-string": Schema.optional(Schema.Boolean),
    "x-kubernetes-list-map-keys": Schema.optional(Schema.Array(Schema.String)),
    "x-kubernetes-list-type": Schema.optional(Schema.String),
    "x-kubernetes-map-type": Schema.optional(Schema.String),
    "x-kubernetes-preserve-unknown-fields": Schema.optional(Schema.Boolean),
    "x-kubernetes-validations": Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ValidationRuleSchema,
        ),
      ),
    ),
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrBoolSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrStringArraySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaPropsOrArraySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ValidationRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldPath: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    messageExpression: Schema.optional(Schema.String),
    optionalOldSelf: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    rule: Schema.String,
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_SelectableFieldSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jsonPath: Schema.String,
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourcesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scale: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceScaleSchema,
      ),
    ),
    status: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceStatusSchema,
      ),
    ),
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceScaleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelSelectorPath: Schema.optional(Schema.String),
    specReplicasPath: Schema.String,
    statusReplicasPath: Schema.String,
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acceptedNames: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNamesSchema,
      ),
    ),
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionConditionSchema,
        ),
      ),
    ),
    observedGeneration: Schema.optional(Schema.Number),
    storedVersions: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    observedGeneration: Schema.optional(Schema.Number),
    reason: Schema.optional(Schema.String),
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpecSchema,
      ),
    ),
    status: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatusSchema,
      ),
    ),
  });
export const io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caBundle: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    groupPriorityMinimum: Schema.Number,
    insecureSkipTLSVerify: Schema.optional(Schema.Boolean),
    service: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_ServiceReferenceSchema,
      ),
    ),
    version: Schema.optional(Schema.String),
    versionPriority: Schema.Number,
  });
export const io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_ServiceReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
  });
export const io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceConditionSchema,
        ),
      ),
    ),
  });
export const io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_api_apps_v1_ControllerRevisionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema),
    ),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    revision: Schema.Number,
  });
export const io_k8s_api_apps_v1_DaemonSetSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetStatusSchema),
    ),
  });
export const io_k8s_api_apps_v1_DaemonSetSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minReadySeconds: Schema.optional(Schema.Number),
    revisionHistoryLimit: Schema.optional(Schema.Number),
    selector: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
    ),
    template: Schema.suspend(() => io_k8s_api_core_v1_PodTemplateSpecSchema),
    updateStrategy: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetUpdateStrategySchema),
    ),
  });
export const io_k8s_api_apps_v1_DaemonSetUpdateStrategySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rollingUpdate: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_RollingUpdateDaemonSetSchema),
    ),
    type: Schema.optional(Schema.String),
  });
export const io_k8s_api_apps_v1_RollingUpdateDaemonSetSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxSurge: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_util_intstr_IntOrStringSchema,
      ),
    ),
    maxUnavailable: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_util_intstr_IntOrStringSchema,
      ),
    ),
  });
export const io_k8s_api_apps_v1_DaemonSetStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    collisionCount: Schema.optional(Schema.Number),
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_apps_v1_DaemonSetConditionSchema),
      ),
    ),
    currentNumberScheduled: Schema.Number,
    desiredNumberScheduled: Schema.Number,
    numberAvailable: Schema.optional(Schema.Number),
    numberMisscheduled: Schema.Number,
    numberReady: Schema.Number,
    numberUnavailable: Schema.optional(Schema.Number),
    observedGeneration: Schema.optional(Schema.Number),
    updatedNumberScheduled: Schema.optional(Schema.Number),
  });
export const io_k8s_api_apps_v1_DaemonSetConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_api_apps_v1_DeploymentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentStatusSchema),
    ),
  });
export const io_k8s_api_apps_v1_DeploymentSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minReadySeconds: Schema.optional(Schema.Number),
    paused: Schema.optional(Schema.Boolean),
    progressDeadlineSeconds: Schema.optional(Schema.Number),
    replicas: Schema.optional(Schema.Number),
    revisionHistoryLimit: Schema.optional(Schema.Number),
    selector: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
    ),
    strategy: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_DeploymentStrategySchema),
    ),
    template: Schema.suspend(() => io_k8s_api_core_v1_PodTemplateSpecSchema),
  });
export const io_k8s_api_apps_v1_DeploymentStrategySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rollingUpdate: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_RollingUpdateDeploymentSchema),
    ),
    type: Schema.optional(Schema.String),
  });
export const io_k8s_api_apps_v1_RollingUpdateDeploymentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxSurge: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_util_intstr_IntOrStringSchema,
      ),
    ),
    maxUnavailable: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_util_intstr_IntOrStringSchema,
      ),
    ),
  });
export const io_k8s_api_apps_v1_DeploymentStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availableReplicas: Schema.optional(Schema.Number),
    collisionCount: Schema.optional(Schema.Number),
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_apps_v1_DeploymentConditionSchema),
      ),
    ),
    observedGeneration: Schema.optional(Schema.Number),
    readyReplicas: Schema.optional(Schema.Number),
    replicas: Schema.optional(Schema.Number),
    terminatingReplicas: Schema.optional(Schema.Number),
    unavailableReplicas: Schema.optional(Schema.Number),
    updatedReplicas: Schema.optional(Schema.Number),
  });
export const io_k8s_api_apps_v1_DeploymentConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    lastUpdateTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_api_apps_v1_ReplicaSetSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetStatusSchema),
    ),
  });
export const io_k8s_api_apps_v1_ReplicaSetSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minReadySeconds: Schema.optional(Schema.Number),
    replicas: Schema.optional(Schema.Number),
    selector: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
    ),
    template: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PodTemplateSpecSchema),
    ),
  });
export const io_k8s_api_apps_v1_ReplicaSetStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availableReplicas: Schema.optional(Schema.Number),
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_apps_v1_ReplicaSetConditionSchema),
      ),
    ),
    fullyLabeledReplicas: Schema.optional(Schema.Number),
    observedGeneration: Schema.optional(Schema.Number),
    readyReplicas: Schema.optional(Schema.Number),
    replicas: Schema.Number,
    terminatingReplicas: Schema.optional(Schema.Number),
  });
export const io_k8s_api_apps_v1_ReplicaSetConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_api_apps_v1_StatefulSetSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetStatusSchema),
    ),
  });
export const io_k8s_api_apps_v1_StatefulSetSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minReadySeconds: Schema.optional(Schema.Number),
    ordinals: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetOrdinalsSchema),
    ),
    persistentVolumeClaimRetentionPolicy: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_apps_v1_StatefulSetPersistentVolumeClaimRetentionPolicySchema,
      ),
    ),
    podManagementPolicy: Schema.optional(Schema.String),
    replicas: Schema.optional(Schema.Number),
    revisionHistoryLimit: Schema.optional(Schema.Number),
    selector: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
    ),
    serviceName: Schema.optional(Schema.String),
    template: Schema.suspend(() => io_k8s_api_core_v1_PodTemplateSpecSchema),
    updateStrategy: Schema.optional(
      Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetUpdateStrategySchema),
    ),
    volumeClaimTemplates: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeClaimSchema),
      ),
    ),
  });
export const io_k8s_api_apps_v1_StatefulSetOrdinalsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    start: Schema.optional(Schema.Number),
  });
export const io_k8s_api_apps_v1_StatefulSetPersistentVolumeClaimRetentionPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    whenDeleted: Schema.optional(Schema.String),
    whenScaled: Schema.optional(Schema.String),
  });
export const io_k8s_api_apps_v1_StatefulSetUpdateStrategySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rollingUpdate: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategySchema,
      ),
    ),
    type: Schema.optional(Schema.String),
  });
export const io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxUnavailable: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_util_intstr_IntOrStringSchema,
      ),
    ),
    partition: Schema.optional(Schema.Number),
  });
export const io_k8s_api_apps_v1_StatefulSetStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availableReplicas: Schema.optional(Schema.Number),
    collisionCount: Schema.optional(Schema.Number),
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_apps_v1_StatefulSetConditionSchema),
      ),
    ),
    currentReplicas: Schema.optional(Schema.Number),
    currentRevision: Schema.optional(Schema.String),
    observedGeneration: Schema.optional(Schema.Number),
    readyReplicas: Schema.optional(Schema.Number),
    replicas: Schema.Number,
    updateRevision: Schema.optional(Schema.String),
    updatedReplicas: Schema.optional(Schema.Number),
  });
export const io_k8s_api_apps_v1_StatefulSetConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_api_authentication_v1_SelfSubjectReviewStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userInfo: Schema.optional(
      Schema.suspend(() => io_k8s_api_authentication_v1_UserInfoSchema),
    ),
  });
export const io_k8s_api_authentication_v1_UserInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extra: Schema.optional(
      Schema.Record(Schema.String, Schema.Array(Schema.String)),
    ),
    groups: Schema.optional(Schema.Array(Schema.String)),
    uid: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
  });
export const io_k8s_api_authentication_v1_TokenReviewSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audiences: Schema.optional(Schema.Array(Schema.String)),
    token: Schema.String,
  });
export const io_k8s_api_authentication_v1_TokenReviewStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audiences: Schema.optional(Schema.Array(Schema.String)),
    authenticated: Schema.optional(Schema.Boolean),
    error: Schema.optional(Schema.String),
    user: Schema.optional(
      Schema.suspend(() => io_k8s_api_authentication_v1_UserInfoSchema),
    ),
  });
export const io_k8s_api_authorization_v1_SubjectAccessReviewSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extra: Schema.optional(
      Schema.Record(Schema.String, Schema.Array(Schema.String)),
    ),
    groups: Schema.optional(Schema.Array(Schema.String)),
    nonResourceAttributes: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authorization_v1_NonResourceAttributesSchema,
      ),
    ),
    resourceAttributes: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authorization_v1_ResourceAttributesSchema,
      ),
    ),
    uid: Schema.optional(Schema.String),
    user: Schema.optional(Schema.String),
  });
export const io_k8s_api_authorization_v1_NonResourceAttributesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
  });
export const io_k8s_api_authorization_v1_ResourceAttributesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authorization_v1_FieldSelectorAttributesSchema,
      ),
    ),
    group: Schema.optional(Schema.String),
    labelSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authorization_v1_LabelSelectorAttributesSchema,
      ),
    ),
    name: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    subresource: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  });
export const io_k8s_api_authorization_v1_FieldSelectorAttributesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rawSelector: Schema.optional(Schema.String),
    requirements: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_apimachinery_pkg_apis_meta_v1_FieldSelectorRequirementSchema,
        ),
      ),
    ),
  });
export const io_k8s_apimachinery_pkg_apis_meta_v1_FieldSelectorRequirementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    operator: Schema.String,
    values: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_authorization_v1_LabelSelectorAttributesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rawSelector: Schema.optional(Schema.String),
    requirements: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorRequirementSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_authorization_v1_SubjectAccessReviewStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowed: Schema.Boolean,
    denied: Schema.optional(Schema.Boolean),
    evaluationError: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  });
export const io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nonResourceAttributes: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authorization_v1_NonResourceAttributesSchema,
      ),
    ),
    resourceAttributes: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_authorization_v1_ResourceAttributesSchema,
      ),
    ),
  });
export const io_k8s_api_authorization_v1_SelfSubjectRulesReviewSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.optional(Schema.String),
  });
export const io_k8s_api_authorization_v1_SubjectRulesReviewStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationError: Schema.optional(Schema.String),
    incomplete: Schema.Boolean,
    nonResourceRules: Schema.Array(
      Schema.suspend(() => io_k8s_api_authorization_v1_NonResourceRuleSchema),
    ),
    resourceRules: Schema.Array(
      Schema.suspend(() => io_k8s_api_authorization_v1_ResourceRuleSchema),
    ),
  });
export const io_k8s_api_authorization_v1_NonResourceRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nonResourceURLs: Schema.optional(Schema.Array(Schema.String)),
    verbs: Schema.Array(Schema.String),
  });
export const io_k8s_api_authorization_v1_ResourceRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroups: Schema.optional(Schema.Array(Schema.String)),
    resourceNames: Schema.optional(Schema.Array(Schema.String)),
    resources: Schema.optional(Schema.Array(Schema.String)),
    verbs: Schema.Array(Schema.String),
  });
export const io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatusSchema,
      ),
    ),
  });
export const io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxReplicas: Schema.Number,
    minReplicas: Schema.optional(Schema.Number),
    scaleTargetRef: Schema.suspend(
      () => io_k8s_api_autoscaling_v1_CrossVersionObjectReferenceSchema,
    ),
    targetCPUUtilizationPercentage: Schema.optional(Schema.Number),
  });
export const io_k8s_api_autoscaling_v1_CrossVersionObjectReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.String,
    name: Schema.String,
  });
export const io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentCPUUtilizationPercentage: Schema.optional(Schema.Number),
    currentReplicas: Schema.Number,
    desiredReplicas: Schema.Number,
    lastScaleTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    observedGeneration: Schema.optional(Schema.Number),
  });
export const io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatusSchema,
      ),
    ),
  });
export const io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    behavior: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehaviorSchema,
      ),
    ),
    maxReplicas: Schema.Number,
    metrics: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_autoscaling_v2_MetricSpecSchema),
      ),
    ),
    minReplicas: Schema.optional(Schema.Number),
    scaleTargetRef: Schema.suspend(
      () => io_k8s_api_autoscaling_v2_CrossVersionObjectReferenceSchema,
    ),
  });
export const io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehaviorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scaleDown: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v2_HPAScalingRulesSchema),
    ),
    scaleUp: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v2_HPAScalingRulesSchema),
    ),
  });
export const io_k8s_api_autoscaling_v2_HPAScalingRulesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policies: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_autoscaling_v2_HPAScalingPolicySchema),
      ),
    ),
    selectPolicy: Schema.optional(Schema.String),
    stabilizationWindowSeconds: Schema.optional(Schema.Number),
    tolerance: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
  });
export const io_k8s_api_autoscaling_v2_HPAScalingPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    periodSeconds: Schema.Number,
    type: Schema.String,
    value: Schema.Number,
  });
export const io_k8s_api_autoscaling_v2_MetricSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerResource: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_autoscaling_v2_ContainerResourceMetricSourceSchema,
      ),
    ),
    external: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_autoscaling_v2_ExternalMetricSourceSchema,
      ),
    ),
    object: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v2_ObjectMetricSourceSchema),
    ),
    pods: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v2_PodsMetricSourceSchema),
    ),
    resource: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_autoscaling_v2_ResourceMetricSourceSchema,
      ),
    ),
    type: Schema.String,
  });
export const io_k8s_api_autoscaling_v2_ContainerResourceMetricSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    container: Schema.String,
    name: Schema.String,
    target: Schema.suspend(() => io_k8s_api_autoscaling_v2_MetricTargetSchema),
  });
export const io_k8s_api_autoscaling_v2_MetricTargetSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    averageUtilization: Schema.optional(Schema.Number),
    averageValue: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
    type: Schema.String,
    value: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
  });
export const io_k8s_api_autoscaling_v2_ExternalMetricSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metric: Schema.suspend(
      () => io_k8s_api_autoscaling_v2_MetricIdentifierSchema,
    ),
    target: Schema.suspend(() => io_k8s_api_autoscaling_v2_MetricTargetSchema),
  });
export const io_k8s_api_autoscaling_v2_MetricIdentifierSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    selector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
  });
export const io_k8s_api_autoscaling_v2_ObjectMetricSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    describedObject: Schema.suspend(
      () => io_k8s_api_autoscaling_v2_CrossVersionObjectReferenceSchema,
    ),
    metric: Schema.suspend(
      () => io_k8s_api_autoscaling_v2_MetricIdentifierSchema,
    ),
    target: Schema.suspend(() => io_k8s_api_autoscaling_v2_MetricTargetSchema),
  });
export const io_k8s_api_autoscaling_v2_CrossVersionObjectReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.String,
    name: Schema.String,
  });
export const io_k8s_api_autoscaling_v2_PodsMetricSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metric: Schema.suspend(
      () => io_k8s_api_autoscaling_v2_MetricIdentifierSchema,
    ),
    target: Schema.suspend(() => io_k8s_api_autoscaling_v2_MetricTargetSchema),
  });
export const io_k8s_api_autoscaling_v2_ResourceMetricSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    target: Schema.suspend(() => io_k8s_api_autoscaling_v2_MetricTargetSchema),
  });
export const io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerConditionSchema,
        ),
      ),
    ),
    currentMetrics: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_autoscaling_v2_MetricStatusSchema),
      ),
    ),
    currentReplicas: Schema.optional(Schema.Number),
    desiredReplicas: Schema.Number,
    lastScaleTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    observedGeneration: Schema.optional(Schema.Number),
  });
export const io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_api_autoscaling_v2_MetricStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerResource: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_autoscaling_v2_ContainerResourceMetricStatusSchema,
      ),
    ),
    external: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_autoscaling_v2_ExternalMetricStatusSchema,
      ),
    ),
    object: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v2_ObjectMetricStatusSchema),
    ),
    pods: Schema.optional(
      Schema.suspend(() => io_k8s_api_autoscaling_v2_PodsMetricStatusSchema),
    ),
    resource: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_autoscaling_v2_ResourceMetricStatusSchema,
      ),
    ),
    type: Schema.String,
  });
export const io_k8s_api_autoscaling_v2_ContainerResourceMetricStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    container: Schema.String,
    current: Schema.suspend(
      () => io_k8s_api_autoscaling_v2_MetricValueStatusSchema,
    ),
    name: Schema.String,
  });
export const io_k8s_api_autoscaling_v2_MetricValueStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    averageUtilization: Schema.optional(Schema.Number),
    averageValue: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
    value: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
  });
export const io_k8s_api_autoscaling_v2_ExternalMetricStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    current: Schema.suspend(
      () => io_k8s_api_autoscaling_v2_MetricValueStatusSchema,
    ),
    metric: Schema.suspend(
      () => io_k8s_api_autoscaling_v2_MetricIdentifierSchema,
    ),
  });
export const io_k8s_api_autoscaling_v2_ObjectMetricStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    current: Schema.suspend(
      () => io_k8s_api_autoscaling_v2_MetricValueStatusSchema,
    ),
    describedObject: Schema.suspend(
      () => io_k8s_api_autoscaling_v2_CrossVersionObjectReferenceSchema,
    ),
    metric: Schema.suspend(
      () => io_k8s_api_autoscaling_v2_MetricIdentifierSchema,
    ),
  });
export const io_k8s_api_autoscaling_v2_PodsMetricStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    current: Schema.suspend(
      () => io_k8s_api_autoscaling_v2_MetricValueStatusSchema,
    ),
    metric: Schema.suspend(
      () => io_k8s_api_autoscaling_v2_MetricIdentifierSchema,
    ),
  });
export const io_k8s_api_autoscaling_v2_ResourceMetricStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    current: Schema.suspend(
      () => io_k8s_api_autoscaling_v2_MetricValueStatusSchema,
    ),
    name: Schema.String,
  });
export const io_k8s_api_batch_v1_CronJobSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_batch_v1_CronJobSpecSchema),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_CronJobStatusSchema),
    ),
  });
export const io_k8s_api_batch_v1_CronJobSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    concurrencyPolicy: Schema.optional(Schema.String),
    failedJobsHistoryLimit: Schema.optional(Schema.Number),
    jobTemplate: Schema.suspend(
      () => io_k8s_api_batch_v1_JobTemplateSpecSchema,
    ),
    schedule: Schema.String,
    startingDeadlineSeconds: Schema.optional(Schema.Number),
    successfulJobsHistoryLimit: Schema.optional(Schema.Number),
    suspend: Schema.optional(Schema.Boolean),
    timeZone: Schema.optional(Schema.String),
  });
export const io_k8s_api_batch_v1_JobTemplateSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobSpecSchema),
    ),
  });
export const io_k8s_api_batch_v1_JobSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activeDeadlineSeconds: Schema.optional(Schema.Number),
    backoffLimit: Schema.optional(Schema.Number),
    backoffLimitPerIndex: Schema.optional(Schema.Number),
    completionMode: Schema.optional(Schema.String),
    completions: Schema.optional(Schema.Number),
    managedBy: Schema.optional(Schema.String),
    manualSelector: Schema.optional(Schema.Boolean),
    maxFailedIndexes: Schema.optional(Schema.Number),
    parallelism: Schema.optional(Schema.Number),
    podFailurePolicy: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_PodFailurePolicySchema),
    ),
    podReplacementPolicy: Schema.optional(Schema.String),
    selector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    successPolicy: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_SuccessPolicySchema),
    ),
    suspend: Schema.optional(Schema.Boolean),
    template: Schema.suspend(() => io_k8s_api_core_v1_PodTemplateSpecSchema),
    ttlSecondsAfterFinished: Schema.optional(Schema.Number),
  });
export const io_k8s_api_batch_v1_PodFailurePolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rules: Schema.Array(
      Schema.suspend(() => io_k8s_api_batch_v1_PodFailurePolicyRuleSchema),
    ),
  });
export const io_k8s_api_batch_v1_PodFailurePolicyRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.String,
    onExitCodes: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_batch_v1_PodFailurePolicyOnExitCodesRequirementSchema,
      ),
    ),
    onPodConditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_api_batch_v1_PodFailurePolicyOnPodConditionsPatternSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_batch_v1_PodFailurePolicyOnExitCodesRequirementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerName: Schema.optional(Schema.String),
    operator: Schema.String,
    values: Schema.Array(Schema.Number),
  });
export const io_k8s_api_batch_v1_PodFailurePolicyOnPodConditionsPatternSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    type: Schema.String,
  });
export const io_k8s_api_batch_v1_SuccessPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rules: Schema.Array(
      Schema.suspend(() => io_k8s_api_batch_v1_SuccessPolicyRuleSchema),
    ),
  });
export const io_k8s_api_batch_v1_SuccessPolicyRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    succeededCount: Schema.optional(Schema.Number),
    succeededIndexes: Schema.optional(Schema.String),
  });
export const io_k8s_api_batch_v1_CronJobStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
      ),
    ),
    lastScheduleTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    lastSuccessfulTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
  });
export const io_k8s_api_batch_v1_JobSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_JobStatusSchema),
    ),
  });
export const io_k8s_api_batch_v1_JobStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.optional(Schema.Number),
    completedIndexes: Schema.optional(Schema.String),
    completionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_batch_v1_JobConditionSchema),
      ),
    ),
    failed: Schema.optional(Schema.Number),
    failedIndexes: Schema.optional(Schema.String),
    ready: Schema.optional(Schema.Number),
    startTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    succeeded: Schema.optional(Schema.Number),
    terminating: Schema.optional(Schema.Number),
    uncountedTerminatedPods: Schema.optional(
      Schema.suspend(() => io_k8s_api_batch_v1_UncountedTerminatedPodsSchema),
    ),
  });
export const io_k8s_api_batch_v1_JobConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastProbeTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_api_batch_v1_UncountedTerminatedPodsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failed: Schema.optional(Schema.Array(Schema.String)),
    succeeded: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_certificates_v1_CertificateSigningRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_certificates_v1_CertificateSigningRequestSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_certificates_v1_CertificateSigningRequestStatusSchema,
      ),
    ),
  });
export const io_k8s_api_certificates_v1_CertificateSigningRequestSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expirationSeconds: Schema.optional(Schema.Number),
    extra: Schema.optional(
      Schema.Record(Schema.String, Schema.Array(Schema.String)),
    ),
    groups: Schema.optional(Schema.Array(Schema.String)),
    request: Schema.String,
    signerName: Schema.String,
    uid: Schema.optional(Schema.String),
    usages: Schema.optional(Schema.Array(Schema.String)),
    username: Schema.optional(Schema.String),
  });
export const io_k8s_api_certificates_v1_CertificateSigningRequestStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificate: Schema.optional(Schema.String),
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_api_certificates_v1_CertificateSigningRequestConditionSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_certificates_v1_CertificateSigningRequestConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    lastUpdateTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_api_certificates_v1alpha1_ClusterTrustBundleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_certificates_v1alpha1_ClusterTrustBundleSpecSchema,
    ),
  });
export const io_k8s_api_certificates_v1alpha1_ClusterTrustBundleSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signerName: Schema.optional(Schema.String),
    trustBundle: Schema.String,
  });
export const io_k8s_api_certificates_v1beta1_ClusterTrustBundleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_certificates_v1beta1_ClusterTrustBundleSpecSchema,
    ),
  });
export const io_k8s_api_certificates_v1beta1_ClusterTrustBundleSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signerName: Schema.optional(Schema.String),
    trustBundle: Schema.String,
  });
export const io_k8s_api_certificates_v1beta1_PodCertificateRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_certificates_v1beta1_PodCertificateRequestSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_certificates_v1beta1_PodCertificateRequestStatusSchema,
      ),
    ),
  });
export const io_k8s_api_certificates_v1beta1_PodCertificateRequestSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxExpirationSeconds: Schema.optional(Schema.Number),
    nodeName: Schema.String,
    nodeUID: Schema.String,
    pkixPublicKey: Schema.optional(Schema.String),
    podName: Schema.String,
    podUID: Schema.String,
    proofOfPossession: Schema.optional(Schema.String),
    serviceAccountName: Schema.String,
    serviceAccountUID: Schema.String,
    signerName: Schema.String,
    stubPKCS10Request: Schema.String,
    unverifiedUserAnnotations: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  });
export const io_k8s_api_certificates_v1beta1_PodCertificateRequestStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    beginRefreshAt: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    certificateChain: Schema.optional(Schema.String),
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_ConditionSchema,
        ),
      ),
    ),
    notAfter: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    notBefore: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
  });
export const io_k8s_api_coordination_v1_LeaseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_coordination_v1_LeaseSpecSchema),
    ),
  });
export const io_k8s_api_coordination_v1_LeaseSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acquireTime: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
      ),
    ),
    holderIdentity: Schema.optional(Schema.String),
    leaseDurationSeconds: Schema.optional(Schema.Number),
    leaseTransitions: Schema.optional(Schema.Number),
    preferredHolder: Schema.optional(Schema.String),
    renewTime: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
      ),
    ),
    strategy: Schema.optional(Schema.String),
  });
export const io_k8s_api_coordination_v1alpha2_LeaseCandidateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_coordination_v1alpha2_LeaseCandidateSpecSchema,
    ),
  });
export const io_k8s_api_coordination_v1alpha2_LeaseCandidateSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    binaryVersion: Schema.String,
    emulationVersion: Schema.optional(Schema.String),
    leaseName: Schema.String,
    pingTime: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
      ),
    ),
    renewTime: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
      ),
    ),
    strategy: Schema.String,
  });
export const io_k8s_api_coordination_v1beta1_LeaseCandidateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_coordination_v1beta1_LeaseCandidateSpecSchema,
    ),
  });
export const io_k8s_api_coordination_v1beta1_LeaseCandidateSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    binaryVersion: Schema.String,
    emulationVersion: Schema.optional(Schema.String),
    leaseName: Schema.String,
    pingTime: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
      ),
    ),
    renewTime: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
      ),
    ),
    strategy: Schema.String,
  });
export const io_k8s_api_discovery_v1_EndpointSliceSchema =
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
export const io_k8s_api_discovery_v1_EndpointSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addresses: Schema.Array(Schema.String),
    conditions: Schema.optional(
      Schema.suspend(() => io_k8s_api_discovery_v1_EndpointConditionsSchema),
    ),
    deprecatedTopology: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    hints: Schema.optional(
      Schema.suspend(() => io_k8s_api_discovery_v1_EndpointHintsSchema),
    ),
    hostname: Schema.optional(Schema.String),
    nodeName: Schema.optional(Schema.String),
    targetRef: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_ObjectReferenceSchema),
    ),
    zone: Schema.optional(Schema.String),
  });
export const io_k8s_api_discovery_v1_EndpointConditionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ready: Schema.optional(Schema.Boolean),
    serving: Schema.optional(Schema.Boolean),
    terminating: Schema.optional(Schema.Boolean),
  });
export const io_k8s_api_discovery_v1_EndpointHintsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forNodes: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_discovery_v1_ForNodeSchema)),
    ),
    forZones: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_discovery_v1_ForZoneSchema)),
    ),
  });
export const io_k8s_api_discovery_v1_ForNodeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  });
export const io_k8s_api_discovery_v1_ForZoneSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  });
export const io_k8s_api_discovery_v1_EndpointPortSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appProtocol: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    protocol: Schema.optional(Schema.String),
  });
export const io_k8s_api_events_v1_EventSchema =
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
export const io_k8s_api_events_v1_EventSeriesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    lastObservedTime: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_MicroTimeSchema,
    ),
  });
export const io_k8s_api_flowcontrol_v1_FlowSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_flowcontrol_v1_FlowSchemaSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_flowcontrol_v1_FlowSchemaStatusSchema),
    ),
  });
export const io_k8s_api_flowcontrol_v1_FlowSchemaSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    distinguisherMethod: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_flowcontrol_v1_FlowDistinguisherMethodSchema,
      ),
    ),
    matchingPrecedence: Schema.optional(Schema.Number),
    priorityLevelConfiguration: Schema.suspend(
      () => io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReferenceSchema,
    ),
    rules: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_flowcontrol_v1_PolicyRulesWithSubjectsSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_flowcontrol_v1_FlowDistinguisherMethodSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String,
  });
export const io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  });
export const io_k8s_api_flowcontrol_v1_PolicyRulesWithSubjectsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nonResourceRules: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_flowcontrol_v1_NonResourcePolicyRuleSchema,
        ),
      ),
    ),
    resourceRules: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_flowcontrol_v1_ResourcePolicyRuleSchema,
        ),
      ),
    ),
    subjects: Schema.Array(
      Schema.suspend(() => io_k8s_api_flowcontrol_v1_SubjectSchema),
    ),
  });
export const io_k8s_api_flowcontrol_v1_NonResourcePolicyRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nonResourceURLs: Schema.Array(Schema.String),
    verbs: Schema.Array(Schema.String),
  });
export const io_k8s_api_flowcontrol_v1_ResourcePolicyRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroups: Schema.Array(Schema.String),
    clusterScope: Schema.optional(Schema.Boolean),
    namespaces: Schema.optional(Schema.Array(Schema.String)),
    resources: Schema.Array(Schema.String),
    verbs: Schema.Array(Schema.String),
  });
export const io_k8s_api_flowcontrol_v1_SubjectSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.optional(
      Schema.suspend(() => io_k8s_api_flowcontrol_v1_GroupSubjectSchema),
    ),
    kind: Schema.String,
    serviceAccount: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_flowcontrol_v1_ServiceAccountSubjectSchema,
      ),
    ),
    user: Schema.optional(
      Schema.suspend(() => io_k8s_api_flowcontrol_v1_UserSubjectSchema),
    ),
  });
export const io_k8s_api_flowcontrol_v1_GroupSubjectSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  });
export const io_k8s_api_flowcontrol_v1_ServiceAccountSubjectSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    namespace: Schema.String,
  });
export const io_k8s_api_flowcontrol_v1_UserSubjectSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  });
export const io_k8s_api_flowcontrol_v1_FlowSchemaStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_flowcontrol_v1_FlowSchemaConditionSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_flowcontrol_v1_FlowSchemaConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export const io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationSpecSchema,
      ),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatusSchema,
      ),
    ),
  });
export const io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exempt: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_flowcontrol_v1_ExemptPriorityLevelConfigurationSchema,
      ),
    ),
    limited: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_flowcontrol_v1_LimitedPriorityLevelConfigurationSchema,
      ),
    ),
    type: Schema.String,
  });
export const io_k8s_api_flowcontrol_v1_ExemptPriorityLevelConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lendablePercent: Schema.optional(Schema.Number),
    nominalConcurrencyShares: Schema.optional(Schema.Number),
  });
export const io_k8s_api_flowcontrol_v1_LimitedPriorityLevelConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    borrowingLimitPercent: Schema.optional(Schema.Number),
    lendablePercent: Schema.optional(Schema.Number),
    limitResponse: Schema.optional(
      Schema.suspend(() => io_k8s_api_flowcontrol_v1_LimitResponseSchema),
    ),
    nominalConcurrencyShares: Schema.optional(Schema.Number),
  });
export const io_k8s_api_flowcontrol_v1_LimitResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queuing: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_flowcontrol_v1_QueuingConfigurationSchema,
      ),
    ),
    type: Schema.String,
  });
export const io_k8s_api_flowcontrol_v1_QueuingConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    handSize: Schema.optional(Schema.Number),
    queueLengthLimit: Schema.optional(Schema.Number),
    queues: Schema.optional(Schema.Number),
  });
export const io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationConditionSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export const io_k8s_api_apiserverinternal_v1alpha1_StorageVersionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
    ),
    spec: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_apiserverinternal_v1alpha1_StorageVersionSpecSchema,
      ),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_apiserverinternal_v1alpha1_StorageVersionStatusSchema,
      ),
    ),
  });
export const io_k8s_api_apiserverinternal_v1alpha1_StorageVersionSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const io_k8s_api_apiserverinternal_v1alpha1_StorageVersionStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commonEncodingVersion: Schema.optional(Schema.String),
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_api_apiserverinternal_v1alpha1_StorageVersionConditionSchema,
        ),
      ),
    ),
    storageVersions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_api_apiserverinternal_v1alpha1_ServerStorageVersionSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_apiserverinternal_v1alpha1_StorageVersionConditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTransitionTime: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    message: Schema.String,
    observedGeneration: Schema.optional(Schema.Number),
    reason: Schema.String,
    status: Schema.String,
    type: Schema.String,
  });
export const io_k8s_api_apiserverinternal_v1alpha1_ServerStorageVersionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiServerID: Schema.String,
    decodableVersions: Schema.Array(Schema.String),
    encodingVersion: Schema.String,
    servedVersions: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_networking_v1_IngressClassSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_networking_v1_IngressClassSpecSchema),
    ),
  });
export const io_k8s_api_networking_v1_IngressClassSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controller: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_networking_v1_IngressClassParametersReferenceSchema,
      ),
    ),
  });
export const io_k8s_api_networking_v1_IngressClassParametersReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroup: Schema.optional(Schema.String),
    kind: Schema.String,
    name: Schema.String,
    namespace: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
  });
export const io_k8s_api_networking_v1_IngressSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_networking_v1_IngressSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_networking_v1_IngressStatusSchema),
    ),
  });
export const io_k8s_api_networking_v1_IngressSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultBackend: Schema.optional(
      Schema.suspend(() => io_k8s_api_networking_v1_IngressBackendSchema),
    ),
    ingressClassName: Schema.optional(Schema.String),
    rules: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_networking_v1_IngressRuleSchema),
      ),
    ),
    tls: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_networking_v1_IngressTLSSchema),
      ),
    ),
  });
export const io_k8s_api_networking_v1_IngressBackendSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_TypedLocalObjectReferenceSchema),
    ),
    service: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_networking_v1_IngressServiceBackendSchema,
      ),
    ),
  });
export const io_k8s_api_networking_v1_IngressServiceBackendSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    port: Schema.optional(
      Schema.suspend(() => io_k8s_api_networking_v1_ServiceBackendPortSchema),
    ),
  });
export const io_k8s_api_networking_v1_ServiceBackendPortSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    number: Schema.optional(Schema.Number),
  });
export const io_k8s_api_networking_v1_IngressRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    host: Schema.optional(Schema.String),
    http: Schema.optional(
      Schema.suspend(() => io_k8s_api_networking_v1_HTTPIngressRuleValueSchema),
    ),
  });
export const io_k8s_api_networking_v1_HTTPIngressRuleValueSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paths: Schema.Array(
      Schema.suspend(() => io_k8s_api_networking_v1_HTTPIngressPathSchema),
    ),
  });
export const io_k8s_api_networking_v1_HTTPIngressPathSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backend: Schema.suspend(
      () => io_k8s_api_networking_v1_IngressBackendSchema,
    ),
    path: Schema.optional(Schema.String),
    pathType: Schema.String,
  });
export const io_k8s_api_networking_v1_IngressTLSSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hosts: Schema.optional(Schema.Array(Schema.String)),
    secretName: Schema.optional(Schema.String),
  });
export const io_k8s_api_networking_v1_IngressStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadBalancer: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_networking_v1_IngressLoadBalancerStatusSchema,
      ),
    ),
  });
export const io_k8s_api_networking_v1_IngressLoadBalancerStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingress: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_networking_v1_IngressLoadBalancerIngressSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_networking_v1_IngressLoadBalancerIngressSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostname: Schema.optional(Schema.String),
    ip: Schema.optional(Schema.String),
    ports: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_networking_v1_IngressPortStatusSchema),
      ),
    ),
  });
export const io_k8s_api_networking_v1_IngressPortStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Schema.String),
    port: Schema.Number,
    protocol: Schema.String,
  });
export const io_k8s_api_networking_v1_IPAddressSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_networking_v1_IPAddressSpecSchema),
  });
export const io_k8s_api_networking_v1_IPAddressSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parentRef: Schema.suspend(
      () => io_k8s_api_networking_v1_ParentReferenceSchema,
    ),
  });
export const io_k8s_api_networking_v1_ParentReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.String),
    name: Schema.String,
    namespace: Schema.optional(Schema.String),
    resource: Schema.String,
  });
export const io_k8s_api_networking_v1_NetworkPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_networking_v1_NetworkPolicySpecSchema),
    ),
  });
export const io_k8s_api_networking_v1_NetworkPolicySpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    egress: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_networking_v1_NetworkPolicyEgressRuleSchema,
        ),
      ),
    ),
    ingress: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_networking_v1_NetworkPolicyIngressRuleSchema,
        ),
      ),
    ),
    podSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    policyTypes: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_networking_v1_NetworkPolicyEgressRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ports: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_networking_v1_NetworkPolicyPortSchema),
      ),
    ),
    to: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_networking_v1_NetworkPolicyPeerSchema),
      ),
    ),
  });
export const io_k8s_api_networking_v1_NetworkPolicyPortSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endPort: Schema.optional(Schema.Number),
    port: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_util_intstr_IntOrStringSchema,
      ),
    ),
    protocol: Schema.optional(Schema.String),
  });
export const io_k8s_api_networking_v1_NetworkPolicyPeerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipBlock: Schema.optional(
      Schema.suspend(() => io_k8s_api_networking_v1_IPBlockSchema),
    ),
    namespaceSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    podSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
  });
export const io_k8s_api_networking_v1_IPBlockSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cidr: Schema.String,
    except: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_networking_v1_NetworkPolicyIngressRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    from: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_networking_v1_NetworkPolicyPeerSchema),
      ),
    ),
    ports: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_networking_v1_NetworkPolicyPortSchema),
      ),
    ),
  });
export const io_k8s_api_networking_v1_ServiceCIDRSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_networking_v1_ServiceCIDRSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_networking_v1_ServiceCIDRStatusSchema),
    ),
  });
export const io_k8s_api_networking_v1_ServiceCIDRSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cidrs: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_networking_v1_ServiceCIDRStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_ConditionSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_networking_v1beta1_IPAddressSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_networking_v1beta1_IPAddressSpecSchema,
    ),
  });
export const io_k8s_api_networking_v1beta1_IPAddressSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parentRef: Schema.suspend(
      () => io_k8s_api_networking_v1beta1_ParentReferenceSchema,
    ),
  });
export const io_k8s_api_networking_v1beta1_ParentReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.String),
    name: Schema.String,
    namespace: Schema.optional(Schema.String),
    resource: Schema.String,
  });
export const io_k8s_api_networking_v1beta1_ServiceCIDRSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_networking_v1beta1_ServiceCIDRSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_networking_v1beta1_ServiceCIDRStatusSchema,
      ),
    ),
  });
export const io_k8s_api_networking_v1beta1_ServiceCIDRSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cidrs: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_networking_v1beta1_ServiceCIDRStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_ConditionSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_node_v1_RuntimeClassSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    handler: Schema.String,
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    overhead: Schema.optional(
      Schema.suspend(() => io_k8s_api_node_v1_OverheadSchema),
    ),
    scheduling: Schema.optional(
      Schema.suspend(() => io_k8s_api_node_v1_SchedulingSchema),
    ),
  });
export const io_k8s_api_node_v1_OverheadSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    podFixed: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
  });
export const io_k8s_api_node_v1_SchedulingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeSelector: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    tolerations: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_core_v1_TolerationSchema)),
    ),
  });
export const io_k8s_api_policy_v1_PodDisruptionBudgetSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(() => io_k8s_api_policy_v1_PodDisruptionBudgetSpecSchema),
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_policy_v1_PodDisruptionBudgetStatusSchema,
      ),
    ),
  });
export const io_k8s_api_policy_v1_PodDisruptionBudgetSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxUnavailable: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_util_intstr_IntOrStringSchema,
      ),
    ),
    minAvailable: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_util_intstr_IntOrStringSchema,
      ),
    ),
    selector: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    unhealthyPodEvictionPolicy: Schema.optional(Schema.String),
  });
export const io_k8s_api_policy_v1_PodDisruptionBudgetStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_ConditionSchema,
        ),
      ),
    ),
    currentHealthy: Schema.optional(Schema.Number),
    desiredHealthy: Schema.optional(Schema.Number),
    disruptedPods: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
      ),
    ),
    disruptionsAllowed: Schema.optional(Schema.Number),
    expectedPods: Schema.optional(Schema.Number),
    observedGeneration: Schema.optional(Schema.Number),
  });
export const io_k8s_api_rbac_v1_ClusterRoleBindingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    roleRef: Schema.suspend(() => io_k8s_api_rbac_v1_RoleRefSchema),
    subjects: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_rbac_v1_SubjectSchema)),
    ),
  });
export const io_k8s_api_rbac_v1_RoleRefSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroup: Schema.optional(Schema.String),
    kind: Schema.String,
    name: Schema.String,
  });
export const io_k8s_api_rbac_v1_SubjectSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroup: Schema.optional(Schema.String),
    kind: Schema.String,
    name: Schema.String,
    namespace: Schema.optional(Schema.String),
  });
export const io_k8s_api_rbac_v1_ClusterRoleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aggregationRule: Schema.optional(
      Schema.suspend(() => io_k8s_api_rbac_v1_AggregationRuleSchema),
    ),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    rules: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_rbac_v1_PolicyRuleSchema)),
    ),
  });
export const io_k8s_api_rbac_v1_AggregationRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterRoleSelectors: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_rbac_v1_PolicyRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroups: Schema.optional(Schema.Array(Schema.String)),
    nonResourceURLs: Schema.optional(Schema.Array(Schema.String)),
    resourceNames: Schema.optional(Schema.Array(Schema.String)),
    resources: Schema.optional(Schema.Array(Schema.String)),
    verbs: Schema.Array(Schema.String),
  });
export const io_k8s_api_rbac_v1_RoleBindingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    roleRef: Schema.suspend(() => io_k8s_api_rbac_v1_RoleRefSchema),
    subjects: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_rbac_v1_SubjectSchema)),
    ),
  });
export const io_k8s_api_rbac_v1_RoleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    rules: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_rbac_v1_PolicyRuleSchema)),
    ),
  });
export const io_k8s_api_resource_v1_DeviceClassSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_resource_v1_DeviceClassSpecSchema),
  });
export const io_k8s_api_resource_v1_DeviceClassSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1_DeviceClassConfigurationSchema,
        ),
      ),
    ),
    extendedResourceName: Schema.optional(Schema.String),
    selectors: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1_DeviceSelectorSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1_DeviceClassConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    opaque: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1_OpaqueDeviceConfigurationSchema,
      ),
    ),
  });
export const io_k8s_api_resource_v1_OpaqueDeviceConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    driver: Schema.String,
    parameters: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
  });
export const io_k8s_api_resource_v1_DeviceSelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cel: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1_CELDeviceSelectorSchema),
    ),
  });
export const io_k8s_api_resource_v1_CELDeviceSelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.String,
  });
export const io_k8s_api_resource_v1_ResourceClaimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_resource_v1_ResourceClaimSpecSchema),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1_ResourceClaimStatusSchema),
    ),
  });
export const io_k8s_api_resource_v1_ResourceClaimSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    devices: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1_DeviceClaimSchema),
    ),
  });
export const io_k8s_api_resource_v1_DeviceClaimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1_DeviceClaimConfigurationSchema,
        ),
      ),
    ),
    constraints: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1_DeviceConstraintSchema),
      ),
    ),
    requests: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1_DeviceRequestSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1_DeviceClaimConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    opaque: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1_OpaqueDeviceConfigurationSchema,
      ),
    ),
    requests: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_resource_v1_DeviceConstraintSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    distinctAttribute: Schema.optional(Schema.String),
    matchAttribute: Schema.optional(Schema.String),
    requests: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_resource_v1_DeviceRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exactly: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1_ExactDeviceRequestSchema),
    ),
    firstAvailable: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1_DeviceSubRequestSchema),
      ),
    ),
    name: Schema.String,
  });
export const io_k8s_api_resource_v1_ExactDeviceRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminAccess: Schema.optional(Schema.Boolean),
    allocationMode: Schema.optional(Schema.String),
    capacity: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1_CapacityRequirementsSchema),
    ),
    count: Schema.optional(Schema.Number),
    deviceClassName: Schema.String,
    selectors: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1_DeviceSelectorSchema),
      ),
    ),
    tolerations: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1_DeviceTolerationSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1_CapacityRequirementsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1_DeviceTolerationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effect: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    operator: Schema.optional(Schema.String),
    tolerationSeconds: Schema.optional(Schema.Number),
    value: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1_DeviceSubRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocationMode: Schema.optional(Schema.String),
    capacity: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1_CapacityRequirementsSchema),
    ),
    count: Schema.optional(Schema.Number),
    deviceClassName: Schema.String,
    name: Schema.String,
    selectors: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1_DeviceSelectorSchema),
      ),
    ),
    tolerations: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1_DeviceTolerationSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1_ResourceClaimStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocation: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1_AllocationResultSchema),
    ),
    devices: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1_AllocatedDeviceStatusSchema,
        ),
      ),
    ),
    reservedFor: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1_ResourceClaimConsumerReferenceSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1_AllocationResultSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocationTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    devices: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1_DeviceAllocationResultSchema),
    ),
    nodeSelector: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSelectorSchema),
    ),
  });
export const io_k8s_api_resource_v1_DeviceAllocationResultSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1_DeviceAllocationConfigurationSchema,
        ),
      ),
    ),
    results: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1_DeviceRequestAllocationResultSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1_DeviceAllocationConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    opaque: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1_OpaqueDeviceConfigurationSchema,
      ),
    ),
    requests: Schema.optional(Schema.Array(Schema.String)),
    source: Schema.String,
  });
export const io_k8s_api_resource_v1_DeviceRequestAllocationResultSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminAccess: Schema.optional(Schema.Boolean),
    bindingConditions: Schema.optional(Schema.Array(Schema.String)),
    bindingFailureConditions: Schema.optional(Schema.Array(Schema.String)),
    consumedCapacity: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    device: Schema.String,
    driver: Schema.String,
    pool: Schema.String,
    request: Schema.String,
    shareID: Schema.optional(Schema.String),
    tolerations: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1_DeviceTolerationSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1_AllocatedDeviceStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_ConditionSchema,
        ),
      ),
    ),
    data: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema),
    ),
    device: Schema.String,
    driver: Schema.String,
    networkData: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1_NetworkDeviceDataSchema),
    ),
    pool: Schema.String,
    shareID: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1_NetworkDeviceDataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hardwareAddress: Schema.optional(Schema.String),
    interfaceName: Schema.optional(Schema.String),
    ips: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_resource_v1_ResourceClaimConsumerReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroup: Schema.optional(Schema.String),
    name: Schema.String,
    resource: Schema.String,
    uid: Schema.String,
  });
export const io_k8s_api_resource_v1_ResourceClaimTemplateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_resource_v1_ResourceClaimTemplateSpecSchema,
    ),
  });
export const io_k8s_api_resource_v1_ResourceClaimTemplateSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_resource_v1_ResourceClaimSpecSchema),
  });
export const io_k8s_api_resource_v1_ResourceSliceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_resource_v1_ResourceSliceSpecSchema),
  });
export const io_k8s_api_resource_v1_ResourceSliceSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allNodes: Schema.optional(Schema.Boolean),
    devices: Schema.optional(
      Schema.Array(Schema.suspend(() => io_k8s_api_resource_v1_DeviceSchema)),
    ),
    driver: Schema.String,
    nodeName: Schema.optional(Schema.String),
    nodeSelector: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSelectorSchema),
    ),
    perDeviceNodeSelection: Schema.optional(Schema.Boolean),
    pool: Schema.suspend(() => io_k8s_api_resource_v1_ResourcePoolSchema),
    sharedCounters: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1_CounterSetSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1_DeviceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allNodes: Schema.optional(Schema.Boolean),
    allowMultipleAllocations: Schema.optional(Schema.Boolean),
    attributes: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => io_k8s_api_resource_v1_DeviceAttributeSchema),
      ),
    ),
    bindingConditions: Schema.optional(Schema.Array(Schema.String)),
    bindingFailureConditions: Schema.optional(Schema.Array(Schema.String)),
    bindsToNode: Schema.optional(Schema.Boolean),
    capacity: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => io_k8s_api_resource_v1_DeviceCapacitySchema),
      ),
    ),
    consumesCounters: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1_DeviceCounterConsumptionSchema,
        ),
      ),
    ),
    name: Schema.String,
    nodeAllocatableResourceMappings: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_api_resource_v1_NodeAllocatableResourceMappingSchema,
        ),
      ),
    ),
    nodeName: Schema.optional(Schema.String),
    nodeSelector: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSelectorSchema),
    ),
    taints: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1_DeviceTaintSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1_DeviceAttributeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bool: Schema.optional(Schema.Boolean),
    bools: Schema.optional(Schema.Array(Schema.Boolean)),
    int: Schema.optional(Schema.Number),
    ints: Schema.optional(Schema.Array(Schema.Number)),
    string: Schema.optional(Schema.String),
    strings: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.String),
    versions: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_resource_v1_DeviceCapacitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestPolicy: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1_CapacityRequestPolicySchema),
    ),
    value: Schema.suspend(
      () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
    ),
  });
export const io_k8s_api_resource_v1_CapacityRequestPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    default: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
    validRange: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1_CapacityRequestPolicyRangeSchema,
      ),
    ),
    validValues: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1_CapacityRequestPolicyRangeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    max: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
    min: Schema.suspend(
      () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
    ),
    step: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
  });
export const io_k8s_api_resource_v1_DeviceCounterConsumptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    counterSet: Schema.String,
    counters: Schema.Record(
      Schema.String,
      Schema.suspend(() => io_k8s_api_resource_v1_CounterSchema),
    ),
  });
export const io_k8s_api_resource_v1_CounterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.suspend(
      () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
    ),
  });
export const io_k8s_api_resource_v1_NodeAllocatableResourceMappingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocationMultiplier: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
    capacityKey: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1_DeviceTaintSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effect: Schema.String,
    key: Schema.String,
    timeAdded: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    value: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1_ResourcePoolSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generation: Schema.Number,
    name: Schema.String,
    resourceSliceCount: Schema.Number,
  });
export const io_k8s_api_resource_v1_CounterSetSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    counters: Schema.Record(
      Schema.String,
      Schema.suspend(() => io_k8s_api_resource_v1_CounterSchema),
    ),
    name: Schema.String,
  });
export const io_k8s_api_resource_v1alpha3_DeviceTaintRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_resource_v1alpha3_DeviceTaintRuleSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1alpha3_DeviceTaintRuleStatusSchema,
      ),
    ),
  });
export const io_k8s_api_resource_v1alpha3_DeviceTaintRuleSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1alpha3_DeviceTaintSelectorSchema,
      ),
    ),
    taint: Schema.suspend(() => io_k8s_api_resource_v1alpha3_DeviceTaintSchema),
  });
export const io_k8s_api_resource_v1alpha3_DeviceTaintSelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device: Schema.optional(Schema.String),
    driver: Schema.optional(Schema.String),
    pool: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1alpha3_DeviceTaintSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effect: Schema.String,
    key: Schema.String,
    timeAdded: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    value: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1alpha3_DeviceTaintRuleStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_ConditionSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1alpha3_ResourcePoolStatusRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
    ),
    spec: Schema.suspend(
      () => io_k8s_api_resource_v1alpha3_ResourcePoolStatusRequestSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_resource_v1alpha3_ResourcePoolStatusRequestStatusSchema,
      ),
    ),
  });
export const io_k8s_api_resource_v1alpha3_ResourcePoolStatusRequestSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    driver: Schema.String,
    limit: Schema.optional(Schema.Number),
    poolName: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1alpha3_ResourcePoolStatusRequestStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_ConditionSchema,
        ),
      ),
    ),
    poolCount: Schema.Number,
    pools: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1alpha3_PoolStatusSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1alpha3_PoolStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocatedDevices: Schema.optional(Schema.Number),
    availableDevices: Schema.optional(Schema.Number),
    driver: Schema.String,
    generation: Schema.Number,
    nodeName: Schema.optional(Schema.String),
    poolName: Schema.String,
    resourceSliceCount: Schema.optional(Schema.Number),
    totalDevices: Schema.optional(Schema.Number),
    unavailableDevices: Schema.optional(Schema.Number),
    validationError: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1beta1_DeviceClassSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_resource_v1beta1_DeviceClassSpecSchema,
    ),
  });
export const io_k8s_api_resource_v1beta1_DeviceClassSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta1_DeviceClassConfigurationSchema,
        ),
      ),
    ),
    extendedResourceName: Schema.optional(Schema.String),
    selectors: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1beta1_DeviceSelectorSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta1_DeviceClassConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    opaque: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta1_OpaqueDeviceConfigurationSchema,
      ),
    ),
  });
export const io_k8s_api_resource_v1beta1_OpaqueDeviceConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    driver: Schema.String,
    parameters: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
  });
export const io_k8s_api_resource_v1beta1_DeviceSelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cel: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1beta1_CELDeviceSelectorSchema),
    ),
  });
export const io_k8s_api_resource_v1beta1_CELDeviceSelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.String,
  });
export const io_k8s_api_resource_v1beta1_ResourceClaimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_resource_v1beta1_ResourceClaimSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta1_ResourceClaimStatusSchema,
      ),
    ),
  });
export const io_k8s_api_resource_v1beta1_ResourceClaimSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    devices: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1beta1_DeviceClaimSchema),
    ),
  });
export const io_k8s_api_resource_v1beta1_DeviceClaimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta1_DeviceClaimConfigurationSchema,
        ),
      ),
    ),
    constraints: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta1_DeviceConstraintSchema,
        ),
      ),
    ),
    requests: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1beta1_DeviceRequestSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta1_DeviceClaimConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    opaque: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta1_OpaqueDeviceConfigurationSchema,
      ),
    ),
    requests: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_resource_v1beta1_DeviceConstraintSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    distinctAttribute: Schema.optional(Schema.String),
    matchAttribute: Schema.optional(Schema.String),
    requests: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_resource_v1beta1_DeviceRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminAccess: Schema.optional(Schema.Boolean),
    allocationMode: Schema.optional(Schema.String),
    capacity: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta1_CapacityRequirementsSchema,
      ),
    ),
    count: Schema.optional(Schema.Number),
    deviceClassName: Schema.optional(Schema.String),
    firstAvailable: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta1_DeviceSubRequestSchema,
        ),
      ),
    ),
    name: Schema.String,
    selectors: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1beta1_DeviceSelectorSchema),
      ),
    ),
    tolerations: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta1_DeviceTolerationSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta1_CapacityRequirementsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta1_DeviceSubRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocationMode: Schema.optional(Schema.String),
    capacity: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta1_CapacityRequirementsSchema,
      ),
    ),
    count: Schema.optional(Schema.Number),
    deviceClassName: Schema.String,
    name: Schema.String,
    selectors: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1beta1_DeviceSelectorSchema),
      ),
    ),
    tolerations: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta1_DeviceTolerationSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta1_DeviceTolerationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effect: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    operator: Schema.optional(Schema.String),
    tolerationSeconds: Schema.optional(Schema.Number),
    value: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1beta1_ResourceClaimStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocation: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1beta1_AllocationResultSchema),
    ),
    devices: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta1_AllocatedDeviceStatusSchema,
        ),
      ),
    ),
    reservedFor: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_api_resource_v1beta1_ResourceClaimConsumerReferenceSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta1_AllocationResultSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocationTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    devices: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta1_DeviceAllocationResultSchema,
      ),
    ),
    nodeSelector: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSelectorSchema),
    ),
  });
export const io_k8s_api_resource_v1beta1_DeviceAllocationResultSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta1_DeviceAllocationConfigurationSchema,
        ),
      ),
    ),
    results: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta1_DeviceRequestAllocationResultSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta1_DeviceAllocationConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    opaque: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta1_OpaqueDeviceConfigurationSchema,
      ),
    ),
    requests: Schema.optional(Schema.Array(Schema.String)),
    source: Schema.String,
  });
export const io_k8s_api_resource_v1beta1_DeviceRequestAllocationResultSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminAccess: Schema.optional(Schema.Boolean),
    bindingConditions: Schema.optional(Schema.Array(Schema.String)),
    bindingFailureConditions: Schema.optional(Schema.Array(Schema.String)),
    consumedCapacity: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    device: Schema.String,
    driver: Schema.String,
    pool: Schema.String,
    request: Schema.String,
    shareID: Schema.optional(Schema.String),
    tolerations: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta1_DeviceTolerationSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta1_AllocatedDeviceStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_ConditionSchema,
        ),
      ),
    ),
    data: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema),
    ),
    device: Schema.String,
    driver: Schema.String,
    networkData: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1beta1_NetworkDeviceDataSchema),
    ),
    pool: Schema.String,
    shareID: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1beta1_NetworkDeviceDataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hardwareAddress: Schema.optional(Schema.String),
    interfaceName: Schema.optional(Schema.String),
    ips: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_resource_v1beta1_ResourceClaimConsumerReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroup: Schema.optional(Schema.String),
    name: Schema.String,
    resource: Schema.String,
    uid: Schema.String,
  });
export const io_k8s_api_resource_v1beta1_ResourceClaimTemplateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_resource_v1beta1_ResourceClaimTemplateSpecSchema,
    ),
  });
export const io_k8s_api_resource_v1beta1_ResourceClaimTemplateSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_resource_v1beta1_ResourceClaimSpecSchema,
    ),
  });
export const io_k8s_api_resource_v1beta1_ResourceSliceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_resource_v1beta1_ResourceSliceSpecSchema,
    ),
  });
export const io_k8s_api_resource_v1beta1_ResourceSliceSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allNodes: Schema.optional(Schema.Boolean),
    devices: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1beta1_DeviceSchema),
      ),
    ),
    driver: Schema.String,
    nodeName: Schema.optional(Schema.String),
    nodeSelector: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSelectorSchema),
    ),
    perDeviceNodeSelection: Schema.optional(Schema.Boolean),
    pool: Schema.suspend(() => io_k8s_api_resource_v1beta1_ResourcePoolSchema),
    sharedCounters: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1beta1_CounterSetSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta1_DeviceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    basic: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1beta1_BasicDeviceSchema),
    ),
    name: Schema.String,
  });
export const io_k8s_api_resource_v1beta1_BasicDeviceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allNodes: Schema.optional(Schema.Boolean),
    allowMultipleAllocations: Schema.optional(Schema.Boolean),
    attributes: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => io_k8s_api_resource_v1beta1_DeviceAttributeSchema),
      ),
    ),
    bindingConditions: Schema.optional(Schema.Array(Schema.String)),
    bindingFailureConditions: Schema.optional(Schema.Array(Schema.String)),
    bindsToNode: Schema.optional(Schema.Boolean),
    capacity: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => io_k8s_api_resource_v1beta1_DeviceCapacitySchema),
      ),
    ),
    consumesCounters: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta1_DeviceCounterConsumptionSchema,
        ),
      ),
    ),
    nodeAllocatableResourceMappings: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () =>
            io_k8s_api_resource_v1beta1_NodeAllocatableResourceMappingSchema,
        ),
      ),
    ),
    nodeName: Schema.optional(Schema.String),
    nodeSelector: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSelectorSchema),
    ),
    taints: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1beta1_DeviceTaintSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta1_DeviceAttributeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bool: Schema.optional(Schema.Boolean),
    bools: Schema.optional(Schema.Array(Schema.Boolean)),
    int: Schema.optional(Schema.Number),
    ints: Schema.optional(Schema.Array(Schema.Number)),
    string: Schema.optional(Schema.String),
    strings: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.String),
    versions: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_resource_v1beta1_DeviceCapacitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestPolicy: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta1_CapacityRequestPolicySchema,
      ),
    ),
    value: Schema.suspend(
      () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
    ),
  });
export const io_k8s_api_resource_v1beta1_CapacityRequestPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    default: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
    validRange: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta1_CapacityRequestPolicyRangeSchema,
      ),
    ),
    validValues: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta1_CapacityRequestPolicyRangeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    max: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
    min: Schema.suspend(
      () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
    ),
    step: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
  });
export const io_k8s_api_resource_v1beta1_DeviceCounterConsumptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    counterSet: Schema.String,
    counters: Schema.Record(
      Schema.String,
      Schema.suspend(() => io_k8s_api_resource_v1beta1_CounterSchema),
    ),
  });
export const io_k8s_api_resource_v1beta1_CounterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.suspend(
      () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
    ),
  });
export const io_k8s_api_resource_v1beta1_NodeAllocatableResourceMappingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocationMultiplier: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
    capacityKey: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1beta1_DeviceTaintSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effect: Schema.String,
    key: Schema.String,
    timeAdded: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    value: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1beta1_ResourcePoolSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generation: Schema.Number,
    name: Schema.String,
    resourceSliceCount: Schema.Number,
  });
export const io_k8s_api_resource_v1beta1_CounterSetSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    counters: Schema.Record(
      Schema.String,
      Schema.suspend(() => io_k8s_api_resource_v1beta1_CounterSchema),
    ),
    name: Schema.String,
  });
export const io_k8s_api_resource_v1beta2_DeviceClassSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_resource_v1beta2_DeviceClassSpecSchema,
    ),
  });
export const io_k8s_api_resource_v1beta2_DeviceClassSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta2_DeviceClassConfigurationSchema,
        ),
      ),
    ),
    extendedResourceName: Schema.optional(Schema.String),
    selectors: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1beta2_DeviceSelectorSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta2_DeviceClassConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    opaque: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta2_OpaqueDeviceConfigurationSchema,
      ),
    ),
  });
export const io_k8s_api_resource_v1beta2_OpaqueDeviceConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    driver: Schema.String,
    parameters: Schema.suspend(
      () => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema,
    ),
  });
export const io_k8s_api_resource_v1beta2_DeviceSelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cel: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1beta2_CELDeviceSelectorSchema),
    ),
  });
export const io_k8s_api_resource_v1beta2_CELDeviceSelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.String,
  });
export const io_k8s_api_resource_v1beta2_DeviceTaintRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_resource_v1beta2_DeviceTaintRuleSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta2_DeviceTaintRuleStatusSchema,
      ),
    ),
  });
export const io_k8s_api_resource_v1beta2_DeviceTaintRuleSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceSelector: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta2_DeviceTaintSelectorSchema,
      ),
    ),
    taint: Schema.suspend(() => io_k8s_api_resource_v1beta2_DeviceTaintSchema),
  });
export const io_k8s_api_resource_v1beta2_DeviceTaintSelectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device: Schema.optional(Schema.String),
    driver: Schema.optional(Schema.String),
    pool: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1beta2_DeviceTaintSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effect: Schema.String,
    key: Schema.String,
    timeAdded: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    value: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1beta2_DeviceTaintRuleStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_ConditionSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta2_ResourceClaimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_resource_v1beta2_ResourceClaimSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta2_ResourceClaimStatusSchema,
      ),
    ),
  });
export const io_k8s_api_resource_v1beta2_ResourceClaimSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    devices: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1beta2_DeviceClaimSchema),
    ),
  });
export const io_k8s_api_resource_v1beta2_DeviceClaimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta2_DeviceClaimConfigurationSchema,
        ),
      ),
    ),
    constraints: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta2_DeviceConstraintSchema,
        ),
      ),
    ),
    requests: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1beta2_DeviceRequestSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta2_DeviceClaimConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    opaque: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta2_OpaqueDeviceConfigurationSchema,
      ),
    ),
    requests: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_resource_v1beta2_DeviceConstraintSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    distinctAttribute: Schema.optional(Schema.String),
    matchAttribute: Schema.optional(Schema.String),
    requests: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_resource_v1beta2_DeviceRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exactly: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta2_ExactDeviceRequestSchema,
      ),
    ),
    firstAvailable: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta2_DeviceSubRequestSchema,
        ),
      ),
    ),
    name: Schema.String,
  });
export const io_k8s_api_resource_v1beta2_ExactDeviceRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminAccess: Schema.optional(Schema.Boolean),
    allocationMode: Schema.optional(Schema.String),
    capacity: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta2_CapacityRequirementsSchema,
      ),
    ),
    count: Schema.optional(Schema.Number),
    deviceClassName: Schema.String,
    selectors: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1beta2_DeviceSelectorSchema),
      ),
    ),
    tolerations: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta2_DeviceTolerationSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta2_CapacityRequirementsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta2_DeviceTolerationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effect: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    operator: Schema.optional(Schema.String),
    tolerationSeconds: Schema.optional(Schema.Number),
    value: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1beta2_DeviceSubRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocationMode: Schema.optional(Schema.String),
    capacity: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta2_CapacityRequirementsSchema,
      ),
    ),
    count: Schema.optional(Schema.Number),
    deviceClassName: Schema.String,
    name: Schema.String,
    selectors: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1beta2_DeviceSelectorSchema),
      ),
    ),
    tolerations: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta2_DeviceTolerationSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta2_ResourceClaimStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocation: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1beta2_AllocationResultSchema),
    ),
    devices: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta2_AllocatedDeviceStatusSchema,
        ),
      ),
    ),
    reservedFor: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_api_resource_v1beta2_ResourceClaimConsumerReferenceSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta2_AllocationResultSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocationTimestamp: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
    devices: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta2_DeviceAllocationResultSchema,
      ),
    ),
    nodeSelector: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSelectorSchema),
    ),
  });
export const io_k8s_api_resource_v1beta2_DeviceAllocationResultSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta2_DeviceAllocationConfigurationSchema,
        ),
      ),
    ),
    results: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta2_DeviceRequestAllocationResultSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta2_DeviceAllocationConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    opaque: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta2_OpaqueDeviceConfigurationSchema,
      ),
    ),
    requests: Schema.optional(Schema.Array(Schema.String)),
    source: Schema.String,
  });
export const io_k8s_api_resource_v1beta2_DeviceRequestAllocationResultSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminAccess: Schema.optional(Schema.Boolean),
    bindingConditions: Schema.optional(Schema.Array(Schema.String)),
    bindingFailureConditions: Schema.optional(Schema.Array(Schema.String)),
    consumedCapacity: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
    device: Schema.String,
    driver: Schema.String,
    pool: Schema.String,
    request: Schema.String,
    shareID: Schema.optional(Schema.String),
    tolerations: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta2_DeviceTolerationSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta2_AllocatedDeviceStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_ConditionSchema,
        ),
      ),
    ),
    data: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_runtime_RawExtensionSchema),
    ),
    device: Schema.String,
    driver: Schema.String,
    networkData: Schema.optional(
      Schema.suspend(() => io_k8s_api_resource_v1beta2_NetworkDeviceDataSchema),
    ),
    pool: Schema.String,
    shareID: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1beta2_NetworkDeviceDataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hardwareAddress: Schema.optional(Schema.String),
    interfaceName: Schema.optional(Schema.String),
    ips: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_resource_v1beta2_ResourceClaimConsumerReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroup: Schema.optional(Schema.String),
    name: Schema.String,
    resource: Schema.String,
    uid: Schema.String,
  });
export const io_k8s_api_resource_v1beta2_ResourceClaimTemplateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_resource_v1beta2_ResourceClaimTemplateSpecSchema,
    ),
  });
export const io_k8s_api_resource_v1beta2_ResourceClaimTemplateSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_resource_v1beta2_ResourceClaimSpecSchema,
    ),
  });
export const io_k8s_api_resource_v1beta2_ResourceSliceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_resource_v1beta2_ResourceSliceSpecSchema,
    ),
  });
export const io_k8s_api_resource_v1beta2_ResourceSliceSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allNodes: Schema.optional(Schema.Boolean),
    devices: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1beta2_DeviceSchema),
      ),
    ),
    driver: Schema.String,
    nodeName: Schema.optional(Schema.String),
    nodeSelector: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSelectorSchema),
    ),
    perDeviceNodeSelection: Schema.optional(Schema.Boolean),
    pool: Schema.suspend(() => io_k8s_api_resource_v1beta2_ResourcePoolSchema),
    sharedCounters: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1beta2_CounterSetSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta2_DeviceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allNodes: Schema.optional(Schema.Boolean),
    allowMultipleAllocations: Schema.optional(Schema.Boolean),
    attributes: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => io_k8s_api_resource_v1beta2_DeviceAttributeSchema),
      ),
    ),
    bindingConditions: Schema.optional(Schema.Array(Schema.String)),
    bindingFailureConditions: Schema.optional(Schema.Array(Schema.String)),
    bindsToNode: Schema.optional(Schema.Boolean),
    capacity: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => io_k8s_api_resource_v1beta2_DeviceCapacitySchema),
      ),
    ),
    consumesCounters: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_resource_v1beta2_DeviceCounterConsumptionSchema,
        ),
      ),
    ),
    name: Schema.String,
    nodeAllocatableResourceMappings: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(
          () =>
            io_k8s_api_resource_v1beta2_NodeAllocatableResourceMappingSchema,
        ),
      ),
    ),
    nodeName: Schema.optional(Schema.String),
    nodeSelector: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_NodeSelectorSchema),
    ),
    taints: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_resource_v1beta2_DeviceTaintSchema),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta2_DeviceAttributeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bool: Schema.optional(Schema.Boolean),
    bools: Schema.optional(Schema.Array(Schema.Boolean)),
    int: Schema.optional(Schema.Number),
    ints: Schema.optional(Schema.Array(Schema.Number)),
    string: Schema.optional(Schema.String),
    strings: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.String),
    versions: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_resource_v1beta2_DeviceCapacitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestPolicy: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta2_CapacityRequestPolicySchema,
      ),
    ),
    value: Schema.suspend(
      () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
    ),
  });
export const io_k8s_api_resource_v1beta2_CapacityRequestPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    default: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
    validRange: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_resource_v1beta2_CapacityRequestPolicyRangeSchema,
      ),
    ),
    validValues: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
        ),
      ),
    ),
  });
export const io_k8s_api_resource_v1beta2_CapacityRequestPolicyRangeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    max: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
    min: Schema.suspend(
      () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
    ),
    step: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
  });
export const io_k8s_api_resource_v1beta2_DeviceCounterConsumptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    counterSet: Schema.String,
    counters: Schema.Record(
      Schema.String,
      Schema.suspend(() => io_k8s_api_resource_v1beta2_CounterSchema),
    ),
  });
export const io_k8s_api_resource_v1beta2_CounterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.suspend(
      () => io_k8s_apimachinery_pkg_api_resource_QuantitySchema,
    ),
  });
export const io_k8s_api_resource_v1beta2_NodeAllocatableResourceMappingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocationMultiplier: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
    capacityKey: Schema.optional(Schema.String),
  });
export const io_k8s_api_resource_v1beta2_ResourcePoolSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generation: Schema.Number,
    name: Schema.String,
    resourceSliceCount: Schema.Number,
  });
export const io_k8s_api_resource_v1beta2_CounterSetSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    counters: Schema.Record(
      Schema.String,
      Schema.suspend(() => io_k8s_api_resource_v1beta2_CounterSchema),
    ),
    name: Schema.String,
  });
export const io_k8s_api_scheduling_v1_PriorityClassSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    globalDefault: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    preemptionPolicy: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  });
export const io_k8s_api_scheduling_v1alpha2_PodGroupSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_scheduling_v1alpha2_PodGroupSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_scheduling_v1alpha2_PodGroupStatusSchema),
    ),
  });
export const io_k8s_api_scheduling_v1alpha2_PodGroupSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disruptionMode: Schema.optional(Schema.String),
    podGroupTemplateRef: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_scheduling_v1alpha2_PodGroupTemplateReferenceSchema,
      ),
    ),
    priority: Schema.optional(Schema.Number),
    priorityClassName: Schema.optional(Schema.String),
    resourceClaims: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_scheduling_v1alpha2_PodGroupResourceClaimSchema,
        ),
      ),
    ),
    schedulingConstraints: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_scheduling_v1alpha2_PodGroupSchedulingConstraintsSchema,
      ),
    ),
    schedulingPolicy: Schema.suspend(
      () => io_k8s_api_scheduling_v1alpha2_PodGroupSchedulingPolicySchema,
    ),
  });
export const io_k8s_api_scheduling_v1alpha2_PodGroupTemplateReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workload: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_scheduling_v1alpha2_WorkloadPodGroupTemplateReferenceSchema,
      ),
    ),
  });
export const io_k8s_api_scheduling_v1alpha2_WorkloadPodGroupTemplateReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    podGroupTemplateName: Schema.String,
    workloadName: Schema.String,
  });
export const io_k8s_api_scheduling_v1alpha2_PodGroupResourceClaimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    resourceClaimName: Schema.optional(Schema.String),
    resourceClaimTemplateName: Schema.optional(Schema.String),
  });
export const io_k8s_api_scheduling_v1alpha2_PodGroupSchedulingConstraintsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topology: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_scheduling_v1alpha2_TopologyConstraintSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_scheduling_v1alpha2_TopologyConstraintSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
  });
export const io_k8s_api_scheduling_v1alpha2_PodGroupSchedulingPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    basic: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_scheduling_v1alpha2_BasicSchedulingPolicySchema,
      ),
    ),
    gang: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_scheduling_v1alpha2_GangSchedulingPolicySchema,
      ),
    ),
  });
export const io_k8s_api_scheduling_v1alpha2_BasicSchedulingPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const io_k8s_api_scheduling_v1alpha2_GangSchedulingPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minCount: Schema.Number,
  });
export const io_k8s_api_scheduling_v1alpha2_PodGroupStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_ConditionSchema,
        ),
      ),
    ),
    resourceClaimStatuses: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            io_k8s_api_scheduling_v1alpha2_PodGroupResourceClaimStatusSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_scheduling_v1alpha2_PodGroupResourceClaimStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    resourceClaimName: Schema.optional(Schema.String),
  });
export const io_k8s_api_scheduling_v1alpha2_WorkloadSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_scheduling_v1alpha2_WorkloadSpecSchema,
    ),
  });
export const io_k8s_api_scheduling_v1alpha2_WorkloadSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controllerRef: Schema.optional(
      Schema.suspend(
        () => io_k8s_api_scheduling_v1alpha2_TypedLocalObjectReferenceSchema,
      ),
    ),
    podGroupTemplates: Schema.Array(
      Schema.suspend(
        () => io_k8s_api_scheduling_v1alpha2_PodGroupTemplateSchema,
      ),
    ),
  });
export const io_k8s_api_scheduling_v1alpha2_TypedLocalObjectReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiGroup: Schema.optional(Schema.String),
    kind: Schema.String,
    name: Schema.String,
  });
export const io_k8s_api_scheduling_v1alpha2_PodGroupTemplateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disruptionMode: Schema.optional(Schema.String),
    name: Schema.String,
    priority: Schema.optional(Schema.Number),
    priorityClassName: Schema.optional(Schema.String),
    resourceClaims: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_scheduling_v1alpha2_PodGroupResourceClaimSchema,
        ),
      ),
    ),
    schedulingConstraints: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_scheduling_v1alpha2_PodGroupSchedulingConstraintsSchema,
      ),
    ),
    schedulingPolicy: Schema.suspend(
      () => io_k8s_api_scheduling_v1alpha2_PodGroupSchedulingPolicySchema,
    ),
  });
export const io_k8s_api_storage_v1_CSIDriverSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_storage_v1_CSIDriverSpecSchema),
  });
export const io_k8s_api_storage_v1_CSIDriverSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
        Schema.suspend(() => io_k8s_api_storage_v1_TokenRequestSchema),
      ),
    ),
    volumeLifecycleModes: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_storage_v1_TokenRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audience: Schema.String,
    expirationSeconds: Schema.optional(Schema.Number),
  });
export const io_k8s_api_storage_v1_CSINodeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(() => io_k8s_api_storage_v1_CSINodeSpecSchema),
  });
export const io_k8s_api_storage_v1_CSINodeSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    drivers: Schema.Array(
      Schema.suspend(() => io_k8s_api_storage_v1_CSINodeDriverSchema),
    ),
  });
export const io_k8s_api_storage_v1_CSINodeDriverSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocatable: Schema.optional(
      Schema.suspend(() => io_k8s_api_storage_v1_VolumeNodeResourcesSchema),
    ),
    name: Schema.String,
    nodeID: Schema.String,
    topologyKeys: Schema.optional(Schema.Array(Schema.String)),
  });
export const io_k8s_api_storage_v1_VolumeNodeResourcesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
  });
export const io_k8s_api_storage_v1_CSIStorageCapacitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    capacity: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
    kind: Schema.optional(Schema.String),
    maximumVolumeSize: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_api_resource_QuantitySchema),
    ),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    nodeTopology: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorSchema,
      ),
    ),
    storageClassName: Schema.String,
  });
export const io_k8s_api_storage_v1_StorageClassSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowVolumeExpansion: Schema.optional(Schema.Boolean),
    allowedTopologies: Schema.optional(
      Schema.Array(
        Schema.suspend(() => io_k8s_api_core_v1_TopologySelectorTermSchema),
      ),
    ),
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    mountOptions: Schema.optional(Schema.Array(Schema.String)),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    provisioner: Schema.String,
    reclaimPolicy: Schema.optional(Schema.String),
    volumeBindingMode: Schema.optional(Schema.String),
  });
export const io_k8s_api_core_v1_TopologySelectorTermSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchLabelExpressions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_api_core_v1_TopologySelectorLabelRequirementSchema,
        ),
      ),
    ),
  });
export const io_k8s_api_core_v1_TopologySelectorLabelRequirementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    values: Schema.Array(Schema.String),
  });
export const io_k8s_api_storage_v1_VolumeAttachmentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.suspend(
      () => io_k8s_api_storage_v1_VolumeAttachmentSpecSchema,
    ),
    status: Schema.optional(
      Schema.suspend(() => io_k8s_api_storage_v1_VolumeAttachmentStatusSchema),
    ),
  });
export const io_k8s_api_storage_v1_VolumeAttachmentSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attacher: Schema.String,
    nodeName: Schema.String,
    source: Schema.suspend(
      () => io_k8s_api_storage_v1_VolumeAttachmentSourceSchema,
    ),
  });
export const io_k8s_api_storage_v1_VolumeAttachmentSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inlineVolumeSpec: Schema.optional(
      Schema.suspend(() => io_k8s_api_core_v1_PersistentVolumeSpecSchema),
    ),
    persistentVolumeName: Schema.optional(Schema.String),
  });
export const io_k8s_api_storage_v1_VolumeAttachmentStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attachError: Schema.optional(
      Schema.suspend(() => io_k8s_api_storage_v1_VolumeErrorSchema),
    ),
    attached: Schema.Boolean,
    attachmentMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    detachError: Schema.optional(
      Schema.suspend(() => io_k8s_api_storage_v1_VolumeErrorSchema),
    ),
  });
export const io_k8s_api_storage_v1_VolumeErrorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorCode: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    time: Schema.optional(
      Schema.suspend(() => io_k8s_apimachinery_pkg_apis_meta_v1_TimeSchema),
    ),
  });
export const io_k8s_api_storage_v1_VolumeAttributesClassSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    driverName: Schema.String,
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export const io_k8s_api_storage_v1beta1_VolumeAttributesClassSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    driverName: Schema.String,
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export const io_k8s_api_storagemigration_v1beta1_StorageVersionMigrationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.suspend(
        () => io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMetaSchema,
      ),
    ),
    spec: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_storagemigration_v1beta1_StorageVersionMigrationSpecSchema,
      ),
    ),
    status: Schema.optional(
      Schema.suspend(
        () =>
          io_k8s_api_storagemigration_v1beta1_StorageVersionMigrationStatusSchema,
      ),
    ),
  });
export const io_k8s_api_storagemigration_v1beta1_StorageVersionMigrationSpecSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.suspend(
      () => io_k8s_apimachinery_pkg_apis_meta_v1_GroupResourceSchema,
    ),
  });
export const io_k8s_apimachinery_pkg_apis_meta_v1_GroupResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.String,
    resource: Schema.String,
  });
export const io_k8s_api_storagemigration_v1beta1_StorageVersionMigrationStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => io_k8s_apimachinery_pkg_apis_meta_v1_ConditionSchema,
        ),
      ),
    ),
    resourceVersion: Schema.optional(Schema.String),
  });
