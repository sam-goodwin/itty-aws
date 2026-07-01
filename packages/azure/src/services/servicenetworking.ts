/**
 * Azure Servicenetworking API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AssociationsInterfaceCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
  associationName: string;
  properties?: {
    associationType: "subnets";
    subnet?: { id: string };
    provisioningState?:
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Succeeded"
      | "Failed"
      | "Canceled";
  };
  tags?: Record<string, string>;
  location: string;
}
export const AssociationsInterfaceCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    associationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        associationType: Schema.Literals(["subnets"]),
        subnet: Schema.optional(
          Schema.Struct({
            id: Schema.String,
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/associations/{associationName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<AssociationsInterfaceCreateOrUpdateInput>;

// Output Schema
export interface AssociationsInterfaceCreateOrUpdateOutput {
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
export const AssociationsInterfaceCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AssociationsInterfaceCreateOrUpdateOutput>;

// The operation
/**
 * Create a Association
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param associationName - Name of Association
 */
export const AssociationsInterfaceCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssociationsInterfaceCreateOrUpdateInput,
    outputSchema: AssociationsInterfaceCreateOrUpdateOutput,
  }));
// Input Schema
export interface AssociationsInterfaceDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
  associationName: string;
}
export const AssociationsInterfaceDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    associationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/associations/{associationName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<AssociationsInterfaceDeleteInput>;

// Output Schema
export type AssociationsInterfaceDeleteOutput = void;
export const AssociationsInterfaceDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AssociationsInterfaceDeleteOutput>;

// The operation
/**
 * Delete a Association
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param associationName - Name of Association
 */
export const AssociationsInterfaceDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssociationsInterfaceDeleteInput,
    outputSchema: AssociationsInterfaceDeleteOutput,
  }),
);
// Input Schema
export interface AssociationsInterfaceGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
  associationName: string;
}
export const AssociationsInterfaceGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    associationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/associations/{associationName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<AssociationsInterfaceGetInput>;

// Output Schema
export interface AssociationsInterfaceGetOutput {
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
export const AssociationsInterfaceGetOutput =
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
  }) as unknown as Schema.Codec<AssociationsInterfaceGetOutput>;

// The operation
/**
 * Get a Association
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param associationName - Name of Association
 */
export const AssociationsInterfaceGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssociationsInterfaceGetInput,
    outputSchema: AssociationsInterfaceGetOutput,
  }),
);
// Input Schema
export interface AssociationsInterfaceListByTrafficControllerInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
}
export const AssociationsInterfaceListByTrafficControllerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/associations",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<AssociationsInterfaceListByTrafficControllerInput>;

// Output Schema
export interface AssociationsInterfaceListByTrafficControllerOutput {
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
export const AssociationsInterfaceListByTrafficControllerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AssociationsInterfaceListByTrafficControllerOutput>;

// The operation
/**
 * List Association resources by TrafficController
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 */
export const AssociationsInterfaceListByTrafficController =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssociationsInterfaceListByTrafficControllerInput,
    outputSchema: AssociationsInterfaceListByTrafficControllerOutput,
  }));
// Input Schema
export interface AssociationsInterfaceUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
  associationName: string;
  tags?: Record<string, string>;
  properties?: { associationType?: "subnets"; subnet?: { id?: string } };
}
export const AssociationsInterfaceUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    associationName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        associationType: Schema.optional(Schema.Literals(["subnets"])),
        subnet: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/associations/{associationName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<AssociationsInterfaceUpdateInput>;

// Output Schema
export interface AssociationsInterfaceUpdateOutput {
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
export const AssociationsInterfaceUpdateOutput =
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
  }) as unknown as Schema.Codec<AssociationsInterfaceUpdateOutput>;

// The operation
/**
 * Update a Association
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param associationName - Name of Association
 */
export const AssociationsInterfaceUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssociationsInterfaceUpdateInput,
    outputSchema: AssociationsInterfaceUpdateOutput,
  }),
);
// Input Schema
export interface FrontendsInterfaceCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
  frontendName: string;
  properties?: {
    fqdn?: string;
    provisioningState?:
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Succeeded"
      | "Failed"
      | "Canceled";
  };
  tags?: Record<string, string>;
  location: string;
}
export const FrontendsInterfaceCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    frontendName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        fqdn: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<FrontendsInterfaceCreateOrUpdateInput>;

