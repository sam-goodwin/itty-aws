/**
 * Azure Cpim API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface B2CTenantsCheckNameAvailabilityInput {
  subscriptionId: string;
  name: string;
  countryCode: string;
}
export const B2CTenantsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    countryCode: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureActiveDirectory/checkNameAvailability",
      apiVersion: "2021-04-01",
    }),
  ) as unknown as Schema.Codec<B2CTenantsCheckNameAvailabilityInput>;

// Output Schema
export interface B2CTenantsCheckNameAvailabilityOutput {
  message?: string;
  nameAvailable?: boolean;
  reason?: "AlreadyExists" | "Invalid";
}
export const B2CTenantsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["AlreadyExists", "Invalid"])),
  }) as unknown as Schema.Codec<B2CTenantsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks the availability and validity of a domain name for the tenant.
 *
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 */
export const B2CTenantsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: B2CTenantsCheckNameAvailabilityInput,
    outputSchema: B2CTenantsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface B2CTenantsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  location: string;
  properties: {
    createTenantProperties?: { displayName?: string; countryCode?: string };
  };
  sku: { name?: "Standard" | "PremiumP1" | "PremiumP2"; tier?: "A0" };
  tags?: Record<string, string>;
}
export const B2CTenantsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  location: Schema.String,
  properties: Schema.Struct({
    createTenantProperties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        countryCode: Schema.optional(Schema.String),
      }),
    ),
  }),
  sku: Schema.Struct({
    name: Schema.optional(
      Schema.Literals(["Standard", "PremiumP1", "PremiumP2"]),
    ),
    tier: Schema.optional(Schema.Literals(["A0"])),
  }),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureActiveDirectory/b2cDirectories/{resourceName}",
    apiVersion: "2021-04-01",
  }),
) as unknown as Schema.Codec<B2CTenantsCreateInput>;

// Output Schema
export interface B2CTenantsCreateOutput {
  type?: "Microsoft.AzureActiveDirectory/b2cDirectories";
  sku: { name?: "Standard" | "PremiumP1" | "PremiumP2"; tier?: "A0" };
  properties?: {
    billingConfig?: {
      billingType?: "MAU" | "Auths";
      effectiveStartDateUtc?: string;
    };
    tenantId?: string;
  };
  id?: string;
  name?: string;
  location: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const B2CTenantsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    type: Schema.optional(
      Schema.Literals(["Microsoft.AzureActiveDirectory/b2cDirectories"]),
    ),
    sku: Schema.Struct({
      name: Schema.optional(
        Schema.Literals(["Standard", "PremiumP1", "PremiumP2"]),
      ),
      tier: Schema.optional(Schema.Literals(["A0"])),
    }),
    properties: Schema.optional(
      Schema.Struct({
        billingConfig: Schema.optional(
          Schema.Struct({
            billingType: Schema.optional(Schema.Literals(["MAU", "Auths"])),
            effectiveStartDateUtc: Schema.optional(Schema.String),
          }),
        ),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
) as unknown as Schema.Codec<B2CTenantsCreateOutput>;

// The operation
/**
 * Initiates an async request to create both the Azure AD B2C tenant and the corresponding Azure resource linked to a subscription.
 *
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 * @param resourceGroupName - The name of the resource group.
 * @param resourceName - The initial domain name of the Azure AD B2C tenant.
 */
export const B2CTenantsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: B2CTenantsCreateInput,
  outputSchema: B2CTenantsCreateOutput,
}));
// Input Schema
export interface B2CTenantsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const B2CTenantsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureActiveDirectory/b2cDirectories/{resourceName}",
    apiVersion: "2021-04-01",
  }),
) as unknown as Schema.Codec<B2CTenantsDeleteInput>;

// Output Schema
export type B2CTenantsDeleteOutput = void;
export const B2CTenantsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<B2CTenantsDeleteOutput>;

// The operation
/**
 * Initiates an async operation to delete the Azure AD B2C tenant and Azure resource. The resource deletion can only happen as the last step in [the tenant deletion process](https://aka.ms/deleteB2Ctenant).
 *
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 * @param resourceGroupName - The name of the resource group.
 * @param resourceName - The initial domain name of the Azure AD B2C tenant.
 */
export const B2CTenantsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: B2CTenantsDeleteInput,
  outputSchema: B2CTenantsDeleteOutput,
}));
// Input Schema
export interface B2CTenantsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const B2CTenantsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureActiveDirectory/b2cDirectories/{resourceName}",
    apiVersion: "2021-04-01",
  }),
) as unknown as Schema.Codec<B2CTenantsGetInput>;

