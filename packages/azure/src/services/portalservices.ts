/**
 * Azure Portalservices API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CopilotSettingsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.PortalServices/copilotSettings/default",
    }),
  );
export type CopilotSettingsCreateOrUpdateInput =
  typeof CopilotSettingsCreateOrUpdateInput.Type;

// Output Schema
export const CopilotSettingsCreateOrUpdateOutput =
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
export type CopilotSettingsCreateOrUpdateOutput =
  typeof CopilotSettingsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a CopilotSettingsResource
 *
 * @param api-version - The API version to use for this operation.
 */
export const CopilotSettingsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CopilotSettingsCreateOrUpdateInput,
    outputSchema: CopilotSettingsCreateOrUpdateOutput,
  }));
// Input Schema
export const CopilotSettingsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.PortalServices/copilotSettings/default",
    }),
  );
export type CopilotSettingsDeleteInput = typeof CopilotSettingsDeleteInput.Type;

// Output Schema
export const CopilotSettingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CopilotSettingsDeleteOutput =
  typeof CopilotSettingsDeleteOutput.Type;

// The operation
/**
 * Delete a CopilotSettingsResource
 *
 * @param api-version - The API version to use for this operation.
 */
export const CopilotSettingsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CopilotSettingsDeleteInput,
    outputSchema: CopilotSettingsDeleteOutput,
  }),
);
// Input Schema
export const CopilotSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.PortalServices/copilotSettings/default",
    }),
  );
export type CopilotSettingsGetInput = typeof CopilotSettingsGetInput.Type;

// Output Schema
export const CopilotSettingsGetOutput =
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
export type CopilotSettingsGetOutput = typeof CopilotSettingsGetOutput.Type;

// The operation
/**
 * Get a CopilotSettingsResource
 *
 * @param api-version - The API version to use for this operation.
 */
export const CopilotSettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CopilotSettingsGetInput,
  outputSchema: CopilotSettingsGetOutput,
}));
// Input Schema
export const CopilotSettingsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.PortalServices/copilotSettings/default",
    }),
  );
export type CopilotSettingsUpdateInput = typeof CopilotSettingsUpdateInput.Type;

// Output Schema
export const CopilotSettingsUpdateOutput =
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
export type CopilotSettingsUpdateOutput =
  typeof CopilotSettingsUpdateOutput.Type;

// The operation
/**
 * Update a CopilotSettingsResource
 *
 * @param api-version - The API version to use for this operation.
 */
export const CopilotSettingsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CopilotSettingsUpdateInput,
    outputSchema: CopilotSettingsUpdateOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.PortalServices/operations",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
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
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

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
