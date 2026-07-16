/**
 * Azure Servicebus API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DisasterRecoveryConfigsBreakPairingInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
}
export const DisasterRecoveryConfigsBreakPairingInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/breakPairing",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsBreakPairingInput>;

// Output Schema
export type DisasterRecoveryConfigsBreakPairingOutput = void;
export const DisasterRecoveryConfigsBreakPairingOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DisasterRecoveryConfigsBreakPairingOutput>;

// The operation
/**
 * This operation disables the Disaster Recovery and stops replicating changes from primary to secondary namespaces
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param alias - The Disaster Recovery configuration name
 */
export const DisasterRecoveryConfigsBreakPairing =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsBreakPairingInput,
    outputSchema: DisasterRecoveryConfigsBreakPairingOutput,
  }));
// Input Schema
export interface DisasterRecoveryConfigsCheckNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  name: string;
}
export const DisasterRecoveryConfigsCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/CheckNameAvailability",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsCheckNameAvailabilityInput>;

// Output Schema
export interface DisasterRecoveryConfigsCheckNameAvailabilityOutput {
  message?: string;
  nameAvailable?: boolean;
  reason?:
    | "None"
    | "InvalidName"
    | "SubscriptionIsDisabled"
    | "NameInUse"
    | "NameInLockdown"
    | "TooManyNamespaceInCurrentSubscription";
}
export const DisasterRecoveryConfigsCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(
      Schema.Literals([
        "None",
        "InvalidName",
        "SubscriptionIsDisabled",
        "NameInUse",
        "NameInLockdown",
        "TooManyNamespaceInCurrentSubscription",
      ]),
    ),
  }) as unknown as Schema.Codec<DisasterRecoveryConfigsCheckNameAvailabilityOutput>;

// The operation
/**
 * Check the give namespace name availability.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 */
export const DisasterRecoveryConfigsCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsCheckNameAvailabilityInput,
    outputSchema: DisasterRecoveryConfigsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface DisasterRecoveryConfigsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
  properties?: {
    provisioningState?: "Accepted" | "Succeeded" | "Failed";
    pendingReplicationOperationsCount?: number;
    partnerNamespace?: string;
    alternateName?: string;
    role?: "Primary" | "PrimaryNotReplicating" | "Secondary";
  };
  location?: string;
}
export const DisasterRecoveryConfigsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Accepted", "Succeeded", "Failed"]),
        ),
        pendingReplicationOperationsCount: Schema.optional(Schema.Number),
        partnerNamespace: Schema.optional(Schema.String),
        alternateName: Schema.optional(Schema.String),
        role: Schema.optional(
          Schema.Literals(["Primary", "PrimaryNotReplicating", "Secondary"]),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsCreateOrUpdateInput>;

// Output Schema
export interface DisasterRecoveryConfigsCreateOrUpdateOutput {
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
export const DisasterRecoveryConfigsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DisasterRecoveryConfigsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a new Alias(Disaster Recovery configuration)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param alias - The Disaster Recovery configuration name
 */
export const DisasterRecoveryConfigsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsCreateOrUpdateInput,
    outputSchema: DisasterRecoveryConfigsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DisasterRecoveryConfigsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
}
export const DisasterRecoveryConfigsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsDeleteInput>;

// Output Schema
export type DisasterRecoveryConfigsDeleteOutput = void;
export const DisasterRecoveryConfigsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DisasterRecoveryConfigsDeleteOutput>;

// The operation
/**
 * Deletes an Alias(Disaster Recovery configuration)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param alias - The Disaster Recovery configuration name
 */
export const DisasterRecoveryConfigsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsDeleteInput,
    outputSchema: DisasterRecoveryConfigsDeleteOutput,
  }));
// Input Schema
export interface DisasterRecoveryConfigsFailOverInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
  properties?: { IsSafeFailover?: boolean };
}
export const DisasterRecoveryConfigsFailOverInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        IsSafeFailover: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/failover",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsFailOverInput>;

// Output Schema
export type DisasterRecoveryConfigsFailOverOutput = void;
export const DisasterRecoveryConfigsFailOverOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DisasterRecoveryConfigsFailOverOutput>;

// The operation
/**
 * Invokes GEO DR failover and reconfigure the alias to point to the secondary namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param alias - The Disaster Recovery configuration name
 */
export const DisasterRecoveryConfigsFailOver =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsFailOverInput,
    outputSchema: DisasterRecoveryConfigsFailOverOutput,
  }));
// Input Schema
export interface DisasterRecoveryConfigsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
}
export const DisasterRecoveryConfigsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsGetInput>;

// Output Schema
export interface DisasterRecoveryConfigsGetOutput {
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
export const DisasterRecoveryConfigsGetOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DisasterRecoveryConfigsGetOutput>;

// The operation
/**
 * Retrieves Alias(Disaster Recovery configuration) for primary or secondary namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param alias - The Disaster Recovery configuration name
 */
export const DisasterRecoveryConfigsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DisasterRecoveryConfigsGetInput,
  outputSchema: DisasterRecoveryConfigsGetOutput,
}));
// Input Schema
export interface DisasterRecoveryConfigsGetAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
  authorizationRuleName: string;
}
export const DisasterRecoveryConfigsGetAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsGetAuthorizationRuleInput>;

// Output Schema
export interface DisasterRecoveryConfigsGetAuthorizationRuleOutput {
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
export const DisasterRecoveryConfigsGetAuthorizationRuleOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DisasterRecoveryConfigsGetAuthorizationRuleOutput>;

// The operation
/**
 * Gets an authorization rule for a namespace by rule name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param alias - The Disaster Recovery configuration name
 * @param authorizationRuleName - The authorization rule name.
 */
export const DisasterRecoveryConfigsGetAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsGetAuthorizationRuleInput,
    outputSchema: DisasterRecoveryConfigsGetAuthorizationRuleOutput,
  }));
// Input Schema
export interface DisasterRecoveryConfigsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const DisasterRecoveryConfigsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsListInput>;

// Output Schema
export interface DisasterRecoveryConfigsListOutput {
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
export const DisasterRecoveryConfigsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DisasterRecoveryConfigsListOutput>;

// The operation
/**
 * Gets all Alias(Disaster Recovery configurations)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 */
export const DisasterRecoveryConfigsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DisasterRecoveryConfigsListInput,
  outputSchema: DisasterRecoveryConfigsListOutput,
}));
// Input Schema
export interface DisasterRecoveryConfigsListAuthorizationRulesInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
}
export const DisasterRecoveryConfigsListAuthorizationRulesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/authorizationRules",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsListAuthorizationRulesInput>;

// Output Schema
export interface DisasterRecoveryConfigsListAuthorizationRulesOutput {
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
export const DisasterRecoveryConfigsListAuthorizationRulesOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DisasterRecoveryConfigsListAuthorizationRulesOutput>;

// The operation
/**
 * Gets the authorization rules for a namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param alias - The Disaster Recovery configuration name
 */
export const DisasterRecoveryConfigsListAuthorizationRules =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsListAuthorizationRulesInput,
    outputSchema: DisasterRecoveryConfigsListAuthorizationRulesOutput,
  }));
// Input Schema
export interface DisasterRecoveryConfigsListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
  authorizationRuleName: string;
}
export const DisasterRecoveryConfigsListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/authorizationRules/{authorizationRuleName}/listKeys",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsListKeysInput>;

// Output Schema
export interface DisasterRecoveryConfigsListKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  aliasPrimaryConnectionString?: string;
  aliasSecondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const DisasterRecoveryConfigsListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
    aliasPrimaryConnectionString: Schema.optional(Schema.String),
    aliasSecondaryConnectionString: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DisasterRecoveryConfigsListKeysOutput>;

