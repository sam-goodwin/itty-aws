/**
 * Azure Reservations API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const CalculateExchangeRequestPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationsToPurchase: Schema.optional(
      Schema.Array(Schema.suspend(() => PurchaseRequestSchema)),
    ),
    savingsPlansToPurchase: Schema.optional(
      Schema.Array(Schema.suspend(() => SavingsPlanPurchaseRequestSchema)),
    ),
    reservationsToExchange: Schema.optional(
      Schema.Array(Schema.suspend(() => ReservationToReturnSchema)),
    ),
  });
const PurchaseRequestSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sku: Schema.optional(Schema.suspend(() => SkuNameSchema)),
  location: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.suspend(() => PurchaseRequestPropertiesSchema),
  ),
});
const SkuNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
});
const PurchaseRequestPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservedResourceType: Schema.optional(
      Schema.suspend(() => ReservedResourceTypeSchema),
    ),
    billingScopeId: Schema.optional(Schema.String),
    term: Schema.optional(Schema.suspend(() => ReservationTermSchema)),
    billingPlan: Schema.optional(
      Schema.suspend(() => ReservationBillingPlanSchema),
    ),
    quantity: Schema.optional(Schema.Number),
    displayName: Schema.optional(Schema.String),
    appliedScopeType: Schema.optional(
      Schema.suspend(() => AppliedScopeTypeSchema),
    ),
    appliedScopes: Schema.optional(Schema.Array(Schema.String)),
    appliedScopeProperties: Schema.optional(
      Schema.suspend(() => AppliedScopePropertiesSchema),
    ),
    renew: Schema.optional(Schema.Boolean),
    reservedResourceProperties: Schema.optional(
      Schema.suspend(
        () => PurchaseRequestPropertiesReservedResourcePropertiesSchema,
      ),
    ),
    reviewDateTime: Schema.optional(Schema.String),
  });
const ReservedResourceTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "VirtualMachines",
  "SqlDatabases",
  "SuseLinux",
  "CosmosDb",
  "RedHat",
  "SqlDataWarehouse",
  "VMwareCloudSimple",
  "RedHatOsa",
  "Databricks",
  "AppService",
  "ManagedDisk",
  "BlockBlob",
  "RedisCache",
  "AzureDataExplorer",
  "MySql",
  "MariaDb",
  "PostgreSql",
  "DedicatedHost",
  "SapHana",
  "SqlAzureHybridBenefit",
  "AVS",
  "DataFactory",
  "NetAppStorage",
  "AzureFiles",
  "SqlEdge",
  "VirtualMachineSoftware",
]);
const ReservationTermSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "P1Y",
  "P3Y",
  "P5Y",
]);
const ReservationBillingPlanSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Upfront", "Monthly"]);
const AppliedScopeTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Single",
  "Shared",
  "ManagementGroup",
]);
const AppliedScopePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tenantId: Schema.optional(Schema.String),
  managementGroupId: Schema.optional(Schema.String),
  subscriptionId: Schema.optional(Schema.String),
  resourceGroupId: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
});
const PurchaseRequestPropertiesReservedResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceFlexibility: Schema.optional(
      Schema.suspend(() => InstanceFlexibilitySchema),
    ),
  });
const InstanceFlexibilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "On",
  "Off",
]);
const SavingsPlanPurchaseRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.optional(Schema.suspend(() => SkuNameSchema)),
    properties: Schema.optional(
      Schema.suspend(() => SavingsPlanPurchaseRequestPropertiesSchema),
    ),
  });
const SavingsPlanPurchaseRequestPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    billingScopeId: Schema.optional(Schema.String),
    term: Schema.optional(Schema.suspend(() => SavingsPlanTermSchema)),
    billingPlan: Schema.optional(Schema.suspend(() => BillingPlanSchema)),
    appliedScopeType: Schema.optional(
      Schema.suspend(() => AppliedScopeTypeSchema),
    ),
    appliedScopeProperties: Schema.optional(
      Schema.suspend(() => AppliedScopePropertiesSchema),
    ),
    commitment: Schema.optional(Schema.suspend(() => CommitmentSchema)),
  });
const SavingsPlanTermSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "P1Y",
  "P3Y",
]);
const BillingPlanSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["P1M"]);
const CommitmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  currencyCode: Schema.optional(Schema.String),
  amount: Schema.optional(Schema.Number),
});
const ReservationToReturnSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservationId: Schema.optional(Schema.String),
  quantity: Schema.optional(Schema.Number),
});
const CalculateExchangeOperationResultStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Cancelled",
    "Pending",
  ]);
const CalculateExchangeResponsePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.optional(Schema.String),
    netPayable: Schema.optional(Schema.suspend(() => PriceSchema)),
    refundsTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
    purchasesTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
    reservationsToPurchase: Schema.optional(
      Schema.Array(
        Schema.suspend(() => ReservationToPurchaseCalculateExchangeSchema),
      ),
    ),
    savingsPlansToPurchase: Schema.optional(
      Schema.Array(
        Schema.suspend(() => SavingsPlanToPurchaseCalculateExchangeSchema),
      ),
    ),
    reservationsToExchange: Schema.optional(
      Schema.Array(Schema.suspend(() => ReservationToExchangeSchema)),
    ),
    policyResult: Schema.optional(
      Schema.suspend(() => ExchangePolicyErrorsSchema),
    ),
  });
const PriceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  currencyCode: Schema.optional(Schema.String),
  amount: Schema.optional(Schema.Number),
});
const ReservationToPurchaseCalculateExchangeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => PurchaseRequestSchema)),
    billingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
  });
const SavingsPlanToPurchaseCalculateExchangeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SavingsPlanPurchaseRequestSchema),
    ),
    billingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
  });
const ReservationToExchangeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservationId: Schema.optional(Schema.String),
  quantity: Schema.optional(Schema.Number),
  billingRefundAmount: Schema.optional(Schema.suspend(() => PriceSchema)),
  billingInformation: Schema.optional(
    Schema.suspend(() => BillingInformationSchema),
  ),
});
const BillingInformationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingCurrencyTotalPaidAmount: Schema.optional(
    Schema.suspend(() => PriceSchema),
  ),
  billingCurrencyProratedAmount: Schema.optional(
    Schema.suspend(() => PriceSchema),
  ),
  billingCurrencyRemainingCommitmentAmount: Schema.optional(
    Schema.suspend(() => PriceSchema),
  ),
});
const ExchangePolicyErrorsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  policyErrors: Schema.optional(
    Schema.Array(Schema.suspend(() => ExchangePolicyErrorSchema)),
  ),
});
const ExchangePolicyErrorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
});
const OperationResultErrorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
});
const CalculatePriceResponsePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingCurrencyTotal: Schema.optional(
      Schema.suspend(
        () => CalculatePriceResponsePropertiesBillingCurrencyTotalSchema,
      ),
    ),
    netTotal: Schema.optional(Schema.Number),
    taxTotal: Schema.optional(Schema.Number),
    grandTotal: Schema.optional(Schema.Number),
    isTaxIncluded: Schema.optional(Schema.Boolean),
    isBillingPartnerManaged: Schema.optional(Schema.Boolean),
    reservationOrderId: Schema.optional(Schema.String),
    skuTitle: Schema.optional(Schema.String),
    skuDescription: Schema.optional(Schema.String),
    pricingCurrencyTotal: Schema.optional(
      Schema.suspend(
        () => CalculatePriceResponsePropertiesPricingCurrencyTotalSchema,
      ),
    ),
    paymentSchedule: Schema.optional(
      Schema.Array(Schema.suspend(() => PaymentDetailSchema)),
    ),
  });
const CalculatePriceResponsePropertiesBillingCurrencyTotalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currencyCode: Schema.optional(Schema.String),
    amount: Schema.optional(Schema.Number),
  });
const CalculatePriceResponsePropertiesPricingCurrencyTotalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currencyCode: Schema.optional(Schema.String),
    amount: Schema.optional(Schema.Number),
  });
const PaymentDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dueDate: Schema.optional(Schema.String),
  paymentDate: Schema.optional(Schema.String),
  pricingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
  billingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
  billingAccount: Schema.optional(Schema.String),
  status: Schema.optional(Schema.suspend(() => PaymentStatusSchema)),
  extendedStatusInfo: Schema.optional(
    Schema.suspend(() => ExtendedStatusInfoSchema),
  ),
});
const PaymentStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
  "Scheduled",
  "Cancelled",
]);
const ExtendedStatusInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  statusCode: Schema.optional(
    Schema.suspend(() => ReservationStatusCodeSchema),
  ),
  message: Schema.optional(Schema.String),
});
const ReservationStatusCodeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  [
    "None",
    "Pending",
    "Processing",
    "Active",
    "PurchaseError",
    "PaymentInstrumentError",
    "Split",
    "Merged",
    "Expired",
    "Succeeded",
  ],
);
const ExchangeRequestPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.optional(Schema.String),
  });
const ExchangeOperationResultStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Cancelled",
    "PendingRefunds",
    "PendingPurchases",
  ]);
const ExchangeResponsePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.optional(Schema.String),
    netPayable: Schema.optional(Schema.suspend(() => PriceSchema)),
    refundsTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
    purchasesTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
    reservationsToPurchase: Schema.optional(
      Schema.Array(Schema.suspend(() => ReservationToPurchaseExchangeSchema)),
    ),
    savingsPlansToPurchase: Schema.optional(
      Schema.Array(Schema.suspend(() => SavingsPlanToPurchaseExchangeSchema)),
    ),
    reservationsToExchange: Schema.optional(
      Schema.Array(Schema.suspend(() => ReservationToReturnForExchangeSchema)),
    ),
    policyResult: Schema.optional(
      Schema.suspend(() => ExchangePolicyErrorsSchema),
    ),
  });
const ReservationToPurchaseExchangeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.optional(Schema.String),
    reservationId: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.suspend(() => PurchaseRequestSchema)),
    billingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
    status: Schema.optional(Schema.suspend(() => OperationStatusSchema)),
  });
const OperationStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
  "Cancelled",
  "Pending",
]);
const SavingsPlanToPurchaseExchangeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    savingsPlanOrderId: Schema.optional(Schema.String),
    savingsPlanId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => SavingsPlanPurchaseRequestSchema),
    ),
    billingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
    status: Schema.optional(Schema.suspend(() => OperationStatusSchema)),
  });
const ReservationToReturnForExchangeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationId: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.Number),
    billingRefundAmount: Schema.optional(Schema.suspend(() => PriceSchema)),
    billingInformation: Schema.optional(
      Schema.suspend(() => BillingInformationSchema),
    ),
    status: Schema.optional(Schema.suspend(() => OperationStatusSchema)),
  });
const OperationResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  isDataAction: Schema.optional(Schema.Boolean),
  display: Schema.optional(Schema.suspend(() => OperationDisplaySchema)),
  origin: Schema.optional(Schema.String),
  properties: Schema.optional(Schema.Unknown),
});
const OperationDisplaySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provider: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
  operation: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const ReservationOrderResponseSchema =
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
const ReservationOrderPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    requestDateTime: Schema.optional(Schema.String),
    createdDateTime: Schema.optional(Schema.String),
    expiryDate: Schema.optional(Schema.String),
    expiryDateTime: Schema.optional(Schema.String),
    benefitStartTime: Schema.optional(Schema.String),
    originalQuantity: Schema.optional(Schema.Number),
    term: Schema.optional(Schema.suspend(() => ReservationTermSchema)),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    billingPlan: Schema.optional(
      Schema.suspend(() => ReservationBillingPlanSchema),
    ),
    planInformation: Schema.optional(
      Schema.suspend(() => ReservationOrderBillingPlanInformationSchema),
    ),
    reservations: Schema.optional(
      Schema.Array(Schema.suspend(() => ReservationResponseSchema)),
    ),
    reviewDateTime: Schema.optional(Schema.String),
  });
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Creating",
  "PendingResourceHold",
  "ConfirmedResourceHold",
  "PendingBilling",
  "ConfirmedBilling",
  "Created",
  "Succeeded",
  "Cancelled",
  "Expired",
  "BillingFailed",
  "Failed",
  "Split",
  "Merged",
]);
const ReservationOrderBillingPlanInformationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pricingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
    startDate: Schema.optional(Schema.String),
    nextPaymentDueDate: Schema.optional(Schema.String),
    transactions: Schema.optional(
      Schema.Array(Schema.suspend(() => PaymentDetailSchema)),
    ),
  });
const ReservationResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const CalculateRefundRequestPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.optional(Schema.String),
    reservationToReturn: Schema.optional(
      Schema.suspend(() => ReservationToReturnSchema),
    ),
  });
const RefundResponsePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.Number),
    billingRefundAmount: Schema.optional(Schema.suspend(() => PriceSchema)),
    pricingRefundAmount: Schema.optional(Schema.suspend(() => PriceSchema)),
    policyResult: Schema.optional(
      Schema.suspend(() => RefundPolicyResultSchema),
    ),
    billingInformation: Schema.optional(
      Schema.suspend(() => RefundBillingInformationSchema),
    ),
  });
const RefundPolicyResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => RefundPolicyResultPropertySchema),
  ),
});
const RefundPolicyResultPropertySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consumedRefundsTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
    maxRefundLimit: Schema.optional(Schema.suspend(() => PriceSchema)),
    policyErrors: Schema.optional(
      Schema.Array(Schema.suspend(() => RefundPolicyErrorSchema)),
    ),
  });
const RefundPolicyErrorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.suspend(() => ErrorResponseCodeSchema)),
  message: Schema.optional(Schema.String),
});
const ErrorResponseCodeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotSpecified",
  "InternalServerError",
  "ServerTimeout",
  "AuthorizationFailed",
  "BadRequest",
  "ClientCertificateThumbprintNotSet",
  "InvalidRequestContent",
  "OperationFailed",
  "HttpMethodNotSupported",
  "InvalidRequestUri",
  "MissingTenantId",
  "InvalidTenantId",
  "InvalidReservationOrderId",
  "InvalidReservationId",
  "ReservationIdNotInReservationOrder",
  "ReservationOrderNotFound",
  "InvalidSubscriptionId",
  "InvalidAccessToken",
  "InvalidLocationId",
  "UnauthenticatedRequestsThrottled",
  "InvalidHealthCheckType",
  "Forbidden",
  "BillingScopeIdCannotBeChanged",
  "AppliedScopesNotAssociatedWithCommerceAccount",
  "PatchValuesSameAsExisting",
  "RoleAssignmentCreationFailed",
  "ReservationOrderCreationFailed",
  "ReservationOrderNotEnabled",
  "CapacityUpdateScopesFailed",
  "UnsupportedReservationTerm",
  "ReservationOrderIdAlreadyExists",
  "RiskCheckFailed",
  "CreateQuoteFailed",
  "ActivateQuoteFailed",
  "NonsupportedAccountId",
  "PaymentInstrumentNotFound",
  "MissingAppliedScopesForSingle",
  "NoValidReservationsToReRate",
  "ReRateOnlyAllowedForEA",
  "OperationCannotBePerformedInCurrentState",
  "InvalidSingleAppliedScopesCount",
  "InvalidFulfillmentRequestParameters",
  "NotSupportedCountry",
  "InvalidRefundQuantity",
  "PurchaseError",
  "BillingCustomerInputError",
  "BillingPaymentInstrumentSoftError",
  "BillingPaymentInstrumentHardError",
  "BillingTransientError",
  "BillingError",
  "FulfillmentConfigurationError",
  "FulfillmentOutOfStockError",
  "FulfillmentTransientError",
  "FulfillmentError",
  "CalculatePriceFailed",
  "AppliedScopesSameAsExisting",
  "SelfServiceRefundNotSupported",
  "RefundLimitExceeded",
]);
const RefundBillingInformationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingPlan: Schema.optional(
      Schema.suspend(() => ReservationBillingPlanSchema),
    ),
    completedTransactions: Schema.optional(Schema.Number),
    totalTransactions: Schema.optional(Schema.Number),
    billingCurrencyTotalPaidAmount: Schema.optional(
      Schema.suspend(() => PriceSchema),
    ),
    billingCurrencyProratedAmount: Schema.optional(
      Schema.suspend(() => PriceSchema),
    ),
    billingCurrencyRemainingCommitmentAmount: Schema.optional(
      Schema.suspend(() => PriceSchema),
    ),
  });
const ChangeDirectoryResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  isSucceeded: Schema.optional(Schema.Boolean),
  error: Schema.optional(Schema.String),
});
const MergePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sources: Schema.optional(Schema.Array(Schema.String)),
});
const ReservationsPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservedResourceType: Schema.optional(
    Schema.suspend(() => ReservedResourceTypeSchema),
  ),
  instanceFlexibility: Schema.optional(
    Schema.suspend(() => InstanceFlexibilitySchema),
  ),
  displayName: Schema.optional(Schema.String),
  appliedScopes: Schema.optional(Schema.Array(Schema.String)),
  appliedScopeType: Schema.optional(
    Schema.suspend(() => AppliedScopeTypeSchema),
  ),
  archived: Schema.optional(Schema.Boolean),
  capabilities: Schema.optional(Schema.String),
  quantity: Schema.optional(Schema.Number),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  effectiveDateTime: Schema.optional(Schema.String),
  benefitStartTime: Schema.optional(Schema.String),
  lastUpdatedDateTime: Schema.optional(Schema.String),
  expiryDate: Schema.optional(Schema.String),
  expiryDateTime: Schema.optional(Schema.String),
  reviewDateTime: Schema.optional(Schema.String),
  skuDescription: Schema.optional(Schema.String),
  extendedStatusInfo: Schema.optional(
    Schema.suspend(() => ExtendedStatusInfoSchema),
  ),
  billingPlan: Schema.optional(
    Schema.suspend(() => ReservationBillingPlanSchema),
  ),
  displayProvisioningState: Schema.optional(Schema.String),
  provisioningSubState: Schema.optional(Schema.String),
  purchaseDate: Schema.optional(Schema.String),
  purchaseDateTime: Schema.optional(Schema.String),
  splitProperties: Schema.optional(
    Schema.suspend(() => ReservationSplitPropertiesSchema),
  ),
  mergeProperties: Schema.optional(
    Schema.suspend(() => ReservationMergePropertiesSchema),
  ),
  swapProperties: Schema.optional(
    Schema.suspend(() => ReservationSwapPropertiesSchema),
  ),
  appliedScopeProperties: Schema.optional(
    Schema.suspend(() => AppliedScopePropertiesSchema),
  ),
  billingScopeId: Schema.optional(Schema.String),
  renew: Schema.optional(Schema.Boolean),
  renewSource: Schema.optional(Schema.String),
  renewDestination: Schema.optional(Schema.String),
  renewProperties: Schema.optional(
    Schema.suspend(() => RenewPropertiesResponseSchema),
  ),
  term: Schema.optional(Schema.suspend(() => ReservationTermSchema)),
  userFriendlyAppliedScopeType: Schema.optional(Schema.String),
  userFriendlyRenewState: Schema.optional(Schema.String),
  utilization: Schema.optional(
    Schema.suspend(() => ReservationsPropertiesUtilizationSchema),
  ),
});
const ReservationSplitPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    splitDestinations: Schema.optional(Schema.Array(Schema.String)),
    splitSource: Schema.optional(Schema.String),
  });
const ReservationMergePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mergeDestination: Schema.optional(Schema.String),
    mergeSources: Schema.optional(Schema.Array(Schema.String)),
  });
const ReservationSwapPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    swapSource: Schema.optional(Schema.String),
    swapDestination: Schema.optional(Schema.String),
  });
const RenewPropertiesResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    purchaseProperties: Schema.optional(
      Schema.suspend(() => PurchaseRequestSchema),
    ),
    pricingCurrencyTotal: Schema.optional(
      Schema.suspend(() => RenewPropertiesResponsePricingCurrencyTotalSchema),
    ),
    billingCurrencyTotal: Schema.optional(
      Schema.suspend(() => RenewPropertiesResponseBillingCurrencyTotalSchema),
    ),
  },
);
const RenewPropertiesResponsePricingCurrencyTotalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currencyCode: Schema.optional(Schema.String),
    amount: Schema.optional(Schema.Number),
  });
const RenewPropertiesResponseBillingCurrencyTotalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currencyCode: Schema.optional(Schema.String),
    amount: Schema.optional(Schema.Number),
  });
const ReservationsPropertiesUtilizationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trend: Schema.optional(Schema.String),
    aggregates: Schema.optional(
      Schema.Array(
        Schema.suspend(() => ReservationUtilizationAggregatesSchema),
      ),
    ),
  });
const ReservationUtilizationAggregatesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    grain: Schema.optional(Schema.Number),
    grainUnit: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
    valueUnit: Schema.optional(Schema.String),
  });
const PatchPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appliedScopeType: Schema.optional(
    Schema.suspend(() => AppliedScopeTypeSchema),
  ),
  appliedScopes: Schema.optional(Schema.Array(Schema.String)),
  appliedScopeProperties: Schema.optional(
    Schema.suspend(() => AppliedScopePropertiesSchema),
  ),
  instanceFlexibility: Schema.optional(
    Schema.suspend(() => InstanceFlexibilitySchema),
  ),
  name: Schema.optional(Schema.String),
  renew: Schema.optional(Schema.Boolean),
  renewProperties: Schema.optional(
    Schema.suspend(() => PatchPropertiesRenewPropertiesSchema),
  ),
  reviewDateTime: Schema.optional(Schema.String),
});
const PatchPropertiesRenewPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    purchaseProperties: Schema.optional(
      Schema.suspend(() => PurchaseRequestSchema),
    ),
  });
const AvailableScopeRequestPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scopes: Schema.optional(Schema.Array(Schema.String)),
  });
const SubscriptionScopePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scopes: Schema.optional(
      Schema.Array(Schema.suspend(() => ScopePropertiesSchema)),
    ),
  });
const ScopePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.optional(Schema.String),
  valid: Schema.optional(Schema.Boolean),
});
const RefundRequestPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    sessionId: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    reservationToReturn: Schema.optional(
      Schema.suspend(() => ReservationToReturnSchema),
    ),
    returnReason: Schema.optional(Schema.String),
  },
);
const SplitPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  quantities: Schema.optional(Schema.Array(Schema.Number)),
  reservationId: Schema.optional(Schema.String),
});
const ReservationSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  succeededCount: Schema.optional(Schema.Number),
  failedCount: Schema.optional(Schema.Number),
  expiringCount: Schema.optional(Schema.Number),
  expiredCount: Schema.optional(Schema.Number),
  pendingCount: Schema.optional(Schema.Number),
  cancelledCount: Schema.optional(Schema.Number),
  processingCount: Schema.optional(Schema.Number),
  warningCount: Schema.optional(Schema.Number),
  noBenefitCount: Schema.optional(Schema.Number),
});
const AppliedReservationsPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderIds: Schema.optional(
      Schema.suspend(() => AppliedReservationListSchema),
    ),
  });
const AppliedReservationListSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Array(Schema.String)),
  nextLink: Schema.optional(Schema.String),
});
const CatalogSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceType: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  billingPlans: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.Array(Schema.suspend(() => ReservationBillingPlanSchema)),
    ),
  ),
  terms: Schema.optional(
    Schema.Array(Schema.suspend(() => ReservationTermSchema)),
  ),
  locations: Schema.optional(Schema.Array(Schema.String)),
  skuProperties: Schema.optional(
    Schema.Array(Schema.suspend(() => SkuPropertySchema)),
  ),
  msrp: Schema.optional(Schema.suspend(() => CatalogMsrpSchema)),
  restrictions: Schema.optional(
    Schema.Array(Schema.suspend(() => SkuRestrictionSchema)),
  ),
  tier: Schema.optional(Schema.String),
  size: Schema.optional(Schema.String),
  capabilities: Schema.optional(
    Schema.Array(Schema.suspend(() => SkuCapabilitySchema)),
  ),
});
const SkuPropertySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});
const CatalogMsrpSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  p1Y: Schema.optional(Schema.suspend(() => PriceSchema)),
  p3Y: Schema.optional(Schema.suspend(() => PriceSchema)),
  p5Y: Schema.optional(Schema.suspend(() => PriceSchema)),
});
const SkuRestrictionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  values: Schema.optional(Schema.Array(Schema.String)),
  reasonCode: Schema.optional(Schema.String),
});
const SkuCapabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

// Input Schema
export const CalculateExchangePostInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CalculateExchangeRequestPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Capacity/calculateExchange",
      apiVersion: "2022-11-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type CalculateExchangePostInput = typeof CalculateExchangePostInput.Type;

// Output Schema
export const CalculateExchangePostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.suspend(() => CalculateExchangeOperationResultStatusSchema),
    ),
    properties: Schema.optional(
      Schema.suspend(() => CalculateExchangeResponsePropertiesSchema),
    ),
    error: Schema.optional(Schema.suspend(() => OperationResultErrorSchema)),
  });
export type CalculateExchangePostOutput =
  typeof CalculateExchangePostOutput.Type;

// The operation
/**
 * Calculates the refund amounts and price of the new purchases.
 *
 * Calculates price for exchanging `Reservations` if there are no policy errors.
 *
 * @param api-version - The API version to use for this operation.
 */
