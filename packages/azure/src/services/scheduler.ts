/**
 * Azure Scheduler API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface JobCollectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobCollectionName: string;
  id?: string;
  type?: string;
  name?: string;
  location?: string;
  tags?: Record<string, string>;
  properties?: {
    sku?: { name?: "Standard" | "Free" | "P10Premium" | "P20Premium" };
    state?: "Enabled" | "Disabled" | "Suspended" | "Deleted";
    quota?: {
      maxJobCount?: number;
      maxJobOccurrence?: number;
      maxRecurrence?: {
        frequency?: "Minute" | "Hour" | "Day" | "Week" | "Month";
        interval?: number;
      };
    };
  };
}
export const JobCollectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobCollectionName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.optional(
              Schema.Literals(["Standard", "Free", "P10Premium", "P20Premium"]),
            ),
          }),
        ),
        state: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "Suspended", "Deleted"]),
        ),
        quota: Schema.optional(
          Schema.Struct({
            maxJobCount: Schema.optional(Schema.Number),
            maxJobOccurrence: Schema.optional(Schema.Number),
            maxRecurrence: Schema.optional(
              Schema.Struct({
                frequency: Schema.optional(
                  Schema.Literals(["Minute", "Hour", "Day", "Week", "Month"]),
                ),
                interval: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}",
      apiVersion: "2016-03-01",
    }),
  ) as unknown as Schema.Codec<JobCollectionsCreateOrUpdateInput>;

// Output Schema
export interface JobCollectionsCreateOrUpdateOutput {
  id?: string;
  type?: string;
  name?: string;
  location?: string;
  tags?: Record<string, string>;
  properties?: {
    sku?: { name?: "Standard" | "Free" | "P10Premium" | "P20Premium" };
    state?: "Enabled" | "Disabled" | "Suspended" | "Deleted";
    quota?: {
      maxJobCount?: number;
      maxJobOccurrence?: number;
      maxRecurrence?: {
        frequency?: "Minute" | "Hour" | "Day" | "Week" | "Month";
        interval?: number;
      };
    };
  };
}
export const JobCollectionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.optional(
              Schema.Literals(["Standard", "Free", "P10Premium", "P20Premium"]),
            ),
          }),
        ),
        state: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "Suspended", "Deleted"]),
        ),
        quota: Schema.optional(
          Schema.Struct({
            maxJobCount: Schema.optional(Schema.Number),
            maxJobOccurrence: Schema.optional(Schema.Number),
            maxRecurrence: Schema.optional(
              Schema.Struct({
                frequency: Schema.optional(
                  Schema.Literals(["Minute", "Hour", "Day", "Week", "Month"]),
                ),
                interval: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<JobCollectionsCreateOrUpdateOutput>;

// The operation
/**
 * Provisions a new job collection or updates an existing job collection.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param jobCollectionName - The job collection name.
 * @param api-version - The API version.
 */
export const JobCollectionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JobCollectionsCreateOrUpdateInput,
    outputSchema: JobCollectionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface JobCollectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobCollectionName: string;
}
export const JobCollectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobCollectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}",
      apiVersion: "2016-03-01",
    }),
  ) as unknown as Schema.Codec<JobCollectionsDeleteInput>;

// Output Schema
export type JobCollectionsDeleteOutput = void;
export const JobCollectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<JobCollectionsDeleteOutput>;

// The operation
/**
 * Deletes a job collection.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param jobCollectionName - The job collection name.
 * @param api-version - The API version.
 */
export const JobCollectionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: JobCollectionsDeleteInput,
    outputSchema: JobCollectionsDeleteOutput,
  }),
);
// Input Schema
export interface JobCollectionsDisableInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobCollectionName: string;
}
export const JobCollectionsDisableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobCollectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/disable",
      apiVersion: "2016-03-01",
    }),
  ) as unknown as Schema.Codec<JobCollectionsDisableInput>;

// Output Schema
export type JobCollectionsDisableOutput = void;
export const JobCollectionsDisableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<JobCollectionsDisableOutput>;

// The operation
/**
 * Disables all of the jobs in the job collection.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param jobCollectionName - The job collection name.
 * @param api-version - The API version.
 */
export const JobCollectionsDisable = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: JobCollectionsDisableInput,
    outputSchema: JobCollectionsDisableOutput,
  }),
);
// Input Schema
export interface JobCollectionsEnableInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobCollectionName: string;
}
export const JobCollectionsEnableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobCollectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/enable",
      apiVersion: "2016-03-01",
    }),
  ) as unknown as Schema.Codec<JobCollectionsEnableInput>;

// Output Schema
export type JobCollectionsEnableOutput = void;
export const JobCollectionsEnableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<JobCollectionsEnableOutput>;

// The operation
/**
 * Enables all of the jobs in the job collection.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param jobCollectionName - The job collection name.
 * @param api-version - The API version.
 */
export const JobCollectionsEnable = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: JobCollectionsEnableInput,
    outputSchema: JobCollectionsEnableOutput,
  }),
);
// Input Schema
export interface JobCollectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobCollectionName: string;
}
export const JobCollectionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobCollectionName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}",
    apiVersion: "2016-03-01",
  }),
) as unknown as Schema.Codec<JobCollectionsGetInput>;

// Output Schema
export interface JobCollectionsGetOutput {
  id?: string;
  type?: string;
  name?: string;
  location?: string;
  tags?: Record<string, string>;
  properties?: {
    sku?: { name?: "Standard" | "Free" | "P10Premium" | "P20Premium" };
    state?: "Enabled" | "Disabled" | "Suspended" | "Deleted";
    quota?: {
      maxJobCount?: number;
      maxJobOccurrence?: number;
      maxRecurrence?: {
        frequency?: "Minute" | "Hour" | "Day" | "Week" | "Month";
        interval?: number;
      };
    };
  };
}
export const JobCollectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.optional(
              Schema.Literals(["Standard", "Free", "P10Premium", "P20Premium"]),
            ),
          }),
        ),
        state: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "Suspended", "Deleted"]),
        ),
        quota: Schema.optional(
          Schema.Struct({
            maxJobCount: Schema.optional(Schema.Number),
            maxJobOccurrence: Schema.optional(Schema.Number),
            maxRecurrence: Schema.optional(
              Schema.Struct({
                frequency: Schema.optional(
                  Schema.Literals(["Minute", "Hour", "Day", "Week", "Month"]),
                ),
                interval: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<JobCollectionsGetOutput>;

// The operation
/**
 * Gets a job collection.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param jobCollectionName - The job collection name.
 * @param api-version - The API version.
 */
export const JobCollectionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobCollectionsGetInput,
  outputSchema: JobCollectionsGetOutput,
}));
// Input Schema
export interface JobCollectionsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const JobCollectionsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections",
      apiVersion: "2016-03-01",
    }),
  ) as unknown as Schema.Codec<JobCollectionsListByResourceGroupInput>;

// Output Schema
export interface JobCollectionsListByResourceGroupOutput {
  value?: {
    id?: string;
    type?: string;
    name?: string;
    location?: string;
    tags?: Record<string, string>;
    properties?: {
      sku?: { name?: "Standard" | "Free" | "P10Premium" | "P20Premium" };
      state?: "Enabled" | "Disabled" | "Suspended" | "Deleted";
      quota?: {
        maxJobCount?: number;
        maxJobOccurrence?: number;
        maxRecurrence?: {
          frequency?: "Minute" | "Hour" | "Day" | "Week" | "Month";
          interval?: number;
        };
      };
    };
  }[];
  nextLink?: string;
}
export const JobCollectionsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          properties: Schema.optional(
            Schema.Struct({
              sku: Schema.optional(
                Schema.Struct({
                  name: Schema.optional(
                    Schema.Literals([
                      "Standard",
                      "Free",
                      "P10Premium",
                      "P20Premium",
                    ]),
                  ),
                }),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Enabled",
                  "Disabled",
                  "Suspended",
                  "Deleted",
                ]),
              ),
              quota: Schema.optional(
                Schema.Struct({
                  maxJobCount: Schema.optional(Schema.Number),
                  maxJobOccurrence: Schema.optional(Schema.Number),
                  maxRecurrence: Schema.optional(
                    Schema.Struct({
                      frequency: Schema.optional(
                        Schema.Literals([
                          "Minute",
                          "Hour",
                          "Day",
                          "Week",
                          "Month",
                        ]),
                      ),
                      interval: Schema.optional(Schema.Number),
                    }),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<JobCollectionsListByResourceGroupOutput>;

// The operation
/**
 * Gets all job collections under specified resource group.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param api-version - The API version.
 */
export const JobCollectionsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JobCollectionsListByResourceGroupInput,
    outputSchema: JobCollectionsListByResourceGroupOutput,
  }));
// Input Schema
export interface JobCollectionsListBySubscriptionInput {
  subscriptionId: string;
}
export const JobCollectionsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Scheduler/jobCollections",
      apiVersion: "2016-03-01",
    }),
  ) as unknown as Schema.Codec<JobCollectionsListBySubscriptionInput>;

