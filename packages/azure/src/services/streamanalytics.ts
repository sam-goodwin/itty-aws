/**
 * Azure Streamanalytics API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ClustersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  sku?: { name?: "Default"; capacity?: number };
  etag?: string;
  properties?: {
    createdDate?: string;
    clusterId?: string;
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "InProgress";
    capacityAllocated?: number;
    capacityAssigned?: number;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const ClustersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.Literals(["Default"])),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        createdDate: Schema.optional(Schema.String),
        clusterId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled", "InProgress"]),
        ),
        capacityAllocated: Schema.optional(Schema.Number),
        capacityAssigned: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<ClustersCreateOrUpdateInput>;

// Output Schema
export interface ClustersCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ClustersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClustersCreateOrUpdateOutput>;

// The operation
/**
 * Creates a Stream Analytics Cluster or replaces an already existing cluster.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param api-version - The API version to use for this operation.
 * @param If-Match - The ETag of the resource. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new resource to be created, but to prevent updating an existing record set. Other values will result in a 412 Pre-condition Failed response.
 */
export const ClustersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersCreateOrUpdateInput,
    outputSchema: ClustersCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ClustersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<ClustersDeleteInput>;

// Output Schema
export type ClustersDeleteOutput = void;
export const ClustersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersDeleteOutput>;

// The operation
/**
 * Deletes the specified cluster.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param api-version - The API version to use for this operation.
 */
export const ClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
}));
// Input Schema
export interface ClustersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<ClustersGetInput>;

// Output Schema
export interface ClustersGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ClustersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ClustersGetOutput>;

// The operation
/**
 * Gets information about the specified cluster.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param api-version - The API version to use for this operation.
 */
export const ClustersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersGetInput,
  outputSchema: ClustersGetOutput,
}));
// Input Schema
export interface ClustersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ClustersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<ClustersListByResourceGroupInput>;

// Output Schema
export interface ClustersListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ClustersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ClustersListByResourceGroupOutput>;

// The operation
/**
 * Lists all of the clusters in the given resource group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ClustersListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersListByResourceGroupInput,
    outputSchema: ClustersListByResourceGroupOutput,
  }),
);
// Input Schema
export interface ClustersListBySubscriptionInput {
  subscriptionId: string;
}
export const ClustersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/clusters",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<ClustersListBySubscriptionInput>;

// Output Schema
export interface ClustersListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ClustersListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ClustersListBySubscriptionOutput>;

// The operation
/**
 * Lists all of the clusters in the given subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ClustersListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersListBySubscriptionInput,
    outputSchema: ClustersListBySubscriptionOutput,
  }),
);
// Input Schema
export interface ClustersListStreamingJobsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersListStreamingJobsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}/listStreamingJobs",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<ClustersListStreamingJobsInput>;

// Output Schema
export interface ClustersListStreamingJobsOutput {
  value?: {
    id?: string;
    streamingUnits?: number;
    jobState?:
      | "Created"
      | "Starting"
      | "Running"
      | "Stopping"
      | "Stopped"
      | "Deleting"
      | "Failed"
      | "Degraded"
      | "Restarting"
      | "Scaling";
  }[];
  nextLink?: string;
}
export const ClustersListStreamingJobsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          streamingUnits: Schema.optional(Schema.Number),
          jobState: Schema.optional(
            Schema.Literals([
              "Created",
              "Starting",
              "Running",
              "Stopping",
              "Stopped",
              "Deleting",
              "Failed",
              "Degraded",
              "Restarting",
              "Scaling",
            ]),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClustersListStreamingJobsOutput>;

// The operation
/**
 * Lists all of the streaming jobs in the given cluster.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param api-version - The API version to use for this operation.
 */
export const ClustersListStreamingJobs = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersListStreamingJobsInput,
    outputSchema: ClustersListStreamingJobsOutput,
  }),
);
// Input Schema
export interface ClustersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  sku?: { name?: "Default"; capacity?: number };
  etag?: string;
  properties?: {
    createdDate?: string;
    clusterId?: string;
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "InProgress";
    capacityAllocated?: number;
    capacityAssigned?: number;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const ClustersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.Literals(["Default"])),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  etag: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      createdDate: Schema.optional(Schema.String),
      clusterId: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals(["Succeeded", "Failed", "Canceled", "InProgress"]),
      ),
      capacityAllocated: Schema.optional(Schema.Number),
      capacityAssigned: Schema.optional(Schema.Number),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<ClustersUpdateInput>;

// Output Schema
export interface ClustersUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ClustersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ClustersUpdateOutput>;

// The operation
/**
 * Updates an existing cluster. This can be used to partially update (ie. update one or two properties) a cluster without affecting the rest of the cluster definition.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param api-version - The API version to use for this operation.
 * @param If-Match - The ETag of the resource. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 */
