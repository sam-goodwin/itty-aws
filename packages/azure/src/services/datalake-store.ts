/**
 * Azure DatalakeStore API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AccountsCheckNameAvailabilityInput {
  subscriptionId: string;
  location: string;
  name: string;
  type: "Microsoft.DataLakeStore/accounts";
}
export const AccountsCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.DataLakeStore/accounts"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataLakeStore/locations/{location}/checkNameAvailability",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<AccountsCheckNameAvailabilityInput>;

// Output Schema
export interface AccountsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const AccountsCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccountsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks whether the specified account name is available or taken.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param location - The resource location without whitespace.
 * @param api-version - Client Api Version.
 */
export const AccountsCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AccountsCheckNameAvailabilityInput,
    outputSchema: AccountsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface AccountsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  location: string;
  tags?: Record<string, string>;
  identity?: {
    type: "SystemAssigned";
    principalId?: string;
    tenantId?: string;
  };
  properties?: {
    defaultGroup?: string;
    encryptionConfig?: {
      type: "UserManaged" | "ServiceManaged";
      keyVaultMetaInfo?: {
        keyVaultResourceId: string;
        encryptionKeyName: string;
        encryptionKeyVersion: string;
      };
    };
    encryptionState?: "Enabled" | "Disabled";
    firewallRules?: {
      name: string;
      properties: { startIpAddress: string; endIpAddress: string };
    }[];
    virtualNetworkRules?: { name: string; properties: { subnetId: string } }[];
    firewallState?: "Enabled" | "Disabled";
    firewallAllowAzureIps?: "Enabled" | "Disabled";
    trustedIdProviders?: { name: string; properties: { idProvider: string } }[];
    trustedIdProviderState?: "Enabled" | "Disabled";
    newTier?:
      | "Consumption"
      | "Commitment_1TB"
      | "Commitment_10TB"
      | "Commitment_100TB"
      | "Commitment_500TB"
      | "Commitment_1PB"
      | "Commitment_5PB";
  };
}
export const AccountsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.Literals(["SystemAssigned"]),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      defaultGroup: Schema.optional(Schema.String),
      encryptionConfig: Schema.optional(
        Schema.Struct({
          type: Schema.Literals(["UserManaged", "ServiceManaged"]),
          keyVaultMetaInfo: Schema.optional(
            Schema.Struct({
              keyVaultResourceId: Schema.String,
              encryptionKeyName: Schema.String,
              encryptionKeyVersion: Schema.String,
            }),
          ),
        }),
      ),
      encryptionState: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      firewallRules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            properties: Schema.Struct({
              startIpAddress: Schema.String,
              endIpAddress: Schema.String,
            }),
          }),
        ),
      ),
      virtualNetworkRules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            properties: Schema.Struct({
              subnetId: Schema.String,
            }),
          }),
        ),
      ),
      firewallState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      firewallAllowAzureIps: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      trustedIdProviders: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            properties: Schema.Struct({
              idProvider: Schema.String,
            }),
          }),
        ),
      ),
      trustedIdProviderState: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      newTier: Schema.optional(
        Schema.Literals([
          "Consumption",
          "Commitment_1TB",
          "Commitment_10TB",
          "Commitment_100TB",
          "Commitment_500TB",
          "Commitment_1PB",
          "Commitment_5PB",
        ]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}",
    apiVersion: "2016-11-01",
  }),
) as unknown as Schema.Codec<AccountsCreateInput>;

// Output Schema
export interface AccountsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const AccountsCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<AccountsCreateOutput>;

// The operation
/**
 * Creates the specified Data Lake Store account.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param api-version - Client Api Version.
 */
export const AccountsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsCreateInput,
  outputSchema: AccountsCreateOutput,
}));
// Input Schema
export interface AccountsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}",
    apiVersion: "2016-11-01",
  }),
) as unknown as Schema.Codec<AccountsDeleteInput>;

// Output Schema
export type AccountsDeleteOutput = void;
export const AccountsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountsDeleteOutput>;

// The operation
/**
 * Deletes the specified Data Lake Store account.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param api-version - Client Api Version.
 */
export const AccountsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsDeleteInput,
  outputSchema: AccountsDeleteOutput,
}));
// Input Schema
export interface AccountsEnableKeyVaultInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsEnableKeyVaultInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/enableKeyVault",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<AccountsEnableKeyVaultInput>;

// Output Schema
export type AccountsEnableKeyVaultOutput = void;
export const AccountsEnableKeyVaultOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountsEnableKeyVaultOutput>;

// The operation
/**
 * Attempts to enable a user managed Key Vault for encryption of the specified Data Lake Store account.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param api-version - Client Api Version.
 */
export const AccountsEnableKeyVault = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsEnableKeyVaultInput,
  outputSchema: AccountsEnableKeyVaultOutput,
}));
// Input Schema
export interface AccountsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}",
    apiVersion: "2016-11-01",
  }),
) as unknown as Schema.Codec<AccountsGetInput>;

// Output Schema
export interface AccountsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const AccountsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<AccountsGetOutput>;

// The operation
/**
 * Gets the specified Data Lake Store account.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param api-version - Client Api Version.
 */
export const AccountsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsGetInput,
  outputSchema: AccountsGetOutput,
}));
// Input Schema
export interface AccountsListInput {
  subscriptionId: string;
  $filter?: string;
  $top?: number;
  $skip?: number;
  $select?: string;
  $orderby?: string;
  $count?: boolean;
}
export const AccountsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  $filter: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $skip: Schema.optional(Schema.Number),
  $select: Schema.optional(Schema.String),
  $orderby: Schema.optional(Schema.String),
  $count: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataLakeStore/accounts",
    apiVersion: "2016-11-01",
  }),
) as unknown as Schema.Codec<AccountsListInput>;

// Output Schema
export interface AccountsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const AccountsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AccountsListOutput>;

// The operation
/**
 * Lists the Data Lake Store accounts within the subscription. The response includes a link to the next page of results, if any.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param $filter - OData filter. Optional.
 * @param $top - The number of items to return. Optional.
 * @param $skip - The number of items to skip over before returning elements. Optional.
 * @param $select - OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
 * @param $orderby - OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
 * @param $count - The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
 * @param api-version - Client Api Version.
 */
export const AccountsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsListInput,
  outputSchema: AccountsListOutput,
}));
// Input Schema
export interface AccountsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  $top?: number;
  $skip?: number;
  $select?: string;
  $orderby?: string;
  $count?: boolean;
}
export const AccountsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $select: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
    $count: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<AccountsListByResourceGroupInput>;

// Output Schema
export interface AccountsListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const AccountsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccountsListByResourceGroupOutput>;

// The operation
/**
 * Lists the Data Lake Store accounts within a specific resource group. The response includes a link to the next page of results, if any.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param $filter - OData filter. Optional.
 * @param $top - The number of items to return. Optional.
 * @param $skip - The number of items to skip over before returning elements. Optional.
 * @param $select - OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
 * @param $orderby - OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
 * @param $count - A Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
 * @param api-version - Client Api Version.
 */
export const AccountsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsListByResourceGroupInput,
  outputSchema: AccountsListByResourceGroupOutput,
}));
// Input Schema
export interface AccountsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tags?: Record<string, string>;
  properties?: {
    defaultGroup?: string;
    encryptionConfig?: { keyVaultMetaInfo?: { encryptionKeyVersion?: string } };
    firewallRules?: {
      name: string;
      properties?: { startIpAddress?: string; endIpAddress?: string };
    }[];
    virtualNetworkRules?: {
      name: string;
      properties?: { subnetId?: string };
    }[];
    firewallState?: "Enabled" | "Disabled";
    firewallAllowAzureIps?: "Enabled" | "Disabled";
    trustedIdProviders?: {
      name: string;
      properties?: { idProvider?: string };
    }[];
    trustedIdProviderState?: "Enabled" | "Disabled";
    newTier?:
      | "Consumption"
      | "Commitment_1TB"
      | "Commitment_10TB"
      | "Commitment_100TB"
      | "Commitment_500TB"
      | "Commitment_1PB"
      | "Commitment_5PB";
  };
}
export const AccountsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      defaultGroup: Schema.optional(Schema.String),
      encryptionConfig: Schema.optional(
        Schema.Struct({
          keyVaultMetaInfo: Schema.optional(
            Schema.Struct({
              encryptionKeyVersion: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      firewallRules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            properties: Schema.optional(
              Schema.Struct({
                startIpAddress: Schema.optional(Schema.String),
                endIpAddress: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      ),
      virtualNetworkRules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            properties: Schema.optional(
              Schema.Struct({
                subnetId: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      ),
      firewallState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      firewallAllowAzureIps: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      trustedIdProviders: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            properties: Schema.optional(
              Schema.Struct({
                idProvider: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      ),
      trustedIdProviderState: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      newTier: Schema.optional(
        Schema.Literals([
          "Consumption",
          "Commitment_1TB",
          "Commitment_10TB",
          "Commitment_100TB",
          "Commitment_500TB",
          "Commitment_1PB",
          "Commitment_5PB",
        ]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}",
    apiVersion: "2016-11-01",
  }),
) as unknown as Schema.Codec<AccountsUpdateInput>;

// Output Schema
export interface AccountsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const AccountsUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<AccountsUpdateOutput>;

// The operation
/**
 * Updates the specified Data Lake Store account information.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param api-version - Client Api Version.
 */
export const AccountsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsUpdateInput,
  outputSchema: AccountsUpdateOutput,
}));
// Input Schema
export interface FirewallRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  firewallRuleName: string;
  properties: { startIpAddress: string; endIpAddress: string };
}
export const FirewallRulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    firewallRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      startIpAddress: Schema.String,
      endIpAddress: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/firewallRules/{firewallRuleName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<FirewallRulesCreateOrUpdateInput>;

// Output Schema
export interface FirewallRulesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const FirewallRulesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FirewallRulesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the specified firewall rule. During update, the firewall rule with the specified name will be replaced with this new firewall rule.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param firewallRuleName - The name of the firewall rule to create or update.
 * @param api-version - Client Api Version.
 */
export const FirewallRulesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesCreateOrUpdateInput,
  outputSchema: FirewallRulesCreateOrUpdateOutput,
}));
// Input Schema
export interface FirewallRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  firewallRuleName: string;
}
export const FirewallRulesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    firewallRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/firewallRules/{firewallRuleName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<FirewallRulesDeleteInput>;

// Output Schema
export type FirewallRulesDeleteOutput = void;
export const FirewallRulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FirewallRulesDeleteOutput>;

// The operation
/**
 * Deletes the specified firewall rule from the specified Data Lake Store account.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param firewallRuleName - The name of the firewall rule to delete.
 * @param api-version - Client Api Version.
 */
export const FirewallRulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesDeleteInput,
  outputSchema: FirewallRulesDeleteOutput,
}));
// Input Schema
export interface FirewallRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  firewallRuleName: string;
}
export const FirewallRulesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  firewallRuleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/firewallRules/{firewallRuleName}",
    apiVersion: "2016-11-01",
  }),
) as unknown as Schema.Codec<FirewallRulesGetInput>;

