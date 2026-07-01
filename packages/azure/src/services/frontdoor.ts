/**
 * Azure Frontdoor API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface EndpointsPurgeContentInput {
  subscriptionId: string;
  resourceGroupName: string;
  frontDoorName: string;
  contentPaths: string[];
}
export const EndpointsPurgeContentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    frontDoorName: Schema.String.pipe(T.PathParam()),
    contentPaths: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/purge",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<EndpointsPurgeContentInput>;

// Output Schema
export type EndpointsPurgeContentOutput = void;
export const EndpointsPurgeContentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<EndpointsPurgeContentOutput>;

// The operation
/**
 * Removes a content from Front Door.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param frontDoorName - Name of the Front Door which is globally unique.
 */
export const EndpointsPurgeContent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EndpointsPurgeContentInput,
    outputSchema: EndpointsPurgeContentOutput,
  }),
);
// Input Schema
export interface ExperimentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  experimentName: string;
  properties?: {
    description?: string;
    endpointA?: { name?: string; endpoint?: string };
    endpointB?: { name?: string; endpoint?: string };
    enabledState?: "Enabled" | "Disabled";
    resourceState?:
      | "Creating"
      | "Enabling"
      | "Enabled"
      | "Disabling"
      | "Disabled"
      | "Deleting";
    status?: string;
    scriptFileUri?: string;
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const ExperimentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    experimentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        endpointA: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            endpoint: Schema.optional(Schema.String),
          }),
        ),
        endpointB: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            endpoint: Schema.optional(Schema.String),
          }),
        ),
        enabledState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        resourceState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Enabling",
            "Enabled",
            "Disabling",
            "Disabled",
            "Deleting",
          ]),
        ),
        status: Schema.optional(Schema.String),
        scriptFileUri: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<ExperimentsCreateOrUpdateInput>;

// Output Schema
export interface ExperimentsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const ExperimentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<ExperimentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an Experiment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The Profile identifier associated with the Tenant and Partner
 * @param experimentName - The Experiment identifier associated with the Experiment
 */
export const ExperimentsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExperimentsCreateOrUpdateInput,
    outputSchema: ExperimentsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ExperimentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  experimentName: string;
}
export const ExperimentsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    experimentName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<ExperimentsDeleteInput>;

// Output Schema
export type ExperimentsDeleteOutput = void;
export const ExperimentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ExperimentsDeleteOutput>;

// The operation
/**
 * Deletes an Experiment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The Profile identifier associated with the Tenant and Partner
 * @param experimentName - The Experiment identifier associated with the Experiment
 */
export const ExperimentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsDeleteInput,
  outputSchema: ExperimentsDeleteOutput,
}));
// Input Schema
export interface ExperimentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  experimentName: string;
}
export const ExperimentsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  experimentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<ExperimentsGetInput>;

// Output Schema
export interface ExperimentsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const ExperimentsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<ExperimentsGetOutput>;

// The operation
/**
 * Gets an Experiment by ExperimentName
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The Profile identifier associated with the Tenant and Partner
 * @param experimentName - The Experiment identifier associated with the Experiment
 */
export const ExperimentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsGetInput,
  outputSchema: ExperimentsGetOutput,
}));
// Input Schema
export interface ExperimentsListByProfileInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const ExperimentsListByProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<ExperimentsListByProfileInput>;

// Output Schema
export interface ExperimentsListByProfileOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const ExperimentsListByProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ExperimentsListByProfileOutput>;

// The operation
/**
 * Gets a list of Experiments
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The Profile identifier associated with the Tenant and Partner
 */
export const ExperimentsListByProfile = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExperimentsListByProfileInput,
    outputSchema: ExperimentsListByProfileOutput,
  }),
);
// Input Schema
export interface ExperimentsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  experimentName: string;
  tags?: Record<string, string>;
  properties?: { description?: string; enabledState?: "Enabled" | "Disabled" };
}
export const ExperimentsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    experimentName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        enabledState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      }),
    ),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<ExperimentsUpdateInput>;

// Output Schema
export interface ExperimentsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const ExperimentsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<ExperimentsUpdateOutput>;

// The operation
/**
 * Updates an Experiment by Experiment id
 *
 * Updates an Experiment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The Profile identifier associated with the Tenant and Partner
 * @param experimentName - The Experiment identifier associated with the Experiment
 */
export const ExperimentsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsUpdateInput,
  outputSchema: ExperimentsUpdateOutput,
}));
// Input Schema
export interface FrontDoorNameAvailabilityCheckInput {
  name: string;
  type:
    | "Microsoft.Network/frontDoors"
    | "Microsoft.Network/frontDoors/frontendEndpoints";
}
export const FrontDoorNameAvailabilityCheckInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.Network/frontDoors",
      "Microsoft.Network/frontDoors/frontendEndpoints",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Network/checkFrontDoorNameAvailability",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<FrontDoorNameAvailabilityCheckInput>;

// Output Schema
export interface FrontDoorNameAvailabilityCheckOutput {
  nameAvailability?: "Available" | "Unavailable";
  reason?: string;
  message?: string;
}
export const FrontDoorNameAvailabilityCheckOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailability: Schema.optional(
      Schema.Literals(["Available", "Unavailable"]),
    ),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FrontDoorNameAvailabilityCheckOutput>;

// The operation
/**
 * Check the availability of a Front Door resource name.
 *
 * @param api-version - The API version to use for this operation.
 */
export const FrontDoorNameAvailabilityCheck =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FrontDoorNameAvailabilityCheckInput,
    outputSchema: FrontDoorNameAvailabilityCheckOutput,
  }));
// Input Schema
export interface FrontDoorNameAvailabilityWithSubscriptionCheckInput {
  subscriptionId: string;
  name: string;
  type:
    | "Microsoft.Network/frontDoors"
    | "Microsoft.Network/frontDoors/frontendEndpoints";
}
export const FrontDoorNameAvailabilityWithSubscriptionCheckInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.Network/frontDoors",
      "Microsoft.Network/frontDoors/frontendEndpoints",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/checkFrontDoorNameAvailability",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<FrontDoorNameAvailabilityWithSubscriptionCheckInput>;

