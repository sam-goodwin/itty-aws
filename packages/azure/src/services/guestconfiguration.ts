/**
 * Azure Guestconfiguration API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GuestConfigurationAssignmentReportsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmName: string;
  guestConfigurationAssignmentName: string;
  reportId: string;
}
export const GuestConfigurationAssignmentReportsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    guestConfigurationAssignmentName: Schema.String.pipe(T.PathParam()),
    reportId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}/reports/{reportId}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationAssignmentReportsGetInput>;

// Output Schema
export interface GuestConfigurationAssignmentReportsGetOutput {
  id?: string;
  name?: string;
  properties?: {
    complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
    reportId?: string;
    assignment?: {
      name?: string;
      configuration?: { name?: string; version?: string };
    };
    vm?: { id?: string; uuid?: string };
    startTime?: string;
    endTime?: string;
    details?: {
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      startTime?: string;
      endTime?: string;
      jobId?: string;
      operationType?: "Consistency" | "Initial";
      resources?: {
        complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
        resourceId?: string;
        reasons?: { phrase?: string; code?: string }[];
        properties?: unknown;
      }[];
    };
    vmssResourceId?: string;
  };
}
export const GuestConfigurationAssignmentReportsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        complianceStatus: Schema.optional(
          Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
        ),
        reportId: Schema.optional(Schema.String),
        assignment: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            configuration: Schema.optional(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                version: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        vm: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            uuid: Schema.optional(Schema.String),
          }),
        ),
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Struct({
            complianceStatus: Schema.optional(
              Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
            ),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
            jobId: Schema.optional(Schema.String),
            operationType: Schema.optional(
              Schema.Literals(["Consistency", "Initial"]),
            ),
            resources: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  complianceStatus: Schema.optional(
                    Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
                  ),
                  resourceId: Schema.optional(Schema.String),
                  reasons: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        phrase: Schema.optional(Schema.String),
                        code: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  properties: Schema.optional(Schema.Unknown),
                }),
              ),
            ),
          }),
        ),
        vmssResourceId: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<GuestConfigurationAssignmentReportsGetOutput>;

// The operation
/**
 * Get a report for the guest configuration assignment, by reportId.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param guestConfigurationAssignmentName - The guest configuration assignment name.
 * @param reportId - The GUID for the guest configuration assignment report.
 */
export const GuestConfigurationAssignmentReportsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationAssignmentReportsGetInput,
    outputSchema: GuestConfigurationAssignmentReportsGetOutput,
  }));
// Input Schema
export interface GuestConfigurationAssignmentReportsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmName: string;
  guestConfigurationAssignmentName: string;
}
export const GuestConfigurationAssignmentReportsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    guestConfigurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}/reports",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationAssignmentReportsListInput>;

// Output Schema
export interface GuestConfigurationAssignmentReportsListOutput {
  value?: {
    id?: string;
    name?: string;
    properties?: {
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      reportId?: string;
      assignment?: {
        name?: string;
        configuration?: { name?: string; version?: string };
      };
      vm?: { id?: string; uuid?: string };
      startTime?: string;
      endTime?: string;
      details?: {
        complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
        startTime?: string;
        endTime?: string;
        jobId?: string;
        operationType?: "Consistency" | "Initial";
        resources?: {
          complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
          resourceId?: string;
          reasons?: { phrase?: string; code?: string }[];
          properties?: unknown;
        }[];
      };
      vmssResourceId?: string;
    };
  }[];
  nextLink?: string;
}
export const GuestConfigurationAssignmentReportsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              complianceStatus: Schema.optional(
                Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
              ),
              reportId: Schema.optional(Schema.String),
              assignment: Schema.optional(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  configuration: Schema.optional(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      version: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
              vm: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                  uuid: Schema.optional(Schema.String),
                }),
              ),
              startTime: Schema.optional(Schema.String),
              endTime: Schema.optional(Schema.String),
              details: Schema.optional(
                Schema.Struct({
                  complianceStatus: Schema.optional(
                    Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
                  ),
                  startTime: Schema.optional(Schema.String),
                  endTime: Schema.optional(Schema.String),
                  jobId: Schema.optional(Schema.String),
                  operationType: Schema.optional(
                    Schema.Literals(["Consistency", "Initial"]),
                  ),
                  resources: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        complianceStatus: Schema.optional(
                          Schema.Literals([
                            "Compliant",
                            "NonCompliant",
                            "Pending",
                          ]),
                        ),
                        resourceId: Schema.optional(Schema.String),
                        reasons: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              phrase: Schema.optional(Schema.String),
                              code: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                        properties: Schema.optional(Schema.Unknown),
                      }),
                    ),
                  ),
                }),
              ),
              vmssResourceId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationAssignmentReportsListOutput>;

// The operation
/**
 * List all reports for the guest configuration assignment, latest report first.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param guestConfigurationAssignmentName - The guest configuration assignment name.
 */
export const GuestConfigurationAssignmentReportsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationAssignmentReportsListInput,
    outputSchema: GuestConfigurationAssignmentReportsListOutput,
  }));
// Input Schema
export interface GuestConfigurationAssignmentReportsVMSSGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmssName: string;
  name: string;
  id: string;
}
export const GuestConfigurationAssignmentReportsVMSSGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmssName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmssName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{name}/reports/{id}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationAssignmentReportsVMSSGetInput>;

// Output Schema
export interface GuestConfigurationAssignmentReportsVMSSGetOutput {
  id?: string;
  name?: string;
  properties?: {
    complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
    reportId?: string;
    assignment?: {
      name?: string;
      configuration?: { name?: string; version?: string };
    };
    vm?: { id?: string; uuid?: string };
    startTime?: string;
    endTime?: string;
    details?: {
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      startTime?: string;
      endTime?: string;
      jobId?: string;
      operationType?: "Consistency" | "Initial";
      resources?: {
        complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
        resourceId?: string;
        reasons?: { phrase?: string; code?: string }[];
        properties?: unknown;
      }[];
    };
    vmssResourceId?: string;
  };
}
export const GuestConfigurationAssignmentReportsVMSSGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        complianceStatus: Schema.optional(
          Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
        ),
        reportId: Schema.optional(Schema.String),
        assignment: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            configuration: Schema.optional(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                version: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        vm: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            uuid: Schema.optional(Schema.String),
          }),
        ),
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Struct({
            complianceStatus: Schema.optional(
              Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
            ),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
            jobId: Schema.optional(Schema.String),
            operationType: Schema.optional(
              Schema.Literals(["Consistency", "Initial"]),
            ),
            resources: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  complianceStatus: Schema.optional(
                    Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
                  ),
                  resourceId: Schema.optional(Schema.String),
                  reasons: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        phrase: Schema.optional(Schema.String),
                        code: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  properties: Schema.optional(Schema.Unknown),
                }),
              ),
            ),
          }),
        ),
        vmssResourceId: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<GuestConfigurationAssignmentReportsVMSSGetOutput>;

