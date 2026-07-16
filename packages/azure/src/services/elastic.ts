/**
 * Azure Elastic API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString, SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface AllTrafficFiltersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const AllTrafficFiltersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/listAllTrafficFilters",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<AllTrafficFiltersListInput>;

// Output Schema
export interface AllTrafficFiltersListOutput {
  rulesets?: {
    id?: string;
    name?: string;
    description?: string;
    region?: string;
    type?: "ip" | "azure_private_endpoint";
    includeByDefault?: boolean;
    rules?: {
      source?: string;
      description?: string;
      azureEndpointGuid?: string;
      azureEndpointName?: string;
      id?: string;
    }[];
  }[];
}
export const AllTrafficFiltersListOutput =
  /*@__PURE__*/ Schema.Struct({
    rulesets: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          region: Schema.optional(Schema.String),
          type: Schema.optional(
            Schema.Literals(["ip", "azure_private_endpoint"]),
          ),
          includeByDefault: Schema.optional(Schema.Boolean),
          rules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                source: Schema.optional(Schema.String),
                description: Schema.optional(Schema.String),
                azureEndpointGuid: Schema.optional(Schema.String),
                azureEndpointName: Schema.optional(Schema.String),
                id: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AllTrafficFiltersListOutput>;

// The operation
/**
 * List all traffic filters associated with your Elastic monitor resource, helping you manage network traffic control.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const AllTrafficFiltersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AllTrafficFiltersListInput,
  outputSchema: AllTrafficFiltersListOutput,
}));
// Input Schema
export interface AssociateTrafficFilterAssociateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  rulesetId?: string;
}
export const AssociateTrafficFilterAssociateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    rulesetId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/associateTrafficFilter",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<AssociateTrafficFilterAssociateInput>;

// Output Schema
export type AssociateTrafficFilterAssociateOutput = void;
export const AssociateTrafficFilterAssociateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AssociateTrafficFilterAssociateOutput>;

// The operation
/**
 * Associate a traffic filter with your Elastic monitor resource to control and manage network traffic.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param rulesetId - Ruleset Id of the filter
 */
export const AssociateTrafficFilterAssociate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AssociateTrafficFilterAssociateInput,
    outputSchema: AssociateTrafficFilterAssociateOutput,
  }));
// Input Schema
export interface BillingInfoGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const BillingInfoGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/getBillingInfo",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<BillingInfoGetInput>;

// Output Schema
export interface BillingInfoGetOutput {
  marketplaceSaasInfo?: {
    marketplaceSubscription?: {
      id?: string;
      publisherId?: string;
      offerId?: string;
    };
    marketplaceName?: string;
    marketplaceResourceId?: string;
    marketplaceStatus?: string;
    billedAzureSubscriptionId?: string;
    subscribed?: boolean;
  };
  partnerBillingEntity?: {
    id?: string;
    name?: string;
    partnerEntityUri?: string;
  };
}
export const BillingInfoGetOutput = /*@__PURE__*/ Schema.Struct({
  marketplaceSaasInfo: Schema.optional(
    Schema.Struct({
      marketplaceSubscription: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          publisherId: Schema.optional(Schema.String),
          offerId: Schema.optional(Schema.String),
        }),
      ),
      marketplaceName: Schema.optional(Schema.String),
      marketplaceResourceId: Schema.optional(Schema.String),
      marketplaceStatus: Schema.optional(Schema.String),
      billedAzureSubscriptionId: Schema.optional(Schema.String),
      subscribed: Schema.optional(Schema.Boolean),
    }),
  ),
  partnerBillingEntity: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      partnerEntityUri: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<BillingInfoGetOutput>;

// The operation
/**
 * Retrieve marketplace and organization billing information mapped to the given Elastic monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const BillingInfoGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BillingInfoGetInput,
  outputSchema: BillingInfoGetOutput,
}));
// Input Schema
export interface ConnectedPartnerResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const ConnectedPartnerResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/listConnectedPartnerResources",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<ConnectedPartnerResourcesListInput>;

// Output Schema
export interface ConnectedPartnerResourcesListOutput {
  value: {
    properties?: {
      partnerDeploymentName?: string;
      partnerDeploymentUri?: string;
      azureResourceId?: string;
      location?: string;
      type?: string;
    };
  }[];
  nextLink?: string;
}
export const ConnectedPartnerResourcesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.optional(
          Schema.Struct({
            partnerDeploymentName: Schema.optional(Schema.String),
            partnerDeploymentUri: Schema.optional(Schema.String),
            azureResourceId: Schema.optional(Schema.String),
            location: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConnectedPartnerResourcesListOutput>;

// The operation
/**
 * List all active deployments associated with the marketplace subscription linked to the given Elastic monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const ConnectedPartnerResourcesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedPartnerResourcesListInput,
    outputSchema: ConnectedPartnerResourcesListOutput,
  }));
// Input Schema
export interface CreateAndAssociateIPFilterCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  ips?: string;
  name?: string;
}
export const CreateAndAssociateIPFilterCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    ips: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/createAndAssociateIPFilter",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<CreateAndAssociateIPFilterCreateInput>;

// Output Schema
export type CreateAndAssociateIPFilterCreateOutput = void;
export const CreateAndAssociateIPFilterCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CreateAndAssociateIPFilterCreateOutput>;

// The operation
/**
 * Create and associate an IP filter with your Elastic monitor resource to control and manage network traffic.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param ips - List of ips
 * @param name - Name of the traffic filter
 */
export const createAndAssociateIPFilterCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CreateAndAssociateIPFilterCreateInput,
    outputSchema: CreateAndAssociateIPFilterCreateOutput,
  }));
// Input Schema
export interface CreateAndAssociatePLFilterCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  name?: string;
  privateEndpointGuid?: string;
  privateEndpointName?: string;
}
export const CreateAndAssociatePLFilterCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    privateEndpointGuid: Schema.optional(Schema.String),
    privateEndpointName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/createAndAssociatePLFilter",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<CreateAndAssociatePLFilterCreateInput>;

// Output Schema
export type CreateAndAssociatePLFilterCreateOutput = void;
export const CreateAndAssociatePLFilterCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CreateAndAssociatePLFilterCreateOutput>;

// The operation
/**
 * Create and associate a PL filter with your Elastic monitor resource to control and manage network traffic.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param name - Name of the traffic filter
 * @param privateEndpointGuid - Guid of the private endpoint
 * @param privateEndpointName - Name of the private endpoint
 */
export const createAndAssociatePLFilterCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CreateAndAssociatePLFilterCreateInput,
    outputSchema: CreateAndAssociatePLFilterCreateOutput,
  }));
// Input Schema
export interface DeploymentInfoListInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const DeploymentInfoListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/listDeploymentInfo",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<DeploymentInfoListInput>;

// Output Schema
export interface DeploymentInfoListOutput {
  status?: "Healthy" | "Unhealthy";
  version?: string;
  memoryCapacity?: string;
  diskCapacity?: string;
  elasticsearchEndPoint?: string;
  deploymentUrl?: string;
  marketplaceSaasInfo?: {
    marketplaceSubscription?: {
      id?: string;
      publisherId?: string;
      offerId?: string;
    };
    marketplaceName?: string;
    marketplaceResourceId?: string;
    marketplaceStatus?: string;
    billedAzureSubscriptionId?: string;
    subscribed?: boolean;
  };
  projectType?: string;
  configurationType?: string;
}
export const DeploymentInfoListOutput =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.Literals(["Healthy", "Unhealthy"])),
    version: Schema.optional(Schema.String),
    memoryCapacity: Schema.optional(Schema.String),
    diskCapacity: Schema.optional(Schema.String),
    elasticsearchEndPoint: Schema.optional(Schema.String),
    deploymentUrl: Schema.optional(Schema.String),
    marketplaceSaasInfo: Schema.optional(
      Schema.Struct({
        marketplaceSubscription: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            publisherId: Schema.optional(Schema.String),
            offerId: Schema.optional(Schema.String),
          }),
        ),
        marketplaceName: Schema.optional(Schema.String),
        marketplaceResourceId: Schema.optional(Schema.String),
        marketplaceStatus: Schema.optional(Schema.String),
        billedAzureSubscriptionId: Schema.optional(Schema.String),
        subscribed: Schema.optional(Schema.Boolean),
      }),
    ),
    projectType: Schema.optional(Schema.String),
    configurationType: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DeploymentInfoListOutput>;

// The operation
/**
 * Fetch detailed information about Elastic cloud deployments corresponding to the Elastic monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const DeploymentInfoList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeploymentInfoListInput,
  outputSchema: DeploymentInfoListOutput,
}));
// Input Schema
export interface DetachAndDeleteTrafficFilterDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  rulesetId?: string;
}
export const DetachAndDeleteTrafficFilterDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    rulesetId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/detachAndDeleteTrafficFilter",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<DetachAndDeleteTrafficFilterDeleteInput>;

// Output Schema
export type DetachAndDeleteTrafficFilterDeleteOutput = void;
export const DetachAndDeleteTrafficFilterDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DetachAndDeleteTrafficFilterDeleteOutput>;

// The operation
/**
 * Detach and delete an existing traffic filter from your Elastic monitor resource, removing its network traffic control capabilities.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param rulesetId - Ruleset Id of the filter
 */
export const DetachAndDeleteTrafficFilterDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DetachAndDeleteTrafficFilterDeleteInput,
    outputSchema: DetachAndDeleteTrafficFilterDeleteOutput,
  }));
// Input Schema
export interface DetachTrafficFilterUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  rulesetId?: string;
}
export const DetachTrafficFilterUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    rulesetId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/detachTrafficFilter",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<DetachTrafficFilterUpdateInput>;

// Output Schema
export type DetachTrafficFilterUpdateOutput = void;
export const DetachTrafficFilterUpdateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DetachTrafficFilterUpdateOutput>;

// The operation
/**
 * Detach an existing traffic filter from your Elastic monitor resource, removing its network traffic control capabilities.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param rulesetId - Ruleset Id of the filter
 */
export const DetachTrafficFilterUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DetachTrafficFilterUpdateInput,
  outputSchema: DetachTrafficFilterUpdateOutput,
}));
// Input Schema
export interface ElasticVersionsListInput {
  subscriptionId: string;
  region: string;
}
export const ElasticVersionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    region: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Elastic/elasticVersions",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<ElasticVersionsListInput>;