export const CalculateExchangePost = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CalculateExchangePostInput,
    outputSchema: CalculateExchangePostOutput,
  }),
);
// Input Schema
export const CalculateRefundPostInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => CalculateRefundRequestPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/calculateRefund",
      apiVersion: "2022-11-01",
    }),
  );
export type CalculateRefundPostInput = typeof CalculateRefundPostInput.Type;

// Output Schema
export const CalculateRefundPostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => RefundResponsePropertiesSchema),
    ),
  });
export type CalculateRefundPostOutput = typeof CalculateRefundPostOutput.Type;

// The operation
/**
 * Calculate the refund amount of a reservation order.
 *
 * Calculate price for returning `Reservations` if there are no policy errors.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 */
export const CalculateRefundPost = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CalculateRefundPostInput,
  outputSchema: CalculateRefundPostOutput,
}));
// Input Schema
export const ExchangePostInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => ExchangeRequestPropertiesSchema),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Capacity/exchange",
    apiVersion: "2022-11-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type ExchangePostInput = typeof ExchangePostInput.Type;

// Output Schema
export const ExchangePostOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  status: Schema.optional(
    Schema.suspend(() => ExchangeOperationResultStatusSchema),
  ),
  properties: Schema.optional(
    Schema.suspend(() => ExchangeResponsePropertiesSchema),
  ),
  error: Schema.optional(Schema.suspend(() => OperationResultErrorSchema)),
});
export type ExchangePostOutput = typeof ExchangePostOutput.Type;

