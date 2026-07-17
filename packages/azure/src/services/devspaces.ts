/**
 * Azure Devspaces API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ContainerHostMappingsGetContainerHostMappingInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  containerHostResourceId?: string;
  mappedControllerResourceId?: string;
}
export const ContainerHostMappingsGetContainerHostMappingInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    containerHostResourceId: Schema.optional(Schema.String),
    mappedControllerResourceId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/locations/{location}/checkContainerHostMapping",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<ContainerHostMappingsGetContainerHostMappingInput>;

// Output Schema
export interface ContainerHostMappingsGetContainerHostMappingOutput {
  containerHostResourceId?: string;
  mappedControllerResourceId?: string;
}
export const ContainerHostMappingsGetContainerHostMappingOutput =
  /*@__PURE__*/ Schema.Struct({
    containerHostResourceId: Schema.optional(Schema.String),
    mappedControllerResourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ContainerHostMappingsGetContainerHostMappingOutput>;

// The operation
/**
 * Returns container host mapping object for a container host resource ID if an associated controller exists.
 *
 * @param api-version - Client API version.
 * @param subscriptionId - Azure subscription ID.
 * @param resourceGroupName - Resource group to which the resource belongs.
 * @param location - Location of the container host.
 */
export const ContainerHostMappingsGetContainerHostMapping =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerHostMappingsGetContainerHostMappingInput,
    outputSchema: ContainerHostMappingsGetContainerHostMappingOutput,
  }));
// Input Schema
export interface ControllersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  properties: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Updating"
      | "Creating"
      | "Deleting"
      | "Deleted";
    hostSuffix?: string;
    dataPlaneFqdn?: string;
    targetContainerHostApiServerFqdn?: string;
    targetContainerHostResourceId: string;
    targetContainerHostCredentialsBase64: string;
  };
  sku: { name: "S1"; tier?: "Standard" };
  tags?: Record<string, string>;
  location: string;
}
export const ControllersCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Updating",
        "Creating",
        "Deleting",
        "Deleted",
      ]),
    ),
    hostSuffix: Schema.optional(Schema.String),
    dataPlaneFqdn: Schema.optional(Schema.String),
    targetContainerHostApiServerFqdn: Schema.optional(Schema.String),
    targetContainerHostResourceId: Schema.String,
    targetContainerHostCredentialsBase64: Schema.String,
  }),
  sku: Schema.Struct({
    name: Schema.Literals(["S1"]),
    tier: Schema.optional(Schema.Literals(["Standard"])),
  }),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<ControllersCreateInput>;

// Output Schema
export interface ControllersCreateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ControllersCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ControllersCreateOutput>;

// The operation
/**
 * Creates an Azure Dev Spaces Controller.
 *
 * Creates an Azure Dev Spaces Controller with the specified create parameters.
 *
 * @param api-version - Client API version.
 * @param subscriptionId - Azure subscription ID.
 * @param resourceGroupName - Resource group to which the resource belongs.
 * @param name - Name of the resource.
 */
export const ControllersCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ControllersCreateInput,
  outputSchema: ControllersCreateOutput,
}));
// Input Schema
export interface ControllersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const ControllersDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<ControllersDeleteInput>;

// Output Schema
export type ControllersDeleteOutput = void;
export const ControllersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ControllersDeleteOutput>;

// The operation
/**
 * Deletes an Azure Dev Spaces Controller.
 *
 * Deletes an existing Azure Dev Spaces Controller.
 *
 * @param api-version - Client API version.
 * @param subscriptionId - Azure subscription ID.
 * @param resourceGroupName - Resource group to which the resource belongs.
 * @param name - Name of the resource.
 */
export const ControllersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ControllersDeleteInput,
  outputSchema: ControllersDeleteOutput,
}));
// Input Schema
export interface ControllersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const ControllersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<ControllersGetInput>;

// Output Schema
export interface ControllersGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ControllersGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ControllersGetOutput>;