// The operation
/**
 * Gets the primary and secondary connection strings for the namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param alias - The Disaster Recovery configuration name
 * @param authorizationRuleName - The authorization rule name.
 */
export const DisasterRecoveryConfigsListKeys =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsListKeysInput,
    outputSchema: DisasterRecoveryConfigsListKeysOutput,
  }));
// Input Schema
export interface MigrationConfigsCompleteMigrationInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  configName: "$default";
}
export const MigrationConfigsCompleteMigrationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    configName: Schema.Literals(["$default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}/upgrade",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<MigrationConfigsCompleteMigrationInput>;

// Output Schema
export type MigrationConfigsCompleteMigrationOutput = void;
export const MigrationConfigsCompleteMigrationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MigrationConfigsCompleteMigrationOutput>;

// The operation
/**
 * This operation Completes Migration of entities by pointing the connection strings to Premium namespace and any entities created after the operation will be under Premium Namespace. CompleteMigration operation will fail when entity migration is in-progress.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param configName - The configuration name. Should always be $default.
 */
export const MigrationConfigsCompleteMigration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MigrationConfigsCompleteMigrationInput,
    outputSchema: MigrationConfigsCompleteMigrationOutput,
  }));
// Input Schema
export interface MigrationConfigsCreateAndStartMigrationInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  configName: "$default";
  properties?: {
    provisioningState?: string;
    pendingReplicationOperationsCount?: number;
    targetNamespace: string;
    postMigrationName: string;
    migrationState?: string;
  };
  location?: string;
}
export const MigrationConfigsCreateAndStartMigrationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    configName: Schema.Literals(["$default"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        pendingReplicationOperationsCount: Schema.optional(Schema.Number),
        targetNamespace: Schema.String,
        postMigrationName: Schema.String,
        migrationState: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<MigrationConfigsCreateAndStartMigrationInput>;

// Output Schema
export interface MigrationConfigsCreateAndStartMigrationOutput {
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
export const MigrationConfigsCreateAndStartMigrationOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<MigrationConfigsCreateAndStartMigrationOutput>;

// The operation
/**
 * Creates Migration configuration and starts migration of entities from Standard to Premium namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param configName - The configuration name. Should always be $default.
 */
export const MigrationConfigsCreateAndStartMigration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MigrationConfigsCreateAndStartMigrationInput,
    outputSchema: MigrationConfigsCreateAndStartMigrationOutput,
  }));
// Input Schema
export interface MigrationConfigsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  configName: "$default";
}
export const MigrationConfigsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    configName: Schema.Literals(["$default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<MigrationConfigsDeleteInput>;

// Output Schema
export type MigrationConfigsDeleteOutput = void;
export const MigrationConfigsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MigrationConfigsDeleteOutput>;

// The operation
/**
 * Deletes a MigrationConfiguration
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param configName - The configuration name. Should always be $default.
 */
export const MigrationConfigsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: MigrationConfigsDeleteInput,
  outputSchema: MigrationConfigsDeleteOutput,
}));
// Input Schema
export interface MigrationConfigsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  configName: "$default";
}
export const MigrationConfigsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    configName: Schema.Literals(["$default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<MigrationConfigsGetInput>;

// Output Schema
export interface MigrationConfigsGetOutput {
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
export const MigrationConfigsGetOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<MigrationConfigsGetOutput>;

// The operation
/**
 * Retrieves Migration Config
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param configName - The configuration name. Should always be $default.
 */
export const MigrationConfigsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: MigrationConfigsGetInput,
  outputSchema: MigrationConfigsGetOutput,
}));
// Input Schema
export interface MigrationConfigsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const MigrationConfigsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<MigrationConfigsListInput>;

// Output Schema
export interface MigrationConfigsListOutput {
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
export const MigrationConfigsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<MigrationConfigsListOutput>;

// The operation
/**
 * Gets all migrationConfigurations
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 */
export const MigrationConfigsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: MigrationConfigsListInput,
  outputSchema: MigrationConfigsListOutput,
}));
// Input Schema
export interface MigrationConfigsRevertInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  configName: "$default";
}
export const MigrationConfigsRevertInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    configName: Schema.Literals(["$default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}/revert",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<MigrationConfigsRevertInput>;

// Output Schema
export type MigrationConfigsRevertOutput = void;
export const MigrationConfigsRevertOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MigrationConfigsRevertOutput>;

// The operation
/**
 * This operation reverts Migration
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param configName - The configuration name. Should always be $default.
 */
export const MigrationConfigsRevert = /*@__PURE__*/ API.make(() => ({
  inputSchema: MigrationConfigsRevertInput,
  outputSchema: MigrationConfigsRevertOutput,
}));
// Input Schema
export interface NamespacesCheckNameAvailabilityInput {
  subscriptionId: string;
  name: string;
}
export const NamespacesCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceBus/checkNameAvailability",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesCheckNameAvailabilityInput>;

// Output Schema
export interface NamespacesCheckNameAvailabilityOutput {
  message?: string;
  nameAvailable?: boolean;
  reason?:
    | "None"
    | "InvalidName"
    | "SubscriptionIsDisabled"
    | "NameInUse"
    | "NameInLockdown"
    | "TooManyNamespaceInCurrentSubscription";
}
export const NamespacesCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(
      Schema.Literals([
        "None",
        "InvalidName",
        "SubscriptionIsDisabled",
        "NameInUse",
        "NameInLockdown",
        "TooManyNamespaceInCurrentSubscription",
      ]),
    ),
  }) as unknown as Schema.Codec<NamespacesCheckNameAvailabilityOutput>;

// The operation
/**
 * Check the give namespace name availability.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NamespacesCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesCheckNameAvailabilityInput,
    outputSchema: NamespacesCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface NamespacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  properties?: {
    minimumTlsVersion?: "1.0" | "1.1" | "1.2" | "1.3";
    provisioningState?: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
    serviceBusEndpoint?: string;
    metricId?: string;
    zoneRedundant?: boolean;
    encryption?: {
      keyVaultProperties?: {
        keyName?: string;
        keyVaultUri?: string;
        keyVersion?: string;
        identity?: { userAssignedIdentity?: string };
      }[];
      keySource?: "Microsoft.KeyVault";
      requireInfrastructureEncryption?: boolean;
    };
    privateEndpointConnections?: {
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
    disableLocalAuth?: boolean;
    alternateName?: string;
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    premiumMessagingPartitions?: number;
    platformCapabilities?: {
      confidentialCompute?: { mode?: "Disabled" | "Enabled" };
    };
    geoDataReplication?: {
      maxReplicationLagDurationInSeconds?: number;
      locations?: {
        locationName?: string;
        roleType?: "Primary" | "Secondary";
      }[];
    };
    ipAddressType?: "IPv4" | "DualStack";
  };
  sku?: {
    name: "Basic" | "Standard" | "Premium";
    tier?: "Basic" | "Standard" | "Premium";
    capacity?: number;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const NamespacesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        minimumTlsVersion: Schema.optional(
          Schema.Literals(["1.0", "1.1", "1.2", "1.3"]),
        ),
        provisioningState: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        updatedAt: Schema.optional(Schema.String),
        serviceBusEndpoint: Schema.optional(Schema.String),
        metricId: Schema.optional(Schema.String),
        zoneRedundant: Schema.optional(Schema.Boolean),
        encryption: Schema.optional(
          Schema.Struct({
            keyVaultProperties: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  keyName: Schema.optional(Schema.String),
                  keyVaultUri: Schema.optional(Schema.String),
                  keyVersion: Schema.optional(Schema.String),
                  identity: Schema.optional(
                    Schema.Struct({
                      userAssignedIdentity: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            ),
            keySource: Schema.optional(Schema.Literals(["Microsoft.KeyVault"])),
            requireInfrastructureEncryption: Schema.optional(Schema.Boolean),
          }),
        ),
        privateEndpointConnections: Schema.optional(
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
        disableLocalAuth: Schema.optional(Schema.Boolean),
        alternateName: Schema.optional(Schema.String),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
        ),
        premiumMessagingPartitions: Schema.optional(Schema.Number),
        platformCapabilities: Schema.optional(
          Schema.Struct({
            confidentialCompute: Schema.optional(
              Schema.Struct({
                mode: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
              }),
            ),
          }),
        ),
        geoDataReplication: Schema.optional(
          Schema.Struct({
            maxReplicationLagDurationInSeconds: Schema.optional(Schema.Number),
            locations: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  locationName: Schema.optional(Schema.String),
                  roleType: Schema.optional(
                    Schema.Literals(["Primary", "Secondary"]),
                  ),
                }),
              ),
            ),
          }),
        ),
        ipAddressType: Schema.optional(Schema.Literals(["IPv4", "DualStack"])),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["Basic", "Standard", "Premium"]),
        tier: Schema.optional(
          Schema.Literals(["Basic", "Standard", "Premium"]),
        ),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
          ]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesCreateOrUpdateInput>;

// Output Schema
export interface NamespacesCreateOrUpdateOutput {
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
export const NamespacesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NamespacesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 */
export const NamespacesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesCreateOrUpdateInput,
  outputSchema: NamespacesCreateOrUpdateOutput,
}));
// Input Schema
export interface NamespacesCreateOrUpdateAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  authorizationRuleName: string;
  properties?: { rights: ("Manage" | "Send" | "Listen")[] };
  location?: string;
}
export const NamespacesCreateOrUpdateAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        rights: Schema.Array(Schema.Literals(["Manage", "Send", "Listen"])),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesCreateOrUpdateAuthorizationRuleInput>;

