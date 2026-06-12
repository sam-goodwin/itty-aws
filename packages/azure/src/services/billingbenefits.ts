/**
 * Azure Billingbenefits API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const OperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  isDataAction: Schema.optional(Schema.Boolean),
  display: Schema.optional(
    Schema.Struct({
      provider: Schema.optional(Schema.String),
      resource: Schema.optional(Schema.String),
      operation: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
    }),
  ),
  origin: Schema.optional(Schema.Literals(["user", "system", "user,system"])),
  actionType: Schema.optional(Schema.Literals(["Internal"])),
});
const SkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
});
const SavingsPlanOrderAliasPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.suspend(() => DisplayNameSchema)),
    savingsPlanOrderId: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    billingScopeId: Schema.optional(Schema.suspend(() => BillingScopeIdSchema)),
    term: Schema.optional(Schema.suspend(() => TermSchema)),
    billingPlan: Schema.optional(Schema.suspend(() => BillingPlanSchema)),
    appliedScopeType: Schema.optional(
      Schema.suspend(() => AppliedScopeTypeSchema),
    ),
    appliedScopeProperties: Schema.optional(
      Schema.suspend(() => AppliedScopePropertiesSchema),
    ),
    commitment: Schema.optional(Schema.suspend(() => CommitmentSchema)),
    renew: Schema.optional(Schema.suspend(() => RenewSchema)),
  });
const DisplayNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Creating",
  "PendingBilling",
  "ConfirmedBilling",
  "Created",
  "Succeeded",
  "Cancelled",
  "Expired",
  "Failed",
]);
const BillingScopeIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const TermSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "P1Y",
  "P3Y",
  "P5Y",
]);
const BillingPlanSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["P1M"]);
const AppliedScopeTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Single",
  "Shared",
  "ManagementGroup",
]);
const AppliedScopePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tenantId: Schema.optional(Schema.suspend(() => TenantIdSchema)),
  managementGroupId: Schema.optional(
    Schema.suspend(() => ManagementGroupIdSchema),
  ),
  subscriptionId: Schema.optional(Schema.suspend(() => SubscriptionIdSchema)),
  resourceGroupId: Schema.optional(Schema.suspend(() => ResourceGroupIdSchema)),
  displayName: Schema.optional(Schema.String),
});
const TenantIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const ManagementGroupIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const SubscriptionIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const ResourceGroupIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const CommitmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  currencyCode: Schema.optional(Schema.String),
  amount: Schema.optional(Schema.Number),
});
const RenewSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Boolean;
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
const SavingsPlanOrderModelPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.suspend(() => DisplayNameSchema)),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    billingScopeId: Schema.optional(Schema.suspend(() => BillingScopeIdSchema)),
    billingProfileId: Schema.optional(
      Schema.suspend(() => BillingProfileIdSchema),
    ),
    customerId: Schema.optional(Schema.suspend(() => CustomerIdSchema)),
    billingAccountId: Schema.optional(
      Schema.suspend(() => BillingAccountIdSchema),
    ),
    term: Schema.optional(Schema.suspend(() => TermSchema)),
    billingPlan: Schema.optional(Schema.suspend(() => BillingPlanSchema)),
    expiryDateTime: Schema.optional(Schema.suspend(() => ExpiryDateTimeSchema)),
    benefitStartTime: Schema.optional(
      Schema.suspend(() => BenefitStartTimeSchema),
    ),
    planInformation: Schema.optional(
      Schema.suspend(() => BillingPlanInformationSchema),
    ),
    savingsPlans: Schema.optional(
      Schema.Array(Schema.suspend(() => SavingsPlanIdSchema)),
    ),
    extendedStatusInfo: Schema.optional(
      Schema.suspend(() => ExtendedStatusInfoSchema),
    ),
  });
const BillingProfileIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const CustomerIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const BillingAccountIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const ExpiryDateTimeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const BenefitStartTimeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const BillingPlanInformationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pricingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
  startDate: Schema.optional(Schema.String),
  nextPaymentDueDate: Schema.optional(Schema.String),
  transactions: Schema.optional(
    Schema.Array(Schema.suspend(() => PaymentDetailSchema)),
  ),
});
const PriceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  currencyCode: Schema.optional(Schema.String),
  amount: Schema.optional(Schema.Number),
});
const PaymentDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dueDate: Schema.optional(Schema.String),
  paymentDate: Schema.optional(Schema.String),
  pricingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
  billingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
  status: Schema.optional(Schema.suspend(() => PaymentStatusSchema)),
  extendedStatusInfo: Schema.optional(
    Schema.suspend(() => ExtendedStatusInfoSchema),
  ),
  billingAccount: Schema.optional(Schema.String),
});
const PaymentStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
  "Scheduled",
  "Cancelled",
]);
const ExtendedStatusInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  statusCode: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
});
const SavingsPlanIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const RoleAssignmentEntityPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalId: Schema.optional(Schema.String),
    roleDefinitionId: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
  });
const SavingsPlanOrderModelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SavingsPlanModelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SavingsPlanSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.suspend(() => SavingsPlanSummaryCountSchema)),
});
const SavingsPlanSummaryCountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    succeededCount: Schema.optional(Schema.Number),
    failedCount: Schema.optional(Schema.Number),
    expiringCount: Schema.optional(Schema.Number),
    expiredCount: Schema.optional(Schema.Number),
    pendingCount: Schema.optional(Schema.Number),
    cancelledCount: Schema.optional(Schema.Number),
    processingCount: Schema.optional(Schema.Number),
    noBenefitCount: Schema.optional(Schema.Number),
    warningCount: Schema.optional(Schema.Number),
  },
);
const SavingsPlanModelPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.suspend(() => DisplayNameSchema)),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    displayProvisioningState: Schema.optional(Schema.String),
    billingScopeId: Schema.optional(Schema.suspend(() => BillingScopeIdSchema)),
    billingProfileId: Schema.optional(
      Schema.suspend(() => BillingProfileIdSchema),
    ),
    customerId: Schema.optional(Schema.suspend(() => CustomerIdSchema)),
    billingAccountId: Schema.optional(
      Schema.suspend(() => BillingAccountIdSchema),
    ),
    term: Schema.optional(Schema.suspend(() => TermSchema)),
    billingPlan: Schema.optional(Schema.suspend(() => BillingPlanSchema)),
    appliedScopeType: Schema.optional(
      Schema.suspend(() => AppliedScopeTypeSchema),
    ),
    userFriendlyAppliedScopeType: Schema.optional(Schema.String),
    appliedScopeProperties: Schema.optional(
      Schema.suspend(() => AppliedScopePropertiesSchema),
    ),
    commitment: Schema.optional(Schema.suspend(() => CommitmentSchema)),
    effectiveDateTime: Schema.optional(
      Schema.suspend(() => EffectiveDateTimeSchema),
    ),
    expiryDateTime: Schema.optional(Schema.suspend(() => ExpiryDateTimeSchema)),
    purchaseDateTime: Schema.optional(
      Schema.suspend(() => PurchaseDateTimeSchema),
    ),
    benefitStartTime: Schema.optional(
      Schema.suspend(() => BenefitStartTimeSchema),
    ),
    extendedStatusInfo: Schema.optional(
      Schema.suspend(() => ExtendedStatusInfoSchema),
    ),
    renew: Schema.optional(Schema.suspend(() => RenewSchema)),
    utilization: Schema.optional(Schema.suspend(() => UtilizationSchema)),
    renewSource: Schema.optional(Schema.suspend(() => RenewSourceSchema)),
    renewDestination: Schema.optional(
      Schema.suspend(() => RenewDestinationSchema),
    ),
    renewProperties: Schema.optional(
      Schema.suspend(() => RenewPropertiesSchema),
    ),
  });
const EffectiveDateTimeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const PurchaseDateTimeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const UtilizationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  trend: Schema.optional(Schema.String),
  aggregates: Schema.optional(
    Schema.Array(Schema.suspend(() => UtilizationAggregatesSchema)),
  ),
});
const UtilizationAggregatesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  grain: Schema.optional(Schema.Number),
  grainUnit: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Number),
  valueUnit: Schema.optional(Schema.String),
});
const RenewSourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const RenewDestinationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const RenewPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  purchaseProperties: Schema.optional(
    Schema.suspend(() => PurchaseRequestSchema),
  ),
});
const PurchaseRequestSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sku: Schema.optional(Schema.suspend(() => SkuSchema)),
  properties: Schema.optional(
    Schema.suspend(() => PurchaseRequestPropertiesSchema),
  ),
});
const PurchaseRequestPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    billingScopeId: Schema.optional(Schema.suspend(() => BillingScopeIdSchema)),
    term: Schema.optional(Schema.suspend(() => TermSchema)),
    billingPlan: Schema.optional(Schema.suspend(() => BillingPlanSchema)),
    appliedScopeType: Schema.optional(
      Schema.suspend(() => AppliedScopeTypeSchema),
    ),
    commitment: Schema.optional(Schema.suspend(() => CommitmentSchema)),
    effectiveDateTime: Schema.optional(
      Schema.suspend(() => EffectiveDateTimeSchema),
    ),
    renew: Schema.optional(Schema.suspend(() => RenewSchema)),
    appliedScopeProperties: Schema.optional(
      Schema.suspend(() => AppliedScopePropertiesSchema),
    ),
  });
const SavingsPlanValidResponsePropertySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valid: Schema.optional(Schema.Boolean),
    reasonCode: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  });
const ReservationOrderAliasResponsePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.suspend(() => DisplayNameSchema)),
    reservationOrderId: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    billingScopeId: Schema.optional(Schema.suspend(() => BillingScopeIdSchema)),
    term: Schema.optional(Schema.suspend(() => TermSchema)),
    billingPlan: Schema.optional(Schema.suspend(() => BillingPlanSchema)),
    appliedScopeType: Schema.optional(
      Schema.suspend(() => AppliedScopeTypeSchema),
    ),
    appliedScopeProperties: Schema.optional(
      Schema.suspend(() => AppliedScopePropertiesSchema),
    ),
    quantity: Schema.optional(Schema.Number),
    renew: Schema.optional(Schema.suspend(() => RenewSchema)),
    reservedResourceType: Schema.optional(
      Schema.suspend(() => ReservedResourceTypeSchema),
    ),
    reviewDateTime: Schema.optional(Schema.String),
    reservedResourceProperties: Schema.optional(
      Schema.Struct({
        instanceFlexibility: Schema.optional(
          Schema.suspend(() => InstanceFlexibilitySchema),
        ),
      }),
    ),
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
const InstanceFlexibilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "On",
  "Off",
]);

// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.BillingBenefits/operations",
    apiVersion: "2022-11-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Array(Schema.suspend(() => OperationSchema))),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * Get operations.
 *
 * List all the operations.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const ReservationOrderAliasCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.BillingBenefits/reservationOrderAliases/{reservationOrderAliasName}",
      apiVersion: "2022-11-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ReservationOrderAliasCreateInput =
  typeof ReservationOrderAliasCreateInput.Type;

// Output Schema
export const ReservationOrderAliasCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.suspend(() => SkuSchema),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => ReservationOrderAliasResponsePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ReservationOrderAliasCreateOutput =
  typeof ReservationOrderAliasCreateOutput.Type;

// The operation
/**
 * Create a reservation order alias.
 */
