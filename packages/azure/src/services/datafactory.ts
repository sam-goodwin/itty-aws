/**
 * Azure Datafactory API
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
export interface ActivityRunsQueryByPipelineRunInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  runId: string;
  continuationToken?: string;
  lastUpdatedAfter: string;
  lastUpdatedBefore: string;
  filters?: {
    operand:
      | "PipelineName"
      | "Status"
      | "RunStart"
      | "RunEnd"
      | "ActivityName"
      | "ActivityRunStart"
      | "ActivityRunEnd"
      | "ActivityType"
      | "TriggerName"
      | "TriggerRunTimestamp"
      | "RunGroupId"
      | "LatestOnly";
    operator: "Equals" | "NotEquals" | "In" | "NotIn";
    values: string[];
  }[];
  orderBy?: {
    orderBy:
      | "RunStart"
      | "RunEnd"
      | "PipelineName"
      | "Status"
      | "ActivityName"
      | "ActivityRunStart"
      | "ActivityRunEnd"
      | "TriggerName"
      | "TriggerRunTimestamp";
    order: "ASC" | "DESC";
  }[];
}
export const ActivityRunsQueryByPipelineRunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    runId: Schema.String.pipe(T.PathParam()),
    continuationToken: Schema.optional(Schema.String),
    lastUpdatedAfter: Schema.String,
    lastUpdatedBefore: Schema.String,
    filters: Schema.optional(
      Schema.Array(
        Schema.Struct({
          operand: Schema.Literals([
            "PipelineName",
            "Status",
            "RunStart",
            "RunEnd",
            "ActivityName",
            "ActivityRunStart",
            "ActivityRunEnd",
            "ActivityType",
            "TriggerName",
            "TriggerRunTimestamp",
            "RunGroupId",
            "LatestOnly",
          ]),
          operator: Schema.Literals(["Equals", "NotEquals", "In", "NotIn"]),
          values: Schema.Array(Schema.String),
        }),
      ),
    ),
    orderBy: Schema.optional(
      Schema.Array(
        Schema.Struct({
          orderBy: Schema.Literals([
            "RunStart",
            "RunEnd",
            "PipelineName",
            "Status",
            "ActivityName",
            "ActivityRunStart",
            "ActivityRunEnd",
            "TriggerName",
            "TriggerRunTimestamp",
          ]),
          order: Schema.Literals(["ASC", "DESC"]),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelineruns/{runId}/queryActivityruns",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ActivityRunsQueryByPipelineRunInput>;

// Output Schema
export interface ActivityRunsQueryByPipelineRunOutput {
  value: {
    pipelineName?: string;
    pipelineRunId?: string;
    activityName?: string;
    activityType?: string;
    activityRunId?: string;
    linkedServiceName?: string;
    status?: string;
    activityRunStart?: string;
    activityRunEnd?: string;
    durationInMs?: number;
    input?: unknown;
    output?: unknown;
    error?: unknown;
  }[];
  continuationToken?: string;
}
export const ActivityRunsQueryByPipelineRunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        pipelineName: Schema.optional(Schema.String),
        pipelineRunId: Schema.optional(Schema.String),
        activityName: Schema.optional(Schema.String),
        activityType: Schema.optional(Schema.String),
        activityRunId: Schema.optional(Schema.String),
        linkedServiceName: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        activityRunStart: Schema.optional(Schema.String),
        activityRunEnd: Schema.optional(Schema.String),
        durationInMs: Schema.optional(Schema.Number),
        input: Schema.optional(Schema.Unknown),
        output: Schema.optional(Schema.Unknown),
        error: Schema.optional(Schema.Unknown),
      }),
    ),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ActivityRunsQueryByPipelineRunOutput>;

// The operation
/**
 * Query activity runs based on input filter conditions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param runId - The pipeline run identifier.
 */
export const ActivityRunsQueryByPipelineRun =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ActivityRunsQueryByPipelineRunInput,
    outputSchema: ActivityRunsQueryByPipelineRunOutput,
  }));
// Input Schema
export interface ChangeDataCaptureCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  changeDataCaptureName: string;
  properties: {
    folder?: { name?: string };
    description?: string;
    sourceConnectionsInfo: {
      sourceEntities?: {
        name?: string;
        properties?: {
          schema?: { name?: string; dataType?: string }[];
          dslConnectorProperties?: { name?: string; value?: unknown }[];
        };
      }[];
      connection?: {
        linkedService?: {
          type: "LinkedServiceReference";
          referenceName: string;
          parameters?: Record<string, unknown>;
        };
        linkedServiceType?: string;
        type: "linkedservicetype";
        isInlineDataset?: boolean;
        commonDslConnectorProperties?: { name?: string; value?: unknown }[];
      };
    }[];
    targetConnectionsInfo: {
      targetEntities?: {
        name?: string;
        properties?: {
          schema?: { name?: string; dataType?: string }[];
          dslConnectorProperties?: { name?: string; value?: unknown }[];
        };
      }[];
      connection?: {
        linkedService?: {
          type: "LinkedServiceReference";
          referenceName: string;
          parameters?: Record<string, unknown>;
        };
        linkedServiceType?: string;
        type: "linkedservicetype";
        isInlineDataset?: boolean;
        commonDslConnectorProperties?: { name?: string; value?: unknown }[];
      };
      dataMapperMappings?: {
        targetEntityName?: string;
        sourceEntityName?: string;
        sourceConnectionReference?: {
          connectionName?: string;
          type?: "linkedservicetype";
        };
        attributeMappingInfo?: {
          attributeMappings?: {
            name?: string;
            type?: "Direct" | "Derived" | "Aggregate";
            functionName?: string;
            expression?: string;
            attributeReference?: {
              name?: string;
              entity?: string;
              entityConnectionReference?: {
                connectionName?: string;
                type?: "linkedservicetype";
              };
            };
            attributeReferences?: {
              name?: string;
              entity?: string;
              entityConnectionReference?: {
                connectionName?: string;
                type?: "linkedservicetype";
              };
            }[];
          }[];
        };
        sourceDenormalizeInfo?: unknown;
      }[];
      relationships?: unknown[];
    }[];
    policy: {
      mode?: string;
      recurrence?: {
        frequency?: "Hour" | "Minute" | "Second";
        interval?: number;
      };
    };
    allowVNetOverride?: boolean;
    status?: string;
  };
  etag?: string;
}
export const ChangeDataCaptureCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    changeDataCaptureName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      folder: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
        }),
      ),
      description: Schema.optional(Schema.String),
      sourceConnectionsInfo: Schema.Array(
        Schema.Struct({
          sourceEntities: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                properties: Schema.optional(
                  Schema.Struct({
                    schema: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          dataType: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    dslConnectorProperties: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          value: Schema.optional(Schema.Unknown),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
          ),
          connection: Schema.optional(
            Schema.Struct({
              linkedService: Schema.optional(
                Schema.Struct({
                  type: Schema.Literals(["LinkedServiceReference"]),
                  referenceName: Schema.String,
                  parameters: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                }),
              ),
              linkedServiceType: Schema.optional(Schema.String),
              type: Schema.Literals(["linkedservicetype"]),
              isInlineDataset: Schema.optional(Schema.Boolean),
              commonDslConnectorProperties: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.Unknown),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
      targetConnectionsInfo: Schema.Array(
        Schema.Struct({
          targetEntities: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                properties: Schema.optional(
                  Schema.Struct({
                    schema: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          dataType: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    dslConnectorProperties: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          value: Schema.optional(Schema.Unknown),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
          ),
          connection: Schema.optional(
            Schema.Struct({
              linkedService: Schema.optional(
                Schema.Struct({
                  type: Schema.Literals(["LinkedServiceReference"]),
                  referenceName: Schema.String,
                  parameters: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                }),
              ),
              linkedServiceType: Schema.optional(Schema.String),
              type: Schema.Literals(["linkedservicetype"]),
              isInlineDataset: Schema.optional(Schema.Boolean),
              commonDslConnectorProperties: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.Unknown),
                  }),
                ),
              ),
            }),
          ),
          dataMapperMappings: Schema.optional(
            Schema.Array(
              Schema.Struct({
                targetEntityName: Schema.optional(Schema.String),
                sourceEntityName: Schema.optional(Schema.String),
                sourceConnectionReference: Schema.optional(
                  Schema.Struct({
                    connectionName: Schema.optional(Schema.String),
                    type: Schema.optional(
                      Schema.Literals(["linkedservicetype"]),
                    ),
                  }),
                ),
                attributeMappingInfo: Schema.optional(
                  Schema.Struct({
                    attributeMappings: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          type: Schema.optional(
                            Schema.Literals(["Direct", "Derived", "Aggregate"]),
                          ),
                          functionName: Schema.optional(Schema.String),
                          expression: Schema.optional(Schema.String),
                          attributeReference: Schema.optional(
                            Schema.Struct({
                              name: Schema.optional(Schema.String),
                              entity: Schema.optional(Schema.String),
                              entityConnectionReference: Schema.optional(
                                Schema.Struct({
                                  connectionName: Schema.optional(
                                    Schema.String,
                                  ),
                                  type: Schema.optional(
                                    Schema.Literals(["linkedservicetype"]),
                                  ),
                                }),
                              ),
                            }),
                          ),
                          attributeReferences: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                                entity: Schema.optional(Schema.String),
                                entityConnectionReference: Schema.optional(
                                  Schema.Struct({
                                    connectionName: Schema.optional(
                                      Schema.String,
                                    ),
                                    type: Schema.optional(
                                      Schema.Literals(["linkedservicetype"]),
                                    ),
                                  }),
                                ),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
                sourceDenormalizeInfo: Schema.optional(Schema.Unknown),
              }),
            ),
          ),
          relationships: Schema.optional(Schema.Array(Schema.Unknown)),
        }),
      ),
      policy: Schema.Struct({
        mode: Schema.optional(Schema.String),
        recurrence: Schema.optional(
          Schema.Struct({
            frequency: Schema.optional(
              Schema.Literals(["Hour", "Minute", "Second"]),
            ),
            interval: Schema.optional(Schema.Number),
          }),
        ),
      }),
      allowVNetOverride: Schema.optional(Schema.Boolean),
      status: Schema.optional(Schema.String),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/adfcdcs/{changeDataCaptureName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ChangeDataCaptureCreateOrUpdateInput>;

// Output Schema
export interface ChangeDataCaptureCreateOrUpdateOutput {
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
export const ChangeDataCaptureCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ChangeDataCaptureCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a change data capture resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param changeDataCaptureName - The change data capture name.
 * @param if-match - ETag of the change data capture entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
 */
export const ChangeDataCaptureCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ChangeDataCaptureCreateOrUpdateInput,
    outputSchema: ChangeDataCaptureCreateOrUpdateOutput,
  }));
// Input Schema
export interface ChangeDataCaptureDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  changeDataCaptureName: string;
}
export const ChangeDataCaptureDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    changeDataCaptureName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/adfcdcs/{changeDataCaptureName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ChangeDataCaptureDeleteInput>;

// Output Schema
export type ChangeDataCaptureDeleteOutput = void;
export const ChangeDataCaptureDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ChangeDataCaptureDeleteOutput>;

// The operation
/**
 * Deletes a change data capture.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param changeDataCaptureName - The change data capture name.
 */
export const ChangeDataCaptureDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ChangeDataCaptureDeleteInput,
    outputSchema: ChangeDataCaptureDeleteOutput,
  }),
);
// Input Schema
export interface ChangeDataCaptureGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  changeDataCaptureName: string;
}
export const ChangeDataCaptureGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    changeDataCaptureName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/adfcdcs/{changeDataCaptureName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ChangeDataCaptureGetInput>;

// Output Schema
export interface ChangeDataCaptureGetOutput {
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
export const ChangeDataCaptureGetOutput =
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
  }) as unknown as Schema.Codec<ChangeDataCaptureGetOutput>;

// The operation
/**
 * Gets a change data capture.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param changeDataCaptureName - The change data capture name.
 * @param if-none-match - ETag of the change data capture entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
 */
export const ChangeDataCaptureGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ChangeDataCaptureGetInput,
    outputSchema: ChangeDataCaptureGetOutput,
  }),
);
// Input Schema
export interface ChangeDataCaptureListByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
}
export const ChangeDataCaptureListByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/adfcdcs",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ChangeDataCaptureListByFactoryInput>;

// Output Schema
export interface ChangeDataCaptureListByFactoryOutput {
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
export const ChangeDataCaptureListByFactoryOutput =
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
  }) as unknown as Schema.Codec<ChangeDataCaptureListByFactoryOutput>;

// The operation
/**
 * Lists all resources of type change data capture.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const ChangeDataCaptureListByFactory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ChangeDataCaptureListByFactoryInput,
    outputSchema: ChangeDataCaptureListByFactoryOutput,
  }));
// Input Schema
export interface ChangeDataCaptureStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  changeDataCaptureName: string;
}
export const ChangeDataCaptureStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    changeDataCaptureName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/adfcdcs/{changeDataCaptureName}/start",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ChangeDataCaptureStartInput>;

// Output Schema
export type ChangeDataCaptureStartOutput = void;
export const ChangeDataCaptureStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ChangeDataCaptureStartOutput>;

// The operation
/**
 * Starts a change data capture.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param changeDataCaptureName - The change data capture name.
 */