// Output Schema
export interface JobCollectionsListBySubscriptionOutput {
  value?: {
    id?: string;
    type?: string;
    name?: string;
    location?: string;
    tags?: Record<string, string>;
    properties?: {
      sku?: { name?: "Standard" | "Free" | "P10Premium" | "P20Premium" };
      state?: "Enabled" | "Disabled" | "Suspended" | "Deleted";
      quota?: {
        maxJobCount?: number;
        maxJobOccurrence?: number;
        maxRecurrence?: {
          frequency?: "Minute" | "Hour" | "Day" | "Week" | "Month";
          interval?: number;
        };
      };
    };
  }[];
  nextLink?: string;
}
export const JobCollectionsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          properties: Schema.optional(
            Schema.Struct({
              sku: Schema.optional(
                Schema.Struct({
                  name: Schema.optional(
                    Schema.Literals([
                      "Standard",
                      "Free",
                      "P10Premium",
                      "P20Premium",
                    ]),
                  ),
                }),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Enabled",
                  "Disabled",
                  "Suspended",
                  "Deleted",
                ]),
              ),
              quota: Schema.optional(
                Schema.Struct({
                  maxJobCount: Schema.optional(Schema.Number),
                  maxJobOccurrence: Schema.optional(Schema.Number),
                  maxRecurrence: Schema.optional(
                    Schema.Struct({
                      frequency: Schema.optional(
                        Schema.Literals([
                          "Minute",
                          "Hour",
                          "Day",
                          "Week",
                          "Month",
                        ]),
                      ),
                      interval: Schema.optional(Schema.Number),
                    }),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<JobCollectionsListBySubscriptionOutput>;

// The operation
/**
 * Gets all job collections under specified subscription.
 *
 * @param subscriptionId - The subscription id.
 * @param api-version - The API version.
 */
export const JobCollectionsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JobCollectionsListBySubscriptionInput,
    outputSchema: JobCollectionsListBySubscriptionOutput,
  }));
// Input Schema
export interface JobCollectionsPatchInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobCollectionName: string;
  id?: string;
  type?: string;
  name?: string;
  location?: string;
  tags?: Record<string, string>;
  properties?: {
    sku?: { name?: "Standard" | "Free" | "P10Premium" | "P20Premium" };
    state?: "Enabled" | "Disabled" | "Suspended" | "Deleted";
    quota?: {
      maxJobCount?: number;
      maxJobOccurrence?: number;
      maxRecurrence?: {
        frequency?: "Minute" | "Hour" | "Day" | "Week" | "Month";
        interval?: number;
      };
    };
  };
}
export const JobCollectionsPatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobCollectionName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.optional(
              Schema.Literals(["Standard", "Free", "P10Premium", "P20Premium"]),
            ),
          }),
        ),
        state: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "Suspended", "Deleted"]),
        ),
        quota: Schema.optional(
          Schema.Struct({
            maxJobCount: Schema.optional(Schema.Number),
            maxJobOccurrence: Schema.optional(Schema.Number),
            maxRecurrence: Schema.optional(
              Schema.Struct({
                frequency: Schema.optional(
                  Schema.Literals(["Minute", "Hour", "Day", "Week", "Month"]),
                ),
                interval: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}",
      apiVersion: "2016-03-01",
    }),
  ) as unknown as Schema.Codec<JobCollectionsPatchInput>;

// Output Schema
export interface JobCollectionsPatchOutput {
  id?: string;
  type?: string;
  name?: string;
  location?: string;
  tags?: Record<string, string>;
  properties?: {
    sku?: { name?: "Standard" | "Free" | "P10Premium" | "P20Premium" };
    state?: "Enabled" | "Disabled" | "Suspended" | "Deleted";
    quota?: {
      maxJobCount?: number;
      maxJobOccurrence?: number;
      maxRecurrence?: {
        frequency?: "Minute" | "Hour" | "Day" | "Week" | "Month";
        interval?: number;
      };
    };
  };
}
export const JobCollectionsPatchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.optional(
              Schema.Literals(["Standard", "Free", "P10Premium", "P20Premium"]),
            ),
          }),
        ),
        state: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "Suspended", "Deleted"]),
        ),
        quota: Schema.optional(
          Schema.Struct({
            maxJobCount: Schema.optional(Schema.Number),
            maxJobOccurrence: Schema.optional(Schema.Number),
            maxRecurrence: Schema.optional(
              Schema.Struct({
                frequency: Schema.optional(
                  Schema.Literals(["Minute", "Hour", "Day", "Week", "Month"]),
                ),
                interval: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<JobCollectionsPatchOutput>;

// The operation
/**
 * Patches an existing job collection.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param jobCollectionName - The job collection name.
 * @param api-version - The API version.
 */
export const JobCollectionsPatch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobCollectionsPatchInput,
  outputSchema: JobCollectionsPatchOutput,
}));
// Input Schema
export interface JobsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobCollectionName: string;
  jobName: string;
  id?: string;
  type?: string;
  name?: string;
  properties?: {
    startTime?: string;
    action?: {
      type?:
        | "Http"
        | "Https"
        | "StorageQueue"
        | "ServiceBusQueue"
        | "ServiceBusTopic";
      request?: {
        authentication?: {
          type:
            | "NotSpecified"
            | "ClientCertificate"
            | "ActiveDirectoryOAuth"
            | "Basic";
        };
        uri?: string;
        method?: string;
        body?: string;
        headers?: Record<string, string>;
      };
      queueMessage?: {
        storageAccount?: string;
        queueName?: string;
        sasToken?: string;
        message?: string;
      };
      serviceBusQueueMessage?: {
        authentication?: {
          sasKey?: string;
          sasKeyName?: string;
          type?: "NotSpecified" | "SharedAccessKey";
        };
        brokeredMessageProperties?: {
          contentType?: string;
          correlationId?: string;
          forcePersistence?: boolean;
          label?: string;
          messageId?: string;
          partitionKey?: string;
          replyTo?: string;
          replyToSessionId?: string;
          scheduledEnqueueTimeUtc?: string;
          sessionId?: string;
          timeToLive?: string;
          to?: string;
          viaPartitionKey?: string;
        };
        customMessageProperties?: Record<string, string>;
        message?: string;
        namespace?: string;
        transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
      };
      serviceBusTopicMessage?: {
        authentication?: {
          sasKey?: string;
          sasKeyName?: string;
          type?: "NotSpecified" | "SharedAccessKey";
        };
        brokeredMessageProperties?: {
          contentType?: string;
          correlationId?: string;
          forcePersistence?: boolean;
          label?: string;
          messageId?: string;
          partitionKey?: string;
          replyTo?: string;
          replyToSessionId?: string;
          scheduledEnqueueTimeUtc?: string;
          sessionId?: string;
          timeToLive?: string;
          to?: string;
          viaPartitionKey?: string;
        };
        customMessageProperties?: Record<string, string>;
        message?: string;
        namespace?: string;
        transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
      };
      retryPolicy?: {
        retryType?: "None" | "Fixed";
        retryInterval?: string;
        retryCount?: number;
      };
      errorAction?: {
        type?:
          | "Http"
          | "Https"
          | "StorageQueue"
          | "ServiceBusQueue"
          | "ServiceBusTopic";
        request?: {
          authentication?: {
            type:
              | "NotSpecified"
              | "ClientCertificate"
              | "ActiveDirectoryOAuth"
              | "Basic";
          };
          uri?: string;
          method?: string;
          body?: string;
          headers?: Record<string, string>;
        };
        queueMessage?: {
          storageAccount?: string;
          queueName?: string;
          sasToken?: string;
          message?: string;
        };
        serviceBusQueueMessage?: {
          authentication?: {
            sasKey?: string;
            sasKeyName?: string;
            type?: "NotSpecified" | "SharedAccessKey";
          };
          brokeredMessageProperties?: {
            contentType?: string;
            correlationId?: string;
            forcePersistence?: boolean;
            label?: string;
            messageId?: string;
            partitionKey?: string;
            replyTo?: string;
            replyToSessionId?: string;
            scheduledEnqueueTimeUtc?: string;
            sessionId?: string;
            timeToLive?: string;
            to?: string;
            viaPartitionKey?: string;
          };
          customMessageProperties?: Record<string, string>;
          message?: string;
          namespace?: string;
          transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
        };
        serviceBusTopicMessage?: {
          authentication?: {
            sasKey?: string;
            sasKeyName?: string;
            type?: "NotSpecified" | "SharedAccessKey";
          };
          brokeredMessageProperties?: {
            contentType?: string;
            correlationId?: string;
            forcePersistence?: boolean;
            label?: string;
            messageId?: string;
            partitionKey?: string;
            replyTo?: string;
            replyToSessionId?: string;
            scheduledEnqueueTimeUtc?: string;
            sessionId?: string;
            timeToLive?: string;
            to?: string;
            viaPartitionKey?: string;
          };
          customMessageProperties?: Record<string, string>;
          message?: string;
          namespace?: string;
          transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
        };
        retryPolicy?: {
          retryType?: "None" | "Fixed";
          retryInterval?: string;
          retryCount?: number;
        };
      };
    };
    recurrence?: {
      frequency?: "Minute" | "Hour" | "Day" | "Week" | "Month";
      interval?: number;
      count?: number;
      endTime?: string;
      schedule?: {
        weekDays?: (
          | "Sunday"
          | "Monday"
          | "Tuesday"
          | "Wednesday"
          | "Thursday"
          | "Friday"
          | "Saturday"
        )[];
        hours?: number[];
        minutes?: number[];
        monthDays?: number[];
        monthlyOccurrences?: {
          day?:
            | "Monday"
            | "Tuesday"
            | "Wednesday"
            | "Thursday"
            | "Friday"
            | "Saturday"
            | "Sunday";
          Occurrence?: number;
        }[];
      };
    };
    state?: "Enabled" | "Disabled" | "Faulted" | "Completed";
    status?: {
      executionCount?: number;
      failureCount?: number;
      faultedCount?: number;
      lastExecutionTime?: string;
      nextExecutionTime?: string;
    };
  };
}
export const JobsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobCollectionName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        startTime: Schema.optional(Schema.String),
        action: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals([
                "Http",
                "Https",
                "StorageQueue",
                "ServiceBusQueue",
                "ServiceBusTopic",
              ]),
            ),
            request: Schema.optional(
              Schema.Struct({
                authentication: Schema.optional(
                  Schema.Struct({
                    type: Schema.Literals([
                      "NotSpecified",
                      "ClientCertificate",
                      "ActiveDirectoryOAuth",
                      "Basic",
                    ]),
                  }),
                ),
                uri: Schema.optional(Schema.String),
                method: Schema.optional(Schema.String),
                body: Schema.optional(Schema.String),
                headers: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
              }),
            ),
            queueMessage: Schema.optional(
              Schema.Struct({
                storageAccount: Schema.optional(Schema.String),
                queueName: Schema.optional(Schema.String),
                sasToken: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
              }),
            ),
            serviceBusQueueMessage: Schema.optional(
              Schema.Struct({
                authentication: Schema.optional(
                  Schema.Struct({
                    sasKey: Schema.optional(Schema.String),
                    sasKeyName: Schema.optional(Schema.String),
                    type: Schema.optional(
                      Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                    ),
                  }),
                ),
                brokeredMessageProperties: Schema.optional(
                  Schema.Struct({
                    contentType: Schema.optional(Schema.String),
                    correlationId: Schema.optional(Schema.String),
                    forcePersistence: Schema.optional(Schema.Boolean),
                    label: Schema.optional(Schema.String),
                    messageId: Schema.optional(Schema.String),
                    partitionKey: Schema.optional(Schema.String),
                    replyTo: Schema.optional(Schema.String),
                    replyToSessionId: Schema.optional(Schema.String),
                    scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                    sessionId: Schema.optional(Schema.String),
                    timeToLive: Schema.optional(Schema.String),
                    to: Schema.optional(Schema.String),
                    viaPartitionKey: Schema.optional(Schema.String),
                  }),
                ),
                customMessageProperties: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                message: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
                transportType: Schema.optional(
                  Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                ),
              }),
            ),
            serviceBusTopicMessage: Schema.optional(
              Schema.Struct({
                authentication: Schema.optional(
                  Schema.Struct({
                    sasKey: Schema.optional(Schema.String),
                    sasKeyName: Schema.optional(Schema.String),
                    type: Schema.optional(
                      Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                    ),
                  }),
                ),
                brokeredMessageProperties: Schema.optional(
                  Schema.Struct({
                    contentType: Schema.optional(Schema.String),
                    correlationId: Schema.optional(Schema.String),
                    forcePersistence: Schema.optional(Schema.Boolean),
                    label: Schema.optional(Schema.String),
                    messageId: Schema.optional(Schema.String),
                    partitionKey: Schema.optional(Schema.String),
                    replyTo: Schema.optional(Schema.String),
                    replyToSessionId: Schema.optional(Schema.String),
                    scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                    sessionId: Schema.optional(Schema.String),
                    timeToLive: Schema.optional(Schema.String),
                    to: Schema.optional(Schema.String),
                    viaPartitionKey: Schema.optional(Schema.String),
                  }),
                ),
                customMessageProperties: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                message: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
                transportType: Schema.optional(
                  Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                ),
              }),
            ),
            retryPolicy: Schema.optional(
              Schema.Struct({
                retryType: Schema.optional(Schema.Literals(["None", "Fixed"])),
                retryInterval: Schema.optional(Schema.String),
                retryCount: Schema.optional(Schema.Number),
              }),
            ),
            errorAction: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals([
                    "Http",
                    "Https",
                    "StorageQueue",
                    "ServiceBusQueue",
                    "ServiceBusTopic",
                  ]),
                ),
                request: Schema.optional(
                  Schema.Struct({
                    authentication: Schema.optional(
                      Schema.Struct({
                        type: Schema.Literals([
                          "NotSpecified",
                          "ClientCertificate",
                          "ActiveDirectoryOAuth",
                          "Basic",
                        ]),
                      }),
                    ),
                    uri: Schema.optional(Schema.String),
                    method: Schema.optional(Schema.String),
                    body: Schema.optional(Schema.String),
                    headers: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                  }),
                ),
                queueMessage: Schema.optional(
                  Schema.Struct({
                    storageAccount: Schema.optional(Schema.String),
                    queueName: Schema.optional(Schema.String),
                    sasToken: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                  }),
                ),
                serviceBusQueueMessage: Schema.optional(
                  Schema.Struct({
                    authentication: Schema.optional(
                      Schema.Struct({
                        sasKey: Schema.optional(Schema.String),
                        sasKeyName: Schema.optional(Schema.String),
                        type: Schema.optional(
                          Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                        ),
                      }),
                    ),
                    brokeredMessageProperties: Schema.optional(
                      Schema.Struct({
                        contentType: Schema.optional(Schema.String),
                        correlationId: Schema.optional(Schema.String),
                        forcePersistence: Schema.optional(Schema.Boolean),
                        label: Schema.optional(Schema.String),
                        messageId: Schema.optional(Schema.String),
                        partitionKey: Schema.optional(Schema.String),
                        replyTo: Schema.optional(Schema.String),
                        replyToSessionId: Schema.optional(Schema.String),
                        scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                        sessionId: Schema.optional(Schema.String),
                        timeToLive: Schema.optional(Schema.String),
                        to: Schema.optional(Schema.String),
                        viaPartitionKey: Schema.optional(Schema.String),
                      }),
                    ),
                    customMessageProperties: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    message: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    transportType: Schema.optional(
                      Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                    ),
                  }),
                ),
                serviceBusTopicMessage: Schema.optional(
                  Schema.Struct({
                    authentication: Schema.optional(
                      Schema.Struct({
                        sasKey: Schema.optional(Schema.String),
                        sasKeyName: Schema.optional(Schema.String),
                        type: Schema.optional(
                          Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                        ),
                      }),
                    ),
                    brokeredMessageProperties: Schema.optional(
                      Schema.Struct({
                        contentType: Schema.optional(Schema.String),
                        correlationId: Schema.optional(Schema.String),
                        forcePersistence: Schema.optional(Schema.Boolean),
                        label: Schema.optional(Schema.String),
                        messageId: Schema.optional(Schema.String),
                        partitionKey: Schema.optional(Schema.String),
                        replyTo: Schema.optional(Schema.String),
                        replyToSessionId: Schema.optional(Schema.String),
                        scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                        sessionId: Schema.optional(Schema.String),
                        timeToLive: Schema.optional(Schema.String),
                        to: Schema.optional(Schema.String),
                        viaPartitionKey: Schema.optional(Schema.String),
                      }),
                    ),
                    customMessageProperties: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    message: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    transportType: Schema.optional(
                      Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                    ),
                  }),
                ),
                retryPolicy: Schema.optional(
                  Schema.Struct({
                    retryType: Schema.optional(
                      Schema.Literals(["None", "Fixed"]),
                    ),
                    retryInterval: Schema.optional(Schema.String),
                    retryCount: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
          }),
        ),
        recurrence: Schema.optional(
          Schema.Struct({
            frequency: Schema.optional(
              Schema.Literals(["Minute", "Hour", "Day", "Week", "Month"]),
            ),
            interval: Schema.optional(Schema.Number),
            count: Schema.optional(Schema.Number),
            endTime: Schema.optional(Schema.String),
            schedule: Schema.optional(
              Schema.Struct({
                weekDays: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ]),
                  ),
                ),
                hours: Schema.optional(Schema.Array(Schema.Number)),
                minutes: Schema.optional(Schema.Array(Schema.Number)),
                monthDays: Schema.optional(Schema.Array(Schema.Number)),
                monthlyOccurrences: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      day: Schema.optional(
                        Schema.Literals([
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                          "Friday",
                          "Saturday",
                          "Sunday",
                        ]),
                      ),
                      Occurrence: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        state: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "Faulted", "Completed"]),
        ),
        status: Schema.optional(
          Schema.Struct({
            executionCount: Schema.optional(Schema.Number),
            failureCount: Schema.optional(Schema.Number),
            faultedCount: Schema.optional(Schema.Number),
            lastExecutionTime: Schema.optional(Schema.String),
            nextExecutionTime: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}",
      apiVersion: "2016-03-01",
    }),
  ) as unknown as Schema.Codec<JobsCreateOrUpdateInput>;