// Output Schema
export interface NamespacesCreateOrUpdateAuthorizationRuleOutput {
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
export const NamespacesCreateOrUpdateAuthorizationRuleOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NamespacesCreateOrUpdateAuthorizationRuleOutput>;

// The operation
/**
 * Creates or updates an authorization rule for a namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param authorizationRuleName - The authorization rule name.
 */
export const NamespacesCreateOrUpdateAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesCreateOrUpdateAuthorizationRuleInput,
    outputSchema: NamespacesCreateOrUpdateAuthorizationRuleOutput,
  }));
// Input Schema
export interface NamespacesCreateOrUpdateNetworkRuleSetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  properties?: {
    trustedServiceAccessEnabled?: boolean;
    defaultAction?: "Allow" | "Deny";
    virtualNetworkRules?: {
      subnet?: { id: string };
      ignoreMissingVnetServiceEndpoint?: boolean;
    }[];
    ipRules?: { ipMask?: string; action?: "Allow" }[];
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
  location?: string;
}
export const NamespacesCreateOrUpdateNetworkRuleSetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        trustedServiceAccessEnabled: Schema.optional(Schema.Boolean),
        defaultAction: Schema.optional(Schema.Literals(["Allow", "Deny"])),
        virtualNetworkRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              subnet: Schema.optional(
                Schema.Struct({
                  id: Schema.String,
                }),
              ),
              ignoreMissingVnetServiceEndpoint: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        ipRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipMask: Schema.optional(Schema.String),
              action: Schema.optional(Schema.Literals(["Allow"])),
            }),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/networkRuleSets/default",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesCreateOrUpdateNetworkRuleSetInput>;

// Output Schema
export interface NamespacesCreateOrUpdateNetworkRuleSetOutput {
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
export const NamespacesCreateOrUpdateNetworkRuleSetOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NamespacesCreateOrUpdateNetworkRuleSetOutput>;

// The operation
/**
 * Create or update NetworkRuleSet for a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 */
export const NamespacesCreateOrUpdateNetworkRuleSet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesCreateOrUpdateNetworkRuleSetInput,
    outputSchema: NamespacesCreateOrUpdateNetworkRuleSetOutput,
  }));
// Input Schema
export interface NamespacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<NamespacesDeleteInput>;

// Output Schema
export type NamespacesDeleteOutput = void;
export const NamespacesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespacesDeleteOutput>;

// The operation
/**
 * Deletes an existing namespace. This operation also removes all associated resources under the namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 */
export const NamespacesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesDeleteInput,
  outputSchema: NamespacesDeleteOutput,
}));
// Input Schema
export interface NamespacesDeleteAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  authorizationRuleName: string;
}
export const NamespacesDeleteAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesDeleteAuthorizationRuleInput>;

// Output Schema
export type NamespacesDeleteAuthorizationRuleOutput = void;
export const NamespacesDeleteAuthorizationRuleOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespacesDeleteAuthorizationRuleOutput>;

// The operation
/**
 * Deletes a namespace authorization rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param authorizationRuleName - The authorization rule name.
 */
export const NamespacesDeleteAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesDeleteAuthorizationRuleInput,
    outputSchema: NamespacesDeleteAuthorizationRuleOutput,
  }));
// Input Schema
export interface NamespacesFailoverInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  properties?: { primaryLocation?: string; force?: boolean };
}
export const NamespacesFailoverInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        primaryLocation: Schema.optional(Schema.String),
        force: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/failover",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesFailoverInput>;

// Output Schema
export type NamespacesFailoverOutput = void;
export const NamespacesFailoverOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespacesFailoverOutput>;

// The operation
/**
 * GeoDR Failover
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 */
export const NamespacesFailover = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesFailoverInput,
  outputSchema: NamespacesFailoverOutput,
}));
// Input Schema
export interface NamespacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<NamespacesGetInput>;

// Output Schema
export interface NamespacesGetOutput {
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
export const NamespacesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<NamespacesGetOutput>;

// The operation
/**
 * Gets a description for the specified namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 */
export const NamespacesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesGetInput,
  outputSchema: NamespacesGetOutput,
}));
// Input Schema
export interface NamespacesGetAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  authorizationRuleName: string;
}
export const NamespacesGetAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesGetAuthorizationRuleInput>;

// Output Schema
export interface NamespacesGetAuthorizationRuleOutput {
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
export const NamespacesGetAuthorizationRuleOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NamespacesGetAuthorizationRuleOutput>;

// The operation
/**
 * Gets an authorization rule for a namespace by rule name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param authorizationRuleName - The authorization rule name.
 */
export const NamespacesGetAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesGetAuthorizationRuleInput,
    outputSchema: NamespacesGetAuthorizationRuleOutput,
  }));
// Input Schema
export interface NamespacesGetNetworkRuleSetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesGetNetworkRuleSetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/networkRuleSets/default",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesGetNetworkRuleSetInput>;

// Output Schema
export interface NamespacesGetNetworkRuleSetOutput {
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
export const NamespacesGetNetworkRuleSetOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NamespacesGetNetworkRuleSetOutput>;

// The operation
/**
 * Gets NetworkRuleSet for a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 */
export const NamespacesGetNetworkRuleSet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesGetNetworkRuleSetInput,
  outputSchema: NamespacesGetNetworkRuleSetOutput,
}));
// Input Schema
export interface NamespacesListInput {
  subscriptionId: string;
}
export const NamespacesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceBus/namespaces",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<NamespacesListInput>;

