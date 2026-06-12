/**
 * Azure Appcomplianceautomation API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const StatusItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  statusName: Schema.optional(Schema.String),
  statusValue: Schema.optional(Schema.String),
});
const StorageInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.optional(Schema.String),
  resourceGroup: Schema.optional(Schema.String),
  accountName: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
});
const OperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  origin: Schema.optional(Schema.Literals(["user", "system", "user,system"])),
  actionType: Schema.optional(Schema.Literals(["Internal"])),
});
const ReportResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const systemDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
const ReportPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  triggerTime: Schema.String,
  timeZone: Schema.String,
  resources: Schema.Array(Schema.suspend(() => ResourceMetadataSchema)),
  status: Schema.optional(Schema.suspend(() => ReportStatusSchema)),
  errors: Schema.optional(Schema.Array(Schema.String)),
  tenantId: Schema.optional(Schema.String),
  offerGuid: Schema.optional(Schema.String),
  nextTriggerTime: Schema.optional(Schema.String),
  lastTriggerTime: Schema.optional(Schema.String),
  subscriptions: Schema.optional(Schema.Array(Schema.String)),
  complianceStatus: Schema.optional(
    Schema.suspend(() => ReportComplianceStatusSchema),
  ),
  storageInfo: Schema.optional(Schema.suspend(() => StorageInfoSchema)),
  certRecords: Schema.optional(
    Schema.Array(Schema.suspend(() => CertSyncRecordSchema)),
  ),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const ResourceMetadataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.String,
  resourceType: Schema.optional(Schema.String),
  resourceKind: Schema.optional(Schema.String),
  resourceOrigin: Schema.optional(Schema.suspend(() => ResourceOriginSchema)),
  accountId: Schema.optional(Schema.String),
});
const ResourceOriginSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Azure",
  "AWS",
  "GCP",
]);
const ReportStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Active",
  "Failed",
  "Reviewing",
  "Disabled",
]);
const ReportComplianceStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  m365: Schema.optional(Schema.suspend(() => OverviewStatusSchema)),
});
const OverviewStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  passedCount: Schema.optional(Schema.Number),
  failedCount: Schema.optional(Schema.Number),
  manualCount: Schema.optional(Schema.Number),
  notApplicableCount: Schema.optional(Schema.Number),
  pendingCount: Schema.optional(Schema.Number),
});
const CertSyncRecordSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  offerGuid: Schema.optional(Schema.String),
  certificationStatus: Schema.optional(Schema.String),
  ingestionStatus: Schema.optional(Schema.String),
  controls: Schema.optional(
    Schema.Array(Schema.suspend(() => ControlSyncRecordSchema)),
  ),
});
const ControlSyncRecordSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  controlId: Schema.optional(Schema.String),
  controlStatus: Schema.optional(Schema.String),
});
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
  "Canceled",
  "Creating",
  "Deleting",
  "Fixing",
  "Verifying",
  "Updating",
]);
const ReportPatchPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  triggerTime: Schema.optional(Schema.String),
  timeZone: Schema.optional(Schema.String),
  resources: Schema.optional(
    Schema.Array(Schema.suspend(() => ResourceMetadataSchema)),
  ),
  status: Schema.optional(Schema.suspend(() => ReportStatusSchema)),
  errors: Schema.optional(Schema.Array(Schema.String)),
  tenantId: Schema.optional(Schema.String),
  offerGuid: Schema.optional(Schema.String),
  nextTriggerTime: Schema.optional(Schema.String),
  lastTriggerTime: Schema.optional(Schema.String),
  subscriptions: Schema.optional(Schema.Array(Schema.String)),
  complianceStatus: Schema.optional(
    Schema.suspend(() => ReportComplianceStatusSchema),
  ),
  storageInfo: Schema.optional(Schema.suspend(() => StorageInfoSchema)),
  certRecords: Schema.optional(
    Schema.Array(Schema.suspend(() => CertSyncRecordSchema)),
  ),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const EvidenceResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const EvidencePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  evidenceType: Schema.optional(Schema.suspend(() => EvidenceTypeSchema)),
  filePath: Schema.String,
  extraData: Schema.optional(Schema.String),
  controlId: Schema.optional(Schema.String),
  responsibilityId: Schema.optional(Schema.String),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const EvidenceTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "File",
  "AutoCollectedEvidence",
  "Data",
]);
const EvidenceFileDownloadResponseEvidenceFileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
  });
const ResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
]);
const ScopingQuestionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  questionId: Schema.String,
  superiorQuestionId: Schema.optional(Schema.String),
  inputType: Schema.suspend(() => InputTypeSchema),
  optionIds: Schema.Array(Schema.String),
  rules: Schema.Array(Schema.suspend(() => RuleSchema)),
  showSubQuestionsValue: Schema.optional(Schema.String),
});
const InputTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
]);
const RuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
]);
const ScopingConfigurationResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const ScopingConfigurationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answers: Schema.optional(
      Schema.Array(Schema.suspend(() => ScopingAnswerSchema)),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const ScopingAnswerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  questionId: Schema.String,
  answers: Schema.Array(Schema.String),
});
const SnapshotResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SnapshotPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  snapshotName: Schema.optional(Schema.String),
  createdAt: Schema.optional(Schema.String),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  reportProperties: Schema.optional(
    Schema.suspend(() => ReportPropertiesSchema),
  ),
  reportSystemData: Schema.optional(
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
  complianceResults: Schema.optional(
    Schema.Array(Schema.suspend(() => ComplianceResultSchema)),
  ),
});
const ComplianceResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  complianceName: Schema.optional(Schema.String),
  categories: Schema.optional(
    Schema.Array(Schema.suspend(() => CategorySchema)),
  ),
});
const CategorySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  categoryName: Schema.optional(Schema.String),
  categoryStatus: Schema.optional(Schema.suspend(() => CategoryStatusSchema)),
  controlFamilies: Schema.optional(
    Schema.Array(Schema.suspend(() => ControlFamilySchema)),
  ),
});
const CategoryStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Passed",
  "Failed",
  "NotApplicable",
  "PendingApproval",
]);
const ControlFamilySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  controlFamilyName: Schema.optional(Schema.String),
  controlFamilyStatus: Schema.optional(
    Schema.suspend(() => ControlFamilyStatusSchema),
  ),
  controls: Schema.optional(Schema.Array(Schema.suspend(() => ControlSchema))),
});
const ControlFamilyStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Passed",
  "Failed",
  "NotApplicable",
  "PendingApproval",
]);
const ControlSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  controlId: Schema.optional(Schema.String),
  controlName: Schema.optional(Schema.String),
  controlFullName: Schema.optional(Schema.String),
  controlDescription: Schema.optional(Schema.String),
  controlDescriptionHyperLink: Schema.optional(Schema.String),
  controlStatus: Schema.optional(Schema.suspend(() => ControlStatusSchema)),
  responsibilities: Schema.optional(
    Schema.Array(Schema.suspend(() => ResponsibilitySchema)),
  ),
});
const ControlStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Passed",
  "Failed",
  "NotApplicable",
  "PendingApproval",
]);
const ResponsibilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  responsibilityId: Schema.optional(Schema.String),
  responsibilityTitle: Schema.optional(Schema.String),
  responsibilityDescription: Schema.optional(Schema.String),
  responsibilityType: Schema.optional(
    Schema.suspend(() => ResponsibilityTypeSchema),
  ),
  responsibilitySeverity: Schema.optional(
    Schema.suspend(() => ResponsibilitySeveritySchema),
  ),
  responsibilityStatus: Schema.optional(
    Schema.suspend(() => ResponsibilityStatusSchema),
  ),
  responsibilityEnvironment: Schema.optional(
    Schema.suspend(() => ResponsibilityEnvironmentSchema),
  ),
  failedResourceCount: Schema.optional(Schema.Number),
  totalResourceCount: Schema.optional(Schema.Number),
  resourceList: Schema.optional(
    Schema.Array(Schema.suspend(() => ResponsibilityResourceSchema)),
  ),
  recommendationList: Schema.optional(
    Schema.Array(Schema.suspend(() => RecommendationSchema)),
  ),
  guidance: Schema.optional(Schema.String),
  justification: Schema.optional(Schema.String),
  evidenceFiles: Schema.optional(Schema.Array(Schema.String)),
});
const ResponsibilityTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Automated",
  "ScopedManual",
  "Manual",
]);
const ResponsibilitySeveritySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["High", "Medium", "Low"]);
const ResponsibilityStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Passed",
  "Failed",
  "NotApplicable",
  "PendingApproval",
]);
const ResponsibilityEnvironmentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Azure",
    "AWS",
    "GCP",
    "General",
  ]);
const ResponsibilityResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  resourceType: Schema.optional(Schema.String),
  resourceOrigin: Schema.optional(Schema.suspend(() => ResourceOriginSchema)),
  resourceStatus: Schema.optional(Schema.suspend(() => ResourceStatusSchema)),
  resourceStatusChangeDate: Schema.optional(Schema.String),
  recommendationIds: Schema.optional(Schema.Array(Schema.String)),
});
const ResourceStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Healthy",
  "Unhealthy",
]);
const RecommendationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  recommendationId: Schema.optional(Schema.String),
  recommendationShortName: Schema.optional(Schema.String),
  recommendationSolutions: Schema.optional(
    Schema.Array(Schema.suspend(() => RecommendationSolutionSchema)),
  ),
});
const RecommendationSolutionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  recommendationSolutionIndex: Schema.optional(Schema.String),
  recommendationSolutionContent: Schema.optional(Schema.String),
  isRecommendSolution: Schema.optional(
    Schema.suspend(() => IsRecommendSolutionSchema),
  ),
});
const IsRecommendSolutionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "true",
  "false",
]);
const DownloadTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "ComplianceReport",
  "CompliancePdfReport",
  "ComplianceDetailedPdfReport",
  "ResourceList",
]);
const ResourceItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.optional(Schema.String),
  resourceGroup: Schema.optional(Schema.String),
  resourceType: Schema.optional(Schema.String),
  resourceId: Schema.optional(Schema.String),
});
const ComplianceReportItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  categoryName: Schema.optional(Schema.String),
  controlFamilyName: Schema.optional(Schema.String),
  controlId: Schema.optional(Schema.String),
  controlName: Schema.optional(Schema.String),
  controlStatus: Schema.optional(Schema.suspend(() => ControlStatusSchema)),
  responsibilityTitle: Schema.optional(Schema.String),
  responsibilityDescription: Schema.optional(Schema.String),
  resourceId: Schema.optional(Schema.String),
  resourceType: Schema.optional(Schema.String),
  resourceOrigin: Schema.optional(Schema.suspend(() => ResourceOriginSchema)),
  resourceStatus: Schema.optional(Schema.suspend(() => ResourceStatusSchema)),
  resourceStatusChangeDate: Schema.optional(Schema.String),
});
const DownloadResponseCompliancePdfReportSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sasUri: Schema.optional(Schema.String),
  });
const DownloadResponseComplianceDetailedPdfReportSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sasUri: Schema.optional(Schema.String),
  });
const WebhookResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const WebhookPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  webhookId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.suspend(() => WebhookStatusSchema)),
  tenantId: Schema.optional(Schema.String),
  sendAllEvents: Schema.optional(Schema.suspend(() => SendAllEventsSchema)),
  events: Schema.optional(
    Schema.Array(Schema.suspend(() => NotificationEventSchema)),
  ),
  payloadUrl: Schema.optional(Schema.String),
  contentType: Schema.optional(Schema.suspend(() => ContentTypeSchema)),
  webhookKey: Schema.optional(Schema.String),
  updateWebhookKey: Schema.optional(
    Schema.suspend(() => UpdateWebhookKeySchema),
  ),
  webhookKeyEnabled: Schema.optional(
    Schema.suspend(() => WebhookKeyEnabledSchema),
  ),
  enableSslVerification: Schema.optional(
    Schema.suspend(() => EnableSslVerificationSchema),
  ),
  deliveryStatus: Schema.optional(Schema.suspend(() => DeliveryStatusSchema)),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const WebhookStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const SendAllEventsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "true",
  "false",
]);
const NotificationEventSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "generate_snapshot_success",
  "generate_snapshot_failed",
  "assessment_failure",
  "report_configuration_changes",
  "report_deletion",
]);
const ContentTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "application/json",
]);
const UpdateWebhookKeySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "true",
  "false",
]);
const WebhookKeyEnabledSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "true",
  "false",
]);
const EnableSslVerificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["true", "false"],
);
const DeliveryStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
  "NotStarted",
]);
const TriggerEvaluationPropertySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerTime: Schema.optional(Schema.String),
    evaluationEndTime: Schema.optional(Schema.String),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
    quickAssessments: Schema.optional(
      Schema.Array(Schema.suspend(() => QuickAssessmentSchema)),
    ),
  });
const QuickAssessmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.optional(Schema.String),
  responsibilityId: Schema.optional(Schema.String),
  timestamp: Schema.optional(Schema.String),
  resourceStatus: Schema.optional(Schema.suspend(() => ResourceStatusSchema)),
  displayName: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  remediationLink: Schema.optional(Schema.String),
});

// Input Schema
export const EvidenceCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    evidenceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => EvidencePropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
      apiVersion: "2024-06-27",
    }),
  );
export type EvidenceCreateOrUpdateInput =
  typeof EvidenceCreateOrUpdateInput.Type;

// Output Schema
export const EvidenceCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => EvidencePropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type EvidenceCreateOrUpdateOutput =
  typeof EvidenceCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or Update an evidence a specified report
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param evidenceName - The evidence name.
 */