// Output Schema
export interface JobsCreateOrUpdateOutput {
  id?: string;
  type?: string;
  name?: string;
  properties?: {
    startTime?: string;
    action?: {
      type?:
        | "Http"
        | "Https"
        | "StorageQueue"
        | "ServiceBusQueue"
        | "ServiceBusTopic";
      request?: {
        authentication?: {
          type:
            | "NotSpecified"
            | "ClientCertificate"
            | "ActiveDirectoryOAuth"
            | "Basic";
        };
        uri?: string;
        method?: string;
        body?: string;
        headers?: Record<string, string>;
      };
      queueMessage?: {
        storageAccount?: string;
        queueName?: string;
        sasToken?: string;
        message?: string;
      };
      serviceBusQueueMessage?: {
        authentication?: {
          sasKey?: string;
          sasKeyName?: string;
          type?: "NotSpecified" | "SharedAccessKey";
        };
        brokeredMessageProperties?: {
          contentType?: string;
          correlationId?: string;
          forcePersistence?: boolean;
          label?: string;
          messageId?: string;
          partitionKey?: string;
          replyTo?: string;
          replyToSessionId?: string;
          scheduledEnqueueTimeUtc?: string;
          sessionId?: string;
          timeToLive?: string;
          to?: string;
          viaPartitionKey?: string;
        };
        customMessageProperties?: Record<string, string>;
        message?: string;
        namespace?: string;
        transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
      };
      serviceBusTopicMessage?: {
        authentication?: {
          sasKey?: string;
          sasKeyName?: string;
          type?: "NotSpecified" | "SharedAccessKey";
        };
        brokeredMessageProperties?: {
          contentType?: string;
          correlationId?: string;
          forcePersistence?: boolean;
          label?: string;
          messageId?: string;
          partitionKey?: string;
          replyTo?: string;
          replyToSessionId?: string;
          scheduledEnqueueTimeUtc?: string;
          sessionId?: string;
          timeToLive?: string;
          to?: string;
          viaPartitionKey?: string;
        };
        customMessageProperties?: Record<string, string>;
        message?: string;
        namespace?: string;
        transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
      };
      retryPolicy?: {
        retryType?: "None" | "Fixed";
        retryInterval?: string;
        retryCount?: number;
      };
      errorAction?: {
        type?:
          | "Http"
          | "Https"
          | "StorageQueue"
          | "ServiceBusQueue"
          | "ServiceBusTopic";
        request?: {
          authentication?: {
            type:
              | "NotSpecified"
              | "ClientCertificate"
              | "ActiveDirectoryOAuth"
              | "Basic";
          };
          uri?: string;
          method?: string;
          body?: string;
          headers?: Record<string, string>;
        };
        queueMessage?: {
          storageAccount?: string;
          queueName?: string;
          sasToken?: string;
          message?: string;
        };
        serviceBusQueueMessage?: {
          authentication?: {
            sasKey?: string;
            sasKeyName?: string;
            type?: "NotSpecified" | "SharedAccessKey";
          };
          brokeredMessageProperties?: {
            contentType?: string;
            correlationId?: string;
            forcePersistence?: boolean;
            label?: string;
            messageId?: string;
            partitionKey?: string;
            replyTo?: string;
            replyToSessionId?: string;
            scheduledEnqueueTimeUtc?: string;
            sessionId?: string;
            timeToLive?: string;
            to?: string;
            viaPartitionKey?: string;
          };
          customMessageProperties?: Record<string, string>;
          message?: string;
          namespace?: string;
          transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
        };
        serviceBusTopicMessage?: {
          authentication?: {
            sasKey?: string;
            sasKeyName?: string;
            type?: "NotSpecified" | "SharedAccessKey";
          };
          brokeredMessageProperties?: {
            contentType?: string;
            correlationId?: string;
            forcePersistence?: boolean;
            label?: string;
            messageId?: string;
            partitionKey?: string;
            replyTo?: string;
            replyToSessionId?: string;
            scheduledEnqueueTimeUtc?: string;
            sessionId?: string;
            timeToLive?: string;
            to?: string;
            viaPartitionKey?: string;
          };
          customMessageProperties?: Record<string, string>;
          message?: string;
          namespace?: string;
          transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
        };
        retryPolicy?: {
          retryType?: "None" | "Fixed";
          retryInterval?: string;
          retryCount?: number;
        };
      };
    };
    recurrence?: {
      frequency?: "Minute" | "Hour" | "Day" | "Week" | "Month";
      interval?: number;
      count?: number;
      endTime?: string;
      schedule?: {
        weekDays?: (
          | "Sunday"
          | "Monday"
          | "Tuesday"
          | "Wednesday"
          | "Thursday"
          | "Friday"
          | "Saturday"
        )[];
        hours?: number[];
        minutes?: number[];
        monthDays?: number[];
        monthlyOccurrences?: {
          day?:
            | "Monday"
            | "Tuesday"
            | "Wednesday"
            | "Thursday"
            | "Friday"
            | "Saturday"
            | "Sunday";
          Occurrence?: number;
        }[];
      };
    };
    state?: "Enabled" | "Disabled" | "Faulted" | "Completed";
    status?: {
      executionCount?: number;
      failureCount?: number;
      faultedCount?: number;
      lastExecutionTime?: string;
      nextExecutionTime?: string;
    };
  };
}
export const JobsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        startTime: Schema.optional(Schema.String),
        action: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals([
                "Http",
                "Https",
                "StorageQueue",
                "ServiceBusQueue",
                "ServiceBusTopic",
              ]),
            ),
            request: Schema.optional(
              Schema.Struct({
                authentication: Schema.optional(
                  Schema.Struct({
                    type: Schema.Literals([
                      "NotSpecified",
                      "ClientCertificate",
                      "ActiveDirectoryOAuth",
                      "Basic",
                    ]),
                  }),
                ),
                uri: Schema.optional(Schema.String),
                method: Schema.optional(Schema.String),
                body: Schema.optional(Schema.String),
                headers: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
              }),
            ),
            queueMessage: Schema.optional(
              Schema.Struct({
                storageAccount: Schema.optional(Schema.String),
                queueName: Schema.optional(Schema.String),
                sasToken: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
              }),
            ),
            serviceBusQueueMessage: Schema.optional(
              Schema.Struct({
                authentication: Schema.optional(
                  Schema.Struct({
                    sasKey: Schema.optional(Schema.String),
                    sasKeyName: Schema.optional(Schema.String),
                    type: Schema.optional(
                      Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                    ),
                  }),
                ),
                brokeredMessageProperties: Schema.optional(
                  Schema.Struct({
                    contentType: Schema.optional(Schema.String),
                    correlationId: Schema.optional(Schema.String),
                    forcePersistence: Schema.optional(Schema.Boolean),
                    label: Schema.optional(Schema.String),
                    messageId: Schema.optional(Schema.String),
                    partitionKey: Schema.optional(Schema.String),
                    replyTo: Schema.optional(Schema.String),
                    replyToSessionId: Schema.optional(Schema.String),
                    scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                    sessionId: Schema.optional(Schema.String),
                    timeToLive: Schema.optional(Schema.String),
                    to: Schema.optional(Schema.String),
                    viaPartitionKey: Schema.optional(Schema.String),
                  }),
                ),
                customMessageProperties: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                message: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
                transportType: Schema.optional(
                  Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                ),
              }),
            ),
            serviceBusTopicMessage: Schema.optional(
              Schema.Struct({
                authentication: Schema.optional(
                  Schema.Struct({
                    sasKey: Schema.optional(Schema.String),
                    sasKeyName: Schema.optional(Schema.String),
                    type: Schema.optional(
                      Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                    ),
                  }),
                ),
                brokeredMessageProperties: Schema.optional(
                  Schema.Struct({
                    contentType: Schema.optional(Schema.String),
                    correlationId: Schema.optional(Schema.String),
                    forcePersistence: Schema.optional(Schema.Boolean),
                    label: Schema.optional(Schema.String),
                    messageId: Schema.optional(Schema.String),
                    partitionKey: Schema.optional(Schema.String),
                    replyTo: Schema.optional(Schema.String),
                    replyToSessionId: Schema.optional(Schema.String),
                    scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                    sessionId: Schema.optional(Schema.String),
                    timeToLive: Schema.optional(Schema.String),
                    to: Schema.optional(Schema.String),
                    viaPartitionKey: Schema.optional(Schema.String),
                  }),
                ),
                customMessageProperties: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                message: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
                transportType: Schema.optional(
                  Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                ),
              }),
            ),
            retryPolicy: Schema.optional(
              Schema.Struct({
                retryType: Schema.optional(Schema.Literals(["None", "Fixed"])),
                retryInterval: Schema.optional(Schema.String),
                retryCount: Schema.optional(Schema.Number),
              }),
            ),
            errorAction: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals([
                    "Http",
                    "Https",
                    "StorageQueue",
                    "ServiceBusQueue",
                    "ServiceBusTopic",
                  ]),
                ),
                request: Schema.optional(
                  Schema.Struct({
                    authentication: Schema.optional(
                      Schema.Struct({
                        type: Schema.Literals([
                          "NotSpecified",
                          "ClientCertificate",
                          "ActiveDirectoryOAuth",
                          "Basic",
                        ]),
                      }),
                    ),
                    uri: Schema.optional(Schema.String),
                    method: Schema.optional(Schema.String),
                    body: Schema.optional(Schema.String),
                    headers: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                  }),
                ),
                queueMessage: Schema.optional(
                  Schema.Struct({
                    storageAccount: Schema.optional(Schema.String),
                    queueName: Schema.optional(Schema.String),
                    sasToken: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                  }),
                ),
                serviceBusQueueMessage: Schema.optional(
                  Schema.Struct({
                    authentication: Schema.optional(
                      Schema.Struct({
                        sasKey: Schema.optional(Schema.String),
                        sasKeyName: Schema.optional(Schema.String),
                        type: Schema.optional(
                          Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                        ),
                      }),
                    ),
                    brokeredMessageProperties: Schema.optional(
                      Schema.Struct({
                        contentType: Schema.optional(Schema.String),
                        correlationId: Schema.optional(Schema.String),
                        forcePersistence: Schema.optional(Schema.Boolean),
                        label: Schema.optional(Schema.String),
                        messageId: Schema.optional(Schema.String),
                        partitionKey: Schema.optional(Schema.String),
                        replyTo: Schema.optional(Schema.String),
                        replyToSessionId: Schema.optional(Schema.String),
                        scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                        sessionId: Schema.optional(Schema.String),
                        timeToLive: Schema.optional(Schema.String),
                        to: Schema.optional(Schema.String),
                        viaPartitionKey: Schema.optional(Schema.String),
                      }),
                    ),
                    customMessageProperties: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    message: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    transportType: Schema.optional(
                      Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                    ),
                  }),
                ),
                serviceBusTopicMessage: Schema.optional(
                  Schema.Struct({
                    authentication: Schema.optional(
                      Schema.Struct({
                        sasKey: Schema.optional(Schema.String),
                        sasKeyName: Schema.optional(Schema.String),
                        type: Schema.optional(
                          Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                        ),
                      }),
                    ),
                    brokeredMessageProperties: Schema.optional(
                      Schema.Struct({
                        contentType: Schema.optional(Schema.String),
                        correlationId: Schema.optional(Schema.String),
                        forcePersistence: Schema.optional(Schema.Boolean),
                        label: Schema.optional(Schema.String),
                        messageId: Schema.optional(Schema.String),
                        partitionKey: Schema.optional(Schema.String),
                        replyTo: Schema.optional(Schema.String),
                        replyToSessionId: Schema.optional(Schema.String),
                        scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                        sessionId: Schema.optional(Schema.String),
                        timeToLive: Schema.optional(Schema.String),
                        to: Schema.optional(Schema.String),
                        viaPartitionKey: Schema.optional(Schema.String),
                      }),
                    ),
                    customMessageProperties: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    message: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    transportType: Schema.optional(
                      Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                    ),
                  }),
                ),
                retryPolicy: Schema.optional(
                  Schema.Struct({
                    retryType: Schema.optional(
                      Schema.Literals(["None", "Fixed"]),
                    ),
                    retryInterval: Schema.optional(Schema.String),
                    retryCount: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
          }),
        ),
        recurrence: Schema.optional(
          Schema.Struct({
            frequency: Schema.optional(
              Schema.Literals(["Minute", "Hour", "Day", "Week", "Month"]),
            ),
            interval: Schema.optional(Schema.Number),
            count: Schema.optional(Schema.Number),
            endTime: Schema.optional(Schema.String),
            schedule: Schema.optional(
              Schema.Struct({
                weekDays: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ]),
                  ),
                ),
                hours: Schema.optional(Schema.Array(Schema.Number)),
                minutes: Schema.optional(Schema.Array(Schema.Number)),
                monthDays: Schema.optional(Schema.Array(Schema.Number)),
                monthlyOccurrences: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      day: Schema.optional(
                        Schema.Literals([
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                          "Friday",
                          "Saturday",
                          "Sunday",
                        ]),
                      ),
                      Occurrence: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        state: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "Faulted", "Completed"]),
        ),
        status: Schema.optional(
          Schema.Struct({
            executionCount: Schema.optional(Schema.Number),
            failureCount: Schema.optional(Schema.Number),
            faultedCount: Schema.optional(Schema.Number),
            lastExecutionTime: Schema.optional(Schema.String),
            nextExecutionTime: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<JobsCreateOrUpdateOutput>;

// The operation
/**
 * Provisions a new job or updates an existing job.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param jobCollectionName - The job collection name.
 * @param jobName - The job name.
 * @param api-version - The API version.
 */
export const JobsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsCreateOrUpdateInput,
  outputSchema: JobsCreateOrUpdateOutput,
}));
// Input Schema
export interface JobsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobCollectionName: string;
  jobName: string;
}
export const JobsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobCollectionName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}",
    apiVersion: "2016-03-01",
  }),
) as unknown as Schema.Codec<JobsDeleteInput>;