// The operation
/**
 * Exchange Reservation(s)
 *
 * Returns one or more `Reservations` in exchange for one or more `Reservation` purchases.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ExchangePost = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExchangePostInput,
  outputSchema: ExchangePostOutput,
}));
// Input Schema
export const GetAppliedReservationListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Capacity/appliedReservations",
      apiVersion: "2022-11-01",
    }),
  );
export type GetAppliedReservationListInput =
  typeof GetAppliedReservationListInput.Type;

// Output Schema
export const GetAppliedReservationListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => AppliedReservationsPropertiesSchema),
    ),
  });
export type GetAppliedReservationListOutput =
  typeof GetAppliedReservationListOutput.Type;

// The operation
/**
 * Get list of applicable `Reservation`s.
 *
 * Get applicable `Reservation`s that are applied to this subscription or a resource group under this subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const GetAppliedReservationList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetAppliedReservationListInput,
    outputSchema: GetAppliedReservationListOutput,
  }),
);
// Input Schema
export const GetCatalogInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  reservedResourceType: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  publisherId: Schema.optional(Schema.String),
  offerId: Schema.optional(Schema.String),
  planId: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $skip: Schema.optional(Schema.Number),
  $take: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Capacity/catalogs",
    apiVersion: "2022-11-01",
  }),
);
export type GetCatalogInput = typeof GetCatalogInput.Type;

// Output Schema
export const GetCatalogOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => CatalogSchema)),
  nextLink: Schema.optional(Schema.String),
  totalItems: Schema.optional(Schema.Number),
});
export type GetCatalogOutput = typeof GetCatalogOutput.Type;

// The operation
/**
 * Get the regions and skus that are available for RI purchase for the specified Azure subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param reservedResourceType - The type of the resource for which the skus should be provided.
 * @param location - Filters the skus based on the location specified in this parameter. This can be an azure region or global
 * @param publisherId - Publisher id used to get the third party products
 * @param offerId - Offer id used to get the third party products
 * @param planId - Plan id used to get the third party products
 * @param $filter - May be used to filter by Catalog properties. The filter supports 'eq', 'or', and 'and'.
 * @param $skip - The number of reservations to skip from the list before returning results
 * @param $take - To number of reservations to return
 */
