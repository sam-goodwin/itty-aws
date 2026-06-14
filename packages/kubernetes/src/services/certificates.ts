/**
 * Kubernetes Certificates API
 *
 * Generated from the Kubernetes OpenAPI spec.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import { Conflict, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateCertificatesV1CertificateSigningRequestInput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        certificate: Schema.optional(Schema.String),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              lastUpdateTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
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
      path: "/apis/certificates.k8s.io/v1/certificatesigningrequests",
    }),
  );
export type CreateCertificatesV1CertificateSigningRequestInput =
  typeof CreateCertificatesV1CertificateSigningRequestInput.Type;

// Output Schema
export const CreateCertificatesV1CertificateSigningRequestOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        certificate: Schema.optional(Schema.String),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              lastUpdateTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type CreateCertificatesV1CertificateSigningRequestOutput =
  typeof CreateCertificatesV1CertificateSigningRequestOutput.Type;

// The operation
/**
 * create a CertificateSigningRequest
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCertificatesV1CertificateSigningRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCertificatesV1CertificateSigningRequestInput,
    outputSchema: CreateCertificatesV1CertificateSigningRequestOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCertificatesV1alpha1ClusterTrustBundleInput =
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
      signerName: Schema.optional(Schema.String),
      trustBundle: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/certificates.k8s.io/v1alpha1/clustertrustbundles",
    }),
  );
export type CreateCertificatesV1alpha1ClusterTrustBundleInput =
  typeof CreateCertificatesV1alpha1ClusterTrustBundleInput.Type;

// Output Schema
export const CreateCertificatesV1alpha1ClusterTrustBundleOutput =
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
      signerName: Schema.optional(Schema.String),
      trustBundle: Schema.String,
    }),
  });
export type CreateCertificatesV1alpha1ClusterTrustBundleOutput =
  typeof CreateCertificatesV1alpha1ClusterTrustBundleOutput.Type;

// The operation
/**
 * create a ClusterTrustBundle
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCertificatesV1alpha1ClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCertificatesV1alpha1ClusterTrustBundleInput,
    outputSchema: CreateCertificatesV1alpha1ClusterTrustBundleOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCertificatesV1beta1ClusterTrustBundleInput =
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
      signerName: Schema.optional(Schema.String),
      trustBundle: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/certificates.k8s.io/v1beta1/clustertrustbundles",
    }),
  );
export type CreateCertificatesV1beta1ClusterTrustBundleInput =
  typeof CreateCertificatesV1beta1ClusterTrustBundleInput.Type;

// Output Schema
export const CreateCertificatesV1beta1ClusterTrustBundleOutput =
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
      signerName: Schema.optional(Schema.String),
      trustBundle: Schema.String,
    }),
  });
export type CreateCertificatesV1beta1ClusterTrustBundleOutput =
  typeof CreateCertificatesV1beta1ClusterTrustBundleOutput.Type;

// The operation
/**
 * create a ClusterTrustBundle
 *
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCertificatesV1beta1ClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCertificatesV1beta1ClusterTrustBundleInput,
    outputSchema: CreateCertificatesV1beta1ClusterTrustBundleOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const CreateCertificatesV1beta1NamespacedPodCertificateRequestInput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        beginRefreshAt: Schema.optional(Schema.String),
        certificateChain: Schema.optional(Schema.String),
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
        notAfter: Schema.optional(Schema.String),
        notBefore: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apis/certificates.k8s.io/v1beta1/namespaces/{namespace}/podcertificaterequests",
    }),
  );
export type CreateCertificatesV1beta1NamespacedPodCertificateRequestInput =
  typeof CreateCertificatesV1beta1NamespacedPodCertificateRequestInput.Type;

// Output Schema
export const CreateCertificatesV1beta1NamespacedPodCertificateRequestOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        beginRefreshAt: Schema.optional(Schema.String),
        certificateChain: Schema.optional(Schema.String),
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
        notAfter: Schema.optional(Schema.String),
        notBefore: Schema.optional(Schema.String),
      }),
    ),
  });
export type CreateCertificatesV1beta1NamespacedPodCertificateRequestOutput =
  typeof CreateCertificatesV1beta1NamespacedPodCertificateRequestOutput.Type;

// The operation
/**
 * create a PodCertificateRequest
 *
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const createCertificatesV1beta1NamespacedPodCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateCertificatesV1beta1NamespacedPodCertificateRequestInput,
    outputSchema:
      CreateCertificatesV1beta1NamespacedPodCertificateRequestOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const DeleteCertificatesV1CertificateSigningRequestInput =
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
      path: "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}",
    }),
  );
export type DeleteCertificatesV1CertificateSigningRequestInput =
  typeof DeleteCertificatesV1CertificateSigningRequestInput.Type;

// Output Schema
export const DeleteCertificatesV1CertificateSigningRequestOutput =
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
export type DeleteCertificatesV1CertificateSigningRequestOutput =
  typeof DeleteCertificatesV1CertificateSigningRequestOutput.Type;

// The operation
/**
 * delete a CertificateSigningRequest
 *
 * @param name - name of the CertificateSigningRequest
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteCertificatesV1CertificateSigningRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCertificatesV1CertificateSigningRequestInput,
    outputSchema: DeleteCertificatesV1CertificateSigningRequestOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteCertificatesV1CollectionCertificateSigningRequestInput =
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
      path: "/apis/certificates.k8s.io/v1/certificatesigningrequests",
    }),
  );
export type DeleteCertificatesV1CollectionCertificateSigningRequestInput =
  typeof DeleteCertificatesV1CollectionCertificateSigningRequestInput.Type;

// Output Schema
export const DeleteCertificatesV1CollectionCertificateSigningRequestOutput =
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
export type DeleteCertificatesV1CollectionCertificateSigningRequestOutput =
  typeof DeleteCertificatesV1CollectionCertificateSigningRequestOutput.Type;

// The operation
/**
 * delete collection of CertificateSigningRequest
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
export const deleteCertificatesV1CollectionCertificateSigningRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCertificatesV1CollectionCertificateSigningRequestInput,
    outputSchema: DeleteCertificatesV1CollectionCertificateSigningRequestOutput,
  }));
// Input Schema
export const DeleteCertificatesV1alpha1ClusterTrustBundleInput =
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
      path: "/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}",
    }),
  );
export type DeleteCertificatesV1alpha1ClusterTrustBundleInput =
  typeof DeleteCertificatesV1alpha1ClusterTrustBundleInput.Type;

// Output Schema
export const DeleteCertificatesV1alpha1ClusterTrustBundleOutput =
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
export type DeleteCertificatesV1alpha1ClusterTrustBundleOutput =
  typeof DeleteCertificatesV1alpha1ClusterTrustBundleOutput.Type;

// The operation
/**
 * delete a ClusterTrustBundle
 *
 * @param name - name of the ClusterTrustBundle
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteCertificatesV1alpha1ClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCertificatesV1alpha1ClusterTrustBundleInput,
    outputSchema: DeleteCertificatesV1alpha1ClusterTrustBundleOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteCertificatesV1alpha1CollectionClusterTrustBundleInput =
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
      path: "/apis/certificates.k8s.io/v1alpha1/clustertrustbundles",
    }),
  );
export type DeleteCertificatesV1alpha1CollectionClusterTrustBundleInput =
  typeof DeleteCertificatesV1alpha1CollectionClusterTrustBundleInput.Type;

// Output Schema
export const DeleteCertificatesV1alpha1CollectionClusterTrustBundleOutput =
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
export type DeleteCertificatesV1alpha1CollectionClusterTrustBundleOutput =
  typeof DeleteCertificatesV1alpha1CollectionClusterTrustBundleOutput.Type;

// The operation
/**
 * delete collection of ClusterTrustBundle
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
export const deleteCertificatesV1alpha1CollectionClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCertificatesV1alpha1CollectionClusterTrustBundleInput,
    outputSchema: DeleteCertificatesV1alpha1CollectionClusterTrustBundleOutput,
  }));
// Input Schema
export const DeleteCertificatesV1beta1ClusterTrustBundleInput =
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
      path: "/apis/certificates.k8s.io/v1beta1/clustertrustbundles/{name}",
    }),
  );
export type DeleteCertificatesV1beta1ClusterTrustBundleInput =
  typeof DeleteCertificatesV1beta1ClusterTrustBundleInput.Type;

// Output Schema
export const DeleteCertificatesV1beta1ClusterTrustBundleOutput =
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
export type DeleteCertificatesV1beta1ClusterTrustBundleOutput =
  typeof DeleteCertificatesV1beta1ClusterTrustBundleOutput.Type;

// The operation
/**
 * delete a ClusterTrustBundle
 *
 * @param name - name of the ClusterTrustBundle
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteCertificatesV1beta1ClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCertificatesV1beta1ClusterTrustBundleInput,
    outputSchema: DeleteCertificatesV1beta1ClusterTrustBundleOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const DeleteCertificatesV1beta1CollectionClusterTrustBundleInput =
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
      path: "/apis/certificates.k8s.io/v1beta1/clustertrustbundles",
    }),
  );
export type DeleteCertificatesV1beta1CollectionClusterTrustBundleInput =
  typeof DeleteCertificatesV1beta1CollectionClusterTrustBundleInput.Type;

// Output Schema
export const DeleteCertificatesV1beta1CollectionClusterTrustBundleOutput =
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
export type DeleteCertificatesV1beta1CollectionClusterTrustBundleOutput =
  typeof DeleteCertificatesV1beta1CollectionClusterTrustBundleOutput.Type;

// The operation
/**
 * delete collection of ClusterTrustBundle
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
export const deleteCertificatesV1beta1CollectionClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCertificatesV1beta1CollectionClusterTrustBundleInput,
    outputSchema: DeleteCertificatesV1beta1CollectionClusterTrustBundleOutput,
  }));
// Input Schema
export const DeleteCertificatesV1beta1CollectionNamespacedPodCertificateRequestInput =
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
      path: "/apis/certificates.k8s.io/v1beta1/namespaces/{namespace}/podcertificaterequests",
    }),
  );
export type DeleteCertificatesV1beta1CollectionNamespacedPodCertificateRequestInput =
  typeof DeleteCertificatesV1beta1CollectionNamespacedPodCertificateRequestInput.Type;

// Output Schema
export const DeleteCertificatesV1beta1CollectionNamespacedPodCertificateRequestOutput =
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
export type DeleteCertificatesV1beta1CollectionNamespacedPodCertificateRequestOutput =
  typeof DeleteCertificatesV1beta1CollectionNamespacedPodCertificateRequestOutput.Type;

// The operation
/**
 * delete collection of PodCertificateRequest
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
export const deleteCertificatesV1beta1CollectionNamespacedPodCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      DeleteCertificatesV1beta1CollectionNamespacedPodCertificateRequestInput,
    outputSchema:
      DeleteCertificatesV1beta1CollectionNamespacedPodCertificateRequestOutput,
  }));
// Input Schema
export const DeleteCertificatesV1beta1NamespacedPodCertificateRequestInput =
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
      path: "/apis/certificates.k8s.io/v1beta1/namespaces/{namespace}/podcertificaterequests/{name}",
    }),
  );
export type DeleteCertificatesV1beta1NamespacedPodCertificateRequestInput =
  typeof DeleteCertificatesV1beta1NamespacedPodCertificateRequestInput.Type;

// Output Schema
export const DeleteCertificatesV1beta1NamespacedPodCertificateRequestOutput =
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
export type DeleteCertificatesV1beta1NamespacedPodCertificateRequestOutput =
  typeof DeleteCertificatesV1beta1NamespacedPodCertificateRequestOutput.Type;

// The operation
/**
 * delete a PodCertificateRequest
 *
 * @param name - name of the PodCertificateRequest
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param gracePeriodSeconds - The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 * @param ignoreStoreReadErrorWithClusterBreakingPotential - if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
 * @param orphanDependents - Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 * @param propagationPolicy - Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
export const deleteCertificatesV1beta1NamespacedPodCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteCertificatesV1beta1NamespacedPodCertificateRequestInput,
    outputSchema:
      DeleteCertificatesV1beta1NamespacedPodCertificateRequestOutput,
    errors: [NotFound, Conflict] as const,
  }));
// Input Schema
export const GetCertificatesAPIGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/certificates.k8s.io/" }),
  );
export type GetCertificatesAPIGroupInput =
  typeof GetCertificatesAPIGroupInput.Type;

// Output Schema
export const GetCertificatesAPIGroupOutput =
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
export type GetCertificatesAPIGroupOutput =
  typeof GetCertificatesAPIGroupOutput.Type;

// The operation
/**
 * get information of a group
 */
