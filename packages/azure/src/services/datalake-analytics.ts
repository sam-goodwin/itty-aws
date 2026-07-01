/**
 * Azure DatalakeAnalytics API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface AccountsCheckNameAvailabilityInput {
  subscriptionId: string;
  location: string;
  name: string;
  type: "Microsoft.DataLakeAnalytics/accounts";
}
export const AccountsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.DataLakeAnalytics/accounts"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataLakeAnalytics/locations/{location}/checkNameAvailability",
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccountsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks whether the specified account name is available or taken.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param location - The resource location without whitespace.
 * @param api-version - Client Api Version.
 */
export const AccountsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  properties: {
    defaultDataLakeStoreAccount: string;
    dataLakeStoreAccounts: { name: string; properties?: { suffix?: string } }[];
    storageAccounts?: {
      name: string;
      properties: { accessKey: string; suffix?: string };
    }[];
    computePolicies?: {
      name: string;
      properties: {
        objectId: string;
        objectType: "User" | "Group" | "ServicePrincipal";
        maxDegreeOfParallelismPerJob?: number;
        minPriorityPerJob?: number;
      };
    }[];
    firewallRules?: {
      name: string;
      properties: { startIpAddress: string; endIpAddress: string };
    }[];
    firewallState?: "Enabled" | "Disabled";
    firewallAllowAzureIps?: "Enabled" | "Disabled";
    newTier?:
      | "Consumption"
      | "Commitment_100AUHours"
      | "Commitment_500AUHours"
      | "Commitment_1000AUHours"
      | "Commitment_5000AUHours"
      | "Commitment_10000AUHours"
      | "Commitment_50000AUHours"
      | "Commitment_100000AUHours"
      | "Commitment_500000AUHours";
    maxJobCount?: number;
    maxDegreeOfParallelism?: number;
    maxDegreeOfParallelismPerJob?: number;
    minPriorityPerJob?: number;
    queryStoreRetention?: number;
  };
}
export const AccountsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.Struct({
    defaultDataLakeStoreAccount: Schema.String,
    dataLakeStoreAccounts: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        properties: Schema.optional(
          Schema.Struct({
            suffix: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    storageAccounts: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          properties: Schema.Struct({
            accessKey: Schema.String,
            suffix: Schema.optional(Schema.String),
          }),
        }),
      ),
    ),
    computePolicies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          properties: Schema.Struct({
            objectId: Schema.String,
            objectType: Schema.Literals(["User", "Group", "ServicePrincipal"]),
            maxDegreeOfParallelismPerJob: Schema.optional(Schema.Number),
            minPriorityPerJob: Schema.optional(Schema.Number),
          }),
        }),
      ),
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
    firewallState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
    firewallAllowAzureIps: Schema.optional(
      Schema.Literals(["Enabled", "Disabled"]),
    ),
    newTier: Schema.optional(
      Schema.Literals([
        "Consumption",
        "Commitment_100AUHours",
        "Commitment_500AUHours",
        "Commitment_1000AUHours",
        "Commitment_5000AUHours",
        "Commitment_10000AUHours",
        "Commitment_50000AUHours",
        "Commitment_100000AUHours",
        "Commitment_500000AUHours",
      ]),
    ),
    maxJobCount: Schema.optional(Schema.Number),
    maxDegreeOfParallelism: Schema.optional(Schema.Number),
    maxDegreeOfParallelismPerJob: Schema.optional(Schema.Number),
    minPriorityPerJob: Schema.optional(Schema.Number),
    queryStoreRetention: Schema.optional(Schema.Number),
  }),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}",
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
export const AccountsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<AccountsCreateOutput>;

// The operation
/**
 * Creates the specified Data Lake Analytics account. This supplies the user with computation services for Data Lake Analytics workloads.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param api-version - Client Api Version.
 */
export const AccountsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsCreateInput,
  outputSchema: AccountsCreateOutput,
}));
// Input Schema
export interface AccountsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}",
    apiVersion: "2016-11-01",
  }),
) as unknown as Schema.Codec<AccountsDeleteInput>;

// Output Schema
export type AccountsDeleteOutput = void;
export const AccountsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountsDeleteOutput>;

// The operation
/**
 * Begins the delete process for the Data Lake Analytics account object specified by the account name.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param api-version - Client Api Version.
 */
export const AccountsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsDeleteInput,
  outputSchema: AccountsDeleteOutput,
}));
// Input Schema
export interface AccountsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}",
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
export const AccountsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<AccountsGetOutput>;