// Output Schema
export interface ElasticVersionsListOutput {
  value: { properties?: { version?: string } }[];
  nextLink?: string;
}
export const ElasticVersionsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.optional(
          Schema.Struct({
            version: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ElasticVersionsListOutput>;

// The operation
/**
 * Retrieve a list of all available Elastic versions for a specified region, helping you choose the best version for your deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param region - Region where elastic deployment will take place.
 */
export const ElasticVersionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ElasticVersionsListInput,
  outputSchema: ElasticVersionsListOutput,
}));
// Input Schema
export interface ExternalUserCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  userName?: string;
  fullName?: string;
  password?: string | Redacted.Redacted<string>;
  emailId?: string;
  roles?: string[];
}
export const ExternalUserCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    userName: Schema.optional(Schema.String),
    fullName: Schema.optional(Schema.String),
    password: Schema.optional(SensitiveString),
    emailId: Schema.optional(Schema.String),
    roles: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/createOrUpdateExternalUser",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<ExternalUserCreateOrUpdateInput>;

// Output Schema
export interface ExternalUserCreateOrUpdateOutput {
  created?: boolean;
}
export const ExternalUserCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    created: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<ExternalUserCreateOrUpdateOutput>;

// The operation
/**
 * Create or update external user configurations for your Elastic monitor resource, enabling access and management by external users.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const ExternalUserCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExternalUserCreateOrUpdateInput,
  outputSchema: ExternalUserCreateOrUpdateOutput,
}));
// Input Schema
export interface ListAssociatedTrafficFiltersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const ListAssociatedTrafficFiltersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/listAssociatedTrafficFilters",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<ListAssociatedTrafficFiltersListInput>;

// Output Schema
export interface ListAssociatedTrafficFiltersListOutput {
  rulesets?: {
    id?: string;
    name?: string;
    description?: string;
    region?: string;
    type?: "ip" | "azure_private_endpoint";
    includeByDefault?: boolean;
    rules?: {
      source?: string;
      description?: string;
      azureEndpointGuid?: string;
      azureEndpointName?: string;
      id?: string;
    }[];
  }[];
}
export const ListAssociatedTrafficFiltersListOutput =
  /*@__PURE__*/ Schema.Struct({
    rulesets: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          region: Schema.optional(Schema.String),
          type: Schema.optional(
            Schema.Literals(["ip", "azure_private_endpoint"]),
          ),
          includeByDefault: Schema.optional(Schema.Boolean),
          rules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                source: Schema.optional(Schema.String),
                description: Schema.optional(Schema.String),
                azureEndpointGuid: Schema.optional(Schema.String),
                azureEndpointName: Schema.optional(Schema.String),
                id: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ListAssociatedTrafficFiltersListOutput>;

// The operation
/**
 * List all traffic filters associated with your Elastic monitor resource, helping you manage network traffic control.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const listAssociatedTrafficFiltersList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ListAssociatedTrafficFiltersListInput,
    outputSchema: ListAssociatedTrafficFiltersListOutput,
  }));
// Input Schema
export interface MonitoredResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const MonitoredResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/listMonitoredResources",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<MonitoredResourcesListInput>;

// Output Schema
export interface MonitoredResourcesListOutput {
  value: {
    id?: string;
    sendingLogs?: "True" | "False";
    reasonForLogsStatus?: string;
  }[];
  nextLink?: string;
}
export const MonitoredResourcesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        sendingLogs: Schema.optional(Schema.Literals(["True", "False"])),
        reasonForLogsStatus: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MonitoredResourcesListOutput>;

// The operation
/**
 * List all resources currently being monitored by the Elastic monitor resource, helping you manage observability.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitoredResourcesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitoredResourcesListInput,
  outputSchema: MonitoredResourcesListOutput,
}));
// Input Schema
export interface MonitoredSubscriptionsCreateorUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  configurationName: string;
  properties?: {
    operation?:
      | "AddBegin"
      | "AddComplete"
      | "DeleteBegin"
      | "DeleteComplete"
      | "Active";
    monitoredSubscriptionList?: {
      subscriptionId: string;
      status?: "InProgress" | "Active" | "Failed" | "Deleting";
      error?: string;
      tagRules?: {
        provisioningState?:
          | "Accepted"
          | "Creating"
          | "Updating"
          | "Deleting"
          | "Succeeded"
          | "Failed"
          | "Canceled"
          | "Deleted"
          | "NotSpecified";
        logRules?: {
          sendAadLogs?: boolean;
          sendSubscriptionLogs?: boolean;
          sendActivityLogs?: boolean;
          filteringTags?: {
            name?: string;
            value?: string;
            action?: "Include" | "Exclude";
          }[];
        };
      };
    }[];
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "NotSpecified";
  };
}
export const MonitoredSubscriptionsCreateorUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        operation: Schema.optional(
          Schema.Literals([
            "AddBegin",
            "AddComplete",
            "DeleteBegin",
            "DeleteComplete",
            "Active",
          ]),
        ),
        monitoredSubscriptionList: Schema.optional(
          Schema.Array(
            Schema.Struct({
              subscriptionId: Schema.String,
              status: Schema.optional(
                Schema.Literals(["InProgress", "Active", "Failed", "Deleting"]),
              ),
              error: Schema.optional(Schema.String),
              tagRules: Schema.optional(
                Schema.Struct({
                  provisioningState: Schema.optional(
                    Schema.Literals([
                      "Accepted",
                      "Creating",
                      "Updating",
                      "Deleting",
                      "Succeeded",
                      "Failed",
                      "Canceled",
                      "Deleted",
                      "NotSpecified",
                    ]),
                  ),
                  logRules: Schema.optional(
                    Schema.Struct({
                      sendAadLogs: Schema.optional(Schema.Boolean),
                      sendSubscriptionLogs: Schema.optional(Schema.Boolean),
                      sendActivityLogs: Schema.optional(Schema.Boolean),
                      filteringTags: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            value: Schema.optional(Schema.String),
                            action: Schema.optional(
                              Schema.Literals(["Include", "Exclude"]),
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleted",
            "NotSpecified",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/monitoredSubscriptions/{configurationName}",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<MonitoredSubscriptionsCreateorUpdateInput>;

// Output Schema
export interface MonitoredSubscriptionsCreateorUpdateOutput {
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
export const MonitoredSubscriptionsCreateorUpdateOutput =
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
  }) as unknown as Schema.Codec<MonitoredSubscriptionsCreateorUpdateOutput>;

// The operation
/**
 * Add subscriptions to be monitored by the Elastic monitor resource, enabling observability and monitoring.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const MonitoredSubscriptionsCreateorUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MonitoredSubscriptionsCreateorUpdateInput,
    outputSchema: MonitoredSubscriptionsCreateorUpdateOutput,
  }));
// Input Schema
export interface MonitoredSubscriptionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  configurationName: string;
}
export const MonitoredSubscriptionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/monitoredSubscriptions/{configurationName}",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<MonitoredSubscriptionsDeleteInput>;

// Output Schema
export type MonitoredSubscriptionsDeleteOutput = void;
export const MonitoredSubscriptionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MonitoredSubscriptionsDeleteOutput>;

// The operation
/**
 * Delete subscriptions being monitored by the Elastic monitor resource, removing their observability and monitoring capabilities.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param configurationName - The configuration name. Only 'default' value is supported.
 */
export const MonitoredSubscriptionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MonitoredSubscriptionsDeleteInput,
    outputSchema: MonitoredSubscriptionsDeleteOutput,
  }));
