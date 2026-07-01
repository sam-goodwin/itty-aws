/**
 * Azure Resourcemover API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface MoveCollectionsBulkRemoveInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
  validateOnly?: boolean;
  moveResources?: string[];
  moveResourceInputType?: "MoveResourceId" | "MoveResourceSourceId";
}
export const MoveCollectionsBulkRemoveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    moveCollectionName: Schema.String.pipe(T.PathParam()),
    validateOnly: Schema.optional(Schema.Boolean),
    moveResources: Schema.optional(Schema.Array(Schema.String)),
    moveResourceInputType: Schema.optional(
      Schema.Literals(["MoveResourceId", "MoveResourceSourceId"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}/bulkRemove",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<MoveCollectionsBulkRemoveInput>;

// Output Schema
export interface MoveCollectionsBulkRemoveOutput {
  id?: string;
  name?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  error?: {
    code?: string;
    message?: string;
    details?: unknown[];
    additionalInfo?: {
      type?: string;
      info?: {
        moveResources?: {
          id?: string;
          sourceId?: string;
          moveResources?: unknown[];
        }[];
      };
    }[];
  };
  properties?: {};
}
export const MoveCollectionsBulkRemoveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        details: Schema.optional(Schema.Array(Schema.Unknown)),
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(
                Schema.Struct({
                  moveResources: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                        sourceId: Schema.optional(Schema.String),
                        moveResources: Schema.optional(
                          Schema.Array(Schema.Unknown),
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
    properties: Schema.optional(Schema.Struct({})),
  }) as unknown as Schema.Codec<MoveCollectionsBulkRemoveOutput>;

// The operation
/**
 * Removes the set of move resources included in the request body from move collection. The orchestration is done by service. To aid the user to prerequisite the operation the client can call operation with validateOnly property set to true.
 *
 * @param subscriptionId - The Subscription ID.
 * @param api-version - Client Api Version.
 */
export const MoveCollectionsBulkRemove = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MoveCollectionsBulkRemoveInput,
    outputSchema: MoveCollectionsBulkRemoveOutput,
  }),
);
// Input Schema
export interface MoveCollectionsCommitInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
  validateOnly?: boolean;
  moveResources: string[];
  moveResourceInputType?: "MoveResourceId" | "MoveResourceSourceId";
}
export const MoveCollectionsCommitInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    moveCollectionName: Schema.String.pipe(T.PathParam()),
    validateOnly: Schema.optional(Schema.Boolean),
    moveResources: Schema.Array(Schema.String),
    moveResourceInputType: Schema.optional(
      Schema.Literals(["MoveResourceId", "MoveResourceSourceId"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}/commit",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<MoveCollectionsCommitInput>;

// Output Schema
export interface MoveCollectionsCommitOutput {
  id?: string;
  name?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  error?: {
    code?: string;
    message?: string;
    details?: unknown[];
    additionalInfo?: {
      type?: string;
      info?: {
        moveResources?: {
          id?: string;
          sourceId?: string;
          moveResources?: unknown[];
        }[];
      };
    }[];
  };
  properties?: {};
}
export const MoveCollectionsCommitOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        details: Schema.optional(Schema.Array(Schema.Unknown)),
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(
                Schema.Struct({
                  moveResources: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                        sourceId: Schema.optional(Schema.String),
                        moveResources: Schema.optional(
                          Schema.Array(Schema.Unknown),
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
    properties: Schema.optional(Schema.Struct({})),
  }) as unknown as Schema.Codec<MoveCollectionsCommitOutput>;

// The operation
/**
 * Commits the set of resources included in the request body. The commit operation is triggered on the moveResources in the moveState 'CommitPending' or 'CommitFailed', on a successful completion the moveResource moveState do a transition to Committed. To aid the user to prerequisite the operation the client can call operation with validateOnly property set to true.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param moveCollectionName - The Move Collection Name.
 * @param api-version - Client Api Version.
 */
export const MoveCollectionsCommit = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MoveCollectionsCommitInput,
    outputSchema: MoveCollectionsCommitOutput,
  }),
);
// Input Schema
export interface MoveCollectionsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
  tags?: Record<string, string>;
  location?: string;
  identity?: {
    type?: "None" | "SystemAssigned" | "UserAssigned";
    principalId?: string;
    tenantId?: string;
  };
  properties?: {
    sourceRegion?: string;
    targetRegion?: string;
    moveRegion?: string;
    provisioningState?: "Succeeded" | "Updating" | "Creating" | "Failed";
    version?: string;
    moveType?: "RegionToRegion" | "RegionToZone";
    errors?: {
      properties?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
      };
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const MoveCollectionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    moveCollectionName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        sourceRegion: Schema.optional(Schema.String),
        targetRegion: Schema.optional(Schema.String),
        moveRegion: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Updating", "Creating", "Failed"]),
        ),
        version: Schema.optional(Schema.String),
        moveType: Schema.optional(
          Schema.Literals(["RegionToRegion", "RegionToZone"]),
        ),
        errors: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          }),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<MoveCollectionsCreateInput>;

// Output Schema
export interface MoveCollectionsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
  tags?: Record<string, string>;
  location?: string;
  identity?: {
    type?: "None" | "SystemAssigned" | "UserAssigned";
    principalId?: string;
    tenantId?: string;
  };
  properties?: {
    sourceRegion?: string;
    targetRegion?: string;
    moveRegion?: string;
    provisioningState?: "Succeeded" | "Updating" | "Creating" | "Failed";
    version?: string;
    moveType?: "RegionToRegion" | "RegionToZone";
    errors?: {
      properties?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
      };
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const MoveCollectionsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        sourceRegion: Schema.optional(Schema.String),
        targetRegion: Schema.optional(Schema.String),
        moveRegion: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Updating", "Creating", "Failed"]),
        ),
        version: Schema.optional(Schema.String),
        moveType: Schema.optional(
          Schema.Literals(["RegionToRegion", "RegionToZone"]),
        ),
        errors: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          }),
        ),
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
  }) as unknown as Schema.Codec<MoveCollectionsCreateOutput>;

