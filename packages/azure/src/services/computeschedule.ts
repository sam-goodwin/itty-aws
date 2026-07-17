/**
 * Azure Computeschedule API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ComputeSchedule/operations",
    apiVersion: "2025-05-01",
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
export interface ScheduledActionsVirtualMachinesCancelOperationsInput {
  subscriptionId: string;
  locationparameter: string;
  operationIds: string[];
  correlationid: string;
}
export const ScheduledActionsVirtualMachinesCancelOperationsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationparameter: Schema.String.pipe(T.PathParam()),
    operationIds: Schema.Array(Schema.String),
    correlationid: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeSchedule/locations/{locationparameter}/virtualMachinesCancelOperations",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesCancelOperationsInput>;

// Output Schema
export interface ScheduledActionsVirtualMachinesCancelOperationsOutput {
  results: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?: "Unknown" | "Start" | "Deallocate" | "Hibernate";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      timeZone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      completedAt?: string;
      retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
    };
  }[];
}
export const ScheduledActionsVirtualMachinesCancelOperationsOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        resourceId: Schema.optional(Schema.String),
        errorCode: Schema.optional(Schema.String),
        errorDetails: Schema.optional(Schema.String),
        operation: Schema.optional(
          Schema.Struct({
            operationId: Schema.String,
            resourceId: Schema.optional(Schema.String),
            opType: Schema.optional(
              Schema.Literals(["Unknown", "Start", "Deallocate", "Hibernate"]),
            ),
            subscriptionId: Schema.optional(Schema.String),
            deadline: Schema.optional(Schema.String),
            deadlineType: Schema.optional(
              Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
            ),
            state: Schema.optional(
              Schema.Literals([
                "Unknown",
                "PendingScheduling",
                "Scheduled",
                "PendingExecution",
                "Executing",
                "Succeeded",
                "Failed",
                "Cancelled",
                "Blocked",
              ]),
            ),
            timezone: Schema.optional(Schema.String),
            timeZone: Schema.optional(Schema.String),
            resourceOperationError: Schema.optional(
              Schema.Struct({
                errorCode: Schema.String,
                errorDetails: Schema.String,
              }),
            ),
            completedAt: Schema.optional(Schema.String),
            retryPolicy: Schema.optional(
              Schema.Struct({
                retryCount: Schema.optional(Schema.Number),
                retryWindowInMinutes: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesCancelOperationsOutput>;

// The operation
/**
 * VirtualMachinesCancelOperations: Cancel a previously submitted (start/deallocate/hibernate) request
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationparameter - The location name.
 */
export const ScheduledActionsVirtualMachinesCancelOperations =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScheduledActionsVirtualMachinesCancelOperationsInput,
    outputSchema: ScheduledActionsVirtualMachinesCancelOperationsOutput,
  }));
// Input Schema
export interface ScheduledActionsVirtualMachinesExecuteCreateInput {
  subscriptionId: string;
  locationparameter: string;
  resourceConfigParameters: {
    baseProfile?: Record<string, unknown>;
    resourceOverrides?: Record<string, unknown>[];
    resourceCount: number;
    resourcePrefix?: string;
  };
  executionParameters: {
    optimizationPreference?:
      | "Cost"
      | "Availability"
      | "CostAvailabilityBalanced";
    retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
  };
  correlationid?: string;
}
export const ScheduledActionsVirtualMachinesExecuteCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationparameter: Schema.String.pipe(T.PathParam()),
    resourceConfigParameters: Schema.Struct({
      baseProfile: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      resourceOverrides: Schema.optional(
        Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
      ),
      resourceCount: Schema.Number,
      resourcePrefix: Schema.optional(Schema.String),
    }),
    executionParameters: Schema.Struct({
      optimizationPreference: Schema.optional(
        Schema.Literals(["Cost", "Availability", "CostAvailabilityBalanced"]),
      ),
      retryPolicy: Schema.optional(
        Schema.Struct({
          retryCount: Schema.optional(Schema.Number),
          retryWindowInMinutes: Schema.optional(Schema.Number),
        }),
      ),
    }),
    correlationid: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeSchedule/locations/{locationparameter}/virtualMachinesExecuteCreate",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesExecuteCreateInput>;