// The operation
/**
 * Gets details of the specified Data Lake Analytics account.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param api-version - Client Api Version.
 */
export const AccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
export const AccountsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataLakeAnalytics/accounts",
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
  count?: number;
  nextLink?: string;
}
export const AccountsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  count: Schema.optional(Schema.Number),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AccountsListOutput>;

// The operation
/**
 * Gets the first page of Data Lake Analytics accounts, if any, within the current subscription. This includes a link to the next page, if any.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param $filter - OData filter. Optional.
 * @param $top - The number of items to return. Optional.
 * @param $skip - The number of items to skip over before returning elements. Optional.
 * @param $select - OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
 * @param $orderby - OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
 * @param $count - The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
 * @param api-version - Client Api Version.
 */
export const AccountsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts",
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
  count?: number;
  nextLink?: string;
}
export const AccountsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    count: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccountsListByResourceGroupOutput>;

// The operation
/**
 * Gets the first page of Data Lake Analytics accounts, if any, within a specific resource group. This includes a link to the next page, if any.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param $filter - OData filter. Optional.
 * @param $top - The number of items to return. Optional.
 * @param $skip - The number of items to skip over before returning elements. Optional.
 * @param $select - OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
 * @param $orderby - OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
 * @param $count - The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
 * @param api-version - Client Api Version.
 */
export const AccountsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsListByResourceGroupInput,
    outputSchema: AccountsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface AccountsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tags?: Record<string, string>;
  properties?: {
    dataLakeStoreAccounts?: {
      name: string;
      properties?: { suffix?: string };
    }[];
    storageAccounts?: {
      name: string;
      properties?: { accessKey?: string; suffix?: string };
    }[];
    computePolicies?: {
      name: string;
      properties?: {
        objectId?: string;
        objectType?: "User" | "Group" | "ServicePrincipal";
        maxDegreeOfParallelismPerJob?: number;
        minPriorityPerJob?: number;
      };
    }[];
    firewallRules?: {
      name: string;
      properties?: { startIpAddress?: string; endIpAddress?: string };
    }[];
    firewallState?: "Enabled" | "Disabled";
    firewallAllowAzureIps?: "Enabled" | "Disabled";
    newTier?:
      | "Consumption"
      | "Commitment_100AUHours"
      | "Commitment_500AUHours"
      | "Commitment_1000AUHours"
      | "Commitment_5000AUHours"
      | "Commitment_10000AUHours"
      | "Commitment_50000AUHours"
      | "Commitment_100000AUHours"
      | "Commitment_500000AUHours";
    maxJobCount?: number;
    maxDegreeOfParallelism?: number;
    maxDegreeOfParallelismPerJob?: number;
    minPriorityPerJob?: number;
    queryStoreRetention?: number;
  };
}
export const AccountsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      dataLakeStoreAccounts: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            properties: Schema.optional(
              Schema.Struct({
                suffix: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      ),
      storageAccounts: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            properties: Schema.optional(
              Schema.Struct({
                accessKey: Schema.optional(Schema.String),
                suffix: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      ),
      computePolicies: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            properties: Schema.optional(
              Schema.Struct({
                objectId: Schema.optional(Schema.String),
                objectType: Schema.optional(
                  Schema.Literals(["User", "Group", "ServicePrincipal"]),
                ),
                maxDegreeOfParallelismPerJob: Schema.optional(Schema.Number),
                minPriorityPerJob: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
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
      firewallState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      firewallAllowAzureIps: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      newTier: Schema.optional(
        Schema.Literals([
          "Consumption",
          "Commitment_100AUHours",
          "Commitment_500AUHours",
          "Commitment_1000AUHours",
          "Commitment_5000AUHours",
          "Commitment_10000AUHours",
          "Commitment_50000AUHours",
          "Commitment_100000AUHours",
          "Commitment_500000AUHours",
        ]),
      ),
      maxJobCount: Schema.optional(Schema.Number),
      maxDegreeOfParallelism: Schema.optional(Schema.Number),
      maxDegreeOfParallelismPerJob: Schema.optional(Schema.Number),
      minPriorityPerJob: Schema.optional(Schema.Number),
      queryStoreRetention: Schema.optional(Schema.Number),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}",
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
export const AccountsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<AccountsUpdateOutput>;

// The operation
/**
 * Updates the Data Lake Analytics account object specified by the accountName with the contents of the account object.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param api-version - Client Api Version.
 */
export const AccountsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsUpdateInput,
  outputSchema: AccountsUpdateOutput,
}));
// Input Schema
export interface ComputePoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  computePolicyName: string;
  properties: {
    objectId: string;
    objectType: "User" | "Group" | "ServicePrincipal";
    maxDegreeOfParallelismPerJob?: number;
    minPriorityPerJob?: number;
  };
}
export const ComputePoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    computePolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      objectId: Schema.String,
      objectType: Schema.Literals(["User", "Group", "ServicePrincipal"]),
      maxDegreeOfParallelismPerJob: Schema.optional(Schema.Number),
      minPriorityPerJob: Schema.optional(Schema.Number),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/computePolicies/{computePolicyName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<ComputePoliciesCreateOrUpdateInput>;

// Output Schema
export interface ComputePoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ComputePoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ComputePoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the specified compute policy. During update, the compute policy with the specified name will be replaced with this new compute policy. An account supports, at most, 50 policies
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param computePolicyName - The name of the compute policy to create or update.
 * @param api-version - Client Api Version.
 */
export const ComputePoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ComputePoliciesCreateOrUpdateInput,
    outputSchema: ComputePoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ComputePoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  computePolicyName: string;
}
export const ComputePoliciesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    computePolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/computePolicies/{computePolicyName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<ComputePoliciesDeleteInput>;

// Output Schema
export type ComputePoliciesDeleteOutput = void;
export const ComputePoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ComputePoliciesDeleteOutput>;

// The operation
/**
 * Deletes the specified compute policy from the specified Data Lake Analytics account
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param computePolicyName - The name of the compute policy to delete.
 * @param api-version - Client Api Version.
 */
export const ComputePoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ComputePoliciesDeleteInput,
    outputSchema: ComputePoliciesDeleteOutput,
  }),
);
// Input Schema
export interface ComputePoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  computePolicyName: string;
}
export const ComputePoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    computePolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/computePolicies/{computePolicyName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<ComputePoliciesGetInput>;

// Output Schema
export interface ComputePoliciesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ComputePoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ComputePoliciesGetOutput>;

// The operation
/**
 * Gets the specified Data Lake Analytics compute policy.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param computePolicyName - The name of the compute policy to retrieve.
 * @param api-version - Client Api Version.
 */
export const ComputePoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ComputePoliciesGetInput,
  outputSchema: ComputePoliciesGetOutput,
}));
// Input Schema
export interface ComputePoliciesListByAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const ComputePoliciesListByAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/computePolicies",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<ComputePoliciesListByAccountInput>;

