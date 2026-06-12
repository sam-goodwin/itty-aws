/**
 * Azure Certificateregistration API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const CsmOperationDescriptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.optional(Schema.String),
    isDataAction: Schema.optional(Schema.Boolean),
    display: Schema.optional(Schema.suspend(() => CsmOperationDisplaySchema)),
    origin: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => CsmOperationDescriptionPropertiesSchema),
    ),
  },
);
const CsmOperationDisplaySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provider: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
  operation: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const CsmOperationDescriptionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceSpecification: Schema.optional(
      Schema.suspend(() => ServiceSpecificationSchema),
    ),
  });
const ServiceSpecificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metricSpecifications: Schema.optional(
    Schema.Array(Schema.suspend(() => MetricSpecificationSchema)),
  ),
  logSpecifications: Schema.optional(
    Schema.Array(Schema.suspend(() => LogSpecificationSchema)),
  ),
});
const MetricSpecificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  displayDescription: Schema.optional(Schema.String),
  unit: Schema.optional(Schema.String),
  aggregationType: Schema.optional(Schema.String),
  supportsInstanceLevelAggregation: Schema.optional(Schema.Boolean),
  enableRegionalMdmAccount: Schema.optional(Schema.Boolean),
  sourceMdmAccount: Schema.optional(Schema.String),
  sourceMdmNamespace: Schema.optional(Schema.String),
  metricFilterPattern: Schema.optional(Schema.String),
  fillGapWithZero: Schema.optional(Schema.Boolean),
  isInternal: Schema.optional(Schema.Boolean),
  dimensions: Schema.optional(
    Schema.Array(Schema.suspend(() => DimensionSchema)),
  ),
  category: Schema.optional(Schema.String),
  availabilities: Schema.optional(
    Schema.Array(Schema.suspend(() => MetricAvailabilitySchema)),
  ),
  supportedTimeGrainTypes: Schema.optional(Schema.Array(Schema.String)),
  supportedAggregationTypes: Schema.optional(Schema.Array(Schema.String)),
});
const DimensionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  internalName: Schema.optional(Schema.String),
  toBeExportedForShoebox: Schema.optional(Schema.Boolean),
});
const MetricAvailabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  timeGrain: Schema.optional(Schema.String),
  blobDuration: Schema.optional(Schema.String),
});
const LogSpecificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  blobDuration: Schema.optional(Schema.String),
  logFilterPattern: Schema.optional(Schema.String),
});
const AppServiceCertificateOrderSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const systemDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createdBy: Schema.optional(Schema.String),
  createdByType: Schema.optional(
    Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
  ),
  createdAt: Schema.optional(Schema.String),
  lastModifiedBy: Schema.optional(Schema.String),
  lastModifiedByType: Schema.optional(
    Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
  ),
  lastModifiedAt: Schema.optional(Schema.String),
});
const AppServiceCertificateOrderPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificates: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => AppServiceCertificateSchema),
      ),
    ),
    distinguishedName: Schema.optional(Schema.String),
    domainVerificationToken: Schema.optional(Schema.String),
    validityInYears: Schema.optional(Schema.Number),
    keySize: Schema.optional(Schema.Number),
    productType: Schema.suspend(() => CertificateProductTypeSchema),
    autoRenew: Schema.optional(Schema.Boolean),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    status: Schema.optional(Schema.suspend(() => CertificateOrderStatusSchema)),
    signedCertificate: Schema.optional(
      Schema.suspend(() => CertificateDetailsSchema),
    ),
    csr: Schema.optional(Schema.String),
    intermediate: Schema.optional(
      Schema.suspend(() => CertificateDetailsSchema),
    ),
    root: Schema.optional(Schema.suspend(() => CertificateDetailsSchema)),
    serialNumber: Schema.optional(Schema.String),
    lastCertificateIssuanceTime: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
    isPrivateKeyExternal: Schema.optional(Schema.Boolean),
    appServiceCertificateNotRenewableReasons: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceNotRenewableReasonSchema)),
    ),
    nextAutoRenewalTimeStamp: Schema.optional(Schema.String),
    contact: Schema.optional(
      Schema.suspend(() => CertificateOrderContactSchema),
    ),
  });
const AppServiceCertificateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyVaultId: Schema.optional(Schema.String),
  keyVaultSecretName: Schema.optional(Schema.String),
  provisioningState: Schema.optional(
    Schema.suspend(() => KeyVaultSecretStatusSchema),
  ),
});
const KeyVaultSecretStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Initialized",
  "WaitingOnCertificateOrder",
  "Succeeded",
  "CertificateOrderFailed",
  "OperationNotPermittedOnKeyVault",
  "AzureServiceUnauthorizedToAccessKeyVault",
  "KeyVaultDoesNotExist",
  "KeyVaultSecretDoesNotExist",
  "UnknownError",
  "ExternalPrivateKey",
  "Unknown",
]);
const CertificateProductTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "StandardDomainValidatedSsl",
    "StandardDomainValidatedWildCardSsl",
  ]);
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
  "Canceled",
  "InProgress",
  "Deleting",
]);
const CertificateOrderStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Pendingissuance",
    "Issued",
    "Revoked",
    "Canceled",
    "Denied",
    "Pendingrevocation",
    "PendingRekey",
    "Unused",
    "Expired",
    "NotSubmitted",
  ]);
const CertificateDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  version: Schema.optional(Schema.Number),
  serialNumber: Schema.optional(Schema.String),
  thumbprint: Schema.optional(Schema.String),
  subject: Schema.optional(Schema.String),
  notBefore: Schema.optional(Schema.String),
  notAfter: Schema.optional(Schema.String),
  signatureAlgorithm: Schema.optional(Schema.String),
  issuer: Schema.optional(Schema.String),
  rawData: Schema.optional(Schema.String),
});
const ResourceNotRenewableReasonSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "RegistrationStatusNotSupportedForRenewal",
    "ExpirationNotInRenewalTimeRange",
    "SubscriptionNotActive",
  ]);
const CertificateOrderContactSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    email: Schema.optional(Schema.String),
    nameFirst: Schema.optional(Schema.String),
    nameLast: Schema.optional(Schema.String),
    phone: Schema.optional(Schema.String),
  },
);
const AppServiceCertificateOrderPatchResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificates: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => AppServiceCertificateSchema),
      ),
    ),
    distinguishedName: Schema.optional(Schema.String),
    domainVerificationToken: Schema.optional(Schema.String),
    validityInYears: Schema.optional(Schema.Number),
    keySize: Schema.optional(Schema.Number),
    productType: Schema.suspend(() => CertificateProductTypeSchema),
    autoRenew: Schema.optional(Schema.Boolean),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    status: Schema.optional(Schema.suspend(() => CertificateOrderStatusSchema)),
    signedCertificate: Schema.optional(
      Schema.suspend(() => CertificateDetailsSchema),
    ),
    csr: Schema.optional(Schema.String),
    intermediate: Schema.optional(
      Schema.suspend(() => CertificateDetailsSchema),
    ),
    root: Schema.optional(Schema.suspend(() => CertificateDetailsSchema)),
    serialNumber: Schema.optional(Schema.String),
    lastCertificateIssuanceTime: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
    isPrivateKeyExternal: Schema.optional(Schema.Boolean),
    appServiceCertificateNotRenewableReasons: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceNotRenewableReasonSchema)),
    ),
    nextAutoRenewalTimeStamp: Schema.optional(Schema.String),
    contact: Schema.optional(
      Schema.suspend(() => CertificateOrderContactSchema),
    ),
  });
const AppServiceCertificateResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const DetectorResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const DetectorResponsePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.suspend(() => DetectorInfoSchema)),
    dataset: Schema.optional(
      Schema.Array(Schema.suspend(() => DiagnosticDataSchema)),
    ),
    status: Schema.optional(Schema.suspend(() => StatusSchema)),
    dataProvidersMetadata: Schema.optional(
      Schema.Array(Schema.suspend(() => DataProviderMetadataSchema)),
    ),
    suggestedUtterances: Schema.optional(
      Schema.suspend(() => QueryUtterancesResultsSchema),
    ),
  });
const DetectorInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  author: Schema.optional(Schema.String),
  category: Schema.optional(Schema.String),
  supportTopicList: Schema.optional(
    Schema.Array(Schema.suspend(() => SupportTopicSchema)),
  ),
  analysisType: Schema.optional(Schema.Array(Schema.String)),
  type: Schema.optional(Schema.suspend(() => DetectorTypeSchema)),
  score: Schema.optional(Schema.Number),
});
const SupportTopicSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  pesId: Schema.optional(Schema.String),
});
const DetectorTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Detector",
  "Analysis",
  "CategoryOverview",
]);
const DiagnosticDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  table: Schema.optional(Schema.suspend(() => DataTableResponseObjectSchema)),
  renderingProperties: Schema.optional(Schema.suspend(() => RenderingSchema)),
});
const DataTableResponseObjectSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    tableName: Schema.optional(Schema.String),
    columns: Schema.optional(
      Schema.Array(Schema.suspend(() => DataTableResponseColumnSchema)),
    ),
    rows: Schema.optional(Schema.Array(Schema.Array(Schema.String))),
  },
);
const DataTableResponseColumnSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    columnName: Schema.optional(Schema.String),
    dataType: Schema.optional(Schema.String),
    columnType: Schema.optional(Schema.String),
  },
);
const RenderingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.suspend(() => RenderingTypeSchema)),
  title: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const RenderingTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NoGraph",
  "Table",
  "TimeSeries",
  "TimeSeriesPerInstance",
  "PieChart",
  "DataSummary",
  "Email",
  "Insights",
  "DynamicInsight",
  "Markdown",
  "Detector",
  "DropDown",
  "Card",
  "Solution",
  "Guage",
  "Form",
  "ChangeSets",
  "ChangeAnalysisOnboarding",
  "ChangesView",
  "AppInsight",
  "DependencyGraph",
  "DownTime",
  "SummaryCard",
  "SearchComponent",
  "AppInsightEnablement",
]);
const StatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.optional(Schema.String),
  statusId: Schema.optional(Schema.suspend(() => InsightStatusSchema)),
});
const InsightStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Critical",
  "Warning",
  "Info",
  "Success",
  "None",
]);
const DataProviderMetadataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  providerName: Schema.optional(Schema.String),
  propertyBag: Schema.optional(
    Schema.Array(Schema.suspend(() => KeyValuePairStringObjectSchema)),
  ),
});
const KeyValuePairStringObjectSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const QueryUtterancesResultsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  query: Schema.optional(Schema.String),
  results: Schema.optional(
    Schema.Array(Schema.suspend(() => QueryUtterancesResultSchema)),
  ),
});
const QueryUtterancesResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sampleUtterance: Schema.optional(Schema.suspend(() => SampleUtteranceSchema)),
  score: Schema.optional(Schema.Number),
});
const SampleUtteranceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  text: Schema.optional(Schema.String),
  links: Schema.optional(Schema.Array(Schema.String)),
  qid: Schema.optional(Schema.String),
});
const ReissueCertificateOrderRequestPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keySize: Schema.optional(Schema.Number),
    delayExistingRevokeInHours: Schema.optional(Schema.Number),
    csr: Schema.optional(Schema.String),
    isPrivateKeyExternal: Schema.optional(Schema.Boolean),
  });
const RenewCertificateOrderRequestPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keySize: Schema.optional(Schema.Number),
    csr: Schema.optional(Schema.String),
    isPrivateKeyExternal: Schema.optional(Schema.Boolean),
  });
const CertificateOrderActionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  actionType: Schema.optional(
    Schema.suspend(() => CertificateOrderActionTypeSchema),
  ),
  createdAt: Schema.optional(Schema.String),
});
const CertificateOrderActionTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "CertificateIssued",
    "CertificateOrderCanceled",
    "CertificateOrderCreated",
    "CertificateRevoked",
    "DomainValidationComplete",
    "FraudDetected",
    "OrgNameChange",
    "OrgValidationComplete",
    "SanDrop",
    "FraudCleared",
    "CertificateExpired",
    "CertificateExpirationWarning",
    "FraudDocumentationRequired",
    "Unknown",
  ]);
const CertificateEmailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  emailId: Schema.optional(Schema.String),
  timeStamp: Schema.optional(Schema.String),
});

// Input Schema
export const AppServiceCertificateOrdersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AppServiceCertificateOrderPropertiesSchema),
    ),
    kind: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}",
      apiVersion: "2024-11-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AppServiceCertificateOrdersCreateOrUpdateInput =
  typeof AppServiceCertificateOrdersCreateOrUpdateInput.Type;

// Output Schema
export const AppServiceCertificateOrdersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AppServiceCertificateOrderPropertiesSchema),
    ),
    kind: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AppServiceCertificateOrdersCreateOrUpdateOutput =
  typeof AppServiceCertificateOrdersCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a certificate purchase order.
 *
 * Description for Create or update a certificate purchase order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersCreateOrUpdateInput,
    outputSchema: AppServiceCertificateOrdersCreateOrUpdateOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersCreateOrUpdateCertificateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AppServiceCertificateSchema),
    ),
    kind: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}",
      apiVersion: "2024-11-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AppServiceCertificateOrdersCreateOrUpdateCertificateInput =
  typeof AppServiceCertificateOrdersCreateOrUpdateCertificateInput.Type;

// Output Schema
export const AppServiceCertificateOrdersCreateOrUpdateCertificateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AppServiceCertificateSchema),
    ),
    kind: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AppServiceCertificateOrdersCreateOrUpdateCertificateOutput =
  typeof AppServiceCertificateOrdersCreateOrUpdateCertificateOutput.Type;

// The operation
/**
 * Creates or updates a certificate and associates with key vault secret.
 *
 * Description for Creates or updates a certificate and associates with key vault secret.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 * @param name - Name of the certificate.
 */