export const EvidenceCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EvidenceCreateOrUpdateInput,
    outputSchema: EvidenceCreateOrUpdateOutput,
  }),
);
// Input Schema
export const EvidenceDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  evidenceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
    apiVersion: "2024-06-27",
  }),
);
export type EvidenceDeleteInput = typeof EvidenceDeleteInput.Type;

// Output Schema
export const EvidenceDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EvidenceDeleteOutput = typeof EvidenceDeleteOutput.Type;

// The operation
/**
 * Delete an existent evidence from a specified report
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param evidenceName - The evidence name.
 */
export const EvidenceDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EvidenceDeleteInput,
  outputSchema: EvidenceDeleteOutput,
}));
// Input Schema
export const EvidenceDownloadInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type EvidenceDownloadInput = typeof EvidenceDownloadInput.Type;

// Output Schema
export const EvidenceDownloadOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    evidenceFile: Schema.optional(
      Schema.suspend(() => EvidenceFileDownloadResponseEvidenceFileSchema),
    ),
  },
);
export type EvidenceDownloadOutput = typeof EvidenceDownloadOutput.Type;

// The operation
/**
 * Download evidence file.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param evidenceName - The evidence name.
 */
export const EvidenceDownload = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EvidenceDownloadInput,
  outputSchema: EvidenceDownloadOutput,
}));
// Input Schema
export const EvidenceGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  evidenceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
    apiVersion: "2024-06-27",
  }),
);
export type EvidenceGetInput = typeof EvidenceGetInput.Type;