// Input Schema
export interface MonitoredSubscriptionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  configurationName: string;
}
export const MonitoredSubscriptionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/monitoredSubscriptions/{configurationName}",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<MonitoredSubscriptionsGetInput>;

// Output Schema
export interface MonitoredSubscriptionsGetOutput {
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
export const MonitoredSubscriptionsGetOutput =
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
  }) as unknown as Schema.Codec<MonitoredSubscriptionsGetOutput>;

// The operation
/**
 * Get detailed information about all subscriptions currently being monitored by the Elastic monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param configurationName - The configuration name. Only 'default' value is supported.
 */
export const MonitoredSubscriptionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitoredSubscriptionsGetInput,
  outputSchema: MonitoredSubscriptionsGetOutput,
}));
// Input Schema
export interface MonitoredSubscriptionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const MonitoredSubscriptionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/monitoredSubscriptions",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<MonitoredSubscriptionsListInput>;

// Output Schema
export interface MonitoredSubscriptionsListOutput {
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
export const MonitoredSubscriptionsListOutput =
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
  }) as unknown as Schema.Codec<MonitoredSubscriptionsListOutput>;

// The operation
/**
 * List all subscriptions currently being monitored by the Elastic monitor resource, helping you manage observability.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitoredSubscriptionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitoredSubscriptionsListInput,
  outputSchema: MonitoredSubscriptionsListOutput,
}));
// Input Schema
export interface MonitoredSubscriptionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  configurationName: string;
  properties?: {
    operation?:
      | "AddBegin"
      | "AddComplete"
      | "DeleteBegin"
      | "DeleteComplete"
      | "Active";
    monitoredSubscriptionList?: {
      subscriptionId: string;
      status?: "InProgress" | "Active" | "Failed" | "Deleting";
      error?: string;
      tagRules?: {
        provisioningState?:
          | "Accepted"
          | "Creating"
          | "Updating"
          | "Deleting"
          | "Succeeded"
          | "Failed"
          | "Canceled"
          | "Deleted"
          | "NotSpecified";
        logRules?: {
          sendAadLogs?: boolean;
          sendSubscriptionLogs?: boolean;
          sendActivityLogs?: boolean;
          filteringTags?: {
            name?: string;
            value?: string;
            action?: "Include" | "Exclude";
          }[];
        };
      };
    }[];
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "NotSpecified";
  };
}
export const MonitoredSubscriptionsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        operation: Schema.optional(
          Schema.Literals([
            "AddBegin",
            "AddComplete",
            "DeleteBegin",
            "DeleteComplete",
            "Active",
          ]),
        ),
        monitoredSubscriptionList: Schema.optional(
          Schema.Array(
            Schema.Struct({
              subscriptionId: Schema.String,
              status: Schema.optional(
                Schema.Literals(["InProgress", "Active", "Failed", "Deleting"]),
              ),
              error: Schema.optional(Schema.String),
              tagRules: Schema.optional(
                Schema.Struct({
                  provisioningState: Schema.optional(
                    Schema.Literals([
                      "Accepted",
                      "Creating",
                      "Updating",
                      "Deleting",
                      "Succeeded",
                      "Failed",
                      "Canceled",
                      "Deleted",
                      "NotSpecified",
                    ]),
                  ),
                  logRules: Schema.optional(
                    Schema.Struct({
                      sendAadLogs: Schema.optional(Schema.Boolean),
                      sendSubscriptionLogs: Schema.optional(Schema.Boolean),
                      sendActivityLogs: Schema.optional(Schema.Boolean),
                      filteringTags: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            value: Schema.optional(Schema.String),
                            action: Schema.optional(
                              Schema.Literals(["Include", "Exclude"]),
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleted",
            "NotSpecified",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/monitoredSubscriptions/{configurationName}",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<MonitoredSubscriptionsUpdateInput>;

// Output Schema
export interface MonitoredSubscriptionsUpdateOutput {
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
export const MonitoredSubscriptionsUpdateOutput =
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
  }) as unknown as Schema.Codec<MonitoredSubscriptionsUpdateOutput>;

// The operation
/**
 * Update subscriptions to be monitored by the Elastic monitor resource, ensuring optimal observability and performance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const MonitoredSubscriptionsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MonitoredSubscriptionsUpdateInput,
    outputSchema: MonitoredSubscriptionsUpdateOutput,
  }));
// Input Schema
export interface MonitorsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "NotSpecified";
    monitoringStatus?: "Enabled" | "Disabled";
    elasticProperties?: {
      elasticCloudUser?: {
        emailAddress?: string;
        id?: string;
        elasticCloudSsoDefaultUrl?: string;
      };
      elasticCloudDeployment?: {
        name?: string;
        deploymentId?: string;
        azureSubscriptionId?: string;
        elasticsearchRegion?: string;
        elasticsearchServiceUrl?: string;
        kibanaServiceUrl?: string;
        kibanaSsoUrl?: string;
      };
    };
    userInfo?: {
      firstName?: string;
      lastName?: string;
      companyName?: string;
      emailAddress?: string;
      companyInfo?: {
        domain?: string;
        business?: string;
        employeesNumber?: string;
        state?: string;
        country?: string;
      };
    };
    planDetails?: {
      offerID?: string;
      publisherID?: string;
      termID?: string;
      planID?: string;
      planName?: string;
    };
    version?: string;
    subscriptionState?: string;
    saaSAzureSubscriptionStatus?: string;
    sourceCampaignName?: string;
    sourceCampaignId?: string;
    liftrResourceCategory?: "Unknown" | "MonitorLogs";
    liftrResourcePreference?: number;
    generateApiKey?: boolean;
    hostingType?: "Hosted" | "Serverless";
    projectDetails?: {
      projectType?:
        | "Elasticsearch"
        | "Observability"
        | "Security"
        | "NotApplicable";
      configurationType?:
        | "GeneralPurpose"
        | "Vector"
        | "TimeSeries"
        | "NotApplicable";
    };
  };
  kind?: string;
  sku?: { name: string };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned";
  };
  tags?: Record<string, string>;
  location: string;
}
export const MonitorsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Creating",
          "Updating",
          "Deleting",
          "Succeeded",
          "Failed",
          "Canceled",
          "Deleted",
          "NotSpecified",
        ]),
      ),
      monitoringStatus: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      elasticProperties: Schema.optional(
        Schema.Struct({
          elasticCloudUser: Schema.optional(
            Schema.Struct({
              emailAddress: Schema.optional(Schema.String),
              id: Schema.optional(Schema.String),
              elasticCloudSsoDefaultUrl: Schema.optional(Schema.String),
            }),
          ),
          elasticCloudDeployment: Schema.optional(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              deploymentId: Schema.optional(Schema.String),
              azureSubscriptionId: Schema.optional(Schema.String),
              elasticsearchRegion: Schema.optional(Schema.String),
              elasticsearchServiceUrl: Schema.optional(Schema.String),
              kibanaServiceUrl: Schema.optional(Schema.String),
              kibanaSsoUrl: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      userInfo: Schema.optional(
        Schema.Struct({
          firstName: Schema.optional(Schema.String),
          lastName: Schema.optional(Schema.String),
          companyName: Schema.optional(Schema.String),
          emailAddress: Schema.optional(Schema.String),
          companyInfo: Schema.optional(
            Schema.Struct({
              domain: Schema.optional(Schema.String),
              business: Schema.optional(Schema.String),
              employeesNumber: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      planDetails: Schema.optional(
        Schema.Struct({
          offerID: Schema.optional(Schema.String),
          publisherID: Schema.optional(Schema.String),
          termID: Schema.optional(Schema.String),
          planID: Schema.optional(Schema.String),
          planName: Schema.optional(Schema.String),
        }),
      ),
      version: Schema.optional(Schema.String),
      subscriptionState: Schema.optional(Schema.String),
      saaSAzureSubscriptionStatus: Schema.optional(Schema.String),
      sourceCampaignName: Schema.optional(Schema.String),
      sourceCampaignId: Schema.optional(Schema.String),
      liftrResourceCategory: Schema.optional(
        Schema.Literals(["Unknown", "MonitorLogs"]),
      ),
      liftrResourcePreference: Schema.optional(Schema.Number),
      generateApiKey: Schema.optional(Schema.Boolean),
      hostingType: Schema.optional(Schema.Literals(["Hosted", "Serverless"])),
      projectDetails: Schema.optional(
        Schema.Struct({
          projectType: Schema.optional(
            Schema.Literals([
              "Elasticsearch",
              "Observability",
              "Security",
              "NotApplicable",
            ]),
          ),
          configurationType: Schema.optional(
            Schema.Literals([
              "GeneralPurpose",
              "Vector",
              "TimeSeries",
              "NotApplicable",
            ]),
          ),
        }),
      ),
    }),
  ),
  kind: Schema.optional(Schema.String),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.optional(Schema.Literals(["SystemAssigned"])),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<MonitorsCreateInput>;

// Output Schema
export interface MonitorsCreateOutput {
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
export const MonitorsCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MonitorsCreateOutput>;

// The operation
/**
 * Create a new Elastic monitor resource in your Azure subscription, enabling observability and monitoring of your Azure resources through Elastic.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const MonitorsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsCreateInput,
  outputSchema: MonitorsCreateOutput,
}));
// Input Schema
export interface MonitorsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const MonitorsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<MonitorsDeleteInput>;

// Output Schema
export type MonitorsDeleteOutput = void;
export const MonitorsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MonitorsDeleteOutput>;

// The operation
/**
 * Delete an existing Elastic monitor resource from your Azure subscription, removing its observability and monitoring capabilities.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitorsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsDeleteInput,
  outputSchema: MonitorsDeleteOutput,
}));
// Input Schema
export interface MonitorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const MonitorsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<MonitorsGetInput>;

// Output Schema
export interface MonitorsGetOutput {
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
export const MonitorsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MonitorsGetOutput>;

// The operation
/**
 * Get detailed properties of a specific Elastic monitor resource, helping you manage observability and performance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitorsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsGetInput,
  outputSchema: MonitorsGetOutput,
}));
// Input Schema
export interface MonitorsListInput {
  subscriptionId: string;
}
export const MonitorsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Elastic/monitors",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<MonitorsListInput>;

// Output Schema
export interface MonitorsListOutput {
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
export const MonitorsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MonitorsListOutput>;

// The operation
/**
 * List all Elastic monitor resources within a specified subscription, helping you audit and manage your monitoring setup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const MonitorsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsListInput,
  outputSchema: MonitorsListOutput,
}));
// Input Schema
export interface MonitorsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const MonitorsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<MonitorsListByResourceGroupInput>;

// Output Schema
export interface MonitorsListByResourceGroupOutput {
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
export const MonitorsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<MonitorsListByResourceGroupOutput>;

// The operation
/**
 * List all Elastic monitor resources within a specified resource group of the subscription, helping you audit and manage your monitoring setup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const MonitorsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsListByResourceGroupInput,
  outputSchema: MonitorsListByResourceGroupOutput,
}));
// Input Schema
export interface MonitorsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  tags?: Record<string, string>;
}
export const MonitorsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<MonitorsUpdateInput>;

// Output Schema
export interface MonitorsUpdateOutput {
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
export const MonitorsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MonitorsUpdateOutput>;

// The operation
/**
 * Update an existing Elastic monitor resource in your Azure subscription, ensuring optimal observability and performance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const MonitorsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsUpdateInput,
  outputSchema: MonitorsUpdateOutput,
}));
// Input Schema
export interface MonitorUpgradeInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  version?: string;
}
export const MonitorUpgradeInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
  version: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/upgrade",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<MonitorUpgradeInput>;

// Output Schema
export type MonitorUpgradeOutput = void;
export const MonitorUpgradeOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MonitorUpgradeOutput>;

// The operation
/**
 * Upgrade the Elastic monitor resource to a newer version, ensuring optimal observability and performance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitorUpgrade = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorUpgradeInput,
  outputSchema: MonitorUpgradeOutput,
}));
// Input Schema
export interface OpenAICreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  integrationName: string;
  properties?: {
    openAIResourceId?: string;
    openAIResourceEndpoint?: string;
    openAIConnectorId?: string;
    key?: string;
    lastRefreshAt?: string;
  };
}
export const OpenAICreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    integrationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        openAIResourceId: Schema.optional(Schema.String),
        openAIResourceEndpoint: Schema.optional(Schema.String),
        openAIConnectorId: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
        lastRefreshAt: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/openAIIntegrations/{integrationName}",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<OpenAICreateOrUpdateInput>;

// Output Schema
export interface OpenAICreateOrUpdateOutput {
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
export const OpenAICreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<OpenAICreateOrUpdateOutput>;

// The operation
/**
 * Create or update an OpenAI integration rule for a given Elastic monitor resource, enabling advanced AI-driven observability and monitoring.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const OpenAICreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: OpenAICreateOrUpdateInput,
  outputSchema: OpenAICreateOrUpdateOutput,
}));
// Input Schema
export interface OpenAIDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  integrationName: string;
}
export const OpenAIDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
  integrationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/openAIIntegrations/{integrationName}",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<OpenAIDeleteInput>;

// Output Schema
export type OpenAIDeleteOutput = void;
export const OpenAIDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<OpenAIDeleteOutput>;

// The operation
/**
 * Delete an OpenAI integration rule for a given Elastic monitor resource, removing AI-driven observability and monitoring capabilities.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param integrationName - OpenAI Integration name
 */
