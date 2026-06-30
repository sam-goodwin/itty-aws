/**
 * Azure Billingbenefits API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

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
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

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
  );
export type ReservationOrderAliasCreateInput =
  typeof ReservationOrderAliasCreateInput.Type;

// Output Schema
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
  });
export type ReservationOrderAliasCreateOutput =
  typeof ReservationOrderAliasCreateOutput.Type;

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
export const ReservationOrderAliasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderAliasName: Schema.String.pipe(T.PathParam()),
  }).pipe(
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
  });
export type ReservationOrderAliasGetOutput =
  typeof ReservationOrderAliasGetOutput.Type;

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
);
export type SavingsPlanGetInput = typeof SavingsPlanGetInput.Type;

// Output Schema
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
});
export type SavingsPlanGetOutput = typeof SavingsPlanGetOutput.Type;

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
export const SavingsPlanListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  savingsPlanOrderId: Schema.String.pipe(T.PathParam()),
}).pipe(
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
});
export type SavingsPlanListOutput = typeof SavingsPlanListOutput.Type;

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
  });
export type SavingsPlanListAllOutput = typeof SavingsPlanListAllOutput.Type;

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
  );
export type SavingsPlanOrderAliasCreateInput =
  typeof SavingsPlanOrderAliasCreateInput.Type;

// Output Schema
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
  });
export type SavingsPlanOrderAliasCreateOutput =
  typeof SavingsPlanOrderAliasCreateOutput.Type;

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
export const SavingsPlanOrderAliasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    savingsPlanOrderAliasName: Schema.String.pipe(T.PathParam()),
  }).pipe(
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
  });
export type SavingsPlanOrderAliasGetOutput =
  typeof SavingsPlanOrderAliasGetOutput.Type;

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
export const SavingsPlanOrderElevateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    savingsPlanOrderId: Schema.String.pipe(T.PathParam()),
  }).pipe(
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
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        roleDefinitionId: Schema.optional(Schema.String),
        scope: Schema.optional(Schema.String),
      }),
    ),
  });
export type SavingsPlanOrderElevateOutput =
  typeof SavingsPlanOrderElevateOutput.Type;

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
  );
export type SavingsPlanOrderGetInput = typeof SavingsPlanOrderGetInput.Type;

// Output Schema
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
  });
export type SavingsPlanOrderGetOutput = typeof SavingsPlanOrderGetOutput.Type;

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
  });
export type SavingsPlanOrderListOutput = typeof SavingsPlanOrderListOutput.Type;

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
);
export type SavingsPlanUpdateInput = typeof SavingsPlanUpdateInput.Type;

// Output Schema
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
  });
export type SavingsPlanUpdateOutput = typeof SavingsPlanUpdateOutput.Type;

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
  );
export type SavingsPlanValidateUpdateInput =
  typeof SavingsPlanValidateUpdateInput.Type;

// Output Schema
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
  });
export type SavingsPlanValidateUpdateOutput =
  typeof SavingsPlanValidateUpdateOutput.Type;

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
);
export type ValidatePurchaseInput = typeof ValidatePurchaseInput.Type;

// Output Schema
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
);
export type ValidatePurchaseOutput = typeof ValidatePurchaseOutput.Type;

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