// Output Schema
export interface ComputePoliciesListByAccountOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ComputePoliciesListByAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ComputePoliciesListByAccountOutput>;

// The operation
/**
 * Lists the Data Lake Analytics compute policies within the specified Data Lake Analytics account. An account supports, at most, 50 policies
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param api-version - Client Api Version.
 */
export const ComputePoliciesListByAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ComputePoliciesListByAccountInput,
    outputSchema: ComputePoliciesListByAccountOutput,
  }));
// Input Schema
export interface ComputePoliciesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  computePolicyName: string;
  properties?: {
    objectId?: string;
    objectType?: "User" | "Group" | "ServicePrincipal";
    maxDegreeOfParallelismPerJob?: number;
    minPriorityPerJob?: number;
  };
}
export const ComputePoliciesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    computePolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        objectId: Schema.optional(Schema.String),
        objectType: Schema.optional(
          Schema.Literals(["User", "Group", "ServicePrincipal"]),
        ),
        maxDegreeOfParallelismPerJob: Schema.optional(Schema.Number),
        minPriorityPerJob: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/computePolicies/{computePolicyName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<ComputePoliciesUpdateInput>;

// Output Schema
export interface ComputePoliciesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ComputePoliciesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ComputePoliciesUpdateOutput>;

// The operation
/**
 * Updates the specified compute policy.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param computePolicyName - The name of the compute policy to update.
 * @param api-version - Client Api Version.
 */
export const ComputePoliciesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ComputePoliciesUpdateInput,
    outputSchema: ComputePoliciesUpdateOutput,
  }),
);
// Input Schema
export interface DataLakeStoreAccountsAddInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  dataLakeStoreAccountName: string;
  properties?: { suffix?: string };
}
export const DataLakeStoreAccountsAddInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    dataLakeStoreAccountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        suffix: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts/{dataLakeStoreAccountName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<DataLakeStoreAccountsAddInput>;

// Output Schema
export type DataLakeStoreAccountsAddOutput = void;
export const DataLakeStoreAccountsAddOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DataLakeStoreAccountsAddOutput>;

// The operation
/**
 * Updates the specified Data Lake Analytics account to include the additional Data Lake Store account.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param dataLakeStoreAccountName - The name of the Data Lake Store account to add.
 * @param api-version - Client Api Version.
 */
export const DataLakeStoreAccountsAdd = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataLakeStoreAccountsAddInput,
    outputSchema: DataLakeStoreAccountsAddOutput,
  }),
);
// Input Schema
export interface DataLakeStoreAccountsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  dataLakeStoreAccountName: string;
}
export const DataLakeStoreAccountsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    dataLakeStoreAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts/{dataLakeStoreAccountName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<DataLakeStoreAccountsDeleteInput>;

// Output Schema
export type DataLakeStoreAccountsDeleteOutput = void;
export const DataLakeStoreAccountsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DataLakeStoreAccountsDeleteOutput>;

// The operation
/**
 * Updates the Data Lake Analytics account specified to remove the specified Data Lake Store account.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param dataLakeStoreAccountName - The name of the Data Lake Store account to remove
 * @param api-version - Client Api Version.
 */
export const DataLakeStoreAccountsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataLakeStoreAccountsDeleteInput,
    outputSchema: DataLakeStoreAccountsDeleteOutput,
  }),
);
// Input Schema
export interface DataLakeStoreAccountsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  dataLakeStoreAccountName: string;
}
export const DataLakeStoreAccountsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    dataLakeStoreAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts/{dataLakeStoreAccountName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<DataLakeStoreAccountsGetInput>;

// Output Schema
export interface DataLakeStoreAccountsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DataLakeStoreAccountsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DataLakeStoreAccountsGetOutput>;

// The operation
/**
 * Gets the specified Data Lake Store account details in the specified Data Lake Analytics account.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param dataLakeStoreAccountName - The name of the Data Lake Store account to retrieve
 * @param api-version - Client Api Version.
 */
export const DataLakeStoreAccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataLakeStoreAccountsGetInput,
    outputSchema: DataLakeStoreAccountsGetOutput,
  }),
);
// Input Schema
export interface DataLakeStoreAccountsListByAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $filter?: string;
  $top?: number;
  $skip?: number;
  $select?: string;
  $orderby?: string;
  $count?: boolean;
}
export const DataLakeStoreAccountsListByAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $select: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
    $count: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<DataLakeStoreAccountsListByAccountInput>;