export const OpenAIDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: OpenAIDeleteInput,
  outputSchema: OpenAIDeleteOutput,
}));
// Input Schema
export interface OpenAIGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  integrationName: string;
}
export const OpenAIGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
  integrationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/openAIIntegrations/{integrationName}",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<OpenAIGetInput>;

// Output Schema
export interface OpenAIGetOutput {
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
export const OpenAIGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<OpenAIGetOutput>;

// The operation
/**
 * Get detailed information about OpenAI integration rules for a given Elastic monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param integrationName - OpenAI Integration name
 */
export const OpenAIGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OpenAIGetInput,
  outputSchema: OpenAIGetOutput,
}));
// Input Schema
export interface OpenAIGetStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  integrationName: string;
}
export const OpenAIGetStatusInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
  integrationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/openAIIntegrations/{integrationName}/getStatus",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<OpenAIGetStatusInput>;

// Output Schema
export interface OpenAIGetStatusOutput {
  properties?: { status?: string };
}
export const OpenAIGetStatusOutput = /*@__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.Struct({
      status: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<OpenAIGetStatusOutput>;

// The operation
/**
 * Get the status of OpenAI integration for a given Elastic monitor resource, ensuring optimal observability and performance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param integrationName - OpenAI Integration name
 */
export const OpenAIGetStatus = /*@__PURE__*/ API.make(() => ({
  inputSchema: OpenAIGetStatusInput,
  outputSchema: OpenAIGetStatusOutput,
}));
// Input Schema
export interface OpenAIListInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const OpenAIListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/openAIIntegrations",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<OpenAIListInput>;

