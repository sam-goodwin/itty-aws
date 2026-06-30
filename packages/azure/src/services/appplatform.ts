/**
 * Azure Appplatform API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ApiPortalCustomDomainsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  apiPortalName: string;
  domainName: string;
  properties?: { thumbprint?: string };
}
export const ApiPortalCustomDomainsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    apiPortalName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        thumbprint: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApiPortalCustomDomainsCreateOrUpdateInput>;

// Output Schema
export interface ApiPortalCustomDomainsCreateOrUpdateOutput {
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
export const ApiPortalCustomDomainsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ApiPortalCustomDomainsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the API portal custom domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param apiPortalName - The name of API portal.
 * @param domainName - The name of the API portal custom domain.
 */
export const ApiPortalCustomDomainsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApiPortalCustomDomainsCreateOrUpdateInput,
    outputSchema: ApiPortalCustomDomainsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ApiPortalCustomDomainsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  apiPortalName: string;
  domainName: string;
}
export const ApiPortalCustomDomainsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    apiPortalName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApiPortalCustomDomainsDeleteInput>;

// Output Schema
export type ApiPortalCustomDomainsDeleteOutput = void;
export const ApiPortalCustomDomainsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ApiPortalCustomDomainsDeleteOutput>;

// The operation
/**
 * Delete the API portal custom domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param apiPortalName - The name of API portal.
 * @param domainName - The name of the API portal custom domain.
 */
export const ApiPortalCustomDomainsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApiPortalCustomDomainsDeleteInput,
    outputSchema: ApiPortalCustomDomainsDeleteOutput,
  }));
// Input Schema
export interface ApiPortalCustomDomainsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  apiPortalName: string;
  domainName: string;
}
export const ApiPortalCustomDomainsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    apiPortalName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApiPortalCustomDomainsGetInput>;

// Output Schema
export interface ApiPortalCustomDomainsGetOutput {
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
export const ApiPortalCustomDomainsGetOutput =
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
  }) as unknown as Schema.Codec<ApiPortalCustomDomainsGetOutput>;

// The operation
/**
 * Get the API portal custom domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param apiPortalName - The name of API portal.
 * @param domainName - The name of the API portal custom domain.
 */
export const ApiPortalCustomDomainsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApiPortalCustomDomainsGetInput,
    outputSchema: ApiPortalCustomDomainsGetOutput,
  }),
);
// Input Schema
export interface ApiPortalCustomDomainsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  apiPortalName: string;
}
export const ApiPortalCustomDomainsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    apiPortalName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}/domains",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApiPortalCustomDomainsListInput>;

// Output Schema
export interface ApiPortalCustomDomainsListOutput {
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
export const ApiPortalCustomDomainsListOutput =
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
  }) as unknown as Schema.Codec<ApiPortalCustomDomainsListOutput>;

// The operation
/**
 * Handle requests to list all API portal custom domains.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param apiPortalName - The name of API portal.
 */
export const ApiPortalCustomDomainsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApiPortalCustomDomainsListInput,
    outputSchema: ApiPortalCustomDomainsListOutput,
  }),
);
// Input Schema
export interface ApiPortalsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  apiPortalName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting";
    public?: boolean;
    url?: string;
    httpsOnly?: boolean;
    gatewayIds?: string[];
    sourceUrls?: string[];
    ssoProperties?: {
      scope?: string[];
      clientId?: string;
      clientSecret?: string | Redacted.Redacted<string>;
      issuerUri?: string;
    };
    resourceRequests?: { cpu?: string; memory?: string };
    instances?: { name?: string; status?: string }[];
    apiTryOutEnabledState?: "Enabled" | "Disabled";
  };
  sku?: { name?: string; tier?: string; capacity?: number };
}
export const ApiPortalsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    apiPortalName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        public: Schema.optional(Schema.Boolean),
        url: Schema.optional(Schema.String),
        httpsOnly: Schema.optional(Schema.Boolean),
        gatewayIds: Schema.optional(Schema.Array(Schema.String)),
        sourceUrls: Schema.optional(Schema.Array(Schema.String)),
        ssoProperties: Schema.optional(
          Schema.Struct({
            scope: Schema.optional(Schema.Array(Schema.String)),
            clientId: Schema.optional(Schema.String),
            clientSecret: Schema.optional(SensitiveString),
            issuerUri: Schema.optional(Schema.String),
          }),
        ),
        resourceRequests: Schema.optional(
          Schema.Struct({
            cpu: Schema.optional(Schema.String),
            memory: Schema.optional(Schema.String),
          }),
        ),
        instances: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
            }),
          ),
        ),
        apiTryOutEnabledState: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApiPortalsCreateOrUpdateInput>;

// Output Schema
export interface ApiPortalsCreateOrUpdateOutput {
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
export const ApiPortalsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ApiPortalsCreateOrUpdateOutput>;

// The operation
/**
 * Create the default API portal or update the existing API portal.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param apiPortalName - The name of API portal.
 */
export const ApiPortalsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApiPortalsCreateOrUpdateInput,
    outputSchema: ApiPortalsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ApiPortalsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  apiPortalName: string;
}
export const ApiPortalsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  apiPortalName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ApiPortalsDeleteInput>;

// Output Schema
export type ApiPortalsDeleteOutput = void;
export const ApiPortalsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ApiPortalsDeleteOutput>;

// The operation
/**
 * Delete the default API portal.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param apiPortalName - The name of API portal.
 */
export const ApiPortalsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApiPortalsDeleteInput,
  outputSchema: ApiPortalsDeleteOutput,
}));
// Input Schema
export interface ApiPortalsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  apiPortalName: string;
}
export const ApiPortalsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  apiPortalName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ApiPortalsGetInput>;

// Output Schema
export interface ApiPortalsGetOutput {
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
export const ApiPortalsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ApiPortalsGetOutput>;

// The operation
/**
 * Get the API portal and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param apiPortalName - The name of API portal.
 */
export const ApiPortalsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApiPortalsGetInput,
  outputSchema: ApiPortalsGetOutput,
}));
// Input Schema
export interface ApiPortalsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ApiPortalsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ApiPortalsListInput>;

// Output Schema
export interface ApiPortalsListOutput {
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
export const ApiPortalsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ApiPortalsListOutput>;

// The operation
/**
 * Handles requests to list all resources in a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ApiPortalsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApiPortalsListInput,
  outputSchema: ApiPortalsListOutput,
}));
// Input Schema
export interface ApiPortalsValidateDomainInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  apiPortalName: string;
  name: string;
}
export const ApiPortalsValidateDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    apiPortalName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}/validateDomain",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApiPortalsValidateDomainInput>;

// Output Schema
export interface ApiPortalsValidateDomainOutput {
  isValid?: boolean;
  message?: string;
}
export const ApiPortalsValidateDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isValid: Schema.optional(Schema.Boolean),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ApiPortalsValidateDomainOutput>;

// The operation
/**
 * Check the domains are valid as well as not in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param apiPortalName - The name of API portal.
 */
export const ApiPortalsValidateDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApiPortalsValidateDomainInput,
    outputSchema: ApiPortalsValidateDomainOutput,
  }),
);
// Input Schema
export interface ApmsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  apmName: string;
  properties?: {
    type: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting"
      | "Canceled";
    properties?: Record<string, string>;
    secrets?: Record<string, string>;
  };
}
export const ApmsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    apmName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        type: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Canceled",
          ]),
        ),
        properties: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        secrets: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apms/{apmName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApmsCreateOrUpdateInput>;

// Output Schema
export interface ApmsCreateOrUpdateOutput {
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
export const ApmsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ApmsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an APM.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param apmName - The name of the APM
 */
export const ApmsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApmsCreateOrUpdateInput,
  outputSchema: ApmsCreateOrUpdateOutput,
}));
// Input Schema
export interface ApmsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  apmName: string;
}
export const ApmsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  apmName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apms/{apmName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ApmsDeleteInput>;

// Output Schema
export type ApmsDeleteOutput = void;
export const ApmsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ApmsDeleteOutput>;

// The operation
/**
 * Operation to delete an APM
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param apmName - The name of the APM
 */
export const ApmsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApmsDeleteInput,
  outputSchema: ApmsDeleteOutput,
}));
// Input Schema
export interface ApmsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  apmName: string;
}
export const ApmsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  apmName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apms/{apmName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ApmsGetInput>;

// Output Schema
export interface ApmsGetOutput {
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
export const ApmsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ApmsGetOutput>;

// The operation
/**
 * Get the APM by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param apmName - The name of the APM
 */
export const ApmsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApmsGetInput,
  outputSchema: ApmsGetOutput,
}));
// Input Schema
export interface ApmsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ApmsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apms",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ApmsListInput>;

// Output Schema
export interface ApmsListOutput {
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
export const ApmsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ApmsListOutput>;

// The operation
/**
 * Get collection of APMs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ApmsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApmsListInput,
  outputSchema: ApmsListOutput,
}));
// Input Schema
export interface ApmsListSecretKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  apmName: string;
}
export const ApmsListSecretKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    apmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apms/{apmName}/listSecretKeys",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApmsListSecretKeysInput>;

// Output Schema
export interface ApmsListSecretKeysOutput {
  value?: string[];
}
export const ApmsListSecretKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<ApmsListSecretKeysOutput>;

// The operation
/**
 * List keys of APM sensitive properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param apmName - The name of the APM
 */
export const ApmsListSecretKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApmsListSecretKeysInput,
  outputSchema: ApmsListSecretKeysOutput,
}));
// Input Schema
export interface ApplicationAcceleratorsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  applicationAcceleratorName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting"
      | "Canceled";
    components?: {
      name?: string;
      resourceRequests?: {
        cpu?: string;
        memory?: string;
        instanceCount?: number;
      };
      instances?: { name?: string; status?: string }[];
    }[];
  };
  sku?: { name?: string; tier?: string; capacity?: number };
}
export const ApplicationAcceleratorsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    applicationAcceleratorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Canceled",
          ]),
        ),
        components: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              resourceRequests: Schema.optional(
                Schema.Struct({
                  cpu: Schema.optional(Schema.String),
                  memory: Schema.optional(Schema.String),
                  instanceCount: Schema.optional(Schema.Number),
                }),
              ),
              instances: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    status: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApplicationAcceleratorsCreateOrUpdateInput>;

// Output Schema
export interface ApplicationAcceleratorsCreateOrUpdateOutput {
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
export const ApplicationAcceleratorsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ApplicationAcceleratorsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the application accelerator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param applicationAcceleratorName - The name of the application accelerator.
 */
export const ApplicationAcceleratorsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationAcceleratorsCreateOrUpdateInput,
    outputSchema: ApplicationAcceleratorsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ApplicationAcceleratorsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  applicationAcceleratorName: string;
}
export const ApplicationAcceleratorsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    applicationAcceleratorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApplicationAcceleratorsDeleteInput>;

// Output Schema
export type ApplicationAcceleratorsDeleteOutput = void;
export const ApplicationAcceleratorsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationAcceleratorsDeleteOutput>;

// The operation
/**
 * Delete the application accelerator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param applicationAcceleratorName - The name of the application accelerator.
 */
export const ApplicationAcceleratorsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationAcceleratorsDeleteInput,
    outputSchema: ApplicationAcceleratorsDeleteOutput,
  }));
// Input Schema
export interface ApplicationAcceleratorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  applicationAcceleratorName: string;
}
export const ApplicationAcceleratorsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    applicationAcceleratorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApplicationAcceleratorsGetInput>;

// Output Schema
export interface ApplicationAcceleratorsGetOutput {
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
export const ApplicationAcceleratorsGetOutput =
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
  }) as unknown as Schema.Codec<ApplicationAcceleratorsGetOutput>;

// The operation
/**
 * Get the application accelerator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param applicationAcceleratorName - The name of the application accelerator.
 */
export const ApplicationAcceleratorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationAcceleratorsGetInput,
    outputSchema: ApplicationAcceleratorsGetOutput,
  }),
);
// Input Schema
export interface ApplicationAcceleratorsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ApplicationAcceleratorsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApplicationAcceleratorsListInput>;

// Output Schema
export interface ApplicationAcceleratorsListOutput {
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
export const ApplicationAcceleratorsListOutput =
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
  }) as unknown as Schema.Codec<ApplicationAcceleratorsListOutput>;

// The operation
/**
 * Handle requests to list all application accelerator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ApplicationAcceleratorsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationAcceleratorsListInput,
    outputSchema: ApplicationAcceleratorsListOutput,
  }),
);
// Input Schema
export interface ApplicationLiveViewsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  applicationLiveViewName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting"
      | "Canceled";
    components?: {
      name?: unknown;
      resourceRequests?: {
        cpu?: string;
        memory?: string;
        instanceCount?: number;
      };
      instances?: { name?: string; status?: string }[];
    }[];
  };
}
export const ApplicationLiveViewsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    applicationLiveViewName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Canceled",
          ]),
        ),
        components: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.Unknown),
              resourceRequests: Schema.optional(
                Schema.Struct({
                  cpu: Schema.optional(Schema.String),
                  memory: Schema.optional(Schema.String),
                  instanceCount: Schema.optional(Schema.Number),
                }),
              ),
              instances: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    status: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationLiveViews/{applicationLiveViewName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApplicationLiveViewsCreateOrUpdateInput>;

// Output Schema
export interface ApplicationLiveViewsCreateOrUpdateOutput {
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
export const ApplicationLiveViewsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ApplicationLiveViewsCreateOrUpdateOutput>;

// The operation
/**
 * Create the default Application Live View or update the existing Application Live View.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param applicationLiveViewName - The name of Application Live View.
 */
export const ApplicationLiveViewsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationLiveViewsCreateOrUpdateInput,
    outputSchema: ApplicationLiveViewsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ApplicationLiveViewsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  applicationLiveViewName: string;
}
export const ApplicationLiveViewsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    applicationLiveViewName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationLiveViews/{applicationLiveViewName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApplicationLiveViewsDeleteInput>;

// Output Schema
export type ApplicationLiveViewsDeleteOutput = void;
export const ApplicationLiveViewsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationLiveViewsDeleteOutput>;

// The operation
/**
 * Disable the default Application Live View.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param applicationLiveViewName - The name of Application Live View.
 */
export const ApplicationLiveViewsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationLiveViewsDeleteInput,
    outputSchema: ApplicationLiveViewsDeleteOutput,
  }),
);
// Input Schema
export interface ApplicationLiveViewsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  applicationLiveViewName: string;
}
export const ApplicationLiveViewsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    applicationLiveViewName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationLiveViews/{applicationLiveViewName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApplicationLiveViewsGetInput>;

// Output Schema
export interface ApplicationLiveViewsGetOutput {
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
export const ApplicationLiveViewsGetOutput =
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
  }) as unknown as Schema.Codec<ApplicationLiveViewsGetOutput>;

// The operation
/**
 * Get the Application Live  and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param applicationLiveViewName - The name of Application Live View.
 */
export const ApplicationLiveViewsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationLiveViewsGetInput,
    outputSchema: ApplicationLiveViewsGetOutput,
  }),
);
// Input Schema
export interface ApplicationLiveViewsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ApplicationLiveViewsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationLiveViews",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ApplicationLiveViewsListInput>;

// Output Schema
export interface ApplicationLiveViewsListOutput {
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
export const ApplicationLiveViewsListOutput =
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
  }) as unknown as Schema.Codec<ApplicationLiveViewsListOutput>;

// The operation
/**
 * Handles requests to list all resources in a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ApplicationLiveViewsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationLiveViewsListInput,
    outputSchema: ApplicationLiveViewsListOutput,
  }),
);
// Input Schema
export interface AppsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  properties?: {
    public?: boolean;
    url?: string;
    addonConfigs?: Record<string, unknown>;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Creating"
      | "Updating"
      | "Deleting";
    fqdn?: string;
    httpsOnly?: boolean;
    temporaryDisk?: { sizeInGB?: number; mountPath?: string };
    persistentDisk?: {
      sizeInGB?: number;
      usedInGB?: number;
      mountPath?: string;
    };
    customPersistentDisks?: {
      customPersistentDiskProperties?: {
        type: "AzureFileVolume";
        mountPath: string;
        readOnly?: boolean;
        enableSubPath?: boolean;
        mountOptions?: string[];
      };
      storageId: string;
    }[];
    enableEndToEndTLS?: boolean;
    loadedCertificates?: { resourceId: string; loadTrustStore?: boolean }[];
    vnetAddons?: { publicEndpoint?: boolean; publicEndpointUrl?: string };
    ingressSettings?: {
      readTimeoutInSeconds?: number;
      sendTimeoutInSeconds?: number;
      sessionAffinity?: "Cookie" | "None";
      sessionCookieMaxAge?: number;
      backendProtocol?: "GRPC" | "Default";
      clientAuth?: { certificates?: string[] };
    };
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  location?: string;
}
export const AppsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        public: Schema.optional(Schema.Boolean),
        url: Schema.optional(Schema.String),
        addonConfigs: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Creating",
            "Updating",
            "Deleting",
          ]),
        ),
        fqdn: Schema.optional(Schema.String),
        httpsOnly: Schema.optional(Schema.Boolean),
        temporaryDisk: Schema.optional(
          Schema.Struct({
            sizeInGB: Schema.optional(Schema.Number),
            mountPath: Schema.optional(Schema.String),
          }),
        ),
        persistentDisk: Schema.optional(
          Schema.Struct({
            sizeInGB: Schema.optional(Schema.Number),
            usedInGB: Schema.optional(Schema.Number),
            mountPath: Schema.optional(Schema.String),
          }),
        ),
        customPersistentDisks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              customPersistentDiskProperties: Schema.optional(
                Schema.Struct({
                  type: Schema.Literals(["AzureFileVolume"]),
                  mountPath: Schema.String,
                  readOnly: Schema.optional(Schema.Boolean),
                  enableSubPath: Schema.optional(Schema.Boolean),
                  mountOptions: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
              storageId: Schema.String,
            }),
          ),
        ),
        enableEndToEndTLS: Schema.optional(Schema.Boolean),
        loadedCertificates: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resourceId: Schema.String,
              loadTrustStore: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        vnetAddons: Schema.optional(
          Schema.Struct({
            publicEndpoint: Schema.optional(Schema.Boolean),
            publicEndpointUrl: Schema.optional(Schema.String),
          }),
        ),
        ingressSettings: Schema.optional(
          Schema.Struct({
            readTimeoutInSeconds: Schema.optional(Schema.Number),
            sendTimeoutInSeconds: Schema.optional(Schema.Number),
            sessionAffinity: Schema.optional(
              Schema.Literals(["Cookie", "None"]),
            ),
            sessionCookieMaxAge: Schema.optional(Schema.Number),
            backendProtocol: Schema.optional(
              Schema.Literals(["GRPC", "Default"]),
            ),
            clientAuth: Schema.optional(
              Schema.Struct({
                certificates: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
          }),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
          ]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<AppsCreateOrUpdateInput>;

// Output Schema
export interface AppsCreateOrUpdateOutput {
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
export const AppsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AppsCreateOrUpdateOutput>;

// The operation
/**
 * Create a new App or update an exiting App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 */