// The operation
/**
 * Get a report for the VMSS guest configuration assignment, by reportId.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmssName - The name of the virtual machine scale set.
 * @param name - The guest configuration assignment name.
 * @param id - The GUID for the guest configuration assignment report.
 */
export const GuestConfigurationAssignmentReportsVMSSGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationAssignmentReportsVMSSGetInput,
    outputSchema: GuestConfigurationAssignmentReportsVMSSGetOutput,
  }));
// Input Schema
export interface GuestConfigurationAssignmentReportsVMSSListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmssName: string;
  name: string;
}
export const GuestConfigurationAssignmentReportsVMSSListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmssName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmssName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{name}/reports",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationAssignmentReportsVMSSListInput>;

// Output Schema
export interface GuestConfigurationAssignmentReportsVMSSListOutput {
  value?: {
    id?: string;
    name?: string;
    properties?: {
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      reportId?: string;
      assignment?: {
        name?: string;
        configuration?: { name?: string; version?: string };
      };
      vm?: { id?: string; uuid?: string };
      startTime?: string;
      endTime?: string;
      details?: {
        complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
        startTime?: string;
        endTime?: string;
        jobId?: string;
        operationType?: "Consistency" | "Initial";
        resources?: {
          complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
          resourceId?: string;
          reasons?: { phrase?: string; code?: string }[];
          properties?: unknown;
        }[];
      };
      vmssResourceId?: string;
    };
  }[];
  nextLink?: string;
}
export const GuestConfigurationAssignmentReportsVMSSListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              complianceStatus: Schema.optional(
                Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
              ),
              reportId: Schema.optional(Schema.String),
              assignment: Schema.optional(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  configuration: Schema.optional(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      version: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
              vm: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                  uuid: Schema.optional(Schema.String),
                }),
              ),
              startTime: Schema.optional(Schema.String),
              endTime: Schema.optional(Schema.String),
              details: Schema.optional(
                Schema.Struct({
                  complianceStatus: Schema.optional(
                    Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
                  ),
                  startTime: Schema.optional(Schema.String),
                  endTime: Schema.optional(Schema.String),
                  jobId: Schema.optional(Schema.String),
                  operationType: Schema.optional(
                    Schema.Literals(["Consistency", "Initial"]),
                  ),
                  resources: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        complianceStatus: Schema.optional(
                          Schema.Literals([
                            "Compliant",
                            "NonCompliant",
                            "Pending",
                          ]),
                        ),
                        resourceId: Schema.optional(Schema.String),
                        reasons: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              phrase: Schema.optional(Schema.String),
                              code: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                        properties: Schema.optional(Schema.Unknown),
                      }),
                    ),
                  ),
                }),
              ),
              vmssResourceId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationAssignmentReportsVMSSListOutput>;

// The operation
/**
 * List all reports for the VMSS guest configuration assignment, latest report first.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmssName - The name of the virtual machine scale set.
 * @param name - The guest configuration assignment name.
 */
export const GuestConfigurationAssignmentReportsVMSSList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationAssignmentReportsVMSSListInput,
    outputSchema: GuestConfigurationAssignmentReportsVMSSListOutput,
  }));
// Input Schema
export interface GuestConfigurationAssignmentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmName: string;
  guestConfigurationAssignmentName: string;
  properties?: {
    targetResourceId?: string | null;
    guestConfiguration?: {
      kind?: "DSC";
      name?: string;
      version?: string;
      contentUri?: string;
      contentHash?: string;
      contentManagedIdentity?: string;
      assignmentType?:
        | "Audit"
        | "DeployAndAutoCorrect"
        | "ApplyAndAutoCorrect"
        | "ApplyAndMonitor";
      assignmentSource?: string | null;
      contentType?: string | null;
      configurationParameter?: { name?: string; value?: string }[];
      configurationProtectedParameter?: { name?: string; value?: string }[];
      configurationSetting?: {
        configurationMode?:
          | "ApplyOnly"
          | "ApplyAndMonitor"
          | "ApplyAndAutoCorrect";
        allowModuleOverwrite?: boolean;
        actionAfterReboot?: "ContinueConfiguration" | "StopConfiguration";
        refreshFrequencyMins?: number;
        rebootIfNeeded?: boolean;
        configurationModeFrequencyMins?: number;
      };
    };
    complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
    lastComplianceStatusChecked?: string | null;
    latestReportId?: string | null;
    parameterHash?: string | null;
    latestAssignmentReport?: {
      id?: string;
      reportId?: string;
      assignment?: {
        name?: string;
        configuration?: { name?: string; version?: string };
      };
      vm?: { id?: string; uuid?: string };
      startTime?: string;
      endTime?: string;
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      operationType?: "Consistency" | "Initial";
      resources?: {
        complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
        resourceId?: string;
        reasons?: { phrase?: string; code?: string }[];
        properties?: unknown;
      }[];
    };
    context?: string;
    assignmentHash?: string | null;
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Created";
    resourceType?: string | null;
    vmssVMList?: {
      vmId?: string;
      vmResourceId?: string;
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      latestReportId?: string | null;
      lastComplianceChecked?: string | null;
    }[];
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name: string;
  location?: string;
  type?: string;
}
export const GuestConfigurationAssignmentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    guestConfigurationAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        targetResourceId: Schema.optional(Schema.NullOr(Schema.String)),
        guestConfiguration: Schema.optional(
          Schema.Struct({
            kind: Schema.optional(Schema.Literals(["DSC"])),
            name: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            contentUri: Schema.optional(Schema.String),
            contentHash: Schema.optional(Schema.String),
            contentManagedIdentity: Schema.optional(Schema.String),
            assignmentType: Schema.optional(
              Schema.Literals([
                "Audit",
                "DeployAndAutoCorrect",
                "ApplyAndAutoCorrect",
                "ApplyAndMonitor",
              ]),
            ),
            assignmentSource: Schema.optional(Schema.NullOr(Schema.String)),
            contentType: Schema.optional(Schema.NullOr(Schema.String)),
            configurationParameter: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                }),
              ),
            ),
            configurationProtectedParameter: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                }),
              ),
            ),
            configurationSetting: Schema.optional(
              Schema.Struct({
                configurationMode: Schema.optional(
                  Schema.Literals([
                    "ApplyOnly",
                    "ApplyAndMonitor",
                    "ApplyAndAutoCorrect",
                  ]),
                ),
                allowModuleOverwrite: Schema.optional(Schema.Boolean),
                actionAfterReboot: Schema.optional(
                  Schema.Literals([
                    "ContinueConfiguration",
                    "StopConfiguration",
                  ]),
                ),
                refreshFrequencyMins: Schema.optional(Schema.Number),
                rebootIfNeeded: Schema.optional(Schema.Boolean),
                configurationModeFrequencyMins: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        complianceStatus: Schema.optional(
          Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
        ),
        lastComplianceStatusChecked: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        latestReportId: Schema.optional(Schema.NullOr(Schema.String)),
        parameterHash: Schema.optional(Schema.NullOr(Schema.String)),
        latestAssignmentReport: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            reportId: Schema.optional(Schema.String),
            assignment: Schema.optional(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                configuration: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    version: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            vm: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                uuid: Schema.optional(Schema.String),
              }),
            ),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
            complianceStatus: Schema.optional(
              Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
            ),
            operationType: Schema.optional(
              Schema.Literals(["Consistency", "Initial"]),
            ),
            resources: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  complianceStatus: Schema.optional(
                    Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
                  ),
                  resourceId: Schema.optional(Schema.String),
                  reasons: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        phrase: Schema.optional(Schema.String),
                        code: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  properties: Schema.optional(Schema.Unknown),
                }),
              ),
            ),
          }),
        ),
        context: Schema.optional(Schema.String),
        assignmentHash: Schema.optional(Schema.NullOr(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled", "Created"]),
        ),
        resourceType: Schema.optional(Schema.NullOr(Schema.String)),
        vmssVMList: Schema.optional(
          Schema.Array(
            Schema.Struct({
              vmId: Schema.optional(Schema.String),
              vmResourceId: Schema.optional(Schema.String),
              complianceStatus: Schema.optional(
                Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
              ),
              latestReportId: Schema.optional(Schema.NullOr(Schema.String)),
              lastComplianceChecked: Schema.optional(
                Schema.NullOr(Schema.String),
              ),
            }),
          ),
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
    id: Schema.optional(Schema.String),
    name: Schema.String,
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationAssignmentsCreateOrUpdateInput>;

// Output Schema
export interface GuestConfigurationAssignmentsCreateOrUpdateOutput {
  id?: string;
  name: string;
  location?: string;
  type?: string;
}
export const GuestConfigurationAssignmentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.String,
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationAssignmentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates an association between a VM and guest configuration
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param guestConfigurationAssignmentName - The guest configuration assignment name.
 */
export const GuestConfigurationAssignmentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationAssignmentsCreateOrUpdateInput,
    outputSchema: GuestConfigurationAssignmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface GuestConfigurationAssignmentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmName: string;
  guestConfigurationAssignmentName: string;
}
export const GuestConfigurationAssignmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    guestConfigurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationAssignmentsDeleteInput>;

// Output Schema
export type GuestConfigurationAssignmentsDeleteOutput = void;
export const GuestConfigurationAssignmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GuestConfigurationAssignmentsDeleteOutput>;

// The operation
/**
 * Delete a guest configuration assignment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param guestConfigurationAssignmentName - The guest configuration assignment name.
 */
export const GuestConfigurationAssignmentsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationAssignmentsDeleteInput,
    outputSchema: GuestConfigurationAssignmentsDeleteOutput,
  }));
