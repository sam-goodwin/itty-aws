/**
 * Azure Appcomplianceautomation API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface EvidenceCreateOrUpdateInput {
  reportName: string;
  evidenceName: string;
  offerGuid?: string;
  reportCreatorTenantId?: string;
  properties: {
    evidenceType?: "File" | "AutoCollectedEvidence" | "Data";
    filePath: string;
    extraData?: string;
    controlId?: string;
    responsibilityId?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Fixing"
      | "Verifying"
      | "Updating";
  };
}
export const EvidenceCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    evidenceName: Schema.String.pipe(T.PathParam()),
    offerGuid: Schema.optional(Schema.String),
    reportCreatorTenantId: Schema.optional(Schema.String),
    properties: Schema.Struct({
      evidenceType: Schema.optional(
        Schema.Literals(["File", "AutoCollectedEvidence", "Data"]),
      ),
      filePath: Schema.String,
      extraData: Schema.optional(Schema.String),
      controlId: Schema.optional(Schema.String),
      responsibilityId: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Creating",
          "Deleting",
          "Fixing",
          "Verifying",
          "Updating",
        ]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<EvidenceCreateOrUpdateInput>;

// Output Schema
export interface EvidenceCreateOrUpdateOutput {
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
export const EvidenceCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<EvidenceCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update an evidence a specified report
 *
 * @param api-version - The API version to use for this operation.
 * @param offerGuid - The offerGuid which mapping to the reports.
 * @param reportCreatorTenantId - The tenant id of the report creator.
 * @param reportName - Report Name.
 * @param evidenceName - The evidence name.
 */
export const EvidenceCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EvidenceCreateOrUpdateInput,
  outputSchema: EvidenceCreateOrUpdateOutput,
}));
// Input Schema
export interface EvidenceDeleteInput {
  reportName: string;
  evidenceName: string;
}
export const EvidenceDeleteInput = /*@__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  evidenceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<EvidenceDeleteInput>;

// Output Schema
export type EvidenceDeleteOutput = void;
export const EvidenceDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EvidenceDeleteOutput>;

// The operation
/**
 * Delete an existent evidence from a specified report
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param evidenceName - The evidence name.
 */
