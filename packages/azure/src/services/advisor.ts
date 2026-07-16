/**
 * Azure Advisor API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AdvisorScoresGetInput {
  subscriptionId: string;
  name: string;
}
export const AdvisorScoresGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/advisorScore/{name}",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<AdvisorScoresGetInput>;

// Output Schema
export interface AdvisorScoresGetOutput {
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
export const AdvisorScoresGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AdvisorScoresGetOutput>;

// The operation
/**
 * Gets the advisor score.
 *
 * @param subscriptionId - The Azure subscription ID.
 * @param name - The scope of Advisor score entity.
 * @param api-version - The version of the API to be used with the client request.
 */
export const AdvisorScoresGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AdvisorScoresGetInput,
  outputSchema: AdvisorScoresGetOutput,
}));
// Input Schema
export interface AdvisorScoresListInput {
  subscriptionId: string;
}
export const AdvisorScoresListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/advisorScore",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<AdvisorScoresListInput>;

// Output Schema
export interface AdvisorScoresListOutput {
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
}
export const AdvisorScoresListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AdvisorScoresListOutput>;

// The operation
/**
 * Gets the list of advisor scores.
 *
 * @param subscriptionId - The Azure subscription ID.
 * @param api-version - The version of the API to be used with the client request.
 */
export const AdvisorScoresList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AdvisorScoresListInput,
  outputSchema: AdvisorScoresListOutput,
}));
// Input Schema
export interface ConfigurationsCreateInResourceGroupInput {
  subscriptionId: string;
  configurationName: "default";
  resourceGroup: string;
  properties?: {
    exclude?: boolean;
    lowCpuThreshold?: "5" | "10" | "15" | "20";
    duration?: "7" | "14" | "21" | "30" | "60" | "90";
    digests?: {
      name?: string;
      actionGroupResourceId?: string;
      frequency?: number;
      categories?: (
        | "HighAvailability"
        | "Security"
        | "Performance"
        | "Cost"
        | "OperationalExcellence"
      )[];
      language?: string;
      state?: "Active" | "Disabled";
    }[];
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
export const ConfigurationsCreateInResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.Literals(["default"]).pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        exclude: Schema.optional(Schema.Boolean),
        lowCpuThreshold: Schema.optional(
          Schema.Literals(["5", "10", "15", "20"]),
        ),
        duration: Schema.optional(
          Schema.Literals(["7", "14", "21", "30", "60", "90"]),
        ),
        digests: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              actionGroupResourceId: Schema.optional(Schema.String),
              frequency: Schema.optional(Schema.Number),
              categories: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "HighAvailability",
                    "Security",
                    "Performance",
                    "Cost",
                    "OperationalExcellence",
                  ]),
                ),
              ),
              language: Schema.optional(Schema.String),
              state: Schema.optional(Schema.Literals(["Active", "Disabled"])),
            }),
          ),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Advisor/configurations/{configurationName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationsCreateInResourceGroupInput>;

// Output Schema
export interface ConfigurationsCreateInResourceGroupOutput {
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
export const ConfigurationsCreateInResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ConfigurationsCreateInResourceGroupOutput>;

// The operation
/**
 * Create/Overwrite Azure Advisor configuration.
 *
 * @param api-version - The version of the API to be used with the client request.
 * @param subscriptionId - The Azure subscription ID.
 * @param configurationName - Advisor configuration name. Value must be 'default'
 * @param resourceGroup - The name of the Azure resource group.
 */
export const ConfigurationsCreateInResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationsCreateInResourceGroupInput,
    outputSchema: ConfigurationsCreateInResourceGroupOutput,
  }));
