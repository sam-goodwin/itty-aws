/**
 * Kubernetes Autoscaling API
 *
 * Generated from the Kubernetes OpenAPI spec.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import { Conflict, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateAutoscalingV1NamespacedHorizontalPodAutoscalerInput =
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
      maxReplicas: Schema.Number,
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
      targetCPUUtilizationPercentage: Schema.optional(Schema.Number),
    }),
    status: Schema.optional(
      Schema.Struct({
        currentCPUUtilizationPercentage: Schema.optional(Schema.Number),
        currentReplicas: Schema.Number,
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers",
    }),
  );
export type CreateAutoscalingV1NamespacedHorizontalPodAutoscalerInput =
  typeof CreateAutoscalingV1NamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const CreateAutoscalingV1NamespacedHorizontalPodAutoscalerOutput =
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
      maxReplicas: Schema.Number,
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
      targetCPUUtilizationPercentage: Schema.optional(Schema.Number),
    }),
    status: Schema.optional(
      Schema.Struct({
        currentCPUUtilizationPercentage: Schema.optional(Schema.Number),
        currentReplicas: Schema.Number,
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  });
export type CreateAutoscalingV1NamespacedHorizontalPodAutoscalerOutput =
  typeof CreateAutoscalingV1NamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * create a HorizontalPodAutoscaler
 *
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createAutoscalingV1NamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateAutoscalingV1NamespacedHorizontalPodAutoscalerInput,
    outputSchema: CreateAutoscalingV1NamespacedHorizontalPodAutoscalerOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateAutoscalingV2NamespacedHorizontalPodAutoscalerInput =
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
      behavior: Schema.optional(
        Schema.Struct({
          scaleDown: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
          scaleUp: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      maxReplicas: Schema.Number,
      metrics: Schema.optional(
        Schema.Array(
          Schema.Struct({
            containerResource: Schema.optional(
              Schema.Struct({
                container: Schema.String,
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            external: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            object: Schema.optional(
              Schema.Struct({
                describedObject: Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  kind: Schema.String,
                  name: Schema.String,
                }),
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            pods: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            resource: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            type: Schema.String,
          }),
        ),
      ),
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        currentMetrics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              containerResource: Schema.optional(
                Schema.Struct({
                  container: Schema.String,
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              external: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              object: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  describedObject: Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              pods: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              resource: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              type: Schema.String,
            }),
          ),
        ),
        currentReplicas: Schema.optional(Schema.Number),
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers",
    }),
  );
export type CreateAutoscalingV2NamespacedHorizontalPodAutoscalerInput =
  typeof CreateAutoscalingV2NamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const CreateAutoscalingV2NamespacedHorizontalPodAutoscalerOutput =
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
      behavior: Schema.optional(
        Schema.Struct({
          scaleDown: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
          scaleUp: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      maxReplicas: Schema.Number,
      metrics: Schema.optional(
        Schema.Array(
          Schema.Struct({
            containerResource: Schema.optional(
              Schema.Struct({
                container: Schema.String,
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            external: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            object: Schema.optional(
              Schema.Struct({
                describedObject: Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  kind: Schema.String,
                  name: Schema.String,
                }),
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            pods: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            resource: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            type: Schema.String,
          }),
        ),
      ),
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        currentMetrics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              containerResource: Schema.optional(
                Schema.Struct({
                  container: Schema.String,
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              external: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              object: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  describedObject: Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              pods: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              resource: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              type: Schema.String,
            }),
          ),
        ),
        currentReplicas: Schema.optional(Schema.Number),
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  });
export type CreateAutoscalingV2NamespacedHorizontalPodAutoscalerOutput =
  typeof CreateAutoscalingV2NamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * create a HorizontalPodAutoscaler
 *
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createAutoscalingV2NamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateAutoscalingV2NamespacedHorizontalPodAutoscalerInput,
    outputSchema: CreateAutoscalingV2NamespacedHorizontalPodAutoscalerOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerInput =
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
      path: "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers",
    }),
  );
export type DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerInput =
  typeof DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerOutput =
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
export type DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerOutput =
  typeof DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * delete collection of HorizontalPodAutoscaler
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
export const deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerInput,
    outputSchema:
      DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerOutput,
  }));
// Input Schema
export const DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerInput =
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
      path: "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}",
    }),
  );
export type DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerInput =
  typeof DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerOutput =
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
export type DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerOutput =
  typeof DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * delete a HorizontalPodAutoscaler
 *
 * @param name - name of the HorizontalPodAutoscaler
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteAutoscalingV1NamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerInput,
    outputSchema: DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscalerInput =
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
      path: "/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers",
    }),
  );
export type DeleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscalerInput =
  typeof DeleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const DeleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscalerOutput =
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
export type DeleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscalerOutput =
  typeof DeleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * delete collection of HorizontalPodAutoscaler
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
export const deleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      DeleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscalerInput,
    outputSchema:
      DeleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscalerOutput,
  }));
// Input Schema
export const DeleteAutoscalingV2NamespacedHorizontalPodAutoscalerInput =
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
      path: "/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}",
    }),
  );
export type DeleteAutoscalingV2NamespacedHorizontalPodAutoscalerInput =
  typeof DeleteAutoscalingV2NamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const DeleteAutoscalingV2NamespacedHorizontalPodAutoscalerOutput =
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
export type DeleteAutoscalingV2NamespacedHorizontalPodAutoscalerOutput =
  typeof DeleteAutoscalingV2NamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * delete a HorizontalPodAutoscaler
 *
 * @param name - name of the HorizontalPodAutoscaler
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteAutoscalingV2NamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteAutoscalingV2NamespacedHorizontalPodAutoscalerInput,
    outputSchema: DeleteAutoscalingV2NamespacedHorizontalPodAutoscalerOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const GetAutoscalingAPIGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/autoscaling/" }),
  );
export type GetAutoscalingAPIGroupInput =
  typeof GetAutoscalingAPIGroupInput.Type;

// Output Schema
export const GetAutoscalingAPIGroupOutput =
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
export type GetAutoscalingAPIGroupOutput =
  typeof GetAutoscalingAPIGroupOutput.Type;

// The operation
/**
 * get information of a group
 */