export const AppsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppsCreateOrUpdateInput,
  outputSchema: AppsCreateOrUpdateOutput,
}));
// Input Schema
export interface AppsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
}
export const AppsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  appName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<AppsDeleteInput>;

// Output Schema
export type AppsDeleteOutput = void;
export const AppsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AppsDeleteOutput>;

// The operation
/**
 * Operation to delete an App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 */
export const AppsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppsDeleteInput,
  outputSchema: AppsDeleteOutput,
}));
// Input Schema
export interface AppsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  syncStatus?: string;
}
export const AppsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  appName: Schema.String.pipe(T.PathParam()),
  syncStatus: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<AppsGetInput>;

// Output Schema
export interface AppsGetOutput {
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
export const AppsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AppsGetOutput>;

// The operation
/**
 * Get an App and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param syncStatus - Indicates whether sync status
 */
export const AppsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppsGetInput,
  outputSchema: AppsGetOutput,
}));
// Input Schema
export interface AppsGetResourceUploadUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
}
export const AppsGetResourceUploadUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/getResourceUploadUrl",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<AppsGetResourceUploadUrlInput>;

// Output Schema
export interface AppsGetResourceUploadUrlOutput {
  relativePath?: string;
  uploadUrl?: string;
}
export const AppsGetResourceUploadUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relativePath: Schema.optional(Schema.String),
    uploadUrl: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AppsGetResourceUploadUrlOutput>;

// The operation
/**
 * Get an resource upload URL for an App, which may be artifacts or source archive.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 */
export const AppsGetResourceUploadUrl = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppsGetResourceUploadUrlInput,
    outputSchema: AppsGetResourceUploadUrlOutput,
  }),
);
// Input Schema
export interface AppsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const AppsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<AppsListInput>;

// Output Schema
export interface AppsListOutput {
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
export const AppsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AppsListOutput>;

// The operation
/**
 * Handles requests to list all resources in a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const AppsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppsListInput,
  outputSchema: AppsListOutput,
}));
// Input Schema
export interface AppsSetActiveDeploymentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  activeDeploymentNames?: string[];
}
export const AppsSetActiveDeploymentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    activeDeploymentNames: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/setActiveDeployments",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<AppsSetActiveDeploymentsInput>;

// Output Schema
export interface AppsSetActiveDeploymentsOutput {
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
export const AppsSetActiveDeploymentsOutput =
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
  }) as unknown as Schema.Codec<AppsSetActiveDeploymentsOutput>;

// The operation
/**
 * Set existing Deployment under the app as active
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 */
export const AppsSetActiveDeployments = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppsSetActiveDeploymentsInput,
    outputSchema: AppsSetActiveDeploymentsOutput,
  }),
);
// Input Schema
export interface AppsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  properties?: {
    public?: boolean;
    url?: string;
    addonConfigs?: Record<string, unknown>;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Creating"
      | "Updating"
      | "Deleting";
    fqdn?: string;
    httpsOnly?: boolean;
    temporaryDisk?: { sizeInGB?: number; mountPath?: string };
    persistentDisk?: {
      sizeInGB?: number;
      usedInGB?: number;
      mountPath?: string;
    };
    customPersistentDisks?: {
      customPersistentDiskProperties?: {
        type: "AzureFileVolume";
        mountPath: string;
        readOnly?: boolean;
        enableSubPath?: boolean;
        mountOptions?: string[];
      };
      storageId: string;
    }[];
    enableEndToEndTLS?: boolean;
    loadedCertificates?: { resourceId: string; loadTrustStore?: boolean }[];
    vnetAddons?: { publicEndpoint?: boolean; publicEndpointUrl?: string };
    ingressSettings?: {
      readTimeoutInSeconds?: number;
      sendTimeoutInSeconds?: number;
      sessionAffinity?: "Cookie" | "None";
      sessionCookieMaxAge?: number;
      backendProtocol?: "GRPC" | "Default";
      clientAuth?: { certificates?: string[] };
    };
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  location?: string;
}
export const AppsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  appName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      public: Schema.optional(Schema.Boolean),
      url: Schema.optional(Schema.String),
      addonConfigs: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Creating",
          "Updating",
          "Deleting",
        ]),
      ),
      fqdn: Schema.optional(Schema.String),
      httpsOnly: Schema.optional(Schema.Boolean),
      temporaryDisk: Schema.optional(
        Schema.Struct({
          sizeInGB: Schema.optional(Schema.Number),
          mountPath: Schema.optional(Schema.String),
        }),
      ),
      persistentDisk: Schema.optional(
        Schema.Struct({
          sizeInGB: Schema.optional(Schema.Number),
          usedInGB: Schema.optional(Schema.Number),
          mountPath: Schema.optional(Schema.String),
        }),
      ),
      customPersistentDisks: Schema.optional(
        Schema.Array(
          Schema.Struct({
            customPersistentDiskProperties: Schema.optional(
              Schema.Struct({
                type: Schema.Literals(["AzureFileVolume"]),
                mountPath: Schema.String,
                readOnly: Schema.optional(Schema.Boolean),
                enableSubPath: Schema.optional(Schema.Boolean),
                mountOptions: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            storageId: Schema.String,
          }),
        ),
      ),
      enableEndToEndTLS: Schema.optional(Schema.Boolean),
      loadedCertificates: Schema.optional(
        Schema.Array(
          Schema.Struct({
            resourceId: Schema.String,
            loadTrustStore: Schema.optional(Schema.Boolean),
          }),
        ),
      ),
      vnetAddons: Schema.optional(
        Schema.Struct({
          publicEndpoint: Schema.optional(Schema.Boolean),
          publicEndpointUrl: Schema.optional(Schema.String),
        }),
      ),
      ingressSettings: Schema.optional(
        Schema.Struct({
          readTimeoutInSeconds: Schema.optional(Schema.Number),
          sendTimeoutInSeconds: Schema.optional(Schema.Number),
          sessionAffinity: Schema.optional(Schema.Literals(["Cookie", "None"])),
          sessionCookieMaxAge: Schema.optional(Schema.Number),
          backendProtocol: Schema.optional(
            Schema.Literals(["GRPC", "Default"]),
          ),
          clientAuth: Schema.optional(
            Schema.Struct({
              certificates: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        }),
      ),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(
        Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
      ),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
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
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<AppsUpdateInput>;

// Output Schema
export interface AppsUpdateOutput {
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
export const AppsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AppsUpdateOutput>;

// The operation
/**
 * Operation to update an exiting App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 */
export const AppsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppsUpdateInput,
  outputSchema: AppsUpdateOutput,
}));
// Input Schema
export interface AppsValidateDomainInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  name: string;
}
export const AppsValidateDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/validateDomain",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<AppsValidateDomainInput>;

// Output Schema
export interface AppsValidateDomainOutput {
  isValid?: boolean;
  message?: string;
}
export const AppsValidateDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isValid: Schema.optional(Schema.Boolean),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AppsValidateDomainOutput>;

// The operation
/**
 * Check the resource name is valid as well as not in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 */
export const AppsValidateDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppsValidateDomainInput,
  outputSchema: AppsValidateDomainOutput,
}));
// Input Schema
export interface BindingsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  bindingName: string;
  properties?: {
    resourceName?: string;
    resourceType?: string;
    resourceId?: string;
    key?: string;
    bindingParameters?: Record<string, string>;
    generatedProperties?: string;
    createdAt?: string;
    updatedAt?: string;
  };
}
export const BindingsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    bindingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        resourceName: Schema.optional(Schema.String),
        resourceType: Schema.optional(Schema.String),
        resourceId: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
        bindingParameters: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        generatedProperties: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        updatedAt: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BindingsCreateOrUpdateInput>;

// Output Schema
export interface BindingsCreateOrUpdateOutput {
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
export const BindingsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BindingsCreateOrUpdateOutput>;

// The operation
/**
 * Create a new Binding or update an exiting Binding.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param bindingName - The name of the Binding resource.
 */
export const BindingsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BindingsCreateOrUpdateInput,
    outputSchema: BindingsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface BindingsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  bindingName: string;
}
export const BindingsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  appName: Schema.String.pipe(T.PathParam()),
  bindingName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<BindingsDeleteInput>;

// Output Schema
export type BindingsDeleteOutput = void;
export const BindingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BindingsDeleteOutput>;

// The operation
/**
 * Operation to delete a Binding.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param bindingName - The name of the Binding resource.
 */
export const BindingsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BindingsDeleteInput,
  outputSchema: BindingsDeleteOutput,
}));
// Input Schema
export interface BindingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  bindingName: string;
}
export const BindingsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  appName: Schema.String.pipe(T.PathParam()),
  bindingName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<BindingsGetInput>;

// Output Schema
export interface BindingsGetOutput {
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
export const BindingsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BindingsGetOutput>;

// The operation
/**
 * Get a Binding and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param bindingName - The name of the Binding resource.
 */
export const BindingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BindingsGetInput,
  outputSchema: BindingsGetOutput,
}));
// Input Schema
export interface BindingsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
}
export const BindingsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  appName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<BindingsListInput>;

// Output Schema
export interface BindingsListOutput {
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
export const BindingsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BindingsListOutput>;

// The operation
/**
 * Handles requests to list all resources in an App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 */
export const BindingsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BindingsListInput,
  outputSchema: BindingsListOutput,
}));
// Input Schema
export interface BindingsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  bindingName: string;
  properties?: {
    resourceName?: string;
    resourceType?: string;
    resourceId?: string;
    key?: string;
    bindingParameters?: Record<string, string>;
    generatedProperties?: string;
    createdAt?: string;
    updatedAt?: string;
  };
}
export const BindingsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  appName: Schema.String.pipe(T.PathParam()),
  bindingName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      resourceName: Schema.optional(Schema.String),
      resourceType: Schema.optional(Schema.String),
      resourceId: Schema.optional(Schema.String),
      key: Schema.optional(Schema.String),
      bindingParameters: Schema.optional(
        Schema.Record(Schema.String, Schema.String),
      ),
      generatedProperties: Schema.optional(Schema.String),
      createdAt: Schema.optional(Schema.String),
      updatedAt: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<BindingsUpdateInput>;

// Output Schema
export interface BindingsUpdateOutput {
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
export const BindingsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BindingsUpdateOutput>;

// The operation
/**
 * Operation to update an exiting Binding.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param bindingName - The name of the Binding resource.
 */
export const BindingsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BindingsUpdateInput,
  outputSchema: BindingsUpdateOutput,
}));
// Input Schema
export interface BuildpackBindingCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  builderName: string;
  buildpackBindingName: string;
  properties?: {
    bindingType?:
      | "ApplicationInsights"
      | "ApacheSkyWalking"
      | "AppDynamics"
      | "Dynatrace"
      | "NewRelic"
      | "ElasticAPM";
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting";
    launchProperties?: {
      properties?: Record<string, string>;
      secrets?: Record<string, string>;
    };
  };
}
export const BuildpackBindingCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    builderName: Schema.String.pipe(T.PathParam()),
    buildpackBindingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        bindingType: Schema.optional(
          Schema.Literals([
            "ApplicationInsights",
            "ApacheSkyWalking",
            "AppDynamics",
            "Dynatrace",
            "NewRelic",
            "ElasticAPM",
          ]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        launchProperties: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            secrets: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}/buildpackBindings/{buildpackBindingName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildpackBindingCreateOrUpdateInput>;

// Output Schema
export interface BuildpackBindingCreateOrUpdateOutput {
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
export const BuildpackBindingCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BuildpackBindingCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a buildpack binding.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param builderName - The name of the builder resource.
 * @param buildpackBindingName - The name of the Buildpack Binding Name
 */
export const BuildpackBindingCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildpackBindingCreateOrUpdateInput,
    outputSchema: BuildpackBindingCreateOrUpdateOutput,
  }));
// Input Schema
export interface BuildpackBindingDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  builderName: string;
  buildpackBindingName: string;
}
export const BuildpackBindingDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    builderName: Schema.String.pipe(T.PathParam()),
    buildpackBindingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}/buildpackBindings/{buildpackBindingName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildpackBindingDeleteInput>;

// Output Schema
export type BuildpackBindingDeleteOutput = void;
export const BuildpackBindingDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BuildpackBindingDeleteOutput>;

// The operation
/**
 * Operation to delete a Buildpack Binding
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param builderName - The name of the builder resource.
 * @param buildpackBindingName - The name of the Buildpack Binding Name
 */
export const BuildpackBindingDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildpackBindingDeleteInput,
    outputSchema: BuildpackBindingDeleteOutput,
  }),
);
// Input Schema
export interface BuildpackBindingGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  builderName: string;
  buildpackBindingName: string;
}
export const BuildpackBindingGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    builderName: Schema.String.pipe(T.PathParam()),
    buildpackBindingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}/buildpackBindings/{buildpackBindingName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildpackBindingGetInput>;

// Output Schema
export interface BuildpackBindingGetOutput {
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
export const BuildpackBindingGetOutput =
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
  }) as unknown as Schema.Codec<BuildpackBindingGetOutput>;

// The operation
/**
 * Get a buildpack binding by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param builderName - The name of the builder resource.
 * @param buildpackBindingName - The name of the Buildpack Binding Name
 */
export const BuildpackBindingGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BuildpackBindingGetInput,
  outputSchema: BuildpackBindingGetOutput,
}));
// Input Schema
export interface BuildpackBindingListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  builderName: string;
}
export const BuildpackBindingListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    builderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}/buildpackBindings",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildpackBindingListInput>;

// Output Schema
export interface BuildpackBindingListOutput {
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
export const BuildpackBindingListOutput =
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
  }) as unknown as Schema.Codec<BuildpackBindingListOutput>;

// The operation
/**
 * Handles requests to list all buildpack bindings in a builder.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param builderName - The name of the builder resource.
 */
export const BuildpackBindingList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildpackBindingListInput,
    outputSchema: BuildpackBindingListOutput,
  }),
);
// Input Schema
export interface BuildpackBindingListForClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const BuildpackBindingListForClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildpackBindings",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildpackBindingListForClusterInput>;

// Output Schema
export interface BuildpackBindingListForClusterOutput {
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
export const BuildpackBindingListForClusterOutput =
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
  }) as unknown as Schema.Codec<BuildpackBindingListForClusterOutput>;

// The operation
/**
 * Get collection of buildpack bindings under all builders.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const BuildpackBindingListForCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildpackBindingListForClusterInput,
    outputSchema: BuildpackBindingListForClusterOutput,
  }));
// Input Schema
export interface BuildServiceAgentPoolGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  agentPoolName: string;
}
export const BuildServiceAgentPoolGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    agentPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/agentPools/{agentPoolName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceAgentPoolGetInput>;

// Output Schema
export interface BuildServiceAgentPoolGetOutput {
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
export const BuildServiceAgentPoolGetOutput =
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
  }) as unknown as Schema.Codec<BuildServiceAgentPoolGetOutput>;

// The operation
/**
 * Get build service agent pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param agentPoolName - The name of the build service agent pool resource.
 */
export const BuildServiceAgentPoolGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceAgentPoolGetInput,
    outputSchema: BuildServiceAgentPoolGetOutput,
  }),
);
// Input Schema
export interface BuildServiceAgentPoolListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
}
export const BuildServiceAgentPoolListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/agentPools",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceAgentPoolListInput>;

// Output Schema
export interface BuildServiceAgentPoolListOutput {
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
export const BuildServiceAgentPoolListOutput =
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
  }) as unknown as Schema.Codec<BuildServiceAgentPoolListOutput>;

// The operation
/**
 * List build service agent pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 */
export const BuildServiceAgentPoolList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceAgentPoolListInput,
    outputSchema: BuildServiceAgentPoolListOutput,
  }),
);
// Input Schema
export interface BuildServiceAgentPoolUpdatePutInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  agentPoolName: string;
  properties?: {
    provisioningState?: string;
    poolSize?: { name?: string; cpu?: string; memory?: string };
  };
}
export const BuildServiceAgentPoolUpdatePutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    agentPoolName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        poolSize: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            cpu: Schema.optional(Schema.String),
            memory: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/agentPools/{agentPoolName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceAgentPoolUpdatePutInput>;

// Output Schema
export interface BuildServiceAgentPoolUpdatePutOutput {
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
export const BuildServiceAgentPoolUpdatePutOutput =
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
  }) as unknown as Schema.Codec<BuildServiceAgentPoolUpdatePutOutput>;

// The operation
/**
 * Create or update build service agent pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param agentPoolName - The name of the build service agent pool resource.
 */
export const BuildServiceAgentPoolUpdatePut =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceAgentPoolUpdatePutInput,
    outputSchema: BuildServiceAgentPoolUpdatePutOutput,
  }));
// Input Schema
export interface BuildServiceBuilderCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  builderName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting";
    stack?: { id?: string; version?: string };
    buildpackGroups?: { name?: string; buildpacks?: { id?: string }[] }[];
  };
}
export const BuildServiceBuilderCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    builderName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        stack: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
          }),
        ),
        buildpackGroups: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              buildpacks: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceBuilderCreateOrUpdateInput>;

// Output Schema
export interface BuildServiceBuilderCreateOrUpdateOutput {
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
export const BuildServiceBuilderCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BuildServiceBuilderCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a KPack builder.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param builderName - The name of the builder resource.
 */
export const BuildServiceBuilderCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceBuilderCreateOrUpdateInput,
    outputSchema: BuildServiceBuilderCreateOrUpdateOutput,
  }));
// Input Schema
export interface BuildServiceBuilderDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  builderName: string;
}
export const BuildServiceBuilderDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    builderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceBuilderDeleteInput>;

// Output Schema
export type BuildServiceBuilderDeleteOutput = void;
export const BuildServiceBuilderDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BuildServiceBuilderDeleteOutput>;

// The operation
/**
 * Delete a KPack builder.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param builderName - The name of the builder resource.
 */
export const BuildServiceBuilderDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceBuilderDeleteInput,
    outputSchema: BuildServiceBuilderDeleteOutput,
  }),
);
// Input Schema
export interface BuildServiceBuilderGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  builderName: string;
}
export const BuildServiceBuilderGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    builderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceBuilderGetInput>;

// Output Schema
export interface BuildServiceBuilderGetOutput {
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
export const BuildServiceBuilderGetOutput =
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
  }) as unknown as Schema.Codec<BuildServiceBuilderGetOutput>;

// The operation
/**
 * Get a KPack builder.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param builderName - The name of the builder resource.
 */
export const BuildServiceBuilderGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceBuilderGetInput,
    outputSchema: BuildServiceBuilderGetOutput,
  }),
);
// Input Schema
export interface BuildServiceBuilderListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
}
export const BuildServiceBuilderListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceBuilderListInput>;

// Output Schema
export interface BuildServiceBuilderListOutput {
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
export const BuildServiceBuilderListOutput =
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
  }) as unknown as Schema.Codec<BuildServiceBuilderListOutput>;

// The operation
/**
 * List KPack builders result.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 */
export const BuildServiceBuilderList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceBuilderListInput,
    outputSchema: BuildServiceBuilderListOutput,
  }),
);
// Input Schema
export interface BuildServiceBuilderListDeploymentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  builderName: string;
}
export const BuildServiceBuilderListDeploymentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    builderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}/listUsingDeployments",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceBuilderListDeploymentsInput>;

// Output Schema
export interface BuildServiceBuilderListDeploymentsOutput {
  deployments?: string[];
}
export const BuildServiceBuilderListDeploymentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployments: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<BuildServiceBuilderListDeploymentsOutput>;

// The operation
/**
 * List deployments that are using the builder.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param builderName - The name of the builder resource.
 */
export const BuildServiceBuilderListDeployments =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceBuilderListDeploymentsInput,
    outputSchema: BuildServiceBuilderListDeploymentsOutput,
  }));
// Input Schema
export interface BuildServiceCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  properties?: {
    containerRegistry?: string;
    kPackVersion?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting";
    resourceRequests?: { cpu?: string; memory?: string };
  };
}
export const BuildServiceCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        containerRegistry: Schema.optional(Schema.String),
        kPackVersion: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        resourceRequests: Schema.optional(
          Schema.Struct({
            cpu: Schema.optional(Schema.String),
            memory: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceCreateOrUpdateInput>;

// Output Schema
export interface BuildServiceCreateOrUpdateOutput {
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
export const BuildServiceCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BuildServiceCreateOrUpdateOutput>;

// The operation
/**
 * Create a build service resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 */
export const BuildServiceCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceCreateOrUpdateInput,
    outputSchema: BuildServiceCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface BuildServiceCreateOrUpdateBuildInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  buildName: string;
  properties?: {
    relativePath?: string;
    builder?: string;
    agentPool?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting";
    env?: Record<string, string>;
    apms?: { resourceId: string }[];
    certificates?: { resourceId: string }[];
    triggeredBuildResult?: {
      id?: string;
      provisioningState?:
        | "Queuing"
        | "Building"
        | "Succeeded"
        | "Failed"
        | "Deleting"
        | "Canceled";
      image?: string;
      lastTransitionTime?: string;
      lastTransitionReason?: string;
      lastTransitionStatus?: string;
    };
    resourceRequests?: { cpu?: string; memory?: string };
  };
}
export const BuildServiceCreateOrUpdateBuildInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    buildName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        relativePath: Schema.optional(Schema.String),
        builder: Schema.optional(Schema.String),
        agentPool: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        env: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        apms: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resourceId: Schema.String,
            }),
          ),
        ),
        certificates: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resourceId: Schema.String,
            }),
          ),
        ),
        triggeredBuildResult: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            provisioningState: Schema.optional(
              Schema.Literals([
                "Queuing",
                "Building",
                "Succeeded",
                "Failed",
                "Deleting",
                "Canceled",
              ]),
            ),
            image: Schema.optional(Schema.String),
            lastTransitionTime: Schema.optional(Schema.String),
            lastTransitionReason: Schema.optional(Schema.String),
            lastTransitionStatus: Schema.optional(Schema.String),
          }),
        ),
        resourceRequests: Schema.optional(
          Schema.Struct({
            cpu: Schema.optional(Schema.String),
            memory: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builds/{buildName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceCreateOrUpdateBuildInput>;

// Output Schema
export interface BuildServiceCreateOrUpdateBuildOutput {
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
export const BuildServiceCreateOrUpdateBuildOutput =
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
  }) as unknown as Schema.Codec<BuildServiceCreateOrUpdateBuildOutput>;

// The operation
/**
 * Create or update a KPack build.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param buildName - The name of the build resource.
 */
export const BuildServiceCreateOrUpdateBuild =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceCreateOrUpdateBuildInput,
    outputSchema: BuildServiceCreateOrUpdateBuildOutput,
  }));
// Input Schema
export interface BuildServiceDeleteBuildInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  buildName: string;
}
export const BuildServiceDeleteBuildInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    buildName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builds/{buildName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceDeleteBuildInput>;

// Output Schema
export type BuildServiceDeleteBuildOutput = void;
export const BuildServiceDeleteBuildOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BuildServiceDeleteBuildOutput>;

// The operation
/**
 * delete a KPack build.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param buildName - The name of the build resource.
 */
export const BuildServiceDeleteBuild = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceDeleteBuildInput,
    outputSchema: BuildServiceDeleteBuildOutput,
  }),
);
// Input Schema
export interface BuildServiceGetBuildInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  buildName: string;
}
export const BuildServiceGetBuildInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    buildName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builds/{buildName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceGetBuildInput>;

// Output Schema
export interface BuildServiceGetBuildOutput {
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
export const BuildServiceGetBuildOutput =
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
  }) as unknown as Schema.Codec<BuildServiceGetBuildOutput>;

// The operation
/**
 * Get a KPack build.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param buildName - The name of the build resource.
 */
export const BuildServiceGetBuild = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceGetBuildInput,
    outputSchema: BuildServiceGetBuildOutput,
  }),
);
// Input Schema
export interface BuildServiceGetBuildResultInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  buildName: string;
  buildResultName: string;
}
export const BuildServiceGetBuildResultInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    buildName: Schema.String.pipe(T.PathParam()),
    buildResultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builds/{buildName}/results/{buildResultName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceGetBuildResultInput>;

// Output Schema
export interface BuildServiceGetBuildResultOutput {
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
export const BuildServiceGetBuildResultOutput =
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
  }) as unknown as Schema.Codec<BuildServiceGetBuildResultOutput>;

// The operation
/**
 * Get a KPack build result.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param buildName - The name of the build resource.
 * @param buildResultName - The name of the build result resource.
 */
export const BuildServiceGetBuildResult = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceGetBuildResultInput,
    outputSchema: BuildServiceGetBuildResultOutput,
  }),
);
// Input Schema
export interface BuildServiceGetBuildResultLogInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  buildName: string;
  buildResultName: string;
}
export const BuildServiceGetBuildResultLogInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    buildName: Schema.String.pipe(T.PathParam()),
    buildResultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builds/{buildName}/results/{buildResultName}/getLogFileUrl",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceGetBuildResultLogInput>;

// Output Schema
export interface BuildServiceGetBuildResultLogOutput {
  blobUrl?: string;
}
export const BuildServiceGetBuildResultLogOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blobUrl: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BuildServiceGetBuildResultLogOutput>;

// The operation
/**
 * Get a KPack build result log download URL.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param buildName - The name of the build resource.
 * @param buildResultName - The name of the build result resource.
 */
export const BuildServiceGetBuildResultLog =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceGetBuildResultLogInput,
    outputSchema: BuildServiceGetBuildResultLogOutput,
  }));
// Input Schema
export interface BuildServiceGetBuildServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
}
export const BuildServiceGetBuildServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceGetBuildServiceInput>;

// Output Schema
export interface BuildServiceGetBuildServiceOutput {
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
export const BuildServiceGetBuildServiceOutput =
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
  }) as unknown as Schema.Codec<BuildServiceGetBuildServiceOutput>;

// The operation
/**
 * Get a build service resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 */
export const BuildServiceGetBuildService = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceGetBuildServiceInput,
    outputSchema: BuildServiceGetBuildServiceOutput,
  }),
);
// Input Schema
export interface BuildServiceGetResourceUploadUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
}
export const BuildServiceGetResourceUploadUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/getResourceUploadUrl",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceGetResourceUploadUrlInput>;

// Output Schema
export interface BuildServiceGetResourceUploadUrlOutput {
  relativePath?: string;
  uploadUrl?: string;
}
export const BuildServiceGetResourceUploadUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relativePath: Schema.optional(Schema.String),
    uploadUrl: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BuildServiceGetResourceUploadUrlOutput>;

// The operation
/**
 * Get an resource upload URL for build service, which may be artifacts or source archive.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 */
export const BuildServiceGetResourceUploadUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceGetResourceUploadUrlInput,
    outputSchema: BuildServiceGetResourceUploadUrlOutput,
  }));
// Input Schema
export interface BuildServiceGetSupportedBuildpackInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  buildpackName: string;
}
export const BuildServiceGetSupportedBuildpackInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    buildpackName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/supportedBuildpacks/{buildpackName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceGetSupportedBuildpackInput>;

// Output Schema
export interface BuildServiceGetSupportedBuildpackOutput {
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
export const BuildServiceGetSupportedBuildpackOutput =
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
  }) as unknown as Schema.Codec<BuildServiceGetSupportedBuildpackOutput>;

// The operation
/**
 * Get the supported buildpack resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param buildpackName - The name of the buildpack resource.
 */
export const BuildServiceGetSupportedBuildpack =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceGetSupportedBuildpackInput,
    outputSchema: BuildServiceGetSupportedBuildpackOutput,
  }));
// Input Schema
export interface BuildServiceGetSupportedStackInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  stackName: string;
}
export const BuildServiceGetSupportedStackInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    stackName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/supportedStacks/{stackName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceGetSupportedStackInput>;

// Output Schema
export interface BuildServiceGetSupportedStackOutput {
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
export const BuildServiceGetSupportedStackOutput =
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
  }) as unknown as Schema.Codec<BuildServiceGetSupportedStackOutput>;

// The operation
/**
 * Get the supported stack resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param stackName - The name of the stack resource.
 */
export const BuildServiceGetSupportedStack =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceGetSupportedStackInput,
    outputSchema: BuildServiceGetSupportedStackOutput,
  }));
// Input Schema
export interface BuildServiceListBuildResultsInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
  buildName: string;
}
export const BuildServiceListBuildResultsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
    buildName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builds/{buildName}/results",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceListBuildResultsInput>;

// Output Schema
export interface BuildServiceListBuildResultsOutput {
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
export const BuildServiceListBuildResultsOutput =
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
  }) as unknown as Schema.Codec<BuildServiceListBuildResultsOutput>;

// The operation
/**
 * List KPack build results.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 * @param buildName - The name of the build resource.
 */
export const BuildServiceListBuildResults =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceListBuildResultsInput,
    outputSchema: BuildServiceListBuildResultsOutput,
  }));
// Input Schema
export interface BuildServiceListBuildsInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
}
export const BuildServiceListBuildsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builds",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceListBuildsInput>;

// Output Schema
export interface BuildServiceListBuildsOutput {
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
export const BuildServiceListBuildsOutput =
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
  }) as unknown as Schema.Codec<BuildServiceListBuildsOutput>;

// The operation
/**
 * List KPack builds.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 */
export const BuildServiceListBuilds = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BuildServiceListBuildsInput,
    outputSchema: BuildServiceListBuildsOutput,
  }),
);
// Input Schema
export interface BuildServiceListBuildServicesInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const BuildServiceListBuildServicesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceListBuildServicesInput>;

// Output Schema
export interface BuildServiceListBuildServicesOutput {
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
export const BuildServiceListBuildServicesOutput =
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
  }) as unknown as Schema.Codec<BuildServiceListBuildServicesOutput>;

// The operation
/**
 * List build services resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const BuildServiceListBuildServices =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceListBuildServicesInput,
    outputSchema: BuildServiceListBuildServicesOutput,
  }));
// Input Schema
export interface BuildServiceListSupportedBuildpacksInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
}
export const BuildServiceListSupportedBuildpacksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/supportedBuildpacks",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceListSupportedBuildpacksInput>;

// Output Schema
export interface BuildServiceListSupportedBuildpacksOutput {
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
export const BuildServiceListSupportedBuildpacksOutput =
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
  }) as unknown as Schema.Codec<BuildServiceListSupportedBuildpacksOutput>;

// The operation
/**
 * Get all supported buildpacks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 */
export const BuildServiceListSupportedBuildpacks =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceListSupportedBuildpacksInput,
    outputSchema: BuildServiceListSupportedBuildpacksOutput,
  }));
// Input Schema
export interface BuildServiceListSupportedStacksInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  buildServiceName: string;
}
export const BuildServiceListSupportedStacksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    buildServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/supportedStacks",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<BuildServiceListSupportedStacksInput>;

// Output Schema
export interface BuildServiceListSupportedStacksOutput {
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
export const BuildServiceListSupportedStacksOutput =
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
  }) as unknown as Schema.Codec<BuildServiceListSupportedStacksOutput>;

// The operation
/**
 * Get all supported stacks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param buildServiceName - The name of the build service resource.
 */
export const BuildServiceListSupportedStacks =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BuildServiceListSupportedStacksInput,
    outputSchema: BuildServiceListSupportedStacksOutput,
  }));
// Input Schema
export interface CertificatesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  certificateName: string;
  properties?: {
    type: string;
    thumbprint?: string;
    issuer?: string;
    issuedDate?: string;
    expirationDate?: string;
    activateDate?: string;
    subjectName?: string;
    dnsNames?: string[];
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting";
  };
}
export const CertificatesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        type: Schema.String,
        thumbprint: Schema.optional(Schema.String),
        issuer: Schema.optional(Schema.String),
        issuedDate: Schema.optional(Schema.String),
        expirationDate: Schema.optional(Schema.String),
        activateDate: Schema.optional(Schema.String),
        subjectName: Schema.optional(Schema.String),
        dnsNames: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/certificates/{certificateName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<CertificatesCreateOrUpdateInput>;

// Output Schema
export interface CertificatesCreateOrUpdateOutput {
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
export const CertificatesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CertificatesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update certificate resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param certificateName - The name of the certificate resource.
 */
export const CertificatesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CertificatesCreateOrUpdateInput,
    outputSchema: CertificatesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface CertificatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  certificateName: string;
}
export const CertificatesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/certificates/{certificateName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<CertificatesDeleteInput>;

// Output Schema
export type CertificatesDeleteOutput = void;
export const CertificatesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CertificatesDeleteOutput>;

// The operation
/**
 * Delete the certificate resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param certificateName - The name of the certificate resource.
 */
export const CertificatesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CertificatesDeleteInput,
  outputSchema: CertificatesDeleteOutput,
}));
// Input Schema
export interface CertificatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  certificateName: string;
}
export const CertificatesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  certificateName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/certificates/{certificateName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<CertificatesGetInput>;

// Output Schema
export interface CertificatesGetOutput {
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
export const CertificatesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CertificatesGetOutput>;

// The operation
/**
 * Get the certificate resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param certificateName - The name of the certificate resource.
 */
export const CertificatesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CertificatesGetInput,
  outputSchema: CertificatesGetOutput,
}));
// Input Schema
export interface CertificatesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const CertificatesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/certificates",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<CertificatesListInput>;