// Output Schema
export interface ScheduledActionsVirtualMachinesExecuteCreateOutput {
  description: string;
  type: string;
  location: string;
  results?: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?: "Unknown" | "Start" | "Deallocate" | "Hibernate";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      timeZone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      completedAt?: string;
      retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
    };
  }[];
}
export const ScheduledActionsVirtualMachinesExecuteCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.String,
    type: Schema.String,
    location: Schema.String,
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          errorCode: Schema.optional(Schema.String),
          errorDetails: Schema.optional(Schema.String),
          operation: Schema.optional(
            Schema.Struct({
              operationId: Schema.String,
              resourceId: Schema.optional(Schema.String),
              opType: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Start",
                  "Deallocate",
                  "Hibernate",
                ]),
              ),
              subscriptionId: Schema.optional(Schema.String),
              deadline: Schema.optional(Schema.String),
              deadlineType: Schema.optional(
                Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "PendingScheduling",
                  "Scheduled",
                  "PendingExecution",
                  "Executing",
                  "Succeeded",
                  "Failed",
                  "Cancelled",
                  "Blocked",
                ]),
              ),
              timezone: Schema.optional(Schema.String),
              timeZone: Schema.optional(Schema.String),
              resourceOperationError: Schema.optional(
                Schema.Struct({
                  errorCode: Schema.String,
                  errorDetails: Schema.String,
                }),
              ),
              completedAt: Schema.optional(Schema.String),
              retryPolicy: Schema.optional(
                Schema.Struct({
                  retryCount: Schema.optional(Schema.Number),
                  retryWindowInMinutes: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesExecuteCreateOutput>;

// The operation
/**
 * [PRIVATE PREVIEW]: VirtualMachinesExecuteCreate: Execute create operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationparameter - The location name.
 */
export const ScheduledActionsVirtualMachinesExecuteCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScheduledActionsVirtualMachinesExecuteCreateInput,
    outputSchema: ScheduledActionsVirtualMachinesExecuteCreateOutput,
  }));
// Input Schema
export interface ScheduledActionsVirtualMachinesExecuteDeallocateInput {
  subscriptionId: string;
  locationparameter: string;
  executionParameters: {
    optimizationPreference?:
      | "Cost"
      | "Availability"
      | "CostAvailabilityBalanced";
    retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
  };
  resources: { ids: string[] };
  correlationid: string;
}
export const ScheduledActionsVirtualMachinesExecuteDeallocateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationparameter: Schema.String.pipe(T.PathParam()),
    executionParameters: Schema.Struct({
      optimizationPreference: Schema.optional(
        Schema.Literals(["Cost", "Availability", "CostAvailabilityBalanced"]),
      ),
      retryPolicy: Schema.optional(
        Schema.Struct({
          retryCount: Schema.optional(Schema.Number),
          retryWindowInMinutes: Schema.optional(Schema.Number),
        }),
      ),
    }),
    resources: Schema.Struct({
      ids: Schema.Array(Schema.String),
    }),
    correlationid: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeSchedule/locations/{locationparameter}/virtualMachinesExecuteDeallocate",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesExecuteDeallocateInput>;

// Output Schema
export interface ScheduledActionsVirtualMachinesExecuteDeallocateOutput {
  description: string;
  type: string;
  location: string;
  results?: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?: "Unknown" | "Start" | "Deallocate" | "Hibernate";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      timeZone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      completedAt?: string;
      retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
    };
  }[];
}
export const ScheduledActionsVirtualMachinesExecuteDeallocateOutput =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.String,
    type: Schema.String,
    location: Schema.String,
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          errorCode: Schema.optional(Schema.String),
          errorDetails: Schema.optional(Schema.String),
          operation: Schema.optional(
            Schema.Struct({
              operationId: Schema.String,
              resourceId: Schema.optional(Schema.String),
              opType: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Start",
                  "Deallocate",
                  "Hibernate",
                ]),
              ),
              subscriptionId: Schema.optional(Schema.String),
              deadline: Schema.optional(Schema.String),
              deadlineType: Schema.optional(
                Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "PendingScheduling",
                  "Scheduled",
                  "PendingExecution",
                  "Executing",
                  "Succeeded",
                  "Failed",
                  "Cancelled",
                  "Blocked",
                ]),
              ),
              timezone: Schema.optional(Schema.String),
              timeZone: Schema.optional(Schema.String),
              resourceOperationError: Schema.optional(
                Schema.Struct({
                  errorCode: Schema.String,
                  errorDetails: Schema.String,
                }),
              ),
              completedAt: Schema.optional(Schema.String),
              retryPolicy: Schema.optional(
                Schema.Struct({
                  retryCount: Schema.optional(Schema.Number),
                  retryWindowInMinutes: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesExecuteDeallocateOutput>;

// The operation
/**
 * VirtualMachinesExecuteDeallocate: Execute deallocate operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationparameter - The location name.
 */
export const ScheduledActionsVirtualMachinesExecuteDeallocate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScheduledActionsVirtualMachinesExecuteDeallocateInput,
    outputSchema: ScheduledActionsVirtualMachinesExecuteDeallocateOutput,
  }));
