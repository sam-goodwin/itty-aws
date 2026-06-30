/**
 * Azure Billingbenefits API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.BillingBenefits/operations",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: "user" | "system" | "user,system";
    actionType?: "Internal";
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
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
        origin: Schema.optional(
          Schema.Literals(["user", "system", "user,system"]),
        ),
        actionType: Schema.optional(Schema.Literals(["Internal"])),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Get operations.
 *
 * List all the operations.
 *
 * @param api-version - The api-version to be used by the service
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ReservationOrderAliasCreateInput {
  reservationOrderAliasName: string;
  sku: { name?: string };
  location?: string;
  properties?: {
    displayName?: string;
    billingScopeId?: string;
    term?: "P1Y" | "P3Y" | "P5Y";
    billingPlan?: "P1M";
    appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
    appliedScopeProperties?: {
      tenantId?: string;
      managementGroupId?: string;
      subscriptionId?: string;
      resourceGroupId?: string;
      displayName?: string;
    };
    quantity?: number;
    renew?: boolean;
    reservedResourceType?:
      | "VirtualMachines"
      | "SqlDatabases"
      | "SuseLinux"
      | "CosmosDb"
      | "RedHat"
      | "SqlDataWarehouse"
      | "VMwareCloudSimple"
      | "RedHatOsa"
      | "Databricks"
      | "AppService"
      | "ManagedDisk"
      | "BlockBlob"
      | "RedisCache"
      | "AzureDataExplorer"
      | "MySql"
      | "MariaDb"
      | "PostgreSql"
      | "DedicatedHost"
      | "SapHana"
      | "SqlAzureHybridBenefit"
      | "AVS"
      | "DataFactory"
      | "NetAppStorage"
      | "AzureFiles"
      | "SqlEdge"
      | "VirtualMachineSoftware";
    reviewDateTime?: string;
    reservedResourceProperties?: { instanceFlexibility?: "On" | "Off" };
  };
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ReservationOrderAliasCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderAliasName: Schema.String.pipe(T.PathParam()),
    sku: Schema.Struct({
      name: Schema.optional(Schema.String),
    }),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        billingScopeId: Schema.optional(Schema.String),
        term: Schema.optional(Schema.Literals(["P1Y", "P3Y", "P5Y"])),
        billingPlan: Schema.optional(Schema.Literals(["P1M"])),
        appliedScopeType: Schema.optional(
          Schema.Literals(["Single", "Shared", "ManagementGroup"]),
        ),
        appliedScopeProperties: Schema.optional(
          Schema.Struct({
            tenantId: Schema.optional(Schema.String),
            managementGroupId: Schema.optional(Schema.String),
            subscriptionId: Schema.optional(Schema.String),
            resourceGroupId: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
          }),
        ),
        quantity: Schema.optional(Schema.Number),
        renew: Schema.optional(Schema.Boolean),
        reservedResourceType: Schema.optional(
          Schema.Literals([
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
          ]),
        ),
        reviewDateTime: Schema.optional(Schema.String),
        reservedResourceProperties: Schema.optional(
          Schema.Struct({
            instanceFlexibility: Schema.optional(
              Schema.Literals(["On", "Off"]),
            ),
          }),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
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
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.BillingBenefits/reservationOrderAliases/{reservationOrderAliasName}",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<ReservationOrderAliasCreateInput>;

// Output Schema
export interface ReservationOrderAliasCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ReservationOrderAliasCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
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
      }),
    ),
  }) as unknown as Schema.Codec<ReservationOrderAliasCreateOutput>;

// The operation
/**
 * Create a reservation order alias.
 *
 * @param reservationOrderAliasName - Name of the reservation order alias
 * @param api-version - The api-version to be used by the service
 */
export const ReservationOrderAliasCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReservationOrderAliasCreateInput,
    outputSchema: ReservationOrderAliasCreateOutput,
  }),
);
// Input Schema
export interface ReservationOrderAliasGetInput {
  reservationOrderAliasName: string;
}
export const ReservationOrderAliasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderAliasName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.BillingBenefits/reservationOrderAliases/{reservationOrderAliasName}",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<ReservationOrderAliasGetInput>;

// Output Schema
export interface ReservationOrderAliasGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ReservationOrderAliasGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
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
      }),
    ),
  }) as unknown as Schema.Codec<ReservationOrderAliasGetOutput>;

// The operation
/**
 * Get a reservation order alias.
 *
 * @param reservationOrderAliasName - Name of the reservation order alias
 * @param api-version - The api-version to be used by the service
 */