export const ChangeDataCaptureStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ChangeDataCaptureStartInput,
    outputSchema: ChangeDataCaptureStartOutput,
  }),
);
// Input Schema
export interface ChangeDataCaptureStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  changeDataCaptureName: string;
}
export const ChangeDataCaptureStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    changeDataCaptureName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/adfcdcs/{changeDataCaptureName}/status",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ChangeDataCaptureStatusInput>;

// Output Schema
export type ChangeDataCaptureStatusOutput = string;
export const ChangeDataCaptureStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String as unknown as Schema.Codec<ChangeDataCaptureStatusOutput>;

// The operation
/**
 * Gets the current status for the change data capture resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param changeDataCaptureName - The change data capture name.
 */
export const ChangeDataCaptureStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ChangeDataCaptureStatusInput,
    outputSchema: ChangeDataCaptureStatusOutput,
  }),
);
// Input Schema
export interface ChangeDataCaptureStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  changeDataCaptureName: string;
}
export const ChangeDataCaptureStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    changeDataCaptureName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/adfcdcs/{changeDataCaptureName}/stop",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ChangeDataCaptureStopInput>;

// Output Schema
export type ChangeDataCaptureStopOutput = void;
export const ChangeDataCaptureStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ChangeDataCaptureStopOutput>;

// The operation
/**
 * Stops a change data capture.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param changeDataCaptureName - The change data capture name.
 */
export const ChangeDataCaptureStop = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ChangeDataCaptureStopInput,
    outputSchema: ChangeDataCaptureStopOutput,
  }),
);
// Input Schema
export interface CredentialOperationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  credentialName: string;
  properties: { type: string; description?: string; annotations?: unknown[] };
  etag?: string;
}
export const CredentialOperationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    credentialName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      type: Schema.String,
      description: Schema.optional(Schema.String),
      annotations: Schema.optional(Schema.Array(Schema.Unknown)),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/credentials/{credentialName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<CredentialOperationsCreateOrUpdateInput>;

// Output Schema
export interface CredentialOperationsCreateOrUpdateOutput {
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
export const CredentialOperationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CredentialOperationsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a credential.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param credentialName - Credential name
 * @param if-match - ETag of the credential entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
 */
export const CredentialOperationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CredentialOperationsCreateOrUpdateInput,
    outputSchema: CredentialOperationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface CredentialOperationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  credentialName: string;
}
export const CredentialOperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    credentialName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/credentials/{credentialName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<CredentialOperationsDeleteInput>;

// Output Schema
export type CredentialOperationsDeleteOutput = void;
export const CredentialOperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CredentialOperationsDeleteOutput>;

// The operation
/**
 * Deletes a credential.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param credentialName - Credential name
 */
export const CredentialOperationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CredentialOperationsDeleteInput,
    outputSchema: CredentialOperationsDeleteOutput,
  }),
);
// Input Schema
export interface CredentialOperationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  credentialName: string;
}
export const CredentialOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    credentialName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/credentials/{credentialName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<CredentialOperationsGetInput>;

// Output Schema
export interface CredentialOperationsGetOutput {
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
export const CredentialOperationsGetOutput =
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
  }) as unknown as Schema.Codec<CredentialOperationsGetOutput>;

// The operation
/**
 * Gets a credential.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param credentialName - Credential name
 * @param if-none-match - ETag of the credential entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
 */
export const CredentialOperationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CredentialOperationsGetInput,
    outputSchema: CredentialOperationsGetOutput,
  }),
);
// Input Schema
export interface CredentialOperationsListByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
}
export const CredentialOperationsListByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/credentials",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<CredentialOperationsListByFactoryInput>;

// Output Schema
export interface CredentialOperationsListByFactoryOutput {
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
export const CredentialOperationsListByFactoryOutput =
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
  }) as unknown as Schema.Codec<CredentialOperationsListByFactoryOutput>;

// The operation
/**
 * List credentials.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const CredentialOperationsListByFactory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CredentialOperationsListByFactoryInput,
    outputSchema: CredentialOperationsListByFactoryOutput,
  }));
// Input Schema
export interface DataFlowDebugSessionAddDataFlowInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  sessionId?: string;
  dataFlow?: { name?: string };
  dataFlows?: { name?: string }[];
  datasets?: { name?: string }[];
  linkedServices?: { name?: string }[];
  staging?: {
    linkedService?: {
      type: "LinkedServiceReference";
      referenceName: string;
      parameters?: Record<string, unknown>;
    };
    folderPath?: unknown;
  };
  debugSettings?: {
    sourceSettings?: { sourceName?: string; rowLimit?: number }[];
    parameters?: Record<string, unknown>;
    datasetParameters?: unknown;
  };
}
export const DataFlowDebugSessionAddDataFlowInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    sessionId: Schema.optional(Schema.String),
    dataFlow: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ),
    dataFlows: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
    datasets: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
    linkedServices: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
    staging: Schema.optional(
      Schema.Struct({
        linkedService: Schema.optional(
          Schema.Struct({
            type: Schema.Literals(["LinkedServiceReference"]),
            referenceName: Schema.String,
            parameters: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
          }),
        ),
        folderPath: Schema.optional(Schema.Unknown),
      }),
    ),
    debugSettings: Schema.optional(
      Schema.Struct({
        sourceSettings: Schema.optional(
          Schema.Array(
            Schema.Struct({
              sourceName: Schema.optional(Schema.String),
              rowLimit: Schema.optional(Schema.Number),
            }),
          ),
        ),
        parameters: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        datasetParameters: Schema.optional(Schema.Unknown),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/addDataFlowToDebugSession",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<DataFlowDebugSessionAddDataFlowInput>;

// Output Schema
export interface DataFlowDebugSessionAddDataFlowOutput {
  jobVersion?: string;
}
export const DataFlowDebugSessionAddDataFlowOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobVersion: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DataFlowDebugSessionAddDataFlowOutput>;

// The operation
/**
 * Add a data flow into debug session.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const DataFlowDebugSessionAddDataFlow =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataFlowDebugSessionAddDataFlowInput,
    outputSchema: DataFlowDebugSessionAddDataFlowOutput,
  }));
// Input Schema
export interface DataFlowDebugSessionCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  computeType?: string;
  coreCount?: number;
  timeToLive?: number;
  integrationRuntime?: { name?: string };
}
export const DataFlowDebugSessionCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    computeType: Schema.optional(Schema.String),
    coreCount: Schema.optional(Schema.Number),
    timeToLive: Schema.optional(Schema.Number),
    integrationRuntime: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/createDataFlowDebugSession",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<DataFlowDebugSessionCreateInput>;

// Output Schema
export interface DataFlowDebugSessionCreateOutput {
  status?: string;
  sessionId?: string;
}
export const DataFlowDebugSessionCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    sessionId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DataFlowDebugSessionCreateOutput>;

// The operation
/**
 * Creates a data flow debug session.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const DataFlowDebugSessionCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataFlowDebugSessionCreateInput,
    outputSchema: DataFlowDebugSessionCreateOutput,
  }),
);
// Input Schema
export interface DataFlowDebugSessionDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  sessionId?: string;
}
export const DataFlowDebugSessionDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    sessionId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/deleteDataFlowDebugSession",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<DataFlowDebugSessionDeleteInput>;

// Output Schema
export type DataFlowDebugSessionDeleteOutput = void;
export const DataFlowDebugSessionDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DataFlowDebugSessionDeleteOutput>;

// The operation
/**
 * Deletes a data flow debug session.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const DataFlowDebugSessionDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataFlowDebugSessionDeleteInput,
    outputSchema: DataFlowDebugSessionDeleteOutput,
  }),
);
// Input Schema
export interface DataFlowDebugSessionExecuteCommandInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  sessionId?: string;
  command?:
    | "executePreviewQuery"
    | "executeStatisticsQuery"
    | "executeExpressionQuery";
  commandPayload?: {
    streamName: string;
    rowLimits?: number;
    columns?: string[];
    expression?: string;
  };
}
export const DataFlowDebugSessionExecuteCommandInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    sessionId: Schema.optional(Schema.String),
    command: Schema.optional(
      Schema.Literals([
        "executePreviewQuery",
        "executeStatisticsQuery",
        "executeExpressionQuery",
      ]),
    ),
    commandPayload: Schema.optional(
      Schema.Struct({
        streamName: Schema.String,
        rowLimits: Schema.optional(Schema.Number),
        columns: Schema.optional(Schema.Array(Schema.String)),
        expression: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/executeDataFlowDebugCommand",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<DataFlowDebugSessionExecuteCommandInput>;

// Output Schema
export interface DataFlowDebugSessionExecuteCommandOutput {
  status?: string;
  data?: string;
}
export const DataFlowDebugSessionExecuteCommandOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DataFlowDebugSessionExecuteCommandOutput>;

// The operation
/**
 * Execute a data flow debug command.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const DataFlowDebugSessionExecuteCommand =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataFlowDebugSessionExecuteCommandInput,
    outputSchema: DataFlowDebugSessionExecuteCommandOutput,
  }));
// Input Schema
export interface DataFlowDebugSessionQueryByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
}
export const DataFlowDebugSessionQueryByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/queryDataFlowDebugSessions",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<DataFlowDebugSessionQueryByFactoryInput>;

// Output Schema
export interface DataFlowDebugSessionQueryByFactoryOutput {
  value: {
    dataFlowName?: string;
    computeType?: string;
    coreCount?: number;
    nodeCount?: number;
    integrationRuntimeName?: string;
    sessionId?: string;
    startTime?: string;
    timeToLiveInMinutes?: number;
    lastActivityTime?: string;
  }[];
  nextLink?: string;
}
export const DataFlowDebugSessionQueryByFactoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        dataFlowName: Schema.optional(Schema.String),
        computeType: Schema.optional(Schema.String),
        coreCount: Schema.optional(Schema.Number),
        nodeCount: Schema.optional(Schema.Number),
        integrationRuntimeName: Schema.optional(Schema.String),
        sessionId: Schema.optional(Schema.String),
        startTime: Schema.optional(Schema.String),
        timeToLiveInMinutes: Schema.optional(Schema.Number),
        lastActivityTime: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DataFlowDebugSessionQueryByFactoryOutput>;

// The operation
/**
 * Query all active data flow debug sessions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const DataFlowDebugSessionQueryByFactory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataFlowDebugSessionQueryByFactoryInput,
    outputSchema: DataFlowDebugSessionQueryByFactoryOutput,
  }));
// Input Schema
export interface DataFlowsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  dataFlowName: string;
  properties: {
    type: string;
    description?: string;
    annotations?: unknown[];
    folder?: { name?: string };
  };
  etag?: string;
}
export const DataFlowsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    dataFlowName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      type: Schema.String,
      description: Schema.optional(Schema.String),
      annotations: Schema.optional(Schema.Array(Schema.Unknown)),
      folder: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
        }),
      ),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows/{dataFlowName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<DataFlowsCreateOrUpdateInput>;

// Output Schema
export interface DataFlowsCreateOrUpdateOutput {
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
export const DataFlowsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DataFlowsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a data flow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param dataFlowName - The data flow name.
 * @param if-match - ETag of the data flow entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
 */
export const DataFlowsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataFlowsCreateOrUpdateInput,
    outputSchema: DataFlowsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface DataFlowsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  dataFlowName: string;
}
export const DataFlowsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  factoryName: Schema.String.pipe(T.PathParam()),
  dataFlowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows/{dataFlowName}",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<DataFlowsDeleteInput>;

// Output Schema
export type DataFlowsDeleteOutput = void;
export const DataFlowsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DataFlowsDeleteOutput>;

// The operation
/**
 * Deletes a data flow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param dataFlowName - The data flow name.
 */
export const DataFlowsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataFlowsDeleteInput,
  outputSchema: DataFlowsDeleteOutput,
}));
// Input Schema
export interface DataFlowsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  dataFlowName: string;
}
export const DataFlowsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  factoryName: Schema.String.pipe(T.PathParam()),
  dataFlowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows/{dataFlowName}",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<DataFlowsGetInput>;

// Output Schema
export interface DataFlowsGetOutput {
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
export const DataFlowsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DataFlowsGetOutput>;

// The operation
/**
 * Gets a data flow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param dataFlowName - The data flow name.
 * @param if-none-match - ETag of the data flow entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
 */
export const DataFlowsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataFlowsGetInput,
  outputSchema: DataFlowsGetOutput,
}));
// Input Schema
export interface DataFlowsListByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
}
export const DataFlowsListByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<DataFlowsListByFactoryInput>;

// Output Schema
export interface DataFlowsListByFactoryOutput {
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
export const DataFlowsListByFactoryOutput =
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
  }) as unknown as Schema.Codec<DataFlowsListByFactoryOutput>;