export const ClustersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export interface FunctionsCreateOrReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  functionName: string;
  properties?: {
    type: string;
    etag?: string;
    properties?: {
      inputs?: { dataType?: string; isConfigurationParameter?: boolean }[];
      output?: { dataType?: string };
      binding?: { type: string };
    };
  };
  id?: string;
  name?: string;
  type?: string;
}
export const FunctionsCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    functionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        type: Schema.String,
        etag: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            inputs: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  dataType: Schema.optional(Schema.String),
                  isConfigurationParameter: Schema.optional(Schema.Boolean),
                }),
              ),
            ),
            output: Schema.optional(
              Schema.Struct({
                dataType: Schema.optional(Schema.String),
              }),
            ),
            binding: Schema.optional(
              Schema.Struct({
                type: Schema.String,
              }),
            ),
          }),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<FunctionsCreateOrReplaceInput>;

// Output Schema
export interface FunctionsCreateOrReplaceOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const FunctionsCreateOrReplaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FunctionsCreateOrReplaceOutput>;

// The operation
/**
 * Creates a function or replaces an already existing function under an existing streaming job.
 *
 * @param If-Match - The ETag of the function. Omit this value to always overwrite the current function. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new function to be created, but to prevent updating an existing function. Other values will result in a 412 Pre-condition Failed response.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param functionName - The name of the function.
 */
export const FunctionsCreateOrReplace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FunctionsCreateOrReplaceInput,
    outputSchema: FunctionsCreateOrReplaceOutput,
  }),
);
// Input Schema
export interface FunctionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  functionName: string;
}
export const FunctionsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  functionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<FunctionsDeleteInput>;

// Output Schema
export type FunctionsDeleteOutput = void;
export const FunctionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FunctionsDeleteOutput>;

// The operation
/**
 * Deletes a function from the streaming job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param functionName - The name of the function.
 */
export const FunctionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FunctionsDeleteInput,
  outputSchema: FunctionsDeleteOutput,
}));
// Input Schema
export interface FunctionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  functionName: string;
}
export const FunctionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  functionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<FunctionsGetInput>;

// Output Schema
export interface FunctionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const FunctionsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<FunctionsGetOutput>;

// The operation
/**
 * Gets details about the specified function.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param functionName - The name of the function.
 */
export const FunctionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FunctionsGetInput,
  outputSchema: FunctionsGetOutput,
}));
// Input Schema
export interface FunctionsListByStreamingJobInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  $select?: string;
}
export const FunctionsListByStreamingJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    $select: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<FunctionsListByStreamingJobInput>;

// Output Schema
export interface FunctionsListByStreamingJobOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const FunctionsListByStreamingJobOutput =
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
  }) as unknown as Schema.Codec<FunctionsListByStreamingJobOutput>;

// The operation
/**
 * Lists all of the functions under the specified streaming job.
 *
 * @param $select - The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or "*" to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '*' as a valid value.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 */
export const FunctionsListByStreamingJob = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FunctionsListByStreamingJobInput,
    outputSchema: FunctionsListByStreamingJobOutput,
  }),
);
// Input Schema
export interface FunctionsRetrieveDefaultDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  functionName: string;
  bindingType: string;
}
export const FunctionsRetrieveDefaultDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    functionName: Schema.String.pipe(T.PathParam()),
    bindingType: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}/retrieveDefaultDefinition",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<FunctionsRetrieveDefaultDefinitionInput>;

// Output Schema
export interface FunctionsRetrieveDefaultDefinitionOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const FunctionsRetrieveDefaultDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FunctionsRetrieveDefaultDefinitionOutput>;

// The operation
/**
 * Retrieves the default definition of a function based on the parameters specified.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param functionName - The name of the function.
 */
export const FunctionsRetrieveDefaultDefinition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FunctionsRetrieveDefaultDefinitionInput,
    outputSchema: FunctionsRetrieveDefaultDefinitionOutput,
  }));
