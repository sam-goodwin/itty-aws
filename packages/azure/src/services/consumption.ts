/**
 * Azure Consumption API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const AggregatedCostGetByManagementGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Consumption/aggregatedcost",
    }),
  );
export type AggregatedCostGetByManagementGroupInput =
  typeof AggregatedCostGetByManagementGroupInput.Type;

// Output Schema
export const AggregatedCostGetByManagementGroupOutput =
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
export type AggregatedCostGetByManagementGroupOutput =
  typeof AggregatedCostGetByManagementGroupOutput.Type;

// The operation
/**
 * Provides the aggregate cost of a management group and all child management groups by current billing period.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - Order Id of the reservation
 * @param $filter - Required only for daily grain. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge'
 */
export const AggregatedCostGetByManagementGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AggregatedCostGetByManagementGroupInput,
    outputSchema: AggregatedCostGetByManagementGroupOutput,
  }));
// Input Schema
export const AggregatedCostGetForBillingPeriodByManagementGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    billingPeriodName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}/providers/Microsoft.Consumption/aggregatedCost",
    }),
  );
export type AggregatedCostGetForBillingPeriodByManagementGroupInput =
  typeof AggregatedCostGetForBillingPeriodByManagementGroupInput.Type;

// Output Schema
export const AggregatedCostGetForBillingPeriodByManagementGroupOutput =
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
export type AggregatedCostGetForBillingPeriodByManagementGroupOutput =
  typeof AggregatedCostGetForBillingPeriodByManagementGroupOutput.Type;

// The operation
/**
 * Provides the aggregate cost of a management group and all child management groups by specified billing period
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - Order Id of the reservation
 * @param billingPeriodName - Billing Period Name.
 */
export const AggregatedCostGetForBillingPeriodByManagementGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AggregatedCostGetForBillingPeriodByManagementGroupInput,
    outputSchema: AggregatedCostGetForBillingPeriodByManagementGroupOutput,
  }));
// Input Schema
export const BalancesGetByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Consumption/balances",
    }),
  );
export type BalancesGetByBillingAccountInput =
  typeof BalancesGetByBillingAccountInput.Type;

// Output Schema
export const BalancesGetByBillingAccountOutput =
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
export type BalancesGetByBillingAccountOutput =
  typeof BalancesGetByBillingAccountOutput.Type;

// The operation
/**
 * Gets the balances for a scope by billingAccountId. Balances are available via this API only for May 1, 2014 or later.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountId - BillingAccount ID
 */
export const BalancesGetByBillingAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BalancesGetByBillingAccountInput,
    outputSchema: BalancesGetByBillingAccountOutput,
  }),
);
// Input Schema
export const BalancesGetForBillingPeriodByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountId: Schema.String.pipe(T.PathParam()),
    billingPeriodName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingPeriods/{billingPeriodName}/providers/Microsoft.Consumption/balances",
    }),
  );
export type BalancesGetForBillingPeriodByBillingAccountInput =
  typeof BalancesGetForBillingPeriodByBillingAccountInput.Type;

// Output Schema
export const BalancesGetForBillingPeriodByBillingAccountOutput =
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
export type BalancesGetForBillingPeriodByBillingAccountOutput =
  typeof BalancesGetForBillingPeriodByBillingAccountOutput.Type;

// The operation
/**
 * Gets the balances for a scope by billing period and billingAccountId. Balances are available via this API only for May 1, 2014 or later.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountId - BillingAccount ID
 * @param billingPeriodName - Billing Period Name.
 */
export const BalancesGetForBillingPeriodByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BalancesGetForBillingPeriodByBillingAccountInput,
    outputSchema: BalancesGetForBillingPeriodByBillingAccountOutput,
  }));
// Input Schema
export const BudgetsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    budgetName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{scope}/providers/Microsoft.Consumption/budgets/{budgetName}",
    }),
  );
export type BudgetsCreateOrUpdateInput = typeof BudgetsCreateOrUpdateInput.Type;