// The operation
/**
 * Lists data flows.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const DataFlowsListByFactory = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataFlowsListByFactoryInput,
    outputSchema: DataFlowsListByFactoryOutput,
  }),
);
// Input Schema
export interface DatasetsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  datasetName: string;
  properties: {
    type: string;
    description?: string;
    structure?: unknown;
    schema?: unknown;
    linkedServiceName: {
      type: "LinkedServiceReference";
      referenceName: string;
      parameters?: Record<string, unknown>;
    };
    parameters?: Record<
      string,
      {
        type:
          | "Object"
          | "String"
          | "Int"
          | "Float"
          | "Bool"
          | "Array"
          | "SecureString";
        defaultValue?: unknown;
      }
    >;
    annotations?: unknown[];
    folder?: { name?: string };
  };
  etag?: string;
}
export const DatasetsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    datasetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      type: Schema.String,
      description: Schema.optional(Schema.String),
      structure: Schema.optional(Schema.Unknown),
      schema: Schema.optional(Schema.Unknown),
      linkedServiceName: Schema.Struct({
        type: Schema.Literals(["LinkedServiceReference"]),
        referenceName: Schema.String,
        parameters: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
      }),
      parameters: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            type: Schema.Literals([
              "Object",
              "String",
              "Int",
              "Float",
              "Bool",
              "Array",
              "SecureString",
            ]),
            defaultValue: Schema.optional(Schema.Unknown),
          }),
        ),
      ),
      annotations: Schema.optional(Schema.Array(Schema.Unknown)),
      folder: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
        }),
      ),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/datasets/{datasetName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<DatasetsCreateOrUpdateInput>;

// Output Schema
export interface DatasetsCreateOrUpdateOutput {
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
export const DatasetsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DatasetsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a dataset.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param datasetName - The dataset name.
 * @param if-match - ETag of the dataset entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
 */
export const DatasetsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatasetsCreateOrUpdateInput,
    outputSchema: DatasetsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface DatasetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  datasetName: string;
}
export const DatasetsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  factoryName: Schema.String.pipe(T.PathParam()),
  datasetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/datasets/{datasetName}",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<DatasetsDeleteInput>;

// Output Schema
export type DatasetsDeleteOutput = void;
export const DatasetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DatasetsDeleteOutput>;

// The operation
/**
 * Deletes a dataset.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param datasetName - The dataset name.
 */
export const DatasetsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatasetsDeleteInput,
  outputSchema: DatasetsDeleteOutput,
}));
// Input Schema
export interface DatasetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  datasetName: string;
}
export const DatasetsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  factoryName: Schema.String.pipe(T.PathParam()),
  datasetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/datasets/{datasetName}",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<DatasetsGetInput>;

// Output Schema
export interface DatasetsGetOutput {
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
export const DatasetsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DatasetsGetOutput>;

// The operation
/**
 * Gets a dataset.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param datasetName - The dataset name.
 * @param if-none-match - ETag of the dataset entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
 */
export const DatasetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatasetsGetInput,
  outputSchema: DatasetsGetOutput,
}));
// Input Schema
export interface DatasetsListByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
}
export const DatasetsListByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/datasets",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<DatasetsListByFactoryInput>;

// Output Schema
export interface DatasetsListByFactoryOutput {
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
export const DatasetsListByFactoryOutput =
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
  }) as unknown as Schema.Codec<DatasetsListByFactoryOutput>;

// The operation
/**
 * Lists datasets.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const DatasetsListByFactory = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatasetsListByFactoryInput,
    outputSchema: DatasetsListByFactoryOutput,
  }),
);
// Input Schema
export interface ExposureControlGetFeatureValueInput {
  subscriptionId: string;
  locationId: string;
  featureName?: string;
  featureType?: string;
}
export const ExposureControlGetFeatureValueInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationId: Schema.String.pipe(T.PathParam()),
    featureName: Schema.optional(Schema.String),
    featureType: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataFactory/locations/{locationId}/getFeatureValue",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ExposureControlGetFeatureValueInput>;

// Output Schema
export interface ExposureControlGetFeatureValueOutput {
  featureName?: string;
  value?: string;
}
export const ExposureControlGetFeatureValueOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    featureName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ExposureControlGetFeatureValueOutput>;

// The operation
/**
 * Get exposure control feature for specific location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationId - The location identifier.
 */
export const ExposureControlGetFeatureValue =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExposureControlGetFeatureValueInput,
    outputSchema: ExposureControlGetFeatureValueOutput,
  }));
// Input Schema
export interface ExposureControlGetFeatureValueByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  featureName?: string;
  featureType?: string;
}
export const ExposureControlGetFeatureValueByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    featureName: Schema.optional(Schema.String),
    featureType: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/getFeatureValue",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ExposureControlGetFeatureValueByFactoryInput>;

// Output Schema
export interface ExposureControlGetFeatureValueByFactoryOutput {
  featureName?: string;
  value?: string;
}
export const ExposureControlGetFeatureValueByFactoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    featureName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ExposureControlGetFeatureValueByFactoryOutput>;

// The operation
/**
 * Get exposure control feature for specific factory.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const ExposureControlGetFeatureValueByFactory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExposureControlGetFeatureValueByFactoryInput,
    outputSchema: ExposureControlGetFeatureValueByFactoryOutput,
  }));
// Input Schema
export interface ExposureControlQueryFeatureValuesByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  exposureControlRequests: { featureName?: string; featureType?: string }[];
}
export const ExposureControlQueryFeatureValuesByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    exposureControlRequests: Schema.Array(
      Schema.Struct({
        featureName: Schema.optional(Schema.String),
        featureType: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/queryFeaturesValue",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ExposureControlQueryFeatureValuesByFactoryInput>;

// Output Schema
export interface ExposureControlQueryFeatureValuesByFactoryOutput {
  exposureControlResponses: { featureName?: string; value?: string }[];
}
export const ExposureControlQueryFeatureValuesByFactoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exposureControlResponses: Schema.Array(
      Schema.Struct({
        featureName: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ExposureControlQueryFeatureValuesByFactoryOutput>;

// The operation
/**
 * Get list of exposure control features for specific factory.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const ExposureControlQueryFeatureValuesByFactory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExposureControlQueryFeatureValuesByFactoryInput,
    outputSchema: ExposureControlQueryFeatureValuesByFactoryOutput,
  }));
// Input Schema
export interface FactoriesConfigureFactoryRepoInput {
  subscriptionId: string;
  locationId: string;
  factoryResourceId?: string;
  repoConfiguration?: {
    type: string;
    accountName: string;
    repositoryName: string;
    collaborationBranch: string;
    rootFolder: string;
    lastCommitId?: string;
    disablePublish?: boolean;
  };
}
export const FactoriesConfigureFactoryRepoInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationId: Schema.String.pipe(T.PathParam()),
    factoryResourceId: Schema.optional(Schema.String),
    repoConfiguration: Schema.optional(
      Schema.Struct({
        type: Schema.String,
        accountName: Schema.String,
        repositoryName: Schema.String,
        collaborationBranch: Schema.String,
        rootFolder: Schema.String,
        lastCommitId: Schema.optional(Schema.String),
        disablePublish: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataFactory/locations/{locationId}/configureFactoryRepo",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<FactoriesConfigureFactoryRepoInput>;

// Output Schema
export interface FactoriesConfigureFactoryRepoOutput {
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
export const FactoriesConfigureFactoryRepoOutput =
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
  }) as unknown as Schema.Codec<FactoriesConfigureFactoryRepoOutput>;

// The operation
/**
 * Updates a factory's repo information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationId - The location identifier.
 */
export const FactoriesConfigureFactoryRepo =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FactoriesConfigureFactoryRepoInput,
    outputSchema: FactoriesConfigureFactoryRepoOutput,
  }));
// Input Schema
export interface FactoriesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  properties?: {
    provisioningState?: string;
    createTime?: string;
    version?: string;
    purviewConfiguration?: { purviewResourceId?: string };
    repoConfiguration?: {
      type: string;
      accountName: string;
      repositoryName: string;
      collaborationBranch: string;
      rootFolder: string;
      lastCommitId?: string;
      disablePublish?: boolean;
    };
    globalParameters?: Record<
      string,
      {
        type: "Object" | "String" | "Int" | "Float" | "Bool" | "Array";
        value: unknown;
      }
    >;
    encryption?: {
      keyName: string;
      vaultBaseUrl: string;
      keyVersion?: string;
      identity?: { userAssignedIdentity?: string };
    };
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
  identity?: {
    type: "SystemAssigned" | "UserAssigned" | "SystemAssigned,UserAssigned";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<string, unknown>;
  };
  location?: string;
  tags?: Record<string, string>;
  eTag?: string;
}
export const FactoriesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        createTime: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
        purviewConfiguration: Schema.optional(
          Schema.Struct({
            purviewResourceId: Schema.optional(Schema.String),
          }),
        ),
        repoConfiguration: Schema.optional(
          Schema.Struct({
            type: Schema.String,
            accountName: Schema.String,
            repositoryName: Schema.String,
            collaborationBranch: Schema.String,
            rootFolder: Schema.String,
            lastCommitId: Schema.optional(Schema.String),
            disablePublish: Schema.optional(Schema.Boolean),
          }),
        ),
        globalParameters: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              type: Schema.Literals([
                "Object",
                "String",
                "Int",
                "Float",
                "Bool",
                "Array",
              ]),
              value: Schema.Unknown,
            }),
          ),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            keyName: Schema.String,
            vaultBaseUrl: Schema.String,
            keyVersion: Schema.optional(Schema.String),
            identity: Schema.optional(
              Schema.Struct({
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals([
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<FactoriesCreateOrUpdateInput>;

// Output Schema
export interface FactoriesCreateOrUpdateOutput {
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
export const FactoriesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<FactoriesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a factory.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param if-match - ETag of the factory entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
 */
export const FactoriesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FactoriesCreateOrUpdateInput,
    outputSchema: FactoriesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface FactoriesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
}
export const FactoriesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  factoryName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<FactoriesDeleteInput>;

// Output Schema
export type FactoriesDeleteOutput = void;
export const FactoriesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FactoriesDeleteOutput>;

// The operation
/**
 * Deletes a factory.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const FactoriesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FactoriesDeleteInput,
  outputSchema: FactoriesDeleteOutput,
}));
// Input Schema
export interface FactoriesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
}
export const FactoriesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  factoryName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<FactoriesGetInput>;

// Output Schema
export interface FactoriesGetOutput {
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
export const FactoriesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FactoriesGetOutput>;

// The operation
/**
 * Gets a factory.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param if-none-match - ETag of the factory entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
 */
export const FactoriesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FactoriesGetInput,
  outputSchema: FactoriesGetOutput,
}));
// Input Schema
export interface FactoriesGetDataPlaneAccessInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  permissions?: string;
  accessResourcePath?: string;
  profileName?: string;
  startTime?: string;
  expireTime?: string;
}
export const FactoriesGetDataPlaneAccessInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    permissions: Schema.optional(Schema.String),
    accessResourcePath: Schema.optional(Schema.String),
    profileName: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/getDataPlaneAccess",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<FactoriesGetDataPlaneAccessInput>;

// Output Schema
export interface FactoriesGetDataPlaneAccessOutput {
  policy?: {
    permissions?: string;
    accessResourcePath?: string;
    profileName?: string;
    startTime?: string;
    expireTime?: string;
  };
  accessToken?: Redacted.Redacted<string>;
  dataPlaneUrl?: string;
}
export const FactoriesGetDataPlaneAccessOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(
      Schema.Struct({
        permissions: Schema.optional(Schema.String),
        accessResourcePath: Schema.optional(Schema.String),
        profileName: Schema.optional(Schema.String),
        startTime: Schema.optional(Schema.String),
        expireTime: Schema.optional(Schema.String),
      }),
    ),
    accessToken: Schema.optional(SensitiveOutputString),
    dataPlaneUrl: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FactoriesGetDataPlaneAccessOutput>;

// The operation
/**
 * Get Data Plane access.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const FactoriesGetDataPlaneAccess = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FactoriesGetDataPlaneAccessInput,
    outputSchema: FactoriesGetDataPlaneAccessOutput,
  }),
);
// Input Schema
export interface FactoriesGetGitHubAccessTokenInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  gitHubAccessCode: string;
  gitHubClientId?: string;
  gitHubClientSecret?: { byoaSecretAkvUrl?: string; byoaSecretName?: string };
  gitHubAccessTokenBaseUrl: string;
}
export const FactoriesGetGitHubAccessTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    gitHubAccessCode: Schema.String,
    gitHubClientId: Schema.optional(Schema.String),
    gitHubClientSecret: Schema.optional(
      Schema.Struct({
        byoaSecretAkvUrl: Schema.optional(Schema.String),
        byoaSecretName: Schema.optional(Schema.String),
      }),
    ),
    gitHubAccessTokenBaseUrl: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/getGitHubAccessToken",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<FactoriesGetGitHubAccessTokenInput>;

// Output Schema
export interface FactoriesGetGitHubAccessTokenOutput {
  gitHubAccessToken?: string;
}
export const FactoriesGetGitHubAccessTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitHubAccessToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FactoriesGetGitHubAccessTokenOutput>;

// The operation
/**
 * Get GitHub Access Token.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const FactoriesGetGitHubAccessToken =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FactoriesGetGitHubAccessTokenInput,
    outputSchema: FactoriesGetGitHubAccessTokenOutput,
  }));
// Input Schema
export interface FactoriesListInput {
  subscriptionId: string;
}
export const FactoriesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataFactory/factories",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<FactoriesListInput>;

// Output Schema
export interface FactoriesListOutput {
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
export const FactoriesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FactoriesListOutput>;

// The operation
/**
 * Lists factories under the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const FactoriesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FactoriesListInput,
  outputSchema: FactoriesListOutput,
}));
// Input Schema
export interface FactoriesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const FactoriesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<FactoriesListByResourceGroupInput>;

// Output Schema
export interface FactoriesListByResourceGroupOutput {
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
export const FactoriesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<FactoriesListByResourceGroupOutput>;

// The operation
/**
 * Lists factories.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const FactoriesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FactoriesListByResourceGroupInput,
    outputSchema: FactoriesListByResourceGroupOutput,
  }));
// Input Schema
export interface FactoriesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  tags?: Record<string, string>;
  identity?: {
    type: "SystemAssigned" | "UserAssigned" | "SystemAssigned,UserAssigned";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<string, unknown>;
  };
  properties?: { publicNetworkAccess?: "Enabled" | "Disabled" };
}
export const FactoriesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  factoryName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.Literals([
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned,UserAssigned",
      ]),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      userAssignedIdentities: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<FactoriesUpdateInput>;

// Output Schema
export interface FactoriesUpdateOutput {
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
export const FactoriesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FactoriesUpdateOutput>;

// The operation
/**
 * Updates a factory.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const FactoriesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FactoriesUpdateInput,
  outputSchema: FactoriesUpdateOutput,
}));
// Input Schema
export interface GlobalParametersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  globalParameterName: string;
  properties: Record<
    string,
    {
      type: "Object" | "String" | "Int" | "Float" | "Bool" | "Array";
      value: unknown;
    }
  >;
  etag?: string;
}
export const GlobalParametersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    globalParameterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Record(
      Schema.String,
      Schema.Struct({
        type: Schema.Literals([
          "Object",
          "String",
          "Int",
          "Float",
          "Bool",
          "Array",
        ]),
        value: Schema.Unknown,
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/globalParameters/{globalParameterName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<GlobalParametersCreateOrUpdateInput>;

// Output Schema
export interface GlobalParametersCreateOrUpdateOutput {
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
export const GlobalParametersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<GlobalParametersCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Global parameter
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param globalParameterName - The global parameter name.
 */
export const GlobalParametersCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GlobalParametersCreateOrUpdateInput,
    outputSchema: GlobalParametersCreateOrUpdateOutput,
  }));