export const getAutoscalingAPIGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetAutoscalingAPIGroupInput,
    outputSchema: GetAutoscalingAPIGroupOutput,
  }),
);
// Input Schema
export const GetAutoscalingV1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/autoscaling/v1/" }),
  );
export type GetAutoscalingV1APIResourcesInput =
  typeof GetAutoscalingV1APIResourcesInput.Type;

// Output Schema
export const GetAutoscalingV1APIResourcesOutput =
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
export type GetAutoscalingV1APIResourcesOutput =
  typeof GetAutoscalingV1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getAutoscalingV1APIResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetAutoscalingV1APIResourcesInput,
    outputSchema: GetAutoscalingV1APIResourcesOutput,
  }));
// Input Schema
export const GetAutoscalingV2APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/autoscaling/v2/" }),
  );
export type GetAutoscalingV2APIResourcesInput =
  typeof GetAutoscalingV2APIResourcesInput.Type;

// Output Schema
export const GetAutoscalingV2APIResourcesOutput =
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
export type GetAutoscalingV2APIResourcesOutput =
  typeof GetAutoscalingV2APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getAutoscalingV2APIResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetAutoscalingV2APIResourcesInput,
    outputSchema: GetAutoscalingV2APIResourcesOutput,
  }));
// Input Schema
export const ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesInput =
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
      path: "/apis/autoscaling/v1/horizontalpodautoscalers",
    }),
  );
export type ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesInput =
  typeof ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesInput.Type;

// Output Schema
export const ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesOutput =
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
          maxReplicas: Schema.Number,
          minReplicas: Schema.optional(Schema.Number),
          scaleTargetRef: Schema.Struct({
            apiVersion: Schema.optional(Schema.String),
            kind: Schema.String,
            name: Schema.String,
          }),
          targetCPUUtilizationPercentage: Schema.optional(Schema.Number),
        }),
        status: Schema.optional(
          Schema.Struct({
            currentCPUUtilizationPercentage: Schema.optional(Schema.Number),
            currentReplicas: Schema.Number,
            desiredReplicas: Schema.Number,
            lastScaleTime: Schema.optional(Schema.String),
            observedGeneration: Schema.optional(Schema.Number),
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
export type ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesOutput =
  typeof ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind HorizontalPodAutoscaler
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
export const listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesInput,
    outputSchema:
      ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesOutput,
  }));
// Input Schema
export const ListAutoscalingV1NamespacedHorizontalPodAutoscalerInput =
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
      path: "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers",
    }),
  );
export type ListAutoscalingV1NamespacedHorizontalPodAutoscalerInput =
  typeof ListAutoscalingV1NamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const ListAutoscalingV1NamespacedHorizontalPodAutoscalerOutput =
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
          maxReplicas: Schema.Number,
          minReplicas: Schema.optional(Schema.Number),
          scaleTargetRef: Schema.Struct({
            apiVersion: Schema.optional(Schema.String),
            kind: Schema.String,
            name: Schema.String,
          }),
          targetCPUUtilizationPercentage: Schema.optional(Schema.Number),
        }),
        status: Schema.optional(
          Schema.Struct({
            currentCPUUtilizationPercentage: Schema.optional(Schema.Number),
            currentReplicas: Schema.Number,
            desiredReplicas: Schema.Number,
            lastScaleTime: Schema.optional(Schema.String),
            observedGeneration: Schema.optional(Schema.Number),
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
export type ListAutoscalingV1NamespacedHorizontalPodAutoscalerOutput =
  typeof ListAutoscalingV1NamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * list or watch objects of kind HorizontalPodAutoscaler
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
export const listAutoscalingV1NamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAutoscalingV1NamespacedHorizontalPodAutoscalerInput,
    outputSchema: ListAutoscalingV1NamespacedHorizontalPodAutoscalerOutput,
  }));
// Input Schema
export const ListAutoscalingV2HorizontalPodAutoscalerForAllNamespacesInput =
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
      path: "/apis/autoscaling/v2/horizontalpodautoscalers",
    }),
  );
export type ListAutoscalingV2HorizontalPodAutoscalerForAllNamespacesInput =
  typeof ListAutoscalingV2HorizontalPodAutoscalerForAllNamespacesInput.Type;