// Output Schema
export interface DataLakeStoreAccountsListByAccountOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const DataLakeStoreAccountsListByAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DataLakeStoreAccountsListByAccountOutput>;

// The operation
/**
 * Gets the first page of Data Lake Store accounts linked to the specified Data Lake Analytics account. The response includes a link to the next page, if any.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param $filter - OData filter. Optional.
 * @param $top - The number of items to return. Optional.
 * @param $skip - The number of items to skip over before returning elements. Optional.
 * @param $select - OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
 * @param $orderby - OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
 * @param $count - The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
 * @param api-version - Client Api Version.
 */
export const DataLakeStoreAccountsListByAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataLakeStoreAccountsListByAccountInput,
    outputSchema: DataLakeStoreAccountsListByAccountOutput,
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/firewallRules/{firewallRuleName}",
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FirewallRulesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the specified firewall rule. During update, the firewall rule with the specified name will be replaced with this new firewall rule.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param firewallRuleName - The name of the firewall rule to create or update.
 * @param api-version - Client Api Version.
 */
export const FirewallRulesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FirewallRulesCreateOrUpdateInput,
    outputSchema: FirewallRulesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface FirewallRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  firewallRuleName: string;
}
export const FirewallRulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    firewallRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/firewallRules/{firewallRuleName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<FirewallRulesDeleteInput>;

// Output Schema
export type FirewallRulesDeleteOutput = void;
export const FirewallRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FirewallRulesDeleteOutput>;

// The operation
/**
 * Deletes the specified firewall rule from the specified Data Lake Analytics account
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param firewallRuleName - The name of the firewall rule to delete.
 * @param api-version - Client Api Version.
 */
export const FirewallRulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
export const FirewallRulesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  firewallRuleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/firewallRules/{firewallRuleName}",
    apiVersion: "2016-11-01",
  }),
) as unknown as Schema.Codec<FirewallRulesGetInput>;

// Output Schema
export interface FirewallRulesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const FirewallRulesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<FirewallRulesGetOutput>;