// Input Schema
export interface GlobalParametersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  globalParameterName: string;
}
export const GlobalParametersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    globalParameterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/globalParameters/{globalParameterName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<GlobalParametersDeleteInput>;

// Output Schema
export type GlobalParametersDeleteOutput = void;
export const GlobalParametersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GlobalParametersDeleteOutput>;

// The operation
/**
 * Deletes a Global parameter
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param globalParameterName - The global parameter name.
 */
export const GlobalParametersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GlobalParametersDeleteInput,
    outputSchema: GlobalParametersDeleteOutput,
  }),
);
// Input Schema
export interface GlobalParametersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  globalParameterName: string;
}
export const GlobalParametersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    globalParameterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/globalParameters/{globalParameterName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<GlobalParametersGetInput>;

// Output Schema
export interface GlobalParametersGetOutput {
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
export const GlobalParametersGetOutput =
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
  }) as unknown as Schema.Codec<GlobalParametersGetOutput>;

// The operation
/**
 * Gets a Global parameter
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param globalParameterName - The global parameter name.
 */
export const GlobalParametersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GlobalParametersGetInput,
  outputSchema: GlobalParametersGetOutput,
}));
// Input Schema
export interface GlobalParametersListByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
}
export const GlobalParametersListByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/globalParameters",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<GlobalParametersListByFactoryInput>;

// Output Schema
export interface GlobalParametersListByFactoryOutput {
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
export const GlobalParametersListByFactoryOutput =
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
  }) as unknown as Schema.Codec<GlobalParametersListByFactoryOutput>;

// The operation
/**
 * Lists Global parameters
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const GlobalParametersListByFactory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GlobalParametersListByFactoryInput,
    outputSchema: GlobalParametersListByFactoryOutput,
  }));
// Input Schema
export interface IntegrationRuntimeDisableInteractiveQueryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimeDisableInteractiveQueryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/disableInteractiveQuery",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeDisableInteractiveQueryInput>;

// Output Schema
export interface IntegrationRuntimeDisableInteractiveQueryOutput {
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
export const IntegrationRuntimeDisableInteractiveQueryOutput =
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
  }) as unknown as Schema.Codec<IntegrationRuntimeDisableInteractiveQueryOutput>;

// The operation
/**
 * Disable interactive authoring of Managed Virtual Network integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimeDisableInteractiveQuery =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeDisableInteractiveQueryInput,
    outputSchema: IntegrationRuntimeDisableInteractiveQueryOutput,
  }));
// Input Schema
export interface IntegrationRuntimeEnableInteractiveQueryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
  autoTerminationMinutes?: number;
}
export const IntegrationRuntimeEnableInteractiveQueryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    autoTerminationMinutes: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/enableInteractiveQuery",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeEnableInteractiveQueryInput>;

// Output Schema
export interface IntegrationRuntimeEnableInteractiveQueryOutput {
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
export const IntegrationRuntimeEnableInteractiveQueryOutput =
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
  }) as unknown as Schema.Codec<IntegrationRuntimeEnableInteractiveQueryOutput>;

// The operation
/**
 * Enable interactive authoring of Managed Virtual Network integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimeEnableInteractiveQuery =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeEnableInteractiveQueryInput,
    outputSchema: IntegrationRuntimeEnableInteractiveQueryOutput,
  }));
// Input Schema
export interface IntegrationRuntimeNodesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
  nodeName: string;
}
export const IntegrationRuntimeNodesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    nodeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeNodesDeleteInput>;

// Output Schema
export type IntegrationRuntimeNodesDeleteOutput = void;
export const IntegrationRuntimeNodesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationRuntimeNodesDeleteOutput>;

// The operation
/**
 * Deletes a self-hosted integration runtime node.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param nodeName - The integration runtime node name.
 */
export const IntegrationRuntimeNodesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeNodesDeleteInput,
    outputSchema: IntegrationRuntimeNodesDeleteOutput,
  }));
// Input Schema
export interface IntegrationRuntimeNodesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
  nodeName: string;
}
export const IntegrationRuntimeNodesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    nodeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeNodesGetInput>;

// Output Schema
export interface IntegrationRuntimeNodesGetOutput {
  nodeName?: string;
  machineName?: string;
  hostServiceUri?: string;
  status?:
    | "NeedRegistration"
    | "Online"
    | "Limited"
    | "Offline"
    | "Upgrading"
    | "Initializing"
    | "InitializeFailed";
  capabilities?: Record<string, string>;
  versionStatus?: string;
  version?: string;
  registerTime?: string;
  lastConnectTime?: string;
  expiryTime?: string;
  lastStartTime?: string;
  lastStopTime?: string;
  lastUpdateResult?: "None" | "Succeed" | "Fail";
  lastStartUpdateTime?: string;
  lastEndUpdateTime?: string;
  isActiveDispatcher?: boolean;
  concurrentJobsLimit?: number;
  maxConcurrentJobs?: number;
}
export const IntegrationRuntimeNodesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeName: Schema.optional(Schema.String),
    machineName: Schema.optional(Schema.String),
    hostServiceUri: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "NeedRegistration",
        "Online",
        "Limited",
        "Offline",
        "Upgrading",
        "Initializing",
        "InitializeFailed",
      ]),
    ),
    capabilities: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    versionStatus: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    registerTime: Schema.optional(Schema.String),
    lastConnectTime: Schema.optional(Schema.String),
    expiryTime: Schema.optional(Schema.String),
    lastStartTime: Schema.optional(Schema.String),
    lastStopTime: Schema.optional(Schema.String),
    lastUpdateResult: Schema.optional(
      Schema.Literals(["None", "Succeed", "Fail"]),
    ),
    lastStartUpdateTime: Schema.optional(Schema.String),
    lastEndUpdateTime: Schema.optional(Schema.String),
    isActiveDispatcher: Schema.optional(Schema.Boolean),
    concurrentJobsLimit: Schema.optional(Schema.Number),
    maxConcurrentJobs: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<IntegrationRuntimeNodesGetOutput>;

// The operation
/**
 * Gets a self-hosted integration runtime node.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param nodeName - The integration runtime node name.
 */
export const IntegrationRuntimeNodesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimeNodesGetInput,
    outputSchema: IntegrationRuntimeNodesGetOutput,
  }),
);
// Input Schema
export interface IntegrationRuntimeNodesGetIpAddressInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
  nodeName: string;
}
export const IntegrationRuntimeNodesGetIpAddressInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    nodeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}/ipAddress",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeNodesGetIpAddressInput>;

// Output Schema
export interface IntegrationRuntimeNodesGetIpAddressOutput {
  ipAddress?: string;
}
export const IntegrationRuntimeNodesGetIpAddressOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipAddress: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationRuntimeNodesGetIpAddressOutput>;

// The operation
/**
 * Get the IP address of self-hosted integration runtime node.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param nodeName - The integration runtime node name.
 */
export const IntegrationRuntimeNodesGetIpAddress =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeNodesGetIpAddressInput,
    outputSchema: IntegrationRuntimeNodesGetIpAddressOutput,
  }));
// Input Schema
export interface IntegrationRuntimeNodesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
  nodeName: string;
  concurrentJobsLimit?: number;
}
export const IntegrationRuntimeNodesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    nodeName: Schema.String.pipe(T.PathParam()),
    concurrentJobsLimit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeNodesUpdateInput>;

// Output Schema
export interface IntegrationRuntimeNodesUpdateOutput {
  nodeName?: string;
  machineName?: string;
  hostServiceUri?: string;
  status?:
    | "NeedRegistration"
    | "Online"
    | "Limited"
    | "Offline"
    | "Upgrading"
    | "Initializing"
    | "InitializeFailed";
  capabilities?: Record<string, string>;
  versionStatus?: string;
  version?: string;
  registerTime?: string;
  lastConnectTime?: string;
  expiryTime?: string;
  lastStartTime?: string;
  lastStopTime?: string;
  lastUpdateResult?: "None" | "Succeed" | "Fail";
  lastStartUpdateTime?: string;
  lastEndUpdateTime?: string;
  isActiveDispatcher?: boolean;
  concurrentJobsLimit?: number;
  maxConcurrentJobs?: number;
}
export const IntegrationRuntimeNodesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeName: Schema.optional(Schema.String),
    machineName: Schema.optional(Schema.String),
    hostServiceUri: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "NeedRegistration",
        "Online",
        "Limited",
        "Offline",
        "Upgrading",
        "Initializing",
        "InitializeFailed",
      ]),
    ),
    capabilities: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    versionStatus: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    registerTime: Schema.optional(Schema.String),
    lastConnectTime: Schema.optional(Schema.String),
    expiryTime: Schema.optional(Schema.String),
    lastStartTime: Schema.optional(Schema.String),
    lastStopTime: Schema.optional(Schema.String),
    lastUpdateResult: Schema.optional(
      Schema.Literals(["None", "Succeed", "Fail"]),
    ),
    lastStartUpdateTime: Schema.optional(Schema.String),
    lastEndUpdateTime: Schema.optional(Schema.String),
    isActiveDispatcher: Schema.optional(Schema.Boolean),
    concurrentJobsLimit: Schema.optional(Schema.Number),
    maxConcurrentJobs: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<IntegrationRuntimeNodesUpdateOutput>;

// The operation
/**
 * Updates a self-hosted integration runtime node.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param nodeName - The integration runtime node name.
 */
export const IntegrationRuntimeNodesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeNodesUpdateInput,
    outputSchema: IntegrationRuntimeNodesUpdateOutput,
  }));
// Input Schema
export interface IntegrationRuntimeObjectMetadataGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
  metadataPath?: string;
}
export const IntegrationRuntimeObjectMetadataGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    metadataPath: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/getObjectMetadata",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeObjectMetadataGetInput>;

// Output Schema
export interface IntegrationRuntimeObjectMetadataGetOutput {
  value: {
    type: "Folder" | "Project" | "Package" | "Environment";
    id?: number;
    name?: string;
    description?: string;
  }[];
  nextLink?: string;
}
export const IntegrationRuntimeObjectMetadataGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        type: Schema.Literals(["Folder", "Project", "Package", "Environment"]),
        id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationRuntimeObjectMetadataGetOutput>;

