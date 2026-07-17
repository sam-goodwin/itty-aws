/**
 * Azure Serialconsole API
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
export interface DisableConsoleInput {
  subscriptionId: string;
  default: string;
}
export const DisableConsoleInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  default: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.SerialConsole/consoleServices/{default}/disableConsole",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<DisableConsoleInput>;

// Output Schema
export interface DisableConsoleOutput {
  properties?: { disabled?: boolean };
}
export const DisableConsoleOutput = /*@__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.Struct({
      disabled: Schema.optional(Schema.Boolean),
    }),
  ),
}) as unknown as Schema.Codec<DisableConsoleOutput>;

// The operation
/**
 * Disable Serial Console for a subscription
 *
 * Disables the Serial Console service for all VMs and VM scale sets in the provided subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param default - Default parameter. Leave the value as "default".
 */
export const DisableConsole = /*@__PURE__*/ API.make(() => ({
  inputSchema: DisableConsoleInput,
  outputSchema: DisableConsoleOutput,
}));
// Input Schema
export interface EnableConsoleInput {
  subscriptionId: string;
  default: string;
}
export const EnableConsoleInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  default: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.SerialConsole/consoleServices/{default}/enableConsole",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<EnableConsoleInput>;

// Output Schema
export interface EnableConsoleOutput {
  properties?: { disabled?: boolean };
}
export const EnableConsoleOutput = /*@__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.Struct({
      disabled: Schema.optional(Schema.Boolean),
    }),
  ),
}) as unknown as Schema.Codec<EnableConsoleOutput>;

// The operation
/**
 * Enable Serial Console for a subscription
 *
 * Enables the Serial Console service for all VMs and VM scale sets in the provided subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param default - Default parameter. Leave the value as "default".
 */
export const EnableConsole = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnableConsoleInput,
  outputSchema: EnableConsoleOutput,
}));
// Input Schema
export interface GetConsoleStatusInput {
  subscriptionId: string;
  default: string;
}
export const GetConsoleStatusInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  default: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.SerialConsole/consoleServices/{default}",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<GetConsoleStatusInput>;

// Output Schema
export interface GetConsoleStatusOutput {
  properties?: { disabled?: boolean };
}
export const GetConsoleStatusOutput = /*@__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.Struct({
      disabled: Schema.optional(Schema.Boolean),
    }),
  ),
}) as unknown as Schema.Codec<GetConsoleStatusOutput>;

// The operation
/**
 * Get the disabled status for a subscription
 *
 * Gets whether or not Serial Console is disabled for a given subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param default - Default parameter. Leave the value as "default".
 */
export const GetConsoleStatus = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetConsoleStatusInput,
  outputSchema: GetConsoleStatusOutput,
}));
// Input Schema
export interface ListOperationsInput {}
export const ListOperationsInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.SerialConsole/operations",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<ListOperationsInput>;

// Output Schema
export interface ListOperationsOutput {
  value?: {
    name?: string;
    isDataAction?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
  }[];
}
export const ListOperationsOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        isDataAction: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<ListOperationsOutput>;

// The operation
/**
 * Gets a list of Serial Console API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ListOperations = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListOperationsInput,
  outputSchema: ListOperationsOutput,
}));
// Input Schema
export interface SerialPortsConnectInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceProviderNamespace: string;
  parentResourceType: string;
  parentResource: string;
  serialPort: string;
}
export const SerialPortsConnectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceProviderNamespace: Schema.String.pipe(T.PathParam()),
    parentResourceType: Schema.String.pipe(T.PathParam()),
    parentResource: Schema.String.pipe(T.PathParam()),
    serialPort: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourceType}/{parentResource}/providers/Microsoft.SerialConsole/serialPorts/{serialPort}/connect",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<SerialPortsConnectInput>;

// Output Schema
export interface SerialPortsConnectOutput {
  connectionString?: Redacted.Redacted<string>;
}
export const SerialPortsConnectOutput =
  /*@__PURE__*/ Schema.Struct({
    connectionString: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<SerialPortsConnectOutput>;

// The operation
/**
 * Connect to serial port of the target resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group.
 * @param resourceProviderNamespace - The resource provider namespace of the parent resource.
 * @param parentResourceType - The resource type of the parent resource. For example: 'virtualMachines' or 'virtualMachineScaleSets'
 * @param parentResource - The name of the parent resource.
 * @param serialPort - The name of the serial port to connect to.
 */
export const SerialPortsConnect = /*@__PURE__*/ API.make(() => ({
  inputSchema: SerialPortsConnectInput,
  outputSchema: SerialPortsConnectOutput,
}));
// Input Schema
export interface SerialPortsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceProviderNamespace: string;
  parentResourceType: string;
  parentResource: string;
  serialPort: string;
  properties?: {
    state?: "enabled" | "disabled";
    connectionState?: "active" | "inactive";
  };
}
export const SerialPortsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceProviderNamespace: Schema.String.pipe(T.PathParam()),
  parentResourceType: Schema.String.pipe(T.PathParam()),
  parentResource: Schema.String.pipe(T.PathParam()),
  serialPort: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      state: Schema.optional(Schema.Literals(["enabled", "disabled"])),
      connectionState: Schema.optional(Schema.Literals(["active", "inactive"])),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourceType}/{parentResource}/providers/Microsoft.SerialConsole/serialPorts/{serialPort}",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<SerialPortsCreateInput>;