// Input Schema
export interface FunctionsTestInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  functionName: string;
  properties?: {
    type: string;
    etag?: string;
    properties?: {
      inputs?: { dataType?: string; isConfigurationParameter?: boolean }[];
      output?: { dataType?: string };
      binding?: { type: string };
    };
  };
  id?: string;
  name?: string;
  type?: string;
}
export const FunctionsTestInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  functionName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      type: Schema.String,
      etag: Schema.optional(Schema.String),
      properties: Schema.optional(
        Schema.Struct({
          inputs: Schema.optional(
            Schema.Array(
              Schema.Struct({
                dataType: Schema.optional(Schema.String),
                isConfigurationParameter: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
          output: Schema.optional(
            Schema.Struct({
              dataType: Schema.optional(Schema.String),
            }),
          ),
          binding: Schema.optional(
            Schema.Struct({
              type: Schema.String,
            }),
          ),
        }),
      ),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}/test",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<FunctionsTestInput>;

// Output Schema
export interface FunctionsTestOutput {
  status?: string;
  error?: { code?: string; message?: string };
}
export const FunctionsTestOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
  error: Schema.optional(
    Schema.Struct({
      code: Schema.optional(Schema.String),
      message: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<FunctionsTestOutput>;

// The operation
/**
 * Tests if the information provided for a function is valid. This can range from testing the connection to the underlying web service behind the function or making sure the function code provided is syntactically correct.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param functionName - The name of the function.
 */
export const FunctionsTest = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FunctionsTestInput,
  outputSchema: FunctionsTestOutput,
}));
// Input Schema
export interface FunctionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  functionName: string;
  properties?: {
    type: string;
    etag?: string;
    properties?: {
      inputs?: { dataType?: string; isConfigurationParameter?: boolean }[];
      output?: { dataType?: string };
      binding?: { type: string };
    };
  };
  id?: string;
  name?: string;
  type?: string;
}
export const FunctionsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  functionName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      type: Schema.String,
      etag: Schema.optional(Schema.String),
      properties: Schema.optional(
        Schema.Struct({
          inputs: Schema.optional(
            Schema.Array(
              Schema.Struct({
                dataType: Schema.optional(Schema.String),
                isConfigurationParameter: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
          output: Schema.optional(
            Schema.Struct({
              dataType: Schema.optional(Schema.String),
            }),
          ),
          binding: Schema.optional(
            Schema.Struct({
              type: Schema.String,
            }),
          ),
        }),
      ),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<FunctionsUpdateInput>;

// Output Schema
export interface FunctionsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const FunctionsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<FunctionsUpdateOutput>;

// The operation
/**
 * Updates an existing function under an existing streaming job. This can be used to partially update (ie. update one or two properties) a function without affecting the rest the job or function definition.
 *
 * @param If-Match - The ETag of the function. Omit this value to always overwrite the current function. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param functionName - The name of the function.
 */
export const FunctionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FunctionsUpdateInput,
  outputSchema: FunctionsUpdateOutput,
}));
// Input Schema
export interface InputsCreateOrReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  inputName: string;
  properties?: {
    type: string;
    serialization?: { type: "Csv" | "Avro" | "Json" | "Parquet" };
    diagnostics?: {
      conditions?: { since?: string; code?: string; message?: string }[];
    };
    etag?: string;
    compression?: { type: "None" | "GZip" | "Deflate" };
    partitionKey?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const InputsCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    inputName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        type: Schema.String,
        serialization: Schema.optional(
          Schema.Struct({
            type: Schema.Literals(["Csv", "Avro", "Json", "Parquet"]),
          }),
        ),
        diagnostics: Schema.optional(
          Schema.Struct({
            conditions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  since: Schema.optional(Schema.String),
                  code: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        etag: Schema.optional(Schema.String),
        compression: Schema.optional(
          Schema.Struct({
            type: Schema.Literals(["None", "GZip", "Deflate"]),
          }),
        ),
        partitionKey: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs/{inputName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<InputsCreateOrReplaceInput>;

// Output Schema
export interface InputsCreateOrReplaceOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const InputsCreateOrReplaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<InputsCreateOrReplaceOutput>;

// The operation
/**
 * Creates an input or replaces an already existing input under an existing streaming job.
 *
 * @param If-Match - The ETag of the input. Omit this value to always overwrite the current input. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new input to be created, but to prevent updating an existing input. Other values will result in a 412 Pre-condition Failed response.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param inputName - The name of the input.
 */
export const InputsCreateOrReplace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InputsCreateOrReplaceInput,
    outputSchema: InputsCreateOrReplaceOutput,
  }),
);
// Input Schema
export interface InputsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  inputName: string;
}
export const InputsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  inputName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs/{inputName}",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<InputsDeleteInput>;

// Output Schema
export type InputsDeleteOutput = void;
export const InputsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<InputsDeleteOutput>;

// The operation
/**
 * Deletes an input from the streaming job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param inputName - The name of the input.
 */
export const InputsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InputsDeleteInput,
  outputSchema: InputsDeleteOutput,
}));
// Input Schema
export interface InputsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  inputName: string;
}
export const InputsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  inputName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs/{inputName}",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<InputsGetInput>;

// Output Schema
export interface InputsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const InputsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<InputsGetOutput>;

// The operation
/**
 * Gets details about the specified input.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param inputName - The name of the input.
 */
export const InputsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InputsGetInput,
  outputSchema: InputsGetOutput,
}));
// Input Schema
export interface InputsListByStreamingJobInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  $select?: string;
}
export const InputsListByStreamingJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    $select: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<InputsListByStreamingJobInput>;

// Output Schema
export interface InputsListByStreamingJobOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const InputsListByStreamingJobOutput =
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
  }) as unknown as Schema.Codec<InputsListByStreamingJobOutput>;

// The operation
/**
 * Lists all of the inputs under the specified streaming job.
 *
 * @param $select - The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or "*" to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '*' as a valid value.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 */
