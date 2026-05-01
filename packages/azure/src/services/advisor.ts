/**
 * Azure Advisor API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const AdvisorScoresGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/advisorScore/{name}",
  }),
);
export type AdvisorScoresGetInput = typeof AdvisorScoresGetInput.Type;

// Output Schema
export const AdvisorScoresGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type AdvisorScoresGetOutput = typeof AdvisorScoresGetOutput.Type;

// The operation
/**
 * Gets the advisor score.
 *
 * @param name - The scope of Advisor score entity.
 */
export const AdvisorScoresGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AdvisorScoresGetInput,
  outputSchema: AdvisorScoresGetOutput,
}));
// Input Schema
export const AdvisorScoresListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/advisorScore",
  }),
);
export type AdvisorScoresListInput = typeof AdvisorScoresListInput.Type;

// Output Schema
export const AdvisorScoresListOutput =
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
  });
export type AdvisorScoresListOutput = typeof AdvisorScoresListOutput.Type;

// The operation
/**
 * Gets the list of advisor scores.
 */
export const AdvisorScoresList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AdvisorScoresListInput,
  outputSchema: AdvisorScoresListOutput,
}));
// Input Schema
export const ConfigurationsCreateInResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurationName: Schema.Literals(["default"]).pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Advisor/configurations/{configurationName}",
    }),
  );
export type ConfigurationsCreateInResourceGroupInput =
  typeof ConfigurationsCreateInResourceGroupInput.Type;

// Output Schema
export const ConfigurationsCreateInResourceGroupOutput =
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
export type ConfigurationsCreateInResourceGroupOutput =
  typeof ConfigurationsCreateInResourceGroupOutput.Type;

// The operation
/**
 * Create/Overwrite Azure Advisor configuration.
 *
 * @param configurationName - Advisor configuration name. Value must be 'default'
 * @param resourceGroup - The name of the Azure resource group.
 */
export const ConfigurationsCreateInResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationsCreateInResourceGroupInput,
    outputSchema: ConfigurationsCreateInResourceGroupOutput,
  }));
// Input Schema
export const ConfigurationsCreateInSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurationName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/configurations/{configurationName}",
    }),
  );
export type ConfigurationsCreateInSubscriptionInput =
  typeof ConfigurationsCreateInSubscriptionInput.Type;

// Output Schema
export const ConfigurationsCreateInSubscriptionOutput =
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
export type ConfigurationsCreateInSubscriptionOutput =
  typeof ConfigurationsCreateInSubscriptionOutput.Type;

// The operation
/**
 * Create/Overwrite Azure Advisor configuration.
 *
 * Create/Overwrite Azure Advisor configuration and also delete all configurations of contained resource groups.
 *
 * @param configurationName - Advisor configuration name. Value must be 'default'
 */
export const ConfigurationsCreateInSubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationsCreateInSubscriptionInput,
    outputSchema: ConfigurationsCreateInSubscriptionOutput,
  }));
// Input Schema
export const ConfigurationsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroup: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Advisor/configurations",
    }),
  );
export type ConfigurationsListByResourceGroupInput =
  typeof ConfigurationsListByResourceGroupInput.Type;

// Output Schema
export const ConfigurationsListByResourceGroupOutput =
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
export type ConfigurationsListByResourceGroupOutput =
  typeof ConfigurationsListByResourceGroupOutput.Type;

// The operation
/**
 * Retrieve Azure Advisor configurations.
 *
 * @param resourceGroup - The name of the Azure resource group.
 */
export const ConfigurationsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationsListByResourceGroupInput,
    outputSchema: ConfigurationsListByResourceGroupOutput,
  }));
// Input Schema
export const ConfigurationsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/configurations",
    }),
  );
export type ConfigurationsListBySubscriptionInput =
  typeof ConfigurationsListBySubscriptionInput.Type;

// Output Schema
export const ConfigurationsListBySubscriptionOutput =
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
export type ConfigurationsListBySubscriptionOutput =
  typeof ConfigurationsListBySubscriptionOutput.Type;

// The operation
/**
 * Retrieve Azure Advisor configurations.
 *
 * Retrieve Azure Advisor configurations and also retrieve configurations of contained resource groups.
 */
export const ConfigurationsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationsListBySubscriptionInput,
    outputSchema: ConfigurationsListBySubscriptionOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "/providers/Microsoft.Advisor/operations" }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * Lists all the available Advisor REST API operations.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const PredictInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/predict",
  }),
);
export type PredictInput = typeof PredictInput.Type;

// Output Schema
export const PredictOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type PredictOutput = typeof PredictOutput.Type;