// Output Schema
export interface CertificatesListOutput {
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
export const CertificatesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<CertificatesListOutput>;

// The operation
/**
 * List all the certificates of one user.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const CertificatesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CertificatesListInput,
  outputSchema: CertificatesListOutput,
}));
// Input Schema
export interface ConfigServersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ConfigServersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configServers/default",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ConfigServersGetInput>;

// Output Schema
export interface ConfigServersGetOutput {
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
export const ConfigServersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<ConfigServersGetOutput>;

// The operation
/**
 * Get the config server and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ConfigServersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConfigServersGetInput,
  outputSchema: ConfigServersGetOutput,
}));
// Input Schema
export interface ConfigServersUpdatePatchInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  properties?: {
    provisioningState?:
      | "NotAvailable"
      | "Deleted"
      | "Failed"
      | "Succeeded"
      | "Updating";
    error?: { code?: string; message?: string };
    configServer?: {
      gitProperty?: {
        repositories?: {
          name: string;
          pattern?: string[];
          uri: string;
          label?: string;
          searchPaths?: string[];
          username?: string;
          password?: string | Redacted.Redacted<string>;
          hostKey?: string;
          hostKeyAlgorithm?: string;
          privateKey?: string | Redacted.Redacted<string>;
          strictHostKeyChecking?: boolean;
        }[];
        uri: string;
        label?: string;
        searchPaths?: string[];
        username?: string;
        password?: string | Redacted.Redacted<string>;
        hostKey?: string;
        hostKeyAlgorithm?: string;
        privateKey?: string | Redacted.Redacted<string>;
        strictHostKeyChecking?: boolean;
      };
    };
  };
}
export const ConfigServersUpdatePatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotAvailable",
            "Deleted",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
        configServer: Schema.optional(
          Schema.Struct({
            gitProperty: Schema.optional(
              Schema.Struct({
                repositories: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      pattern: Schema.optional(Schema.Array(Schema.String)),
                      uri: Schema.String,
                      label: Schema.optional(Schema.String),
                      searchPaths: Schema.optional(Schema.Array(Schema.String)),
                      username: Schema.optional(Schema.String),
                      password: Schema.optional(SensitiveString),
                      hostKey: Schema.optional(Schema.String),
                      hostKeyAlgorithm: Schema.optional(Schema.String),
                      privateKey: Schema.optional(SensitiveString),
                      strictHostKeyChecking: Schema.optional(Schema.Boolean),
                    }),
                  ),
                ),
                uri: Schema.String,
                label: Schema.optional(Schema.String),
                searchPaths: Schema.optional(Schema.Array(Schema.String)),
                username: Schema.optional(Schema.String),
                password: Schema.optional(SensitiveString),
                hostKey: Schema.optional(Schema.String),
                hostKeyAlgorithm: Schema.optional(Schema.String),
                privateKey: Schema.optional(SensitiveString),
                strictHostKeyChecking: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configServers/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ConfigServersUpdatePatchInput>;

// Output Schema
export interface ConfigServersUpdatePatchOutput {
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
export const ConfigServersUpdatePatchOutput =
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
  }) as unknown as Schema.Codec<ConfigServersUpdatePatchOutput>;

// The operation
/**
 * Update the config server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ConfigServersUpdatePatch = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigServersUpdatePatchInput,
    outputSchema: ConfigServersUpdatePatchOutput,
  }),
);
// Input Schema
export interface ConfigServersUpdatePutInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  properties?: {
    provisioningState?:
      | "NotAvailable"
      | "Deleted"
      | "Failed"
      | "Succeeded"
      | "Updating";
    error?: { code?: string; message?: string };
    configServer?: {
      gitProperty?: {
        repositories?: {
          name: string;
          pattern?: string[];
          uri: string;
          label?: string;
          searchPaths?: string[];
          username?: string;
          password?: string | Redacted.Redacted<string>;
          hostKey?: string;
          hostKeyAlgorithm?: string;
          privateKey?: string | Redacted.Redacted<string>;
          strictHostKeyChecking?: boolean;
        }[];
        uri: string;
        label?: string;
        searchPaths?: string[];
        username?: string;
        password?: string | Redacted.Redacted<string>;
        hostKey?: string;
        hostKeyAlgorithm?: string;
        privateKey?: string | Redacted.Redacted<string>;
        strictHostKeyChecking?: boolean;
      };
    };
  };
}
export const ConfigServersUpdatePutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotAvailable",
            "Deleted",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
        configServer: Schema.optional(
          Schema.Struct({
            gitProperty: Schema.optional(
              Schema.Struct({
                repositories: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      pattern: Schema.optional(Schema.Array(Schema.String)),
                      uri: Schema.String,
                      label: Schema.optional(Schema.String),
                      searchPaths: Schema.optional(Schema.Array(Schema.String)),
                      username: Schema.optional(Schema.String),
                      password: Schema.optional(SensitiveString),
                      hostKey: Schema.optional(Schema.String),
                      hostKeyAlgorithm: Schema.optional(Schema.String),
                      privateKey: Schema.optional(SensitiveString),
                      strictHostKeyChecking: Schema.optional(Schema.Boolean),
                    }),
                  ),
                ),
                uri: Schema.String,
                label: Schema.optional(Schema.String),
                searchPaths: Schema.optional(Schema.Array(Schema.String)),
                username: Schema.optional(Schema.String),
                password: Schema.optional(SensitiveString),
                hostKey: Schema.optional(Schema.String),
                hostKeyAlgorithm: Schema.optional(Schema.String),
                privateKey: Schema.optional(SensitiveString),
                strictHostKeyChecking: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configServers/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ConfigServersUpdatePutInput>;

// Output Schema
export interface ConfigServersUpdatePutOutput {
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
export const ConfigServersUpdatePutOutput =
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
  }) as unknown as Schema.Codec<ConfigServersUpdatePutOutput>;

// The operation
/**
 * Update the config server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ConfigServersUpdatePut = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigServersUpdatePutInput,
    outputSchema: ConfigServersUpdatePutOutput,
  }),
);
// Input Schema
export interface ConfigServersValidateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  gitProperty?: {
    repositories?: {
      name: string;
      pattern?: string[];
      uri: string;
      label?: string;
      searchPaths?: string[];
      username?: string;
      password?: string | Redacted.Redacted<string>;
      hostKey?: string;
      hostKeyAlgorithm?: string;
      privateKey?: string | Redacted.Redacted<string>;
      strictHostKeyChecking?: boolean;
    }[];
    uri: string;
    label?: string;
    searchPaths?: string[];
    username?: string;
    password?: string | Redacted.Redacted<string>;
    hostKey?: string;
    hostKeyAlgorithm?: string;
    privateKey?: string | Redacted.Redacted<string>;
    strictHostKeyChecking?: boolean;
  };
}
export const ConfigServersValidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    gitProperty: Schema.optional(
      Schema.Struct({
        repositories: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              pattern: Schema.optional(Schema.Array(Schema.String)),
              uri: Schema.String,
              label: Schema.optional(Schema.String),
              searchPaths: Schema.optional(Schema.Array(Schema.String)),
              username: Schema.optional(Schema.String),
              password: Schema.optional(SensitiveString),
              hostKey: Schema.optional(Schema.String),
              hostKeyAlgorithm: Schema.optional(Schema.String),
              privateKey: Schema.optional(SensitiveString),
              strictHostKeyChecking: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        uri: Schema.String,
        label: Schema.optional(Schema.String),
        searchPaths: Schema.optional(Schema.Array(Schema.String)),
        username: Schema.optional(Schema.String),
        password: Schema.optional(SensitiveString),
        hostKey: Schema.optional(Schema.String),
        hostKeyAlgorithm: Schema.optional(Schema.String),
        privateKey: Schema.optional(SensitiveString),
        strictHostKeyChecking: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configServers/validate",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ConfigServersValidateInput>;

// Output Schema
export interface ConfigServersValidateOutput {
  isValid?: boolean;
  details?: { name?: string; uri?: string; messages?: string[] }[];
}
export const ConfigServersValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isValid: Schema.optional(Schema.Boolean),
    details: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          uri: Schema.optional(Schema.String),
          messages: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ConfigServersValidateOutput>;

// The operation
/**
 * Check if the config server settings are valid.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ConfigServersValidate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigServersValidateInput,
    outputSchema: ConfigServersValidateOutput,
  }),
);
// Input Schema
export interface ConfigurationServicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  configurationServiceName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting";
    generation?: "Gen1" | "Gen2";
    resourceRequests?: {
      cpu?: string;
      memory?: string;
      instanceCount?: number;
    };
    instances?: { name?: string; status?: string }[];
    settings?: {
      gitProperty?: {
        repositories?: {
          name: string;
          patterns: string[];
          uri: string;
          label: string;
          searchPaths?: string[];
          username?: string;
          password?: string | Redacted.Redacted<string>;
          hostKey?: string;
          hostKeyAlgorithm?: string;
          privateKey?: string | Redacted.Redacted<string>;
          strictHostKeyChecking?: boolean;
          gitImplementation?: "go-git" | "libgit2";
          caCertResourceId?: string;
        }[];
      };
    };
  };
}
export const ConfigurationServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    configurationServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        generation: Schema.optional(Schema.Literals(["Gen1", "Gen2"])),
        resourceRequests: Schema.optional(
          Schema.Struct({
            cpu: Schema.optional(Schema.String),
            memory: Schema.optional(Schema.String),
            instanceCount: Schema.optional(Schema.Number),
          }),
        ),
        instances: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
            }),
          ),
        ),
        settings: Schema.optional(
          Schema.Struct({
            gitProperty: Schema.optional(
              Schema.Struct({
                repositories: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      patterns: Schema.Array(Schema.String),
                      uri: Schema.String,
                      label: Schema.String,
                      searchPaths: Schema.optional(Schema.Array(Schema.String)),
                      username: Schema.optional(Schema.String),
                      password: Schema.optional(SensitiveString),
                      hostKey: Schema.optional(Schema.String),
                      hostKeyAlgorithm: Schema.optional(Schema.String),
                      privateKey: Schema.optional(SensitiveString),
                      strictHostKeyChecking: Schema.optional(Schema.Boolean),
                      gitImplementation: Schema.optional(
                        Schema.Literals(["go-git", "libgit2"]),
                      ),
                      caCertResourceId: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configurationServices/{configurationServiceName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationServicesCreateOrUpdateInput>;

// Output Schema
export interface ConfigurationServicesCreateOrUpdateOutput {
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
export const ConfigurationServicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigurationServicesCreateOrUpdateOutput>;

// The operation
/**
 * Create the default Application Configuration Service or update the existing Application Configuration Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param configurationServiceName - The name of Application Configuration Service.
 */
export const ConfigurationServicesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationServicesCreateOrUpdateInput,
    outputSchema: ConfigurationServicesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigurationServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  configurationServiceName: string;
}
export const ConfigurationServicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    configurationServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configurationServices/{configurationServiceName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationServicesDeleteInput>;

// Output Schema
export type ConfigurationServicesDeleteOutput = void;
export const ConfigurationServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigurationServicesDeleteOutput>;

// The operation
/**
 * Disable the default Application Configuration Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param configurationServiceName - The name of Application Configuration Service.
 */
export const ConfigurationServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationServicesDeleteInput,
    outputSchema: ConfigurationServicesDeleteOutput,
  }),
);
// Input Schema
export interface ConfigurationServicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  configurationServiceName: string;
}
export const ConfigurationServicesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    configurationServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configurationServices/{configurationServiceName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationServicesGetInput>;

// Output Schema
export interface ConfigurationServicesGetOutput {
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
export const ConfigurationServicesGetOutput =
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
  }) as unknown as Schema.Codec<ConfigurationServicesGetOutput>;

// The operation
/**
 * Get the Application Configuration Service and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param configurationServiceName - The name of Application Configuration Service.
 */
export const ConfigurationServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationServicesGetInput,
    outputSchema: ConfigurationServicesGetOutput,
  }),
);
// Input Schema
export interface ConfigurationServicesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ConfigurationServicesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configurationServices",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationServicesListInput>;

// Output Schema
export interface ConfigurationServicesListOutput {
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
export const ConfigurationServicesListOutput =
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
  }) as unknown as Schema.Codec<ConfigurationServicesListOutput>;

// The operation
/**
 * Handles requests to list all resources in a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ConfigurationServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationServicesListInput,
    outputSchema: ConfigurationServicesListOutput,
  }),
);
// Input Schema
export interface ConfigurationServicesValidateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  configurationServiceName: string;
  gitProperty?: {
    repositories?: {
      name: string;
      patterns: string[];
      uri: string;
      label: string;
      searchPaths?: string[];
      username?: string;
      password?: string | Redacted.Redacted<string>;
      hostKey?: string;
      hostKeyAlgorithm?: string;
      privateKey?: string | Redacted.Redacted<string>;
      strictHostKeyChecking?: boolean;
      gitImplementation?: "go-git" | "libgit2";
      caCertResourceId?: string;
    }[];
  };
}
export const ConfigurationServicesValidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    configurationServiceName: Schema.String.pipe(T.PathParam()),
    gitProperty: Schema.optional(
      Schema.Struct({
        repositories: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              patterns: Schema.Array(Schema.String),
              uri: Schema.String,
              label: Schema.String,
              searchPaths: Schema.optional(Schema.Array(Schema.String)),
              username: Schema.optional(Schema.String),
              password: Schema.optional(SensitiveString),
              hostKey: Schema.optional(Schema.String),
              hostKeyAlgorithm: Schema.optional(Schema.String),
              privateKey: Schema.optional(SensitiveString),
              strictHostKeyChecking: Schema.optional(Schema.Boolean),
              gitImplementation: Schema.optional(
                Schema.Literals(["go-git", "libgit2"]),
              ),
              caCertResourceId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configurationServices/{configurationServiceName}/validate",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationServicesValidateInput>;

// Output Schema
export interface ConfigurationServicesValidateOutput {
  gitPropertyValidationResult?: {
    isValid?: boolean;
    gitReposValidationResult?: { name?: string; messages?: string[] }[];
  };
}
export const ConfigurationServicesValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitPropertyValidationResult: Schema.optional(
      Schema.Struct({
        isValid: Schema.optional(Schema.Boolean),
        gitReposValidationResult: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              messages: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ConfigurationServicesValidateOutput>;

// The operation
/**
 * Check if the Application Configuration Service settings are valid.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param configurationServiceName - The name of Application Configuration Service.
 */
export const ConfigurationServicesValidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationServicesValidateInput,
    outputSchema: ConfigurationServicesValidateOutput,
  }));
// Input Schema
export interface ConfigurationServicesValidateResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  configurationServiceName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting";
    generation?: "Gen1" | "Gen2";
    resourceRequests?: {
      cpu?: string;
      memory?: string;
      instanceCount?: number;
    };
    instances?: { name?: string; status?: string }[];
    settings?: {
      gitProperty?: {
        repositories?: {
          name: string;
          patterns: string[];
          uri: string;
          label: string;
          searchPaths?: string[];
          username?: string;
          password?: string | Redacted.Redacted<string>;
          hostKey?: string;
          hostKeyAlgorithm?: string;
          privateKey?: string | Redacted.Redacted<string>;
          strictHostKeyChecking?: boolean;
          gitImplementation?: "go-git" | "libgit2";
          caCertResourceId?: string;
        }[];
      };
    };
  };
}
export const ConfigurationServicesValidateResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    configurationServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        generation: Schema.optional(Schema.Literals(["Gen1", "Gen2"])),
        resourceRequests: Schema.optional(
          Schema.Struct({
            cpu: Schema.optional(Schema.String),
            memory: Schema.optional(Schema.String),
            instanceCount: Schema.optional(Schema.Number),
          }),
        ),
        instances: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
            }),
          ),
        ),
        settings: Schema.optional(
          Schema.Struct({
            gitProperty: Schema.optional(
              Schema.Struct({
                repositories: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      patterns: Schema.Array(Schema.String),
                      uri: Schema.String,
                      label: Schema.String,
                      searchPaths: Schema.optional(Schema.Array(Schema.String)),
                      username: Schema.optional(Schema.String),
                      password: Schema.optional(SensitiveString),
                      hostKey: Schema.optional(Schema.String),
                      hostKeyAlgorithm: Schema.optional(Schema.String),
                      privateKey: Schema.optional(SensitiveString),
                      strictHostKeyChecking: Schema.optional(Schema.Boolean),
                      gitImplementation: Schema.optional(
                        Schema.Literals(["go-git", "libgit2"]),
                      ),
                      caCertResourceId: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/configurationServices/{configurationServiceName}/validateResource",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationServicesValidateResourceInput>;

// Output Schema
export interface ConfigurationServicesValidateResourceOutput {
  gitPropertyValidationResult?: {
    isValid?: boolean;
    gitReposValidationResult?: { name?: string; messages?: string[] }[];
  };
}
export const ConfigurationServicesValidateResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitPropertyValidationResult: Schema.optional(
      Schema.Struct({
        isValid: Schema.optional(Schema.Boolean),
        gitReposValidationResult: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              messages: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ConfigurationServicesValidateResourceOutput>;

// The operation
/**
 * Check if the Application Configuration Service resource is valid.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param configurationServiceName - The name of Application Configuration Service.
 */
export const ConfigurationServicesValidateResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationServicesValidateResourceInput,
    outputSchema: ConfigurationServicesValidateResourceOutput,
  }));
// Input Schema
export interface ContainerRegistriesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  containerRegistryName: string;
  properties?: {
    credentials: { type: string };
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting"
      | "Canceled";
  };
}
export const ContainerRegistriesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    containerRegistryName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        credentials: Schema.Struct({
          type: Schema.String,
        }),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Canceled",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/containerRegistries/{containerRegistryName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ContainerRegistriesCreateOrUpdateInput>;

// Output Schema
export interface ContainerRegistriesCreateOrUpdateOutput {
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
export const ContainerRegistriesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ContainerRegistriesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update container registry resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param containerRegistryName - The name of the container registry.
 */
export const ContainerRegistriesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ContainerRegistriesCreateOrUpdateInput,
    outputSchema: ContainerRegistriesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ContainerRegistriesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  containerRegistryName: string;
}
export const ContainerRegistriesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    containerRegistryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/containerRegistries/{containerRegistryName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ContainerRegistriesDeleteInput>;

// Output Schema
export type ContainerRegistriesDeleteOutput = void;
export const ContainerRegistriesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ContainerRegistriesDeleteOutput>;

// The operation
/**
 * Delete a container registry resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param containerRegistryName - The name of the container registry.
 */
export const ContainerRegistriesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerRegistriesDeleteInput,
    outputSchema: ContainerRegistriesDeleteOutput,
  }),
);
// Input Schema
export interface ContainerRegistriesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  containerRegistryName: string;
}
export const ContainerRegistriesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    containerRegistryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/containerRegistries/{containerRegistryName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ContainerRegistriesGetInput>;

// Output Schema
export interface ContainerRegistriesGetOutput {
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
export const ContainerRegistriesGetOutput =
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
  }) as unknown as Schema.Codec<ContainerRegistriesGetOutput>;

// The operation
/**
 * Get the container registries resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param containerRegistryName - The name of the container registry.
 */
export const ContainerRegistriesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerRegistriesGetInput,
    outputSchema: ContainerRegistriesGetOutput,
  }),
);
// Input Schema
export interface ContainerRegistriesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ContainerRegistriesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/containerRegistries",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ContainerRegistriesListInput>;

// Output Schema
export interface ContainerRegistriesListOutput {
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
export const ContainerRegistriesListOutput =
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
  }) as unknown as Schema.Codec<ContainerRegistriesListOutput>;

// The operation
/**
 * List container registries resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ContainerRegistriesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerRegistriesListInput,
    outputSchema: ContainerRegistriesListOutput,
  }),
);
// Input Schema
export interface ContainerRegistriesValidateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  containerRegistryName: string;
  credentials: { type: string };
  provisioningState?:
    | "Creating"
    | "Updating"
    | "Succeeded"
    | "Failed"
    | "Deleting"
    | "Canceled";
}
export const ContainerRegistriesValidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    containerRegistryName: Schema.String.pipe(T.PathParam()),
    credentials: Schema.Struct({
      type: Schema.String,
    }),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Creating",
        "Updating",
        "Succeeded",
        "Failed",
        "Deleting",
        "Canceled",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/containerRegistries/{containerRegistryName}/validate",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ContainerRegistriesValidateInput>;

// Output Schema
export interface ContainerRegistriesValidateOutput {
  isValid?: boolean;
  message?: string;
}
export const ContainerRegistriesValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isValid: Schema.optional(Schema.Boolean),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ContainerRegistriesValidateOutput>;

// The operation
/**
 * Check if the container registry properties are valid.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param containerRegistryName - The name of the container registry.
 */
export const ContainerRegistriesValidate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContainerRegistriesValidateInput,
    outputSchema: ContainerRegistriesValidateOutput,
  }),
);
// Input Schema
export interface CustomDomainsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  domainName: string;
  properties?: {
    thumbprint?: string;
    appName?: string;
    certName?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting";
  };
}
export const CustomDomainsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        thumbprint: Schema.optional(Schema.String),
        appName: Schema.optional(Schema.String),
        certName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<CustomDomainsCreateOrUpdateInput>;

// Output Schema
export interface CustomDomainsCreateOrUpdateOutput {
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
export const CustomDomainsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CustomDomainsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update custom domain of one lifecycle application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param domainName - The name of the custom domain resource.
 */
export const CustomDomainsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomDomainsCreateOrUpdateInput,
    outputSchema: CustomDomainsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface CustomDomainsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  domainName: string;
}
export const CustomDomainsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<CustomDomainsDeleteInput>;

// Output Schema
export type CustomDomainsDeleteOutput = void;
export const CustomDomainsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomDomainsDeleteOutput>;

// The operation
/**
 * Delete the custom domain of one lifecycle application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param domainName - The name of the custom domain resource.
 */
export const CustomDomainsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomDomainsDeleteInput,
  outputSchema: CustomDomainsDeleteOutput,
}));
// Input Schema
export interface CustomDomainsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  domainName: string;
}
export const CustomDomainsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  appName: Schema.String.pipe(T.PathParam()),
  domainName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<CustomDomainsGetInput>;

// Output Schema
export interface CustomDomainsGetOutput {
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
export const CustomDomainsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<CustomDomainsGetOutput>;

// The operation
/**
 * Get the custom domain of one lifecycle application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param domainName - The name of the custom domain resource.
 */
export const CustomDomainsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomDomainsGetInput,
  outputSchema: CustomDomainsGetOutput,
}));
// Input Schema
export interface CustomDomainsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
}
export const CustomDomainsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<CustomDomainsListInput>;

// Output Schema
export interface CustomDomainsListOutput {
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
export const CustomDomainsListOutput =
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
  }) as unknown as Schema.Codec<CustomDomainsListOutput>;

// The operation
/**
 * List the custom domains of one lifecycle application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 */
export const CustomDomainsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomDomainsListInput,
  outputSchema: CustomDomainsListOutput,
}));
// Input Schema
export interface CustomDomainsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  domainName: string;
  properties?: {
    thumbprint?: string;
    appName?: string;
    certName?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting";
  };
}
export const CustomDomainsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        thumbprint: Schema.optional(Schema.String),
        appName: Schema.optional(Schema.String),
        certName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<CustomDomainsUpdateInput>;

// Output Schema
export interface CustomDomainsUpdateOutput {
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
export const CustomDomainsUpdateOutput =
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
  }) as unknown as Schema.Codec<CustomDomainsUpdateOutput>;

// The operation
/**
 * Update custom domain of one lifecycle application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param domainName - The name of the custom domain resource.
 */