export const GetCatalog = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetCatalogInput,
  outputSchema: GetCatalogOutput,
}));
// Input Schema
export const OperationListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Capacity/operations",
    apiVersion: "2022-11-01",
  }),
);
export type OperationListInput = typeof OperationListInput.Type;

// Output Schema
export const OperationListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(Schema.suspend(() => OperationResponseSchema)),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type OperationListOutput = typeof OperationListOutput.Type;

// The operation
/**
 * Get operations.
 *
 * List all the operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationListInput,
  outputSchema: OperationListOutput,
}));
// Input Schema
export const ReservationArchiveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    reservationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}/archive",
      apiVersion: "2022-11-01",
    }),
  );
export type ReservationArchiveInput = typeof ReservationArchiveInput.Type;

// Output Schema
export const ReservationArchiveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReservationArchiveOutput = typeof ReservationArchiveOutput.Type;

// The operation
/**
 * Archive a `Reservation`.
 *
 * Archiving a `Reservation` moves it to `Archived` state.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 * @param reservationId - Id of the reservation item
 */
export const ReservationArchive = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReservationArchiveInput,
  outputSchema: ReservationArchiveOutput,
}));
// Input Schema
export const ReservationAvailableScopesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    reservationId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AvailableScopeRequestPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}/availableScopes",
      apiVersion: "2022-11-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ReservationAvailableScopesInput =
  typeof ReservationAvailableScopesInput.Type;