// Output Schema
export const EvidenceGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => EvidencePropertiesSchema),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type EvidenceGetOutput = typeof EvidenceGetOutput.Type;

// The operation
/**
 * Get the evidence metadata
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param evidenceName - The evidence name.
 */
export const EvidenceGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EvidenceGetInput,
  outputSchema: EvidenceGetOutput,
}));
// Input Schema
export const EvidenceListByReportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences",
      apiVersion: "2024-06-27",
    }),
  );
export type EvidenceListByReportInput = typeof EvidenceListByReportInput.Type;

// Output Schema
export const EvidenceListByReportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => EvidenceResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type EvidenceListByReportOutput = typeof EvidenceListByReportOutput.Type;

// The operation
/**
 * Returns a paginated list of evidences for a specified report.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const EvidenceListByReport = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EvidenceListByReportInput,
    outputSchema: EvidenceListByReportOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/operations",
    apiVersion: "2024-06-27",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Array(Schema.suspend(() => OperationSchema))),
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
export const ProviderActionsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/checkNameAvailability",
      apiVersion: "2024-06-27",
    }),
  );
export type ProviderActionsCheckNameAvailabilityInput =
  typeof ProviderActionsCheckNameAvailabilityInput.Type;

// Output Schema
export const ProviderActionsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  });
export type ProviderActionsCheckNameAvailabilityOutput =
  typeof ProviderActionsCheckNameAvailabilityOutput.Type;

// The operation
/**
 * Check if the given name is available for a report.
 *
 * @param api-version - The API version to use for this operation.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const ProviderActionsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderActionsCheckNameAvailabilityInput,
    outputSchema: ProviderActionsCheckNameAvailabilityOutput,
  }));
// Input Schema
export const ProviderActionsGetCollectionCountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/getCollectionCount",
      apiVersion: "2024-06-27",
    }),
  );
export type ProviderActionsGetCollectionCountInput =
  typeof ProviderActionsGetCollectionCountInput.Type;

// Output Schema
export const ProviderActionsGetCollectionCountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
  });
export type ProviderActionsGetCollectionCountOutput =
  typeof ProviderActionsGetCollectionCountOutput.Type;

// The operation
/**
 * Get the count of reports.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ProviderActionsGetCollectionCount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderActionsGetCollectionCountInput,
    outputSchema: ProviderActionsGetCollectionCountOutput,
  }));
// Input Schema
export const ProviderActionsGetOverviewStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/getOverviewStatus",
      apiVersion: "2024-06-27",
    }),
  );
export type ProviderActionsGetOverviewStatusInput =
  typeof ProviderActionsGetOverviewStatusInput.Type;

// Output Schema
export const ProviderActionsGetOverviewStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusList: Schema.optional(
      Schema.Array(Schema.suspend(() => StatusItemSchema)),
    ),
  });
export type ProviderActionsGetOverviewStatusOutput =
  typeof ProviderActionsGetOverviewStatusOutput.Type;

// The operation
/**
 * Get the resource overview status.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ProviderActionsGetOverviewStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderActionsGetOverviewStatusInput,
    outputSchema: ProviderActionsGetOverviewStatusOutput,
  }));
// Input Schema
export const ProviderActionsListInUseStorageAccountsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/listInUseStorageAccounts",
      apiVersion: "2024-06-27",
    }),
  );
export type ProviderActionsListInUseStorageAccountsInput =
  typeof ProviderActionsListInUseStorageAccountsInput.Type;

// Output Schema
export const ProviderActionsListInUseStorageAccountsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageAccountList: Schema.optional(
      Schema.Array(Schema.suspend(() => StorageInfoSchema)),
    ),
  });
export type ProviderActionsListInUseStorageAccountsOutput =
  typeof ProviderActionsListInUseStorageAccountsOutput.Type;

// The operation
/**
 * List the storage accounts which are in use by related reports
 *
 * @param api-version - The API version to use for this operation.
 */
