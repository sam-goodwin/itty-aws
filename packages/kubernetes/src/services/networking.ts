/**
 * Kubernetes Networking API
 *
 * Generated from the Kubernetes OpenAPI spec.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import { Conflict, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateNetworkingV1IPAddressInput =
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
      parentRef: Schema.Struct({
        group: Schema.optional(Schema.String),
        name: Schema.String,
        namespace: Schema.optional(Schema.String),
        resource: Schema.String,
      }),
    }),
  }).pipe(
    T.Http({ method: "POST", path: "/apis/networking.k8s.io/v1/ipaddresses" }),
  );
export type CreateNetworkingV1IPAddressInput =
  typeof CreateNetworkingV1IPAddressInput.Type;

// Output Schema
export const CreateNetworkingV1IPAddressOutput =
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
      parentRef: Schema.Struct({
        group: Schema.optional(Schema.String),
        name: Schema.String,
        namespace: Schema.optional(Schema.String),
        resource: Schema.String,
      }),
    }),
  });
export type CreateNetworkingV1IPAddressOutput =
  typeof CreateNetworkingV1IPAddressOutput.Type;

// The operation
/**
 * create an IPAddress
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createNetworkingV1IPAddress = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateNetworkingV1IPAddressInput,
    outputSchema: CreateNetworkingV1IPAddressOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const CreateNetworkingV1IngressClassInput =
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
        controller: Schema.optional(Schema.String),
        parameters: Schema.optional(
          Schema.Struct({
            apiGroup: Schema.optional(Schema.String),
            kind: Schema.String,
            name: Schema.String,
            namespace: Schema.optional(Schema.String),
            scope: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/networking.k8s.io/v1/ingressclasses",
    }),
  );
export type CreateNetworkingV1IngressClassInput =
  typeof CreateNetworkingV1IngressClassInput.Type;

// Output Schema
export const CreateNetworkingV1IngressClassOutput =
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
        controller: Schema.optional(Schema.String),
        parameters: Schema.optional(
          Schema.Struct({
            apiGroup: Schema.optional(Schema.String),
            kind: Schema.String,
            name: Schema.String,
            namespace: Schema.optional(Schema.String),
            scope: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  });
export type CreateNetworkingV1IngressClassOutput =
  typeof CreateNetworkingV1IngressClassOutput.Type;

// The operation
/**
 * create an IngressClass
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createNetworkingV1IngressClass =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateNetworkingV1IngressClassInput,
    outputSchema: CreateNetworkingV1IngressClassOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateNetworkingV1NamespacedIngressInput =
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
        defaultBackend: Schema.optional(
          Schema.Struct({
            resource: Schema.optional(
              Schema.Struct({
                apiGroup: Schema.optional(Schema.String),
                kind: Schema.String,
                name: Schema.String,
              }),
            ),
            service: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                port: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    number: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
          }),
        ),
        ingressClassName: Schema.optional(Schema.String),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              host: Schema.optional(Schema.String),
              http: Schema.optional(
                Schema.Struct({
                  paths: Schema.Array(
                    Schema.Struct({
                      backend: Schema.Struct({
                        resource: Schema.optional(
                          Schema.Struct({
                            apiGroup: Schema.optional(Schema.String),
                            kind: Schema.String,
                            name: Schema.String,
                          }),
                        ),
                        service: Schema.optional(
                          Schema.Struct({
                            name: Schema.String,
                            port: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                number: Schema.optional(Schema.Number),
                              }),
                            ),
                          }),
                        ),
                      }),
                      path: Schema.optional(Schema.String),
                      pathType: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        tls: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hosts: Schema.optional(Schema.Array(Schema.String)),
              secretName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        loadBalancer: Schema.optional(
          Schema.Struct({
            ingress: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  hostname: Schema.optional(Schema.String),
                  ip: Schema.optional(Schema.String),
                  ports: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        error: Schema.optional(Schema.String),
                        port: Schema.Number,
                        protocol: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses",
    }),
  );
export type CreateNetworkingV1NamespacedIngressInput =
  typeof CreateNetworkingV1NamespacedIngressInput.Type;

// Output Schema
export const CreateNetworkingV1NamespacedIngressOutput =
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
        defaultBackend: Schema.optional(
          Schema.Struct({
            resource: Schema.optional(
              Schema.Struct({
                apiGroup: Schema.optional(Schema.String),
                kind: Schema.String,
                name: Schema.String,
              }),
            ),
            service: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                port: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    number: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
          }),
        ),
        ingressClassName: Schema.optional(Schema.String),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              host: Schema.optional(Schema.String),
              http: Schema.optional(
                Schema.Struct({
                  paths: Schema.Array(
                    Schema.Struct({
                      backend: Schema.Struct({
                        resource: Schema.optional(
                          Schema.Struct({
                            apiGroup: Schema.optional(Schema.String),
                            kind: Schema.String,
                            name: Schema.String,
                          }),
                        ),
                        service: Schema.optional(
                          Schema.Struct({
                            name: Schema.String,
                            port: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                number: Schema.optional(Schema.Number),
                              }),
                            ),
                          }),
                        ),
                      }),
                      path: Schema.optional(Schema.String),
                      pathType: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        tls: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hosts: Schema.optional(Schema.Array(Schema.String)),
              secretName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        loadBalancer: Schema.optional(
          Schema.Struct({
            ingress: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  hostname: Schema.optional(Schema.String),
                  ip: Schema.optional(Schema.String),
                  ports: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        error: Schema.optional(Schema.String),
                        port: Schema.Number,
                        protocol: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  });
export type CreateNetworkingV1NamespacedIngressOutput =
  typeof CreateNetworkingV1NamespacedIngressOutput.Type;

// The operation
/**
 * create an Ingress
 *
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createNetworkingV1NamespacedIngress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateNetworkingV1NamespacedIngressInput,
    outputSchema: CreateNetworkingV1NamespacedIngressOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateNetworkingV1NamespacedNetworkPolicyInput =
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
        egress: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ports: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    endPort: Schema.optional(Schema.Number),
                    port: Schema.optional(Schema.String),
                    protocol: Schema.optional(Schema.String),
                  }),
                ),
              ),
              to: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipBlock: Schema.optional(
                      Schema.Struct({
                        cidr: Schema.String,
                        except: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    namespaceSelector: Schema.optional(
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
                    podSelector: Schema.optional(
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
                ),
              ),
            }),
          ),
        ),
        ingress: Schema.optional(
          Schema.Array(
            Schema.Struct({
              from: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipBlock: Schema.optional(
                      Schema.Struct({
                        cidr: Schema.String,
                        except: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    namespaceSelector: Schema.optional(
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
                    podSelector: Schema.optional(
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
                ),
              ),
              ports: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    endPort: Schema.optional(Schema.Number),
                    port: Schema.optional(Schema.String),
                    protocol: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        podSelector: Schema.optional(
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
        policyTypes: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies",
    }),
  );
export type CreateNetworkingV1NamespacedNetworkPolicyInput =
  typeof CreateNetworkingV1NamespacedNetworkPolicyInput.Type;

// Output Schema
export const CreateNetworkingV1NamespacedNetworkPolicyOutput =
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
        egress: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ports: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    endPort: Schema.optional(Schema.Number),
                    port: Schema.optional(Schema.String),
                    protocol: Schema.optional(Schema.String),
                  }),
                ),
              ),
              to: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipBlock: Schema.optional(
                      Schema.Struct({
                        cidr: Schema.String,
                        except: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    namespaceSelector: Schema.optional(
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
                    podSelector: Schema.optional(
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
                ),
              ),
            }),
          ),
        ),
        ingress: Schema.optional(
          Schema.Array(
            Schema.Struct({
              from: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipBlock: Schema.optional(
                      Schema.Struct({
                        cidr: Schema.String,
                        except: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    namespaceSelector: Schema.optional(
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
                    podSelector: Schema.optional(
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
                ),
              ),
              ports: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    endPort: Schema.optional(Schema.Number),
                    port: Schema.optional(Schema.String),
                    protocol: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        podSelector: Schema.optional(
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
        policyTypes: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type CreateNetworkingV1NamespacedNetworkPolicyOutput =
  typeof CreateNetworkingV1NamespacedNetworkPolicyOutput.Type;

// The operation
/**
 * create a NetworkPolicy
 *
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createNetworkingV1NamespacedNetworkPolicy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateNetworkingV1NamespacedNetworkPolicyInput,
    outputSchema: CreateNetworkingV1NamespacedNetworkPolicyOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateNetworkingV1ServiceCIDRInput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/apis/networking.k8s.io/v1/servicecidrs" }),
  );
export type CreateNetworkingV1ServiceCIDRInput =
  typeof CreateNetworkingV1ServiceCIDRInput.Type;

// Output Schema
export const CreateNetworkingV1ServiceCIDROutput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type CreateNetworkingV1ServiceCIDROutput =
  typeof CreateNetworkingV1ServiceCIDROutput.Type;

// The operation
/**
 * create a ServiceCIDR
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createNetworkingV1ServiceCIDR =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateNetworkingV1ServiceCIDRInput,
    outputSchema: CreateNetworkingV1ServiceCIDROutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateNetworkingV1beta1IPAddressInput =
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
      parentRef: Schema.Struct({
        group: Schema.optional(Schema.String),
        name: Schema.String,
        namespace: Schema.optional(Schema.String),
        resource: Schema.String,
      }),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/networking.k8s.io/v1beta1/ipaddresses",
    }),
  );
export type CreateNetworkingV1beta1IPAddressInput =
  typeof CreateNetworkingV1beta1IPAddressInput.Type;

// Output Schema
export const CreateNetworkingV1beta1IPAddressOutput =
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
      parentRef: Schema.Struct({
        group: Schema.optional(Schema.String),
        name: Schema.String,
        namespace: Schema.optional(Schema.String),
        resource: Schema.String,
      }),
    }),
  });
export type CreateNetworkingV1beta1IPAddressOutput =
  typeof CreateNetworkingV1beta1IPAddressOutput.Type;

// The operation
/**
 * create an IPAddress
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createNetworkingV1beta1IPAddress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateNetworkingV1beta1IPAddressInput,
    outputSchema: CreateNetworkingV1beta1IPAddressOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateNetworkingV1beta1ServiceCIDRInput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/networking.k8s.io/v1beta1/servicecidrs",
    }),
  );
export type CreateNetworkingV1beta1ServiceCIDRInput =
  typeof CreateNetworkingV1beta1ServiceCIDRInput.Type;

// Output Schema
export const CreateNetworkingV1beta1ServiceCIDROutput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type CreateNetworkingV1beta1ServiceCIDROutput =
  typeof CreateNetworkingV1beta1ServiceCIDROutput.Type;

// The operation
/**
 * create a ServiceCIDR
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createNetworkingV1beta1ServiceCIDR =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateNetworkingV1beta1ServiceCIDRInput,
    outputSchema: CreateNetworkingV1beta1ServiceCIDROutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const DeleteNetworkingV1CollectionIPAddressInput =
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
      path: "/apis/networking.k8s.io/v1/ipaddresses",
    }),
  );
export type DeleteNetworkingV1CollectionIPAddressInput =
  typeof DeleteNetworkingV1CollectionIPAddressInput.Type;

// Output Schema
export const DeleteNetworkingV1CollectionIPAddressOutput =
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
export type DeleteNetworkingV1CollectionIPAddressOutput =
  typeof DeleteNetworkingV1CollectionIPAddressOutput.Type;

// The operation
/**
 * delete collection of IPAddress
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
export const deleteNetworkingV1CollectionIPAddress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteNetworkingV1CollectionIPAddressInput,
    outputSchema: DeleteNetworkingV1CollectionIPAddressOutput,
  }));
// Input Schema
export const DeleteNetworkingV1CollectionIngressClassInput =
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
      path: "/apis/networking.k8s.io/v1/ingressclasses",
    }),
  );
export type DeleteNetworkingV1CollectionIngressClassInput =
  typeof DeleteNetworkingV1CollectionIngressClassInput.Type;

// Output Schema
export const DeleteNetworkingV1CollectionIngressClassOutput =
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
export type DeleteNetworkingV1CollectionIngressClassOutput =
  typeof DeleteNetworkingV1CollectionIngressClassOutput.Type;

// The operation
/**
 * delete collection of IngressClass
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
export const deleteNetworkingV1CollectionIngressClass =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteNetworkingV1CollectionIngressClassInput,
    outputSchema: DeleteNetworkingV1CollectionIngressClassOutput,
  }));
// Input Schema
export const DeleteNetworkingV1CollectionNamespacedIngressInput =
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
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses",
    }),
  );
export type DeleteNetworkingV1CollectionNamespacedIngressInput =
  typeof DeleteNetworkingV1CollectionNamespacedIngressInput.Type;

// Output Schema
export const DeleteNetworkingV1CollectionNamespacedIngressOutput =
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
export type DeleteNetworkingV1CollectionNamespacedIngressOutput =
  typeof DeleteNetworkingV1CollectionNamespacedIngressOutput.Type;

// The operation
/**
 * delete collection of Ingress
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
export const deleteNetworkingV1CollectionNamespacedIngress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteNetworkingV1CollectionNamespacedIngressInput,
    outputSchema: DeleteNetworkingV1CollectionNamespacedIngressOutput,
  }));
// Input Schema
export const DeleteNetworkingV1CollectionNamespacedNetworkPolicyInput =
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
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies",
    }),
  );
export type DeleteNetworkingV1CollectionNamespacedNetworkPolicyInput =
  typeof DeleteNetworkingV1CollectionNamespacedNetworkPolicyInput.Type;

// Output Schema
export const DeleteNetworkingV1CollectionNamespacedNetworkPolicyOutput =
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
export type DeleteNetworkingV1CollectionNamespacedNetworkPolicyOutput =
  typeof DeleteNetworkingV1CollectionNamespacedNetworkPolicyOutput.Type;

// The operation
/**
 * delete collection of NetworkPolicy
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
export const deleteNetworkingV1CollectionNamespacedNetworkPolicy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteNetworkingV1CollectionNamespacedNetworkPolicyInput,
    outputSchema: DeleteNetworkingV1CollectionNamespacedNetworkPolicyOutput,
  }));
// Input Schema
export const DeleteNetworkingV1CollectionServiceCIDRInput =
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
      path: "/apis/networking.k8s.io/v1/servicecidrs",
    }),
  );
export type DeleteNetworkingV1CollectionServiceCIDRInput =
  typeof DeleteNetworkingV1CollectionServiceCIDRInput.Type;

// Output Schema
export const DeleteNetworkingV1CollectionServiceCIDROutput =
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
export type DeleteNetworkingV1CollectionServiceCIDROutput =
  typeof DeleteNetworkingV1CollectionServiceCIDROutput.Type;

// The operation
/**
 * delete collection of ServiceCIDR
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
export const deleteNetworkingV1CollectionServiceCIDR =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteNetworkingV1CollectionServiceCIDRInput,
    outputSchema: DeleteNetworkingV1CollectionServiceCIDROutput,
  }));
// Input Schema
export const DeleteNetworkingV1IPAddressInput =
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
      path: "/apis/networking.k8s.io/v1/ipaddresses/{name}",
    }),
  );
export type DeleteNetworkingV1IPAddressInput =
  typeof DeleteNetworkingV1IPAddressInput.Type;

// Output Schema
export const DeleteNetworkingV1IPAddressOutput =
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
export type DeleteNetworkingV1IPAddressOutput =
  typeof DeleteNetworkingV1IPAddressOutput.Type;

// The operation
/**
 * delete an IPAddress
 *
 * @param name - name of the IPAddress
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteNetworkingV1IPAddress = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteNetworkingV1IPAddressInput,
    outputSchema: DeleteNetworkingV1IPAddressOutput,
    errors: [NotFound, Conflict] as const,
  }),
);
// Input Schema
export const DeleteNetworkingV1IngressClassInput =
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
      path: "/apis/networking.k8s.io/v1/ingressclasses/{name}",
    }),
  );
export type DeleteNetworkingV1IngressClassInput =
  typeof DeleteNetworkingV1IngressClassInput.Type;

// Output Schema
export const DeleteNetworkingV1IngressClassOutput =
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
export type DeleteNetworkingV1IngressClassOutput =
  typeof DeleteNetworkingV1IngressClassOutput.Type;

// The operation
/**
 * delete an IngressClass
 *
 * @param name - name of the IngressClass
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteNetworkingV1IngressClass =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteNetworkingV1IngressClassInput,
    outputSchema: DeleteNetworkingV1IngressClassOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteNetworkingV1NamespacedIngressInput =
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
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}",
    }),
  );
export type DeleteNetworkingV1NamespacedIngressInput =
  typeof DeleteNetworkingV1NamespacedIngressInput.Type;

// Output Schema
export const DeleteNetworkingV1NamespacedIngressOutput =
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
export type DeleteNetworkingV1NamespacedIngressOutput =
  typeof DeleteNetworkingV1NamespacedIngressOutput.Type;

// The operation
/**
 * delete an Ingress
 *
 * @param name - name of the Ingress
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteNetworkingV1NamespacedIngress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteNetworkingV1NamespacedIngressInput,
    outputSchema: DeleteNetworkingV1NamespacedIngressOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteNetworkingV1NamespacedNetworkPolicyInput =
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
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}",
    }),
  );
export type DeleteNetworkingV1NamespacedNetworkPolicyInput =
  typeof DeleteNetworkingV1NamespacedNetworkPolicyInput.Type;

// Output Schema
export const DeleteNetworkingV1NamespacedNetworkPolicyOutput =
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
export type DeleteNetworkingV1NamespacedNetworkPolicyOutput =
  typeof DeleteNetworkingV1NamespacedNetworkPolicyOutput.Type;

// The operation
/**
 * delete a NetworkPolicy
 *
 * @param name - name of the NetworkPolicy
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteNetworkingV1NamespacedNetworkPolicy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteNetworkingV1NamespacedNetworkPolicyInput,
    outputSchema: DeleteNetworkingV1NamespacedNetworkPolicyOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteNetworkingV1ServiceCIDRInput =
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
      path: "/apis/networking.k8s.io/v1/servicecidrs/{name}",
    }),
  );
export type DeleteNetworkingV1ServiceCIDRInput =
  typeof DeleteNetworkingV1ServiceCIDRInput.Type;

// Output Schema
export const DeleteNetworkingV1ServiceCIDROutput =
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
export type DeleteNetworkingV1ServiceCIDROutput =
  typeof DeleteNetworkingV1ServiceCIDROutput.Type;

// The operation
/**
 * delete a ServiceCIDR
 *
 * @param name - name of the ServiceCIDR
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteNetworkingV1ServiceCIDR =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteNetworkingV1ServiceCIDRInput,
    outputSchema: DeleteNetworkingV1ServiceCIDROutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteNetworkingV1beta1CollectionIPAddressInput =
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
      path: "/apis/networking.k8s.io/v1beta1/ipaddresses",
    }),
  );
export type DeleteNetworkingV1beta1CollectionIPAddressInput =
  typeof DeleteNetworkingV1beta1CollectionIPAddressInput.Type;

// Output Schema
export const DeleteNetworkingV1beta1CollectionIPAddressOutput =
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
export type DeleteNetworkingV1beta1CollectionIPAddressOutput =
  typeof DeleteNetworkingV1beta1CollectionIPAddressOutput.Type;

// The operation
/**
 * delete collection of IPAddress
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
export const deleteNetworkingV1beta1CollectionIPAddress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteNetworkingV1beta1CollectionIPAddressInput,
    outputSchema: DeleteNetworkingV1beta1CollectionIPAddressOutput,
  }));
// Input Schema
export const DeleteNetworkingV1beta1CollectionServiceCIDRInput =
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
      path: "/apis/networking.k8s.io/v1beta1/servicecidrs",
    }),
  );
export type DeleteNetworkingV1beta1CollectionServiceCIDRInput =
  typeof DeleteNetworkingV1beta1CollectionServiceCIDRInput.Type;

// Output Schema
export const DeleteNetworkingV1beta1CollectionServiceCIDROutput =
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
export type DeleteNetworkingV1beta1CollectionServiceCIDROutput =
  typeof DeleteNetworkingV1beta1CollectionServiceCIDROutput.Type;

// The operation
/**
 * delete collection of ServiceCIDR
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
export const deleteNetworkingV1beta1CollectionServiceCIDR =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteNetworkingV1beta1CollectionServiceCIDRInput,
    outputSchema: DeleteNetworkingV1beta1CollectionServiceCIDROutput,
  }));
// Input Schema
export const DeleteNetworkingV1beta1IPAddressInput =
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
      path: "/apis/networking.k8s.io/v1beta1/ipaddresses/{name}",
    }),
  );
export type DeleteNetworkingV1beta1IPAddressInput =
  typeof DeleteNetworkingV1beta1IPAddressInput.Type;

// Output Schema
export const DeleteNetworkingV1beta1IPAddressOutput =
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
export type DeleteNetworkingV1beta1IPAddressOutput =
  typeof DeleteNetworkingV1beta1IPAddressOutput.Type;

// The operation
/**
 * delete an IPAddress
 *
 * @param name - name of the IPAddress
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteNetworkingV1beta1IPAddress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteNetworkingV1beta1IPAddressInput,
    outputSchema: DeleteNetworkingV1beta1IPAddressOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteNetworkingV1beta1ServiceCIDRInput =
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
      path: "/apis/networking.k8s.io/v1beta1/servicecidrs/{name}",
    }),
  );
export type DeleteNetworkingV1beta1ServiceCIDRInput =
  typeof DeleteNetworkingV1beta1ServiceCIDRInput.Type;

// Output Schema
export const DeleteNetworkingV1beta1ServiceCIDROutput =
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
export type DeleteNetworkingV1beta1ServiceCIDROutput =
  typeof DeleteNetworkingV1beta1ServiceCIDROutput.Type;

// The operation
/**
 * delete a ServiceCIDR
 *
 * @param name - name of the ServiceCIDR
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteNetworkingV1beta1ServiceCIDR =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteNetworkingV1beta1ServiceCIDRInput,
    outputSchema: DeleteNetworkingV1beta1ServiceCIDROutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const GetNetworkingAPIGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/networking.k8s.io/" }),
  );
export type GetNetworkingAPIGroupInput = typeof GetNetworkingAPIGroupInput.Type;

// Output Schema
export const GetNetworkingAPIGroupOutput =
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
export type GetNetworkingAPIGroupOutput =
  typeof GetNetworkingAPIGroupOutput.Type;

// The operation
/**
 * get information of a group
 */