export const ReservationOrderAliasCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReservationOrderAliasCreateInput,
    outputSchema: ReservationOrderAliasCreateOutput,
  }),
);
// Input Schema
export const ReservationOrderAliasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.BillingBenefits/reservationOrderAliases/{reservationOrderAliasName}",
      apiVersion: "2022-11-01",
    }),
  );
export type ReservationOrderAliasGetInput =
  typeof ReservationOrderAliasGetInput.Type;

// Output Schema
export const ReservationOrderAliasGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.suspend(() => SkuSchema),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => ReservationOrderAliasResponsePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ReservationOrderAliasGetOutput =
  typeof ReservationOrderAliasGetOutput.Type;

// The operation
/**
 * Get a reservation order alias.
 */
export const ReservationOrderAliasGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReservationOrderAliasGetInput,
    outputSchema: ReservationOrderAliasGetOutput,
  }),
);
// Input Schema
export const SavingsPlanGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.BillingBenefits/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans/{savingsPlanId}",
    apiVersion: "2022-11-01",
  }),
);
export type SavingsPlanGetInput = typeof SavingsPlanGetInput.Type;

// Output Schema
export const SavingsPlanGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sku: Schema.suspend(() => SkuSchema),
  properties: Schema.optional(
    Schema.suspend(() => SavingsPlanModelPropertiesSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type SavingsPlanGetOutput = typeof SavingsPlanGetOutput.Type;

// The operation
/**
 * Get savings plan.
 */
export const SavingsPlanGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SavingsPlanGetInput,
  outputSchema: SavingsPlanGetOutput,
}));
// Input Schema
export const SavingsPlanListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.BillingBenefits/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans",
    apiVersion: "2022-11-01",
  }),
);
export type SavingsPlanListInput = typeof SavingsPlanListInput.Type;