export const ProviderActionsListInUseStorageAccounts =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderActionsListInUseStorageAccountsInput,
    outputSchema: ProviderActionsListInUseStorageAccountsOutput,
  }));
// Input Schema
export const ProviderActionsOnboardInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionIds: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/onboard",
      apiVersion: "2024-06-27",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ProviderActionsOnboardInput =
  typeof ProviderActionsOnboardInput.Type;

// Output Schema
export const ProviderActionsOnboardOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionIds: Schema.optional(Schema.Array(Schema.String)),
  });
export type ProviderActionsOnboardOutput =
  typeof ProviderActionsOnboardOutput.Type;

// The operation
/**
 * Onboard given subscriptions to Microsoft.AppComplianceAutomation provider.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ProviderActionsOnboard = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProviderActionsOnboardInput,
    outputSchema: ProviderActionsOnboardOutput,
  }),
);
// Input Schema
export const ProviderActionsTriggerEvaluationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceIds: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/triggerEvaluation",
      apiVersion: "2024-06-27",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ProviderActionsTriggerEvaluationInput =
  typeof ProviderActionsTriggerEvaluationInput.Type;

// Output Schema
export const ProviderActionsTriggerEvaluationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => TriggerEvaluationPropertySchema),
    ),
  });
export type ProviderActionsTriggerEvaluationOutput =
  typeof ProviderActionsTriggerEvaluationOutput.Type;

// The operation
/**
 * Trigger quick evaluation for the given subscriptions.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ProviderActionsTriggerEvaluation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderActionsTriggerEvaluationInput,
    outputSchema: ProviderActionsTriggerEvaluationOutput,
  }));
// Input Schema
export const ReportCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => ReportPropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
      apiVersion: "2024-06-27",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ReportCreateOrUpdateInput = typeof ReportCreateOrUpdateInput.Type;

// Output Schema
export const ReportCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ReportPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ReportCreateOrUpdateOutput = typeof ReportCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new AppComplianceAutomation report or update an exiting AppComplianceAutomation report.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReportCreateOrUpdateInput,
    outputSchema: ReportCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ReportDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
    apiVersion: "2024-06-27",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ReportDeleteInput = typeof ReportDeleteInput.Type;

// Output Schema
export const ReportDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReportDeleteOutput = typeof ReportDeleteOutput.Type;

// The operation
/**
 * Delete an AppComplianceAutomation report.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReportDeleteInput,
  outputSchema: ReportDeleteOutput,
}));
// Input Schema
export const ReportFixInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/fix",
    apiVersion: "2024-06-27",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ReportFixInput = typeof ReportFixInput.Type;

// Output Schema
export const ReportFixOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.optional(Schema.suspend(() => ResultSchema)),
  reason: Schema.optional(Schema.String),
});
export type ReportFixOutput = typeof ReportFixOutput.Type;

// The operation
/**
 * Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportFix = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReportFixInput,
  outputSchema: ReportFixOutput,
}));
// Input Schema
export const ReportGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
    apiVersion: "2024-06-27",
  }),
);
export type ReportGetInput = typeof ReportGetInput.Type;

// Output Schema
export const ReportGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => ReportPropertiesSchema),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ReportGetOutput = typeof ReportGetOutput.Type;

// The operation
/**
 * Get the AppComplianceAutomation report and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReportGetInput,
  outputSchema: ReportGetOutput,
}));
// Input Schema
export const ReportGetScopingQuestionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/getScopingQuestions",
      apiVersion: "2024-06-27",
    }),
  );
export type ReportGetScopingQuestionsInput =
  typeof ReportGetScopingQuestionsInput.Type;

// Output Schema
export const ReportGetScopingQuestionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    questions: Schema.optional(
      Schema.Array(Schema.suspend(() => ScopingQuestionSchema)),
    ),
  });
export type ReportGetScopingQuestionsOutput =
  typeof ReportGetScopingQuestionsOutput.Type;

// The operation
/**
 * Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportGetScopingQuestions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReportGetScopingQuestionsInput,
    outputSchema: ReportGetScopingQuestionsOutput,
  }),
);
// Input Schema
export const ReportListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/reports",
    apiVersion: "2024-06-27",
  }),
);
export type ReportListInput = typeof ReportListInput.Type;

// Output Schema
export const ReportListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => ReportResourceSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type ReportListOutput = typeof ReportListOutput.Type;

// The operation
/**
 * Get the AppComplianceAutomation report list for the tenant.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ReportList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReportListInput,
  outputSchema: ReportListOutput,
}));
// Input Schema
export const ReportNestedResourceCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/checkNameAvailability",
      apiVersion: "2024-06-27",
    }),
  );
export type ReportNestedResourceCheckNameAvailabilityInput =
  typeof ReportNestedResourceCheckNameAvailabilityInput.Type;

// Output Schema
export const ReportNestedResourceCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  });
export type ReportNestedResourceCheckNameAvailabilityOutput =
  typeof ReportNestedResourceCheckNameAvailabilityOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReportNestedResourceCheckNameAvailabilityInput,
    outputSchema: ReportNestedResourceCheckNameAvailabilityOutput,
  }));
// Input Schema
export const ReportSyncCertRecordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    certRecord: Schema.suspend(() => CertSyncRecordSchema),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/syncCertRecord",
      apiVersion: "2024-06-27",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ReportSyncCertRecordInput = typeof ReportSyncCertRecordInput.Type;

// Output Schema
export const ReportSyncCertRecordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certRecord: Schema.optional(Schema.suspend(() => CertSyncRecordSchema)),
  });
export type ReportSyncCertRecordOutput = typeof ReportSyncCertRecordOutput.Type;

// The operation
/**
 * Synchronize attestation record from app compliance.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportSyncCertRecord = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReportSyncCertRecordInput,
    outputSchema: ReportSyncCertRecordOutput,
  }),
);
// Input Schema
export const ReportUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.suspend(() => ReportPatchPropertiesSchema),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
    apiVersion: "2024-06-27",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ReportUpdateInput = typeof ReportUpdateInput.Type;

// Output Schema
export const ReportUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => ReportPropertiesSchema),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ReportUpdateOutput = typeof ReportUpdateOutput.Type;

// The operation
/**
 * Update an exiting AppComplianceAutomation report.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReportUpdateInput,
  outputSchema: ReportUpdateOutput,
}));
// Input Schema
export const ReportVerifyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/verify",
    apiVersion: "2024-06-27",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ReportVerifyInput = typeof ReportVerifyInput.Type;

// Output Schema
export const ReportVerifyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.optional(Schema.suspend(() => ResultSchema)),
  reason: Schema.optional(Schema.String),
});
export type ReportVerifyOutput = typeof ReportVerifyOutput.Type;

// The operation
/**
 * Verify the AppComplianceAutomation report health status.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ReportVerify = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReportVerifyInput,
  outputSchema: ReportVerifyOutput,
}));
// Input Schema
export const ScopingConfigurationCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    scopingConfigurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => ScopingConfigurationPropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
      apiVersion: "2024-06-27",
    }),
  );
export type ScopingConfigurationCreateOrUpdateInput =
  typeof ScopingConfigurationCreateOrUpdateInput.Type;

// Output Schema
export const ScopingConfigurationCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ScopingConfigurationPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ScopingConfigurationCreateOrUpdateOutput =
  typeof ScopingConfigurationCreateOrUpdateOutput.Type;

// The operation
/**
 * Get the AppComplianceAutomation scoping configuration of the specific report.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param scopingConfigurationName - The scoping configuration of the specific report.
 */
