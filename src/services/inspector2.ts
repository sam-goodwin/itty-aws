import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class Inspector2 extends AWSServiceClient {
  associateMember(
    input: AssociateMemberRequest,
  ): Effect.Effect<
    AssociateMemberResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchAssociateCodeSecurityScanConfiguration(
    input: BatchAssociateCodeSecurityScanConfigurationRequest,
  ): Effect.Effect<
    BatchAssociateCodeSecurityScanConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchDisassociateCodeSecurityScanConfiguration(
    input: BatchDisassociateCodeSecurityScanConfigurationRequest,
  ): Effect.Effect<
    BatchDisassociateCodeSecurityScanConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchGetAccountStatus(
    input: BatchGetAccountStatusRequest,
  ): Effect.Effect<
    BatchGetAccountStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchGetCodeSnippet(
    input: BatchGetCodeSnippetRequest,
  ): Effect.Effect<
    BatchGetCodeSnippetResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchGetFindingDetails(
    input: BatchGetFindingDetailsRequest,
  ): Effect.Effect<
    BatchGetFindingDetailsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchGetFreeTrialInfo(
    input: BatchGetFreeTrialInfoRequest,
  ): Effect.Effect<
    BatchGetFreeTrialInfoResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchGetMemberEc2DeepInspectionStatus(
    input: BatchGetMemberEc2DeepInspectionStatusRequest,
  ): Effect.Effect<
    BatchGetMemberEc2DeepInspectionStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchUpdateMemberEc2DeepInspectionStatus(
    input: BatchUpdateMemberEc2DeepInspectionStatusRequest,
  ): Effect.Effect<
    BatchUpdateMemberEc2DeepInspectionStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelFindingsReport(
    input: CancelFindingsReportRequest,
  ): Effect.Effect<
    CancelFindingsReportResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelSbomExport(
    input: CancelSbomExportRequest,
  ): Effect.Effect<
    CancelSbomExportResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createCisScanConfiguration(
    input: CreateCisScanConfigurationRequest,
  ): Effect.Effect<
    CreateCisScanConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createCodeSecurityIntegration(
    input: CreateCodeSecurityIntegrationRequest,
  ): Effect.Effect<
    CreateCodeSecurityIntegrationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createCodeSecurityScanConfiguration(
    input: CreateCodeSecurityScanConfigurationRequest,
  ): Effect.Effect<
    CreateCodeSecurityScanConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createFilter(
    input: CreateFilterRequest,
  ): Effect.Effect<
    CreateFilterResponse,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createFindingsReport(
    input: CreateFindingsReportRequest,
  ): Effect.Effect<
    CreateFindingsReportResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createSbomExport(
    input: CreateSbomExportRequest,
  ): Effect.Effect<
    CreateSbomExportResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCisScanConfiguration(
    input: DeleteCisScanConfigurationRequest,
  ): Effect.Effect<
    DeleteCisScanConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCodeSecurityIntegration(
    input: DeleteCodeSecurityIntegrationRequest,
  ): Effect.Effect<
    DeleteCodeSecurityIntegrationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCodeSecurityScanConfiguration(
    input: DeleteCodeSecurityScanConfigurationRequest,
  ): Effect.Effect<
    DeleteCodeSecurityScanConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteFilter(
    input: DeleteFilterRequest,
  ): Effect.Effect<
    DeleteFilterResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeOrganizationConfiguration(
    input: DescribeOrganizationConfigurationRequest,
  ): Effect.Effect<
    DescribeOrganizationConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disable(
    input: DisableRequest,
  ): Effect.Effect<
    DisableResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disableDelegatedAdminAccount(
    input: DisableDelegatedAdminAccountRequest,
  ): Effect.Effect<
    DisableDelegatedAdminAccountResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateMember(
    input: DisassociateMemberRequest,
  ): Effect.Effect<
    DisassociateMemberResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  enable(
    input: EnableRequest,
  ): Effect.Effect<
    EnableResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  enableDelegatedAdminAccount(
    input: EnableDelegatedAdminAccountRequest,
  ): Effect.Effect<
    EnableDelegatedAdminAccountResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCisScanReport(
    input: GetCisScanReportRequest,
  ): Effect.Effect<
    GetCisScanReportResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCisScanResultDetails(
    input: GetCisScanResultDetailsRequest,
  ): Effect.Effect<
    GetCisScanResultDetailsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getClustersForImage(
    input: GetClustersForImageRequest,
  ): Effect.Effect<
    GetClustersForImageResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCodeSecurityIntegration(
    input: GetCodeSecurityIntegrationRequest,
  ): Effect.Effect<
    GetCodeSecurityIntegrationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCodeSecurityScan(
    input: GetCodeSecurityScanRequest,
  ): Effect.Effect<
    GetCodeSecurityScanResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCodeSecurityScanConfiguration(
    input: GetCodeSecurityScanConfigurationRequest,
  ): Effect.Effect<
    GetCodeSecurityScanConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getConfiguration(
    input: GetConfigurationRequest,
  ): Effect.Effect<
    GetConfigurationResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getDelegatedAdminAccount(
    input: GetDelegatedAdminAccountRequest,
  ): Effect.Effect<
    GetDelegatedAdminAccountResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEc2DeepInspectionConfiguration(
    input: GetEc2DeepInspectionConfigurationRequest,
  ): Effect.Effect<
    GetEc2DeepInspectionConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getEncryptionKey(
    input: GetEncryptionKeyRequest,
  ): Effect.Effect<
    GetEncryptionKeyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getFindingsReportStatus(
    input: GetFindingsReportStatusRequest,
  ): Effect.Effect<
    GetFindingsReportStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMember(
    input: GetMemberRequest,
  ): Effect.Effect<
    GetMemberResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSbomExport(
    input: GetSbomExportRequest,
  ): Effect.Effect<
    GetSbomExportResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAccountPermissions(
    input: ListAccountPermissionsRequest,
  ): Effect.Effect<
    ListAccountPermissionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCisScanConfigurations(
    input: ListCisScanConfigurationsRequest,
  ): Effect.Effect<
    ListCisScanConfigurationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCisScanResultsAggregatedByChecks(
    input: ListCisScanResultsAggregatedByChecksRequest,
  ): Effect.Effect<
    ListCisScanResultsAggregatedByChecksResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCisScanResultsAggregatedByTargetResource(
    input: ListCisScanResultsAggregatedByTargetResourceRequest,
  ): Effect.Effect<
    ListCisScanResultsAggregatedByTargetResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCisScans(
    input: ListCisScansRequest,
  ): Effect.Effect<
    ListCisScansResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCodeSecurityIntegrations(
    input: ListCodeSecurityIntegrationsRequest,
  ): Effect.Effect<
    ListCodeSecurityIntegrationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCodeSecurityScanConfigurationAssociations(
    input: ListCodeSecurityScanConfigurationAssociationsRequest,
  ): Effect.Effect<
    ListCodeSecurityScanConfigurationAssociationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCodeSecurityScanConfigurations(
    input: ListCodeSecurityScanConfigurationsRequest,
  ): Effect.Effect<
    ListCodeSecurityScanConfigurationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCoverage(
    input: ListCoverageRequest,
  ): Effect.Effect<
    ListCoverageResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCoverageStatistics(
    input: ListCoverageStatisticsRequest,
  ): Effect.Effect<
    ListCoverageStatisticsResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDelegatedAdminAccounts(
    input: ListDelegatedAdminAccountsRequest,
  ): Effect.Effect<
    ListDelegatedAdminAccountsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFilters(
    input: ListFiltersRequest,
  ): Effect.Effect<
    ListFiltersResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFindingAggregations(
    input: ListFindingAggregationsRequest,
  ): Effect.Effect<
    ListFindingAggregationsResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFindings(
    input: ListFindingsRequest,
  ): Effect.Effect<
    ListFindingsResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listMembers(
    input: ListMembersRequest,
  ): Effect.Effect<
    ListMembersResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listUsageTotals(
    input: ListUsageTotalsRequest,
  ): Effect.Effect<
    ListUsageTotalsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  resetEncryptionKey(
    input: ResetEncryptionKeyRequest,
  ): Effect.Effect<
    ResetEncryptionKeyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchVulnerabilities(
    input: SearchVulnerabilitiesRequest,
  ): Effect.Effect<
    SearchVulnerabilitiesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  sendCisSessionHealth(
    input: SendCisSessionHealthRequest,
  ): Effect.Effect<
    SendCisSessionHealthResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  sendCisSessionTelemetry(
    input: SendCisSessionTelemetryRequest,
  ): Effect.Effect<
    SendCisSessionTelemetryResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startCisSession(
    input: StartCisSessionRequest,
  ): Effect.Effect<
    StartCisSessionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startCodeSecurityScan(
    input: StartCodeSecurityScanRequest,
  ): Effect.Effect<
    StartCodeSecurityScanResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopCisSession(
    input: StopCisSessionRequest,
  ): Effect.Effect<
    StopCisSessionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateCisScanConfiguration(
    input: UpdateCisScanConfigurationRequest,
  ): Effect.Effect<
    UpdateCisScanConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateCodeSecurityIntegration(
    input: UpdateCodeSecurityIntegrationRequest,
  ): Effect.Effect<
    UpdateCodeSecurityIntegrationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateCodeSecurityScanConfiguration(
    input: UpdateCodeSecurityScanConfigurationRequest,
  ): Effect.Effect<
    UpdateCodeSecurityScanConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateConfiguration(
    input: UpdateConfigurationRequest,
  ): Effect.Effect<
    UpdateConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEc2DeepInspectionConfiguration(
    input: UpdateEc2DeepInspectionConfigurationRequest,
  ): Effect.Effect<
    UpdateEc2DeepInspectionConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEncryptionKey(
    input: UpdateEncryptionKeyRequest,
  ): Effect.Effect<
    UpdateEncryptionKeyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateFilter(
    input: UpdateFilterRequest,
  ): Effect.Effect<
    UpdateFilterResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateOrganizationConfiguration(
    input: UpdateOrganizationConfigurationRequest,
  ): Effect.Effect<
    UpdateOrganizationConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateOrgEc2DeepInspectionConfiguration(
    input: UpdateOrgEc2DeepInspectionConfigurationRequest,
  ): Effect.Effect<
    UpdateOrgEc2DeepInspectionConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface Account {
  accountId: string;
  status: string;
  resourceStatus: ResourceStatus;
}
export interface AccountAggregation {
  findingType?: string;
  resourceType?: string;
  sortOrder?: string;
  sortBy?: string;
}
export interface AccountAggregationResponse {
  accountId?: string;
  severityCounts?: SeverityCounts;
  exploitAvailableCount?: number;
  fixAvailableCount?: number;
}
export type AccountId = string;

export type AccountIdFilterList = Array<CisStringFilter>;
export type AccountIdSet = Array<string>;
export type AccountList = Array<Account>;
export type AccountSortBy = string;

export interface AccountState {
  accountId: string;
  state: State;
  resourceState: ResourceState;
}
export type AccountStateList = Array<AccountState>;
export type AggCounts = number;

export type AggregationFindingType = string;

interface _AggregationRequest {
  accountAggregation?: AccountAggregation;
  amiAggregation?: AmiAggregation;
  awsEcrContainerAggregation?: AwsEcrContainerAggregation;
  ec2InstanceAggregation?: Ec2InstanceAggregation;
  findingTypeAggregation?: FindingTypeAggregation;
  imageLayerAggregation?: ImageLayerAggregation;
  packageAggregation?: PackageAggregation;
  repositoryAggregation?: RepositoryAggregation;
  titleAggregation?: TitleAggregation;
  lambdaLayerAggregation?: LambdaLayerAggregation;
  lambdaFunctionAggregation?: LambdaFunctionAggregation;
  codeRepositoryAggregation?: CodeRepositoryAggregation;
}

export type AggregationRequest =
  | (_AggregationRequest & { accountAggregation: AccountAggregation })
  | (_AggregationRequest & { amiAggregation: AmiAggregation })
  | (_AggregationRequest & {
      awsEcrContainerAggregation: AwsEcrContainerAggregation;
    })
  | (_AggregationRequest & { ec2InstanceAggregation: Ec2InstanceAggregation })
  | (_AggregationRequest & { findingTypeAggregation: FindingTypeAggregation })
  | (_AggregationRequest & { imageLayerAggregation: ImageLayerAggregation })
  | (_AggregationRequest & { packageAggregation: PackageAggregation })
  | (_AggregationRequest & { repositoryAggregation: RepositoryAggregation })
  | (_AggregationRequest & { titleAggregation: TitleAggregation })
  | (_AggregationRequest & { lambdaLayerAggregation: LambdaLayerAggregation })
  | (_AggregationRequest & {
      lambdaFunctionAggregation: LambdaFunctionAggregation;
    })
  | (_AggregationRequest & {
      codeRepositoryAggregation: CodeRepositoryAggregation;
    });
export type AggregationResourceType = string;

interface _AggregationResponse {
  accountAggregation?: AccountAggregationResponse;
  amiAggregation?: AmiAggregationResponse;
  awsEcrContainerAggregation?: AwsEcrContainerAggregationResponse;
  ec2InstanceAggregation?: Ec2InstanceAggregationResponse;
  findingTypeAggregation?: FindingTypeAggregationResponse;
  imageLayerAggregation?: ImageLayerAggregationResponse;
  packageAggregation?: PackageAggregationResponse;
  repositoryAggregation?: RepositoryAggregationResponse;
  titleAggregation?: TitleAggregationResponse;
  lambdaLayerAggregation?: LambdaLayerAggregationResponse;
  lambdaFunctionAggregation?: LambdaFunctionAggregationResponse;
  codeRepositoryAggregation?: CodeRepositoryAggregationResponse;
}

export type AggregationResponse =
  | (_AggregationResponse & { accountAggregation: AccountAggregationResponse })
  | (_AggregationResponse & { amiAggregation: AmiAggregationResponse })
  | (_AggregationResponse & {
      awsEcrContainerAggregation: AwsEcrContainerAggregationResponse;
    })
  | (_AggregationResponse & {
      ec2InstanceAggregation: Ec2InstanceAggregationResponse;
    })
  | (_AggregationResponse & {
      findingTypeAggregation: FindingTypeAggregationResponse;
    })
  | (_AggregationResponse & {
      imageLayerAggregation: ImageLayerAggregationResponse;
    })
  | (_AggregationResponse & { packageAggregation: PackageAggregationResponse })
  | (_AggregationResponse & {
      repositoryAggregation: RepositoryAggregationResponse;
    })
  | (_AggregationResponse & { titleAggregation: TitleAggregationResponse })
  | (_AggregationResponse & {
      lambdaLayerAggregation: LambdaLayerAggregationResponse;
    })
  | (_AggregationResponse & {
      lambdaFunctionAggregation: LambdaFunctionAggregationResponse;
    })
  | (_AggregationResponse & {
      codeRepositoryAggregation: CodeRepositoryAggregationResponse;
    });
export type AggregationResponseList = Array<AggregationResponse>;
export type AggregationType = string;

export interface AmiAggregation {
  amis?: Array<StringFilter>;
  sortOrder?: string;
  sortBy?: string;
}
export interface AmiAggregationResponse {
  ami: string;
  accountId?: string;
  severityCounts?: SeverityCounts;
  affectedInstances?: number;
}
export type AmiId = string;

export type AmiSortBy = string;

export type Architecture = string;

export type ArchitectureList = Array<string>;
export type Arn = string;

export interface AssociateConfigurationRequest {
  scanConfigurationArn: string;
  resource: CodeSecurityResource;
}
export type AssociateConfigurationRequestList =
  Array<AssociateConfigurationRequest>;
export interface AssociateMemberRequest {
  accountId: string;
}
export interface AssociateMemberResponse {
  accountId: string;
}
export type AssociationResultStatusCode =
  | "INTERNAL_ERROR"
  | "ACCESS_DENIED"
  | "SCAN_CONFIGURATION_NOT_FOUND"
  | "INVALID_INPUT"
  | "RESOURCE_NOT_FOUND"
  | "QUOTA_EXCEEDED";
export type AssociationResultStatusMessage = string;

export interface AtigData {
  firstSeen?: Date | string;
  lastSeen?: Date | string;
  targets?: Array<string>;
  ttps?: Array<string>;
}
export type AuthorizationUrl = string;

export interface AutoEnable {
  ec2: boolean;
  ecr: boolean;
  lambda?: boolean;
  lambdaCode?: boolean;
  codeRepository?: boolean;
}
export interface AwsEc2InstanceDetails {
  type?: string;
  imageId?: string;
  ipV4Addresses?: Array<string>;
  ipV6Addresses?: Array<string>;
  keyName?: string;
  iamInstanceProfileArn?: string;
  vpcId?: string;
  subnetId?: string;
  launchedAt?: Date | string;
  platform?: string;
}
export interface AwsEcrContainerAggregation {
  resourceIds?: Array<StringFilter>;
  imageShas?: Array<StringFilter>;
  repositories?: Array<StringFilter>;
  architectures?: Array<StringFilter>;
  imageTags?: Array<StringFilter>;
  sortOrder?: string;
  sortBy?: string;
  lastInUseAt?: Array<DateFilter>;
  inUseCount?: Array<NumberFilter>;
}
export interface AwsEcrContainerAggregationResponse {
  resourceId: string;
  imageSha?: string;
  repository?: string;
  architecture?: string;
  imageTags?: Array<string>;
  accountId?: string;
  severityCounts?: SeverityCounts;
  lastInUseAt?: Date | string;
  inUseCount?: number;
}
export interface AwsEcrContainerImageDetails {
  repositoryName: string;
  imageTags?: Array<string>;
  pushedAt?: Date | string;
  author?: string;
  architecture?: string;
  imageHash: string;
  registry: string;
  platform?: string;
  lastInUseAt?: Date | string;
  inUseCount?: number;
}
export type AwsEcrContainerSortBy = string;

export interface AwsEcsMetadataDetails {
  detailsGroup: string;
  taskDefinitionArn: string;
}
export interface AwsEksMetadataDetails {
  namespace?: string;
  workloadInfoList?: Array<AwsEksWorkloadInfo>;
}
export interface AwsEksWorkloadInfo {
  name: string;
  type: string;
}
export type AwsEksWorkloadInfoList = Array<AwsEksWorkloadInfo>;
export interface AwsLambdaFunctionDetails {
  functionName: string;
  runtime: string;
  codeSha256: string;
  version: string;
  executionRoleArn: string;
  layers?: Array<string>;
  vpcConfig?: LambdaVpcConfig;
  packageType?: string;
  architectures?: Array<string>;
  lastModifiedAt?: Date | string;
}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly message: string;
}> {}
export interface BatchAssociateCodeSecurityScanConfigurationRequest {
  associateConfigurationRequests: Array<AssociateConfigurationRequest>;
}
export interface BatchAssociateCodeSecurityScanConfigurationResponse {
  failedAssociations?: Array<FailedAssociationResult>;
  successfulAssociations?: Array<SuccessfulAssociationResult>;
}
export interface BatchDisassociateCodeSecurityScanConfigurationRequest {
  disassociateConfigurationRequests: Array<DisassociateConfigurationRequest>;
}
export interface BatchDisassociateCodeSecurityScanConfigurationResponse {
  failedAssociations?: Array<FailedAssociationResult>;
  successfulAssociations?: Array<SuccessfulAssociationResult>;
}
export interface BatchGetAccountStatusRequest {
  accountIds?: Array<string>;
}
export interface BatchGetAccountStatusResponse {
  accounts: Array<AccountState>;
  failedAccounts?: Array<FailedAccount>;
}
export interface BatchGetCodeSnippetRequest {
  findingArns: Array<string>;
}
export interface BatchGetCodeSnippetResponse {
  codeSnippetResults?: Array<CodeSnippetResult>;
  errors?: Array<CodeSnippetError>;
}
export interface BatchGetFindingDetailsRequest {
  findingArns: Array<string>;
}
export interface BatchGetFindingDetailsResponse {
  findingDetails?: Array<FindingDetail>;
  errors?: Array<FindingDetailsError>;
}
export interface BatchGetFreeTrialInfoRequest {
  accountIds: Array<string>;
}
export interface BatchGetFreeTrialInfoResponse {
  accounts: Array<FreeTrialAccountInfo>;
  failedAccounts: Array<FreeTrialInfoError>;
}
export interface BatchGetMemberEc2DeepInspectionStatusRequest {
  accountIds?: Array<string>;
}
export interface BatchGetMemberEc2DeepInspectionStatusResponse {
  accountIds?: Array<MemberAccountEc2DeepInspectionStatusState>;
  failedAccountIds?: Array<FailedMemberAccountEc2DeepInspectionStatusState>;
}
export interface BatchUpdateMemberEc2DeepInspectionStatusRequest {
  accountIds: Array<MemberAccountEc2DeepInspectionStatus>;
}
export interface BatchUpdateMemberEc2DeepInspectionStatusResponse {
  accountIds?: Array<MemberAccountEc2DeepInspectionStatusState>;
  failedAccountIds?: Array<FailedMemberAccountEc2DeepInspectionStatusState>;
}
export type BenchmarkProfile = string;