// Output Schema
export const BudgetsCreateOrUpdateOutput =
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
export type BudgetsCreateOrUpdateOutput =
  typeof BudgetsCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a budget. You can optionally provide an eTag if desired as a form of concurrency control. To obtain the latest eTag for a given budget, perform a get operation prior to your put operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param budgetName - Budget Name.
 */
export const BudgetsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BudgetsCreateOrUpdateInput,
    outputSchema: BudgetsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const BudgetsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
  budgetName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/{scope}/providers/Microsoft.Consumption/budgets/{budgetName}",
  }),
);
export type BudgetsDeleteInput = typeof BudgetsDeleteInput.Type;

// Output Schema
export const BudgetsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BudgetsDeleteOutput = typeof BudgetsDeleteOutput.Type;

// The operation
/**
 * The operation to delete a budget.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param budgetName - Budget Name.
 */
export const BudgetsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BudgetsDeleteInput,
  outputSchema: BudgetsDeleteOutput,
}));
// Input Schema
export const BudgetsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
  budgetName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.Consumption/budgets/{budgetName}",
  }),
);
export type BudgetsGetInput = typeof BudgetsGetInput.Type;

// Output Schema
export const BudgetsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type BudgetsGetOutput = typeof BudgetsGetOutput.Type;

// The operation
/**
 * Gets the budget for the scope by budget name.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param budgetName - Budget Name.
 */
export const BudgetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BudgetsGetInput,
  outputSchema: BudgetsGetOutput,
}));
// Input Schema
export const BudgetsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.Consumption/budgets",
  }),
);
export type BudgetsListInput = typeof BudgetsListInput.Type;

// Output Schema
export const BudgetsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type BudgetsListOutput = typeof BudgetsListOutput.Type;

// The operation
/**
 * Lists all budgets for the defined scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 */
export const BudgetsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BudgetsListInput,
  outputSchema: BudgetsListOutput,
}));
// Input Schema
export const ChargesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
  startDate: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $apply: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.Consumption/charges",
  }),
);
export type ChargesListInput = typeof ChargesListInput.Type;

// Output Schema
export const ChargesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type ChargesListOutput = typeof ChargesListOutput.Type;

// The operation
/**
 * Lists the charges based for the defined scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param startDate - Start date
 * @param endDate - End date
 * @param $filter - May be used to filter charges by properties/usageEnd (Utc time), properties/usageStart (Utc time). The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).
 * @param $apply - May be used to group charges for billingAccount scope by properties/billingProfileId, properties/invoiceSectionId, properties/customerId (specific for Partner Led), or for billingProfile scope by properties/invoiceSectionId.
 */
export const ChargesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ChargesListInput,
  outputSchema: ChargesListOutput,
}));
// Input Schema
export const CreditsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountId: Schema.String.pipe(T.PathParam()),
  billingProfileId: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/providers/Microsoft.Consumption/credits/balanceSummary",
  }),
);
export type CreditsGetInput = typeof CreditsGetInput.Type;

// Output Schema
export const CreditsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreditsGetOutput = typeof CreditsGetOutput.Type;

// The operation
/**
 * The credit summary by billingAccountId and billingProfileId.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountId - BillingAccount ID
 * @param billingProfileId - Azure Billing Profile ID.
 */
export const CreditsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreditsGetInput,
  outputSchema: CreditsGetOutput,
}));
// Input Schema
export const EventsListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Consumption/events",
    }),
  );
export type EventsListByBillingAccountInput =
  typeof EventsListByBillingAccountInput.Type;

// Output Schema
export const EventsListByBillingAccountOutput =
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
export type EventsListByBillingAccountOutput =
  typeof EventsListByBillingAccountOutput.Type;

// The operation
/**
 * Lists the events that decrements Azure credits or Microsoft Azure consumption commitment for a billing account or a billing profile for a given start and end date.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountId - BillingAccount ID
 * @param $filter - May be used to filter the events by lotId, lotSource etc. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).
 */
export const EventsListByBillingAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EventsListByBillingAccountInput,
    outputSchema: EventsListByBillingAccountOutput,
  }),
);
// Input Schema
export const EventsListByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountId: Schema.String.pipe(T.PathParam()),
    billingProfileId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    startDate: Schema.String,
    endDate: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/providers/Microsoft.Consumption/events",
    }),
  );