export const ScopingConfigurationCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScopingConfigurationCreateOrUpdateInput,
    outputSchema: ScopingConfigurationCreateOrUpdateOutput,
  }));
// Input Schema
export const ScopingConfigurationDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    scopingConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
      apiVersion: "2024-06-27",
    }),
  );
export type ScopingConfigurationDeleteInput =
  typeof ScopingConfigurationDeleteInput.Type;

// Output Schema
export const ScopingConfigurationDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ScopingConfigurationDeleteOutput =
  typeof ScopingConfigurationDeleteOutput.Type;

// The operation
/**
 * Clean the AppComplianceAutomation scoping configuration of the specific report.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param scopingConfigurationName - The scoping configuration of the specific report.
 */
export const ScopingConfigurationDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScopingConfigurationDeleteInput,
    outputSchema: ScopingConfigurationDeleteOutput,
  }),
);
// Input Schema
export const ScopingConfigurationGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    scopingConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
      apiVersion: "2024-06-27",
    }),
  );
export type ScopingConfigurationGetInput =
  typeof ScopingConfigurationGetInput.Type;

// Output Schema
export const ScopingConfigurationGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ScopingConfigurationPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ScopingConfigurationGetOutput =
  typeof ScopingConfigurationGetOutput.Type;