// Output Schema
export interface FrontendsInterfaceCreateOrUpdateOutput {
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
export const FrontendsInterfaceCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<FrontendsInterfaceCreateOrUpdateOutput>;

// The operation
/**
 * Create a Frontend
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param frontendName - Frontends
 */
export const FrontendsInterfaceCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FrontendsInterfaceCreateOrUpdateInput,
    outputSchema: FrontendsInterfaceCreateOrUpdateOutput,
  }));
// Input Schema
export interface FrontendsInterfaceDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
  frontendName: string;
}
export const FrontendsInterfaceDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    frontendName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<FrontendsInterfaceDeleteInput>;

// Output Schema
export type FrontendsInterfaceDeleteOutput = void;
export const FrontendsInterfaceDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FrontendsInterfaceDeleteOutput>;

// The operation
/**
 * Delete a Frontend
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param frontendName - Frontends
 */
export const FrontendsInterfaceDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FrontendsInterfaceDeleteInput,
    outputSchema: FrontendsInterfaceDeleteOutput,
  }),
);
// Input Schema
export interface FrontendsInterfaceGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
  frontendName: string;
}
export const FrontendsInterfaceGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    frontendName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<FrontendsInterfaceGetInput>;

// Output Schema
export interface FrontendsInterfaceGetOutput {
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
export const FrontendsInterfaceGetOutput =
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
  }) as unknown as Schema.Codec<FrontendsInterfaceGetOutput>;

// The operation
/**
 * Get a Frontend
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param frontendName - Frontends
 */
export const FrontendsInterfaceGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FrontendsInterfaceGetInput,
    outputSchema: FrontendsInterfaceGetOutput,
  }),
);
// Input Schema
export interface FrontendsInterfaceListByTrafficControllerInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
}
export const FrontendsInterfaceListByTrafficControllerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<FrontendsInterfaceListByTrafficControllerInput>;

// Output Schema
export interface FrontendsInterfaceListByTrafficControllerOutput {
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
export const FrontendsInterfaceListByTrafficControllerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<FrontendsInterfaceListByTrafficControllerOutput>;

// The operation
/**
 * List Frontend resources by TrafficController
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 */
export const FrontendsInterfaceListByTrafficController =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FrontendsInterfaceListByTrafficControllerInput,
    outputSchema: FrontendsInterfaceListByTrafficControllerOutput,
  }));
// Input Schema
export interface FrontendsInterfaceUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
  frontendName: string;
  tags?: Record<string, string>;
}
export const FrontendsInterfaceUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    frontendName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<FrontendsInterfaceUpdateInput>;

// Output Schema
export interface FrontendsInterfaceUpdateOutput {
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
export const FrontendsInterfaceUpdateOutput =
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
  }) as unknown as Schema.Codec<FrontendsInterfaceUpdateOutput>;

// The operation
/**
 * Update a Frontend
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param frontendName - Frontends
 */
export const FrontendsInterfaceUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FrontendsInterfaceUpdateInput,
    outputSchema: FrontendsInterfaceUpdateOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ServiceNetworking/operations",
    apiVersion: "2025-01-01",
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
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface SecurityPoliciesInterfaceCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
  securityPolicyName: string;
  properties?: {
    policyType?: "waf";
    wafPolicy?: { id: string };
    provisioningState?:
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Succeeded"
      | "Failed"
      | "Canceled";
  };
  tags?: Record<string, string>;
  location: string;
}
export const SecurityPoliciesInterfaceCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    securityPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        policyType: Schema.optional(Schema.Literals(["waf"])),
        wafPolicy: Schema.optional(
          Schema.Struct({
            id: Schema.String,
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<SecurityPoliciesInterfaceCreateOrUpdateInput>;

// Output Schema
export interface SecurityPoliciesInterfaceCreateOrUpdateOutput {
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
export const SecurityPoliciesInterfaceCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SecurityPoliciesInterfaceCreateOrUpdateOutput>;

// The operation
/**
 * Create a SecurityPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param securityPolicyName - SecurityPolicy
 */
export const SecurityPoliciesInterfaceCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SecurityPoliciesInterfaceCreateOrUpdateInput,
    outputSchema: SecurityPoliciesInterfaceCreateOrUpdateOutput,
  }));
// Input Schema
export interface SecurityPoliciesInterfaceDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
  securityPolicyName: string;
}
export const SecurityPoliciesInterfaceDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    securityPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<SecurityPoliciesInterfaceDeleteInput>;

