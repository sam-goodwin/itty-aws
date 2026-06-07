/**
 * Azure Resourcegraph API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GraphQueryCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        timeModified: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        query: Schema.String,
        resultKind: Schema.optional(Schema.Literals(["basic"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName}",
      apiVersion: "2024-04-01",
    }),
  );
export type GraphQueryCreateOrUpdateInput =
  typeof GraphQueryCreateOrUpdateInput.Type;

// Output Schema
export const GraphQueryCreateOrUpdateOutput =
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
export type GraphQueryCreateOrUpdateOutput =
  typeof GraphQueryCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new graph query.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Graph Query resource.
 */
export const GraphQueryCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GraphQueryCreateOrUpdateInput,
    outputSchema: GraphQueryCreateOrUpdateOutput,
  }),
);
// Input Schema
export const GraphQueryDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName}",
    apiVersion: "2024-04-01",
  }),
);
export type GraphQueryDeleteInput = typeof GraphQueryDeleteInput.Type;

// Output Schema
export const GraphQueryDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GraphQueryDeleteOutput = typeof GraphQueryDeleteOutput.Type;

// The operation
/**
 * Delete a graph query.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Graph Query resource.
 */
export const GraphQueryDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GraphQueryDeleteInput,
  outputSchema: GraphQueryDeleteOutput,
}));
// Input Schema
export const GraphQueryGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName}",
    apiVersion: "2024-04-01",
  }),
);
export type GraphQueryGetInput = typeof GraphQueryGetInput.Type;

// Output Schema
export const GraphQueryGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GraphQueryGetOutput = typeof GraphQueryGetOutput.Type;

// The operation
/**
 * Get a single graph query by its resourceName.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Graph Query resource.
 */
export const GraphQueryGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GraphQueryGetInput,
  outputSchema: GraphQueryGetOutput,
}));
// Input Schema
export const GraphQueryListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries",
    apiVersion: "2024-04-01",
  }),
);
export type GraphQueryListInput = typeof GraphQueryListInput.Type;

// Output Schema
export const GraphQueryListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type GraphQueryListOutput = typeof GraphQueryListOutput.Type;

// The operation
/**
 * Get all graph queries defined within a specified subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const GraphQueryList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GraphQueryListInput,
  outputSchema: GraphQueryListOutput,
}));
// Input Schema
export const GraphQueryListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceGraph/queries",
      apiVersion: "2024-04-01",
    }),
  );
export type GraphQueryListBySubscriptionInput =
  typeof GraphQueryListBySubscriptionInput.Type;

// Output Schema
export const GraphQueryListBySubscriptionOutput =
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
  });
export type GraphQueryListBySubscriptionOutput =
  typeof GraphQueryListBySubscriptionOutput.Type;

// The operation
/**
 * Get all graph queries defined within a specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const GraphQueryListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GraphQueryListBySubscriptionInput,
    outputSchema: GraphQueryListBySubscriptionOutput,
  }));
// Input Schema
export const GraphQueryUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      description: Schema.optional(Schema.String),
      query: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName}",
    apiVersion: "2024-04-01",
  }),
);
export type GraphQueryUpdateInput = typeof GraphQueryUpdateInput.Type;

// Output Schema
export const GraphQueryUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
);
export type GraphQueryUpdateOutput = typeof GraphQueryUpdateOutput.Type;

// The operation
/**
 * Updates a graph query that has already been added.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Graph Query resource.
 */
export const GraphQueryUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GraphQueryUpdateInput,
  outputSchema: GraphQueryUpdateOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ResourceGraph/operations",
    apiVersion: "2024-04-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
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
      origin: Schema.optional(Schema.String),
    }),
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
// Input Schema
export const ResourcesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptions: Schema.optional(Schema.Array(Schema.String)),
  managementGroups: Schema.optional(Schema.Array(Schema.String)),
  query: Schema.String,
  options: Schema.optional(
    Schema.Struct({
      $skipToken: Schema.optional(Schema.String),
      $top: Schema.optional(Schema.Number),
      $skip: Schema.optional(Schema.Number),
      resultFormat: Schema.optional(Schema.Literals(["table", "objectArray"])),
      allowPartialScopes: Schema.optional(Schema.Boolean),
      authorizationScopeFilter: Schema.optional(
        Schema.Literals([
          "AtScopeAndBelow",
          "AtScopeAndAbove",
          "AtScopeExact",
          "AtScopeAboveAndBelow",
        ]),
      ),
    }),
  ),
  facets: Schema.optional(
    Schema.Array(
      Schema.Struct({
        expression: Schema.String,
        options: Schema.optional(
          Schema.Struct({
            sortBy: Schema.optional(Schema.String),
            sortOrder: Schema.optional(Schema.Literals(["asc", "desc"])),
            filter: Schema.optional(Schema.String),
            $top: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.ResourceGraph/resources",
    apiVersion: "2024-04-01",
  }),
);
export type ResourcesInput = typeof ResourcesInput.Type;

// Output Schema
export const ResourcesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  totalRecords: Schema.Number,
  count: Schema.Number,
  resultTruncated: Schema.Literals(["true", "false"]),
  $skipToken: Schema.optional(Schema.String),
  data: Schema.Unknown,
  facets: Schema.optional(
    Schema.Array(
      Schema.Struct({
        expression: Schema.String,
        resultType: Schema.String,
      }),
    ),
  ),
});
export type ResourcesOutput = typeof ResourcesOutput.Type;

// The operation
/**
 * Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 *
 * @param api-version - The API version to use for this operation.
 */
export const Resources = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ResourcesInput,
  outputSchema: ResourcesOutput,
}));