export const InputsListByStreamingJob = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InputsListByStreamingJobInput,
    outputSchema: InputsListByStreamingJobOutput,
  }),
);
// Input Schema
export interface InputsTestInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  inputName: string;
  properties?: {
    type: string;
    serialization?: { type: "Csv" | "Avro" | "Json" | "Parquet" };
    diagnostics?: {
      conditions?: { since?: string; code?: string; message?: string }[];
    };
    etag?: string;
    compression?: { type: "None" | "GZip" | "Deflate" };
    partitionKey?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const InputsTestInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  inputName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      type: Schema.String,
      serialization: Schema.optional(
        Schema.Struct({
          type: Schema.Literals(["Csv", "Avro", "Json", "Parquet"]),
        }),
      ),
      diagnostics: Schema.optional(
        Schema.Struct({
          conditions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                since: Schema.optional(Schema.String),
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      etag: Schema.optional(Schema.String),
      compression: Schema.optional(
        Schema.Struct({
          type: Schema.Literals(["None", "GZip", "Deflate"]),
        }),
      ),
      partitionKey: Schema.optional(Schema.String),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs/{inputName}/test",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<InputsTestInput>;

// Output Schema
export interface InputsTestOutput {
  status?: string;
  error?: { code?: string; message?: string };
}
export const InputsTestOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
  error: Schema.optional(
    Schema.Struct({
      code: Schema.optional(Schema.String),
      message: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<InputsTestOutput>;

// The operation
/**
 * Tests whether an input’s datasource is reachable and usable by the Azure Stream Analytics service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param inputName - The name of the input.
 */
export const InputsTest = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InputsTestInput,
  outputSchema: InputsTestOutput,
}));
// Input Schema
export interface InputsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  inputName: string;
  properties?: {
    type: string;
    serialization?: { type: "Csv" | "Avro" | "Json" | "Parquet" };
    diagnostics?: {
      conditions?: { since?: string; code?: string; message?: string }[];
    };
    etag?: string;
    compression?: { type: "None" | "GZip" | "Deflate" };
    partitionKey?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const InputsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  inputName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      type: Schema.String,
      serialization: Schema.optional(
        Schema.Struct({
          type: Schema.Literals(["Csv", "Avro", "Json", "Parquet"]),
        }),
      ),
      diagnostics: Schema.optional(
        Schema.Struct({
          conditions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                since: Schema.optional(Schema.String),
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      etag: Schema.optional(Schema.String),
      compression: Schema.optional(
        Schema.Struct({
          type: Schema.Literals(["None", "GZip", "Deflate"]),
        }),
      ),
      partitionKey: Schema.optional(Schema.String),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs/{inputName}",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<InputsUpdateInput>;

// Output Schema
export interface InputsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const InputsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<InputsUpdateOutput>;

// The operation
/**
 * Updates an existing input under an existing streaming job. This can be used to partially update (ie. update one or two properties) an input without affecting the rest the job or input definition.
 *
 * @param If-Match - The ETag of the input. Omit this value to always overwrite the current input. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param inputName - The name of the input.
 */
export const InputsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InputsUpdateInput,
  outputSchema: InputsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.StreamAnalytics/operations",
    apiVersion: "2020-03-01",
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
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Stream Analytics related operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OutputsCreateOrReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  outputName: string;
  properties?: {
    datasource?: { type: string };
    timeWindow?: string;
    sizeWindow?: number;
    serialization?: { type: "Csv" | "Avro" | "Json" | "Parquet" };
    diagnostics?: {
      conditions?: { since?: string; code?: string; message?: string }[];
    };
    etag?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const OutputsCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    outputName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        datasource: Schema.optional(
          Schema.Struct({
            type: Schema.String,
          }),
        ),
        timeWindow: Schema.optional(Schema.String),
        sizeWindow: Schema.optional(Schema.Number),
        serialization: Schema.optional(
          Schema.Struct({
            type: Schema.Literals(["Csv", "Avro", "Json", "Parquet"]),
          }),
        ),
        diagnostics: Schema.optional(
          Schema.Struct({
            conditions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  since: Schema.optional(Schema.String),
                  code: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        etag: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<OutputsCreateOrReplaceInput>;

// Output Schema
export interface OutputsCreateOrReplaceOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const OutputsCreateOrReplaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OutputsCreateOrReplaceOutput>;

// The operation
/**
 * Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @param If-Match - The ETag of the output. Omit this value to always overwrite the current output. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new output to be created, but to prevent updating an existing output. Other values will result in a 412 Pre-condition Failed response.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param outputName - The name of the output.
 */
export const OutputsCreateOrReplace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OutputsCreateOrReplaceInput,
    outputSchema: OutputsCreateOrReplaceOutput,
  }),
);
// Input Schema
export interface OutputsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  outputName: string;
}
export const OutputsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  outputName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<OutputsDeleteInput>;

// Output Schema
export type OutputsDeleteOutput = void;
export const OutputsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<OutputsDeleteOutput>;

// The operation
/**
 * Deletes an output from the streaming job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param outputName - The name of the output.
 */
export const OutputsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutputsDeleteInput,
  outputSchema: OutputsDeleteOutput,
}));
// Input Schema
export interface OutputsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  outputName: string;
}
export const OutputsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  outputName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<OutputsGetInput>;

// Output Schema
export interface OutputsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const OutputsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OutputsGetOutput>;

// The operation
/**
 * Gets details about the specified output.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param outputName - The name of the output.
 */
export const OutputsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutputsGetInput,
  outputSchema: OutputsGetOutput,
}));
// Input Schema
export interface OutputsListByStreamingJobInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  $select?: string;
}
export const OutputsListByStreamingJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    $select: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<OutputsListByStreamingJobInput>;