// Input Schema
export interface GuestConfigurationAssignmentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmName: string;
  guestConfigurationAssignmentName: string;
}
export const GuestConfigurationAssignmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    guestConfigurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationAssignmentsGetInput>;

// Output Schema
export interface GuestConfigurationAssignmentsGetOutput {
  id?: string;
  name: string;
  location?: string;
  type?: string;
}
export const GuestConfigurationAssignmentsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.String,
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationAssignmentsGetOutput>;

// The operation
/**
 * Get information about a guest configuration assignment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param guestConfigurationAssignmentName - The guest configuration assignment name.
 */
export const GuestConfigurationAssignmentsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationAssignmentsGetInput,
    outputSchema: GuestConfigurationAssignmentsGetOutput,
  }));
// Input Schema
export interface GuestConfigurationAssignmentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmName: string;
}
export const GuestConfigurationAssignmentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationAssignmentsListInput>;

// Output Schema
export interface GuestConfigurationAssignmentsListOutput {
  value?: { id?: string; name: string; location?: string; type?: string }[];
  nextLink?: string;
}
export const GuestConfigurationAssignmentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.String,
          location: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationAssignmentsListOutput>;

// The operation
/**
 * List all guest configuration assignments for a virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const GuestConfigurationAssignmentsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationAssignmentsListInput,
    outputSchema: GuestConfigurationAssignmentsListOutput,
  }));
// Input Schema
export interface GuestConfigurationAssignmentsRGListInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const GuestConfigurationAssignmentsRGListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationAssignmentsRGListInput>;

// Output Schema
export interface GuestConfigurationAssignmentsRGListOutput {
  value?: { id?: string; name: string; location?: string; type?: string }[];
  nextLink?: string;
}
export const GuestConfigurationAssignmentsRGListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.String,
          location: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationAssignmentsRGListOutput>;

// The operation
/**
 * List all guest configuration assignments for a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 */
export const GuestConfigurationAssignmentsRGList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationAssignmentsRGListInput,
    outputSchema: GuestConfigurationAssignmentsRGListOutput,
  }));
// Input Schema
export interface GuestConfigurationAssignmentsSubscriptionListInput {
  subscriptionId: string;
}
export const GuestConfigurationAssignmentsSubscriptionListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationAssignmentsSubscriptionListInput>;

// Output Schema
export interface GuestConfigurationAssignmentsSubscriptionListOutput {
  value?: { id?: string; name: string; location?: string; type?: string }[];
  nextLink?: string;
}
export const GuestConfigurationAssignmentsSubscriptionListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.String,
          location: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationAssignmentsSubscriptionListOutput>;

// The operation
/**
 * List all guest configuration assignments for a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const GuestConfigurationAssignmentsSubscriptionList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationAssignmentsSubscriptionListInput,
    outputSchema: GuestConfigurationAssignmentsSubscriptionListOutput,
  }));
// Input Schema
export interface GuestConfigurationAssignmentsVMSSCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmssName: string;
  name: string;
  properties?: {
    targetResourceId?: string | null;
    guestConfiguration?: {
      kind?: "DSC";
      name?: string;
      version?: string;
      contentUri?: string;
      contentHash?: string;
      contentManagedIdentity?: string;
      assignmentType?:
        | "Audit"
        | "DeployAndAutoCorrect"
        | "ApplyAndAutoCorrect"
        | "ApplyAndMonitor";
      assignmentSource?: string | null;
      contentType?: string | null;
      configurationParameter?: { name?: string; value?: string }[];
      configurationProtectedParameter?: { name?: string; value?: string }[];
      configurationSetting?: {
        configurationMode?:
          | "ApplyOnly"
          | "ApplyAndMonitor"
          | "ApplyAndAutoCorrect";
        allowModuleOverwrite?: boolean;
        actionAfterReboot?: "ContinueConfiguration" | "StopConfiguration";
        refreshFrequencyMins?: number;
        rebootIfNeeded?: boolean;
        configurationModeFrequencyMins?: number;
      };
    };
    complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
    lastComplianceStatusChecked?: string | null;
    latestReportId?: string | null;
    parameterHash?: string | null;
    latestAssignmentReport?: {
      id?: string;
      reportId?: string;
      assignment?: {
        name?: string;
        configuration?: { name?: string; version?: string };
      };
      vm?: { id?: string; uuid?: string };
      startTime?: string;
      endTime?: string;
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      operationType?: "Consistency" | "Initial";
      resources?: {
        complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
        resourceId?: string;
        reasons?: { phrase?: string; code?: string }[];
        properties?: unknown;
      }[];
    };
    context?: string;
    assignmentHash?: string | null;
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Created";
    resourceType?: string | null;
    vmssVMList?: {
      vmId?: string;
      vmResourceId?: string;
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      latestReportId?: string | null;
      lastComplianceChecked?: string | null;
    }[];
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  location?: string;
  type?: string;
}
export const GuestConfigurationAssignmentsVMSSCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmssName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        targetResourceId: Schema.optional(Schema.NullOr(Schema.String)),
        guestConfiguration: Schema.optional(
          Schema.Struct({
            kind: Schema.optional(Schema.Literals(["DSC"])),
            name: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            contentUri: Schema.optional(Schema.String),
            contentHash: Schema.optional(Schema.String),
            contentManagedIdentity: Schema.optional(Schema.String),
            assignmentType: Schema.optional(
              Schema.Literals([
                "Audit",
                "DeployAndAutoCorrect",
                "ApplyAndAutoCorrect",
                "ApplyAndMonitor",
              ]),
            ),
            assignmentSource: Schema.optional(Schema.NullOr(Schema.String)),
            contentType: Schema.optional(Schema.NullOr(Schema.String)),
            configurationParameter: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                }),
              ),
            ),
            configurationProtectedParameter: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                }),
              ),
            ),
            configurationSetting: Schema.optional(
              Schema.Struct({
                configurationMode: Schema.optional(
                  Schema.Literals([
                    "ApplyOnly",
                    "ApplyAndMonitor",
                    "ApplyAndAutoCorrect",
                  ]),
                ),
                allowModuleOverwrite: Schema.optional(Schema.Boolean),
                actionAfterReboot: Schema.optional(
                  Schema.Literals([
                    "ContinueConfiguration",
                    "StopConfiguration",
                  ]),
                ),
                refreshFrequencyMins: Schema.optional(Schema.Number),
                rebootIfNeeded: Schema.optional(Schema.Boolean),
                configurationModeFrequencyMins: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        complianceStatus: Schema.optional(
          Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
        ),
        lastComplianceStatusChecked: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        latestReportId: Schema.optional(Schema.NullOr(Schema.String)),
        parameterHash: Schema.optional(Schema.NullOr(Schema.String)),
        latestAssignmentReport: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            reportId: Schema.optional(Schema.String),
            assignment: Schema.optional(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                configuration: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    version: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            vm: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                uuid: Schema.optional(Schema.String),
              }),
            ),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
            complianceStatus: Schema.optional(
              Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
            ),
            operationType: Schema.optional(
              Schema.Literals(["Consistency", "Initial"]),
            ),
            resources: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  complianceStatus: Schema.optional(
                    Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
                  ),
                  resourceId: Schema.optional(Schema.String),
                  reasons: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        phrase: Schema.optional(Schema.String),
                        code: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  properties: Schema.optional(Schema.Unknown),
                }),
              ),
            ),
          }),
        ),
        context: Schema.optional(Schema.String),
        assignmentHash: Schema.optional(Schema.NullOr(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled", "Created"]),
        ),
        resourceType: Schema.optional(Schema.NullOr(Schema.String)),
        vmssVMList: Schema.optional(
          Schema.Array(
            Schema.Struct({
              vmId: Schema.optional(Schema.String),
              vmResourceId: Schema.optional(Schema.String),
              complianceStatus: Schema.optional(
                Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
              ),
              latestReportId: Schema.optional(Schema.NullOr(Schema.String)),
              lastComplianceChecked: Schema.optional(
                Schema.NullOr(Schema.String),
              ),
            }),
          ),
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
    id: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmssName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{name}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationAssignmentsVMSSCreateOrUpdateInput>;

// Output Schema
export interface GuestConfigurationAssignmentsVMSSCreateOrUpdateOutput {
  id?: string;
  name: string;
  location?: string;
  type?: string;
}
export const GuestConfigurationAssignmentsVMSSCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.String,
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationAssignmentsVMSSCreateOrUpdateOutput>;

// The operation
/**
 * Creates an association between a VMSS and guest configuration
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmssName - The name of the virtual machine scale set.
 * @param name - The guest configuration assignment name.
 */
export const GuestConfigurationAssignmentsVMSSCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationAssignmentsVMSSCreateOrUpdateInput,
    outputSchema: GuestConfigurationAssignmentsVMSSCreateOrUpdateOutput,
  }));
// Input Schema
export interface GuestConfigurationAssignmentsVMSSDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmssName: string;
  name: string;
}
export const GuestConfigurationAssignmentsVMSSDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmssName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmssName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{name}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationAssignmentsVMSSDeleteInput>;

// Output Schema
export interface GuestConfigurationAssignmentsVMSSDeleteOutput {
  id?: string;
  name: string;
  location?: string;
  type?: string;
}
export const GuestConfigurationAssignmentsVMSSDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.String,
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationAssignmentsVMSSDeleteOutput>;

// The operation
/**
 * Delete a guest configuration assignment for VMSS
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmssName - The name of the virtual machine scale set.
 * @param name - The guest configuration assignment name.
 */
export const GuestConfigurationAssignmentsVMSSDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationAssignmentsVMSSDeleteInput,
    outputSchema: GuestConfigurationAssignmentsVMSSDeleteOutput,
  }));
// Input Schema
export interface GuestConfigurationAssignmentsVMSSGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmssName: string;
  name: string;
}
export const GuestConfigurationAssignmentsVMSSGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmssName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmssName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{name}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationAssignmentsVMSSGetInput>;

// Output Schema
export interface GuestConfigurationAssignmentsVMSSGetOutput {
  id?: string;
  name: string;
  location?: string;
  type?: string;
}
export const GuestConfigurationAssignmentsVMSSGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.String,
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationAssignmentsVMSSGetOutput>;

// The operation
/**
 * Get information about a guest configuration assignment for VMSS
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmssName - The name of the virtual machine scale set.
 * @param name - The guest configuration assignment name.
 */
export const GuestConfigurationAssignmentsVMSSGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationAssignmentsVMSSGetInput,
    outputSchema: GuestConfigurationAssignmentsVMSSGetOutput,
  }));
// Input Schema
export interface GuestConfigurationAssignmentsVMSSListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmssName: string;
}
export const GuestConfigurationAssignmentsVMSSListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmssName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmssName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationAssignmentsVMSSListInput>;

// Output Schema
export interface GuestConfigurationAssignmentsVMSSListOutput {
  value?: { id?: string; name: string; location?: string; type?: string }[];
  nextLink?: string;
}
export const GuestConfigurationAssignmentsVMSSListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.String,
          location: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationAssignmentsVMSSListOutput>;

// The operation
/**
 * List all guest configuration assignments for VMSS.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmssName - The name of the virtual machine scale set.
 */