// Input Schema
export interface ScheduledActionsVirtualMachinesExecuteDeleteInput {
  subscriptionId: string;
  locationparameter: string;
  executionParameters: {
    optimizationPreference?:
      | "Cost"
      | "Availability"
      | "CostAvailabilityBalanced";
    retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
  };
  resources: { ids: string[] };
  correlationid?: string;
  forceDeletion?: boolean;
}
export const ScheduledActionsVirtualMachinesExecuteDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationparameter: Schema.String.pipe(T.PathParam()),
    executionParameters: Schema.Struct({
      optimizationPreference: Schema.optional(
        Schema.Literals(["Cost", "Availability", "CostAvailabilityBalanced"]),
      ),
      retryPolicy: Schema.optional(
        Schema.Struct({
          retryCount: Schema.optional(Schema.Number),
          retryWindowInMinutes: Schema.optional(Schema.Number),
        }),
      ),
    }),
    resources: Schema.Struct({
      ids: Schema.Array(Schema.String),
    }),
    correlationid: Schema.optional(Schema.String),
    forceDeletion: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeSchedule/locations/{locationparameter}/virtualMachinesExecuteDelete",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesExecuteDeleteInput>;

// Output Schema
export interface ScheduledActionsVirtualMachinesExecuteDeleteOutput {
  description: string;
  type: string;
  location: string;
  results?: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?: "Unknown" | "Start" | "Deallocate" | "Hibernate";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      timeZone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      completedAt?: string;
      retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
    };
  }[];
}
export const ScheduledActionsVirtualMachinesExecuteDeleteOutput =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.String,
    type: Schema.String,
    location: Schema.String,
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          errorCode: Schema.optional(Schema.String),
          errorDetails: Schema.optional(Schema.String),
          operation: Schema.optional(
            Schema.Struct({
              operationId: Schema.String,
              resourceId: Schema.optional(Schema.String),
              opType: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Start",
                  "Deallocate",
                  "Hibernate",
                ]),
              ),
              subscriptionId: Schema.optional(Schema.String),
              deadline: Schema.optional(Schema.String),
              deadlineType: Schema.optional(
                Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "PendingScheduling",
                  "Scheduled",
                  "PendingExecution",
                  "Executing",
                  "Succeeded",
                  "Failed",
                  "Cancelled",
                  "Blocked",
                ]),
              ),
              timezone: Schema.optional(Schema.String),
              timeZone: Schema.optional(Schema.String),
              resourceOperationError: Schema.optional(
                Schema.Struct({
                  errorCode: Schema.String,
                  errorDetails: Schema.String,
                }),
              ),
              completedAt: Schema.optional(Schema.String),
              retryPolicy: Schema.optional(
                Schema.Struct({
                  retryCount: Schema.optional(Schema.Number),
                  retryWindowInMinutes: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesExecuteDeleteOutput>;

// The operation
/**
 * [PRIVATE PREVIEW]: VirtualMachinesExecuteDelete: Execute delete operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationparameter - The location name.
 */
export const ScheduledActionsVirtualMachinesExecuteDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScheduledActionsVirtualMachinesExecuteDeleteInput,
    outputSchema: ScheduledActionsVirtualMachinesExecuteDeleteOutput,
  }));
// Input Schema
export interface ScheduledActionsVirtualMachinesExecuteHibernateInput {
  subscriptionId: string;
  locationparameter: string;
  executionParameters: {
    optimizationPreference?:
      | "Cost"
      | "Availability"
      | "CostAvailabilityBalanced";
    retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
  };
  resources: { ids: string[] };
  correlationid: string;
}
export const ScheduledActionsVirtualMachinesExecuteHibernateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationparameter: Schema.String.pipe(T.PathParam()),
    executionParameters: Schema.Struct({
      optimizationPreference: Schema.optional(
        Schema.Literals(["Cost", "Availability", "CostAvailabilityBalanced"]),
      ),
      retryPolicy: Schema.optional(
        Schema.Struct({
          retryCount: Schema.optional(Schema.Number),
          retryWindowInMinutes: Schema.optional(Schema.Number),
        }),
      ),
    }),
    resources: Schema.Struct({
      ids: Schema.Array(Schema.String),
    }),
    correlationid: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeSchedule/locations/{locationparameter}/virtualMachinesExecuteHibernate",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesExecuteHibernateInput>;