export const AppServiceCertificateOrdersCreateOrUpdateCertificate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersCreateOrUpdateCertificateInput,
    outputSchema: AppServiceCertificateOrdersCreateOrUpdateCertificateOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersDeleteInput =
  typeof AppServiceCertificateOrdersDeleteInput.Type;

// Output Schema
export const AppServiceCertificateOrdersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AppServiceCertificateOrdersDeleteOutput =
  typeof AppServiceCertificateOrdersDeleteOutput.Type;

// The operation
/**
 * Delete an existing certificate order.
 *
 * Description for Delete an existing certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersDeleteInput,
    outputSchema: AppServiceCertificateOrdersDeleteOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersDeleteCertificateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersDeleteCertificateInput =
  typeof AppServiceCertificateOrdersDeleteCertificateInput.Type;

// Output Schema
export const AppServiceCertificateOrdersDeleteCertificateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AppServiceCertificateOrdersDeleteCertificateOutput =
  typeof AppServiceCertificateOrdersDeleteCertificateOutput.Type;

// The operation
/**
 * Delete the certificate associated with a certificate order.
 *
 * Description for Delete the certificate associated with a certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 * @param name - Name of the certificate.
 */
export const AppServiceCertificateOrdersDeleteCertificate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersDeleteCertificateInput,
    outputSchema: AppServiceCertificateOrdersDeleteCertificateOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersGetInput =
  typeof AppServiceCertificateOrdersGetInput.Type;