// The operation
/**
 * Get a SSIS integration runtime object metadata by specified path. The return is pageable metadata list.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimeObjectMetadataGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeObjectMetadataGetInput,
    outputSchema: IntegrationRuntimeObjectMetadataGetOutput,
  }));
// Input Schema
export interface IntegrationRuntimeObjectMetadataRefreshInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimeObjectMetadataRefreshInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/refreshObjectMetadata",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeObjectMetadataRefreshInput>;

// Output Schema
export interface IntegrationRuntimeObjectMetadataRefreshOutput {
  status?: string;
  name?: string;
  properties?: string;
  error?: string;
}
export const IntegrationRuntimeObjectMetadataRefreshOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.String),
    error: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationRuntimeObjectMetadataRefreshOutput>;

// The operation
/**
 * Refresh a SSIS integration runtime object metadata.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimeObjectMetadataRefresh =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeObjectMetadataRefreshInput,
    outputSchema: IntegrationRuntimeObjectMetadataRefreshOutput,
  }));
// Input Schema
export interface IntegrationRuntimesCreateLinkedIntegrationRuntimeInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
  name?: string;
  dataFactoryName?: string;
  dataFactoryLocation?: string;
}
export const IntegrationRuntimesCreateLinkedIntegrationRuntimeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    dataFactoryName: Schema.optional(Schema.String),
    dataFactoryLocation: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/linkedIntegrationRuntime",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesCreateLinkedIntegrationRuntimeInput>;

// Output Schema
export interface IntegrationRuntimesCreateLinkedIntegrationRuntimeOutput {
  name?: string;
  properties: {
    type: "Managed" | "SelfHosted";
    dataFactoryName?: string;
    state?:
      | "Initial"
      | "Stopped"
      | "Started"
      | "Starting"
      | "Stopping"
      | "NeedRegistration"
      | "Online"
      | "Limited"
      | "Offline"
      | "AccessDenied";
  };
}
export const IntegrationRuntimesCreateLinkedIntegrationRuntimeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.Struct({
      type: Schema.Literals(["Managed", "SelfHosted"]),
      dataFactoryName: Schema.optional(Schema.String),
      state: Schema.optional(
        Schema.Literals([
          "Initial",
          "Stopped",
          "Started",
          "Starting",
          "Stopping",
          "NeedRegistration",
          "Online",
          "Limited",
          "Offline",
          "AccessDenied",
        ]),
      ),
    }),
  }) as unknown as Schema.Codec<IntegrationRuntimesCreateLinkedIntegrationRuntimeOutput>;

// The operation
/**
 * Create a linked integration runtime entry in a shared integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimesCreateLinkedIntegrationRuntime =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimesCreateLinkedIntegrationRuntimeInput,
    outputSchema: IntegrationRuntimesCreateLinkedIntegrationRuntimeOutput,
  }));
// Input Schema
export interface IntegrationRuntimesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
  properties: { type: "Managed" | "SelfHosted"; description?: string };
  etag?: string;
}
export const IntegrationRuntimesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      type: Schema.Literals(["Managed", "SelfHosted"]),
      description: Schema.optional(Schema.String),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesCreateOrUpdateInput>;

// Output Schema
export interface IntegrationRuntimesCreateOrUpdateOutput {
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
export const IntegrationRuntimesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<IntegrationRuntimesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 * @param if-match - ETag of the integration runtime entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
 */
export const IntegrationRuntimesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimesCreateOrUpdateInput,
    outputSchema: IntegrationRuntimesCreateOrUpdateOutput,
  }));
// Input Schema
export interface IntegrationRuntimesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesDeleteInput>;

// Output Schema
export type IntegrationRuntimesDeleteOutput = void;
export const IntegrationRuntimesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationRuntimesDeleteOutput>;

// The operation
/**
 * Deletes an integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimesDeleteInput,
    outputSchema: IntegrationRuntimesDeleteOutput,
  }),
);
// Input Schema
export interface IntegrationRuntimesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesGetInput>;

// Output Schema
export interface IntegrationRuntimesGetOutput {
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
export const IntegrationRuntimesGetOutput =
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
  }) as unknown as Schema.Codec<IntegrationRuntimesGetOutput>;

// The operation
/**
 * Gets an integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 * @param if-none-match - ETag of the integration runtime entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
 */
export const IntegrationRuntimesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimesGetInput,
    outputSchema: IntegrationRuntimesGetOutput,
  }),
);
// Input Schema
export interface IntegrationRuntimesGetConnectionInfoInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesGetConnectionInfoInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/getConnectionInfo",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesGetConnectionInfoInput>;

// Output Schema
export interface IntegrationRuntimesGetConnectionInfoOutput {
  serviceToken?: string;
  identityCertThumbprint?: string;
  hostServiceUri?: string;
  version?: string;
  publicKey?: string;
  isIdentityCertExprired?: boolean;
}
export const IntegrationRuntimesGetConnectionInfoOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceToken: Schema.optional(Schema.String),
    identityCertThumbprint: Schema.optional(Schema.String),
    hostServiceUri: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    publicKey: Schema.optional(Schema.String),
    isIdentityCertExprired: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<IntegrationRuntimesGetConnectionInfoOutput>;

// The operation
/**
 * Gets the on-premises integration runtime connection information for encrypting the on-premises data source credentials.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimesGetConnectionInfo =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimesGetConnectionInfoInput,
    outputSchema: IntegrationRuntimesGetConnectionInfoOutput,
  }));
// Input Schema
export interface IntegrationRuntimesGetMonitoringDataInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesGetMonitoringDataInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/monitoringData",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesGetMonitoringDataInput>;

// Output Schema
export interface IntegrationRuntimesGetMonitoringDataOutput {
  name?: string;
  nodes?: {
    nodeName?: string;
    availableMemoryInMB?: number;
    cpuUtilization?: number;
    concurrentJobsLimit?: number;
    concurrentJobsRunning?: number;
    maxConcurrentJobs?: number;
    sentBytes?: number;
    receivedBytes?: number;
  }[];
}
export const IntegrationRuntimesGetMonitoringDataOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    nodes: Schema.optional(
      Schema.Array(
        Schema.Struct({
          nodeName: Schema.optional(Schema.String),
          availableMemoryInMB: Schema.optional(Schema.Number),
          cpuUtilization: Schema.optional(Schema.Number),
          concurrentJobsLimit: Schema.optional(Schema.Number),
          concurrentJobsRunning: Schema.optional(Schema.Number),
          maxConcurrentJobs: Schema.optional(Schema.Number),
          sentBytes: Schema.optional(Schema.Number),
          receivedBytes: Schema.optional(Schema.Number),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<IntegrationRuntimesGetMonitoringDataOutput>;

// The operation
/**
 * Get the integration runtime monitoring data, which includes the monitor data for all the nodes under this integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimesGetMonitoringData =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimesGetMonitoringDataInput,
    outputSchema: IntegrationRuntimesGetMonitoringDataOutput,
  }));
// Input Schema
export interface IntegrationRuntimesGetStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesGetStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/getStatus",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesGetStatusInput>;

// Output Schema
export interface IntegrationRuntimesGetStatusOutput {
  name?: string;
  properties: {
    type: "Managed" | "SelfHosted";
    dataFactoryName?: string;
    state?:
      | "Initial"
      | "Stopped"
      | "Started"
      | "Starting"
      | "Stopping"
      | "NeedRegistration"
      | "Online"
      | "Limited"
      | "Offline"
      | "AccessDenied";
  };
}
export const IntegrationRuntimesGetStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.Struct({
      type: Schema.Literals(["Managed", "SelfHosted"]),
      dataFactoryName: Schema.optional(Schema.String),
      state: Schema.optional(
        Schema.Literals([
          "Initial",
          "Stopped",
          "Started",
          "Starting",
          "Stopping",
          "NeedRegistration",
          "Online",
          "Limited",
          "Offline",
          "AccessDenied",
        ]),
      ),
    }),
  }) as unknown as Schema.Codec<IntegrationRuntimesGetStatusOutput>;

// The operation
/**
 * Gets detailed status information for an integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimesGetStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimesGetStatusInput,
    outputSchema: IntegrationRuntimesGetStatusOutput,
  }));
// Input Schema
export interface IntegrationRuntimesListAuthKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesListAuthKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/listAuthKeys",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesListAuthKeysInput>;

// Output Schema
export interface IntegrationRuntimesListAuthKeysOutput {
  authKey1?: string;
  authKey2?: string;
}
export const IntegrationRuntimesListAuthKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authKey1: Schema.optional(Schema.String),
    authKey2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationRuntimesListAuthKeysOutput>;

// The operation
/**
 * Retrieves the authentication keys for an integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimesListAuthKeys =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimesListAuthKeysInput,
    outputSchema: IntegrationRuntimesListAuthKeysOutput,
  }));
// Input Schema
export interface IntegrationRuntimesListByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
}
export const IntegrationRuntimesListByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesListByFactoryInput>;

// Output Schema
export interface IntegrationRuntimesListByFactoryOutput {
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
export const IntegrationRuntimesListByFactoryOutput =
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
  }) as unknown as Schema.Codec<IntegrationRuntimesListByFactoryOutput>;

// The operation
/**
 * Lists integration runtimes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const IntegrationRuntimesListByFactory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimesListByFactoryInput,
    outputSchema: IntegrationRuntimesListByFactoryOutput,
  }));
// Input Schema
export interface IntegrationRuntimesListOutboundNetworkDependenciesEndpointsInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesListOutboundNetworkDependenciesEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/outboundNetworkDependenciesEndpoints",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesListOutboundNetworkDependenciesEndpointsInput>;

// Output Schema
export interface IntegrationRuntimesListOutboundNetworkDependenciesEndpointsOutput {
  value?: {
    category?: string;
    endpoints?: {
      domainName?: string;
      endpointDetails?: { port?: number }[];
    }[];
  }[];
}
export const IntegrationRuntimesListOutboundNetworkDependenciesEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          category: Schema.optional(Schema.String),
          endpoints: Schema.optional(
            Schema.Array(
              Schema.Struct({
                domainName: Schema.optional(Schema.String),
                endpointDetails: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      port: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<IntegrationRuntimesListOutboundNetworkDependenciesEndpointsOutput>;

// The operation
/**
 * Gets the list of outbound network dependencies for a given Azure-SSIS integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimesListOutboundNetworkDependenciesEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      IntegrationRuntimesListOutboundNetworkDependenciesEndpointsInput,
    outputSchema:
      IntegrationRuntimesListOutboundNetworkDependenciesEndpointsOutput,
  }));
// Input Schema
export interface IntegrationRuntimesRegenerateAuthKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
  keyName?: "authKey1" | "authKey2";
}
export const IntegrationRuntimesRegenerateAuthKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.optional(Schema.Literals(["authKey1", "authKey2"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/regenerateAuthKey",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesRegenerateAuthKeyInput>;

// Output Schema
export interface IntegrationRuntimesRegenerateAuthKeyOutput {
  authKey1?: string;
  authKey2?: string;
}
export const IntegrationRuntimesRegenerateAuthKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authKey1: Schema.optional(Schema.String),
    authKey2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationRuntimesRegenerateAuthKeyOutput>;

// The operation
/**
 * Regenerates the authentication key for an integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimesRegenerateAuthKey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimesRegenerateAuthKeyInput,
    outputSchema: IntegrationRuntimesRegenerateAuthKeyOutput,
  }));
// Input Schema
export interface IntegrationRuntimesRemoveLinksInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesRemoveLinksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/removeLinks",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesRemoveLinksInput>;

// Output Schema
export type IntegrationRuntimesRemoveLinksOutput = void;
export const IntegrationRuntimesRemoveLinksOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationRuntimesRemoveLinksOutput>;

// The operation
/**
 * Remove all linked integration runtimes under specific data factory in a self-hosted integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimesRemoveLinks =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimesRemoveLinksInput,
    outputSchema: IntegrationRuntimesRemoveLinksOutput,
  }));
// Input Schema
export interface IntegrationRuntimesStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/start",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesStartInput>;

// Output Schema
export interface IntegrationRuntimesStartOutput {
  name?: string;
  properties: {
    type: "Managed" | "SelfHosted";
    dataFactoryName?: string;
    state?:
      | "Initial"
      | "Stopped"
      | "Started"
      | "Starting"
      | "Stopping"
      | "NeedRegistration"
      | "Online"
      | "Limited"
      | "Offline"
      | "AccessDenied";
  };
}
export const IntegrationRuntimesStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.Struct({
      type: Schema.Literals(["Managed", "SelfHosted"]),
      dataFactoryName: Schema.optional(Schema.String),
      state: Schema.optional(
        Schema.Literals([
          "Initial",
          "Stopped",
          "Started",
          "Starting",
          "Stopping",
          "NeedRegistration",
          "Online",
          "Limited",
          "Offline",
          "AccessDenied",
        ]),
      ),
    }),
  }) as unknown as Schema.Codec<IntegrationRuntimesStartOutput>;

// The operation
/**
 * Starts a ManagedReserved type integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimesStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimesStartInput,
    outputSchema: IntegrationRuntimesStartOutput,
  }),
);
// Input Schema
export interface IntegrationRuntimesStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/stop",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesStopInput>;

// Output Schema
export type IntegrationRuntimesStopOutput = void;
export const IntegrationRuntimesStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationRuntimesStopOutput>;

// The operation
/**
 * Stops a ManagedReserved type integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimesStop = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimesStopInput,
    outputSchema: IntegrationRuntimesStopOutput,
  }),
);
// Input Schema
export interface IntegrationRuntimesSyncCredentialsInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesSyncCredentialsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/syncCredentials",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesSyncCredentialsInput>;

// Output Schema
export type IntegrationRuntimesSyncCredentialsOutput = void;
export const IntegrationRuntimesSyncCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationRuntimesSyncCredentialsOutput>;

// The operation
/**
 * Force the integration runtime to synchronize credentials across integration runtime nodes, and this will override the credentials across all worker nodes with those available on the dispatcher node. If you already have the latest credential backup file, you should manually import it (preferred) on any self-hosted integration runtime node than using this API directly.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimesSyncCredentials =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimesSyncCredentialsInput,
    outputSchema: IntegrationRuntimesSyncCredentialsOutput,
  }));
// Input Schema
export interface IntegrationRuntimesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
  autoUpdate?: "On" | "Off";
  updateDelayOffset?: string;
}
export const IntegrationRuntimesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    autoUpdate: Schema.optional(Schema.Literals(["On", "Off"])),
    updateDelayOffset: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesUpdateInput>;

// Output Schema
export interface IntegrationRuntimesUpdateOutput {
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
export const IntegrationRuntimesUpdateOutput =
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
  }) as unknown as Schema.Codec<IntegrationRuntimesUpdateOutput>;

// The operation
/**
 * Updates an integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimesUpdateInput,
    outputSchema: IntegrationRuntimesUpdateOutput,
  }),
);
// Input Schema
export interface IntegrationRuntimesUpgradeInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesUpgradeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/upgrade",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesUpgradeInput>;

// Output Schema
export type IntegrationRuntimesUpgradeOutput = void;
export const IntegrationRuntimesUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationRuntimesUpgradeOutput>;

// The operation
/**
 * Upgrade self-hosted integration runtime to latest version if availability.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param integrationRuntimeName - The integration runtime name.
 */