// Output Schema
export interface FirewallRulesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const FirewallRulesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<FirewallRulesGetOutput>;

// The operation
/**
 * Gets the specified Data Lake Store firewall rule.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param firewallRuleName - The name of the firewall rule to retrieve.
 * @param api-version - Client Api Version.
 */
export const FirewallRulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesGetInput,
  outputSchema: FirewallRulesGetOutput,
}));
// Input Schema
export interface FirewallRulesListByAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const FirewallRulesListByAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/firewallRules",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<FirewallRulesListByAccountInput>;

// Output Schema
export interface FirewallRulesListByAccountOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const FirewallRulesListByAccountOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FirewallRulesListByAccountOutput>;

// The operation
/**
 * Lists the Data Lake Store firewall rules within the specified Data Lake Store account.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param api-version - Client Api Version.
 */
export const FirewallRulesListByAccount = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesListByAccountInput,
  outputSchema: FirewallRulesListByAccountOutput,
}));
// Input Schema
export interface FirewallRulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  firewallRuleName: string;
  properties?: { startIpAddress?: string; endIpAddress?: string };
}
export const FirewallRulesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    firewallRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        startIpAddress: Schema.optional(Schema.String),
        endIpAddress: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/firewallRules/{firewallRuleName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<FirewallRulesUpdateInput>;

// Output Schema
export interface FirewallRulesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const FirewallRulesUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FirewallRulesUpdateOutput>;

// The operation
/**
 * Updates the specified firewall rule.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param firewallRuleName - The name of the firewall rule to update.
 * @param api-version - Client Api Version.
 */
export const FirewallRulesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesUpdateInput,
  outputSchema: FirewallRulesUpdateOutput,
}));
// Input Schema
export interface LocationsGetCapabilityInput {
  subscriptionId: string;
  location: string;
}
export const LocationsGetCapabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataLakeStore/locations/{location}/capability",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<LocationsGetCapabilityInput>;

// Output Schema
export interface LocationsGetCapabilityOutput {
  subscriptionId?: string;
  state?: "Registered" | "Suspended" | "Deleted" | "Unregistered" | "Warned";
  maxAccountCount?: number;
  accountCount?: number;
  migrationState?: boolean;
}
export const LocationsGetCapabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.optional(Schema.String),
    state: Schema.optional(
      Schema.Literals([
        "Registered",
        "Suspended",
        "Deleted",
        "Unregistered",
        "Warned",
      ]),
    ),
    maxAccountCount: Schema.optional(Schema.Number),
    accountCount: Schema.optional(Schema.Number),
    migrationState: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<LocationsGetCapabilityOutput>;