export const ReservationOrderAliasGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReservationOrderAliasGetInput,
    outputSchema: ReservationOrderAliasGetOutput,
  }),
);
// Input Schema
export interface SavingsPlanGetInput {
  savingsPlanOrderId: string;
  savingsPlanId: string;
  $expand?: string;
}
export const SavingsPlanGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  savingsPlanOrderId: Schema.String.pipe(T.PathParam()),
  savingsPlanId: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.BillingBenefits/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans/{savingsPlanId}",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<SavingsPlanGetInput>;

// Output Schema
export interface SavingsPlanGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SavingsPlanGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
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
    }),
  ),
}) as unknown as Schema.Codec<SavingsPlanGetOutput>;

// The operation
/**
 * Get savings plan.
 *
 * @param savingsPlanOrderId - Order ID of the savings plan
 * @param savingsPlanId - ID of the savings plan
 * @param api-version - The api-version to be used by the service
 * @param $expand - May be used to expand the detail information of some properties.
 */
export const SavingsPlanGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SavingsPlanGetInput,
  outputSchema: SavingsPlanGetOutput,
}));
// Input Schema
export interface SavingsPlanListInput {
  savingsPlanOrderId: string;
}
export const SavingsPlanListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  savingsPlanOrderId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.BillingBenefits/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<SavingsPlanListInput>;

// Output Schema
export interface SavingsPlanListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const SavingsPlanListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SavingsPlanListOutput>;

// The operation
/**
 * List savings plans in an order.
 *
 * @param savingsPlanOrderId - Order ID of the savings plan
 * @param api-version - The api-version to be used by the service
 */
export const SavingsPlanList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SavingsPlanListInput,
  outputSchema: SavingsPlanListOutput,
}));
// Input Schema
export interface SavingsPlanListAllInput {
  $filter?: string;
  $orderby?: string;
  refreshSummary?: string;
  $skiptoken?: number;
  selectedState?: string;
  take?: number;
}
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
  ) as unknown as Schema.Codec<SavingsPlanListAllInput>;

// Output Schema
export interface SavingsPlanListAllOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
  additionalProperties?: {
    name?: string;
    value?: {
      succeededCount?: number;
      failedCount?: number;
      expiringCount?: number;
      expiredCount?: number;
      pendingCount?: number;
      cancelledCount?: number;
      processingCount?: number;
      noBenefitCount?: number;
      warningCount?: number;
    };
  }[];
}
export const SavingsPlanListAllOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
    additionalProperties: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          value: Schema.optional(
            Schema.Struct({
              succeededCount: Schema.optional(Schema.Number),
              failedCount: Schema.optional(Schema.Number),
              expiringCount: Schema.optional(Schema.Number),
              expiredCount: Schema.optional(Schema.Number),
              pendingCount: Schema.optional(Schema.Number),
              cancelledCount: Schema.optional(Schema.Number),
              processingCount: Schema.optional(Schema.Number),
              noBenefitCount: Schema.optional(Schema.Number),
              warningCount: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SavingsPlanListAllOutput>;

// The operation
/**
 * List savings plans.
 *
 * @param api-version - The api-version to be used by the service
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
export interface SavingsPlanOrderAliasCreateInput {
  savingsPlanOrderAliasName: string;
  sku: { name?: string };
  kind?: string;
  properties?: {
    displayName?: string;
    savingsPlanOrderId?: string;
    provisioningState?:
      | "Creating"
      | "PendingBilling"
      | "ConfirmedBilling"
      | "Created"
      | "Succeeded"
      | "Cancelled"
      | "Expired"
      | "Failed";
    billingScopeId?: string;
    term?: "P1Y" | "P3Y" | "P5Y";
    billingPlan?: "P1M";
    appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
    appliedScopeProperties?: {
      tenantId?: string;
      managementGroupId?: string;
      subscriptionId?: string;
      resourceGroupId?: string;
      displayName?: string;
    };
    commitment?: { currencyCode?: string; amount?: number };
    renew?: boolean;
  };
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SavingsPlanOrderAliasCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    savingsPlanOrderAliasName: Schema.String.pipe(T.PathParam()),
    sku: Schema.Struct({
      name: Schema.optional(Schema.String),
    }),
    kind: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        savingsPlanOrderId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "PendingBilling",
            "ConfirmedBilling",
            "Created",
            "Succeeded",
            "Cancelled",
            "Expired",
            "Failed",
          ]),
        ),
        billingScopeId: Schema.optional(Schema.String),
        term: Schema.optional(Schema.Literals(["P1Y", "P3Y", "P5Y"])),
        billingPlan: Schema.optional(Schema.Literals(["P1M"])),
        appliedScopeType: Schema.optional(
          Schema.Literals(["Single", "Shared", "ManagementGroup"]),
        ),
        appliedScopeProperties: Schema.optional(
          Schema.Struct({
            tenantId: Schema.optional(Schema.String),
            managementGroupId: Schema.optional(Schema.String),
            subscriptionId: Schema.optional(Schema.String),
            resourceGroupId: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
          }),
        ),
        commitment: Schema.optional(
          Schema.Struct({
            currencyCode: Schema.optional(Schema.String),
            amount: Schema.optional(Schema.Number),
          }),
        ),
        renew: Schema.optional(Schema.Boolean),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
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
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.BillingBenefits/savingsPlanOrderAliases/{savingsPlanOrderAliasName}",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<SavingsPlanOrderAliasCreateInput>;

// Output Schema
export interface SavingsPlanOrderAliasCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SavingsPlanOrderAliasCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
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
      }),
    ),
  }) as unknown as Schema.Codec<SavingsPlanOrderAliasCreateOutput>;

// The operation
/**
 * Create a savings plan. Learn more about permissions needed at https://go.microsoft.com/fwlink/?linkid=2215851
 *
 * @param savingsPlanOrderAliasName - Name of the savings plan order alias
 * @param api-version - The api-version to be used by the service
 */
export const SavingsPlanOrderAliasCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SavingsPlanOrderAliasCreateInput,
    outputSchema: SavingsPlanOrderAliasCreateOutput,
  }),
);
// Input Schema
export interface SavingsPlanOrderAliasGetInput {
  savingsPlanOrderAliasName: string;
}
export const SavingsPlanOrderAliasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    savingsPlanOrderAliasName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.BillingBenefits/savingsPlanOrderAliases/{savingsPlanOrderAliasName}",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<SavingsPlanOrderAliasGetInput>;