export type EventsListByBillingProfileInput =
  typeof EventsListByBillingProfileInput.Type;

// Output Schema
export const EventsListByBillingProfileOutput =
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
export type EventsListByBillingProfileOutput =
  typeof EventsListByBillingProfileOutput.Type;

// The operation
/**
 * Lists the events that decrements Azure credits or Microsoft Azure consumption commitment for a billing account or a billing profile for a given start and end date.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountId - BillingAccount ID
 * @param billingProfileId - Azure Billing Profile ID.
 * @param startDate - Start date
 * @param endDate - End date
 */
export const EventsListByBillingProfile = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EventsListByBillingProfileInput,
    outputSchema: EventsListByBillingProfileOutput,
  }),
);
// Input Schema
export const LotsListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Consumption/lots",
    }),
  );
export type LotsListByBillingAccountInput =
  typeof LotsListByBillingAccountInput.Type;

// Output Schema
export const LotsListByBillingAccountOutput =
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
export type LotsListByBillingAccountOutput =
  typeof LotsListByBillingAccountOutput.Type;

// The operation
/**
 * Lists all Microsoft Azure consumption commitments for a billing account. The API is only supported for Microsoft Customer Agreements (MCA) and Direct Enterprise Agreement (EA)  billing accounts.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountId - BillingAccount ID
 * @param $filter - May be used to filter the lots by Status, Source etc. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:).
 */
export const LotsListByBillingAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LotsListByBillingAccountInput,
    outputSchema: LotsListByBillingAccountOutput,
  }),
);
// Input Schema
export const LotsListByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountId: Schema.String.pipe(T.PathParam()),
    billingProfileId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/providers/Microsoft.Consumption/lots",
    }),
  );
export type LotsListByBillingProfileInput =
  typeof LotsListByBillingProfileInput.Type;

// Output Schema
export const LotsListByBillingProfileOutput =
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
export type LotsListByBillingProfileOutput =
  typeof LotsListByBillingProfileOutput.Type;

// The operation
/**
 * Lists all Azure credits for a billing account or a billing profile. The API is only supported for Microsoft Customer Agreements (MCA) billing accounts.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountId - BillingAccount ID
 * @param billingProfileId - Azure Billing Profile ID.
 */
export const LotsListByBillingProfile = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LotsListByBillingProfileInput,
    outputSchema: LotsListByBillingProfileOutput,
  }),
);
// Input Schema
export const LotsListByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountId: Schema.String.pipe(T.PathParam()),
    customerId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}/providers/Microsoft.Consumption/lots",
    }),
  );
export type LotsListByCustomerInput = typeof LotsListByCustomerInput.Type;

// Output Schema
export const LotsListByCustomerOutput =
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
export type LotsListByCustomerOutput = typeof LotsListByCustomerOutput.Type;

// The operation
/**
 * Lists all Azure credits for a customer. The API is only supported for Microsoft Partner  Agreements (MPA) billing accounts.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountId - BillingAccount ID
 * @param customerId - Customer ID
 * @param $filter - May be used to filter the lots by Status, Source etc. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. Tag filter is a key value pair string where key and value is separated by a colon (:).
 */
export const LotsListByCustomer = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LotsListByCustomerInput,
  outputSchema: LotsListByCustomerOutput,
}));
// Input Schema
export const MarketplacesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
  $filter: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $skiptoken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.Consumption/marketplaces",
  }),
);
export type MarketplacesListInput = typeof MarketplacesListInput.Type;

// Output Schema
export const MarketplacesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type MarketplacesListOutput = typeof MarketplacesListOutput.Type;

// The operation
/**
 * Lists the marketplaces for a scope at the defined scope. Marketplaces are available via this API only for May 1, 2014 or later.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param $filter - May be used to filter marketplaces by properties/usageEnd (Utc time), properties/usageStart (Utc time), properties/resourceGroup, properties/instanceName or properties/instanceId. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'.
 * @param $top - May be used to limit the number of results to the most recent N marketplaces.
 * @param $skiptoken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 */