export const getCertificatesAPIGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetCertificatesAPIGroupInput,
    outputSchema: GetCertificatesAPIGroupOutput,
  }),
);
// Input Schema
export const GetCertificatesV1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/certificates.k8s.io/v1/" }),
  );
export type GetCertificatesV1APIResourcesInput =
  typeof GetCertificatesV1APIResourcesInput.Type;

// Output Schema
export const GetCertificatesV1APIResourcesOutput =
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
export type GetCertificatesV1APIResourcesOutput =
  typeof GetCertificatesV1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getCertificatesV1APIResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetCertificatesV1APIResourcesInput,
    outputSchema: GetCertificatesV1APIResourcesOutput,
  }));
// Input Schema
export const GetCertificatesV1alpha1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/certificates.k8s.io/v1alpha1/" }),
  );
export type GetCertificatesV1alpha1APIResourcesInput =
  typeof GetCertificatesV1alpha1APIResourcesInput.Type;

// Output Schema
export const GetCertificatesV1alpha1APIResourcesOutput =
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
export type GetCertificatesV1alpha1APIResourcesOutput =
  typeof GetCertificatesV1alpha1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getCertificatesV1alpha1APIResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetCertificatesV1alpha1APIResourcesInput,
    outputSchema: GetCertificatesV1alpha1APIResourcesOutput,
  }));
