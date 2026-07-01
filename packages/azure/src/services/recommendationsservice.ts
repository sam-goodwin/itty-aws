/**
 * Azure Recommendationsservice API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface AccountsCheckNameAvailabilityInput {
  subscriptionId: string;
  name?: string;
  type?: string;
}
export const AccountsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.RecommendationsService/checkNameAvailability",
      apiVersion: "2022-02-01",
    }),
  ) as unknown as Schema.Codec<AccountsCheckNameAvailabilityInput>;

// Output Schema
export interface AccountsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const AccountsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccountsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the RecommendationsService Account name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const AccountsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccountsCheckNameAvailabilityInput,
    outputSchema: AccountsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface AccountsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  properties?: {
    configuration?: "Free" | "Capacity";
    endpointAuthentications?: {
      aadTenantID?: string;
      principalID?: string;
      principalType?: "Application" | "User";
    }[];
    cors?: {
      allowedOrigins: string[];
      allowedMethods?: string[];
      allowedHeaders?: string[];
      exposedHeaders?: string[];
      maxAgeInSeconds?: number;
    }[];
    reportsConnectionString?: string;
    provisioningState?: string;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const AccountsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        configuration: Schema.optional(Schema.Literals(["Free", "Capacity"])),
        endpointAuthentications: Schema.optional(
          Schema.Array(
            Schema.Struct({
              aadTenantID: Schema.optional(Schema.String),
              principalID: Schema.optional(Schema.String),
              principalType: Schema.optional(
                Schema.Literals(["Application", "User"]),
              ),
            }),
          ),
        ),
        cors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              allowedOrigins: Schema.Array(Schema.String),
              allowedMethods: Schema.optional(Schema.Array(Schema.String)),
              allowedHeaders: Schema.optional(Schema.Array(Schema.String)),
              exposedHeaders: Schema.optional(Schema.Array(Schema.String)),
              maxAgeInSeconds: Schema.optional(Schema.Number),
            }),
          ),
        ),
        reportsConnectionString: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts/{accountName}",
      apiVersion: "2022-02-01",
    }),
  ) as unknown as Schema.Codec<AccountsCreateOrUpdateInput>;

// Output Schema
export interface AccountsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AccountsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccountsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates RecommendationsService Account resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the RecommendationsService Account resource.
 */
export const AccountsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsCreateOrUpdateInput,
    outputSchema: AccountsCreateOrUpdateOutput,
  }),
);
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts/{accountName}",
    apiVersion: "2022-02-01",
  }),
) as unknown as Schema.Codec<AccountsDeleteInput>;

// Output Schema
export type AccountsDeleteOutput = void;
export const AccountsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountsDeleteOutput>;

// The operation
/**
 * Deletes RecommendationsService Account resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the RecommendationsService Account resource.
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts/{accountName}",
    apiVersion: "2022-02-01",
  }),
) as unknown as Schema.Codec<AccountsGetInput>;

// Output Schema
export interface AccountsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AccountsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AccountsGetOutput>;

// The operation
/**
 * Returns RecommendationsService Account resource for a given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the RecommendationsService Account resource.
 */
export const AccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsGetInput,
  outputSchema: AccountsGetOutput,
}));
// Input Schema
export interface AccountsGetStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsGetStatusInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts/{accountName}/status",
    apiVersion: "2022-02-01",
  }),
) as unknown as Schema.Codec<AccountsGetStatusInput>;

// Output Schema
export interface AccountsGetStatusOutput {
  scopesStatuses?: {
    scope?: string;
    statuses?: { stage?: string; status?: string; time?: string }[];
  }[];
}
export const AccountsGetStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scopesStatuses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          scope: Schema.optional(Schema.String),
          statuses: Schema.optional(
            Schema.Array(
              Schema.Struct({
                stage: Schema.optional(Schema.String),
                status: Schema.optional(Schema.String),
                time: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AccountsGetStatusOutput>;

// The operation
/**
 * Returns RecommendationsService Account status.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the RecommendationsService Account resource.
 */
export const AccountsGetStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsGetStatusInput,
  outputSchema: AccountsGetStatusOutput,
}));
// Input Schema
export interface AccountsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AccountsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts",
      apiVersion: "2022-02-01",
    }),
  ) as unknown as Schema.Codec<AccountsListByResourceGroupInput>;