export const MarketplacesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MarketplacesListInput,
  outputSchema: MarketplacesListOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Consumption/operations",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const PriceSheetDownloadByBillingAccountPeriodInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountId: Schema.String.pipe(T.PathParam()),
    billingPeriodName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingPeriods/{billingPeriodName}/providers/Microsoft.Consumption/pricesheets/download",
    }),
  );
export type PriceSheetDownloadByBillingAccountPeriodInput =
  typeof PriceSheetDownloadByBillingAccountPeriodInput.Type;

// Output Schema
export const PriceSheetDownloadByBillingAccountPeriodOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["Running", "Completed", "Failed"]),
    ),
    properties: Schema.optional(
      Schema.Struct({
        downloadUrl: Schema.optional(Schema.String),
        validTill: Schema.optional(Schema.String),
      }),
    ),
  });
export type PriceSheetDownloadByBillingAccountPeriodOutput =
  typeof PriceSheetDownloadByBillingAccountPeriodOutput.Type;

// The operation
/**
 * Generates the pricesheet for the provided billing period asynchronously based on the enrollment id
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountId - BillingAccount ID
 * @param billingPeriodName - Billing Period Name.
 */
export const PriceSheetDownloadByBillingAccountPeriod =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PriceSheetDownloadByBillingAccountPeriodInput,
    outputSchema: PriceSheetDownloadByBillingAccountPeriodOutput,
  }));
// Input Schema
export const PriceSheetGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
  $expand: Schema.optional(Schema.String),
  $skiptoken: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Consumption/pricesheets/default",
  }),
);
export type PriceSheetGetInput = typeof PriceSheetGetInput.Type;

// Output Schema
export const PriceSheetGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type PriceSheetGetOutput = typeof PriceSheetGetOutput.Type;

// The operation
/**
 * Gets the price sheet for a subscription. Price sheet is available via this API only for May 1, 2014 or later.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $expand - May be used to expand the properties/meterDetails within a price sheet. By default, these fields are not included when returning price sheet.
 * @param $skiptoken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 * @param $top - May be used to limit the number of results to the top N results.
 */
export const PriceSheetGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PriceSheetGetInput,
  outputSchema: PriceSheetGetOutput,
}));
// Input Schema
export const PriceSheetGetByBillingPeriodInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    billingPeriodName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $expand: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}/providers/Microsoft.Consumption/pricesheets/default",
    }),
  );
export type PriceSheetGetByBillingPeriodInput =
  typeof PriceSheetGetByBillingPeriodInput.Type;

// Output Schema
export const PriceSheetGetByBillingPeriodOutput =
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
export type PriceSheetGetByBillingPeriodOutput =
  typeof PriceSheetGetByBillingPeriodOutput.Type;

// The operation
/**
 * Get the price sheet for a scope by subscriptionId and billing period. Price sheet is available via this API only for May 1, 2014 or later.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param billingPeriodName - Billing Period Name.
 * @param $expand - May be used to expand the properties/meterDetails within a price sheet. By default, these fields are not included when returning price sheet.
 * @param $skiptoken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 * @param $top - May be used to limit the number of results to the top N results.
 */
export const PriceSheetGetByBillingPeriod =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PriceSheetGetByBillingPeriodInput,
    outputSchema: PriceSheetGetByBillingPeriodOutput,
  }));
// Input Schema
export const ReservationRecommendationDetailsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceScope: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    scope: Schema.Literals(["Single", "Shared"]),
    region: Schema.String,
    term: Schema.Literals(["P1M", "P1Y", "P3Y"]),
    lookBackPeriod: Schema.Literals(["Last7Days", "Last30Days", "Last60Days"]),
    product: Schema.String,
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceScope}/providers/Microsoft.Consumption/reservationRecommendationDetails",
    }),
  );
export type ReservationRecommendationDetailsGetInput =
  typeof ReservationRecommendationDetailsGetInput.Type;

// Output Schema
export const ReservationRecommendationDetailsGetOutput =
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
export type ReservationRecommendationDetailsGetOutput =
  typeof ReservationRecommendationDetailsGetOutput.Type;