// Output Schema
export interface FrontDoorNameAvailabilityWithSubscriptionCheckOutput {
  nameAvailability?: "Available" | "Unavailable";
  reason?: string;
  message?: string;
}
export const FrontDoorNameAvailabilityWithSubscriptionCheckOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailability: Schema.optional(
      Schema.Literals(["Available", "Unavailable"]),
    ),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FrontDoorNameAvailabilityWithSubscriptionCheckOutput>;

// The operation
/**
 * Check the availability of a Front Door subdomain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const FrontDoorNameAvailabilityWithSubscriptionCheck =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FrontDoorNameAvailabilityWithSubscriptionCheckInput,
    outputSchema: FrontDoorNameAvailabilityWithSubscriptionCheckOutput,
  }));
// Input Schema
export interface FrontDoorsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  frontDoorName: string;
  properties?: {
    friendlyName?: string;
    routingRules?: { id?: string }[];
    loadBalancingSettings?: { id?: string }[];
    healthProbeSettings?: { id?: string }[];
    backendPools?: { id?: string }[];
    frontendEndpoints?: { id?: string; name?: string; type?: string }[];
    backendPoolsSettings?: {
      enforceCertificateNameCheck?: "Enabled" | "Disabled";
      sendRecvTimeoutSeconds?: number;
    };
    enabledState?: "Enabled" | "Disabled";
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const FrontDoorsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    frontDoorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        friendlyName: Schema.optional(Schema.String),
        routingRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
        loadBalancingSettings: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
        healthProbeSettings: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
        backendPools: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
        frontendEndpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        backendPoolsSettings: Schema.optional(
          Schema.Struct({
            enforceCertificateNameCheck: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            sendRecvTimeoutSeconds: Schema.optional(Schema.Number),
          }),
        ),
        enabledState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<FrontDoorsCreateOrUpdateInput>;

// Output Schema
export interface FrontDoorsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const FrontDoorsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<FrontDoorsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new Front Door with a Front Door name under the specified subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param frontDoorName - Name of the Front Door which is globally unique.
 */
export const FrontDoorsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FrontDoorsCreateOrUpdateInput,
    outputSchema: FrontDoorsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface FrontDoorsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  frontDoorName: string;
}
export const FrontDoorsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  frontDoorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<FrontDoorsDeleteInput>;

// Output Schema
export type FrontDoorsDeleteOutput = void;
export const FrontDoorsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FrontDoorsDeleteOutput>;

// The operation
/**
 * Deletes an existing Front Door with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param frontDoorName - Name of the Front Door which is globally unique.
 */
export const FrontDoorsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FrontDoorsDeleteInput,
  outputSchema: FrontDoorsDeleteOutput,
}));
// Input Schema
export interface FrontDoorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  frontDoorName: string;
}
export const FrontDoorsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  frontDoorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<FrontDoorsGetInput>;

// Output Schema
export interface FrontDoorsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const FrontDoorsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<FrontDoorsGetOutput>;

// The operation
/**
 * Gets a Front Door with the specified Front Door name under the specified subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param frontDoorName - Name of the Front Door which is globally unique.
 */
export const FrontDoorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FrontDoorsGetInput,
  outputSchema: FrontDoorsGetOutput,
}));
// Input Schema
export interface FrontDoorsListInput {
  subscriptionId: string;
}
export const FrontDoorsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/frontDoors",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<FrontDoorsListInput>;

// Output Schema
export interface FrontDoorsListOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const FrontDoorsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      location: Schema.optional(Schema.String),
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<FrontDoorsListOutput>;

// The operation
/**
 * Lists all of the Front Doors within an Azure subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const FrontDoorsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FrontDoorsListInput,
  outputSchema: FrontDoorsListOutput,
}));
// Input Schema
export interface FrontDoorsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const FrontDoorsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<FrontDoorsListByResourceGroupInput>;

// Output Schema
export interface FrontDoorsListByResourceGroupOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const FrontDoorsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FrontDoorsListByResourceGroupOutput>;

// The operation
/**
 * Lists all of the Front Doors within a resource group under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const FrontDoorsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FrontDoorsListByResourceGroupInput,
    outputSchema: FrontDoorsListByResourceGroupOutput,
  }));
// Input Schema
export interface FrontDoorsValidateCustomDomainInput {
  subscriptionId: string;
  resourceGroupName: string;
  frontDoorName: string;
  hostName: string;
}
export const FrontDoorsValidateCustomDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    frontDoorName: Schema.String.pipe(T.PathParam()),
    hostName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/validateCustomDomain",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<FrontDoorsValidateCustomDomainInput>;

// Output Schema
export interface FrontDoorsValidateCustomDomainOutput {
  customDomainValidated?: boolean;
  reason?: string;
  message?: string;
}
export const FrontDoorsValidateCustomDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customDomainValidated: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FrontDoorsValidateCustomDomainOutput>;

// The operation
/**
 * Validates the custom domain mapping to ensure it maps to the correct Front Door endpoint in DNS.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param frontDoorName - Name of the Front Door which is globally unique.
 */
export const FrontDoorsValidateCustomDomain =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FrontDoorsValidateCustomDomainInput,
    outputSchema: FrontDoorsValidateCustomDomainOutput,
  }));
// Input Schema
export interface FrontendEndpointsDisableHttpsInput {
  subscriptionId: string;
  resourceGroupName: string;
  frontDoorName: string;
  frontendEndpointName: string;
}
export const FrontendEndpointsDisableHttpsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    frontDoorName: Schema.String.pipe(T.PathParam()),
    frontendEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints/{frontendEndpointName}/disableHttps",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<FrontendEndpointsDisableHttpsInput>;