// The operation
/**
 * Get the AppComplianceAutomation scoping configuration of the specific report.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param scopingConfigurationName - The scoping configuration of the specific report.
 */
export const ScopingConfigurationGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScopingConfigurationGetInput,
    outputSchema: ScopingConfigurationGetOutput,
  }),
);
// Input Schema
export const ScopingConfigurationListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations",
      apiVersion: "2024-06-27",
    }),
  );
export type ScopingConfigurationListInput =
  typeof ScopingConfigurationListInput.Type;

// Output Schema
export const ScopingConfigurationListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => ScopingConfigurationResourceSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ScopingConfigurationListOutput =
  typeof ScopingConfigurationListOutput.Type;

// The operation
/**
 * Returns a list format of the singleton scopingConfiguration for a specified report.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const ScopingConfigurationList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScopingConfigurationListInput,
    outputSchema: ScopingConfigurationListOutput,
  }),
);
// Input Schema
export const SnapshotDownloadInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  snapshotName: Schema.String.pipe(T.PathParam()),
  reportCreatorTenantId: Schema.optional(Schema.String),
  downloadType: Schema.suspend(() => DownloadTypeSchema),
  offerGuid: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}/download",
    apiVersion: "2024-06-27",
    longRunning: { finalStateVia: "location" },
  }),
);
export type SnapshotDownloadInput = typeof SnapshotDownloadInput.Type;

// Output Schema
export const SnapshotDownloadOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceList: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceItemSchema)),
    ),
    complianceReport: Schema.optional(
      Schema.Array(Schema.suspend(() => ComplianceReportItemSchema)),
    ),
    compliancePdfReport: Schema.optional(
      Schema.suspend(() => DownloadResponseCompliancePdfReportSchema),
    ),
    complianceDetailedPdfReport: Schema.optional(
      Schema.suspend(() => DownloadResponseComplianceDetailedPdfReportSchema),
    ),
  },
);
export type SnapshotDownloadOutput = typeof SnapshotDownloadOutput.Type;

// The operation
/**
 * Download compliance needs from snapshot, like: Compliance Report, Resource List.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param snapshotName - Snapshot Name.
 */