// Output Schema
export interface ScheduledActionsVirtualMachinesExecuteHibernateOutput {
  description: string;
  type: string;
  location: string;
  results?: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?: "Unknown" | "Start" | "Deallocate" | "Hibernate";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      timeZone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      completedAt?: string;
      retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
    };
  }[];
}
export const ScheduledActionsVirtualMachinesExecuteHibernateOutput =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.String,
    type: Schema.String,
    location: Schema.String,
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          errorCode: Schema.optional(Schema.String),
          errorDetails: Schema.optional(Schema.String),
          operation: Schema.optional(
            Schema.Struct({
              operationId: Schema.String,
              resourceId: Schema.optional(Schema.String),
              opType: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Start",
                  "Deallocate",
                  "Hibernate",
                ]),
              ),
              subscriptionId: Schema.optional(Schema.String),
              deadline: Schema.optional(Schema.String),
              deadlineType: Schema.optional(
                Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "PendingScheduling",
                  "Scheduled",
                  "PendingExecution",
                  "Executing",
                  "Succeeded",
                  "Failed",
                  "Cancelled",
                  "Blocked",
                ]),
              ),
              timezone: Schema.optional(Schema.String),
              timeZone: Schema.optional(Schema.String),
              resourceOperationError: Schema.optional(
                Schema.Struct({
                  errorCode: Schema.String,
                  errorDetails: Schema.String,
                }),
              ),
              completedAt: Schema.optional(Schema.String),
              retryPolicy: Schema.optional(
                Schema.Struct({
                  retryCount: Schema.optional(Schema.Number),
                  retryWindowInMinutes: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesExecuteHibernateOutput>;

// The operation
/**
 * VirtualMachinesExecuteHibernate: Execute hibernate operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationparameter - The location name.
 */
export const ScheduledActionsVirtualMachinesExecuteHibernate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScheduledActionsVirtualMachinesExecuteHibernateInput,
    outputSchema: ScheduledActionsVirtualMachinesExecuteHibernateOutput,
  }));
// Input Schema
export interface ScheduledActionsVirtualMachinesExecuteStartInput {
  subscriptionId: string;
  locationparameter: string;
  executionParameters: {
    optimizationPreference?:
      | "Cost"
      | "Availability"
      | "CostAvailabilityBalanced";
    retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
  };
  resources: { ids: string[] };
  correlationid: string;
}
export const ScheduledActionsVirtualMachinesExecuteStartInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationparameter: Schema.String.pipe(T.PathParam()),
    executionParameters: Schema.Struct({
      optimizationPreference: Schema.optional(
        Schema.Literals(["Cost", "Availability", "CostAvailabilityBalanced"]),
      ),
      retryPolicy: Schema.optional(
        Schema.Struct({
          retryCount: Schema.optional(Schema.Number),
          retryWindowInMinutes: Schema.optional(Schema.Number),
        }),
      ),
    }),
    resources: Schema.Struct({
      ids: Schema.Array(Schema.String),
    }),
    correlationid: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeSchedule/locations/{locationparameter}/virtualMachinesExecuteStart",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesExecuteStartInput>;