// Output Schema
export const AppServiceCertificateOrdersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AppServiceCertificateOrderPropertiesSchema),
    ),
    kind: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AppServiceCertificateOrdersGetOutput =
  typeof AppServiceCertificateOrdersGetOutput.Type;

// The operation
/**
 * Get a certificate order.
 *
 * Description for Get a certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersGetInput,
    outputSchema: AppServiceCertificateOrdersGetOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersGetCertificateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersGetCertificateInput =
  typeof AppServiceCertificateOrdersGetCertificateInput.Type;

// Output Schema
export const AppServiceCertificateOrdersGetCertificateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AppServiceCertificateSchema),
    ),
    kind: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AppServiceCertificateOrdersGetCertificateOutput =
  typeof AppServiceCertificateOrdersGetCertificateOutput.Type;

// The operation
/**
 * Get the certificate associated with a certificate order.
 *
 * Description for Get the certificate associated with a certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 * @param name - Name of the certificate.
 */
export const AppServiceCertificateOrdersGetCertificate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersGetCertificateInput,
    outputSchema: AppServiceCertificateOrdersGetCertificateOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CertificateRegistration/certificateOrders",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersListInput =
  typeof AppServiceCertificateOrdersListInput.Type;

// Output Schema
export const AppServiceCertificateOrdersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AppServiceCertificateOrderSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AppServiceCertificateOrdersListOutput =
  typeof AppServiceCertificateOrdersListOutput.Type;