// The operation
/**
 * Gets the specified Data Lake Analytics firewall rule.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param firewallRuleName - The name of the firewall rule to retrieve.
 * @param api-version - Client Api Version.
 */
export const FirewallRulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/firewallRules",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<FirewallRulesListByAccountInput>;

// Output Schema
export interface FirewallRulesListByAccountOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const FirewallRulesListByAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
 * Lists the Data Lake Analytics firewall rules within the specified Data Lake Analytics account.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param api-version - Client Api Version.
 */
export const FirewallRulesListByAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FirewallRulesListByAccountInput,
    outputSchema: FirewallRulesListByAccountOutput,
  }),
);
// Input Schema
export interface FirewallRulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  firewallRuleName: string;
  properties?: { startIpAddress?: string; endIpAddress?: string };
}
export const FirewallRulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/firewallRules/{firewallRuleName}",
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FirewallRulesUpdateOutput>;

// The operation
/**
 * Updates the specified firewall rule.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param firewallRuleName - The name of the firewall rule to update.
 * @param api-version - Client Api Version.
 */
export const FirewallRulesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesUpdateInput,
  outputSchema: FirewallRulesUpdateOutput,
}));
// Input Schema
export interface LocationsGetCapabilityInput {
  subscriptionId: string;
  location: string;
}
export const LocationsGetCapabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataLakeAnalytics/locations/{location}/capability",
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
 * Gets subscription-level properties and limits for Data Lake Analytics specified by resource location.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param location - The resource location without whitespace.
 * @param api-version - Client Api Version.
 */
export const LocationsGetCapability = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LocationsGetCapabilityInput,
    outputSchema: LocationsGetCapabilityOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DataLakeAnalytics/operations",
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
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          name?: string;
          displayDescription?: string;
          displayName?: string;
          unit?: string;
          aggregationType?: string;
          availabilities?: { timeGrain?: string; blobDuration?: string }[];
        }[];
        logSpecifications?: {
          name?: string;
          displayName?: string;
          blobDuration?: string;
        }[];
      };
    };
    origin?: "user" | "system" | "user,system";
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
        properties: Schema.optional(
          Schema.Struct({
            serviceSpecification: Schema.optional(
              Schema.Struct({
                metricSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayDescription: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      unit: Schema.optional(Schema.String),
                      aggregationType: Schema.optional(Schema.String),
                      availabilities: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            timeGrain: Schema.optional(Schema.String),
                            blobDuration: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
                logSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      blobDuration: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
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
 * Lists all of the available Data Lake Analytics REST API operations.
 *
 * @param api-version - Client Api Version.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface StorageAccountsAddInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  storageAccountName: string;
  properties: { accessKey: string; suffix?: string };
}
export const StorageAccountsAddInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageAccountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      accessKey: Schema.String,
      suffix: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsAddInput>;

// Output Schema
export type StorageAccountsAddOutput = void;
export const StorageAccountsAddOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageAccountsAddOutput>;

// The operation
/**
 * Updates the specified Data Lake Analytics account to add an Azure Storage account.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param storageAccountName - The name of the Azure Storage account to add
 * @param api-version - Client Api Version.
 */
export const StorageAccountsAdd = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StorageAccountsAddInput,
  outputSchema: StorageAccountsAddOutput,
}));
// Input Schema
export interface StorageAccountsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  storageAccountName: string;
}
export const StorageAccountsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsDeleteInput>;

// Output Schema
export type StorageAccountsDeleteOutput = void;
export const StorageAccountsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageAccountsDeleteOutput>;

// The operation
/**
 * Updates the specified Data Lake Analytics account to remove an Azure Storage account.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param storageAccountName - The name of the Azure Storage account to remove
 * @param api-version - Client Api Version.
 */
export const StorageAccountsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageAccountsDeleteInput,
    outputSchema: StorageAccountsDeleteOutput,
  }),
);
// Input Schema
export interface StorageAccountsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  storageAccountName: string;
}
export const StorageAccountsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsGetInput>;

// Output Schema
export interface StorageAccountsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const StorageAccountsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<StorageAccountsGetOutput>;

// The operation
/**
 * Gets the specified Azure Storage account linked to the given Data Lake Analytics account.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param storageAccountName - The name of the Azure Storage account for which to retrieve the details.
 * @param api-version - Client Api Version.
 */