// The operation
/**
 * Details of a reservation recommendation for what-if analysis of reserved instances.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceScope - The scope associated with reservation recommendation details operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resource group scope, /providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for BillingAccount scope, and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope
 * @param scope - Scope of the reservation.
 * @param region - Used to select the region the recommendation should be generated for.
 * @param term - Specify length of reservation recommendation term.
 * @param lookBackPeriod - Filter the time period on which reservation recommendation results are based.
 * @param product - Filter the products for which reservation recommendation results are generated. Examples: Standard_DS1_v2 (for VM), Premium_SSD_Managed_Disks_P30 (for Managed Disks)
 * @param $filter - Used to filter reservation recommendation details by: properties/subscriptionId can be specified for billing account and billing profile paths.
 */
export const ReservationRecommendationDetailsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReservationRecommendationDetailsGetInput,
    outputSchema: ReservationRecommendationDetailsGetOutput,
  }));
// Input Schema
export const ReservationRecommendationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceScope: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceScope}/providers/Microsoft.Consumption/reservationRecommendations",
    }),
  );
export type ReservationRecommendationsListInput =
  typeof ReservationRecommendationsListInput.Type;

// Output Schema
export const ReservationRecommendationsListOutput =
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
          location: Schema.optional(Schema.String),
          sku: Schema.optional(Schema.String),
          etag: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          kind: Schema.Literals(["legacy", "modern"]),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
    previousLink: Schema.optional(Schema.String),
  });
export type ReservationRecommendationsListOutput =
  typeof ReservationRecommendationsListOutput.Type;

// The operation
/**
 * List of recommendations for purchasing reserved instances.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceScope - The fully qualified Azure Resource manager identifier of the resource.
 * @param $filter - May be used to filter reservationRecommendations by: properties/scope with allowed values ['Single', 'Shared'] and default value 'Single'; properties/resourceType with allowed values ['VirtualMachines', 'SQLDatabases', 'PostgreSQL', 'ManagedDisk', 'MySQL', 'RedHat', 'MariaDB', 'RedisCache', 'CosmosDB', 'SqlDataWarehouse', 'SUSELinux', 'AppService', 'BlockBlob', 'AzureDataExplorer', 'VMwareCloudSimple'] and default value 'VirtualMachines'; and properties/lookBackPeriod with allowed values ['Last7Days', 'Last30Days', 'Last60Days'] and default value 'Last7Days'.
 */
export const ReservationRecommendationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReservationRecommendationsListInput,
    outputSchema: ReservationRecommendationsListOutput,
  }));
// Input Schema
export const ReservationsDetailsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceScope: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    startDate: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    reservationId: Schema.optional(Schema.String),
    reservationOrderId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceScope}/providers/Microsoft.Consumption/reservationDetails",
    }),
  );
export type ReservationsDetailsListInput =
  typeof ReservationsDetailsListInput.Type;

// Output Schema
export const ReservationsDetailsListOutput =
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
export type ReservationsDetailsListOutput =
  typeof ReservationsDetailsListOutput.Type;

// The operation
/**
 * Lists the reservations details for provided date range. Note: ARM has a payload size limit of 12MB, so currently callers get 400 when the response size exceeds the ARM limit. If the data size is too large, customers may also get 504 as the API timed out preparing the data. In such cases, API call should be made with smaller date ranges or a call to Generate Reservation Details Report API should be made as it is asynchronous and will not run into response size time outs.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceScope - The fully qualified Azure Resource manager identifier of the resource.
 * @param startDate - Start date. Only applicable when querying with billing profile
 * @param endDate - End date. Only applicable when querying with billing profile
 * @param $filter - Filter reservation details by date range. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge'. Not applicable when querying with billing profile
 * @param reservationId - Reservation Id GUID. Only valid if reservationOrderId is also provided. Filter to a specific reservation
 * @param reservationOrderId - Reservation Order Id GUID. Required if reservationId is provided. Filter to a specific reservation order
 */