export const GuestConfigurationAssignmentsVMSSList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationAssignmentsVMSSListInput,
    outputSchema: GuestConfigurationAssignmentsVMSSListOutput,
  }));
// Input Schema
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmName: string;
  guestConfigurationAssignmentName: string;
  properties?: {
    targetResourceId?: string | null;
    guestConfiguration?: {
      kind?: "DSC";
      name?: string;
      version?: string;
      contentUri?: string;
      contentHash?: string;
      contentManagedIdentity?: string;
      assignmentType?:
        | "Audit"
        | "DeployAndAutoCorrect"
        | "ApplyAndAutoCorrect"
        | "ApplyAndMonitor";
      assignmentSource?: string | null;
      contentType?: string | null;
      configurationParameter?: { name?: string; value?: string }[];
      configurationProtectedParameter?: { name?: string; value?: string }[];
      configurationSetting?: {
        configurationMode?:
          | "ApplyOnly"
          | "ApplyAndMonitor"
          | "ApplyAndAutoCorrect";
        allowModuleOverwrite?: boolean;
        actionAfterReboot?: "ContinueConfiguration" | "StopConfiguration";
        refreshFrequencyMins?: number;
        rebootIfNeeded?: boolean;
        configurationModeFrequencyMins?: number;
      };
    };
    complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
    lastComplianceStatusChecked?: string | null;
    latestReportId?: string | null;
    parameterHash?: string | null;
    latestAssignmentReport?: {
      id?: string;
      reportId?: string;
      assignment?: {
        name?: string;
        configuration?: { name?: string; version?: string };
      };
      vm?: { id?: string; uuid?: string };
      startTime?: string;
      endTime?: string;
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      operationType?: "Consistency" | "Initial";
      resources?: {
        complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
        resourceId?: string;
        reasons?: { phrase?: string; code?: string }[];
        properties?: unknown;
      }[];
    };
    context?: string;
    assignmentHash?: string | null;
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Created";
    resourceType?: string | null;
    vmssVMList?: {
      vmId?: string;
      vmResourceId?: string;
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      latestReportId?: string | null;
      lastComplianceChecked?: string | null;
    }[];
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name: string;
  location?: string;
  type?: string;
}
export const GuestConfigurationConnectedVMwarevSphereAssignmentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    guestConfigurationAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        targetResourceId: Schema.optional(Schema.NullOr(Schema.String)),
        guestConfiguration: Schema.optional(
          Schema.Struct({
            kind: Schema.optional(Schema.Literals(["DSC"])),
            name: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            contentUri: Schema.optional(Schema.String),
            contentHash: Schema.optional(Schema.String),
            contentManagedIdentity: Schema.optional(Schema.String),
            assignmentType: Schema.optional(
              Schema.Literals([
                "Audit",
                "DeployAndAutoCorrect",
                "ApplyAndAutoCorrect",
                "ApplyAndMonitor",
              ]),
            ),
            assignmentSource: Schema.optional(Schema.NullOr(Schema.String)),
            contentType: Schema.optional(Schema.NullOr(Schema.String)),
            configurationParameter: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                }),
              ),
            ),
            configurationProtectedParameter: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                }),
              ),
            ),
            configurationSetting: Schema.optional(
              Schema.Struct({
                configurationMode: Schema.optional(
                  Schema.Literals([
                    "ApplyOnly",
                    "ApplyAndMonitor",
                    "ApplyAndAutoCorrect",
                  ]),
                ),
                allowModuleOverwrite: Schema.optional(Schema.Boolean),
                actionAfterReboot: Schema.optional(
                  Schema.Literals([
                    "ContinueConfiguration",
                    "StopConfiguration",
                  ]),
                ),
                refreshFrequencyMins: Schema.optional(Schema.Number),
                rebootIfNeeded: Schema.optional(Schema.Boolean),
                configurationModeFrequencyMins: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        complianceStatus: Schema.optional(
          Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
        ),
        lastComplianceStatusChecked: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        latestReportId: Schema.optional(Schema.NullOr(Schema.String)),
        parameterHash: Schema.optional(Schema.NullOr(Schema.String)),
        latestAssignmentReport: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            reportId: Schema.optional(Schema.String),
            assignment: Schema.optional(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                configuration: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    version: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            vm: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                uuid: Schema.optional(Schema.String),
              }),
            ),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
            complianceStatus: Schema.optional(
              Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
            ),
            operationType: Schema.optional(
              Schema.Literals(["Consistency", "Initial"]),
            ),
            resources: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  complianceStatus: Schema.optional(
                    Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
                  ),
                  resourceId: Schema.optional(Schema.String),
                  reasons: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        phrase: Schema.optional(Schema.String),
                        code: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  properties: Schema.optional(Schema.Unknown),
                }),
              ),
            ),
          }),
        ),
        context: Schema.optional(Schema.String),
        assignmentHash: Schema.optional(Schema.NullOr(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled", "Created"]),
        ),
        resourceType: Schema.optional(Schema.NullOr(Schema.String)),
        vmssVMList: Schema.optional(
          Schema.Array(
            Schema.Struct({
              vmId: Schema.optional(Schema.String),
              vmResourceId: Schema.optional(Schema.String),
              complianceStatus: Schema.optional(
                Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
              ),
              latestReportId: Schema.optional(Schema.NullOr(Schema.String)),
              lastComplianceChecked: Schema.optional(
                Schema.NullOr(Schema.String),
              ),
            }),
          ),
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
    id: Schema.optional(Schema.String),
    name: Schema.String,
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualmachines/{vmName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationConnectedVMwarevSphereAssignmentsCreateOrUpdateInput>;

// Output Schema
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsCreateOrUpdateOutput {
  id?: string;
  name: string;
  location?: string;
  type?: string;
}
export const GuestConfigurationConnectedVMwarevSphereAssignmentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.String,
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationConnectedVMwarevSphereAssignmentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates an association between a Connected VM Sphere machine and guest configuration
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param guestConfigurationAssignmentName - The guest configuration assignment name.
 */
export const GuestConfigurationConnectedVMwarevSphereAssignmentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      GuestConfigurationConnectedVMwarevSphereAssignmentsCreateOrUpdateInput,
    outputSchema:
      GuestConfigurationConnectedVMwarevSphereAssignmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmName: string;
  guestConfigurationAssignmentName: string;
}
export const GuestConfigurationConnectedVMwarevSphereAssignmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    guestConfigurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualmachines/{vmName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationConnectedVMwarevSphereAssignmentsDeleteInput>;

// Output Schema
export type GuestConfigurationConnectedVMwarevSphereAssignmentsDeleteOutput =
  void;
export const GuestConfigurationConnectedVMwarevSphereAssignmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GuestConfigurationConnectedVMwarevSphereAssignmentsDeleteOutput>;

// The operation
/**
 * Delete a guest configuration assignment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param guestConfigurationAssignmentName - The guest configuration assignment name.
 */
export const GuestConfigurationConnectedVMwarevSphereAssignmentsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationConnectedVMwarevSphereAssignmentsDeleteInput,
    outputSchema:
      GuestConfigurationConnectedVMwarevSphereAssignmentsDeleteOutput,
  }));