// Output Schema
export interface OpenAIListOutput {
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
export const OpenAIListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<OpenAIListOutput>;

// The operation
/**
 * List all OpenAI integration rules for a given Elastic monitor resource, helping you manage AI-driven observability and monitoring.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const OpenAIList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OpenAIListInput,
  outputSchema: OpenAIListOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Elastic/operations",
    apiVersion: "2025-06-01",
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
export interface OrganizationsGetApiKeyInput {
  subscriptionId: string;
  emailId?: string;
}
export const OrganizationsGetApiKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    emailId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Elastic/getOrganizationApiKey",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<OrganizationsGetApiKeyInput>;

// Output Schema
export interface OrganizationsGetApiKeyOutput {
  properties?: { apiKey?: Redacted.Redacted<string> };
}
export const OrganizationsGetApiKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        apiKey: Schema.optional(SensitiveOutputString),
      }),
    ),
  }) as unknown as Schema.Codec<OrganizationsGetApiKeyOutput>;

// The operation
/**
 * Fetch the User API Key from the internal database, if it was generated and stored during the creation of the Elasticsearch Organization.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const OrganizationsGetApiKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: OrganizationsGetApiKeyInput,
  outputSchema: OrganizationsGetApiKeyOutput,
}));
// Input Schema
export interface OrganizationsGetElasticToAzureSubscriptionMappingInput {
  subscriptionId: string;
}
export const OrganizationsGetElasticToAzureSubscriptionMappingInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Elastic/getElasticOrganizationToAzureSubscriptionMapping",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<OrganizationsGetElasticToAzureSubscriptionMappingInput>;

// Output Schema
export interface OrganizationsGetElasticToAzureSubscriptionMappingOutput {
  properties?: {
    billedAzureSubscriptionId?: string;
    marketplaceSaasInfo?: {
      marketplaceSubscription?: {
        id?: string;
        publisherId?: string;
        offerId?: string;
      };
      marketplaceName?: string;
      marketplaceResourceId?: string;
      marketplaceStatus?: string;
      billedAzureSubscriptionId?: string;
      subscribed?: boolean;
    };
    elasticOrganizationId?: string;
    elasticOrganizationName?: string;
  };
}
export const OrganizationsGetElasticToAzureSubscriptionMappingOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        billedAzureSubscriptionId: Schema.optional(Schema.String),
        marketplaceSaasInfo: Schema.optional(
          Schema.Struct({
            marketplaceSubscription: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                publisherId: Schema.optional(Schema.String),
                offerId: Schema.optional(Schema.String),
              }),
            ),
            marketplaceName: Schema.optional(Schema.String),
            marketplaceResourceId: Schema.optional(Schema.String),
            marketplaceStatus: Schema.optional(Schema.String),
            billedAzureSubscriptionId: Schema.optional(Schema.String),
            subscribed: Schema.optional(Schema.Boolean),
          }),
        ),
        elasticOrganizationId: Schema.optional(Schema.String),
        elasticOrganizationName: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<OrganizationsGetElasticToAzureSubscriptionMappingOutput>;

// The operation
/**
 * Retrieve mapping details between the Elastic Organization and Azure Subscription for the logged-in user.
 *
 * >;
 * /**
 * Retrieve mapping details between the Elastic Organization and Azure Subscription for the logged-in user.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const OrganizationsGetElasticToAzureSubscriptionMapping =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OrganizationsGetElasticToAzureSubscriptionMappingInput,
    outputSchema: OrganizationsGetElasticToAzureSubscriptionMappingOutput,
  }));
// Input Schema
export interface OrganizationsResubscribeInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  planId?: string;
  term?: string;
  resourceGroup?: string;
  organizationId?: string;
}
export const OrganizationsResubscribeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    planId: Schema.optional(Schema.String),
    term: Schema.optional(Schema.String),
    resourceGroup: Schema.optional(Schema.String),
    organizationId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/resubscribe",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<OrganizationsResubscribeInput>;

// Output Schema
export interface OrganizationsResubscribeOutput {
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
export const OrganizationsResubscribeOutput =
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
  }) as unknown as Schema.Codec<OrganizationsResubscribeOutput>;

// The operation
/**
 * Resubscribe the Elasticsearch Organization.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const OrganizationsResubscribe = /*@__PURE__*/ API.make(() => ({
  inputSchema: OrganizationsResubscribeInput,
  outputSchema: OrganizationsResubscribeOutput,
}));
// Input Schema
export interface TagRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  ruleSetName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "NotSpecified";
    logRules?: {
      sendAadLogs?: boolean;
      sendSubscriptionLogs?: boolean;
      sendActivityLogs?: boolean;
      filteringTags?: {
        name?: string;
        value?: string;
        action?: "Include" | "Exclude";
      }[];
    };
  };
}
export const TagRulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    ruleSetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleted",
            "NotSpecified",
          ]),
        ),
        logRules: Schema.optional(
          Schema.Struct({
            sendAadLogs: Schema.optional(Schema.Boolean),
            sendSubscriptionLogs: Schema.optional(Schema.Boolean),
            sendActivityLogs: Schema.optional(Schema.Boolean),
            filteringTags: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                  action: Schema.optional(
                    Schema.Literals(["Include", "Exclude"]),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/tagRules/{ruleSetName}",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<TagRulesCreateOrUpdateInput>;

// Output Schema
export interface TagRulesCreateOrUpdateOutput {
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
export const TagRulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<TagRulesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a tag rule set for a given Elastic monitor resource, enabling fine-grained control over observability based on resource tags.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const TagRulesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TagRulesCreateOrUpdateInput,
  outputSchema: TagRulesCreateOrUpdateOutput,
}));
// Input Schema
export interface TagRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  ruleSetName: string;
}
export const TagRulesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
  ruleSetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/tagRules/{ruleSetName}",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<TagRulesDeleteInput>;

// Output Schema
export type TagRulesDeleteOutput = void;
export const TagRulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TagRulesDeleteOutput>;

// The operation
/**
 * Delete a tag rule set for a given Elastic monitor resource, removing fine-grained control over observability based on resource tags.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param ruleSetName - Tag Rule Set resource name
 */
export const TagRulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: TagRulesDeleteInput,
  outputSchema: TagRulesDeleteOutput,
}));
// Input Schema
export interface TagRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  ruleSetName: string;
}
export const TagRulesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
  ruleSetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/tagRules/{ruleSetName}",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<TagRulesGetInput>;