// Output Schema
export interface OutputsListByStreamingJobOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const OutputsListByStreamingJobOutput =
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
  }) as unknown as Schema.Codec<OutputsListByStreamingJobOutput>;

// The operation
/**
 * Lists all of the outputs under the specified streaming job.
 *
 * @param $select - The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or "*" to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '*' as a valid value.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 */
export const OutputsListByStreamingJob = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OutputsListByStreamingJobInput,
    outputSchema: OutputsListByStreamingJobOutput,
  }),
);
// Input Schema
export interface OutputsTestInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  outputName: string;
  properties?: {
    datasource?: { type: string };
    timeWindow?: string;
    sizeWindow?: number;
    serialization?: { type: "Csv" | "Avro" | "Json" | "Parquet" };
    diagnostics?: {
      conditions?: { since?: string; code?: string; message?: string }[];
    };
    etag?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const OutputsTestInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  outputName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      datasource: Schema.optional(
        Schema.Struct({
          type: Schema.String,
        }),
      ),
      timeWindow: Schema.optional(Schema.String),
      sizeWindow: Schema.optional(Schema.Number),
      serialization: Schema.optional(
        Schema.Struct({
          type: Schema.Literals(["Csv", "Avro", "Json", "Parquet"]),
        }),
      ),
      diagnostics: Schema.optional(
        Schema.Struct({
          conditions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                since: Schema.optional(Schema.String),
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      etag: Schema.optional(Schema.String),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}/test",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<OutputsTestInput>;

// Output Schema
export interface OutputsTestOutput {
  status?: string;
  error?: { code?: string; message?: string };
}
export const OutputsTestOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
  error: Schema.optional(
    Schema.Struct({
      code: Schema.optional(Schema.String),
      message: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<OutputsTestOutput>;

// The operation
/**
 * Tests whether an output’s datasource is reachable and usable by the Azure Stream Analytics service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param outputName - The name of the output.
 */
export const OutputsTest = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutputsTestInput,
  outputSchema: OutputsTestOutput,
}));
// Input Schema
export interface OutputsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  outputName: string;
  properties?: {
    datasource?: { type: string };
    timeWindow?: string;
    sizeWindow?: number;
    serialization?: { type: "Csv" | "Avro" | "Json" | "Parquet" };
    diagnostics?: {
      conditions?: { since?: string; code?: string; message?: string }[];
    };
    etag?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const OutputsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  outputName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      datasource: Schema.optional(
        Schema.Struct({
          type: Schema.String,
        }),
      ),
      timeWindow: Schema.optional(Schema.String),
      sizeWindow: Schema.optional(Schema.Number),
      serialization: Schema.optional(
        Schema.Struct({
          type: Schema.Literals(["Csv", "Avro", "Json", "Parquet"]),
        }),
      ),
      diagnostics: Schema.optional(
        Schema.Struct({
          conditions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                since: Schema.optional(Schema.String),
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      etag: Schema.optional(Schema.String),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<OutputsUpdateInput>;

// Output Schema
export interface OutputsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const OutputsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OutputsUpdateOutput>;

// The operation
/**
 * Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 *
 * @param If-Match - The ETag of the output. Omit this value to always overwrite the current output. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param outputName - The name of the output.
 */
export const OutputsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutputsUpdateInput,
  outputSchema: OutputsUpdateOutput,
}));
// Input Schema
export interface PrivateEndpointsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  privateEndpointName: string;
  properties?: {
    createdDate?: string;
    manualPrivateLinkServiceConnections?: {
      properties?: {
        privateLinkServiceId?: string;
        groupIds?: string[];
        requestMessage?: string;
        privateLinkServiceConnectionState?: {
          status?: string;
          description?: string;
          actionsRequired?: string;
        };
      };
    }[];
  };
  etag?: string;
}
export const PrivateEndpointsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        createdDate: Schema.optional(Schema.String),
        manualPrivateLinkServiceConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              properties: Schema.optional(
                Schema.Struct({
                  privateLinkServiceId: Schema.optional(Schema.String),
                  groupIds: Schema.optional(Schema.Array(Schema.String)),
                  requestMessage: Schema.optional(Schema.String),
                  privateLinkServiceConnectionState: Schema.optional(
                    Schema.Struct({
                      status: Schema.optional(Schema.String),
                      description: Schema.optional(Schema.String),
                      actionsRequired: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}/privateEndpoints/{privateEndpointName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointsCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a Stream Analytics Private Endpoint or replaces an already existing Private Endpoint.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param privateEndpointName - The name of the private endpoint.
 * @param api-version - The API version to use for this operation.
 * @param If-Match - The ETag of the resource. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new resource to be created, but to prevent updating an existing record set. Other values will result in a 412 Pre-condition Failed response.
 */
export const PrivateEndpointsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointsCreateOrUpdateInput,
    outputSchema: PrivateEndpointsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  privateEndpointName: string;
}
export const PrivateEndpointsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}/privateEndpoints/{privateEndpointName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointsDeleteInput>;

// Output Schema
export type PrivateEndpointsDeleteOutput = void;
export const PrivateEndpointsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointsDeleteOutput>;

// The operation
/**
 * Delete the specified private endpoint.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param privateEndpointName - The name of the private endpoint.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateEndpointsDeleteInput,
    outputSchema: PrivateEndpointsDeleteOutput,
  }),
);
// Input Schema
export interface PrivateEndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  privateEndpointName: string;
}
export const PrivateEndpointsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}/privateEndpoints/{privateEndpointName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointsGetInput>;

// Output Schema
export interface PrivateEndpointsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointsGetOutput>;

// The operation
/**
 * Gets information about the specified Private Endpoint.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param privateEndpointName - The name of the private endpoint.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PrivateEndpointsGetInput,
  outputSchema: PrivateEndpointsGetOutput,
}));
// Input Schema
export interface PrivateEndpointsListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const PrivateEndpointsListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/clusters/{clusterName}/privateEndpoints",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointsListByClusterInput>;

// Output Schema
export interface PrivateEndpointsListByClusterOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateEndpointsListByClusterOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointsListByClusterOutput>;

// The operation
/**
 * Lists the private endpoints in the cluster.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointsListByCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointsListByClusterInput,
    outputSchema: PrivateEndpointsListByClusterOutput,
  }));
// Input Schema
export interface StreamingJobsCreateOrReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  properties?: {
    sku?: { name?: "Standard" };
    jobId?: string;
    provisioningState?: string;
    jobState?: string;
    jobType?: "Cloud" | "Edge";
    outputStartMode?: "JobStartTime" | "CustomTime" | "LastOutputEventTime";
    outputStartTime?: string;
    lastOutputEventTime?: string;
    eventsOutOfOrderPolicy?: "Adjust" | "Drop";
    outputErrorPolicy?: "Stop" | "Drop";
    eventsOutOfOrderMaxDelayInSeconds?: number;
    eventsLateArrivalMaxDelayInSeconds?: number;
    dataLocale?: string;
    compatibilityLevel?: "1.0" | "1.2";
    createdDate?: string;
    inputs?: { id?: string; name?: string; type?: string }[];
    transformation?: { id?: string; name?: string; type?: string };
    outputs?: { id?: string; name?: string; type?: string }[];
    functions?: { id?: string; name?: string; type?: string }[];
    etag?: string;
    jobStorageAccount?: { accountName?: string; accountKey?: string };
    contentStoragePolicy?: "SystemAccount" | "JobStorageAccount";
    cluster?: { id?: string };
  };
  identity?: { tenantId?: string; principalId?: string; type?: string };
  tags?: Record<string, string>;
  location?: string;
}
export const StreamingJobsCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.Literals(["Standard"])),
          }),
        ),
        jobId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
        jobState: Schema.optional(Schema.String),
        jobType: Schema.optional(Schema.Literals(["Cloud", "Edge"])),
        outputStartMode: Schema.optional(
          Schema.Literals([
            "JobStartTime",
            "CustomTime",
            "LastOutputEventTime",
          ]),
        ),
        outputStartTime: Schema.optional(Schema.String),
        lastOutputEventTime: Schema.optional(Schema.String),
        eventsOutOfOrderPolicy: Schema.optional(
          Schema.Literals(["Adjust", "Drop"]),
        ),
        outputErrorPolicy: Schema.optional(Schema.Literals(["Stop", "Drop"])),
        eventsOutOfOrderMaxDelayInSeconds: Schema.optional(Schema.Number),
        eventsLateArrivalMaxDelayInSeconds: Schema.optional(Schema.Number),
        dataLocale: Schema.optional(Schema.String),
        compatibilityLevel: Schema.optional(Schema.Literals(["1.0", "1.2"])),
        createdDate: Schema.optional(Schema.String),
        inputs: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        transformation: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
        outputs: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        functions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        etag: Schema.optional(Schema.String),
        jobStorageAccount: Schema.optional(
          Schema.Struct({
            accountName: Schema.optional(Schema.String),
            accountKey: Schema.optional(Schema.String),
          }),
        ),
        contentStoragePolicy: Schema.optional(
          Schema.Literals(["SystemAccount", "JobStorageAccount"]),
        ),
        cluster: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<StreamingJobsCreateOrReplaceInput>;

// Output Schema
export interface StreamingJobsCreateOrReplaceOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const StreamingJobsCreateOrReplaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<StreamingJobsCreateOrReplaceOutput>;

// The operation
/**
 * Creates a streaming job or replaces an already existing streaming job.
 *
 * @param If-Match - The ETag of the streaming job. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new streaming job to be created, but to prevent updating an existing record set. Other values will result in a 412 Pre-condition Failed response.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 */
export const StreamingJobsCreateOrReplace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StreamingJobsCreateOrReplaceInput,
    outputSchema: StreamingJobsCreateOrReplaceOutput,
  }));
// Input Schema
export interface StreamingJobsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
}
export const StreamingJobsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<StreamingJobsDeleteInput>;

// Output Schema
export type StreamingJobsDeleteOutput = void;
export const StreamingJobsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<StreamingJobsDeleteOutput>;

// The operation
/**
 * Deletes a streaming job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 */
export const StreamingJobsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StreamingJobsDeleteInput,
  outputSchema: StreamingJobsDeleteOutput,
}));
// Input Schema
export interface StreamingJobsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  $expand?: string;
}
export const StreamingJobsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<StreamingJobsGetInput>;