// The operation
/**
 * Predicts a recommendation.
 */
export const Predict = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PredictInput,
  outputSchema: PredictOutput,
}));
// Input Schema
export const RecommendationMetadataGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Advisor/metadata/{name}",
    }),
  );
export type RecommendationMetadataGetInput =
  typeof RecommendationMetadataGetInput.Type;

// Output Schema
export const RecommendationMetadataGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RecommendationMetadataGetOutput =
  typeof RecommendationMetadataGetOutput.Type;

// The operation
/**
 * Gets the metadata entity.
 *
 * @param name - Name of metadata entity.
 */
export const RecommendationMetadataGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RecommendationMetadataGetInput,
    outputSchema: RecommendationMetadataGetOutput,
  }),
);
// Input Schema
export const RecommendationMetadataListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/providers/Microsoft.Advisor/metadata" }),
  );
export type RecommendationMetadataListInput =
  typeof RecommendationMetadataListInput.Type;

// Output Schema
export const RecommendationMetadataListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RecommendationMetadataListOutput =
  typeof RecommendationMetadataListOutput.Type;

// The operation
/**
 * Gets the list of metadata entities.
 *
 * @param $filter - The filter to apply to the recommendation metadata.<br>Filter can be applied to properties ['[recommendationCategory](#category)', '[recommendationSubCategory](#recommendationSubCategory)', 'RetirementDate'] with operators ['eq', 'and', 'le', 'ge']<br>The filter can also be applied to property ['[TrackingIds]']<br><br>⚠ **Note:** `recommendationControl` is a legacy filter property and will be deprecated in the future. Please use `recommendationSubCategory` for filtering recommendation subcategory.<br><br>Valid options for recommendationSubCategory: ['BusinessContinuity', 'DisasterRecovery', 'HighAvailability', 'MonitoringAndAlerting', 'Other', 'Personalized', 'PrioritizedRecommendations', 'Scalability', 'ServiceUpgradeAndRetirement', 'Validation']<br><br>Example:<br>- $filter=recommendationCategory eq 'HighAvailability' and recommendationSubCategory eq 'ServiceUpgradeAndRetirement' and retirementDate ge '2024-01-01' and retirementDate le '2028-01-01'. Filter can be applied on trackingIds as well.<br>- $filter=trackingIds/any(t: t eq 'some-guid')<br><br>⚠ **Note:** `trackingIDs` filter can be used for filtering one value at a time. The support to filter multiple values is not currently available. Also the support to add other filters along with `trackingIDs` is not available.
 */
export const RecommendationMetadataList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RecommendationMetadataListInput,
    outputSchema: RecommendationMetadataListOutput,
  }),
);
// Input Schema
export const RecommendationsGenerateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/generateRecommendations",
    }),
  );
export type RecommendationsGenerateInput =
  typeof RecommendationsGenerateInput.Type;

// Output Schema
export const RecommendationsGenerateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RecommendationsGenerateOutput =
  typeof RecommendationsGenerateOutput.Type;

// The operation
/**
 * Initiates the recommendation generation or computation process for a subscription. This operation is asynchronous. The generated recommendations are stored in a cache in the Advisor service.
 */
export const RecommendationsGenerate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RecommendationsGenerateInput,
    outputSchema: RecommendationsGenerateOutput,
  }),
);
// Input Schema
export const RecommendationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    recommendationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}",
    }),
  );
export type RecommendationsGetInput = typeof RecommendationsGetInput.Type;

// Output Schema
export const RecommendationsGetOutput =
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
export type RecommendationsGetOutput = typeof RecommendationsGetOutput.Type;

// The operation
/**
 * Obtains details of a cached recommendation.
 *
 * @param resourceUri - The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
 * @param recommendationId - The recommendation ID.
 */
export const RecommendationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RecommendationsGetInput,
  outputSchema: RecommendationsGetOutput,
}));
// Input Schema
export const RecommendationsGetGenerateStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/generateRecommendations/{operationId}",
    }),
  );
export type RecommendationsGetGenerateStatusInput =
  typeof RecommendationsGetGenerateStatusInput.Type;

// Output Schema
export const RecommendationsGetGenerateStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RecommendationsGetGenerateStatusOutput =
  typeof RecommendationsGetGenerateStatusOutput.Type;

// The operation
/**
 * Retrieves the status of the recommendation computation or generation process. Invoke this API after calling the generation recommendation. The URI of this API is returned in the Location field of the response header.
 *
 * @param operationId - The operation ID, which can be found from the Location field in the generate recommendation response header.
 */
export const RecommendationsGetGenerateStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RecommendationsGetGenerateStatusInput,
    outputSchema: RecommendationsGetGenerateStatusOutput,
  }));
// Input Schema
export const RecommendationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/recommendations",
    }),
  );
export type RecommendationsListInput = typeof RecommendationsListInput.Type;

// Output Schema
export const RecommendationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RecommendationsListOutput = typeof RecommendationsListOutput.Type;

// The operation
/**
 * Obtains cached recommendations for a subscription. The recommendations are generated or computed by invoking generateRecommendations.
 *
 * @param $filter - The filter to apply to the recommendations.<br>Filter can be applied to properties ['ResourceId', 'ResourceGroup', 'RecommendationTypeGuid', '[Category](#category)', 'SubCategory', 'RetirementDate'] with operators ['eq', 'and', 'or', 'lt', 'gt', 'le', 'ge'].<br><br>⚠ **Note:** `Control` is a legacy filter property and will be deprecated in the future. Please use `SubCategory` for filtering recommendation subcategory.<br><br>Valid options for SubCategory:<br>['BusinessContinuity', 'DisasterRecovery', 'HighAvailability', 'MonitoringAndAlerting', 'Other', 'Personalized', 'PrioritizedRecommendations', 'Scalability', 'ServiceUpgradeAndRetirement', 'Validation']<br><br>Example:<br>- $filter=Category eq 'Cost' and ResourceGroup eq 'MyResourceGroup'<br>-$filter=SubCategory eq 'ServiceUpgradeAndRetirement' and RetirementDate le '2024-01-01' and RetirementDate ge '2028-01-01'
 * @param $top - The number of recommendations per page if a paged version of this API is being used.
 * @param $skipToken - The page-continuation token to use with a paged version of this API.
 */
export const RecommendationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RecommendationsListInput,
  outputSchema: RecommendationsListOutput,
}));
// Input Schema
export const SuppressionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    recommendationId: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name}",
    }),
  );
export type SuppressionsCreateInput = typeof SuppressionsCreateInput.Type;

// Output Schema
export const SuppressionsCreateOutput =
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
export type SuppressionsCreateOutput = typeof SuppressionsCreateOutput.Type;

// The operation
/**
 * Enables the snoozed or dismissed attribute of a recommendation. The snoozed or dismissed attribute is referred to as a suppression. Use this API to create or update the snoozed or dismissed status of a recommendation.
 *
 * @param resourceUri - The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
 * @param recommendationId - The recommendation ID.
 * @param name - The name of the suppression.
 */
export const SuppressionsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SuppressionsCreateInput,
  outputSchema: SuppressionsCreateOutput,
}));
// Input Schema
export const SuppressionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    recommendationId: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name}",
    }),
  );
export type SuppressionsDeleteInput = typeof SuppressionsDeleteInput.Type;

// Output Schema
export const SuppressionsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SuppressionsDeleteOutput = typeof SuppressionsDeleteOutput.Type;

// The operation
/**
 * Enables the activation of a snoozed or dismissed recommendation. The snoozed or dismissed attribute of a recommendation is referred to as a suppression.
 *
 * @param resourceUri - The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
 * @param recommendationId - The recommendation ID.
 * @param name - The name of the suppression.
 */
export const SuppressionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SuppressionsDeleteInput,
  outputSchema: SuppressionsDeleteOutput,
}));
// Input Schema
export const SuppressionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  recommendationId: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name}",
  }),
);
export type SuppressionsGetInput = typeof SuppressionsGetInput.Type;

// Output Schema
export const SuppressionsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type SuppressionsGetOutput = typeof SuppressionsGetOutput.Type;

// The operation
/**
 * Obtains the details of a suppression.
 *
 * @param resourceUri - The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
 * @param recommendationId - The recommendation ID.
 * @param name - The name of the suppression.
 */
export const SuppressionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SuppressionsGetInput,
  outputSchema: SuppressionsGetOutput,
}));
// Input Schema
export const SuppressionsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  $top: Schema.optional(Schema.Number),
  $skipToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/suppressions",
  }),
);
export type SuppressionsListInput = typeof SuppressionsListInput.Type;

// Output Schema
export const SuppressionsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type SuppressionsListOutput = typeof SuppressionsListOutput.Type;

// The operation
/**
 * Retrieves the list of snoozed or dismissed suppressions for a subscription. The snoozed or dismissed attribute of a recommendation is referred to as a suppression.
 *
 * @param $top - The number of suppressions per page if a paged version of this API is being used.
 * @param $skipToken - The page-continuation token to use with a paged version of this API.
 */
export const SuppressionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SuppressionsListInput,
  outputSchema: SuppressionsListOutput,
}));