// Output Schema
export type FrontendEndpointsDisableHttpsOutput = void;
export const FrontendEndpointsDisableHttpsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FrontendEndpointsDisableHttpsOutput>;

// The operation
/**
 * Disables a frontendEndpoint for HTTPS traffic
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param frontDoorName - Name of the Front Door which is globally unique.
 * @param frontendEndpointName - Name of the Frontend endpoint which is unique within the Front Door.
 */
export const FrontendEndpointsDisableHttps =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FrontendEndpointsDisableHttpsInput,
    outputSchema: FrontendEndpointsDisableHttpsOutput,
  }));
// Input Schema
export interface FrontendEndpointsEnableHttpsInput {
  subscriptionId: string;
  resourceGroupName: string;
  frontDoorName: string;
  frontendEndpointName: string;
  certificateSource: "AzureKeyVault" | "FrontDoor";
  protocolType: "ServerNameIndication";
  minimumTlsVersion: "1.0" | "1.2";
  keyVaultCertificateSourceParameters?: {
    vault?: { id?: string };
    secretName?: string;
    secretVersion?: string;
  };
  frontDoorCertificateSourceParameters?: { certificateType?: "Dedicated" };
}
export const FrontendEndpointsEnableHttpsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    frontDoorName: Schema.String.pipe(T.PathParam()),
    frontendEndpointName: Schema.String.pipe(T.PathParam()),
    certificateSource: Schema.Literals(["AzureKeyVault", "FrontDoor"]),
    protocolType: Schema.Literals(["ServerNameIndication"]),
    minimumTlsVersion: Schema.Literals(["1.0", "1.2"]),
    keyVaultCertificateSourceParameters: Schema.optional(
      Schema.Struct({
        vault: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        secretName: Schema.optional(Schema.String),
        secretVersion: Schema.optional(Schema.String),
      }),
    ),
    frontDoorCertificateSourceParameters: Schema.optional(
      Schema.Struct({
        certificateType: Schema.optional(Schema.Literals(["Dedicated"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints/{frontendEndpointName}/enableHttps",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<FrontendEndpointsEnableHttpsInput>;

// Output Schema
export type FrontendEndpointsEnableHttpsOutput = void;
export const FrontendEndpointsEnableHttpsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FrontendEndpointsEnableHttpsOutput>;

// The operation
/**
 * Enables a frontendEndpoint for HTTPS traffic
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param frontDoorName - Name of the Front Door which is globally unique.
 * @param frontendEndpointName - Name of the Frontend endpoint which is unique within the Front Door.
 */
export const FrontendEndpointsEnableHttps =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FrontendEndpointsEnableHttpsInput,
    outputSchema: FrontendEndpointsEnableHttpsOutput,
  }));
// Input Schema
export interface FrontendEndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  frontDoorName: string;
  frontendEndpointName: string;
}
export const FrontendEndpointsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    frontDoorName: Schema.String.pipe(T.PathParam()),
    frontendEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints/{frontendEndpointName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<FrontendEndpointsGetInput>;

// Output Schema
export interface FrontendEndpointsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const FrontendEndpointsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FrontendEndpointsGetOutput>;

// The operation
/**
 * Gets a Frontend endpoint with the specified name within the specified Front Door.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param frontDoorName - Name of the Front Door which is globally unique.
 * @param frontendEndpointName - Name of the Frontend endpoint which is unique within the Front Door.
 */
export const FrontendEndpointsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FrontendEndpointsGetInput,
    outputSchema: FrontendEndpointsGetOutput,
  }),
);
// Input Schema
export interface FrontendEndpointsListByFrontDoorInput {
  subscriptionId: string;
  resourceGroupName: string;
  frontDoorName: string;
}
export const FrontendEndpointsListByFrontDoorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    frontDoorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<FrontendEndpointsListByFrontDoorInput>;

// Output Schema
export interface FrontendEndpointsListByFrontDoorOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const FrontendEndpointsListByFrontDoorOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FrontendEndpointsListByFrontDoorOutput>;

// The operation
/**
 * Lists all of the frontend endpoints within a Front Door.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param frontDoorName - Name of the Front Door which is globally unique.
 */
export const FrontendEndpointsListByFrontDoor =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FrontendEndpointsListByFrontDoorInput,
    outputSchema: FrontendEndpointsListByFrontDoorOutput,
  }));
// Input Schema
export interface ManagedRuleSetsListInput {
  subscriptionId: string;
}
export const ManagedRuleSetsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/frontDoorWebApplicationFirewallManagedRuleSets",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<ManagedRuleSetsListInput>;

// Output Schema
export interface ManagedRuleSetsListOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const ManagedRuleSetsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ManagedRuleSetsListOutput>;

// The operation
/**
 * Lists all available managed rule sets.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ManagedRuleSetsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ManagedRuleSetsListInput,
  outputSchema: ManagedRuleSetsListOutput,
}));
// Input Schema
export interface NetworkExperimentProfilesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  properties?: {
    resourceState?:
      | "Creating"
      | "Enabling"
      | "Enabled"
      | "Disabling"
      | "Disabled"
      | "Deleting";
    enabledState?: "Enabled" | "Disabled";
  };
  etag?: string;
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const NetworkExperimentProfilesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        resourceState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Enabling",
            "Enabled",
            "Disabling",
            "Disabled",
            "Deleting",
          ]),
        ),
        enabledState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      }),
    ),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<NetworkExperimentProfilesCreateOrUpdateInput>;

// Output Schema
export interface NetworkExperimentProfilesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const NetworkExperimentProfilesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<NetworkExperimentProfilesCreateOrUpdateOutput>;

// The operation
/**
 * Creates an NetworkExperiment Profile
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The Profile identifier associated with the Tenant and Partner
 */
export const NetworkExperimentProfilesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkExperimentProfilesCreateOrUpdateInput,
    outputSchema: NetworkExperimentProfilesCreateOrUpdateOutput,
  }));