// Output Schema
export type SecurityPoliciesInterfaceDeleteOutput = void;
export const SecurityPoliciesInterfaceDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SecurityPoliciesInterfaceDeleteOutput>;

// The operation
/**
 * Delete a SecurityPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param securityPolicyName - SecurityPolicy
 */
export const SecurityPoliciesInterfaceDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SecurityPoliciesInterfaceDeleteInput,
    outputSchema: SecurityPoliciesInterfaceDeleteOutput,
  }));
// Input Schema
export interface SecurityPoliciesInterfaceGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
  securityPolicyName: string;
}
export const SecurityPoliciesInterfaceGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    securityPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<SecurityPoliciesInterfaceGetInput>;

// Output Schema
export interface SecurityPoliciesInterfaceGetOutput {
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
export const SecurityPoliciesInterfaceGetOutput =
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
  }) as unknown as Schema.Codec<SecurityPoliciesInterfaceGetOutput>;

// The operation
/**
 * Get a SecurityPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param securityPolicyName - SecurityPolicy
 */
export const SecurityPoliciesInterfaceGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SecurityPoliciesInterfaceGetInput,
    outputSchema: SecurityPoliciesInterfaceGetOutput,
  }));
// Input Schema
export interface SecurityPoliciesInterfaceListByTrafficControllerInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
}
export const SecurityPoliciesInterfaceListByTrafficControllerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<SecurityPoliciesInterfaceListByTrafficControllerInput>;

// Output Schema
export interface SecurityPoliciesInterfaceListByTrafficControllerOutput {
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
export const SecurityPoliciesInterfaceListByTrafficControllerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SecurityPoliciesInterfaceListByTrafficControllerOutput>;

// The operation
/**
 * List SecurityPolicy resources by TrafficController
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 */
export const SecurityPoliciesInterfaceListByTrafficController =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SecurityPoliciesInterfaceListByTrafficControllerInput,
    outputSchema: SecurityPoliciesInterfaceListByTrafficControllerOutput,
  }));
// Input Schema
export interface SecurityPoliciesInterfaceUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
  securityPolicyName: string;
  tags?: Record<string, string>;
  properties?: { wafPolicy?: { id?: string } };
}
export const SecurityPoliciesInterfaceUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    securityPolicyName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        wafPolicy: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<SecurityPoliciesInterfaceUpdateInput>;

// Output Schema
export interface SecurityPoliciesInterfaceUpdateOutput {
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
export const SecurityPoliciesInterfaceUpdateOutput =
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
  }) as unknown as Schema.Codec<SecurityPoliciesInterfaceUpdateOutput>;

// The operation
/**
 * Update a SecurityPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param securityPolicyName - SecurityPolicy
 */
export const SecurityPoliciesInterfaceUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SecurityPoliciesInterfaceUpdateInput,
    outputSchema: SecurityPoliciesInterfaceUpdateOutput,
  }));