// Output Schema
export interface ScheduledActionsVirtualMachinesExecuteStartOutput {
  description: string;
  type: string;
  location: string;
  results?: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?: "Unknown" | "Start" | "Deallocate" | "Hibernate";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      timeZone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      completedAt?: string;
      retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
    };
  }[];
}
export const ScheduledActionsVirtualMachinesExecuteStartOutput =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.String,
    type: Schema.String,
    location: Schema.String,
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          errorCode: Schema.optional(Schema.String),
          errorDetails: Schema.optional(Schema.String),
          operation: Schema.optional(
            Schema.Struct({
              operationId: Schema.String,
              resourceId: Schema.optional(Schema.String),
              opType: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Start",
                  "Deallocate",
                  "Hibernate",
                ]),
              ),
              subscriptionId: Schema.optional(Schema.String),
              deadline: Schema.optional(Schema.String),
              deadlineType: Schema.optional(
                Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "PendingScheduling",
                  "Scheduled",
                  "PendingExecution",
                  "Executing",
                  "Succeeded",
                  "Failed",
                  "Cancelled",
                  "Blocked",
                ]),
              ),
              timezone: Schema.optional(Schema.String),
              timeZone: Schema.optional(Schema.String),
              resourceOperationError: Schema.optional(
                Schema.Struct({
                  errorCode: Schema.String,
                  errorDetails: Schema.String,
                }),
              ),
              completedAt: Schema.optional(Schema.String),
              retryPolicy: Schema.optional(
                Schema.Struct({
                  retryCount: Schema.optional(Schema.Number),
                  retryWindowInMinutes: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesExecuteStartOutput>;

// The operation
/**
 * VirtualMachinesExecuteStart: Execute start operation for a batch of virtual machines, this operation is triggered as soon as Computeschedule receives it.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationparameter - The location name.
 */
export const ScheduledActionsVirtualMachinesExecuteStart =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScheduledActionsVirtualMachinesExecuteStartInput,
    outputSchema: ScheduledActionsVirtualMachinesExecuteStartOutput,
  }));
// Input Schema
export interface ScheduledActionsVirtualMachinesGetOperationErrorsInput {
  subscriptionId: string;
  locationparameter: string;
  operationIds: string[];
}
export const ScheduledActionsVirtualMachinesGetOperationErrorsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationparameter: Schema.String.pipe(T.PathParam()),
    operationIds: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeSchedule/locations/{locationparameter}/virtualMachinesGetOperationErrors",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesGetOperationErrorsInput>;

// Output Schema
export interface ScheduledActionsVirtualMachinesGetOperationErrorsOutput {
  results: {
    operationId?: string;
    creationTime?: string;
    activationTime?: string;
    completedAt?: string;
    operationErrors?: {
      errorCode: string;
      errorDetails: string;
      timestamp?: string;
      timeStamp?: string;
      azureOperationName?: string;
      crpOperationId?: string;
    }[];
    requestErrorCode?: string;
    requestErrorDetails?: string;
  }[];
}
export const ScheduledActionsVirtualMachinesGetOperationErrorsOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        operationId: Schema.optional(Schema.String),
        creationTime: Schema.optional(Schema.String),
        activationTime: Schema.optional(Schema.String),
        completedAt: Schema.optional(Schema.String),
        operationErrors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              errorCode: Schema.String,
              errorDetails: Schema.String,
              timestamp: Schema.optional(Schema.String),
              timeStamp: Schema.optional(Schema.String),
              azureOperationName: Schema.optional(Schema.String),
              crpOperationId: Schema.optional(Schema.String),
            }),
          ),
        ),
        requestErrorCode: Schema.optional(Schema.String),
        requestErrorDetails: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesGetOperationErrorsOutput>;

// The operation
/**
 * VirtualMachinesGetOperationErrors: Get error details on operation errors (like transient errors encountered, additional logs) if they exist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationparameter - The location name.
 */
export const ScheduledActionsVirtualMachinesGetOperationErrors =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScheduledActionsVirtualMachinesGetOperationErrorsInput,
    outputSchema: ScheduledActionsVirtualMachinesGetOperationErrorsOutput,
  }));
// Input Schema
export interface ScheduledActionsVirtualMachinesGetOperationStatusInput {
  subscriptionId: string;
  locationparameter: string;
  operationIds: string[];
  correlationid: string;
}
export const ScheduledActionsVirtualMachinesGetOperationStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationparameter: Schema.String.pipe(T.PathParam()),
    operationIds: Schema.Array(Schema.String),
    correlationid: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeSchedule/locations/{locationparameter}/virtualMachinesGetOperationStatus",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesGetOperationStatusInput>;

