import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface Inspector2 {
  associateMember(
    input: AssociateMemberRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchAssociateCodeSecurityScanConfiguration(
    input: BatchAssociateCodeSecurityScanConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchDisassociateCodeSecurityScanConfiguration(
    input: BatchDisassociateCodeSecurityScanConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchGetAccountStatus(
    input: BatchGetAccountStatusRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchGetCodeSnippet(
    input: BatchGetCodeSnippetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchGetFindingDetails(
    input: BatchGetFindingDetailsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchGetFreeTrialInfo(
    input: BatchGetFreeTrialInfoRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchGetMemberEc2DeepInspectionStatus(
    input: BatchGetMemberEc2DeepInspectionStatusRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchUpdateMemberEc2DeepInspectionStatus(
    input: BatchUpdateMemberEc2DeepInspectionStatusRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  cancelFindingsReport(
    input: CancelFindingsReportRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  cancelSbomExport(
    input: CancelSbomExportRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createCisScanConfiguration(
    input: CreateCisScanConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createCodeSecurityIntegration(
    input: CreateCodeSecurityIntegrationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createCodeSecurityScanConfiguration(
    input: CreateCodeSecurityScanConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createFilter(
    input: CreateFilterRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | BadRequestException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createFindingsReport(
    input: CreateFindingsReportRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createSbomExport(
    input: CreateSbomExportRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCisScanConfiguration(
    input: DeleteCisScanConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCodeSecurityIntegration(
    input: DeleteCodeSecurityIntegrationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCodeSecurityScanConfiguration(
    input: DeleteCodeSecurityScanConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteFilter(
    input: DeleteFilterRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeOrganizationConfiguration(
    input: DescribeOrganizationConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disable(
    input: DisableRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disableDelegatedAdminAccount(
    input: DisableDelegatedAdminAccountRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateMember(
    input: DisassociateMemberRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  enable(
    input: EnableRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  enableDelegatedAdminAccount(
    input: EnableDelegatedAdminAccountRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCisScanReport(
    input: GetCisScanReportRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCisScanResultDetails(
    input: GetCisScanResultDetailsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getClustersForImage(
    input: GetClustersForImageRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCodeSecurityIntegration(
    input: GetCodeSecurityIntegrationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCodeSecurityScan(
    input: GetCodeSecurityScanRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCodeSecurityScanConfiguration(
    input: GetCodeSecurityScanConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getConfiguration(
    input: GetConfigurationRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getDelegatedAdminAccount(
    input: GetDelegatedAdminAccountRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getEc2DeepInspectionConfiguration(
    input: GetEc2DeepInspectionConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getEncryptionKey(
    input: GetEncryptionKeyRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getFindingsReportStatus(
    input: GetFindingsReportStatusRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getMember(
    input: GetMemberRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getSbomExport(
    input: GetSbomExportRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAccountPermissions(
    input: ListAccountPermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCisScanConfigurations(
    input: ListCisScanConfigurationsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCisScanResultsAggregatedByChecks(
    input: ListCisScanResultsAggregatedByChecksRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCisScanResultsAggregatedByTargetResource(
    input: ListCisScanResultsAggregatedByTargetResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCisScans(
    input: ListCisScansRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCodeSecurityIntegrations(
    input: ListCodeSecurityIntegrationsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCodeSecurityScanConfigurationAssociations(
    input: ListCodeSecurityScanConfigurationAssociationsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCodeSecurityScanConfigurations(
    input: ListCodeSecurityScanConfigurationsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCoverage(
    input: ListCoverageRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCoverageStatistics(
    input: ListCoverageStatisticsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDelegatedAdminAccounts(
    input: ListDelegatedAdminAccountsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listFilters(
    input: ListFiltersRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listFindingAggregations(
    input: ListFindingAggregationsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listFindings(
    input: ListFindingsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listMembers(
    input: ListMembersRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listUsageTotals(
    input: ListUsageTotalsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  resetEncryptionKey(
    input: ResetEncryptionKeyRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  searchVulnerabilities(
    input: SearchVulnerabilitiesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  sendCisSessionHealth(
    input: SendCisSessionHealthRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  sendCisSessionTelemetry(
    input: SendCisSessionTelemetryRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startCisSession(
    input: StartCisSessionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startCodeSecurityScan(
    input: StartCodeSecurityScanRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  stopCisSession(
    input: StopCisSessionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    BadRequestException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateCisScanConfiguration(
    input: UpdateCisScanConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateCodeSecurityIntegration(
    input: UpdateCodeSecurityIntegrationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateCodeSecurityScanConfiguration(
    input: UpdateCodeSecurityScanConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateConfiguration(
    input: UpdateConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateEc2DeepInspectionConfiguration(
    input: UpdateEc2DeepInspectionConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateEncryptionKey(
    input: UpdateEncryptionKeyRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateFilter(
    input: UpdateFilterRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateOrgEc2DeepInspectionConfiguration(
    input: UpdateOrgEc2DeepInspectionConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateOrganizationConfiguration(
    input: UpdateOrganizationConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export interface AccessDeniedException {
}
export interface Account {
}
export interface AccountAggregation {
}
export interface AccountAggregationResponse {
}
export type AccountId = string;

export type AccountIdFilterList = Array<unknown>;
export type AccountIdSet = Array<unknown>;
export type AccountList = Array<unknown>;
export type AccountSortBy = string;

export interface AccountState {
}
export type AccountStateList = Array<unknown>;
export type AggCounts = number;

export type AggregationFindingType = string;

export type AggregationRequest = never;
export type AggregationResourceType = string;

export type AggregationResponse = never;
export type AggregationResponseList = Array<unknown>;
export type AggregationType = string;

export interface AmiAggregation {
}
export interface AmiAggregationResponse {
}
export type AmiId = string;

export type AmiSortBy = string;

export type Architecture = string;

export type ArchitectureList = Array<unknown>;
export type Arn = string;

export interface AssociateConfigurationRequest {
}
export type AssociateConfigurationRequestList = Array<unknown>;
export interface AssociateMemberRequest {
}
export interface AssociateMemberResponse {
}
export type AssociationResultStatusCode = never;
export type AssociationResultStatusMessage = string;

export interface AtigData {
}
export type AuthorizationUrl = string;

export interface AutoEnable {
}
export interface AwsEc2InstanceDetails {
}
export interface AwsEcrContainerAggregation {
}
export interface AwsEcrContainerAggregationResponse {
}
export interface AwsEcrContainerImageDetails {
}
export type AwsEcrContainerSortBy = string;

export interface AwsEcsMetadataDetails {
}
export interface AwsEksMetadataDetails {
}
export interface AwsEksWorkloadInfo {
}
export type AwsEksWorkloadInfoList = Array<unknown>;
export interface AwsLambdaFunctionDetails {
}
export interface BadRequestException {
}
export interface BatchAssociateCodeSecurityScanConfigurationRequest {
}
export interface BatchAssociateCodeSecurityScanConfigurationResponse {
}
export interface BatchDisassociateCodeSecurityScanConfigurationRequest {
}
export interface BatchDisassociateCodeSecurityScanConfigurationResponse {
}
export interface BatchGetAccountStatusRequest {
}
export interface BatchGetAccountStatusResponse {
}
export interface BatchGetCodeSnippetRequest {
}
export interface BatchGetCodeSnippetResponse {
}
export interface BatchGetFindingDetailsRequest {
}
export interface BatchGetFindingDetailsResponse {
}
export interface BatchGetFreeTrialInfoRequest {
}
export interface BatchGetFreeTrialInfoResponse {
}
export interface BatchGetMemberEc2DeepInspectionStatusRequest {
}
export interface BatchGetMemberEc2DeepInspectionStatusResponse {
}
export interface BatchUpdateMemberEc2DeepInspectionStatusRequest {
}
export interface BatchUpdateMemberEc2DeepInspectionStatusResponse {
}
export type BenchmarkProfile = string;

export type BenchmarkVersion = string;

export interface CancelFindingsReportRequest {
}
export interface CancelFindingsReportResponse {
}
export interface CancelSbomExportRequest {
}
export interface CancelSbomExportResponse {
}
export type CheckCount = number;

export type CheckIdFilterList = Array<unknown>;
export type CisaAction = string;

export type CisAccountIdList = Array<unknown>;
export interface CisaData {
}
export type CisaDateAdded = Date | string;

export type CisaDateDue = Date | string;

export interface CisCheckAggregation {
}
export type CisCheckAggregationList = Array<unknown>;
export interface CisDateFilter {
}
export type CisFindingArn = string;

export type CisFindingArnFilterList = Array<unknown>;
export type CisFindingStatus = never;
export type CisFindingStatusComparison = never;
export interface CisFindingStatusFilter {
}
export type CisFindingStatusFilterList = Array<unknown>;
export interface CisNumberFilter {
}
export type CisNumberFilterList = Array<unknown>;
export type CisOwnerId = string;

export type CisReportFormat = never;
export type CisReportStatus = never;
export type CisResultStatus = never;
export type CisResultStatusComparison = never;
export interface CisResultStatusFilter {
}
export type CisResultStatusFilterList = Array<unknown>;
export type CisRuleDetails = Uint8Array | string;

export type CisRuleStatus = never;
export interface CisScan {
}
export type CisScanArn = string;

export type CisScanArnFilterList = Array<unknown>;
export interface CisScanConfiguration {
}
export type CisScanConfigurationArn = string;

export type CisScanConfigurationArnFilterList = Array<unknown>;
export type CisScanConfigurationList = Array<unknown>;
export type CisScanConfigurationsSortBy = never;
export type CisScanDateFilterList = Array<unknown>;
export type CisScanList = Array<unknown>;
export type CisScanName = string;

export type CisScanNameFilterList = Array<unknown>;
export interface CisScanResultDetails {
}
export interface CisScanResultDetailsFilterCriteria {
}
export type CisScanResultDetailsList = Array<unknown>;
export type CisScanResultDetailsSortBy = never;
export interface CisScanResultsAggregatedByChecksFilterCriteria {
}
export type CisScanResultsAggregatedByChecksSortBy = never;
export interface CisScanResultsAggregatedByTargetResourceFilterCriteria {
}
export type CisScanResultsAggregatedByTargetResourceSortBy = never;
export type CisScanResultsMaxResults = number;

export type CisScanStatus = never;
export type CisScanStatusComparison = never;
export interface CisScanStatusFilter {
}
export type CisScanStatusFilterList = Array<unknown>;
export type CisScheduledByFilterList = Array<unknown>;
export type CisSecurityLevel = never;
export type CisSecurityLevelComparison = never;
export interface CisSecurityLevelFilter {
}
export type CisSecurityLevelFilterList = Array<unknown>;
export interface CisSessionMessage {
}
export type CisSessionMessages = Array<unknown>;
export type CisSortOrder = never;
export type CisStringComparison = never;
export interface CisStringFilter {
}
export type CisTagMap = Record<string, unknown>;
export interface CisTargetResourceAggregation {
}
export type CisTargetResourceAggregationList = Array<unknown>;
export interface CisTargets {
}
export type CisTargetStatus = never;
export type CisTargetStatusComparison = never;
export interface CisTargetStatusFilter {
}
export type CisTargetStatusReason = never;
export interface CisTargetStatusReasonFilter {
}
export type ClientToken = string;

export interface ClusterDetails {
}
export type ClusterDetailsList = Array<unknown>;
export interface ClusterForImageFilterCriteria {
}
export interface ClusterInformation {
}
export type ClusterInformationList = Array<unknown>;
export type ClusterMetadata = never;
export interface CodeFilePath {
}
export interface CodeLine {
}
export type CodeLineList = Array<unknown>;
export interface CodeRepositoryAggregation {
}
export interface CodeRepositoryAggregationResponse {
}
export interface CodeRepositoryDetails {
}
export type CodeRepositoryIntegrationArn = string;

export interface CodeRepositoryMetadata {
}
export interface CodeRepositoryOnDemandScan {
}
export type CodeRepositoryProjectName = string;

export type CodeRepositoryProviderType = string;

export type CodeRepositorySortBy = string;

export type CodeScanStatus = never;
export type CodeSecurityClientToken = string;

export type CodeSecurityIntegrationArn = string;

export interface CodeSecurityIntegrationSummary {
}
export type CodeSecurityResource = never;
export interface CodeSecurityScanConfiguration {
}
export type CodeSecurityScanConfigurationAssociationSummaries = Array<unknown>;
export interface CodeSecurityScanConfigurationAssociationSummary {
}
export type CodeSecurityScanConfigurationSummaries = Array<unknown>;
export interface CodeSecurityScanConfigurationSummary {
}
export type CodeSecurityUuid = string;

export interface CodeSnippetError {
}
export type CodeSnippetErrorCode = string;

export type CodeSnippetErrorList = Array<unknown>;
export interface CodeSnippetResult {
}
export type CodeSnippetResultList = Array<unknown>;
export interface CodeVulnerabilityDetails {
}
export type CommitId = string;

export type Component = string;

export type ComponentArn = string;

export type ComponentType = string;

export interface ComputePlatform {
}
export type ConfigurationLevel = never;
export interface ConflictException {
}
export interface ContinuousIntegrationScanConfiguration {
}
export type ContinuousIntegrationScanEvent = never;
export type ContinuousIntegrationScanSupportedEvents = Array<unknown>;
export interface Counts {
}
export type CountsList = Array<unknown>;
export interface CoverageDateFilter {
}
export type CoverageDateFilterList = Array<unknown>;
export interface CoverageFilterCriteria {
}
export type CoverageMapComparison = string;

export interface CoverageMapFilter {
}
export type CoverageMapFilterList = Array<unknown>;
export interface CoverageNumberFilter {
}
export type CoverageNumberFilterList = Array<unknown>;
export type CoverageResourceType = string;

export type CoverageStringComparison = string;

export interface CoverageStringFilter {
}
export type CoverageStringFilterList = Array<unknown>;
export type CoverageStringInput = string;

export interface CoveredResource {
}
export type CoveredResources = Array<unknown>;
export interface CreateCisScanConfigurationRequest {
}
export interface CreateCisScanConfigurationResponse {
}
export interface CreateCisTargets {
}
export interface CreateCodeSecurityIntegrationRequest {
}
export interface CreateCodeSecurityIntegrationResponse {
}
export interface CreateCodeSecurityScanConfigurationRequest {
}
export interface CreateCodeSecurityScanConfigurationResponse {
}
export interface CreateFilterRequest {
}
export interface CreateFilterResponse {
}
export interface CreateFindingsReportRequest {
}
export interface CreateFindingsReportResponse {
}
export interface CreateGitLabSelfManagedIntegrationDetail {
}
export type CreateIntegrationDetail = never;
export interface CreateSbomExportRequest {
}
export interface CreateSbomExportResponse {
}
export type Currency = string;

export interface Cvss2 {
}
export type Cvss2BaseScore = number;

export type Cvss2ScoringVector = string;

export interface Cvss3 {
}
export type Cvss3BaseScore = number;

export type Cvss3ScoringVector = string;

export interface CvssScore {
}
export interface CvssScoreAdjustment {
}
export type CvssScoreAdjustmentList = Array<unknown>;
export interface CvssScoreDetails {
}
export type CvssScoreList = Array<unknown>;
export type Cwe = string;

export type CweList = Array<unknown>;
export type Cwes = Array<unknown>;
export interface DailySchedule {
}
export interface DateFilter {
}
export type DateFilterList = Array<unknown>;
export type DateTimeTimestamp = Date | string;

export type Day = never;
export type DaysList = Array<unknown>;
export interface DelegatedAdmin {
}
export interface DelegatedAdminAccount {
}
export type DelegatedAdminAccountList = Array<unknown>;
export type DelegatedAdminStatus = string;

export interface DeleteCisScanConfigurationRequest {
}
export interface DeleteCisScanConfigurationResponse {
}
export interface DeleteCodeSecurityIntegrationRequest {
}
export interface DeleteCodeSecurityIntegrationResponse {
}
export interface DeleteCodeSecurityScanConfigurationRequest {
}
export interface DeleteCodeSecurityScanConfigurationResponse {
}
export interface DeleteFilterRequest {
}
export interface DeleteFilterResponse {
}
export interface DescribeOrganizationConfigurationRequest {
}
export interface DescribeOrganizationConfigurationResponse {
}
export interface Destination {
}
export type DetectionPlatforms = Array<unknown>;
export type DetectorTagList = Array<unknown>;
export interface DisableDelegatedAdminAccountRequest {
}
export interface DisableDelegatedAdminAccountResponse {
}
export interface DisableRequest {
}
export type DisableResourceTypeList = Array<unknown>;
export interface DisableResponse {
}
export interface DisassociateConfigurationRequest {
}
export type DisassociateConfigurationRequestList = Array<unknown>;
export interface DisassociateMemberRequest {
}
export interface DisassociateMemberResponse {
}
export interface Ec2Configuration {
}
export interface Ec2ConfigurationState {
}
export type Ec2DeepInspectionStatus = string;

export interface Ec2InstanceAggregation {
}
export interface Ec2InstanceAggregationResponse {
}
export type Ec2InstanceSortBy = string;

export interface Ec2Metadata {
}
export type Ec2Platform = string;

export type Ec2ScanMode = string;

export interface Ec2ScanModeState {
}
export type Ec2ScanModeStatus = string;

export interface EcrConfiguration {
}
export interface EcrConfigurationState {
}
export interface EcrContainerImageMetadata {
}
export type EcrPullDateRescanDuration = string;

export type EcrPullDateRescanMode = string;

export interface EcrRepositoryMetadata {
}
export type EcrRescanDuration = string;

export interface EcrRescanDurationState {
}
export type EcrRescanDurationStatus = string;

export type EcrScanFrequency = string;

export interface EnableDelegatedAdminAccountRequest {
}
export interface EnableDelegatedAdminAccountResponse {
}
export interface EnableRequest {
}
export type EnableResourceTypeList = Array<unknown>;
export interface EnableResponse {
}
export interface Epss {
}
export interface EpssDetails {
}
export type EpssScore = number;

export type EpssScoreValue = number;

export type ErrorCode = string;

export type ErrorMessage = string;

export interface Evidence {
}
export type EvidenceDetail = string;

export type EvidenceList = Array<unknown>;
export type EvidenceRule = string;

export type EvidenceSeverity = string;

export type ExecutionRoleArn = string;

export interface ExploitabilityDetails {
}
export type ExploitAvailable = string;

export interface ExploitObserved {
}
export type ExternalReportStatus = string;

export interface FailedAccount {
}
export type FailedAccountList = Array<unknown>;
export interface FailedAssociationResult {
}
export type FailedAssociationResultList = Array<unknown>;
export interface FailedMemberAccountEc2DeepInspectionStatusState {
}
export type FailedMemberAccountEc2DeepInspectionStatusStateList = Array<unknown>;
export type FilePath = string;

export interface Filter {
}
export type FilterAction = string;

export type FilterArn = string;

export type FilterArnList = Array<unknown>;
export interface FilterCriteria {
}
export type FilterDescription = string;

export type FilterList = Array<unknown>;
export type FilterName = string;

export type FilterReason = string;

export interface Finding {
}
export type FindingArn = string;

export type FindingArnList = Array<unknown>;
export type FindingArns = Array<unknown>;
export type FindingDescription = string;

export interface FindingDetail {
}
export type FindingDetails = Array<unknown>;
export interface FindingDetailsError {
}
export type FindingDetailsErrorCode = string;

export type FindingDetailsErrorList = Array<unknown>;
export type FindingList = Array<unknown>;
export type FindingStatus = string;

export type FindingTitle = string;

export type FindingType = string;

export interface FindingTypeAggregation {
}
export interface FindingTypeAggregationResponse {
}
export type FindingTypeSortBy = string;

export type FirstSeen = Date | string;

export type FixAvailable = string;

export interface FreeTrialAccountInfo {
}
export type FreeTrialAccountInfoList = Array<unknown>;
export interface FreeTrialInfo {
}
export interface FreeTrialInfoError {
}
export type FreeTrialInfoErrorCode = string;

export type FreeTrialInfoErrorList = Array<unknown>;
export type FreeTrialInfoList = Array<unknown>;
export type FreeTrialStatus = string;

export type FreeTrialType = string;

export type FrequencyExpression = string;

export type FunctionName = string;

export interface GetCisScanReportRequest {
}
export interface GetCisScanReportResponse {
}
export type GetCisScanResultDetailsMaxResults = number;

export interface GetCisScanResultDetailsRequest {
}
export interface GetCisScanResultDetailsResponse {
}
export type GetClustersForImageNextToken = string;

export interface GetClustersForImageRequest {
}
export interface GetClustersForImageResponse {
}
export interface GetCodeSecurityIntegrationRequest {
}
export interface GetCodeSecurityIntegrationResponse {
}
export interface GetCodeSecurityScanConfigurationRequest {
}
export interface GetCodeSecurityScanConfigurationResponse {
}
export interface GetCodeSecurityScanRequest {
}
export interface GetCodeSecurityScanResponse {
}
export interface GetConfigurationRequest {
}
export interface GetConfigurationResponse {
}
export interface GetDelegatedAdminAccountRequest {
}
export interface GetDelegatedAdminAccountResponse {
}
export interface GetEc2DeepInspectionConfigurationRequest {
}
export interface GetEc2DeepInspectionConfigurationResponse {
}
export interface GetEncryptionKeyRequest {
}
export interface GetEncryptionKeyResponse {
}
export interface GetFindingsReportStatusRequest {
}
export interface GetFindingsReportStatusResponse {
}
export interface GetMemberRequest {
}
export interface GetMemberResponse {
}
export interface GetSbomExportRequest {
}
export interface GetSbomExportResponse {
}
export type GitHubAuthCode = string;

export type GitHubInstallationId = string;

export type GitLabAccessToken = string;

export type GitLabAuthCode = string;

export type GroupKey = string;

export type ImageHash = string;

export interface ImageLayerAggregation {
}
export interface ImageLayerAggregationResponse {
}
export type ImageLayerSortBy = string;

export type ImageTagList = Array<unknown>;
export interface InspectorScoreDetails {
}
export type InstanceUrl = string;

export type IntegrationName = string;

export type IntegrationStatus = never;
export type IntegrationSummaries = Array<unknown>;
export type IntegrationType = never;
export interface InternalServerException {
}
export type IpV4Address = string;

export type IpV4AddressList = Array<unknown>;
export type IpV6Address = string;

export type IpV6AddressList = Array<unknown>;
export type KmsKeyArn = string;

export interface LambdaFunctionAggregation {
}
export interface LambdaFunctionAggregationResponse {
}
export interface LambdaFunctionMetadata {
}
export type LambdaFunctionSortBy = string;

export interface LambdaLayerAggregation {
}
export interface LambdaLayerAggregationResponse {
}
export type LambdaLayerArn = string;

export type LambdaLayerList = Array<unknown>;
export type LambdaLayerSortBy = string;

export interface LambdaVpcConfig {
}
export type LastSeen = Date | string;

export type LayerList = Array<unknown>;
export type ListAccountPermissionsMaxResults = number;

export interface ListAccountPermissionsRequest {
}
export interface ListAccountPermissionsResponse {
}
export interface ListCisScanConfigurationsFilterCriteria {
}
export type ListCisScanConfigurationsMaxResults = number;

export interface ListCisScanConfigurationsRequest {
}
export interface ListCisScanConfigurationsResponse {
}
export interface ListCisScanResultsAggregatedByChecksRequest {
}
export interface ListCisScanResultsAggregatedByChecksResponse {
}
export interface ListCisScanResultsAggregatedByTargetResourceRequest {
}
export interface ListCisScanResultsAggregatedByTargetResourceResponse {
}
export type ListCisScansDetailLevel = never;
export interface ListCisScansFilterCriteria {
}
export type ListCisScansMaxResults = number;

export interface ListCisScansRequest {
}
export interface ListCisScansResponse {
}
export type ListCisScansSortBy = never;
export interface ListCodeSecurityIntegrationsRequest {
}
export interface ListCodeSecurityIntegrationsResponse {
}
export interface ListCodeSecurityScanConfigurationAssociationsRequest {
}
export interface ListCodeSecurityScanConfigurationAssociationsResponse {
}
export interface ListCodeSecurityScanConfigurationsRequest {
}
export interface ListCodeSecurityScanConfigurationsResponse {
}
export type ListCoverageMaxResults = number;

export interface ListCoverageRequest {
}
export interface ListCoverageResponse {
}
export interface ListCoverageStatisticsRequest {
}
export interface ListCoverageStatisticsResponse {
}
export interface ListDelegatedAdminAccountsRequest {
}
export interface ListDelegatedAdminAccountsResponse {
}
export type ListDelegatedAdminMaxResults = number;

export type ListFilterMaxResults = number;

export interface ListFiltersRequest {
}
export interface ListFiltersResponse {
}
export type ListFindingAggregationsMaxResults = number;

export interface ListFindingAggregationsRequest {
}
export interface ListFindingAggregationsResponse {
}
export type ListFindingsMaxResults = number;

export interface ListFindingsRequest {
}
export interface ListFindingsResponse {
}
export type ListMembersMaxResults = number;

export interface ListMembersRequest {
}
export interface ListMembersResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export type ListUsageTotalsMaxResults = number;

export type ListUsageTotalsNextToken = string;

export interface ListUsageTotalsRequest {
}
export interface ListUsageTotalsResponse {
}
export type MapComparison = string;

export interface MapFilter {
}
export type MapFilterList = Array<unknown>;
export type MapKey = string;

export type MapValue = string;

export interface Member {
}
export interface MemberAccountEc2DeepInspectionStatus {
}
export type MemberAccountEc2DeepInspectionStatusList = Array<unknown>;
export interface MemberAccountEc2DeepInspectionStatusState {
}
export type MemberAccountEc2DeepInspectionStatusStateList = Array<unknown>;
export type MemberList = Array<unknown>;
export type MeteringAccountId = string;

export type MeteringAccountIdList = Array<unknown>;
export type MonthlyCostEstimate = number;

export interface MonthlySchedule {
}
export interface NetworkPath {
}
export type NetworkProtocol = string;

export interface NetworkReachabilityDetails {
}
export type NextToken = string;

export type NonEmptyString = string;

export type NonEmptyStringList = Array<unknown>;
export interface NumberFilter {
}
export type NumberFilterList = Array<unknown>;
export type OneAccountIdFilterList = Array<unknown>;
export interface OneTimeSchedule {
}
export type Operation = string;

export type OwnerId = string;

export interface PackageAggregation {
}
export interface PackageAggregationResponse {
}
export type PackageArchitecture = string;

export type PackageEpoch = number;

export interface PackageFilter {
}
export type PackageFilterList = Array<unknown>;
export type PackageManager = string;

export type PackageName = string;

export type PackageRelease = string;

export type PackageSortBy = string;

export type PackageType = string;

export type PackageVersion = string;

export interface PackageVulnerabilityDetails {
}
export type Path = string;

export type PathList = Array<unknown>;
export interface PeriodicScanConfiguration {
}
export type PeriodicScanFrequency = never;
export interface Permission {
}
export type Permissions = Array<unknown>;
export type Platform = string;

export type PlatformFilterList = Array<unknown>;
export type PlatformVersion = string;

export type Port = number;

export interface PortRange {
}
export interface PortRangeFilter {
}
export type PortRangeFilterList = Array<unknown>;
export type Product = string;

export interface ProjectCodeSecurityScanConfiguration {
}
export interface ProjectContinuousIntegrationScanConfiguration {
}
export type ProjectContinuousIntegrationScanConfigurationList = Array<unknown>;
export type ProjectId = string;

export interface ProjectPeriodicScanConfiguration {
}
export type ProjectPeriodicScanConfigurationList = Array<unknown>;
export type ProjectSelectionScope = never;
export type Reason = string;

export interface Recommendation {
}
export type ReferenceUrls = Array<unknown>;
export type RelatedVulnerabilities = Array<unknown>;
export type RelatedVulnerability = string;

export type RelationshipStatus = string;

export interface Remediation {
}
export type ReportFormat = string;

export type ReportId = string;

export type ReportingErrorCode = string;

export type ReportTargetAccounts = Array<unknown>;
export interface RepositoryAggregation {
}
export interface RepositoryAggregationResponse {
}
export type RepositorySortBy = string;

export interface ResetEncryptionKeyRequest {
}
export interface ResetEncryptionKeyResponse {
}
export interface Resource {
}
export interface ResourceDetails {
}
export interface ResourceFilterCriteria {
}
export type ResourceId = string;

export type ResourceIdFilterList = Array<unknown>;
export type ResourceList = Array<unknown>;
export type ResourceMapComparison = string;

export interface ResourceMapFilter {
}
export type ResourceMapFilterList = Array<unknown>;
export interface ResourceNotFoundException {
}
export interface ResourceScanMetadata {
}
export type ResourceScanType = string;

export interface ResourceState {
}
export interface ResourceStatus {
}
export type ResourceStringComparison = string;

export interface ResourceStringFilter {
}
export type ResourceStringFilterList = Array<unknown>;
export type ResourceStringInput = string;

export type ResourceTagFilterList = Array<unknown>;
export type ResourceType = string;

export type RiskScore = number;

export type RuleId = string;

export type RuleSetCategories = Array<unknown>;
export type RuleSetCategory = never;
export type Runtime = string;

export type SbomReportFormat = string;

export type ScanConfigurationArn = string;

export type ScanConfigurationName = string;

export type ScanMode = string;

export interface ScanStatus {
}
export type ScanStatusCode = string;

export type ScanStatusReason = string;

export type ScanType = string;

export type Schedule = never;
export interface ScopeSettings {
}
export interface SearchVulnerabilitiesFilterCriteria {
}
export interface SearchVulnerabilitiesRequest {
}
export interface SearchVulnerabilitiesResponse {
}
export type SecurityGroupId = string;

export type SecurityGroupIdList = Array<unknown>;
export interface SendCisSessionHealthRequest {
}
export interface SendCisSessionHealthResponse {
}
export interface SendCisSessionTelemetryRequest {
}
export interface SendCisSessionTelemetryResponse {
}
export type Service = string;

export interface ServiceQuotaExceededException {
}
export type Severity = string;

export interface SeverityCounts {
}
export interface SortCriteria {
}
export type SortField = string;

export type SortOrder = string;

export type SourceLayerHash = string;

export interface StartCisSessionMessage {
}
export interface StartCisSessionRequest {
}
export interface StartCisSessionResponse {
}
export interface StartCodeSecurityScanRequest {
}
export interface StartCodeSecurityScanResponse {
}
export interface State {
}
export type Status = string;

export interface StatusCounts {
}
export interface Step {
}
export type StepList = Array<unknown>;
export interface StopCisMessageProgress {
}
export interface StopCisSessionMessage {
}
export interface StopCisSessionRequest {
}
export interface StopCisSessionResponse {
}
export type StopCisSessionStatus = never;
export type StringComparison = string;

export interface StringFilter {
}
export type StringFilterList = Array<unknown>;
export type StringInput = string;

export type StringList = Array<unknown>;
export type SubnetId = string;

export type SubnetIdList = Array<unknown>;
export interface SuccessfulAssociationResult {
}
export type SuccessfulAssociationResultList = Array<unknown>;
export interface SuggestedFix {
}
export type SuggestedFixes = Array<unknown>;
export type TagComparison = never;
export interface TagFilter {
}
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagList = Array<unknown>;
export type TagMap = Record<string, unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValueList = Array<unknown>;
export type Target = string;

export type TargetAccount = string;

export type TargetAccountList = Array<unknown>;
export type TargetResourceTags = Record<string, unknown>;
export type TargetResourceTagsKey = string;

export type TargetResourceTagsValue = string;

export type Targets = Array<unknown>;
export type TargetStatusFilterList = Array<unknown>;
export type TargetStatusReasonFilterList = Array<unknown>;
export interface ThrottlingException {
}
export interface Time {
}
export type TimeOfDay = string;

export type Timezone = string;

export interface TitleAggregation {
}
export interface TitleAggregationResponse {
}
export type TitleFilterList = Array<unknown>;
export type TitleSortBy = string;

export type Tool = string;

export type Tools = Array<unknown>;
export type Ttp = string;

export type Ttps = Array<unknown>;
export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateCisScanConfigurationRequest {
}
export interface UpdateCisScanConfigurationResponse {
}
export interface UpdateCisTargets {
}
export interface UpdateCodeSecurityIntegrationRequest {
}
export interface UpdateCodeSecurityIntegrationResponse {
}
export interface UpdateCodeSecurityScanConfigurationRequest {
}
export interface UpdateCodeSecurityScanConfigurationResponse {
}
export interface UpdateConfigurationRequest {
}
export interface UpdateConfigurationResponse {
}
export interface UpdateEc2DeepInspectionConfigurationRequest {
}
export interface UpdateEc2DeepInspectionConfigurationResponse {
}
export interface UpdateEncryptionKeyRequest {
}
export interface UpdateEncryptionKeyResponse {
}
export interface UpdateFilterRequest {
}
export interface UpdateFilterResponse {
}
export interface UpdateGitHubIntegrationDetail {
}
export interface UpdateGitLabSelfManagedIntegrationDetail {
}
export type UpdateIntegrationDetails = never;
export interface UpdateOrganizationConfigurationRequest {
}
export interface UpdateOrganizationConfigurationResponse {
}
export interface UpdateOrgEc2DeepInspectionConfigurationRequest {
}
export interface UpdateOrgEc2DeepInspectionConfigurationResponse {
}
export interface Usage {
}
export type UsageAccountId = string;

export type UsageAccountIdList = Array<unknown>;
export type UsageList = Array<unknown>;
export interface UsageTotal {
}
export type UsageTotalList = Array<unknown>;
export type UsageType = string;

export type UsageValue = number;

export type UUID = string;

export interface ValidationException {
}
export interface ValidationExceptionField {
}
export type ValidationExceptionFields = Array<unknown>;
export type ValidationExceptionReason = string;

export type Vendor = string;

export type VendorCreatedAt = Date | string;

export type VendorSeverity = string;

export type VendorUpdatedAt = Date | string;

export type Version = string;

export type VpcId = string;

export type Vulnerabilities = Array<unknown>;
export interface Vulnerability {
}
export type VulnerabilityDescription = string;

export type VulnerabilityId = string;

export type VulnerabilityIdList = Array<unknown>;
export type VulnerabilityReferenceUrl = string;

export type VulnerabilityReferenceUrls = Array<unknown>;
export type VulnerabilitySource = string;

export type VulnerabilitySourceUrl = string;

export interface VulnerablePackage {
}
export type VulnerablePackageList = Array<unknown>;
export type VulnerablePackageRemediation = string;

export type VulnId = string;

export type VulnIdList = Array<unknown>;
export interface WeeklySchedule {
}
export declare namespace AssociateMember {
  export type Input = AssociateMemberRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchAssociateCodeSecurityScanConfiguration {
  export type Input = BatchAssociateCodeSecurityScanConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchDisassociateCodeSecurityScanConfiguration {
  export type Input = BatchDisassociateCodeSecurityScanConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetAccountStatus {
  export type Input = BatchGetAccountStatusRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetCodeSnippet {
  export type Input = BatchGetCodeSnippetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetFindingDetails {
  export type Input = BatchGetFindingDetailsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetFreeTrialInfo {
  export type Input = BatchGetFreeTrialInfoRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetMemberEc2DeepInspectionStatus {
  export type Input = BatchGetMemberEc2DeepInspectionStatusRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchUpdateMemberEc2DeepInspectionStatus {
  export type Input = BatchUpdateMemberEc2DeepInspectionStatusRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelFindingsReport {
  export type Input = CancelFindingsReportRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelSbomExport {
  export type Input = CancelSbomExportRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCisScanConfiguration {
  export type Input = CreateCisScanConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCodeSecurityIntegration {
  export type Input = CreateCodeSecurityIntegrationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCodeSecurityScanConfiguration {
  export type Input = CreateCodeSecurityScanConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateFilter {
  export type Input = CreateFilterRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateFindingsReport {
  export type Input = CreateFindingsReportRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSbomExport {
  export type Input = CreateSbomExportRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCisScanConfiguration {
  export type Input = DeleteCisScanConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCodeSecurityIntegration {
  export type Input = DeleteCodeSecurityIntegrationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCodeSecurityScanConfiguration {
  export type Input = DeleteCodeSecurityScanConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteFilter {
  export type Input = DeleteFilterRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationConfiguration {
  export type Input = DescribeOrganizationConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Disable {
  export type Input = DisableRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisableDelegatedAdminAccount {
  export type Input = DisableDelegatedAdminAccountRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateMember {
  export type Input = DisassociateMemberRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Enable {
  export type Input = EnableRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace EnableDelegatedAdminAccount {
  export type Input = EnableDelegatedAdminAccountRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCisScanReport {
  export type Input = GetCisScanReportRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCisScanResultDetails {
  export type Input = GetCisScanResultDetailsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetClustersForImage {
  export type Input = GetClustersForImageRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCodeSecurityIntegration {
  export type Input = GetCodeSecurityIntegrationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCodeSecurityScan {
  export type Input = GetCodeSecurityScanRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCodeSecurityScanConfiguration {
  export type Input = GetCodeSecurityScanConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConfiguration {
  export type Input = GetConfigurationRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetDelegatedAdminAccount {
  export type Input = GetDelegatedAdminAccountRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEc2DeepInspectionConfiguration {
  export type Input = GetEc2DeepInspectionConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetEncryptionKey {
  export type Input = GetEncryptionKeyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFindingsReportStatus {
  export type Input = GetFindingsReportStatusRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMember {
  export type Input = GetMemberRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSbomExport {
  export type Input = GetSbomExportRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAccountPermissions {
  export type Input = ListAccountPermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCisScanConfigurations {
  export type Input = ListCisScanConfigurationsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCisScanResultsAggregatedByChecks {
  export type Input = ListCisScanResultsAggregatedByChecksRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCisScanResultsAggregatedByTargetResource {
  export type Input = ListCisScanResultsAggregatedByTargetResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCisScans {
  export type Input = ListCisScansRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCodeSecurityIntegrations {
  export type Input = ListCodeSecurityIntegrationsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCodeSecurityScanConfigurationAssociations {
  export type Input = ListCodeSecurityScanConfigurationAssociationsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCodeSecurityScanConfigurations {
  export type Input = ListCodeSecurityScanConfigurationsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCoverage {
  export type Input = ListCoverageRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCoverageStatistics {
  export type Input = ListCoverageStatisticsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDelegatedAdminAccounts {
  export type Input = ListDelegatedAdminAccountsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFilters {
  export type Input = ListFiltersRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFindingAggregations {
  export type Input = ListFindingAggregationsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFindings {
  export type Input = ListFindingsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMembers {
  export type Input = ListMembersRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListUsageTotals {
  export type Input = ListUsageTotalsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResetEncryptionKey {
  export type Input = ResetEncryptionKeyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchVulnerabilities {
  export type Input = SearchVulnerabilitiesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendCisSessionHealth {
  export type Input = SendCisSessionHealthRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendCisSessionTelemetry {
  export type Input = SendCisSessionTelemetryRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartCisSession {
  export type Input = StartCisSessionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartCodeSecurityScan {
  export type Input = StartCodeSecurityScanRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopCisSession {
  export type Input = StopCisSessionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCisScanConfiguration {
  export type Input = UpdateCisScanConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCodeSecurityIntegration {
  export type Input = UpdateCodeSecurityIntegrationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCodeSecurityScanConfiguration {
  export type Input = UpdateCodeSecurityScanConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateConfiguration {
  export type Input = UpdateConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEc2DeepInspectionConfiguration {
  export type Input = UpdateEc2DeepInspectionConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEncryptionKey {
  export type Input = UpdateEncryptionKeyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateFilter {
  export type Input = UpdateFilterRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateOrgEc2DeepInspectionConfiguration {
  export type Input = UpdateOrgEc2DeepInspectionConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateOrganizationConfiguration {
  export type Input = UpdateOrganizationConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