export const ReservationsDetailsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReservationsDetailsListInput,
    outputSchema: ReservationsDetailsListOutput,
  }),
);
// Input Schema
export const ReservationsDetailsListByReservationOrderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Capacity/reservationorders/{reservationOrderId}/providers/Microsoft.Consumption/reservationDetails",
    }),
  );
export type ReservationsDetailsListByReservationOrderInput =
  typeof ReservationsDetailsListByReservationOrderInput.Type;

// Output Schema
export const ReservationsDetailsListByReservationOrderOutput =
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
export type ReservationsDetailsListByReservationOrderOutput =
  typeof ReservationsDetailsListByReservationOrderOutput.Type;

// The operation
/**
 * Lists the reservations details for provided date range. Note: ARM has a payload size limit of 12MB, so currently callers get 400 when the response size exceeds the ARM limit. If the data size is too large, customers may also get 504 as the API timed out preparing the data. In such cases, API call should be made with smaller date ranges or a call to Generate Reservation Details Report API should be made as it is asynchronous and will not run into response size time outs.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 * @param $filter - Filter reservation details by date range. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge'
 */
export const ReservationsDetailsListByReservationOrder =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReservationsDetailsListByReservationOrderInput,
    outputSchema: ReservationsDetailsListByReservationOrderOutput,
  }));
// Input Schema
export const ReservationsDetailsListByReservationOrderAndReservationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    reservationId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Capacity/reservationorders/{reservationOrderId}/reservations/{reservationId}/providers/Microsoft.Consumption/reservationDetails",
    }),
  );
export type ReservationsDetailsListByReservationOrderAndReservationInput =
  typeof ReservationsDetailsListByReservationOrderAndReservationInput.Type;

// Output Schema
export const ReservationsDetailsListByReservationOrderAndReservationOutput =
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
export type ReservationsDetailsListByReservationOrderAndReservationOutput =
  typeof ReservationsDetailsListByReservationOrderAndReservationOutput.Type;

// The operation
/**
 * Lists the reservations details for provided date range. Note: ARM has a payload size limit of 12MB, so currently callers get 400 when the response size exceeds the ARM limit. If the data size is too large, customers may also get 504 as the API timed out preparing the data. In such cases, API call should be made with smaller date ranges or a call to Generate Reservation Details Report API should be made as it is asynchronous and will not run into response size time outs.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 * @param reservationId - Id of the reservation
 * @param $filter - Filter reservation details by date range. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge'
 */
export const ReservationsDetailsListByReservationOrderAndReservation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReservationsDetailsListByReservationOrderAndReservationInput,
    outputSchema: ReservationsDetailsListByReservationOrderAndReservationOutput,
  }));
// Input Schema
export const ReservationsSummariesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceScope: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    grain: Schema.Literals(["daily", "monthly"]),
    startDate: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    reservationId: Schema.optional(Schema.String),
    reservationOrderId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceScope}/providers/Microsoft.Consumption/reservationSummaries",
    }),
  );
export type ReservationsSummariesListInput =
  typeof ReservationsSummariesListInput.Type;

// Output Schema
export const ReservationsSummariesListOutput =
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
export type ReservationsSummariesListOutput =
  typeof ReservationsSummariesListOutput.Type;

// The operation
/**
 * Lists the reservations summaries for the defined scope daily or monthly grain. Note: ARM has a payload size limit of 12MB, so currently callers get 400 when the response size exceeds the ARM limit. In such cases, API call should be made with smaller date ranges.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceScope - The fully qualified Azure Resource manager identifier of the resource.
 * @param grain - Can be daily or monthly
 * @param startDate - Start date. Only applicable when querying with billing profile
 * @param endDate - End date. Only applicable when querying with billing profile
 * @param $filter - Required only for daily grain. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge'. Not applicable when querying with billing profile
 * @param reservationId - Reservation Id GUID. Only valid if reservationOrderId is also provided. Filter to a specific reservation
 * @param reservationOrderId - Reservation Order Id GUID. Required if reservationId is provided. Filter to a specific reservation order
 */