// Output Schema
export interface B2CTenantsGetOutput {
  type?: "Microsoft.AzureActiveDirectory/b2cDirectories";
  sku: { name?: "Standard" | "PremiumP1" | "PremiumP2"; tier?: "A0" };
  properties?: {
    billingConfig?: {
      billingType?: "MAU" | "Auths";
      effectiveStartDateUtc?: string;
    };
    tenantId?: string;
  };
  id?: string;
  name?: string;
  location: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const B2CTenantsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(
    Schema.Literals(["Microsoft.AzureActiveDirectory/b2cDirectories"]),
  ),
  sku: Schema.Struct({
    name: Schema.optional(
      Schema.Literals(["Standard", "PremiumP1", "PremiumP2"]),
    ),
    tier: Schema.optional(Schema.Literals(["A0"])),
  }),
  properties: Schema.optional(
    Schema.Struct({
      billingConfig: Schema.optional(
        Schema.Struct({
          billingType: Schema.optional(Schema.Literals(["MAU", "Auths"])),
          effectiveStartDateUtc: Schema.optional(Schema.String),
        }),
      ),
      tenantId: Schema.optional(Schema.String),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
}) as unknown as Schema.Codec<B2CTenantsGetOutput>;

// The operation
/**
 * Get the Azure AD B2C tenant resource.
 *
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 * @param resourceGroupName - The name of the resource group.
 * @param resourceName - The initial domain name of the Azure AD B2C tenant.
 */
export const B2CTenantsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: B2CTenantsGetInput,
  outputSchema: B2CTenantsGetOutput,
}));
// Input Schema
export interface B2CTenantsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const B2CTenantsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureActiveDirectory/b2cDirectories",
      apiVersion: "2021-04-01",
    }),
  ) as unknown as Schema.Codec<B2CTenantsListByResourceGroupInput>;

// Output Schema
export interface B2CTenantsListByResourceGroupOutput {
  value?: {
    type?: "Microsoft.AzureActiveDirectory/b2cDirectories";
    sku: { name?: "Standard" | "PremiumP1" | "PremiumP2"; tier?: "A0" };
    properties?: {
      billingConfig?: {
        billingType?: "MAU" | "Auths";
        effectiveStartDateUtc?: string;
      };
      tenantId?: string;
    };
    id?: string;
    name?: string;
    location: string;
    tags?: Record<string, string>;
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
export const B2CTenantsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(
            Schema.Literals(["Microsoft.AzureActiveDirectory/b2cDirectories"]),
          ),
          sku: Schema.Struct({
            name: Schema.optional(
              Schema.Literals(["Standard", "PremiumP1", "PremiumP2"]),
            ),
            tier: Schema.optional(Schema.Literals(["A0"])),
          }),
          properties: Schema.optional(
            Schema.Struct({
              billingConfig: Schema.optional(
                Schema.Struct({
                  billingType: Schema.optional(
                    Schema.Literals(["MAU", "Auths"]),
                  ),
                  effectiveStartDateUtc: Schema.optional(Schema.String),
                }),
              ),
              tenantId: Schema.optional(Schema.String),
            }),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<B2CTenantsListByResourceGroupOutput>;

// The operation
/**
 * Get all the Azure AD B2C tenant resources in a resource group.
 *
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 * @param resourceGroupName - The name of the resource group.
 */
export const B2CTenantsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: B2CTenantsListByResourceGroupInput,
    outputSchema: B2CTenantsListByResourceGroupOutput,
  }));
// Input Schema
export interface B2CTenantsListBySubscriptionInput {
  subscriptionId: string;
}
export const B2CTenantsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureActiveDirectory/b2cDirectories",
      apiVersion: "2021-04-01",
    }),
  ) as unknown as Schema.Codec<B2CTenantsListBySubscriptionInput>;