// Output Schema
export interface NamespacesListOutput {
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
export const NamespacesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<NamespacesListOutput>;

// The operation
/**
 * Gets all the available namespaces within the subscription, irrespective of the resource groups.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NamespacesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesListInput,
  outputSchema: NamespacesListOutput,
}));
// Input Schema
export interface NamespacesListAuthorizationRulesInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesListAuthorizationRulesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/AuthorizationRules",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesListAuthorizationRulesInput>;

// Output Schema
export interface NamespacesListAuthorizationRulesOutput {
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
export const NamespacesListAuthorizationRulesOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NamespacesListAuthorizationRulesOutput>;

// The operation
/**
 * Gets the authorization rules for a namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 */
export const NamespacesListAuthorizationRules =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesListAuthorizationRulesInput,
    outputSchema: NamespacesListAuthorizationRulesOutput,
  }));
// Input Schema
export interface NamespacesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const NamespacesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesListByResourceGroupInput>;

// Output Schema
export interface NamespacesListByResourceGroupOutput {
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
export const NamespacesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NamespacesListByResourceGroupOutput>;

// The operation
/**
 * Gets the available namespaces within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NamespacesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesListByResourceGroupInput,
    outputSchema: NamespacesListByResourceGroupOutput,
  }));
// Input Schema
export interface NamespacesListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  authorizationRuleName: string;
}
export const NamespacesListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName}/listKeys",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesListKeysInput>;

// Output Schema
export interface NamespacesListKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  aliasPrimaryConnectionString?: string;
  aliasSecondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const NamespacesListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
    aliasPrimaryConnectionString: Schema.optional(Schema.String),
    aliasSecondaryConnectionString: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespacesListKeysOutput>;

// The operation
/**
 * Gets the primary and secondary connection strings for the namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param authorizationRuleName - The authorization rule name.
 */
export const NamespacesListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesListKeysInput,
  outputSchema: NamespacesListKeysOutput,
}));
// Input Schema
export interface NamespacesListNetworkRuleSetsInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesListNetworkRuleSetsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/networkRuleSets",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesListNetworkRuleSetsInput>;

// Output Schema
export interface NamespacesListNetworkRuleSetsOutput {
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
export const NamespacesListNetworkRuleSetsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NamespacesListNetworkRuleSetsOutput>;

// The operation
/**
 * Gets list of NetworkRuleSet for a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 */
export const NamespacesListNetworkRuleSets =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesListNetworkRuleSetsInput,
    outputSchema: NamespacesListNetworkRuleSetsOutput,
  }));
// Input Schema
export interface NamespacesRegenerateKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  authorizationRuleName: string;
  keyType: "PrimaryKey" | "SecondaryKey";
  key?: string;
}
export const NamespacesRegenerateKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
    keyType: Schema.Literals(["PrimaryKey", "SecondaryKey"]),
    key: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName}/regenerateKeys",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesRegenerateKeysInput>;

// Output Schema
export interface NamespacesRegenerateKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  aliasPrimaryConnectionString?: string;
  aliasSecondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const NamespacesRegenerateKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
    aliasPrimaryConnectionString: Schema.optional(Schema.String),
    aliasSecondaryConnectionString: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespacesRegenerateKeysOutput>;

// The operation
/**
 * Regenerates the primary or secondary connection strings for the namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param authorizationRuleName - The authorization rule name.
 */
export const NamespacesRegenerateKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesRegenerateKeysInput,
  outputSchema: NamespacesRegenerateKeysOutput,
}));
// Input Schema
export interface NamespacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  sku?: {
    name: "Basic" | "Standard" | "Premium";
    tier?: "Basic" | "Standard" | "Premium";
    capacity?: number;
  };
  properties?: {
    provisioningState?: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
    serviceBusEndpoint?: string;
    metricId?: string;
    encryption?: {
      keyVaultProperties?: {
        keyName?: string;
        keyVaultUri?: string;
        keyVersion?: string;
        identity?: { userAssignedIdentity?: string };
      }[];
      keySource?: "Microsoft.KeyVault";
      requireInfrastructureEncryption?: boolean;
    };
    privateEndpointConnections?: {
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
    disableLocalAuth?: boolean;
    alternateName?: string;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  location?: string;
  tags?: Record<string, string>;
}
export const NamespacesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["Basic", "Standard", "Premium"]),
      tier: Schema.optional(Schema.Literals(["Basic", "Standard", "Premium"])),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      createdAt: Schema.optional(Schema.String),
      updatedAt: Schema.optional(Schema.String),
      serviceBusEndpoint: Schema.optional(Schema.String),
      metricId: Schema.optional(Schema.String),
      encryption: Schema.optional(
        Schema.Struct({
          keyVaultProperties: Schema.optional(
            Schema.Array(
              Schema.Struct({
                keyName: Schema.optional(Schema.String),
                keyVaultUri: Schema.optional(Schema.String),
                keyVersion: Schema.optional(Schema.String),
                identity: Schema.optional(
                  Schema.Struct({
                    userAssignedIdentity: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          ),
          keySource: Schema.optional(Schema.Literals(["Microsoft.KeyVault"])),
          requireInfrastructureEncryption: Schema.optional(Schema.Boolean),
        }),
      ),
      privateEndpointConnections: Schema.optional(
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
      disableLocalAuth: Schema.optional(Schema.Boolean),
      alternateName: Schema.optional(Schema.String),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.optional(
        Schema.Literals([
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned, UserAssigned",
          "None",
        ]),
      ),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<NamespacesUpdateInput>;

// Output Schema
export interface NamespacesUpdateOutput {
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
export const NamespacesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<NamespacesUpdateOutput>;

// The operation
/**
 * Updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 */
export const NamespacesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesUpdateInput,
  outputSchema: NamespacesUpdateOutput,
}));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationListInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NetworkSecurityPerimeterConfigurationListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/networkSecurityPerimeterConfigurations",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationListInput>;

// Output Schema
export interface NetworkSecurityPerimeterConfigurationListOutput {
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
export const NetworkSecurityPerimeterConfigurationListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationListOutput>;

// The operation
/**
 * Gets list of current NetworkSecurityPerimeterConfiguration for Namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 */
export const NetworkSecurityPerimeterConfigurationList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationListInput,
    outputSchema: NetworkSecurityPerimeterConfigurationListOutput,
  }));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  resourceAssociationName: string;
}
export const NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    resourceAssociationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/networkSecurityPerimeterConfigurations/{resourceAssociationName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameInput>;

// Output Schema
export interface NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameOutput {
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
export const NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameOutput>;

// The operation
/**
 * Return a NetworkSecurityPerimeterConfigurations resourceAssociationName
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param resourceAssociationName - The ResourceAssociation Name
 */
export const NetworkSecurityPerimeterConfigurationsGetResourceAssociationName =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameInput,
    outputSchema:
      NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameOutput,
  }));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationsReconcileInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  resourceAssociationName: string;
}
export const NetworkSecurityPerimeterConfigurationsReconcileInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    resourceAssociationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/networkSecurityPerimeterConfigurations/{resourceAssociationName}/reconcile",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsReconcileInput>;

// Output Schema
export type NetworkSecurityPerimeterConfigurationsReconcileOutput = void;
export const NetworkSecurityPerimeterConfigurationsReconcileOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsReconcileOutput>;

// The operation
/**
 * Refreshes any information about the association.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param resourceAssociationName - The ResourceAssociation Name
 */