// Output Schema
export interface StreamingJobsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const StreamingJobsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<StreamingJobsGetOutput>;

// The operation
/**
 * Gets details about the specified streaming job.
 *
 * @param $expand - The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 */
export const StreamingJobsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StreamingJobsGetInput,
  outputSchema: StreamingJobsGetOutput,
}));
// Input Schema
export interface StreamingJobsListInput {
  subscriptionId: string;
  $expand?: string;
}
export const StreamingJobsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/streamingjobs",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<StreamingJobsListInput>;

// Output Schema
export interface StreamingJobsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const StreamingJobsListOutput =
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
  }) as unknown as Schema.Codec<StreamingJobsListOutput>;

// The operation
/**
 * Lists all of the streaming jobs in the given subscription.
 *
 * @param $expand - The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const StreamingJobsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StreamingJobsListInput,
  outputSchema: StreamingJobsListOutput,
}));
// Input Schema
export interface StreamingJobsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $expand?: string;
}
export const StreamingJobsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<StreamingJobsListByResourceGroupInput>;

// Output Schema
export interface StreamingJobsListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const StreamingJobsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<StreamingJobsListByResourceGroupOutput>;

// The operation
/**
 * Lists all of the streaming jobs in the specified resource group.
 *
 * @param $expand - The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const StreamingJobsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StreamingJobsListByResourceGroupInput,
    outputSchema: StreamingJobsListByResourceGroupOutput,
  }));
// Input Schema
export interface StreamingJobsScaleInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  streamingUnits?: number;
}
export const StreamingJobsScaleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    streamingUnits: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/scale",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<StreamingJobsScaleInput>;

// Output Schema
export type StreamingJobsScaleOutput = void;
export const StreamingJobsScaleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<StreamingJobsScaleOutput>;

// The operation
/**
 * Scales a streaming job when the job is running.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 */