// Output Schema
export const ListAutoscalingV2HorizontalPodAutoscalerForAllNamespacesOutput =
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
          behavior: Schema.optional(
            Schema.Struct({
              scaleDown: Schema.optional(
                Schema.Struct({
                  policies: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        periodSeconds: Schema.Number,
                        type: Schema.String,
                        value: Schema.Number,
                      }),
                    ),
                  ),
                  selectPolicy: Schema.optional(Schema.String),
                  stabilizationWindowSeconds: Schema.optional(Schema.Number),
                  tolerance: Schema.optional(Schema.String),
                }),
              ),
              scaleUp: Schema.optional(
                Schema.Struct({
                  policies: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        periodSeconds: Schema.Number,
                        type: Schema.String,
                        value: Schema.Number,
                      }),
                    ),
                  ),
                  selectPolicy: Schema.optional(Schema.String),
                  stabilizationWindowSeconds: Schema.optional(Schema.Number),
                  tolerance: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          maxReplicas: Schema.Number,
          metrics: Schema.optional(
            Schema.Array(
              Schema.Struct({
                containerResource: Schema.optional(
                  Schema.Struct({
                    container: Schema.String,
                    name: Schema.String,
                    target: Schema.Struct({
                      averageUtilization: Schema.optional(Schema.Number),
                      averageValue: Schema.optional(Schema.String),
                      type: Schema.String,
                      value: Schema.optional(Schema.String),
                    }),
                  }),
                ),
                external: Schema.optional(
                  Schema.Struct({
                    metric: Schema.Struct({
                      name: Schema.String,
                      selector: Schema.optional(
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
                          matchLabels: Schema.optional(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                        }),
                      ),
                    }),
                    target: Schema.Struct({
                      averageUtilization: Schema.optional(Schema.Number),
                      averageValue: Schema.optional(Schema.String),
                      type: Schema.String,
                      value: Schema.optional(Schema.String),
                    }),
                  }),
                ),
                object: Schema.optional(
                  Schema.Struct({
                    describedObject: Schema.Struct({
                      apiVersion: Schema.optional(Schema.String),
                      kind: Schema.String,
                      name: Schema.String,
                    }),
                    metric: Schema.Struct({
                      name: Schema.String,
                      selector: Schema.optional(
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
                          matchLabels: Schema.optional(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                        }),
                      ),
                    }),
                    target: Schema.Struct({
                      averageUtilization: Schema.optional(Schema.Number),
                      averageValue: Schema.optional(Schema.String),
                      type: Schema.String,
                      value: Schema.optional(Schema.String),
                    }),
                  }),
                ),
                pods: Schema.optional(
                  Schema.Struct({
                    metric: Schema.Struct({
                      name: Schema.String,
                      selector: Schema.optional(
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
                          matchLabels: Schema.optional(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                        }),
                      ),
                    }),
                    target: Schema.Struct({
                      averageUtilization: Schema.optional(Schema.Number),
                      averageValue: Schema.optional(Schema.String),
                      type: Schema.String,
                      value: Schema.optional(Schema.String),
                    }),
                  }),
                ),
                resource: Schema.optional(
                  Schema.Struct({
                    name: Schema.String,
                    target: Schema.Struct({
                      averageUtilization: Schema.optional(Schema.Number),
                      averageValue: Schema.optional(Schema.String),
                      type: Schema.String,
                      value: Schema.optional(Schema.String),
                    }),
                  }),
                ),
                type: Schema.String,
              }),
            ),
          ),
          minReplicas: Schema.optional(Schema.Number),
          scaleTargetRef: Schema.Struct({
            apiVersion: Schema.optional(Schema.String),
            kind: Schema.String,
            name: Schema.String,
          }),
        }),
        status: Schema.optional(
          Schema.Struct({
            conditions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  lastTransitionTime: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  reason: Schema.optional(Schema.String),
                  status: Schema.String,
                  type: Schema.String,
                }),
              ),
            ),
            currentMetrics: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  containerResource: Schema.optional(
                    Schema.Struct({
                      container: Schema.String,
                      current: Schema.Struct({
                        averageUtilization: Schema.optional(Schema.Number),
                        averageValue: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                      }),
                      name: Schema.String,
                    }),
                  ),
                  external: Schema.optional(
                    Schema.Struct({
                      current: Schema.Struct({
                        averageUtilization: Schema.optional(Schema.Number),
                        averageValue: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                      }),
                      metric: Schema.Struct({
                        name: Schema.String,
                        selector: Schema.optional(
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
                            matchLabels: Schema.optional(
                              Schema.Record(Schema.String, Schema.String),
                            ),
                          }),
                        ),
                      }),
                    }),
                  ),
                  object: Schema.optional(
                    Schema.Struct({
                      current: Schema.Struct({
                        averageUtilization: Schema.optional(Schema.Number),
                        averageValue: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                      }),
                      describedObject: Schema.Struct({
                        apiVersion: Schema.optional(Schema.String),
                        kind: Schema.String,
                        name: Schema.String,
                      }),
                      metric: Schema.Struct({
                        name: Schema.String,
                        selector: Schema.optional(
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
                            matchLabels: Schema.optional(
                              Schema.Record(Schema.String, Schema.String),
                            ),
                          }),
                        ),
                      }),
                    }),
                  ),
                  pods: Schema.optional(
                    Schema.Struct({
                      current: Schema.Struct({
                        averageUtilization: Schema.optional(Schema.Number),
                        averageValue: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                      }),
                      metric: Schema.Struct({
                        name: Schema.String,
                        selector: Schema.optional(
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
                            matchLabels: Schema.optional(
                              Schema.Record(Schema.String, Schema.String),
                            ),
                          }),
                        ),
                      }),
                    }),
                  ),
                  resource: Schema.optional(
                    Schema.Struct({
                      current: Schema.Struct({
                        averageUtilization: Schema.optional(Schema.Number),
                        averageValue: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                      }),
                      name: Schema.String,
                    }),
                  ),
                  type: Schema.String,
                }),
              ),
            ),
            currentReplicas: Schema.optional(Schema.Number),
            desiredReplicas: Schema.Number,
            lastScaleTime: Schema.optional(Schema.String),
            observedGeneration: Schema.optional(Schema.Number),
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
export type ListAutoscalingV2HorizontalPodAutoscalerForAllNamespacesOutput =
  typeof ListAutoscalingV2HorizontalPodAutoscalerForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind HorizontalPodAutoscaler
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
export const listAutoscalingV2HorizontalPodAutoscalerForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAutoscalingV2HorizontalPodAutoscalerForAllNamespacesInput,
    outputSchema:
      ListAutoscalingV2HorizontalPodAutoscalerForAllNamespacesOutput,
  }));
// Input Schema
export const ListAutoscalingV2NamespacedHorizontalPodAutoscalerInput =
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
      path: "/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers",
    }),
  );