export const NetworkSecurityPerimeterConfigurationsReconcile =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsReconcileInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsReconcileOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ServiceBus/operations",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
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
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
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
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
    };
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed";
  };
  location?: string;
}
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(
              Schema.Literals([
                "Pending",
                "Approved",
                "Rejected",
                "Disconnected",
              ]),
            ),
            description: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
          ]),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOrUpdateOutput {
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
export const PrivateEndpointConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates PrivateEndpointConnections of service namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param privateEndpointConnectionName - The PrivateEndpointConnection name
 */
export const PrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes an existing Private Endpoint Connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param privateEndpointConnectionName - The PrivateEndpointConnection name
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
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
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets a description for the specified Private Endpoint Connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param privateEndpointConnectionName - The PrivateEndpointConnection name
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/privateEndpointConnections",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
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
export const PrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * Gets the available PrivateEndpointConnections within a namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/privateLinkResources",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
  value: {
    properties?: {
      groupId?: string;
      requiredMembers?: string[];
      requiredZoneNames?: string[];
    };
    id?: string;
    name?: string;
    type?: string;
  }[];
  nextLink?: string;
}
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.optional(
          Schema.Struct({
            groupId: Schema.optional(Schema.String),
            requiredMembers: Schema.optional(Schema.Array(Schema.String)),
            requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Gets lists of resources that supports Privatelinks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesGetInput,
  outputSchema: PrivateLinkResourcesGetOutput,
}));
// Input Schema
export interface QueuesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  queueName: string;
  properties?: {
    countDetails?: {
      activeMessageCount?: number;
      deadLetterMessageCount?: number;
      scheduledMessageCount?: number;
      transferMessageCount?: number;
      transferDeadLetterMessageCount?: number;
    };
    createdAt?: string;
    updatedAt?: string;
    accessedAt?: string;
    sizeInBytes?: number;
    messageCount?: number;
    lockDuration?: string;
    maxSizeInMegabytes?: number;
    maxMessageSizeInKilobytes?: number;
    requiresDuplicateDetection?: boolean;
    requiresSession?: boolean;
    defaultMessageTimeToLive?: string;
    deadLetteringOnMessageExpiration?: boolean;
    duplicateDetectionHistoryTimeWindow?: string;
    maxDeliveryCount?: number;
    status?:
      | "Active"
      | "Disabled"
      | "Restoring"
      | "SendDisabled"
      | "ReceiveDisabled"
      | "Creating"
      | "Deleting"
      | "Renaming"
      | "Unknown";
    enableBatchedOperations?: boolean;
    autoDeleteOnIdle?: string;
    enablePartitioning?: boolean;
    enableExpress?: boolean;
    forwardTo?: string;
    forwardDeadLetteredMessagesTo?: string;
    userMetadata?: string;
  };
  location?: string;
}
export const QueuesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    queueName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        countDetails: Schema.optional(
          Schema.Struct({
            activeMessageCount: Schema.optional(Schema.Number),
            deadLetterMessageCount: Schema.optional(Schema.Number),
            scheduledMessageCount: Schema.optional(Schema.Number),
            transferMessageCount: Schema.optional(Schema.Number),
            transferDeadLetterMessageCount: Schema.optional(Schema.Number),
          }),
        ),
        createdAt: Schema.optional(Schema.String),
        updatedAt: Schema.optional(Schema.String),
        accessedAt: Schema.optional(Schema.String),
        sizeInBytes: Schema.optional(Schema.Number),
        messageCount: Schema.optional(Schema.Number),
        lockDuration: Schema.optional(Schema.String),
        maxSizeInMegabytes: Schema.optional(Schema.Number),
        maxMessageSizeInKilobytes: Schema.optional(Schema.Number),
        requiresDuplicateDetection: Schema.optional(Schema.Boolean),
        requiresSession: Schema.optional(Schema.Boolean),
        defaultMessageTimeToLive: Schema.optional(Schema.String),
        deadLetteringOnMessageExpiration: Schema.optional(Schema.Boolean),
        duplicateDetectionHistoryTimeWindow: Schema.optional(Schema.String),
        maxDeliveryCount: Schema.optional(Schema.Number),
        status: Schema.optional(
          Schema.Literals([
            "Active",
            "Disabled",
            "Restoring",
            "SendDisabled",
            "ReceiveDisabled",
            "Creating",
            "Deleting",
            "Renaming",
            "Unknown",
          ]),
        ),
        enableBatchedOperations: Schema.optional(Schema.Boolean),
        autoDeleteOnIdle: Schema.optional(Schema.String),
        enablePartitioning: Schema.optional(Schema.Boolean),
        enableExpress: Schema.optional(Schema.Boolean),
        forwardTo: Schema.optional(Schema.String),
        forwardDeadLetteredMessagesTo: Schema.optional(Schema.String),
        userMetadata: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<QueuesCreateOrUpdateInput>;

// Output Schema
export interface QueuesCreateOrUpdateOutput {
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
export const QueuesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<QueuesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Service Bus queue. This operation is idempotent.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param queueName - The queue name.
 */
export const QueuesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueuesCreateOrUpdateInput,
  outputSchema: QueuesCreateOrUpdateOutput,
}));
// Input Schema
export interface QueuesCreateOrUpdateAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  queueName: string;
  authorizationRuleName: string;
  properties?: { rights: ("Manage" | "Send" | "Listen")[] };
  location?: string;
}
export const QueuesCreateOrUpdateAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    queueName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        rights: Schema.Array(Schema.Literals(["Manage", "Send", "Listen"])),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<QueuesCreateOrUpdateAuthorizationRuleInput>;

// Output Schema
export interface QueuesCreateOrUpdateAuthorizationRuleOutput {
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
export const QueuesCreateOrUpdateAuthorizationRuleOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<QueuesCreateOrUpdateAuthorizationRuleOutput>;

// The operation
/**
 * Creates an authorization rule for a queue.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param queueName - The queue name.
 * @param authorizationRuleName - The authorization rule name.
 */
export const QueuesCreateOrUpdateAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: QueuesCreateOrUpdateAuthorizationRuleInput,
    outputSchema: QueuesCreateOrUpdateAuthorizationRuleOutput,
  }));
// Input Schema
export interface QueuesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  queueName: string;
}
export const QueuesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  queueName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<QueuesDeleteInput>;

// Output Schema
export type QueuesDeleteOutput = void;
export const QueuesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<QueuesDeleteOutput>;

// The operation
/**
 * Deletes a queue from the specified namespace in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param queueName - The queue name.
 */
export const QueuesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueuesDeleteInput,
  outputSchema: QueuesDeleteOutput,
}));
// Input Schema
export interface QueuesDeleteAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  queueName: string;
  authorizationRuleName: string;
}
export const QueuesDeleteAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    queueName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<QueuesDeleteAuthorizationRuleInput>;

// Output Schema
export type QueuesDeleteAuthorizationRuleOutput = void;
export const QueuesDeleteAuthorizationRuleOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<QueuesDeleteAuthorizationRuleOutput>;

// The operation
/**
 * Deletes a queue authorization rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param queueName - The queue name.
 * @param authorizationRuleName - The authorization rule name.
 */
export const QueuesDeleteAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: QueuesDeleteAuthorizationRuleInput,
    outputSchema: QueuesDeleteAuthorizationRuleOutput,
  }));
// Input Schema
export interface QueuesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  queueName: string;
}
export const QueuesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  queueName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<QueuesGetInput>;

// Output Schema
export interface QueuesGetOutput {
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
export const QueuesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<QueuesGetOutput>;

// The operation
/**
 * Returns a description for the specified queue.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param queueName - The queue name.
 */
export const QueuesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueuesGetInput,
  outputSchema: QueuesGetOutput,
}));
// Input Schema
export interface QueuesGetAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  queueName: string;
  authorizationRuleName: string;
}
export const QueuesGetAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    queueName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<QueuesGetAuthorizationRuleInput>;