// Input Schema
export interface ConfigurationsCreateInSubscriptionInput {
  subscriptionId: string;
  configurationName: "default";
  properties?: {
    exclude?: boolean;
    lowCpuThreshold?: "5" | "10" | "15" | "20";
    duration?: "7" | "14" | "21" | "30" | "60" | "90";
    digests?: {
      name?: string;
      actionGroupResourceId?: string;
      frequency?: number;
      categories?: (
        | "HighAvailability"
        | "Security"
        | "Performance"
        | "Cost"
        | "OperationalExcellence"
      )[];
      language?: string;
      state?: "Active" | "Disabled";
    }[];
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
export const ConfigurationsCreateInSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.Literals(["default"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        exclude: Schema.optional(Schema.Boolean),
        lowCpuThreshold: Schema.optional(
          Schema.Literals(["5", "10", "15", "20"]),
        ),
        duration: Schema.optional(
          Schema.Literals(["7", "14", "21", "30", "60", "90"]),
        ),
        digests: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              actionGroupResourceId: Schema.optional(Schema.String),
              frequency: Schema.optional(Schema.Number),
              categories: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "HighAvailability",
                    "Security",
                    "Performance",
                    "Cost",
                    "OperationalExcellence",
                  ]),
                ),
              ),
              language: Schema.optional(Schema.String),
              state: Schema.optional(Schema.Literals(["Active", "Disabled"])),
            }),
          ),
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
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/configurations/{configurationName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationsCreateInSubscriptionInput>;

// Output Schema
export interface ConfigurationsCreateInSubscriptionOutput {
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
export const ConfigurationsCreateInSubscriptionOutput =
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
  }) as unknown as Schema.Codec<ConfigurationsCreateInSubscriptionOutput>;

// The operation
/**
 * Create/Overwrite Azure Advisor configuration.
 *
 * Create/Overwrite Azure Advisor configuration and also delete all configurations of contained resource groups.
 *
 * @param api-version - The version of the API to be used with the client request.
 * @param subscriptionId - The Azure subscription ID.
 * @param configurationName - Advisor configuration name. Value must be 'default'
 */
export const ConfigurationsCreateInSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationsCreateInSubscriptionInput,
    outputSchema: ConfigurationsCreateInSubscriptionOutput,
  }));
// Input Schema
export interface ConfigurationsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroup: string;
}
export const ConfigurationsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Advisor/configurations",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationsListByResourceGroupInput>;

// Output Schema
export interface ConfigurationsListByResourceGroupOutput {
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
export const ConfigurationsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ConfigurationsListByResourceGroupOutput>;

// The operation
/**
 * Retrieve Azure Advisor configurations.
 *
 * @param api-version - The version of the API to be used with the client request.
 * @param subscriptionId - The Azure subscription ID.
 * @param resourceGroup - The name of the Azure resource group.
 */
export const ConfigurationsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationsListByResourceGroupInput,
    outputSchema: ConfigurationsListByResourceGroupOutput,
  }));
// Input Schema
export interface ConfigurationsListBySubscriptionInput {
  subscriptionId: string;
}
export const ConfigurationsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/configurations",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationsListBySubscriptionInput>;

// Output Schema
export interface ConfigurationsListBySubscriptionOutput {
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
export const ConfigurationsListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ConfigurationsListBySubscriptionOutput>;

// The operation
/**
 * Retrieve Azure Advisor configurations.
 *
 * Retrieve Azure Advisor configurations and also retrieve configurations of contained resource groups.
 *
 * @param api-version - The version of the API to be used with the client request.
 * @param subscriptionId - The Azure subscription ID.
 */
export const ConfigurationsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationsListBySubscriptionInput,
    outputSchema: ConfigurationsListBySubscriptionOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Advisor/operations",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  nextLink?: string;
  value?: {
    name?: string;
    display?: {
      description?: string;
      operation?: string;
      provider?: string;
      resource?: string;
    };
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all the available Advisor REST API operations.
 *
 * @param api-version - The version of the API to be used with the client request.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PredictInput {
  subscriptionId: string;
  properties?: {
    predictionType?: "PredictiveRightsizing";
    extendedProperties?: unknown;
  };
}
export const PredictInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      predictionType: Schema.optional(
        Schema.Literals(["PredictiveRightsizing"]),
      ),
      extendedProperties: Schema.optional(Schema.Unknown),
    }),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/predict",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<PredictInput>;