// Input Schema
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmName: string;
  guestConfigurationAssignmentName: string;
}
export const GuestConfigurationConnectedVMwarevSphereAssignmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    guestConfigurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualmachines/{vmName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationConnectedVMwarevSphereAssignmentsGetInput>;

// Output Schema
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsGetOutput {
  id?: string;
  name: string;
  location?: string;
  type?: string;
}
export const GuestConfigurationConnectedVMwarevSphereAssignmentsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.String,
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationConnectedVMwarevSphereAssignmentsGetOutput>;

// The operation
/**
 * Get information about a guest configuration assignment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param guestConfigurationAssignmentName - The guest configuration assignment name.
 */
export const GuestConfigurationConnectedVMwarevSphereAssignmentsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationConnectedVMwarevSphereAssignmentsGetInput,
    outputSchema: GuestConfigurationConnectedVMwarevSphereAssignmentsGetOutput,
  }));
// Input Schema
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmName: string;
}
export const GuestConfigurationConnectedVMwarevSphereAssignmentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualmachines/{vmName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationConnectedVMwarevSphereAssignmentsListInput>;

// Output Schema
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsListOutput {
  value?: { id?: string; name: string; location?: string; type?: string }[];
  nextLink?: string;
}
export const GuestConfigurationConnectedVMwarevSphereAssignmentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.String,
          location: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationConnectedVMwarevSphereAssignmentsListOutput>;

// The operation
/**
 * List all guest configuration assignments for an ARC machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 */
export const GuestConfigurationConnectedVMwarevSphereAssignmentsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationConnectedVMwarevSphereAssignmentsListInput,
    outputSchema: GuestConfigurationConnectedVMwarevSphereAssignmentsListOutput,
  }));
// Input Schema
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsReportsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmName: string;
  guestConfigurationAssignmentName: string;
  reportId: string;
}
export const GuestConfigurationConnectedVMwarevSphereAssignmentsReportsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    guestConfigurationAssignmentName: Schema.String.pipe(T.PathParam()),
    reportId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualmachines/{vmName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}/reports/{reportId}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationConnectedVMwarevSphereAssignmentsReportsGetInput>;

// Output Schema
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsReportsGetOutput {
  id?: string;
  name?: string;
  properties?: {
    complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
    reportId?: string;
    assignment?: {
      name?: string;
      configuration?: { name?: string; version?: string };
    };
    vm?: { id?: string; uuid?: string };
    startTime?: string;
    endTime?: string;
    details?: {
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      startTime?: string;
      endTime?: string;
      jobId?: string;
      operationType?: "Consistency" | "Initial";
      resources?: {
        complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
        resourceId?: string;
        reasons?: { phrase?: string; code?: string }[];
        properties?: unknown;
      }[];
    };
    vmssResourceId?: string;
  };
}
export const GuestConfigurationConnectedVMwarevSphereAssignmentsReportsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        complianceStatus: Schema.optional(
          Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
        ),
        reportId: Schema.optional(Schema.String),
        assignment: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            configuration: Schema.optional(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                version: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        vm: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            uuid: Schema.optional(Schema.String),
          }),
        ),
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Struct({
            complianceStatus: Schema.optional(
              Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
            ),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
            jobId: Schema.optional(Schema.String),
            operationType: Schema.optional(
              Schema.Literals(["Consistency", "Initial"]),
            ),
            resources: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  complianceStatus: Schema.optional(
                    Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
                  ),
                  resourceId: Schema.optional(Schema.String),
                  reasons: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        phrase: Schema.optional(Schema.String),
                        code: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  properties: Schema.optional(Schema.Unknown),
                }),
              ),
            ),
          }),
        ),
        vmssResourceId: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<GuestConfigurationConnectedVMwarevSphereAssignmentsReportsGetOutput>;

// The operation
/**
 * Get a report for the guest configuration assignment, by reportId.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param guestConfigurationAssignmentName - The guest configuration assignment name.
 * @param reportId - The GUID for the guest configuration assignment report.
 */
export const GuestConfigurationConnectedVMwarevSphereAssignmentsReportsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      GuestConfigurationConnectedVMwarevSphereAssignmentsReportsGetInput,
    outputSchema:
      GuestConfigurationConnectedVMwarevSphereAssignmentsReportsGetOutput,
  }));
// Input Schema
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsReportsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmName: string;
  guestConfigurationAssignmentName: string;
}
export const GuestConfigurationConnectedVMwarevSphereAssignmentsReportsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    guestConfigurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualmachines/{vmName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}/reports",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationConnectedVMwarevSphereAssignmentsReportsListInput>;

// Output Schema
export interface GuestConfigurationConnectedVMwarevSphereAssignmentsReportsListOutput {
  value?: {
    id?: string;
    name?: string;
    properties?: {
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      reportId?: string;
      assignment?: {
        name?: string;
        configuration?: { name?: string; version?: string };
      };
      vm?: { id?: string; uuid?: string };
      startTime?: string;
      endTime?: string;
      details?: {
        complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
        startTime?: string;
        endTime?: string;
        jobId?: string;
        operationType?: "Consistency" | "Initial";
        resources?: {
          complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
          resourceId?: string;
          reasons?: { phrase?: string; code?: string }[];
          properties?: unknown;
        }[];
      };
      vmssResourceId?: string;
    };
  }[];
  nextLink?: string;
}
export const GuestConfigurationConnectedVMwarevSphereAssignmentsReportsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              complianceStatus: Schema.optional(
                Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
              ),
              reportId: Schema.optional(Schema.String),
              assignment: Schema.optional(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  configuration: Schema.optional(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      version: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
              vm: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                  uuid: Schema.optional(Schema.String),
                }),
              ),
              startTime: Schema.optional(Schema.String),
              endTime: Schema.optional(Schema.String),
              details: Schema.optional(
                Schema.Struct({
                  complianceStatus: Schema.optional(
                    Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
                  ),
                  startTime: Schema.optional(Schema.String),
                  endTime: Schema.optional(Schema.String),
                  jobId: Schema.optional(Schema.String),
                  operationType: Schema.optional(
                    Schema.Literals(["Consistency", "Initial"]),
                  ),
                  resources: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        complianceStatus: Schema.optional(
                          Schema.Literals([
                            "Compliant",
                            "NonCompliant",
                            "Pending",
                          ]),
                        ),
                        resourceId: Schema.optional(Schema.String),
                        reasons: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              phrase: Schema.optional(Schema.String),
                              code: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                        properties: Schema.optional(Schema.Unknown),
                      }),
                    ),
                  ),
                }),
              ),
              vmssResourceId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationConnectedVMwarevSphereAssignmentsReportsListOutput>;

// The operation
/**
 * List all reports for the guest configuration assignment, latest report first.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param guestConfigurationAssignmentName - The guest configuration assignment name.
 */