export type BenchmarkVersion = string;

export interface CancelFindingsReportRequest {
  reportId: string;
}
export interface CancelFindingsReportResponse {
  reportId: string;
}
export interface CancelSbomExportRequest {
  reportId: string;
}
export interface CancelSbomExportResponse {
  reportId?: string;
}
export type CheckCount = number;

export type CheckIdFilterList = Array<CisStringFilter>;
export type CisaAction = string;

export type CisAccountIdList = Array<string>;
export interface CisaData {
  dateAdded?: Date | string;
  dateDue?: Date | string;
  action?: string;
}
export type CisaDateAdded = Date | string;

export type CisaDateDue = Date | string;

export interface CisCheckAggregation {
  scanArn: string;
  checkId?: string;
  title?: string;
  checkDescription?: string;
  level?: CisSecurityLevel;
  accountId?: string;
  statusCounts?: StatusCounts;
  platform?: string;
}
export type CisCheckAggregationList = Array<CisCheckAggregation>;
export interface CisDateFilter {
  earliestScanStartTime?: Date | string;
  latestScanStartTime?: Date | string;
}
export type CisFindingArn = string;

export type CisFindingArnFilterList = Array<CisStringFilter>;
export type CisFindingStatus = "PASSED" | "FAILED" | "SKIPPED";
export type CisFindingStatusComparison = "EQUALS";
export interface CisFindingStatusFilter {
  comparison: CisFindingStatusComparison;
  value: CisFindingStatus;
}
export type CisFindingStatusFilterList = Array<CisFindingStatusFilter>;
export interface CisNumberFilter {
  upperInclusive?: number;
  lowerInclusive?: number;
}
export type CisNumberFilterList = Array<CisNumberFilter>;
export type CisOwnerId = string;