// Output Schema
export interface AccountsListByResourceGroupOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string }[];
}
export const AccountsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AccountsListByResourceGroupOutput>;

// The operation
/**
 * Returns list of RecommendationsService Account resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AccountsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsListByResourceGroupInput,
    outputSchema: AccountsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface AccountsListBySubscriptionInput {
  subscriptionId: string;
}
export const AccountsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.RecommendationsService/accounts",
      apiVersion: "2022-02-01",
    }),
  ) as unknown as Schema.Codec<AccountsListBySubscriptionInput>;

// Output Schema
export interface AccountsListBySubscriptionOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string }[];
}
export const AccountsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AccountsListBySubscriptionOutput>;

// The operation
/**
 * Returns list of RecommendationsService Account resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AccountsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsListBySubscriptionInput,
    outputSchema: AccountsListBySubscriptionOutput,
  }),
);
// Input Schema
export interface AccountsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tags?: Record<string, string>;
  properties?: {
    endpointAuthentications?: {
      aadTenantID?: string;
      principalID?: string;
      principalType?: "Application" | "User";
    }[];
    cors?: {
      allowedOrigins: string[];
      allowedMethods?: string[];
      allowedHeaders?: string[];
      exposedHeaders?: string[];
      maxAgeInSeconds?: number;
    }[];
    reportsConnectionString?: string;
  };
}
export const AccountsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      endpointAuthentications: Schema.optional(
        Schema.Array(
          Schema.Struct({
            aadTenantID: Schema.optional(Schema.String),
            principalID: Schema.optional(Schema.String),
            principalType: Schema.optional(
              Schema.Literals(["Application", "User"]),
            ),
          }),
        ),
      ),
      cors: Schema.optional(
        Schema.Array(
          Schema.Struct({
            allowedOrigins: Schema.Array(Schema.String),
            allowedMethods: Schema.optional(Schema.Array(Schema.String)),
            allowedHeaders: Schema.optional(Schema.Array(Schema.String)),
            exposedHeaders: Schema.optional(Schema.Array(Schema.String)),
            maxAgeInSeconds: Schema.optional(Schema.Number),
          }),
        ),
      ),
      reportsConnectionString: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts/{accountName}",
    apiVersion: "2022-02-01",
  }),
) as unknown as Schema.Codec<AccountsUpdateInput>;

// Output Schema
export interface AccountsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AccountsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AccountsUpdateOutput>;

// The operation
/**
 * Updates RecommendationsService Account details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the RecommendationsService Account resource.
 */
export const AccountsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsUpdateInput,
  outputSchema: AccountsUpdateOutput,
}));
// Input Schema
export interface ModelingCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  modelingName: string;
  properties?: {
    features?: "Basic" | "Standard" | "Premium";
    frequency?: "Low" | "Medium" | "High";
    size?: "Small" | "Medium" | "Large";
    inputData?: { connectionString?: string | Redacted.Redacted<string> };
    provisioningState?: string;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ModelingCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    modelingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        features: Schema.optional(
          Schema.Literals(["Basic", "Standard", "Premium"]),
        ),
        frequency: Schema.optional(Schema.Literals(["Low", "Medium", "High"])),
        size: Schema.optional(Schema.Literals(["Small", "Medium", "Large"])),
        inputData: Schema.optional(
          Schema.Struct({
            connectionString: Schema.optional(SensitiveString),
          }),
        ),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts/{accountName}/modeling/{modelingName}",
      apiVersion: "2022-02-01",
    }),
  ) as unknown as Schema.Codec<ModelingCreateOrUpdateInput>;

// Output Schema
export interface ModelingCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ModelingCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ModelingCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates Modeling resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the RecommendationsService Account resource.
 * @param modelingName - The name of the Modeling resource.
 */