export const IntegrationRuntimesUpgrade = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimesUpgradeInput,
    outputSchema: IntegrationRuntimesUpgradeOutput,
  }),
);
// Input Schema
export interface LinkedServicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  linkedServiceName: string;
  properties: {
    type: string;
    version?: string;
    connectVia?: {
      type: "IntegrationRuntimeReference";
      referenceName: string;
      parameters?: Record<string, unknown>;
    };
    description?: string;
    parameters?: Record<
      string,
      {
        type:
          | "Object"
          | "String"
          | "Int"
          | "Float"
          | "Bool"
          | "Array"
          | "SecureString";
        defaultValue?: unknown;
      }
    >;
    annotations?: unknown[];
  };
  etag?: string;
}
export const LinkedServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    linkedServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      type: Schema.String,
      version: Schema.optional(Schema.String),
      connectVia: Schema.optional(
        Schema.Struct({
          type: Schema.Literals(["IntegrationRuntimeReference"]),
          referenceName: Schema.String,
          parameters: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
        }),
      ),
      description: Schema.optional(Schema.String),
      parameters: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            type: Schema.Literals([
              "Object",
              "String",
              "Int",
              "Float",
              "Bool",
              "Array",
              "SecureString",
            ]),
            defaultValue: Schema.optional(Schema.Unknown),
          }),
        ),
      ),
      annotations: Schema.optional(Schema.Array(Schema.Unknown)),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/linkedservices/{linkedServiceName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<LinkedServicesCreateOrUpdateInput>;

// Output Schema
export interface LinkedServicesCreateOrUpdateOutput {
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
export const LinkedServicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<LinkedServicesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a linked service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param linkedServiceName - The linked service name.
 * @param if-match - ETag of the linkedService entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
 */
export const LinkedServicesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LinkedServicesCreateOrUpdateInput,
    outputSchema: LinkedServicesCreateOrUpdateOutput,
  }));
// Input Schema
export interface LinkedServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  linkedServiceName: string;
}
export const LinkedServicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    linkedServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/linkedservices/{linkedServiceName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<LinkedServicesDeleteInput>;

// Output Schema
export type LinkedServicesDeleteOutput = void;
export const LinkedServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LinkedServicesDeleteOutput>;

// The operation
/**
 * Deletes a linked service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param linkedServiceName - The linked service name.
 */
export const LinkedServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LinkedServicesDeleteInput,
    outputSchema: LinkedServicesDeleteOutput,
  }),
);
// Input Schema
export interface LinkedServicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  linkedServiceName: string;
}
export const LinkedServicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    linkedServiceName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/linkedservices/{linkedServiceName}",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<LinkedServicesGetInput>;

// Output Schema
export interface LinkedServicesGetOutput {
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
export const LinkedServicesGetOutput =
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
  }) as unknown as Schema.Codec<LinkedServicesGetOutput>;

// The operation
/**
 * Gets a linked service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param linkedServiceName - The linked service name.
 * @param if-none-match - ETag of the linked service entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
 */
export const LinkedServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkedServicesGetInput,
  outputSchema: LinkedServicesGetOutput,
}));
// Input Schema
export interface LinkedServicesListByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
}
export const LinkedServicesListByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/linkedservices",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<LinkedServicesListByFactoryInput>;

// Output Schema
export interface LinkedServicesListByFactoryOutput {
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
export const LinkedServicesListByFactoryOutput =
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
  }) as unknown as Schema.Codec<LinkedServicesListByFactoryOutput>;

// The operation
/**
 * Lists linked services.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const LinkedServicesListByFactory = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LinkedServicesListByFactoryInput,
    outputSchema: LinkedServicesListByFactoryOutput,
  }),
);
// Input Schema
export interface ManagedPrivateEndpointsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  managedVirtualNetworkName: string;
  managedPrivateEndpointName: string;
  properties: {
    connectionState?: {
      actionsRequired?: string;
      description?: string;
      status?: string;
    };
    fqdns?: string[];
    groupId?: string;
    isReserved?: boolean;
    privateLinkResourceId?: string;
    provisioningState?: string;
  };
  etag?: string;
}
export const ManagedPrivateEndpointsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    managedVirtualNetworkName: Schema.String.pipe(T.PathParam()),
    managedPrivateEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      connectionState: Schema.optional(
        Schema.Struct({
          actionsRequired: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
        }),
      ),
      fqdns: Schema.optional(Schema.Array(Schema.String)),
      groupId: Schema.optional(Schema.String),
      isReserved: Schema.optional(Schema.Boolean),
      privateLinkResourceId: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsCreateOrUpdateInput>;

// Output Schema
export interface ManagedPrivateEndpointsCreateOrUpdateOutput {
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
export const ManagedPrivateEndpointsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedPrivateEndpointsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a managed private endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param managedVirtualNetworkName - Managed virtual network name
 * @param managedPrivateEndpointName - Managed private endpoint name
 * @param if-match - ETag of the managed private endpoint entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
 */
export const ManagedPrivateEndpointsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedPrivateEndpointsCreateOrUpdateInput,
    outputSchema: ManagedPrivateEndpointsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ManagedPrivateEndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  managedVirtualNetworkName: string;
  managedPrivateEndpointName: string;
}
export const ManagedPrivateEndpointsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    managedVirtualNetworkName: Schema.String.pipe(T.PathParam()),
    managedPrivateEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsDeleteInput>;

// Output Schema
export type ManagedPrivateEndpointsDeleteOutput = void;
export const ManagedPrivateEndpointsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedPrivateEndpointsDeleteOutput>;

// The operation
/**
 * Deletes a managed private endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param managedVirtualNetworkName - Managed virtual network name
 * @param managedPrivateEndpointName - Managed private endpoint name
 */
export const ManagedPrivateEndpointsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedPrivateEndpointsDeleteInput,
    outputSchema: ManagedPrivateEndpointsDeleteOutput,
  }));
// Input Schema
export interface ManagedPrivateEndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  managedVirtualNetworkName: string;
  managedPrivateEndpointName: string;
}
export const ManagedPrivateEndpointsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    managedVirtualNetworkName: Schema.String.pipe(T.PathParam()),
    managedPrivateEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsGetInput>;

// Output Schema
export interface ManagedPrivateEndpointsGetOutput {
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
export const ManagedPrivateEndpointsGetOutput =
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
  }) as unknown as Schema.Codec<ManagedPrivateEndpointsGetOutput>;

// The operation
/**
 * Gets a managed private endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param managedVirtualNetworkName - Managed virtual network name
 * @param managedPrivateEndpointName - Managed private endpoint name
 * @param if-none-match - ETag of the managed private endpoint entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
 */
export const ManagedPrivateEndpointsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedPrivateEndpointsGetInput,
    outputSchema: ManagedPrivateEndpointsGetOutput,
  }),
);
// Input Schema
export interface ManagedPrivateEndpointsListByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  managedVirtualNetworkName: string;
}
export const ManagedPrivateEndpointsListByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    managedVirtualNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}/managedPrivateEndpoints",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsListByFactoryInput>;

// Output Schema
export interface ManagedPrivateEndpointsListByFactoryOutput {
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
export const ManagedPrivateEndpointsListByFactoryOutput =
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
  }) as unknown as Schema.Codec<ManagedPrivateEndpointsListByFactoryOutput>;

// The operation
/**
 * Lists managed private endpoints.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param managedVirtualNetworkName - Managed virtual network name
 */
export const ManagedPrivateEndpointsListByFactory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedPrivateEndpointsListByFactoryInput,
    outputSchema: ManagedPrivateEndpointsListByFactoryOutput,
  }));
// Input Schema
export interface ManagedVirtualNetworksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  managedVirtualNetworkName: string;
  properties: { vNetId?: string; alias?: string };
  etag?: string;
}
export const ManagedVirtualNetworksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    managedVirtualNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      vNetId: Schema.optional(Schema.String),
      alias: Schema.optional(Schema.String),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ManagedVirtualNetworksCreateOrUpdateInput>;

// Output Schema
export interface ManagedVirtualNetworksCreateOrUpdateOutput {
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
export const ManagedVirtualNetworksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedVirtualNetworksCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a managed Virtual Network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param managedVirtualNetworkName - Managed virtual network name
 * @param if-match - ETag of the managed Virtual Network entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
 */
export const ManagedVirtualNetworksCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedVirtualNetworksCreateOrUpdateInput,
    outputSchema: ManagedVirtualNetworksCreateOrUpdateOutput,
  }));
// Input Schema
export interface ManagedVirtualNetworksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  managedVirtualNetworkName: string;
}
export const ManagedVirtualNetworksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    managedVirtualNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ManagedVirtualNetworksGetInput>;

// Output Schema
export interface ManagedVirtualNetworksGetOutput {
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
export const ManagedVirtualNetworksGetOutput =
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
  }) as unknown as Schema.Codec<ManagedVirtualNetworksGetOutput>;

// The operation
/**
 * Gets a managed Virtual Network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param managedVirtualNetworkName - Managed virtual network name
 * @param if-none-match - ETag of the managed Virtual Network entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
 */
export const ManagedVirtualNetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedVirtualNetworksGetInput,
    outputSchema: ManagedVirtualNetworksGetOutput,
  }),
);
// Input Schema
export interface ManagedVirtualNetworksListByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
}
export const ManagedVirtualNetworksListByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<ManagedVirtualNetworksListByFactoryInput>;

// Output Schema
export interface ManagedVirtualNetworksListByFactoryOutput {
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
export const ManagedVirtualNetworksListByFactoryOutput =
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
  }) as unknown as Schema.Codec<ManagedVirtualNetworksListByFactoryOutput>;

// The operation
/**
 * Lists managed Virtual Networks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const ManagedVirtualNetworksListByFactory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedVirtualNetworksListByFactoryInput,
    outputSchema: ManagedVirtualNetworksListByFactoryOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DataFactory/operations",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    origin?: string;
    display?: {
      description?: string;
      provider?: string;
      resource?: string;
      operation?: string;
    };
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
          aggregationType?: string;
          enableRegionalMdmAccount?: string;
          sourceMdmAccount?: string;
          sourceMdmNamespace?: string;
          availabilities?: { timeGrain?: string; blobDuration?: string }[];
          dimensions?: {
            name?: string;
            displayName?: string;
            toBeExportedForShoebox?: boolean;
          }[];
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
        origin: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
          }),
        ),
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
                      aggregationType: Schema.optional(Schema.String),
                      enableRegionalMdmAccount: Schema.optional(Schema.String),
                      sourceMdmAccount: Schema.optional(Schema.String),
                      sourceMdmNamespace: Schema.optional(Schema.String),
                      availabilities: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            timeGrain: Schema.optional(Schema.String),
                            blobDuration: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
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
 * Lists the available Azure Data Factory API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PipelineRunsCancelInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  runId: string;
  isRecursive?: boolean;
}
export const PipelineRunsCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    runId: Schema.String.pipe(T.PathParam()),
    isRecursive: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelineruns/{runId}/cancel",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<PipelineRunsCancelInput>;

// Output Schema
export type PipelineRunsCancelOutput = void;
export const PipelineRunsCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PipelineRunsCancelOutput>;

// The operation
/**
 * Cancel a pipeline run by its run ID.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param runId - The pipeline run identifier.
 * @param isRecursive - If true, cancel all the Child pipelines that are triggered by the current pipeline.
 */