export type CisReportFormat = "PDF" | "CSV";
export type CisReportStatus = "SUCCEEDED" | "FAILED" | "IN_PROGRESS";
export type CisResultStatus = "PASSED" | "FAILED" | "SKIPPED";
export type CisResultStatusComparison = "EQUALS";
export interface CisResultStatusFilter {
  comparison: CisResultStatusComparison;
  value: CisResultStatus;
}
export type CisResultStatusFilterList = Array<CisResultStatusFilter>;
export type CisRuleDetails = Uint8Array | string;

export type CisRuleStatus =
  | "FAILED"
  | "PASSED"
  | "NOT_EVALUATED"
  | "INFORMATIONAL"
  | "UNKNOWN"
  | "NOT_APPLICABLE"
  | "ERROR";
export interface CisScan {
  scanArn: string;
  scanConfigurationArn: string;
  status?: CisScanStatus;
  scanName?: string;
  scanDate?: Date | string;
  failedChecks?: number;
  totalChecks?: number;
  targets?: CisTargets;
  scheduledBy?: string;
  securityLevel?: CisSecurityLevel;
}
export type CisScanArn = string;

export type CisScanArnFilterList = Array<CisStringFilter>;
export interface CisScanConfiguration {
  scanConfigurationArn: string;
  ownerId?: string;
  scanName?: string;
  securityLevel?: CisSecurityLevel;
  schedule?: Schedule;
  targets?: CisTargets;
  tags?: Record<string, string>;
}
export type CisScanConfigurationArn = string;

export type CisScanConfigurationArnFilterList = Array<CisStringFilter>;
export type CisScanConfigurationList = Array<CisScanConfiguration>;
export type CisScanConfigurationsSortBy =
  | "SCAN_NAME"
  | "SCAN_CONFIGURATION_ARN";
export type CisScanDateFilterList = Array<CisDateFilter>;
export type CisScanList = Array<CisScan>;
export type CisScanName = string;

export type CisScanNameFilterList = Array<CisStringFilter>;
export interface CisScanResultDetails {
  scanArn: string;
  accountId?: string;
  targetResourceId?: string;
  platform?: string;
  status?: CisFindingStatus;
  statusReason?: string;
  checkId?: string;
  title?: string;
  checkDescription?: string;
  remediation?: string;
  level?: CisSecurityLevel;
  findingArn?: string;
}
export interface CisScanResultDetailsFilterCriteria {
  findingStatusFilters?: Array<CisFindingStatusFilter>;
  checkIdFilters?: Array<CisStringFilter>;
  titleFilters?: Array<CisStringFilter>;
  securityLevelFilters?: Array<CisSecurityLevelFilter>;
  findingArnFilters?: Array<CisStringFilter>;
}
export type CisScanResultDetailsList = Array<CisScanResultDetails>;
export type CisScanResultDetailsSortBy = "CHECK_ID" | "STATUS";
export interface CisScanResultsAggregatedByChecksFilterCriteria {
  accountIdFilters?: Array<CisStringFilter>;
  checkIdFilters?: Array<CisStringFilter>;
  titleFilters?: Array<CisStringFilter>;
  platformFilters?: Array<CisStringFilter>;
  failedResourcesFilters?: Array<CisNumberFilter>;
  securityLevelFilters?: Array<CisSecurityLevelFilter>;
}
export type CisScanResultsAggregatedByChecksSortBy =
  | "CHECK_ID"
  | "TITLE"
  | "PLATFORM"
  | "FAILED_COUNTS"
  | "SECURITY_LEVEL";
export interface CisScanResultsAggregatedByTargetResourceFilterCriteria {
  accountIdFilters?: Array<CisStringFilter>;
  statusFilters?: Array<CisResultStatusFilter>;
  checkIdFilters?: Array<CisStringFilter>;
  targetResourceIdFilters?: Array<CisStringFilter>;
  targetResourceTagFilters?: Array<TagFilter>;
  platformFilters?: Array<CisStringFilter>;
  targetStatusFilters?: Array<CisTargetStatusFilter>;
  targetStatusReasonFilters?: Array<CisTargetStatusReasonFilter>;
  failedChecksFilters?: Array<CisNumberFilter>;
}
export type CisScanResultsAggregatedByTargetResourceSortBy =
  | "RESOURCE_ID"
  | "FAILED_COUNTS"
  | "ACCOUNT_ID"
  | "PLATFORM"
  | "TARGET_STATUS"
  | "TARGET_STATUS_REASON";
export type CisScanResultsMaxResults = number;

export type CisScanStatus =
  | "FAILED"
  | "COMPLETED"
  | "CANCELLED"
  | "IN_PROGRESS";
export type CisScanStatusComparison = "EQUALS";
export interface CisScanStatusFilter {
  comparison: CisScanStatusComparison;
  value: CisScanStatus;
}
export type CisScanStatusFilterList = Array<CisScanStatusFilter>;
export type CisScheduledByFilterList = Array<CisStringFilter>;
export type CisSecurityLevel = "LEVEL_1" | "LEVEL_2";
export type CisSecurityLevelComparison = "EQUALS";
export interface CisSecurityLevelFilter {
  comparison: CisSecurityLevelComparison;
  value: CisSecurityLevel;
}
export type CisSecurityLevelFilterList = Array<CisSecurityLevelFilter>;
export interface CisSessionMessage {
  ruleId: string;
  status: CisRuleStatus;
  cisRuleDetails: Uint8Array | string;
}
export type CisSessionMessages = Array<CisSessionMessage>;
export type CisSortOrder = "ASC" | "DESC";
export type CisStringComparison = "EQUALS" | "PREFIX" | "NOT_EQUALS";
export interface CisStringFilter {
  comparison: CisStringComparison;
  value: string;
}
export type CisTagMap = Record<string, string>;
export interface CisTargetResourceAggregation {
  scanArn: string;
  targetResourceId?: string;
  accountId?: string;
  targetResourceTags?: Record<string, Array<string>>;
  statusCounts?: StatusCounts;
  platform?: string;
  targetStatus?: CisTargetStatus;
  targetStatusReason?: CisTargetStatusReason;
}
export type CisTargetResourceAggregationList =
  Array<CisTargetResourceAggregation>;
export interface CisTargets {
  accountIds?: Array<string>;
  targetResourceTags?: Record<string, Array<string>>;
}
export type CisTargetStatus = "TIMED_OUT" | "CANCELLED" | "COMPLETED";
export type CisTargetStatusComparison = "EQUALS";
export interface CisTargetStatusFilter {
  comparison: CisTargetStatusComparison;
  value: CisTargetStatus;
}
export type CisTargetStatusReason =
  | "SCAN_IN_PROGRESS"
  | "UNSUPPORTED_OS"
  | "SSM_UNMANAGED";
export interface CisTargetStatusReasonFilter {
  comparison: CisTargetStatusComparison;
  value: CisTargetStatusReason;
}
export type ClientToken = string;

export interface ClusterDetails {
  lastInUse: Date | string;
  runningUnitCount?: number;
  stoppedUnitCount?: number;
  clusterMetadata: ClusterMetadata;
}
export type ClusterDetailsList = Array<ClusterDetails>;
export interface ClusterForImageFilterCriteria {
  resourceId: string;
}
export interface ClusterInformation {
  clusterArn: string;
  clusterDetails?: Array<ClusterDetails>;
}
export type ClusterInformationList = Array<ClusterInformation>;
interface _ClusterMetadata {
  awsEcsMetadataDetails?: AwsEcsMetadataDetails;
  awsEksMetadataDetails?: AwsEksMetadataDetails;
}

export type ClusterMetadata =
  | (_ClusterMetadata & { awsEcsMetadataDetails: AwsEcsMetadataDetails })
  | (_ClusterMetadata & { awsEksMetadataDetails: AwsEksMetadataDetails });
export interface CodeFilePath {
  fileName: string;
  filePath: string;
  startLine: number;
  endLine: number;
}
export interface CodeLine {
  content: string;
  lineNumber: number;
}
export type CodeLineList = Array<CodeLine>;
export interface CodeRepositoryAggregation {
  projectNames?: Array<StringFilter>;
  providerTypes?: Array<StringFilter>;
  sortOrder?: string;
  sortBy?: string;
  resourceIds?: Array<StringFilter>;
}
export interface CodeRepositoryAggregationResponse {
  projectNames: string;
  providerType?: string;
  severityCounts?: SeverityCounts;
  exploitAvailableActiveFindingsCount?: number;
  fixAvailableActiveFindingsCount?: number;
  accountId?: string;
  resourceId?: string;
}
export interface CodeRepositoryDetails {
  projectName?: string;
  integrationArn?: string;
  providerType?: string;
}
export type CodeRepositoryIntegrationArn = string;

export interface CodeRepositoryMetadata {
  projectName: string;
  integrationArn?: string;
  providerType: string;
  providerTypeVisibility: string;
  lastScannedCommitId?: string;
  scanConfiguration?: ProjectCodeSecurityScanConfiguration;
  onDemandScan?: CodeRepositoryOnDemandScan;
}
export interface CodeRepositoryOnDemandScan {
  lastScannedCommitId?: string;
  lastScanAt?: Date | string;
  scanStatus?: ScanStatus;
}
export type CodeRepositoryProjectName = string;

export type CodeRepositoryProviderType = string;

export type CodeRepositorySortBy = string;

export type CodeScanStatus =
  | "IN_PROGRESS"
  | "SUCCESSFUL"
  | "FAILED"
  | "SKIPPED";
export type CodeSecurityClientToken = string;

export type CodeSecurityIntegrationArn = string;

export interface CodeSecurityIntegrationSummary {
  integrationArn: string;
  name: string;
  type: IntegrationType;
  status: IntegrationStatus;
  statusReason: string;
  createdOn: Date | string;
  lastUpdateOn: Date | string;
  tags?: Record<string, string>;
}
interface _CodeSecurityResource {
  projectId?: string;
}

export type CodeSecurityResource = _CodeSecurityResource & {
  projectId: string;
};
export interface CodeSecurityScanConfiguration {
  periodicScanConfiguration?: PeriodicScanConfiguration;
  continuousIntegrationScanConfiguration?: ContinuousIntegrationScanConfiguration;
  ruleSetCategories: Array<RuleSetCategory>;
}
export type CodeSecurityScanConfigurationAssociationSummaries =
  Array<CodeSecurityScanConfigurationAssociationSummary>;
export interface CodeSecurityScanConfigurationAssociationSummary {
  resource?: CodeSecurityResource;
}
export type CodeSecurityScanConfigurationSummaries =
  Array<CodeSecurityScanConfigurationSummary>;
export interface CodeSecurityScanConfigurationSummary {
  scanConfigurationArn: string;
  name: string;
  ownerAccountId: string;
  periodicScanFrequency?: PeriodicScanFrequency;
  frequencyExpression?: string;
  continuousIntegrationScanSupportedEvents?: Array<ContinuousIntegrationScanEvent>;
  ruleSetCategories: Array<RuleSetCategory>;
  scopeSettings?: ScopeSettings;
  tags?: Record<string, string>;
}
export type CodeSecurityUuid = string;

export interface CodeSnippetError {
  findingArn: string;
  errorCode: string;
  errorMessage: string;
}
export type CodeSnippetErrorCode = string;