// Input Schema
export const GetCertificatesV1beta1APIResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/apis/certificates.k8s.io/v1beta1/" }),
  );
export type GetCertificatesV1beta1APIResourcesInput =
  typeof GetCertificatesV1beta1APIResourcesInput.Type;

// Output Schema
export const GetCertificatesV1beta1APIResourcesOutput =
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
export type GetCertificatesV1beta1APIResourcesOutput =
  typeof GetCertificatesV1beta1APIResourcesOutput.Type;

// The operation
/**
 * get available resources
 */
export const getCertificatesV1beta1APIResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetCertificatesV1beta1APIResourcesInput,
    outputSchema: GetCertificatesV1beta1APIResourcesOutput,
  }));
// Input Schema
export const ListCertificatesV1CertificateSigningRequestInput =
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
      path: "/apis/certificates.k8s.io/v1/certificatesigningrequests",
    }),
  );
export type ListCertificatesV1CertificateSigningRequestInput =
  typeof ListCertificatesV1CertificateSigningRequestInput.Type;

// Output Schema
export const ListCertificatesV1CertificateSigningRequestOutput =
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
        }),
        status: Schema.optional(
          Schema.Struct({
            certificate: Schema.optional(Schema.String),
            conditions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  lastTransitionTime: Schema.optional(Schema.String),
                  lastUpdateTime: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  reason: Schema.optional(Schema.String),
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
export type ListCertificatesV1CertificateSigningRequestOutput =
  typeof ListCertificatesV1CertificateSigningRequestOutput.Type;

// The operation
/**
 * list or watch objects of kind CertificateSigningRequest
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
export const listCertificatesV1CertificateSigningRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCertificatesV1CertificateSigningRequestInput,
    outputSchema: ListCertificatesV1CertificateSigningRequestOutput,
  }));
// Input Schema
export const ListCertificatesV1alpha1ClusterTrustBundleInput =
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
      path: "/apis/certificates.k8s.io/v1alpha1/clustertrustbundles",
    }),
  );
export type ListCertificatesV1alpha1ClusterTrustBundleInput =
  typeof ListCertificatesV1alpha1ClusterTrustBundleInput.Type;

// Output Schema
export const ListCertificatesV1alpha1ClusterTrustBundleOutput =
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
          signerName: Schema.optional(Schema.String),
          trustBundle: Schema.String,
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
export type ListCertificatesV1alpha1ClusterTrustBundleOutput =
  typeof ListCertificatesV1alpha1ClusterTrustBundleOutput.Type;

// The operation
/**
 * list or watch objects of kind ClusterTrustBundle
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
export const listCertificatesV1alpha1ClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCertificatesV1alpha1ClusterTrustBundleInput,
    outputSchema: ListCertificatesV1alpha1ClusterTrustBundleOutput,
  }));
// Input Schema
export const ListCertificatesV1beta1ClusterTrustBundleInput =
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
      path: "/apis/certificates.k8s.io/v1beta1/clustertrustbundles",
    }),
  );
export type ListCertificatesV1beta1ClusterTrustBundleInput =
  typeof ListCertificatesV1beta1ClusterTrustBundleInput.Type;

// Output Schema
export const ListCertificatesV1beta1ClusterTrustBundleOutput =
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
          signerName: Schema.optional(Schema.String),
          trustBundle: Schema.String,
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
export type ListCertificatesV1beta1ClusterTrustBundleOutput =
  typeof ListCertificatesV1beta1ClusterTrustBundleOutput.Type;

// The operation
/**
 * list or watch objects of kind ClusterTrustBundle
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
export const listCertificatesV1beta1ClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCertificatesV1beta1ClusterTrustBundleInput,
    outputSchema: ListCertificatesV1beta1ClusterTrustBundleOutput,
  }));
// Input Schema
export const ListCertificatesV1beta1NamespacedPodCertificateRequestInput =
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
      path: "/apis/certificates.k8s.io/v1beta1/namespaces/{namespace}/podcertificaterequests",
    }),
  );
export type ListCertificatesV1beta1NamespacedPodCertificateRequestInput =
  typeof ListCertificatesV1beta1NamespacedPodCertificateRequestInput.Type;

// Output Schema
export const ListCertificatesV1beta1NamespacedPodCertificateRequestOutput =
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
        }),
        status: Schema.optional(
          Schema.Struct({
            beginRefreshAt: Schema.optional(Schema.String),
            certificateChain: Schema.optional(Schema.String),
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
            notAfter: Schema.optional(Schema.String),
            notBefore: Schema.optional(Schema.String),
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
export type ListCertificatesV1beta1NamespacedPodCertificateRequestOutput =
  typeof ListCertificatesV1beta1NamespacedPodCertificateRequestOutput.Type;

// The operation
/**
 * list or watch objects of kind PodCertificateRequest
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
export const listCertificatesV1beta1NamespacedPodCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListCertificatesV1beta1NamespacedPodCertificateRequestInput,
    outputSchema: ListCertificatesV1beta1NamespacedPodCertificateRequestOutput,
  }));
// Input Schema
export const ListCertificatesV1beta1PodCertificateRequestForAllNamespacesInput =
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
      path: "/apis/certificates.k8s.io/v1beta1/podcertificaterequests",
    }),
  );
export type ListCertificatesV1beta1PodCertificateRequestForAllNamespacesInput =
  typeof ListCertificatesV1beta1PodCertificateRequestForAllNamespacesInput.Type;

// Output Schema
export const ListCertificatesV1beta1PodCertificateRequestForAllNamespacesOutput =
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
        }),
        status: Schema.optional(
          Schema.Struct({
            beginRefreshAt: Schema.optional(Schema.String),
            certificateChain: Schema.optional(Schema.String),
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
            notAfter: Schema.optional(Schema.String),
            notBefore: Schema.optional(Schema.String),
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
export type ListCertificatesV1beta1PodCertificateRequestForAllNamespacesOutput =
  typeof ListCertificatesV1beta1PodCertificateRequestForAllNamespacesOutput.Type;

// The operation
/**
 * list or watch objects of kind PodCertificateRequest
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
export const listCertificatesV1beta1PodCertificateRequestForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ListCertificatesV1beta1PodCertificateRequestForAllNamespacesInput,
    outputSchema:
      ListCertificatesV1beta1PodCertificateRequestForAllNamespacesOutput,
  }));
// Input Schema
export const PatchCertificatesV1CertificateSigningRequestInput =
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
      path: "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}",
    }),
  );
export type PatchCertificatesV1CertificateSigningRequestInput =
  typeof PatchCertificatesV1CertificateSigningRequestInput.Type;

// Output Schema
export const PatchCertificatesV1CertificateSigningRequestOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        certificate: Schema.optional(Schema.String),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              lastUpdateTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type PatchCertificatesV1CertificateSigningRequestOutput =
  typeof PatchCertificatesV1CertificateSigningRequestOutput.Type;

// The operation
/**
 * partially update the specified CertificateSigningRequest
 *
 * @param name - name of the CertificateSigningRequest
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchCertificatesV1CertificateSigningRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCertificatesV1CertificateSigningRequestInput,
    outputSchema: PatchCertificatesV1CertificateSigningRequestOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCertificatesV1CertificateSigningRequestApprovalInput =
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
      path: "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval",
    }),
  );
export type PatchCertificatesV1CertificateSigningRequestApprovalInput =
  typeof PatchCertificatesV1CertificateSigningRequestApprovalInput.Type;

// Output Schema
export const PatchCertificatesV1CertificateSigningRequestApprovalOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        certificate: Schema.optional(Schema.String),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              lastUpdateTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type PatchCertificatesV1CertificateSigningRequestApprovalOutput =
  typeof PatchCertificatesV1CertificateSigningRequestApprovalOutput.Type;

// The operation
/**
 * partially update approval of the specified CertificateSigningRequest
 *
 * @param name - name of the CertificateSigningRequest
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchCertificatesV1CertificateSigningRequestApproval =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCertificatesV1CertificateSigningRequestApprovalInput,
    outputSchema: PatchCertificatesV1CertificateSigningRequestApprovalOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCertificatesV1CertificateSigningRequestStatusInput =
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
      path: "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status",
    }),
  );
export type PatchCertificatesV1CertificateSigningRequestStatusInput =
  typeof PatchCertificatesV1CertificateSigningRequestStatusInput.Type;

// Output Schema
export const PatchCertificatesV1CertificateSigningRequestStatusOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        certificate: Schema.optional(Schema.String),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              lastUpdateTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type PatchCertificatesV1CertificateSigningRequestStatusOutput =
  typeof PatchCertificatesV1CertificateSigningRequestStatusOutput.Type;

// The operation
/**
 * partially update status of the specified CertificateSigningRequest
 *
 * @param name - name of the CertificateSigningRequest
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchCertificatesV1CertificateSigningRequestStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCertificatesV1CertificateSigningRequestStatusInput,
    outputSchema: PatchCertificatesV1CertificateSigningRequestStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCertificatesV1alpha1ClusterTrustBundleInput =
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
      path: "/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}",
    }),
  );
export type PatchCertificatesV1alpha1ClusterTrustBundleInput =
  typeof PatchCertificatesV1alpha1ClusterTrustBundleInput.Type;

// Output Schema
export const PatchCertificatesV1alpha1ClusterTrustBundleOutput =
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
      signerName: Schema.optional(Schema.String),
      trustBundle: Schema.String,
    }),
  });
export type PatchCertificatesV1alpha1ClusterTrustBundleOutput =
  typeof PatchCertificatesV1alpha1ClusterTrustBundleOutput.Type;

// The operation
/**
 * partially update the specified ClusterTrustBundle
 *
 * @param name - name of the ClusterTrustBundle
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchCertificatesV1alpha1ClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCertificatesV1alpha1ClusterTrustBundleInput,
    outputSchema: PatchCertificatesV1alpha1ClusterTrustBundleOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCertificatesV1beta1ClusterTrustBundleInput =
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
      path: "/apis/certificates.k8s.io/v1beta1/clustertrustbundles/{name}",
    }),
  );
export type PatchCertificatesV1beta1ClusterTrustBundleInput =
  typeof PatchCertificatesV1beta1ClusterTrustBundleInput.Type;

// Output Schema
export const PatchCertificatesV1beta1ClusterTrustBundleOutput =
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
      signerName: Schema.optional(Schema.String),
      trustBundle: Schema.String,
    }),
  });
export type PatchCertificatesV1beta1ClusterTrustBundleOutput =
  typeof PatchCertificatesV1beta1ClusterTrustBundleOutput.Type;

// The operation
/**
 * partially update the specified ClusterTrustBundle
 *
 * @param name - name of the ClusterTrustBundle
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchCertificatesV1beta1ClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCertificatesV1beta1ClusterTrustBundleInput,
    outputSchema: PatchCertificatesV1beta1ClusterTrustBundleOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCertificatesV1beta1NamespacedPodCertificateRequestInput =
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
      path: "/apis/certificates.k8s.io/v1beta1/namespaces/{namespace}/podcertificaterequests/{name}",
    }),
  );
export type PatchCertificatesV1beta1NamespacedPodCertificateRequestInput =
  typeof PatchCertificatesV1beta1NamespacedPodCertificateRequestInput.Type;

// Output Schema
export const PatchCertificatesV1beta1NamespacedPodCertificateRequestOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        beginRefreshAt: Schema.optional(Schema.String),
        certificateChain: Schema.optional(Schema.String),
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
        notAfter: Schema.optional(Schema.String),
        notBefore: Schema.optional(Schema.String),
      }),
    ),
  });
export type PatchCertificatesV1beta1NamespacedPodCertificateRequestOutput =
  typeof PatchCertificatesV1beta1NamespacedPodCertificateRequestOutput.Type;

// The operation
/**
 * partially update the specified PodCertificateRequest
 *
 * @param name - name of the PodCertificateRequest
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchCertificatesV1beta1NamespacedPodCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchCertificatesV1beta1NamespacedPodCertificateRequestInput,
    outputSchema: PatchCertificatesV1beta1NamespacedPodCertificateRequestOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const PatchCertificatesV1beta1NamespacedPodCertificateRequestStatusInput =
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
      path: "/apis/certificates.k8s.io/v1beta1/namespaces/{namespace}/podcertificaterequests/{name}/status",
    }),
  );
export type PatchCertificatesV1beta1NamespacedPodCertificateRequestStatusInput =
  typeof PatchCertificatesV1beta1NamespacedPodCertificateRequestStatusInput.Type;

// Output Schema
export const PatchCertificatesV1beta1NamespacedPodCertificateRequestStatusOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        beginRefreshAt: Schema.optional(Schema.String),
        certificateChain: Schema.optional(Schema.String),
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
        notAfter: Schema.optional(Schema.String),
        notBefore: Schema.optional(Schema.String),
      }),
    ),
  });
export type PatchCertificatesV1beta1NamespacedPodCertificateRequestStatusOutput =
  typeof PatchCertificatesV1beta1NamespacedPodCertificateRequestStatusOutput.Type;

// The operation
/**
 * partially update status of the specified PodCertificateRequest
 *
 * @param name - name of the PodCertificateRequest
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 * @param force - Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
export const patchCertificatesV1beta1NamespacedPodCertificateRequestStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PatchCertificatesV1beta1NamespacedPodCertificateRequestStatusInput,
    outputSchema:
      PatchCertificatesV1beta1NamespacedPodCertificateRequestStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReadCertificatesV1CertificateSigningRequestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}",
    }),
  );
export type ReadCertificatesV1CertificateSigningRequestInput =
  typeof ReadCertificatesV1CertificateSigningRequestInput.Type;

// Output Schema
export const ReadCertificatesV1CertificateSigningRequestOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        certificate: Schema.optional(Schema.String),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              lastUpdateTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type ReadCertificatesV1CertificateSigningRequestOutput =
  typeof ReadCertificatesV1CertificateSigningRequestOutput.Type;

// The operation
/**
 * read the specified CertificateSigningRequest
 *
 * @param name - name of the CertificateSigningRequest
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readCertificatesV1CertificateSigningRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCertificatesV1CertificateSigningRequestInput,
    outputSchema: ReadCertificatesV1CertificateSigningRequestOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCertificatesV1CertificateSigningRequestApprovalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval",
    }),
  );
export type ReadCertificatesV1CertificateSigningRequestApprovalInput =
  typeof ReadCertificatesV1CertificateSigningRequestApprovalInput.Type;

// Output Schema
export const ReadCertificatesV1CertificateSigningRequestApprovalOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        certificate: Schema.optional(Schema.String),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              lastUpdateTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type ReadCertificatesV1CertificateSigningRequestApprovalOutput =
  typeof ReadCertificatesV1CertificateSigningRequestApprovalOutput.Type;

// The operation
/**
 * read approval of the specified CertificateSigningRequest
 *
 * @param name - name of the CertificateSigningRequest
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readCertificatesV1CertificateSigningRequestApproval =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCertificatesV1CertificateSigningRequestApprovalInput,
    outputSchema: ReadCertificatesV1CertificateSigningRequestApprovalOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCertificatesV1CertificateSigningRequestStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status",
    }),
  );
export type ReadCertificatesV1CertificateSigningRequestStatusInput =
  typeof ReadCertificatesV1CertificateSigningRequestStatusInput.Type;

// Output Schema
export const ReadCertificatesV1CertificateSigningRequestStatusOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        certificate: Schema.optional(Schema.String),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              lastUpdateTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type ReadCertificatesV1CertificateSigningRequestStatusOutput =
  typeof ReadCertificatesV1CertificateSigningRequestStatusOutput.Type;

// The operation
/**
 * read status of the specified CertificateSigningRequest
 *
 * @param name - name of the CertificateSigningRequest
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readCertificatesV1CertificateSigningRequestStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCertificatesV1CertificateSigningRequestStatusInput,
    outputSchema: ReadCertificatesV1CertificateSigningRequestStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCertificatesV1alpha1ClusterTrustBundleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}",
    }),
  );
export type ReadCertificatesV1alpha1ClusterTrustBundleInput =
  typeof ReadCertificatesV1alpha1ClusterTrustBundleInput.Type;

// Output Schema
export const ReadCertificatesV1alpha1ClusterTrustBundleOutput =
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
      signerName: Schema.optional(Schema.String),
      trustBundle: Schema.String,
    }),
  });
export type ReadCertificatesV1alpha1ClusterTrustBundleOutput =
  typeof ReadCertificatesV1alpha1ClusterTrustBundleOutput.Type;

// The operation
/**
 * read the specified ClusterTrustBundle
 *
 * @param name - name of the ClusterTrustBundle
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readCertificatesV1alpha1ClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCertificatesV1alpha1ClusterTrustBundleInput,
    outputSchema: ReadCertificatesV1alpha1ClusterTrustBundleOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCertificatesV1beta1ClusterTrustBundleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/certificates.k8s.io/v1beta1/clustertrustbundles/{name}",
    }),
  );
export type ReadCertificatesV1beta1ClusterTrustBundleInput =
  typeof ReadCertificatesV1beta1ClusterTrustBundleInput.Type;

// Output Schema
export const ReadCertificatesV1beta1ClusterTrustBundleOutput =
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
      signerName: Schema.optional(Schema.String),
      trustBundle: Schema.String,
    }),
  });
export type ReadCertificatesV1beta1ClusterTrustBundleOutput =
  typeof ReadCertificatesV1beta1ClusterTrustBundleOutput.Type;

// The operation
/**
 * read the specified ClusterTrustBundle
 *
 * @param name - name of the ClusterTrustBundle
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readCertificatesV1beta1ClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCertificatesV1beta1ClusterTrustBundleInput,
    outputSchema: ReadCertificatesV1beta1ClusterTrustBundleOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCertificatesV1beta1NamespacedPodCertificateRequestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/certificates.k8s.io/v1beta1/namespaces/{namespace}/podcertificaterequests/{name}",
    }),
  );
export type ReadCertificatesV1beta1NamespacedPodCertificateRequestInput =
  typeof ReadCertificatesV1beta1NamespacedPodCertificateRequestInput.Type;

// Output Schema
export const ReadCertificatesV1beta1NamespacedPodCertificateRequestOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        beginRefreshAt: Schema.optional(Schema.String),
        certificateChain: Schema.optional(Schema.String),
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
        notAfter: Schema.optional(Schema.String),
        notBefore: Schema.optional(Schema.String),
      }),
    ),
  });
export type ReadCertificatesV1beta1NamespacedPodCertificateRequestOutput =
  typeof ReadCertificatesV1beta1NamespacedPodCertificateRequestOutput.Type;

// The operation
/**
 * read the specified PodCertificateRequest
 *
 * @param name - name of the PodCertificateRequest
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readCertificatesV1beta1NamespacedPodCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReadCertificatesV1beta1NamespacedPodCertificateRequestInput,
    outputSchema: ReadCertificatesV1beta1NamespacedPodCertificateRequestOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReadCertificatesV1beta1NamespacedPodCertificateRequestStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    namespace: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apis/certificates.k8s.io/v1beta1/namespaces/{namespace}/podcertificaterequests/{name}/status",
    }),
  );
export type ReadCertificatesV1beta1NamespacedPodCertificateRequestStatusInput =
  typeof ReadCertificatesV1beta1NamespacedPodCertificateRequestStatusInput.Type;

// Output Schema
export const ReadCertificatesV1beta1NamespacedPodCertificateRequestStatusOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        beginRefreshAt: Schema.optional(Schema.String),
        certificateChain: Schema.optional(Schema.String),
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
        notAfter: Schema.optional(Schema.String),
        notBefore: Schema.optional(Schema.String),
      }),
    ),
  });
export type ReadCertificatesV1beta1NamespacedPodCertificateRequestStatusOutput =
  typeof ReadCertificatesV1beta1NamespacedPodCertificateRequestStatusOutput.Type;

// The operation
/**
 * read status of the specified PodCertificateRequest
 *
 * @param name - name of the PodCertificateRequest
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
export const readCertificatesV1beta1NamespacedPodCertificateRequestStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ReadCertificatesV1beta1NamespacedPodCertificateRequestStatusInput,
    outputSchema:
      ReadCertificatesV1beta1NamespacedPodCertificateRequestStatusOutput,
    errors: [NotFound] as const,
  }));
// Input Schema
export const ReplaceCertificatesV1CertificateSigningRequestInput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        certificate: Schema.optional(Schema.String),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              lastUpdateTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
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
      path: "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}",
    }),
  );
export type ReplaceCertificatesV1CertificateSigningRequestInput =
  typeof ReplaceCertificatesV1CertificateSigningRequestInput.Type;

// Output Schema
export const ReplaceCertificatesV1CertificateSigningRequestOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        certificate: Schema.optional(Schema.String),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              lastUpdateTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type ReplaceCertificatesV1CertificateSigningRequestOutput =
  typeof ReplaceCertificatesV1CertificateSigningRequestOutput.Type;

// The operation
/**
 * replace the specified CertificateSigningRequest
 *
 * @param name - name of the CertificateSigningRequest
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCertificatesV1CertificateSigningRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCertificatesV1CertificateSigningRequestInput,
    outputSchema: ReplaceCertificatesV1CertificateSigningRequestOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCertificatesV1CertificateSigningRequestApprovalInput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        certificate: Schema.optional(Schema.String),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              lastUpdateTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
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
      path: "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval",
    }),
  );
export type ReplaceCertificatesV1CertificateSigningRequestApprovalInput =
  typeof ReplaceCertificatesV1CertificateSigningRequestApprovalInput.Type;

// Output Schema
export const ReplaceCertificatesV1CertificateSigningRequestApprovalOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        certificate: Schema.optional(Schema.String),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              lastUpdateTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type ReplaceCertificatesV1CertificateSigningRequestApprovalOutput =
  typeof ReplaceCertificatesV1CertificateSigningRequestApprovalOutput.Type;

// The operation
/**
 * replace approval of the specified CertificateSigningRequest
 *
 * @param name - name of the CertificateSigningRequest
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCertificatesV1CertificateSigningRequestApproval =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCertificatesV1CertificateSigningRequestApprovalInput,
    outputSchema: ReplaceCertificatesV1CertificateSigningRequestApprovalOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCertificatesV1CertificateSigningRequestStatusInput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        certificate: Schema.optional(Schema.String),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              lastUpdateTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
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
      path: "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status",
    }),
  );
export type ReplaceCertificatesV1CertificateSigningRequestStatusInput =
  typeof ReplaceCertificatesV1CertificateSigningRequestStatusInput.Type;

// Output Schema
export const ReplaceCertificatesV1CertificateSigningRequestStatusOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        certificate: Schema.optional(Schema.String),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lastTransitionTime: Schema.optional(Schema.String),
              lastUpdateTime: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              status: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
      }),
    ),
  });
export type ReplaceCertificatesV1CertificateSigningRequestStatusOutput =
  typeof ReplaceCertificatesV1CertificateSigningRequestStatusOutput.Type;

// The operation
/**
 * replace status of the specified CertificateSigningRequest
 *
 * @param name - name of the CertificateSigningRequest
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCertificatesV1CertificateSigningRequestStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCertificatesV1CertificateSigningRequestStatusInput,
    outputSchema: ReplaceCertificatesV1CertificateSigningRequestStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCertificatesV1alpha1ClusterTrustBundleInput =
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
      signerName: Schema.optional(Schema.String),
      trustBundle: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}",
    }),
  );
export type ReplaceCertificatesV1alpha1ClusterTrustBundleInput =
  typeof ReplaceCertificatesV1alpha1ClusterTrustBundleInput.Type;

// Output Schema
export const ReplaceCertificatesV1alpha1ClusterTrustBundleOutput =
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
      signerName: Schema.optional(Schema.String),
      trustBundle: Schema.String,
    }),
  });
export type ReplaceCertificatesV1alpha1ClusterTrustBundleOutput =
  typeof ReplaceCertificatesV1alpha1ClusterTrustBundleOutput.Type;

// The operation
/**
 * replace the specified ClusterTrustBundle
 *
 * @param name - name of the ClusterTrustBundle
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCertificatesV1alpha1ClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCertificatesV1alpha1ClusterTrustBundleInput,
    outputSchema: ReplaceCertificatesV1alpha1ClusterTrustBundleOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCertificatesV1beta1ClusterTrustBundleInput =
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
      signerName: Schema.optional(Schema.String),
      trustBundle: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/certificates.k8s.io/v1beta1/clustertrustbundles/{name}",
    }),
  );
export type ReplaceCertificatesV1beta1ClusterTrustBundleInput =
  typeof ReplaceCertificatesV1beta1ClusterTrustBundleInput.Type;

// Output Schema
export const ReplaceCertificatesV1beta1ClusterTrustBundleOutput =
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
      signerName: Schema.optional(Schema.String),
      trustBundle: Schema.String,
    }),
  });
export type ReplaceCertificatesV1beta1ClusterTrustBundleOutput =
  typeof ReplaceCertificatesV1beta1ClusterTrustBundleOutput.Type;

// The operation
/**
 * replace the specified ClusterTrustBundle
 *
 * @param name - name of the ClusterTrustBundle
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCertificatesV1beta1ClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCertificatesV1beta1ClusterTrustBundleInput,
    outputSchema: ReplaceCertificatesV1beta1ClusterTrustBundleOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCertificatesV1beta1NamespacedPodCertificateRequestInput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        beginRefreshAt: Schema.optional(Schema.String),
        certificateChain: Schema.optional(Schema.String),
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
        notAfter: Schema.optional(Schema.String),
        notBefore: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/certificates.k8s.io/v1beta1/namespaces/{namespace}/podcertificaterequests/{name}",
    }),
  );
export type ReplaceCertificatesV1beta1NamespacedPodCertificateRequestInput =
  typeof ReplaceCertificatesV1beta1NamespacedPodCertificateRequestInput.Type;

// Output Schema
export const ReplaceCertificatesV1beta1NamespacedPodCertificateRequestOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        beginRefreshAt: Schema.optional(Schema.String),
        certificateChain: Schema.optional(Schema.String),
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
        notAfter: Schema.optional(Schema.String),
        notBefore: Schema.optional(Schema.String),
      }),
    ),
  });
export type ReplaceCertificatesV1beta1NamespacedPodCertificateRequestOutput =
  typeof ReplaceCertificatesV1beta1NamespacedPodCertificateRequestOutput.Type;

// The operation
/**
 * replace the specified PodCertificateRequest
 *
 * @param name - name of the PodCertificateRequest
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCertificatesV1beta1NamespacedPodCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplaceCertificatesV1beta1NamespacedPodCertificateRequestInput,
    outputSchema:
      ReplaceCertificatesV1beta1NamespacedPodCertificateRequestOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const ReplaceCertificatesV1beta1NamespacedPodCertificateRequestStatusInput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        beginRefreshAt: Schema.optional(Schema.String),
        certificateChain: Schema.optional(Schema.String),
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
        notAfter: Schema.optional(Schema.String),
        notBefore: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/apis/certificates.k8s.io/v1beta1/namespaces/{namespace}/podcertificaterequests/{name}/status",
    }),
  );
export type ReplaceCertificatesV1beta1NamespacedPodCertificateRequestStatusInput =
  typeof ReplaceCertificatesV1beta1NamespacedPodCertificateRequestStatusInput.Type;

// Output Schema
export const ReplaceCertificatesV1beta1NamespacedPodCertificateRequestStatusOutput =
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
    }),
    status: Schema.optional(
      Schema.Struct({
        beginRefreshAt: Schema.optional(Schema.String),
        certificateChain: Schema.optional(Schema.String),
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
        notAfter: Schema.optional(Schema.String),
        notBefore: Schema.optional(Schema.String),
      }),
    ),
  });
export type ReplaceCertificatesV1beta1NamespacedPodCertificateRequestStatusOutput =
  typeof ReplaceCertificatesV1beta1NamespacedPodCertificateRequestStatusOutput.Type;

// The operation
/**
 * replace status of the specified PodCertificateRequest
 *
 * @param name - name of the PodCertificateRequest
 * @param namespace - object name and auth scope, such as for teams and projects
 * @param pretty - If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 * @param dryRun - When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 * @param fieldManager - fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 * @param fieldValidation - fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
export const replaceCertificatesV1beta1NamespacedPodCertificateRequestStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ReplaceCertificatesV1beta1NamespacedPodCertificateRequestStatusInput,
    outputSchema:
      ReplaceCertificatesV1beta1NamespacedPodCertificateRequestStatusOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
// Input Schema
export const WatchCertificatesV1CertificateSigningRequestInput =
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
      path: "/apis/certificates.k8s.io/v1/watch/certificatesigningrequests/{name}",
    }),
  );
export type WatchCertificatesV1CertificateSigningRequestInput =
  typeof WatchCertificatesV1CertificateSigningRequestInput.Type;

// Output Schema
export const WatchCertificatesV1CertificateSigningRequestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCertificatesV1CertificateSigningRequestOutput =
  typeof WatchCertificatesV1CertificateSigningRequestOutput.Type;

// The operation
/**
 * watch changes to an object of kind CertificateSigningRequest. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the CertificateSigningRequest
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
export const watchCertificatesV1CertificateSigningRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCertificatesV1CertificateSigningRequestInput,
    outputSchema: WatchCertificatesV1CertificateSigningRequestOutput,
  }));
// Input Schema
export const WatchCertificatesV1CertificateSigningRequestListInput =
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
      path: "/apis/certificates.k8s.io/v1/watch/certificatesigningrequests",
    }),
  );
export type WatchCertificatesV1CertificateSigningRequestListInput =
  typeof WatchCertificatesV1CertificateSigningRequestListInput.Type;

// Output Schema
export const WatchCertificatesV1CertificateSigningRequestListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCertificatesV1CertificateSigningRequestListOutput =
  typeof WatchCertificatesV1CertificateSigningRequestListOutput.Type;

// The operation
/**
 * watch individual changes to a list of CertificateSigningRequest. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchCertificatesV1CertificateSigningRequestList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCertificatesV1CertificateSigningRequestListInput,
    outputSchema: WatchCertificatesV1CertificateSigningRequestListOutput,
  }));
// Input Schema
export const WatchCertificatesV1alpha1ClusterTrustBundleInput =
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
      path: "/apis/certificates.k8s.io/v1alpha1/watch/clustertrustbundles/{name}",
    }),
  );
export type WatchCertificatesV1alpha1ClusterTrustBundleInput =
  typeof WatchCertificatesV1alpha1ClusterTrustBundleInput.Type;

// Output Schema
export const WatchCertificatesV1alpha1ClusterTrustBundleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCertificatesV1alpha1ClusterTrustBundleOutput =
  typeof WatchCertificatesV1alpha1ClusterTrustBundleOutput.Type;

// The operation
/**
 * watch changes to an object of kind ClusterTrustBundle. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the ClusterTrustBundle
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
export const watchCertificatesV1alpha1ClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCertificatesV1alpha1ClusterTrustBundleInput,
    outputSchema: WatchCertificatesV1alpha1ClusterTrustBundleOutput,
  }));
// Input Schema
export const WatchCertificatesV1alpha1ClusterTrustBundleListInput =
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
      path: "/apis/certificates.k8s.io/v1alpha1/watch/clustertrustbundles",
    }),
  );
export type WatchCertificatesV1alpha1ClusterTrustBundleListInput =
  typeof WatchCertificatesV1alpha1ClusterTrustBundleListInput.Type;

// Output Schema
export const WatchCertificatesV1alpha1ClusterTrustBundleListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCertificatesV1alpha1ClusterTrustBundleListOutput =
  typeof WatchCertificatesV1alpha1ClusterTrustBundleListOutput.Type;

// The operation
/**
 * watch individual changes to a list of ClusterTrustBundle. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchCertificatesV1alpha1ClusterTrustBundleList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCertificatesV1alpha1ClusterTrustBundleListInput,
    outputSchema: WatchCertificatesV1alpha1ClusterTrustBundleListOutput,
  }));
// Input Schema
export const WatchCertificatesV1beta1ClusterTrustBundleInput =
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
      path: "/apis/certificates.k8s.io/v1beta1/watch/clustertrustbundles/{name}",
    }),
  );
export type WatchCertificatesV1beta1ClusterTrustBundleInput =
  typeof WatchCertificatesV1beta1ClusterTrustBundleInput.Type;

// Output Schema
export const WatchCertificatesV1beta1ClusterTrustBundleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCertificatesV1beta1ClusterTrustBundleOutput =
  typeof WatchCertificatesV1beta1ClusterTrustBundleOutput.Type;

// The operation
/**
 * watch changes to an object of kind ClusterTrustBundle. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the ClusterTrustBundle
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
export const watchCertificatesV1beta1ClusterTrustBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCertificatesV1beta1ClusterTrustBundleInput,
    outputSchema: WatchCertificatesV1beta1ClusterTrustBundleOutput,
  }));
// Input Schema
export const WatchCertificatesV1beta1ClusterTrustBundleListInput =
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
      path: "/apis/certificates.k8s.io/v1beta1/watch/clustertrustbundles",
    }),
  );
export type WatchCertificatesV1beta1ClusterTrustBundleListInput =
  typeof WatchCertificatesV1beta1ClusterTrustBundleListInput.Type;

// Output Schema
export const WatchCertificatesV1beta1ClusterTrustBundleListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCertificatesV1beta1ClusterTrustBundleListOutput =
  typeof WatchCertificatesV1beta1ClusterTrustBundleListOutput.Type;

// The operation
/**
 * watch individual changes to a list of ClusterTrustBundle. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchCertificatesV1beta1ClusterTrustBundleList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCertificatesV1beta1ClusterTrustBundleListInput,
    outputSchema: WatchCertificatesV1beta1ClusterTrustBundleListOutput,
  }));
// Input Schema
export const WatchCertificatesV1beta1NamespacedPodCertificateRequestInput =
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
      path: "/apis/certificates.k8s.io/v1beta1/watch/namespaces/{namespace}/podcertificaterequests/{name}",
    }),
  );
export type WatchCertificatesV1beta1NamespacedPodCertificateRequestInput =
  typeof WatchCertificatesV1beta1NamespacedPodCertificateRequestInput.Type;

// Output Schema
export const WatchCertificatesV1beta1NamespacedPodCertificateRequestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCertificatesV1beta1NamespacedPodCertificateRequestOutput =
  typeof WatchCertificatesV1beta1NamespacedPodCertificateRequestOutput.Type;

// The operation
/**
 * watch changes to an object of kind PodCertificateRequest. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 *
 * @param allowWatchBookmarks - allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 * @param continue - The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".

This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 * @param fieldSelector - A selector to restrict the list of returned objects by their fields. Defaults to everything.
 * @param labelSelector - A selector to restrict the list of returned objects by their labels. Defaults to everything.
 * @param limit - limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.

The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 * @param name - name of the PodCertificateRequest
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
export const watchCertificatesV1beta1NamespacedPodCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatchCertificatesV1beta1NamespacedPodCertificateRequestInput,
    outputSchema: WatchCertificatesV1beta1NamespacedPodCertificateRequestOutput,
  }));
// Input Schema
export const WatchCertificatesV1beta1NamespacedPodCertificateRequestListInput =
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
      path: "/apis/certificates.k8s.io/v1beta1/watch/namespaces/{namespace}/podcertificaterequests",
    }),
  );
export type WatchCertificatesV1beta1NamespacedPodCertificateRequestListInput =
  typeof WatchCertificatesV1beta1NamespacedPodCertificateRequestListInput.Type;

// Output Schema
export const WatchCertificatesV1beta1NamespacedPodCertificateRequestListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCertificatesV1beta1NamespacedPodCertificateRequestListOutput =
  typeof WatchCertificatesV1beta1NamespacedPodCertificateRequestListOutput.Type;

// The operation
/**
 * watch individual changes to a list of PodCertificateRequest. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchCertificatesV1beta1NamespacedPodCertificateRequestList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WatchCertificatesV1beta1NamespacedPodCertificateRequestListInput,
    outputSchema:
      WatchCertificatesV1beta1NamespacedPodCertificateRequestListOutput,
  }));
// Input Schema
export const WatchCertificatesV1beta1PodCertificateRequestListForAllNamespacesInput =
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
      path: "/apis/certificates.k8s.io/v1beta1/watch/podcertificaterequests",
    }),
  );
export type WatchCertificatesV1beta1PodCertificateRequestListForAllNamespacesInput =
  typeof WatchCertificatesV1beta1PodCertificateRequestListForAllNamespacesInput.Type;

// Output Schema
export const WatchCertificatesV1beta1PodCertificateRequestListForAllNamespacesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    type: Schema.String,
  });
export type WatchCertificatesV1beta1PodCertificateRequestListForAllNamespacesOutput =
  typeof WatchCertificatesV1beta1PodCertificateRequestListForAllNamespacesOutput.Type;

// The operation
/**
 * watch individual changes to a list of PodCertificateRequest. deprecated: use the 'watch' parameter with a list operation instead.
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
export const watchCertificatesV1beta1PodCertificateRequestListForAllNamespaces =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WatchCertificatesV1beta1PodCertificateRequestListForAllNamespacesInput,
    outputSchema:
      WatchCertificatesV1beta1PodCertificateRequestListForAllNamespacesOutput,
  }));