// Input Schema
export interface NetworkExperimentProfilesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const NetworkExperimentProfilesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<NetworkExperimentProfilesDeleteInput>;

// Output Schema
export type NetworkExperimentProfilesDeleteOutput = void;
export const NetworkExperimentProfilesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkExperimentProfilesDeleteOutput>;

// The operation
/**
 * Deletes an NetworkExperiment Profile by ProfileName
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The Profile identifier associated with the Tenant and Partner
 */
export const NetworkExperimentProfilesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkExperimentProfilesDeleteInput,
    outputSchema: NetworkExperimentProfilesDeleteOutput,
  }));
// Input Schema
export interface NetworkExperimentProfilesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const NetworkExperimentProfilesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<NetworkExperimentProfilesGetInput>;

// Output Schema
export interface NetworkExperimentProfilesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const NetworkExperimentProfilesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<NetworkExperimentProfilesGetOutput>;

// The operation
/**
 * Gets an NetworkExperiment Profile by ProfileName
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The Profile identifier associated with the Tenant and Partner
 */
export const NetworkExperimentProfilesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkExperimentProfilesGetInput,
    outputSchema: NetworkExperimentProfilesGetOutput,
  }));
// Input Schema
export interface NetworkExperimentProfilesListInput {
  subscriptionId: string;
}
export const NetworkExperimentProfilesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/NetworkExperimentProfiles",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<NetworkExperimentProfilesListInput>;

// Output Schema
export interface NetworkExperimentProfilesListOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const NetworkExperimentProfilesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkExperimentProfilesListOutput>;

// The operation
/**
 * Gets a list of Network Experiment Profiles under a subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NetworkExperimentProfilesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkExperimentProfilesListInput,
    outputSchema: NetworkExperimentProfilesListOutput,
  }));
// Input Schema
export interface NetworkExperimentProfilesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const NetworkExperimentProfilesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<NetworkExperimentProfilesListByResourceGroupInput>;

// Output Schema
export interface NetworkExperimentProfilesListByResourceGroupOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const NetworkExperimentProfilesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkExperimentProfilesListByResourceGroupOutput>;

// The operation
/**
 * Gets a list of Network Experiment Profiles within a resource group under a subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkExperimentProfilesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkExperimentProfilesListByResourceGroupInput,
    outputSchema: NetworkExperimentProfilesListByResourceGroupOutput,
  }));
// Input Schema
export interface NetworkExperimentProfilesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  properties?: { enabledState?: "Enabled" | "Disabled" };
  tags?: Record<string, string>;
}
export const NetworkExperimentProfilesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        enabledState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<NetworkExperimentProfilesUpdateInput>;

// Output Schema
export interface NetworkExperimentProfilesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const NetworkExperimentProfilesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<NetworkExperimentProfilesUpdateOutput>;

// The operation
/**
 * Updates an NetworkExperimentProfiles by NetworkExperimentProfile name
 *
 * Updates an NetworkExperimentProfiles
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The Profile identifier associated with the Tenant and Partner
 */
export const NetworkExperimentProfilesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkExperimentProfilesUpdateInput,
    outputSchema: NetworkExperimentProfilesUpdateOutput,
  }));
