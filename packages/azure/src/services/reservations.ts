/**
 * Azure Reservations API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CalculateExchangePostInput {
  properties?: {
    reservationsToPurchase?: {
      sku?: { name?: string };
      location?: string;
      properties?: {
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
        billingScopeId?: string;
        term?: "P1Y" | "P3Y" | "P5Y";
        billingPlan?: "Upfront" | "Monthly";
        quantity?: number;
        displayName?: string;
        appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
        appliedScopes?: string[];
        appliedScopeProperties?: {
          tenantId?: string;
          managementGroupId?: string;
          subscriptionId?: string;
          resourceGroupId?: string;
          displayName?: string;
        };
        renew?: boolean;
        reservedResourceProperties?: { instanceFlexibility?: "On" | "Off" };
        reviewDateTime?: string;
      };
    }[];
    savingsPlansToPurchase?: {
      sku?: { name?: string };
      properties?: {
        displayName?: string;
        billingScopeId?: string;
        term?: "P1Y" | "P3Y";
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
      };
    }[];
    reservationsToExchange?: { reservationId?: string; quantity?: number }[];
  };
}
export const CalculateExchangePostInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        reservationsToPurchase: Schema.optional(
          Schema.Array(
            Schema.Struct({
              sku: Schema.optional(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                }),
              ),
              location: Schema.optional(Schema.String),
              properties: Schema.optional(
                Schema.Struct({
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
                  billingScopeId: Schema.optional(Schema.String),
                  term: Schema.optional(Schema.Literals(["P1Y", "P3Y", "P5Y"])),
                  billingPlan: Schema.optional(
                    Schema.Literals(["Upfront", "Monthly"]),
                  ),
                  quantity: Schema.optional(Schema.Number),
                  displayName: Schema.optional(Schema.String),
                  appliedScopeType: Schema.optional(
                    Schema.Literals(["Single", "Shared", "ManagementGroup"]),
                  ),
                  appliedScopes: Schema.optional(Schema.Array(Schema.String)),
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
                  reservedResourceProperties: Schema.optional(
                    Schema.Struct({
                      instanceFlexibility: Schema.optional(
                        Schema.Literals(["On", "Off"]),
                      ),
                    }),
                  ),
                  reviewDateTime: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
        savingsPlansToPurchase: Schema.optional(
          Schema.Array(
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
                  term: Schema.optional(Schema.Literals(["P1Y", "P3Y"])),
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
                }),
              ),
            }),
          ),
        ),
        reservationsToExchange: Schema.optional(
          Schema.Array(
            Schema.Struct({
              reservationId: Schema.optional(Schema.String),
              quantity: Schema.optional(Schema.Number),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Capacity/calculateExchange",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<CalculateExchangePostInput>;

// Output Schema
export interface CalculateExchangePostOutput {
  id?: string;
  name?: string;
  status?: "Succeeded" | "Failed" | "Cancelled" | "Pending";
  properties?: {
    sessionId?: string;
    netPayable?: { currencyCode?: string; amount?: number };
    refundsTotal?: { currencyCode?: string; amount?: number };
    purchasesTotal?: { currencyCode?: string; amount?: number };
    reservationsToPurchase?: {
      properties?: {
        sku?: { name?: string };
        location?: string;
        properties?: {
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
          billingScopeId?: string;
          term?: "P1Y" | "P3Y" | "P5Y";
          billingPlan?: "Upfront" | "Monthly";
          quantity?: number;
          displayName?: string;
          appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
          appliedScopes?: string[];
          appliedScopeProperties?: {
            tenantId?: string;
            managementGroupId?: string;
            subscriptionId?: string;
            resourceGroupId?: string;
            displayName?: string;
          };
          renew?: boolean;
          reservedResourceProperties?: { instanceFlexibility?: "On" | "Off" };
          reviewDateTime?: string;
        };
      };
      billingCurrencyTotal?: { currencyCode?: string; amount?: number };
    }[];
    savingsPlansToPurchase?: {
      properties?: {
        sku?: { name?: string };
        properties?: {
          displayName?: string;
          billingScopeId?: string;
          term?: "P1Y" | "P3Y";
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
        };
      };
      billingCurrencyTotal?: { currencyCode?: string; amount?: number };
    }[];
    reservationsToExchange?: {
      reservationId?: string;
      quantity?: number;
      billingRefundAmount?: { currencyCode?: string; amount?: number };
      billingInformation?: {
        billingCurrencyTotalPaidAmount?: {
          currencyCode?: string;
          amount?: number;
        };
        billingCurrencyProratedAmount?: {
          currencyCode?: string;
          amount?: number;
        };
        billingCurrencyRemainingCommitmentAmount?: {
          currencyCode?: string;
          amount?: number;
        };
      };
    }[];
    policyResult?: { policyErrors?: { code?: string; message?: string }[] };
  };
  error?: { code?: string; message?: string };
}
export const CalculateExchangePostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["Succeeded", "Failed", "Cancelled", "Pending"]),
    ),
    properties: Schema.optional(
      Schema.Struct({
        sessionId: Schema.optional(Schema.String),
        netPayable: Schema.optional(
          Schema.Struct({
            currencyCode: Schema.optional(Schema.String),
            amount: Schema.optional(Schema.Number),
          }),
        ),
        refundsTotal: Schema.optional(
          Schema.Struct({
            currencyCode: Schema.optional(Schema.String),
            amount: Schema.optional(Schema.Number),
          }),
        ),
        purchasesTotal: Schema.optional(
          Schema.Struct({
            currencyCode: Schema.optional(Schema.String),
            amount: Schema.optional(Schema.Number),
          }),
        ),
        reservationsToPurchase: Schema.optional(
          Schema.Array(
            Schema.Struct({
              properties: Schema.optional(
                Schema.Struct({
                  sku: Schema.optional(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                    }),
                  ),
                  location: Schema.optional(Schema.String),
                  properties: Schema.optional(
                    Schema.Struct({
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
                      billingScopeId: Schema.optional(Schema.String),
                      term: Schema.optional(
                        Schema.Literals(["P1Y", "P3Y", "P5Y"]),
                      ),
                      billingPlan: Schema.optional(
                        Schema.Literals(["Upfront", "Monthly"]),
                      ),
                      quantity: Schema.optional(Schema.Number),
                      displayName: Schema.optional(Schema.String),
                      appliedScopeType: Schema.optional(
                        Schema.Literals([
                          "Single",
                          "Shared",
                          "ManagementGroup",
                        ]),
                      ),
                      appliedScopes: Schema.optional(
                        Schema.Array(Schema.String),
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
                      reservedResourceProperties: Schema.optional(
                        Schema.Struct({
                          instanceFlexibility: Schema.optional(
                            Schema.Literals(["On", "Off"]),
                          ),
                        }),
                      ),
                      reviewDateTime: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
              billingCurrencyTotal: Schema.optional(
                Schema.Struct({
                  currencyCode: Schema.optional(Schema.String),
                  amount: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        ),
        savingsPlansToPurchase: Schema.optional(
          Schema.Array(
            Schema.Struct({
              properties: Schema.optional(
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
                      term: Schema.optional(Schema.Literals(["P1Y", "P3Y"])),
                      billingPlan: Schema.optional(Schema.Literals(["P1M"])),
                      appliedScopeType: Schema.optional(
                        Schema.Literals([
                          "Single",
                          "Shared",
                          "ManagementGroup",
                        ]),
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
                    }),
                  ),
                }),
              ),
              billingCurrencyTotal: Schema.optional(
                Schema.Struct({
                  currencyCode: Schema.optional(Schema.String),
                  amount: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        ),
        reservationsToExchange: Schema.optional(
          Schema.Array(
            Schema.Struct({
              reservationId: Schema.optional(Schema.String),
              quantity: Schema.optional(Schema.Number),
              billingRefundAmount: Schema.optional(
                Schema.Struct({
                  currencyCode: Schema.optional(Schema.String),
                  amount: Schema.optional(Schema.Number),
                }),
              ),
              billingInformation: Schema.optional(
                Schema.Struct({
                  billingCurrencyTotalPaidAmount: Schema.optional(
                    Schema.Struct({
                      currencyCode: Schema.optional(Schema.String),
                      amount: Schema.optional(Schema.Number),
                    }),
                  ),
                  billingCurrencyProratedAmount: Schema.optional(
                    Schema.Struct({
                      currencyCode: Schema.optional(Schema.String),
                      amount: Schema.optional(Schema.Number),
                    }),
                  ),
                  billingCurrencyRemainingCommitmentAmount: Schema.optional(
                    Schema.Struct({
                      currencyCode: Schema.optional(Schema.String),
                      amount: Schema.optional(Schema.Number),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        policyResult: Schema.optional(
          Schema.Struct({
            policyErrors: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  code: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<CalculateExchangePostOutput>;

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
export interface CalculateRefundPostInput {
  reservationOrderId: string;
  id?: string;
  properties?: {
    scope?: string;
    reservationToReturn?: { reservationId?: string; quantity?: number };
  };
}
export const CalculateRefundPostInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        scope: Schema.optional(Schema.String),
        reservationToReturn: Schema.optional(
          Schema.Struct({
            reservationId: Schema.optional(Schema.String),
            quantity: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/calculateRefund",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<CalculateRefundPostInput>;

// Output Schema
export interface CalculateRefundPostOutput {
  id?: string;
  properties?: {
    sessionId?: string;
    quantity?: number;
    billingRefundAmount?: { currencyCode?: string; amount?: number };
    pricingRefundAmount?: { currencyCode?: string; amount?: number };
    policyResult?: {
      properties?: {
        consumedRefundsTotal?: { currencyCode?: string; amount?: number };
        maxRefundLimit?: { currencyCode?: string; amount?: number };
        policyErrors?: {
          code?:
            | "NotSpecified"
            | "InternalServerError"
            | "ServerTimeout"
            | "AuthorizationFailed"
            | "BadRequest"
            | "ClientCertificateThumbprintNotSet"
            | "InvalidRequestContent"
            | "OperationFailed"
            | "HttpMethodNotSupported"
            | "InvalidRequestUri"
            | "MissingTenantId"
            | "InvalidTenantId"
            | "InvalidReservationOrderId"
            | "InvalidReservationId"
            | "ReservationIdNotInReservationOrder"
            | "ReservationOrderNotFound"
            | "InvalidSubscriptionId"
            | "InvalidAccessToken"
            | "InvalidLocationId"
            | "UnauthenticatedRequestsThrottled"
            | "InvalidHealthCheckType"
            | "Forbidden"
            | "BillingScopeIdCannotBeChanged"
            | "AppliedScopesNotAssociatedWithCommerceAccount"
            | "PatchValuesSameAsExisting"
            | "RoleAssignmentCreationFailed"
            | "ReservationOrderCreationFailed"
            | "ReservationOrderNotEnabled"
            | "CapacityUpdateScopesFailed"
            | "UnsupportedReservationTerm"
            | "ReservationOrderIdAlreadyExists"
            | "RiskCheckFailed"
            | "CreateQuoteFailed"
            | "ActivateQuoteFailed"
            | "NonsupportedAccountId"
            | "PaymentInstrumentNotFound"
            | "MissingAppliedScopesForSingle"
            | "NoValidReservationsToReRate"
            | "ReRateOnlyAllowedForEA"
            | "OperationCannotBePerformedInCurrentState"
            | "InvalidSingleAppliedScopesCount"
            | "InvalidFulfillmentRequestParameters"
            | "NotSupportedCountry"
            | "InvalidRefundQuantity"
            | "PurchaseError"
            | "BillingCustomerInputError"
            | "BillingPaymentInstrumentSoftError"
            | "BillingPaymentInstrumentHardError"
            | "BillingTransientError"
            | "BillingError"
            | "FulfillmentConfigurationError"
            | "FulfillmentOutOfStockError"
            | "FulfillmentTransientError"
            | "FulfillmentError"
            | "CalculatePriceFailed"
            | "AppliedScopesSameAsExisting"
            | "SelfServiceRefundNotSupported"
            | "RefundLimitExceeded";
          message?: string;
        }[];
      };
    };
    billingInformation?: {
      billingPlan?: "Upfront" | "Monthly";
      completedTransactions?: number;
      totalTransactions?: number;
      billingCurrencyTotalPaidAmount?: {
        currencyCode?: string;
        amount?: number;
      };
      billingCurrencyProratedAmount?: {
        currencyCode?: string;
        amount?: number;
      };
      billingCurrencyRemainingCommitmentAmount?: {
        currencyCode?: string;
        amount?: number;
      };
    };
  };
}
export const CalculateRefundPostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        sessionId: Schema.optional(Schema.String),
        quantity: Schema.optional(Schema.Number),
        billingRefundAmount: Schema.optional(
          Schema.Struct({
            currencyCode: Schema.optional(Schema.String),
            amount: Schema.optional(Schema.Number),
          }),
        ),
        pricingRefundAmount: Schema.optional(
          Schema.Struct({
            currencyCode: Schema.optional(Schema.String),
            amount: Schema.optional(Schema.Number),
          }),
        ),
        policyResult: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                consumedRefundsTotal: Schema.optional(
                  Schema.Struct({
                    currencyCode: Schema.optional(Schema.String),
                    amount: Schema.optional(Schema.Number),
                  }),
                ),
                maxRefundLimit: Schema.optional(
                  Schema.Struct({
                    currencyCode: Schema.optional(Schema.String),
                    amount: Schema.optional(Schema.Number),
                  }),
                ),
                policyErrors: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      code: Schema.optional(
                        Schema.Literals([
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
                        ]),
                      ),
                      message: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        billingInformation: Schema.optional(
          Schema.Struct({
            billingPlan: Schema.optional(
              Schema.Literals(["Upfront", "Monthly"]),
            ),
            completedTransactions: Schema.optional(Schema.Number),
            totalTransactions: Schema.optional(Schema.Number),
            billingCurrencyTotalPaidAmount: Schema.optional(
              Schema.Struct({
                currencyCode: Schema.optional(Schema.String),
                amount: Schema.optional(Schema.Number),
              }),
            ),
            billingCurrencyProratedAmount: Schema.optional(
              Schema.Struct({
                currencyCode: Schema.optional(Schema.String),
                amount: Schema.optional(Schema.Number),
              }),
            ),
            billingCurrencyRemainingCommitmentAmount: Schema.optional(
              Schema.Struct({
                currencyCode: Schema.optional(Schema.String),
                amount: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<CalculateRefundPostOutput>;

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
export interface ExchangePostInput {
  properties?: { sessionId?: string };
}
export const ExchangePostInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.Struct({
      sessionId: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Capacity/exchange",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<ExchangePostInput>;

// Output Schema
export interface ExchangePostOutput {
  id?: string;
  name?: string;
  status?:
    | "Succeeded"
    | "Failed"
    | "Cancelled"
    | "PendingRefunds"
    | "PendingPurchases";
  properties?: {
    sessionId?: string;
    netPayable?: { currencyCode?: string; amount?: number };
    refundsTotal?: { currencyCode?: string; amount?: number };
    purchasesTotal?: { currencyCode?: string; amount?: number };
    reservationsToPurchase?: {
      reservationOrderId?: string;
      reservationId?: string;
      properties?: {
        sku?: { name?: string };
        location?: string;
        properties?: {
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
          billingScopeId?: string;
          term?: "P1Y" | "P3Y" | "P5Y";
          billingPlan?: "Upfront" | "Monthly";
          quantity?: number;
          displayName?: string;
          appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
          appliedScopes?: string[];
          appliedScopeProperties?: {
            tenantId?: string;
            managementGroupId?: string;
            subscriptionId?: string;
            resourceGroupId?: string;
            displayName?: string;
          };
          renew?: boolean;
          reservedResourceProperties?: { instanceFlexibility?: "On" | "Off" };
          reviewDateTime?: string;
        };
      };
      billingCurrencyTotal?: { currencyCode?: string; amount?: number };
      status?: "Succeeded" | "Failed" | "Cancelled" | "Pending";
    }[];
    savingsPlansToPurchase?: {
      savingsPlanOrderId?: string;
      savingsPlanId?: string;
      properties?: {
        sku?: { name?: string };
        properties?: {
          displayName?: string;
          billingScopeId?: string;
          term?: "P1Y" | "P3Y";
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
        };
      };
      billingCurrencyTotal?: { currencyCode?: string; amount?: number };
      status?: "Succeeded" | "Failed" | "Cancelled" | "Pending";
    }[];
    reservationsToExchange?: {
      reservationId?: string;
      quantity?: number;
      billingRefundAmount?: { currencyCode?: string; amount?: number };
      billingInformation?: {
        billingCurrencyTotalPaidAmount?: {
          currencyCode?: string;
          amount?: number;
        };
        billingCurrencyProratedAmount?: {
          currencyCode?: string;
          amount?: number;
        };
        billingCurrencyRemainingCommitmentAmount?: {
          currencyCode?: string;
          amount?: number;
        };
      };
      status?: "Succeeded" | "Failed" | "Cancelled" | "Pending";
    }[];
    policyResult?: { policyErrors?: { code?: string; message?: string }[] };
  };
  error?: { code?: string; message?: string };
}
export const ExchangePostOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  status: Schema.optional(
    Schema.Literals([
      "Succeeded",
      "Failed",
      "Cancelled",
      "PendingRefunds",
      "PendingPurchases",
    ]),
  ),
  properties: Schema.optional(
    Schema.Struct({
      sessionId: Schema.optional(Schema.String),
      netPayable: Schema.optional(
        Schema.Struct({
          currencyCode: Schema.optional(Schema.String),
          amount: Schema.optional(Schema.Number),
        }),
      ),
      refundsTotal: Schema.optional(
        Schema.Struct({
          currencyCode: Schema.optional(Schema.String),
          amount: Schema.optional(Schema.Number),
        }),
      ),
      purchasesTotal: Schema.optional(
        Schema.Struct({
          currencyCode: Schema.optional(Schema.String),
          amount: Schema.optional(Schema.Number),
        }),
      ),
      reservationsToPurchase: Schema.optional(
        Schema.Array(
          Schema.Struct({
            reservationOrderId: Schema.optional(Schema.String),
            reservationId: Schema.optional(Schema.String),
            properties: Schema.optional(
              Schema.Struct({
                sku: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                  }),
                ),
                location: Schema.optional(Schema.String),
                properties: Schema.optional(
                  Schema.Struct({
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
                    billingScopeId: Schema.optional(Schema.String),
                    term: Schema.optional(
                      Schema.Literals(["P1Y", "P3Y", "P5Y"]),
                    ),
                    billingPlan: Schema.optional(
                      Schema.Literals(["Upfront", "Monthly"]),
                    ),
                    quantity: Schema.optional(Schema.Number),
                    displayName: Schema.optional(Schema.String),
                    appliedScopeType: Schema.optional(
                      Schema.Literals(["Single", "Shared", "ManagementGroup"]),
                    ),
                    appliedScopes: Schema.optional(Schema.Array(Schema.String)),
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
                    reservedResourceProperties: Schema.optional(
                      Schema.Struct({
                        instanceFlexibility: Schema.optional(
                          Schema.Literals(["On", "Off"]),
                        ),
                      }),
                    ),
                    reviewDateTime: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            billingCurrencyTotal: Schema.optional(
              Schema.Struct({
                currencyCode: Schema.optional(Schema.String),
                amount: Schema.optional(Schema.Number),
              }),
            ),
            status: Schema.optional(
              Schema.Literals(["Succeeded", "Failed", "Cancelled", "Pending"]),
            ),
          }),
        ),
      ),
      savingsPlansToPurchase: Schema.optional(
        Schema.Array(
          Schema.Struct({
            savingsPlanOrderId: Schema.optional(Schema.String),
            savingsPlanId: Schema.optional(Schema.String),
            properties: Schema.optional(
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
                    term: Schema.optional(Schema.Literals(["P1Y", "P3Y"])),
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
                  }),
                ),
              }),
            ),
            billingCurrencyTotal: Schema.optional(
              Schema.Struct({
                currencyCode: Schema.optional(Schema.String),
                amount: Schema.optional(Schema.Number),
              }),
            ),
            status: Schema.optional(
              Schema.Literals(["Succeeded", "Failed", "Cancelled", "Pending"]),
            ),
          }),
        ),
      ),
      reservationsToExchange: Schema.optional(
        Schema.Array(
          Schema.Struct({
            reservationId: Schema.optional(Schema.String),
            quantity: Schema.optional(Schema.Number),
            billingRefundAmount: Schema.optional(
              Schema.Struct({
                currencyCode: Schema.optional(Schema.String),
                amount: Schema.optional(Schema.Number),
              }),
            ),
            billingInformation: Schema.optional(
              Schema.Struct({
                billingCurrencyTotalPaidAmount: Schema.optional(
                  Schema.Struct({
                    currencyCode: Schema.optional(Schema.String),
                    amount: Schema.optional(Schema.Number),
                  }),
                ),
                billingCurrencyProratedAmount: Schema.optional(
                  Schema.Struct({
                    currencyCode: Schema.optional(Schema.String),
                    amount: Schema.optional(Schema.Number),
                  }),
                ),
                billingCurrencyRemainingCommitmentAmount: Schema.optional(
                  Schema.Struct({
                    currencyCode: Schema.optional(Schema.String),
                    amount: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
            status: Schema.optional(
              Schema.Literals(["Succeeded", "Failed", "Cancelled", "Pending"]),
            ),
          }),
        ),
      ),
      policyResult: Schema.optional(
        Schema.Struct({
          policyErrors: Schema.optional(
            Schema.Array(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    }),
  ),
  error: Schema.optional(
    Schema.Struct({
      code: Schema.optional(Schema.String),
      message: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ExchangePostOutput>;

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
export interface GetAppliedReservationListInput {
  subscriptionId: string;
}
export const GetAppliedReservationListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Capacity/appliedReservations",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<GetAppliedReservationListInput>;

// Output Schema
export interface GetAppliedReservationListOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    reservationOrderIds?: { value?: string[]; nextLink?: string };
  };
}
export const GetAppliedReservationListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        reservationOrderIds: Schema.optional(
          Schema.Struct({
            value: Schema.optional(Schema.Array(Schema.String)),
            nextLink: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<GetAppliedReservationListOutput>;

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
export interface GetCatalogInput {
  subscriptionId: string;
  reservedResourceType?: string;
  location?: string;
  publisherId?: string;
  offerId?: string;
  planId?: string;
  $filter?: string;
  $skip?: number;
  $take?: number;
}
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
) as unknown as Schema.Codec<GetCatalogInput>;

// Output Schema
export interface GetCatalogOutput {
  value: {
    resourceType?: string;
    name?: string;
    billingPlans?: Record<string, ("Upfront" | "Monthly")[]>;
    terms?: ("P1Y" | "P3Y" | "P5Y")[];
    locations?: string[];
    skuProperties?: { name?: string; value?: string }[];
    msrp?: {
      p1Y?: { currencyCode?: string; amount?: number };
      p3Y?: { currencyCode?: string; amount?: number };
      p5Y?: { currencyCode?: string; amount?: number };
    };
    restrictions?: { type?: string; values?: string[]; reasonCode?: string }[];
    tier?: string;
    size?: string;
    capabilities?: { name?: string; value?: string }[];
  }[];
  nextLink?: string;
  totalItems?: number;
}
export const GetCatalogOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      resourceType: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      billingPlans: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Array(Schema.Literals(["Upfront", "Monthly"])),
        ),
      ),
      terms: Schema.optional(
        Schema.Array(Schema.Literals(["P1Y", "P3Y", "P5Y"])),
      ),
      locations: Schema.optional(Schema.Array(Schema.String)),
      skuProperties: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
          }),
        ),
      ),
      msrp: Schema.optional(
        Schema.Struct({
          p1Y: Schema.optional(
            Schema.Struct({
              currencyCode: Schema.optional(Schema.String),
              amount: Schema.optional(Schema.Number),
            }),
          ),
          p3Y: Schema.optional(
            Schema.Struct({
              currencyCode: Schema.optional(Schema.String),
              amount: Schema.optional(Schema.Number),
            }),
          ),
          p5Y: Schema.optional(
            Schema.Struct({
              currencyCode: Schema.optional(Schema.String),
              amount: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
      restrictions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            values: Schema.optional(Schema.Array(Schema.String)),
            reasonCode: Schema.optional(Schema.String),
          }),
        ),
      ),
      tier: Schema.optional(Schema.String),
      size: Schema.optional(Schema.String),
      capabilities: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
  totalItems: Schema.optional(Schema.Number),
}) as unknown as Schema.Codec<GetCatalogOutput>;

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
export interface OperationListInput {}
export const OperationListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Capacity/operations",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<OperationListInput>;

// Output Schema
export interface OperationListOutput {
  value?: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
    properties?: unknown;
  }[];
  nextLink?: string;
}
export const OperationListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
        origin: Schema.optional(Schema.String),
        properties: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationListOutput>;

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
export interface ReservationArchiveInput {
  reservationOrderId: string;
  reservationId: string;
}
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
  ) as unknown as Schema.Codec<ReservationArchiveInput>;

// Output Schema
export type ReservationArchiveOutput = void;
export const ReservationArchiveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReservationArchiveOutput>;

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
export interface ReservationAvailableScopesInput {
  reservationOrderId: string;
  reservationId: string;
  properties?: { scopes?: string[] };
}
export const ReservationAvailableScopesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    reservationId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        scopes: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}/availableScopes",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<ReservationAvailableScopesInput>;

// Output Schema
export interface ReservationAvailableScopesOutput {
  properties?: { scopes?: { scope?: string; valid?: boolean }[] };
}
export const ReservationAvailableScopesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        scopes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              scope: Schema.optional(Schema.String),
              valid: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ReservationAvailableScopesOutput>;

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
export interface ReservationGetInput {
  reservationOrderId: string;
  reservationId: string;
  $expand?: string;
}
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
) as unknown as Schema.Codec<ReservationGetInput>;

// Output Schema
export interface ReservationGetOutput {
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
export const ReservationGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ReservationGetOutput>;

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
export interface ReservationListInput {
  reservationOrderId: string;
}
export const ReservationListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservationOrderId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<ReservationListInput>;

// Output Schema
export interface ReservationListOutput {
  value: {
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
export const ReservationListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ReservationListOutput>;

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
export interface ReservationListAllInput {
  $filter?: string;
  $orderby?: string;
  refreshSummary?: string;
  $skiptoken?: number;
  selectedState?: string;
  take?: number;
}
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
  ) as unknown as Schema.Codec<ReservationListAllInput>;

// Output Schema
export interface ReservationListAllOutput {
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
  summary?: {
    succeededCount?: number;
    failedCount?: number;
    expiringCount?: number;
    expiredCount?: number;
    pendingCount?: number;
    cancelledCount?: number;
    processingCount?: number;
    warningCount?: number;
    noBenefitCount?: number;
  };
}
export const ReservationListAllOutput =
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
    summary: Schema.optional(
      Schema.Struct({
        succeededCount: Schema.optional(Schema.Number),
        failedCount: Schema.optional(Schema.Number),
        expiringCount: Schema.optional(Schema.Number),
        expiredCount: Schema.optional(Schema.Number),
        pendingCount: Schema.optional(Schema.Number),
        cancelledCount: Schema.optional(Schema.Number),
        processingCount: Schema.optional(Schema.Number),
        warningCount: Schema.optional(Schema.Number),
        noBenefitCount: Schema.optional(Schema.Number),
      }),
    ),
  }) as unknown as Schema.Codec<ReservationListAllOutput>;

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
export interface ReservationListRevisionsInput {
  reservationOrderId: string;
  reservationId: string;
}
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
  ) as unknown as Schema.Codec<ReservationListRevisionsInput>;

// Output Schema
export interface ReservationListRevisionsOutput {
  value: {
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
export const ReservationListRevisionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ReservationListRevisionsOutput>;

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
export interface ReservationMergeInput {
  reservationOrderId: string;
  properties?: { sources?: string[] };
}
export const ReservationMergeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservationOrderId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      sources: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/merge",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<ReservationMergeInput>;

// Output Schema
export type ReservationMergeOutput = {
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
export const ReservationMergeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
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
  }),
) as unknown as Schema.Codec<ReservationMergeOutput>;

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
export interface ReservationOrderCalculateInput {
  sku?: { name?: string };
  location?: string;
  properties?: {
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
    billingScopeId?: string;
    term?: "P1Y" | "P3Y" | "P5Y";
    billingPlan?: "Upfront" | "Monthly";
    quantity?: number;
    displayName?: string;
    appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
    appliedScopes?: string[];
    appliedScopeProperties?: {
      tenantId?: string;
      managementGroupId?: string;
      subscriptionId?: string;
      resourceGroupId?: string;
      displayName?: string;
    };
    renew?: boolean;
    reservedResourceProperties?: { instanceFlexibility?: "On" | "Off" };
    reviewDateTime?: string;
  };
}
export const ReservationOrderCalculateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
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
        billingScopeId: Schema.optional(Schema.String),
        term: Schema.optional(Schema.Literals(["P1Y", "P3Y", "P5Y"])),
        billingPlan: Schema.optional(Schema.Literals(["Upfront", "Monthly"])),
        quantity: Schema.optional(Schema.Number),
        displayName: Schema.optional(Schema.String),
        appliedScopeType: Schema.optional(
          Schema.Literals(["Single", "Shared", "ManagementGroup"]),
        ),
        appliedScopes: Schema.optional(Schema.Array(Schema.String)),
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
        reservedResourceProperties: Schema.optional(
          Schema.Struct({
            instanceFlexibility: Schema.optional(
              Schema.Literals(["On", "Off"]),
            ),
          }),
        ),
        reviewDateTime: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Capacity/calculatePrice",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<ReservationOrderCalculateInput>;

// Output Schema
export interface ReservationOrderCalculateOutput {
  properties?: {
    billingCurrencyTotal?: { currencyCode?: string; amount?: number };
    netTotal?: number;
    taxTotal?: number;
    grandTotal?: number;
    isTaxIncluded?: boolean;
    isBillingPartnerManaged?: boolean;
    reservationOrderId?: string;
    skuTitle?: string;
    skuDescription?: string;
    pricingCurrencyTotal?: { currencyCode?: string; amount?: number };
    paymentSchedule?: {
      dueDate?: string;
      paymentDate?: string;
      pricingCurrencyTotal?: { currencyCode?: string; amount?: number };
      billingCurrencyTotal?: { currencyCode?: string; amount?: number };
      billingAccount?: string;
      status?: "Succeeded" | "Failed" | "Scheduled" | "Cancelled";
      extendedStatusInfo?: {
        statusCode?:
          | "None"
          | "Pending"
          | "Processing"
          | "Active"
          | "PurchaseError"
          | "PaymentInstrumentError"
          | "Split"
          | "Merged"
          | "Expired"
          | "Succeeded";
        message?: string;
      };
    }[];
  };
}
export const ReservationOrderCalculateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        billingCurrencyTotal: Schema.optional(
          Schema.Struct({
            currencyCode: Schema.optional(Schema.String),
            amount: Schema.optional(Schema.Number),
          }),
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
          Schema.Struct({
            currencyCode: Schema.optional(Schema.String),
            amount: Schema.optional(Schema.Number),
          }),
        ),
        paymentSchedule: Schema.optional(
          Schema.Array(
            Schema.Struct({
              dueDate: Schema.optional(Schema.String),
              paymentDate: Schema.optional(Schema.String),
              pricingCurrencyTotal: Schema.optional(
                Schema.Struct({
                  currencyCode: Schema.optional(Schema.String),
                  amount: Schema.optional(Schema.Number),
                }),
              ),
              billingCurrencyTotal: Schema.optional(
                Schema.Struct({
                  currencyCode: Schema.optional(Schema.String),
                  amount: Schema.optional(Schema.Number),
                }),
              ),
              billingAccount: Schema.optional(Schema.String),
              status: Schema.optional(
                Schema.Literals([
                  "Succeeded",
                  "Failed",
                  "Scheduled",
                  "Cancelled",
                ]),
              ),
              extendedStatusInfo: Schema.optional(
                Schema.Struct({
                  statusCode: Schema.optional(
                    Schema.Literals([
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
                    ]),
                  ),
                  message: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ReservationOrderCalculateOutput>;

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
export interface ReservationOrderChangeDirectoryInput {
  reservationOrderId: string;
  destinationTenantId?: string;
}
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
  ) as unknown as Schema.Codec<ReservationOrderChangeDirectoryInput>;

// Output Schema
export interface ReservationOrderChangeDirectoryOutput {
  reservationOrder?: {
    id?: string;
    name?: string;
    isSucceeded?: boolean;
    error?: string;
  };
  reservations?: {
    id?: string;
    name?: string;
    isSucceeded?: boolean;
    error?: string;
  }[];
}
export const ReservationOrderChangeDirectoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrder: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        isSucceeded: Schema.optional(Schema.Boolean),
        error: Schema.optional(Schema.String),
      }),
    ),
    reservations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          isSucceeded: Schema.optional(Schema.Boolean),
          error: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ReservationOrderChangeDirectoryOutput>;

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
export interface ReservationOrderGetInput {
  reservationOrderId: string;
  $expand?: string;
}
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
  ) as unknown as Schema.Codec<ReservationOrderGetInput>;

// Output Schema
export interface ReservationOrderGetOutput {
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
export const ReservationOrderGetOutput =
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
  }) as unknown as Schema.Codec<ReservationOrderGetOutput>;

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
export interface ReservationOrderListInput {}
export const ReservationOrderListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Capacity/reservationOrders",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<ReservationOrderListInput>;

// Output Schema
export interface ReservationOrderListOutput {
  value: {
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
export const ReservationOrderListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ReservationOrderListOutput>;

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
export interface ReservationOrderPurchaseInput {
  reservationOrderId: string;
  sku?: { name?: string };
  location?: string;
  properties?: {
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
    billingScopeId?: string;
    term?: "P1Y" | "P3Y" | "P5Y";
    billingPlan?: "Upfront" | "Monthly";
    quantity?: number;
    displayName?: string;
    appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
    appliedScopes?: string[];
    appliedScopeProperties?: {
      tenantId?: string;
      managementGroupId?: string;
      subscriptionId?: string;
      resourceGroupId?: string;
      displayName?: string;
    };
    renew?: boolean;
    reservedResourceProperties?: { instanceFlexibility?: "On" | "Off" };
    reviewDateTime?: string;
  };
}
export const ReservationOrderPurchaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
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
        billingScopeId: Schema.optional(Schema.String),
        term: Schema.optional(Schema.Literals(["P1Y", "P3Y", "P5Y"])),
        billingPlan: Schema.optional(Schema.Literals(["Upfront", "Monthly"])),
        quantity: Schema.optional(Schema.Number),
        displayName: Schema.optional(Schema.String),
        appliedScopeType: Schema.optional(
          Schema.Literals(["Single", "Shared", "ManagementGroup"]),
        ),
        appliedScopes: Schema.optional(Schema.Array(Schema.String)),
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
        reservedResourceProperties: Schema.optional(
          Schema.Struct({
            instanceFlexibility: Schema.optional(
              Schema.Literals(["On", "Off"]),
            ),
          }),
        ),
        reviewDateTime: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<ReservationOrderPurchaseInput>;

// Output Schema
export interface ReservationOrderPurchaseOutput {
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
export const ReservationOrderPurchaseOutput =
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
  }) as unknown as Schema.Codec<ReservationOrderPurchaseOutput>;

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
export interface ReservationSplitInput {
  reservationOrderId: string;
  properties?: { quantities?: number[]; reservationId?: string };
}
export const ReservationSplitInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservationOrderId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      quantities: Schema.optional(Schema.Array(Schema.Number)),
      reservationId: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/split",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<ReservationSplitInput>;

// Output Schema
export type ReservationSplitOutput = {
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
export const ReservationSplitOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
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
  }),
) as unknown as Schema.Codec<ReservationSplitOutput>;

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
export interface ReservationUnarchiveInput {
  reservationOrderId: string;
  reservationId: string;
}
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
  ) as unknown as Schema.Codec<ReservationUnarchiveInput>;

// Output Schema
export type ReservationUnarchiveOutput = void;
export const ReservationUnarchiveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReservationUnarchiveOutput>;

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
export interface ReservationUpdateInput {
  reservationOrderId: string;
  reservationId: string;
  properties?: {
    appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
    appliedScopes?: string[];
    appliedScopeProperties?: {
      tenantId?: string;
      managementGroupId?: string;
      subscriptionId?: string;
      resourceGroupId?: string;
      displayName?: string;
    };
    instanceFlexibility?: "On" | "Off";
    name?: string;
    renew?: boolean;
    renewProperties?: {
      purchaseProperties?: {
        sku?: { name?: string };
        location?: string;
        properties?: {
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
          billingScopeId?: string;
          term?: "P1Y" | "P3Y" | "P5Y";
          billingPlan?: "Upfront" | "Monthly";
          quantity?: number;
          displayName?: string;
          appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
          appliedScopes?: string[];
          appliedScopeProperties?: {
            tenantId?: string;
            managementGroupId?: string;
            subscriptionId?: string;
            resourceGroupId?: string;
            displayName?: string;
          };
          renew?: boolean;
          reservedResourceProperties?: { instanceFlexibility?: "On" | "Off" };
          reviewDateTime?: string;
        };
      };
    };
    reviewDateTime?: string;
  };
}
export const ReservationUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    reservationId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        appliedScopeType: Schema.optional(
          Schema.Literals(["Single", "Shared", "ManagementGroup"]),
        ),
        appliedScopes: Schema.optional(Schema.Array(Schema.String)),
        appliedScopeProperties: Schema.optional(
          Schema.Struct({
            tenantId: Schema.optional(Schema.String),
            managementGroupId: Schema.optional(Schema.String),
            subscriptionId: Schema.optional(Schema.String),
            resourceGroupId: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
          }),
        ),
        instanceFlexibility: Schema.optional(Schema.Literals(["On", "Off"])),
        name: Schema.optional(Schema.String),
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
                location: Schema.optional(Schema.String),
                properties: Schema.optional(
                  Schema.Struct({
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
                    billingScopeId: Schema.optional(Schema.String),
                    term: Schema.optional(
                      Schema.Literals(["P1Y", "P3Y", "P5Y"]),
                    ),
                    billingPlan: Schema.optional(
                      Schema.Literals(["Upfront", "Monthly"]),
                    ),
                    quantity: Schema.optional(Schema.Number),
                    displayName: Schema.optional(Schema.String),
                    appliedScopeType: Schema.optional(
                      Schema.Literals(["Single", "Shared", "ManagementGroup"]),
                    ),
                    appliedScopes: Schema.optional(Schema.Array(Schema.String)),
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
                    reservedResourceProperties: Schema.optional(
                      Schema.Struct({
                        instanceFlexibility: Schema.optional(
                          Schema.Literals(["On", "Off"]),
                        ),
                      }),
                    ),
                    reviewDateTime: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        reviewDateTime: Schema.optional(Schema.String),
      }),
    ),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<ReservationUpdateInput>;

// Output Schema
export interface ReservationUpdateOutput {
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
export const ReservationUpdateOutput =
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
  }) as unknown as Schema.Codec<ReservationUpdateOutput>;

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
export interface ReturnPostInput {
  reservationOrderId: string;
  properties?: {
    sessionId?: string;
    scope?: string;
    reservationToReturn?: { reservationId?: string; quantity?: number };
    returnReason?: string;
  };
}
export const ReturnPostInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservationOrderId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      sessionId: Schema.optional(Schema.String),
      scope: Schema.optional(Schema.String),
      reservationToReturn: Schema.optional(
        Schema.Struct({
          reservationId: Schema.optional(Schema.String),
          quantity: Schema.optional(Schema.Number),
        }),
      ),
      returnReason: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/return",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<ReturnPostInput>;

// Output Schema
export interface ReturnPostOutput {
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
export const ReturnPostOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ReturnPostOutput>;

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