// Output Schema
export interface ScheduledActionsVirtualMachinesGetOperationStatusOutput {
  results: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?: "Unknown" | "Start" | "Deallocate" | "Hibernate";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      timeZone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      completedAt?: string;
      retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
    };
  }[];
}
export const ScheduledActionsVirtualMachinesGetOperationStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        resourceId: Schema.optional(Schema.String),
        errorCode: Schema.optional(Schema.String),
        errorDetails: Schema.optional(Schema.String),
        operation: Schema.optional(
          Schema.Struct({
            operationId: Schema.String,
            resourceId: Schema.optional(Schema.String),
            opType: Schema.optional(
              Schema.Literals(["Unknown", "Start", "Deallocate", "Hibernate"]),
            ),
            subscriptionId: Schema.optional(Schema.String),
            deadline: Schema.optional(Schema.String),
            deadlineType: Schema.optional(
              Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
            ),
            state: Schema.optional(
              Schema.Literals([
                "Unknown",
                "PendingScheduling",
                "Scheduled",
                "PendingExecution",
                "Executing",
                "Succeeded",
                "Failed",
                "Cancelled",
                "Blocked",
              ]),
            ),
            timezone: Schema.optional(Schema.String),
            timeZone: Schema.optional(Schema.String),
            resourceOperationError: Schema.optional(
              Schema.Struct({
                errorCode: Schema.String,
                errorDetails: Schema.String,
              }),
            ),
            completedAt: Schema.optional(Schema.String),
            retryPolicy: Schema.optional(
              Schema.Struct({
                retryCount: Schema.optional(Schema.Number),
                retryWindowInMinutes: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesGetOperationStatusOutput>;

// The operation
/**
 * VirtualMachinesGetOperationStatus: Polling endpoint to read status of operations performed on virtual machines
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationparameter - The location name.
 */
export const ScheduledActionsVirtualMachinesGetOperationStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScheduledActionsVirtualMachinesGetOperationStatusInput,
    outputSchema: ScheduledActionsVirtualMachinesGetOperationStatusOutput,
  }));
// Input Schema
export interface ScheduledActionsVirtualMachinesSubmitDeallocateInput {
  subscriptionId: string;
  locationparameter: string;
  schedule: {
    deadline?: string;
    deadLine?: string;
    timezone?: string;
    timeZone?: string;
    deadlineType: "Unknown" | "InitiateAt" | "CompleteBy";
  };
  executionParameters: {
    optimizationPreference?:
      | "Cost"
      | "Availability"
      | "CostAvailabilityBalanced";
    retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
  };
  resources: { ids: string[] };
  correlationid: string;
}
export const ScheduledActionsVirtualMachinesSubmitDeallocateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationparameter: Schema.String.pipe(T.PathParam()),
    schedule: Schema.Struct({
      deadline: Schema.optional(Schema.String),
      deadLine: Schema.optional(Schema.String),
      timezone: Schema.optional(Schema.String),
      timeZone: Schema.optional(Schema.String),
      deadlineType: Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
    }),
    executionParameters: Schema.Struct({
      optimizationPreference: Schema.optional(
        Schema.Literals(["Cost", "Availability", "CostAvailabilityBalanced"]),
      ),
      retryPolicy: Schema.optional(
        Schema.Struct({
          retryCount: Schema.optional(Schema.Number),
          retryWindowInMinutes: Schema.optional(Schema.Number),
        }),
      ),
    }),
    resources: Schema.Struct({
      ids: Schema.Array(Schema.String),
    }),
    correlationid: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeSchedule/locations/{locationparameter}/virtualMachinesSubmitDeallocate",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesSubmitDeallocateInput>;

// Output Schema
export interface ScheduledActionsVirtualMachinesSubmitDeallocateOutput {
  description: string;
  type: string;
  location: string;
  results?: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?: "Unknown" | "Start" | "Deallocate" | "Hibernate";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      timeZone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      completedAt?: string;
      retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
    };
  }[];
}
export const ScheduledActionsVirtualMachinesSubmitDeallocateOutput =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.String,
    type: Schema.String,
    location: Schema.String,
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          errorCode: Schema.optional(Schema.String),
          errorDetails: Schema.optional(Schema.String),
          operation: Schema.optional(
            Schema.Struct({
              operationId: Schema.String,
              resourceId: Schema.optional(Schema.String),
              opType: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Start",
                  "Deallocate",
                  "Hibernate",
                ]),
              ),
              subscriptionId: Schema.optional(Schema.String),
              deadline: Schema.optional(Schema.String),
              deadlineType: Schema.optional(
                Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "PendingScheduling",
                  "Scheduled",
                  "PendingExecution",
                  "Executing",
                  "Succeeded",
                  "Failed",
                  "Cancelled",
                  "Blocked",
                ]),
              ),
              timezone: Schema.optional(Schema.String),
              timeZone: Schema.optional(Schema.String),
              resourceOperationError: Schema.optional(
                Schema.Struct({
                  errorCode: Schema.String,
                  errorDetails: Schema.String,
                }),
              ),
              completedAt: Schema.optional(Schema.String),
              retryPolicy: Schema.optional(
                Schema.Struct({
                  retryCount: Schema.optional(Schema.Number),
                  retryWindowInMinutes: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesSubmitDeallocateOutput>;

// The operation
/**
 * VirtualMachinesSubmitDeallocate: Schedule deallocate operation for a batch of virtual machines at datetime in future.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationparameter - The location name.
 */
export const ScheduledActionsVirtualMachinesSubmitDeallocate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScheduledActionsVirtualMachinesSubmitDeallocateInput,
    outputSchema: ScheduledActionsVirtualMachinesSubmitDeallocateOutput,
  }));