// Output Schema
export interface QueuesGetAuthorizationRuleOutput {
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
export const QueuesGetAuthorizationRuleOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<QueuesGetAuthorizationRuleOutput>;

// The operation
/**
 * Gets an authorization rule for a queue by rule name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param queueName - The queue name.
 * @param authorizationRuleName - The authorization rule name.
 */
export const QueuesGetAuthorizationRule = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueuesGetAuthorizationRuleInput,
  outputSchema: QueuesGetAuthorizationRuleOutput,
}));
// Input Schema
export interface QueuesListAuthorizationRulesInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  queueName: string;
}
export const QueuesListAuthorizationRulesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    queueName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<QueuesListAuthorizationRulesInput>;

// Output Schema
export interface QueuesListAuthorizationRulesOutput {
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
export const QueuesListAuthorizationRulesOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<QueuesListAuthorizationRulesOutput>;

// The operation
/**
 * Gets all authorization rules for a queue.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param queueName - The queue name.
 */
export const QueuesListAuthorizationRules =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: QueuesListAuthorizationRulesInput,
    outputSchema: QueuesListAuthorizationRulesOutput,
  }));
// Input Schema
export interface QueuesListByNamespaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  $skip?: number;
  $top?: number;
}
export const QueuesListByNamespaceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.Number),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<QueuesListByNamespaceInput>;

// Output Schema
export interface QueuesListByNamespaceOutput {
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
export const QueuesListByNamespaceOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<QueuesListByNamespaceOutput>;

// The operation
/**
 * Gets the queues within a namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param $skip - Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
 * @param $top - May be used to limit the number of results to the most recent N usageDetails.
 */
export const QueuesListByNamespace = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueuesListByNamespaceInput,
  outputSchema: QueuesListByNamespaceOutput,
}));
// Input Schema
export interface QueuesListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  queueName: string;
  authorizationRuleName: string;
}
export const QueuesListKeysInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  queueName: Schema.String.pipe(T.PathParam()),
  authorizationRuleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName}/listKeys",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<QueuesListKeysInput>;

// Output Schema
export interface QueuesListKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  aliasPrimaryConnectionString?: string;
  aliasSecondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const QueuesListKeysOutput = /*@__PURE__*/ Schema.Struct({
  primaryConnectionString: Schema.optional(Schema.String),
  secondaryConnectionString: Schema.optional(Schema.String),
  aliasPrimaryConnectionString: Schema.optional(Schema.String),
  aliasSecondaryConnectionString: Schema.optional(Schema.String),
  primaryKey: Schema.optional(Schema.String),
  secondaryKey: Schema.optional(Schema.String),
  keyName: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<QueuesListKeysOutput>;

// The operation
/**
 * Primary and secondary connection strings to the queue.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param queueName - The queue name.
 * @param authorizationRuleName - The authorization rule name.
 */
export const QueuesListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueuesListKeysInput,
  outputSchema: QueuesListKeysOutput,
}));
// Input Schema
export interface QueuesRegenerateKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  queueName: string;
  authorizationRuleName: string;
  keyType: "PrimaryKey" | "SecondaryKey";
  key?: string;
}
export const QueuesRegenerateKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    queueName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
    keyType: Schema.Literals(["PrimaryKey", "SecondaryKey"]),
    key: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName}/regenerateKeys",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<QueuesRegenerateKeysInput>;

// Output Schema
export interface QueuesRegenerateKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  aliasPrimaryConnectionString?: string;
  aliasSecondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const QueuesRegenerateKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
    aliasPrimaryConnectionString: Schema.optional(Schema.String),
    aliasSecondaryConnectionString: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<QueuesRegenerateKeysOutput>;

// The operation
/**
 * Regenerates the primary or secondary connection strings to the queue.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param queueName - The queue name.
 * @param authorizationRuleName - The authorization rule name.
 */
export const QueuesRegenerateKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueuesRegenerateKeysInput,
  outputSchema: QueuesRegenerateKeysOutput,
}));
// Input Schema
export interface RulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  subscriptionName: string;
  ruleName: string;
  properties?: {
    action?: {
      sqlExpression?: string;
      compatibilityLevel?: number;
      requiresPreprocessing?: boolean;
    };
    filterType?: "SqlFilter" | "CorrelationFilter";
    sqlFilter?: {
      sqlExpression?: string;
      compatibilityLevel?: number;
      requiresPreprocessing?: boolean;
    };
    correlationFilter?: {
      properties?: Record<string, string>;
      correlationId?: string;
      messageId?: string;
      to?: string;
      replyTo?: string;
      label?: string;
      sessionId?: string;
      replyToSessionId?: string;
      contentType?: string;
      requiresPreprocessing?: boolean;
    };
  };
  location?: string;
}
export const RulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    subscriptionName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        action: Schema.optional(
          Schema.Struct({
            sqlExpression: Schema.optional(Schema.String),
            compatibilityLevel: Schema.optional(Schema.Number),
            requiresPreprocessing: Schema.optional(Schema.Boolean),
          }),
        ),
        filterType: Schema.optional(
          Schema.Literals(["SqlFilter", "CorrelationFilter"]),
        ),
        sqlFilter: Schema.optional(
          Schema.Struct({
            sqlExpression: Schema.optional(Schema.String),
            compatibilityLevel: Schema.optional(Schema.Number),
            requiresPreprocessing: Schema.optional(Schema.Boolean),
          }),
        ),
        correlationFilter: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            correlationId: Schema.optional(Schema.String),
            messageId: Schema.optional(Schema.String),
            to: Schema.optional(Schema.String),
            replyTo: Schema.optional(Schema.String),
            label: Schema.optional(Schema.String),
            sessionId: Schema.optional(Schema.String),
            replyToSessionId: Schema.optional(Schema.String),
            contentType: Schema.optional(Schema.String),
            requiresPreprocessing: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules/{ruleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<RulesCreateOrUpdateInput>;

// Output Schema
export interface RulesCreateOrUpdateOutput {
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
export const RulesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<RulesCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new rule and updates an existing rule
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 * @param subscriptionName - The subscription name.
 * @param ruleName - The rule name.
 */
export const RulesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RulesCreateOrUpdateInput,
  outputSchema: RulesCreateOrUpdateOutput,
}));
// Input Schema
export interface RulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  subscriptionName: string;
  ruleName: string;
}
export const RulesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  topicName: Schema.String.pipe(T.PathParam()),
  subscriptionName: Schema.String.pipe(T.PathParam()),
  ruleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules/{ruleName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<RulesDeleteInput>;

// Output Schema
export type RulesDeleteOutput = void;
export const RulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RulesDeleteOutput>;

// The operation
/**
 * Deletes an existing rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 * @param subscriptionName - The subscription name.
 * @param ruleName - The rule name.
 */
export const RulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RulesDeleteInput,
  outputSchema: RulesDeleteOutput,
}));
// Input Schema
export interface RulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  subscriptionName: string;
  ruleName: string;
}
export const RulesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  topicName: Schema.String.pipe(T.PathParam()),
  subscriptionName: Schema.String.pipe(T.PathParam()),
  ruleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules/{ruleName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<RulesGetInput>;

// Output Schema
export interface RulesGetOutput {
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
export const RulesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RulesGetOutput>;

// The operation
/**
 * Retrieves the description for the specified rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 * @param subscriptionName - The subscription name.
 * @param ruleName - The rule name.
 */
export const RulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RulesGetInput,
  outputSchema: RulesGetOutput,
}));
// Input Schema
export interface RulesListBySubscriptionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  subscriptionName: string;
  $skip?: number;
  $top?: number;
}
export const RulesListBySubscriptionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    subscriptionName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.Number),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<RulesListBySubscriptionsInput>;