export const GuestConfigurationConnectedVMwarevSphereAssignmentsReportsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      GuestConfigurationConnectedVMwarevSphereAssignmentsReportsListInput,
    outputSchema:
      GuestConfigurationConnectedVMwarevSphereAssignmentsReportsListOutput,
  }));
// Input Schema
export interface GuestConfigurationHCRPAssignmentReportsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  guestConfigurationAssignmentName: string;
  reportId: string;
}
export const GuestConfigurationHCRPAssignmentReportsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    guestConfigurationAssignmentName: Schema.String.pipe(T.PathParam()),
    reportId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}/reports/{reportId}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationHCRPAssignmentReportsGetInput>;

// Output Schema
export interface GuestConfigurationHCRPAssignmentReportsGetOutput {
  id?: string;
  name?: string;
  properties?: {
    complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
    reportId?: string;
    assignment?: {
      name?: string;
      configuration?: { name?: string; version?: string };
    };
    vm?: { id?: string; uuid?: string };
    startTime?: string;
    endTime?: string;
    details?: {
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      startTime?: string;
      endTime?: string;
      jobId?: string;
      operationType?: "Consistency" | "Initial";
      resources?: {
        complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
        resourceId?: string;
        reasons?: { phrase?: string; code?: string }[];
        properties?: unknown;
      }[];
    };
    vmssResourceId?: string;
  };
}
export const GuestConfigurationHCRPAssignmentReportsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        complianceStatus: Schema.optional(
          Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
        ),
        reportId: Schema.optional(Schema.String),
        assignment: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            configuration: Schema.optional(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                version: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        vm: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            uuid: Schema.optional(Schema.String),
          }),
        ),
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Struct({
            complianceStatus: Schema.optional(
              Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
            ),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
            jobId: Schema.optional(Schema.String),
            operationType: Schema.optional(
              Schema.Literals(["Consistency", "Initial"]),
            ),
            resources: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  complianceStatus: Schema.optional(
                    Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
                  ),
                  resourceId: Schema.optional(Schema.String),
                  reasons: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        phrase: Schema.optional(Schema.String),
                        code: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  properties: Schema.optional(Schema.Unknown),
                }),
              ),
            ),
          }),
        ),
        vmssResourceId: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<GuestConfigurationHCRPAssignmentReportsGetOutput>;

// The operation
/**
 * Get a report for the guest configuration assignment, by reportId.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the ARC machine.
 * @param guestConfigurationAssignmentName - The guest configuration assignment name.
 * @param reportId - The GUID for the guest configuration assignment report.
 */
export const GuestConfigurationHCRPAssignmentReportsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationHCRPAssignmentReportsGetInput,
    outputSchema: GuestConfigurationHCRPAssignmentReportsGetOutput,
  }));
// Input Schema
export interface GuestConfigurationHCRPAssignmentReportsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  guestConfigurationAssignmentName: string;
}
export const GuestConfigurationHCRPAssignmentReportsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    guestConfigurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}/reports",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationHCRPAssignmentReportsListInput>;

// Output Schema
export interface GuestConfigurationHCRPAssignmentReportsListOutput {
  value?: {
    id?: string;
    name?: string;
    properties?: {
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      reportId?: string;
      assignment?: {
        name?: string;
        configuration?: { name?: string; version?: string };
      };
      vm?: { id?: string; uuid?: string };
      startTime?: string;
      endTime?: string;
      details?: {
        complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
        startTime?: string;
        endTime?: string;
        jobId?: string;
        operationType?: "Consistency" | "Initial";
        resources?: {
          complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
          resourceId?: string;
          reasons?: { phrase?: string; code?: string }[];
          properties?: unknown;
        }[];
      };
      vmssResourceId?: string;
    };
  }[];
  nextLink?: string;
}
export const GuestConfigurationHCRPAssignmentReportsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              complianceStatus: Schema.optional(
                Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
              ),
              reportId: Schema.optional(Schema.String),
              assignment: Schema.optional(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  configuration: Schema.optional(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      version: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
              vm: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                  uuid: Schema.optional(Schema.String),
                }),
              ),
              startTime: Schema.optional(Schema.String),
              endTime: Schema.optional(Schema.String),
              details: Schema.optional(
                Schema.Struct({
                  complianceStatus: Schema.optional(
                    Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
                  ),
                  startTime: Schema.optional(Schema.String),
                  endTime: Schema.optional(Schema.String),
                  jobId: Schema.optional(Schema.String),
                  operationType: Schema.optional(
                    Schema.Literals(["Consistency", "Initial"]),
                  ),
                  resources: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        complianceStatus: Schema.optional(
                          Schema.Literals([
                            "Compliant",
                            "NonCompliant",
                            "Pending",
                          ]),
                        ),
                        resourceId: Schema.optional(Schema.String),
                        reasons: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              phrase: Schema.optional(Schema.String),
                              code: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                        properties: Schema.optional(Schema.Unknown),
                      }),
                    ),
                  ),
                }),
              ),
              vmssResourceId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationHCRPAssignmentReportsListOutput>;

// The operation
/**
 * List all reports for the guest configuration assignment, latest report first.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the ARC machine.
 * @param guestConfigurationAssignmentName - The guest configuration assignment name.
 */
export const GuestConfigurationHCRPAssignmentReportsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationHCRPAssignmentReportsListInput,
    outputSchema: GuestConfigurationHCRPAssignmentReportsListOutput,
  }));