// The operation
/**
 * Gets subscription-level properties and limits for Data Lake Store specified by resource location.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param location - The resource location without whitespace.
 * @param api-version - Client Api Version.
 */
export const LocationsGetCapability = /*@__PURE__*/ API.make(() => ({
  inputSchema: LocationsGetCapabilityInput,
  outputSchema: LocationsGetCapabilityOutput,
}));
// Input Schema
export interface LocationsGetUsageInput {
  subscriptionId: string;
  location: string;
}
export const LocationsGetUsageInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataLakeStore/locations/{location}/usages",
    apiVersion: "2016-11-01",
  }),
) as unknown as Schema.Codec<LocationsGetUsageInput>;

// Output Schema
export interface LocationsGetUsageOutput {
  value?: {
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountsPerSecond"
      | "BytesPerSecond";
    id?: string;
    currentValue?: number;
    limit?: number;
    name?: { value?: string; localizedValue?: string };
  }[];
}
export const LocationsGetUsageOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountsPerSecond",
              "BytesPerSecond",
            ]),
          ),
          id: Schema.optional(Schema.String),
          currentValue: Schema.optional(Schema.Number),
          limit: Schema.optional(Schema.Number),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LocationsGetUsageOutput>;

// The operation
/**
 * Gets the current usage count and the limit for the resources of the location under the subscription.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param location - The resource location without whitespace.
 */
export const LocationsGetUsage = /*@__PURE__*/ API.make(() => ({
  inputSchema: LocationsGetUsageInput,
  outputSchema: LocationsGetUsageOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DataLakeStore/operations",
    apiVersion: "2016-11-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: "user" | "system" | "user,system";
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
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
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Data Lake Store REST API operations.
 *
 * @param api-version - Client Api Version.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface TrustedIdProvidersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  trustedIdProviderName: string;
  properties: { idProvider: string };
}
export const TrustedIdProvidersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    trustedIdProviderName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      idProvider: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/trustedIdProviders/{trustedIdProviderName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<TrustedIdProvidersCreateOrUpdateInput>;

// Output Schema
export interface TrustedIdProvidersCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TrustedIdProvidersCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TrustedIdProvidersCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the specified trusted identity provider. During update, the trusted identity provider with the specified name will be replaced with this new provider
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param trustedIdProviderName - The name of the trusted identity provider. This is used for differentiation of providers in the account.
 * @param api-version - Client Api Version.
 */
export const TrustedIdProvidersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TrustedIdProvidersCreateOrUpdateInput,
    outputSchema: TrustedIdProvidersCreateOrUpdateOutput,
  }));
// Input Schema
export interface TrustedIdProvidersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  trustedIdProviderName: string;
}
export const TrustedIdProvidersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    trustedIdProviderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/trustedIdProviders/{trustedIdProviderName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<TrustedIdProvidersDeleteInput>;

// Output Schema
export type TrustedIdProvidersDeleteOutput = void;
export const TrustedIdProvidersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TrustedIdProvidersDeleteOutput>;

// The operation
/**
 * Deletes the specified trusted identity provider from the specified Data Lake Store account
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param trustedIdProviderName - The name of the trusted identity provider to delete.
 * @param api-version - Client Api Version.
 */
export const TrustedIdProvidersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: TrustedIdProvidersDeleteInput,
  outputSchema: TrustedIdProvidersDeleteOutput,
}));
// Input Schema
export interface TrustedIdProvidersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  trustedIdProviderName: string;
}
export const TrustedIdProvidersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    trustedIdProviderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/trustedIdProviders/{trustedIdProviderName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<TrustedIdProvidersGetInput>;

// Output Schema
export interface TrustedIdProvidersGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TrustedIdProvidersGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TrustedIdProvidersGetOutput>;

// The operation
/**
 * Gets the specified Data Lake Store trusted identity provider.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param trustedIdProviderName - The name of the trusted identity provider to retrieve.
 * @param api-version - Client Api Version.
 */
export const TrustedIdProvidersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: TrustedIdProvidersGetInput,
  outputSchema: TrustedIdProvidersGetOutput,
}));
// Input Schema
export interface TrustedIdProvidersListByAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const TrustedIdProvidersListByAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/trustedIdProviders",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<TrustedIdProvidersListByAccountInput>;

// Output Schema
export interface TrustedIdProvidersListByAccountOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const TrustedIdProvidersListByAccountOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TrustedIdProvidersListByAccountOutput>;

// The operation
/**
 * Lists the Data Lake Store trusted identity providers within the specified Data Lake Store account.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param api-version - Client Api Version.
 */