// Output Schema
export interface B2CTenantsListBySubscriptionOutput {
  value?: {
    type?: "Microsoft.AzureActiveDirectory/b2cDirectories";
    sku: { name?: "Standard" | "PremiumP1" | "PremiumP2"; tier?: "A0" };
    properties?: {
      billingConfig?: {
        billingType?: "MAU" | "Auths";
        effectiveStartDateUtc?: string;
      };
      tenantId?: string;
    };
    id?: string;
    name?: string;
    location: string;
    tags?: Record<string, string>;
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
export const B2CTenantsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(
            Schema.Literals(["Microsoft.AzureActiveDirectory/b2cDirectories"]),
          ),
          sku: Schema.Struct({
            name: Schema.optional(
              Schema.Literals(["Standard", "PremiumP1", "PremiumP2"]),
            ),
            tier: Schema.optional(Schema.Literals(["A0"])),
          }),
          properties: Schema.optional(
            Schema.Struct({
              billingConfig: Schema.optional(
                Schema.Struct({
                  billingType: Schema.optional(
                    Schema.Literals(["MAU", "Auths"]),
                  ),
                  effectiveStartDateUtc: Schema.optional(Schema.String),
                }),
              ),
              tenantId: Schema.optional(Schema.String),
            }),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<B2CTenantsListBySubscriptionOutput>;

// The operation
/**
 * Get all the Azure AD B2C tenant resources in a subscription.
 *
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 */
export const B2CTenantsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: B2CTenantsListBySubscriptionInput,
    outputSchema: B2CTenantsListBySubscriptionOutput,
  }));
// Input Schema
export interface B2CTenantsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  sku?: { name?: "Standard" | "PremiumP1" | "PremiumP2"; tier?: "A0" };
  properties?: {
    billingConfig?: {
      billingType?: "MAU" | "Auths";
      effectiveStartDateUtc?: string;
    };
    tenantId?: string;
  };
  tags?: Record<string, string>;
}
export const B2CTenantsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.optional(
        Schema.Literals(["Standard", "PremiumP1", "PremiumP2"]),
      ),
      tier: Schema.optional(Schema.Literals(["A0"])),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      billingConfig: Schema.optional(
        Schema.Struct({
          billingType: Schema.optional(Schema.Literals(["MAU", "Auths"])),
          effectiveStartDateUtc: Schema.optional(Schema.String),
        }),
      ),
      tenantId: Schema.optional(Schema.String),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureActiveDirectory/b2cDirectories/{resourceName}",
    apiVersion: "2021-04-01",
  }),
) as unknown as Schema.Codec<B2CTenantsUpdateInput>;

// Output Schema
export interface B2CTenantsUpdateOutput {
  type?: "Microsoft.AzureActiveDirectory/b2cDirectories";
  sku: { name?: "Standard" | "PremiumP1" | "PremiumP2"; tier?: "A0" };
  properties?: {
    billingConfig?: {
      billingType?: "MAU" | "Auths";
      effectiveStartDateUtc?: string;
    };
    tenantId?: string;
  };
  id?: string;
  name?: string;
  location: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const B2CTenantsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    type: Schema.optional(
      Schema.Literals(["Microsoft.AzureActiveDirectory/b2cDirectories"]),
    ),
    sku: Schema.Struct({
      name: Schema.optional(
        Schema.Literals(["Standard", "PremiumP1", "PremiumP2"]),
      ),
      tier: Schema.optional(Schema.Literals(["A0"])),
    }),
    properties: Schema.optional(
      Schema.Struct({
        billingConfig: Schema.optional(
          Schema.Struct({
            billingType: Schema.optional(Schema.Literals(["MAU", "Auths"])),
            effectiveStartDateUtc: Schema.optional(Schema.String),
          }),
        ),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
) as unknown as Schema.Codec<B2CTenantsUpdateOutput>;

// The operation
/**
 * Update the Azure AD B2C tenant resource.
 *
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 * @param resourceGroupName - The name of the resource group.
 * @param resourceName - The initial domain name of the Azure AD B2C tenant.
 */
export const B2CTenantsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: B2CTenantsUpdateInput,
  outputSchema: B2CTenantsUpdateOutput,
}));
// Input Schema
export interface GuestUsagesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  properties?: { tenantId?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GuestUsagesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
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
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureActiveDirectory/guestUsages/{resourceName}",
    apiVersion: "2021-04-01",
  }),
) as unknown as Schema.Codec<GuestUsagesCreateInput>;

// Output Schema
export interface GuestUsagesCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  properties?: { tenantId?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GuestUsagesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<GuestUsagesCreateOutput>;

// The operation
/**
 * Creates a Guest Usages resource
 *
 * Creates a Guest Usages resource, which is used to linking a subscription to an instance of Azure AD External Identities. [Learn more](https://aka.ms/extidbilling).
 *
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param resourceName - The initial domain name of the Azure AD B2C tenant.
 */
export const GuestUsagesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestUsagesCreateInput,
  outputSchema: GuestUsagesCreateOutput,
}));
// Input Schema
export interface GuestUsagesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const GuestUsagesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureActiveDirectory/guestUsages/{resourceName}",
    apiVersion: "2021-04-01",
  }),
) as unknown as Schema.Codec<GuestUsagesDeleteInput>;