export const ReservationsSummariesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReservationsSummariesListInput,
    outputSchema: ReservationsSummariesListOutput,
  }),
);
// Input Schema
export const ReservationsSummariesListByReservationOrderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    grain: Schema.Literals(["daily", "monthly"]),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Capacity/reservationorders/{reservationOrderId}/providers/Microsoft.Consumption/reservationSummaries",
    }),
  );
export type ReservationsSummariesListByReservationOrderInput =
  typeof ReservationsSummariesListByReservationOrderInput.Type;

// Output Schema
export const ReservationsSummariesListByReservationOrderOutput =
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
export type ReservationsSummariesListByReservationOrderOutput =
  typeof ReservationsSummariesListByReservationOrderOutput.Type;

// The operation
/**
 * Lists the reservations summaries for daily or monthly grain. Note: ARM has a payload size limit of 12MB, so currently callers get 400 when the response size exceeds the ARM limit. In such cases, API call should be made with smaller date ranges.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 * @param grain - Can be daily or monthly
 * @param $filter - Required only for daily grain. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge'
 */
export const ReservationsSummariesListByReservationOrder =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReservationsSummariesListByReservationOrderInput,
    outputSchema: ReservationsSummariesListByReservationOrderOutput,
  }));
// Input Schema
export const ReservationsSummariesListByReservationOrderAndReservationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    reservationId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    grain: Schema.Literals(["daily", "monthly"]),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Capacity/reservationorders/{reservationOrderId}/reservations/{reservationId}/providers/Microsoft.Consumption/reservationSummaries",
    }),
  );
export type ReservationsSummariesListByReservationOrderAndReservationInput =
  typeof ReservationsSummariesListByReservationOrderAndReservationInput.Type;

// Output Schema
export const ReservationsSummariesListByReservationOrderAndReservationOutput =
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
export type ReservationsSummariesListByReservationOrderAndReservationOutput =
  typeof ReservationsSummariesListByReservationOrderAndReservationOutput.Type;

// The operation
/**
 * Lists the reservations summaries for daily or monthly grain. Note: ARM has a payload size limit of 12MB, so currently callers get 400 when the response size exceeds the ARM limit. In such cases, API call should be made with smaller date ranges.
 *
 * @param api-version - The API version to use for this operation.
 * @param reservationOrderId - Order Id of the reservation
 * @param reservationId - Id of the reservation
 * @param grain - Can be daily or monthly
 * @param $filter - Required only for daily grain. The properties/UsageDate for start date and end date. The filter supports 'le' and  'ge'
 */
export const ReservationsSummariesListByReservationOrderAndReservation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReservationsSummariesListByReservationOrderAndReservationInput,
    outputSchema:
      ReservationsSummariesListByReservationOrderAndReservationOutput,
  }));
// Input Schema
export const ReservationTransactionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $filter: Schema.optional(Schema.String),
    useMarkupIfPartner: Schema.optional(Schema.Boolean),
    previewMarkupPercentage: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Consumption/reservationTransactions",
    }),
  );
export type ReservationTransactionsListInput =
  typeof ReservationTransactionsListInput.Type;

// Output Schema
export const ReservationTransactionsListOutput =
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
export type ReservationTransactionsListOutput =
  typeof ReservationTransactionsListOutput.Type;

// The operation
/**
 * List of transactions for reserved instances on billing account scope. Note: The refund transactions are posted along with its purchase transaction (i.e. in the purchase billing month). For example, The refund is requested in May 2021. This refund transaction will have event date as May 2021 but the billing month as April 2020 when the reservation purchase was made. Note: ARM has a payload size limit of 12MB, so currently callers get 400 when the response size exceeds the ARM limit. In such cases, API call should be made with smaller date ranges.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountId - BillingAccount ID
 * @param $filter - Filter reservation transactions by date range. The properties/EventDate for start date and end date. The filter supports 'le' and  'ge'. Note: API returns data for the entire start date's and end date's billing month. For example, filter properties/eventDate+ge+2020-01-01+AND+properties/eventDate+le+2020-12-29 will include data for the entire December 2020 month (i.e. will contain records for dates December 30 and 31)
 * @param useMarkupIfPartner - Applies mark up to the transactions if the caller is a partner.
 * @param previewMarkupPercentage - Preview markup percentage to be applied.
 */