// Output Schema
export const ReservationAvailableScopesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SubscriptionScopePropertiesSchema),
    ),
  });
export type ReservationAvailableScopesOutput =
  typeof ReservationAvailableScopesOutput.Type;

// The operation
/**
 * Get Available Scopes for `Reservation`.
 *
 * Check whether the scopes from request is valid for `Reservation`.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 * @param reservationId - Id of the reservation item
 */
export const ReservationAvailableScopes = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReservationAvailableScopesInput,
    outputSchema: ReservationAvailableScopesOutput,
  }),
);
// Input Schema
export const ReservationGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservationOrderId: Schema.String.pipe(T.PathParam()),
  reservationId: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}",
    apiVersion: "2022-11-01",
  }),
);
export type ReservationGetInput = typeof ReservationGetInput.Type;

// Output Schema
export const ReservationGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => ReservationsPropertiesSchema),
  ),
  location: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.Number),
  sku: Schema.optional(Schema.suspend(() => SkuNameSchema)),
  kind: Schema.optional(Schema.Literals(["Microsoft.Compute"])),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ReservationGetOutput = typeof ReservationGetOutput.Type;

// The operation
/**
 * Get `Reservation` details.
 *
 * Get specific `Reservation` details.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 * @param reservationId - Id of the reservation item
 * @param $expand - Supported value of this query is renewProperties
 */