// Output Schema
export type GuestUsagesDeleteOutput = void;
export const GuestUsagesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GuestUsagesDeleteOutput>;

// The operation
/**
 * Deletes a Guest Usages resource
 *
 * Deletes a Guest Usages resource for the Microsoft.AzureActiveDirectory resource provider
 *
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param resourceName - The initial domain name of the Azure AD B2C tenant.
 */
export const GuestUsagesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestUsagesDeleteInput,
  outputSchema: GuestUsagesDeleteOutput,
}));
// Input Schema
export interface GuestUsagesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const GuestUsagesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureActiveDirectory/guestUsages/{resourceName}",
    apiVersion: "2021-04-01",
  }),
) as unknown as Schema.Codec<GuestUsagesGetInput>;

// Output Schema
export interface GuestUsagesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  properties?: { tenantId?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GuestUsagesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      tenantId: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<GuestUsagesGetOutput>;

// The operation
/**
 * Gets a Guest Usages resource
 *
 * Gets a Guest Usages resource for the Microsoft.AzureActiveDirectory resource provider
 *
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param resourceName - The initial domain name of the Azure AD B2C tenant.
 */
export const GuestUsagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestUsagesGetInput,
  outputSchema: GuestUsagesGetOutput,
}));
// Input Schema
export interface GuestUsagesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const GuestUsagesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureActiveDirectory/guestUsages",
      apiVersion: "2021-04-01",
    }),
  ) as unknown as Schema.Codec<GuestUsagesListByResourceGroupInput>;

// Output Schema
export interface GuestUsagesListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
    properties?: { tenantId?: string };
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
export const GuestUsagesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          properties: Schema.optional(
            Schema.Struct({
              tenantId: Schema.optional(Schema.String),
            }),
          ),
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
  }) as unknown as Schema.Codec<GuestUsagesListByResourceGroupOutput>;

// The operation
/**
 * Gets Guest Usages resources under resource group
 *
 * Gets Guest Usages resources under a resource group for the Microsoft.AzureActiveDirectory resource provider
 *
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 */
export const GuestUsagesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestUsagesListByResourceGroupInput,
    outputSchema: GuestUsagesListByResourceGroupOutput,
  }));
// Input Schema
export interface GuestUsagesListBySubscriptionInput {
  subscriptionId: string;
}
export const GuestUsagesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureActiveDirectory/guestUsages",
      apiVersion: "2021-04-01",
    }),
  ) as unknown as Schema.Codec<GuestUsagesListBySubscriptionInput>;

// Output Schema
export interface GuestUsagesListBySubscriptionOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
    properties?: { tenantId?: string };
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
export const GuestUsagesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          properties: Schema.optional(
            Schema.Struct({
              tenantId: Schema.optional(Schema.String),
            }),
          ),
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
  }) as unknown as Schema.Codec<GuestUsagesListBySubscriptionOutput>;

// The operation
/**
 * Gets Guest Usages resources under a subscription
 *
 * Gets Guest Usages resources under a subscription for the Microsoft.AzureActiveDirectory resource provider
 *
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const GuestUsagesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestUsagesListBySubscriptionInput,
    outputSchema: GuestUsagesListBySubscriptionOutput,
  }));
// Input Schema
export interface GuestUsagesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  tags?: Record<string, string>;
}
export const GuestUsagesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureActiveDirectory/guestUsages/{resourceName}",
    apiVersion: "2021-04-01",
  }),
) as unknown as Schema.Codec<GuestUsagesUpdateInput>;

// Output Schema
export interface GuestUsagesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  properties?: { tenantId?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GuestUsagesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<GuestUsagesUpdateOutput>;

// The operation
/**
 * Updates a Guest Usages resource
 *
 * Updates a Guest Usages resource for the Microsoft.AzureActiveDirectory resource provider
 *
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group.
 * @param resourceName - The initial domain name of the Azure AD B2C tenant.
 */
export const GuestUsagesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestUsagesUpdateInput,
  outputSchema: GuestUsagesUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AzureActiveDirectory/operations",
    apiVersion: "2021-04-01",
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
    origin?: string;
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
        origin: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists the operations available from this provider.
 *
 * @param api-version - Version of the API to be used with the client request.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