// Output Schema
export interface PredictOutput {
  properties?: {
    extendedProperties?: unknown;
    predictionType?: "PredictiveRightsizing";
    category?:
      | "HighAvailability"
      | "Security"
      | "Performance"
      | "Cost"
      | "OperationalExcellence";
    impact?: "High" | "Medium" | "Low";
    impactedField?: string;
    lastUpdated?: string;
    shortDescription?: { problem?: string; solution?: string };
  };
}
export const PredictOutput = /*@__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.Struct({
      extendedProperties: Schema.optional(Schema.Unknown),
      predictionType: Schema.optional(
        Schema.Literals(["PredictiveRightsizing"]),
      ),
      category: Schema.optional(
        Schema.Literals([
          "HighAvailability",
          "Security",
          "Performance",
          "Cost",
          "OperationalExcellence",
        ]),
      ),
      impact: Schema.optional(Schema.Literals(["High", "Medium", "Low"])),
      impactedField: Schema.optional(Schema.String),
      lastUpdated: Schema.optional(Schema.String),
      shortDescription: Schema.optional(
        Schema.Struct({
          problem: Schema.optional(Schema.String),
          solution: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
}) as unknown as Schema.Codec<PredictOutput>;

// The operation
/**
 * Predicts a recommendation.
 *
 * @param subscriptionId - The Azure subscription ID.
 * @param api-version - The version of the API to be used with the client request.
 */
export const Predict = /*@__PURE__*/ API.make(() => ({
  inputSchema: PredictInput,
  outputSchema: PredictOutput,
}));
// Input Schema
export interface RecommendationMetadataGetInput {
  name: string;
}
export const RecommendationMetadataGetInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Advisor/metadata/{name}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<RecommendationMetadataGetInput>;

// Output Schema
export interface RecommendationMetadataGetOutput {
  id?: string;
  type?: string;
  name?: string;
  properties?: {
    displayName?: string;
    dependsOn?: string[];
    applicableScenarios?: "Alerts"[];
    supportedValues?: { id?: string; displayName?: string }[];
  };
}
export const RecommendationMetadataGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        dependsOn: Schema.optional(Schema.Array(Schema.String)),
        applicableScenarios: Schema.optional(
          Schema.Array(Schema.Literals(["Alerts"])),
        ),
        supportedValues: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              displayName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<RecommendationMetadataGetOutput>;

// The operation
/**
 * Gets the metadata entity.
 *
 * @param name - Name of metadata entity.
 * @param api-version - The version of the API to be used with the client request.
 */
export const RecommendationMetadataGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RecommendationMetadataGetInput,
  outputSchema: RecommendationMetadataGetOutput,
}));
// Input Schema
export interface RecommendationMetadataListInput {
  $filter?: string;
}
export const RecommendationMetadataListInput =
  /*@__PURE__*/ Schema.Struct({
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Advisor/metadata",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<RecommendationMetadataListInput>;

// Output Schema
export interface RecommendationMetadataListOutput {
  value?: {
    id?: string;
    type?: string;
    name?: string;
    properties?: {
      displayName?: string;
      dependsOn?: string[];
      applicableScenarios?: "Alerts"[];
      supportedValues?: { id?: string; displayName?: string }[];
    };
  }[];
  nextLink?: string;
}
export const RecommendationMetadataListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              displayName: Schema.optional(Schema.String),
              dependsOn: Schema.optional(Schema.Array(Schema.String)),
              applicableScenarios: Schema.optional(
                Schema.Array(Schema.Literals(["Alerts"])),
              ),
              supportedValues: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RecommendationMetadataListOutput>;

// The operation
/**
 * Gets the list of metadata entities.
 *
 * @param api-version - The version of the API to be used with the client request.
 * @param $filter - The filter to apply to the recommendation metadata.<br>Filter can be applied to properties ['[recommendationCategory](#category)', '[recommendationSubCategory](#recommendationSubCategory)', 'RetirementDate'] with operators ['eq', 'and', 'le', 'ge']<br>The filter can also be applied to property ['[TrackingIds]']<br><br>⚠ **Note:** `recommendationControl` is a legacy filter property and will be deprecated in the future. Please use `recommendationSubCategory` for filtering recommendation subcategory.<br><br>Valid options for recommendationSubCategory: ['BusinessContinuity', 'DisasterRecovery', 'HighAvailability', 'MonitoringAndAlerting', 'Other', 'Personalized', 'PrioritizedRecommendations', 'Scalability', 'ServiceUpgradeAndRetirement', 'Validation']<br><br>Example:<br>- $filter=recommendationCategory eq 'HighAvailability' and recommendationSubCategory eq 'ServiceUpgradeAndRetirement' and retirementDate ge '2024-01-01' and retirementDate le '2028-01-01'. Filter can be applied on trackingIds as well.<br>- $filter=trackingIds/any(t: t eq 'some-guid')<br><br>⚠ **Note:** `trackingIDs` filter can be used for filtering one value at a time. The support to filter multiple values is not currently available. Also the support to add other filters along with `trackingIDs` is not available.
 */
export const RecommendationMetadataList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RecommendationMetadataListInput,
  outputSchema: RecommendationMetadataListOutput,
}));
// Input Schema
export interface RecommendationsGenerateInput {
  subscriptionId: string;
}
export const RecommendationsGenerateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/generateRecommendations",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<RecommendationsGenerateInput>;