// Output Schema
export interface SerialPortsCreateOutput {
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
export const SerialPortsCreateOutput =
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
  }) as unknown as Schema.Codec<SerialPortsCreateOutput>;

// The operation
/**
 * Creates or updates a serial port
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group.
 * @param resourceProviderNamespace - The resource provider namespace of the parent resource.
 * @param parentResourceType - The resource type of the parent resource. For example: 'virtualMachines' or 'virtualMachineScaleSets'
 * @param parentResource - The name of the parent resource.
 * @param serialPort - The name of the serial port to connect to.
 */
export const SerialPortsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SerialPortsCreateInput,
  outputSchema: SerialPortsCreateOutput,
}));
// Input Schema
export interface SerialPortsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceProviderNamespace: string;
  parentResourceType: string;
  parentResource: string;
  serialPort: string;
}
export const SerialPortsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceProviderNamespace: Schema.String.pipe(T.PathParam()),
  parentResourceType: Schema.String.pipe(T.PathParam()),
  parentResource: Schema.String.pipe(T.PathParam()),
  serialPort: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourceType}/{parentResource}/providers/Microsoft.SerialConsole/serialPorts/{serialPort}",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<SerialPortsGetInput>;

// Output Schema
export interface SerialPortsGetOutput {
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
export const SerialPortsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SerialPortsGetOutput>;

// The operation
/**
 * Gets the configured settings for a serial port
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group.
 * @param resourceProviderNamespace - The resource provider namespace of the parent resource.
 * @param parentResourceType - The resource type of the parent resource. For example: 'virtualMachines' or 'virtualMachineScaleSets'
 * @param parentResource - The name of the parent resource.
 * @param serialPort - The name of the serial port to connect to.
 */
export const SerialPortsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SerialPortsGetInput,
  outputSchema: SerialPortsGetOutput,
}));
// Input Schema
export interface SerialPortsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceProviderNamespace: string;
  parentResourceType: string;
  parentResource: string;
}
export const SerialPortsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceProviderNamespace: Schema.String.pipe(T.PathParam()),
  parentResourceType: Schema.String.pipe(T.PathParam()),
  parentResource: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourceType}/{parentResource}/providers/Microsoft.SerialConsole/serialPorts",
    apiVersion: "2024-07-01",
  }),
) as unknown as Schema.Codec<SerialPortsListInput>;

// Output Schema
export interface SerialPortsListOutput {
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
export const SerialPortsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SerialPortsListOutput>;

// The operation
/**
 * Lists all of the configured serial ports for a parent resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group.
 * @param resourceProviderNamespace - The resource provider namespace of the parent resource.
 * @param parentResourceType - The resource type of the parent resource. For example: 'virtualMachines' or 'virtualMachineScaleSets'
 * @param parentResource - The name of the parent resource.
 */
export const SerialPortsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SerialPortsListInput,
  outputSchema: SerialPortsListOutput,
}));
// Input Schema
export interface SerialPortsListBySubscriptionsInput {
  subscriptionId: string;
}
export const SerialPortsListBySubscriptionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SerialConsole/serialPorts",
      apiVersion: "2024-07-01",
    }),
  ) as unknown as Schema.Codec<SerialPortsListBySubscriptionsInput>;

// Output Schema
export interface SerialPortsListBySubscriptionsOutput {
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
export const SerialPortsListBySubscriptionsOutput =
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
  }) as unknown as Schema.Codec<SerialPortsListBySubscriptionsOutput>;

// The operation
/**
 * Handles requests to list all SerialPort resources in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const SerialPortsListBySubscriptions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SerialPortsListBySubscriptionsInput,
    outputSchema: SerialPortsListBySubscriptionsOutput,
  }));