// Input Schema
export interface ScheduledActionsVirtualMachinesSubmitHibernateInput {
  subscriptionId: string;
  locationparameter: string;
  schedule: {
    deadline?: string;
    deadLine?: string;
    timezone?: string;
    timeZone?: string;
    deadlineType: "Unknown" | "InitiateAt" | "CompleteBy";
  };
  executionParameters: {
    optimizationPreference?:
      | "Cost"
      | "Availability"
      | "CostAvailabilityBalanced";
    retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
  };
  resources: { ids: string[] };
  correlationid: string;
}
export const ScheduledActionsVirtualMachinesSubmitHibernateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationparameter: Schema.String.pipe(T.PathParam()),
    schedule: Schema.Struct({
      deadline: Schema.optional(Schema.String),
      deadLine: Schema.optional(Schema.String),
      timezone: Schema.optional(Schema.String),
      timeZone: Schema.optional(Schema.String),
      deadlineType: Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
    }),
    executionParameters: Schema.Struct({
      optimizationPreference: Schema.optional(
        Schema.Literals(["Cost", "Availability", "CostAvailabilityBalanced"]),
      ),
      retryPolicy: Schema.optional(
        Schema.Struct({
          retryCount: Schema.optional(Schema.Number),
          retryWindowInMinutes: Schema.optional(Schema.Number),
        }),
      ),
    }),
    resources: Schema.Struct({
      ids: Schema.Array(Schema.String),
    }),
    correlationid: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeSchedule/locations/{locationparameter}/virtualMachinesSubmitHibernate",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesSubmitHibernateInput>;

// Output Schema
export interface ScheduledActionsVirtualMachinesSubmitHibernateOutput {
  description: string;
  type: string;
  location: string;
  results?: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?: "Unknown" | "Start" | "Deallocate" | "Hibernate";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      timeZone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      completedAt?: string;
      retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
    };
  }[];
}
export const ScheduledActionsVirtualMachinesSubmitHibernateOutput =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.String,
    type: Schema.String,
    location: Schema.String,
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          errorCode: Schema.optional(Schema.String),
          errorDetails: Schema.optional(Schema.String),
          operation: Schema.optional(
            Schema.Struct({
              operationId: Schema.String,
              resourceId: Schema.optional(Schema.String),
              opType: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Start",
                  "Deallocate",
                  "Hibernate",
                ]),
              ),
              subscriptionId: Schema.optional(Schema.String),
              deadline: Schema.optional(Schema.String),
              deadlineType: Schema.optional(
                Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "PendingScheduling",
                  "Scheduled",
                  "PendingExecution",
                  "Executing",
                  "Succeeded",
                  "Failed",
                  "Cancelled",
                  "Blocked",
                ]),
              ),
              timezone: Schema.optional(Schema.String),
              timeZone: Schema.optional(Schema.String),
              resourceOperationError: Schema.optional(
                Schema.Struct({
                  errorCode: Schema.String,
                  errorDetails: Schema.String,
                }),
              ),
              completedAt: Schema.optional(Schema.String),
              retryPolicy: Schema.optional(
                Schema.Struct({
                  retryCount: Schema.optional(Schema.Number),
                  retryWindowInMinutes: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesSubmitHibernateOutput>;

// The operation
/**
 * VirtualMachinesSubmitHibernate: Schedule hibernate operation for a batch of virtual machines at datetime in future.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationparameter - The location name.
 */
export const ScheduledActionsVirtualMachinesSubmitHibernate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScheduledActionsVirtualMachinesSubmitHibernateInput,
    outputSchema: ScheduledActionsVirtualMachinesSubmitHibernateOutput,
  }));