export type ListAutoscalingV2NamespacedHorizontalPodAutoscalerInput =
  typeof ListAutoscalingV2NamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const ListAutoscalingV2NamespacedHorizontalPodAutoscalerOutput =
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
          behavior: Schema.optional(
            Schema.Struct({
              scaleDown: Schema.optional(
                Schema.Struct({
                  policies: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        periodSeconds: Schema.Number,
                        type: Schema.String,
                        value: Schema.Number,
                      }),
                    ),
                  ),
                  selectPolicy: Schema.optional(Schema.String),
                  stabilizationWindowSeconds: Schema.optional(Schema.Number),
                  tolerance: Schema.optional(Schema.String),
                }),
              ),
              scaleUp: Schema.optional(
                Schema.Struct({
                  policies: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        periodSeconds: Schema.Number,
                        type: Schema.String,
                        value: Schema.Number,
                      }),
                    ),
                  ),
                  selectPolicy: Schema.optional(Schema.String),
                  stabilizationWindowSeconds: Schema.optional(Schema.Number),
                  tolerance: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          maxReplicas: Schema.Number,
          metrics: Schema.optional(
            Schema.Array(
              Schema.Struct({
                containerResource: Schema.optional(
                  Schema.Struct({
                    container: Schema.String,
                    name: Schema.String,
                    target: Schema.Struct({
                      averageUtilization: Schema.optional(Schema.Number),
                      averageValue: Schema.optional(Schema.String),
                      type: Schema.String,
                      value: Schema.optional(Schema.String),
                    }),
                  }),
                ),
                external: Schema.optional(
                  Schema.Struct({
                    metric: Schema.Struct({
                      name: Schema.String,
                      selector: Schema.optional(
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
                          matchLabels: Schema.optional(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                        }),
                      ),
                    }),
                    target: Schema.Struct({
                      averageUtilization: Schema.optional(Schema.Number),
                      averageValue: Schema.optional(Schema.String),
                      type: Schema.String,
                      value: Schema.optional(Schema.String),
                    }),
                  }),
                ),
                object: Schema.optional(
                  Schema.Struct({
                    describedObject: Schema.Struct({
                      apiVersion: Schema.optional(Schema.String),
                      kind: Schema.String,
                      name: Schema.String,
                    }),
                    metric: Schema.Struct({
                      name: Schema.String,
                      selector: Schema.optional(
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
                          matchLabels: Schema.optional(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                        }),
                      ),
                    }),
                    target: Schema.Struct({
                      averageUtilization: Schema.optional(Schema.Number),
                      averageValue: Schema.optional(Schema.String),
                      type: Schema.String,
                      value: Schema.optional(Schema.String),
                    }),
                  }),
                ),
                pods: Schema.optional(
                  Schema.Struct({
                    metric: Schema.Struct({
                      name: Schema.String,
                      selector: Schema.optional(
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
                          matchLabels: Schema.optional(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                        }),
                      ),
                    }),
                    target: Schema.Struct({
                      averageUtilization: Schema.optional(Schema.Number),
                      averageValue: Schema.optional(Schema.String),
                      type: Schema.String,
                      value: Schema.optional(Schema.String),
                    }),
                  }),
                ),
                resource: Schema.optional(
                  Schema.Struct({
                    name: Schema.String,
                    target: Schema.Struct({
                      averageUtilization: Schema.optional(Schema.Number),
                      averageValue: Schema.optional(Schema.String),
                      type: Schema.String,
                      value: Schema.optional(Schema.String),
                    }),
                  }),
                ),
                type: Schema.String,
              }),
            ),
          ),
          minReplicas: Schema.optional(Schema.Number),
          scaleTargetRef: Schema.Struct({
            apiVersion: Schema.optional(Schema.String),
            kind: Schema.String,
            name: Schema.String,
          }),
        }),
        status: Schema.optional(
          Schema.Struct({
            conditions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  lastTransitionTime: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  reason: Schema.optional(Schema.String),
                  status: Schema.String,
                  type: Schema.String,
                }),
              ),
            ),
            currentMetrics: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  containerResource: Schema.optional(
                    Schema.Struct({
                      container: Schema.String,
                      current: Schema.Struct({
                        averageUtilization: Schema.optional(Schema.Number),
                        averageValue: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                      }),
                      name: Schema.String,
                    }),
                  ),
                  external: Schema.optional(
                    Schema.Struct({
                      current: Schema.Struct({
                        averageUtilization: Schema.optional(Schema.Number),
                        averageValue: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                      }),
                      metric: Schema.Struct({
                        name: Schema.String,
                        selector: Schema.optional(
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
                            matchLabels: Schema.optional(
                              Schema.Record(Schema.String, Schema.String),
                            ),
                          }),
                        ),
                      }),
                    }),
                  ),
                  object: Schema.optional(
                    Schema.Struct({
                      current: Schema.Struct({
                        averageUtilization: Schema.optional(Schema.Number),
                        averageValue: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                      }),
                      describedObject: Schema.Struct({
                        apiVersion: Schema.optional(Schema.String),
                        kind: Schema.String,
                        name: Schema.String,
                      }),
                      metric: Schema.Struct({
                        name: Schema.String,
                        selector: Schema.optional(
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
                            matchLabels: Schema.optional(
                              Schema.Record(Schema.String, Schema.String),
                            ),
                          }),
                        ),
                      }),
                    }),
                  ),
                  pods: Schema.optional(
                    Schema.Struct({
                      current: Schema.Struct({
                        averageUtilization: Schema.optional(Schema.Number),
                        averageValue: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                      }),
                      metric: Schema.Struct({
                        name: Schema.String,
                        selector: Schema.optional(
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
                            matchLabels: Schema.optional(
                              Schema.Record(Schema.String, Schema.String),
                            ),
                          }),
                        ),
                      }),
                    }),
                  ),
                  resource: Schema.optional(
                    Schema.Struct({
                      current: Schema.Struct({
                        averageUtilization: Schema.optional(Schema.Number),
                        averageValue: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                      }),
                      name: Schema.String,
                    }),
                  ),
                  type: Schema.String,
                }),
              ),
            ),
            currentReplicas: Schema.optional(Schema.Number),
            desiredReplicas: Schema.Number,
            lastScaleTime: Schema.optional(Schema.String),
            observedGeneration: Schema.optional(Schema.Number),
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
export type ListAutoscalingV2NamespacedHorizontalPodAutoscalerOutput =
  typeof ListAutoscalingV2NamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * list or watch objects of kind HorizontalPodAutoscaler
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
export const listAutoscalingV2NamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListAutoscalingV2NamespacedHorizontalPodAutoscalerInput,
    outputSchema: ListAutoscalingV2NamespacedHorizontalPodAutoscalerOutput,
  }));