// The operation
/**
 * List all certificate orders in a subscription.
 *
 * Description for List all certificate orders in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AppServiceCertificateOrdersList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersListInput,
    outputSchema: AppServiceCertificateOrdersListOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersListByResourceGroupInput =
  typeof AppServiceCertificateOrdersListByResourceGroupInput.Type;

// Output Schema
export const AppServiceCertificateOrdersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AppServiceCertificateOrderSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AppServiceCertificateOrdersListByResourceGroupOutput =
  typeof AppServiceCertificateOrdersListByResourceGroupOutput.Type;

// The operation
/**
 * Get certificate orders in a resource group.
 *
 * Description for Get certificate orders in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AppServiceCertificateOrdersListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersListByResourceGroupInput,
    outputSchema: AppServiceCertificateOrdersListByResourceGroupOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersListCertificatesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersListCertificatesInput =
  typeof AppServiceCertificateOrdersListCertificatesInput.Type;

// Output Schema
export const AppServiceCertificateOrdersListCertificatesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => AppServiceCertificateResourceSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type AppServiceCertificateOrdersListCertificatesOutput =
  typeof AppServiceCertificateOrdersListCertificatesOutput.Type;

// The operation
/**
 * List all certificates associated with a certificate order.
 *
 * Description for List all certificates associated with a certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersListCertificates =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersListCertificatesInput,
    outputSchema: AppServiceCertificateOrdersListCertificatesOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersReissueInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ReissueCertificateOrderRequestPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/reissue",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersReissueInput =
  typeof AppServiceCertificateOrdersReissueInput.Type;

// Output Schema
export const AppServiceCertificateOrdersReissueOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AppServiceCertificateOrdersReissueOutput =
  typeof AppServiceCertificateOrdersReissueOutput.Type;

// The operation
/**
 * Reissue an existing certificate order.
 *
 * Description for Reissue an existing certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersReissue =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersReissueInput,
    outputSchema: AppServiceCertificateOrdersReissueOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersRenewInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RenewCertificateOrderRequestPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/renew",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersRenewInput =
  typeof AppServiceCertificateOrdersRenewInput.Type;

// Output Schema
export const AppServiceCertificateOrdersRenewOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AppServiceCertificateOrdersRenewOutput =
  typeof AppServiceCertificateOrdersRenewOutput.Type;

// The operation
/**
 * Renew an existing certificate order.
 *
 * Description for Renew an existing certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersRenew =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersRenewInput,
    outputSchema: AppServiceCertificateOrdersRenewOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersResendEmailInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/resendEmail",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersResendEmailInput =
  typeof AppServiceCertificateOrdersResendEmailInput.Type;

// Output Schema
export const AppServiceCertificateOrdersResendEmailOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AppServiceCertificateOrdersResendEmailOutput =
  typeof AppServiceCertificateOrdersResendEmailOutput.Type;

// The operation
/**
 * Resend certificate email.
 *
 * Description for Resend certificate email.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersResendEmail =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersResendEmailInput,
    outputSchema: AppServiceCertificateOrdersResendEmailOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersResendRequestEmailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/resendRequestEmails",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersResendRequestEmailsInput =
  typeof AppServiceCertificateOrdersResendRequestEmailsInput.Type;

// Output Schema
export const AppServiceCertificateOrdersResendRequestEmailsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AppServiceCertificateOrdersResendRequestEmailsOutput =
  typeof AppServiceCertificateOrdersResendRequestEmailsOutput.Type;

// The operation
/**
 * Resend domain verification email to customer for this certificate order
 *
 * Resend domain verification ownership email containing steps on how to verify a domain for a given certificate order
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersResendRequestEmails =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersResendRequestEmailsInput,
    outputSchema: AppServiceCertificateOrdersResendRequestEmailsOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersRetrieveCertificateActionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/retrieveCertificateActions",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersRetrieveCertificateActionsInput =
  typeof AppServiceCertificateOrdersRetrieveCertificateActionsInput.Type;

// Output Schema
export const AppServiceCertificateOrdersRetrieveCertificateActionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => CertificateOrderActionSchema),
  );
export type AppServiceCertificateOrdersRetrieveCertificateActionsOutput =
  typeof AppServiceCertificateOrdersRetrieveCertificateActionsOutput.Type;

// The operation
/**
 * Retrieve the list of certificate actions.
 *
 * Description for Retrieve the list of certificate actions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the certificate order..
 */