export const CustomDomainsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomDomainsUpdateInput,
  outputSchema: CustomDomainsUpdateOutput,
}));
// Input Schema
export interface CustomizedAcceleratorsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  applicationAcceleratorName: string;
  customizedAcceleratorName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting"
      | "Canceled";
    acceleratorType?: "Accelerator" | "Fragment";
    displayName?: string;
    description?: string;
    iconUrl?: string;
    acceleratorTags?: string[];
    imports?: string[];
    gitRepository: {
      url: string;
      intervalInSeconds?: number;
      branch?: string;
      commit?: string;
      gitTag?: string;
      authSetting: { authType: string };
      subPath?: string;
    };
  };
  sku?: { name?: string; tier?: string; capacity?: number };
}
export const CustomizedAcceleratorsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    applicationAcceleratorName: Schema.String.pipe(T.PathParam()),
    customizedAcceleratorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Canceled",
          ]),
        ),
        acceleratorType: Schema.optional(
          Schema.Literals(["Accelerator", "Fragment"]),
        ),
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        iconUrl: Schema.optional(Schema.String),
        acceleratorTags: Schema.optional(Schema.Array(Schema.String)),
        imports: Schema.optional(Schema.Array(Schema.String)),
        gitRepository: Schema.Struct({
          url: Schema.String,
          intervalInSeconds: Schema.optional(Schema.Number),
          branch: Schema.optional(Schema.String),
          commit: Schema.optional(Schema.String),
          gitTag: Schema.optional(Schema.String),
          authSetting: Schema.Struct({
            authType: Schema.String,
          }),
          subPath: Schema.optional(Schema.String),
        }),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/customizedAccelerators/{customizedAcceleratorName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<CustomizedAcceleratorsCreateOrUpdateInput>;

// Output Schema
export interface CustomizedAcceleratorsCreateOrUpdateOutput {
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
export const CustomizedAcceleratorsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CustomizedAcceleratorsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the customized accelerator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param applicationAcceleratorName - The name of the application accelerator.
 * @param customizedAcceleratorName - The name of the customized accelerator.
 */
export const CustomizedAcceleratorsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomizedAcceleratorsCreateOrUpdateInput,
    outputSchema: CustomizedAcceleratorsCreateOrUpdateOutput,
  }));
// Input Schema
export interface CustomizedAcceleratorsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  applicationAcceleratorName: string;
  customizedAcceleratorName: string;
}
export const CustomizedAcceleratorsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    applicationAcceleratorName: Schema.String.pipe(T.PathParam()),
    customizedAcceleratorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/customizedAccelerators/{customizedAcceleratorName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<CustomizedAcceleratorsDeleteInput>;

// Output Schema
export type CustomizedAcceleratorsDeleteOutput = void;
export const CustomizedAcceleratorsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomizedAcceleratorsDeleteOutput>;

// The operation
/**
 * Delete the customized accelerator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param applicationAcceleratorName - The name of the application accelerator.
 * @param customizedAcceleratorName - The name of the customized accelerator.
 */
export const CustomizedAcceleratorsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomizedAcceleratorsDeleteInput,
    outputSchema: CustomizedAcceleratorsDeleteOutput,
  }));
// Input Schema
export interface CustomizedAcceleratorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  applicationAcceleratorName: string;
  customizedAcceleratorName: string;
}
export const CustomizedAcceleratorsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    applicationAcceleratorName: Schema.String.pipe(T.PathParam()),
    customizedAcceleratorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/customizedAccelerators/{customizedAcceleratorName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<CustomizedAcceleratorsGetInput>;

// Output Schema
export interface CustomizedAcceleratorsGetOutput {
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
export const CustomizedAcceleratorsGetOutput =
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
  }) as unknown as Schema.Codec<CustomizedAcceleratorsGetOutput>;

// The operation
/**
 * Get the customized accelerator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param applicationAcceleratorName - The name of the application accelerator.
 * @param customizedAcceleratorName - The name of the customized accelerator.
 */
export const CustomizedAcceleratorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomizedAcceleratorsGetInput,
    outputSchema: CustomizedAcceleratorsGetOutput,
  }),
);
// Input Schema
export interface CustomizedAcceleratorsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  applicationAcceleratorName: string;
}
export const CustomizedAcceleratorsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    applicationAcceleratorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/customizedAccelerators",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<CustomizedAcceleratorsListInput>;

// Output Schema
export interface CustomizedAcceleratorsListOutput {
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
export const CustomizedAcceleratorsListOutput =
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
  }) as unknown as Schema.Codec<CustomizedAcceleratorsListOutput>;

// The operation
/**
 * Handle requests to list all customized accelerators.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param applicationAcceleratorName - The name of the application accelerator.
 */
export const CustomizedAcceleratorsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomizedAcceleratorsListInput,
    outputSchema: CustomizedAcceleratorsListOutput,
  }),
);
// Input Schema
export interface CustomizedAcceleratorsValidateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  applicationAcceleratorName: string;
  customizedAcceleratorName: string;
  provisioningState?:
    | "Creating"
    | "Updating"
    | "Succeeded"
    | "Failed"
    | "Deleting"
    | "Canceled";
  acceleratorType?: "Accelerator" | "Fragment";
  displayName?: string;
  description?: string;
  iconUrl?: string;
  acceleratorTags?: string[];
  imports?: string[];
  gitRepository: {
    url: string;
    intervalInSeconds?: number;
    branch?: string;
    commit?: string;
    gitTag?: string;
    authSetting: { authType: string };
    subPath?: string;
  };
}
export const CustomizedAcceleratorsValidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    applicationAcceleratorName: Schema.String.pipe(T.PathParam()),
    customizedAcceleratorName: Schema.String.pipe(T.PathParam()),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Creating",
        "Updating",
        "Succeeded",
        "Failed",
        "Deleting",
        "Canceled",
      ]),
    ),
    acceleratorType: Schema.optional(
      Schema.Literals(["Accelerator", "Fragment"]),
    ),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    iconUrl: Schema.optional(Schema.String),
    acceleratorTags: Schema.optional(Schema.Array(Schema.String)),
    imports: Schema.optional(Schema.Array(Schema.String)),
    gitRepository: Schema.Struct({
      url: Schema.String,
      intervalInSeconds: Schema.optional(Schema.Number),
      branch: Schema.optional(Schema.String),
      commit: Schema.optional(Schema.String),
      gitTag: Schema.optional(Schema.String),
      authSetting: Schema.Struct({
        authType: Schema.String,
      }),
      subPath: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/customizedAccelerators/{customizedAcceleratorName}/validate",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<CustomizedAcceleratorsValidateInput>;

// Output Schema
export interface CustomizedAcceleratorsValidateOutput {
  state?: "Valid" | "Invalid";
  errorMessage?: string;
}
export const CustomizedAcceleratorsValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.Literals(["Valid", "Invalid"])),
    errorMessage: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CustomizedAcceleratorsValidateOutput>;

// The operation
/**
 * Check the customized accelerator are valid.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param applicationAcceleratorName - The name of the application accelerator.
 * @param customizedAcceleratorName - The name of the customized accelerator.
 */
export const CustomizedAcceleratorsValidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomizedAcceleratorsValidateInput,
    outputSchema: CustomizedAcceleratorsValidateOutput,
  }));
// Input Schema
export interface DeploymentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  deploymentName: string;
  properties?: {
    source?: { type: string; version?: string };
    deploymentSettings?: {
      resourceRequests?: { cpu?: string; memory?: string };
      environmentVariables?: Record<string, string>;
      apms?: { resourceId: string }[];
      addonConfigs?: Record<string, unknown>;
      livenessProbe?: {
        probeAction?: {
          type: "HTTPGetAction" | "TCPSocketAction" | "ExecAction";
        };
        disableProbe: boolean;
        initialDelaySeconds?: number;
        periodSeconds?: number;
        timeoutSeconds?: number;
        failureThreshold?: number;
        successThreshold?: number;
      };
      readinessProbe?: {
        probeAction?: {
          type: "HTTPGetAction" | "TCPSocketAction" | "ExecAction";
        };
        disableProbe: boolean;
        initialDelaySeconds?: number;
        periodSeconds?: number;
        timeoutSeconds?: number;
        failureThreshold?: number;
        successThreshold?: number;
      };
      startupProbe?: {
        probeAction?: {
          type: "HTTPGetAction" | "TCPSocketAction" | "ExecAction";
        };
        disableProbe: boolean;
        initialDelaySeconds?: number;
        periodSeconds?: number;
        timeoutSeconds?: number;
        failureThreshold?: number;
        successThreshold?: number;
      };
      terminationGracePeriodSeconds?: number;
      containerProbeSettings?: { disableProbe?: boolean };
    };
    provisioningState?: "Creating" | "Updating" | "Succeeded" | "Failed";
    status?: "Stopped" | "Running";
    active?: boolean;
    instances?: {
      name?: string;
      status?: string;
      reason?: string;
      discoveryStatus?: string;
      startTime?: string;
      zone?: string;
    }[];
  };
  sku?: { name?: string; tier?: string; capacity?: number };
}
export const DeploymentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        source: Schema.optional(
          Schema.Struct({
            type: Schema.String,
            version: Schema.optional(Schema.String),
          }),
        ),
        deploymentSettings: Schema.optional(
          Schema.Struct({
            resourceRequests: Schema.optional(
              Schema.Struct({
                cpu: Schema.optional(Schema.String),
                memory: Schema.optional(Schema.String),
              }),
            ),
            environmentVariables: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            apms: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  resourceId: Schema.String,
                }),
              ),
            ),
            addonConfigs: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
            livenessProbe: Schema.optional(
              Schema.Struct({
                probeAction: Schema.optional(
                  Schema.Struct({
                    type: Schema.Literals([
                      "HTTPGetAction",
                      "TCPSocketAction",
                      "ExecAction",
                    ]),
                  }),
                ),
                disableProbe: Schema.Boolean,
                initialDelaySeconds: Schema.optional(Schema.Number),
                periodSeconds: Schema.optional(Schema.Number),
                timeoutSeconds: Schema.optional(Schema.Number),
                failureThreshold: Schema.optional(Schema.Number),
                successThreshold: Schema.optional(Schema.Number),
              }),
            ),
            readinessProbe: Schema.optional(
              Schema.Struct({
                probeAction: Schema.optional(
                  Schema.Struct({
                    type: Schema.Literals([
                      "HTTPGetAction",
                      "TCPSocketAction",
                      "ExecAction",
                    ]),
                  }),
                ),
                disableProbe: Schema.Boolean,
                initialDelaySeconds: Schema.optional(Schema.Number),
                periodSeconds: Schema.optional(Schema.Number),
                timeoutSeconds: Schema.optional(Schema.Number),
                failureThreshold: Schema.optional(Schema.Number),
                successThreshold: Schema.optional(Schema.Number),
              }),
            ),
            startupProbe: Schema.optional(
              Schema.Struct({
                probeAction: Schema.optional(
                  Schema.Struct({
                    type: Schema.Literals([
                      "HTTPGetAction",
                      "TCPSocketAction",
                      "ExecAction",
                    ]),
                  }),
                ),
                disableProbe: Schema.Boolean,
                initialDelaySeconds: Schema.optional(Schema.Number),
                periodSeconds: Schema.optional(Schema.Number),
                timeoutSeconds: Schema.optional(Schema.Number),
                failureThreshold: Schema.optional(Schema.Number),
                successThreshold: Schema.optional(Schema.Number),
              }),
            ),
            terminationGracePeriodSeconds: Schema.optional(Schema.Number),
            containerProbeSettings: Schema.optional(
              Schema.Struct({
                disableProbe: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Creating", "Updating", "Succeeded", "Failed"]),
        ),
        status: Schema.optional(Schema.Literals(["Stopped", "Running"])),
        active: Schema.optional(Schema.Boolean),
        instances: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              discoveryStatus: Schema.optional(Schema.String),
              startTime: Schema.optional(Schema.String),
              zone: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DeploymentsCreateOrUpdateInput>;

// Output Schema
export interface DeploymentsCreateOrUpdateOutput {
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
export const DeploymentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DeploymentsCreateOrUpdateOutput>;

// The operation
/**
 * Create a new Deployment or update an exiting Deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param deploymentName - The name of the Deployment resource.
 */
export const DeploymentsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentsCreateOrUpdateInput,
    outputSchema: DeploymentsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface DeploymentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  deploymentName: string;
}
export const DeploymentsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<DeploymentsDeleteInput>;

// Output Schema
export type DeploymentsDeleteOutput = void;
export const DeploymentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeploymentsDeleteOutput>;

// The operation
/**
 * Operation to delete a Deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param deploymentName - The name of the Deployment resource.
 */
export const DeploymentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsDeleteInput,
  outputSchema: DeploymentsDeleteOutput,
}));
// Input Schema
export interface DeploymentsDisableRemoteDebuggingInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  deploymentName: string;
}
export const DeploymentsDisableRemoteDebuggingInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/disableRemoteDebugging",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DeploymentsDisableRemoteDebuggingInput>;

// Output Schema
export interface DeploymentsDisableRemoteDebuggingOutput {
  port?: number;
  enabled?: boolean;
}
export const DeploymentsDisableRemoteDebuggingOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<DeploymentsDisableRemoteDebuggingOutput>;

// The operation
/**
 * Disable remote debugging.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param deploymentName - The name of the Deployment resource.
 */
export const DeploymentsDisableRemoteDebugging =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeploymentsDisableRemoteDebuggingInput,
    outputSchema: DeploymentsDisableRemoteDebuggingOutput,
  }));
// Input Schema
export interface DeploymentsEnableRemoteDebuggingInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  deploymentName: string;
  port?: number;
}
export const DeploymentsEnableRemoteDebuggingInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    port: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/enableRemoteDebugging",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DeploymentsEnableRemoteDebuggingInput>;

// Output Schema
export interface DeploymentsEnableRemoteDebuggingOutput {
  port?: number;
  enabled?: boolean;
}
export const DeploymentsEnableRemoteDebuggingOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<DeploymentsEnableRemoteDebuggingOutput>;

// The operation
/**
 * Enable remote debugging.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param deploymentName - The name of the Deployment resource.
 */
export const DeploymentsEnableRemoteDebugging =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeploymentsEnableRemoteDebuggingInput,
    outputSchema: DeploymentsEnableRemoteDebuggingOutput,
  }));
// Input Schema
export interface DeploymentsGenerateHeapDumpInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  deploymentName: string;
  appInstance?: string;
  filePath?: string;
  duration?: string;
}
export const DeploymentsGenerateHeapDumpInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    appInstance: Schema.optional(Schema.String),
    filePath: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/generateHeapDump",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DeploymentsGenerateHeapDumpInput>;

// Output Schema
export type DeploymentsGenerateHeapDumpOutput = void;
export const DeploymentsGenerateHeapDumpOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeploymentsGenerateHeapDumpOutput>;

// The operation
/**
 * Generate Heap Dump
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param deploymentName - The name of the Deployment resource.
 */
export const DeploymentsGenerateHeapDump = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentsGenerateHeapDumpInput,
    outputSchema: DeploymentsGenerateHeapDumpOutput,
  }),
);
// Input Schema
export interface DeploymentsGenerateThreadDumpInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  deploymentName: string;
  appInstance?: string;
  filePath?: string;
  duration?: string;
}
export const DeploymentsGenerateThreadDumpInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    appInstance: Schema.optional(Schema.String),
    filePath: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/generateThreadDump",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DeploymentsGenerateThreadDumpInput>;

// Output Schema
export type DeploymentsGenerateThreadDumpOutput = void;
export const DeploymentsGenerateThreadDumpOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeploymentsGenerateThreadDumpOutput>;

// The operation
/**
 * Generate Thread Dump
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param deploymentName - The name of the Deployment resource.
 */
export const DeploymentsGenerateThreadDump =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeploymentsGenerateThreadDumpInput,
    outputSchema: DeploymentsGenerateThreadDumpOutput,
  }));
// Input Schema
export interface DeploymentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  deploymentName: string;
}
export const DeploymentsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  appName: Schema.String.pipe(T.PathParam()),
  deploymentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<DeploymentsGetInput>;

// Output Schema
export interface DeploymentsGetOutput {
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
export const DeploymentsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DeploymentsGetOutput>;

// The operation
/**
 * Get a Deployment and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param deploymentName - The name of the Deployment resource.
 */
export const DeploymentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsGetInput,
  outputSchema: DeploymentsGetOutput,
}));
// Input Schema
export interface DeploymentsGetLogFileUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  deploymentName: string;
}
export const DeploymentsGetLogFileUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/getLogFileUrl",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DeploymentsGetLogFileUrlInput>;

// Output Schema
export interface DeploymentsGetLogFileUrlOutput {
  url: string;
}
export const DeploymentsGetLogFileUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.String,
  }) as unknown as Schema.Codec<DeploymentsGetLogFileUrlOutput>;

// The operation
/**
 * Get deployment log file URL
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param deploymentName - The name of the Deployment resource.
 */
export const DeploymentsGetLogFileUrl = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentsGetLogFileUrlInput,
    outputSchema: DeploymentsGetLogFileUrlOutput,
  }),
);
// Input Schema
export interface DeploymentsGetRemoteDebuggingConfigInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  deploymentName: string;
}
export const DeploymentsGetRemoteDebuggingConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/getRemoteDebuggingConfig",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DeploymentsGetRemoteDebuggingConfigInput>;

// Output Schema
export interface DeploymentsGetRemoteDebuggingConfigOutput {
  port?: number;
  enabled?: boolean;
}
export const DeploymentsGetRemoteDebuggingConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<DeploymentsGetRemoteDebuggingConfigOutput>;

// The operation
/**
 * Get remote debugging config.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param deploymentName - The name of the Deployment resource.
 */
export const DeploymentsGetRemoteDebuggingConfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeploymentsGetRemoteDebuggingConfigInput,
    outputSchema: DeploymentsGetRemoteDebuggingConfigOutput,
  }));
// Input Schema
export interface DeploymentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  version?: string;
}
export const DeploymentsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  appName: Schema.String.pipe(T.PathParam()),
  version: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<DeploymentsListInput>;

// Output Schema
export interface DeploymentsListOutput {
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
export const DeploymentsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DeploymentsListOutput>;

// The operation
/**
 * Handles requests to list all resources in an App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param version - Version of the deployments to be listed
 */
export const DeploymentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsListInput,
  outputSchema: DeploymentsListOutput,
}));
// Input Schema
export interface DeploymentsListForClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  version?: string;
  $expand?: string;
}
export const DeploymentsListForClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    version: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/deployments",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DeploymentsListForClusterInput>;

// Output Schema
export interface DeploymentsListForClusterOutput {
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
export const DeploymentsListForClusterOutput =
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
  }) as unknown as Schema.Codec<DeploymentsListForClusterOutput>;

// The operation
/**
 * List deployments for a certain service
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param version - Version of the deployments to be listed
 * @param $expand - The expand expression to apply on the operation.
 */
export const DeploymentsListForCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentsListForClusterInput,
    outputSchema: DeploymentsListForClusterOutput,
  }),
);
// Input Schema
export interface DeploymentsRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  deploymentName: string;
}
export const DeploymentsRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/restart",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DeploymentsRestartInput>;

// Output Schema
export type DeploymentsRestartOutput = void;
export const DeploymentsRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeploymentsRestartOutput>;