// The operation
/**
 * Creates or updates a move collection.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param moveCollectionName - The Move Collection Name.
 * @param api-version - Client Api Version.
 */
export const MoveCollectionsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MoveCollectionsCreateInput,
    outputSchema: MoveCollectionsCreateOutput,
  }),
);
// Input Schema
export interface MoveCollectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
}
export const MoveCollectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    moveCollectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<MoveCollectionsDeleteInput>;

// Output Schema
export interface MoveCollectionsDeleteOutput {
  id?: string;
  name?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  error?: {
    code?: string;
    message?: string;
    details?: unknown[];
    additionalInfo?: {
      type?: string;
      info?: {
        moveResources?: {
          id?: string;
          sourceId?: string;
          moveResources?: unknown[];
        }[];
      };
    }[];
  };
  properties?: {};
}
export const MoveCollectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        details: Schema.optional(Schema.Array(Schema.Unknown)),
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(
                Schema.Struct({
                  moveResources: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                        sourceId: Schema.optional(Schema.String),
                        moveResources: Schema.optional(
                          Schema.Array(Schema.Unknown),
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
    properties: Schema.optional(Schema.Struct({})),
  }) as unknown as Schema.Codec<MoveCollectionsDeleteOutput>;

// The operation
/**
 * Deletes a move collection.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param moveCollectionName - The Move Collection Name.
 * @param api-version - Client Api Version.
 */
export const MoveCollectionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MoveCollectionsDeleteInput,
    outputSchema: MoveCollectionsDeleteOutput,
  }),
);
// Input Schema
export interface MoveCollectionsDiscardInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
  validateOnly?: boolean;
  moveResources: string[];
  moveResourceInputType?: "MoveResourceId" | "MoveResourceSourceId";
}
export const MoveCollectionsDiscardInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    moveCollectionName: Schema.String.pipe(T.PathParam()),
    validateOnly: Schema.optional(Schema.Boolean),
    moveResources: Schema.Array(Schema.String),
    moveResourceInputType: Schema.optional(
      Schema.Literals(["MoveResourceId", "MoveResourceSourceId"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}/discard",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<MoveCollectionsDiscardInput>;

// Output Schema
export interface MoveCollectionsDiscardOutput {
  id?: string;
  name?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  error?: {
    code?: string;
    message?: string;
    details?: unknown[];
    additionalInfo?: {
      type?: string;
      info?: {
        moveResources?: {
          id?: string;
          sourceId?: string;
          moveResources?: unknown[];
        }[];
      };
    }[];
  };
  properties?: {};
}
export const MoveCollectionsDiscardOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        details: Schema.optional(Schema.Array(Schema.Unknown)),
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(
                Schema.Struct({
                  moveResources: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                        sourceId: Schema.optional(Schema.String),
                        moveResources: Schema.optional(
                          Schema.Array(Schema.Unknown),
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
    properties: Schema.optional(Schema.Struct({})),
  }) as unknown as Schema.Codec<MoveCollectionsDiscardOutput>;

// The operation
/**
 * Discards the set of resources included in the request body. The discard operation is triggered on the moveResources in the moveState 'CommitPending' or 'DiscardFailed', on a successful completion the moveResource moveState do a transition to MovePending. To aid the user to prerequisite the operation the client can call operation with validateOnly property set to true.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param moveCollectionName - The Move Collection Name.
 * @param api-version - Client Api Version.
 */
export const MoveCollectionsDiscard = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MoveCollectionsDiscardInput,
    outputSchema: MoveCollectionsDiscardOutput,
  }),
);
// Input Schema
export interface MoveCollectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
}
export const MoveCollectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    moveCollectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<MoveCollectionsGetInput>;

// Output Schema
export interface MoveCollectionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
  tags?: Record<string, string>;
  location?: string;
  identity?: {
    type?: "None" | "SystemAssigned" | "UserAssigned";
    principalId?: string;
    tenantId?: string;
  };
  properties?: {
    sourceRegion?: string;
    targetRegion?: string;
    moveRegion?: string;
    provisioningState?: "Succeeded" | "Updating" | "Creating" | "Failed";
    version?: string;
    moveType?: "RegionToRegion" | "RegionToZone";
    errors?: {
      properties?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
      };
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const MoveCollectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        sourceRegion: Schema.optional(Schema.String),
        targetRegion: Schema.optional(Schema.String),
        moveRegion: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Updating", "Creating", "Failed"]),
        ),
        version: Schema.optional(Schema.String),
        moveType: Schema.optional(
          Schema.Literals(["RegionToRegion", "RegionToZone"]),
        ),
        errors: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          }),
        ),
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
  }) as unknown as Schema.Codec<MoveCollectionsGetOutput>;

// The operation
/**
 * Gets the move collection.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param moveCollectionName - The Move Collection Name.
 * @param api-version - Client Api Version.
 */