// Input Schema
export interface ScheduledActionsVirtualMachinesSubmitStartInput {
  subscriptionId: string;
  locationparameter: string;
  schedule: {
    deadline?: string;
    deadLine?: string;
    timezone?: string;
    timeZone?: string;
    deadlineType: "Unknown" | "InitiateAt" | "CompleteBy";
  };
  executionParameters: {
    optimizationPreference?:
      | "Cost"
      | "Availability"
      | "CostAvailabilityBalanced";
    retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
  };
  resources: { ids: string[] };
  correlationid: string;
}
export const ScheduledActionsVirtualMachinesSubmitStartInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationparameter: Schema.String.pipe(T.PathParam()),
    schedule: Schema.Struct({
      deadline: Schema.optional(Schema.String),
      deadLine: Schema.optional(Schema.String),
      timezone: Schema.optional(Schema.String),
      timeZone: Schema.optional(Schema.String),
      deadlineType: Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
    }),
    executionParameters: Schema.Struct({
      optimizationPreference: Schema.optional(
        Schema.Literals(["Cost", "Availability", "CostAvailabilityBalanced"]),
      ),
      retryPolicy: Schema.optional(
        Schema.Struct({
          retryCount: Schema.optional(Schema.Number),
          retryWindowInMinutes: Schema.optional(Schema.Number),
        }),
      ),
    }),
    resources: Schema.Struct({
      ids: Schema.Array(Schema.String),
    }),
    correlationid: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeSchedule/locations/{locationparameter}/virtualMachinesSubmitStart",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesSubmitStartInput>;

// Output Schema
export interface ScheduledActionsVirtualMachinesSubmitStartOutput {
  description: string;
  type: string;
  location: string;
  results?: {
    resourceId?: string;
    errorCode?: string;
    errorDetails?: string;
    operation?: {
      operationId: string;
      resourceId?: string;
      opType?: "Unknown" | "Start" | "Deallocate" | "Hibernate";
      subscriptionId?: string;
      deadline?: string;
      deadlineType?: "Unknown" | "InitiateAt" | "CompleteBy";
      state?:
        | "Unknown"
        | "PendingScheduling"
        | "Scheduled"
        | "PendingExecution"
        | "Executing"
        | "Succeeded"
        | "Failed"
        | "Cancelled"
        | "Blocked";
      timezone?: string;
      timeZone?: string;
      resourceOperationError?: { errorCode: string; errorDetails: string };
      completedAt?: string;
      retryPolicy?: { retryCount?: number; retryWindowInMinutes?: number };
    };
  }[];
}
export const ScheduledActionsVirtualMachinesSubmitStartOutput =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.String,
    type: Schema.String,
    location: Schema.String,
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          errorCode: Schema.optional(Schema.String),
          errorDetails: Schema.optional(Schema.String),
          operation: Schema.optional(
            Schema.Struct({
              operationId: Schema.String,
              resourceId: Schema.optional(Schema.String),
              opType: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Start",
                  "Deallocate",
                  "Hibernate",
                ]),
              ),
              subscriptionId: Schema.optional(Schema.String),
              deadline: Schema.optional(Schema.String),
              deadlineType: Schema.optional(
                Schema.Literals(["Unknown", "InitiateAt", "CompleteBy"]),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "PendingScheduling",
                  "Scheduled",
                  "PendingExecution",
                  "Executing",
                  "Succeeded",
                  "Failed",
                  "Cancelled",
                  "Blocked",
                ]),
              ),
              timezone: Schema.optional(Schema.String),
              timeZone: Schema.optional(Schema.String),
              resourceOperationError: Schema.optional(
                Schema.Struct({
                  errorCode: Schema.String,
                  errorDetails: Schema.String,
                }),
              ),
              completedAt: Schema.optional(Schema.String),
              retryPolicy: Schema.optional(
                Schema.Struct({
                  retryCount: Schema.optional(Schema.Number),
                  retryWindowInMinutes: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ScheduledActionsVirtualMachinesSubmitStartOutput>;

// The operation
/**
 * VirtualMachinesSubmitStart: Schedule start operation for a batch of virtual machines at datetime in future.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationparameter - The location name.
 */
export const ScheduledActionsVirtualMachinesSubmitStart =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScheduledActionsVirtualMachinesSubmitStartInput,
    outputSchema: ScheduledActionsVirtualMachinesSubmitStartOutput,
  }));