// Output Schema
export interface RulesListBySubscriptionsOutput {
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
export const RulesListBySubscriptionsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<RulesListBySubscriptionsOutput>;

// The operation
/**
 * List all the rules within given topic-subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 * @param subscriptionName - The subscription name.
 * @param $skip - Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
 * @param $top - May be used to limit the number of results to the most recent N usageDetails.
 */
export const RulesListBySubscriptions = /*@__PURE__*/ API.make(() => ({
  inputSchema: RulesListBySubscriptionsInput,
  outputSchema: RulesListBySubscriptionsOutput,
}));
// Input Schema
export interface SubscriptionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  subscriptionName: string;
  properties?: {
    messageCount?: number;
    createdAt?: string;
    accessedAt?: string;
    updatedAt?: string;
    countDetails?: {
      activeMessageCount?: number;
      deadLetterMessageCount?: number;
      scheduledMessageCount?: number;
      transferMessageCount?: number;
      transferDeadLetterMessageCount?: number;
    };
    lockDuration?: string;
    requiresSession?: boolean;
    defaultMessageTimeToLive?: string;
    deadLetteringOnFilterEvaluationExceptions?: boolean;
    deadLetteringOnMessageExpiration?: boolean;
    duplicateDetectionHistoryTimeWindow?: string;
    maxDeliveryCount?: number;
    status?:
      | "Active"
      | "Disabled"
      | "Restoring"
      | "SendDisabled"
      | "ReceiveDisabled"
      | "Creating"
      | "Deleting"
      | "Renaming"
      | "Unknown";
    enableBatchedOperations?: boolean;
    autoDeleteOnIdle?: string;
    forwardTo?: string;
    forwardDeadLetteredMessagesTo?: string;
    isClientAffine?: boolean;
    userMetadata?: string;
    clientAffineProperties?: {
      clientId?: string;
      isDurable?: boolean;
      isShared?: boolean;
    };
  };
  location?: string;
}
export const SubscriptionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    subscriptionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        messageCount: Schema.optional(Schema.Number),
        createdAt: Schema.optional(Schema.String),
        accessedAt: Schema.optional(Schema.String),
        updatedAt: Schema.optional(Schema.String),
        countDetails: Schema.optional(
          Schema.Struct({
            activeMessageCount: Schema.optional(Schema.Number),
            deadLetterMessageCount: Schema.optional(Schema.Number),
            scheduledMessageCount: Schema.optional(Schema.Number),
            transferMessageCount: Schema.optional(Schema.Number),
            transferDeadLetterMessageCount: Schema.optional(Schema.Number),
          }),
        ),
        lockDuration: Schema.optional(Schema.String),
        requiresSession: Schema.optional(Schema.Boolean),
        defaultMessageTimeToLive: Schema.optional(Schema.String),
        deadLetteringOnFilterEvaluationExceptions: Schema.optional(
          Schema.Boolean,
        ),
        deadLetteringOnMessageExpiration: Schema.optional(Schema.Boolean),
        duplicateDetectionHistoryTimeWindow: Schema.optional(Schema.String),
        maxDeliveryCount: Schema.optional(Schema.Number),
        status: Schema.optional(
          Schema.Literals([
            "Active",
            "Disabled",
            "Restoring",
            "SendDisabled",
            "ReceiveDisabled",
            "Creating",
            "Deleting",
            "Renaming",
            "Unknown",
          ]),
        ),
        enableBatchedOperations: Schema.optional(Schema.Boolean),
        autoDeleteOnIdle: Schema.optional(Schema.String),
        forwardTo: Schema.optional(Schema.String),
        forwardDeadLetteredMessagesTo: Schema.optional(Schema.String),
        isClientAffine: Schema.optional(Schema.Boolean),
        userMetadata: Schema.optional(Schema.String),
        clientAffineProperties: Schema.optional(
          Schema.Struct({
            clientId: Schema.optional(Schema.String),
            isDurable: Schema.optional(Schema.Boolean),
            isShared: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionsCreateOrUpdateInput>;

// Output Schema
export interface SubscriptionsCreateOrUpdateOutput {
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
export const SubscriptionsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SubscriptionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a topic subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 * @param subscriptionName - The subscription name.
 */
export const SubscriptionsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SubscriptionsCreateOrUpdateInput,
  outputSchema: SubscriptionsCreateOrUpdateOutput,
}));
// Input Schema
export interface SubscriptionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  subscriptionName: string;
}
export const SubscriptionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    subscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionsDeleteInput>;

// Output Schema
export type SubscriptionsDeleteOutput = void;
export const SubscriptionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SubscriptionsDeleteOutput>;

// The operation
/**
 * Deletes a subscription from the specified topic.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 * @param subscriptionName - The subscription name.
 */
export const SubscriptionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SubscriptionsDeleteInput,
  outputSchema: SubscriptionsDeleteOutput,
}));
// Input Schema
export interface SubscriptionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  subscriptionName: string;
}
export const SubscriptionsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  topicName: Schema.String.pipe(T.PathParam()),
  subscriptionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<SubscriptionsGetInput>;

// Output Schema
export interface SubscriptionsGetOutput {
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
export const SubscriptionsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SubscriptionsGetOutput>;

// The operation
/**
 * Returns a subscription description for the specified topic.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 * @param subscriptionName - The subscription name.
 */
export const SubscriptionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SubscriptionsGetInput,
  outputSchema: SubscriptionsGetOutput,
}));
// Input Schema
export interface SubscriptionsListByTopicInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  $skip?: number;
  $top?: number;
}
export const SubscriptionsListByTopicInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.Number),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionsListByTopicInput>;

// Output Schema
export interface SubscriptionsListByTopicOutput {
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
export const SubscriptionsListByTopicOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SubscriptionsListByTopicOutput>;

// The operation
/**
 * List all the subscriptions under a specified topic.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 * @param $skip - Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
 * @param $top - May be used to limit the number of results to the most recent N usageDetails.
 */
export const SubscriptionsListByTopic = /*@__PURE__*/ API.make(() => ({
  inputSchema: SubscriptionsListByTopicInput,
  outputSchema: SubscriptionsListByTopicOutput,
}));
// Input Schema
export interface TopicsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  properties?: {
    sizeInBytes?: number;
    createdAt?: string;
    updatedAt?: string;
    accessedAt?: string;
    subscriptionCount?: number;
    countDetails?: {
      activeMessageCount?: number;
      deadLetterMessageCount?: number;
      scheduledMessageCount?: number;
      transferMessageCount?: number;
      transferDeadLetterMessageCount?: number;
    };
    defaultMessageTimeToLive?: string;
    maxSizeInMegabytes?: number;
    maxMessageSizeInKilobytes?: number;
    requiresDuplicateDetection?: boolean;
    duplicateDetectionHistoryTimeWindow?: string;
    enableBatchedOperations?: boolean;
    status?:
      | "Active"
      | "Disabled"
      | "Restoring"
      | "SendDisabled"
      | "ReceiveDisabled"
      | "Creating"
      | "Deleting"
      | "Renaming"
      | "Unknown";
    supportOrdering?: boolean;
    autoDeleteOnIdle?: string;
    enablePartitioning?: boolean;
    enableExpress?: boolean;
    userMetadata?: string;
  };
  location?: string;
}
export const TopicsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        sizeInBytes: Schema.optional(Schema.Number),
        createdAt: Schema.optional(Schema.String),
        updatedAt: Schema.optional(Schema.String),
        accessedAt: Schema.optional(Schema.String),
        subscriptionCount: Schema.optional(Schema.Number),
        countDetails: Schema.optional(
          Schema.Struct({
            activeMessageCount: Schema.optional(Schema.Number),
            deadLetterMessageCount: Schema.optional(Schema.Number),
            scheduledMessageCount: Schema.optional(Schema.Number),
            transferMessageCount: Schema.optional(Schema.Number),
            transferDeadLetterMessageCount: Schema.optional(Schema.Number),
          }),
        ),
        defaultMessageTimeToLive: Schema.optional(Schema.String),
        maxSizeInMegabytes: Schema.optional(Schema.Number),
        maxMessageSizeInKilobytes: Schema.optional(Schema.Number),
        requiresDuplicateDetection: Schema.optional(Schema.Boolean),
        duplicateDetectionHistoryTimeWindow: Schema.optional(Schema.String),
        enableBatchedOperations: Schema.optional(Schema.Boolean),
        status: Schema.optional(
          Schema.Literals([
            "Active",
            "Disabled",
            "Restoring",
            "SendDisabled",
            "ReceiveDisabled",
            "Creating",
            "Deleting",
            "Renaming",
            "Unknown",
          ]),
        ),
        supportOrdering: Schema.optional(Schema.Boolean),
        autoDeleteOnIdle: Schema.optional(Schema.String),
        enablePartitioning: Schema.optional(Schema.Boolean),
        enableExpress: Schema.optional(Schema.Boolean),
        userMetadata: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<TopicsCreateOrUpdateInput>;