export const getNetworkingAPIGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetNetworkingAPIGroupInput,
    outputSchema: GetNetworkingAPIGroupOutput,
  }),
);
// Input Schema
export const GetNetworkingV1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/networking.k8s.io/v1/" }),
  );
export type GetNetworkingV1APIResourcesInput =
  typeof GetNetworkingV1APIResourcesInput.Type;

// Output Schema
export const GetNetworkingV1APIResourcesOutput =
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
export type GetNetworkingV1APIResourcesOutput =
  typeof GetNetworkingV1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getNetworkingV1APIResources = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetNetworkingV1APIResourcesInput,
    outputSchema: GetNetworkingV1APIResourcesOutput,
  }),
);
// Input Schema
export const GetNetworkingV1beta1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/networking.k8s.io/v1beta1/" }),
  );
export type GetNetworkingV1beta1APIResourcesInput =
  typeof GetNetworkingV1beta1APIResourcesInput.Type;

// Output Schema
export const GetNetworkingV1beta1APIResourcesOutput =
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
export type GetNetworkingV1beta1APIResourcesOutput =
  typeof GetNetworkingV1beta1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getNetworkingV1beta1APIResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetNetworkingV1beta1APIResourcesInput,
    outputSchema: GetNetworkingV1beta1APIResourcesOutput,
  }));