export type CodeSnippetErrorList = Array<CodeSnippetError>;
export interface CodeSnippetResult {
  findingArn?: string;
  startLine?: number;
  endLine?: number;
  codeSnippet?: Array<CodeLine>;
  suggestedFixes?: Array<SuggestedFix>;
}
export type CodeSnippetResultList = Array<CodeSnippetResult>;
export interface CodeVulnerabilityDetails {
  filePath: CodeFilePath;
  detectorTags?: Array<string>;
  referenceUrls?: Array<string>;
  ruleId?: string;
  sourceLambdaLayerArn?: string;
  detectorId: string;
  detectorName: string;
  cwes: Array<string>;
}
export type CommitId = string;

export type Component = string;

export type ComponentArn = string;

export type ComponentType = string;

export interface ComputePlatform {
  vendor?: string;
  product?: string;
  version?: string;
}
export type ConfigurationLevel = "ORGANIZATION" | "ACCOUNT";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface ContinuousIntegrationScanConfiguration {
  supportedEvents: Array<ContinuousIntegrationScanEvent>;
}
export type ContinuousIntegrationScanEvent = "PULL_REQUEST" | "PUSH";
export type ContinuousIntegrationScanSupportedEvents =
  Array<ContinuousIntegrationScanEvent>;
export interface Counts {
  count?: number;
  groupKey?: string;
}
export type CountsList = Array<Counts>;
export interface CoverageDateFilter {
  startInclusive?: Date | string;
  endInclusive?: Date | string;
}
export type CoverageDateFilterList = Array<CoverageDateFilter>;
export interface CoverageFilterCriteria {
  scanStatusCode?: Array<CoverageStringFilter>;
  scanStatusReason?: Array<CoverageStringFilter>;
  accountId?: Array<CoverageStringFilter>;
  resourceId?: Array<CoverageStringFilter>;
  resourceType?: Array<CoverageStringFilter>;
  scanType?: Array<CoverageStringFilter>;
  ecrRepositoryName?: Array<CoverageStringFilter>;
  ecrImageTags?: Array<CoverageStringFilter>;
  ec2InstanceTags?: Array<CoverageMapFilter>;
  lambdaFunctionName?: Array<CoverageStringFilter>;
  lambdaFunctionTags?: Array<CoverageMapFilter>;
  lambdaFunctionRuntime?: Array<CoverageStringFilter>;
  lastScannedAt?: Array<CoverageDateFilter>;
  scanMode?: Array<CoverageStringFilter>;
  imagePulledAt?: Array<CoverageDateFilter>;
  ecrImageLastInUseAt?: Array<CoverageDateFilter>;
  ecrImageInUseCount?: Array<CoverageNumberFilter>;
  codeRepositoryProjectName?: Array<CoverageStringFilter>;
  codeRepositoryProviderType?: Array<CoverageStringFilter>;
  codeRepositoryProviderTypeVisibility?: Array<CoverageStringFilter>;
  lastScannedCommitId?: Array<CoverageStringFilter>;
}
export type CoverageMapComparison = string;

export interface CoverageMapFilter {
  comparison: string;
  key: string;
  value?: string;
}
export type CoverageMapFilterList = Array<CoverageMapFilter>;
export interface CoverageNumberFilter {
  upperInclusive?: number;
  lowerInclusive?: number;
}
export type CoverageNumberFilterList = Array<CoverageNumberFilter>;
export type CoverageResourceType = string;

export type CoverageStringComparison = string;

export interface CoverageStringFilter {
  comparison: string;
  value: string;
}
export type CoverageStringFilterList = Array<CoverageStringFilter>;
export type CoverageStringInput = string;

export interface CoveredResource {
  resourceType: string;
  resourceId: string;
  accountId: string;
  scanType: string;
  scanStatus?: ScanStatus;
  resourceMetadata?: ResourceScanMetadata;
  lastScannedAt?: Date | string;
  scanMode?: string;
}
export type CoveredResources = Array<CoveredResource>;
export interface CreateCisScanConfigurationRequest {
  scanName: string;
  securityLevel: CisSecurityLevel;
  schedule: Schedule;
  targets: CreateCisTargets;
  tags?: Record<string, string>;
}
export interface CreateCisScanConfigurationResponse {
  scanConfigurationArn?: string;
}
export interface CreateCisTargets {
  accountIds: Array<string>;
  targetResourceTags: Record<string, Array<string>>;
}
export interface CreateCodeSecurityIntegrationRequest {
  name: string;
  type: IntegrationType;
  details?: CreateIntegrationDetail;
  tags?: Record<string, string>;
}
export interface CreateCodeSecurityIntegrationResponse {
  integrationArn: string;
  status: IntegrationStatus;
  authorizationUrl?: string;
}
export interface CreateCodeSecurityScanConfigurationRequest {
  name: string;
  level: ConfigurationLevel;
  configuration: CodeSecurityScanConfiguration;
  scopeSettings?: ScopeSettings;
  tags?: Record<string, string>;
}
export interface CreateCodeSecurityScanConfigurationResponse {
  scanConfigurationArn: string;
}
export interface CreateFilterRequest {
  action: string;
  description?: string;
  filterCriteria: FilterCriteria;
  name: string;
  tags?: Record<string, string>;
  reason?: string;
}
export interface CreateFilterResponse {
  arn: string;
}
export interface CreateFindingsReportRequest {
  filterCriteria?: FilterCriteria;
  reportFormat: string;
  s3Destination: Destination;
}
export interface CreateFindingsReportResponse {
  reportId?: string;
}
export interface CreateGitLabSelfManagedIntegrationDetail {
  instanceUrl: string;
  accessToken: string;
}
interface _CreateIntegrationDetail {
  gitlabSelfManaged?: CreateGitLabSelfManagedIntegrationDetail;
}

export type CreateIntegrationDetail = _CreateIntegrationDetail & {
  gitlabSelfManaged: CreateGitLabSelfManagedIntegrationDetail;
};
export interface CreateSbomExportRequest {
  resourceFilterCriteria?: ResourceFilterCriteria;
  reportFormat: string;
  s3Destination: Destination;
}
export interface CreateSbomExportResponse {
  reportId?: string;
}
export type Currency = string;

export interface Cvss2 {
  baseScore?: number;
  scoringVector?: string;
}
export type Cvss2BaseScore = number;

export type Cvss2ScoringVector = string;

export interface Cvss3 {
  baseScore?: number;
  scoringVector?: string;
}
export type Cvss3BaseScore = number;

export type Cvss3ScoringVector = string;

export interface CvssScore {
  baseScore: number;
  scoringVector: string;
  version: string;
  source: string;
}
export interface CvssScoreAdjustment {
  metric: string;
  reason: string;
}
export type CvssScoreAdjustmentList = Array<CvssScoreAdjustment>;
export interface CvssScoreDetails {
  scoreSource: string;
  cvssSource?: string;
  version: string;
  score: number;
  scoringVector: string;
  adjustments?: Array<CvssScoreAdjustment>;
}
export type CvssScoreList = Array<CvssScore>;
export type Cwe = string;

export type CweList = Array<string>;
export type Cwes = Array<string>;
export interface DailySchedule {
  startTime: Time;
}
export interface DateFilter {
  startInclusive?: Date | string;
  endInclusive?: Date | string;
}
export type DateFilterList = Array<DateFilter>;
export type DateTimeTimestamp = Date | string;

export type Day = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";
export type DaysList = Array<Day>;
export interface DelegatedAdmin {
  accountId?: string;
  relationshipStatus?: string;
}
export interface DelegatedAdminAccount {
  accountId?: string;
  status?: string;
}
export type DelegatedAdminAccountList = Array<DelegatedAdminAccount>;
export type DelegatedAdminStatus = string;

export interface DeleteCisScanConfigurationRequest {
  scanConfigurationArn: string;
}
export interface DeleteCisScanConfigurationResponse {
  scanConfigurationArn: string;
}
export interface DeleteCodeSecurityIntegrationRequest {
  integrationArn: string;
}
export interface DeleteCodeSecurityIntegrationResponse {
  integrationArn?: string;
}
export interface DeleteCodeSecurityScanConfigurationRequest {
  scanConfigurationArn: string;
}
export interface DeleteCodeSecurityScanConfigurationResponse {
  scanConfigurationArn?: string;
}
export interface DeleteFilterRequest {
  arn: string;
}
export interface DeleteFilterResponse {
  arn: string;
}
export interface DescribeOrganizationConfigurationRequest {}
export interface DescribeOrganizationConfigurationResponse {
  autoEnable?: AutoEnable;
  maxAccountLimitReached?: boolean;
}
export interface Destination {
  bucketName: string;
  keyPrefix?: string;
  kmsKeyArn: string;
}
export type DetectionPlatforms = Array<string>;
export type DetectorTagList = Array<string>;
export interface DisableDelegatedAdminAccountRequest {
  delegatedAdminAccountId: string;
}
export interface DisableDelegatedAdminAccountResponse {
  delegatedAdminAccountId: string;
}
export interface DisableRequest {
  accountIds?: Array<string>;
  resourceTypes?: Array<string>;
}
export type DisableResourceTypeList = Array<string>;
export interface DisableResponse {
  accounts: Array<Account>;
  failedAccounts?: Array<FailedAccount>;
}
export interface DisassociateConfigurationRequest {
  scanConfigurationArn: string;
  resource: CodeSecurityResource;
}
export type DisassociateConfigurationRequestList =
  Array<DisassociateConfigurationRequest>;
export interface DisassociateMemberRequest {
  accountId: string;
}
export interface DisassociateMemberResponse {
  accountId: string;
}
export interface Ec2Configuration {
  scanMode: string;
}
export interface Ec2ConfigurationState {
  scanModeState?: Ec2ScanModeState;
}
export type Ec2DeepInspectionStatus = string;

export interface Ec2InstanceAggregation {
  amis?: Array<StringFilter>;
  operatingSystems?: Array<StringFilter>;
  instanceIds?: Array<StringFilter>;
  instanceTags?: Array<MapFilter>;
  sortOrder?: string;
  sortBy?: string;
}
export interface Ec2InstanceAggregationResponse {
  instanceId: string;
  ami?: string;
  operatingSystem?: string;
  instanceTags?: Record<string, string>;
  accountId?: string;
  severityCounts?: SeverityCounts;
  networkFindings?: number;
}
export type Ec2InstanceSortBy = string;

export interface Ec2Metadata {
  tags?: Record<string, string>;
  amiId?: string;
  platform?: string;
}
export type Ec2Platform = string;

export type Ec2ScanMode = string;

export interface Ec2ScanModeState {
  scanMode?: string;
  scanModeStatus?: string;
}
export type Ec2ScanModeStatus = string;

export interface EcrConfiguration {
  rescanDuration: string;
  pullDateRescanDuration?: string;
  pullDateRescanMode?: string;
}
export interface EcrConfigurationState {
  rescanDurationState?: EcrRescanDurationState;
}
export interface EcrContainerImageMetadata {
  tags?: Array<string>;
  imagePulledAt?: Date | string;
  lastInUseAt?: Date | string;
  inUseCount?: number;
}
export type EcrPullDateRescanDuration = string;

export type EcrPullDateRescanMode = string;

export interface EcrRepositoryMetadata {
  name?: string;
  scanFrequency?: string;
}
export type EcrRescanDuration = string;

export interface EcrRescanDurationState {
  rescanDuration?: string;
  status?: string;
  updatedAt?: Date | string;
  pullDateRescanDuration?: string;
  pullDateRescanMode?: string;
}
export type EcrRescanDurationStatus = string;