export const ReservationGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReservationGetInput,
  outputSchema: ReservationGetOutput,
}));
// Input Schema
export const ReservationListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservationOrderId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations",
    apiVersion: "2022-11-01",
  }),
);
export type ReservationListInput = typeof ReservationListInput.Type;

// Output Schema
export const ReservationListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => ReservationResponseSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type ReservationListOutput = typeof ReservationListOutput.Type;

// The operation
/**
 * Get `Reservation`s in a given reservation Order
 *
 * List `Reservation`s within a single `ReservationOrder`.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 */
export const ReservationList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReservationListInput,
  outputSchema: ReservationListOutput,
}));
// Input Schema
export const ReservationListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
    refreshSummary: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.Number),
    selectedState: Schema.optional(Schema.String),
    take: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Capacity/reservations",
      apiVersion: "2022-11-01",
    }),
  );
export type ReservationListAllInput = typeof ReservationListAllInput.Type;

// Output Schema
export const ReservationListAllOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ReservationResponseSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
    summary: Schema.optional(Schema.suspend(() => ReservationSummarySchema)),
  });
export type ReservationListAllOutput = typeof ReservationListAllOutput.Type;

// The operation
/**
 * List the reservations and the roll up counts of reservations group by provisioning states that the user has access to in the current tenant.
 *
 * @param api-version - The API version to use for this operation.
 * @param $filter - May be used to filter by reservation properties. The filter supports 'eq', 'or', and 'and'. It does not currently support 'ne', 'gt', 'le', 'ge', or 'not'. Reservation properties include sku/name, properties/{appliedScopeType, archived, displayName, displayProvisioningState, effectiveDateTime, expiryDate, expiryDateTime, provisioningState, quantity, renew, reservedResourceType, term, userFriendlyAppliedScopeType, userFriendlyRenewState}
 * @param $orderby - May be used to sort order by reservation properties.
 * @param refreshSummary - To indicate whether to refresh the roll up counts of the reservations group by provisioning states
 * @param $skiptoken - The number of reservations to skip from the list before returning results
 * @param selectedState - The selected provisioning state
 * @param take - To number of reservations to return
 */