// Output Schema
export interface SavingsPlanOrderAliasGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SavingsPlanOrderAliasGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
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
      }),
    ),
  }) as unknown as Schema.Codec<SavingsPlanOrderAliasGetOutput>;

// The operation
/**
 * Get a savings plan.
 *
 * @param savingsPlanOrderAliasName - Name of the savings plan order alias
 * @param api-version - The api-version to be used by the service
 */
export const SavingsPlanOrderAliasGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SavingsPlanOrderAliasGetInput,
    outputSchema: SavingsPlanOrderAliasGetOutput,
  }),
);
// Input Schema
export interface SavingsPlanOrderElevateInput {
  savingsPlanOrderId: string;
}
export const SavingsPlanOrderElevateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    savingsPlanOrderId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.BillingBenefits/savingsPlanOrders/{savingsPlanOrderId}/elevate",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<SavingsPlanOrderElevateInput>;

// Output Schema
export interface SavingsPlanOrderElevateOutput {
  id?: string;
  name?: string;
  properties?: {
    principalId?: string;
    roleDefinitionId?: string;
    scope?: string;
  };
}
export const SavingsPlanOrderElevateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        roleDefinitionId: Schema.optional(Schema.String),
        scope: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<SavingsPlanOrderElevateOutput>;

// The operation
/**
 * Elevate as owner on savings plan order based on billing permissions.
 *
 * @param savingsPlanOrderId - Order ID of the savings plan
 * @param api-version - The api-version to be used by the service
 */
export const SavingsPlanOrderElevate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SavingsPlanOrderElevateInput,
    outputSchema: SavingsPlanOrderElevateOutput,
  }),
);
// Input Schema
export interface SavingsPlanOrderGetInput {
  savingsPlanOrderId: string;
  $expand?: string;
}
export const SavingsPlanOrderGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    savingsPlanOrderId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.BillingBenefits/savingsPlanOrders/{savingsPlanOrderId}",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<SavingsPlanOrderGetInput>;

// Output Schema
export interface SavingsPlanOrderGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SavingsPlanOrderGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
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
      }),
    ),
  }) as unknown as Schema.Codec<SavingsPlanOrderGetOutput>;

// The operation
/**
 * Get a savings plan order.
 *
 * @param savingsPlanOrderId - Order ID of the savings plan
 * @param api-version - The api-version to be used by the service
 * @param $expand - May be used to expand the detail information of some properties.
 */
export const SavingsPlanOrderGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SavingsPlanOrderGetInput,
  outputSchema: SavingsPlanOrderGetOutput,
}));
// Input Schema
export interface SavingsPlanOrderListInput {}
export const SavingsPlanOrderListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.BillingBenefits/savingsPlanOrders",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<SavingsPlanOrderListInput>;