// Input Schema
export interface PoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyName: string;
  properties?: {
    policySettings?: {
      enabledState?: "Disabled" | "Enabled";
      mode?: "Prevention" | "Detection";
      redirectUrl?: string;
      customBlockResponseStatusCode?: number;
      customBlockResponseBody?: string;
      requestBodyCheck?: "Disabled" | "Enabled";
      javascriptChallengeExpirationInMinutes?: number;
      captchaExpirationInMinutes?: number;
      logScrubbing?: {
        state?: "Enabled" | "Disabled";
        scrubbingRules?: {
          matchVariable:
            | "RequestIPAddress"
            | "RequestUri"
            | "QueryStringArgNames"
            | "RequestHeaderNames"
            | "RequestCookieNames"
            | "RequestBodyPostArgNames"
            | "RequestBodyJsonArgNames";
          selectorMatchOperator: "EqualsAny" | "Equals";
          selector?: string;
          state?: "Enabled" | "Disabled";
        }[];
      };
    };
    customRules?: {
      rules?: {
        name?: string;
        priority: number;
        enabledState?: "Disabled" | "Enabled";
        ruleType: "MatchRule" | "RateLimitRule";
        rateLimitDurationInMinutes?: number;
        rateLimitThreshold?: number;
        groupBy?: { variableName: "SocketAddr" | "GeoLocation" | "None" }[];
        matchConditions: {
          matchVariable:
            | "RemoteAddr"
            | "RequestMethod"
            | "QueryString"
            | "PostArgs"
            | "RequestUri"
            | "RequestHeader"
            | "RequestBody"
            | "Cookies"
            | "SocketAddr"
            | "JA4";
          selector?: string;
          operator:
            | "Any"
            | "IPMatch"
            | "GeoMatch"
            | "Equal"
            | "Contains"
            | "LessThan"
            | "GreaterThan"
            | "LessThanOrEqual"
            | "GreaterThanOrEqual"
            | "BeginsWith"
            | "EndsWith"
            | "RegEx"
            | "ServiceTagMatch"
            | "AsnMatch"
            | "ClientFingerprint";
          negateCondition?: boolean;
          matchValue: string[];
          transforms?: (
            | "Lowercase"
            | "Uppercase"
            | "Trim"
            | "UrlDecode"
            | "UrlEncode"
            | "RemoveNulls"
          )[];
        }[];
        action:
          | "Allow"
          | "Block"
          | "Log"
          | "Redirect"
          | "AnomalyScoring"
          | "JSChallenge"
          | "CAPTCHA";
      }[];
    };
    managedRules?: {
      managedRuleSets?: {
        ruleSetType: string;
        ruleSetVersion: string;
        ruleSetAction?: "Block" | "Log" | "Redirect";
        exclusions?: {
          matchVariable:
            | "RequestHeaderNames"
            | "RequestCookieNames"
            | "QueryStringArgNames"
            | "RequestBodyPostArgNames"
            | "RequestBodyJsonArgNames";
          selectorMatchOperator:
            | "Equals"
            | "Contains"
            | "StartsWith"
            | "EndsWith"
            | "EqualsAny";
          selector: string;
        }[];
        ruleGroupOverrides?: {
          ruleGroupName: string;
          exclusions?: {
            matchVariable:
              | "RequestHeaderNames"
              | "RequestCookieNames"
              | "QueryStringArgNames"
              | "RequestBodyPostArgNames"
              | "RequestBodyJsonArgNames";
            selectorMatchOperator:
              | "Equals"
              | "Contains"
              | "StartsWith"
              | "EndsWith"
              | "EqualsAny";
            selector: string;
          }[];
          rules?: {
            ruleId: string;
            enabledState?: "Disabled" | "Enabled";
            action?:
              | "Allow"
              | "Block"
              | "Log"
              | "Redirect"
              | "AnomalyScoring"
              | "JSChallenge"
              | "CAPTCHA";
            sensitivity?: "Low" | "Medium" | "High";
            exclusions?: {
              matchVariable:
                | "RequestHeaderNames"
                | "RequestCookieNames"
                | "QueryStringArgNames"
                | "RequestBodyPostArgNames"
                | "RequestBodyJsonArgNames";
              selectorMatchOperator:
                | "Equals"
                | "Contains"
                | "StartsWith"
                | "EndsWith"
                | "EqualsAny";
              selector: string;
            }[];
          }[];
        }[];
      }[];
      exceptionsList?: {
        exceptions?: {
          matchVariable: "RequestUri" | "SocketAddr" | "RequestHeaderNames";
          selectorMatchOperator?: "Equals";
          selector?: string;
          valueMatchOperator:
            | "Equals"
            | "Contains"
            | "StartsWith"
            | "EndsWith"
            | "EqualsAny"
            | "IPMatch";
          matchValues: string[];
          scopes: {
            ruleSetType: string;
            ruleSetVersion: string;
            ruleGroupScopes?: {
              ruleGroupName: string;
              ruleScopes?: { ruleId: string }[];
            }[];
          }[];
        }[];
      };
    };
    frontendEndpointLinks?: { id?: string }[];
    routingRuleLinks?: { id?: string }[];
    securityPolicyLinks?: { id?: string }[];
    provisioningState?: string;
    resourceState?:
      | "Creating"
      | "Enabling"
      | "Enabled"
      | "Disabling"
      | "Disabled"
      | "Deleting";
  };
  etag?: string;
  sku?: {
    name?:
      | "Classic_AzureFrontDoor"
      | "Standard_AzureFrontDoor"
      | "Premium_AzureFrontDoor";
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const PoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        policySettings: Schema.optional(
          Schema.Struct({
            enabledState: Schema.optional(
              Schema.Literals(["Disabled", "Enabled"]),
            ),
            mode: Schema.optional(Schema.Literals(["Prevention", "Detection"])),
            redirectUrl: Schema.optional(Schema.String),
            customBlockResponseStatusCode: Schema.optional(Schema.Number),
            customBlockResponseBody: Schema.optional(Schema.String),
            requestBodyCheck: Schema.optional(
              Schema.Literals(["Disabled", "Enabled"]),
            ),
            javascriptChallengeExpirationInMinutes: Schema.optional(
              Schema.Number,
            ),
            captchaExpirationInMinutes: Schema.optional(Schema.Number),
            logScrubbing: Schema.optional(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                scrubbingRules: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      matchVariable: Schema.Literals([
                        "RequestIPAddress",
                        "RequestUri",
                        "QueryStringArgNames",
                        "RequestHeaderNames",
                        "RequestCookieNames",
                        "RequestBodyPostArgNames",
                        "RequestBodyJsonArgNames",
                      ]),
                      selectorMatchOperator: Schema.Literals([
                        "EqualsAny",
                        "Equals",
                      ]),
                      selector: Schema.optional(Schema.String),
                      state: Schema.optional(
                        Schema.Literals(["Enabled", "Disabled"]),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        customRules: Schema.optional(
          Schema.Struct({
            rules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  priority: Schema.Number,
                  enabledState: Schema.optional(
                    Schema.Literals(["Disabled", "Enabled"]),
                  ),
                  ruleType: Schema.Literals(["MatchRule", "RateLimitRule"]),
                  rateLimitDurationInMinutes: Schema.optional(Schema.Number),
                  rateLimitThreshold: Schema.optional(Schema.Number),
                  groupBy: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        variableName: Schema.Literals([
                          "SocketAddr",
                          "GeoLocation",
                          "None",
                        ]),
                      }),
                    ),
                  ),
                  matchConditions: Schema.Array(
                    Schema.Struct({
                      matchVariable: Schema.Literals([
                        "RemoteAddr",
                        "RequestMethod",
                        "QueryString",
                        "PostArgs",
                        "RequestUri",
                        "RequestHeader",
                        "RequestBody",
                        "Cookies",
                        "SocketAddr",
                        "JA4",
                      ]),
                      selector: Schema.optional(Schema.String),
                      operator: Schema.Literals([
                        "Any",
                        "IPMatch",
                        "GeoMatch",
                        "Equal",
                        "Contains",
                        "LessThan",
                        "GreaterThan",
                        "LessThanOrEqual",
                        "GreaterThanOrEqual",
                        "BeginsWith",
                        "EndsWith",
                        "RegEx",
                        "ServiceTagMatch",
                        "AsnMatch",
                        "ClientFingerprint",
                      ]),
                      negateCondition: Schema.optional(Schema.Boolean),
                      matchValue: Schema.Array(Schema.String),
                      transforms: Schema.optional(
                        Schema.Array(
                          Schema.Literals([
                            "Lowercase",
                            "Uppercase",
                            "Trim",
                            "UrlDecode",
                            "UrlEncode",
                            "RemoveNulls",
                          ]),
                        ),
                      ),
                    }),
                  ),
                  action: Schema.Literals([
                    "Allow",
                    "Block",
                    "Log",
                    "Redirect",
                    "AnomalyScoring",
                    "JSChallenge",
                    "CAPTCHA",
                  ]),
                }),
              ),
            ),
          }),
        ),
        managedRules: Schema.optional(
          Schema.Struct({
            managedRuleSets: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  ruleSetType: Schema.String,
                  ruleSetVersion: Schema.String,
                  ruleSetAction: Schema.optional(
                    Schema.Literals(["Block", "Log", "Redirect"]),
                  ),
                  exclusions: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        matchVariable: Schema.Literals([
                          "RequestHeaderNames",
                          "RequestCookieNames",
                          "QueryStringArgNames",
                          "RequestBodyPostArgNames",
                          "RequestBodyJsonArgNames",
                        ]),
                        selectorMatchOperator: Schema.Literals([
                          "Equals",
                          "Contains",
                          "StartsWith",
                          "EndsWith",
                          "EqualsAny",
                        ]),
                        selector: Schema.String,
                      }),
                    ),
                  ),
                  ruleGroupOverrides: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        ruleGroupName: Schema.String,
                        exclusions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              matchVariable: Schema.Literals([
                                "RequestHeaderNames",
                                "RequestCookieNames",
                                "QueryStringArgNames",
                                "RequestBodyPostArgNames",
                                "RequestBodyJsonArgNames",
                              ]),
                              selectorMatchOperator: Schema.Literals([
                                "Equals",
                                "Contains",
                                "StartsWith",
                                "EndsWith",
                                "EqualsAny",
                              ]),
                              selector: Schema.String,
                            }),
                          ),
                        ),
                        rules: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              ruleId: Schema.String,
                              enabledState: Schema.optional(
                                Schema.Literals(["Disabled", "Enabled"]),
                              ),
                              action: Schema.optional(
                                Schema.Literals([
                                  "Allow",
                                  "Block",
                                  "Log",
                                  "Redirect",
                                  "AnomalyScoring",
                                  "JSChallenge",
                                  "CAPTCHA",
                                ]),
                              ),
                              sensitivity: Schema.optional(
                                Schema.Literals(["Low", "Medium", "High"]),
                              ),
                              exclusions: Schema.optional(
                                Schema.Array(
                                  Schema.Struct({
                                    matchVariable: Schema.Literals([
                                      "RequestHeaderNames",
                                      "RequestCookieNames",
                                      "QueryStringArgNames",
                                      "RequestBodyPostArgNames",
                                      "RequestBodyJsonArgNames",
                                    ]),
                                    selectorMatchOperator: Schema.Literals([
                                      "Equals",
                                      "Contains",
                                      "StartsWith",
                                      "EndsWith",
                                      "EqualsAny",
                                    ]),
                                    selector: Schema.String,
                                  }),
                                ),
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            ),
            exceptionsList: Schema.optional(
              Schema.Struct({
                exceptions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      matchVariable: Schema.Literals([
                        "RequestUri",
                        "SocketAddr",
                        "RequestHeaderNames",
                      ]),
                      selectorMatchOperator: Schema.optional(
                        Schema.Literals(["Equals"]),
                      ),
                      selector: Schema.optional(Schema.String),
                      valueMatchOperator: Schema.Literals([
                        "Equals",
                        "Contains",
                        "StartsWith",
                        "EndsWith",
                        "EqualsAny",
                        "IPMatch",
                      ]),
                      matchValues: Schema.Array(Schema.String),
                      scopes: Schema.Array(
                        Schema.Struct({
                          ruleSetType: Schema.String,
                          ruleSetVersion: Schema.String,
                          ruleGroupScopes: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                ruleGroupName: Schema.String,
                                ruleScopes: Schema.optional(
                                  Schema.Array(
                                    Schema.Struct({
                                      ruleId: Schema.String,
                                    }),
                                  ),
                                ),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        frontendEndpointLinks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
        routingRuleLinks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
        securityPolicyLinks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
        provisioningState: Schema.optional(Schema.String),
        resourceState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Enabling",
            "Enabled",
            "Disabling",
            "Disabled",
            "Deleting",
          ]),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(
          Schema.Literals([
            "Classic_AzureFrontDoor",
            "Standard_AzureFrontDoor",
            "Premium_AzureFrontDoor",
          ]),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/FrontDoorWebApplicationFirewallPolicies/{policyName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<PoliciesCreateOrUpdateInput>;

// Output Schema
export interface PoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const PoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<PoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update policy with specified rule set name within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param policyName - The name of the Web Application Firewall Policy.
 */
export const PoliciesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PoliciesCreateOrUpdateInput,
    outputSchema: PoliciesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface PoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyName: string;
}
export const PoliciesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  policyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/FrontDoorWebApplicationFirewallPolicies/{policyName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<PoliciesDeleteInput>;

// Output Schema
export type PoliciesDeleteOutput = void;
export const PoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PoliciesDeleteOutput>;

// The operation
/**
 * Deletes Policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param policyName - The name of the Web Application Firewall Policy.
 */
export const PoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoliciesDeleteInput,
  outputSchema: PoliciesDeleteOutput,
}));
// Input Schema
export interface PoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyName: string;
}
export const PoliciesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  policyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/FrontDoorWebApplicationFirewallPolicies/{policyName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<PoliciesGetInput>;

// Output Schema
export interface PoliciesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const PoliciesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<PoliciesGetOutput>;

// The operation
/**
 * Retrieve protection policy with specified name within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param policyName - The name of the Web Application Firewall Policy.
 */
export const PoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoliciesGetInput,
  outputSchema: PoliciesGetOutput,
}));
// Input Schema
export interface PoliciesListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PoliciesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/FrontDoorWebApplicationFirewallPolicies",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<PoliciesListInput>;