// Input Schema
export interface GuestConfigurationHCRPAssignmentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  guestConfigurationAssignmentName: string;
  properties?: {
    targetResourceId?: string | null;
    guestConfiguration?: {
      kind?: "DSC";
      name?: string;
      version?: string;
      contentUri?: string;
      contentHash?: string;
      contentManagedIdentity?: string;
      assignmentType?:
        | "Audit"
        | "DeployAndAutoCorrect"
        | "ApplyAndAutoCorrect"
        | "ApplyAndMonitor";
      assignmentSource?: string | null;
      contentType?: string | null;
      configurationParameter?: { name?: string; value?: string }[];
      configurationProtectedParameter?: { name?: string; value?: string }[];
      configurationSetting?: {
        configurationMode?:
          | "ApplyOnly"
          | "ApplyAndMonitor"
          | "ApplyAndAutoCorrect";
        allowModuleOverwrite?: boolean;
        actionAfterReboot?: "ContinueConfiguration" | "StopConfiguration";
        refreshFrequencyMins?: number;
        rebootIfNeeded?: boolean;
        configurationModeFrequencyMins?: number;
      };
    };
    complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
    lastComplianceStatusChecked?: string | null;
    latestReportId?: string | null;
    parameterHash?: string | null;
    latestAssignmentReport?: {
      id?: string;
      reportId?: string;
      assignment?: {
        name?: string;
        configuration?: { name?: string; version?: string };
      };
      vm?: { id?: string; uuid?: string };
      startTime?: string;
      endTime?: string;
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      operationType?: "Consistency" | "Initial";
      resources?: {
        complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
        resourceId?: string;
        reasons?: { phrase?: string; code?: string }[];
        properties?: unknown;
      }[];
    };
    context?: string;
    assignmentHash?: string | null;
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Created";
    resourceType?: string | null;
    vmssVMList?: {
      vmId?: string;
      vmResourceId?: string;
      complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
      latestReportId?: string | null;
      lastComplianceChecked?: string | null;
    }[];
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name: string;
  location?: string;
  type?: string;
}
export const GuestConfigurationHCRPAssignmentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    guestConfigurationAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        targetResourceId: Schema.optional(Schema.NullOr(Schema.String)),
        guestConfiguration: Schema.optional(
          Schema.Struct({
            kind: Schema.optional(Schema.Literals(["DSC"])),
            name: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            contentUri: Schema.optional(Schema.String),
            contentHash: Schema.optional(Schema.String),
            contentManagedIdentity: Schema.optional(Schema.String),
            assignmentType: Schema.optional(
              Schema.Literals([
                "Audit",
                "DeployAndAutoCorrect",
                "ApplyAndAutoCorrect",
                "ApplyAndMonitor",
              ]),
            ),
            assignmentSource: Schema.optional(Schema.NullOr(Schema.String)),
            contentType: Schema.optional(Schema.NullOr(Schema.String)),
            configurationParameter: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                }),
              ),
            ),
            configurationProtectedParameter: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                }),
              ),
            ),
            configurationSetting: Schema.optional(
              Schema.Struct({
                configurationMode: Schema.optional(
                  Schema.Literals([
                    "ApplyOnly",
                    "ApplyAndMonitor",
                    "ApplyAndAutoCorrect",
                  ]),
                ),
                allowModuleOverwrite: Schema.optional(Schema.Boolean),
                actionAfterReboot: Schema.optional(
                  Schema.Literals([
                    "ContinueConfiguration",
                    "StopConfiguration",
                  ]),
                ),
                refreshFrequencyMins: Schema.optional(Schema.Number),
                rebootIfNeeded: Schema.optional(Schema.Boolean),
                configurationModeFrequencyMins: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        complianceStatus: Schema.optional(
          Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
        ),
        lastComplianceStatusChecked: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        latestReportId: Schema.optional(Schema.NullOr(Schema.String)),
        parameterHash: Schema.optional(Schema.NullOr(Schema.String)),
        latestAssignmentReport: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            reportId: Schema.optional(Schema.String),
            assignment: Schema.optional(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                configuration: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    version: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            vm: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                uuid: Schema.optional(Schema.String),
              }),
            ),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
            complianceStatus: Schema.optional(
              Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
            ),
            operationType: Schema.optional(
              Schema.Literals(["Consistency", "Initial"]),
            ),
            resources: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  complianceStatus: Schema.optional(
                    Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
                  ),
                  resourceId: Schema.optional(Schema.String),
                  reasons: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        phrase: Schema.optional(Schema.String),
                        code: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  properties: Schema.optional(Schema.Unknown),
                }),
              ),
            ),
          }),
        ),
        context: Schema.optional(Schema.String),
        assignmentHash: Schema.optional(Schema.NullOr(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled", "Created"]),
        ),
        resourceType: Schema.optional(Schema.NullOr(Schema.String)),
        vmssVMList: Schema.optional(
          Schema.Array(
            Schema.Struct({
              vmId: Schema.optional(Schema.String),
              vmResourceId: Schema.optional(Schema.String),
              complianceStatus: Schema.optional(
                Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
              ),
              latestReportId: Schema.optional(Schema.NullOr(Schema.String)),
              lastComplianceChecked: Schema.optional(
                Schema.NullOr(Schema.String),
              ),
            }),
          ),
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
    id: Schema.optional(Schema.String),
    name: Schema.String,
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationHCRPAssignmentsCreateOrUpdateInput>;

// Output Schema
export interface GuestConfigurationHCRPAssignmentsCreateOrUpdateOutput {
  id?: string;
  name: string;
  location?: string;
  type?: string;
}
export const GuestConfigurationHCRPAssignmentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.String,
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationHCRPAssignmentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates an association between a ARC machine and guest configuration
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the ARC machine.
 * @param guestConfigurationAssignmentName - The guest configuration assignment name.
 */
export const GuestConfigurationHCRPAssignmentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationHCRPAssignmentsCreateOrUpdateInput,
    outputSchema: GuestConfigurationHCRPAssignmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface GuestConfigurationHCRPAssignmentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  guestConfigurationAssignmentName: string;
}
export const GuestConfigurationHCRPAssignmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    guestConfigurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationHCRPAssignmentsDeleteInput>;

// Output Schema
export type GuestConfigurationHCRPAssignmentsDeleteOutput = void;
export const GuestConfigurationHCRPAssignmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GuestConfigurationHCRPAssignmentsDeleteOutput>;

// The operation
/**
 * Delete a guest configuration assignment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the ARC machine.
 * @param guestConfigurationAssignmentName - The guest configuration assignment name.
 */
export const GuestConfigurationHCRPAssignmentsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationHCRPAssignmentsDeleteInput,
    outputSchema: GuestConfigurationHCRPAssignmentsDeleteOutput,
  }));
// Input Schema
export interface GuestConfigurationHCRPAssignmentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  guestConfigurationAssignmentName: string;
}
export const GuestConfigurationHCRPAssignmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    guestConfigurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationHCRPAssignmentsGetInput>;

// Output Schema
export interface GuestConfigurationHCRPAssignmentsGetOutput {
  id?: string;
  name: string;
  location?: string;
  type?: string;
}
export const GuestConfigurationHCRPAssignmentsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.String,
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationHCRPAssignmentsGetOutput>;

// The operation
/**
 * Get information about a guest configuration assignment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the ARC machine.
 * @param guestConfigurationAssignmentName - The guest configuration assignment name.
 */
export const GuestConfigurationHCRPAssignmentsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationHCRPAssignmentsGetInput,
    outputSchema: GuestConfigurationHCRPAssignmentsGetOutput,
  }));
// Input Schema
export interface GuestConfigurationHCRPAssignmentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
}
export const GuestConfigurationHCRPAssignmentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments",
      apiVersion: "2024-04-05",
    }),
  ) as unknown as Schema.Codec<GuestConfigurationHCRPAssignmentsListInput>;

// Output Schema
export interface GuestConfigurationHCRPAssignmentsListOutput {
  value?: { id?: string; name: string; location?: string; type?: string }[];
  nextLink?: string;
}
export const GuestConfigurationHCRPAssignmentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.String,
          location: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GuestConfigurationHCRPAssignmentsListOutput>;

// The operation
/**
 * List all guest configuration assignments for an ARC machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the ARC machine.
 */
export const GuestConfigurationHCRPAssignmentsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestConfigurationHCRPAssignmentsListInput,
    outputSchema: GuestConfigurationHCRPAssignmentsListOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.GuestConfiguration/operations",
    apiVersion: "2024-04-05",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    properties?: { statusCode?: string };
  }[];
  nextLink?: string;
}
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
      properties: Schema.optional(
        Schema.Struct({
          statusCode: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

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