// Output Schema
export interface TopicsCreateOrUpdateOutput {
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
export const TopicsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<TopicsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a topic in the specified namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 */
export const TopicsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TopicsCreateOrUpdateInput,
  outputSchema: TopicsCreateOrUpdateOutput,
}));
// Input Schema
export interface TopicsCreateOrUpdateAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  authorizationRuleName: string;
  properties?: { rights: ("Manage" | "Send" | "Listen")[] };
  location?: string;
}
export const TopicsCreateOrUpdateAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        rights: Schema.Array(Schema.Literals(["Manage", "Send", "Listen"])),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<TopicsCreateOrUpdateAuthorizationRuleInput>;

// Output Schema
export interface TopicsCreateOrUpdateAuthorizationRuleOutput {
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
export const TopicsCreateOrUpdateAuthorizationRuleOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<TopicsCreateOrUpdateAuthorizationRuleOutput>;

// The operation
/**
 * Creates an authorization rule for the specified topic.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 * @param authorizationRuleName - The authorization rule name.
 */
export const TopicsCreateOrUpdateAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TopicsCreateOrUpdateAuthorizationRuleInput,
    outputSchema: TopicsCreateOrUpdateAuthorizationRuleOutput,
  }));
// Input Schema
export interface TopicsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
}
export const TopicsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  topicName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<TopicsDeleteInput>;

// Output Schema
export type TopicsDeleteOutput = void;
export const TopicsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TopicsDeleteOutput>;

// The operation
/**
 * Deletes a topic from the specified namespace and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 */
export const TopicsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: TopicsDeleteInput,
  outputSchema: TopicsDeleteOutput,
}));
// Input Schema
export interface TopicsDeleteAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  authorizationRuleName: string;
}
export const TopicsDeleteAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<TopicsDeleteAuthorizationRuleInput>;

// Output Schema
export type TopicsDeleteAuthorizationRuleOutput = void;
export const TopicsDeleteAuthorizationRuleOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TopicsDeleteAuthorizationRuleOutput>;

// The operation
/**
 * Deletes a topic authorization rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 * @param authorizationRuleName - The authorization rule name.
 */
export const TopicsDeleteAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TopicsDeleteAuthorizationRuleInput,
    outputSchema: TopicsDeleteAuthorizationRuleOutput,
  }));
// Input Schema
export interface TopicsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
}
export const TopicsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  topicName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<TopicsGetInput>;

// Output Schema
export interface TopicsGetOutput {
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
export const TopicsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TopicsGetOutput>;

// The operation
/**
 * Returns a description for the specified topic.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 */
export const TopicsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: TopicsGetInput,
  outputSchema: TopicsGetOutput,
}));
// Input Schema
export interface TopicsGetAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  authorizationRuleName: string;
}
export const TopicsGetAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<TopicsGetAuthorizationRuleInput>;

// Output Schema
export interface TopicsGetAuthorizationRuleOutput {
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
export const TopicsGetAuthorizationRuleOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<TopicsGetAuthorizationRuleOutput>;

// The operation
/**
 * Returns the specified authorization rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 * @param authorizationRuleName - The authorization rule name.
 */
export const TopicsGetAuthorizationRule = /*@__PURE__*/ API.make(() => ({
  inputSchema: TopicsGetAuthorizationRuleInput,
  outputSchema: TopicsGetAuthorizationRuleOutput,
}));
// Input Schema
export interface TopicsListAuthorizationRulesInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
}
export const TopicsListAuthorizationRulesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<TopicsListAuthorizationRulesInput>;

// Output Schema
export interface TopicsListAuthorizationRulesOutput {
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
export const TopicsListAuthorizationRulesOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<TopicsListAuthorizationRulesOutput>;

// The operation
/**
 * Gets authorization rules for a topic.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 */
export const TopicsListAuthorizationRules =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TopicsListAuthorizationRulesInput,
    outputSchema: TopicsListAuthorizationRulesOutput,
  }));
// Input Schema
export interface TopicsListByNamespaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  $skip?: number;
  $top?: number;
}
export const TopicsListByNamespaceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.Number),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<TopicsListByNamespaceInput>;

// Output Schema
export interface TopicsListByNamespaceOutput {
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
export const TopicsListByNamespaceOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<TopicsListByNamespaceOutput>;

// The operation
/**
 * Gets all the topics in a namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param $skip - Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
 * @param $top - May be used to limit the number of results to the most recent N usageDetails.
 */
export const TopicsListByNamespace = /*@__PURE__*/ API.make(() => ({
  inputSchema: TopicsListByNamespaceInput,
  outputSchema: TopicsListByNamespaceOutput,
}));
// Input Schema
export interface TopicsListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  authorizationRuleName: string;
}
export const TopicsListKeysInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  topicName: Schema.String.pipe(T.PathParam()),
  authorizationRuleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}/listKeys",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<TopicsListKeysInput>;

// Output Schema
export interface TopicsListKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  aliasPrimaryConnectionString?: string;
  aliasSecondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const TopicsListKeysOutput = /*@__PURE__*/ Schema.Struct({
  primaryConnectionString: Schema.optional(Schema.String),
  secondaryConnectionString: Schema.optional(Schema.String),
  aliasPrimaryConnectionString: Schema.optional(Schema.String),
  aliasSecondaryConnectionString: Schema.optional(Schema.String),
  primaryKey: Schema.optional(Schema.String),
  secondaryKey: Schema.optional(Schema.String),
  keyName: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<TopicsListKeysOutput>;

// The operation
/**
 * Gets the primary and secondary connection strings for the topic.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 * @param authorizationRuleName - The authorization rule name.
 */
export const TopicsListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: TopicsListKeysInput,
  outputSchema: TopicsListKeysOutput,
}));
// Input Schema
export interface TopicsRegenerateKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  authorizationRuleName: string;
  keyType: "PrimaryKey" | "SecondaryKey";
  key?: string;
}
export const TopicsRegenerateKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
    keyType: Schema.Literals(["PrimaryKey", "SecondaryKey"]),
    key: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}/regenerateKeys",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<TopicsRegenerateKeysInput>;

// Output Schema
export interface TopicsRegenerateKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  aliasPrimaryConnectionString?: string;
  aliasSecondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const TopicsRegenerateKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
    aliasPrimaryConnectionString: Schema.optional(Schema.String),
    aliasSecondaryConnectionString: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TopicsRegenerateKeysOutput>;

// The operation
/**
 * Regenerates primary or secondary connection strings for the topic.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The namespace name
 * @param topicName - The topic name.
 * @param authorizationRuleName - The authorization rule name.
 */
export const TopicsRegenerateKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: TopicsRegenerateKeysInput,
  outputSchema: TopicsRegenerateKeysOutput,
}));