// The operation
/**
 * Gets an Azure Dev Spaces Controller.
 *
 * Gets the properties for an Azure Dev Spaces Controller.
 *
 * @param api-version - Client API version.
 * @param subscriptionId - Azure subscription ID.
 * @param resourceGroupName - Resource group to which the resource belongs.
 * @param name - Name of the resource.
 */
export const ControllersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ControllersGetInput,
  outputSchema: ControllersGetOutput,
}));
// Input Schema
export interface ControllersListInput {
  subscriptionId: string;
}
export const ControllersListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevSpaces/controllers",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<ControllersListInput>;

// Output Schema
export interface ControllersListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ControllersListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ControllersListOutput>;

// The operation
/**
 * Lists the Azure Dev Spaces Controllers in a subscription.
 *
 * Lists all the Azure Dev Spaces Controllers with their properties in the subscription.
 *
 * @param api-version - Client API version.
 * @param subscriptionId - Azure subscription ID.
 */
export const ControllersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ControllersListInput,
  outputSchema: ControllersListOutput,
}));
// Input Schema
export interface ControllersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ControllersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<ControllersListByResourceGroupInput>;

// Output Schema
export interface ControllersListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ControllersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ControllersListByResourceGroupOutput>;

// The operation
/**
 * Lists the Azure Dev Spaces Controllers in a resource group.
 *
 * Lists all the Azure Dev Spaces Controllers with their properties in the specified resource group and subscription.
 *
 * @param api-version - Client API version.
 * @param subscriptionId - Azure subscription ID.
 * @param resourceGroupName - Resource group to which the resource belongs.
 */
export const ControllersListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ControllersListByResourceGroupInput,
    outputSchema: ControllersListByResourceGroupOutput,
  }));
// Input Schema
export interface ControllersListConnectionDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  targetContainerHostResourceId: string;
}
export const ControllersListConnectionDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    targetContainerHostResourceId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}/listConnectionDetails",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<ControllersListConnectionDetailsInput>;

// Output Schema
export interface ControllersListConnectionDetailsOutput {
  connectionDetailsList?: {
    orchestratorSpecificConnectionDetails?: { instanceType?: string };
  }[];
}
export const ControllersListConnectionDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    connectionDetailsList: Schema.optional(
      Schema.Array(
        Schema.Struct({
          orchestratorSpecificConnectionDetails: Schema.optional(
            Schema.Struct({
              instanceType: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ControllersListConnectionDetailsOutput>;

// The operation
/**
 * Lists connection details for an Azure Dev Spaces Controller.
 *
 * Lists connection details for the underlying container resources of an Azure Dev Spaces Controller.
 *
 * @param api-version - Client API version.
 * @param subscriptionId - Azure subscription ID.
 * @param resourceGroupName - Resource group to which the resource belongs.
 * @param name - Name of the resource.
 */
export const ControllersListConnectionDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ControllersListConnectionDetailsInput,
    outputSchema: ControllersListConnectionDetailsOutput,
  }));
// Input Schema
export interface ControllersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  tags?: unknown;
  properties?: { targetContainerHostCredentialsBase64?: string };
}
export const ControllersUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Unknown),
  properties: Schema.optional(
    Schema.Struct({
      targetContainerHostCredentialsBase64: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<ControllersUpdateInput>;

// Output Schema
export interface ControllersUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ControllersUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ControllersUpdateOutput>;

// The operation
/**
 * Updates an Azure Dev Spaces Controller.
 *
 * Updates the properties of an existing Azure Dev Spaces Controller with the specified update parameters.
 *
 * @param api-version - Client API version.
 * @param subscriptionId - Azure subscription ID.
 * @param resourceGroupName - Resource group to which the resource belongs.
 * @param name - Name of the resource.
 */
export const ControllersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ControllersUpdateInput,
  outputSchema: ControllersUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DevSpaces/operations",
    apiVersion: "2019-04-01",
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
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists operations for the resource provider.
 *
 * Lists all the supported operations by the Microsoft.DevSpaces resource provider along with their description.
 *
 * @param api-version - Client API version.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