export const MoveCollectionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MoveCollectionsGetInput,
  outputSchema: MoveCollectionsGetOutput,
}));
// Input Schema
export interface MoveCollectionsInitiateMoveInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
  validateOnly?: boolean;
  moveResources: string[];
  moveResourceInputType?: "MoveResourceId" | "MoveResourceSourceId";
}
export const MoveCollectionsInitiateMoveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    moveCollectionName: Schema.String.pipe(T.PathParam()),
    validateOnly: Schema.optional(Schema.Boolean),
    moveResources: Schema.Array(Schema.String),
    moveResourceInputType: Schema.optional(
      Schema.Literals(["MoveResourceId", "MoveResourceSourceId"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}/initiateMove",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<MoveCollectionsInitiateMoveInput>;

// Output Schema
export interface MoveCollectionsInitiateMoveOutput {
  id?: string;
  name?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  error?: {
    code?: string;
    message?: string;
    details?: unknown[];
    additionalInfo?: {
      type?: string;
      info?: {
        moveResources?: {
          id?: string;
          sourceId?: string;
          moveResources?: unknown[];
        }[];
      };
    }[];
  };
  properties?: {};
}
export const MoveCollectionsInitiateMoveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        details: Schema.optional(Schema.Array(Schema.Unknown)),
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(
                Schema.Struct({
                  moveResources: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                        sourceId: Schema.optional(Schema.String),
                        moveResources: Schema.optional(
                          Schema.Array(Schema.Unknown),
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
    properties: Schema.optional(Schema.Struct({})),
  }) as unknown as Schema.Codec<MoveCollectionsInitiateMoveOutput>;

// The operation
/**
 * Moves the set of resources included in the request body. The move operation is triggered after the moveResources are in the moveState 'MovePending' or 'MoveFailed', on a successful completion the moveResource moveState do a transition to CommitPending. To aid the user to prerequisite the operation the client can call operation with validateOnly property set to true.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param moveCollectionName - The Move Collection Name.
 * @param api-version - Client Api Version.
 */
export const MoveCollectionsInitiateMove = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MoveCollectionsInitiateMoveInput,
    outputSchema: MoveCollectionsInitiateMoveOutput,
  }),
);
// Input Schema
export interface MoveCollectionsListMoveCollectionsByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const MoveCollectionsListMoveCollectionsByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<MoveCollectionsListMoveCollectionsByResourceGroupInput>;

// Output Schema
export interface MoveCollectionsListMoveCollectionsByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    etag?: string;
    tags?: Record<string, string>;
    location?: string;
    identity?: {
      type?: "None" | "SystemAssigned" | "UserAssigned";
      principalId?: string;
      tenantId?: string;
    };
    properties?: {
      sourceRegion?: string;
      targetRegion?: string;
      moveRegion?: string;
      provisioningState?: "Succeeded" | "Updating" | "Creating" | "Failed";
      version?: string;
      moveType?: "RegionToRegion" | "RegionToZone";
      errors?: {
        properties?: {
          code?: string;
          message?: string;
          target?: string;
          details?: unknown[];
        };
      };
    };
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
export const MoveCollectionsListMoveCollectionsByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          etag: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          location: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
              ),
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
            }),
          ),
          properties: Schema.optional(
            Schema.Struct({
              sourceRegion: Schema.optional(Schema.String),
              targetRegion: Schema.optional(Schema.String),
              moveRegion: Schema.optional(Schema.String),
              provisioningState: Schema.optional(
                Schema.Literals([
                  "Succeeded",
                  "Updating",
                  "Creating",
                  "Failed",
                ]),
              ),
              version: Schema.optional(Schema.String),
              moveType: Schema.optional(
                Schema.Literals(["RegionToRegion", "RegionToZone"]),
              ),
              errors: Schema.optional(
                Schema.Struct({
                  properties: Schema.optional(
                    Schema.Struct({
                      code: Schema.optional(Schema.String),
                      message: Schema.optional(Schema.String),
                      target: Schema.optional(Schema.String),
                      details: Schema.optional(Schema.Array(Schema.Unknown)),
                    }),
                  ),
                }),
              ),
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MoveCollectionsListMoveCollectionsByResourceGroupOutput>;

// The operation
/**
 * Get all Move Collections.
 *
 * Get all the Move Collections in the resource group.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param api-version - Client Api Version.
 */
export const MoveCollectionsListMoveCollectionsByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MoveCollectionsListMoveCollectionsByResourceGroupInput,
    outputSchema: MoveCollectionsListMoveCollectionsByResourceGroupOutput,
  }));
// Input Schema
export interface MoveCollectionsListMoveCollectionsBySubscriptionInput {
  subscriptionId: string;
}
export const MoveCollectionsListMoveCollectionsBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Migrate/moveCollections",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<MoveCollectionsListMoveCollectionsBySubscriptionInput>;

// Output Schema
export interface MoveCollectionsListMoveCollectionsBySubscriptionOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    etag?: string;
    tags?: Record<string, string>;
    location?: string;
    identity?: {
      type?: "None" | "SystemAssigned" | "UserAssigned";
      principalId?: string;
      tenantId?: string;
    };
    properties?: {
      sourceRegion?: string;
      targetRegion?: string;
      moveRegion?: string;
      provisioningState?: "Succeeded" | "Updating" | "Creating" | "Failed";
      version?: string;
      moveType?: "RegionToRegion" | "RegionToZone";
      errors?: {
        properties?: {
          code?: string;
          message?: string;
          target?: string;
          details?: unknown[];
        };
      };
    };
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
export const MoveCollectionsListMoveCollectionsBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          etag: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          location: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
              ),
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
            }),
          ),
          properties: Schema.optional(
            Schema.Struct({
              sourceRegion: Schema.optional(Schema.String),
              targetRegion: Schema.optional(Schema.String),
              moveRegion: Schema.optional(Schema.String),
              provisioningState: Schema.optional(
                Schema.Literals([
                  "Succeeded",
                  "Updating",
                  "Creating",
                  "Failed",
                ]),
              ),
              version: Schema.optional(Schema.String),
              moveType: Schema.optional(
                Schema.Literals(["RegionToRegion", "RegionToZone"]),
              ),
              errors: Schema.optional(
                Schema.Struct({
                  properties: Schema.optional(
                    Schema.Struct({
                      code: Schema.optional(Schema.String),
                      message: Schema.optional(Schema.String),
                      target: Schema.optional(Schema.String),
                      details: Schema.optional(Schema.Array(Schema.Unknown)),
                    }),
                  ),
                }),
              ),
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MoveCollectionsListMoveCollectionsBySubscriptionOutput>;

// The operation
/**
 * Get all Move Collections.
 *
 * Get all the Move Collections in the subscription.
 *
 * @param subscriptionId - The Subscription ID.
 * @param api-version - Client Api Version.
 */
export const MoveCollectionsListMoveCollectionsBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MoveCollectionsListMoveCollectionsBySubscriptionInput,
    outputSchema: MoveCollectionsListMoveCollectionsBySubscriptionOutput,
  }));
