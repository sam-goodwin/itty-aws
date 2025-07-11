import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class Backup extends AWSServiceClient {
  associateBackupVaultMpaApprovalTeam(
    input: AssociateBackupVaultMpaApprovalTeamInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  cancelLegalHold(
    input: CancelLegalHoldInput,
  ): Effect.Effect<
    CancelLegalHoldOutput,
    | InvalidParameterValueException
    | InvalidResourceStateException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createBackupPlan(
    input: CreateBackupPlanInput,
  ): Effect.Effect<
    CreateBackupPlanOutput,
    | AlreadyExistsException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createBackupSelection(
    input: CreateBackupSelectionInput,
  ): Effect.Effect<
    CreateBackupSelectionOutput,
    | AlreadyExistsException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createBackupVault(
    input: CreateBackupVaultInput,
  ): Effect.Effect<
    CreateBackupVaultOutput,
    | AlreadyExistsException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createFramework(
    input: CreateFrameworkInput,
  ): Effect.Effect<
    CreateFrameworkOutput,
    | AlreadyExistsException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createLegalHold(
    input: CreateLegalHoldInput,
  ): Effect.Effect<
    CreateLegalHoldOutput,
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createLogicallyAirGappedBackupVault(
    input: CreateLogicallyAirGappedBackupVaultInput,
  ): Effect.Effect<
    CreateLogicallyAirGappedBackupVaultOutput,
    | AlreadyExistsException
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createReportPlan(
    input: CreateReportPlanInput,
  ): Effect.Effect<
    CreateReportPlanOutput,
    | AlreadyExistsException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createRestoreAccessBackupVault(
    input: CreateRestoreAccessBackupVaultInput,
  ): Effect.Effect<
    CreateRestoreAccessBackupVaultOutput,
    | AlreadyExistsException
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createRestoreTestingPlan(
    input: CreateRestoreTestingPlanInput,
  ): Effect.Effect<
    CreateRestoreTestingPlanOutput,
    | AlreadyExistsException
    | ConflictException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createRestoreTestingSelection(
    input: CreateRestoreTestingSelectionInput,
  ): Effect.Effect<
    CreateRestoreTestingSelectionOutput,
    | AlreadyExistsException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteBackupPlan(
    input: DeleteBackupPlanInput,
  ): Effect.Effect<
    DeleteBackupPlanOutput,
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteBackupSelection(
    input: DeleteBackupSelectionInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteBackupVault(
    input: DeleteBackupVaultInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteBackupVaultAccessPolicy(
    input: DeleteBackupVaultAccessPolicyInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteBackupVaultLockConfiguration(
    input: DeleteBackupVaultLockConfigurationInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteBackupVaultNotifications(
    input: DeleteBackupVaultNotificationsInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteFramework(
    input: DeleteFrameworkInput,
  ): Effect.Effect<
    {},
    | ConflictException
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteRecoveryPoint(
    input: DeleteRecoveryPointInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | InvalidRequestException
    | InvalidResourceStateException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteReportPlan(
    input: DeleteReportPlanInput,
  ): Effect.Effect<
    {},
    | ConflictException
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteRestoreTestingPlan(
    input: DeleteRestoreTestingPlanInput,
  ): Effect.Effect<
    {},
    InvalidRequestException | ServiceUnavailableException | CommonAwsError
  >;
  deleteRestoreTestingSelection(
    input: DeleteRestoreTestingSelectionInput,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ServiceUnavailableException | CommonAwsError
  >;
  describeBackupJob(
    input: DescribeBackupJobInput,
  ): Effect.Effect<
    DescribeBackupJobOutput,
    | DependencyFailureException
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeBackupVault(
    input: DescribeBackupVaultInput,
  ): Effect.Effect<
    DescribeBackupVaultOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeCopyJob(
    input: DescribeCopyJobInput,
  ): Effect.Effect<
    DescribeCopyJobOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeFramework(
    input: DescribeFrameworkInput,
  ): Effect.Effect<
    DescribeFrameworkOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeGlobalSettings(
    input: DescribeGlobalSettingsInput,
  ): Effect.Effect<
    DescribeGlobalSettingsOutput,
    InvalidRequestException | ServiceUnavailableException | CommonAwsError
  >;
  describeProtectedResource(
    input: DescribeProtectedResourceInput,
  ): Effect.Effect<
    DescribeProtectedResourceOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeRecoveryPoint(
    input: DescribeRecoveryPointInput,
  ): Effect.Effect<
    DescribeRecoveryPointOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeRegionSettings(
    input: DescribeRegionSettingsInput,
  ): Effect.Effect<
    DescribeRegionSettingsOutput,
    ServiceUnavailableException | CommonAwsError
  >;
  describeReportJob(
    input: DescribeReportJobInput,
  ): Effect.Effect<
    DescribeReportJobOutput,
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeReportPlan(
    input: DescribeReportPlanInput,
  ): Effect.Effect<
    DescribeReportPlanOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeRestoreJob(
    input: DescribeRestoreJobInput,
  ): Effect.Effect<
    DescribeRestoreJobOutput,
    | DependencyFailureException
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  disassociateBackupVaultMpaApprovalTeam(
    input: DisassociateBackupVaultMpaApprovalTeamInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  disassociateRecoveryPoint(
    input: DisassociateRecoveryPointInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | InvalidRequestException
    | InvalidResourceStateException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  disassociateRecoveryPointFromParent(
    input: DisassociateRecoveryPointFromParentInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  exportBackupPlanTemplate(
    input: ExportBackupPlanTemplateInput,
  ): Effect.Effect<
    ExportBackupPlanTemplateOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getBackupPlan(
    input: GetBackupPlanInput,
  ): Effect.Effect<
    GetBackupPlanOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getBackupPlanFromJSON(
    input: GetBackupPlanFromJSONInput,
  ): Effect.Effect<
    GetBackupPlanFromJSONOutput,
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getBackupPlanFromTemplate(
    input: GetBackupPlanFromTemplateInput,
  ): Effect.Effect<
    GetBackupPlanFromTemplateOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getBackupSelection(
    input: GetBackupSelectionInput,
  ): Effect.Effect<
    GetBackupSelectionOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getBackupVaultAccessPolicy(
    input: GetBackupVaultAccessPolicyInput,
  ): Effect.Effect<
    GetBackupVaultAccessPolicyOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getBackupVaultNotifications(
    input: GetBackupVaultNotificationsInput,
  ): Effect.Effect<
    GetBackupVaultNotificationsOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getLegalHold(
    input: GetLegalHoldInput,
  ): Effect.Effect<
    GetLegalHoldOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getRecoveryPointIndexDetails(
    input: GetRecoveryPointIndexDetailsInput,
  ): Effect.Effect<
    GetRecoveryPointIndexDetailsOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getRecoveryPointRestoreMetadata(
    input: GetRecoveryPointRestoreMetadataInput,
  ): Effect.Effect<
    GetRecoveryPointRestoreMetadataOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getRestoreJobMetadata(
    input: GetRestoreJobMetadataInput,
  ): Effect.Effect<
    GetRestoreJobMetadataOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getRestoreTestingInferredMetadata(
    input: GetRestoreTestingInferredMetadataInput,
  ): Effect.Effect<
    GetRestoreTestingInferredMetadataOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getRestoreTestingPlan(
    input: GetRestoreTestingPlanInput,
  ): Effect.Effect<
    GetRestoreTestingPlanOutput,
    ResourceNotFoundException | ServiceUnavailableException | CommonAwsError
  >;
  getRestoreTestingSelection(
    input: GetRestoreTestingSelectionInput,
  ): Effect.Effect<
    GetRestoreTestingSelectionOutput,
    ResourceNotFoundException | ServiceUnavailableException | CommonAwsError
  >;
  getSupportedResourceTypes(input: {}): Effect.Effect<
    GetSupportedResourceTypesOutput,
    ServiceUnavailableException | CommonAwsError
  >;
  listBackupJobs(
    input: ListBackupJobsInput,
  ): Effect.Effect<
    ListBackupJobsOutput,
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listBackupJobSummaries(
    input: ListBackupJobSummariesInput,
  ): Effect.Effect<
    ListBackupJobSummariesOutput,
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listBackupPlans(
    input: ListBackupPlansInput,
  ): Effect.Effect<
    ListBackupPlansOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listBackupPlanTemplates(
    input: ListBackupPlanTemplatesInput,
  ): Effect.Effect<
    ListBackupPlanTemplatesOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listBackupPlanVersions(
    input: ListBackupPlanVersionsInput,
  ): Effect.Effect<
    ListBackupPlanVersionsOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listBackupSelections(
    input: ListBackupSelectionsInput,
  ): Effect.Effect<
    ListBackupSelectionsOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listBackupVaults(
    input: ListBackupVaultsInput,
  ): Effect.Effect<
    ListBackupVaultsOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listCopyJobs(
    input: ListCopyJobsInput,
  ): Effect.Effect<
    ListCopyJobsOutput,
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listCopyJobSummaries(
    input: ListCopyJobSummariesInput,
  ): Effect.Effect<
    ListCopyJobSummariesOutput,
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listFrameworks(
    input: ListFrameworksInput,
  ): Effect.Effect<
    ListFrameworksOutput,
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listIndexedRecoveryPoints(
    input: ListIndexedRecoveryPointsInput,
  ): Effect.Effect<
    ListIndexedRecoveryPointsOutput,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listLegalHolds(
    input: ListLegalHoldsInput,
  ): Effect.Effect<
    ListLegalHoldsOutput,
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listProtectedResources(
    input: ListProtectedResourcesInput,
  ): Effect.Effect<
    ListProtectedResourcesOutput,
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listProtectedResourcesByBackupVault(
    input: ListProtectedResourcesByBackupVaultInput,
  ): Effect.Effect<
    ListProtectedResourcesByBackupVaultOutput,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listRecoveryPointsByBackupVault(
    input: ListRecoveryPointsByBackupVaultInput,
  ): Effect.Effect<
    ListRecoveryPointsByBackupVaultOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listRecoveryPointsByLegalHold(
    input: ListRecoveryPointsByLegalHoldInput,
  ): Effect.Effect<
    ListRecoveryPointsByLegalHoldOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listRecoveryPointsByResource(
    input: ListRecoveryPointsByResourceInput,
  ): Effect.Effect<
    ListRecoveryPointsByResourceOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listReportJobs(
    input: ListReportJobsInput,
  ): Effect.Effect<
    ListReportJobsOutput,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listReportPlans(
    input: ListReportPlansInput,
  ): Effect.Effect<
    ListReportPlansOutput,
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listRestoreAccessBackupVaults(
    input: ListRestoreAccessBackupVaultsInput,
  ): Effect.Effect<
    ListRestoreAccessBackupVaultsOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listRestoreJobs(
    input: ListRestoreJobsInput,
  ): Effect.Effect<
    ListRestoreJobsOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listRestoreJobsByProtectedResource(
    input: ListRestoreJobsByProtectedResourceInput,
  ): Effect.Effect<
    ListRestoreJobsByProtectedResourceOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listRestoreJobSummaries(
    input: ListRestoreJobSummariesInput,
  ): Effect.Effect<
    ListRestoreJobSummariesOutput,
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listRestoreTestingPlans(
    input: ListRestoreTestingPlansInput,
  ): Effect.Effect<
    ListRestoreTestingPlansOutput,
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listRestoreTestingSelections(
    input: ListRestoreTestingSelectionsInput,
  ): Effect.Effect<
    ListRestoreTestingSelectionsOutput,
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listTags(
    input: ListTagsInput,
  ): Effect.Effect<
    ListTagsOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putBackupVaultAccessPolicy(
    input: PutBackupVaultAccessPolicyInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putBackupVaultLockConfiguration(
    input: PutBackupVaultLockConfigurationInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putBackupVaultNotifications(
    input: PutBackupVaultNotificationsInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putRestoreValidationResult(
    input: PutRestoreValidationResultInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  revokeRestoreAccessBackupVault(
    input: RevokeRestoreAccessBackupVaultInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  startBackupJob(
    input: StartBackupJobInput,
  ): Effect.Effect<
    StartBackupJobOutput,
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  startCopyJob(
    input: StartCopyJobInput,
  ): Effect.Effect<
    StartCopyJobOutput,
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  startReportJob(
    input: StartReportJobInput,
  ): Effect.Effect<
    StartReportJobOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  startRestoreJob(
    input: StartRestoreJobInput,
  ): Effect.Effect<
    StartRestoreJobOutput,
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  stopBackupJob(
    input: StopBackupJobInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateBackupPlan(
    input: UpdateBackupPlanInput,
  ): Effect.Effect<
    UpdateBackupPlanOutput,
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateFramework(
    input: UpdateFrameworkInput,
  ): Effect.Effect<
    UpdateFrameworkOutput,
    | AlreadyExistsException
    | ConflictException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateGlobalSettings(
    input: UpdateGlobalSettingsInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateRecoveryPointIndexSettings(
    input: UpdateRecoveryPointIndexSettingsInput,
  ): Effect.Effect<
    UpdateRecoveryPointIndexSettingsOutput,
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateRecoveryPointLifecycle(
    input: UpdateRecoveryPointLifecycleInput,
  ): Effect.Effect<
    UpdateRecoveryPointLifecycleOutput,
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateRegionSettings(
    input: UpdateRegionSettingsInput,
  ): Effect.Effect<
    {},
    | InvalidParameterValueException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateReportPlan(
    input: UpdateReportPlanInput,
  ): Effect.Effect<
    UpdateReportPlanOutput,
    | ConflictException
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateRestoreTestingPlan(
    input: UpdateRestoreTestingPlanInput,
  ): Effect.Effect<
    UpdateRestoreTestingPlanOutput,
    | ConflictException
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateRestoreTestingSelection(
    input: UpdateRestoreTestingSelectionInput,
  ): Effect.Effect<
    UpdateRestoreTestingSelectionOutput,
    | ConflictException
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
}

export type AccountId = string;

export interface AdvancedBackupSetting {
  ResourceType?: string;
  BackupOptions?: Record<string, string>;
}
export type AdvancedBackupSettings = Array<AdvancedBackupSetting>;
export type AggregationPeriod = "ONE_DAY" | "SEVEN_DAYS" | "FOURTEEN_DAYS";
export declare class AlreadyExistsException extends EffectData.TaggedError(
  "AlreadyExistsException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly CreatorRequestId?: string;
  readonly Arn?: string;
  readonly Type?: string;
  readonly Context?: string;
}> {}
export type ARN = string;

export interface AssociateBackupVaultMpaApprovalTeamInput {
  BackupVaultName: string;
  MpaApprovalTeamArn: string;
  RequesterComment?: string;
}
export interface BackupJob {
  AccountId?: string;
  BackupJobId?: string;
  BackupVaultName?: string;
  BackupVaultArn?: string;
  RecoveryPointArn?: string;
  ResourceArn?: string;
  CreationDate?: Date | string;
  CompletionDate?: Date | string;
  State?: BackupJobState;
  StatusMessage?: string;
  PercentDone?: string;
  BackupSizeInBytes?: number;
  IamRoleArn?: string;
  CreatedBy?: RecoveryPointCreator;
  ExpectedCompletionDate?: Date | string;
  StartBy?: Date | string;
  ResourceType?: string;
  BytesTransferred?: number;
  BackupOptions?: Record<string, string>;
  BackupType?: string;
  ParentJobId?: string;
  IsParent?: boolean;
  ResourceName?: string;
  InitiationDate?: Date | string;
  MessageCategory?: string;
}
export type BackupJobChildJobsInState = Record<BackupJobState, number>;
export type BackupJobsList = Array<BackupJob>;
export type BackupJobState =
  | "CREATED"
  | "PENDING"
  | "RUNNING"
  | "ABORTING"
  | "ABORTED"
  | "COMPLETED"
  | "FAILED"
  | "EXPIRED"
  | "PARTIAL";
export type BackupJobStatus =
  | "CREATED"
  | "PENDING"
  | "RUNNING"
  | "ABORTING"
  | "ABORTED"
  | "COMPLETED"
  | "FAILED"
  | "EXPIRED"
  | "PARTIAL"
  | "AGGREGATE_ALL"
  | "ANY";
export interface BackupJobSummary {
  Region?: string;
  AccountId?: string;
  State?: BackupJobStatus;
  ResourceType?: string;
  MessageCategory?: string;
  Count?: number;
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export type BackupJobSummaryList = Array<BackupJobSummary>;
export type BackupOptionKey = string;

export type BackupOptions = Record<string, string>;
export type BackupOptionValue = string;

export interface BackupPlan {
  BackupPlanName: string;
  Rules: Array<BackupRule>;
  AdvancedBackupSettings?: Array<AdvancedBackupSetting>;
}
export interface BackupPlanInput {
  BackupPlanName: string;
  Rules: Array<BackupRuleInput>;
  AdvancedBackupSettings?: Array<AdvancedBackupSetting>;
}
export type BackupPlanName = string;

export type BackupPlansList = Array<BackupPlansListMember>;
export interface BackupPlansListMember {
  BackupPlanArn?: string;
  BackupPlanId?: string;
  CreationDate?: Date | string;
  DeletionDate?: Date | string;
  VersionId?: string;
  BackupPlanName?: string;
  CreatorRequestId?: string;
  LastExecutionDate?: Date | string;
  AdvancedBackupSettings?: Array<AdvancedBackupSetting>;
}
export type BackupPlanTemplatesList = Array<BackupPlanTemplatesListMember>;
export interface BackupPlanTemplatesListMember {
  BackupPlanTemplateId?: string;
  BackupPlanTemplateName?: string;
}
export type BackupPlanVersionsList = Array<BackupPlansListMember>;
export interface BackupRule {
  RuleName: string;
  TargetBackupVaultName: string;
  ScheduleExpression?: string;
  StartWindowMinutes?: number;
  CompletionWindowMinutes?: number;
  Lifecycle?: Lifecycle;
  RecoveryPointTags?: Record<string, string>;
  RuleId?: string;
  CopyActions?: Array<CopyAction>;
  EnableContinuousBackup?: boolean;
  ScheduleExpressionTimezone?: string;
  IndexActions?: Array<IndexAction>;
}
export interface BackupRuleInput {
  RuleName: string;
  TargetBackupVaultName: string;
  ScheduleExpression?: string;
  StartWindowMinutes?: number;
  CompletionWindowMinutes?: number;
  Lifecycle?: Lifecycle;
  RecoveryPointTags?: Record<string, string>;
  CopyActions?: Array<CopyAction>;
  EnableContinuousBackup?: boolean;
  ScheduleExpressionTimezone?: string;
  IndexActions?: Array<IndexAction>;
}
export type BackupRuleName = string;

export type BackupRules = Array<BackupRule>;
export type BackupRulesInput = Array<BackupRuleInput>;
export interface BackupSelection {
  SelectionName: string;
  IamRoleArn: string;
  Resources?: Array<string>;
  ListOfTags?: Array<Condition>;
  NotResources?: Array<string>;
  Conditions?: Conditions;
}
export type BackupSelectionName = string;

export type BackupSelectionsList = Array<BackupSelectionsListMember>;
export interface BackupSelectionsListMember {
  SelectionId?: string;
  SelectionName?: string;
  BackupPlanId?: string;
  CreationDate?: Date | string;
  CreatorRequestId?: string;
  IamRoleArn?: string;
}
export type BackupVaultEvent =
  | "BACKUP_JOB_STARTED"
  | "BACKUP_JOB_COMPLETED"
  | "BACKUP_JOB_SUCCESSFUL"
  | "BACKUP_JOB_FAILED"
  | "BACKUP_JOB_EXPIRED"
  | "RESTORE_JOB_STARTED"
  | "RESTORE_JOB_COMPLETED"
  | "RESTORE_JOB_SUCCESSFUL"
  | "RESTORE_JOB_FAILED"
  | "COPY_JOB_STARTED"
  | "COPY_JOB_SUCCESSFUL"
  | "COPY_JOB_FAILED"
  | "RECOVERY_POINT_MODIFIED"
  | "BACKUP_PLAN_CREATED"
  | "BACKUP_PLAN_MODIFIED"
  | "S3_BACKUP_OBJECT_FAILED"
  | "S3_RESTORE_OBJECT_FAILED"
  | "CONTINUOUS_BACKUP_INTERRUPTED"
  | "RECOVERY_POINT_INDEX_COMPLETED"
  | "RECOVERY_POINT_INDEX_DELETED"
  | "RECOVERY_POINT_INDEXING_FAILED";
export type BackupVaultEvents = Array<BackupVaultEvent>;
export type BackupVaultList = Array<BackupVaultListMember>;
export interface BackupVaultListMember {
  BackupVaultName?: string;
  BackupVaultArn?: string;
  VaultType?: VaultType;
  VaultState?: VaultState;
  CreationDate?: Date | string;
  EncryptionKeyArn?: string;
  CreatorRequestId?: string;
  NumberOfRecoveryPoints?: number;
  Locked?: boolean;
  MinRetentionDays?: number;
  MaxRetentionDays?: number;
  LockDate?: Date | string;
}
export type BackupVaultName = string;

export type BackupBoolean = boolean;

export type Boolean2 = boolean;

export interface CalculatedLifecycle {
  MoveToColdStorageAt?: Date | string;
  DeleteAt?: Date | string;
}
export interface CancelLegalHoldInput {
  LegalHoldId: string;
  CancelDescription: string;
  RetainRecordInDays?: number;
}
export interface CancelLegalHoldOutput {}
export type ComplianceResourceIdList = Array<string>;
export interface Condition {
  ConditionType: ConditionType;
  ConditionKey: string;
  ConditionValue: string;
}
export type ConditionKey = string;

export interface ConditionParameter {
  ConditionKey?: string;
  ConditionValue?: string;
}
export type ConditionParameters = Array<ConditionParameter>;
export interface Conditions {
  StringEquals?: Array<ConditionParameter>;
  StringNotEquals?: Array<ConditionParameter>;
  StringLike?: Array<ConditionParameter>;
  StringNotLike?: Array<ConditionParameter>;
}
export type ConditionType = "STRINGEQUALS";
export type ConditionValue = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly Type?: string;
  readonly Context?: string;
}> {}
export interface ControlInputParameter {
  ParameterName?: string;
  ParameterValue?: string;
}
export type ControlInputParameters = Array<ControlInputParameter>;
export type ControlName = string;

export interface ControlScope {
  ComplianceResourceIds?: Array<string>;
  ComplianceResourceTypes?: Array<string>;
  Tags?: Record<string, string>;
}
export interface CopyAction {
  Lifecycle?: Lifecycle;
  DestinationBackupVaultArn: string;
}
export type CopyActions = Array<CopyAction>;
export interface CopyJob {
  AccountId?: string;
  CopyJobId?: string;
  SourceBackupVaultArn?: string;
  SourceRecoveryPointArn?: string;
  DestinationBackupVaultArn?: string;
  DestinationRecoveryPointArn?: string;
  ResourceArn?: string;
  CreationDate?: Date | string;
  CompletionDate?: Date | string;
  State?: CopyJobState;
  StatusMessage?: string;
  BackupSizeInBytes?: number;
  IamRoleArn?: string;
  CreatedBy?: RecoveryPointCreator;
  ResourceType?: string;
  ParentJobId?: string;
  IsParent?: boolean;
  CompositeMemberIdentifier?: string;
  NumberOfChildJobs?: number;
  ChildJobsInState?: Record<CopyJobState, number>;
  ResourceName?: string;
  MessageCategory?: string;
}
export type CopyJobChildJobsInState = Record<CopyJobState, number>;
export type CopyJobsList = Array<CopyJob>;
export type CopyJobState =
  | "CREATED"
  | "RUNNING"
  | "COMPLETED"
  | "FAILED"
  | "PARTIAL";
export type CopyJobStatus =
  | "CREATED"
  | "RUNNING"
  | "ABORTING"
  | "ABORTED"
  | "COMPLETING"
  | "COMPLETED"
  | "FAILING"
  | "FAILED"
  | "PARTIAL"
  | "AGGREGATE_ALL"
  | "ANY";
export interface CopyJobSummary {
  Region?: string;
  AccountId?: string;
  State?: CopyJobStatus;
  ResourceType?: string;
  MessageCategory?: string;
  Count?: number;
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export type CopyJobSummaryList = Array<CopyJobSummary>;
export interface CreateBackupPlanInput {
  BackupPlan: BackupPlanInput;
  BackupPlanTags?: Record<string, string>;
  CreatorRequestId?: string;
}
export interface CreateBackupPlanOutput {
  BackupPlanId?: string;
  BackupPlanArn?: string;
  CreationDate?: Date | string;
  VersionId?: string;
  AdvancedBackupSettings?: Array<AdvancedBackupSetting>;
}
export interface CreateBackupSelectionInput {
  BackupPlanId: string;
  BackupSelection: BackupSelection;
  CreatorRequestId?: string;
}
export interface CreateBackupSelectionOutput {
  SelectionId?: string;
  BackupPlanId?: string;
  CreationDate?: Date | string;
}
export interface CreateBackupVaultInput {
  BackupVaultName: string;
  BackupVaultTags?: Record<string, string>;
  EncryptionKeyArn?: string;
  CreatorRequestId?: string;
}
export interface CreateBackupVaultOutput {
  BackupVaultName?: string;
  BackupVaultArn?: string;
  CreationDate?: Date | string;
}
export interface CreateFrameworkInput {
  FrameworkName: string;
  FrameworkDescription?: string;
  FrameworkControls: Array<FrameworkControl>;
  IdempotencyToken?: string;
  FrameworkTags?: Record<string, string>;
}
export interface CreateFrameworkOutput {
  FrameworkName?: string;
  FrameworkArn?: string;
}
export interface CreateLegalHoldInput {
  Title: string;
  Description: string;
  IdempotencyToken?: string;
  RecoveryPointSelection?: RecoveryPointSelection;
  Tags?: Record<string, string>;
}
export interface CreateLegalHoldOutput {
  Title?: string;
  Status?: LegalHoldStatus;
  Description?: string;
  LegalHoldId?: string;
  LegalHoldArn?: string;
  CreationDate?: Date | string;
  RecoveryPointSelection?: RecoveryPointSelection;
}
export interface CreateLogicallyAirGappedBackupVaultInput {
  BackupVaultName: string;
  BackupVaultTags?: Record<string, string>;
  CreatorRequestId?: string;
  MinRetentionDays: number;
  MaxRetentionDays: number;
}
export interface CreateLogicallyAirGappedBackupVaultOutput {
  BackupVaultName?: string;
  BackupVaultArn?: string;
  CreationDate?: Date | string;
  VaultState?: VaultState;
}
export interface CreateReportPlanInput {
  ReportPlanName: string;
  ReportPlanDescription?: string;
  ReportDeliveryChannel: ReportDeliveryChannel;
  ReportSetting: ReportSetting;
  ReportPlanTags?: Record<string, string>;
  IdempotencyToken?: string;
}
export interface CreateReportPlanOutput {
  ReportPlanName?: string;
  ReportPlanArn?: string;
  CreationTime?: Date | string;
}
export interface CreateRestoreAccessBackupVaultInput {
  SourceBackupVaultArn: string;
  BackupVaultName?: string;
  BackupVaultTags?: Record<string, string>;
  CreatorRequestId?: string;
  RequesterComment?: string;
}
export interface CreateRestoreAccessBackupVaultOutput {
  RestoreAccessBackupVaultArn?: string;
  VaultState?: VaultState;
  RestoreAccessBackupVaultName?: string;
  CreationDate?: Date | string;
}
export interface CreateRestoreTestingPlanInput {
  CreatorRequestId?: string;
  RestoreTestingPlan: RestoreTestingPlanForCreate;
  Tags?: Record<string, string>;
}
export interface CreateRestoreTestingPlanOutput {
  CreationTime: Date | string;
  RestoreTestingPlanArn: string;
  RestoreTestingPlanName: string;
}
export interface CreateRestoreTestingSelectionInput {
  CreatorRequestId?: string;
  RestoreTestingPlanName: string;
  RestoreTestingSelection: RestoreTestingSelectionForCreate;
}
export interface CreateRestoreTestingSelectionOutput {
  CreationTime: Date | string;
  RestoreTestingPlanArn: string;
  RestoreTestingPlanName: string;
  RestoreTestingSelectionName: string;
}
export type CronExpression = string;

export interface DateRange {
  FromDate: Date | string;
  ToDate: Date | string;
}
export interface DeleteBackupPlanInput {
  BackupPlanId: string;
}
export interface DeleteBackupPlanOutput {
  BackupPlanId?: string;
  BackupPlanArn?: string;
  DeletionDate?: Date | string;
  VersionId?: string;
}
export interface DeleteBackupSelectionInput {
  BackupPlanId: string;
  SelectionId: string;
}
export interface DeleteBackupVaultAccessPolicyInput {
  BackupVaultName: string;
}
export interface DeleteBackupVaultInput {
  BackupVaultName: string;
}
export interface DeleteBackupVaultLockConfigurationInput {
  BackupVaultName: string;
}
export interface DeleteBackupVaultNotificationsInput {
  BackupVaultName: string;
}
export interface DeleteFrameworkInput {
  FrameworkName: string;
}
export interface DeleteRecoveryPointInput {
  BackupVaultName: string;
  RecoveryPointArn: string;
}
export interface DeleteReportPlanInput {
  ReportPlanName: string;
}
export interface DeleteRestoreTestingPlanInput {
  RestoreTestingPlanName: string;
}
export interface DeleteRestoreTestingSelectionInput {
  RestoreTestingPlanName: string;
  RestoreTestingSelectionName: string;
}
export declare class DependencyFailureException extends EffectData.TaggedError(
  "DependencyFailureException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly Type?: string;
  readonly Context?: string;
}> {}
export interface DescribeBackupJobInput {
  BackupJobId: string;
}
export interface DescribeBackupJobOutput {
  AccountId?: string;
  BackupJobId?: string;
  BackupVaultName?: string;
  BackupVaultArn?: string;
  RecoveryPointArn?: string;
  ResourceArn?: string;
  CreationDate?: Date | string;
  CompletionDate?: Date | string;
  State?: BackupJobState;
  StatusMessage?: string;
  PercentDone?: string;
  BackupSizeInBytes?: number;
  IamRoleArn?: string;
  CreatedBy?: RecoveryPointCreator;
  ResourceType?: string;
  BytesTransferred?: number;
  ExpectedCompletionDate?: Date | string;
  StartBy?: Date | string;
  BackupOptions?: Record<string, string>;
  BackupType?: string;
  ParentJobId?: string;
  IsParent?: boolean;
  NumberOfChildJobs?: number;
  ChildJobsInState?: Record<BackupJobState, number>;
  ResourceName?: string;
  InitiationDate?: Date | string;
  MessageCategory?: string;
}
export interface DescribeBackupVaultInput {
  BackupVaultName: string;
  BackupVaultAccountId?: string;
}
export interface DescribeBackupVaultOutput {
  BackupVaultName?: string;
  BackupVaultArn?: string;
  VaultType?: VaultType;
  VaultState?: VaultState;
  EncryptionKeyArn?: string;
  CreationDate?: Date | string;
  CreatorRequestId?: string;
  NumberOfRecoveryPoints?: number;
  Locked?: boolean;
  MinRetentionDays?: number;
  MaxRetentionDays?: number;
  LockDate?: Date | string;
  SourceBackupVaultArn?: string;
  MpaApprovalTeamArn?: string;
  MpaSessionArn?: string;
  LatestMpaApprovalTeamUpdate?: LatestMpaApprovalTeamUpdate;
}
export interface DescribeCopyJobInput {
  CopyJobId: string;
}
export interface DescribeCopyJobOutput {
  CopyJob?: CopyJob;
}
export interface DescribeFrameworkInput {
  FrameworkName: string;
}
export interface DescribeFrameworkOutput {
  FrameworkName?: string;
  FrameworkArn?: string;
  FrameworkDescription?: string;
  FrameworkControls?: Array<FrameworkControl>;
  CreationTime?: Date | string;
  DeploymentStatus?: string;
  FrameworkStatus?: string;
  IdempotencyToken?: string;
}
export interface DescribeGlobalSettingsInput {}
export interface DescribeGlobalSettingsOutput {
  GlobalSettings?: Record<string, string>;
  LastUpdateTime?: Date | string;
}
export interface DescribeProtectedResourceInput {
  ResourceArn: string;
}
export interface DescribeProtectedResourceOutput {
  ResourceArn?: string;
  ResourceType?: string;
  LastBackupTime?: Date | string;
  ResourceName?: string;
  LastBackupVaultArn?: string;
  LastRecoveryPointArn?: string;
  LatestRestoreExecutionTimeMinutes?: number;
  LatestRestoreJobCreationDate?: Date | string;
  LatestRestoreRecoveryPointCreationDate?: Date | string;
}
export interface DescribeRecoveryPointInput {
  BackupVaultName: string;
  RecoveryPointArn: string;
  BackupVaultAccountId?: string;
}
export interface DescribeRecoveryPointOutput {
  RecoveryPointArn?: string;
  BackupVaultName?: string;
  BackupVaultArn?: string;
  SourceBackupVaultArn?: string;
  ResourceArn?: string;
  ResourceType?: string;
  CreatedBy?: RecoveryPointCreator;
  IamRoleArn?: string;
  Status?: RecoveryPointStatus;
  StatusMessage?: string;
  CreationDate?: Date | string;
  InitiationDate?: Date | string;
  CompletionDate?: Date | string;
  BackupSizeInBytes?: number;
  CalculatedLifecycle?: CalculatedLifecycle;
  Lifecycle?: Lifecycle;
  EncryptionKeyArn?: string;
  IsEncrypted?: boolean;
  StorageClass?: StorageClass;
  LastRestoreTime?: Date | string;
  ParentRecoveryPointArn?: string;
  CompositeMemberIdentifier?: string;
  IsParent?: boolean;
  ResourceName?: string;
  VaultType?: VaultType;
  IndexStatus?: IndexStatus;
  IndexStatusMessage?: string;
}
export interface DescribeRegionSettingsInput {}
export interface DescribeRegionSettingsOutput {
  ResourceTypeOptInPreference?: Record<string, boolean>;
  ResourceTypeManagementPreference?: Record<string, boolean>;
}
export interface DescribeReportJobInput {
  ReportJobId: string;
}
export interface DescribeReportJobOutput {
  ReportJob?: ReportJob;
}
export interface DescribeReportPlanInput {
  ReportPlanName: string;
}
export interface DescribeReportPlanOutput {
  ReportPlan?: ReportPlan;
}
export interface DescribeRestoreJobInput {
  RestoreJobId: string;
}
export interface DescribeRestoreJobOutput {
  AccountId?: string;
  RestoreJobId?: string;
  RecoveryPointArn?: string;
  CreationDate?: Date | string;
  CompletionDate?: Date | string;
  Status?: RestoreJobStatus;
  StatusMessage?: string;
  PercentDone?: string;
  BackupSizeInBytes?: number;
  IamRoleArn?: string;
  ExpectedCompletionTimeMinutes?: number;
  CreatedResourceArn?: string;
  ResourceType?: string;
  RecoveryPointCreationDate?: Date | string;
  CreatedBy?: RestoreJobCreator;
  ValidationStatus?: RestoreValidationStatus;
  ValidationStatusMessage?: string;
  DeletionStatus?: RestoreDeletionStatus;
  DeletionStatusMessage?: string;
}
export interface DisassociateBackupVaultMpaApprovalTeamInput {
  BackupVaultName: string;
  RequesterComment?: string;
}
export interface DisassociateRecoveryPointFromParentInput {
  BackupVaultName: string;
  RecoveryPointArn: string;
}
export interface DisassociateRecoveryPointInput {
  BackupVaultName: string;
  RecoveryPointArn: string;
}
export interface ExportBackupPlanTemplateInput {
  BackupPlanId: string;
}
export interface ExportBackupPlanTemplateOutput {
  BackupPlanTemplateJson?: string;
}
export type FormatList = Array<string>;
export interface Framework {
  FrameworkName?: string;
  FrameworkArn?: string;
  FrameworkDescription?: string;
  NumberOfControls?: number;
  CreationTime?: Date | string;
  DeploymentStatus?: string;
}
export interface FrameworkControl {
  ControlName: string;
  ControlInputParameters?: Array<ControlInputParameter>;
  ControlScope?: ControlScope;
}
export type FrameworkControls = Array<FrameworkControl>;
export type FrameworkDescription = string;

export type FrameworkList = Array<Framework>;
export type FrameworkName = string;

export interface GetBackupPlanFromJSONInput {
  BackupPlanTemplateJson: string;
}
export interface GetBackupPlanFromJSONOutput {
  BackupPlan?: BackupPlan;
}
export interface GetBackupPlanFromTemplateInput {
  BackupPlanTemplateId: string;
}
export interface GetBackupPlanFromTemplateOutput {
  BackupPlanDocument?: BackupPlan;
}
export interface GetBackupPlanInput {
  BackupPlanId: string;
  VersionId?: string;
}
export interface GetBackupPlanOutput {
  BackupPlan?: BackupPlan;
  BackupPlanId?: string;
  BackupPlanArn?: string;
  VersionId?: string;
  CreatorRequestId?: string;
  CreationDate?: Date | string;
  DeletionDate?: Date | string;
  LastExecutionDate?: Date | string;
  AdvancedBackupSettings?: Array<AdvancedBackupSetting>;
}
export interface GetBackupSelectionInput {
  BackupPlanId: string;
  SelectionId: string;
}
export interface GetBackupSelectionOutput {
  BackupSelection?: BackupSelection;
  SelectionId?: string;
  BackupPlanId?: string;
  CreationDate?: Date | string;
  CreatorRequestId?: string;
}
export interface GetBackupVaultAccessPolicyInput {
  BackupVaultName: string;
}
export interface GetBackupVaultAccessPolicyOutput {
  BackupVaultName?: string;
  BackupVaultArn?: string;
  Policy?: string;
}
export interface GetBackupVaultNotificationsInput {
  BackupVaultName: string;
}
export interface GetBackupVaultNotificationsOutput {
  BackupVaultName?: string;
  BackupVaultArn?: string;
  SNSTopicArn?: string;
  BackupVaultEvents?: Array<BackupVaultEvent>;
}
export interface GetLegalHoldInput {
  LegalHoldId: string;
}
export interface GetLegalHoldOutput {
  Title?: string;
  Status?: LegalHoldStatus;
  Description?: string;
  CancelDescription?: string;
  LegalHoldId?: string;
  LegalHoldArn?: string;
  CreationDate?: Date | string;
  CancellationDate?: Date | string;
  RetainRecordUntil?: Date | string;
  RecoveryPointSelection?: RecoveryPointSelection;
}
export interface GetRecoveryPointIndexDetailsInput {
  BackupVaultName: string;
  RecoveryPointArn: string;
}
export interface GetRecoveryPointIndexDetailsOutput {
  RecoveryPointArn?: string;
  BackupVaultArn?: string;
  SourceResourceArn?: string;
  IndexCreationDate?: Date | string;
  IndexDeletionDate?: Date | string;
  IndexCompletionDate?: Date | string;
  IndexStatus?: IndexStatus;
  IndexStatusMessage?: string;
  TotalItemsIndexed?: number;
}
export interface GetRecoveryPointRestoreMetadataInput {
  BackupVaultName: string;
  RecoveryPointArn: string;
  BackupVaultAccountId?: string;
}
export interface GetRecoveryPointRestoreMetadataOutput {
  BackupVaultArn?: string;
  RecoveryPointArn?: string;
  RestoreMetadata?: Record<string, string>;
  ResourceType?: string;
}
export interface GetRestoreJobMetadataInput {
  RestoreJobId: string;
}
export interface GetRestoreJobMetadataOutput {
  RestoreJobId?: string;
  Metadata?: Record<string, string>;
}
export interface GetRestoreTestingInferredMetadataInput {
  BackupVaultAccountId?: string;
  BackupVaultName: string;
  RecoveryPointArn: string;
}
export interface GetRestoreTestingInferredMetadataOutput {
  InferredMetadata: Record<string, string>;
}
export interface GetRestoreTestingPlanInput {
  RestoreTestingPlanName: string;
}
export interface GetRestoreTestingPlanOutput {
  RestoreTestingPlan: RestoreTestingPlanForGet;
}
export interface GetRestoreTestingSelectionInput {
  RestoreTestingPlanName: string;
  RestoreTestingSelectionName: string;
}
export interface GetRestoreTestingSelectionOutput {
  RestoreTestingSelection: RestoreTestingSelectionForGet;
}
export interface GetSupportedResourceTypesOutput {
  ResourceTypes?: Array<string>;
}
export type GlobalSettings = Record<string, string>;
export type GlobalSettingsName = string;

export type GlobalSettingsValue = string;

export type IAMPolicy = string;

export type IAMRoleArn = string;

export type Index = "ENABLED" | "DISABLED";
export interface IndexAction {
  ResourceTypes?: Array<string>;
}
export type IndexActions = Array<IndexAction>;
export interface IndexedRecoveryPoint {
  RecoveryPointArn?: string;
  SourceResourceArn?: string;
  IamRoleArn?: string;
  BackupCreationDate?: Date | string;
  ResourceType?: string;
  IndexCreationDate?: Date | string;
  IndexStatus?: IndexStatus;
  IndexStatusMessage?: string;
  BackupVaultArn?: string;
}
export type IndexedRecoveryPointList = Array<IndexedRecoveryPoint>;
export type IndexStatus = "PENDING" | "ACTIVE" | "FAILED" | "DELETING";
export type integer = number;

export declare class InvalidParameterValueException extends EffectData.TaggedError(
  "InvalidParameterValueException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly Type?: string;
  readonly Context?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly Type?: string;
  readonly Context?: string;
}> {}
export declare class InvalidResourceStateException extends EffectData.TaggedError(
  "InvalidResourceStateException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly Type?: string;
  readonly Context?: string;
}> {}
export type IsEnabled = boolean;

export interface KeyValue {
  Key: string;
  Value: string;
}
export type KeyValueList = Array<KeyValue>;
export interface LatestMpaApprovalTeamUpdate {
  MpaSessionArn?: string;
  Status?: MpaSessionStatus;
  StatusMessage?: string;
  InitiationDate?: Date | string;
  ExpiryDate?: Date | string;
}
export interface LatestRevokeRequest {
  MpaSessionArn?: string;
  Status?: MpaRevokeSessionStatus;
  StatusMessage?: string;
  InitiationDate?: Date | string;
  ExpiryDate?: Date | string;
}
export interface LegalHold {
  Title?: string;
  Status?: LegalHoldStatus;
  Description?: string;
  LegalHoldId?: string;
  LegalHoldArn?: string;
  CreationDate?: Date | string;
  CancellationDate?: Date | string;
}
export type LegalHoldsList = Array<LegalHold>;
export type LegalHoldStatus = "CREATING" | "ACTIVE" | "CANCELING" | "CANCELED";
export interface Lifecycle {
  MoveToColdStorageAfterDays?: number;
  DeleteAfterDays?: number;
  OptInToArchiveForSupportedResources?: boolean;
}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly Type?: string;
  readonly Context?: string;
}> {}
export interface ListBackupJobsInput {
  NextToken?: string;
  MaxResults?: number;
  ByResourceArn?: string;
  ByState?: BackupJobState;
  ByBackupVaultName?: string;
  ByCreatedBefore?: Date | string;
  ByCreatedAfter?: Date | string;
  ByResourceType?: string;
  ByAccountId?: string;
  ByCompleteAfter?: Date | string;
  ByCompleteBefore?: Date | string;
  ByParentJobId?: string;
  ByMessageCategory?: string;
}
export interface ListBackupJobsOutput {
  BackupJobs?: Array<BackupJob>;
  NextToken?: string;
}
export interface ListBackupJobSummariesInput {
  AccountId?: string;
  State?: BackupJobStatus;
  ResourceType?: string;
  MessageCategory?: string;
  AggregationPeriod?: AggregationPeriod;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListBackupJobSummariesOutput {
  BackupJobSummaries?: Array<BackupJobSummary>;
  AggregationPeriod?: string;
  NextToken?: string;
}
export interface ListBackupPlansInput {
  NextToken?: string;
  MaxResults?: number;
  IncludeDeleted?: boolean;
}
export interface ListBackupPlansOutput {
  NextToken?: string;
  BackupPlansList?: Array<BackupPlansListMember>;
}
export interface ListBackupPlanTemplatesInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListBackupPlanTemplatesOutput {
  NextToken?: string;
  BackupPlanTemplatesList?: Array<BackupPlanTemplatesListMember>;
}
export interface ListBackupPlanVersionsInput {
  BackupPlanId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListBackupPlanVersionsOutput {
  NextToken?: string;
  BackupPlanVersionsList?: Array<BackupPlansListMember>;
}
export interface ListBackupSelectionsInput {
  BackupPlanId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListBackupSelectionsOutput {
  NextToken?: string;
  BackupSelectionsList?: Array<BackupSelectionsListMember>;
}
export interface ListBackupVaultsInput {
  ByVaultType?: VaultType;
  ByShared?: boolean;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListBackupVaultsOutput {
  BackupVaultList?: Array<BackupVaultListMember>;
  NextToken?: string;
}
export interface ListCopyJobsInput {
  NextToken?: string;
  MaxResults?: number;
  ByResourceArn?: string;
  ByState?: CopyJobState;
  ByCreatedBefore?: Date | string;
  ByCreatedAfter?: Date | string;
  ByResourceType?: string;
  ByDestinationVaultArn?: string;
  ByAccountId?: string;
  ByCompleteBefore?: Date | string;
  ByCompleteAfter?: Date | string;
  ByParentJobId?: string;
  ByMessageCategory?: string;
}
export interface ListCopyJobsOutput {
  CopyJobs?: Array<CopyJob>;
  NextToken?: string;
}
export interface ListCopyJobSummariesInput {
  AccountId?: string;
  State?: CopyJobStatus;
  ResourceType?: string;
  MessageCategory?: string;
  AggregationPeriod?: AggregationPeriod;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCopyJobSummariesOutput {
  CopyJobSummaries?: Array<CopyJobSummary>;
  AggregationPeriod?: string;
  NextToken?: string;
}
export interface ListFrameworksInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListFrameworksOutput {
  Frameworks?: Array<Framework>;
  NextToken?: string;
}
export interface ListIndexedRecoveryPointsInput {
  NextToken?: string;
  MaxResults?: number;
  SourceResourceArn?: string;
  CreatedBefore?: Date | string;
  CreatedAfter?: Date | string;
  ResourceType?: string;
  IndexStatus?: IndexStatus;
}
export interface ListIndexedRecoveryPointsOutput {
  IndexedRecoveryPoints?: Array<IndexedRecoveryPoint>;
  NextToken?: string;
}
export interface ListLegalHoldsInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListLegalHoldsOutput {
  NextToken?: string;
  LegalHolds?: Array<LegalHold>;
}
export type ListOfTags = Array<Condition>;
export interface ListProtectedResourcesByBackupVaultInput {
  BackupVaultName: string;
  BackupVaultAccountId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListProtectedResourcesByBackupVaultOutput {
  Results?: Array<ProtectedResource>;
  NextToken?: string;
}
export interface ListProtectedResourcesInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListProtectedResourcesOutput {
  Results?: Array<ProtectedResource>;
  NextToken?: string;
}
export interface ListRecoveryPointsByBackupVaultInput {
  BackupVaultName: string;
  BackupVaultAccountId?: string;
  NextToken?: string;
  MaxResults?: number;
  ByResourceArn?: string;
  ByResourceType?: string;
  ByBackupPlanId?: string;
  ByCreatedBefore?: Date | string;
  ByCreatedAfter?: Date | string;
  ByParentRecoveryPointArn?: string;
}
export interface ListRecoveryPointsByBackupVaultOutput {
  NextToken?: string;
  RecoveryPoints?: Array<RecoveryPointByBackupVault>;
}
export interface ListRecoveryPointsByLegalHoldInput {
  LegalHoldId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRecoveryPointsByLegalHoldOutput {
  RecoveryPoints?: Array<RecoveryPointMember>;
  NextToken?: string;
}
export interface ListRecoveryPointsByResourceInput {
  ResourceArn: string;
  NextToken?: string;
  MaxResults?: number;
  ManagedByAWSBackupOnly?: boolean;
}
export interface ListRecoveryPointsByResourceOutput {
  NextToken?: string;
  RecoveryPoints?: Array<RecoveryPointByResource>;
}
export interface ListReportJobsInput {
  ByReportPlanName?: string;
  ByCreationBefore?: Date | string;
  ByCreationAfter?: Date | string;
  ByStatus?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListReportJobsOutput {
  ReportJobs?: Array<ReportJob>;
  NextToken?: string;
}
export interface ListReportPlansInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListReportPlansOutput {
  ReportPlans?: Array<ReportPlan>;
  NextToken?: string;
}
export interface ListRestoreAccessBackupVaultsInput {
  BackupVaultName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRestoreAccessBackupVaultsOutput {
  NextToken?: string;
  RestoreAccessBackupVaults?: Array<RestoreAccessBackupVaultListMember>;
}
export interface ListRestoreJobsByProtectedResourceInput {
  ResourceArn: string;
  ByStatus?: RestoreJobStatus;
  ByRecoveryPointCreationDateAfter?: Date | string;
  ByRecoveryPointCreationDateBefore?: Date | string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRestoreJobsByProtectedResourceOutput {
  RestoreJobs?: Array<RestoreJobsListMember>;
  NextToken?: string;
}
export interface ListRestoreJobsInput {
  NextToken?: string;
  MaxResults?: number;
  ByAccountId?: string;
  ByResourceType?: string;
  ByCreatedBefore?: Date | string;
  ByCreatedAfter?: Date | string;
  ByStatus?: RestoreJobStatus;
  ByCompleteBefore?: Date | string;
  ByCompleteAfter?: Date | string;
  ByRestoreTestingPlanArn?: string;
}
export interface ListRestoreJobsOutput {
  RestoreJobs?: Array<RestoreJobsListMember>;
  NextToken?: string;
}
export interface ListRestoreJobSummariesInput {
  AccountId?: string;
  State?: RestoreJobState;
  ResourceType?: string;
  AggregationPeriod?: AggregationPeriod;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRestoreJobSummariesOutput {
  RestoreJobSummaries?: Array<RestoreJobSummary>;
  AggregationPeriod?: string;
  NextToken?: string;
}
export interface ListRestoreTestingPlansInput {
  MaxResults?: number;
  NextToken?: string;
}
export type ListRestoreTestingPlansInputMaxResultsInteger = number;

export interface ListRestoreTestingPlansOutput {
  NextToken?: string;
  RestoreTestingPlans: Array<RestoreTestingPlanForList>;
}
export interface ListRestoreTestingSelectionsInput {
  MaxResults?: number;
  NextToken?: string;
  RestoreTestingPlanName: string;
}
export type ListRestoreTestingSelectionsInputMaxResultsInteger = number;

export interface ListRestoreTestingSelectionsOutput {
  NextToken?: string;
  RestoreTestingSelections: Array<RestoreTestingSelectionForList>;
}
export interface ListTagsInput {
  ResourceArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTagsOutput {
  NextToken?: string;
  Tags?: Record<string, string>;
}
export type Long = number;

export type Long2 = number;

export type MaxFrameworkInputs = number;

export type MaxResults = number;

export type MessageCategory = string;

export type Metadata = Record<string, string>;
export type MetadataKey = string;

export type MetadataValue = string;

export declare class MissingParameterValueException extends EffectData.TaggedError(
  "MissingParameterValueException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly Type?: string;
  readonly Context?: string;
}> {}
export type MpaRevokeSessionStatus = "PENDING" | "FAILED";
export type MpaSessionStatus = "PENDING" | "APPROVED" | "FAILED";
export type ParameterName = string;

export type ParameterValue = string;

export interface ProtectedResource {
  ResourceArn?: string;
  ResourceType?: string;
  LastBackupTime?: Date | string;
  ResourceName?: string;
  LastBackupVaultArn?: string;
  LastRecoveryPointArn?: string;
}
export interface ProtectedResourceConditions {
  StringEquals?: Array<KeyValue>;
  StringNotEquals?: Array<KeyValue>;
}
export type ProtectedResourcesList = Array<ProtectedResource>;
export interface PutBackupVaultAccessPolicyInput {
  BackupVaultName: string;
  Policy?: string;
}
export interface PutBackupVaultLockConfigurationInput {
  BackupVaultName: string;
  MinRetentionDays?: number;
  MaxRetentionDays?: number;
  ChangeableForDays?: number;
}
export interface PutBackupVaultNotificationsInput {
  BackupVaultName: string;
  SNSTopicArn: string;
  BackupVaultEvents: Array<BackupVaultEvent>;
}
export interface PutRestoreValidationResultInput {
  RestoreJobId: string;
  ValidationStatus: RestoreValidationStatus;
  ValidationStatusMessage?: string;
}
export interface RecoveryPointByBackupVault {
  RecoveryPointArn?: string;
  BackupVaultName?: string;
  BackupVaultArn?: string;
  SourceBackupVaultArn?: string;
  ResourceArn?: string;
  ResourceType?: string;
  CreatedBy?: RecoveryPointCreator;
  IamRoleArn?: string;
  Status?: RecoveryPointStatus;
  StatusMessage?: string;
  CreationDate?: Date | string;
  InitiationDate?: Date | string;
  CompletionDate?: Date | string;
  BackupSizeInBytes?: number;
  CalculatedLifecycle?: CalculatedLifecycle;
  Lifecycle?: Lifecycle;
  EncryptionKeyArn?: string;
  IsEncrypted?: boolean;
  LastRestoreTime?: Date | string;
  ParentRecoveryPointArn?: string;
  CompositeMemberIdentifier?: string;
  IsParent?: boolean;
  ResourceName?: string;
  VaultType?: VaultType;
  IndexStatus?: IndexStatus;
  IndexStatusMessage?: string;
}
export type RecoveryPointByBackupVaultList = Array<RecoveryPointByBackupVault>;
export interface RecoveryPointByResource {
  RecoveryPointArn?: string;
  CreationDate?: Date | string;
  Status?: RecoveryPointStatus;
  StatusMessage?: string;
  EncryptionKeyArn?: string;
  BackupSizeBytes?: number;
  BackupVaultName?: string;
  IsParent?: boolean;
  ParentRecoveryPointArn?: string;
  ResourceName?: string;
  VaultType?: VaultType;
  IndexStatus?: IndexStatus;
  IndexStatusMessage?: string;
}
export type RecoveryPointByResourceList = Array<RecoveryPointByResource>;
export interface RecoveryPointCreator {
  BackupPlanId?: string;
  BackupPlanArn?: string;
  BackupPlanVersion?: string;
  BackupRuleId?: string;
}
export interface RecoveryPointMember {
  RecoveryPointArn?: string;
  ResourceArn?: string;
  ResourceType?: string;
  BackupVaultName?: string;
}
export interface RecoveryPointSelection {
  VaultNames?: Array<string>;
  ResourceIdentifiers?: Array<string>;
  DateRange?: DateRange;
}
export type RecoveryPointsList = Array<RecoveryPointMember>;
export type RecoveryPointStatus =
  | "COMPLETED"
  | "PARTIAL"
  | "DELETING"
  | "EXPIRED"
  | "AVAILABLE"
  | "STOPPED"
  | "CREATING";
export type Region = string;

export interface ReportDeliveryChannel {
  S3BucketName: string;
  S3KeyPrefix?: string;
  Formats?: Array<string>;
}
export interface ReportDestination {
  S3BucketName?: string;
  S3Keys?: Array<string>;
}
export interface ReportJob {
  ReportJobId?: string;
  ReportPlanArn?: string;
  ReportTemplate?: string;
  CreationTime?: Date | string;
  CompletionTime?: Date | string;
  Status?: string;
  StatusMessage?: string;
  ReportDestination?: ReportDestination;
}
export type ReportJobId = string;

export type ReportJobList = Array<ReportJob>;
export interface ReportPlan {
  ReportPlanArn?: string;
  ReportPlanName?: string;
  ReportPlanDescription?: string;
  ReportSetting?: ReportSetting;
  ReportDeliveryChannel?: ReportDeliveryChannel;
  DeploymentStatus?: string;
  CreationTime?: Date | string;
  LastAttemptedExecutionTime?: Date | string;
  LastSuccessfulExecutionTime?: Date | string;
}
export type ReportPlanDescription = string;

export type ReportPlanList = Array<ReportPlan>;
export type ReportPlanName = string;

export interface ReportSetting {
  ReportTemplate: string;
  FrameworkArns?: Array<string>;
  NumberOfFrameworks?: number;
  Accounts?: Array<string>;
  OrganizationUnits?: Array<string>;
  Regions?: Array<string>;
}
export type RequesterComment = string;

export type ResourceArns = Array<string>;
export type ResourceIdentifiers = Array<string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly Type?: string;
  readonly Context?: string;
}> {}
export type ResourceType = string;

export type ResourceTypeList = Array<string>;
export type ResourceTypeManagementPreference = Record<string, boolean>;
export type ResourceTypeOptInPreference = Record<string, boolean>;
export type ResourceTypes = Array<string>;
export type RestoreAccessBackupVaultList =
  Array<RestoreAccessBackupVaultListMember>;
export interface RestoreAccessBackupVaultListMember {
  RestoreAccessBackupVaultArn?: string;
  CreationDate?: Date | string;
  ApprovalDate?: Date | string;
  VaultState?: VaultState;
  LatestRevokeRequest?: LatestRevokeRequest;
}
export type RestoreDeletionStatus = "DELETING" | "FAILED" | "SUCCESSFUL";
export interface RestoreJobCreator {
  RestoreTestingPlanArn?: string;
}
export type RestoreJobId = string;

export type RestoreJobsList = Array<RestoreJobsListMember>;
export interface RestoreJobsListMember {
  AccountId?: string;
  RestoreJobId?: string;
  RecoveryPointArn?: string;
  CreationDate?: Date | string;
  CompletionDate?: Date | string;
  Status?: RestoreJobStatus;
  StatusMessage?: string;
  PercentDone?: string;
  BackupSizeInBytes?: number;
  IamRoleArn?: string;
  ExpectedCompletionTimeMinutes?: number;
  CreatedResourceArn?: string;
  ResourceType?: string;
  RecoveryPointCreationDate?: Date | string;
  CreatedBy?: RestoreJobCreator;
  ValidationStatus?: RestoreValidationStatus;
  ValidationStatusMessage?: string;
  DeletionStatus?: RestoreDeletionStatus;
  DeletionStatusMessage?: string;
}
export type RestoreJobState =
  | "CREATED"
  | "PENDING"
  | "RUNNING"
  | "ABORTED"
  | "COMPLETED"
  | "FAILED"
  | "AGGREGATE_ALL"
  | "ANY";
export type RestoreJobStatus =
  | "PENDING"
  | "RUNNING"
  | "COMPLETED"
  | "ABORTED"
  | "FAILED";
export interface RestoreJobSummary {
  Region?: string;
  AccountId?: string;
  State?: RestoreJobState;
  ResourceType?: string;
  Count?: number;
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export type RestoreJobSummaryList = Array<RestoreJobSummary>;
export interface RestoreTestingPlanForCreate {
  RecoveryPointSelection: RestoreTestingRecoveryPointSelection;
  RestoreTestingPlanName: string;
  ScheduleExpression: string;
  ScheduleExpressionTimezone?: string;
  StartWindowHours?: number;
}
export interface RestoreTestingPlanForGet {
  CreationTime: Date | string;
  CreatorRequestId?: string;
  LastExecutionTime?: Date | string;
  LastUpdateTime?: Date | string;
  RecoveryPointSelection: RestoreTestingRecoveryPointSelection;
  RestoreTestingPlanArn: string;
  RestoreTestingPlanName: string;
  ScheduleExpression: string;
  ScheduleExpressionTimezone?: string;
  StartWindowHours?: number;
}
export interface RestoreTestingPlanForList {
  CreationTime: Date | string;
  LastExecutionTime?: Date | string;
  LastUpdateTime?: Date | string;
  RestoreTestingPlanArn: string;
  RestoreTestingPlanName: string;
  ScheduleExpression: string;
  ScheduleExpressionTimezone?: string;
  StartWindowHours?: number;
}
export interface RestoreTestingPlanForUpdate {
  RecoveryPointSelection?: RestoreTestingRecoveryPointSelection;
  ScheduleExpression?: string;
  ScheduleExpressionTimezone?: string;
  StartWindowHours?: number;
}
export type RestoreTestingPlans = Array<RestoreTestingPlanForList>;
export interface RestoreTestingRecoveryPointSelection {
  Algorithm?: RestoreTestingRecoveryPointSelectionAlgorithm;
  ExcludeVaults?: Array<string>;
  IncludeVaults?: Array<string>;
  RecoveryPointTypes?: Array<RestoreTestingRecoveryPointType>;
  SelectionWindowDays?: number;
}
export type RestoreTestingRecoveryPointSelectionAlgorithm =
  | "LATEST_WITHIN_WINDOW"
  | "RANDOM_WITHIN_WINDOW";
export type RestoreTestingRecoveryPointType = "CONTINUOUS" | "SNAPSHOT";
export type RestoreTestingRecoveryPointTypeList =
  Array<RestoreTestingRecoveryPointType>;
export interface RestoreTestingSelectionForCreate {
  IamRoleArn: string;
  ProtectedResourceArns?: Array<string>;
  ProtectedResourceConditions?: ProtectedResourceConditions;
  ProtectedResourceType: string;
  RestoreMetadataOverrides?: Record<string, string>;
  RestoreTestingSelectionName: string;
  ValidationWindowHours?: number;
}
export interface RestoreTestingSelectionForGet {
  CreationTime: Date | string;
  CreatorRequestId?: string;
  IamRoleArn: string;
  ProtectedResourceArns?: Array<string>;
  ProtectedResourceConditions?: ProtectedResourceConditions;
  ProtectedResourceType: string;
  RestoreMetadataOverrides?: Record<string, string>;
  RestoreTestingPlanName: string;
  RestoreTestingSelectionName: string;
  ValidationWindowHours?: number;
}
export interface RestoreTestingSelectionForList {
  CreationTime: Date | string;
  IamRoleArn: string;
  ProtectedResourceType: string;
  RestoreTestingPlanName: string;
  RestoreTestingSelectionName: string;
  ValidationWindowHours?: number;
}
export interface RestoreTestingSelectionForUpdate {
  IamRoleArn?: string;
  ProtectedResourceArns?: Array<string>;
  ProtectedResourceConditions?: ProtectedResourceConditions;
  RestoreMetadataOverrides?: Record<string, string>;
  ValidationWindowHours?: number;
}
export type RestoreTestingSelections = Array<RestoreTestingSelectionForList>;
export type RestoreValidationStatus =
  | "FAILED"
  | "SUCCESSFUL"
  | "TIMED_OUT"
  | "VALIDATING";
export interface RevokeRestoreAccessBackupVaultInput {
  BackupVaultName: string;
  RestoreAccessBackupVaultArn: string;
  RequesterComment?: string;
}
export type SensitiveStringMap = Record<string, string>;
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Code?: string;
  readonly Message?: string;
  readonly Type?: string;
  readonly Context?: string;
}> {}
export interface StartBackupJobInput {
  BackupVaultName: string;
  ResourceArn: string;
  IamRoleArn: string;
  IdempotencyToken?: string;
  StartWindowMinutes?: number;
  CompleteWindowMinutes?: number;
  Lifecycle?: Lifecycle;
  RecoveryPointTags?: Record<string, string>;
  BackupOptions?: Record<string, string>;
  Index?: Index;
}
export interface StartBackupJobOutput {
  BackupJobId?: string;
  RecoveryPointArn?: string;
  CreationDate?: Date | string;
  IsParent?: boolean;
}
export interface StartCopyJobInput {
  RecoveryPointArn: string;
  SourceBackupVaultName: string;
  DestinationBackupVaultArn: string;
  IamRoleArn: string;
  IdempotencyToken?: string;
  Lifecycle?: Lifecycle;
}
export interface StartCopyJobOutput {
  CopyJobId?: string;
  CreationDate?: Date | string;
  IsParent?: boolean;
}
export interface StartReportJobInput {
  ReportPlanName: string;
  IdempotencyToken?: string;
}
export interface StartReportJobOutput {
  ReportJobId?: string;
}
export interface StartRestoreJobInput {
  RecoveryPointArn: string;
  Metadata: Record<string, string>;
  IamRoleArn?: string;
  IdempotencyToken?: string;
  ResourceType?: string;
  CopySourceTagsToRestoredResource?: boolean;
}
export interface StartRestoreJobOutput {
  RestoreJobId?: string;
}
export interface StopBackupJobInput {
  BackupJobId: string;
}
export type StorageClass = "WARM" | "COLD" | "DELETED";
export type Backupstring = string;

export type stringList = Array<string>;
export type stringMap = Record<string, string>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceInput {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export type Tags = Record<string, string>;
export type TagValue = string;

export type timestamp = Date | string;

export type Timezone = string;

export interface UntagResourceInput {
  ResourceArn: string;
  TagKeyList: Array<string>;
}
export interface UpdateBackupPlanInput {
  BackupPlanId: string;
  BackupPlan: BackupPlanInput;
}
export interface UpdateBackupPlanOutput {
  BackupPlanId?: string;
  BackupPlanArn?: string;
  CreationDate?: Date | string;
  VersionId?: string;
  AdvancedBackupSettings?: Array<AdvancedBackupSetting>;
}
export interface UpdateFrameworkInput {
  FrameworkName: string;
  FrameworkDescription?: string;
  FrameworkControls?: Array<FrameworkControl>;
  IdempotencyToken?: string;
}
export interface UpdateFrameworkOutput {
  FrameworkName?: string;
  FrameworkArn?: string;
  CreationTime?: Date | string;
}
export interface UpdateGlobalSettingsInput {
  GlobalSettings?: Record<string, string>;
}
export interface UpdateRecoveryPointIndexSettingsInput {
  BackupVaultName: string;
  RecoveryPointArn: string;
  IamRoleArn?: string;
  Index: Index;
}
export interface UpdateRecoveryPointIndexSettingsOutput {
  BackupVaultName?: string;
  RecoveryPointArn?: string;
  IndexStatus?: IndexStatus;
  Index?: Index;
}
export interface UpdateRecoveryPointLifecycleInput {
  BackupVaultName: string;
  RecoveryPointArn: string;
  Lifecycle?: Lifecycle;
}
export interface UpdateRecoveryPointLifecycleOutput {
  BackupVaultArn?: string;
  RecoveryPointArn?: string;
  Lifecycle?: Lifecycle;
  CalculatedLifecycle?: CalculatedLifecycle;
}
export interface UpdateRegionSettingsInput {
  ResourceTypeOptInPreference?: Record<string, boolean>;
  ResourceTypeManagementPreference?: Record<string, boolean>;
}
export interface UpdateReportPlanInput {
  ReportPlanName: string;
  ReportPlanDescription?: string;
  ReportDeliveryChannel?: ReportDeliveryChannel;
  ReportSetting?: ReportSetting;
  IdempotencyToken?: string;
}
export interface UpdateReportPlanOutput {
  ReportPlanName?: string;
  ReportPlanArn?: string;
  CreationTime?: Date | string;
}
export interface UpdateRestoreTestingPlanInput {
  RestoreTestingPlan: RestoreTestingPlanForUpdate;
  RestoreTestingPlanName: string;
}
export interface UpdateRestoreTestingPlanOutput {
  CreationTime: Date | string;
  RestoreTestingPlanArn: string;
  RestoreTestingPlanName: string;
  UpdateTime: Date | string;
}
export interface UpdateRestoreTestingSelectionInput {
  RestoreTestingPlanName: string;
  RestoreTestingSelection: RestoreTestingSelectionForUpdate;
  RestoreTestingSelectionName: string;
}
export interface UpdateRestoreTestingSelectionOutput {
  CreationTime: Date | string;
  RestoreTestingPlanArn: string;
  RestoreTestingPlanName: string;
  RestoreTestingSelectionName: string;
  UpdateTime: Date | string;
}
export type VaultNames = Array<string>;
export type VaultState = "CREATING" | "AVAILABLE" | "FAILED";
export type VaultType =
  | "BACKUP_VAULT"
  | "LOGICALLY_AIR_GAPPED_BACKUP_VAULT"
  | "RESTORE_ACCESS_BACKUP_VAULT";
export type WindowMinutes = number;

export declare namespace AssociateBackupVaultMpaApprovalTeam {
  export type Input = AssociateBackupVaultMpaApprovalTeamInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CancelLegalHold {
  export type Input = CancelLegalHoldInput;
  export type Output = CancelLegalHoldOutput;
  export type Error =
    | InvalidParameterValueException
    | InvalidResourceStateException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateBackupPlan {
  export type Input = CreateBackupPlanInput;
  export type Output = CreateBackupPlanOutput;
  export type Error =
    | AlreadyExistsException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateBackupSelection {
  export type Input = CreateBackupSelectionInput;
  export type Output = CreateBackupSelectionOutput;
  export type Error =
    | AlreadyExistsException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateBackupVault {
  export type Input = CreateBackupVaultInput;
  export type Output = CreateBackupVaultOutput;
  export type Error =
    | AlreadyExistsException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateFramework {
  export type Input = CreateFrameworkInput;
  export type Output = CreateFrameworkOutput;
  export type Error =
    | AlreadyExistsException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateLegalHold {
  export type Input = CreateLegalHoldInput;
  export type Output = CreateLegalHoldOutput;
  export type Error =
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateLogicallyAirGappedBackupVault {
  export type Input = CreateLogicallyAirGappedBackupVaultInput;
  export type Output = CreateLogicallyAirGappedBackupVaultOutput;
  export type Error =
    | AlreadyExistsException
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateReportPlan {
  export type Input = CreateReportPlanInput;
  export type Output = CreateReportPlanOutput;
  export type Error =
    | AlreadyExistsException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateRestoreAccessBackupVault {
  export type Input = CreateRestoreAccessBackupVaultInput;
  export type Output = CreateRestoreAccessBackupVaultOutput;
  export type Error =
    | AlreadyExistsException
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateRestoreTestingPlan {
  export type Input = CreateRestoreTestingPlanInput;
  export type Output = CreateRestoreTestingPlanOutput;
  export type Error =
    | AlreadyExistsException
    | ConflictException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateRestoreTestingSelection {
  export type Input = CreateRestoreTestingSelectionInput;
  export type Output = CreateRestoreTestingSelectionOutput;
  export type Error =
    | AlreadyExistsException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteBackupPlan {
  export type Input = DeleteBackupPlanInput;
  export type Output = DeleteBackupPlanOutput;
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteBackupSelection {
  export type Input = DeleteBackupSelectionInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteBackupVault {
  export type Input = DeleteBackupVaultInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteBackupVaultAccessPolicy {
  export type Input = DeleteBackupVaultAccessPolicyInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteBackupVaultLockConfiguration {
  export type Input = DeleteBackupVaultLockConfigurationInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteBackupVaultNotifications {
  export type Input = DeleteBackupVaultNotificationsInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteFramework {
  export type Input = DeleteFrameworkInput;
  export type Output = {};
  export type Error =
    | ConflictException
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteRecoveryPoint {
  export type Input = DeleteRecoveryPointInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | InvalidResourceStateException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteReportPlan {
  export type Input = DeleteReportPlanInput;
  export type Output = {};
  export type Error =
    | ConflictException
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteRestoreTestingPlan {
  export type Input = DeleteRestoreTestingPlanInput;
  export type Output = {};
  export type Error =
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteRestoreTestingSelection {
  export type Input = DeleteRestoreTestingSelectionInput;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeBackupJob {
  export type Input = DescribeBackupJobInput;
  export type Output = DescribeBackupJobOutput;
  export type Error =
    | DependencyFailureException
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeBackupVault {
  export type Input = DescribeBackupVaultInput;
  export type Output = DescribeBackupVaultOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeCopyJob {
  export type Input = DescribeCopyJobInput;
  export type Output = DescribeCopyJobOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeFramework {
  export type Input = DescribeFrameworkInput;
  export type Output = DescribeFrameworkOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeGlobalSettings {
  export type Input = DescribeGlobalSettingsInput;
  export type Output = DescribeGlobalSettingsOutput;
  export type Error =
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeProtectedResource {
  export type Input = DescribeProtectedResourceInput;
  export type Output = DescribeProtectedResourceOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeRecoveryPoint {
  export type Input = DescribeRecoveryPointInput;
  export type Output = DescribeRecoveryPointOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeRegionSettings {
  export type Input = DescribeRegionSettingsInput;
  export type Output = DescribeRegionSettingsOutput;
  export type Error = ServiceUnavailableException | CommonAwsError;
}

export declare namespace DescribeReportJob {
  export type Input = DescribeReportJobInput;
  export type Output = DescribeReportJobOutput;
  export type Error =
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeReportPlan {
  export type Input = DescribeReportPlanInput;
  export type Output = DescribeReportPlanOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeRestoreJob {
  export type Input = DescribeRestoreJobInput;
  export type Output = DescribeRestoreJobOutput;
  export type Error =
    | DependencyFailureException
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DisassociateBackupVaultMpaApprovalTeam {
  export type Input = DisassociateBackupVaultMpaApprovalTeamInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DisassociateRecoveryPoint {
  export type Input = DisassociateRecoveryPointInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | InvalidResourceStateException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DisassociateRecoveryPointFromParent {
  export type Input = DisassociateRecoveryPointFromParentInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ExportBackupPlanTemplate {
  export type Input = ExportBackupPlanTemplateInput;
  export type Output = ExportBackupPlanTemplateOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetBackupPlan {
  export type Input = GetBackupPlanInput;
  export type Output = GetBackupPlanOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetBackupPlanFromJSON {
  export type Input = GetBackupPlanFromJSONInput;
  export type Output = GetBackupPlanFromJSONOutput;
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetBackupPlanFromTemplate {
  export type Input = GetBackupPlanFromTemplateInput;
  export type Output = GetBackupPlanFromTemplateOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetBackupSelection {
  export type Input = GetBackupSelectionInput;
  export type Output = GetBackupSelectionOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetBackupVaultAccessPolicy {
  export type Input = GetBackupVaultAccessPolicyInput;
  export type Output = GetBackupVaultAccessPolicyOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetBackupVaultNotifications {
  export type Input = GetBackupVaultNotificationsInput;
  export type Output = GetBackupVaultNotificationsOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetLegalHold {
  export type Input = GetLegalHoldInput;
  export type Output = GetLegalHoldOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetRecoveryPointIndexDetails {
  export type Input = GetRecoveryPointIndexDetailsInput;
  export type Output = GetRecoveryPointIndexDetailsOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetRecoveryPointRestoreMetadata {
  export type Input = GetRecoveryPointRestoreMetadataInput;
  export type Output = GetRecoveryPointRestoreMetadataOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetRestoreJobMetadata {
  export type Input = GetRestoreJobMetadataInput;
  export type Output = GetRestoreJobMetadataOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetRestoreTestingInferredMetadata {
  export type Input = GetRestoreTestingInferredMetadataInput;
  export type Output = GetRestoreTestingInferredMetadataOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetRestoreTestingPlan {
  export type Input = GetRestoreTestingPlanInput;
  export type Output = GetRestoreTestingPlanOutput;
  export type Error =
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetRestoreTestingSelection {
  export type Input = GetRestoreTestingSelectionInput;
  export type Output = GetRestoreTestingSelectionOutput;
  export type Error =
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetSupportedResourceTypes {
  export type Input = {};
  export type Output = GetSupportedResourceTypesOutput;
  export type Error = ServiceUnavailableException | CommonAwsError;
}

export declare namespace ListBackupJobs {
  export type Input = ListBackupJobsInput;
  export type Output = ListBackupJobsOutput;
  export type Error =
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListBackupJobSummaries {
  export type Input = ListBackupJobSummariesInput;
  export type Output = ListBackupJobSummariesOutput;
  export type Error =
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListBackupPlans {
  export type Input = ListBackupPlansInput;
  export type Output = ListBackupPlansOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListBackupPlanTemplates {
  export type Input = ListBackupPlanTemplatesInput;
  export type Output = ListBackupPlanTemplatesOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListBackupPlanVersions {
  export type Input = ListBackupPlanVersionsInput;
  export type Output = ListBackupPlanVersionsOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListBackupSelections {
  export type Input = ListBackupSelectionsInput;
  export type Output = ListBackupSelectionsOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListBackupVaults {
  export type Input = ListBackupVaultsInput;
  export type Output = ListBackupVaultsOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListCopyJobs {
  export type Input = ListCopyJobsInput;
  export type Output = ListCopyJobsOutput;
  export type Error =
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListCopyJobSummaries {
  export type Input = ListCopyJobSummariesInput;
  export type Output = ListCopyJobSummariesOutput;
  export type Error =
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListFrameworks {
  export type Input = ListFrameworksInput;
  export type Output = ListFrameworksOutput;
  export type Error =
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListIndexedRecoveryPoints {
  export type Input = ListIndexedRecoveryPointsInput;
  export type Output = ListIndexedRecoveryPointsOutput;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListLegalHolds {
  export type Input = ListLegalHoldsInput;
  export type Output = ListLegalHoldsOutput;
  export type Error =
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListProtectedResources {
  export type Input = ListProtectedResourcesInput;
  export type Output = ListProtectedResourcesOutput;
  export type Error =
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListProtectedResourcesByBackupVault {
  export type Input = ListProtectedResourcesByBackupVaultInput;
  export type Output = ListProtectedResourcesByBackupVaultOutput;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListRecoveryPointsByBackupVault {
  export type Input = ListRecoveryPointsByBackupVaultInput;
  export type Output = ListRecoveryPointsByBackupVaultOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListRecoveryPointsByLegalHold {
  export type Input = ListRecoveryPointsByLegalHoldInput;
  export type Output = ListRecoveryPointsByLegalHoldOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListRecoveryPointsByResource {
  export type Input = ListRecoveryPointsByResourceInput;
  export type Output = ListRecoveryPointsByResourceOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListReportJobs {
  export type Input = ListReportJobsInput;
  export type Output = ListReportJobsOutput;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListReportPlans {
  export type Input = ListReportPlansInput;
  export type Output = ListReportPlansOutput;
  export type Error =
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListRestoreAccessBackupVaults {
  export type Input = ListRestoreAccessBackupVaultsInput;
  export type Output = ListRestoreAccessBackupVaultsOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListRestoreJobs {
  export type Input = ListRestoreJobsInput;
  export type Output = ListRestoreJobsOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListRestoreJobsByProtectedResource {
  export type Input = ListRestoreJobsByProtectedResourceInput;
  export type Output = ListRestoreJobsByProtectedResourceOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListRestoreJobSummaries {
  export type Input = ListRestoreJobSummariesInput;
  export type Output = ListRestoreJobSummariesOutput;
  export type Error =
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListRestoreTestingPlans {
  export type Input = ListRestoreTestingPlansInput;
  export type Output = ListRestoreTestingPlansOutput;
  export type Error =
    | InvalidParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListRestoreTestingSelections {
  export type Input = ListRestoreTestingSelectionsInput;
  export type Output = ListRestoreTestingSelectionsOutput;
  export type Error =
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListTags {
  export type Input = ListTagsInput;
  export type Output = ListTagsOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutBackupVaultAccessPolicy {
  export type Input = PutBackupVaultAccessPolicyInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutBackupVaultLockConfiguration {
  export type Input = PutBackupVaultLockConfigurationInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutBackupVaultNotifications {
  export type Input = PutBackupVaultNotificationsInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutRestoreValidationResult {
  export type Input = PutRestoreValidationResultInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace RevokeRestoreAccessBackupVault {
  export type Input = RevokeRestoreAccessBackupVaultInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace StartBackupJob {
  export type Input = StartBackupJobInput;
  export type Output = StartBackupJobOutput;
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace StartCopyJob {
  export type Input = StartCopyJobInput;
  export type Output = StartCopyJobOutput;
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace StartReportJob {
  export type Input = StartReportJobInput;
  export type Output = StartReportJobOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace StartRestoreJob {
  export type Input = StartRestoreJobInput;
  export type Output = StartRestoreJobOutput;
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace StopBackupJob {
  export type Input = StopBackupJobInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateBackupPlan {
  export type Input = UpdateBackupPlanInput;
  export type Output = UpdateBackupPlanOutput;
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateFramework {
  export type Input = UpdateFrameworkInput;
  export type Output = UpdateFrameworkOutput;
  export type Error =
    | AlreadyExistsException
    | ConflictException
    | InvalidParameterValueException
    | LimitExceededException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateGlobalSettings {
  export type Input = UpdateGlobalSettingsInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateRecoveryPointIndexSettings {
  export type Input = UpdateRecoveryPointIndexSettingsInput;
  export type Output = UpdateRecoveryPointIndexSettingsOutput;
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateRecoveryPointLifecycle {
  export type Input = UpdateRecoveryPointLifecycleInput;
  export type Output = UpdateRecoveryPointLifecycleOutput;
  export type Error =
    | InvalidParameterValueException
    | InvalidRequestException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateRegionSettings {
  export type Input = UpdateRegionSettingsInput;
  export type Output = {};
  export type Error =
    | InvalidParameterValueException
    | MissingParameterValueException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateReportPlan {
  export type Input = UpdateReportPlanInput;
  export type Output = UpdateReportPlanOutput;
  export type Error =
    | ConflictException
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateRestoreTestingPlan {
  export type Input = UpdateRestoreTestingPlanInput;
  export type Output = UpdateRestoreTestingPlanOutput;
  export type Error =
    | ConflictException
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateRestoreTestingSelection {
  export type Input = UpdateRestoreTestingSelectionInput;
  export type Output = UpdateRestoreTestingSelectionOutput;
  export type Error =
    | ConflictException
    | InvalidParameterValueException
    | MissingParameterValueException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}