// Output Schema
export interface TagRulesGetOutput {
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
export const TagRulesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TagRulesGetOutput>;

// The operation
/**
 * Get detailed information about a tag rule set for a given Elastic monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param ruleSetName - Tag Rule Set resource name
 */
export const TagRulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: TagRulesGetInput,
  outputSchema: TagRulesGetOutput,
}));
// Input Schema
export interface TagRulesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const TagRulesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/tagRules",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<TagRulesListInput>;

// Output Schema
export interface TagRulesListOutput {
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
export const TagRulesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TagRulesListOutput>;

// The operation
/**
 * List all tag rules for a given Elastic monitor resource, helping you manage fine-grained control over observability based on resource tags.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const TagRulesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: TagRulesListInput,
  outputSchema: TagRulesListOutput,
}));
// Input Schema
export interface TrafficFiltersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  rulesetId?: string;
}
export const TrafficFiltersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    rulesetId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/deleteTrafficFilter",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<TrafficFiltersDeleteInput>;

// Output Schema
export type TrafficFiltersDeleteOutput = void;
export const TrafficFiltersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TrafficFiltersDeleteOutput>;

// The operation
/**
 * Delete an existing traffic filter associated with your Elastic monitor resource, removing its network traffic control capabilities.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param rulesetId - Ruleset Id of the filter
 */
export const TrafficFiltersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: TrafficFiltersDeleteInput,
  outputSchema: TrafficFiltersDeleteOutput,
}));
// Input Schema
export interface UpgradableVersionsDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const UpgradableVersionsDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/listUpgradableVersions",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<UpgradableVersionsDetailsInput>;