// Output Schema
export interface SavingsPlanOrderListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const SavingsPlanOrderListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SavingsPlanOrderListOutput>;

// The operation
/**
 * List all Savings plan orders.
 *
 * @param api-version - The api-version to be used by the service
 */
export const SavingsPlanOrderList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SavingsPlanOrderListInput,
    outputSchema: SavingsPlanOrderListOutput,
  }),
);
// Input Schema
export interface SavingsPlanUpdateInput {
  savingsPlanOrderId: string;
  savingsPlanId: string;
  properties?: {
    displayName?: string;
    appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
    appliedScopeProperties?: {
      tenantId?: string;
      managementGroupId?: string;
      subscriptionId?: string;
      resourceGroupId?: string;
      displayName?: string;
    };
    renew?: boolean;
    renewProperties?: {
      purchaseProperties?: {
        sku?: { name?: string };
        properties?: {
          displayName?: string;
          billingScopeId?: string;
          term?: "P1Y" | "P3Y" | "P5Y";
          billingPlan?: "P1M";
          appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
          commitment?: { currencyCode?: string; amount?: number };
          effectiveDateTime?: string;
          renew?: boolean;
          appliedScopeProperties?: {
            tenantId?: string;
            managementGroupId?: string;
            subscriptionId?: string;
            resourceGroupId?: string;
            displayName?: string;
          };
        };
      };
    };
  };
}
export const SavingsPlanUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    savingsPlanOrderId: Schema.String.pipe(T.PathParam()),
    savingsPlanId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        appliedScopeType: Schema.optional(
          Schema.Literals(["Single", "Shared", "ManagementGroup"]),
        ),
        appliedScopeProperties: Schema.optional(
          Schema.Struct({
            tenantId: Schema.optional(Schema.String),
            managementGroupId: Schema.optional(Schema.String),
            subscriptionId: Schema.optional(Schema.String),
            resourceGroupId: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
          }),
        ),
        renew: Schema.optional(Schema.Boolean),
        renewProperties: Schema.optional(
          Schema.Struct({
            purchaseProperties: Schema.optional(
              Schema.Struct({
                sku: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                  }),
                ),
                properties: Schema.optional(
                  Schema.Struct({
                    displayName: Schema.optional(Schema.String),
                    billingScopeId: Schema.optional(Schema.String),
                    term: Schema.optional(
                      Schema.Literals(["P1Y", "P3Y", "P5Y"]),
                    ),
                    billingPlan: Schema.optional(Schema.Literals(["P1M"])),
                    appliedScopeType: Schema.optional(
                      Schema.Literals(["Single", "Shared", "ManagementGroup"]),
                    ),
                    commitment: Schema.optional(
                      Schema.Struct({
                        currencyCode: Schema.optional(Schema.String),
                        amount: Schema.optional(Schema.Number),
                      }),
                    ),
                    effectiveDateTime: Schema.optional(Schema.String),
                    renew: Schema.optional(Schema.Boolean),
                    appliedScopeProperties: Schema.optional(
                      Schema.Struct({
                        tenantId: Schema.optional(Schema.String),
                        managementGroupId: Schema.optional(Schema.String),
                        subscriptionId: Schema.optional(Schema.String),
                        resourceGroupId: Schema.optional(Schema.String),
                        displayName: Schema.optional(Schema.String),
                      }),
                    ),
                  }),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/providers/Microsoft.BillingBenefits/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans/{savingsPlanId}",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<SavingsPlanUpdateInput>;

// Output Schema
export interface SavingsPlanUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SavingsPlanUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
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
      }),
    ),
  }) as unknown as Schema.Codec<SavingsPlanUpdateOutput>;

// The operation
/**
 * Update savings plan.
 *
 * @param savingsPlanOrderId - Order ID of the savings plan
 * @param savingsPlanId - ID of the savings plan
 * @param api-version - The api-version to be used by the service
 */