// Output Schema
export const SavingsPlanListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(Schema.suspend(() => SavingsPlanModelSchema)),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type SavingsPlanListOutput = typeof SavingsPlanListOutput.Type;

// The operation
/**
 * List savings plans in an order.
 */
export const SavingsPlanList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SavingsPlanListInput,
  outputSchema: SavingsPlanListOutput,
}));
// Input Schema
export const SavingsPlanListAllInput =
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
      path: "/providers/Microsoft.BillingBenefits/savingsPlans",
      apiVersion: "2022-11-01",
    }),
  );
export type SavingsPlanListAllInput = typeof SavingsPlanListAllInput.Type;

// Output Schema
export const SavingsPlanListAllOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => SavingsPlanModelSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
    additionalProperties: Schema.optional(
      Schema.Array(Schema.suspend(() => SavingsPlanSummarySchema)),
    ),
  });
export type SavingsPlanListAllOutput = typeof SavingsPlanListAllOutput.Type;

// The operation
/**
 * List savings plans.
 *
 * @param $filter - May be used to filter by reservation properties. The filter supports 'eq', 'or', and 'and'. It does not currently support 'ne', 'gt', 'le', 'ge', or 'not'. Reservation properties include sku/name, properties/{appliedScopeType, archived, displayName, displayProvisioningState, effectiveDateTime, expiryDate, provisioningState, quantity, renew, reservedResourceType, term, userFriendlyAppliedScopeType, userFriendlyRenewState}
 * @param $orderby - May be used to sort order by reservation properties.
 * @param refreshSummary - To indicate whether to refresh the roll up counts of the savings plans group by provisioning states
 * @param $skiptoken - The number of savings plans to skip from the list before returning results
 * @param selectedState - The selected provisioning state
 * @param take - To number of savings plans to return
 */