export const AppServiceCertificateOrdersRetrieveCertificateActions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersRetrieveCertificateActionsInput,
    outputSchema: AppServiceCertificateOrdersRetrieveCertificateActionsOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersRetrieveCertificateEmailHistoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/retrieveEmailHistory",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersRetrieveCertificateEmailHistoryInput =
  typeof AppServiceCertificateOrdersRetrieveCertificateEmailHistoryInput.Type;

// Output Schema
export const AppServiceCertificateOrdersRetrieveCertificateEmailHistoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => CertificateEmailSchema),
  );
export type AppServiceCertificateOrdersRetrieveCertificateEmailHistoryOutput =
  typeof AppServiceCertificateOrdersRetrieveCertificateEmailHistoryOutput.Type;

// The operation
/**
 * Retrieve email history.
 *
 * Description for Retrieve email history.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the certificate order..
 */
export const AppServiceCertificateOrdersRetrieveCertificateEmailHistory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AppServiceCertificateOrdersRetrieveCertificateEmailHistoryInput,
    outputSchema:
      AppServiceCertificateOrdersRetrieveCertificateEmailHistoryOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersRetrieveSiteSealInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    lightTheme: Schema.optional(Schema.Boolean),
    locale: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/retrieveSiteSeal",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersRetrieveSiteSealInput =
  typeof AppServiceCertificateOrdersRetrieveSiteSealInput.Type;