// Input Schema
export const PatchAutoscalingV1NamespacedHorizontalPodAutoscalerInput =
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
      path: "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}",
    }),
  );
export type PatchAutoscalingV1NamespacedHorizontalPodAutoscalerInput =
  typeof PatchAutoscalingV1NamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const PatchAutoscalingV1NamespacedHorizontalPodAutoscalerOutput =
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
      maxReplicas: Schema.Number,
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
      targetCPUUtilizationPercentage: Schema.optional(Schema.Number),
    }),
    status: Schema.optional(
      Schema.Struct({
        currentCPUUtilizationPercentage: Schema.optional(Schema.Number),
        currentReplicas: Schema.Number,
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  });
export type PatchAutoscalingV1NamespacedHorizontalPodAutoscalerOutput =
  typeof PatchAutoscalingV1NamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * partially update the specified HorizontalPodAutoscaler
 *
 * @param name - name of the HorizontalPodAutoscaler
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchAutoscalingV1NamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAutoscalingV1NamespacedHorizontalPodAutoscalerInput,
    outputSchema: PatchAutoscalingV1NamespacedHorizontalPodAutoscalerOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusInput =
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
      path: "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status",
    }),
  );
export type PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusInput =
  typeof PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusInput.Type;

// Output Schema
export const PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusOutput =
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
      maxReplicas: Schema.Number,
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
      targetCPUUtilizationPercentage: Schema.optional(Schema.Number),
    }),
    status: Schema.optional(
      Schema.Struct({
        currentCPUUtilizationPercentage: Schema.optional(Schema.Number),
        currentReplicas: Schema.Number,
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  });
export type PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusOutput =
  typeof PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusOutput.Type;

// The operation
/**
 * partially update status of the specified HorizontalPodAutoscaler
 *
 * @param name - name of the HorizontalPodAutoscaler
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusInput,
    outputSchema:
      PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchAutoscalingV2NamespacedHorizontalPodAutoscalerInput =
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
      path: "/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}",
    }),
  );
export type PatchAutoscalingV2NamespacedHorizontalPodAutoscalerInput =
  typeof PatchAutoscalingV2NamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const PatchAutoscalingV2NamespacedHorizontalPodAutoscalerOutput =
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
      behavior: Schema.optional(
        Schema.Struct({
          scaleDown: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
          scaleUp: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      maxReplicas: Schema.Number,
      metrics: Schema.optional(
        Schema.Array(
          Schema.Struct({
            containerResource: Schema.optional(
              Schema.Struct({
                container: Schema.String,
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            external: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            object: Schema.optional(
              Schema.Struct({
                describedObject: Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  kind: Schema.String,
                  name: Schema.String,
                }),
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            pods: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            resource: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            type: Schema.String,
          }),
        ),
      ),
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        currentMetrics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              containerResource: Schema.optional(
                Schema.Struct({
                  container: Schema.String,
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              external: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              object: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  describedObject: Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              pods: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              resource: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              type: Schema.String,
            }),
          ),
        ),
        currentReplicas: Schema.optional(Schema.Number),
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  });
export type PatchAutoscalingV2NamespacedHorizontalPodAutoscalerOutput =
  typeof PatchAutoscalingV2NamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * partially update the specified HorizontalPodAutoscaler
 *
 * @param name - name of the HorizontalPodAutoscaler
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchAutoscalingV2NamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAutoscalingV2NamespacedHorizontalPodAutoscalerInput,
    outputSchema: PatchAutoscalingV2NamespacedHorizontalPodAutoscalerOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchAutoscalingV2NamespacedHorizontalPodAutoscalerStatusInput =
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
      path: "/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}/status",
    }),
  );
export type PatchAutoscalingV2NamespacedHorizontalPodAutoscalerStatusInput =
  typeof PatchAutoscalingV2NamespacedHorizontalPodAutoscalerStatusInput.Type;

// Output Schema
export const PatchAutoscalingV2NamespacedHorizontalPodAutoscalerStatusOutput =
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
      behavior: Schema.optional(
        Schema.Struct({
          scaleDown: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
          scaleUp: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      maxReplicas: Schema.Number,
      metrics: Schema.optional(
        Schema.Array(
          Schema.Struct({
            containerResource: Schema.optional(
              Schema.Struct({
                container: Schema.String,
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            external: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            object: Schema.optional(
              Schema.Struct({
                describedObject: Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  kind: Schema.String,
                  name: Schema.String,
                }),
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            pods: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            resource: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            type: Schema.String,
          }),
        ),
      ),
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        currentMetrics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              containerResource: Schema.optional(
                Schema.Struct({
                  container: Schema.String,
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              external: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              object: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  describedObject: Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              pods: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              resource: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              type: Schema.String,
            }),
          ),
        ),
        currentReplicas: Schema.optional(Schema.Number),
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  });
export type PatchAutoscalingV2NamespacedHorizontalPodAutoscalerStatusOutput =
  typeof PatchAutoscalingV2NamespacedHorizontalPodAutoscalerStatusOutput.Type;

// The operation
/**
 * partially update status of the specified HorizontalPodAutoscaler
 *
 * @param name - name of the HorizontalPodAutoscaler
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchAutoscalingV2NamespacedHorizontalPodAutoscalerStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchAutoscalingV2NamespacedHorizontalPodAutoscalerStatusInput,
    outputSchema:
      PatchAutoscalingV2NamespacedHorizontalPodAutoscalerStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReadAutoscalingV1NamespacedHorizontalPodAutoscalerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}",
    }),
  );
export type ReadAutoscalingV1NamespacedHorizontalPodAutoscalerInput =
  typeof ReadAutoscalingV1NamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const ReadAutoscalingV1NamespacedHorizontalPodAutoscalerOutput =
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
      maxReplicas: Schema.Number,
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
      targetCPUUtilizationPercentage: Schema.optional(Schema.Number),
    }),
    status: Schema.optional(
      Schema.Struct({
        currentCPUUtilizationPercentage: Schema.optional(Schema.Number),
        currentReplicas: Schema.Number,
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  });
export type ReadAutoscalingV1NamespacedHorizontalPodAutoscalerOutput =
  typeof ReadAutoscalingV1NamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * read the specified HorizontalPodAutoscaler
 *
 * @param name - name of the HorizontalPodAutoscaler
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readAutoscalingV1NamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAutoscalingV1NamespacedHorizontalPodAutoscalerInput,
    outputSchema: ReadAutoscalingV1NamespacedHorizontalPodAutoscalerOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status",
    }),
  );
export type ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusInput =
  typeof ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusInput.Type;

// Output Schema
export const ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusOutput =
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
      maxReplicas: Schema.Number,
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
      targetCPUUtilizationPercentage: Schema.optional(Schema.Number),
    }),
    status: Schema.optional(
      Schema.Struct({
        currentCPUUtilizationPercentage: Schema.optional(Schema.Number),
        currentReplicas: Schema.Number,
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  });
export type ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusOutput =
  typeof ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusOutput.Type;

// The operation
/**
 * read status of the specified HorizontalPodAutoscaler
 *
 * @param name - name of the HorizontalPodAutoscaler
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusInput,
    outputSchema:
      ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadAutoscalingV2NamespacedHorizontalPodAutoscalerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}",
    }),
  );
export type ReadAutoscalingV2NamespacedHorizontalPodAutoscalerInput =
  typeof ReadAutoscalingV2NamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const ReadAutoscalingV2NamespacedHorizontalPodAutoscalerOutput =
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
      behavior: Schema.optional(
        Schema.Struct({
          scaleDown: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
          scaleUp: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      maxReplicas: Schema.Number,
      metrics: Schema.optional(
        Schema.Array(
          Schema.Struct({
            containerResource: Schema.optional(
              Schema.Struct({
                container: Schema.String,
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            external: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            object: Schema.optional(
              Schema.Struct({
                describedObject: Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  kind: Schema.String,
                  name: Schema.String,
                }),
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            pods: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            resource: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            type: Schema.String,
          }),
        ),
      ),
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        currentMetrics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              containerResource: Schema.optional(
                Schema.Struct({
                  container: Schema.String,
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              external: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              object: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  describedObject: Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              pods: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              resource: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              type: Schema.String,
            }),
          ),
        ),
        currentReplicas: Schema.optional(Schema.Number),
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  });
export type ReadAutoscalingV2NamespacedHorizontalPodAutoscalerOutput =
  typeof ReadAutoscalingV2NamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * read the specified HorizontalPodAutoscaler
 *
 * @param name - name of the HorizontalPodAutoscaler
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readAutoscalingV2NamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAutoscalingV2NamespacedHorizontalPodAutoscalerInput,
    outputSchema: ReadAutoscalingV2NamespacedHorizontalPodAutoscalerOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadAutoscalingV2NamespacedHorizontalPodAutoscalerStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}/status",
    }),
  );
export type ReadAutoscalingV2NamespacedHorizontalPodAutoscalerStatusInput =
  typeof ReadAutoscalingV2NamespacedHorizontalPodAutoscalerStatusInput.Type;

// Output Schema
export const ReadAutoscalingV2NamespacedHorizontalPodAutoscalerStatusOutput =
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
      behavior: Schema.optional(
        Schema.Struct({
          scaleDown: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
          scaleUp: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      maxReplicas: Schema.Number,
      metrics: Schema.optional(
        Schema.Array(
          Schema.Struct({
            containerResource: Schema.optional(
              Schema.Struct({
                container: Schema.String,
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            external: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            object: Schema.optional(
              Schema.Struct({
                describedObject: Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  kind: Schema.String,
                  name: Schema.String,
                }),
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            pods: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            resource: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            type: Schema.String,
          }),
        ),
      ),
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        currentMetrics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              containerResource: Schema.optional(
                Schema.Struct({
                  container: Schema.String,
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              external: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              object: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  describedObject: Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              pods: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              resource: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              type: Schema.String,
            }),
          ),
        ),
        currentReplicas: Schema.optional(Schema.Number),
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  });
export type ReadAutoscalingV2NamespacedHorizontalPodAutoscalerStatusOutput =
  typeof ReadAutoscalingV2NamespacedHorizontalPodAutoscalerStatusOutput.Type;

// The operation
/**
 * read status of the specified HorizontalPodAutoscaler
 *
 * @param name - name of the HorizontalPodAutoscaler
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readAutoscalingV2NamespacedHorizontalPodAutoscalerStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadAutoscalingV2NamespacedHorizontalPodAutoscalerStatusInput,
    outputSchema:
      ReadAutoscalingV2NamespacedHorizontalPodAutoscalerStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerInput =
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
      maxReplicas: Schema.Number,
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
      targetCPUUtilizationPercentage: Schema.optional(Schema.Number),
    }),
    status: Schema.optional(
      Schema.Struct({
        currentCPUUtilizationPercentage: Schema.optional(Schema.Number),
        currentReplicas: Schema.Number,
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}",
    }),
  );
export type ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerInput =
  typeof ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerOutput =
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
      maxReplicas: Schema.Number,
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
      targetCPUUtilizationPercentage: Schema.optional(Schema.Number),
    }),
    status: Schema.optional(
      Schema.Struct({
        currentCPUUtilizationPercentage: Schema.optional(Schema.Number),
        currentReplicas: Schema.Number,
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  });
export type ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerOutput =
  typeof ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * replace the specified HorizontalPodAutoscaler
 *
 * @param name - name of the HorizontalPodAutoscaler
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAutoscalingV1NamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerInput,
    outputSchema: ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusInput =
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
      maxReplicas: Schema.Number,
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
      targetCPUUtilizationPercentage: Schema.optional(Schema.Number),
    }),
    status: Schema.optional(
      Schema.Struct({
        currentCPUUtilizationPercentage: Schema.optional(Schema.Number),
        currentReplicas: Schema.Number,
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status",
    }),
  );
export type ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusInput =
  typeof ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusInput.Type;

// Output Schema
export const ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusOutput =
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
      maxReplicas: Schema.Number,
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
      targetCPUUtilizationPercentage: Schema.optional(Schema.Number),
    }),
    status: Schema.optional(
      Schema.Struct({
        currentCPUUtilizationPercentage: Schema.optional(Schema.Number),
        currentReplicas: Schema.Number,
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  });
export type ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusOutput =
  typeof ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusOutput.Type;

// The operation
/**
 * replace status of the specified HorizontalPodAutoscaler
 *
 * @param name - name of the HorizontalPodAutoscaler
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusInput,
    outputSchema:
      ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerInput =
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
      behavior: Schema.optional(
        Schema.Struct({
          scaleDown: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
          scaleUp: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      maxReplicas: Schema.Number,
      metrics: Schema.optional(
        Schema.Array(
          Schema.Struct({
            containerResource: Schema.optional(
              Schema.Struct({
                container: Schema.String,
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            external: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            object: Schema.optional(
              Schema.Struct({
                describedObject: Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  kind: Schema.String,
                  name: Schema.String,
                }),
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            pods: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            resource: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            type: Schema.String,
          }),
        ),
      ),
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        currentMetrics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              containerResource: Schema.optional(
                Schema.Struct({
                  container: Schema.String,
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              external: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              object: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  describedObject: Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              pods: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              resource: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              type: Schema.String,
            }),
          ),
        ),
        currentReplicas: Schema.optional(Schema.Number),
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}",
    }),
  );
export type ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerInput =
  typeof ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerOutput =
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
      behavior: Schema.optional(
        Schema.Struct({
          scaleDown: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
          scaleUp: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      maxReplicas: Schema.Number,
      metrics: Schema.optional(
        Schema.Array(
          Schema.Struct({
            containerResource: Schema.optional(
              Schema.Struct({
                container: Schema.String,
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            external: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            object: Schema.optional(
              Schema.Struct({
                describedObject: Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  kind: Schema.String,
                  name: Schema.String,
                }),
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            pods: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            resource: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            type: Schema.String,
          }),
        ),
      ),
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        currentMetrics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              containerResource: Schema.optional(
                Schema.Struct({
                  container: Schema.String,
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              external: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              object: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  describedObject: Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              pods: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              resource: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              type: Schema.String,
            }),
          ),
        ),
        currentReplicas: Schema.optional(Schema.Number),
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  });
export type ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerOutput =
  typeof ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * replace the specified HorizontalPodAutoscaler
 *
 * @param name - name of the HorizontalPodAutoscaler
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAutoscalingV2NamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerInput,
    outputSchema: ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatusInput =
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
      behavior: Schema.optional(
        Schema.Struct({
          scaleDown: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
          scaleUp: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      maxReplicas: Schema.Number,
      metrics: Schema.optional(
        Schema.Array(
          Schema.Struct({
            containerResource: Schema.optional(
              Schema.Struct({
                container: Schema.String,
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            external: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            object: Schema.optional(
              Schema.Struct({
                describedObject: Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  kind: Schema.String,
                  name: Schema.String,
                }),
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            pods: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            resource: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            type: Schema.String,
          }),
        ),
      ),
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        currentMetrics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              containerResource: Schema.optional(
                Schema.Struct({
                  container: Schema.String,
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              external: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              object: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  describedObject: Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              pods: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              resource: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              type: Schema.String,
            }),
          ),
        ),
        currentReplicas: Schema.optional(Schema.Number),
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}/status",
    }),
  );
export type ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatusInput =
  typeof ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatusInput.Type;

// Output Schema
export const ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatusOutput =
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
      behavior: Schema.optional(
        Schema.Struct({
          scaleDown: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
          scaleUp: Schema.optional(
            Schema.Struct({
              policies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    periodSeconds: Schema.Number,
                    type: Schema.String,
                    value: Schema.Number,
                  }),
                ),
              ),
              selectPolicy: Schema.optional(Schema.String),
              stabilizationWindowSeconds: Schema.optional(Schema.Number),
              tolerance: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      maxReplicas: Schema.Number,
      metrics: Schema.optional(
        Schema.Array(
          Schema.Struct({
            containerResource: Schema.optional(
              Schema.Struct({
                container: Schema.String,
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            external: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            object: Schema.optional(
              Schema.Struct({
                describedObject: Schema.Struct({
                  apiVersion: Schema.optional(Schema.String),
                  kind: Schema.String,
                  name: Schema.String,
                }),
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            pods: Schema.optional(
              Schema.Struct({
                metric: Schema.Struct({
                  name: Schema.String,
                  selector: Schema.optional(
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
                      matchLabels: Schema.optional(
                        Schema.Record(Schema.String, Schema.String),
                      ),
                    }),
                  ),
                }),
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            resource: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                target: Schema.Struct({
                  averageUtilization: Schema.optional(Schema.Number),
                  averageValue: Schema.optional(Schema.String),
                  type: Schema.String,
                  value: Schema.optional(Schema.String),
                }),
              }),
            ),
            type: Schema.String,
          }),
        ),
      ),
      minReplicas: Schema.optional(Schema.Number),
      scaleTargetRef: Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        kind: Schema.String,
        name: Schema.String,
      }),
    }),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        currentMetrics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              containerResource: Schema.optional(
                Schema.Struct({
                  container: Schema.String,
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              external: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              object: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  describedObject: Schema.Struct({
                    apiVersion: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              pods: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  metric: Schema.Struct({
                    name: Schema.String,
                    selector: Schema.optional(
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
                        matchLabels: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                  }),
                }),
              ),
              resource: Schema.optional(
                Schema.Struct({
                  current: Schema.Struct({
                    averageUtilization: Schema.optional(Schema.Number),
                    averageValue: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                  name: Schema.String,
                }),
              ),
              type: Schema.String,
            }),
          ),
        ),
        currentReplicas: Schema.optional(Schema.Number),
        desiredReplicas: Schema.Number,
        lastScaleTime: Schema.optional(Schema.String),
        observedGeneration: Schema.optional(Schema.Number),
      }),
    ),
  });
export type ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatusOutput =
  typeof ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatusOutput.Type;

// The operation
/**
 * replace status of the specified HorizontalPodAutoscaler
 *
 * @param name - name of the HorizontalPodAutoscaler
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatusInput,
    outputSchema:
      ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesInput =
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
      path: "/apis/autoscaling/v1/watch/horizontalpodautoscalers",
    }),
  );
export type WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesInput =
  typeof WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesInput.Type;

// Output Schema
export const WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesOutput =
  typeof WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesInput,
    outputSchema:
      WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchAutoscalingV1NamespacedHorizontalPodAutoscalerInput =
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
      path: "/apis/autoscaling/v1/watch/namespaces/{namespace}/horizontalpodautoscalers/{name}",
    }),
  );
export type WatchAutoscalingV1NamespacedHorizontalPodAutoscalerInput =
  typeof WatchAutoscalingV1NamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const WatchAutoscalingV1NamespacedHorizontalPodAutoscalerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchAutoscalingV1NamespacedHorizontalPodAutoscalerOutput =
  typeof WatchAutoscalingV1NamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the HorizontalPodAutoscaler
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
export const watchAutoscalingV1NamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAutoscalingV1NamespacedHorizontalPodAutoscalerInput,
    outputSchema: WatchAutoscalingV1NamespacedHorizontalPodAutoscalerOutput,
  }));
// Input Schema
export const WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListInput =
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
      path: "/apis/autoscaling/v1/watch/namespaces/{namespace}/horizontalpodautoscalers",
    }),
  );
export type WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListInput =
  typeof WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListInput.Type;

// Output Schema
export const WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListOutput =
  typeof WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListOutput.Type;

// The operation
/**
 * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchAutoscalingV1NamespacedHorizontalPodAutoscalerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListInput,
    outputSchema: WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListOutput,
  }));
// Input Schema
export const WatchAutoscalingV2HorizontalPodAutoscalerListForAllNamespacesInput =
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
      path: "/apis/autoscaling/v2/watch/horizontalpodautoscalers",
    }),
  );
export type WatchAutoscalingV2HorizontalPodAutoscalerListForAllNamespacesInput =
  typeof WatchAutoscalingV2HorizontalPodAutoscalerListForAllNamespacesInput.Type;

// Output Schema
export const WatchAutoscalingV2HorizontalPodAutoscalerListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchAutoscalingV2HorizontalPodAutoscalerListForAllNamespacesOutput =
  typeof WatchAutoscalingV2HorizontalPodAutoscalerListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchAutoscalingV2HorizontalPodAutoscalerListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WatchAutoscalingV2HorizontalPodAutoscalerListForAllNamespacesInput,
    outputSchema:
      WatchAutoscalingV2HorizontalPodAutoscalerListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchAutoscalingV2NamespacedHorizontalPodAutoscalerInput =
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
      path: "/apis/autoscaling/v2/watch/namespaces/{namespace}/horizontalpodautoscalers/{name}",
    }),
  );
export type WatchAutoscalingV2NamespacedHorizontalPodAutoscalerInput =
  typeof WatchAutoscalingV2NamespacedHorizontalPodAutoscalerInput.Type;

// Output Schema
export const WatchAutoscalingV2NamespacedHorizontalPodAutoscalerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchAutoscalingV2NamespacedHorizontalPodAutoscalerOutput =
  typeof WatchAutoscalingV2NamespacedHorizontalPodAutoscalerOutput.Type;

// The operation
/**
 * watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the HorizontalPodAutoscaler
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
export const watchAutoscalingV2NamespacedHorizontalPodAutoscaler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAutoscalingV2NamespacedHorizontalPodAutoscalerInput,
    outputSchema: WatchAutoscalingV2NamespacedHorizontalPodAutoscalerOutput,
  }));
// Input Schema
export const WatchAutoscalingV2NamespacedHorizontalPodAutoscalerListInput =
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
      path: "/apis/autoscaling/v2/watch/namespaces/{namespace}/horizontalpodautoscalers",
    }),
  );
export type WatchAutoscalingV2NamespacedHorizontalPodAutoscalerListInput =
  typeof WatchAutoscalingV2NamespacedHorizontalPodAutoscalerListInput.Type;

// Output Schema
export const WatchAutoscalingV2NamespacedHorizontalPodAutoscalerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchAutoscalingV2NamespacedHorizontalPodAutoscalerListOutput =
  typeof WatchAutoscalingV2NamespacedHorizontalPodAutoscalerListOutput.Type;

// The operation
/**
 * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchAutoscalingV2NamespacedHorizontalPodAutoscalerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchAutoscalingV2NamespacedHorizontalPodAutoscalerListInput,
    outputSchema: WatchAutoscalingV2NamespacedHorizontalPodAutoscalerListOutput,
  }));