export const EvidenceDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: EvidenceDeleteInput,
  outputSchema: EvidenceDeleteOutput,
}));
// Input Schema
export interface EvidenceDownloadInput {
  reportName: string;
  evidenceName: string;
  reportCreatorTenantId?: string;
  offerGuid?: string;
}
export const EvidenceDownloadInput = /*@__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  evidenceName: Schema.String.pipe(T.PathParam()),
  reportCreatorTenantId: Schema.optional(Schema.String),
  offerGuid: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}/download",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<EvidenceDownloadInput>;

// Output Schema
export interface EvidenceDownloadOutput {
  evidenceFile?: { url?: string };
}
export const EvidenceDownloadOutput = /*@__PURE__*/ Schema.Struct({
  evidenceFile: Schema.optional(
    Schema.Struct({
      url: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<EvidenceDownloadOutput>;

// The operation
/**
 * Download evidence file.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param evidenceName - The evidence name.
 */
export const EvidenceDownload = /*@__PURE__*/ API.make(() => ({
  inputSchema: EvidenceDownloadInput,
  outputSchema: EvidenceDownloadOutput,
}));
// Input Schema
export interface EvidenceGetInput {
  reportName: string;
  evidenceName: string;
}
export const EvidenceGetInput = /*@__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  evidenceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<EvidenceGetInput>;

// Output Schema
export interface EvidenceGetOutput {
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
export const EvidenceGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EvidenceGetOutput>;

// The operation
/**
 * Get the evidence metadata
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param evidenceName - The evidence name.
 */
export const EvidenceGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: EvidenceGetInput,
  outputSchema: EvidenceGetOutput,
}));
// Input Schema
export interface EvidenceListByReportInput {
  reportName: string;
  $skipToken?: string;
  $top?: number;
  $select?: string;
  $filter?: string;
  $orderby?: string;
  offerGuid?: string;
  reportCreatorTenantId?: string;
}
export const EvidenceListByReportInput =
  /*@__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $select: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
    offerGuid: Schema.optional(Schema.String),
    reportCreatorTenantId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<EvidenceListByReportInput>;

// Output Schema
export interface EvidenceListByReportOutput {
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
export const EvidenceListByReportOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<EvidenceListByReportOutput>;

// The operation
/**
 * Returns a paginated list of evidences for a specified report.
 *
 * @param api-version - The API version to use for this operation.
 * @param $skipToken - Skip over when retrieving results.
 * @param $top - Number of elements to return when retrieving results.
 * @param $select - OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id.
 * @param $filter - The filter to apply on the operation.
 * @param $orderby - OData order by query option.
 * @param offerGuid - The offerGuid which mapping to the reports.
 * @param reportCreatorTenantId - The tenant id of the report creator.
 * @param reportName - Report Name.
 */
export const EvidenceListByReport = /*@__PURE__*/ API.make(() => ({
  inputSchema: EvidenceListByReportInput,
  outputSchema: EvidenceListByReportOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/operations",
    apiVersion: "2024-06-27",
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
export interface ProviderActionsCheckNameAvailabilityInput {
  name?: string;
  type?: string;
}
export const ProviderActionsCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/checkNameAvailability",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<ProviderActionsCheckNameAvailabilityInput>;

// Output Schema
export interface ProviderActionsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const ProviderActionsCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProviderActionsCheckNameAvailabilityOutput>;

// The operation
/**
 * Check if the given name is available for a report.
 *
 * @param api-version - The API version to use for this operation.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const ProviderActionsCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProviderActionsCheckNameAvailabilityInput,
    outputSchema: ProviderActionsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface ProviderActionsGetCollectionCountInput {
  type?: string;
}
export const ProviderActionsGetCollectionCountInput =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/getCollectionCount",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<ProviderActionsGetCollectionCountInput>;

// Output Schema
export interface ProviderActionsGetCollectionCountOutput {
  count?: number;
}
export const ProviderActionsGetCollectionCountOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<ProviderActionsGetCollectionCountOutput>;

// The operation
/**
 * Get the count of reports.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ProviderActionsGetCollectionCount =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProviderActionsGetCollectionCountInput,
    outputSchema: ProviderActionsGetCollectionCountOutput,
  }));
// Input Schema
export interface ProviderActionsGetOverviewStatusInput {
  type?: string;
}
export const ProviderActionsGetOverviewStatusInput =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/getOverviewStatus",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<ProviderActionsGetOverviewStatusInput>;

// Output Schema
export interface ProviderActionsGetOverviewStatusOutput {
  statusList?: { statusName?: string; statusValue?: string }[];
}
export const ProviderActionsGetOverviewStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    statusList: Schema.optional(
      Schema.Array(
        Schema.Struct({
          statusName: Schema.optional(Schema.String),
          statusValue: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ProviderActionsGetOverviewStatusOutput>;

// The operation
/**
 * Get the resource overview status.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ProviderActionsGetOverviewStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProviderActionsGetOverviewStatusInput,
    outputSchema: ProviderActionsGetOverviewStatusOutput,
  }));
// Input Schema
export interface ProviderActionsListInUseStorageAccountsInput {
  subscriptionIds?: string[];
}
export const ProviderActionsListInUseStorageAccountsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/listInUseStorageAccounts",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<ProviderActionsListInUseStorageAccountsInput>;

// Output Schema
export interface ProviderActionsListInUseStorageAccountsOutput {
  storageAccountList?: {
    subscriptionId?: string;
    resourceGroup?: string;
    accountName?: string;
    location?: string;
  }[];
}
export const ProviderActionsListInUseStorageAccountsOutput =
  /*@__PURE__*/ Schema.Struct({
    storageAccountList: Schema.optional(
      Schema.Array(
        Schema.Struct({
          subscriptionId: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          accountName: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ProviderActionsListInUseStorageAccountsOutput>;

// The operation
/**
 * List the storage accounts which are in use by related reports
 *
 * @param api-version - The API version to use for this operation.
 */
export const ProviderActionsListInUseStorageAccounts =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProviderActionsListInUseStorageAccountsInput,
    outputSchema: ProviderActionsListInUseStorageAccountsOutput,
  }));
// Input Schema
export interface ProviderActionsOnboardInput {
  subscriptionIds: string[];
}
export const ProviderActionsOnboardInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionIds: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/onboard",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<ProviderActionsOnboardInput>;

// Output Schema
export interface ProviderActionsOnboardOutput {
  subscriptionIds?: string[];
}
export const ProviderActionsOnboardOutput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionIds: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<ProviderActionsOnboardOutput>;

// The operation
/**
 * Onboard given subscriptions to Microsoft.AppComplianceAutomation provider.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ProviderActionsOnboard = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProviderActionsOnboardInput,
  outputSchema: ProviderActionsOnboardOutput,
}));
// Input Schema
export interface ProviderActionsTriggerEvaluationInput {
  resourceIds: string[];
}
export const ProviderActionsTriggerEvaluationInput =
  /*@__PURE__*/ Schema.Struct({
    resourceIds: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/triggerEvaluation",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<ProviderActionsTriggerEvaluationInput>;

// Output Schema
export interface ProviderActionsTriggerEvaluationOutput {
  properties?: {
    triggerTime?: string;
    evaluationEndTime?: string;
    resourceIds?: string[];
    quickAssessments?: {
      resourceId?: string;
      responsibilityId?: string;
      timestamp?: string;
      resourceStatus?: "Healthy" | "Unhealthy";
      displayName?: string;
      description?: string;
      remediationLink?: string;
    }[];
  };
}
export const ProviderActionsTriggerEvaluationOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        triggerTime: Schema.optional(Schema.String),
        evaluationEndTime: Schema.optional(Schema.String),
        resourceIds: Schema.optional(Schema.Array(Schema.String)),
        quickAssessments: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resourceId: Schema.optional(Schema.String),
              responsibilityId: Schema.optional(Schema.String),
              timestamp: Schema.optional(Schema.String),
              resourceStatus: Schema.optional(
                Schema.Literals(["Healthy", "Unhealthy"]),
              ),
              displayName: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              remediationLink: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ProviderActionsTriggerEvaluationOutput>;

// The operation
/**
 * Trigger quick evaluation for the given subscriptions.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ProviderActionsTriggerEvaluation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProviderActionsTriggerEvaluationInput,
    outputSchema: ProviderActionsTriggerEvaluationOutput,
  }));
// Input Schema
export interface ReportCreateOrUpdateInput {
  reportName: string;
  properties: {
    triggerTime: string;
    timeZone: string;
    resources: {
      resourceId: string;
      resourceType?: string;
      resourceKind?: string;
      resourceOrigin?: "Azure" | "AWS" | "GCP";
      accountId?: string;
    }[];
    status?: "Active" | "Failed" | "Reviewing" | "Disabled";
    errors?: string[];
    tenantId?: string;
    offerGuid?: string;
    nextTriggerTime?: string;
    lastTriggerTime?: string;
    subscriptions?: string[];
    complianceStatus?: {
      m365?: {
        passedCount?: number;
        failedCount?: number;
        manualCount?: number;
        notApplicableCount?: number;
        pendingCount?: number;
      };
    };
    storageInfo?: {
      subscriptionId?: string;
      resourceGroup?: string;
      accountName?: string;
      location?: string;
    };
    certRecords?: {
      offerGuid?: string;
      certificationStatus?: string;
      ingestionStatus?: string;
      controls?: { controlId?: string; controlStatus?: string }[];
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Fixing"
      | "Verifying"
      | "Updating";
  };
}
export const ReportCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      triggerTime: Schema.String,
      timeZone: Schema.String,
      resources: Schema.Array(
        Schema.Struct({
          resourceId: Schema.String,
          resourceType: Schema.optional(Schema.String),
          resourceKind: Schema.optional(Schema.String),
          resourceOrigin: Schema.optional(
            Schema.Literals(["Azure", "AWS", "GCP"]),
          ),
          accountId: Schema.optional(Schema.String),
        }),
      ),
      status: Schema.optional(
        Schema.Literals(["Active", "Failed", "Reviewing", "Disabled"]),
      ),
      errors: Schema.optional(Schema.Array(Schema.String)),
      tenantId: Schema.optional(Schema.String),
      offerGuid: Schema.optional(Schema.String),
      nextTriggerTime: Schema.optional(Schema.String),
      lastTriggerTime: Schema.optional(Schema.String),
      subscriptions: Schema.optional(Schema.Array(Schema.String)),
      complianceStatus: Schema.optional(
        Schema.Struct({
          m365: Schema.optional(
            Schema.Struct({
              passedCount: Schema.optional(Schema.Number),
              failedCount: Schema.optional(Schema.Number),
              manualCount: Schema.optional(Schema.Number),
              notApplicableCount: Schema.optional(Schema.Number),
              pendingCount: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
      storageInfo: Schema.optional(
        Schema.Struct({
          subscriptionId: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          accountName: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
        }),
      ),
      certRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            offerGuid: Schema.optional(Schema.String),
            certificationStatus: Schema.optional(Schema.String),
            ingestionStatus: Schema.optional(Schema.String),
            controls: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  controlId: Schema.optional(Schema.String),
                  controlStatus: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Creating",
          "Deleting",
          "Fixing",
          "Verifying",
          "Updating",
        ]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<ReportCreateOrUpdateInput>;

// Output Schema
export interface ReportCreateOrUpdateOutput {
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
export const ReportCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ReportCreateOrUpdateOutput>;

// The operation
/**
 * Create a new AppComplianceAutomation report or update an exiting AppComplianceAutomation report.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReportCreateOrUpdateInput,
  outputSchema: ReportCreateOrUpdateOutput,
}));
// Input Schema
export interface ReportDeleteInput {
  reportName: string;
}
export const ReportDeleteInput = /*@__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<ReportDeleteInput>;

// Output Schema
export type ReportDeleteOutput = void;
export const ReportDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ReportDeleteOutput>;

// The operation
/**
 * Delete an AppComplianceAutomation report.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReportDeleteInput,
  outputSchema: ReportDeleteOutput,
}));
// Input Schema
export interface ReportFixInput {
  reportName: string;
}
export const ReportFixInput = /*@__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/fix",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<ReportFixInput>;

// Output Schema
export interface ReportFixOutput {
  result?: "Succeeded" | "Failed";
  reason?: string;
}
export const ReportFixOutput = /*@__PURE__*/ Schema.Struct({
  result: Schema.optional(Schema.Literals(["Succeeded", "Failed"])),
  reason: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ReportFixOutput>;

// The operation
/**
 * Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportFix = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReportFixInput,
  outputSchema: ReportFixOutput,
}));
// Input Schema
export interface ReportGetInput {
  reportName: string;
}
export const ReportGetInput = /*@__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<ReportGetInput>;

// Output Schema
export interface ReportGetOutput {
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
export const ReportGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ReportGetOutput>;

// The operation
/**
 * Get the AppComplianceAutomation report and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReportGetInput,
  outputSchema: ReportGetOutput,
}));
// Input Schema
export interface ReportGetScopingQuestionsInput {
  reportName: string;
}
export const ReportGetScopingQuestionsInput =
  /*@__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/getScopingQuestions",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<ReportGetScopingQuestionsInput>;

// Output Schema
export interface ReportGetScopingQuestionsOutput {
  questions?: {
    questionId: string;
    superiorQuestionId?: string;
    inputType:
      | "None"
      | "Text"
      | "Email"
      | "MultilineText"
      | "Url"
      | "Number"
      | "Boolean"
      | "Telephone"
      | "YesNoNa"
      | "Date"
      | "YearPicker"
      | "SingleSelection"
      | "SingleSelectDropdown"
      | "MultiSelectCheckbox"
      | "MultiSelectDropdown"
      | "MultiSelectDropdownCustom"
      | "Group"
      | "Upload";
    optionIds: string[];
    rules: (
      | "Required"
      | "CharLength"
      | "Url"
      | "Urls"
      | "Domains"
      | "USPrivacyShield"
      | "PublicSOX"
      | "CreditCardPCI"
      | "AzureApplication"
      | "ValidGuid"
      | "PublisherVerification"
      | "DynamicDropdown"
      | "PreventNonEnglishChar"
      | "ValidEmail"
    )[];
    showSubQuestionsValue?: string;
  }[];
}
export const ReportGetScopingQuestionsOutput =
  /*@__PURE__*/ Schema.Struct({
    questions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          questionId: Schema.String,
          superiorQuestionId: Schema.optional(Schema.String),
          inputType: Schema.Literals([
            "None",
            "Text",
            "Email",
            "MultilineText",
            "Url",
            "Number",
            "Boolean",
            "Telephone",
            "YesNoNa",
            "Date",
            "YearPicker",
            "SingleSelection",
            "SingleSelectDropdown",
            "MultiSelectCheckbox",
            "MultiSelectDropdown",
            "MultiSelectDropdownCustom",
            "Group",
            "Upload",
          ]),
          optionIds: Schema.Array(Schema.String),
          rules: Schema.Array(
            Schema.Literals([
              "Required",
              "CharLength",
              "Url",
              "Urls",
              "Domains",
              "USPrivacyShield",
              "PublicSOX",
              "CreditCardPCI",
              "AzureApplication",
              "ValidGuid",
              "PublisherVerification",
              "DynamicDropdown",
              "PreventNonEnglishChar",
              "ValidEmail",
            ]),
          ),
          showSubQuestionsValue: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ReportGetScopingQuestionsOutput>;

// The operation
/**
 * Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportGetScopingQuestions = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReportGetScopingQuestionsInput,
  outputSchema: ReportGetScopingQuestionsOutput,
}));
// Input Schema
export interface ReportListInput {
  $skipToken?: string;
  $top?: number;
  $select?: string;
  $filter?: string;
  $orderby?: string;
  offerGuid?: string;
  reportCreatorTenantId?: string;
}
export const ReportListInput = /*@__PURE__*/ Schema.Struct({
  $skipToken: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $select: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $orderby: Schema.optional(Schema.String),
  offerGuid: Schema.optional(Schema.String),
  reportCreatorTenantId: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/reports",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<ReportListInput>;

// Output Schema
export interface ReportListOutput {
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
export const ReportListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ReportListOutput>;

// The operation
/**
 * Get the AppComplianceAutomation report list for the tenant.
 *
 * @param api-version - The API version to use for this operation.
 * @param $skipToken - Skip over when retrieving results.
 * @param $top - Number of elements to return when retrieving results.
 * @param $select - OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id.
 * @param $filter - The filter to apply on the operation.
 * @param $orderby - OData order by query option.
 * @param offerGuid - The offerGuid which mapping to the reports.
 * @param reportCreatorTenantId - The tenant id of the report creator.
 */
export const ReportList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReportListInput,
  outputSchema: ReportListOutput,
}));
// Input Schema
export interface ReportNestedResourceCheckNameAvailabilityInput {
  reportName: string;
  name?: string;
  type?: string;
}
export const ReportNestedResourceCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/checkNameAvailability",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<ReportNestedResourceCheckNameAvailabilityInput>;

// Output Schema
export interface ReportNestedResourceCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const ReportNestedResourceCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ReportNestedResourceCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const ReportNestedResourceCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ReportNestedResourceCheckNameAvailabilityInput,
    outputSchema: ReportNestedResourceCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface ReportSyncCertRecordInput {
  reportName: string;
  certRecord: {
    offerGuid?: string;
    certificationStatus?: string;
    ingestionStatus?: string;
    controls?: { controlId?: string; controlStatus?: string }[];
  };
}
export const ReportSyncCertRecordInput =
  /*@__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    certRecord: Schema.Struct({
      offerGuid: Schema.optional(Schema.String),
      certificationStatus: Schema.optional(Schema.String),
      ingestionStatus: Schema.optional(Schema.String),
      controls: Schema.optional(
        Schema.Array(
          Schema.Struct({
            controlId: Schema.optional(Schema.String),
            controlStatus: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/syncCertRecord",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<ReportSyncCertRecordInput>;

// Output Schema
export interface ReportSyncCertRecordOutput {
  certRecord?: {
    offerGuid?: string;
    certificationStatus?: string;
    ingestionStatus?: string;
    controls?: { controlId?: string; controlStatus?: string }[];
  };
}
export const ReportSyncCertRecordOutput =
  /*@__PURE__*/ Schema.Struct({
    certRecord: Schema.optional(
      Schema.Struct({
        offerGuid: Schema.optional(Schema.String),
        certificationStatus: Schema.optional(Schema.String),
        ingestionStatus: Schema.optional(Schema.String),
        controls: Schema.optional(
          Schema.Array(
            Schema.Struct({
              controlId: Schema.optional(Schema.String),
              controlStatus: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ReportSyncCertRecordOutput>;

// The operation
/**
 * Synchronize attestation record from app compliance.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportSyncCertRecord = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReportSyncCertRecordInput,
  outputSchema: ReportSyncCertRecordOutput,
}));
// Input Schema
export interface ReportUpdateInput {
  reportName: string;
  properties?: {
    triggerTime?: string;
    timeZone?: string;
    resources?: {
      resourceId: string;
      resourceType?: string;
      resourceKind?: string;
      resourceOrigin?: "Azure" | "AWS" | "GCP";
      accountId?: string;
    }[];
    status?: "Active" | "Failed" | "Reviewing" | "Disabled";
    errors?: string[];
    tenantId?: string;
    offerGuid?: string;
    nextTriggerTime?: string;
    lastTriggerTime?: string;
    subscriptions?: string[];
    complianceStatus?: {
      m365?: {
        passedCount?: number;
        failedCount?: number;
        manualCount?: number;
        notApplicableCount?: number;
        pendingCount?: number;
      };
    };
    storageInfo?: {
      subscriptionId?: string;
      resourceGroup?: string;
      accountName?: string;
      location?: string;
    };
    certRecords?: {
      offerGuid?: string;
      certificationStatus?: string;
      ingestionStatus?: string;
      controls?: { controlId?: string; controlStatus?: string }[];
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Fixing"
      | "Verifying"
      | "Updating";
  };
}
export const ReportUpdateInput = /*@__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      triggerTime: Schema.optional(Schema.String),
      timeZone: Schema.optional(Schema.String),
      resources: Schema.optional(
        Schema.Array(
          Schema.Struct({
            resourceId: Schema.String,
            resourceType: Schema.optional(Schema.String),
            resourceKind: Schema.optional(Schema.String),
            resourceOrigin: Schema.optional(
              Schema.Literals(["Azure", "AWS", "GCP"]),
            ),
            accountId: Schema.optional(Schema.String),
          }),
        ),
      ),
      status: Schema.optional(
        Schema.Literals(["Active", "Failed", "Reviewing", "Disabled"]),
      ),
      errors: Schema.optional(Schema.Array(Schema.String)),
      tenantId: Schema.optional(Schema.String),
      offerGuid: Schema.optional(Schema.String),
      nextTriggerTime: Schema.optional(Schema.String),
      lastTriggerTime: Schema.optional(Schema.String),
      subscriptions: Schema.optional(Schema.Array(Schema.String)),
      complianceStatus: Schema.optional(
        Schema.Struct({
          m365: Schema.optional(
            Schema.Struct({
              passedCount: Schema.optional(Schema.Number),
              failedCount: Schema.optional(Schema.Number),
              manualCount: Schema.optional(Schema.Number),
              notApplicableCount: Schema.optional(Schema.Number),
              pendingCount: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
      storageInfo: Schema.optional(
        Schema.Struct({
          subscriptionId: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          accountName: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
        }),
      ),
      certRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            offerGuid: Schema.optional(Schema.String),
            certificationStatus: Schema.optional(Schema.String),
            ingestionStatus: Schema.optional(Schema.String),
            controls: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  controlId: Schema.optional(Schema.String),
                  controlStatus: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Creating",
          "Deleting",
          "Fixing",
          "Verifying",
          "Updating",
        ]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<ReportUpdateInput>;

// Output Schema
export interface ReportUpdateOutput {
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
export const ReportUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ReportUpdateOutput>;

// The operation
/**
 * Update an exiting AppComplianceAutomation report.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReportUpdateInput,
  outputSchema: ReportUpdateOutput,
}));
// Input Schema
export interface ReportVerifyInput {
  reportName: string;
}
export const ReportVerifyInput = /*@__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/verify",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<ReportVerifyInput>;

// Output Schema
export interface ReportVerifyOutput {
  result?: "Succeeded" | "Failed";
  reason?: string;
}
export const ReportVerifyOutput = /*@__PURE__*/ Schema.Struct({
  result: Schema.optional(Schema.Literals(["Succeeded", "Failed"])),
  reason: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ReportVerifyOutput>;

// The operation
/**
 * Verify the AppComplianceAutomation report health status.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportVerify = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReportVerifyInput,
  outputSchema: ReportVerifyOutput,
}));
// Input Schema
export interface ScopingConfigurationCreateOrUpdateInput {
  reportName: string;
  scopingConfigurationName: string;
  properties: {
    answers?: { questionId: string; answers: string[] }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Fixing"
      | "Verifying"
      | "Updating";
  };
}
export const ScopingConfigurationCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    scopingConfigurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      answers: Schema.optional(
        Schema.Array(
          Schema.Struct({
            questionId: Schema.String,
            answers: Schema.Array(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Creating",
          "Deleting",
          "Fixing",
          "Verifying",
          "Updating",
        ]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<ScopingConfigurationCreateOrUpdateInput>;

// Output Schema
export interface ScopingConfigurationCreateOrUpdateOutput {
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
export const ScopingConfigurationCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ScopingConfigurationCreateOrUpdateOutput>;

// The operation
/**
 * Get the AppComplianceAutomation scoping configuration of the specific report.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param scopingConfigurationName - The scoping configuration of the specific report.
 */
export const ScopingConfigurationCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScopingConfigurationCreateOrUpdateInput,
    outputSchema: ScopingConfigurationCreateOrUpdateOutput,
  }));
// Input Schema
export interface ScopingConfigurationDeleteInput {
  reportName: string;
  scopingConfigurationName: string;
}
export const ScopingConfigurationDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    scopingConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<ScopingConfigurationDeleteInput>;

// Output Schema
export type ScopingConfigurationDeleteOutput = void;
export const ScopingConfigurationDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ScopingConfigurationDeleteOutput>;

// The operation
/**
 * Clean the AppComplianceAutomation scoping configuration of the specific report.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param scopingConfigurationName - The scoping configuration of the specific report.
 */
export const ScopingConfigurationDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ScopingConfigurationDeleteInput,
  outputSchema: ScopingConfigurationDeleteOutput,
}));
// Input Schema
export interface ScopingConfigurationGetInput {
  reportName: string;
  scopingConfigurationName: string;
}
export const ScopingConfigurationGetInput =
  /*@__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    scopingConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<ScopingConfigurationGetInput>;

// Output Schema
export interface ScopingConfigurationGetOutput {
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
export const ScopingConfigurationGetOutput =
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
  }) as unknown as Schema.Codec<ScopingConfigurationGetOutput>;

// The operation
/**
 * Get the AppComplianceAutomation scoping configuration of the specific report.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param scopingConfigurationName - The scoping configuration of the specific report.
 */
export const ScopingConfigurationGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ScopingConfigurationGetInput,
  outputSchema: ScopingConfigurationGetOutput,
}));
// Input Schema
export interface ScopingConfigurationListInput {
  reportName: string;
}
export const ScopingConfigurationListInput =
  /*@__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<ScopingConfigurationListInput>;

// Output Schema
export interface ScopingConfigurationListOutput {
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
export const ScopingConfigurationListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ScopingConfigurationListOutput>;

// The operation
/**
 * Returns a list format of the singleton scopingConfiguration for a specified report.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ScopingConfigurationList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ScopingConfigurationListInput,
  outputSchema: ScopingConfigurationListOutput,
}));
// Input Schema
export interface SnapshotDownloadInput {
  reportName: string;
  snapshotName: string;
  reportCreatorTenantId?: string;
  downloadType:
    | "ComplianceReport"
    | "CompliancePdfReport"
    | "ComplianceDetailedPdfReport"
    | "ResourceList";
  offerGuid?: string;
}
export const SnapshotDownloadInput = /*@__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  snapshotName: Schema.String.pipe(T.PathParam()),
  reportCreatorTenantId: Schema.optional(Schema.String),
  downloadType: Schema.Literals([
    "ComplianceReport",
    "CompliancePdfReport",
    "ComplianceDetailedPdfReport",
    "ResourceList",
  ]),
  offerGuid: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}/download",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<SnapshotDownloadInput>;

// Output Schema
export interface SnapshotDownloadOutput {
  resourceList?: {
    subscriptionId?: string;
    resourceGroup?: string;
    resourceType?: string;
    resourceId?: string;
  }[];
  complianceReport?: {
    categoryName?: string;
    controlFamilyName?: string;
    controlId?: string;
    controlName?: string;
    controlStatus?: "Passed" | "Failed" | "NotApplicable" | "PendingApproval";
    responsibilityTitle?: string;
    responsibilityDescription?: string;
    resourceId?: string;
    resourceType?: string;
    resourceOrigin?: "Azure" | "AWS" | "GCP";
    resourceStatus?: "Healthy" | "Unhealthy";
    resourceStatusChangeDate?: string;
  }[];
  compliancePdfReport?: { sasUri?: string };
  complianceDetailedPdfReport?: { sasUri?: string };
}
export const SnapshotDownloadOutput = /*@__PURE__*/ Schema.Struct({
  resourceList: Schema.optional(
    Schema.Array(
      Schema.Struct({
        subscriptionId: Schema.optional(Schema.String),
        resourceGroup: Schema.optional(Schema.String),
        resourceType: Schema.optional(Schema.String),
        resourceId: Schema.optional(Schema.String),
      }),
    ),
  ),
  complianceReport: Schema.optional(
    Schema.Array(
      Schema.Struct({
        categoryName: Schema.optional(Schema.String),
        controlFamilyName: Schema.optional(Schema.String),
        controlId: Schema.optional(Schema.String),
        controlName: Schema.optional(Schema.String),
        controlStatus: Schema.optional(
          Schema.Literals([
            "Passed",
            "Failed",
            "NotApplicable",
            "PendingApproval",
          ]),
        ),
        responsibilityTitle: Schema.optional(Schema.String),
        responsibilityDescription: Schema.optional(Schema.String),
        resourceId: Schema.optional(Schema.String),
        resourceType: Schema.optional(Schema.String),
        resourceOrigin: Schema.optional(
          Schema.Literals(["Azure", "AWS", "GCP"]),
        ),
        resourceStatus: Schema.optional(
          Schema.Literals(["Healthy", "Unhealthy"]),
        ),
        resourceStatusChangeDate: Schema.optional(Schema.String),
      }),
    ),
  ),
  compliancePdfReport: Schema.optional(
    Schema.Struct({
      sasUri: Schema.optional(Schema.String),
    }),
  ),
  complianceDetailedPdfReport: Schema.optional(
    Schema.Struct({
      sasUri: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<SnapshotDownloadOutput>;

// The operation
/**
 * Download compliance needs from snapshot, like: Compliance Report, Resource List.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param snapshotName - Snapshot Name.
 */
export const SnapshotDownload = /*@__PURE__*/ API.make(() => ({
  inputSchema: SnapshotDownloadInput,
  outputSchema: SnapshotDownloadOutput,
}));
// Input Schema
export interface SnapshotGetInput {
  reportName: string;
  snapshotName: string;
}
export const SnapshotGetInput = /*@__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  snapshotName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<SnapshotGetInput>;

// Output Schema
export interface SnapshotGetOutput {
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
export const SnapshotGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SnapshotGetOutput>;

// The operation
/**
 * Get the AppComplianceAutomation snapshot and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param snapshotName - Snapshot Name.
 */
export const SnapshotGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SnapshotGetInput,
  outputSchema: SnapshotGetOutput,
}));
// Input Schema
export interface SnapshotListInput {
  reportName: string;
  $skipToken?: string;
  $top?: number;
  $select?: string;
  $filter?: string;
  $orderby?: string;
  offerGuid?: string;
  reportCreatorTenantId?: string;
}
export const SnapshotListInput = /*@__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  $skipToken: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $select: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $orderby: Schema.optional(Schema.String),
  offerGuid: Schema.optional(Schema.String),
  reportCreatorTenantId: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<SnapshotListInput>;

// Output Schema
export interface SnapshotListOutput {
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
export const SnapshotListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SnapshotListOutput>;

// The operation
/**
 * Get the AppComplianceAutomation snapshot list.
 *
 * @param api-version - The API version to use for this operation.
 * @param $skipToken - Skip over when retrieving results.
 * @param $top - Number of elements to return when retrieving results.
 * @param $select - OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id.
 * @param $filter - The filter to apply on the operation.
 * @param $orderby - OData order by query option.
 * @param offerGuid - The offerGuid which mapping to the reports.
 * @param reportCreatorTenantId - The tenant id of the report creator.
 * @param reportName - Report Name.
 */
export const SnapshotList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SnapshotListInput,
  outputSchema: SnapshotListOutput,
}));
// Input Schema
export interface WebhookCreateOrUpdateInput {
  reportName: string;
  webhookName: string;
  properties: {
    webhookId?: string;
    status?: "Enabled" | "Disabled";
    tenantId?: string;
    sendAllEvents?: "true" | "false";
    events?: (
      | "generate_snapshot_success"
      | "generate_snapshot_failed"
      | "assessment_failure"
      | "report_configuration_changes"
      | "report_deletion"
    )[];
    payloadUrl?: string;
    contentType?: "application/json";
    webhookKey?: string;
    updateWebhookKey?: "true" | "false";
    webhookKeyEnabled?: "true" | "false";
    enableSslVerification?: "true" | "false";
    deliveryStatus?: "Succeeded" | "Failed" | "NotStarted";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Fixing"
      | "Verifying"
      | "Updating";
  };
}
export const WebhookCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    webhookName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      webhookId: Schema.optional(Schema.String),
      status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      tenantId: Schema.optional(Schema.String),
      sendAllEvents: Schema.optional(Schema.Literals(["true", "false"])),
      events: Schema.optional(
        Schema.Array(
          Schema.Literals([
            "generate_snapshot_success",
            "generate_snapshot_failed",
            "assessment_failure",
            "report_configuration_changes",
            "report_deletion",
          ]),
        ),
      ),
      payloadUrl: Schema.optional(Schema.String),
      contentType: Schema.optional(Schema.Literals(["application/json"])),
      webhookKey: Schema.optional(Schema.String),
      updateWebhookKey: Schema.optional(Schema.Literals(["true", "false"])),
      webhookKeyEnabled: Schema.optional(Schema.Literals(["true", "false"])),
      enableSslVerification: Schema.optional(
        Schema.Literals(["true", "false"]),
      ),
      deliveryStatus: Schema.optional(
        Schema.Literals(["Succeeded", "Failed", "NotStarted"]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Creating",
          "Deleting",
          "Fixing",
          "Verifying",
          "Updating",
        ]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
      apiVersion: "2024-06-27",
    }),
  ) as unknown as Schema.Codec<WebhookCreateOrUpdateInput>;

// Output Schema
export interface WebhookCreateOrUpdateOutput {
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
export const WebhookCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WebhookCreateOrUpdateOutput>;

// The operation
/**
 * Create a new AppComplianceAutomation webhook or update an exiting AppComplianceAutomation webhook.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param webhookName - Webhook Name.
 */
export const WebhookCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebhookCreateOrUpdateInput,
  outputSchema: WebhookCreateOrUpdateOutput,
}));
// Input Schema
export interface WebhookDeleteInput {
  reportName: string;
  webhookName: string;
}
export const WebhookDeleteInput = /*@__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  webhookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<WebhookDeleteInput>;

// Output Schema
export type WebhookDeleteOutput = void;
export const WebhookDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WebhookDeleteOutput>;

// The operation
/**
 * Delete an AppComplianceAutomation webhook.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param webhookName - Webhook Name.
 */
export const WebhookDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebhookDeleteInput,
  outputSchema: WebhookDeleteOutput,
}));
// Input Schema
export interface WebhookGetInput {
  reportName: string;
  webhookName: string;
}
export const WebhookGetInput = /*@__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  webhookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<WebhookGetInput>;

// Output Schema
export interface WebhookGetOutput {
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
export const WebhookGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WebhookGetOutput>;

// The operation
/**
 * Get the AppComplianceAutomation webhook and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param webhookName - Webhook Name.
 */
export const WebhookGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebhookGetInput,
  outputSchema: WebhookGetOutput,
}));
// Input Schema
export interface WebhookListInput {
  reportName: string;
  $skipToken?: string;
  $top?: number;
  $select?: string;
  $filter?: string;
  $orderby?: string;
  offerGuid?: string;
  reportCreatorTenantId?: string;
}
export const WebhookListInput = /*@__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  $skipToken: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $select: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $orderby: Schema.optional(Schema.String),
  offerGuid: Schema.optional(Schema.String),
  reportCreatorTenantId: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<WebhookListInput>;

// Output Schema
export interface WebhookListOutput {
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
export const WebhookListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WebhookListOutput>;

// The operation
/**
 * Get the AppComplianceAutomation webhook list.
 *
 * @param api-version - The API version to use for this operation.
 * @param $skipToken - Skip over when retrieving results.
 * @param $top - Number of elements to return when retrieving results.
 * @param $select - OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id.
 * @param $filter - The filter to apply on the operation.
 * @param $orderby - OData order by query option.
 * @param offerGuid - The offerGuid which mapping to the reports.
 * @param reportCreatorTenantId - The tenant id of the report creator.
 * @param reportName - Report Name.
 */
export const WebhookList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebhookListInput,
  outputSchema: WebhookListOutput,
}));
// Input Schema
export interface WebhookUpdateInput {
  reportName: string;
  webhookName: string;
  properties?: {
    webhookId?: string;
    status?: "Enabled" | "Disabled";
    tenantId?: string;
    sendAllEvents?: "true" | "false";
    events?: (
      | "generate_snapshot_success"
      | "generate_snapshot_failed"
      | "assessment_failure"
      | "report_configuration_changes"
      | "report_deletion"
    )[];
    payloadUrl?: string;
    contentType?: "application/json";
    webhookKey?: string;
    updateWebhookKey?: "true" | "false";
    webhookKeyEnabled?: "true" | "false";
    enableSslVerification?: "true" | "false";
    deliveryStatus?: "Succeeded" | "Failed" | "NotStarted";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Fixing"
      | "Verifying"
      | "Updating";
  };
}
export const WebhookUpdateInput = /*@__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  webhookName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      webhookId: Schema.optional(Schema.String),
      status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      tenantId: Schema.optional(Schema.String),
      sendAllEvents: Schema.optional(Schema.Literals(["true", "false"])),
      events: Schema.optional(
        Schema.Array(
          Schema.Literals([
            "generate_snapshot_success",
            "generate_snapshot_failed",
            "assessment_failure",
            "report_configuration_changes",
            "report_deletion",
          ]),
        ),
      ),
      payloadUrl: Schema.optional(Schema.String),
      contentType: Schema.optional(Schema.Literals(["application/json"])),
      webhookKey: Schema.optional(Schema.String),
      updateWebhookKey: Schema.optional(Schema.Literals(["true", "false"])),
      webhookKeyEnabled: Schema.optional(Schema.Literals(["true", "false"])),
      enableSslVerification: Schema.optional(
        Schema.Literals(["true", "false"]),
      ),
      deliveryStatus: Schema.optional(
        Schema.Literals(["Succeeded", "Failed", "NotStarted"]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Creating",
          "Deleting",
          "Fixing",
          "Verifying",
          "Updating",
        ]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
    apiVersion: "2024-06-27",
  }),
) as unknown as Schema.Codec<WebhookUpdateInput>;

// Output Schema
export interface WebhookUpdateOutput {
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
export const WebhookUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WebhookUpdateOutput>;

// The operation
/**
 * Update an exiting AppComplianceAutomation webhook.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param webhookName - Webhook Name.
 */
export const WebhookUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebhookUpdateInput,
  outputSchema: WebhookUpdateOutput,
}));