export const SavingsPlanListAll = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SavingsPlanListAllInput,
  outputSchema: SavingsPlanListAllOutput,
}));
// Input Schema
export const SavingsPlanOrderAliasCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.BillingBenefits/savingsPlanOrderAliases/{savingsPlanOrderAliasName}",
      apiVersion: "2022-11-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type SavingsPlanOrderAliasCreateInput =
  typeof SavingsPlanOrderAliasCreateInput.Type;

// Output Schema
export const SavingsPlanOrderAliasCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.suspend(() => SkuSchema),
    kind: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => SavingsPlanOrderAliasPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SavingsPlanOrderAliasCreateOutput =
  typeof SavingsPlanOrderAliasCreateOutput.Type;

// The operation
/**
 * Create a savings plan. Learn more about permissions needed at https://go.microsoft.com/fwlink/?linkid=2215851
 */
export const SavingsPlanOrderAliasCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SavingsPlanOrderAliasCreateInput,
    outputSchema: SavingsPlanOrderAliasCreateOutput,
  }),
);
// Input Schema
export const SavingsPlanOrderAliasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.BillingBenefits/savingsPlanOrderAliases/{savingsPlanOrderAliasName}",
      apiVersion: "2022-11-01",
    }),
  );
export type SavingsPlanOrderAliasGetInput =
  typeof SavingsPlanOrderAliasGetInput.Type;

// Output Schema
export const SavingsPlanOrderAliasGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.suspend(() => SkuSchema),
    kind: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => SavingsPlanOrderAliasPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SavingsPlanOrderAliasGetOutput =
  typeof SavingsPlanOrderAliasGetOutput.Type;

// The operation
/**
 * Get a savings plan.
 */
export const SavingsPlanOrderAliasGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SavingsPlanOrderAliasGetInput,
    outputSchema: SavingsPlanOrderAliasGetOutput,
  }),
);
// Input Schema
export const SavingsPlanOrderElevateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.BillingBenefits/savingsPlanOrders/{savingsPlanOrderId}/elevate",
      apiVersion: "2022-11-01",
    }),
  );