// Output Schema
export type RecommendationsGenerateOutput = void;
export const RecommendationsGenerateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RecommendationsGenerateOutput>;

// The operation
/**
 * Initiates the recommendation generation or computation process for a subscription. This operation is asynchronous. The generated recommendations are stored in a cache in the Advisor service.
 *
 * @param subscriptionId - The Azure subscription ID.
 * @param api-version - The version of the API to be used with the client request.
 */
export const RecommendationsGenerate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RecommendationsGenerateInput,
  outputSchema: RecommendationsGenerateOutput,
}));
// Input Schema
export interface RecommendationsGetInput {
  resourceUri: string;
  recommendationId: string;
}
export const RecommendationsGetInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    recommendationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<RecommendationsGetInput>;

// Output Schema
export interface RecommendationsGetOutput {
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
export const RecommendationsGetOutput =
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
  }) as unknown as Schema.Codec<RecommendationsGetOutput>;

// The operation
/**
 * Obtains details of a cached recommendation.
 *
 * @param resourceUri - The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
 * @param recommendationId - The recommendation ID.
 * @param api-version - The version of the API to be used with the client request.
 */
export const RecommendationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RecommendationsGetInput,
  outputSchema: RecommendationsGetOutput,
}));
// Input Schema
export interface RecommendationsGetGenerateStatusInput {
  subscriptionId: string;
  operationId: string;
}
export const RecommendationsGetGenerateStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/generateRecommendations/{operationId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<RecommendationsGetGenerateStatusInput>;

// Output Schema
export type RecommendationsGetGenerateStatusOutput = void;
export const RecommendationsGetGenerateStatusOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RecommendationsGetGenerateStatusOutput>;

// The operation
/**
 * Retrieves the status of the recommendation computation or generation process. Invoke this API after calling the generation recommendation. The URI of this API is returned in the Location field of the response header.
 *
 * @param subscriptionId - The Azure subscription ID.
 * @param operationId - The operation ID, which can be found from the Location field in the generate recommendation response header.
 * @param api-version - The version of the API to be used with the client request.
 */
export const RecommendationsGetGenerateStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RecommendationsGetGenerateStatusInput,
    outputSchema: RecommendationsGetGenerateStatusOutput,
  }));
// Input Schema
export interface RecommendationsListInput {
  subscriptionId: string;
  $filter?: string;
  $top?: number;
  $skipToken?: string;
}
export const RecommendationsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/recommendations",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<RecommendationsListInput>;

// Output Schema
export interface RecommendationsListOutput {
  nextLink?: string;
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
}
export const RecommendationsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RecommendationsListOutput>;

// The operation
/**
 * Obtains cached recommendations for a subscription. The recommendations are generated or computed by invoking generateRecommendations.
 *
 * @param subscriptionId - The Azure subscription ID.
 * @param api-version - The version of the API to be used with the client request.
 * @param $filter - The filter to apply to the recommendations.<br>Filter can be applied to properties ['ResourceId', 'ResourceGroup', 'RecommendationTypeGuid', '[Category](#category)', 'SubCategory', 'RetirementDate'] with operators ['eq', 'and', 'or', 'lt', 'gt', 'le', 'ge'].<br><br>⚠ **Note:** `Control` is a legacy filter property and will be deprecated in the future. Please use `SubCategory` for filtering recommendation subcategory.<br><br>Valid options for SubCategory:<br>['BusinessContinuity', 'DisasterRecovery', 'HighAvailability', 'MonitoringAndAlerting', 'Other', 'Personalized', 'PrioritizedRecommendations', 'Scalability', 'ServiceUpgradeAndRetirement', 'Validation']<br><br>Example:<br>- $filter=Category eq 'Cost' and ResourceGroup eq 'MyResourceGroup'<br>-$filter=SubCategory eq 'ServiceUpgradeAndRetirement' and RetirementDate le '2024-01-01' and RetirementDate ge '2028-01-01'
 * @param $top - The number of recommendations per page if a paged version of this API is being used.
 * @param $skipToken - The page-continuation token to use with a paged version of this API.
 */