// The operation
/**
 * Restart the deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param deploymentName - The name of the Deployment resource.
 */
export const DeploymentsRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsRestartInput,
  outputSchema: DeploymentsRestartOutput,
}));
// Input Schema
export interface DeploymentsStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  deploymentName: string;
}
export const DeploymentsStartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  appName: Schema.String.pipe(T.PathParam()),
  deploymentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/start",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<DeploymentsStartInput>;

// Output Schema
export type DeploymentsStartOutput = void;
export const DeploymentsStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeploymentsStartOutput>;

// The operation
/**
 * Start the deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param deploymentName - The name of the Deployment resource.
 */
export const DeploymentsStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsStartInput,
  outputSchema: DeploymentsStartOutput,
}));
// Input Schema
export interface DeploymentsStartJFRInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  deploymentName: string;
  appInstance?: string;
  filePath?: string;
  duration?: string;
}
export const DeploymentsStartJFRInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    appInstance: Schema.optional(Schema.String),
    filePath: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/startJFR",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DeploymentsStartJFRInput>;

// Output Schema
export type DeploymentsStartJFROutput = void;
export const DeploymentsStartJFROutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeploymentsStartJFROutput>;

// The operation
/**
 * Start JFR
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param deploymentName - The name of the Deployment resource.
 */
export const DeploymentsStartJFR = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsStartJFRInput,
  outputSchema: DeploymentsStartJFROutput,
}));
// Input Schema
export interface DeploymentsStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  deploymentName: string;
}
export const DeploymentsStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  appName: Schema.String.pipe(T.PathParam()),
  deploymentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/stop",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<DeploymentsStopInput>;

// Output Schema
export type DeploymentsStopOutput = void;
export const DeploymentsStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeploymentsStopOutput>;

// The operation
/**
 * Stop the deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param deploymentName - The name of the Deployment resource.
 */
export const DeploymentsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsStopInput,
  outputSchema: DeploymentsStopOutput,
}));
// Input Schema
export interface DeploymentsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  appName: string;
  deploymentName: string;
  properties?: {
    source?: { type: string; version?: string };
    deploymentSettings?: {
      resourceRequests?: { cpu?: string; memory?: string };
      environmentVariables?: Record<string, string>;
      apms?: { resourceId: string }[];
      addonConfigs?: Record<string, unknown>;
      livenessProbe?: {
        probeAction?: {
          type: "HTTPGetAction" | "TCPSocketAction" | "ExecAction";
        };
        disableProbe: boolean;
        initialDelaySeconds?: number;
        periodSeconds?: number;
        timeoutSeconds?: number;
        failureThreshold?: number;
        successThreshold?: number;
      };
      readinessProbe?: {
        probeAction?: {
          type: "HTTPGetAction" | "TCPSocketAction" | "ExecAction";
        };
        disableProbe: boolean;
        initialDelaySeconds?: number;
        periodSeconds?: number;
        timeoutSeconds?: number;
        failureThreshold?: number;
        successThreshold?: number;
      };
      startupProbe?: {
        probeAction?: {
          type: "HTTPGetAction" | "TCPSocketAction" | "ExecAction";
        };
        disableProbe: boolean;
        initialDelaySeconds?: number;
        periodSeconds?: number;
        timeoutSeconds?: number;
        failureThreshold?: number;
        successThreshold?: number;
      };
      terminationGracePeriodSeconds?: number;
      containerProbeSettings?: { disableProbe?: boolean };
    };
    provisioningState?: "Creating" | "Updating" | "Succeeded" | "Failed";
    status?: "Stopped" | "Running";
    active?: boolean;
    instances?: {
      name?: string;
      status?: string;
      reason?: string;
      discoveryStatus?: string;
      startTime?: string;
      zone?: string;
    }[];
  };
  sku?: { name?: string; tier?: string; capacity?: number };
}
export const DeploymentsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        source: Schema.optional(
          Schema.Struct({
            type: Schema.String,
            version: Schema.optional(Schema.String),
          }),
        ),
        deploymentSettings: Schema.optional(
          Schema.Struct({
            resourceRequests: Schema.optional(
              Schema.Struct({
                cpu: Schema.optional(Schema.String),
                memory: Schema.optional(Schema.String),
              }),
            ),
            environmentVariables: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            apms: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  resourceId: Schema.String,
                }),
              ),
            ),
            addonConfigs: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
            livenessProbe: Schema.optional(
              Schema.Struct({
                probeAction: Schema.optional(
                  Schema.Struct({
                    type: Schema.Literals([
                      "HTTPGetAction",
                      "TCPSocketAction",
                      "ExecAction",
                    ]),
                  }),
                ),
                disableProbe: Schema.Boolean,
                initialDelaySeconds: Schema.optional(Schema.Number),
                periodSeconds: Schema.optional(Schema.Number),
                timeoutSeconds: Schema.optional(Schema.Number),
                failureThreshold: Schema.optional(Schema.Number),
                successThreshold: Schema.optional(Schema.Number),
              }),
            ),
            readinessProbe: Schema.optional(
              Schema.Struct({
                probeAction: Schema.optional(
                  Schema.Struct({
                    type: Schema.Literals([
                      "HTTPGetAction",
                      "TCPSocketAction",
                      "ExecAction",
                    ]),
                  }),
                ),
                disableProbe: Schema.Boolean,
                initialDelaySeconds: Schema.optional(Schema.Number),
                periodSeconds: Schema.optional(Schema.Number),
                timeoutSeconds: Schema.optional(Schema.Number),
                failureThreshold: Schema.optional(Schema.Number),
                successThreshold: Schema.optional(Schema.Number),
              }),
            ),
            startupProbe: Schema.optional(
              Schema.Struct({
                probeAction: Schema.optional(
                  Schema.Struct({
                    type: Schema.Literals([
                      "HTTPGetAction",
                      "TCPSocketAction",
                      "ExecAction",
                    ]),
                  }),
                ),
                disableProbe: Schema.Boolean,
                initialDelaySeconds: Schema.optional(Schema.Number),
                periodSeconds: Schema.optional(Schema.Number),
                timeoutSeconds: Schema.optional(Schema.Number),
                failureThreshold: Schema.optional(Schema.Number),
                successThreshold: Schema.optional(Schema.Number),
              }),
            ),
            terminationGracePeriodSeconds: Schema.optional(Schema.Number),
            containerProbeSettings: Schema.optional(
              Schema.Struct({
                disableProbe: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Creating", "Updating", "Succeeded", "Failed"]),
        ),
        status: Schema.optional(Schema.Literals(["Stopped", "Running"])),
        active: Schema.optional(Schema.Boolean),
        instances: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              discoveryStatus: Schema.optional(Schema.String),
              startTime: Schema.optional(Schema.String),
              zone: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<DeploymentsUpdateInput>;

// Output Schema
export interface DeploymentsUpdateOutput {
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
export const DeploymentsUpdateOutput =
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
  }) as unknown as Schema.Codec<DeploymentsUpdateOutput>;

// The operation
/**
 * Operation to update an exiting Deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param appName - The name of the App resource.
 * @param deploymentName - The name of the Deployment resource.
 */
export const DeploymentsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsUpdateInput,
  outputSchema: DeploymentsUpdateOutput,
}));
// Input Schema
export interface DevToolPortalsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  devToolPortalName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting"
      | "Canceled";
    components?: {
      name?: string;
      resourceRequests?: {
        cpu?: string;
        memory?: string;
        instanceCount?: number;
      };
      instances?: { name?: string; status?: string }[];
    }[];
    public?: boolean;
    url?: string;
    ssoProperties?: {
      scopes?: string[];
      clientId?: string;
      clientSecret?: string | Redacted.Redacted<string>;
      metadataUrl?: string;
    };
    features?: {
      applicationAccelerator?: {
        state?: "Enabled" | "Disabled";
        route?: string;
      };
      applicationLiveView?: { state?: "Enabled" | "Disabled"; route?: string };
    };
  };
}
export const DevToolPortalsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    devToolPortalName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Canceled",
          ]),
        ),
        components: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              resourceRequests: Schema.optional(
                Schema.Struct({
                  cpu: Schema.optional(Schema.String),
                  memory: Schema.optional(Schema.String),
                  instanceCount: Schema.optional(Schema.Number),
                }),
              ),
              instances: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    status: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        public: Schema.optional(Schema.Boolean),
        url: Schema.optional(Schema.String),
        ssoProperties: Schema.optional(
          Schema.Struct({
            scopes: Schema.optional(Schema.Array(Schema.String)),
            clientId: Schema.optional(Schema.String),
            clientSecret: Schema.optional(SensitiveString),
            metadataUrl: Schema.optional(Schema.String),
          }),
        ),
        features: Schema.optional(
          Schema.Struct({
            applicationAccelerator: Schema.optional(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                route: Schema.optional(Schema.String),
              }),
            ),
            applicationLiveView: Schema.optional(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                route: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/DevToolPortals/{devToolPortalName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevToolPortalsCreateOrUpdateInput>;

// Output Schema
export interface DevToolPortalsCreateOrUpdateOutput {
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
export const DevToolPortalsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DevToolPortalsCreateOrUpdateOutput>;

// The operation
/**
 * Create the default Dev Tool Portal or update the existing Dev Tool Portal.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param devToolPortalName - The name of Dev Tool Portal.
 */
export const DevToolPortalsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DevToolPortalsCreateOrUpdateInput,
    outputSchema: DevToolPortalsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DevToolPortalsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  devToolPortalName: string;
}
export const DevToolPortalsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    devToolPortalName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/DevToolPortals/{devToolPortalName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevToolPortalsDeleteInput>;

// Output Schema
export type DevToolPortalsDeleteOutput = void;
export const DevToolPortalsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DevToolPortalsDeleteOutput>;

// The operation
/**
 * Disable the default Dev Tool Portal.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param devToolPortalName - The name of Dev Tool Portal.
 */
export const DevToolPortalsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DevToolPortalsDeleteInput,
    outputSchema: DevToolPortalsDeleteOutput,
  }),
);
// Input Schema
export interface DevToolPortalsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  devToolPortalName: string;
}
export const DevToolPortalsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    devToolPortalName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/DevToolPortals/{devToolPortalName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<DevToolPortalsGetInput>;

// Output Schema
export interface DevToolPortalsGetOutput {
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
export const DevToolPortalsGetOutput =
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
  }) as unknown as Schema.Codec<DevToolPortalsGetOutput>;

// The operation
/**
 * Get the Application Live  and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param devToolPortalName - The name of Dev Tool Portal.
 */
export const DevToolPortalsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DevToolPortalsGetInput,
  outputSchema: DevToolPortalsGetOutput,
}));
// Input Schema
export interface DevToolPortalsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const DevToolPortalsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/devToolPortals",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DevToolPortalsListInput>;

// Output Schema
export interface DevToolPortalsListOutput {
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
export const DevToolPortalsListOutput =
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
  }) as unknown as Schema.Codec<DevToolPortalsListOutput>;

// The operation
/**
 * Handles requests to list all resources in a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const DevToolPortalsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DevToolPortalsListInput,
  outputSchema: DevToolPortalsListOutput,
}));
// Input Schema
export interface GatewayCustomDomainsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  gatewayName: string;
  domainName: string;
  properties?: { thumbprint?: string };
}
export const GatewayCustomDomainsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    gatewayName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        thumbprint: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<GatewayCustomDomainsCreateOrUpdateInput>;

// Output Schema
export interface GatewayCustomDomainsCreateOrUpdateOutput {
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
export const GatewayCustomDomainsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<GatewayCustomDomainsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the Spring Cloud Gateway custom domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param gatewayName - The name of Spring Cloud Gateway.
 * @param domainName - The name of the Spring Cloud Gateway custom domain.
 */
export const GatewayCustomDomainsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GatewayCustomDomainsCreateOrUpdateInput,
    outputSchema: GatewayCustomDomainsCreateOrUpdateOutput,
  }));
// Input Schema
export interface GatewayCustomDomainsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  gatewayName: string;
  domainName: string;
}
export const GatewayCustomDomainsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    gatewayName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<GatewayCustomDomainsDeleteInput>;

// Output Schema
export type GatewayCustomDomainsDeleteOutput = void;
export const GatewayCustomDomainsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GatewayCustomDomainsDeleteOutput>;

// The operation
/**
 * Delete the Spring Cloud Gateway custom domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param gatewayName - The name of Spring Cloud Gateway.
 * @param domainName - The name of the Spring Cloud Gateway custom domain.
 */
export const GatewayCustomDomainsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewayCustomDomainsDeleteInput,
    outputSchema: GatewayCustomDomainsDeleteOutput,
  }),
);
// Input Schema
export interface GatewayCustomDomainsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  gatewayName: string;
  domainName: string;
}
export const GatewayCustomDomainsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    gatewayName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/domains/{domainName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<GatewayCustomDomainsGetInput>;

// Output Schema
export interface GatewayCustomDomainsGetOutput {
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
export const GatewayCustomDomainsGetOutput =
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
  }) as unknown as Schema.Codec<GatewayCustomDomainsGetOutput>;

// The operation
/**
 * Get the Spring Cloud Gateway custom domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param gatewayName - The name of Spring Cloud Gateway.
 * @param domainName - The name of the Spring Cloud Gateway custom domain.
 */
export const GatewayCustomDomainsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewayCustomDomainsGetInput,
    outputSchema: GatewayCustomDomainsGetOutput,
  }),
);
// Input Schema
export interface GatewayCustomDomainsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  gatewayName: string;
}
export const GatewayCustomDomainsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    gatewayName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/domains",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<GatewayCustomDomainsListInput>;

// Output Schema
export interface GatewayCustomDomainsListOutput {
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
export const GatewayCustomDomainsListOutput =
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
  }) as unknown as Schema.Codec<GatewayCustomDomainsListOutput>;

// The operation
/**
 * Handle requests to list all Spring Cloud Gateway custom domains.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param gatewayName - The name of Spring Cloud Gateway.
 */
export const GatewayCustomDomainsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewayCustomDomainsListInput,
    outputSchema: GatewayCustomDomainsListOutput,
  }),
);
// Input Schema
export interface GatewayRouteConfigsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  gatewayName: string;
  routeConfigName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting";
    appResourceId?: string;
    openApi?: { uri?: string };
    protocol?: "HTTP" | "HTTPS";
    routes?: {
      title?: string;
      description?: string;
      uri?: string;
      ssoEnabled?: boolean;
      tokenRelay?: boolean;
      predicates?: string[];
      filters?: string[];
      order?: number;
      tags?: string[];
    }[];
    ssoEnabled?: boolean;
    predicates?: string[];
    filters?: string[];
  };
}
export const GatewayRouteConfigsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    gatewayName: Schema.String.pipe(T.PathParam()),
    routeConfigName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        appResourceId: Schema.optional(Schema.String),
        openApi: Schema.optional(
          Schema.Struct({
            uri: Schema.optional(Schema.String),
          }),
        ),
        protocol: Schema.optional(Schema.Literals(["HTTP", "HTTPS"])),
        routes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              title: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              uri: Schema.optional(Schema.String),
              ssoEnabled: Schema.optional(Schema.Boolean),
              tokenRelay: Schema.optional(Schema.Boolean),
              predicates: Schema.optional(Schema.Array(Schema.String)),
              filters: Schema.optional(Schema.Array(Schema.String)),
              order: Schema.optional(Schema.Number),
              tags: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        ssoEnabled: Schema.optional(Schema.Boolean),
        predicates: Schema.optional(Schema.Array(Schema.String)),
        filters: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/routeConfigs/{routeConfigName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<GatewayRouteConfigsCreateOrUpdateInput>;

// Output Schema
export interface GatewayRouteConfigsCreateOrUpdateOutput {
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
export const GatewayRouteConfigsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<GatewayRouteConfigsCreateOrUpdateOutput>;

// The operation
/**
 * Create the default Spring Cloud Gateway route configs or update the existing Spring Cloud Gateway route configs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param gatewayName - The name of Spring Cloud Gateway.
 * @param routeConfigName - The name of the Spring Cloud Gateway route config.
 */
export const GatewayRouteConfigsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GatewayRouteConfigsCreateOrUpdateInput,
    outputSchema: GatewayRouteConfigsCreateOrUpdateOutput,
  }));
// Input Schema
export interface GatewayRouteConfigsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  gatewayName: string;
  routeConfigName: string;
}
export const GatewayRouteConfigsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    gatewayName: Schema.String.pipe(T.PathParam()),
    routeConfigName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/routeConfigs/{routeConfigName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<GatewayRouteConfigsDeleteInput>;

// Output Schema
export type GatewayRouteConfigsDeleteOutput = void;
export const GatewayRouteConfigsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GatewayRouteConfigsDeleteOutput>;

// The operation
/**
 * Delete the Spring Cloud Gateway route config.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param gatewayName - The name of Spring Cloud Gateway.
 * @param routeConfigName - The name of the Spring Cloud Gateway route config.
 */
export const GatewayRouteConfigsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewayRouteConfigsDeleteInput,
    outputSchema: GatewayRouteConfigsDeleteOutput,
  }),
);
// Input Schema
export interface GatewayRouteConfigsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  gatewayName: string;
  routeConfigName: string;
}
export const GatewayRouteConfigsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    gatewayName: Schema.String.pipe(T.PathParam()),
    routeConfigName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/routeConfigs/{routeConfigName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<GatewayRouteConfigsGetInput>;

// Output Schema
export interface GatewayRouteConfigsGetOutput {
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
export const GatewayRouteConfigsGetOutput =
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
  }) as unknown as Schema.Codec<GatewayRouteConfigsGetOutput>;

// The operation
/**
 * Get the Spring Cloud Gateway route configs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param gatewayName - The name of Spring Cloud Gateway.
 * @param routeConfigName - The name of the Spring Cloud Gateway route config.
 */
export const GatewayRouteConfigsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewayRouteConfigsGetInput,
    outputSchema: GatewayRouteConfigsGetOutput,
  }),
);
// Input Schema
export interface GatewayRouteConfigsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  gatewayName: string;
}
export const GatewayRouteConfigsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    gatewayName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/routeConfigs",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<GatewayRouteConfigsListInput>;

// Output Schema
export interface GatewayRouteConfigsListOutput {
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
export const GatewayRouteConfigsListOutput =
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
  }) as unknown as Schema.Codec<GatewayRouteConfigsListOutput>;

// The operation
/**
 * Handle requests to list all Spring Cloud Gateway route configs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param gatewayName - The name of Spring Cloud Gateway.
 */