export const StorageAccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StorageAccountsGetInput,
  outputSchema: StorageAccountsGetOutput,
}));
// Input Schema
export interface StorageAccountsGetStorageContainerInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  storageAccountName: string;
  containerName: string;
}
export const StorageAccountsGetStorageContainerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageAccountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}/containers/{containerName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsGetStorageContainerInput>;

// Output Schema
export interface StorageAccountsGetStorageContainerOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const StorageAccountsGetStorageContainerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<StorageAccountsGetStorageContainerOutput>;

// The operation
/**
 * Gets the specified Azure Storage container associated with the given Data Lake Analytics and Azure Storage accounts.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param storageAccountName - The name of the Azure storage account from which to retrieve the blob container.
 * @param containerName - The name of the Azure storage container to retrieve
 * @param api-version - Client Api Version.
 */
export const StorageAccountsGetStorageContainer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsGetStorageContainerInput,
    outputSchema: StorageAccountsGetStorageContainerOutput,
  }));
// Input Schema
export interface StorageAccountsListByAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $filter?: string;
  $top?: number;
  $skip?: number;
  $select?: string;
  $orderby?: string;
  $count?: boolean;
}
export const StorageAccountsListByAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $select: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
    $count: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsListByAccountInput>;

// Output Schema
export interface StorageAccountsListByAccountOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const StorageAccountsListByAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<StorageAccountsListByAccountOutput>;

// The operation
/**
 * Gets the first page of Azure Storage accounts, if any, linked to the specified Data Lake Analytics account. The response includes a link to the next page, if any.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param $filter - The OData filter. Optional.
 * @param $top - The number of items to return. Optional.
 * @param $skip - The number of items to skip over before returning elements. Optional.
 * @param $select - OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
 * @param $orderby - OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
 * @param $count - The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
 * @param api-version - Client Api Version.
 */
export const StorageAccountsListByAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsListByAccountInput,
    outputSchema: StorageAccountsListByAccountOutput,
  }));
// Input Schema
export interface StorageAccountsListSasTokensInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  storageAccountName: string;
  containerName: string;
}
export const StorageAccountsListSasTokensInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageAccountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}/containers/{containerName}/listSasTokens",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsListSasTokensInput>;

// Output Schema
export interface StorageAccountsListSasTokensOutput {
  value?: { accessToken?: Redacted.Redacted<string> }[];
  nextLink?: string;
}
export const StorageAccountsListSasTokensOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          accessToken: Schema.optional(SensitiveOutputString),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<StorageAccountsListSasTokensOutput>;

// The operation
/**
 * Gets the SAS token associated with the specified Data Lake Analytics and Azure Storage account and container combination.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param storageAccountName - The name of the Azure storage account for which the SAS token is being requested.
 * @param containerName - The name of the Azure storage container for which the SAS token is being requested.
 * @param api-version - Client Api Version.
 */
export const StorageAccountsListSasTokens =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsListSasTokensInput,
    outputSchema: StorageAccountsListSasTokensOutput,
  }));
// Input Schema
export interface StorageAccountsListStorageContainersInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  storageAccountName: string;
}
export const StorageAccountsListStorageContainersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}/containers",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsListStorageContainersInput>;

// Output Schema
export interface StorageAccountsListStorageContainersOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const StorageAccountsListStorageContainersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<StorageAccountsListStorageContainersOutput>;

// The operation
/**
 * Lists the Azure Storage containers, if any, associated with the specified Data Lake Analytics and Azure Storage account combination. The response includes a link to the next page of results, if any.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param storageAccountName - The name of the Azure storage account from which to list blob containers.
 * @param api-version - Client Api Version.
 */
export const StorageAccountsListStorageContainers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsListStorageContainersInput,
    outputSchema: StorageAccountsListStorageContainersOutput,
  }));
// Input Schema
export interface StorageAccountsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  storageAccountName: string;
  properties?: { accessKey?: string; suffix?: string };
}
export const StorageAccountsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageAccountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        accessKey: Schema.optional(Schema.String),
        suffix: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}",
      apiVersion: "2016-11-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsUpdateInput>;

// Output Schema
export type StorageAccountsUpdateOutput = void;
export const StorageAccountsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageAccountsUpdateOutput>;

// The operation
/**
 * Updates the Data Lake Analytics account to replace Azure Storage blob account details, such as the access key and/or suffix.
 *
 * @param subscriptionId - Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the Azure resource group.
 * @param accountName - The name of the Data Lake Analytics account.
 * @param storageAccountName - The Azure Storage account to modify
 * @param api-version - Client Api Version.
 */
export const StorageAccountsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageAccountsUpdateInput,
    outputSchema: StorageAccountsUpdateOutput,
  }),
);