export const StreamingJobsScale = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StreamingJobsScaleInput,
  outputSchema: StreamingJobsScaleOutput,
}));
// Input Schema
export interface StreamingJobsStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  outputStartMode?: "JobStartTime" | "CustomTime" | "LastOutputEventTime";
  outputStartTime?: string;
}
export const StreamingJobsStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    outputStartMode: Schema.optional(
      Schema.Literals(["JobStartTime", "CustomTime", "LastOutputEventTime"]),
    ),
    outputStartTime: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/start",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<StreamingJobsStartInput>;

// Output Schema
export type StreamingJobsStartOutput = void;
export const StreamingJobsStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<StreamingJobsStartOutput>;

// The operation
/**
 * Starts a streaming job. Once a job is started it will start processing input events and produce output.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 */
export const StreamingJobsStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StreamingJobsStartInput,
  outputSchema: StreamingJobsStartOutput,
}));
// Input Schema
export interface StreamingJobsStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
}
export const StreamingJobsStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/stop",
    apiVersion: "2020-03-01",
  }),
) as unknown as Schema.Codec<StreamingJobsStopInput>;

// Output Schema
export type StreamingJobsStopOutput = void;
export const StreamingJobsStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<StreamingJobsStopOutput>;

// The operation
/**
 * Stops a running streaming job. This will cause a running streaming job to stop processing input events and producing output.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 */
export const StreamingJobsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StreamingJobsStopInput,
  outputSchema: StreamingJobsStopOutput,
}));
// Input Schema
export interface StreamingJobsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  properties?: {
    sku?: { name?: "Standard" };
    jobId?: string;
    provisioningState?: string;
    jobState?: string;
    jobType?: "Cloud" | "Edge";
    outputStartMode?: "JobStartTime" | "CustomTime" | "LastOutputEventTime";
    outputStartTime?: string;
    lastOutputEventTime?: string;
    eventsOutOfOrderPolicy?: "Adjust" | "Drop";
    outputErrorPolicy?: "Stop" | "Drop";
    eventsOutOfOrderMaxDelayInSeconds?: number;
    eventsLateArrivalMaxDelayInSeconds?: number;
    dataLocale?: string;
    compatibilityLevel?: "1.0" | "1.2";
    createdDate?: string;
    inputs?: { id?: string; name?: string; type?: string }[];
    transformation?: { id?: string; name?: string; type?: string };
    outputs?: { id?: string; name?: string; type?: string }[];
    functions?: { id?: string; name?: string; type?: string }[];
    etag?: string;
    jobStorageAccount?: { accountName?: string; accountKey?: string };
    contentStoragePolicy?: "SystemAccount" | "JobStorageAccount";
    cluster?: { id?: string };
  };
  identity?: { tenantId?: string; principalId?: string; type?: string };
  tags?: Record<string, string>;
  location?: string;
}
export const StreamingJobsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.Literals(["Standard"])),
          }),
        ),
        jobId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
        jobState: Schema.optional(Schema.String),
        jobType: Schema.optional(Schema.Literals(["Cloud", "Edge"])),
        outputStartMode: Schema.optional(
          Schema.Literals([
            "JobStartTime",
            "CustomTime",
            "LastOutputEventTime",
          ]),
        ),
        outputStartTime: Schema.optional(Schema.String),
        lastOutputEventTime: Schema.optional(Schema.String),
        eventsOutOfOrderPolicy: Schema.optional(
          Schema.Literals(["Adjust", "Drop"]),
        ),
        outputErrorPolicy: Schema.optional(Schema.Literals(["Stop", "Drop"])),
        eventsOutOfOrderMaxDelayInSeconds: Schema.optional(Schema.Number),
        eventsLateArrivalMaxDelayInSeconds: Schema.optional(Schema.Number),
        dataLocale: Schema.optional(Schema.String),
        compatibilityLevel: Schema.optional(Schema.Literals(["1.0", "1.2"])),
        createdDate: Schema.optional(Schema.String),
        inputs: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        transformation: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
        outputs: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        functions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        etag: Schema.optional(Schema.String),
        jobStorageAccount: Schema.optional(
          Schema.Struct({
            accountName: Schema.optional(Schema.String),
            accountKey: Schema.optional(Schema.String),
          }),
        ),
        contentStoragePolicy: Schema.optional(
          Schema.Literals(["SystemAccount", "JobStorageAccount"]),
        ),
        cluster: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<StreamingJobsUpdateInput>;