// Input Schema
export interface MoveCollectionsListRequiredForInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
  sourceId: string;
}
export const MoveCollectionsListRequiredForInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    moveCollectionName: Schema.String.pipe(T.PathParam()),
    sourceId: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}/requiredFor",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<MoveCollectionsListRequiredForInput>;

// Output Schema
export interface MoveCollectionsListRequiredForOutput {
  sourceIds?: string[];
}
export const MoveCollectionsListRequiredForOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceIds: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<MoveCollectionsListRequiredForOutput>;

// The operation
/**
 * List of the move resources for which an arm resource is required for.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param moveCollectionName - The Move Collection Name.
 * @param sourceId - The sourceId for which the api is invoked.
 * @param api-version - Client Api Version.
 */
export const MoveCollectionsListRequiredFor =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MoveCollectionsListRequiredForInput,
    outputSchema: MoveCollectionsListRequiredForOutput,
  }));
// Input Schema
export interface MoveCollectionsPrepareInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
  validateOnly?: boolean;
  moveResources: string[];
  moveResourceInputType?: "MoveResourceId" | "MoveResourceSourceId";
}
export const MoveCollectionsPrepareInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    moveCollectionName: Schema.String.pipe(T.PathParam()),
    validateOnly: Schema.optional(Schema.Boolean),
    moveResources: Schema.Array(Schema.String),
    moveResourceInputType: Schema.optional(
      Schema.Literals(["MoveResourceId", "MoveResourceSourceId"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}/prepare",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<MoveCollectionsPrepareInput>;

// Output Schema
export interface MoveCollectionsPrepareOutput {
  id?: string;
  name?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  error?: {
    code?: string;
    message?: string;
    details?: unknown[];
    additionalInfo?: {
      type?: string;
      info?: {
        moveResources?: {
          id?: string;
          sourceId?: string;
          moveResources?: unknown[];
        }[];
      };
    }[];
  };
  properties?: {};
}
export const MoveCollectionsPrepareOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        details: Schema.optional(Schema.Array(Schema.Unknown)),
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(
                Schema.Struct({
                  moveResources: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                        sourceId: Schema.optional(Schema.String),
                        moveResources: Schema.optional(
                          Schema.Array(Schema.Unknown),
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
    properties: Schema.optional(Schema.Struct({})),
  }) as unknown as Schema.Codec<MoveCollectionsPrepareOutput>;

// The operation
/**
 * Initiates prepare for the set of resources included in the request body. The prepare operation is on the moveResources that are in the moveState 'PreparePending' or 'PrepareFailed', on a successful completion the moveResource moveState do a transition to MovePending. To aid the user to prerequisite the operation the client can call operation with validateOnly property set to true.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param moveCollectionName - The Move Collection Name.
 * @param api-version - Client Api Version.
 */
export const MoveCollectionsPrepare = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MoveCollectionsPrepareInput,
    outputSchema: MoveCollectionsPrepareOutput,
  }),
);
// Input Schema
export interface MoveCollectionsResolveDependenciesInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
}
export const MoveCollectionsResolveDependenciesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    moveCollectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}/resolveDependencies",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<MoveCollectionsResolveDependenciesInput>;

// Output Schema
export interface MoveCollectionsResolveDependenciesOutput {
  id?: string;
  name?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  error?: {
    code?: string;
    message?: string;
    details?: unknown[];
    additionalInfo?: {
      type?: string;
      info?: {
        moveResources?: {
          id?: string;
          sourceId?: string;
          moveResources?: unknown[];
        }[];
      };
    }[];
  };
  properties?: {};
}
export const MoveCollectionsResolveDependenciesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        details: Schema.optional(Schema.Array(Schema.Unknown)),
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(
                Schema.Struct({
                  moveResources: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                        sourceId: Schema.optional(Schema.String),
                        moveResources: Schema.optional(
                          Schema.Array(Schema.Unknown),
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
    properties: Schema.optional(Schema.Struct({})),
  }) as unknown as Schema.Codec<MoveCollectionsResolveDependenciesOutput>;

// The operation
/**
 * Computes, resolves and validate the dependencies of the moveResources in the move collection.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param moveCollectionName - The Move Collection Name.
 * @param api-version - Client Api Version.
 */
export const MoveCollectionsResolveDependencies =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MoveCollectionsResolveDependenciesInput,
    outputSchema: MoveCollectionsResolveDependenciesOutput,
  }));
// Input Schema
export interface MoveCollectionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
  tags?: Record<string, string>;
  identity?: {
    type?: "None" | "SystemAssigned" | "UserAssigned";
    principalId?: string;
    tenantId?: string;
  };
}
export const MoveCollectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    moveCollectionName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<MoveCollectionsUpdateInput>;

// Output Schema
export interface MoveCollectionsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
  tags?: Record<string, string>;
  location?: string;
  identity?: {
    type?: "None" | "SystemAssigned" | "UserAssigned";
    principalId?: string;
    tenantId?: string;
  };
  properties?: {
    sourceRegion?: string;
    targetRegion?: string;
    moveRegion?: string;
    provisioningState?: "Succeeded" | "Updating" | "Creating" | "Failed";
    version?: string;
    moveType?: "RegionToRegion" | "RegionToZone";
    errors?: {
      properties?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
      };
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const MoveCollectionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        sourceRegion: Schema.optional(Schema.String),
        targetRegion: Schema.optional(Schema.String),
        moveRegion: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Updating", "Creating", "Failed"]),
        ),
        version: Schema.optional(Schema.String),
        moveType: Schema.optional(
          Schema.Literals(["RegionToRegion", "RegionToZone"]),
        ),
        errors: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          }),
        ),
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
  }) as unknown as Schema.Codec<MoveCollectionsUpdateOutput>;

// The operation
/**
 * Updates a move collection.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param moveCollectionName - The Move Collection Name.
 * @param api-version - Client Api Version.
 */