export const GatewayRouteConfigsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewayRouteConfigsListInput,
    outputSchema: GatewayRouteConfigsListOutput,
  }),
);
// Input Schema
export interface GatewaysCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  gatewayName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting";
    public?: boolean;
    url?: string;
    httpsOnly?: boolean;
    ssoProperties?: {
      scope?: string[];
      clientId?: string;
      clientSecret?: string | Redacted.Redacted<string>;
      issuerUri?: string;
    };
    apiMetadataProperties?: {
      title?: string;
      description?: string;
      documentation?: string;
      version?: string;
      serverUrl?: string;
    };
    corsProperties?: {
      allowedOrigins?: string[];
      allowedOriginPatterns?: string[];
      allowedMethods?: string[];
      allowedHeaders?: string[];
      maxAge?: number;
      allowCredentials?: boolean;
      exposedHeaders?: string[];
    };
    clientAuth?: {
      certificates?: string[];
      certificateVerification?: "Enabled" | "Disabled";
    };
    apms?: { resourceId: string }[];
    environmentVariables?: {
      properties?: Record<string, string>;
      secrets?: Record<string, string>;
    };
    resourceRequests?: { cpu?: string; memory?: string };
    instances?: { name?: string; status?: string }[];
    operatorProperties?: {
      resourceRequests?: {
        cpu?: string;
        memory?: string;
        instanceCount?: number;
      };
      instances?: { name?: string; status?: string }[];
    };
  };
  sku?: { name?: string; tier?: string; capacity?: number };
}
export const GatewaysCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    gatewayName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
          ]),
        ),
        public: Schema.optional(Schema.Boolean),
        url: Schema.optional(Schema.String),
        httpsOnly: Schema.optional(Schema.Boolean),
        ssoProperties: Schema.optional(
          Schema.Struct({
            scope: Schema.optional(Schema.Array(Schema.String)),
            clientId: Schema.optional(Schema.String),
            clientSecret: Schema.optional(SensitiveString),
            issuerUri: Schema.optional(Schema.String),
          }),
        ),
        apiMetadataProperties: Schema.optional(
          Schema.Struct({
            title: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            documentation: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            serverUrl: Schema.optional(Schema.String),
          }),
        ),
        corsProperties: Schema.optional(
          Schema.Struct({
            allowedOrigins: Schema.optional(Schema.Array(Schema.String)),
            allowedOriginPatterns: Schema.optional(Schema.Array(Schema.String)),
            allowedMethods: Schema.optional(Schema.Array(Schema.String)),
            allowedHeaders: Schema.optional(Schema.Array(Schema.String)),
            maxAge: Schema.optional(Schema.Number),
            allowCredentials: Schema.optional(Schema.Boolean),
            exposedHeaders: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        clientAuth: Schema.optional(
          Schema.Struct({
            certificates: Schema.optional(Schema.Array(Schema.String)),
            certificateVerification: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        apms: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resourceId: Schema.String,
            }),
          ),
        ),
        environmentVariables: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            secrets: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
        resourceRequests: Schema.optional(
          Schema.Struct({
            cpu: Schema.optional(Schema.String),
            memory: Schema.optional(Schema.String),
          }),
        ),
        instances: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
            }),
          ),
        ),
        operatorProperties: Schema.optional(
          Schema.Struct({
            resourceRequests: Schema.optional(
              Schema.Struct({
                cpu: Schema.optional(Schema.String),
                memory: Schema.optional(Schema.String),
                instanceCount: Schema.optional(Schema.Number),
              }),
            ),
            instances: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  status: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<GatewaysCreateOrUpdateInput>;

// Output Schema
export interface GatewaysCreateOrUpdateOutput {
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
export const GatewaysCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<GatewaysCreateOrUpdateOutput>;

// The operation
/**
 * Create the default Spring Cloud Gateway or update the existing Spring Cloud Gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param gatewayName - The name of Spring Cloud Gateway.
 */
export const GatewaysCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewaysCreateOrUpdateInput,
    outputSchema: GatewaysCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface GatewaysDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  gatewayName: string;
}
export const GatewaysDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  gatewayName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<GatewaysDeleteInput>;

// Output Schema
export type GatewaysDeleteOutput = void;
export const GatewaysDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GatewaysDeleteOutput>;

// The operation
/**
 * Disable the default Spring Cloud Gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param gatewayName - The name of Spring Cloud Gateway.
 */
export const GatewaysDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GatewaysDeleteInput,
  outputSchema: GatewaysDeleteOutput,
}));
// Input Schema
export interface GatewaysGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  gatewayName: string;
}
export const GatewaysGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  gatewayName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<GatewaysGetInput>;

// Output Schema
export interface GatewaysGetOutput {
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
export const GatewaysGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GatewaysGetOutput>;

// The operation
/**
 * Get the Spring Cloud Gateway and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param gatewayName - The name of Spring Cloud Gateway.
 */
export const GatewaysGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GatewaysGetInput,
  outputSchema: GatewaysGetOutput,
}));
// Input Schema
export interface GatewaysListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const GatewaysListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<GatewaysListInput>;

// Output Schema
export interface GatewaysListOutput {
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
export const GatewaysListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GatewaysListOutput>;

// The operation
/**
 * Handles requests to list all resources in a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const GatewaysList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GatewaysListInput,
  outputSchema: GatewaysListOutput,
}));
// Input Schema
export interface GatewaysListEnvSecretsInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  gatewayName: string;
}
export const GatewaysListEnvSecretsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    gatewayName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/listEnvSecrets",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<GatewaysListEnvSecretsInput>;

// Output Schema
export type GatewaysListEnvSecretsOutput = Record<string, string>;
export const GatewaysListEnvSecretsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.String,
  ) as unknown as Schema.Codec<GatewaysListEnvSecretsOutput>;

// The operation
/**
 * List sensitive environment variables of Spring Cloud Gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param gatewayName - The name of Spring Cloud Gateway.
 */
export const GatewaysListEnvSecrets = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewaysListEnvSecretsInput,
    outputSchema: GatewaysListEnvSecretsOutput,
  }),
);
// Input Schema
export interface GatewaysRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  gatewayName: string;
}
export const GatewaysRestartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  gatewayName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/restart",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<GatewaysRestartInput>;

// Output Schema
export type GatewaysRestartOutput = void;
export const GatewaysRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GatewaysRestartOutput>;

// The operation
/**
 * Restart the Spring Cloud Gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param gatewayName - The name of Spring Cloud Gateway.
 */
export const GatewaysRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GatewaysRestartInput,
  outputSchema: GatewaysRestartOutput,
}));
// Input Schema
export interface GatewaysValidateDomainInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  gatewayName: string;
  name: string;
}
export const GatewaysValidateDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    gatewayName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/validateDomain",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<GatewaysValidateDomainInput>;

// Output Schema
export interface GatewaysValidateDomainOutput {
  isValid?: boolean;
  message?: string;
}
export const GatewaysValidateDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isValid: Schema.optional(Schema.Boolean),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GatewaysValidateDomainOutput>;

// The operation
/**
 * Check the domains are valid as well as not in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param gatewayName - The name of Spring Cloud Gateway.
 */
export const GatewaysValidateDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewaysValidateDomainInput,
    outputSchema: GatewaysValidateDomainOutput,
  }),
);
// Input Schema
export interface MonitoringSettingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const MonitoringSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/monitoringSettings/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<MonitoringSettingsGetInput>;

// Output Schema
export interface MonitoringSettingsGetOutput {
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
export const MonitoringSettingsGetOutput =
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
  }) as unknown as Schema.Codec<MonitoringSettingsGetOutput>;

// The operation
/**
 * Get the Monitoring Setting and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const MonitoringSettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MonitoringSettingsGetInput,
    outputSchema: MonitoringSettingsGetOutput,
  }),
);
// Input Schema
export interface MonitoringSettingsUpdatePatchInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  properties?: {
    provisioningState?: "NotAvailable" | "Failed" | "Succeeded" | "Updating";
    error?: { code?: string; message?: string };
    traceEnabled?: boolean;
    appInsightsInstrumentationKey?: string;
    appInsightsSamplingRate?: number;
    appInsightsAgentVersions?: { java?: string };
  };
}
export const MonitoringSettingsUpdatePatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["NotAvailable", "Failed", "Succeeded", "Updating"]),
        ),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
        traceEnabled: Schema.optional(Schema.Boolean),
        appInsightsInstrumentationKey: Schema.optional(Schema.String),
        appInsightsSamplingRate: Schema.optional(Schema.Number),
        appInsightsAgentVersions: Schema.optional(
          Schema.Struct({
            java: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/monitoringSettings/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<MonitoringSettingsUpdatePatchInput>;

// Output Schema
export interface MonitoringSettingsUpdatePatchOutput {
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
export const MonitoringSettingsUpdatePatchOutput =
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
  }) as unknown as Schema.Codec<MonitoringSettingsUpdatePatchOutput>;

// The operation
/**
 * Update the Monitoring Setting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const MonitoringSettingsUpdatePatch =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MonitoringSettingsUpdatePatchInput,
    outputSchema: MonitoringSettingsUpdatePatchOutput,
  }));
// Input Schema
export interface MonitoringSettingsUpdatePutInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  properties?: {
    provisioningState?: "NotAvailable" | "Failed" | "Succeeded" | "Updating";
    error?: { code?: string; message?: string };
    traceEnabled?: boolean;
    appInsightsInstrumentationKey?: string;
    appInsightsSamplingRate?: number;
    appInsightsAgentVersions?: { java?: string };
  };
}
export const MonitoringSettingsUpdatePutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["NotAvailable", "Failed", "Succeeded", "Updating"]),
        ),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
        traceEnabled: Schema.optional(Schema.Boolean),
        appInsightsInstrumentationKey: Schema.optional(Schema.String),
        appInsightsSamplingRate: Schema.optional(Schema.Number),
        appInsightsAgentVersions: Schema.optional(
          Schema.Struct({
            java: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/monitoringSettings/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<MonitoringSettingsUpdatePutInput>;

// Output Schema
export interface MonitoringSettingsUpdatePutOutput {
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
export const MonitoringSettingsUpdatePutOutput =
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
  }) as unknown as Schema.Codec<MonitoringSettingsUpdatePutOutput>;

// The operation
/**
 * Update the Monitoring Setting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const MonitoringSettingsUpdatePut = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MonitoringSettingsUpdatePutInput,
    outputSchema: MonitoringSettingsUpdatePutOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppPlatform/operations",
    apiVersion: "2023-12-01",
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
    actionType?: "Internal";
    origin?: string;
    properties?: {
      serviceSpecification?: {
        logSpecifications?: {
          name?: string;
          displayName?: string;
          blobDuration?: string;
        }[];
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          category?: string;
          aggregationType?: string;
          supportedAggregationTypes?: string[];
          supportedTimeGrainTypes?: string[];
          fillGapWithZero?: boolean;
          dimensions?: {
            name?: string;
            displayName?: string;
            toBeExportedForShoebox?: boolean;
          }[];
          sourceMdmNamespace?: string;
        }[];
      };
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
        actionType: Schema.optional(Schema.Literals(["Internal"])),
        origin: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            serviceSpecification: Schema.optional(
              Schema.Struct({
                logSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      blobDuration: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                metricSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      displayDescription: Schema.optional(Schema.String),
                      unit: Schema.optional(Schema.String),
                      category: Schema.optional(Schema.String),
                      aggregationType: Schema.optional(Schema.String),
                      supportedAggregationTypes: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      supportedTimeGrainTypes: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      fillGapWithZero: Schema.optional(Schema.Boolean),
                      dimensions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            displayName: Schema.optional(Schema.String),
                            toBeExportedForShoebox: Schema.optional(
                              Schema.Boolean,
                            ),
                          }),
                        ),
                      ),
                      sourceMdmNamespace: Schema.optional(Schema.String),
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
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available REST API operations of the Microsoft.AppPlatform provider.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PredefinedAcceleratorsDisableInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  applicationAcceleratorName: string;
  predefinedAcceleratorName: string;
}
export const PredefinedAcceleratorsDisableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    applicationAcceleratorName: Schema.String.pipe(T.PathParam()),
    predefinedAcceleratorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/predefinedAccelerators/{predefinedAcceleratorName}/disable",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<PredefinedAcceleratorsDisableInput>;

// Output Schema
export type PredefinedAcceleratorsDisableOutput = void;
export const PredefinedAcceleratorsDisableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PredefinedAcceleratorsDisableOutput>;

// The operation
/**
 * Disable predefined accelerator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param applicationAcceleratorName - The name of the application accelerator.
 * @param predefinedAcceleratorName - The name of the predefined accelerator.
 */
export const PredefinedAcceleratorsDisable =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PredefinedAcceleratorsDisableInput,
    outputSchema: PredefinedAcceleratorsDisableOutput,
  }));
// Input Schema
export interface PredefinedAcceleratorsEnableInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  applicationAcceleratorName: string;
  predefinedAcceleratorName: string;
}
export const PredefinedAcceleratorsEnableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    applicationAcceleratorName: Schema.String.pipe(T.PathParam()),
    predefinedAcceleratorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/predefinedAccelerators/{predefinedAcceleratorName}/enable",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<PredefinedAcceleratorsEnableInput>;

// Output Schema
export type PredefinedAcceleratorsEnableOutput = void;
export const PredefinedAcceleratorsEnableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PredefinedAcceleratorsEnableOutput>;

// The operation
/**
 * Enable predefined accelerator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param applicationAcceleratorName - The name of the application accelerator.
 * @param predefinedAcceleratorName - The name of the predefined accelerator.
 */
export const PredefinedAcceleratorsEnable =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PredefinedAcceleratorsEnableInput,
    outputSchema: PredefinedAcceleratorsEnableOutput,
  }));
// Input Schema
export interface PredefinedAcceleratorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  applicationAcceleratorName: string;
  predefinedAcceleratorName: string;
}
export const PredefinedAcceleratorsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    applicationAcceleratorName: Schema.String.pipe(T.PathParam()),
    predefinedAcceleratorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/predefinedAccelerators/{predefinedAcceleratorName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<PredefinedAcceleratorsGetInput>;

// Output Schema
export interface PredefinedAcceleratorsGetOutput {
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
export const PredefinedAcceleratorsGetOutput =
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
  }) as unknown as Schema.Codec<PredefinedAcceleratorsGetOutput>;

// The operation
/**
 * Get the predefined accelerator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param applicationAcceleratorName - The name of the application accelerator.
 * @param predefinedAcceleratorName - The name of the predefined accelerator.
 */
export const PredefinedAcceleratorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PredefinedAcceleratorsGetInput,
    outputSchema: PredefinedAcceleratorsGetOutput,
  }),
);
// Input Schema
export interface PredefinedAcceleratorsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  applicationAcceleratorName: string;
}
export const PredefinedAcceleratorsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    applicationAcceleratorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/predefinedAccelerators",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<PredefinedAcceleratorsListInput>;

// Output Schema
export interface PredefinedAcceleratorsListOutput {
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
export const PredefinedAcceleratorsListOutput =
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
  }) as unknown as Schema.Codec<PredefinedAcceleratorsListOutput>;

// The operation
/**
 * Handle requests to list all predefined accelerators.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param applicationAcceleratorName - The name of the application accelerator.
 */
export const PredefinedAcceleratorsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PredefinedAcceleratorsListInput,
    outputSchema: PredefinedAcceleratorsListOutput,
  }),
);
// Input Schema
export interface RuntimeVersionsListRuntimeVersionsInput {}
export const RuntimeVersionsListRuntimeVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.AppPlatform/runtimeVersions",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<RuntimeVersionsListRuntimeVersionsInput>;

// Output Schema
export interface RuntimeVersionsListRuntimeVersionsOutput {
  value?: {
    value?: "Java_8" | "Java_11" | "Java_17" | "NetCore_31";
    platform?: "Java" | ".NET Core";
    version?: string;
  }[];
}
export const RuntimeVersionsListRuntimeVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          value: Schema.optional(
            Schema.Literals(["Java_8", "Java_11", "Java_17", "NetCore_31"]),
          ),
          platform: Schema.optional(Schema.Literals(["Java", ".NET Core"])),
          version: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<RuntimeVersionsListRuntimeVersionsOutput>;

// The operation
/**
 * Lists all of the available runtime versions supported by Microsoft.AppPlatform provider.
 *
 * @param api-version - The API version to use for this operation.
 */
export const RuntimeVersionsListRuntimeVersions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RuntimeVersionsListRuntimeVersionsInput,
    outputSchema: RuntimeVersionsListRuntimeVersionsOutput,
  }));
// Input Schema
export interface ServiceRegistriesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  serviceRegistryName: string;
}
export const ServiceRegistriesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceRegistryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/serviceRegistries/{serviceRegistryName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServiceRegistriesCreateOrUpdateInput>;

// Output Schema
export interface ServiceRegistriesCreateOrUpdateOutput {
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
export const ServiceRegistriesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ServiceRegistriesCreateOrUpdateOutput>;

// The operation
/**
 * Create the default Service Registry or update the existing Service Registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param serviceRegistryName - The name of Service Registry.
 */
export const ServiceRegistriesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceRegistriesCreateOrUpdateInput,
    outputSchema: ServiceRegistriesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ServiceRegistriesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  serviceRegistryName: string;
}
export const ServiceRegistriesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceRegistryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/serviceRegistries/{serviceRegistryName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServiceRegistriesDeleteInput>;

// Output Schema
export type ServiceRegistriesDeleteOutput = void;
export const ServiceRegistriesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServiceRegistriesDeleteOutput>;

// The operation
/**
 * Disable the default Service Registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param serviceRegistryName - The name of Service Registry.
 */
export const ServiceRegistriesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceRegistriesDeleteInput,
    outputSchema: ServiceRegistriesDeleteOutput,
  }),
);
// Input Schema
export interface ServiceRegistriesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  serviceRegistryName: string;
}
export const ServiceRegistriesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    serviceRegistryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/serviceRegistries/{serviceRegistryName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServiceRegistriesGetInput>;

// Output Schema
export interface ServiceRegistriesGetOutput {
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
export const ServiceRegistriesGetOutput =
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
  }) as unknown as Schema.Codec<ServiceRegistriesGetOutput>;

// The operation
/**
 * Get the Service Registry and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param serviceRegistryName - The name of Service Registry.
 */
export const ServiceRegistriesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceRegistriesGetInput,
    outputSchema: ServiceRegistriesGetOutput,
  }),
);
// Input Schema
export interface ServiceRegistriesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ServiceRegistriesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/serviceRegistries",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServiceRegistriesListInput>;

// Output Schema
export interface ServiceRegistriesListOutput {
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
export const ServiceRegistriesListOutput =
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
  }) as unknown as Schema.Codec<ServiceRegistriesListOutput>;

// The operation
/**
 * Handles requests to list all resources in a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServiceRegistriesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceRegistriesListInput,
    outputSchema: ServiceRegistriesListOutput,
  }),
);
// Input Schema
export interface ServicesCheckNameAvailabilityInput {
  subscriptionId: string;
  location: string;
  type: string;
  name: string;
}
export const ServicesCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    type: Schema.String,
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AppPlatform/locations/{location}/checkNameAvailability",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServicesCheckNameAvailabilityInput>;

// Output Schema
export interface ServicesCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const ServicesCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the resource name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param location - the region
 */