// Output Schema
export type JobsDeleteOutput = void;
export const JobsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<JobsDeleteOutput>;

// The operation
/**
 * Deletes a job.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param jobCollectionName - The job collection name.
 * @param jobName - The job name.
 * @param api-version - The API version.
 */
export const JobsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsDeleteInput,
  outputSchema: JobsDeleteOutput,
}));
// Input Schema
export interface JobsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobCollectionName: string;
  jobName: string;
}
export const JobsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobCollectionName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}",
    apiVersion: "2016-03-01",
  }),
) as unknown as Schema.Codec<JobsGetInput>;

// Output Schema
export interface JobsGetOutput {
  id?: string;
  type?: string;
  name?: string;
  properties?: {
    startTime?: string;
    action?: {
      type?:
        | "Http"
        | "Https"
        | "StorageQueue"
        | "ServiceBusQueue"
        | "ServiceBusTopic";
      request?: {
        authentication?: {
          type:
            | "NotSpecified"
            | "ClientCertificate"
            | "ActiveDirectoryOAuth"
            | "Basic";
        };
        uri?: string;
        method?: string;
        body?: string;
        headers?: Record<string, string>;
      };
      queueMessage?: {
        storageAccount?: string;
        queueName?: string;
        sasToken?: string;
        message?: string;
      };
      serviceBusQueueMessage?: {
        authentication?: {
          sasKey?: string;
          sasKeyName?: string;
          type?: "NotSpecified" | "SharedAccessKey";
        };
        brokeredMessageProperties?: {
          contentType?: string;
          correlationId?: string;
          forcePersistence?: boolean;
          label?: string;
          messageId?: string;
          partitionKey?: string;
          replyTo?: string;
          replyToSessionId?: string;
          scheduledEnqueueTimeUtc?: string;
          sessionId?: string;
          timeToLive?: string;
          to?: string;
          viaPartitionKey?: string;
        };
        customMessageProperties?: Record<string, string>;
        message?: string;
        namespace?: string;
        transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
      };
      serviceBusTopicMessage?: {
        authentication?: {
          sasKey?: string;
          sasKeyName?: string;
          type?: "NotSpecified" | "SharedAccessKey";
        };
        brokeredMessageProperties?: {
          contentType?: string;
          correlationId?: string;
          forcePersistence?: boolean;
          label?: string;
          messageId?: string;
          partitionKey?: string;
          replyTo?: string;
          replyToSessionId?: string;
          scheduledEnqueueTimeUtc?: string;
          sessionId?: string;
          timeToLive?: string;
          to?: string;
          viaPartitionKey?: string;
        };
        customMessageProperties?: Record<string, string>;
        message?: string;
        namespace?: string;
        transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
      };
      retryPolicy?: {
        retryType?: "None" | "Fixed";
        retryInterval?: string;
        retryCount?: number;
      };
      errorAction?: {
        type?:
          | "Http"
          | "Https"
          | "StorageQueue"
          | "ServiceBusQueue"
          | "ServiceBusTopic";
        request?: {
          authentication?: {
            type:
              | "NotSpecified"
              | "ClientCertificate"
              | "ActiveDirectoryOAuth"
              | "Basic";
          };
          uri?: string;
          method?: string;
          body?: string;
          headers?: Record<string, string>;
        };
        queueMessage?: {
          storageAccount?: string;
          queueName?: string;
          sasToken?: string;
          message?: string;
        };
        serviceBusQueueMessage?: {
          authentication?: {
            sasKey?: string;
            sasKeyName?: string;
            type?: "NotSpecified" | "SharedAccessKey";
          };
          brokeredMessageProperties?: {
            contentType?: string;
            correlationId?: string;
            forcePersistence?: boolean;
            label?: string;
            messageId?: string;
            partitionKey?: string;
            replyTo?: string;
            replyToSessionId?: string;
            scheduledEnqueueTimeUtc?: string;
            sessionId?: string;
            timeToLive?: string;
            to?: string;
            viaPartitionKey?: string;
          };
          customMessageProperties?: Record<string, string>;
          message?: string;
          namespace?: string;
          transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
        };
        serviceBusTopicMessage?: {
          authentication?: {
            sasKey?: string;
            sasKeyName?: string;
            type?: "NotSpecified" | "SharedAccessKey";
          };
          brokeredMessageProperties?: {
            contentType?: string;
            correlationId?: string;
            forcePersistence?: boolean;
            label?: string;
            messageId?: string;
            partitionKey?: string;
            replyTo?: string;
            replyToSessionId?: string;
            scheduledEnqueueTimeUtc?: string;
            sessionId?: string;
            timeToLive?: string;
            to?: string;
            viaPartitionKey?: string;
          };
          customMessageProperties?: Record<string, string>;
          message?: string;
          namespace?: string;
          transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
        };
        retryPolicy?: {
          retryType?: "None" | "Fixed";
          retryInterval?: string;
          retryCount?: number;
        };
      };
    };
    recurrence?: {
      frequency?: "Minute" | "Hour" | "Day" | "Week" | "Month";
      interval?: number;
      count?: number;
      endTime?: string;
      schedule?: {
        weekDays?: (
          | "Sunday"
          | "Monday"
          | "Tuesday"
          | "Wednesday"
          | "Thursday"
          | "Friday"
          | "Saturday"
        )[];
        hours?: number[];
        minutes?: number[];
        monthDays?: number[];
        monthlyOccurrences?: {
          day?:
            | "Monday"
            | "Tuesday"
            | "Wednesday"
            | "Thursday"
            | "Friday"
            | "Saturday"
            | "Sunday";
          Occurrence?: number;
        }[];
      };
    };
    state?: "Enabled" | "Disabled" | "Faulted" | "Completed";
    status?: {
      executionCount?: number;
      failureCount?: number;
      faultedCount?: number;
      lastExecutionTime?: string;
      nextExecutionTime?: string;
    };
  };
}
export const JobsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      startTime: Schema.optional(Schema.String),
      action: Schema.optional(
        Schema.Struct({
          type: Schema.optional(
            Schema.Literals([
              "Http",
              "Https",
              "StorageQueue",
              "ServiceBusQueue",
              "ServiceBusTopic",
            ]),
          ),
          request: Schema.optional(
            Schema.Struct({
              authentication: Schema.optional(
                Schema.Struct({
                  type: Schema.Literals([
                    "NotSpecified",
                    "ClientCertificate",
                    "ActiveDirectoryOAuth",
                    "Basic",
                  ]),
                }),
              ),
              uri: Schema.optional(Schema.String),
              method: Schema.optional(Schema.String),
              body: Schema.optional(Schema.String),
              headers: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
            }),
          ),
          queueMessage: Schema.optional(
            Schema.Struct({
              storageAccount: Schema.optional(Schema.String),
              queueName: Schema.optional(Schema.String),
              sasToken: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
            }),
          ),
          serviceBusQueueMessage: Schema.optional(
            Schema.Struct({
              authentication: Schema.optional(
                Schema.Struct({
                  sasKey: Schema.optional(Schema.String),
                  sasKeyName: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                  ),
                }),
              ),
              brokeredMessageProperties: Schema.optional(
                Schema.Struct({
                  contentType: Schema.optional(Schema.String),
                  correlationId: Schema.optional(Schema.String),
                  forcePersistence: Schema.optional(Schema.Boolean),
                  label: Schema.optional(Schema.String),
                  messageId: Schema.optional(Schema.String),
                  partitionKey: Schema.optional(Schema.String),
                  replyTo: Schema.optional(Schema.String),
                  replyToSessionId: Schema.optional(Schema.String),
                  scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                  sessionId: Schema.optional(Schema.String),
                  timeToLive: Schema.optional(Schema.String),
                  to: Schema.optional(Schema.String),
                  viaPartitionKey: Schema.optional(Schema.String),
                }),
              ),
              customMessageProperties: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              message: Schema.optional(Schema.String),
              namespace: Schema.optional(Schema.String),
              transportType: Schema.optional(
                Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
              ),
            }),
          ),
          serviceBusTopicMessage: Schema.optional(
            Schema.Struct({
              authentication: Schema.optional(
                Schema.Struct({
                  sasKey: Schema.optional(Schema.String),
                  sasKeyName: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                  ),
                }),
              ),
              brokeredMessageProperties: Schema.optional(
                Schema.Struct({
                  contentType: Schema.optional(Schema.String),
                  correlationId: Schema.optional(Schema.String),
                  forcePersistence: Schema.optional(Schema.Boolean),
                  label: Schema.optional(Schema.String),
                  messageId: Schema.optional(Schema.String),
                  partitionKey: Schema.optional(Schema.String),
                  replyTo: Schema.optional(Schema.String),
                  replyToSessionId: Schema.optional(Schema.String),
                  scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                  sessionId: Schema.optional(Schema.String),
                  timeToLive: Schema.optional(Schema.String),
                  to: Schema.optional(Schema.String),
                  viaPartitionKey: Schema.optional(Schema.String),
                }),
              ),
              customMessageProperties: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              message: Schema.optional(Schema.String),
              namespace: Schema.optional(Schema.String),
              transportType: Schema.optional(
                Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
              ),
            }),
          ),
          retryPolicy: Schema.optional(
            Schema.Struct({
              retryType: Schema.optional(Schema.Literals(["None", "Fixed"])),
              retryInterval: Schema.optional(Schema.String),
              retryCount: Schema.optional(Schema.Number),
            }),
          ),
          errorAction: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals([
                  "Http",
                  "Https",
                  "StorageQueue",
                  "ServiceBusQueue",
                  "ServiceBusTopic",
                ]),
              ),
              request: Schema.optional(
                Schema.Struct({
                  authentication: Schema.optional(
                    Schema.Struct({
                      type: Schema.Literals([
                        "NotSpecified",
                        "ClientCertificate",
                        "ActiveDirectoryOAuth",
                        "Basic",
                      ]),
                    }),
                  ),
                  uri: Schema.optional(Schema.String),
                  method: Schema.optional(Schema.String),
                  body: Schema.optional(Schema.String),
                  headers: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                }),
              ),
              queueMessage: Schema.optional(
                Schema.Struct({
                  storageAccount: Schema.optional(Schema.String),
                  queueName: Schema.optional(Schema.String),
                  sasToken: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                }),
              ),
              serviceBusQueueMessage: Schema.optional(
                Schema.Struct({
                  authentication: Schema.optional(
                    Schema.Struct({
                      sasKey: Schema.optional(Schema.String),
                      sasKeyName: Schema.optional(Schema.String),
                      type: Schema.optional(
                        Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                      ),
                    }),
                  ),
                  brokeredMessageProperties: Schema.optional(
                    Schema.Struct({
                      contentType: Schema.optional(Schema.String),
                      correlationId: Schema.optional(Schema.String),
                      forcePersistence: Schema.optional(Schema.Boolean),
                      label: Schema.optional(Schema.String),
                      messageId: Schema.optional(Schema.String),
                      partitionKey: Schema.optional(Schema.String),
                      replyTo: Schema.optional(Schema.String),
                      replyToSessionId: Schema.optional(Schema.String),
                      scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                      sessionId: Schema.optional(Schema.String),
                      timeToLive: Schema.optional(Schema.String),
                      to: Schema.optional(Schema.String),
                      viaPartitionKey: Schema.optional(Schema.String),
                    }),
                  ),
                  customMessageProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  message: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                  transportType: Schema.optional(
                    Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                  ),
                }),
              ),
              serviceBusTopicMessage: Schema.optional(
                Schema.Struct({
                  authentication: Schema.optional(
                    Schema.Struct({
                      sasKey: Schema.optional(Schema.String),
                      sasKeyName: Schema.optional(Schema.String),
                      type: Schema.optional(
                        Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                      ),
                    }),
                  ),
                  brokeredMessageProperties: Schema.optional(
                    Schema.Struct({
                      contentType: Schema.optional(Schema.String),
                      correlationId: Schema.optional(Schema.String),
                      forcePersistence: Schema.optional(Schema.Boolean),
                      label: Schema.optional(Schema.String),
                      messageId: Schema.optional(Schema.String),
                      partitionKey: Schema.optional(Schema.String),
                      replyTo: Schema.optional(Schema.String),
                      replyToSessionId: Schema.optional(Schema.String),
                      scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                      sessionId: Schema.optional(Schema.String),
                      timeToLive: Schema.optional(Schema.String),
                      to: Schema.optional(Schema.String),
                      viaPartitionKey: Schema.optional(Schema.String),
                    }),
                  ),
                  customMessageProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  message: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                  transportType: Schema.optional(
                    Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                  ),
                }),
              ),
              retryPolicy: Schema.optional(
                Schema.Struct({
                  retryType: Schema.optional(
                    Schema.Literals(["None", "Fixed"]),
                  ),
                  retryInterval: Schema.optional(Schema.String),
                  retryCount: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        }),
      ),
      recurrence: Schema.optional(
        Schema.Struct({
          frequency: Schema.optional(
            Schema.Literals(["Minute", "Hour", "Day", "Week", "Month"]),
          ),
          interval: Schema.optional(Schema.Number),
          count: Schema.optional(Schema.Number),
          endTime: Schema.optional(Schema.String),
          schedule: Schema.optional(
            Schema.Struct({
              weekDays: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ]),
                ),
              ),
              hours: Schema.optional(Schema.Array(Schema.Number)),
              minutes: Schema.optional(Schema.Array(Schema.Number)),
              monthDays: Schema.optional(Schema.Array(Schema.Number)),
              monthlyOccurrences: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    day: Schema.optional(
                      Schema.Literals([
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ]),
                    ),
                    Occurrence: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
      state: Schema.optional(
        Schema.Literals(["Enabled", "Disabled", "Faulted", "Completed"]),
      ),
      status: Schema.optional(
        Schema.Struct({
          executionCount: Schema.optional(Schema.Number),
          failureCount: Schema.optional(Schema.Number),
          faultedCount: Schema.optional(Schema.Number),
          lastExecutionTime: Schema.optional(Schema.String),
          nextExecutionTime: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
}) as unknown as Schema.Codec<JobsGetOutput>;

// The operation
/**
 * Gets a job.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param jobCollectionName - The job collection name.
 * @param jobName - The job name.
 * @param api-version - The API version.
 */
export const JobsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsGetInput,
  outputSchema: JobsGetOutput,
}));
// Input Schema
export interface JobsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobCollectionName: string;
  $top?: number;
  $skip?: number;
  $filter?: string;
}
export const JobsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobCollectionName: Schema.String.pipe(T.PathParam()),
  $top: Schema.optional(Schema.Number),
  $skip: Schema.optional(Schema.Number),
  $filter: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs",
    apiVersion: "2016-03-01",
  }),
) as unknown as Schema.Codec<JobsListInput>;

