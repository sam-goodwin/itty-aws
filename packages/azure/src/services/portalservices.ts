/**
 * Azure Portalservices API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CopilotSettingsCreateOrUpdateInput {
  properties?: {
    accessControlEnabled: boolean;
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
  };
}
export const CopilotSettingsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        accessControlEnabled: Schema.Boolean,
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.PortalServices/copilotSettings/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CopilotSettingsCreateOrUpdateInput>;

// Output Schema
export interface CopilotSettingsCreateOrUpdateOutput {
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
export const CopilotSettingsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CopilotSettingsCreateOrUpdateOutput>;

// The operation
/**
 * Create a CopilotSettingsResource
 *
 * @param api-version - The API version to use for this operation.
 */
export const CopilotSettingsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CopilotSettingsCreateOrUpdateInput,
    outputSchema: CopilotSettingsCreateOrUpdateOutput,
  }));
// Input Schema
export interface CopilotSettingsDeleteInput {}
export const CopilotSettingsDeleteInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.PortalServices/copilotSettings/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CopilotSettingsDeleteInput>;

// Output Schema
export type CopilotSettingsDeleteOutput = void;
export const CopilotSettingsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CopilotSettingsDeleteOutput>;

// The operation
/**
 * Delete a CopilotSettingsResource
 *
 * @param api-version - The API version to use for this operation.
 */
export const CopilotSettingsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CopilotSettingsDeleteInput,
  outputSchema: CopilotSettingsDeleteOutput,
}));
// Input Schema
export interface CopilotSettingsGetInput {}
export const CopilotSettingsGetInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.PortalServices/copilotSettings/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CopilotSettingsGetInput>;

// Output Schema
export interface CopilotSettingsGetOutput {
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
export const CopilotSettingsGetOutput =
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
  }) as unknown as Schema.Codec<CopilotSettingsGetOutput>;

// The operation
/**
 * Get a CopilotSettingsResource
 *
 * @param api-version - The API version to use for this operation.
 */
export const CopilotSettingsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CopilotSettingsGetInput,
  outputSchema: CopilotSettingsGetOutput,
}));
// Input Schema
export interface CopilotSettingsUpdateInput {
  properties?: { accessControlEnabled?: boolean };
}
export const CopilotSettingsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        accessControlEnabled: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.PortalServices/copilotSettings/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CopilotSettingsUpdateInput>;

// Output Schema
export interface CopilotSettingsUpdateOutput {
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
export const CopilotSettingsUpdateOutput =
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
  }) as unknown as Schema.Codec<CopilotSettingsUpdateOutput>;

// The operation
/**
 * Update a CopilotSettingsResource
 *
 * @param api-version - The API version to use for this operation.
 */
export const CopilotSettingsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CopilotSettingsUpdateInput,
  outputSchema: CopilotSettingsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.PortalServices/operations",
    apiVersion: "2024-04-01",
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
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
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
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PortalTenantCompilefileInput {
  contents: Record<string, unknown>;
  stringSource?: Record<string, unknown>;
  files?: Record<string, unknown>;
}
export const PortalTenantCompilefileInput =
  /*@__PURE__*/ Schema.Struct({
    contents: Schema.Record(Schema.String, Schema.Unknown),
    stringSource: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    files: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.PortalServices/compilefile",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<PortalTenantCompilefileInput>;

// Output Schema
export type PortalTenantCompilefileOutput = Record<string, unknown>;
export const PortalTenantCompilefileOutput =
  /*@__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Unknown,
  ) as unknown as Schema.Codec<PortalTenantCompilefileOutput>;

// The operation
/**
 * Compiles a file using inline content.
 *
 * @param api-version - The API version to use for this operation.
 */
export const PortalTenantCompilefile = /*@__PURE__*/ API.make(() => ({
  inputSchema: PortalTenantCompilefileInput,
  outputSchema: PortalTenantCompilefileOutput,
}));