export type SavingsPlanOrderElevateInput =
  typeof SavingsPlanOrderElevateInput.Type;

// Output Schema
export const SavingsPlanOrderElevateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => RoleAssignmentEntityPropertiesSchema),
    ),
  });
export type SavingsPlanOrderElevateOutput =
  typeof SavingsPlanOrderElevateOutput.Type;

// The operation
/**
 * Elevate as owner on savings plan order based on billing permissions.
 */
export const SavingsPlanOrderElevate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SavingsPlanOrderElevateInput,
    outputSchema: SavingsPlanOrderElevateOutput,
  }),
);
// Input Schema
export const SavingsPlanOrderGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.BillingBenefits/savingsPlanOrders/{savingsPlanOrderId}",
      apiVersion: "2022-11-01",
    }),
  );
export type SavingsPlanOrderGetInput = typeof SavingsPlanOrderGetInput.Type;

// Output Schema
export const SavingsPlanOrderGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.suspend(() => SkuSchema),
    properties: Schema.optional(
      Schema.suspend(() => SavingsPlanOrderModelPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SavingsPlanOrderGetOutput = typeof SavingsPlanOrderGetOutput.Type;

// The operation
/**
 * Get a savings plan order.
 */
export const SavingsPlanOrderGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SavingsPlanOrderGetInput,
  outputSchema: SavingsPlanOrderGetOutput,
}));
// Input Schema
export const SavingsPlanOrderListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.BillingBenefits/savingsPlanOrders",
      apiVersion: "2022-11-01",
    }),
  );
export type SavingsPlanOrderListInput = typeof SavingsPlanOrderListInput.Type;

// Output Schema
export const SavingsPlanOrderListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => SavingsPlanOrderModelSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type SavingsPlanOrderListOutput = typeof SavingsPlanOrderListOutput.Type;

// The operation
/**
 * List all Savings plan orders.
 */
export const SavingsPlanOrderList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SavingsPlanOrderListInput,
    outputSchema: SavingsPlanOrderListOutput,
  }),
);
// Input Schema
export const SavingsPlanUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "PATCH",
    path: "/providers/Microsoft.BillingBenefits/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans/{savingsPlanId}",
    apiVersion: "2022-11-01",
  }),
);
export type SavingsPlanUpdateInput = typeof SavingsPlanUpdateInput.Type;

// Output Schema
export const SavingsPlanUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.suspend(() => SkuSchema),
    properties: Schema.optional(
      Schema.suspend(() => SavingsPlanModelPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SavingsPlanUpdateOutput = typeof SavingsPlanUpdateOutput.Type;

// The operation
/**
 * Update savings plan.
 */
export const SavingsPlanUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SavingsPlanUpdateInput,
  outputSchema: SavingsPlanUpdateOutput,
}));
// Input Schema
export const SavingsPlanValidateUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.BillingBenefits/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans/{savingsPlanId}/validate",
      apiVersion: "2022-11-01",
    }),
  );
export type SavingsPlanValidateUpdateInput =
  typeof SavingsPlanValidateUpdateInput.Type;

// Output Schema
export const SavingsPlanValidateUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    benefits: Schema.optional(
      Schema.Array(
        Schema.suspend(() => SavingsPlanValidResponsePropertySchema),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type SavingsPlanValidateUpdateOutput =
  typeof SavingsPlanValidateUpdateOutput.Type;

// The operation
/**
 * Validate savings plan patch.
 */
export const SavingsPlanValidateUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SavingsPlanValidateUpdateInput,
    outputSchema: SavingsPlanValidateUpdateOutput,
  }),
);
// Input Schema
export const ValidatePurchaseInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.BillingBenefits/validate",
    apiVersion: "2022-11-01",
  }),
);
export type ValidatePurchaseInput = typeof ValidatePurchaseInput.Type;

// Output Schema
export const ValidatePurchaseOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    benefits: Schema.optional(
      Schema.Array(
        Schema.suspend(() => SavingsPlanValidResponsePropertySchema),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  },
);
export type ValidatePurchaseOutput = typeof ValidatePurchaseOutput.Type;

// The operation
/**
 * Validate savings plan purchase.
 */
export const ValidatePurchase = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ValidatePurchaseInput,
  outputSchema: ValidatePurchaseOutput,
}));