export const ModelingCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ModelingCreateOrUpdateInput,
    outputSchema: ModelingCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ModelingDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  modelingName: string;
}
export const ModelingDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  modelingName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts/{accountName}/modeling/{modelingName}",
    apiVersion: "2022-02-01",
  }),
) as unknown as Schema.Codec<ModelingDeleteInput>;

// Output Schema
export type ModelingDeleteOutput = void;
export const ModelingDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ModelingDeleteOutput>;

// The operation
/**
 * Deletes Modeling resources of a given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the RecommendationsService Account resource.
 * @param modelingName - The name of the Modeling resource.
 */
export const ModelingDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModelingDeleteInput,
  outputSchema: ModelingDeleteOutput,
}));
// Input Schema
export interface ModelingGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  modelingName: string;
}
export const ModelingGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  modelingName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts/{accountName}/modeling/{modelingName}",
    apiVersion: "2022-02-01",
  }),
) as unknown as Schema.Codec<ModelingGetInput>;

// Output Schema
export interface ModelingGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ModelingGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ModelingGetOutput>;

// The operation
/**
 * Returns Modeling resources for a given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the RecommendationsService Account resource.
 * @param modelingName - The name of the Modeling resource.
 */
export const ModelingGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModelingGetInput,
  outputSchema: ModelingGetOutput,
}));
// Input Schema
export interface ModelingListByAccountResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const ModelingListByAccountResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts/{accountName}/modeling",
      apiVersion: "2022-02-01",
    }),
  ) as unknown as Schema.Codec<ModelingListByAccountResourceInput>;

// Output Schema
export interface ModelingListByAccountResourceOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string }[];
}
export const ModelingListByAccountResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ModelingListByAccountResourceOutput>;

// The operation
/**
 * Returns list of Modeling resources for a given Account name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the RecommendationsService Account resource.
 */
export const ModelingListByAccountResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ModelingListByAccountResourceInput,
    outputSchema: ModelingListByAccountResourceOutput,
  }));
// Input Schema
export interface ModelingUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  modelingName: string;
  tags?: Record<string, string>;
  properties?: {
    inputData?: { connectionString?: string | Redacted.Redacted<string> };
  };
}
export const ModelingUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  modelingName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      inputData: Schema.optional(
        Schema.Struct({
          connectionString: Schema.optional(SensitiveString),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts/{accountName}/modeling/{modelingName}",
    apiVersion: "2022-02-01",
  }),
) as unknown as Schema.Codec<ModelingUpdateInput>;

// Output Schema
export interface ModelingUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ModelingUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ModelingUpdateOutput>;

// The operation
/**
 * Updates Modeling resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the RecommendationsService Account resource.
 * @param modelingName - The name of the Modeling resource.
 */
export const ModelingUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModelingUpdateInput,
  outputSchema: ModelingUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.RecommendationsService/operations",
    apiVersion: "2022-02-01",
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
 * Returns list of operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OperationStatusesGetInput {
  location: string;
  operationId: string;
}
export const OperationStatusesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.RecommendationsService/locations/{location}/operationStatuses/{operationId}",
      apiVersion: "2022-02-01",
    }),
  ) as unknown as Schema.Codec<OperationStatusesGetInput>;

// Output Schema
export interface OperationStatusesGetOutput {
  id?: string;
  resourceId?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: unknown[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const OperationStatusesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(Schema.Array(Schema.Unknown)),
          error: Schema.optional(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              target: Schema.optional(Schema.String),
              details: Schema.optional(Schema.Array(Schema.Unknown)),
              additionalInfo: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.optional(Schema.String),
                    info: Schema.optional(Schema.Unknown),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        details: Schema.optional(Schema.Array(Schema.Unknown)),
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<OperationStatusesGetOutput>;

// The operation
/**
 * Returns the current status of an async operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param location - The name of Azure region.
 * @param operationId - The ID of an ongoing async operation.
 */
export const OperationStatusesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OperationStatusesGetInput,
    outputSchema: OperationStatusesGetOutput,
  }),
);
// Input Schema
export interface ServiceEndpointsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  serviceEndpointName: string;
  properties?: {
    preAllocatedCapacity?: number;
    pairedLocation?: string;
    url?: string;
    provisioningState?: string;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ServiceEndpointsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    serviceEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        preAllocatedCapacity: Schema.optional(Schema.Number),
        pairedLocation: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts/{accountName}/serviceEndpoints/{serviceEndpointName}",
      apiVersion: "2022-02-01",
    }),
  ) as unknown as Schema.Codec<ServiceEndpointsCreateOrUpdateInput>;