export const SavingsPlanUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SavingsPlanUpdateInput,
  outputSchema: SavingsPlanUpdateOutput,
}));
// Input Schema
export interface SavingsPlanValidateUpdateInput {
  savingsPlanOrderId: string;
  savingsPlanId: string;
  benefits?: {
    displayName?: string;
    appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
    appliedScopeProperties?: {
      tenantId?: string;
      managementGroupId?: string;
      subscriptionId?: string;
      resourceGroupId?: string;
      displayName?: string;
    };
    renew?: boolean;
    renewProperties?: {
      purchaseProperties?: {
        sku?: { name?: string };
        properties?: {
          displayName?: string;
          billingScopeId?: string;
          term?: "P1Y" | "P3Y" | "P5Y";
          billingPlan?: "P1M";
          appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
          commitment?: { currencyCode?: string; amount?: number };
          effectiveDateTime?: string;
          renew?: boolean;
          appliedScopeProperties?: {
            tenantId?: string;
            managementGroupId?: string;
            subscriptionId?: string;
            resourceGroupId?: string;
            displayName?: string;
          };
        };
      };
    };
  }[];
}
export const SavingsPlanValidateUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    savingsPlanOrderId: Schema.String.pipe(T.PathParam()),
    savingsPlanId: Schema.String.pipe(T.PathParam()),
    benefits: Schema.optional(
      Schema.Array(
        Schema.Struct({
          displayName: Schema.optional(Schema.String),
          appliedScopeType: Schema.optional(
            Schema.Literals(["Single", "Shared", "ManagementGroup"]),
          ),
          appliedScopeProperties: Schema.optional(
            Schema.Struct({
              tenantId: Schema.optional(Schema.String),
              managementGroupId: Schema.optional(Schema.String),
              subscriptionId: Schema.optional(Schema.String),
              resourceGroupId: Schema.optional(Schema.String),
              displayName: Schema.optional(Schema.String),
            }),
          ),
          renew: Schema.optional(Schema.Boolean),
          renewProperties: Schema.optional(
            Schema.Struct({
              purchaseProperties: Schema.optional(
                Schema.Struct({
                  sku: Schema.optional(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                    }),
                  ),
                  properties: Schema.optional(
                    Schema.Struct({
                      displayName: Schema.optional(Schema.String),
                      billingScopeId: Schema.optional(Schema.String),
                      term: Schema.optional(
                        Schema.Literals(["P1Y", "P3Y", "P5Y"]),
                      ),
                      billingPlan: Schema.optional(Schema.Literals(["P1M"])),
                      appliedScopeType: Schema.optional(
                        Schema.Literals([
                          "Single",
                          "Shared",
                          "ManagementGroup",
                        ]),
                      ),
                      commitment: Schema.optional(
                        Schema.Struct({
                          currencyCode: Schema.optional(Schema.String),
                          amount: Schema.optional(Schema.Number),
                        }),
                      ),
                      effectiveDateTime: Schema.optional(Schema.String),
                      renew: Schema.optional(Schema.Boolean),
                      appliedScopeProperties: Schema.optional(
                        Schema.Struct({
                          tenantId: Schema.optional(Schema.String),
                          managementGroupId: Schema.optional(Schema.String),
                          subscriptionId: Schema.optional(Schema.String),
                          resourceGroupId: Schema.optional(Schema.String),
                          displayName: Schema.optional(Schema.String),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.BillingBenefits/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans/{savingsPlanId}/validate",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<SavingsPlanValidateUpdateInput>;

// Output Schema
export interface SavingsPlanValidateUpdateOutput {
  benefits?: { valid?: boolean; reasonCode?: string; reason?: string }[];
  nextLink?: string;
}
export const SavingsPlanValidateUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    benefits: Schema.optional(
      Schema.Array(
        Schema.Struct({
          valid: Schema.optional(Schema.Boolean),
          reasonCode: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SavingsPlanValidateUpdateOutput>;

// The operation
/**
 * Validate savings plan patch.
 *
 * @param savingsPlanOrderId - Order ID of the savings plan
 * @param savingsPlanId - ID of the savings plan
 * @param api-version - The api-version to be used by the service
 */
export const SavingsPlanValidateUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SavingsPlanValidateUpdateInput,
    outputSchema: SavingsPlanValidateUpdateOutput,
  }),
);
// Input Schema
export interface ValidatePurchaseInput {
  benefits?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const ValidatePurchaseInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  benefits: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.BillingBenefits/validate",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<ValidatePurchaseInput>;

// Output Schema
export interface ValidatePurchaseOutput {
  benefits?: { valid?: boolean; reasonCode?: string; reason?: string }[];
  nextLink?: string;
}
export const ValidatePurchaseOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    benefits: Schema.optional(
      Schema.Array(
        Schema.Struct({
          valid: Schema.optional(Schema.Boolean),
          reasonCode: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<ValidatePurchaseOutput>;

// The operation
/**
 * Validate savings plan purchase.
 *
 * @param api-version - The api-version to be used by the service
 */
export const ValidatePurchase = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ValidatePurchaseInput,
  outputSchema: ValidatePurchaseOutput,
}));