export const TrustedIdProvidersListByAccount =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TrustedIdProvidersListByAccountInput,
    outputSchema: TrustedIdProvidersListByAccountOutput,
  }));
// Input Schema
export interface TrustedIdProvidersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  trustedIdProviderName: string;
  properties?: { idProvider?: string };
}
export const TrustedIdProvidersUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    trustedIdProviderName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        idProvider: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/trustedIdProviders/{trustedIdProviderName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<TrustedIdProvidersUpdateInput>;

// Output Schema
export interface TrustedIdProvidersUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TrustedIdProvidersUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TrustedIdProvidersUpdateOutput>;

// The operation
/**
 * Updates the specified trusted identity provider.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param trustedIdProviderName - The name of the trusted identity provider. This is used for differentiation of providers in the account.
 * @param api-version - Client Api Version.
 */
export const TrustedIdProvidersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TrustedIdProvidersUpdateInput,
  outputSchema: TrustedIdProvidersUpdateOutput,
}));
// Input Schema
export interface VirtualNetworkRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  virtualNetworkRuleName: string;
  properties: { subnetId: string };
}
export const VirtualNetworkRulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    virtualNetworkRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      subnetId: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/virtualNetworkRules/{virtualNetworkRuleName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworkRulesCreateOrUpdateInput>;

// Output Schema
export interface VirtualNetworkRulesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const VirtualNetworkRulesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualNetworkRulesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the specified virtual network rule. During update, the virtual network rule with the specified name will be replaced with this new virtual network rule.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param virtualNetworkRuleName - The name of the virtual network rule to create or update.
 * @param api-version - Client Api Version.
 */
export const VirtualNetworkRulesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworkRulesCreateOrUpdateInput,
    outputSchema: VirtualNetworkRulesCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualNetworkRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  virtualNetworkRuleName: string;
}
export const VirtualNetworkRulesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    virtualNetworkRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/virtualNetworkRules/{virtualNetworkRuleName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworkRulesDeleteInput>;

// Output Schema
export type VirtualNetworkRulesDeleteOutput = void;
export const VirtualNetworkRulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualNetworkRulesDeleteOutput>;

// The operation
/**
 * Deletes the specified virtual network rule from the specified Data Lake Store account.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param virtualNetworkRuleName - The name of the virtual network rule to delete.
 * @param api-version - Client Api Version.
 */
export const VirtualNetworkRulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworkRulesDeleteInput,
  outputSchema: VirtualNetworkRulesDeleteOutput,
}));
// Input Schema
export interface VirtualNetworkRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  virtualNetworkRuleName: string;
}
export const VirtualNetworkRulesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    virtualNetworkRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/virtualNetworkRules/{virtualNetworkRuleName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworkRulesGetInput>;

// Output Schema
export interface VirtualNetworkRulesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const VirtualNetworkRulesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualNetworkRulesGetOutput>;

// The operation
/**
 * Gets the specified Data Lake Store virtual network rule.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param virtualNetworkRuleName - The name of the virtual network rule to retrieve.
 * @param api-version - Client Api Version.
 */
export const VirtualNetworkRulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworkRulesGetInput,
  outputSchema: VirtualNetworkRulesGetOutput,
}));
// Input Schema
export interface VirtualNetworkRulesListByAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const VirtualNetworkRulesListByAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/virtualNetworkRules",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworkRulesListByAccountInput>;

// Output Schema
export interface VirtualNetworkRulesListByAccountOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const VirtualNetworkRulesListByAccountOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualNetworkRulesListByAccountOutput>;

// The operation
/**
 * Lists the Data Lake Store virtual network rules within the specified Data Lake Store account.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param api-version - Client Api Version.
 */
export const VirtualNetworkRulesListByAccount =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworkRulesListByAccountInput,
    outputSchema: VirtualNetworkRulesListByAccountOutput,
  }));
// Input Schema
export interface VirtualNetworkRulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  virtualNetworkRuleName: string;
  properties?: { subnetId?: string };
}
export const VirtualNetworkRulesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    virtualNetworkRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        subnetId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/virtualNetworkRules/{virtualNetworkRuleName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworkRulesUpdateInput>;

// Output Schema
export interface VirtualNetworkRulesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const VirtualNetworkRulesUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualNetworkRulesUpdateOutput>;

// The operation
/**
 * Updates the specified virtual network rule.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Store account.
 * @param virtualNetworkRuleName - The name of the virtual network rule to update.
 * @param api-version - Client Api Version.
 */
export const VirtualNetworkRulesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworkRulesUpdateInput,
  outputSchema: VirtualNetworkRulesUpdateOutput,
}));