export type EcrScanFrequency = string;

export interface EnableDelegatedAdminAccountRequest {
  delegatedAdminAccountId: string;
  clientToken?: string;
}
export interface EnableDelegatedAdminAccountResponse {
  delegatedAdminAccountId: string;
}
export interface EnableRequest {
  accountIds?: Array<string>;
  resourceTypes: Array<string>;
  clientToken?: string;
}
export type EnableResourceTypeList = Array<string>;
export interface EnableResponse {
  accounts: Array<Account>;
  failedAccounts?: Array<FailedAccount>;
}
export interface Epss {
  score?: number;
}
export interface EpssDetails {
  score?: number;
}
export type EpssScore = number;

export type EpssScoreValue = number;

export type ErrorCode = string;

export type ErrorMessage = string;

export interface Evidence {
  evidenceRule?: string;
  evidenceDetail?: string;
  severity?: string;
}
export type EvidenceDetail = string;

export type EvidenceList = Array<Evidence>;
export type EvidenceRule = string;

export type EvidenceSeverity = string;

export type ExecutionRoleArn = string;

export interface ExploitabilityDetails {
  lastKnownExploitAt?: Date | string;
}
export type ExploitAvailable = string;

export interface ExploitObserved {
  lastSeen?: Date | string;
  firstSeen?: Date | string;
}
export type ExternalReportStatus = string;

export interface FailedAccount {
  accountId: string;
  status?: string;
  resourceStatus?: ResourceStatus;
  errorCode: string;
  errorMessage: string;
}
export type FailedAccountList = Array<FailedAccount>;
export interface FailedAssociationResult {
  scanConfigurationArn?: string;
  resource?: CodeSecurityResource;
  statusCode?: AssociationResultStatusCode;
  statusMessage?: string;
}
export type FailedAssociationResultList = Array<FailedAssociationResult>;
export interface FailedMemberAccountEc2DeepInspectionStatusState {
  accountId: string;
  ec2ScanStatus?: string;
  errorMessage?: string;
}
export type FailedMemberAccountEc2DeepInspectionStatusStateList =
  Array<FailedMemberAccountEc2DeepInspectionStatusState>;
export type FilePath = string;

export interface Filter {
  arn: string;
  ownerId: string;
  name: string;
  criteria: FilterCriteria;
  action: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  description?: string;
  reason?: string;
  tags?: Record<string, string>;
}
export type FilterAction = string;

export type FilterArn = string;

export type FilterArnList = Array<string>;
export interface FilterCriteria {
  findingArn?: Array<StringFilter>;
  awsAccountId?: Array<StringFilter>;
  findingType?: Array<StringFilter>;
  severity?: Array<StringFilter>;
  firstObservedAt?: Array<DateFilter>;
  lastObservedAt?: Array<DateFilter>;
  updatedAt?: Array<DateFilter>;
  findingStatus?: Array<StringFilter>;
  title?: Array<StringFilter>;
  inspectorScore?: Array<NumberFilter>;
  resourceType?: Array<StringFilter>;
  resourceId?: Array<StringFilter>;
  resourceTags?: Array<MapFilter>;
  ec2InstanceImageId?: Array<StringFilter>;
  ec2InstanceVpcId?: Array<StringFilter>;
  ec2InstanceSubnetId?: Array<StringFilter>;
  ecrImagePushedAt?: Array<DateFilter>;
  ecrImageArchitecture?: Array<StringFilter>;
  ecrImageRegistry?: Array<StringFilter>;
  ecrImageRepositoryName?: Array<StringFilter>;
  ecrImageTags?: Array<StringFilter>;
  ecrImageHash?: Array<StringFilter>;
  ecrImageLastInUseAt?: Array<DateFilter>;
  ecrImageInUseCount?: Array<NumberFilter>;
  portRange?: Array<PortRangeFilter>;
  networkProtocol?: Array<StringFilter>;
  componentId?: Array<StringFilter>;
  componentType?: Array<StringFilter>;
  vulnerabilityId?: Array<StringFilter>;
  vulnerabilitySource?: Array<StringFilter>;
  vendorSeverity?: Array<StringFilter>;
  vulnerablePackages?: Array<PackageFilter>;
  relatedVulnerabilities?: Array<StringFilter>;
  fixAvailable?: Array<StringFilter>;
  lambdaFunctionName?: Array<StringFilter>;
  lambdaFunctionLayers?: Array<StringFilter>;
  lambdaFunctionRuntime?: Array<StringFilter>;
  lambdaFunctionLastModifiedAt?: Array<DateFilter>;
  lambdaFunctionExecutionRoleArn?: Array<StringFilter>;
  exploitAvailable?: Array<StringFilter>;
  codeVulnerabilityDetectorName?: Array<StringFilter>;
  codeVulnerabilityDetectorTags?: Array<StringFilter>;
  codeVulnerabilityFilePath?: Array<StringFilter>;
  epssScore?: Array<NumberFilter>;
  codeRepositoryProjectName?: Array<StringFilter>;
  codeRepositoryProviderType?: Array<StringFilter>;
}
export type FilterDescription = string;

export type FilterList = Array<Filter>;
export type FilterName = string;

export type FilterReason = string;

export interface Finding {
  findingArn: string;
  awsAccountId: string;
  type: string;
  description: string;
  title?: string;
  remediation: Remediation;
  severity: string;
  firstObservedAt: Date | string;
  lastObservedAt: Date | string;
  updatedAt?: Date | string;
  status: string;
  resources: Array<Resource>;
  inspectorScore?: number;
  inspectorScoreDetails?: InspectorScoreDetails;
  networkReachabilityDetails?: NetworkReachabilityDetails;
  packageVulnerabilityDetails?: PackageVulnerabilityDetails;
  fixAvailable?: string;
  exploitAvailable?: string;
  exploitabilityDetails?: ExploitabilityDetails;
  codeVulnerabilityDetails?: CodeVulnerabilityDetails;
  epss?: EpssDetails;
}
export type FindingArn = string;

export type FindingArnList = Array<string>;
export type FindingArns = Array<string>;
export type FindingDescription = string;

export interface FindingDetail {
  findingArn?: string;
  cisaData?: CisaData;
  riskScore?: number;
  evidences?: Array<Evidence>;
  ttps?: Array<string>;
  tools?: Array<string>;
  exploitObserved?: ExploitObserved;
  referenceUrls?: Array<string>;
  cwes?: Array<string>;
  epssScore?: number;
}
export type FindingDetails = Array<FindingDetail>;
export interface FindingDetailsError {
  findingArn: string;
  errorCode: string;
  errorMessage: string;
}
export type FindingDetailsErrorCode = string;

export type FindingDetailsErrorList = Array<FindingDetailsError>;
export type FindingList = Array<Finding>;
export type FindingStatus = string;

export type FindingTitle = string;

export type FindingType = string;

export interface FindingTypeAggregation {
  findingType?: string;
  resourceType?: string;
  sortOrder?: string;
  sortBy?: string;
}
export interface FindingTypeAggregationResponse {
  accountId?: string;
  severityCounts?: SeverityCounts;
  exploitAvailableCount?: number;
  fixAvailableCount?: number;
}
export type FindingTypeSortBy = string;

export type FirstSeen = Date | string;

export type FixAvailable = string;

export interface FreeTrialAccountInfo {
  accountId: string;
  freeTrialInfo: Array<FreeTrialInfo>;
}
export type FreeTrialAccountInfoList = Array<FreeTrialAccountInfo>;
export interface FreeTrialInfo {
  type: string;
  start: Date | string;
  end: Date | string;
  status: string;
}
export interface FreeTrialInfoError {
  accountId: string;
  code: string;
  message: string;
}
export type FreeTrialInfoErrorCode = string;

export type FreeTrialInfoErrorList = Array<FreeTrialInfoError>;
export type FreeTrialInfoList = Array<FreeTrialInfo>;
export type FreeTrialStatus = string;

export type FreeTrialType = string;

export type FrequencyExpression = string;

export type FunctionName = string;

export interface GetCisScanReportRequest {
  scanArn: string;
  targetAccounts?: Array<string>;
  reportFormat?: CisReportFormat;
}
export interface GetCisScanReportResponse {
  url?: string;
  status?: CisReportStatus;
}
export type GetCisScanResultDetailsMaxResults = number;