// Output Schema
export interface PoliciesListOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const PoliciesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      location: Schema.optional(Schema.String),
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<PoliciesListOutput>;

// The operation
/**
 * Lists all of the protection policies within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PoliciesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoliciesListInput,
  outputSchema: PoliciesListOutput,
}));
// Input Schema
export interface PoliciesListBySubscriptionInput {
  subscriptionId: string;
}
export const PoliciesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/FrontDoorWebApplicationFirewallPolicies",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<PoliciesListBySubscriptionInput>;

// Output Schema
export interface PoliciesListBySubscriptionOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const PoliciesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PoliciesListBySubscriptionOutput>;

// The operation
/**
 * Lists all of the protection policies within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PoliciesListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PoliciesListBySubscriptionInput,
    outputSchema: PoliciesListBySubscriptionOutput,
  }),
);
// Input Schema
export interface PoliciesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyName: string;
  tags?: Record<string, string>;
}
export const PoliciesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  policyName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/FrontDoorWebApplicationFirewallPolicies/{policyName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<PoliciesUpdateInput>;

// Output Schema
export interface PoliciesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const PoliciesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<PoliciesUpdateOutput>;

// The operation
/**
 * Patch a specific frontdoor webApplicationFirewall policy for tags update under the specified subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param policyName - The name of the Web Application Firewall Policy.
 */