// Output Schema
export interface StreamingJobsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const StreamingJobsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<StreamingJobsUpdateOutput>;

// The operation
/**
 * Updates an existing streaming job. This can be used to partially update (ie. update one or two properties) a streaming job without affecting the rest the job definition.
 *
 * @param If-Match - The ETag of the streaming job. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 */
export const StreamingJobsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StreamingJobsUpdateInput,
  outputSchema: StreamingJobsUpdateOutput,
}));
// Input Schema
export interface SubscriptionsListQuotasInput {
  location: string;
  subscriptionId: string;
}
export const SubscriptionsListQuotasInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/locations/{location}/quotas",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionsListQuotasInput>;

// Output Schema
export interface SubscriptionsListQuotasOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const SubscriptionsListQuotasOutput =
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
  }) as unknown as Schema.Codec<SubscriptionsListQuotasOutput>;

// The operation
/**
 * Retrieves the subscription's current quota information in a particular region.
 *
 * @param location - The region in which to retrieve the subscription's quota information. You can find out which regions Azure Stream Analytics is supported in here: https://azure.microsoft.com/en-us/regions/
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const SubscriptionsListQuotas = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SubscriptionsListQuotasInput,
    outputSchema: SubscriptionsListQuotasOutput,
  }),
);
// Input Schema
export interface TransformationsCreateOrReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  transformationName: string;
  properties?: {
    streamingUnits?: number;
    validStreamingUnits?: number[];
    query?: string;
    etag?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const TransformationsCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    transformationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        streamingUnits: Schema.optional(Schema.Number),
        validStreamingUnits: Schema.optional(Schema.Array(Schema.Number)),
        query: Schema.optional(Schema.String),
        etag: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/transformations/{transformationName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<TransformationsCreateOrReplaceInput>;

// Output Schema
export interface TransformationsCreateOrReplaceOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TransformationsCreateOrReplaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TransformationsCreateOrReplaceOutput>;

// The operation
/**
 * Creates a transformation or replaces an already existing transformation under an existing streaming job.
 *
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current transformation. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new transformation to be created, but to prevent updating an existing transformation. Other values will result in a 412 Pre-condition Failed response.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param transformationName - The name of the transformation.
 */
export const TransformationsCreateOrReplace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TransformationsCreateOrReplaceInput,
    outputSchema: TransformationsCreateOrReplaceOutput,
  }));
// Input Schema
export interface TransformationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  transformationName: string;
}
export const TransformationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    transformationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/transformations/{transformationName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<TransformationsGetInput>;

// Output Schema
export interface TransformationsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TransformationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TransformationsGetOutput>;

// The operation
/**
 * Gets details about the specified transformation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param transformationName - The name of the transformation.
 */
export const TransformationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TransformationsGetInput,
  outputSchema: TransformationsGetOutput,
}));
// Input Schema
export interface TransformationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  transformationName: string;
  properties?: {
    streamingUnits?: number;
    validStreamingUnits?: number[];
    query?: string;
    etag?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const TransformationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    transformationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        streamingUnits: Schema.optional(Schema.Number),
        validStreamingUnits: Schema.optional(Schema.Array(Schema.Number)),
        query: Schema.optional(Schema.String),
        etag: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/transformations/{transformationName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<TransformationsUpdateInput>;

// Output Schema
export interface TransformationsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TransformationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TransformationsUpdateOutput>;

// The operation
/**
 * Updates an existing transformation under an existing streaming job. This can be used to partially update (ie. update one or two properties) a transformation without affecting the rest the job or transformation definition.
 *
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current transformation. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the streaming job.
 * @param transformationName - The name of the transformation.
 */
export const TransformationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TransformationsUpdateInput,
    outputSchema: TransformationsUpdateOutput,
  }),
);