export const RecommendationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RecommendationsListInput,
  outputSchema: RecommendationsListOutput,
}));
// Input Schema
export interface SuppressionsCreateInput {
  resourceUri: string;
  recommendationId: string;
  name: string;
  properties?: {
    suppressionId?: string;
    ttl?: string;
    expirationTimeStamp?: string;
  };
  id?: string;
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
export const SuppressionsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    recommendationId: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        suppressionId: Schema.optional(Schema.String),
        ttl: Schema.optional(Schema.String),
        expirationTimeStamp: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
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
      path: "/{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<SuppressionsCreateInput>;

// Output Schema
export interface SuppressionsCreateOutput {
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
export const SuppressionsCreateOutput =
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
  }) as unknown as Schema.Codec<SuppressionsCreateOutput>;

// The operation
/**
 * Enables the snoozed or dismissed attribute of a recommendation. The snoozed or dismissed attribute is referred to as a suppression. Use this API to create or update the snoozed or dismissed status of a recommendation.
 *
 * @param resourceUri - The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
 * @param recommendationId - The recommendation ID.
 * @param name - The name of the suppression.
 * @param api-version - The version of the API to be used with the client request.
 */
export const SuppressionsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SuppressionsCreateInput,
  outputSchema: SuppressionsCreateOutput,
}));
// Input Schema
export interface SuppressionsDeleteInput {
  resourceUri: string;
  recommendationId: string;
  name: string;
}
export const SuppressionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    recommendationId: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<SuppressionsDeleteInput>;

// Output Schema
export type SuppressionsDeleteOutput = void;
export const SuppressionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SuppressionsDeleteOutput>;

// The operation
/**
 * Enables the activation of a snoozed or dismissed recommendation. The snoozed or dismissed attribute of a recommendation is referred to as a suppression.
 *
 * @param resourceUri - The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
 * @param recommendationId - The recommendation ID.
 * @param name - The name of the suppression.
 * @param api-version - The version of the API to be used with the client request.
 */
export const SuppressionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SuppressionsDeleteInput,
  outputSchema: SuppressionsDeleteOutput,
}));
// Input Schema
export interface SuppressionsGetInput {
  resourceUri: string;
  recommendationId: string;
  name: string;
}
export const SuppressionsGetInput = /*@__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  recommendationId: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name}",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<SuppressionsGetInput>;

// Output Schema
export interface SuppressionsGetOutput {
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
export const SuppressionsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SuppressionsGetOutput>;

// The operation
/**
 * Obtains the details of a suppression.
 *
 * @param resourceUri - The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
 * @param recommendationId - The recommendation ID.
 * @param name - The name of the suppression.
 * @param api-version - The version of the API to be used with the client request.
 */
export const SuppressionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SuppressionsGetInput,
  outputSchema: SuppressionsGetOutput,
}));
// Input Schema
export interface SuppressionsListInput {
  subscriptionId: string;
  $top?: number;
  $skipToken?: string;
}
export const SuppressionsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  $top: Schema.optional(Schema.Number),
  $skipToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/suppressions",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<SuppressionsListInput>;

// Output Schema
export interface SuppressionsListOutput {
  nextLink?: string;
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
}
export const SuppressionsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<SuppressionsListOutput>;

// The operation
/**
 * Retrieves the list of snoozed or dismissed suppressions for a subscription. The snoozed or dismissed attribute of a recommendation is referred to as a suppression.
 *
 * @param subscriptionId - The Azure subscription ID.
 * @param api-version - The version of the API to be used with the client request.
 * @param $top - The number of suppressions per page if a paged version of this API is being used.
 * @param $skipToken - The page-continuation token to use with a paged version of this API.
 */
export const SuppressionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SuppressionsListInput,
  outputSchema: SuppressionsListOutput,
}));