export const PoliciesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoliciesUpdateInput,
  outputSchema: PoliciesUpdateOutput,
}));
// Input Schema
export interface PreconfiguredEndpointsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const PreconfiguredEndpointsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/preconfiguredEndpoints",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<PreconfiguredEndpointsListInput>;

// Output Schema
export interface PreconfiguredEndpointsListOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const PreconfiguredEndpointsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PreconfiguredEndpointsListOutput>;

// The operation
/**
 * Gets a list of Preconfigured Endpoints
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The Profile identifier associated with the Tenant and Partner
 */
export const PreconfiguredEndpointsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PreconfiguredEndpointsListInput,
    outputSchema: PreconfiguredEndpointsListOutput,
  }),
);
// Input Schema
export interface ReportsGetLatencyScorecardsInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  experimentName: string;
  endDateTimeUTC?: string;
  country?: string;
  aggregationInterval: "Daily" | "Weekly" | "Monthly";
}
export const ReportsGetLatencyScorecardsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    experimentName: Schema.String.pipe(T.PathParam()),
    endDateTimeUTC: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
    aggregationInterval: Schema.Literals(["Daily", "Weekly", "Monthly"]),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}/latencyScorecard",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<ReportsGetLatencyScorecardsInput>;

// Output Schema
export interface ReportsGetLatencyScorecardsOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const ReportsGetLatencyScorecardsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<ReportsGetLatencyScorecardsOutput>;

// The operation
/**
 * Gets a Latency Scorecard for a given Experiment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The Profile identifier associated with the Tenant and Partner
 * @param experimentName - The Experiment identifier associated with the Experiment
 * @param endDateTimeUTC - The end DateTime of the Latency Scorecard in UTC
 * @param country - The country associated with the Latency Scorecard. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html
 * @param aggregationInterval - The aggregation interval of the Latency Scorecard
 */
export const ReportsGetLatencyScorecards = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReportsGetLatencyScorecardsInput,
    outputSchema: ReportsGetLatencyScorecardsOutput,
  }),
);
// Input Schema
export interface ReportsGetTimeseriesInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  experimentName: string;
  startDateTimeUTC: string;
  endDateTimeUTC: string;
  aggregationInterval: "Hourly" | "Daily";
  timeseriesType:
    | "MeasurementCounts"
    | "LatencyP50"
    | "LatencyP75"
    | "LatencyP95";
  endpoint?: string;
  country?: string;
}
export const ReportsGetTimeseriesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    experimentName: Schema.String.pipe(T.PathParam()),
    startDateTimeUTC: Schema.String,
    endDateTimeUTC: Schema.String,
    aggregationInterval: Schema.Literals(["Hourly", "Daily"]),
    timeseriesType: Schema.Literals([
      "MeasurementCounts",
      "LatencyP50",
      "LatencyP75",
      "LatencyP95",
    ]),
    endpoint: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}/timeseries",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<ReportsGetTimeseriesInput>;

// Output Schema
export interface ReportsGetTimeseriesOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const ReportsGetTimeseriesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<ReportsGetTimeseriesOutput>;

// The operation
/**
 * Gets a Timeseries for a given Experiment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - The Profile identifier associated with the Tenant and Partner
 * @param experimentName - The Experiment identifier associated with the Experiment
 * @param startDateTimeUTC - The start DateTime of the Timeseries in UTC
 * @param endDateTimeUTC - The end DateTime of the Timeseries in UTC
 * @param aggregationInterval - The aggregation interval of the Timeseries
 * @param timeseriesType - The type of Timeseries
 * @param endpoint - The specific endpoint
 * @param country - The country associated with the Timeseries. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html
 */