// Output Schema
export const AppServiceCertificateOrdersRetrieveSiteSealOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    html: Schema.String,
  });
export type AppServiceCertificateOrdersRetrieveSiteSealOutput =
  typeof AppServiceCertificateOrdersRetrieveSiteSealOutput.Type;

// The operation
/**
 * This method is used to obtain the site seal information for an issued certificate.
 *
 * This method is used to obtain the site seal information for an issued certificate. A site seal is a graphic that the certificate purchaser can embed on their web site to show their visitors information about their SSL certificate. If a web site visitor clicks on the site seal image, a pop-up page is displayed that contains detailed information about the SSL certificate. The site seal token is used to link the site seal graphic image to the appropriate certificate details pop-up page display when a user clicks on the site seal. The site seal images are expected to be static images and hosted by the reseller, to minimize delays for customer page load times.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersRetrieveSiteSeal =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersRetrieveSiteSealInput,
    outputSchema: AppServiceCertificateOrdersRetrieveSiteSealOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(
        () => AppServiceCertificateOrderPatchResourcePropertiesSchema,
      ),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersUpdateInput =
  typeof AppServiceCertificateOrdersUpdateInput.Type;

// Output Schema
export const AppServiceCertificateOrdersUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AppServiceCertificateOrderPropertiesSchema),
    ),
    kind: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AppServiceCertificateOrdersUpdateOutput =
  typeof AppServiceCertificateOrdersUpdateOutput.Type;

// The operation
/**
 * Create or update a certificate purchase order.
 *
 * Description for Create or update a certificate purchase order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersUpdateInput,
    outputSchema: AppServiceCertificateOrdersUpdateOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersUpdateCertificateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AppServiceCertificateSchema),
    ),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersUpdateCertificateInput =
  typeof AppServiceCertificateOrdersUpdateCertificateInput.Type;

// Output Schema
export const AppServiceCertificateOrdersUpdateCertificateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AppServiceCertificateSchema),
    ),
    kind: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AppServiceCertificateOrdersUpdateCertificateOutput =
  typeof AppServiceCertificateOrdersUpdateCertificateOutput.Type;

// The operation
/**
 * Creates or updates a certificate and associates with key vault secret.
 *
 * Description for Creates or updates a certificate and associates with key vault secret.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 * @param name - Name of the certificate.
 */