// Output Schema
export interface UpgradableVersionsDetailsOutput {
  currentVersion?: string;
  upgradableVersions?: string[];
}
export const UpgradableVersionsDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    currentVersion: Schema.optional(Schema.String),
    upgradableVersions: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<UpgradableVersionsDetailsOutput>;

// The operation
/**
 * List all upgradable versions for your Elastic monitor resource, helping you plan and execute upgrades.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const UpgradableVersionsDetails = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpgradableVersionsDetailsInput,
  outputSchema: UpgradableVersionsDetailsOutput,
}));
// Input Schema
export interface VMCollectionUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  vmResourceId?: string;
  operationName?: "Add" | "Delete";
}
export const VMCollectionUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    vmResourceId: Schema.optional(Schema.String),
    operationName: Schema.optional(Schema.Literals(["Add", "Delete"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/vmCollectionUpdate",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<VMCollectionUpdateInput>;

// Output Schema
export type VMCollectionUpdateOutput = void;
export const VMCollectionUpdateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VMCollectionUpdateOutput>;

// The operation
/**
 * Update the VM details that will be monitored by the Elastic monitor resource, ensuring optimal observability and performance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const VMCollectionUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VMCollectionUpdateInput,
  outputSchema: VMCollectionUpdateOutput,
}));
// Input Schema
export interface VMHostListInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const VMHostListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/listVMHost",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<VMHostListInput>;

// Output Schema
export interface VMHostListOutput {
  value: { vmResourceId?: string }[];
  nextLink?: string;
}
export const VMHostListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      vmResourceId: Schema.optional(Schema.String),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<VMHostListOutput>;

// The operation
/**
 * List all VM resources currently being monitored by the Elastic monitor resource, helping you manage observability.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const VMHostList = /*@__PURE__*/ API.make(() => ({
  inputSchema: VMHostListInput,
  outputSchema: VMHostListOutput,
}));
// Input Schema
export interface VMIngestionDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const VMIngestionDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/vmIngestionDetails",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<VMIngestionDetailsInput>;

// Output Schema
export interface VMIngestionDetailsOutput {
  cloudId?: string;
  ingestionKey?: string;
}
export const VMIngestionDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    cloudId: Schema.optional(Schema.String),
    ingestionKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VMIngestionDetailsOutput>;

// The operation
/**
 * List detailed information about VM ingestion that will be monitored by the Elastic monitor resource, ensuring optimal observability and performance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const VMIngestionDetails = /*@__PURE__*/ API.make(() => ({
  inputSchema: VMIngestionDetailsInput,
  outputSchema: VMIngestionDetailsOutput,
}));