export const ReportsGetTimeseries = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReportsGetTimeseriesInput,
    outputSchema: ReportsGetTimeseriesOutput,
  }),
);
// Input Schema
export interface RulesEnginesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  frontDoorName: string;
  rulesEngineName: string;
  properties?: {
    rules?: {
      name: string;
      priority: number;
      action: {
        requestHeaderActions?: {
          headerActionType: "Append" | "Delete" | "Overwrite";
          headerName: string;
          value?: string;
        }[];
        responseHeaderActions?: {
          headerActionType: "Append" | "Delete" | "Overwrite";
          headerName: string;
          value?: string;
        }[];
        routeConfigurationOverride?: { "@odata.type": string };
      };
      matchConditions?: {
        rulesEngineMatchVariable:
          | "IsMobile"
          | "RemoteAddr"
          | "RequestMethod"
          | "QueryString"
          | "PostArgs"
          | "RequestUri"
          | "RequestPath"
          | "RequestFilename"
          | "RequestFilenameExtension"
          | "RequestHeader"
          | "RequestBody"
          | "RequestScheme";
        selector?: string;
        rulesEngineOperator:
          | "Any"
          | "IPMatch"
          | "GeoMatch"
          | "Equal"
          | "Contains"
          | "LessThan"
          | "GreaterThan"
          | "LessThanOrEqual"
          | "GreaterThanOrEqual"
          | "BeginsWith"
          | "EndsWith";
        negateCondition?: boolean;
        rulesEngineMatchValue: string[];
        transforms?: (
          | "Lowercase"
          | "Uppercase"
          | "Trim"
          | "UrlDecode"
          | "UrlEncode"
          | "RemoveNulls"
        )[];
      }[];
      matchProcessingBehavior?: "Continue" | "Stop";
    }[];
  };
  id?: string;
  name?: string;
  type?: string;
}
export const RulesEnginesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    frontDoorName: Schema.String.pipe(T.PathParam()),
    rulesEngineName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              priority: Schema.Number,
              action: Schema.Struct({
                requestHeaderActions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      headerActionType: Schema.Literals([
                        "Append",
                        "Delete",
                        "Overwrite",
                      ]),
                      headerName: Schema.String,
                      value: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                responseHeaderActions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      headerActionType: Schema.Literals([
                        "Append",
                        "Delete",
                        "Overwrite",
                      ]),
                      headerName: Schema.String,
                      value: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                routeConfigurationOverride: Schema.optional(
                  Schema.Struct({
                    "@odata.type": Schema.String,
                  }),
                ),
              }),
              matchConditions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    rulesEngineMatchVariable: Schema.Literals([
                      "IsMobile",
                      "RemoteAddr",
                      "RequestMethod",
                      "QueryString",
                      "PostArgs",
                      "RequestUri",
                      "RequestPath",
                      "RequestFilename",
                      "RequestFilenameExtension",
                      "RequestHeader",
                      "RequestBody",
                      "RequestScheme",
                    ]),
                    selector: Schema.optional(Schema.String),
                    rulesEngineOperator: Schema.Literals([
                      "Any",
                      "IPMatch",
                      "GeoMatch",
                      "Equal",
                      "Contains",
                      "LessThan",
                      "GreaterThan",
                      "LessThanOrEqual",
                      "GreaterThanOrEqual",
                      "BeginsWith",
                      "EndsWith",
                    ]),
                    negateCondition: Schema.optional(Schema.Boolean),
                    rulesEngineMatchValue: Schema.Array(Schema.String),
                    transforms: Schema.optional(
                      Schema.Array(
                        Schema.Literals([
                          "Lowercase",
                          "Uppercase",
                          "Trim",
                          "UrlDecode",
                          "UrlEncode",
                          "RemoveNulls",
                        ]),
                      ),
                    ),
                  }),
                ),
              ),
              matchProcessingBehavior: Schema.optional(
                Schema.Literals(["Continue", "Stop"]),
              ),
            }),
          ),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/rulesEngines/{rulesEngineName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<RulesEnginesCreateOrUpdateInput>;

// Output Schema
export interface RulesEnginesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const RulesEnginesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RulesEnginesCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new Rules Engine Configuration with the specified name within the specified Front Door.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param frontDoorName - Name of the Front Door which is globally unique.
 * @param rulesEngineName - Name of the Rules Engine which is unique within the Front Door.
 */
export const RulesEnginesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RulesEnginesCreateOrUpdateInput,
    outputSchema: RulesEnginesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface RulesEnginesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  frontDoorName: string;
  rulesEngineName: string;
}
export const RulesEnginesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    frontDoorName: Schema.String.pipe(T.PathParam()),
    rulesEngineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/rulesEngines/{rulesEngineName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<RulesEnginesDeleteInput>;

// Output Schema
export type RulesEnginesDeleteOutput = void;
export const RulesEnginesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RulesEnginesDeleteOutput>;

// The operation
/**
 * Deletes an existing Rules Engine Configuration with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param frontDoorName - Name of the Front Door which is globally unique.
 * @param rulesEngineName - Name of the Rules Engine which is unique within the Front Door.
 */
export const RulesEnginesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RulesEnginesDeleteInput,
  outputSchema: RulesEnginesDeleteOutput,
}));
// Input Schema
export interface RulesEnginesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  frontDoorName: string;
  rulesEngineName: string;
}
export const RulesEnginesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  frontDoorName: Schema.String.pipe(T.PathParam()),
  rulesEngineName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/rulesEngines/{rulesEngineName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<RulesEnginesGetInput>;

// Output Schema
export interface RulesEnginesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const RulesEnginesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<RulesEnginesGetOutput>;

// The operation
/**
 * Gets a Rules Engine Configuration with the specified name within the specified Front Door.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param frontDoorName - Name of the Front Door which is globally unique.
 * @param rulesEngineName - Name of the Rules Engine which is unique within the Front Door.
 */
export const RulesEnginesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RulesEnginesGetInput,
  outputSchema: RulesEnginesGetOutput,
}));
// Input Schema
export interface RulesEnginesListByFrontDoorInput {
  subscriptionId: string;
  resourceGroupName: string;
  frontDoorName: string;
}
export const RulesEnginesListByFrontDoorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    frontDoorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/rulesEngines",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<RulesEnginesListByFrontDoorInput>;

// Output Schema
export interface RulesEnginesListByFrontDoorOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const RulesEnginesListByFrontDoorOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RulesEnginesListByFrontDoorOutput>;

// The operation
/**
 * Lists all of the Rules Engine Configurations within a Front Door.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param frontDoorName - Name of the Front Door which is globally unique.
 */
export const RulesEnginesListByFrontDoor = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RulesEnginesListByFrontDoorInput,
    outputSchema: RulesEnginesListByFrontDoorOutput,
  }),
);