export const ReservationListAll = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReservationListAllInput,
  outputSchema: ReservationListAllOutput,
}));
// Input Schema
export const ReservationListRevisionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    reservationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}/revisions",
      apiVersion: "2022-11-01",
    }),
  );
export type ReservationListRevisionsInput =
  typeof ReservationListRevisionsInput.Type;

// Output Schema
export const ReservationListRevisionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ReservationResponseSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ReservationListRevisionsOutput =
  typeof ReservationListRevisionsOutput.Type;

// The operation
/**
 * Get `Reservation` revisions.
 *
 * List of all the revisions for the `Reservation`.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 * @param reservationId - Id of the reservation item
 */
export const ReservationListRevisions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReservationListRevisionsInput,
    outputSchema: ReservationListRevisionsOutput,
  }),
);
// Input Schema
export const ReservationMergeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservationOrderId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => MergePropertiesSchema)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/merge",
    apiVersion: "2022-11-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ReservationMergeInput = typeof ReservationMergeInput.Type;

// Output Schema
export const ReservationMergeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => ReservationResponseSchema),
);
export type ReservationMergeOutput = typeof ReservationMergeOutput.Type;

// The operation
/**
 * Merges two `Reservation`s.
 *
 * Merge the specified `Reservation`s into a new `Reservation`. The two `Reservation`s being merged must have same properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 */
export const ReservationMerge = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReservationMergeInput,
  outputSchema: ReservationMergeOutput,
}));
// Input Schema
export const ReservationOrderCalculateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.optional(Schema.suspend(() => SkuNameSchema)),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => PurchaseRequestPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Capacity/calculatePrice",
      apiVersion: "2022-11-01",
    }),
  );
export type ReservationOrderCalculateInput =
  typeof ReservationOrderCalculateInput.Type;

// Output Schema
export const ReservationOrderCalculateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CalculatePriceResponsePropertiesSchema),
    ),
  });
export type ReservationOrderCalculateOutput =
  typeof ReservationOrderCalculateOutput.Type;

// The operation
/**
 * Calculate price for a `ReservationOrder`.
 *
 * Calculate price for placing a `ReservationOrder`.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ReservationOrderCalculate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReservationOrderCalculateInput,
    outputSchema: ReservationOrderCalculateOutput,
  }),
);
// Input Schema
export const ReservationOrderChangeDirectoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    destinationTenantId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/changeDirectory",
      apiVersion: "2022-11-01",
    }),
  );
export type ReservationOrderChangeDirectoryInput =
  typeof ReservationOrderChangeDirectoryInput.Type;

// Output Schema
export const ReservationOrderChangeDirectoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrder: Schema.optional(
      Schema.suspend(() => ChangeDirectoryResultSchema),
    ),
    reservations: Schema.optional(
      Schema.Array(Schema.suspend(() => ChangeDirectoryResultSchema)),
    ),
  });
export type ReservationOrderChangeDirectoryOutput =
  typeof ReservationOrderChangeDirectoryOutput.Type;

// The operation
/**
 * Change directory of `ReservationOrder`.
 *
 * Change directory (tenant) of `ReservationOrder` and all `Reservation` under it to specified tenant id
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 */
export const ReservationOrderChangeDirectory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReservationOrderChangeDirectoryInput,
    outputSchema: ReservationOrderChangeDirectoryOutput,
  }));