export const PipelineRunsCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PipelineRunsCancelInput,
  outputSchema: PipelineRunsCancelOutput,
}));
// Input Schema
export interface PipelineRunsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  runId: string;
}
export const PipelineRunsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  factoryName: Schema.String.pipe(T.PathParam()),
  runId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelineruns/{runId}",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<PipelineRunsGetInput>;

// Output Schema
export interface PipelineRunsGetOutput {
  runId?: string;
  runGroupId?: string;
  isLatest?: boolean;
  pipelineName?: string;
  parameters?: Record<string, string>;
  runDimensions?: Record<string, string>;
  invokedBy?: {
    name?: string;
    id?: string;
    invokedByType?: string;
    pipelineName?: string;
    pipelineRunId?: string;
  };
  lastUpdated?: string;
  runStart?: string;
  runEnd?: string;
  durationInMs?: number;
  status?: string;
  message?: string;
}
export const PipelineRunsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  runId: Schema.optional(Schema.String),
  runGroupId: Schema.optional(Schema.String),
  isLatest: Schema.optional(Schema.Boolean),
  pipelineName: Schema.optional(Schema.String),
  parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  runDimensions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  invokedBy: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      id: Schema.optional(Schema.String),
      invokedByType: Schema.optional(Schema.String),
      pipelineName: Schema.optional(Schema.String),
      pipelineRunId: Schema.optional(Schema.String),
    }),
  ),
  lastUpdated: Schema.optional(Schema.String),
  runStart: Schema.optional(Schema.String),
  runEnd: Schema.optional(Schema.String),
  durationInMs: Schema.optional(Schema.Number),
  status: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<PipelineRunsGetOutput>;

// The operation
/**
 * Get a pipeline run by its run ID.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param runId - The pipeline run identifier.
 */
export const PipelineRunsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PipelineRunsGetInput,
  outputSchema: PipelineRunsGetOutput,
}));
// Input Schema
export interface PipelineRunsQueryByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  continuationToken?: string;
  lastUpdatedAfter: string;
  lastUpdatedBefore: string;
  filters?: {
    operand:
      | "PipelineName"
      | "Status"
      | "RunStart"
      | "RunEnd"
      | "ActivityName"
      | "ActivityRunStart"
      | "ActivityRunEnd"
      | "ActivityType"
      | "TriggerName"
      | "TriggerRunTimestamp"
      | "RunGroupId"
      | "LatestOnly";
    operator: "Equals" | "NotEquals" | "In" | "NotIn";
    values: string[];
  }[];
  orderBy?: {
    orderBy:
      | "RunStart"
      | "RunEnd"
      | "PipelineName"
      | "Status"
      | "ActivityName"
      | "ActivityRunStart"
      | "ActivityRunEnd"
      | "TriggerName"
      | "TriggerRunTimestamp";
    order: "ASC" | "DESC";
  }[];
}
export const PipelineRunsQueryByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    continuationToken: Schema.optional(Schema.String),
    lastUpdatedAfter: Schema.String,
    lastUpdatedBefore: Schema.String,
    filters: Schema.optional(
      Schema.Array(
        Schema.Struct({
          operand: Schema.Literals([
            "PipelineName",
            "Status",
            "RunStart",
            "RunEnd",
            "ActivityName",
            "ActivityRunStart",
            "ActivityRunEnd",
            "ActivityType",
            "TriggerName",
            "TriggerRunTimestamp",
            "RunGroupId",
            "LatestOnly",
          ]),
          operator: Schema.Literals(["Equals", "NotEquals", "In", "NotIn"]),
          values: Schema.Array(Schema.String),
        }),
      ),
    ),
    orderBy: Schema.optional(
      Schema.Array(
        Schema.Struct({
          orderBy: Schema.Literals([
            "RunStart",
            "RunEnd",
            "PipelineName",
            "Status",
            "ActivityName",
            "ActivityRunStart",
            "ActivityRunEnd",
            "TriggerName",
            "TriggerRunTimestamp",
          ]),
          order: Schema.Literals(["ASC", "DESC"]),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/queryPipelineRuns",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<PipelineRunsQueryByFactoryInput>;

// Output Schema
export interface PipelineRunsQueryByFactoryOutput {
  value: {
    runId?: string;
    runGroupId?: string;
    isLatest?: boolean;
    pipelineName?: string;
    parameters?: Record<string, string>;
    runDimensions?: Record<string, string>;
    invokedBy?: {
      name?: string;
      id?: string;
      invokedByType?: string;
      pipelineName?: string;
      pipelineRunId?: string;
    };
    lastUpdated?: string;
    runStart?: string;
    runEnd?: string;
    durationInMs?: number;
    status?: string;
    message?: string;
  }[];
  continuationToken?: string;
}
export const PipelineRunsQueryByFactoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        runId: Schema.optional(Schema.String),
        runGroupId: Schema.optional(Schema.String),
        isLatest: Schema.optional(Schema.Boolean),
        pipelineName: Schema.optional(Schema.String),
        parameters: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        runDimensions: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        invokedBy: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            id: Schema.optional(Schema.String),
            invokedByType: Schema.optional(Schema.String),
            pipelineName: Schema.optional(Schema.String),
            pipelineRunId: Schema.optional(Schema.String),
          }),
        ),
        lastUpdated: Schema.optional(Schema.String),
        runStart: Schema.optional(Schema.String),
        runEnd: Schema.optional(Schema.String),
        durationInMs: Schema.optional(Schema.Number),
        status: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PipelineRunsQueryByFactoryOutput>;

// The operation
/**
 * Query pipeline runs in the factory based on input filter conditions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const PipelineRunsQueryByFactory = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PipelineRunsQueryByFactoryInput,
    outputSchema: PipelineRunsQueryByFactoryOutput,
  }),
);
// Input Schema
export interface PipelinesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  pipelineName: string;
  properties: {
    description?: string;
    activities?: {
      name: string;
      type: string;
      description?: string;
      state?: "Active" | "Inactive";
      onInactiveMarkAs?: "Succeeded" | "Failed" | "Skipped";
      dependsOn?: {
        activity: string;
        dependencyConditions: (
          | "Succeeded"
          | "Failed"
          | "Skipped"
          | "Completed"
        )[];
      }[];
      userProperties?: { name: string; value: unknown }[];
    }[];
    parameters?: Record<
      string,
      {
        type:
          | "Object"
          | "String"
          | "Int"
          | "Float"
          | "Bool"
          | "Array"
          | "SecureString";
        defaultValue?: unknown;
      }
    >;
    variables?: Record<
      string,
      { type: "String" | "Bool" | "Array"; defaultValue?: unknown }
    >;
    concurrency?: number;
    annotations?: unknown[];
    runDimensions?: Record<string, unknown>;
    folder?: { name?: string };
    policy?: { elapsedTimeMetric?: { duration?: unknown } };
  };
  etag?: string;
}
export const PipelinesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    pipelineName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.String),
      activities: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            type: Schema.String,
            description: Schema.optional(Schema.String),
            state: Schema.optional(Schema.Literals(["Active", "Inactive"])),
            onInactiveMarkAs: Schema.optional(
              Schema.Literals(["Succeeded", "Failed", "Skipped"]),
            ),
            dependsOn: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  activity: Schema.String,
                  dependencyConditions: Schema.Array(
                    Schema.Literals([
                      "Succeeded",
                      "Failed",
                      "Skipped",
                      "Completed",
                    ]),
                  ),
                }),
              ),
            ),
            userProperties: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  value: Schema.Unknown,
                }),
              ),
            ),
          }),
        ),
      ),
      parameters: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            type: Schema.Literals([
              "Object",
              "String",
              "Int",
              "Float",
              "Bool",
              "Array",
              "SecureString",
            ]),
            defaultValue: Schema.optional(Schema.Unknown),
          }),
        ),
      ),
      variables: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            type: Schema.Literals(["String", "Bool", "Array"]),
            defaultValue: Schema.optional(Schema.Unknown),
          }),
        ),
      ),
      concurrency: Schema.optional(Schema.Number),
      annotations: Schema.optional(Schema.Array(Schema.Unknown)),
      runDimensions: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      folder: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
        }),
      ),
      policy: Schema.optional(
        Schema.Struct({
          elapsedTimeMetric: Schema.optional(
            Schema.Struct({
              duration: Schema.optional(Schema.Unknown),
            }),
          ),
        }),
      ),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<PipelinesCreateOrUpdateInput>;

// Output Schema
export interface PipelinesCreateOrUpdateOutput {
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
export const PipelinesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PipelinesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a pipeline.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param pipelineName - The pipeline name.
 * @param if-match - ETag of the pipeline entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
 */
export const PipelinesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PipelinesCreateOrUpdateInput,
    outputSchema: PipelinesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface PipelinesCreateRunInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  pipelineName: string;
  referencePipelineRunId?: string;
  isRecovery?: boolean;
  startActivityName?: string;
  startFromFailure?: boolean;
}
export const PipelinesCreateRunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    pipelineName: Schema.String.pipe(T.PathParam()),
    referencePipelineRunId: Schema.optional(Schema.String),
    isRecovery: Schema.optional(Schema.Boolean),
    startActivityName: Schema.optional(Schema.String),
    startFromFailure: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName}/createRun",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<PipelinesCreateRunInput>;

// Output Schema
export interface PipelinesCreateRunOutput {
  runId: string;
}
export const PipelinesCreateRunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runId: Schema.String,
  }) as unknown as Schema.Codec<PipelinesCreateRunOutput>;

// The operation
/**
 * Creates a run of a pipeline.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param pipelineName - The pipeline name.
 * @param referencePipelineRunId - The pipeline run identifier. If run ID is specified the parameters of the specified run will be used to create a new run.
 * @param isRecovery - Recovery mode flag. If recovery mode is set to true, the specified referenced pipeline run and the new run will be grouped under the same groupId.
 * @param startActivityName - In recovery mode, the rerun will start from this activity. If not specified, all activities will run.
 * @param startFromFailure - In recovery mode, if set to true, the rerun will start from failed activities. The property will be used only if startActivityName is not specified.
 */
export const PipelinesCreateRun = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PipelinesCreateRunInput,
  outputSchema: PipelinesCreateRunOutput,
}));
// Input Schema
export interface PipelinesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  pipelineName: string;
}
export const PipelinesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  factoryName: Schema.String.pipe(T.PathParam()),
  pipelineName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName}",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<PipelinesDeleteInput>;

// Output Schema
export type PipelinesDeleteOutput = void;
export const PipelinesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PipelinesDeleteOutput>;

// The operation
/**
 * Deletes a pipeline.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param pipelineName - The pipeline name.
 */
export const PipelinesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PipelinesDeleteInput,
  outputSchema: PipelinesDeleteOutput,
}));
// Input Schema
export interface PipelinesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  pipelineName: string;
}
export const PipelinesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  factoryName: Schema.String.pipe(T.PathParam()),
  pipelineName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName}",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<PipelinesGetInput>;

// Output Schema
export interface PipelinesGetOutput {
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
export const PipelinesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PipelinesGetOutput>;

// The operation
/**
 * Gets a pipeline.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param pipelineName - The pipeline name.
 * @param if-none-match - ETag of the pipeline entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
 */
export const PipelinesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PipelinesGetInput,
  outputSchema: PipelinesGetOutput,
}));
// Input Schema
export interface PipelinesListByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
}
export const PipelinesListByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<PipelinesListByFactoryInput>;

// Output Schema
export interface PipelinesListByFactoryOutput {
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
export const PipelinesListByFactoryOutput =
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
  }) as unknown as Schema.Codec<PipelinesListByFactoryOutput>;

// The operation
/**
 * Lists pipelines.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const PipelinesListByFactory = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PipelinesListByFactoryInput,
    outputSchema: PipelinesListByFactoryOutput,
  }),
);
// Input Schema
export interface PrivateEndpointConnectionCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateLinkServiceConnectionState?: {
      status?: string;
      description?: string;
      actionsRequired?: string;
    };
    privateEndpoint?: { id?: string };
  };
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
}
export const PrivateEndpointConnectionCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionCreateOrUpdateOutput {
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
export const PrivateEndpointConnectionCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionCreateOrUpdateOutput>;

// The operation
/**
 * Approves or rejects a private endpoint connection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param privateEndpointConnectionName - The private endpoint connection name.
 * @param if-match - ETag of the private endpoint connection entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
 */
export const PrivateEndpointConnectionCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionDeleteOutput = void;
export const PrivateEndpointConnectionDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionDeleteOutput>;

// The operation
/**
 * Deletes a private endpoint connection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param privateEndpointConnectionName - The private endpoint connection name.
 */
export const PrivateEndpointConnectionDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionDeleteInput,
    outputSchema: PrivateEndpointConnectionDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionGetInput>;

// Output Schema
export interface PrivateEndpointConnectionGetOutput {
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
export const PrivateEndpointConnectionGetOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionGetOutput>;

// The operation
/**
 * Gets a private endpoint connection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param privateEndpointConnectionName - The private endpoint connection name.
 * @param if-none-match - ETag of the private endpoint connection entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
 */
export const PrivateEndpointConnectionGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionGetInput,
    outputSchema: PrivateEndpointConnectionGetOutput,
  }));