export const SnapshotDownload = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotDownloadInput,
  outputSchema: SnapshotDownloadOutput,
}));
// Input Schema
export const SnapshotGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  snapshotName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}",
    apiVersion: "2024-06-27",
  }),
);
export type SnapshotGetInput = typeof SnapshotGetInput.Type;

// Output Schema
export const SnapshotGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => SnapshotPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type SnapshotGetOutput = typeof SnapshotGetOutput.Type;

// The operation
/**
 * Get the AppComplianceAutomation snapshot and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param snapshotName - Snapshot Name.
 */
export const SnapshotGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotGetInput,
  outputSchema: SnapshotGetOutput,
}));
// Input Schema
export const SnapshotListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots",
    apiVersion: "2024-06-27",
  }),
);
export type SnapshotListInput = typeof SnapshotListInput.Type;

// Output Schema
export const SnapshotListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => SnapshotResourceSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type SnapshotListOutput = typeof SnapshotListOutput.Type;

// The operation
/**
 * Get the AppComplianceAutomation snapshot list.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const SnapshotList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotListInput,
  outputSchema: SnapshotListOutput,
}));
// Input Schema
export const WebhookCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportName: Schema.String.pipe(T.PathParam()),
    webhookName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => WebhookPropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
      apiVersion: "2024-06-27",
    }),
  );
export type WebhookCreateOrUpdateInput = typeof WebhookCreateOrUpdateInput.Type;

// Output Schema
export const WebhookCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => WebhookPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebhookCreateOrUpdateOutput =
  typeof WebhookCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new AppComplianceAutomation webhook or update an exiting AppComplianceAutomation webhook.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param webhookName - Webhook Name.
 */
