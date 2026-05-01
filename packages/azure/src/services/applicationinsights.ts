/**
 * Azure Applicationinsights API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const WorkbooksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    sourceId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}",
    }),
  );
export type WorkbooksCreateOrUpdateInput =
  typeof WorkbooksCreateOrUpdateInput.Type;

// Output Schema
export const WorkbooksCreateOrUpdateOutput =
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
export type WorkbooksCreateOrUpdateOutput =
  typeof WorkbooksCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new workbook.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the workbook resource. The value must be an UUID.
 * @param sourceId - Azure Resource Id that will fetch all linked workbooks.
 */
export const WorkbooksCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkbooksCreateOrUpdateInput,
    outputSchema: WorkbooksCreateOrUpdateOutput,
  }),
);
// Input Schema
export const WorkbooksDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}",
  }),
);
export type WorkbooksDeleteInput = typeof WorkbooksDeleteInput.Type;

// Output Schema
export const WorkbooksDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WorkbooksDeleteOutput = typeof WorkbooksDeleteOutput.Type;

// The operation
/**
 * Delete a workbook.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the workbook resource. The value must be an UUID.
 */
export const WorkbooksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkbooksDeleteInput,
  outputSchema: WorkbooksDeleteOutput,
}));
// Input Schema
export const WorkbooksGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
  canFetchContent: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}",
  }),
);
export type WorkbooksGetInput = typeof WorkbooksGetInput.Type;

// Output Schema
export const WorkbooksGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type WorkbooksGetOutput = typeof WorkbooksGetOutput.Type;

// The operation
/**
 * Get a single workbook by its resourceName.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the workbook resource. The value must be an UUID.
 * @param canFetchContent - Flag indicating whether or not to return the full content for each applicable workbook. If false, only return summary content for workbooks.
 */
export const WorkbooksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkbooksGetInput,
  outputSchema: WorkbooksGetOutput,
}));
// Input Schema
export const WorkbooksListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    category: Schema.Literals(["workbook", "TSG", "performance", "retention"]),
    tags: Schema.optional(Schema.String),
    sourceId: Schema.optional(Schema.String),
    canFetchContent: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks",
    }),
  );
export type WorkbooksListByResourceGroupInput =
  typeof WorkbooksListByResourceGroupInput.Type;

// Output Schema
export const WorkbooksListByResourceGroupOutput =
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
  });
export type WorkbooksListByResourceGroupOutput =
  typeof WorkbooksListByResourceGroupOutput.Type;

// The operation
/**
 * Get all Workbooks defined within a specified resource group and category.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param category - Category of workbook to return.
 * @param tags - Tags presents on each workbook returned.
 * @param sourceId - Azure Resource Id that will fetch all linked workbooks.
 * @param canFetchContent - Flag indicating whether or not to return the full content for each applicable workbook. If false, only return summary content for workbooks.
 */
export const WorkbooksListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkbooksListByResourceGroupInput,
    outputSchema: WorkbooksListByResourceGroupOutput,
  }));
// Input Schema
export const WorkbooksListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    category: Schema.Literals(["workbook", "TSG", "performance", "retention"]),
    tags: Schema.optional(Schema.String),
    canFetchContent: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/workbooks",
    }),
  );
export type WorkbooksListBySubscriptionInput =
  typeof WorkbooksListBySubscriptionInput.Type;

// Output Schema
export const WorkbooksListBySubscriptionOutput =
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
  });
export type WorkbooksListBySubscriptionOutput =
  typeof WorkbooksListBySubscriptionOutput.Type;

// The operation
/**
 * Get all Workbooks defined within a specified subscription and category.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param category - Category of workbook to return.
 * @param tags - Tags presents on each workbook returned.
 * @param canFetchContent - Flag indicating whether or not to return the full content for each applicable workbook. If false, only return summary content for workbooks.
 */
export const WorkbooksListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkbooksListBySubscriptionInput,
    outputSchema: WorkbooksListBySubscriptionOutput,
  }),
);
// Input Schema
export const WorkbooksRevisionGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    revisionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}/revisions/{revisionId}",
    }),
  );
export type WorkbooksRevisionGetInput = typeof WorkbooksRevisionGetInput.Type;

// Output Schema
export const WorkbooksRevisionGetOutput =
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
export type WorkbooksRevisionGetOutput = typeof WorkbooksRevisionGetOutput.Type;

// The operation
/**
 * Get a single workbook revision defined by its revisionId.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the workbook resource. The value must be an UUID.
 * @param revisionId - The id of the workbook's revision.
 */
export const WorkbooksRevisionGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkbooksRevisionGetInput,
    outputSchema: WorkbooksRevisionGetOutput,
  }),
);
// Input Schema
export const WorkbooksRevisionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}/revisions",
    }),
  );
export type WorkbooksRevisionsListInput =
  typeof WorkbooksRevisionsListInput.Type;

// Output Schema
export const WorkbooksRevisionsListOutput =
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
  });
export type WorkbooksRevisionsListOutput =
  typeof WorkbooksRevisionsListOutput.Type;

// The operation
/**
 * Get the revisions for the workbook defined by its resourceName.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the workbook resource. The value must be an UUID.
 */
export const WorkbooksRevisionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkbooksRevisionsListInput,
    outputSchema: WorkbooksRevisionsListOutput,
  }),
);
// Input Schema
export const WorkbooksUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
  sourceId: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}",
  }),
);
export type WorkbooksUpdateInput = typeof WorkbooksUpdateInput.Type;

// Output Schema
export const WorkbooksUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type WorkbooksUpdateOutput = typeof WorkbooksUpdateOutput.Type;

// The operation
/**
 * Updates a workbook that has already been added.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the workbook resource. The value must be an UUID.
 * @param sourceId - Azure Resource Id that will fetch all linked workbooks.
 */
export const WorkbooksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkbooksUpdateInput,
  outputSchema: WorkbooksUpdateOutput,
}));