export const MoveCollectionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MoveCollectionsUpdateInput,
    outputSchema: MoveCollectionsUpdateOutput,
  }),
);
// Input Schema
export interface MoveResourcesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
  moveResourceName: string;
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    provisioningState?: "Succeeded" | "Updating" | "Creating" | "Failed";
    sourceId: string;
    targetId?: string;
    existingTargetId?: string;
    resourceSettings?: {
      resourceType: string;
      targetResourceName?: string;
      targetResourceGroupName?: string;
    };
    sourceResourceSettings?: {
      resourceType: string;
      targetResourceName?: string;
      targetResourceGroupName?: string;
    };
    moveStatus?: {
      moveState?:
        | "AssignmentPending"
        | "PreparePending"
        | "PrepareInProgress"
        | "PrepareFailed"
        | "MovePending"
        | "MoveInProgress"
        | "MoveFailed"
        | "DiscardInProgress"
        | "DiscardFailed"
        | "CommitPending"
        | "CommitInProgress"
        | "CommitFailed"
        | "Committed"
        | "DeleteSourcePending"
        | "ResourceMoveCompleted";
      jobStatus?: { jobName?: "InitialSync"; jobProgress?: string };
      errors?: {
        properties?: {
          code?: string;
          message?: string;
          target?: string;
          details?: unknown[];
        };
      };
    };
    dependsOn?: {
      id?: string;
      resolutionStatus?: string;
      resolutionType?: "Manual" | "Automatic";
      dependencyType?: "RequiredForPrepare" | "RequiredForMove";
      manualResolution?: { targetId?: string };
      automaticResolution?: { moveResourceId?: string };
      isOptional?: string;
    }[];
    dependsOnOverrides?: { id?: string; targetId?: string }[];
    isResolveRequired?: boolean;
    errors?: {
      properties?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
      };
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const MoveResourcesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    moveCollectionName: Schema.String.pipe(T.PathParam()),
    moveResourceName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Updating", "Creating", "Failed"]),
        ),
        sourceId: Schema.String,
        targetId: Schema.optional(Schema.String),
        existingTargetId: Schema.optional(Schema.String),
        resourceSettings: Schema.optional(
          Schema.Struct({
            resourceType: Schema.String,
            targetResourceName: Schema.optional(Schema.String),
            targetResourceGroupName: Schema.optional(Schema.String),
          }),
        ),
        sourceResourceSettings: Schema.optional(
          Schema.Struct({
            resourceType: Schema.String,
            targetResourceName: Schema.optional(Schema.String),
            targetResourceGroupName: Schema.optional(Schema.String),
          }),
        ),
        moveStatus: Schema.optional(
          Schema.Struct({
            moveState: Schema.optional(
              Schema.Literals([
                "AssignmentPending",
                "PreparePending",
                "PrepareInProgress",
                "PrepareFailed",
                "MovePending",
                "MoveInProgress",
                "MoveFailed",
                "DiscardInProgress",
                "DiscardFailed",
                "CommitPending",
                "CommitInProgress",
                "CommitFailed",
                "Committed",
                "DeleteSourcePending",
                "ResourceMoveCompleted",
              ]),
            ),
            jobStatus: Schema.optional(
              Schema.Struct({
                jobName: Schema.optional(Schema.Literals(["InitialSync"])),
                jobProgress: Schema.optional(Schema.String),
              }),
            ),
            errors: Schema.optional(
              Schema.Struct({
                properties: Schema.optional(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    target: Schema.optional(Schema.String),
                    details: Schema.optional(Schema.Array(Schema.Unknown)),
                  }),
                ),
              }),
            ),
          }),
        ),
        dependsOn: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              resolutionStatus: Schema.optional(Schema.String),
              resolutionType: Schema.optional(
                Schema.Literals(["Manual", "Automatic"]),
              ),
              dependencyType: Schema.optional(
                Schema.Literals(["RequiredForPrepare", "RequiredForMove"]),
              ),
              manualResolution: Schema.optional(
                Schema.Struct({
                  targetId: Schema.optional(Schema.String),
                }),
              ),
              automaticResolution: Schema.optional(
                Schema.Struct({
                  moveResourceId: Schema.optional(Schema.String),
                }),
              ),
              isOptional: Schema.optional(Schema.String),
            }),
          ),
        ),
        dependsOnOverrides: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              targetId: Schema.optional(Schema.String),
            }),
          ),
        ),
        isResolveRequired: Schema.optional(Schema.Boolean),
        errors: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          }),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}/moveResources/{moveResourceName}",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<MoveResourcesCreateInput>;