export const WebhookCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebhookCreateOrUpdateInput,
    outputSchema: WebhookCreateOrUpdateOutput,
  }),
);
// Input Schema
export const WebhookDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  webhookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
    apiVersion: "2024-06-27",
  }),
);
export type WebhookDeleteInput = typeof WebhookDeleteInput.Type;

// Output Schema
export const WebhookDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebhookDeleteOutput = typeof WebhookDeleteOutput.Type;

// The operation
/**
 * Delete an AppComplianceAutomation webhook.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param webhookName - Webhook Name.
 */
export const WebhookDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebhookDeleteInput,
  outputSchema: WebhookDeleteOutput,
}));
// Input Schema
export const WebhookGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  webhookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
    apiVersion: "2024-06-27",
  }),
);
export type WebhookGetInput = typeof WebhookGetInput.Type;

// Output Schema
export const WebhookGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => WebhookPropertiesSchema),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type WebhookGetOutput = typeof WebhookGetOutput.Type;

// The operation
/**
 * Get the AppComplianceAutomation webhook and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param webhookName - Webhook Name.
 */
export const WebhookGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebhookGetInput,
  outputSchema: WebhookGetOutput,
}));
// Input Schema
export const WebhookListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks",
    apiVersion: "2024-06-27",
  }),
);
export type WebhookListInput = typeof WebhookListInput.Type;

// Output Schema
export const WebhookListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => WebhookResourceSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type WebhookListOutput = typeof WebhookListOutput.Type;

// The operation
/**
 * Get the AppComplianceAutomation webhook list.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 */
export const WebhookList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebhookListInput,
  outputSchema: WebhookListOutput,
}));
// Input Schema
export const WebhookUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportName: Schema.String.pipe(T.PathParam()),
  webhookName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => WebhookPropertiesSchema)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
    apiVersion: "2024-06-27",
  }),
);
export type WebhookUpdateInput = typeof WebhookUpdateInput.Type;

// Output Schema
export const WebhookUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => WebhookPropertiesSchema),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type WebhookUpdateOutput = typeof WebhookUpdateOutput.Type;

// The operation
/**
 * Update an exiting AppComplianceAutomation webhook.
 *
 * @param api-version - The API version to use for this operation.
 * @param reportName - Report Name.
 * @param webhookName - Webhook Name.
 */
export const WebhookUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebhookUpdateInput,
  outputSchema: WebhookUpdateOutput,
}));