export const ReservationTransactionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReservationTransactionsListInput,
    outputSchema: ReservationTransactionsListOutput,
  }),
);
// Input Schema
export const ReservationTransactionsListByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountId: Schema.String.pipe(T.PathParam()),
    billingProfileId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/providers/Microsoft.Consumption/reservationTransactions",
    }),
  );
export type ReservationTransactionsListByBillingProfileInput =
  typeof ReservationTransactionsListByBillingProfileInput.Type;

// Output Schema
export const ReservationTransactionsListByBillingProfileOutput =
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
export type ReservationTransactionsListByBillingProfileOutput =
  typeof ReservationTransactionsListByBillingProfileOutput.Type;

// The operation
/**
 * List of transactions for reserved instances on billing profile scope. The refund transactions are posted along with its purchase transaction (i.e. in the purchase billing month). For example, The refund is requested in May 2021. This refund transaction will have event date as May 2021 but the billing month as April 2020 when the reservation purchase was made. Note: ARM has a payload size limit of 12MB, so currently callers get 400 when the response size exceeds the ARM limit. In such cases, API call should be made with smaller date ranges.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountId - BillingAccount ID
 * @param billingProfileId - Azure Billing Profile ID.
 * @param $filter - Filter reservation transactions by date range. The properties/EventDate for start date and end date. The filter supports 'le' and  'ge'. Note: API returns data for the entire start date's and end date's billing month. For example, filter properties/eventDate+ge+2020-01-01+AND+properties/eventDate+le+2020-12-29 will include data for entire December 2020 month (i.e. will contain records for dates December 30 and 31)
 */
export const ReservationTransactionsListByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReservationTransactionsListByBillingProfileInput,
    outputSchema: ReservationTransactionsListByBillingProfileOutput,
  }));
// Input Schema
export const TagsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.Consumption/tags",
  }),
);
export type TagsGetInput = typeof TagsGetInput.Type;

// Output Schema
export const TagsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type TagsGetOutput = typeof TagsGetOutput.Type;

// The operation
/**
 * Get all available tag keys for the defined scope
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 */
export const TagsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TagsGetInput,
  outputSchema: TagsGetOutput,
}));
// Input Schema
export const UsageDetailsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
  $expand: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $skiptoken: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  metric: Schema.optional(
    Schema.Literals(["actualcost", "amortizedcost", "usage"]),
  ),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.Consumption/usageDetails",
  }),
);
export type UsageDetailsListInput = typeof UsageDetailsListInput.Type;

// Output Schema
export const UsageDetailsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type UsageDetailsListOutput = typeof UsageDetailsListOutput.Type;

// The operation
/**
 * Lists the usage details for the defined scope. Usage details are available via this API only for May 1, 2014 or later.
 * **Note:Microsoft will be retiring the Consumption Usage Details API at some point in the future. We do not recommend that you take a new dependency on this API. Please use the Cost Details API instead. We will notify customers once a date for retirement has been determined.For Learn more,see [Generate Cost Details Report - Create Operation](https://learn.microsoft.com/en-us/rest/api/cost-management/generate-cost-details-report/create-operation?tabs=HTTP)**
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param $expand - May be used to expand the properties/additionalInfo or properties/meterDetails within a list of usage details. By default, these fields are not included when listing usage details.
 * @param $filter - May be used to filter usageDetails by properties/resourceGroup, properties/resourceName, properties/resourceId, properties/chargeType, properties/reservationId, properties/publisherType or tags. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value is separated by a colon (:). PublisherType Filter accepts two values azure and marketplace and it is currently supported for Web Direct Offer Type
 * @param $skiptoken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 * @param $top - May be used to limit the number of results to the most recent N usageDetails.
 * @param metric - Allows to select different type of cost/usage records.
 */
export const UsageDetailsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsageDetailsListInput,
  outputSchema: UsageDetailsListOutput,
}));