// Output Schema
export interface MoveResourcesCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    provisioningState?: "Succeeded" | "Updating" | "Creating" | "Failed";
    sourceId: string;
    targetId?: string;
    existingTargetId?: string;
    resourceSettings?: {
      resourceType: string;
      targetResourceName?: string;
      targetResourceGroupName?: string;
    };
    sourceResourceSettings?: {
      resourceType: string;
      targetResourceName?: string;
      targetResourceGroupName?: string;
    };
    moveStatus?: {
      moveState?:
        | "AssignmentPending"
        | "PreparePending"
        | "PrepareInProgress"
        | "PrepareFailed"
        | "MovePending"
        | "MoveInProgress"
        | "MoveFailed"
        | "DiscardInProgress"
        | "DiscardFailed"
        | "CommitPending"
        | "CommitInProgress"
        | "CommitFailed"
        | "Committed"
        | "DeleteSourcePending"
        | "ResourceMoveCompleted";
      jobStatus?: { jobName?: "InitialSync"; jobProgress?: string };
      errors?: {
        properties?: {
          code?: string;
          message?: string;
          target?: string;
          details?: unknown[];
        };
      };
    };
    dependsOn?: {
      id?: string;
      resolutionStatus?: string;
      resolutionType?: "Manual" | "Automatic";
      dependencyType?: "RequiredForPrepare" | "RequiredForMove";
      manualResolution?: { targetId?: string };
      automaticResolution?: { moveResourceId?: string };
      isOptional?: string;
    }[];
    dependsOnOverrides?: { id?: string; targetId?: string }[];
    isResolveRequired?: boolean;
    errors?: {
      properties?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
      };
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const MoveResourcesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Updating", "Creating", "Failed"]),
        ),
        sourceId: Schema.String,
        targetId: Schema.optional(Schema.String),
        existingTargetId: Schema.optional(Schema.String),
        resourceSettings: Schema.optional(
          Schema.Struct({
            resourceType: Schema.String,
            targetResourceName: Schema.optional(Schema.String),
            targetResourceGroupName: Schema.optional(Schema.String),
          }),
        ),
        sourceResourceSettings: Schema.optional(
          Schema.Struct({
            resourceType: Schema.String,
            targetResourceName: Schema.optional(Schema.String),
            targetResourceGroupName: Schema.optional(Schema.String),
          }),
        ),
        moveStatus: Schema.optional(
          Schema.Struct({
            moveState: Schema.optional(
              Schema.Literals([
                "AssignmentPending",
                "PreparePending",
                "PrepareInProgress",
                "PrepareFailed",
                "MovePending",
                "MoveInProgress",
                "MoveFailed",
                "DiscardInProgress",
                "DiscardFailed",
                "CommitPending",
                "CommitInProgress",
                "CommitFailed",
                "Committed",
                "DeleteSourcePending",
                "ResourceMoveCompleted",
              ]),
            ),
            jobStatus: Schema.optional(
              Schema.Struct({
                jobName: Schema.optional(Schema.Literals(["InitialSync"])),
                jobProgress: Schema.optional(Schema.String),
              }),
            ),
            errors: Schema.optional(
              Schema.Struct({
                properties: Schema.optional(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    target: Schema.optional(Schema.String),
                    details: Schema.optional(Schema.Array(Schema.Unknown)),
                  }),
                ),
              }),
            ),
          }),
        ),
        dependsOn: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              resolutionStatus: Schema.optional(Schema.String),
              resolutionType: Schema.optional(
                Schema.Literals(["Manual", "Automatic"]),
              ),
              dependencyType: Schema.optional(
                Schema.Literals(["RequiredForPrepare", "RequiredForMove"]),
              ),
              manualResolution: Schema.optional(
                Schema.Struct({
                  targetId: Schema.optional(Schema.String),
                }),
              ),
              automaticResolution: Schema.optional(
                Schema.Struct({
                  moveResourceId: Schema.optional(Schema.String),
                }),
              ),
              isOptional: Schema.optional(Schema.String),
            }),
          ),
        ),
        dependsOnOverrides: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              targetId: Schema.optional(Schema.String),
            }),
          ),
        ),
        isResolveRequired: Schema.optional(Schema.Boolean),
        errors: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          }),
        ),
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
  }) as unknown as Schema.Codec<MoveResourcesCreateOutput>;

// The operation
/**
 * Creates or updates a Move Resource in the move collection.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param moveCollectionName - The Move Collection Name.
 * @param moveResourceName - The Move Resource Name.
 * @param api-version - Client Api Version.
 */
export const MoveResourcesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MoveResourcesCreateInput,
  outputSchema: MoveResourcesCreateOutput,
}));
// Input Schema
export interface MoveResourcesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
  moveResourceName: string;
}
export const MoveResourcesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    moveCollectionName: Schema.String.pipe(T.PathParam()),
    moveResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}/moveResources/{moveResourceName}",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<MoveResourcesDeleteInput>;

// Output Schema
export interface MoveResourcesDeleteOutput {
  id?: string;
  name?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  error?: {
    code?: string;
    message?: string;
    details?: unknown[];
    additionalInfo?: {
      type?: string;
      info?: {
        moveResources?: {
          id?: string;
          sourceId?: string;
          moveResources?: unknown[];
        }[];
      };
    }[];
  };
  properties?: {};
}
export const MoveResourcesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        details: Schema.optional(Schema.Array(Schema.Unknown)),
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(
                Schema.Struct({
                  moveResources: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                        sourceId: Schema.optional(Schema.String),
                        moveResources: Schema.optional(
                          Schema.Array(Schema.Unknown),
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
    properties: Schema.optional(Schema.Struct({})),
  }) as unknown as Schema.Codec<MoveResourcesDeleteOutput>;

// The operation
/**
 * Deletes a Move Resource from the move collection.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param moveCollectionName - The Move Collection Name.
 * @param moveResourceName - The Move Resource Name.
 * @param api-version - Client Api Version.
 */
export const MoveResourcesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MoveResourcesDeleteInput,
  outputSchema: MoveResourcesDeleteOutput,
}));
// Input Schema
export interface MoveResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
  moveResourceName: string;
}
export const MoveResourcesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  moveCollectionName: Schema.String.pipe(T.PathParam()),
  moveResourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}/moveResources/{moveResourceName}",
    apiVersion: "2023-08-01",
  }),
) as unknown as Schema.Codec<MoveResourcesGetInput>;