// Input Schema
export const ReservationOrderGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}",
      apiVersion: "2022-11-01",
    }),
  );
export type ReservationOrderGetInput = typeof ReservationOrderGetInput.Type;

// Output Schema
export const ReservationOrderGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ReservationOrderPropertiesSchema),
    ),
    etag: Schema.optional(Schema.Number),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ReservationOrderGetOutput = typeof ReservationOrderGetOutput.Type;

// The operation
/**
 * Get a specific `ReservationOrder`.
 *
 * Get the details of the `ReservationOrder`.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 * @param $expand - May be used to expand the planInformation.
 */
export const ReservationOrderGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReservationOrderGetInput,
  outputSchema: ReservationOrderGetOutput,
}));
// Input Schema
export const ReservationOrderListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Capacity/reservationOrders",
      apiVersion: "2022-11-01",
    }),
  );
export type ReservationOrderListInput = typeof ReservationOrderListInput.Type;

// Output Schema
export const ReservationOrderListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ReservationOrderResponseSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ReservationOrderListOutput = typeof ReservationOrderListOutput.Type;

// The operation
/**
 * Get all `ReservationOrder`s.
 *
 * List of all the `ReservationOrder`s that the user has access to in the current tenant.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ReservationOrderList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReservationOrderListInput,
    outputSchema: ReservationOrderListOutput,
  }),
);
// Input Schema
export const ReservationOrderPurchaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(Schema.suspend(() => SkuNameSchema)),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => PurchaseRequestPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}",
      apiVersion: "2022-11-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ReservationOrderPurchaseInput =
  typeof ReservationOrderPurchaseInput.Type;

// Output Schema
export const ReservationOrderPurchaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ReservationOrderPropertiesSchema),
    ),
    etag: Schema.optional(Schema.Number),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ReservationOrderPurchaseOutput =
  typeof ReservationOrderPurchaseOutput.Type;

// The operation
/**
 * Purchase `ReservationOrder`
 *
 * Purchase `ReservationOrder` and create resource under the specified URI.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 */
export const ReservationOrderPurchase = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReservationOrderPurchaseInput,
    outputSchema: ReservationOrderPurchaseOutput,
  }),
);
// Input Schema
export const ReservationSplitInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservationOrderId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => SplitPropertiesSchema)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/split",
    apiVersion: "2022-11-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ReservationSplitInput = typeof ReservationSplitInput.Type;

// Output Schema
export const ReservationSplitOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => ReservationResponseSchema),
);
export type ReservationSplitOutput = typeof ReservationSplitOutput.Type;

// The operation
/**
 * Split the `Reservation`.
 *
 * Split a `Reservation` into two `Reservation`s with specified quantity distribution.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 */
export const ReservationSplit = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReservationSplitInput,
  outputSchema: ReservationSplitOutput,
}));
// Input Schema
export const ReservationUnarchiveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    reservationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}/unarchive",
      apiVersion: "2022-11-01",
    }),
  );
export type ReservationUnarchiveInput = typeof ReservationUnarchiveInput.Type;

// Output Schema
export const ReservationUnarchiveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReservationUnarchiveOutput = typeof ReservationUnarchiveOutput.Type;

// The operation
/**
 * Unarchive a `Reservation`.
 *
 * Restores a `Reservation` to the state it was before archiving.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 * @param reservationId - Id of the reservation item
 */
export const ReservationUnarchive = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReservationUnarchiveInput,
    outputSchema: ReservationUnarchiveOutput,
  }),
);
// Input Schema
export const ReservationUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    reservationId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => PatchPropertiesSchema)),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}",
    apiVersion: "2022-11-01",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type ReservationUpdateInput = typeof ReservationUpdateInput.Type;

// Output Schema
export const ReservationUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ReservationsPropertiesSchema),
    ),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.Number),
    sku: Schema.optional(Schema.suspend(() => SkuNameSchema)),
    kind: Schema.optional(Schema.Literals(["Microsoft.Compute"])),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ReservationUpdateOutput = typeof ReservationUpdateOutput.Type;

// The operation
/**
 * Updates a `Reservation`.
 *
 * Updates the applied scopes of the `Reservation`.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 * @param reservationId - Id of the reservation item
 */
export const ReservationUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReservationUpdateInput,
  outputSchema: ReservationUpdateOutput,
}));
// Input Schema
export const ReturnPostInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservationOrderId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.suspend(() => RefundRequestPropertiesSchema),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/return",
    apiVersion: "2022-11-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ReturnPostInput = typeof ReturnPostInput.Type;

// Output Schema
export const ReturnPostOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => ReservationOrderPropertiesSchema),
  ),
  etag: Schema.optional(Schema.Number),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ReturnPostOutput = typeof ReturnPostOutput.Type;

// The operation
/**
 * Return a reservation.
 *
 * Return a reservation and get refund information.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 */
export const ReturnPost = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReturnPostInput,
  outputSchema: ReturnPostOutput,
}));