// Input Schema
export interface TrafficControllerInterfaceCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
  properties?: {
    configurationEndpoints?: string[];
    frontends?: { id: string }[];
    associations?: { id: string }[];
    securityPolicies?: { id: string }[];
    securityPolicyConfigurations?: { wafSecurityPolicy?: { id: string } };
    provisioningState?:
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Succeeded"
      | "Failed"
      | "Canceled";
  };
  tags?: Record<string, string>;
  location: string;
}
export const TrafficControllerInterfaceCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        configurationEndpoints: Schema.optional(Schema.Array(Schema.String)),
        frontends: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
            }),
          ),
        ),
        associations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
            }),
          ),
        ),
        securityPolicies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
            }),
          ),
        ),
        securityPolicyConfigurations: Schema.optional(
          Schema.Struct({
            wafSecurityPolicy: Schema.optional(
              Schema.Struct({
                id: Schema.String,
              }),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<TrafficControllerInterfaceCreateOrUpdateInput>;

// Output Schema
export interface TrafficControllerInterfaceCreateOrUpdateOutput {
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
export const TrafficControllerInterfaceCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<TrafficControllerInterfaceCreateOrUpdateOutput>;

// The operation
/**
 * Create a TrafficController
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 */
export const TrafficControllerInterfaceCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrafficControllerInterfaceCreateOrUpdateInput,
    outputSchema: TrafficControllerInterfaceCreateOrUpdateOutput,
  }));
// Input Schema
export interface TrafficControllerInterfaceDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
}
export const TrafficControllerInterfaceDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<TrafficControllerInterfaceDeleteInput>;

// Output Schema
export type TrafficControllerInterfaceDeleteOutput = void;
export const TrafficControllerInterfaceDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TrafficControllerInterfaceDeleteOutput>;

// The operation
/**
 * Delete a TrafficController
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 */
export const TrafficControllerInterfaceDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrafficControllerInterfaceDeleteInput,
    outputSchema: TrafficControllerInterfaceDeleteOutput,
  }));
// Input Schema
export interface TrafficControllerInterfaceGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
}
export const TrafficControllerInterfaceGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<TrafficControllerInterfaceGetInput>;

// Output Schema
export interface TrafficControllerInterfaceGetOutput {
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
export const TrafficControllerInterfaceGetOutput =
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
  }) as unknown as Schema.Codec<TrafficControllerInterfaceGetOutput>;

// The operation
/**
 * Get a TrafficController
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 */
export const TrafficControllerInterfaceGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrafficControllerInterfaceGetInput,
    outputSchema: TrafficControllerInterfaceGetOutput,
  }));
// Input Schema
export interface TrafficControllerInterfaceListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const TrafficControllerInterfaceListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<TrafficControllerInterfaceListByResourceGroupInput>;

// Output Schema
export interface TrafficControllerInterfaceListByResourceGroupOutput {
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
export const TrafficControllerInterfaceListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<TrafficControllerInterfaceListByResourceGroupOutput>;

// The operation
/**
 * List TrafficController resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const TrafficControllerInterfaceListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrafficControllerInterfaceListByResourceGroupInput,
    outputSchema: TrafficControllerInterfaceListByResourceGroupOutput,
  }));
// Input Schema
export interface TrafficControllerInterfaceListBySubscriptionInput {
  subscriptionId: string;
}
export const TrafficControllerInterfaceListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceNetworking/trafficControllers",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<TrafficControllerInterfaceListBySubscriptionInput>;

// Output Schema
export interface TrafficControllerInterfaceListBySubscriptionOutput {
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
export const TrafficControllerInterfaceListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<TrafficControllerInterfaceListBySubscriptionOutput>;

// The operation
/**
 * List TrafficController resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const TrafficControllerInterfaceListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrafficControllerInterfaceListBySubscriptionInput,
    outputSchema: TrafficControllerInterfaceListBySubscriptionOutput,
  }));
// Input Schema
export interface TrafficControllerInterfaceUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  trafficControllerName: string;
  tags?: Record<string, string>;
  properties?: {
    securityPolicyConfigurations?: { wafSecurityPolicy?: { id?: string } };
  };
}
export const TrafficControllerInterfaceUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        securityPolicyConfigurations: Schema.optional(
          Schema.Struct({
            wafSecurityPolicy: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<TrafficControllerInterfaceUpdateInput>;

// Output Schema
export interface TrafficControllerInterfaceUpdateOutput {
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
export const TrafficControllerInterfaceUpdateOutput =
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
  }) as unknown as Schema.Codec<TrafficControllerInterfaceUpdateOutput>;

// The operation
/**
 * Update a TrafficController
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 */
export const TrafficControllerInterfaceUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrafficControllerInterfaceUpdateInput,
    outputSchema: TrafficControllerInterfaceUpdateOutput,
  }));