// Output Schema
export interface ServiceEndpointsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ServiceEndpointsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServiceEndpointsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates ServiceEndpoint resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the RecommendationsService Account resource.
 * @param serviceEndpointName - The name of the ServiceEndpoint resource.
 */
export const ServiceEndpointsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceEndpointsCreateOrUpdateInput,
    outputSchema: ServiceEndpointsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ServiceEndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  serviceEndpointName: string;
}
export const ServiceEndpointsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    serviceEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts/{accountName}/serviceEndpoints/{serviceEndpointName}",
      apiVersion: "2022-02-01",
    }),
  ) as unknown as Schema.Codec<ServiceEndpointsDeleteInput>;

// Output Schema
export type ServiceEndpointsDeleteOutput = void;
export const ServiceEndpointsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServiceEndpointsDeleteOutput>;

// The operation
/**
 * Deletes ServiceEndpoint resources of a given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the RecommendationsService Account resource.
 * @param serviceEndpointName - The name of the ServiceEndpoint resource.
 */
export const ServiceEndpointsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceEndpointsDeleteInput,
    outputSchema: ServiceEndpointsDeleteOutput,
  }),
);
// Input Schema
export interface ServiceEndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  serviceEndpointName: string;
}
export const ServiceEndpointsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    serviceEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts/{accountName}/serviceEndpoints/{serviceEndpointName}",
      apiVersion: "2022-02-01",
    }),
  ) as unknown as Schema.Codec<ServiceEndpointsGetInput>;

// Output Schema
export interface ServiceEndpointsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ServiceEndpointsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServiceEndpointsGetOutput>;

// The operation
/**
 * Returns ServiceEndpoint resources for a given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the RecommendationsService Account resource.
 * @param serviceEndpointName - The name of the ServiceEndpoint resource.
 */
export const ServiceEndpointsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServiceEndpointsGetInput,
  outputSchema: ServiceEndpointsGetOutput,
}));
// Input Schema
export interface ServiceEndpointsListByAccountResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const ServiceEndpointsListByAccountResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts/{accountName}/serviceEndpoints",
      apiVersion: "2022-02-01",
    }),
  ) as unknown as Schema.Codec<ServiceEndpointsListByAccountResourceInput>;

// Output Schema
export interface ServiceEndpointsListByAccountResourceOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string }[];
}
export const ServiceEndpointsListByAccountResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServiceEndpointsListByAccountResourceOutput>;

// The operation
/**
 * Returns list of ServiceEndpoint resources for a given Account name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the RecommendationsService Account resource.
 */
export const ServiceEndpointsListByAccountResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceEndpointsListByAccountResourceInput,
    outputSchema: ServiceEndpointsListByAccountResourceOutput,
  }));
// Input Schema
export interface ServiceEndpointsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  serviceEndpointName: string;
  tags?: Record<string, string>;
}
export const ServiceEndpointsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    serviceEndpointName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecommendationsService/accounts/{accountName}/serviceEndpoints/{serviceEndpointName}",
      apiVersion: "2022-02-01",
    }),
  ) as unknown as Schema.Codec<ServiceEndpointsUpdateInput>;

// Output Schema
export interface ServiceEndpointsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ServiceEndpointsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServiceEndpointsUpdateOutput>;

// The operation
/**
 * Updates ServiceEndpoint resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the RecommendationsService Account resource.
 * @param serviceEndpointName - The name of the ServiceEndpoint resource.
 */
export const ServiceEndpointsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceEndpointsUpdateInput,
    outputSchema: ServiceEndpointsUpdateOutput,
  }),
);