export const AppServiceCertificateOrdersUpdateCertificate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersUpdateCertificateInput,
    outputSchema: AppServiceCertificateOrdersUpdateCertificateOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersValidatePurchaseInformationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AppServiceCertificateOrderPropertiesSchema),
    ),
    kind: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CertificateRegistration/validateCertificateRegistrationInformation",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersValidatePurchaseInformationInput =
  typeof AppServiceCertificateOrdersValidatePurchaseInformationInput.Type;

// Output Schema
export const AppServiceCertificateOrdersValidatePurchaseInformationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AppServiceCertificateOrdersValidatePurchaseInformationOutput =
  typeof AppServiceCertificateOrdersValidatePurchaseInformationOutput.Type;

// The operation
/**
 * Validate information for a certificate order.
 *
 * Description for Validate information for a certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AppServiceCertificateOrdersValidatePurchaseInformation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersValidatePurchaseInformationInput,
    outputSchema: AppServiceCertificateOrdersValidatePurchaseInformationOutput,
  }));
// Input Schema
export const AppServiceCertificateOrdersVerifyDomainOwnershipInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/verifyDomainOwnership",
      apiVersion: "2024-11-01",
    }),
  );
export type AppServiceCertificateOrdersVerifyDomainOwnershipInput =
  typeof AppServiceCertificateOrdersVerifyDomainOwnershipInput.Type;

// Output Schema
export const AppServiceCertificateOrdersVerifyDomainOwnershipOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AppServiceCertificateOrdersVerifyDomainOwnershipOutput =
  typeof AppServiceCertificateOrdersVerifyDomainOwnershipOutput.Type;

// The operation
/**
 * Verify domain ownership for this certificate order.
 *
 * Description for Verify domain ownership for this certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersVerifyDomainOwnership =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersVerifyDomainOwnershipInput,
    outputSchema: AppServiceCertificateOrdersVerifyDomainOwnershipOutput,
  }));
// Input Schema
export const CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    detectorName: Schema.String.pipe(T.PathParam()),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    timeGrain: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/detectors/{detectorName}",
      apiVersion: "2024-11-01",
    }),
  );
export type CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseInput =
  typeof CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseInput.Type;

// Output Schema
export const CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DetectorResponsePropertiesSchema),
    ),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseOutput =
  typeof CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseOutput.Type;

// The operation
/**
 * Microsoft.CertificateRegistration call to get a detector response from App Lens.
 *
 * Description for Microsoft.CertificateRegistration call to get a detector response from App Lens.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 * @param detectorName - The detector name which needs to be run.
 * @param startTime - The start time for detector response.
 * @param endTime - The end time for the detector response.
 * @param timeGrain - The time grain for the detector response.
 */
export const CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponse =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseInput,
    outputSchema:
      CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseOutput,
  }));
// Input Schema
export const CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/detectors",
      apiVersion: "2024-11-01",
    }),
  );
export type CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseInput =
  typeof CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseInput.Type;

// Output Schema
export const CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => DetectorResponseSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseOutput =
  typeof CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseOutput.Type;

// The operation
/**
 * Microsoft.CertificateRegistration to get the list of detectors for this RP.
 *
 * Description for Microsoft.CertificateRegistration to get the list of detectors for this RP.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponse =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseInput,
    outputSchema:
      CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseOutput,
  }));
// Input Schema
export const CertificateRegistrationProviderListOperationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.CertificateRegistration/operations",
      apiVersion: "2024-11-01",
    }),
  );
export type CertificateRegistrationProviderListOperationsInput =
  typeof CertificateRegistrationProviderListOperationsInput.Type;

// Output Schema
export const CertificateRegistrationProviderListOperationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => CsmOperationDescriptionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type CertificateRegistrationProviderListOperationsOutput =
  typeof CertificateRegistrationProviderListOperationsOutput.Type;

// The operation
/**
 * Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider
 *
 * Description for Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const CertificateRegistrationProviderListOperations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CertificateRegistrationProviderListOperationsInput,
    outputSchema: CertificateRegistrationProviderListOperationsOutput,
  }));