export const ServicesCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServicesCheckNameAvailabilityInput,
    outputSchema: ServicesCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface ServicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Starting"
      | "Stopping"
      | "Deleting"
      | "Deleted"
      | "Succeeded"
      | "Failed"
      | "Moving"
      | "Moved"
      | "MoveFailed";
    networkProfile?: {
      serviceRuntimeSubnetId?: string;
      appSubnetId?: string;
      serviceCidr?: string;
      serviceRuntimeNetworkResourceGroup?: string;
      appNetworkResourceGroup?: string;
      outboundIPs?: { publicIPs?: string[] };
      requiredTraffics?: {
        protocol?: string;
        port?: number;
        ips?: string[];
        fqdns?: string[];
        direction?: "Inbound" | "Outbound";
      }[];
      ingressConfig?: { readTimeoutInSeconds?: number };
      outboundType?: string;
    };
    vnetAddons?: {
      logStreamPublicEndpoint?: boolean;
      dataPlanePublicEndpoint?: boolean;
    };
    version?: number;
    serviceId?: string;
    powerState?: "Running" | "Stopped";
    zoneRedundant?: boolean;
    fqdn?: string;
    marketplaceResource?: {
      plan?: string;
      publisher?: string;
      product?: string;
    };
  };
  sku?: { name?: string; tier?: string; capacity?: number };
  location?: string;
  tags?: Record<string, string>;
}
export const ServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Starting",
            "Stopping",
            "Deleting",
            "Deleted",
            "Succeeded",
            "Failed",
            "Moving",
            "Moved",
            "MoveFailed",
          ]),
        ),
        networkProfile: Schema.optional(
          Schema.Struct({
            serviceRuntimeSubnetId: Schema.optional(Schema.String),
            appSubnetId: Schema.optional(Schema.String),
            serviceCidr: Schema.optional(Schema.String),
            serviceRuntimeNetworkResourceGroup: Schema.optional(Schema.String),
            appNetworkResourceGroup: Schema.optional(Schema.String),
            outboundIPs: Schema.optional(
              Schema.Struct({
                publicIPs: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            requiredTraffics: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  protocol: Schema.optional(Schema.String),
                  port: Schema.optional(Schema.Number),
                  ips: Schema.optional(Schema.Array(Schema.String)),
                  fqdns: Schema.optional(Schema.Array(Schema.String)),
                  direction: Schema.optional(
                    Schema.Literals(["Inbound", "Outbound"]),
                  ),
                }),
              ),
            ),
            ingressConfig: Schema.optional(
              Schema.Struct({
                readTimeoutInSeconds: Schema.optional(Schema.Number),
              }),
            ),
            outboundType: Schema.optional(Schema.String),
          }),
        ),
        vnetAddons: Schema.optional(
          Schema.Struct({
            logStreamPublicEndpoint: Schema.optional(Schema.Boolean),
            dataPlanePublicEndpoint: Schema.optional(Schema.Boolean),
          }),
        ),
        version: Schema.optional(Schema.Number),
        serviceId: Schema.optional(Schema.String),
        powerState: Schema.optional(Schema.Literals(["Running", "Stopped"])),
        zoneRedundant: Schema.optional(Schema.Boolean),
        fqdn: Schema.optional(Schema.String),
        marketplaceResource: Schema.optional(
          Schema.Struct({
            plan: Schema.optional(Schema.String),
            publisher: Schema.optional(Schema.String),
            product: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServicesCreateOrUpdateInput>;

// Output Schema
export interface ServicesCreateOrUpdateOutput {
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
export const ServicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ServicesCreateOrUpdateOutput>;

// The operation
/**
 * Create a new Service or update an exiting Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesCreateOrUpdateInput,
    outputSchema: ServicesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ServicesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ServicesDeleteInput>;

// Output Schema
export type ServicesDeleteOutput = void;
export const ServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesDeleteOutput>;

// The operation
/**
 * Operation to delete a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesDeleteInput,
  outputSchema: ServicesDeleteOutput,
}));
// Input Schema
export interface ServicesDisableApmGloballyInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  resourceId: string;
}
export const ServicesDisableApmGloballyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    resourceId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/disableApmGlobally",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServicesDisableApmGloballyInput>;

// Output Schema
export type ServicesDisableApmGloballyOutput = void;
export const ServicesDisableApmGloballyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesDisableApmGloballyOutput>;

// The operation
/**
 * Disable an APM globally.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesDisableApmGlobally = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesDisableApmGloballyInput,
    outputSchema: ServicesDisableApmGloballyOutput,
  }),
);
// Input Schema
export interface ServicesDisableTestEndpointInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ServicesDisableTestEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/disableTestEndpoint",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServicesDisableTestEndpointInput>;

// Output Schema
export type ServicesDisableTestEndpointOutput = void;
export const ServicesDisableTestEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesDisableTestEndpointOutput>;

// The operation
/**
 * Disable test endpoint functionality for a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesDisableTestEndpoint = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesDisableTestEndpointInput,
    outputSchema: ServicesDisableTestEndpointOutput,
  }),
);
// Input Schema
export interface ServicesEnableApmGloballyInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  resourceId: string;
}
export const ServicesEnableApmGloballyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    resourceId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/enableApmGlobally",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServicesEnableApmGloballyInput>;

// Output Schema
export type ServicesEnableApmGloballyOutput = void;
export const ServicesEnableApmGloballyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesEnableApmGloballyOutput>;

// The operation
/**
 * Enable an APM globally.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesEnableApmGlobally = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesEnableApmGloballyInput,
    outputSchema: ServicesEnableApmGloballyOutput,
  }),
);
// Input Schema
export interface ServicesEnableTestEndpointInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ServicesEnableTestEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/enableTestEndpoint",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServicesEnableTestEndpointInput>;

// Output Schema
export interface ServicesEnableTestEndpointOutput {
  primaryKey?: string;
  secondaryKey?: string;
  primaryTestEndpoint?: string;
  secondaryTestEndpoint?: string;
  enabled?: boolean;
}
export const ServicesEnableTestEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    primaryTestEndpoint: Schema.optional(Schema.String),
    secondaryTestEndpoint: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<ServicesEnableTestEndpointOutput>;

// The operation
/**
 * Enable test endpoint functionality for a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesEnableTestEndpoint = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesEnableTestEndpointInput,
    outputSchema: ServicesEnableTestEndpointOutput,
  }),
);
// Input Schema
export interface ServicesFlushVnetDnsSettingInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ServicesFlushVnetDnsSettingInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/flushVirtualNetworkDnsSettings",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServicesFlushVnetDnsSettingInput>;

// Output Schema
export type ServicesFlushVnetDnsSettingOutput = void;
export const ServicesFlushVnetDnsSettingOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesFlushVnetDnsSettingOutput>;

// The operation
/**
 * Flush Virtual Network DNS settings for a VNET injected Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesFlushVnetDnsSetting = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesFlushVnetDnsSettingInput,
    outputSchema: ServicesFlushVnetDnsSettingOutput,
  }),
);
// Input Schema
export interface ServicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ServicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ServicesGetInput>;

// Output Schema
export interface ServicesGetOutput {
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
export const ServicesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServicesGetOutput>;

// The operation
/**
 * Get a Service and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesGetInput,
  outputSchema: ServicesGetOutput,
}));
// Input Schema
export interface ServicesListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ServicesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ServicesListInput>;

// Output Schema
export interface ServicesListOutput {
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
export const ServicesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServicesListOutput>;

// The operation
/**
 * Handles requests to list all resources in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 */
export const ServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesListInput,
  outputSchema: ServicesListOutput,
}));
// Input Schema
export interface ServicesListBySubscriptionInput {
  subscriptionId: string;
}
export const ServicesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AppPlatform/Spring",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServicesListBySubscriptionInput>;

// Output Schema
export interface ServicesListBySubscriptionOutput {
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
export const ServicesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ServicesListBySubscriptionOutput>;

// The operation
/**
 * Handles requests to list all resources in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServicesListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesListBySubscriptionInput,
    outputSchema: ServicesListBySubscriptionOutput,
  }),
);
// Input Schema
export interface ServicesListGloballyEnabledApmsInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ServicesListGloballyEnabledApmsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/listGloballyEnabledApms",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServicesListGloballyEnabledApmsInput>;

// Output Schema
export interface ServicesListGloballyEnabledApmsOutput {
  value?: string[];
}
export const ServicesListGloballyEnabledApmsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<ServicesListGloballyEnabledApmsOutput>;

// The operation
/**
 * List globally enabled APMs for a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesListGloballyEnabledApms =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServicesListGloballyEnabledApmsInput,
    outputSchema: ServicesListGloballyEnabledApmsOutput,
  }));
// Input Schema
export interface ServicesListSupportedApmTypesInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ServicesListSupportedApmTypesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/supportedApmTypes",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServicesListSupportedApmTypesInput>;

// Output Schema
export interface ServicesListSupportedApmTypesOutput {
  value?: { name?: string }[];
  nextLink?: string;
}
export const ServicesListSupportedApmTypesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesListSupportedApmTypesOutput>;

// The operation
/**
 * List supported APM types for a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesListSupportedApmTypes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServicesListSupportedApmTypesInput,
    outputSchema: ServicesListSupportedApmTypesOutput,
  }));
// Input Schema
export interface ServicesListSupportedServerVersionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ServicesListSupportedServerVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/supportedServerVersions",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServicesListSupportedServerVersionsInput>;

// Output Schema
export interface ServicesListSupportedServerVersionsOutput {
  value?: { value?: string; server?: string; version?: string }[];
  nextLink?: string;
}
export const ServicesListSupportedServerVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          value: Schema.optional(Schema.String),
          server: Schema.optional(Schema.String),
          version: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesListSupportedServerVersionsOutput>;

// The operation
/**
 * Lists all of the available server versions supported by Microsoft.AppPlatform provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesListSupportedServerVersions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServicesListSupportedServerVersionsInput,
    outputSchema: ServicesListSupportedServerVersionsOutput,
  }));
// Input Schema
export interface ServicesListTestKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ServicesListTestKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/listTestKeys",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServicesListTestKeysInput>;

// Output Schema
export interface ServicesListTestKeysOutput {
  primaryKey?: string;
  secondaryKey?: string;
  primaryTestEndpoint?: string;
  secondaryTestEndpoint?: string;
  enabled?: boolean;
}
export const ServicesListTestKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    primaryTestEndpoint: Schema.optional(Schema.String),
    secondaryTestEndpoint: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<ServicesListTestKeysOutput>;

// The operation
/**
 * List test keys for a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesListTestKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesListTestKeysInput,
    outputSchema: ServicesListTestKeysOutput,
  }),
);
// Input Schema
export interface ServicesRegenerateTestKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  keyType: "Primary" | "Secondary";
}
export const ServicesRegenerateTestKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    keyType: Schema.Literals(["Primary", "Secondary"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/regenerateTestKey",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ServicesRegenerateTestKeyInput>;

// Output Schema
export interface ServicesRegenerateTestKeyOutput {
  primaryKey?: string;
  secondaryKey?: string;
  primaryTestEndpoint?: string;
  secondaryTestEndpoint?: string;
  enabled?: boolean;
}
export const ServicesRegenerateTestKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    primaryTestEndpoint: Schema.optional(Schema.String),
    secondaryTestEndpoint: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<ServicesRegenerateTestKeyOutput>;

// The operation
/**
 * Regenerate a test key for a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesRegenerateTestKey = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesRegenerateTestKeyInput,
    outputSchema: ServicesRegenerateTestKeyOutput,
  }),
);
// Input Schema
export interface ServicesStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ServicesStartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/start",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ServicesStartInput>;

// Output Schema
export type ServicesStartOutput = void;
export const ServicesStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesStartOutput>;

// The operation
/**
 * Start a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesStartInput,
  outputSchema: ServicesStartOutput,
}));
// Input Schema
export interface ServicesStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const ServicesStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/stop",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ServicesStopInput>;

// Output Schema
export type ServicesStopOutput = void;
export const ServicesStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesStopOutput>;

// The operation
/**
 * Stop a Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesStopInput,
  outputSchema: ServicesStopOutput,
}));
// Input Schema
export interface ServicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Starting"
      | "Stopping"
      | "Deleting"
      | "Deleted"
      | "Succeeded"
      | "Failed"
      | "Moving"
      | "Moved"
      | "MoveFailed";
    networkProfile?: {
      serviceRuntimeSubnetId?: string;
      appSubnetId?: string;
      serviceCidr?: string;
      serviceRuntimeNetworkResourceGroup?: string;
      appNetworkResourceGroup?: string;
      outboundIPs?: { publicIPs?: string[] };
      requiredTraffics?: {
        protocol?: string;
        port?: number;
        ips?: string[];
        fqdns?: string[];
        direction?: "Inbound" | "Outbound";
      }[];
      ingressConfig?: { readTimeoutInSeconds?: number };
      outboundType?: string;
    };
    vnetAddons?: {
      logStreamPublicEndpoint?: boolean;
      dataPlanePublicEndpoint?: boolean;
    };
    version?: number;
    serviceId?: string;
    powerState?: "Running" | "Stopped";
    zoneRedundant?: boolean;
    fqdn?: string;
    marketplaceResource?: {
      plan?: string;
      publisher?: string;
      product?: string;
    };
  };
  sku?: { name?: string; tier?: string; capacity?: number };
  location?: string;
  tags?: Record<string, string>;
}
export const ServicesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Creating",
          "Updating",
          "Starting",
          "Stopping",
          "Deleting",
          "Deleted",
          "Succeeded",
          "Failed",
          "Moving",
          "Moved",
          "MoveFailed",
        ]),
      ),
      networkProfile: Schema.optional(
        Schema.Struct({
          serviceRuntimeSubnetId: Schema.optional(Schema.String),
          appSubnetId: Schema.optional(Schema.String),
          serviceCidr: Schema.optional(Schema.String),
          serviceRuntimeNetworkResourceGroup: Schema.optional(Schema.String),
          appNetworkResourceGroup: Schema.optional(Schema.String),
          outboundIPs: Schema.optional(
            Schema.Struct({
              publicIPs: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
          requiredTraffics: Schema.optional(
            Schema.Array(
              Schema.Struct({
                protocol: Schema.optional(Schema.String),
                port: Schema.optional(Schema.Number),
                ips: Schema.optional(Schema.Array(Schema.String)),
                fqdns: Schema.optional(Schema.Array(Schema.String)),
                direction: Schema.optional(
                  Schema.Literals(["Inbound", "Outbound"]),
                ),
              }),
            ),
          ),
          ingressConfig: Schema.optional(
            Schema.Struct({
              readTimeoutInSeconds: Schema.optional(Schema.Number),
            }),
          ),
          outboundType: Schema.optional(Schema.String),
        }),
      ),
      vnetAddons: Schema.optional(
        Schema.Struct({
          logStreamPublicEndpoint: Schema.optional(Schema.Boolean),
          dataPlanePublicEndpoint: Schema.optional(Schema.Boolean),
        }),
      ),
      version: Schema.optional(Schema.Number),
      serviceId: Schema.optional(Schema.String),
      powerState: Schema.optional(Schema.Literals(["Running", "Stopped"])),
      zoneRedundant: Schema.optional(Schema.Boolean),
      fqdn: Schema.optional(Schema.String),
      marketplaceResource: Schema.optional(
        Schema.Struct({
          plan: Schema.optional(Schema.String),
          publisher: Schema.optional(Schema.String),
          product: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      tier: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ServicesUpdateInput>;

// Output Schema
export interface ServicesUpdateOutput {
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
export const ServicesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServicesUpdateOutput>;

// The operation
/**
 * Operation to update an exiting Service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const ServicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesUpdateInput,
  outputSchema: ServicesUpdateOutput,
}));
// Input Schema
export interface SkusListInput {
  subscriptionId: string;
}
export const SkusListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.AppPlatform/skus",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<SkusListInput>;

// Output Schema
export interface SkusListOutput {
  value?: {
    resourceType?: string;
    name?: string;
    tier?: string;
    capacity?: {
      minimum: number;
      maximum?: number;
      default?: number;
      scaleType?: "None" | "Manual" | "Automatic";
    };
    locations?: string[];
    locationInfo?: {
      location?: string;
      zones?: string[];
      zoneDetails?: {
        name?: string[];
        capabilities?: { name?: string; value?: string }[];
      }[];
    }[];
    restrictions?: {
      type?: "Location" | "Zone";
      values?: string[];
      restrictionInfo?: { locations?: string[]; zones?: string[] };
      reasonCode?: "QuotaId" | "NotAvailableForSubscription";
    }[];
  }[];
  nextLink?: string;
}
export const SkusListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        resourceType: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.optional(
          Schema.Struct({
            minimum: Schema.Number,
            maximum: Schema.optional(Schema.Number),
            default: Schema.optional(Schema.Number),
            scaleType: Schema.optional(
              Schema.Literals(["None", "Manual", "Automatic"]),
            ),
          }),
        ),
        locations: Schema.optional(Schema.Array(Schema.String)),
        locationInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              location: Schema.optional(Schema.String),
              zones: Schema.optional(Schema.Array(Schema.String)),
              zoneDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.Array(Schema.String)),
                    capabilities: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          value: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
            }),
          ),
        ),
        restrictions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.Literals(["Location", "Zone"])),
              values: Schema.optional(Schema.Array(Schema.String)),
              restrictionInfo: Schema.optional(
                Schema.Struct({
                  locations: Schema.optional(Schema.Array(Schema.String)),
                  zones: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
              reasonCode: Schema.optional(
                Schema.Literals(["QuotaId", "NotAvailableForSubscription"]),
              ),
            }),
          ),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SkusListOutput>;

// The operation
/**
 * Lists all of the available skus of the Microsoft.AppPlatform provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const SkusList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkusListInput,
  outputSchema: SkusListOutput,
}));
// Input Schema
export interface StoragesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  storageName: string;
  properties?: { storageType: "StorageAccount" };
}
export const StoragesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    storageName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        storageType: Schema.Literals(["StorageAccount"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/storages/{storageName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<StoragesCreateOrUpdateInput>;

// Output Schema
export interface StoragesCreateOrUpdateOutput {
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
export const StoragesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<StoragesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update storage resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param storageName - The name of the storage resource.
 */
export const StoragesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StoragesCreateOrUpdateInput,
    outputSchema: StoragesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface StoragesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  storageName: string;
}
export const StoragesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  storageName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/storages/{storageName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<StoragesDeleteInput>;

// Output Schema
export type StoragesDeleteOutput = void;
export const StoragesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<StoragesDeleteOutput>;

// The operation
/**
 * Delete the storage resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param storageName - The name of the storage resource.
 */
export const StoragesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StoragesDeleteInput,
  outputSchema: StoragesDeleteOutput,
}));
// Input Schema
export interface StoragesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
  storageName: string;
}
export const StoragesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  storageName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/storages/{storageName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<StoragesGetInput>;

// Output Schema
export interface StoragesGetOutput {
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
export const StoragesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<StoragesGetOutput>;

// The operation
/**
 * Get the storage resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 * @param storageName - The name of the storage resource.
 */
export const StoragesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StoragesGetInput,
  outputSchema: StoragesGetOutput,
}));
// Input Schema
export interface StoragesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serviceName: string;
}
export const StoragesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/storages",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<StoragesListInput>;

// Output Schema
export interface StoragesListOutput {
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
export const StoragesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<StoragesListOutput>;

// The operation
/**
 * List all the storages of one Azure Spring Apps resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param serviceName - The name of the Service resource.
 */
export const StoragesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StoragesListInput,
  outputSchema: StoragesListOutput,
}));