// Output Schema
export interface MoveResourcesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    provisioningState?: "Succeeded" | "Updating" | "Creating" | "Failed";
    sourceId: string;
    targetId?: string;
    existingTargetId?: string;
    resourceSettings?: {
      resourceType: string;
      targetResourceName?: string;
      targetResourceGroupName?: string;
    };
    sourceResourceSettings?: {
      resourceType: string;
      targetResourceName?: string;
      targetResourceGroupName?: string;
    };
    moveStatus?: {
      moveState?:
        | "AssignmentPending"
        | "PreparePending"
        | "PrepareInProgress"
        | "PrepareFailed"
        | "MovePending"
        | "MoveInProgress"
        | "MoveFailed"
        | "DiscardInProgress"
        | "DiscardFailed"
        | "CommitPending"
        | "CommitInProgress"
        | "CommitFailed"
        | "Committed"
        | "DeleteSourcePending"
        | "ResourceMoveCompleted";
      jobStatus?: { jobName?: "InitialSync"; jobProgress?: string };
      errors?: {
        properties?: {
          code?: string;
          message?: string;
          target?: string;
          details?: unknown[];
        };
      };
    };
    dependsOn?: {
      id?: string;
      resolutionStatus?: string;
      resolutionType?: "Manual" | "Automatic";
      dependencyType?: "RequiredForPrepare" | "RequiredForMove";
      manualResolution?: { targetId?: string };
      automaticResolution?: { moveResourceId?: string };
      isOptional?: string;
    }[];
    dependsOnOverrides?: { id?: string; targetId?: string }[];
    isResolveRequired?: boolean;
    errors?: {
      properties?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
      };
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const MoveResourcesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Updating", "Creating", "Failed"]),
        ),
        sourceId: Schema.String,
        targetId: Schema.optional(Schema.String),
        existingTargetId: Schema.optional(Schema.String),
        resourceSettings: Schema.optional(
          Schema.Struct({
            resourceType: Schema.String,
            targetResourceName: Schema.optional(Schema.String),
            targetResourceGroupName: Schema.optional(Schema.String),
          }),
        ),
        sourceResourceSettings: Schema.optional(
          Schema.Struct({
            resourceType: Schema.String,
            targetResourceName: Schema.optional(Schema.String),
            targetResourceGroupName: Schema.optional(Schema.String),
          }),
        ),
        moveStatus: Schema.optional(
          Schema.Struct({
            moveState: Schema.optional(
              Schema.Literals([
                "AssignmentPending",
                "PreparePending",
                "PrepareInProgress",
                "PrepareFailed",
                "MovePending",
                "MoveInProgress",
                "MoveFailed",
                "DiscardInProgress",
                "DiscardFailed",
                "CommitPending",
                "CommitInProgress",
                "CommitFailed",
                "Committed",
                "DeleteSourcePending",
                "ResourceMoveCompleted",
              ]),
            ),
            jobStatus: Schema.optional(
              Schema.Struct({
                jobName: Schema.optional(Schema.Literals(["InitialSync"])),
                jobProgress: Schema.optional(Schema.String),
              }),
            ),
            errors: Schema.optional(
              Schema.Struct({
                properties: Schema.optional(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    target: Schema.optional(Schema.String),
                    details: Schema.optional(Schema.Array(Schema.Unknown)),
                  }),
                ),
              }),
            ),
          }),
        ),
        dependsOn: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              resolutionStatus: Schema.optional(Schema.String),
              resolutionType: Schema.optional(
                Schema.Literals(["Manual", "Automatic"]),
              ),
              dependencyType: Schema.optional(
                Schema.Literals(["RequiredForPrepare", "RequiredForMove"]),
              ),
              manualResolution: Schema.optional(
                Schema.Struct({
                  targetId: Schema.optional(Schema.String),
                }),
              ),
              automaticResolution: Schema.optional(
                Schema.Struct({
                  moveResourceId: Schema.optional(Schema.String),
                }),
              ),
              isOptional: Schema.optional(Schema.String),
            }),
          ),
        ),
        dependsOnOverrides: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              targetId: Schema.optional(Schema.String),
            }),
          ),
        ),
        isResolveRequired: Schema.optional(Schema.Boolean),
        errors: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          }),
        ),
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
) as unknown as Schema.Codec<MoveResourcesGetOutput>;

// The operation
/**
 * Gets the Move Resource.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param moveCollectionName - The Move Collection Name.
 * @param moveResourceName - The Move Resource Name.
 * @param api-version - Client Api Version.
 */
export const MoveResourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MoveResourcesGetInput,
  outputSchema: MoveResourcesGetOutput,
}));
// Input Schema
export interface MoveResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
  $filter?: string;
}
export const MoveResourcesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    moveCollectionName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}/moveResources",
    apiVersion: "2023-08-01",
  }),
) as unknown as Schema.Codec<MoveResourcesListInput>;