export interface GetCisScanResultDetailsRequest {
  scanArn: string;
  targetResourceId: string;
  accountId: string;
  filterCriteria?: CisScanResultDetailsFilterCriteria;
  sortBy?: CisScanResultDetailsSortBy;
  sortOrder?: CisSortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface GetCisScanResultDetailsResponse {
  scanResultDetails?: Array<CisScanResultDetails>;
  nextToken?: string;
}
export type GetClustersForImageNextToken = string;

export interface GetClustersForImageRequest {
  filter: ClusterForImageFilterCriteria;
  maxResults?: number;
  nextToken?: string;
}
export interface GetClustersForImageResponse {
  cluster: Array<ClusterInformation>;
  nextToken?: string;
}
export interface GetCodeSecurityIntegrationRequest {
  integrationArn: string;
  tags?: Record<string, string>;
}
export interface GetCodeSecurityIntegrationResponse {
  integrationArn: string;
  name: string;
  type: IntegrationType;
  status: IntegrationStatus;
  statusReason: string;
  createdOn: Date | string;
  lastUpdateOn: Date | string;
  tags?: Record<string, string>;
  authorizationUrl?: string;
}
export interface GetCodeSecurityScanConfigurationRequest {
  scanConfigurationArn: string;
}
export interface GetCodeSecurityScanConfigurationResponse {
  scanConfigurationArn?: string;
  name?: string;
  configuration?: CodeSecurityScanConfiguration;
  level?: ConfigurationLevel;
  scopeSettings?: ScopeSettings;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  tags?: Record<string, string>;
}
export interface GetCodeSecurityScanRequest {
  resource: CodeSecurityResource;
  scanId: string;
}
export interface GetCodeSecurityScanResponse {
  scanId?: string;
  resource?: CodeSecurityResource;
  accountId?: string;
  status?: CodeScanStatus;
  statusReason?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  lastCommitId?: string;
}
export interface GetConfigurationRequest {}
export interface GetConfigurationResponse {
  ecrConfiguration?: EcrConfigurationState;
  ec2Configuration?: Ec2ConfigurationState;
}
export interface GetDelegatedAdminAccountRequest {}
export interface GetDelegatedAdminAccountResponse {
  delegatedAdmin?: DelegatedAdmin;
}
export interface GetEc2DeepInspectionConfigurationRequest {}
export interface GetEc2DeepInspectionConfigurationResponse {
  packagePaths?: Array<string>;
  orgPackagePaths?: Array<string>;
  status?: string;
  errorMessage?: string;
}
export interface GetEncryptionKeyRequest {
  scanType: string;
  resourceType: string;
}
export interface GetEncryptionKeyResponse {
  kmsKeyId: string;
}
export interface GetFindingsReportStatusRequest {
  reportId?: string;
}
export interface GetFindingsReportStatusResponse {
  reportId?: string;
  status?: string;
  errorCode?: string;
  errorMessage?: string;
  destination?: Destination;
  filterCriteria?: FilterCriteria;
}
export interface GetMemberRequest {
  accountId: string;
}
export interface GetMemberResponse {
  member?: Member;
}
export interface GetSbomExportRequest {
  reportId: string;
}
export interface GetSbomExportResponse {
  reportId?: string;
  format?: string;
  status?: string;
  errorCode?: string;
  errorMessage?: string;
  s3Destination?: Destination;
  filterCriteria?: ResourceFilterCriteria;
}
export type GitHubAuthCode = string;

export type GitHubInstallationId = string;

export type GitLabAccessToken = string;

export type GitLabAuthCode = string;

export type GroupKey = string;

export type ImageHash = string;

export interface ImageLayerAggregation {
  repositories?: Array<StringFilter>;
  resourceIds?: Array<StringFilter>;
  layerHashes?: Array<StringFilter>;
  sortOrder?: string;
  sortBy?: string;
}
export interface ImageLayerAggregationResponse {
  repository: string;
  resourceId: string;
  layerHash: string;
  accountId: string;
  severityCounts?: SeverityCounts;
}
export type ImageLayerSortBy = string;

export type ImageTagList = Array<string>;
export interface InspectorScoreDetails {
  adjustedCvss?: CvssScoreDetails;
}
export type InstanceUrl = string;

export type IntegrationName = string;

export type IntegrationStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "ACTIVE"
  | "INACTIVE"
  | "DISABLING";
export type IntegrationSummaries = Array<CodeSecurityIntegrationSummary>;
export type IntegrationType = "GITLAB_SELF_MANAGED" | "GITHUB";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type IpV4Address = string;

export type IpV4AddressList = Array<string>;
export type IpV6Address = string;

export type IpV6AddressList = Array<string>;
export type KmsKeyArn = string;

export interface LambdaFunctionAggregation {
  resourceIds?: Array<StringFilter>;
  functionNames?: Array<StringFilter>;
  runtimes?: Array<StringFilter>;
  functionTags?: Array<MapFilter>;
  sortOrder?: string;
  sortBy?: string;
}
export interface LambdaFunctionAggregationResponse {
  resourceId: string;
  functionName?: string;
  runtime?: string;
  lambdaTags?: Record<string, string>;
  accountId?: string;
  severityCounts?: SeverityCounts;
  lastModifiedAt?: Date | string;
}
export interface LambdaFunctionMetadata {
  functionTags?: Record<string, string>;
  layers?: Array<string>;
  functionName?: string;
  runtime?: string;
}
export type LambdaFunctionSortBy = string;

export interface LambdaLayerAggregation {
  functionNames?: Array<StringFilter>;
  resourceIds?: Array<StringFilter>;
  layerArns?: Array<StringFilter>;
  sortOrder?: string;
  sortBy?: string;
}
export interface LambdaLayerAggregationResponse {
  functionName: string;
  resourceId: string;
  layerArn: string;
  accountId: string;
  severityCounts?: SeverityCounts;
}
export type LambdaLayerArn = string;

export type LambdaLayerList = Array<string>;
export type LambdaLayerSortBy = string;

export interface LambdaVpcConfig {
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  vpcId?: string;
}
export type LastSeen = Date | string;

export type LayerList = Array<string>;
export type ListAccountPermissionsMaxResults = number;

export interface ListAccountPermissionsRequest {
  service?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListAccountPermissionsResponse {
  permissions: Array<Permission>;
  nextToken?: string;
}
export interface ListCisScanConfigurationsFilterCriteria {
  scanNameFilters?: Array<CisStringFilter>;
  targetResourceTagFilters?: Array<TagFilter>;
  scanConfigurationArnFilters?: Array<CisStringFilter>;
}
export type ListCisScanConfigurationsMaxResults = number;

export interface ListCisScanConfigurationsRequest {
  filterCriteria?: ListCisScanConfigurationsFilterCriteria;
  sortBy?: CisScanConfigurationsSortBy;
  sortOrder?: CisSortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface ListCisScanConfigurationsResponse {
  scanConfigurations?: Array<CisScanConfiguration>;
  nextToken?: string;
}
export interface ListCisScanResultsAggregatedByChecksRequest {
  scanArn: string;
  filterCriteria?: CisScanResultsAggregatedByChecksFilterCriteria;
  sortBy?: CisScanResultsAggregatedByChecksSortBy;
  sortOrder?: CisSortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface ListCisScanResultsAggregatedByChecksResponse {
  checkAggregations?: Array<CisCheckAggregation>;
  nextToken?: string;
}
export interface ListCisScanResultsAggregatedByTargetResourceRequest {
  scanArn: string;
  filterCriteria?: CisScanResultsAggregatedByTargetResourceFilterCriteria;
  sortBy?: CisScanResultsAggregatedByTargetResourceSortBy;
  sortOrder?: CisSortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface ListCisScanResultsAggregatedByTargetResourceResponse {
  targetResourceAggregations?: Array<CisTargetResourceAggregation>;
  nextToken?: string;
}
export type ListCisScansDetailLevel = "ORGANIZATION" | "MEMBER";
export interface ListCisScansFilterCriteria {
  scanNameFilters?: Array<CisStringFilter>;
  targetResourceTagFilters?: Array<TagFilter>;
  targetResourceIdFilters?: Array<CisStringFilter>;
  scanStatusFilters?: Array<CisScanStatusFilter>;
  scanAtFilters?: Array<CisDateFilter>;
  scanConfigurationArnFilters?: Array<CisStringFilter>;
  scanArnFilters?: Array<CisStringFilter>;
  scheduledByFilters?: Array<CisStringFilter>;
  failedChecksFilters?: Array<CisNumberFilter>;
  targetAccountIdFilters?: Array<CisStringFilter>;
}
export type ListCisScansMaxResults = number;

export interface ListCisScansRequest {
  filterCriteria?: ListCisScansFilterCriteria;
  detailLevel?: ListCisScansDetailLevel;
  sortBy?: ListCisScansSortBy;
  sortOrder?: CisSortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface ListCisScansResponse {
  scans?: Array<CisScan>;
  nextToken?: string;
}
export type ListCisScansSortBy =
  | "STATUS"
  | "SCHEDULED_BY"
  | "SCAN_START_DATE"
  | "FAILED_CHECKS";
export interface ListCodeSecurityIntegrationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListCodeSecurityIntegrationsResponse {
  integrations?: Array<CodeSecurityIntegrationSummary>;
  nextToken?: string;
}
export interface ListCodeSecurityScanConfigurationAssociationsRequest {
  scanConfigurationArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListCodeSecurityScanConfigurationAssociationsResponse {
  associations?: Array<CodeSecurityScanConfigurationAssociationSummary>;
  nextToken?: string;
}
export interface ListCodeSecurityScanConfigurationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListCodeSecurityScanConfigurationsResponse {
  configurations?: Array<CodeSecurityScanConfigurationSummary>;
  nextToken?: string;
}
export type ListCoverageMaxResults = number;

export interface ListCoverageRequest {
  maxResults?: number;
  nextToken?: string;
  filterCriteria?: CoverageFilterCriteria;
}
export interface ListCoverageResponse {
  nextToken?: string;
  coveredResources?: Array<CoveredResource>;
}
export interface ListCoverageStatisticsRequest {
  filterCriteria?: CoverageFilterCriteria;
  groupBy?: string;
  nextToken?: string;
}
export interface ListCoverageStatisticsResponse {
  countsByGroup?: Array<Counts>;
  totalCounts: number;
  nextToken?: string;
}
export interface ListDelegatedAdminAccountsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListDelegatedAdminAccountsResponse {
  delegatedAdminAccounts?: Array<DelegatedAdminAccount>;
  nextToken?: string;
}
export type ListDelegatedAdminMaxResults = number;

export type ListFilterMaxResults = number;

export interface ListFiltersRequest {
  arns?: Array<string>;
  action?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListFiltersResponse {
  filters: Array<Filter>;
  nextToken?: string;
}
export type ListFindingAggregationsMaxResults = number;

export interface ListFindingAggregationsRequest {
  aggregationType: string;
  nextToken?: string;
  maxResults?: number;
  accountIds?: Array<StringFilter>;
  aggregationRequest?: AggregationRequest;
}
export interface ListFindingAggregationsResponse {
  aggregationType: string;
  responses?: Array<AggregationResponse>;
  nextToken?: string;
}
export type ListFindingsMaxResults = number;

export interface ListFindingsRequest {
  maxResults?: number;
  nextToken?: string;
  filterCriteria?: FilterCriteria;
  sortCriteria?: SortCriteria;
}
export interface ListFindingsResponse {
  nextToken?: string;
  findings?: Array<Finding>;
}
export type ListMembersMaxResults = number;

export interface ListMembersRequest {
  onlyAssociated?: boolean;
  maxResults?: number;
  nextToken?: string;
}
export interface ListMembersResponse {
  members?: Array<Member>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type ListUsageTotalsMaxResults = number;

export type ListUsageTotalsNextToken = string;

export interface ListUsageTotalsRequest {
  maxResults?: number;
  nextToken?: string;
  accountIds?: Array<string>;
}
export interface ListUsageTotalsResponse {
  nextToken?: string;
  totals?: Array<UsageTotal>;
}
export type MapComparison = string;

export interface MapFilter {
  comparison: string;
  key: string;
  value?: string;
}
export type MapFilterList = Array<MapFilter>;
export type MapKey = string;

export type MapValue = string;

export interface Member {
  accountId?: string;
  relationshipStatus?: string;
  delegatedAdminAccountId?: string;
  updatedAt?: Date | string;
}
export interface MemberAccountEc2DeepInspectionStatus {
  accountId: string;
  activateDeepInspection: boolean;
}
export type MemberAccountEc2DeepInspectionStatusList =
  Array<MemberAccountEc2DeepInspectionStatus>;
export interface MemberAccountEc2DeepInspectionStatusState {
  accountId: string;
  status?: string;
  errorMessage?: string;
}
export type MemberAccountEc2DeepInspectionStatusStateList =
  Array<MemberAccountEc2DeepInspectionStatusState>;
export type MemberList = Array<Member>;
export type MeteringAccountId = string;

export type MeteringAccountIdList = Array<string>;
export type MonthlyCostEstimate = number;

export interface MonthlySchedule {
  startTime: Time;
  day: Day;
}
export interface NetworkPath {
  steps?: Array<Step>;
}
export type NetworkProtocol = string;

export interface NetworkReachabilityDetails {
  openPortRange: PortRange;
  protocol: string;
  networkPath: NetworkPath;
}
export type NextToken = string;

export type NonEmptyString = string;

export type NonEmptyStringList = Array<string>;
export interface NumberFilter {
  upperInclusive?: number;
  lowerInclusive?: number;
}
export type NumberFilterList = Array<NumberFilter>;
export type OneAccountIdFilterList = Array<CisStringFilter>;
export interface OneTimeSchedule {}
export type Operation = string;

export type OwnerId = string;

export interface PackageAggregation {
  packageNames?: Array<StringFilter>;
  sortOrder?: string;
  sortBy?: string;
}
export interface PackageAggregationResponse {
  packageName: string;
  accountId?: string;
  severityCounts?: SeverityCounts;
}
export type PackageArchitecture = string;

export type PackageEpoch = number;

export interface PackageFilter {
  name?: StringFilter;
  version?: StringFilter;
  epoch?: NumberFilter;
  release?: StringFilter;
  architecture?: StringFilter;
  sourceLayerHash?: StringFilter;
  sourceLambdaLayerArn?: StringFilter;
  filePath?: StringFilter;
}
export type PackageFilterList = Array<PackageFilter>;
export type PackageManager = string;

export type PackageName = string;

export type PackageRelease = string;

export type PackageSortBy = string;

export type PackageType = string;

export type PackageVersion = string;

export interface PackageVulnerabilityDetails {
  vulnerabilityId: string;
  vulnerablePackages?: Array<VulnerablePackage>;
  source: string;
  cvss?: Array<CvssScore>;
  relatedVulnerabilities?: Array<string>;
  sourceUrl?: string;
  vendorSeverity?: string;
  vendorCreatedAt?: Date | string;
  vendorUpdatedAt?: Date | string;
  referenceUrls?: Array<string>;
}
export type Path = string;

export type PathList = Array<string>;
export interface PeriodicScanConfiguration {
  frequency?: PeriodicScanFrequency;
  frequencyExpression?: string;
}
export type PeriodicScanFrequency = "WEEKLY" | "MONTHLY" | "NEVER";
export interface Permission {
  service: string;
  operation: string;
}
export type Permissions = Array<Permission>;
export type Platform = string;

export type PlatformFilterList = Array<CisStringFilter>;
export type PlatformVersion = string;

export type Port = number;

export interface PortRange {
  begin: number;
  end: number;
}
export interface PortRangeFilter {
  beginInclusive?: number;
  endInclusive?: number;
}
export type PortRangeFilterList = Array<PortRangeFilter>;
export type Product = string;

export interface ProjectCodeSecurityScanConfiguration {
  periodicScanConfigurations?: Array<ProjectPeriodicScanConfiguration>;
  continuousIntegrationScanConfigurations?: Array<ProjectContinuousIntegrationScanConfiguration>;
}
export interface ProjectContinuousIntegrationScanConfiguration {
  supportedEvent?: ContinuousIntegrationScanEvent;
  ruleSetCategories?: Array<RuleSetCategory>;
}
export type ProjectContinuousIntegrationScanConfigurationList =
  Array<ProjectContinuousIntegrationScanConfiguration>;
export type ProjectId = string;

export interface ProjectPeriodicScanConfiguration {
  frequencyExpression?: string;
  ruleSetCategories?: Array<RuleSetCategory>;
}
export type ProjectPeriodicScanConfigurationList =
  Array<ProjectPeriodicScanConfiguration>;
export type ProjectSelectionScope = "ALL";
export type Reason = string;

export interface Recommendation {
  text?: string;
  Url?: string;
}
export type ReferenceUrls = Array<string>;
export type RelatedVulnerabilities = Array<string>;
export type RelatedVulnerability = string;

export type RelationshipStatus = string;

export interface Remediation {
  recommendation?: Recommendation;
}
export type ReportFormat = string;

export type ReportId = string;

export type ReportingErrorCode = string;

export type ReportTargetAccounts = Array<string>;
export interface RepositoryAggregation {
  repositories?: Array<StringFilter>;
  sortOrder?: string;
  sortBy?: string;
}
export interface RepositoryAggregationResponse {
  repository: string;
  accountId?: string;
  severityCounts?: SeverityCounts;
  affectedImages?: number;
}
export type RepositorySortBy = string;

export interface ResetEncryptionKeyRequest {
  scanType: string;
  resourceType: string;
}
export interface ResetEncryptionKeyResponse {}
export interface Resource {
  type: string;
  id: string;
  partition?: string;
  region?: string;
  tags?: Record<string, string>;
  details?: ResourceDetails;
}
export interface ResourceDetails {
  awsEc2Instance?: AwsEc2InstanceDetails;
  awsEcrContainerImage?: AwsEcrContainerImageDetails;
  awsLambdaFunction?: AwsLambdaFunctionDetails;
  codeRepository?: CodeRepositoryDetails;
}
export interface ResourceFilterCriteria {
  accountId?: Array<ResourceStringFilter>;
  resourceId?: Array<ResourceStringFilter>;
  resourceType?: Array<ResourceStringFilter>;
  ecrRepositoryName?: Array<ResourceStringFilter>;
  lambdaFunctionName?: Array<ResourceStringFilter>;
  ecrImageTags?: Array<ResourceStringFilter>;
  ec2InstanceTags?: Array<ResourceMapFilter>;
  lambdaFunctionTags?: Array<ResourceMapFilter>;
}
export type ResourceId = string;

export type ResourceIdFilterList = Array<CisStringFilter>;
export type ResourceList = Array<Resource>;
export type ResourceMapComparison = string;

export interface ResourceMapFilter {
  comparison: string;
  key: string;
  value?: string;
}
export type ResourceMapFilterList = Array<ResourceMapFilter>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export interface ResourceScanMetadata {
  ecrRepository?: EcrRepositoryMetadata;
  ecrImage?: EcrContainerImageMetadata;
  ec2?: Ec2Metadata;
  lambdaFunction?: LambdaFunctionMetadata;
  codeRepository?: CodeRepositoryMetadata;
}
export type ResourceScanType = string;

export interface ResourceState {
  ec2: State;
  ecr: State;
  lambda?: State;
  lambdaCode?: State;
  codeRepository?: State;
}
export interface ResourceStatus {
  ec2: string;
  ecr: string;
  lambda?: string;
  lambdaCode?: string;
  codeRepository?: string;
}
export type ResourceStringComparison = string;

export interface ResourceStringFilter {
  comparison: string;
  value: string;
}
export type ResourceStringFilterList = Array<ResourceStringFilter>;
export type ResourceStringInput = string;

export type ResourceTagFilterList = Array<TagFilter>;
export type ResourceType = string;

export type RiskScore = number;

export type RuleId = string;

export type RuleSetCategories = Array<RuleSetCategory>;
export type RuleSetCategory = "SAST" | "IAC" | "SCA";
export type Runtime = string;

export type SbomReportFormat = string;

export type ScanConfigurationArn = string;

export type ScanConfigurationName = string;

export type ScanMode = string;

export interface ScanStatus {
  statusCode: string;
  reason: string;
}
export type ScanStatusCode = string;

export type ScanStatusReason = string;

export type ScanType = string;

interface _Schedule {
  oneTime?: OneTimeSchedule;
  daily?: DailySchedule;
  weekly?: WeeklySchedule;
  monthly?: MonthlySchedule;
}

export type Schedule =
  | (_Schedule & { oneTime: OneTimeSchedule })
  | (_Schedule & { daily: DailySchedule })
  | (_Schedule & { weekly: WeeklySchedule })
  | (_Schedule & { monthly: MonthlySchedule });
export interface ScopeSettings {
  projectSelectionScope?: ProjectSelectionScope;
}
export interface SearchVulnerabilitiesFilterCriteria {
  vulnerabilityIds: Array<string>;
}
export interface SearchVulnerabilitiesRequest {
  filterCriteria: SearchVulnerabilitiesFilterCriteria;
  nextToken?: string;
}
export interface SearchVulnerabilitiesResponse {
  vulnerabilities: Array<Vulnerability>;
  nextToken?: string;
}
export type SecurityGroupId = string;

export type SecurityGroupIdList = Array<string>;
export interface SendCisSessionHealthRequest {
  scanJobId: string;
  sessionToken: string;
}
export interface SendCisSessionHealthResponse {}
export interface SendCisSessionTelemetryRequest {
  scanJobId: string;
  sessionToken: string;
  messages: Array<CisSessionMessage>;
}
export interface SendCisSessionTelemetryResponse {}
export type Service = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
}> {}
export type Severity = string;

export interface SeverityCounts {
  all?: number;
  medium?: number;
  high?: number;
  critical?: number;
}
export interface SortCriteria {
  field: string;
  sortOrder: string;
}
export type SortField = string;

export type SortOrder = string;

export type SourceLayerHash = string;

export interface StartCisSessionMessage {
  sessionToken: string;
}
export interface StartCisSessionRequest {
  scanJobId: string;
  message: StartCisSessionMessage;
}
export interface StartCisSessionResponse {}
export interface StartCodeSecurityScanRequest {
  clientToken?: string;
  resource: CodeSecurityResource;
}
export interface StartCodeSecurityScanResponse {
  scanId?: string;
  status?: CodeScanStatus;
}
export interface State {
  status: string;
  errorCode: string;
  errorMessage: string;
}
export type Status = string;

export interface StatusCounts {
  failed?: number;
  skipped?: number;
  passed?: number;
}
export interface Step {
  componentId: string;
  componentType: string;
  componentArn?: string;
}
export type StepList = Array<Step>;
export interface StopCisMessageProgress {
  totalChecks?: number;
  successfulChecks?: number;
  failedChecks?: number;
  notEvaluatedChecks?: number;
  unknownChecks?: number;
  notApplicableChecks?: number;
  informationalChecks?: number;
  errorChecks?: number;
}
export interface StopCisSessionMessage {
  status: StopCisSessionStatus;
  reason?: string;
  progress: StopCisMessageProgress;
  computePlatform?: ComputePlatform;
  benchmarkVersion?: string;
  benchmarkProfile?: string;
}
export interface StopCisSessionRequest {
  scanJobId: string;
  sessionToken: string;
  message: StopCisSessionMessage;
}
export interface StopCisSessionResponse {}
export type StopCisSessionStatus =
  | "SUCCESS"
  | "FAILED"
  | "INTERRUPTED"
  | "UNSUPPORTED_OS";
export type StringComparison = string;

export interface StringFilter {
  comparison: string;
  value: string;
}
export type StringFilterList = Array<StringFilter>;
export type StringInput = string;

export type StringList = Array<string>;
export type SubnetId = string;

export type SubnetIdList = Array<string>;
export interface SuccessfulAssociationResult {
  scanConfigurationArn?: string;
  resource?: CodeSecurityResource;
}
export type SuccessfulAssociationResultList =
  Array<SuccessfulAssociationResult>;
export interface SuggestedFix {
  description?: string;
  code?: string;
}
export type SuggestedFixes = Array<SuggestedFix>;
export type TagComparison = "EQUALS";
export interface TagFilter {
  comparison: TagComparison;
  key: string;
  value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValueList = Array<string>;
export type Target = string;

export type TargetAccount = string;

export type TargetAccountList = Array<string>;
export type TargetResourceTags = Record<string, Array<string>>;
export type TargetResourceTagsKey = string;

export type TargetResourceTagsValue = string;

export type Targets = Array<string>;
export type TargetStatusFilterList = Array<CisTargetStatusFilter>;
export type TargetStatusReasonFilterList = Array<CisTargetStatusReasonFilter>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface Time {
  timeOfDay: string;
  timezone: string;
}
export type TimeOfDay = string;

export type Timezone = string;

export interface TitleAggregation {
  titles?: Array<StringFilter>;
  vulnerabilityIds?: Array<StringFilter>;
  resourceType?: string;
  sortOrder?: string;
  sortBy?: string;
  findingType?: string;
}
export interface TitleAggregationResponse {
  title: string;
  vulnerabilityId?: string;
  accountId?: string;
  severityCounts?: SeverityCounts;
}
export type TitleFilterList = Array<CisStringFilter>;
export type TitleSortBy = string;

export type Tool = string;

export type Tools = Array<string>;
export type Ttp = string;

export type Ttps = Array<string>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateCisScanConfigurationRequest {
  scanConfigurationArn: string;
  scanName?: string;
  securityLevel?: CisSecurityLevel;
  schedule?: Schedule;
  targets?: UpdateCisTargets;
}
export interface UpdateCisScanConfigurationResponse {
  scanConfigurationArn: string;
}
export interface UpdateCisTargets {
  accountIds?: Array<string>;
  targetResourceTags?: Record<string, Array<string>>;
}
export interface UpdateCodeSecurityIntegrationRequest {
  integrationArn: string;
  details: UpdateIntegrationDetails;
}
export interface UpdateCodeSecurityIntegrationResponse {
  integrationArn: string;
  status: IntegrationStatus;
}
export interface UpdateCodeSecurityScanConfigurationRequest {
  scanConfigurationArn: string;
  configuration: CodeSecurityScanConfiguration;
}
export interface UpdateCodeSecurityScanConfigurationResponse {
  scanConfigurationArn?: string;
}
export interface UpdateConfigurationRequest {
  ecrConfiguration?: EcrConfiguration;
  ec2Configuration?: Ec2Configuration;
}
export interface UpdateConfigurationResponse {}
export interface UpdateEc2DeepInspectionConfigurationRequest {
  activateDeepInspection?: boolean;
  packagePaths?: Array<string>;
}
export interface UpdateEc2DeepInspectionConfigurationResponse {
  packagePaths?: Array<string>;
  orgPackagePaths?: Array<string>;
  status?: string;
  errorMessage?: string;
}
export interface UpdateEncryptionKeyRequest {
  kmsKeyId: string;
  scanType: string;
  resourceType: string;
}
export interface UpdateEncryptionKeyResponse {}
export interface UpdateFilterRequest {
  action?: string;
  description?: string;
  filterCriteria?: FilterCriteria;
  name?: string;
  filterArn: string;
  reason?: string;
}
export interface UpdateFilterResponse {
  arn: string;
}
export interface UpdateGitHubIntegrationDetail {
  code: string;
  installationId: string;
}
export interface UpdateGitLabSelfManagedIntegrationDetail {
  authCode: string;
}
interface _UpdateIntegrationDetails {
  gitlabSelfManaged?: UpdateGitLabSelfManagedIntegrationDetail;
  github?: UpdateGitHubIntegrationDetail;
}

export type UpdateIntegrationDetails =
  | (_UpdateIntegrationDetails & {
      gitlabSelfManaged: UpdateGitLabSelfManagedIntegrationDetail;
    })
  | (_UpdateIntegrationDetails & { github: UpdateGitHubIntegrationDetail });
export interface UpdateOrganizationConfigurationRequest {
  autoEnable: AutoEnable;
}
export interface UpdateOrganizationConfigurationResponse {
  autoEnable: AutoEnable;
}
export interface UpdateOrgEc2DeepInspectionConfigurationRequest {
  orgPackagePaths: Array<string>;
}
export interface UpdateOrgEc2DeepInspectionConfigurationResponse {}
export interface Usage {
  type?: string;
  total?: number;
  estimatedMonthlyCost?: number;
  currency?: string;
}
export type UsageAccountId = string;

export type UsageAccountIdList = Array<string>;
export type UsageList = Array<Usage>;
export interface UsageTotal {
  accountId?: string;
  usage?: Array<Usage>;
}
export type UsageTotalList = Array<UsageTotal>;
export type UsageType = string;

export type UsageValue = number;

export type UUID = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: string;
  readonly fields?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFields = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type Vendor = string;

export type VendorCreatedAt = Date | string;

export type VendorSeverity = string;

export type VendorUpdatedAt = Date | string;

export type Version = string;

export type VpcId = string;

export type Vulnerabilities = Array<Vulnerability>;
export interface Vulnerability {
  id: string;
  cwes?: Array<string>;
  cisaData?: CisaData;
  source?: string;
  description?: string;
  atigData?: AtigData;
  vendorSeverity?: string;
  cvss3?: Cvss3;
  relatedVulnerabilities?: Array<string>;
  cvss2?: Cvss2;
  vendorCreatedAt?: Date | string;
  vendorUpdatedAt?: Date | string;
  sourceUrl?: string;
  referenceUrls?: Array<string>;
  exploitObserved?: ExploitObserved;
  detectionPlatforms?: Array<string>;
  epss?: Epss;
}
export type VulnerabilityDescription = string;

export type VulnerabilityId = string;

export type VulnerabilityIdList = Array<string>;
export type VulnerabilityReferenceUrl = string;

export type VulnerabilityReferenceUrls = Array<string>;
export type VulnerabilitySource = string;

export type VulnerabilitySourceUrl = string;

export interface VulnerablePackage {
  name: string;
  version: string;
  sourceLayerHash?: string;
  epoch?: number;
  release?: string;
  arch?: string;
  packageManager?: string;
  filePath?: string;
  fixedInVersion?: string;
  remediation?: string;
  sourceLambdaLayerArn?: string;
}
export type VulnerablePackageList = Array<VulnerablePackage>;
export type VulnerablePackageRemediation = string;

export type VulnId = string;

export type VulnIdList = Array<string>;
export interface WeeklySchedule {
  startTime: Time;
  days: Array<Day>;
}
export declare namespace AssociateMember {
  export type Input = AssociateMemberRequest;
  export type Output = AssociateMemberResponse;
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
  export type Output = BatchAssociateCodeSecurityScanConfigurationResponse;
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
  export type Output = BatchDisassociateCodeSecurityScanConfigurationResponse;
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
  export type Output = BatchGetAccountStatusResponse;
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
  export type Output = BatchGetCodeSnippetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetFindingDetails {
  export type Input = BatchGetFindingDetailsRequest;
  export type Output = BatchGetFindingDetailsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetFreeTrialInfo {
  export type Input = BatchGetFreeTrialInfoRequest;
  export type Output = BatchGetFreeTrialInfoResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetMemberEc2DeepInspectionStatus {
  export type Input = BatchGetMemberEc2DeepInspectionStatusRequest;
  export type Output = BatchGetMemberEc2DeepInspectionStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchUpdateMemberEc2DeepInspectionStatus {
  export type Input = BatchUpdateMemberEc2DeepInspectionStatusRequest;
  export type Output = BatchUpdateMemberEc2DeepInspectionStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelFindingsReport {
  export type Input = CancelFindingsReportRequest;
  export type Output = CancelFindingsReportResponse;
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
  export type Output = CancelSbomExportResponse;
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
  export type Output = CreateCisScanConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCodeSecurityIntegration {
  export type Input = CreateCodeSecurityIntegrationRequest;
  export type Output = CreateCodeSecurityIntegrationResponse;
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
  export type Output = CreateCodeSecurityScanConfigurationResponse;
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
  export type Output = CreateFilterResponse;
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
  export type Output = CreateFindingsReportResponse;
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
  export type Output = CreateSbomExportResponse;
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
  export type Output = DeleteCisScanConfigurationResponse;
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
  export type Output = DeleteCodeSecurityIntegrationResponse;
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
  export type Output = DeleteCodeSecurityScanConfigurationResponse;
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
  export type Output = DeleteFilterResponse;
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
  export type Output = DescribeOrganizationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Disable {
  export type Input = DisableRequest;
  export type Output = DisableResponse;
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
  export type Output = DisableDelegatedAdminAccountResponse;
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
  export type Output = DisassociateMemberResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Enable {
  export type Input = EnableRequest;
  export type Output = EnableResponse;
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
  export type Output = EnableDelegatedAdminAccountResponse;
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
  export type Output = GetCisScanReportResponse;
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
  export type Output = GetCisScanResultDetailsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetClustersForImage {
  export type Input = GetClustersForImageRequest;
  export type Output = GetClustersForImageResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCodeSecurityIntegration {
  export type Input = GetCodeSecurityIntegrationRequest;
  export type Output = GetCodeSecurityIntegrationResponse;
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
  export type Output = GetCodeSecurityScanResponse;
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
  export type Output = GetCodeSecurityScanConfigurationResponse;
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
  export type Output = GetConfigurationResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetDelegatedAdminAccount {
  export type Input = GetDelegatedAdminAccountRequest;
  export type Output = GetDelegatedAdminAccountResponse;
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
  export type Output = GetEc2DeepInspectionConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetEncryptionKey {
  export type Input = GetEncryptionKeyRequest;
  export type Output = GetEncryptionKeyResponse;
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
  export type Output = GetFindingsReportStatusResponse;
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
  export type Output = GetMemberResponse;
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
  export type Output = GetSbomExportResponse;
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
  export type Output = ListAccountPermissionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCisScanConfigurations {
  export type Input = ListCisScanConfigurationsRequest;
  export type Output = ListCisScanConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCisScanResultsAggregatedByChecks {
  export type Input = ListCisScanResultsAggregatedByChecksRequest;
  export type Output = ListCisScanResultsAggregatedByChecksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCisScanResultsAggregatedByTargetResource {
  export type Input = ListCisScanResultsAggregatedByTargetResourceRequest;
  export type Output = ListCisScanResultsAggregatedByTargetResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCisScans {
  export type Input = ListCisScansRequest;
  export type Output = ListCisScansResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCodeSecurityIntegrations {
  export type Input = ListCodeSecurityIntegrationsRequest;
  export type Output = ListCodeSecurityIntegrationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCodeSecurityScanConfigurationAssociations {
  export type Input = ListCodeSecurityScanConfigurationAssociationsRequest;
  export type Output = ListCodeSecurityScanConfigurationAssociationsResponse;
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
  export type Output = ListCodeSecurityScanConfigurationsResponse;
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
  export type Output = ListCoverageResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCoverageStatistics {
  export type Input = ListCoverageStatisticsRequest;
  export type Output = ListCoverageStatisticsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDelegatedAdminAccounts {
  export type Input = ListDelegatedAdminAccountsRequest;
  export type Output = ListDelegatedAdminAccountsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFilters {
  export type Input = ListFiltersRequest;
  export type Output = ListFiltersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFindingAggregations {
  export type Input = ListFindingAggregationsRequest;
  export type Output = ListFindingAggregationsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFindings {
  export type Input = ListFindingsRequest;
  export type Output = ListFindingsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMembers {
  export type Input = ListMembersRequest;
  export type Output = ListMembersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListUsageTotals {
  export type Input = ListUsageTotalsRequest;
  export type Output = ListUsageTotalsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResetEncryptionKey {
  export type Input = ResetEncryptionKeyRequest;
  export type Output = ResetEncryptionKeyResponse;
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
  export type Output = SearchVulnerabilitiesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendCisSessionHealth {
  export type Input = SendCisSessionHealthRequest;
  export type Output = SendCisSessionHealthResponse;
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
  export type Output = SendCisSessionTelemetryResponse;
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
  export type Output = StartCisSessionResponse;
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
  export type Output = StartCodeSecurityScanResponse;
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
  export type Output = StopCisSessionResponse;
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
  export type Output = TagResourceResponse;
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
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCisScanConfiguration {
  export type Input = UpdateCisScanConfigurationRequest;
  export type Output = UpdateCisScanConfigurationResponse;
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
  export type Output = UpdateCodeSecurityIntegrationResponse;
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
  export type Output = UpdateCodeSecurityScanConfigurationResponse;
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
  export type Output = UpdateConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEc2DeepInspectionConfiguration {
  export type Input = UpdateEc2DeepInspectionConfigurationRequest;
  export type Output = UpdateEc2DeepInspectionConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEncryptionKey {
  export type Input = UpdateEncryptionKeyRequest;
  export type Output = UpdateEncryptionKeyResponse;
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
  export type Output = UpdateFilterResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateOrganizationConfiguration {
  export type Input = UpdateOrganizationConfigurationRequest;
  export type Output = UpdateOrganizationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateOrgEc2DeepInspectionConfiguration {
  export type Input = UpdateOrgEc2DeepInspectionConfigurationRequest;
  export type Output = UpdateOrgEc2DeepInspectionConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