// Input Schema
export interface PrivateEndPointConnectionsListByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
}
export const PrivateEndPointConnectionsListByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/privateEndpointConnections",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndPointConnectionsListByFactoryInput>;

// Output Schema
export interface PrivateEndPointConnectionsListByFactoryOutput {
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
export const PrivateEndPointConnectionsListByFactoryOutput =
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
  }) as unknown as Schema.Codec<PrivateEndPointConnectionsListByFactoryOutput>;

// The operation
/**
 * Lists Private endpoint connections
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const privateEndPointConnectionsListByFactory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndPointConnectionsListByFactoryInput,
    outputSchema: PrivateEndPointConnectionsListByFactoryOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/privateLinkResources",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
  value: { id?: string; name?: string; type?: string; etag?: string }[];
}
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        etag: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Gets the private link resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const privateLinkResourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesGetInput,
    outputSchema: PrivateLinkResourcesGetOutput,
  }),
);
// Input Schema
export interface TriggerRunsCancelInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  triggerName: string;
  runId: string;
}
export const TriggerRunsCancelInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
    runId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/triggerRuns/{runId}/cancel",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<TriggerRunsCancelInput>;

// Output Schema
export type TriggerRunsCancelOutput = void;
export const TriggerRunsCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TriggerRunsCancelOutput>;

// The operation
/**
 * Cancel a single trigger instance by runId.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param runId - The pipeline run identifier.
 */
export const TriggerRunsCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TriggerRunsCancelInput,
  outputSchema: TriggerRunsCancelOutput,
}));
// Input Schema
export interface TriggerRunsQueryByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  continuationToken?: string;
  lastUpdatedAfter: string;
  lastUpdatedBefore: string;
  filters?: {
    operand:
      | "PipelineName"
      | "Status"
      | "RunStart"
      | "RunEnd"
      | "ActivityName"
      | "ActivityRunStart"
      | "ActivityRunEnd"
      | "ActivityType"
      | "TriggerName"
      | "TriggerRunTimestamp"
      | "RunGroupId"
      | "LatestOnly";
    operator: "Equals" | "NotEquals" | "In" | "NotIn";
    values: string[];
  }[];
  orderBy?: {
    orderBy:
      | "RunStart"
      | "RunEnd"
      | "PipelineName"
      | "Status"
      | "ActivityName"
      | "ActivityRunStart"
      | "ActivityRunEnd"
      | "TriggerName"
      | "TriggerRunTimestamp";
    order: "ASC" | "DESC";
  }[];
}
export const TriggerRunsQueryByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    continuationToken: Schema.optional(Schema.String),
    lastUpdatedAfter: Schema.String,
    lastUpdatedBefore: Schema.String,
    filters: Schema.optional(
      Schema.Array(
        Schema.Struct({
          operand: Schema.Literals([
            "PipelineName",
            "Status",
            "RunStart",
            "RunEnd",
            "ActivityName",
            "ActivityRunStart",
            "ActivityRunEnd",
            "ActivityType",
            "TriggerName",
            "TriggerRunTimestamp",
            "RunGroupId",
            "LatestOnly",
          ]),
          operator: Schema.Literals(["Equals", "NotEquals", "In", "NotIn"]),
          values: Schema.Array(Schema.String),
        }),
      ),
    ),
    orderBy: Schema.optional(
      Schema.Array(
        Schema.Struct({
          orderBy: Schema.Literals([
            "RunStart",
            "RunEnd",
            "PipelineName",
            "Status",
            "ActivityName",
            "ActivityRunStart",
            "ActivityRunEnd",
            "TriggerName",
            "TriggerRunTimestamp",
          ]),
          order: Schema.Literals(["ASC", "DESC"]),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/queryTriggerRuns",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<TriggerRunsQueryByFactoryInput>;

// Output Schema
export interface TriggerRunsQueryByFactoryOutput {
  value: {
    triggerRunId?: string;
    triggerName?: string;
    triggerType?: string;
    triggerRunTimestamp?: string;
    status?: "Succeeded" | "Failed" | "Inprogress";
    message?: string;
    properties?: Record<string, string>;
    triggeredPipelines?: Record<string, string>;
    runDimension?: Record<string, string>;
    dependencyStatus?: Record<string, unknown>;
  }[];
  continuationToken?: string;
}
export const TriggerRunsQueryByFactoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        triggerRunId: Schema.optional(Schema.String),
        triggerName: Schema.optional(Schema.String),
        triggerType: Schema.optional(Schema.String),
        triggerRunTimestamp: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Inprogress"]),
        ),
        message: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        triggeredPipelines: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        runDimension: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        dependencyStatus: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
      }),
    ),
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TriggerRunsQueryByFactoryOutput>;

// The operation
/**
 * Query trigger runs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const TriggerRunsQueryByFactory = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TriggerRunsQueryByFactoryInput,
    outputSchema: TriggerRunsQueryByFactoryOutput,
  }),
);
// Input Schema
export interface TriggerRunsRerunInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  triggerName: string;
  runId: string;
}
export const TriggerRunsRerunInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  factoryName: Schema.String.pipe(T.PathParam()),
  triggerName: Schema.String.pipe(T.PathParam()),
  runId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/triggerRuns/{runId}/rerun",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<TriggerRunsRerunInput>;

// Output Schema
export type TriggerRunsRerunOutput = void;
export const TriggerRunsRerunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TriggerRunsRerunOutput>;

// The operation
/**
 * Rerun single trigger instance by runId.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param runId - The pipeline run identifier.
 */
export const TriggerRunsRerun = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TriggerRunsRerunInput,
  outputSchema: TriggerRunsRerunOutput,
}));
// Input Schema
export interface TriggersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  triggerName: string;
  properties: {
    type: string;
    description?: string;
    runtimeState?: "Started" | "Stopped" | "Disabled";
    annotations?: unknown[];
  };
  etag?: string;
}
export const TriggersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      type: Schema.String,
      description: Schema.optional(Schema.String),
      runtimeState: Schema.optional(
        Schema.Literals(["Started", "Stopped", "Disabled"]),
      ),
      annotations: Schema.optional(Schema.Array(Schema.Unknown)),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<TriggersCreateOrUpdateInput>;

// Output Schema
export interface TriggersCreateOrUpdateOutput {
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
export const TriggersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<TriggersCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a trigger.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param triggerName - The trigger name.
 * @param if-match - ETag of the trigger entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
 */
export const TriggersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TriggersCreateOrUpdateInput,
    outputSchema: TriggersCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface TriggersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  triggerName: string;
}
export const TriggersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  factoryName: Schema.String.pipe(T.PathParam()),
  triggerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<TriggersDeleteInput>;

// Output Schema
export type TriggersDeleteOutput = void;
export const TriggersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TriggersDeleteOutput>;

// The operation
/**
 * Deletes a trigger.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param triggerName - The trigger name.
 */
export const TriggersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TriggersDeleteInput,
  outputSchema: TriggersDeleteOutput,
}));
// Input Schema
export interface TriggersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  triggerName: string;
}
export const TriggersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  factoryName: Schema.String.pipe(T.PathParam()),
  triggerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<TriggersGetInput>;

// Output Schema
export interface TriggersGetOutput {
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
export const TriggersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TriggersGetOutput>;

// The operation
/**
 * Gets a trigger.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param triggerName - The trigger name.
 * @param if-none-match - ETag of the trigger entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
 */
export const TriggersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TriggersGetInput,
  outputSchema: TriggersGetOutput,
}));
// Input Schema
export interface TriggersGetEventSubscriptionStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  triggerName: string;
}
export const TriggersGetEventSubscriptionStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/getEventSubscriptionStatus",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<TriggersGetEventSubscriptionStatusInput>;

// Output Schema
export interface TriggersGetEventSubscriptionStatusOutput {
  triggerName?: string;
  status?:
    | "Enabled"
    | "Provisioning"
    | "Deprovisioning"
    | "Disabled"
    | "Unknown";
}
export const TriggersGetEventSubscriptionStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerName: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "Enabled",
        "Provisioning",
        "Deprovisioning",
        "Disabled",
        "Unknown",
      ]),
    ),
  }) as unknown as Schema.Codec<TriggersGetEventSubscriptionStatusOutput>;

// The operation
/**
 * Get a trigger's event subscription status.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param triggerName - The trigger name.
 */
export const TriggersGetEventSubscriptionStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TriggersGetEventSubscriptionStatusInput,
    outputSchema: TriggersGetEventSubscriptionStatusOutput,
  }));
// Input Schema
export interface TriggersListByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
}
export const TriggersListByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<TriggersListByFactoryInput>;

// Output Schema
export interface TriggersListByFactoryOutput {
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
export const TriggersListByFactoryOutput =
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
  }) as unknown as Schema.Codec<TriggersListByFactoryOutput>;

// The operation
/**
 * Lists triggers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const TriggersListByFactory = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TriggersListByFactoryInput,
    outputSchema: TriggersListByFactoryOutput,
  }),
);
// Input Schema
export interface TriggersQueryByFactoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  continuationToken?: string;
  parentTriggerName?: string;
}
export const TriggersQueryByFactoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    continuationToken: Schema.optional(Schema.String),
    parentTriggerName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/querytriggers",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<TriggersQueryByFactoryInput>;

// Output Schema
export interface TriggersQueryByFactoryOutput {
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
  continuationToken?: string;
}
export const TriggersQueryByFactoryOutput =
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
    continuationToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TriggersQueryByFactoryOutput>;

// The operation
/**
 * Query triggers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 */
export const TriggersQueryByFactory = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TriggersQueryByFactoryInput,
    outputSchema: TriggersQueryByFactoryOutput,
  }),
);
// Input Schema
export interface TriggersStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  triggerName: string;
}
export const TriggersStartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  factoryName: Schema.String.pipe(T.PathParam()),
  triggerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/start",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<TriggersStartInput>;

// Output Schema
export type TriggersStartOutput = void;
export const TriggersStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TriggersStartOutput>;

// The operation
/**
 * Starts a trigger.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param triggerName - The trigger name.
 */
export const TriggersStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TriggersStartInput,
  outputSchema: TriggersStartOutput,
}));
// Input Schema
export interface TriggersStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  triggerName: string;
}
export const TriggersStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  factoryName: Schema.String.pipe(T.PathParam()),
  triggerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/stop",
    apiVersion: "2018-06-01",
  }),
) as unknown as Schema.Codec<TriggersStopInput>;

// Output Schema
export type TriggersStopOutput = void;
export const TriggersStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TriggersStopOutput>;

// The operation
/**
 * Stops a trigger.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param triggerName - The trigger name.
 */
export const TriggersStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TriggersStopInput,
  outputSchema: TriggersStopOutput,
}));
// Input Schema
export interface TriggersSubscribeToEventsInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  triggerName: string;
}
export const TriggersSubscribeToEventsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/subscribeToEvents",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<TriggersSubscribeToEventsInput>;

// Output Schema
export interface TriggersSubscribeToEventsOutput {
  triggerName?: string;
  status?:
    | "Enabled"
    | "Provisioning"
    | "Deprovisioning"
    | "Disabled"
    | "Unknown";
}
export const TriggersSubscribeToEventsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerName: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "Enabled",
        "Provisioning",
        "Deprovisioning",
        "Disabled",
        "Unknown",
      ]),
    ),
  }) as unknown as Schema.Codec<TriggersSubscribeToEventsOutput>;

// The operation
/**
 * Subscribe event trigger to events.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param triggerName - The trigger name.
 */
export const TriggersSubscribeToEvents = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TriggersSubscribeToEventsInput,
    outputSchema: TriggersSubscribeToEventsOutput,
  }),
);
// Input Schema
export interface TriggersUnsubscribeFromEventsInput {
  subscriptionId: string;
  resourceGroupName: string;
  factoryName: string;
  triggerName: string;
}
export const TriggersUnsubscribeFromEventsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    factoryName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/unsubscribeFromEvents",
      apiVersion: "2018-06-01",
    }),
  ) as unknown as Schema.Codec<TriggersUnsubscribeFromEventsInput>;

// Output Schema
export interface TriggersUnsubscribeFromEventsOutput {
  triggerName?: string;
  status?:
    | "Enabled"
    | "Provisioning"
    | "Deprovisioning"
    | "Disabled"
    | "Unknown";
}
export const TriggersUnsubscribeFromEventsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerName: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "Enabled",
        "Provisioning",
        "Deprovisioning",
        "Disabled",
        "Unknown",
      ]),
    ),
  }) as unknown as Schema.Codec<TriggersUnsubscribeFromEventsOutput>;

// The operation
/**
 * Unsubscribe event trigger from events.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param factoryName - The factory name.
 * @param triggerName - The trigger name.
 */
export const TriggersUnsubscribeFromEvents =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TriggersUnsubscribeFromEventsInput,
    outputSchema: TriggersUnsubscribeFromEventsOutput,
  }));