// Input Schema
export const ListNetworkingV1IPAddressInput =
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
    T.Http({ method: "GET", path: "/apis/networking.k8s.io/v1/ipaddresses" }),
  );
export type ListNetworkingV1IPAddressInput =
  typeof ListNetworkingV1IPAddressInput.Type;

// Output Schema
export const ListNetworkingV1IPAddressOutput =
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
          parentRef: Schema.Struct({
            group: Schema.optional(Schema.String),
            name: Schema.String,
            namespace: Schema.optional(Schema.String),
            resource: Schema.String,
          }),
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
export type ListNetworkingV1IPAddressOutput =
  typeof ListNetworkingV1IPAddressOutput.Type;

// The operation
/**
 * list or watch objects of kind IPAddress
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
export const listNetworkingV1IPAddress = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListNetworkingV1IPAddressInput,
    outputSchema: ListNetworkingV1IPAddressOutput,
  }),
);
// Input Schema
export const ListNetworkingV1IngressClassInput =
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
      path: "/apis/networking.k8s.io/v1/ingressclasses",
    }),
  );
export type ListNetworkingV1IngressClassInput =
  typeof ListNetworkingV1IngressClassInput.Type;

// Output Schema
export const ListNetworkingV1IngressClassOutput =
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
            controller: Schema.optional(Schema.String),
            parameters: Schema.optional(
              Schema.Struct({
                apiGroup: Schema.optional(Schema.String),
                kind: Schema.String,
                name: Schema.String,
                namespace: Schema.optional(Schema.String),
                scope: Schema.optional(Schema.String),
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
  });
export type ListNetworkingV1IngressClassOutput =
  typeof ListNetworkingV1IngressClassOutput.Type;

// The operation
/**
 * list or watch objects of kind IngressClass
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
export const listNetworkingV1IngressClass =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListNetworkingV1IngressClassInput,
    outputSchema: ListNetworkingV1IngressClassOutput,
  }));
// Input Schema
export const ListNetworkingV1IngressForAllNamespacesInput =
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
    T.Http({ method: "GET", path: "/apis/networking.k8s.io/v1/ingresses" }),
  );
export type ListNetworkingV1IngressForAllNamespacesInput =
  typeof ListNetworkingV1IngressForAllNamespacesInput.Type;

// Output Schema
export const ListNetworkingV1IngressForAllNamespacesOutput =
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
            defaultBackend: Schema.optional(
              Schema.Struct({
                resource: Schema.optional(
                  Schema.Struct({
                    apiGroup: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                  }),
                ),
                service: Schema.optional(
                  Schema.Struct({
                    name: Schema.String,
                    port: Schema.optional(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        number: Schema.optional(Schema.Number),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            ingressClassName: Schema.optional(Schema.String),
            rules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  host: Schema.optional(Schema.String),
                  http: Schema.optional(
                    Schema.Struct({
                      paths: Schema.Array(
                        Schema.Struct({
                          backend: Schema.Struct({
                            resource: Schema.optional(
                              Schema.Struct({
                                apiGroup: Schema.optional(Schema.String),
                                kind: Schema.String,
                                name: Schema.String,
                              }),
                            ),
                            service: Schema.optional(
                              Schema.Struct({
                                name: Schema.String,
                                port: Schema.optional(
                                  Schema.Struct({
                                    name: Schema.optional(Schema.String),
                                    number: Schema.optional(Schema.Number),
                                  }),
                                ),
                              }),
                            ),
                          }),
                          path: Schema.optional(Schema.String),
                          pathType: Schema.String,
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            ),
            tls: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  hosts: Schema.optional(Schema.Array(Schema.String)),
                  secretName: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        status: Schema.optional(
          Schema.Struct({
            loadBalancer: Schema.optional(
              Schema.Struct({
                ingress: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      hostname: Schema.optional(Schema.String),
                      ip: Schema.optional(Schema.String),
                      ports: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            error: Schema.optional(Schema.String),
                            port: Schema.Number,
                            protocol: Schema.String,
                          }),
                        ),
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
export type ListNetworkingV1IngressForAllNamespacesOutput =
  typeof ListNetworkingV1IngressForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind Ingress
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
export const listNetworkingV1IngressForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListNetworkingV1IngressForAllNamespacesInput,
    outputSchema: ListNetworkingV1IngressForAllNamespacesOutput,
  }));
// Input Schema
export const ListNetworkingV1NamespacedIngressInput =
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
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses",
    }),
  );
export type ListNetworkingV1NamespacedIngressInput =
  typeof ListNetworkingV1NamespacedIngressInput.Type;

// Output Schema
export const ListNetworkingV1NamespacedIngressOutput =
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
            defaultBackend: Schema.optional(
              Schema.Struct({
                resource: Schema.optional(
                  Schema.Struct({
                    apiGroup: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                  }),
                ),
                service: Schema.optional(
                  Schema.Struct({
                    name: Schema.String,
                    port: Schema.optional(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        number: Schema.optional(Schema.Number),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            ingressClassName: Schema.optional(Schema.String),
            rules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  host: Schema.optional(Schema.String),
                  http: Schema.optional(
                    Schema.Struct({
                      paths: Schema.Array(
                        Schema.Struct({
                          backend: Schema.Struct({
                            resource: Schema.optional(
                              Schema.Struct({
                                apiGroup: Schema.optional(Schema.String),
                                kind: Schema.String,
                                name: Schema.String,
                              }),
                            ),
                            service: Schema.optional(
                              Schema.Struct({
                                name: Schema.String,
                                port: Schema.optional(
                                  Schema.Struct({
                                    name: Schema.optional(Schema.String),
                                    number: Schema.optional(Schema.Number),
                                  }),
                                ),
                              }),
                            ),
                          }),
                          path: Schema.optional(Schema.String),
                          pathType: Schema.String,
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            ),
            tls: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  hosts: Schema.optional(Schema.Array(Schema.String)),
                  secretName: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        status: Schema.optional(
          Schema.Struct({
            loadBalancer: Schema.optional(
              Schema.Struct({
                ingress: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      hostname: Schema.optional(Schema.String),
                      ip: Schema.optional(Schema.String),
                      ports: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            error: Schema.optional(Schema.String),
                            port: Schema.Number,
                            protocol: Schema.String,
                          }),
                        ),
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
export type ListNetworkingV1NamespacedIngressOutput =
  typeof ListNetworkingV1NamespacedIngressOutput.Type;

// The operation
/**
 * list or watch objects of kind Ingress
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
export const listNetworkingV1NamespacedIngress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListNetworkingV1NamespacedIngressInput,
    outputSchema: ListNetworkingV1NamespacedIngressOutput,
  }));
// Input Schema
export const ListNetworkingV1NamespacedNetworkPolicyInput =
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
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies",
    }),
  );
export type ListNetworkingV1NamespacedNetworkPolicyInput =
  typeof ListNetworkingV1NamespacedNetworkPolicyInput.Type;

// Output Schema
export const ListNetworkingV1NamespacedNetworkPolicyOutput =
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
            egress: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  ports: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        endPort: Schema.optional(Schema.Number),
                        port: Schema.optional(Schema.String),
                        protocol: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  to: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        ipBlock: Schema.optional(
                          Schema.Struct({
                            cidr: Schema.String,
                            except: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                          }),
                        ),
                        namespaceSelector: Schema.optional(
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
                        podSelector: Schema.optional(
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
                    ),
                  ),
                }),
              ),
            ),
            ingress: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  from: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        ipBlock: Schema.optional(
                          Schema.Struct({
                            cidr: Schema.String,
                            except: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                          }),
                        ),
                        namespaceSelector: Schema.optional(
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
                        podSelector: Schema.optional(
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
                    ),
                  ),
                  ports: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        endPort: Schema.optional(Schema.Number),
                        port: Schema.optional(Schema.String),
                        protocol: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            ),
            podSelector: Schema.optional(
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
            policyTypes: Schema.optional(Schema.Array(Schema.String)),
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
export type ListNetworkingV1NamespacedNetworkPolicyOutput =
  typeof ListNetworkingV1NamespacedNetworkPolicyOutput.Type;

// The operation
/**
 * list or watch objects of kind NetworkPolicy
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
export const listNetworkingV1NamespacedNetworkPolicy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListNetworkingV1NamespacedNetworkPolicyInput,
    outputSchema: ListNetworkingV1NamespacedNetworkPolicyOutput,
  }));
// Input Schema
export const ListNetworkingV1NetworkPolicyForAllNamespacesInput =
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
      path: "/apis/networking.k8s.io/v1/networkpolicies",
    }),
  );
export type ListNetworkingV1NetworkPolicyForAllNamespacesInput =
  typeof ListNetworkingV1NetworkPolicyForAllNamespacesInput.Type;

// Output Schema
export const ListNetworkingV1NetworkPolicyForAllNamespacesOutput =
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
            egress: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  ports: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        endPort: Schema.optional(Schema.Number),
                        port: Schema.optional(Schema.String),
                        protocol: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  to: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        ipBlock: Schema.optional(
                          Schema.Struct({
                            cidr: Schema.String,
                            except: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                          }),
                        ),
                        namespaceSelector: Schema.optional(
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
                        podSelector: Schema.optional(
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
                    ),
                  ),
                }),
              ),
            ),
            ingress: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  from: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        ipBlock: Schema.optional(
                          Schema.Struct({
                            cidr: Schema.String,
                            except: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                          }),
                        ),
                        namespaceSelector: Schema.optional(
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
                        podSelector: Schema.optional(
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
                    ),
                  ),
                  ports: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        endPort: Schema.optional(Schema.Number),
                        port: Schema.optional(Schema.String),
                        protocol: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            ),
            podSelector: Schema.optional(
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
            policyTypes: Schema.optional(Schema.Array(Schema.String)),
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
export type ListNetworkingV1NetworkPolicyForAllNamespacesOutput =
  typeof ListNetworkingV1NetworkPolicyForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind NetworkPolicy
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
export const listNetworkingV1NetworkPolicyForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListNetworkingV1NetworkPolicyForAllNamespacesInput,
    outputSchema: ListNetworkingV1NetworkPolicyForAllNamespacesOutput,
  }));
// Input Schema
export const ListNetworkingV1ServiceCIDRInput =
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
    T.Http({ method: "GET", path: "/apis/networking.k8s.io/v1/servicecidrs" }),
  );
export type ListNetworkingV1ServiceCIDRInput =
  typeof ListNetworkingV1ServiceCIDRInput.Type;

// Output Schema
export const ListNetworkingV1ServiceCIDROutput =
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
            cidrs: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        status: Schema.optional(
          Schema.Struct({
            conditions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  lastTransitionTime: Schema.String,
                  message: Schema.String,
                  observedGeneration: Schema.optional(Schema.Number),
                  reason: Schema.String,
                  status: Schema.String,
                  type: Schema.String,
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
  });
export type ListNetworkingV1ServiceCIDROutput =
  typeof ListNetworkingV1ServiceCIDROutput.Type;

// The operation
/**
 * list or watch objects of kind ServiceCIDR
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
export const listNetworkingV1ServiceCIDR = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListNetworkingV1ServiceCIDRInput,
    outputSchema: ListNetworkingV1ServiceCIDROutput,
  }),
);
// Input Schema
export const ListNetworkingV1beta1IPAddressInput =
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
      path: "/apis/networking.k8s.io/v1beta1/ipaddresses",
    }),
  );
export type ListNetworkingV1beta1IPAddressInput =
  typeof ListNetworkingV1beta1IPAddressInput.Type;

// Output Schema
export const ListNetworkingV1beta1IPAddressOutput =
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
          parentRef: Schema.Struct({
            group: Schema.optional(Schema.String),
            name: Schema.String,
            namespace: Schema.optional(Schema.String),
            resource: Schema.String,
          }),
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
export type ListNetworkingV1beta1IPAddressOutput =
  typeof ListNetworkingV1beta1IPAddressOutput.Type;

// The operation
/**
 * list or watch objects of kind IPAddress
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
export const listNetworkingV1beta1IPAddress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListNetworkingV1beta1IPAddressInput,
    outputSchema: ListNetworkingV1beta1IPAddressOutput,
  }));
// Input Schema
export const ListNetworkingV1beta1ServiceCIDRInput =
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
      path: "/apis/networking.k8s.io/v1beta1/servicecidrs",
    }),
  );
export type ListNetworkingV1beta1ServiceCIDRInput =
  typeof ListNetworkingV1beta1ServiceCIDRInput.Type;

// Output Schema
export const ListNetworkingV1beta1ServiceCIDROutput =
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
            cidrs: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        status: Schema.optional(
          Schema.Struct({
            conditions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  lastTransitionTime: Schema.String,
                  message: Schema.String,
                  observedGeneration: Schema.optional(Schema.Number),
                  reason: Schema.String,
                  status: Schema.String,
                  type: Schema.String,
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
  });
export type ListNetworkingV1beta1ServiceCIDROutput =
  typeof ListNetworkingV1beta1ServiceCIDROutput.Type;

// The operation
/**
 * list or watch objects of kind ServiceCIDR
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
export const listNetworkingV1beta1ServiceCIDR =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListNetworkingV1beta1ServiceCIDRInput,
    outputSchema: ListNetworkingV1beta1ServiceCIDROutput,
  }));
// Input Schema
export const PatchNetworkingV1IPAddressInput =
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
      path: "/apis/networking.k8s.io/v1/ipaddresses/{name}",
    }),
  );
export type PatchNetworkingV1IPAddressInput =
  typeof PatchNetworkingV1IPAddressInput.Type;

// Output Schema
export const PatchNetworkingV1IPAddressOutput =
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
      parentRef: Schema.Struct({
        group: Schema.optional(Schema.String),
        name: Schema.String,
        namespace: Schema.optional(Schema.String),
        resource: Schema.String,
      }),
    }),
  });
export type PatchNetworkingV1IPAddressOutput =
  typeof PatchNetworkingV1IPAddressOutput.Type;

// The operation
/**
 * partially update the specified IPAddress
 *
 * @param name - name of the IPAddress
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchNetworkingV1IPAddress = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PatchNetworkingV1IPAddressInput,
    outputSchema: PatchNetworkingV1IPAddressOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
// Input Schema
export const PatchNetworkingV1IngressClassInput =
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
      path: "/apis/networking.k8s.io/v1/ingressclasses/{name}",
    }),
  );
export type PatchNetworkingV1IngressClassInput =
  typeof PatchNetworkingV1IngressClassInput.Type;

// Output Schema
export const PatchNetworkingV1IngressClassOutput =
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
        controller: Schema.optional(Schema.String),
        parameters: Schema.optional(
          Schema.Struct({
            apiGroup: Schema.optional(Schema.String),
            kind: Schema.String,
            name: Schema.String,
            namespace: Schema.optional(Schema.String),
            scope: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  });
export type PatchNetworkingV1IngressClassOutput =
  typeof PatchNetworkingV1IngressClassOutput.Type;

// The operation
/**
 * partially update the specified IngressClass
 *
 * @param name - name of the IngressClass
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchNetworkingV1IngressClass =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchNetworkingV1IngressClassInput,
    outputSchema: PatchNetworkingV1IngressClassOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchNetworkingV1NamespacedIngressInput =
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
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}",
    }),
  );
export type PatchNetworkingV1NamespacedIngressInput =
  typeof PatchNetworkingV1NamespacedIngressInput.Type;

// Output Schema
export const PatchNetworkingV1NamespacedIngressOutput =
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
        defaultBackend: Schema.optional(
          Schema.Struct({
            resource: Schema.optional(
              Schema.Struct({
                apiGroup: Schema.optional(Schema.String),
                kind: Schema.String,
                name: Schema.String,
              }),
            ),
            service: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                port: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    number: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
          }),
        ),
        ingressClassName: Schema.optional(Schema.String),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              host: Schema.optional(Schema.String),
              http: Schema.optional(
                Schema.Struct({
                  paths: Schema.Array(
                    Schema.Struct({
                      backend: Schema.Struct({
                        resource: Schema.optional(
                          Schema.Struct({
                            apiGroup: Schema.optional(Schema.String),
                            kind: Schema.String,
                            name: Schema.String,
                          }),
                        ),
                        service: Schema.optional(
                          Schema.Struct({
                            name: Schema.String,
                            port: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                number: Schema.optional(Schema.Number),
                              }),
                            ),
                          }),
                        ),
                      }),
                      path: Schema.optional(Schema.String),
                      pathType: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        tls: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hosts: Schema.optional(Schema.Array(Schema.String)),
              secretName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        loadBalancer: Schema.optional(
          Schema.Struct({
            ingress: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  hostname: Schema.optional(Schema.String),
                  ip: Schema.optional(Schema.String),
                  ports: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        error: Schema.optional(Schema.String),
                        port: Schema.Number,
                        protocol: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  });
export type PatchNetworkingV1NamespacedIngressOutput =
  typeof PatchNetworkingV1NamespacedIngressOutput.Type;

// The operation
/**
 * partially update the specified Ingress
 *
 * @param name - name of the Ingress
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchNetworkingV1NamespacedIngress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchNetworkingV1NamespacedIngressInput,
    outputSchema: PatchNetworkingV1NamespacedIngressOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchNetworkingV1NamespacedIngressStatusInput =
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
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status",
    }),
  );
export type PatchNetworkingV1NamespacedIngressStatusInput =
  typeof PatchNetworkingV1NamespacedIngressStatusInput.Type;

// Output Schema
export const PatchNetworkingV1NamespacedIngressStatusOutput =
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
        defaultBackend: Schema.optional(
          Schema.Struct({
            resource: Schema.optional(
              Schema.Struct({
                apiGroup: Schema.optional(Schema.String),
                kind: Schema.String,
                name: Schema.String,
              }),
            ),
            service: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                port: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    number: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
          }),
        ),
        ingressClassName: Schema.optional(Schema.String),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              host: Schema.optional(Schema.String),
              http: Schema.optional(
                Schema.Struct({
                  paths: Schema.Array(
                    Schema.Struct({
                      backend: Schema.Struct({
                        resource: Schema.optional(
                          Schema.Struct({
                            apiGroup: Schema.optional(Schema.String),
                            kind: Schema.String,
                            name: Schema.String,
                          }),
                        ),
                        service: Schema.optional(
                          Schema.Struct({
                            name: Schema.String,
                            port: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                number: Schema.optional(Schema.Number),
                              }),
                            ),
                          }),
                        ),
                      }),
                      path: Schema.optional(Schema.String),
                      pathType: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        tls: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hosts: Schema.optional(Schema.Array(Schema.String)),
              secretName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        loadBalancer: Schema.optional(
          Schema.Struct({
            ingress: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  hostname: Schema.optional(Schema.String),
                  ip: Schema.optional(Schema.String),
                  ports: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        error: Schema.optional(Schema.String),
                        port: Schema.Number,
                        protocol: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  });
export type PatchNetworkingV1NamespacedIngressStatusOutput =
  typeof PatchNetworkingV1NamespacedIngressStatusOutput.Type;

// The operation
/**
 * partially update status of the specified Ingress
 *
 * @param name - name of the Ingress
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchNetworkingV1NamespacedIngressStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchNetworkingV1NamespacedIngressStatusInput,
    outputSchema: PatchNetworkingV1NamespacedIngressStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchNetworkingV1NamespacedNetworkPolicyInput =
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
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}",
    }),
  );
export type PatchNetworkingV1NamespacedNetworkPolicyInput =
  typeof PatchNetworkingV1NamespacedNetworkPolicyInput.Type;

// Output Schema
export const PatchNetworkingV1NamespacedNetworkPolicyOutput =
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
        egress: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ports: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    endPort: Schema.optional(Schema.Number),
                    port: Schema.optional(Schema.String),
                    protocol: Schema.optional(Schema.String),
                  }),
                ),
              ),
              to: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipBlock: Schema.optional(
                      Schema.Struct({
                        cidr: Schema.String,
                        except: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    namespaceSelector: Schema.optional(
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
                    podSelector: Schema.optional(
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
                ),
              ),
            }),
          ),
        ),
        ingress: Schema.optional(
          Schema.Array(
            Schema.Struct({
              from: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipBlock: Schema.optional(
                      Schema.Struct({
                        cidr: Schema.String,
                        except: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    namespaceSelector: Schema.optional(
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
                    podSelector: Schema.optional(
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
                ),
              ),
              ports: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    endPort: Schema.optional(Schema.Number),
                    port: Schema.optional(Schema.String),
                    protocol: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        podSelector: Schema.optional(
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
        policyTypes: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type PatchNetworkingV1NamespacedNetworkPolicyOutput =
  typeof PatchNetworkingV1NamespacedNetworkPolicyOutput.Type;

// The operation
/**
 * partially update the specified NetworkPolicy
 *
 * @param name - name of the NetworkPolicy
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchNetworkingV1NamespacedNetworkPolicy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchNetworkingV1NamespacedNetworkPolicyInput,
    outputSchema: PatchNetworkingV1NamespacedNetworkPolicyOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchNetworkingV1ServiceCIDRInput =
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
      path: "/apis/networking.k8s.io/v1/servicecidrs/{name}",
    }),
  );
export type PatchNetworkingV1ServiceCIDRInput =
  typeof PatchNetworkingV1ServiceCIDRInput.Type;

// Output Schema
export const PatchNetworkingV1ServiceCIDROutput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type PatchNetworkingV1ServiceCIDROutput =
  typeof PatchNetworkingV1ServiceCIDROutput.Type;

// The operation
/**
 * partially update the specified ServiceCIDR
 *
 * @param name - name of the ServiceCIDR
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchNetworkingV1ServiceCIDR =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchNetworkingV1ServiceCIDRInput,
    outputSchema: PatchNetworkingV1ServiceCIDROutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchNetworkingV1ServiceCIDRStatusInput =
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
      path: "/apis/networking.k8s.io/v1/servicecidrs/{name}/status",
    }),
  );
export type PatchNetworkingV1ServiceCIDRStatusInput =
  typeof PatchNetworkingV1ServiceCIDRStatusInput.Type;

// Output Schema
export const PatchNetworkingV1ServiceCIDRStatusOutput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type PatchNetworkingV1ServiceCIDRStatusOutput =
  typeof PatchNetworkingV1ServiceCIDRStatusOutput.Type;

// The operation
/**
 * partially update status of the specified ServiceCIDR
 *
 * @param name - name of the ServiceCIDR
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchNetworkingV1ServiceCIDRStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchNetworkingV1ServiceCIDRStatusInput,
    outputSchema: PatchNetworkingV1ServiceCIDRStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchNetworkingV1beta1IPAddressInput =
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
      path: "/apis/networking.k8s.io/v1beta1/ipaddresses/{name}",
    }),
  );
export type PatchNetworkingV1beta1IPAddressInput =
  typeof PatchNetworkingV1beta1IPAddressInput.Type;

// Output Schema
export const PatchNetworkingV1beta1IPAddressOutput =
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
      parentRef: Schema.Struct({
        group: Schema.optional(Schema.String),
        name: Schema.String,
        namespace: Schema.optional(Schema.String),
        resource: Schema.String,
      }),
    }),
  });
export type PatchNetworkingV1beta1IPAddressOutput =
  typeof PatchNetworkingV1beta1IPAddressOutput.Type;

// The operation
/**
 * partially update the specified IPAddress
 *
 * @param name - name of the IPAddress
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchNetworkingV1beta1IPAddress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchNetworkingV1beta1IPAddressInput,
    outputSchema: PatchNetworkingV1beta1IPAddressOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchNetworkingV1beta1ServiceCIDRInput =
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
      path: "/apis/networking.k8s.io/v1beta1/servicecidrs/{name}",
    }),
  );
export type PatchNetworkingV1beta1ServiceCIDRInput =
  typeof PatchNetworkingV1beta1ServiceCIDRInput.Type;

// Output Schema
export const PatchNetworkingV1beta1ServiceCIDROutput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type PatchNetworkingV1beta1ServiceCIDROutput =
  typeof PatchNetworkingV1beta1ServiceCIDROutput.Type;

// The operation
/**
 * partially update the specified ServiceCIDR
 *
 * @param name - name of the ServiceCIDR
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchNetworkingV1beta1ServiceCIDR =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchNetworkingV1beta1ServiceCIDRInput,
    outputSchema: PatchNetworkingV1beta1ServiceCIDROutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchNetworkingV1beta1ServiceCIDRStatusInput =
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
      path: "/apis/networking.k8s.io/v1beta1/servicecidrs/{name}/status",
    }),
  );
export type PatchNetworkingV1beta1ServiceCIDRStatusInput =
  typeof PatchNetworkingV1beta1ServiceCIDRStatusInput.Type;

// Output Schema
export const PatchNetworkingV1beta1ServiceCIDRStatusOutput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type PatchNetworkingV1beta1ServiceCIDRStatusOutput =
  typeof PatchNetworkingV1beta1ServiceCIDRStatusOutput.Type;

// The operation
/**
 * partially update status of the specified ServiceCIDR
 *
 * @param name - name of the ServiceCIDR
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchNetworkingV1beta1ServiceCIDRStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchNetworkingV1beta1ServiceCIDRStatusInput,
    outputSchema: PatchNetworkingV1beta1ServiceCIDRStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReadNetworkingV1IPAddressInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/networking.k8s.io/v1/ipaddresses/{name}",
    }),
  );
export type ReadNetworkingV1IPAddressInput =
  typeof ReadNetworkingV1IPAddressInput.Type;

// Output Schema
export const ReadNetworkingV1IPAddressOutput =
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
      parentRef: Schema.Struct({
        group: Schema.optional(Schema.String),
        name: Schema.String,
        namespace: Schema.optional(Schema.String),
        resource: Schema.String,
      }),
    }),
  });
export type ReadNetworkingV1IPAddressOutput =
  typeof ReadNetworkingV1IPAddressOutput.Type;

// The operation
/**
 * read the specified IPAddress
 *
 * @param name - name of the IPAddress
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readNetworkingV1IPAddress = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReadNetworkingV1IPAddressInput,
    outputSchema: ReadNetworkingV1IPAddressOutput,
    errors: [NotFound] as const,
  }),
);
// Input Schema
export const ReadNetworkingV1IngressClassInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/networking.k8s.io/v1/ingressclasses/{name}",
    }),
  );
export type ReadNetworkingV1IngressClassInput =
  typeof ReadNetworkingV1IngressClassInput.Type;

// Output Schema
export const ReadNetworkingV1IngressClassOutput =
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
        controller: Schema.optional(Schema.String),
        parameters: Schema.optional(
          Schema.Struct({
            apiGroup: Schema.optional(Schema.String),
            kind: Schema.String,
            name: Schema.String,
            namespace: Schema.optional(Schema.String),
            scope: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  });
export type ReadNetworkingV1IngressClassOutput =
  typeof ReadNetworkingV1IngressClassOutput.Type;

// The operation
/**
 * read the specified IngressClass
 *
 * @param name - name of the IngressClass
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readNetworkingV1IngressClass =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadNetworkingV1IngressClassInput,
    outputSchema: ReadNetworkingV1IngressClassOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadNetworkingV1NamespacedIngressInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}",
    }),
  );
export type ReadNetworkingV1NamespacedIngressInput =
  typeof ReadNetworkingV1NamespacedIngressInput.Type;

// Output Schema
export const ReadNetworkingV1NamespacedIngressOutput =
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
        defaultBackend: Schema.optional(
          Schema.Struct({
            resource: Schema.optional(
              Schema.Struct({
                apiGroup: Schema.optional(Schema.String),
                kind: Schema.String,
                name: Schema.String,
              }),
            ),
            service: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                port: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    number: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
          }),
        ),
        ingressClassName: Schema.optional(Schema.String),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              host: Schema.optional(Schema.String),
              http: Schema.optional(
                Schema.Struct({
                  paths: Schema.Array(
                    Schema.Struct({
                      backend: Schema.Struct({
                        resource: Schema.optional(
                          Schema.Struct({
                            apiGroup: Schema.optional(Schema.String),
                            kind: Schema.String,
                            name: Schema.String,
                          }),
                        ),
                        service: Schema.optional(
                          Schema.Struct({
                            name: Schema.String,
                            port: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                number: Schema.optional(Schema.Number),
                              }),
                            ),
                          }),
                        ),
                      }),
                      path: Schema.optional(Schema.String),
                      pathType: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        tls: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hosts: Schema.optional(Schema.Array(Schema.String)),
              secretName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        loadBalancer: Schema.optional(
          Schema.Struct({
            ingress: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  hostname: Schema.optional(Schema.String),
                  ip: Schema.optional(Schema.String),
                  ports: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        error: Schema.optional(Schema.String),
                        port: Schema.Number,
                        protocol: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  });
export type ReadNetworkingV1NamespacedIngressOutput =
  typeof ReadNetworkingV1NamespacedIngressOutput.Type;

// The operation
/**
 * read the specified Ingress
 *
 * @param name - name of the Ingress
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readNetworkingV1NamespacedIngress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadNetworkingV1NamespacedIngressInput,
    outputSchema: ReadNetworkingV1NamespacedIngressOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadNetworkingV1NamespacedIngressStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status",
    }),
  );
export type ReadNetworkingV1NamespacedIngressStatusInput =
  typeof ReadNetworkingV1NamespacedIngressStatusInput.Type;

// Output Schema
export const ReadNetworkingV1NamespacedIngressStatusOutput =
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
        defaultBackend: Schema.optional(
          Schema.Struct({
            resource: Schema.optional(
              Schema.Struct({
                apiGroup: Schema.optional(Schema.String),
                kind: Schema.String,
                name: Schema.String,
              }),
            ),
            service: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                port: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    number: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
          }),
        ),
        ingressClassName: Schema.optional(Schema.String),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              host: Schema.optional(Schema.String),
              http: Schema.optional(
                Schema.Struct({
                  paths: Schema.Array(
                    Schema.Struct({
                      backend: Schema.Struct({
                        resource: Schema.optional(
                          Schema.Struct({
                            apiGroup: Schema.optional(Schema.String),
                            kind: Schema.String,
                            name: Schema.String,
                          }),
                        ),
                        service: Schema.optional(
                          Schema.Struct({
                            name: Schema.String,
                            port: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                number: Schema.optional(Schema.Number),
                              }),
                            ),
                          }),
                        ),
                      }),
                      path: Schema.optional(Schema.String),
                      pathType: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        tls: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hosts: Schema.optional(Schema.Array(Schema.String)),
              secretName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        loadBalancer: Schema.optional(
          Schema.Struct({
            ingress: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  hostname: Schema.optional(Schema.String),
                  ip: Schema.optional(Schema.String),
                  ports: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        error: Schema.optional(Schema.String),
                        port: Schema.Number,
                        protocol: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  });
export type ReadNetworkingV1NamespacedIngressStatusOutput =
  typeof ReadNetworkingV1NamespacedIngressStatusOutput.Type;

// The operation
/**
 * read status of the specified Ingress
 *
 * @param name - name of the Ingress
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readNetworkingV1NamespacedIngressStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadNetworkingV1NamespacedIngressStatusInput,
    outputSchema: ReadNetworkingV1NamespacedIngressStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadNetworkingV1NamespacedNetworkPolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}",
    }),
  );
export type ReadNetworkingV1NamespacedNetworkPolicyInput =
  typeof ReadNetworkingV1NamespacedNetworkPolicyInput.Type;

// Output Schema
export const ReadNetworkingV1NamespacedNetworkPolicyOutput =
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
        egress: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ports: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    endPort: Schema.optional(Schema.Number),
                    port: Schema.optional(Schema.String),
                    protocol: Schema.optional(Schema.String),
                  }),
                ),
              ),
              to: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipBlock: Schema.optional(
                      Schema.Struct({
                        cidr: Schema.String,
                        except: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    namespaceSelector: Schema.optional(
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
                    podSelector: Schema.optional(
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
                ),
              ),
            }),
          ),
        ),
        ingress: Schema.optional(
          Schema.Array(
            Schema.Struct({
              from: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipBlock: Schema.optional(
                      Schema.Struct({
                        cidr: Schema.String,
                        except: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    namespaceSelector: Schema.optional(
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
                    podSelector: Schema.optional(
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
                ),
              ),
              ports: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    endPort: Schema.optional(Schema.Number),
                    port: Schema.optional(Schema.String),
                    protocol: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        podSelector: Schema.optional(
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
        policyTypes: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type ReadNetworkingV1NamespacedNetworkPolicyOutput =
  typeof ReadNetworkingV1NamespacedNetworkPolicyOutput.Type;

// The operation
/**
 * read the specified NetworkPolicy
 *
 * @param name - name of the NetworkPolicy
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readNetworkingV1NamespacedNetworkPolicy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadNetworkingV1NamespacedNetworkPolicyInput,
    outputSchema: ReadNetworkingV1NamespacedNetworkPolicyOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadNetworkingV1ServiceCIDRInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/networking.k8s.io/v1/servicecidrs/{name}",
    }),
  );
export type ReadNetworkingV1ServiceCIDRInput =
  typeof ReadNetworkingV1ServiceCIDRInput.Type;

// Output Schema
export const ReadNetworkingV1ServiceCIDROutput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type ReadNetworkingV1ServiceCIDROutput =
  typeof ReadNetworkingV1ServiceCIDROutput.Type;

// The operation
/**
 * read the specified ServiceCIDR
 *
 * @param name - name of the ServiceCIDR
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readNetworkingV1ServiceCIDR = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReadNetworkingV1ServiceCIDRInput,
    outputSchema: ReadNetworkingV1ServiceCIDROutput,
    errors: [NotFound] as const,
  }),
);
// Input Schema
export const ReadNetworkingV1ServiceCIDRStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/networking.k8s.io/v1/servicecidrs/{name}/status",
    }),
  );
export type ReadNetworkingV1ServiceCIDRStatusInput =
  typeof ReadNetworkingV1ServiceCIDRStatusInput.Type;

// Output Schema
export const ReadNetworkingV1ServiceCIDRStatusOutput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type ReadNetworkingV1ServiceCIDRStatusOutput =
  typeof ReadNetworkingV1ServiceCIDRStatusOutput.Type;

// The operation
/**
 * read status of the specified ServiceCIDR
 *
 * @param name - name of the ServiceCIDR
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readNetworkingV1ServiceCIDRStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadNetworkingV1ServiceCIDRStatusInput,
    outputSchema: ReadNetworkingV1ServiceCIDRStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadNetworkingV1beta1IPAddressInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/networking.k8s.io/v1beta1/ipaddresses/{name}",
    }),
  );
export type ReadNetworkingV1beta1IPAddressInput =
  typeof ReadNetworkingV1beta1IPAddressInput.Type;

// Output Schema
export const ReadNetworkingV1beta1IPAddressOutput =
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
      parentRef: Schema.Struct({
        group: Schema.optional(Schema.String),
        name: Schema.String,
        namespace: Schema.optional(Schema.String),
        resource: Schema.String,
      }),
    }),
  });
export type ReadNetworkingV1beta1IPAddressOutput =
  typeof ReadNetworkingV1beta1IPAddressOutput.Type;

// The operation
/**
 * read the specified IPAddress
 *
 * @param name - name of the IPAddress
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readNetworkingV1beta1IPAddress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadNetworkingV1beta1IPAddressInput,
    outputSchema: ReadNetworkingV1beta1IPAddressOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadNetworkingV1beta1ServiceCIDRInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/networking.k8s.io/v1beta1/servicecidrs/{name}",
    }),
  );
export type ReadNetworkingV1beta1ServiceCIDRInput =
  typeof ReadNetworkingV1beta1ServiceCIDRInput.Type;

// Output Schema
export const ReadNetworkingV1beta1ServiceCIDROutput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type ReadNetworkingV1beta1ServiceCIDROutput =
  typeof ReadNetworkingV1beta1ServiceCIDROutput.Type;

// The operation
/**
 * read the specified ServiceCIDR
 *
 * @param name - name of the ServiceCIDR
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readNetworkingV1beta1ServiceCIDR =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadNetworkingV1beta1ServiceCIDRInput,
    outputSchema: ReadNetworkingV1beta1ServiceCIDROutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadNetworkingV1beta1ServiceCIDRStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/networking.k8s.io/v1beta1/servicecidrs/{name}/status",
    }),
  );
export type ReadNetworkingV1beta1ServiceCIDRStatusInput =
  typeof ReadNetworkingV1beta1ServiceCIDRStatusInput.Type;

// Output Schema
export const ReadNetworkingV1beta1ServiceCIDRStatusOutput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type ReadNetworkingV1beta1ServiceCIDRStatusOutput =
  typeof ReadNetworkingV1beta1ServiceCIDRStatusOutput.Type;

// The operation
/**
 * read status of the specified ServiceCIDR
 *
 * @param name - name of the ServiceCIDR
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readNetworkingV1beta1ServiceCIDRStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadNetworkingV1beta1ServiceCIDRStatusInput,
    outputSchema: ReadNetworkingV1beta1ServiceCIDRStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReplaceNetworkingV1IPAddressInput =
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
      parentRef: Schema.Struct({
        group: Schema.optional(Schema.String),
        name: Schema.String,
        namespace: Schema.optional(Schema.String),
        resource: Schema.String,
      }),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/networking.k8s.io/v1/ipaddresses/{name}",
    }),
  );
export type ReplaceNetworkingV1IPAddressInput =
  typeof ReplaceNetworkingV1IPAddressInput.Type;

// Output Schema
export const ReplaceNetworkingV1IPAddressOutput =
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
      parentRef: Schema.Struct({
        group: Schema.optional(Schema.String),
        name: Schema.String,
        namespace: Schema.optional(Schema.String),
        resource: Schema.String,
      }),
    }),
  });
export type ReplaceNetworkingV1IPAddressOutput =
  typeof ReplaceNetworkingV1IPAddressOutput.Type;

// The operation
/**
 * replace the specified IPAddress
 *
 * @param name - name of the IPAddress
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceNetworkingV1IPAddress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceNetworkingV1IPAddressInput,
    outputSchema: ReplaceNetworkingV1IPAddressOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceNetworkingV1IngressClassInput =
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
        controller: Schema.optional(Schema.String),
        parameters: Schema.optional(
          Schema.Struct({
            apiGroup: Schema.optional(Schema.String),
            kind: Schema.String,
            name: Schema.String,
            namespace: Schema.optional(Schema.String),
            scope: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/networking.k8s.io/v1/ingressclasses/{name}",
    }),
  );
export type ReplaceNetworkingV1IngressClassInput =
  typeof ReplaceNetworkingV1IngressClassInput.Type;

// Output Schema
export const ReplaceNetworkingV1IngressClassOutput =
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
        controller: Schema.optional(Schema.String),
        parameters: Schema.optional(
          Schema.Struct({
            apiGroup: Schema.optional(Schema.String),
            kind: Schema.String,
            name: Schema.String,
            namespace: Schema.optional(Schema.String),
            scope: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  });
export type ReplaceNetworkingV1IngressClassOutput =
  typeof ReplaceNetworkingV1IngressClassOutput.Type;

// The operation
/**
 * replace the specified IngressClass
 *
 * @param name - name of the IngressClass
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceNetworkingV1IngressClass =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceNetworkingV1IngressClassInput,
    outputSchema: ReplaceNetworkingV1IngressClassOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceNetworkingV1NamespacedIngressInput =
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
        defaultBackend: Schema.optional(
          Schema.Struct({
            resource: Schema.optional(
              Schema.Struct({
                apiGroup: Schema.optional(Schema.String),
                kind: Schema.String,
                name: Schema.String,
              }),
            ),
            service: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                port: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    number: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
          }),
        ),
        ingressClassName: Schema.optional(Schema.String),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              host: Schema.optional(Schema.String),
              http: Schema.optional(
                Schema.Struct({
                  paths: Schema.Array(
                    Schema.Struct({
                      backend: Schema.Struct({
                        resource: Schema.optional(
                          Schema.Struct({
                            apiGroup: Schema.optional(Schema.String),
                            kind: Schema.String,
                            name: Schema.String,
                          }),
                        ),
                        service: Schema.optional(
                          Schema.Struct({
                            name: Schema.String,
                            port: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                number: Schema.optional(Schema.Number),
                              }),
                            ),
                          }),
                        ),
                      }),
                      path: Schema.optional(Schema.String),
                      pathType: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        tls: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hosts: Schema.optional(Schema.Array(Schema.String)),
              secretName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        loadBalancer: Schema.optional(
          Schema.Struct({
            ingress: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  hostname: Schema.optional(Schema.String),
                  ip: Schema.optional(Schema.String),
                  ports: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        error: Schema.optional(Schema.String),
                        port: Schema.Number,
                        protocol: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}",
    }),
  );
export type ReplaceNetworkingV1NamespacedIngressInput =
  typeof ReplaceNetworkingV1NamespacedIngressInput.Type;

// Output Schema
export const ReplaceNetworkingV1NamespacedIngressOutput =
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
        defaultBackend: Schema.optional(
          Schema.Struct({
            resource: Schema.optional(
              Schema.Struct({
                apiGroup: Schema.optional(Schema.String),
                kind: Schema.String,
                name: Schema.String,
              }),
            ),
            service: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                port: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    number: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
          }),
        ),
        ingressClassName: Schema.optional(Schema.String),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              host: Schema.optional(Schema.String),
              http: Schema.optional(
                Schema.Struct({
                  paths: Schema.Array(
                    Schema.Struct({
                      backend: Schema.Struct({
                        resource: Schema.optional(
                          Schema.Struct({
                            apiGroup: Schema.optional(Schema.String),
                            kind: Schema.String,
                            name: Schema.String,
                          }),
                        ),
                        service: Schema.optional(
                          Schema.Struct({
                            name: Schema.String,
                            port: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                number: Schema.optional(Schema.Number),
                              }),
                            ),
                          }),
                        ),
                      }),
                      path: Schema.optional(Schema.String),
                      pathType: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        tls: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hosts: Schema.optional(Schema.Array(Schema.String)),
              secretName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        loadBalancer: Schema.optional(
          Schema.Struct({
            ingress: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  hostname: Schema.optional(Schema.String),
                  ip: Schema.optional(Schema.String),
                  ports: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        error: Schema.optional(Schema.String),
                        port: Schema.Number,
                        protocol: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  });
export type ReplaceNetworkingV1NamespacedIngressOutput =
  typeof ReplaceNetworkingV1NamespacedIngressOutput.Type;

// The operation
/**
 * replace the specified Ingress
 *
 * @param name - name of the Ingress
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceNetworkingV1NamespacedIngress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceNetworkingV1NamespacedIngressInput,
    outputSchema: ReplaceNetworkingV1NamespacedIngressOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceNetworkingV1NamespacedIngressStatusInput =
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
        defaultBackend: Schema.optional(
          Schema.Struct({
            resource: Schema.optional(
              Schema.Struct({
                apiGroup: Schema.optional(Schema.String),
                kind: Schema.String,
                name: Schema.String,
              }),
            ),
            service: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                port: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    number: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
          }),
        ),
        ingressClassName: Schema.optional(Schema.String),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              host: Schema.optional(Schema.String),
              http: Schema.optional(
                Schema.Struct({
                  paths: Schema.Array(
                    Schema.Struct({
                      backend: Schema.Struct({
                        resource: Schema.optional(
                          Schema.Struct({
                            apiGroup: Schema.optional(Schema.String),
                            kind: Schema.String,
                            name: Schema.String,
                          }),
                        ),
                        service: Schema.optional(
                          Schema.Struct({
                            name: Schema.String,
                            port: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                number: Schema.optional(Schema.Number),
                              }),
                            ),
                          }),
                        ),
                      }),
                      path: Schema.optional(Schema.String),
                      pathType: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        tls: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hosts: Schema.optional(Schema.Array(Schema.String)),
              secretName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        loadBalancer: Schema.optional(
          Schema.Struct({
            ingress: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  hostname: Schema.optional(Schema.String),
                  ip: Schema.optional(Schema.String),
                  ports: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        error: Schema.optional(Schema.String),
                        port: Schema.Number,
                        protocol: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status",
    }),
  );
export type ReplaceNetworkingV1NamespacedIngressStatusInput =
  typeof ReplaceNetworkingV1NamespacedIngressStatusInput.Type;

// Output Schema
export const ReplaceNetworkingV1NamespacedIngressStatusOutput =
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
        defaultBackend: Schema.optional(
          Schema.Struct({
            resource: Schema.optional(
              Schema.Struct({
                apiGroup: Schema.optional(Schema.String),
                kind: Schema.String,
                name: Schema.String,
              }),
            ),
            service: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                port: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    number: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
          }),
        ),
        ingressClassName: Schema.optional(Schema.String),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              host: Schema.optional(Schema.String),
              http: Schema.optional(
                Schema.Struct({
                  paths: Schema.Array(
                    Schema.Struct({
                      backend: Schema.Struct({
                        resource: Schema.optional(
                          Schema.Struct({
                            apiGroup: Schema.optional(Schema.String),
                            kind: Schema.String,
                            name: Schema.String,
                          }),
                        ),
                        service: Schema.optional(
                          Schema.Struct({
                            name: Schema.String,
                            port: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                number: Schema.optional(Schema.Number),
                              }),
                            ),
                          }),
                        ),
                      }),
                      path: Schema.optional(Schema.String),
                      pathType: Schema.String,
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        tls: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hosts: Schema.optional(Schema.Array(Schema.String)),
              secretName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        loadBalancer: Schema.optional(
          Schema.Struct({
            ingress: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  hostname: Schema.optional(Schema.String),
                  ip: Schema.optional(Schema.String),
                  ports: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        error: Schema.optional(Schema.String),
                        port: Schema.Number,
                        protocol: Schema.String,
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  });
export type ReplaceNetworkingV1NamespacedIngressStatusOutput =
  typeof ReplaceNetworkingV1NamespacedIngressStatusOutput.Type;

// The operation
/**
 * replace status of the specified Ingress
 *
 * @param name - name of the Ingress
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceNetworkingV1NamespacedIngressStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceNetworkingV1NamespacedIngressStatusInput,
    outputSchema: ReplaceNetworkingV1NamespacedIngressStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceNetworkingV1NamespacedNetworkPolicyInput =
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
        egress: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ports: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    endPort: Schema.optional(Schema.Number),
                    port: Schema.optional(Schema.String),
                    protocol: Schema.optional(Schema.String),
                  }),
                ),
              ),
              to: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipBlock: Schema.optional(
                      Schema.Struct({
                        cidr: Schema.String,
                        except: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    namespaceSelector: Schema.optional(
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
                    podSelector: Schema.optional(
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
                ),
              ),
            }),
          ),
        ),
        ingress: Schema.optional(
          Schema.Array(
            Schema.Struct({
              from: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipBlock: Schema.optional(
                      Schema.Struct({
                        cidr: Schema.String,
                        except: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    namespaceSelector: Schema.optional(
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
                    podSelector: Schema.optional(
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
                ),
              ),
              ports: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    endPort: Schema.optional(Schema.Number),
                    port: Schema.optional(Schema.String),
                    protocol: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        podSelector: Schema.optional(
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
        policyTypes: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}",
    }),
  );
export type ReplaceNetworkingV1NamespacedNetworkPolicyInput =
  typeof ReplaceNetworkingV1NamespacedNetworkPolicyInput.Type;

// Output Schema
export const ReplaceNetworkingV1NamespacedNetworkPolicyOutput =
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
        egress: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ports: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    endPort: Schema.optional(Schema.Number),
                    port: Schema.optional(Schema.String),
                    protocol: Schema.optional(Schema.String),
                  }),
                ),
              ),
              to: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipBlock: Schema.optional(
                      Schema.Struct({
                        cidr: Schema.String,
                        except: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    namespaceSelector: Schema.optional(
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
                    podSelector: Schema.optional(
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
                ),
              ),
            }),
          ),
        ),
        ingress: Schema.optional(
          Schema.Array(
            Schema.Struct({
              from: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipBlock: Schema.optional(
                      Schema.Struct({
                        cidr: Schema.String,
                        except: Schema.optional(Schema.Array(Schema.String)),
                      }),
                    ),
                    namespaceSelector: Schema.optional(
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
                    podSelector: Schema.optional(
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
                ),
              ),
              ports: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    endPort: Schema.optional(Schema.Number),
                    port: Schema.optional(Schema.String),
                    protocol: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        podSelector: Schema.optional(
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
        policyTypes: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type ReplaceNetworkingV1NamespacedNetworkPolicyOutput =
  typeof ReplaceNetworkingV1NamespacedNetworkPolicyOutput.Type;

// The operation
/**
 * replace the specified NetworkPolicy
 *
 * @param name - name of the NetworkPolicy
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceNetworkingV1NamespacedNetworkPolicy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceNetworkingV1NamespacedNetworkPolicyInput,
    outputSchema: ReplaceNetworkingV1NamespacedNetworkPolicyOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceNetworkingV1ServiceCIDRInput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/networking.k8s.io/v1/servicecidrs/{name}",
    }),
  );
export type ReplaceNetworkingV1ServiceCIDRInput =
  typeof ReplaceNetworkingV1ServiceCIDRInput.Type;

// Output Schema
export const ReplaceNetworkingV1ServiceCIDROutput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type ReplaceNetworkingV1ServiceCIDROutput =
  typeof ReplaceNetworkingV1ServiceCIDROutput.Type;

// The operation
/**
 * replace the specified ServiceCIDR
 *
 * @param name - name of the ServiceCIDR
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceNetworkingV1ServiceCIDR =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceNetworkingV1ServiceCIDRInput,
    outputSchema: ReplaceNetworkingV1ServiceCIDROutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceNetworkingV1ServiceCIDRStatusInput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/networking.k8s.io/v1/servicecidrs/{name}/status",
    }),
  );
export type ReplaceNetworkingV1ServiceCIDRStatusInput =
  typeof ReplaceNetworkingV1ServiceCIDRStatusInput.Type;

// Output Schema
export const ReplaceNetworkingV1ServiceCIDRStatusOutput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type ReplaceNetworkingV1ServiceCIDRStatusOutput =
  typeof ReplaceNetworkingV1ServiceCIDRStatusOutput.Type;

// The operation
/**
 * replace status of the specified ServiceCIDR
 *
 * @param name - name of the ServiceCIDR
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceNetworkingV1ServiceCIDRStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceNetworkingV1ServiceCIDRStatusInput,
    outputSchema: ReplaceNetworkingV1ServiceCIDRStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceNetworkingV1beta1IPAddressInput =
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
      parentRef: Schema.Struct({
        group: Schema.optional(Schema.String),
        name: Schema.String,
        namespace: Schema.optional(Schema.String),
        resource: Schema.String,
      }),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/networking.k8s.io/v1beta1/ipaddresses/{name}",
    }),
  );
export type ReplaceNetworkingV1beta1IPAddressInput =
  typeof ReplaceNetworkingV1beta1IPAddressInput.Type;

// Output Schema
export const ReplaceNetworkingV1beta1IPAddressOutput =
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
      parentRef: Schema.Struct({
        group: Schema.optional(Schema.String),
        name: Schema.String,
        namespace: Schema.optional(Schema.String),
        resource: Schema.String,
      }),
    }),
  });
export type ReplaceNetworkingV1beta1IPAddressOutput =
  typeof ReplaceNetworkingV1beta1IPAddressOutput.Type;

// The operation
/**
 * replace the specified IPAddress
 *
 * @param name - name of the IPAddress
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceNetworkingV1beta1IPAddress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceNetworkingV1beta1IPAddressInput,
    outputSchema: ReplaceNetworkingV1beta1IPAddressOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceNetworkingV1beta1ServiceCIDRInput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/networking.k8s.io/v1beta1/servicecidrs/{name}",
    }),
  );
export type ReplaceNetworkingV1beta1ServiceCIDRInput =
  typeof ReplaceNetworkingV1beta1ServiceCIDRInput.Type;

// Output Schema
export const ReplaceNetworkingV1beta1ServiceCIDROutput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type ReplaceNetworkingV1beta1ServiceCIDROutput =
  typeof ReplaceNetworkingV1beta1ServiceCIDROutput.Type;

// The operation
/**
 * replace the specified ServiceCIDR
 *
 * @param name - name of the ServiceCIDR
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceNetworkingV1beta1ServiceCIDR =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceNetworkingV1beta1ServiceCIDRInput,
    outputSchema: ReplaceNetworkingV1beta1ServiceCIDROutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceNetworkingV1beta1ServiceCIDRStatusInput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/networking.k8s.io/v1beta1/servicecidrs/{name}/status",
    }),
  );
export type ReplaceNetworkingV1beta1ServiceCIDRStatusInput =
  typeof ReplaceNetworkingV1beta1ServiceCIDRStatusInput.Type;

// Output Schema
export const ReplaceNetworkingV1beta1ServiceCIDRStatusOutput =
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
        cidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Struct({
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.String,
              message: Schema.String,
              observedGeneration: Schema.optional(Schema.Number),
              reason: Schema.String,
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type ReplaceNetworkingV1beta1ServiceCIDRStatusOutput =
  typeof ReplaceNetworkingV1beta1ServiceCIDRStatusOutput.Type;

// The operation
/**
 * replace status of the specified ServiceCIDR
 *
 * @param name - name of the ServiceCIDR
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceNetworkingV1beta1ServiceCIDRStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceNetworkingV1beta1ServiceCIDRStatusInput,
    outputSchema: ReplaceNetworkingV1beta1ServiceCIDRStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const WatchNetworkingV1IPAddressInput =
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
      path: "/apis/networking.k8s.io/v1/watch/ipaddresses/{name}",
    }),
  );
export type WatchNetworkingV1IPAddressInput =
  typeof WatchNetworkingV1IPAddressInput.Type;

// Output Schema
export const WatchNetworkingV1IPAddressOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1IPAddressOutput =
  typeof WatchNetworkingV1IPAddressOutput.Type;

// The operation
/**
 * watch changes to an object of kind IPAddress. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the IPAddress
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
export const watchNetworkingV1IPAddress = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WatchNetworkingV1IPAddressInput,
    outputSchema: WatchNetworkingV1IPAddressOutput,
  }),
);
// Input Schema
export const WatchNetworkingV1IPAddressListInput =
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
      path: "/apis/networking.k8s.io/v1/watch/ipaddresses",
    }),
  );
export type WatchNetworkingV1IPAddressListInput =
  typeof WatchNetworkingV1IPAddressListInput.Type;

// Output Schema
export const WatchNetworkingV1IPAddressListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1IPAddressListOutput =
  typeof WatchNetworkingV1IPAddressListOutput.Type;

// The operation
/**
 * watch individual changes to a list of IPAddress. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchNetworkingV1IPAddressList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchNetworkingV1IPAddressListInput,
    outputSchema: WatchNetworkingV1IPAddressListOutput,
  }));
// Input Schema
export const WatchNetworkingV1IngressClassInput =
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
      path: "/apis/networking.k8s.io/v1/watch/ingressclasses/{name}",
    }),
  );
export type WatchNetworkingV1IngressClassInput =
  typeof WatchNetworkingV1IngressClassInput.Type;

// Output Schema
export const WatchNetworkingV1IngressClassOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1IngressClassOutput =
  typeof WatchNetworkingV1IngressClassOutput.Type;

// The operation
/**
 * watch changes to an object of kind IngressClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the IngressClass
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
export const watchNetworkingV1IngressClass =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchNetworkingV1IngressClassInput,
    outputSchema: WatchNetworkingV1IngressClassOutput,
  }));
// Input Schema
export const WatchNetworkingV1IngressClassListInput =
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
      path: "/apis/networking.k8s.io/v1/watch/ingressclasses",
    }),
  );
export type WatchNetworkingV1IngressClassListInput =
  typeof WatchNetworkingV1IngressClassListInput.Type;

// Output Schema
export const WatchNetworkingV1IngressClassListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1IngressClassListOutput =
  typeof WatchNetworkingV1IngressClassListOutput.Type;

// The operation
/**
 * watch individual changes to a list of IngressClass. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchNetworkingV1IngressClassList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchNetworkingV1IngressClassListInput,
    outputSchema: WatchNetworkingV1IngressClassListOutput,
  }));
// Input Schema
export const WatchNetworkingV1IngressListForAllNamespacesInput =
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
      path: "/apis/networking.k8s.io/v1/watch/ingresses",
    }),
  );
export type WatchNetworkingV1IngressListForAllNamespacesInput =
  typeof WatchNetworkingV1IngressListForAllNamespacesInput.Type;

// Output Schema
export const WatchNetworkingV1IngressListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1IngressListForAllNamespacesOutput =
  typeof WatchNetworkingV1IngressListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchNetworkingV1IngressListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchNetworkingV1IngressListForAllNamespacesInput,
    outputSchema: WatchNetworkingV1IngressListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchNetworkingV1NamespacedIngressInput =
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
      path: "/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/ingresses/{name}",
    }),
  );
export type WatchNetworkingV1NamespacedIngressInput =
  typeof WatchNetworkingV1NamespacedIngressInput.Type;

// Output Schema
export const WatchNetworkingV1NamespacedIngressOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1NamespacedIngressOutput =
  typeof WatchNetworkingV1NamespacedIngressOutput.Type;

// The operation
/**
 * watch changes to an object of kind Ingress. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the Ingress
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
export const watchNetworkingV1NamespacedIngress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchNetworkingV1NamespacedIngressInput,
    outputSchema: WatchNetworkingV1NamespacedIngressOutput,
  }));
// Input Schema
export const WatchNetworkingV1NamespacedIngressListInput =
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
      path: "/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/ingresses",
    }),
  );
export type WatchNetworkingV1NamespacedIngressListInput =
  typeof WatchNetworkingV1NamespacedIngressListInput.Type;

// Output Schema
export const WatchNetworkingV1NamespacedIngressListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1NamespacedIngressListOutput =
  typeof WatchNetworkingV1NamespacedIngressListOutput.Type;

// The operation
/**
 * watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchNetworkingV1NamespacedIngressList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchNetworkingV1NamespacedIngressListInput,
    outputSchema: WatchNetworkingV1NamespacedIngressListOutput,
  }));
// Input Schema
export const WatchNetworkingV1NamespacedNetworkPolicyInput =
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
      path: "/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies/{name}",
    }),
  );
export type WatchNetworkingV1NamespacedNetworkPolicyInput =
  typeof WatchNetworkingV1NamespacedNetworkPolicyInput.Type;

// Output Schema
export const WatchNetworkingV1NamespacedNetworkPolicyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1NamespacedNetworkPolicyOutput =
  typeof WatchNetworkingV1NamespacedNetworkPolicyOutput.Type;

// The operation
/**
 * watch changes to an object of kind NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the NetworkPolicy
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
export const watchNetworkingV1NamespacedNetworkPolicy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchNetworkingV1NamespacedNetworkPolicyInput,
    outputSchema: WatchNetworkingV1NamespacedNetworkPolicyOutput,
  }));
// Input Schema
export const WatchNetworkingV1NamespacedNetworkPolicyListInput =
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
      path: "/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies",
    }),
  );
export type WatchNetworkingV1NamespacedNetworkPolicyListInput =
  typeof WatchNetworkingV1NamespacedNetworkPolicyListInput.Type;

// Output Schema
export const WatchNetworkingV1NamespacedNetworkPolicyListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1NamespacedNetworkPolicyListOutput =
  typeof WatchNetworkingV1NamespacedNetworkPolicyListOutput.Type;

// The operation
/**
 * watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchNetworkingV1NamespacedNetworkPolicyList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchNetworkingV1NamespacedNetworkPolicyListInput,
    outputSchema: WatchNetworkingV1NamespacedNetworkPolicyListOutput,
  }));
// Input Schema
export const WatchNetworkingV1NetworkPolicyListForAllNamespacesInput =
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
      path: "/apis/networking.k8s.io/v1/watch/networkpolicies",
    }),
  );
export type WatchNetworkingV1NetworkPolicyListForAllNamespacesInput =
  typeof WatchNetworkingV1NetworkPolicyListForAllNamespacesInput.Type;

// Output Schema
export const WatchNetworkingV1NetworkPolicyListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1NetworkPolicyListForAllNamespacesOutput =
  typeof WatchNetworkingV1NetworkPolicyListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchNetworkingV1NetworkPolicyListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchNetworkingV1NetworkPolicyListForAllNamespacesInput,
    outputSchema: WatchNetworkingV1NetworkPolicyListForAllNamespacesOutput,
  }));
// Input Schema
export const WatchNetworkingV1ServiceCIDRInput =
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
      path: "/apis/networking.k8s.io/v1/watch/servicecidrs/{name}",
    }),
  );
export type WatchNetworkingV1ServiceCIDRInput =
  typeof WatchNetworkingV1ServiceCIDRInput.Type;

// Output Schema
export const WatchNetworkingV1ServiceCIDROutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1ServiceCIDROutput =
  typeof WatchNetworkingV1ServiceCIDROutput.Type;

// The operation
/**
 * watch changes to an object of kind ServiceCIDR. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the ServiceCIDR
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
export const watchNetworkingV1ServiceCIDR =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchNetworkingV1ServiceCIDRInput,
    outputSchema: WatchNetworkingV1ServiceCIDROutput,
  }));
// Input Schema
export const WatchNetworkingV1ServiceCIDRListInput =
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
      path: "/apis/networking.k8s.io/v1/watch/servicecidrs",
    }),
  );
export type WatchNetworkingV1ServiceCIDRListInput =
  typeof WatchNetworkingV1ServiceCIDRListInput.Type;

// Output Schema
export const WatchNetworkingV1ServiceCIDRListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1ServiceCIDRListOutput =
  typeof WatchNetworkingV1ServiceCIDRListOutput.Type;

// The operation
/**
 * watch individual changes to a list of ServiceCIDR. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchNetworkingV1ServiceCIDRList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchNetworkingV1ServiceCIDRListInput,
    outputSchema: WatchNetworkingV1ServiceCIDRListOutput,
  }));
// Input Schema
export const WatchNetworkingV1beta1IPAddressInput =
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
      path: "/apis/networking.k8s.io/v1beta1/watch/ipaddresses/{name}",
    }),
  );
export type WatchNetworkingV1beta1IPAddressInput =
  typeof WatchNetworkingV1beta1IPAddressInput.Type;

// Output Schema
export const WatchNetworkingV1beta1IPAddressOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1beta1IPAddressOutput =
  typeof WatchNetworkingV1beta1IPAddressOutput.Type;

// The operation
/**
 * watch changes to an object of kind IPAddress. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the IPAddress
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
export const watchNetworkingV1beta1IPAddress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchNetworkingV1beta1IPAddressInput,
    outputSchema: WatchNetworkingV1beta1IPAddressOutput,
  }));
// Input Schema
export const WatchNetworkingV1beta1IPAddressListInput =
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
      path: "/apis/networking.k8s.io/v1beta1/watch/ipaddresses",
    }),
  );
export type WatchNetworkingV1beta1IPAddressListInput =
  typeof WatchNetworkingV1beta1IPAddressListInput.Type;

// Output Schema
export const WatchNetworkingV1beta1IPAddressListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1beta1IPAddressListOutput =
  typeof WatchNetworkingV1beta1IPAddressListOutput.Type;

// The operation
/**
 * watch individual changes to a list of IPAddress. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchNetworkingV1beta1IPAddressList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchNetworkingV1beta1IPAddressListInput,
    outputSchema: WatchNetworkingV1beta1IPAddressListOutput,
  }));
// Input Schema
export const WatchNetworkingV1beta1ServiceCIDRInput =
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
      path: "/apis/networking.k8s.io/v1beta1/watch/servicecidrs/{name}",
    }),
  );
export type WatchNetworkingV1beta1ServiceCIDRInput =
  typeof WatchNetworkingV1beta1ServiceCIDRInput.Type;

// Output Schema
export const WatchNetworkingV1beta1ServiceCIDROutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1beta1ServiceCIDROutput =
  typeof WatchNetworkingV1beta1ServiceCIDROutput.Type;

// The operation
/**
 * watch changes to an object of kind ServiceCIDR. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the ServiceCIDR
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
export const watchNetworkingV1beta1ServiceCIDR =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchNetworkingV1beta1ServiceCIDRInput,
    outputSchema: WatchNetworkingV1beta1ServiceCIDROutput,
  }));
// Input Schema
export const WatchNetworkingV1beta1ServiceCIDRListInput =
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
      path: "/apis/networking.k8s.io/v1beta1/watch/servicecidrs",
    }),
  );
export type WatchNetworkingV1beta1ServiceCIDRListInput =
  typeof WatchNetworkingV1beta1ServiceCIDRListInput.Type;

// Output Schema
export const WatchNetworkingV1beta1ServiceCIDRListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchNetworkingV1beta1ServiceCIDRListOutput =
  typeof WatchNetworkingV1beta1ServiceCIDRListOutput.Type;

// The operation
/**
 * watch individual changes to a list of ServiceCIDR. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchNetworkingV1beta1ServiceCIDRList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchNetworkingV1beta1ServiceCIDRListInput,
    outputSchema: WatchNetworkingV1beta1ServiceCIDRListOutput,
  }));