// Output Schema
export interface JobsListOutput {
  value?: {
    id?: string;
    type?: string;
    name?: string;
    properties?: {
      startTime?: string;
      action?: {
        type?:
          | "Http"
          | "Https"
          | "StorageQueue"
          | "ServiceBusQueue"
          | "ServiceBusTopic";
        request?: {
          authentication?: {
            type:
              | "NotSpecified"
              | "ClientCertificate"
              | "ActiveDirectoryOAuth"
              | "Basic";
          };
          uri?: string;
          method?: string;
          body?: string;
          headers?: Record<string, string>;
        };
        queueMessage?: {
          storageAccount?: string;
          queueName?: string;
          sasToken?: string;
          message?: string;
        };
        serviceBusQueueMessage?: {
          authentication?: {
            sasKey?: string;
            sasKeyName?: string;
            type?: "NotSpecified" | "SharedAccessKey";
          };
          brokeredMessageProperties?: {
            contentType?: string;
            correlationId?: string;
            forcePersistence?: boolean;
            label?: string;
            messageId?: string;
            partitionKey?: string;
            replyTo?: string;
            replyToSessionId?: string;
            scheduledEnqueueTimeUtc?: string;
            sessionId?: string;
            timeToLive?: string;
            to?: string;
            viaPartitionKey?: string;
          };
          customMessageProperties?: Record<string, string>;
          message?: string;
          namespace?: string;
          transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
        };
        serviceBusTopicMessage?: {
          authentication?: {
            sasKey?: string;
            sasKeyName?: string;
            type?: "NotSpecified" | "SharedAccessKey";
          };
          brokeredMessageProperties?: {
            contentType?: string;
            correlationId?: string;
            forcePersistence?: boolean;
            label?: string;
            messageId?: string;
            partitionKey?: string;
            replyTo?: string;
            replyToSessionId?: string;
            scheduledEnqueueTimeUtc?: string;
            sessionId?: string;
            timeToLive?: string;
            to?: string;
            viaPartitionKey?: string;
          };
          customMessageProperties?: Record<string, string>;
          message?: string;
          namespace?: string;
          transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
        };
        retryPolicy?: {
          retryType?: "None" | "Fixed";
          retryInterval?: string;
          retryCount?: number;
        };
        errorAction?: {
          type?:
            | "Http"
            | "Https"
            | "StorageQueue"
            | "ServiceBusQueue"
            | "ServiceBusTopic";
          request?: {
            authentication?: {
              type:
                | "NotSpecified"
                | "ClientCertificate"
                | "ActiveDirectoryOAuth"
                | "Basic";
            };
            uri?: string;
            method?: string;
            body?: string;
            headers?: Record<string, string>;
          };
          queueMessage?: {
            storageAccount?: string;
            queueName?: string;
            sasToken?: string;
            message?: string;
          };
          serviceBusQueueMessage?: {
            authentication?: {
              sasKey?: string;
              sasKeyName?: string;
              type?: "NotSpecified" | "SharedAccessKey";
            };
            brokeredMessageProperties?: {
              contentType?: string;
              correlationId?: string;
              forcePersistence?: boolean;
              label?: string;
              messageId?: string;
              partitionKey?: string;
              replyTo?: string;
              replyToSessionId?: string;
              scheduledEnqueueTimeUtc?: string;
              sessionId?: string;
              timeToLive?: string;
              to?: string;
              viaPartitionKey?: string;
            };
            customMessageProperties?: Record<string, string>;
            message?: string;
            namespace?: string;
            transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
          };
          serviceBusTopicMessage?: {
            authentication?: {
              sasKey?: string;
              sasKeyName?: string;
              type?: "NotSpecified" | "SharedAccessKey";
            };
            brokeredMessageProperties?: {
              contentType?: string;
              correlationId?: string;
              forcePersistence?: boolean;
              label?: string;
              messageId?: string;
              partitionKey?: string;
              replyTo?: string;
              replyToSessionId?: string;
              scheduledEnqueueTimeUtc?: string;
              sessionId?: string;
              timeToLive?: string;
              to?: string;
              viaPartitionKey?: string;
            };
            customMessageProperties?: Record<string, string>;
            message?: string;
            namespace?: string;
            transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
          };
          retryPolicy?: {
            retryType?: "None" | "Fixed";
            retryInterval?: string;
            retryCount?: number;
          };
        };
      };
      recurrence?: {
        frequency?: "Minute" | "Hour" | "Day" | "Week" | "Month";
        interval?: number;
        count?: number;
        endTime?: string;
        schedule?: {
          weekDays?: (
            | "Sunday"
            | "Monday"
            | "Tuesday"
            | "Wednesday"
            | "Thursday"
            | "Friday"
            | "Saturday"
          )[];
          hours?: number[];
          minutes?: number[];
          monthDays?: number[];
          monthlyOccurrences?: {
            day?:
              | "Monday"
              | "Tuesday"
              | "Wednesday"
              | "Thursday"
              | "Friday"
              | "Saturday"
              | "Sunday";
            Occurrence?: number;
          }[];
        };
      };
      state?: "Enabled" | "Disabled" | "Faulted" | "Completed";
      status?: {
        executionCount?: number;
        failureCount?: number;
        faultedCount?: number;
        lastExecutionTime?: string;
        nextExecutionTime?: string;
      };
    };
  }[];
  nextLink?: string;
}
export const JobsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            startTime: Schema.optional(Schema.String),
            action: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals([
                    "Http",
                    "Https",
                    "StorageQueue",
                    "ServiceBusQueue",
                    "ServiceBusTopic",
                  ]),
                ),
                request: Schema.optional(
                  Schema.Struct({
                    authentication: Schema.optional(
                      Schema.Struct({
                        type: Schema.Literals([
                          "NotSpecified",
                          "ClientCertificate",
                          "ActiveDirectoryOAuth",
                          "Basic",
                        ]),
                      }),
                    ),
                    uri: Schema.optional(Schema.String),
                    method: Schema.optional(Schema.String),
                    body: Schema.optional(Schema.String),
                    headers: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                  }),
                ),
                queueMessage: Schema.optional(
                  Schema.Struct({
                    storageAccount: Schema.optional(Schema.String),
                    queueName: Schema.optional(Schema.String),
                    sasToken: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                  }),
                ),
                serviceBusQueueMessage: Schema.optional(
                  Schema.Struct({
                    authentication: Schema.optional(
                      Schema.Struct({
                        sasKey: Schema.optional(Schema.String),
                        sasKeyName: Schema.optional(Schema.String),
                        type: Schema.optional(
                          Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                        ),
                      }),
                    ),
                    brokeredMessageProperties: Schema.optional(
                      Schema.Struct({
                        contentType: Schema.optional(Schema.String),
                        correlationId: Schema.optional(Schema.String),
                        forcePersistence: Schema.optional(Schema.Boolean),
                        label: Schema.optional(Schema.String),
                        messageId: Schema.optional(Schema.String),
                        partitionKey: Schema.optional(Schema.String),
                        replyTo: Schema.optional(Schema.String),
                        replyToSessionId: Schema.optional(Schema.String),
                        scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                        sessionId: Schema.optional(Schema.String),
                        timeToLive: Schema.optional(Schema.String),
                        to: Schema.optional(Schema.String),
                        viaPartitionKey: Schema.optional(Schema.String),
                      }),
                    ),
                    customMessageProperties: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    message: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    transportType: Schema.optional(
                      Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                    ),
                  }),
                ),
                serviceBusTopicMessage: Schema.optional(
                  Schema.Struct({
                    authentication: Schema.optional(
                      Schema.Struct({
                        sasKey: Schema.optional(Schema.String),
                        sasKeyName: Schema.optional(Schema.String),
                        type: Schema.optional(
                          Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                        ),
                      }),
                    ),
                    brokeredMessageProperties: Schema.optional(
                      Schema.Struct({
                        contentType: Schema.optional(Schema.String),
                        correlationId: Schema.optional(Schema.String),
                        forcePersistence: Schema.optional(Schema.Boolean),
                        label: Schema.optional(Schema.String),
                        messageId: Schema.optional(Schema.String),
                        partitionKey: Schema.optional(Schema.String),
                        replyTo: Schema.optional(Schema.String),
                        replyToSessionId: Schema.optional(Schema.String),
                        scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                        sessionId: Schema.optional(Schema.String),
                        timeToLive: Schema.optional(Schema.String),
                        to: Schema.optional(Schema.String),
                        viaPartitionKey: Schema.optional(Schema.String),
                      }),
                    ),
                    customMessageProperties: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    message: Schema.optional(Schema.String),
                    namespace: Schema.optional(Schema.String),
                    transportType: Schema.optional(
                      Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                    ),
                  }),
                ),
                retryPolicy: Schema.optional(
                  Schema.Struct({
                    retryType: Schema.optional(
                      Schema.Literals(["None", "Fixed"]),
                    ),
                    retryInterval: Schema.optional(Schema.String),
                    retryCount: Schema.optional(Schema.Number),
                  }),
                ),
                errorAction: Schema.optional(
                  Schema.Struct({
                    type: Schema.optional(
                      Schema.Literals([
                        "Http",
                        "Https",
                        "StorageQueue",
                        "ServiceBusQueue",
                        "ServiceBusTopic",
                      ]),
                    ),
                    request: Schema.optional(
                      Schema.Struct({
                        authentication: Schema.optional(
                          Schema.Struct({
                            type: Schema.Literals([
                              "NotSpecified",
                              "ClientCertificate",
                              "ActiveDirectoryOAuth",
                              "Basic",
                            ]),
                          }),
                        ),
                        uri: Schema.optional(Schema.String),
                        method: Schema.optional(Schema.String),
                        body: Schema.optional(Schema.String),
                        headers: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                      }),
                    ),
                    queueMessage: Schema.optional(
                      Schema.Struct({
                        storageAccount: Schema.optional(Schema.String),
                        queueName: Schema.optional(Schema.String),
                        sasToken: Schema.optional(Schema.String),
                        message: Schema.optional(Schema.String),
                      }),
                    ),
                    serviceBusQueueMessage: Schema.optional(
                      Schema.Struct({
                        authentication: Schema.optional(
                          Schema.Struct({
                            sasKey: Schema.optional(Schema.String),
                            sasKeyName: Schema.optional(Schema.String),
                            type: Schema.optional(
                              Schema.Literals([
                                "NotSpecified",
                                "SharedAccessKey",
                              ]),
                            ),
                          }),
                        ),
                        brokeredMessageProperties: Schema.optional(
                          Schema.Struct({
                            contentType: Schema.optional(Schema.String),
                            correlationId: Schema.optional(Schema.String),
                            forcePersistence: Schema.optional(Schema.Boolean),
                            label: Schema.optional(Schema.String),
                            messageId: Schema.optional(Schema.String),
                            partitionKey: Schema.optional(Schema.String),
                            replyTo: Schema.optional(Schema.String),
                            replyToSessionId: Schema.optional(Schema.String),
                            scheduledEnqueueTimeUtc: Schema.optional(
                              Schema.String,
                            ),
                            sessionId: Schema.optional(Schema.String),
                            timeToLive: Schema.optional(Schema.String),
                            to: Schema.optional(Schema.String),
                            viaPartitionKey: Schema.optional(Schema.String),
                          }),
                        ),
                        customMessageProperties: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                        message: Schema.optional(Schema.String),
                        namespace: Schema.optional(Schema.String),
                        transportType: Schema.optional(
                          Schema.Literals([
                            "NotSpecified",
                            "NetMessaging",
                            "AMQP",
                          ]),
                        ),
                      }),
                    ),
                    serviceBusTopicMessage: Schema.optional(
                      Schema.Struct({
                        authentication: Schema.optional(
                          Schema.Struct({
                            sasKey: Schema.optional(Schema.String),
                            sasKeyName: Schema.optional(Schema.String),
                            type: Schema.optional(
                              Schema.Literals([
                                "NotSpecified",
                                "SharedAccessKey",
                              ]),
                            ),
                          }),
                        ),
                        brokeredMessageProperties: Schema.optional(
                          Schema.Struct({
                            contentType: Schema.optional(Schema.String),
                            correlationId: Schema.optional(Schema.String),
                            forcePersistence: Schema.optional(Schema.Boolean),
                            label: Schema.optional(Schema.String),
                            messageId: Schema.optional(Schema.String),
                            partitionKey: Schema.optional(Schema.String),
                            replyTo: Schema.optional(Schema.String),
                            replyToSessionId: Schema.optional(Schema.String),
                            scheduledEnqueueTimeUtc: Schema.optional(
                              Schema.String,
                            ),
                            sessionId: Schema.optional(Schema.String),
                            timeToLive: Schema.optional(Schema.String),
                            to: Schema.optional(Schema.String),
                            viaPartitionKey: Schema.optional(Schema.String),
                          }),
                        ),
                        customMessageProperties: Schema.optional(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                        message: Schema.optional(Schema.String),
                        namespace: Schema.optional(Schema.String),
                        transportType: Schema.optional(
                          Schema.Literals([
                            "NotSpecified",
                            "NetMessaging",
                            "AMQP",
                          ]),
                        ),
                      }),
                    ),
                    retryPolicy: Schema.optional(
                      Schema.Struct({
                        retryType: Schema.optional(
                          Schema.Literals(["None", "Fixed"]),
                        ),
                        retryInterval: Schema.optional(Schema.String),
                        retryCount: Schema.optional(Schema.Number),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            recurrence: Schema.optional(
              Schema.Struct({
                frequency: Schema.optional(
                  Schema.Literals(["Minute", "Hour", "Day", "Week", "Month"]),
                ),
                interval: Schema.optional(Schema.Number),
                count: Schema.optional(Schema.Number),
                endTime: Schema.optional(Schema.String),
                schedule: Schema.optional(
                  Schema.Struct({
                    weekDays: Schema.optional(
                      Schema.Array(
                        Schema.Literals([
                          "Sunday",
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                          "Friday",
                          "Saturday",
                        ]),
                      ),
                    ),
                    hours: Schema.optional(Schema.Array(Schema.Number)),
                    minutes: Schema.optional(Schema.Array(Schema.Number)),
                    monthDays: Schema.optional(Schema.Array(Schema.Number)),
                    monthlyOccurrences: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          day: Schema.optional(
                            Schema.Literals([
                              "Monday",
                              "Tuesday",
                              "Wednesday",
                              "Thursday",
                              "Friday",
                              "Saturday",
                              "Sunday",
                            ]),
                          ),
                          Occurrence: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            state: Schema.optional(
              Schema.Literals(["Enabled", "Disabled", "Faulted", "Completed"]),
            ),
            status: Schema.optional(
              Schema.Struct({
                executionCount: Schema.optional(Schema.Number),
                failureCount: Schema.optional(Schema.Number),
                faultedCount: Schema.optional(Schema.Number),
                lastExecutionTime: Schema.optional(Schema.String),
                nextExecutionTime: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<JobsListOutput>;

// The operation
/**
 * Lists all jobs under the specified job collection.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param jobCollectionName - The job collection name.
 * @param api-version - The API version.
 * @param $top - The number of jobs to request, in the of range of [1..100].
 * @param $skip - The (0-based) index of the job history list from which to begin requesting entries.
 * @param $filter - The filter to apply on the job state.
 */
export const JobsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsListInput,
  outputSchema: JobsListOutput,
}));
// Input Schema
export interface JobsListJobHistoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobCollectionName: string;
  jobName: string;
  $top?: number;
  $skip?: number;
  $filter?: string;
}
export const JobsListJobHistoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobCollectionName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}/history",
      apiVersion: "2016-03-01",
    }),
  ) as unknown as Schema.Codec<JobsListJobHistoryInput>;

// Output Schema
export interface JobsListJobHistoryOutput {
  value?: {
    id?: string;
    type?: string;
    name?: string;
    properties?: {
      startTime?: string;
      endTime?: string;
      expectedExecutionTime?: string;
      actionName?: "MainAction" | "ErrorAction";
      status?: "Completed" | "Failed" | "Postponed";
      message?: string;
      retryCount?: number;
      repeatCount?: number;
    };
  }[];
  nextLink?: string;
}
export const JobsListJobHistoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              startTime: Schema.optional(Schema.String),
              endTime: Schema.optional(Schema.String),
              expectedExecutionTime: Schema.optional(Schema.String),
              actionName: Schema.optional(
                Schema.Literals(["MainAction", "ErrorAction"]),
              ),
              status: Schema.optional(
                Schema.Literals(["Completed", "Failed", "Postponed"]),
              ),
              message: Schema.optional(Schema.String),
              retryCount: Schema.optional(Schema.Number),
              repeatCount: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<JobsListJobHistoryOutput>;

// The operation
/**
 * Lists job history.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param jobCollectionName - The job collection name.
 * @param jobName - The job name.
 * @param api-version - The API version.
 * @param $top - the number of job history to request, in the of range of [1..100].
 * @param $skip - The (0-based) index of the job history list from which to begin requesting entries.
 * @param $filter - The filter to apply on the job state.
 */
export const JobsListJobHistory = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsListJobHistoryInput,
  outputSchema: JobsListJobHistoryOutput,
}));
// Input Schema
export interface JobsPatchInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobCollectionName: string;
  jobName: string;
  id?: string;
  type?: string;
  name?: string;
  properties?: {
    startTime?: string;
    action?: {
      type?:
        | "Http"
        | "Https"
        | "StorageQueue"
        | "ServiceBusQueue"
        | "ServiceBusTopic";
      request?: {
        authentication?: {
          type:
            | "NotSpecified"
            | "ClientCertificate"
            | "ActiveDirectoryOAuth"
            | "Basic";
        };
        uri?: string;
        method?: string;
        body?: string;
        headers?: Record<string, string>;
      };
      queueMessage?: {
        storageAccount?: string;
        queueName?: string;
        sasToken?: string;
        message?: string;
      };
      serviceBusQueueMessage?: {
        authentication?: {
          sasKey?: string;
          sasKeyName?: string;
          type?: "NotSpecified" | "SharedAccessKey";
        };
        brokeredMessageProperties?: {
          contentType?: string;
          correlationId?: string;
          forcePersistence?: boolean;
          label?: string;
          messageId?: string;
          partitionKey?: string;
          replyTo?: string;
          replyToSessionId?: string;
          scheduledEnqueueTimeUtc?: string;
          sessionId?: string;
          timeToLive?: string;
          to?: string;
          viaPartitionKey?: string;
        };
        customMessageProperties?: Record<string, string>;
        message?: string;
        namespace?: string;
        transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
      };
      serviceBusTopicMessage?: {
        authentication?: {
          sasKey?: string;
          sasKeyName?: string;
          type?: "NotSpecified" | "SharedAccessKey";
        };
        brokeredMessageProperties?: {
          contentType?: string;
          correlationId?: string;
          forcePersistence?: boolean;
          label?: string;
          messageId?: string;
          partitionKey?: string;
          replyTo?: string;
          replyToSessionId?: string;
          scheduledEnqueueTimeUtc?: string;
          sessionId?: string;
          timeToLive?: string;
          to?: string;
          viaPartitionKey?: string;
        };
        customMessageProperties?: Record<string, string>;
        message?: string;
        namespace?: string;
        transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
      };
      retryPolicy?: {
        retryType?: "None" | "Fixed";
        retryInterval?: string;
        retryCount?: number;
      };
      errorAction?: {
        type?:
          | "Http"
          | "Https"
          | "StorageQueue"
          | "ServiceBusQueue"
          | "ServiceBusTopic";
        request?: {
          authentication?: {
            type:
              | "NotSpecified"
              | "ClientCertificate"
              | "ActiveDirectoryOAuth"
              | "Basic";
          };
          uri?: string;
          method?: string;
          body?: string;
          headers?: Record<string, string>;
        };
        queueMessage?: {
          storageAccount?: string;
          queueName?: string;
          sasToken?: string;
          message?: string;
        };
        serviceBusQueueMessage?: {
          authentication?: {
            sasKey?: string;
            sasKeyName?: string;
            type?: "NotSpecified" | "SharedAccessKey";
          };
          brokeredMessageProperties?: {
            contentType?: string;
            correlationId?: string;
            forcePersistence?: boolean;
            label?: string;
            messageId?: string;
            partitionKey?: string;
            replyTo?: string;
            replyToSessionId?: string;
            scheduledEnqueueTimeUtc?: string;
            sessionId?: string;
            timeToLive?: string;
            to?: string;
            viaPartitionKey?: string;
          };
          customMessageProperties?: Record<string, string>;
          message?: string;
          namespace?: string;
          transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
        };
        serviceBusTopicMessage?: {
          authentication?: {
            sasKey?: string;
            sasKeyName?: string;
            type?: "NotSpecified" | "SharedAccessKey";
          };
          brokeredMessageProperties?: {
            contentType?: string;
            correlationId?: string;
            forcePersistence?: boolean;
            label?: string;
            messageId?: string;
            partitionKey?: string;
            replyTo?: string;
            replyToSessionId?: string;
            scheduledEnqueueTimeUtc?: string;
            sessionId?: string;
            timeToLive?: string;
            to?: string;
            viaPartitionKey?: string;
          };
          customMessageProperties?: Record<string, string>;
          message?: string;
          namespace?: string;
          transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
        };
        retryPolicy?: {
          retryType?: "None" | "Fixed";
          retryInterval?: string;
          retryCount?: number;
        };
      };
    };
    recurrence?: {
      frequency?: "Minute" | "Hour" | "Day" | "Week" | "Month";
      interval?: number;
      count?: number;
      endTime?: string;
      schedule?: {
        weekDays?: (
          | "Sunday"
          | "Monday"
          | "Tuesday"
          | "Wednesday"
          | "Thursday"
          | "Friday"
          | "Saturday"
        )[];
        hours?: number[];
        minutes?: number[];
        monthDays?: number[];
        monthlyOccurrences?: {
          day?:
            | "Monday"
            | "Tuesday"
            | "Wednesday"
            | "Thursday"
            | "Friday"
            | "Saturday"
            | "Sunday";
          Occurrence?: number;
        }[];
      };
    };
    state?: "Enabled" | "Disabled" | "Faulted" | "Completed";
    status?: {
      executionCount?: number;
      failureCount?: number;
      faultedCount?: number;
      lastExecutionTime?: string;
      nextExecutionTime?: string;
    };
  };
}
export const JobsPatchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobCollectionName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      startTime: Schema.optional(Schema.String),
      action: Schema.optional(
        Schema.Struct({
          type: Schema.optional(
            Schema.Literals([
              "Http",
              "Https",
              "StorageQueue",
              "ServiceBusQueue",
              "ServiceBusTopic",
            ]),
          ),
          request: Schema.optional(
            Schema.Struct({
              authentication: Schema.optional(
                Schema.Struct({
                  type: Schema.Literals([
                    "NotSpecified",
                    "ClientCertificate",
                    "ActiveDirectoryOAuth",
                    "Basic",
                  ]),
                }),
              ),
              uri: Schema.optional(Schema.String),
              method: Schema.optional(Schema.String),
              body: Schema.optional(Schema.String),
              headers: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
            }),
          ),
          queueMessage: Schema.optional(
            Schema.Struct({
              storageAccount: Schema.optional(Schema.String),
              queueName: Schema.optional(Schema.String),
              sasToken: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
            }),
          ),
          serviceBusQueueMessage: Schema.optional(
            Schema.Struct({
              authentication: Schema.optional(
                Schema.Struct({
                  sasKey: Schema.optional(Schema.String),
                  sasKeyName: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                  ),
                }),
              ),
              brokeredMessageProperties: Schema.optional(
                Schema.Struct({
                  contentType: Schema.optional(Schema.String),
                  correlationId: Schema.optional(Schema.String),
                  forcePersistence: Schema.optional(Schema.Boolean),
                  label: Schema.optional(Schema.String),
                  messageId: Schema.optional(Schema.String),
                  partitionKey: Schema.optional(Schema.String),
                  replyTo: Schema.optional(Schema.String),
                  replyToSessionId: Schema.optional(Schema.String),
                  scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                  sessionId: Schema.optional(Schema.String),
                  timeToLive: Schema.optional(Schema.String),
                  to: Schema.optional(Schema.String),
                  viaPartitionKey: Schema.optional(Schema.String),
                }),
              ),
              customMessageProperties: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              message: Schema.optional(Schema.String),
              namespace: Schema.optional(Schema.String),
              transportType: Schema.optional(
                Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
              ),
            }),
          ),
          serviceBusTopicMessage: Schema.optional(
            Schema.Struct({
              authentication: Schema.optional(
                Schema.Struct({
                  sasKey: Schema.optional(Schema.String),
                  sasKeyName: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                  ),
                }),
              ),
              brokeredMessageProperties: Schema.optional(
                Schema.Struct({
                  contentType: Schema.optional(Schema.String),
                  correlationId: Schema.optional(Schema.String),
                  forcePersistence: Schema.optional(Schema.Boolean),
                  label: Schema.optional(Schema.String),
                  messageId: Schema.optional(Schema.String),
                  partitionKey: Schema.optional(Schema.String),
                  replyTo: Schema.optional(Schema.String),
                  replyToSessionId: Schema.optional(Schema.String),
                  scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                  sessionId: Schema.optional(Schema.String),
                  timeToLive: Schema.optional(Schema.String),
                  to: Schema.optional(Schema.String),
                  viaPartitionKey: Schema.optional(Schema.String),
                }),
              ),
              customMessageProperties: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              message: Schema.optional(Schema.String),
              namespace: Schema.optional(Schema.String),
              transportType: Schema.optional(
                Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
              ),
            }),
          ),
          retryPolicy: Schema.optional(
            Schema.Struct({
              retryType: Schema.optional(Schema.Literals(["None", "Fixed"])),
              retryInterval: Schema.optional(Schema.String),
              retryCount: Schema.optional(Schema.Number),
            }),
          ),
          errorAction: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals([
                  "Http",
                  "Https",
                  "StorageQueue",
                  "ServiceBusQueue",
                  "ServiceBusTopic",
                ]),
              ),
              request: Schema.optional(
                Schema.Struct({
                  authentication: Schema.optional(
                    Schema.Struct({
                      type: Schema.Literals([
                        "NotSpecified",
                        "ClientCertificate",
                        "ActiveDirectoryOAuth",
                        "Basic",
                      ]),
                    }),
                  ),
                  uri: Schema.optional(Schema.String),
                  method: Schema.optional(Schema.String),
                  body: Schema.optional(Schema.String),
                  headers: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                }),
              ),
              queueMessage: Schema.optional(
                Schema.Struct({
                  storageAccount: Schema.optional(Schema.String),
                  queueName: Schema.optional(Schema.String),
                  sasToken: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                }),
              ),
              serviceBusQueueMessage: Schema.optional(
                Schema.Struct({
                  authentication: Schema.optional(
                    Schema.Struct({
                      sasKey: Schema.optional(Schema.String),
                      sasKeyName: Schema.optional(Schema.String),
                      type: Schema.optional(
                        Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                      ),
                    }),
                  ),
                  brokeredMessageProperties: Schema.optional(
                    Schema.Struct({
                      contentType: Schema.optional(Schema.String),
                      correlationId: Schema.optional(Schema.String),
                      forcePersistence: Schema.optional(Schema.Boolean),
                      label: Schema.optional(Schema.String),
                      messageId: Schema.optional(Schema.String),
                      partitionKey: Schema.optional(Schema.String),
                      replyTo: Schema.optional(Schema.String),
                      replyToSessionId: Schema.optional(Schema.String),
                      scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                      sessionId: Schema.optional(Schema.String),
                      timeToLive: Schema.optional(Schema.String),
                      to: Schema.optional(Schema.String),
                      viaPartitionKey: Schema.optional(Schema.String),
                    }),
                  ),
                  customMessageProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  message: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                  transportType: Schema.optional(
                    Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                  ),
                }),
              ),
              serviceBusTopicMessage: Schema.optional(
                Schema.Struct({
                  authentication: Schema.optional(
                    Schema.Struct({
                      sasKey: Schema.optional(Schema.String),
                      sasKeyName: Schema.optional(Schema.String),
                      type: Schema.optional(
                        Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                      ),
                    }),
                  ),
                  brokeredMessageProperties: Schema.optional(
                    Schema.Struct({
                      contentType: Schema.optional(Schema.String),
                      correlationId: Schema.optional(Schema.String),
                      forcePersistence: Schema.optional(Schema.Boolean),
                      label: Schema.optional(Schema.String),
                      messageId: Schema.optional(Schema.String),
                      partitionKey: Schema.optional(Schema.String),
                      replyTo: Schema.optional(Schema.String),
                      replyToSessionId: Schema.optional(Schema.String),
                      scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                      sessionId: Schema.optional(Schema.String),
                      timeToLive: Schema.optional(Schema.String),
                      to: Schema.optional(Schema.String),
                      viaPartitionKey: Schema.optional(Schema.String),
                    }),
                  ),
                  customMessageProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  message: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                  transportType: Schema.optional(
                    Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                  ),
                }),
              ),
              retryPolicy: Schema.optional(
                Schema.Struct({
                  retryType: Schema.optional(
                    Schema.Literals(["None", "Fixed"]),
                  ),
                  retryInterval: Schema.optional(Schema.String),
                  retryCount: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        }),
      ),
      recurrence: Schema.optional(
        Schema.Struct({
          frequency: Schema.optional(
            Schema.Literals(["Minute", "Hour", "Day", "Week", "Month"]),
          ),
          interval: Schema.optional(Schema.Number),
          count: Schema.optional(Schema.Number),
          endTime: Schema.optional(Schema.String),
          schedule: Schema.optional(
            Schema.Struct({
              weekDays: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ]),
                ),
              ),
              hours: Schema.optional(Schema.Array(Schema.Number)),
              minutes: Schema.optional(Schema.Array(Schema.Number)),
              monthDays: Schema.optional(Schema.Array(Schema.Number)),
              monthlyOccurrences: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    day: Schema.optional(
                      Schema.Literals([
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ]),
                    ),
                    Occurrence: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
      state: Schema.optional(
        Schema.Literals(["Enabled", "Disabled", "Faulted", "Completed"]),
      ),
      status: Schema.optional(
        Schema.Struct({
          executionCount: Schema.optional(Schema.Number),
          failureCount: Schema.optional(Schema.Number),
          faultedCount: Schema.optional(Schema.Number),
          lastExecutionTime: Schema.optional(Schema.String),
          nextExecutionTime: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}",
    apiVersion: "2016-03-01",
  }),
) as unknown as Schema.Codec<JobsPatchInput>;

// Output Schema
export interface JobsPatchOutput {
  id?: string;
  type?: string;
  name?: string;
  properties?: {
    startTime?: string;
    action?: {
      type?:
        | "Http"
        | "Https"
        | "StorageQueue"
        | "ServiceBusQueue"
        | "ServiceBusTopic";
      request?: {
        authentication?: {
          type:
            | "NotSpecified"
            | "ClientCertificate"
            | "ActiveDirectoryOAuth"
            | "Basic";
        };
        uri?: string;
        method?: string;
        body?: string;
        headers?: Record<string, string>;
      };
      queueMessage?: {
        storageAccount?: string;
        queueName?: string;
        sasToken?: string;
        message?: string;
      };
      serviceBusQueueMessage?: {
        authentication?: {
          sasKey?: string;
          sasKeyName?: string;
          type?: "NotSpecified" | "SharedAccessKey";
        };
        brokeredMessageProperties?: {
          contentType?: string;
          correlationId?: string;
          forcePersistence?: boolean;
          label?: string;
          messageId?: string;
          partitionKey?: string;
          replyTo?: string;
          replyToSessionId?: string;
          scheduledEnqueueTimeUtc?: string;
          sessionId?: string;
          timeToLive?: string;
          to?: string;
          viaPartitionKey?: string;
        };
        customMessageProperties?: Record<string, string>;
        message?: string;
        namespace?: string;
        transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
      };
      serviceBusTopicMessage?: {
        authentication?: {
          sasKey?: string;
          sasKeyName?: string;
          type?: "NotSpecified" | "SharedAccessKey";
        };
        brokeredMessageProperties?: {
          contentType?: string;
          correlationId?: string;
          forcePersistence?: boolean;
          label?: string;
          messageId?: string;
          partitionKey?: string;
          replyTo?: string;
          replyToSessionId?: string;
          scheduledEnqueueTimeUtc?: string;
          sessionId?: string;
          timeToLive?: string;
          to?: string;
          viaPartitionKey?: string;
        };
        customMessageProperties?: Record<string, string>;
        message?: string;
        namespace?: string;
        transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
      };
      retryPolicy?: {
        retryType?: "None" | "Fixed";
        retryInterval?: string;
        retryCount?: number;
      };
      errorAction?: {
        type?:
          | "Http"
          | "Https"
          | "StorageQueue"
          | "ServiceBusQueue"
          | "ServiceBusTopic";
        request?: {
          authentication?: {
            type:
              | "NotSpecified"
              | "ClientCertificate"
              | "ActiveDirectoryOAuth"
              | "Basic";
          };
          uri?: string;
          method?: string;
          body?: string;
          headers?: Record<string, string>;
        };
        queueMessage?: {
          storageAccount?: string;
          queueName?: string;
          sasToken?: string;
          message?: string;
        };
        serviceBusQueueMessage?: {
          authentication?: {
            sasKey?: string;
            sasKeyName?: string;
            type?: "NotSpecified" | "SharedAccessKey";
          };
          brokeredMessageProperties?: {
            contentType?: string;
            correlationId?: string;
            forcePersistence?: boolean;
            label?: string;
            messageId?: string;
            partitionKey?: string;
            replyTo?: string;
            replyToSessionId?: string;
            scheduledEnqueueTimeUtc?: string;
            sessionId?: string;
            timeToLive?: string;
            to?: string;
            viaPartitionKey?: string;
          };
          customMessageProperties?: Record<string, string>;
          message?: string;
          namespace?: string;
          transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
        };
        serviceBusTopicMessage?: {
          authentication?: {
            sasKey?: string;
            sasKeyName?: string;
            type?: "NotSpecified" | "SharedAccessKey";
          };
          brokeredMessageProperties?: {
            contentType?: string;
            correlationId?: string;
            forcePersistence?: boolean;
            label?: string;
            messageId?: string;
            partitionKey?: string;
            replyTo?: string;
            replyToSessionId?: string;
            scheduledEnqueueTimeUtc?: string;
            sessionId?: string;
            timeToLive?: string;
            to?: string;
            viaPartitionKey?: string;
          };
          customMessageProperties?: Record<string, string>;
          message?: string;
          namespace?: string;
          transportType?: "NotSpecified" | "NetMessaging" | "AMQP";
        };
        retryPolicy?: {
          retryType?: "None" | "Fixed";
          retryInterval?: string;
          retryCount?: number;
        };
      };
    };
    recurrence?: {
      frequency?: "Minute" | "Hour" | "Day" | "Week" | "Month";
      interval?: number;
      count?: number;
      endTime?: string;
      schedule?: {
        weekDays?: (
          | "Sunday"
          | "Monday"
          | "Tuesday"
          | "Wednesday"
          | "Thursday"
          | "Friday"
          | "Saturday"
        )[];
        hours?: number[];
        minutes?: number[];
        monthDays?: number[];
        monthlyOccurrences?: {
          day?:
            | "Monday"
            | "Tuesday"
            | "Wednesday"
            | "Thursday"
            | "Friday"
            | "Saturday"
            | "Sunday";
          Occurrence?: number;
        }[];
      };
    };
    state?: "Enabled" | "Disabled" | "Faulted" | "Completed";
    status?: {
      executionCount?: number;
      failureCount?: number;
      faultedCount?: number;
      lastExecutionTime?: string;
      nextExecutionTime?: string;
    };
  };
}
export const JobsPatchOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      startTime: Schema.optional(Schema.String),
      action: Schema.optional(
        Schema.Struct({
          type: Schema.optional(
            Schema.Literals([
              "Http",
              "Https",
              "StorageQueue",
              "ServiceBusQueue",
              "ServiceBusTopic",
            ]),
          ),
          request: Schema.optional(
            Schema.Struct({
              authentication: Schema.optional(
                Schema.Struct({
                  type: Schema.Literals([
                    "NotSpecified",
                    "ClientCertificate",
                    "ActiveDirectoryOAuth",
                    "Basic",
                  ]),
                }),
              ),
              uri: Schema.optional(Schema.String),
              method: Schema.optional(Schema.String),
              body: Schema.optional(Schema.String),
              headers: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
            }),
          ),
          queueMessage: Schema.optional(
            Schema.Struct({
              storageAccount: Schema.optional(Schema.String),
              queueName: Schema.optional(Schema.String),
              sasToken: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
            }),
          ),
          serviceBusQueueMessage: Schema.optional(
            Schema.Struct({
              authentication: Schema.optional(
                Schema.Struct({
                  sasKey: Schema.optional(Schema.String),
                  sasKeyName: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                  ),
                }),
              ),
              brokeredMessageProperties: Schema.optional(
                Schema.Struct({
                  contentType: Schema.optional(Schema.String),
                  correlationId: Schema.optional(Schema.String),
                  forcePersistence: Schema.optional(Schema.Boolean),
                  label: Schema.optional(Schema.String),
                  messageId: Schema.optional(Schema.String),
                  partitionKey: Schema.optional(Schema.String),
                  replyTo: Schema.optional(Schema.String),
                  replyToSessionId: Schema.optional(Schema.String),
                  scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                  sessionId: Schema.optional(Schema.String),
                  timeToLive: Schema.optional(Schema.String),
                  to: Schema.optional(Schema.String),
                  viaPartitionKey: Schema.optional(Schema.String),
                }),
              ),
              customMessageProperties: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              message: Schema.optional(Schema.String),
              namespace: Schema.optional(Schema.String),
              transportType: Schema.optional(
                Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
              ),
            }),
          ),
          serviceBusTopicMessage: Schema.optional(
            Schema.Struct({
              authentication: Schema.optional(
                Schema.Struct({
                  sasKey: Schema.optional(Schema.String),
                  sasKeyName: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                  ),
                }),
              ),
              brokeredMessageProperties: Schema.optional(
                Schema.Struct({
                  contentType: Schema.optional(Schema.String),
                  correlationId: Schema.optional(Schema.String),
                  forcePersistence: Schema.optional(Schema.Boolean),
                  label: Schema.optional(Schema.String),
                  messageId: Schema.optional(Schema.String),
                  partitionKey: Schema.optional(Schema.String),
                  replyTo: Schema.optional(Schema.String),
                  replyToSessionId: Schema.optional(Schema.String),
                  scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                  sessionId: Schema.optional(Schema.String),
                  timeToLive: Schema.optional(Schema.String),
                  to: Schema.optional(Schema.String),
                  viaPartitionKey: Schema.optional(Schema.String),
                }),
              ),
              customMessageProperties: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              message: Schema.optional(Schema.String),
              namespace: Schema.optional(Schema.String),
              transportType: Schema.optional(
                Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
              ),
            }),
          ),
          retryPolicy: Schema.optional(
            Schema.Struct({
              retryType: Schema.optional(Schema.Literals(["None", "Fixed"])),
              retryInterval: Schema.optional(Schema.String),
              retryCount: Schema.optional(Schema.Number),
            }),
          ),
          errorAction: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals([
                  "Http",
                  "Https",
                  "StorageQueue",
                  "ServiceBusQueue",
                  "ServiceBusTopic",
                ]),
              ),
              request: Schema.optional(
                Schema.Struct({
                  authentication: Schema.optional(
                    Schema.Struct({
                      type: Schema.Literals([
                        "NotSpecified",
                        "ClientCertificate",
                        "ActiveDirectoryOAuth",
                        "Basic",
                      ]),
                    }),
                  ),
                  uri: Schema.optional(Schema.String),
                  method: Schema.optional(Schema.String),
                  body: Schema.optional(Schema.String),
                  headers: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                }),
              ),
              queueMessage: Schema.optional(
                Schema.Struct({
                  storageAccount: Schema.optional(Schema.String),
                  queueName: Schema.optional(Schema.String),
                  sasToken: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                }),
              ),
              serviceBusQueueMessage: Schema.optional(
                Schema.Struct({
                  authentication: Schema.optional(
                    Schema.Struct({
                      sasKey: Schema.optional(Schema.String),
                      sasKeyName: Schema.optional(Schema.String),
                      type: Schema.optional(
                        Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                      ),
                    }),
                  ),
                  brokeredMessageProperties: Schema.optional(
                    Schema.Struct({
                      contentType: Schema.optional(Schema.String),
                      correlationId: Schema.optional(Schema.String),
                      forcePersistence: Schema.optional(Schema.Boolean),
                      label: Schema.optional(Schema.String),
                      messageId: Schema.optional(Schema.String),
                      partitionKey: Schema.optional(Schema.String),
                      replyTo: Schema.optional(Schema.String),
                      replyToSessionId: Schema.optional(Schema.String),
                      scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                      sessionId: Schema.optional(Schema.String),
                      timeToLive: Schema.optional(Schema.String),
                      to: Schema.optional(Schema.String),
                      viaPartitionKey: Schema.optional(Schema.String),
                    }),
                  ),
                  customMessageProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  message: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                  transportType: Schema.optional(
                    Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                  ),
                }),
              ),
              serviceBusTopicMessage: Schema.optional(
                Schema.Struct({
                  authentication: Schema.optional(
                    Schema.Struct({
                      sasKey: Schema.optional(Schema.String),
                      sasKeyName: Schema.optional(Schema.String),
                      type: Schema.optional(
                        Schema.Literals(["NotSpecified", "SharedAccessKey"]),
                      ),
                    }),
                  ),
                  brokeredMessageProperties: Schema.optional(
                    Schema.Struct({
                      contentType: Schema.optional(Schema.String),
                      correlationId: Schema.optional(Schema.String),
                      forcePersistence: Schema.optional(Schema.Boolean),
                      label: Schema.optional(Schema.String),
                      messageId: Schema.optional(Schema.String),
                      partitionKey: Schema.optional(Schema.String),
                      replyTo: Schema.optional(Schema.String),
                      replyToSessionId: Schema.optional(Schema.String),
                      scheduledEnqueueTimeUtc: Schema.optional(Schema.String),
                      sessionId: Schema.optional(Schema.String),
                      timeToLive: Schema.optional(Schema.String),
                      to: Schema.optional(Schema.String),
                      viaPartitionKey: Schema.optional(Schema.String),
                    }),
                  ),
                  customMessageProperties: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  message: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                  transportType: Schema.optional(
                    Schema.Literals(["NotSpecified", "NetMessaging", "AMQP"]),
                  ),
                }),
              ),
              retryPolicy: Schema.optional(
                Schema.Struct({
                  retryType: Schema.optional(
                    Schema.Literals(["None", "Fixed"]),
                  ),
                  retryInterval: Schema.optional(Schema.String),
                  retryCount: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        }),
      ),
      recurrence: Schema.optional(
        Schema.Struct({
          frequency: Schema.optional(
            Schema.Literals(["Minute", "Hour", "Day", "Week", "Month"]),
          ),
          interval: Schema.optional(Schema.Number),
          count: Schema.optional(Schema.Number),
          endTime: Schema.optional(Schema.String),
          schedule: Schema.optional(
            Schema.Struct({
              weekDays: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ]),
                ),
              ),
              hours: Schema.optional(Schema.Array(Schema.Number)),
              minutes: Schema.optional(Schema.Array(Schema.Number)),
              monthDays: Schema.optional(Schema.Array(Schema.Number)),
              monthlyOccurrences: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    day: Schema.optional(
                      Schema.Literals([
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ]),
                    ),
                    Occurrence: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
      state: Schema.optional(
        Schema.Literals(["Enabled", "Disabled", "Faulted", "Completed"]),
      ),
      status: Schema.optional(
        Schema.Struct({
          executionCount: Schema.optional(Schema.Number),
          failureCount: Schema.optional(Schema.Number),
          faultedCount: Schema.optional(Schema.Number),
          lastExecutionTime: Schema.optional(Schema.String),
          nextExecutionTime: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
}) as unknown as Schema.Codec<JobsPatchOutput>;

// The operation
/**
 * Patches an existing job.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param jobCollectionName - The job collection name.
 * @param jobName - The job name.
 * @param api-version - The API version.
 */
export const JobsPatch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsPatchInput,
  outputSchema: JobsPatchOutput,
}));
// Input Schema
export interface JobsRunInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobCollectionName: string;
  jobName: string;
}
export const JobsRunInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobCollectionName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}/run",
    apiVersion: "2016-03-01",
  }),
) as unknown as Schema.Codec<JobsRunInput>;

// Output Schema
export type JobsRunOutput = void;
export const JobsRunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<JobsRunOutput>;

// The operation
/**
 * Runs a job.
 *
 * @param subscriptionId - The subscription id.
 * @param resourceGroupName - The resource group name.
 * @param jobCollectionName - The job collection name.
 * @param jobName - The job name.
 * @param api-version - The API version.
 */
export const JobsRun = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsRunInput,
  outputSchema: JobsRunOutput,
}));