// Output Schema
export interface MoveResourcesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      provisioningState?: "Succeeded" | "Updating" | "Creating" | "Failed";
      sourceId: string;
      targetId?: string;
      existingTargetId?: string;
      resourceSettings?: {
        resourceType: string;
        targetResourceName?: string;
        targetResourceGroupName?: string;
      };
      sourceResourceSettings?: {
        resourceType: string;
        targetResourceName?: string;
        targetResourceGroupName?: string;
      };
      moveStatus?: {
        moveState?:
          | "AssignmentPending"
          | "PreparePending"
          | "PrepareInProgress"
          | "PrepareFailed"
          | "MovePending"
          | "MoveInProgress"
          | "MoveFailed"
          | "DiscardInProgress"
          | "DiscardFailed"
          | "CommitPending"
          | "CommitInProgress"
          | "CommitFailed"
          | "Committed"
          | "DeleteSourcePending"
          | "ResourceMoveCompleted";
        jobStatus?: { jobName?: "InitialSync"; jobProgress?: string };
        errors?: {
          properties?: {
            code?: string;
            message?: string;
            target?: string;
            details?: unknown[];
          };
        };
      };
      dependsOn?: {
        id?: string;
        resolutionStatus?: string;
        resolutionType?: "Manual" | "Automatic";
        dependencyType?: "RequiredForPrepare" | "RequiredForMove";
        manualResolution?: { targetId?: string };
        automaticResolution?: { moveResourceId?: string };
        isOptional?: string;
      }[];
      dependsOnOverrides?: { id?: string; targetId?: string }[];
      isResolveRequired?: boolean;
      errors?: {
        properties?: {
          code?: string;
          message?: string;
          target?: string;
          details?: unknown[];
        };
      };
    };
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
  summaryCollection?: {
    fieldName?: string;
    summary?: { count?: number; item?: string }[];
  };
  totalCount?: number;
}
export const MoveResourcesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              provisioningState: Schema.optional(
                Schema.Literals([
                  "Succeeded",
                  "Updating",
                  "Creating",
                  "Failed",
                ]),
              ),
              sourceId: Schema.String,
              targetId: Schema.optional(Schema.String),
              existingTargetId: Schema.optional(Schema.String),
              resourceSettings: Schema.optional(
                Schema.Struct({
                  resourceType: Schema.String,
                  targetResourceName: Schema.optional(Schema.String),
                  targetResourceGroupName: Schema.optional(Schema.String),
                }),
              ),
              sourceResourceSettings: Schema.optional(
                Schema.Struct({
                  resourceType: Schema.String,
                  targetResourceName: Schema.optional(Schema.String),
                  targetResourceGroupName: Schema.optional(Schema.String),
                }),
              ),
              moveStatus: Schema.optional(
                Schema.Struct({
                  moveState: Schema.optional(
                    Schema.Literals([
                      "AssignmentPending",
                      "PreparePending",
                      "PrepareInProgress",
                      "PrepareFailed",
                      "MovePending",
                      "MoveInProgress",
                      "MoveFailed",
                      "DiscardInProgress",
                      "DiscardFailed",
                      "CommitPending",
                      "CommitInProgress",
                      "CommitFailed",
                      "Committed",
                      "DeleteSourcePending",
                      "ResourceMoveCompleted",
                    ]),
                  ),
                  jobStatus: Schema.optional(
                    Schema.Struct({
                      jobName: Schema.optional(
                        Schema.Literals(["InitialSync"]),
                      ),
                      jobProgress: Schema.optional(Schema.String),
                    }),
                  ),
                  errors: Schema.optional(
                    Schema.Struct({
                      properties: Schema.optional(
                        Schema.Struct({
                          code: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          target: Schema.optional(Schema.String),
                          details: Schema.optional(
                            Schema.Array(Schema.Unknown),
                          ),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
              dependsOn: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    resolutionStatus: Schema.optional(Schema.String),
                    resolutionType: Schema.optional(
                      Schema.Literals(["Manual", "Automatic"]),
                    ),
                    dependencyType: Schema.optional(
                      Schema.Literals([
                        "RequiredForPrepare",
                        "RequiredForMove",
                      ]),
                    ),
                    manualResolution: Schema.optional(
                      Schema.Struct({
                        targetId: Schema.optional(Schema.String),
                      }),
                    ),
                    automaticResolution: Schema.optional(
                      Schema.Struct({
                        moveResourceId: Schema.optional(Schema.String),
                      }),
                    ),
                    isOptional: Schema.optional(Schema.String),
                  }),
                ),
              ),
              dependsOnOverrides: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    targetId: Schema.optional(Schema.String),
                  }),
                ),
              ),
              isResolveRequired: Schema.optional(Schema.Boolean),
              errors: Schema.optional(
                Schema.Struct({
                  properties: Schema.optional(
                    Schema.Struct({
                      code: Schema.optional(Schema.String),
                      message: Schema.optional(Schema.String),
                      target: Schema.optional(Schema.String),
                      details: Schema.optional(Schema.Array(Schema.Unknown)),
                    }),
                  ),
                }),
              ),
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
    nextLink: Schema.optional(Schema.String),
    summaryCollection: Schema.optional(
      Schema.Struct({
        fieldName: Schema.optional(Schema.String),
        summary: Schema.optional(
          Schema.Array(
            Schema.Struct({
              count: Schema.optional(Schema.Number),
              item: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    totalCount: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<MoveResourcesListOutput>;

// The operation
/**
 * Lists the Move Resources in the move collection.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param moveCollectionName - The Move Collection Name.
 * @param api-version - Client Api Version.
 * @param $filter - The filter to apply on the operation. For example, you can use $filter=Properties/ProvisioningState eq 'Succeeded'.
 */
export const MoveResourcesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MoveResourcesListInput,
  outputSchema: MoveResourcesListOutput,
}));
// Input Schema
export interface OperationsDiscoveryGetInput {}
export const OperationsDiscoveryGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Migrate/operations",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<OperationsDiscoveryGetInput>;

// Output Schema
export interface OperationsDiscoveryGetOutput {
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
    properties?: unknown;
  }[];
  nextLink?: string;
}
export const OperationsDiscoveryGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
          properties: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OperationsDiscoveryGetOutput>;

// The operation
/**
 *
 * @param api-version - Client Api Version.
 */
export const OperationsDiscoveryGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OperationsDiscoveryGetInput,
    outputSchema: OperationsDiscoveryGetOutput,
  }),
);
// Input Schema
export interface UnresolvedDependenciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  moveCollectionName: string;
  dependencyLevel?: "Direct" | "Descendant";
  $orderby?: string;
  $filter?: string;
}
export const UnresolvedDependenciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    moveCollectionName: Schema.String.pipe(T.PathParam()),
    dependencyLevel: Schema.optional(Schema.Literals(["Direct", "Descendant"])),
    $orderby: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/moveCollections/{moveCollectionName}/unresolvedDependencies",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<UnresolvedDependenciesGetInput>;

// Output Schema
export interface UnresolvedDependenciesGetOutput {
  value?: { count?: number; id?: string }[];
  nextLink?: string;
  summaryCollection?: {
    fieldName?: string;
    summary?: { count?: number; item?: string }[];
  };
  totalCount?: number;
}
export const UnresolvedDependenciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          count: Schema.optional(Schema.Number),
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
    summaryCollection: Schema.optional(
      Schema.Struct({
        fieldName: Schema.optional(Schema.String),
        summary: Schema.optional(
          Schema.Array(
            Schema.Struct({
              count: Schema.optional(Schema.Number),
              item: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    totalCount: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<UnresolvedDependenciesGetOutput>;

// The operation
/**
 * Gets a list of unresolved dependencies.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param moveCollectionName - The Move Collection Name.
 * @param dependencyLevel - Defines the dependency level.
 * @param $orderby - OData order by query option. For example, you can use $orderby=Count desc.
 * @param api-version - Client Api Version.
 * @param $filter - The filter to apply on the operation. For example, $apply=filter(count eq 2).
 */
export const UnresolvedDependenciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UnresolvedDependenciesGetInput,
    outputSchema: UnresolvedDependenciesGetOutput,
  }),
);
