import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Macie2 {
  acceptInvitation(
    input: AcceptInvitationRequest,
  ): Effect.Effect<
    AcceptInvitationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchGetCustomDataIdentifiers(
    input: BatchGetCustomDataIdentifiersRequest,
  ): Effect.Effect<
    BatchGetCustomDataIdentifiersResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchUpdateAutomatedDiscoveryAccounts(
    input: BatchUpdateAutomatedDiscoveryAccountsRequest,
  ): Effect.Effect<
    BatchUpdateAutomatedDiscoveryAccountsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAllowList(
    input: CreateAllowListRequest,
  ): Effect.Effect<
    CreateAllowListResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createClassificationJob(
    input: CreateClassificationJobRequest,
  ): Effect.Effect<
    CreateClassificationJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createCustomDataIdentifier(
    input: CreateCustomDataIdentifierRequest,
  ): Effect.Effect<
    CreateCustomDataIdentifierResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createFindingsFilter(
    input: CreateFindingsFilterRequest,
  ): Effect.Effect<
    CreateFindingsFilterResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createInvitations(
    input: CreateInvitationsRequest,
  ): Effect.Effect<
    CreateInvitationsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createMember(
    input: CreateMemberRequest,
  ): Effect.Effect<
    CreateMemberResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createSampleFindings(
    input: CreateSampleFindingsRequest,
  ): Effect.Effect<
    CreateSampleFindingsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  declineInvitations(
    input: DeclineInvitationsRequest,
  ): Effect.Effect<
    DeclineInvitationsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAllowList(
    input: DeleteAllowListRequest,
  ): Effect.Effect<
    DeleteAllowListResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCustomDataIdentifier(
    input: DeleteCustomDataIdentifierRequest,
  ): Effect.Effect<
    DeleteCustomDataIdentifierResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteFindingsFilter(
    input: DeleteFindingsFilterRequest,
  ): Effect.Effect<
    DeleteFindingsFilterResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteInvitations(
    input: DeleteInvitationsRequest,
  ): Effect.Effect<
    DeleteInvitationsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteMember(
    input: DeleteMemberRequest,
  ): Effect.Effect<
    DeleteMemberResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeBuckets(
    input: DescribeBucketsRequest,
  ): Effect.Effect<
    DescribeBucketsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeClassificationJob(
    input: DescribeClassificationJobRequest,
  ): Effect.Effect<
    DescribeClassificationJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeOrganizationConfiguration(
    input: DescribeOrganizationConfigurationRequest,
  ): Effect.Effect<
    DescribeOrganizationConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disableMacie(
    input: DisableMacieRequest,
  ): Effect.Effect<
    DisableMacieResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disableOrganizationAdminAccount(
    input: DisableOrganizationAdminAccountRequest,
  ): Effect.Effect<
    DisableOrganizationAdminAccountResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateFromAdministratorAccount(
    input: DisassociateFromAdministratorAccountRequest,
  ): Effect.Effect<
    DisassociateFromAdministratorAccountResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateFromMasterAccount(
    input: DisassociateFromMasterAccountRequest,
  ): Effect.Effect<
    DisassociateFromMasterAccountResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateMember(
    input: DisassociateMemberRequest,
  ): Effect.Effect<
    DisassociateMemberResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  enableMacie(
    input: EnableMacieRequest,
  ): Effect.Effect<
    EnableMacieResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  enableOrganizationAdminAccount(
    input: EnableOrganizationAdminAccountRequest,
  ): Effect.Effect<
    EnableOrganizationAdminAccountResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAdministratorAccount(
    input: GetAdministratorAccountRequest,
  ): Effect.Effect<
    GetAdministratorAccountResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAllowList(
    input: GetAllowListRequest,
  ): Effect.Effect<
    GetAllowListResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAutomatedDiscoveryConfiguration(
    input: GetAutomatedDiscoveryConfigurationRequest,
  ): Effect.Effect<
    GetAutomatedDiscoveryConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getBucketStatistics(
    input: GetBucketStatisticsRequest,
  ): Effect.Effect<
    GetBucketStatisticsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getClassificationExportConfiguration(
    input: GetClassificationExportConfigurationRequest,
  ): Effect.Effect<
    GetClassificationExportConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getClassificationScope(
    input: GetClassificationScopeRequest,
  ): Effect.Effect<
    GetClassificationScopeResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCustomDataIdentifier(
    input: GetCustomDataIdentifierRequest,
  ): Effect.Effect<
    GetCustomDataIdentifierResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getFindings(
    input: GetFindingsRequest,
  ): Effect.Effect<
    GetFindingsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getFindingsFilter(
    input: GetFindingsFilterRequest,
  ): Effect.Effect<
    GetFindingsFilterResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getFindingsPublicationConfiguration(
    input: GetFindingsPublicationConfigurationRequest,
  ): Effect.Effect<
    GetFindingsPublicationConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getFindingStatistics(
    input: GetFindingStatisticsRequest,
  ): Effect.Effect<
    GetFindingStatisticsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getInvitationsCount(
    input: GetInvitationsCountRequest,
  ): Effect.Effect<
    GetInvitationsCountResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMacieSession(
    input: GetMacieSessionRequest,
  ): Effect.Effect<
    GetMacieSessionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMasterAccount(
    input: GetMasterAccountRequest,
  ): Effect.Effect<
    GetMasterAccountResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMember(
    input: GetMemberRequest,
  ): Effect.Effect<
    GetMemberResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getResourceProfile(
    input: GetResourceProfileRequest,
  ): Effect.Effect<
    GetResourceProfileResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getRevealConfiguration(
    input: GetRevealConfigurationRequest,
  ): Effect.Effect<
    GetRevealConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSensitiveDataOccurrences(
    input: GetSensitiveDataOccurrencesRequest,
  ): Effect.Effect<
    GetSensitiveDataOccurrencesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnprocessableEntityException
    | CommonAwsError
  >;
  getSensitiveDataOccurrencesAvailability(
    input: GetSensitiveDataOccurrencesAvailabilityRequest,
  ): Effect.Effect<
    GetSensitiveDataOccurrencesAvailabilityResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getSensitivityInspectionTemplate(
    input: GetSensitivityInspectionTemplateRequest,
  ): Effect.Effect<
    GetSensitivityInspectionTemplateResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getUsageStatistics(
    input: GetUsageStatisticsRequest,
  ): Effect.Effect<
    GetUsageStatisticsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getUsageTotals(
    input: GetUsageTotalsRequest,
  ): Effect.Effect<
    GetUsageTotalsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAllowLists(
    input: ListAllowListsRequest,
  ): Effect.Effect<
    ListAllowListsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAutomatedDiscoveryAccounts(
    input: ListAutomatedDiscoveryAccountsRequest,
  ): Effect.Effect<
    ListAutomatedDiscoveryAccountsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listClassificationJobs(
    input: ListClassificationJobsRequest,
  ): Effect.Effect<
    ListClassificationJobsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listClassificationScopes(
    input: ListClassificationScopesRequest,
  ): Effect.Effect<
    ListClassificationScopesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCustomDataIdentifiers(
    input: ListCustomDataIdentifiersRequest,
  ): Effect.Effect<
    ListCustomDataIdentifiersResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFindings(
    input: ListFindingsRequest,
  ): Effect.Effect<
    ListFindingsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listFindingsFilters(
    input: ListFindingsFiltersRequest,
  ): Effect.Effect<
    ListFindingsFiltersResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listInvitations(
    input: ListInvitationsRequest,
  ): Effect.Effect<
    ListInvitationsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listManagedDataIdentifiers(
    input: ListManagedDataIdentifiersRequest,
  ): Effect.Effect<ListManagedDataIdentifiersResponse, CommonAwsError>;
  listMembers(
    input: ListMembersRequest,
  ): Effect.Effect<
    ListMembersResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listOrganizationAdminAccounts(
    input: ListOrganizationAdminAccountsRequest,
  ): Effect.Effect<
    ListOrganizationAdminAccountsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listResourceProfileArtifacts(
    input: ListResourceProfileArtifactsRequest,
  ): Effect.Effect<
    ListResourceProfileArtifactsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listResourceProfileDetections(
    input: ListResourceProfileDetectionsRequest,
  ): Effect.Effect<
    ListResourceProfileDetectionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSensitivityInspectionTemplates(
    input: ListSensitivityInspectionTemplatesRequest,
  ): Effect.Effect<
    ListSensitivityInspectionTemplatesResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<ListTagsForResourceResponse, CommonAwsError>;
  putClassificationExportConfiguration(
    input: PutClassificationExportConfigurationRequest,
  ): Effect.Effect<
    PutClassificationExportConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putFindingsPublicationConfiguration(
    input: PutFindingsPublicationConfigurationRequest,
  ): Effect.Effect<
    PutFindingsPublicationConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchResources(
    input: SearchResourcesRequest,
  ): Effect.Effect<
    SearchResourcesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<TagResourceResponse, CommonAwsError>;
  testCustomDataIdentifier(
    input: TestCustomDataIdentifierRequest,
  ): Effect.Effect<
    TestCustomDataIdentifierResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<UntagResourceResponse, CommonAwsError>;
  updateAllowList(
    input: UpdateAllowListRequest,
  ): Effect.Effect<
    UpdateAllowListResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateAutomatedDiscoveryConfiguration(
    input: UpdateAutomatedDiscoveryConfigurationRequest,
  ): Effect.Effect<
    UpdateAutomatedDiscoveryConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateClassificationJob(
    input: UpdateClassificationJobRequest,
  ): Effect.Effect<
    UpdateClassificationJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateClassificationScope(
    input: UpdateClassificationScopeRequest,
  ): Effect.Effect<
    UpdateClassificationScopeResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateFindingsFilter(
    input: UpdateFindingsFilterRequest,
  ): Effect.Effect<
    UpdateFindingsFilterResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateMacieSession(
    input: UpdateMacieSessionRequest,
  ): Effect.Effect<
    UpdateMacieSessionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateMemberSession(
    input: UpdateMemberSessionRequest,
  ): Effect.Effect<
    UpdateMemberSessionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateOrganizationConfiguration(
    input: UpdateOrganizationConfigurationRequest,
  ): Effect.Effect<
    UpdateOrganizationConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateResourceProfile(
    input: UpdateResourceProfileRequest,
  ): Effect.Effect<
    UpdateResourceProfileResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateResourceProfileDetections(
    input: UpdateResourceProfileDetectionsRequest,
  ): Effect.Effect<
    UpdateResourceProfileDetectionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateRevealConfiguration(
    input: UpdateRevealConfigurationRequest,
  ): Effect.Effect<
    UpdateRevealConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateSensitivityInspectionTemplate(
    input: UpdateSensitivityInspectionTemplateRequest,
  ): Effect.Effect<
    UpdateSensitivityInspectionTemplateResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type __boolean = boolean;

export type __double = number;

export type __integer = number;

export type __listOf__string = Array<string>;
export type __listOfAdminAccount = Array<AdminAccount>;
export type __listOfAllowListSummary = Array<AllowListSummary>;
export type __listOfAutomatedDiscoveryAccount =
  Array<AutomatedDiscoveryAccount>;
export type __listOfAutomatedDiscoveryAccountUpdate =
  Array<AutomatedDiscoveryAccountUpdate>;
export type __listOfAutomatedDiscoveryAccountUpdateError =
  Array<AutomatedDiscoveryAccountUpdateError>;
export type __listOfBatchGetCustomDataIdentifierSummary =
  Array<BatchGetCustomDataIdentifierSummary>;
export type __listOfBucketMetadata = Array<BucketMetadata>;
export type __listOfClassificationScopeSummary =
  Array<ClassificationScopeSummary>;
export type __listOfCriteriaForJob = Array<CriteriaForJob>;
export type __listOfCustomDataIdentifierSummary =
  Array<CustomDataIdentifierSummary>;
export type __listOfDetectedDataDetails = Array<DetectedDataDetails>;
export type __listOfDetection = Array<Detection>;
export type __listOfFinding = Array<Finding>;
export type __listOfFindingsFilterListItem = Array<FindingsFilterListItem>;
export type __listOfFindingType = Array<FindingType>;
export type __listOfGroupCount = Array<GroupCount>;
export type __listOfInvitation = Array<Invitation>;
export type __listOfJobScopeTerm = Array<JobScopeTerm>;
export type __listOfJobSummary = Array<JobSummary>;
export type __listOfKeyValuePair = Array<KeyValuePair>;
export type __listOfListJobsFilterTerm = Array<ListJobsFilterTerm>;
export type __listOfManagedDataIdentifierSummary =
  Array<ManagedDataIdentifierSummary>;
export type __listOfMatchingResource = Array<MatchingResource>;
export type __listOfMember = Array<Member>;
export type __listOfResourceProfileArtifact = Array<ResourceProfileArtifact>;
export type __listOfS3BucketDefinitionForJob = Array<S3BucketDefinitionForJob>;
export type __listOfS3BucketName = Array<string>;
export type __listOfSearchResourcesCriteria = Array<SearchResourcesCriteria>;
export type __listOfSearchResourcesTagCriterionPair =
  Array<SearchResourcesTagCriterionPair>;
export type __listOfSensitivityInspectionTemplatesEntry =
  Array<SensitivityInspectionTemplatesEntry>;
export type __listOfSuppressDataIdentifier = Array<SuppressDataIdentifier>;
export type __listOfTagCriterionPairForJob = Array<TagCriterionPairForJob>;
export type __listOfTagValuePair = Array<TagValuePair>;
export type __listOfUnavailabilityReasonCode = Array<UnavailabilityReasonCode>;
export type __listOfUnprocessedAccount = Array<UnprocessedAccount>;
export type __listOfUsageByAccount = Array<UsageByAccount>;
export type __listOfUsageRecord = Array<UsageRecord>;
export type __listOfUsageStatisticsFilter = Array<UsageStatisticsFilter>;
export type __listOfUsageTotal = Array<UsageTotal>;
export type __long = number;

export type __string = string;

export type __stringMin1Max1024PatternSS = string;

export type __stringMin1Max128 = string;

export type __stringMin1Max128Pattern = string;

export type __stringMin1Max2048 = string;

export type __stringMin1Max512PatternSS = string;

export type __stringMin1Max64PatternW = string;

export type __stringMin22Max22PatternAZ0922 = string;

export type __stringMin3Max255PatternAZaZ093255 = string;

export type __stringMin71Max89PatternArnAwsAwsCnAwsUsGovMacie2AZ19920D12AllowListAZ0922 =
  string;

export type __timestampIso8601 = Date | string;

export interface AcceptInvitationRequest {
  administratorAccountId?: string;
  invitationId: string;
  masterAccount?: string;
}
export interface AcceptInvitationResponse {}
export interface AccessControlList {
  allowsPublicReadAccess?: boolean;
  allowsPublicWriteAccess?: boolean;
}
export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface AccountDetail {
  accountId: string;
  email: string;
}
export interface AccountLevelPermissions {
  blockPublicAccess?: BlockPublicAccess;
}
export interface AdminAccount {
  accountId?: string;
  status?: AdminStatus;
}
export type AdminStatus = "ENABLED" | "DISABLING_IN_PROGRESS";
export interface AllowListCriteria {
  regex?: string;
  s3WordsList?: S3WordsList;
}
export interface AllowListStatus {
  code: AllowListStatusCode;
  description?: string;
}
export type AllowListStatusCode =
  | "OK"
  | "S3_OBJECT_NOT_FOUND"
  | "S3_USER_ACCESS_DENIED"
  | "S3_OBJECT_ACCESS_DENIED"
  | "S3_THROTTLED"
  | "S3_OBJECT_OVERSIZE"
  | "S3_OBJECT_EMPTY"
  | "UNKNOWN_ERROR";
export interface AllowListSummary {
  arn?: string;
  createdAt?: Date | string;
  description?: string;
  id?: string;
  name?: string;
  updatedAt?: Date | string;
}
export type AllowsUnencryptedObjectUploads = "TRUE" | "FALSE" | "UNKNOWN";
export interface ApiCallDetails {
  api?: string;
  apiServiceName?: string;
  firstSeen?: Date | string;
  lastSeen?: Date | string;
}
export interface AssumedRole {
  accessKeyId?: string;
  accountId?: string;
  arn?: string;
  principalId?: string;
  sessionContext?: SessionContext;
}
export type AutoEnableMode = "ALL" | "NEW" | "NONE";
export interface AutomatedDiscoveryAccount {
  accountId?: string;
  status?: AutomatedDiscoveryAccountStatus;
}
export type AutomatedDiscoveryAccountStatus = "ENABLED" | "DISABLED";
export interface AutomatedDiscoveryAccountUpdate {
  accountId?: string;
  status?: AutomatedDiscoveryAccountStatus;
}
export interface AutomatedDiscoveryAccountUpdateError {
  accountId?: string;
  errorCode?: AutomatedDiscoveryAccountUpdateErrorCode;
}
export type AutomatedDiscoveryAccountUpdateErrorCode =
  | "ACCOUNT_PAUSED"
  | "ACCOUNT_NOT_FOUND";
export type AutomatedDiscoveryMonitoringStatus = "MONITORED" | "NOT_MONITORED";
export type AutomatedDiscoveryStatus = "ENABLED" | "DISABLED";
export type AvailabilityCode = "AVAILABLE" | "UNAVAILABLE";
export interface AwsAccount {
  accountId?: string;
  principalId?: string;
}
export interface AwsService {
  invokedBy?: string;
}
export interface BatchGetCustomDataIdentifiersRequest {
  ids?: Array<string>;
}
export interface BatchGetCustomDataIdentifiersResponse {
  customDataIdentifiers?: Array<BatchGetCustomDataIdentifierSummary>;
  notFoundIdentifierIds?: Array<string>;
}
export interface BatchGetCustomDataIdentifierSummary {
  arn?: string;
  createdAt?: Date | string;
  deleted?: boolean;
  description?: string;
  id?: string;
  name?: string;
}
export interface BatchUpdateAutomatedDiscoveryAccountsRequest {
  accounts?: Array<AutomatedDiscoveryAccountUpdate>;
}
export interface BatchUpdateAutomatedDiscoveryAccountsResponse {
  errors?: Array<AutomatedDiscoveryAccountUpdateError>;
}
export interface BlockPublicAccess {
  blockPublicAcls?: boolean;
  blockPublicPolicy?: boolean;
  ignorePublicAcls?: boolean;
  restrictPublicBuckets?: boolean;
}
export interface BucketCountByEffectivePermission {
  publiclyAccessible?: number;
  publiclyReadable?: number;
  publiclyWritable?: number;
  unknown?: number;
}
export interface BucketCountByEncryptionType {
  kmsManaged?: number;
  s3Managed?: number;
  unencrypted?: number;
  unknown?: number;
}
export interface BucketCountBySharedAccessType {
  external?: number;
  internal?: number;
  notShared?: number;
  unknown?: number;
}
export interface BucketCountPolicyAllowsUnencryptedObjectUploads {
  allowsUnencryptedObjectUploads?: number;
  deniesUnencryptedObjectUploads?: number;
  unknown?: number;
}
export type BucketCriteria = Record<string, BucketCriteriaAdditionalProperties>;
export interface BucketCriteriaAdditionalProperties {
  eq?: Array<string>;
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
  neq?: Array<string>;
  prefix?: string;
}
export interface BucketLevelPermissions {
  accessControlList?: AccessControlList;
  blockPublicAccess?: BlockPublicAccess;
  bucketPolicy?: BucketPolicy;
}
export interface BucketMetadata {
  accountId?: string;
  allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploads;
  automatedDiscoveryMonitoringStatus?: AutomatedDiscoveryMonitoringStatus;
  bucketArn?: string;
  bucketCreatedAt?: Date | string;
  bucketName?: string;
  classifiableObjectCount?: number;
  classifiableSizeInBytes?: number;
  errorCode?: BucketMetadataErrorCode;
  errorMessage?: string;
  jobDetails?: JobDetails;
  lastAutomatedDiscoveryTime?: Date | string;
  lastUpdated?: Date | string;
  objectCount?: number;
  objectCountByEncryptionType?: ObjectCountByEncryptionType;
  publicAccess?: BucketPublicAccess;
  region?: string;
  replicationDetails?: ReplicationDetails;
  sensitivityScore?: number;
  serverSideEncryption?: BucketServerSideEncryption;
  sharedAccess?: SharedAccess;
  sizeInBytes?: number;
  sizeInBytesCompressed?: number;
  tags?: Array<KeyValuePair>;
  unclassifiableObjectCount?: ObjectLevelStatistics;
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
  versioning?: boolean;
}
export type BucketMetadataErrorCode =
  | "ACCESS_DENIED"
  | "BUCKET_COUNT_EXCEEDS_QUOTA";
export interface BucketPermissionConfiguration {
  accountLevelPermissions?: AccountLevelPermissions;
  bucketLevelPermissions?: BucketLevelPermissions;
}
export interface BucketPolicy {
  allowsPublicReadAccess?: boolean;
  allowsPublicWriteAccess?: boolean;
}
export interface BucketPublicAccess {
  effectivePermission?: EffectivePermission;
  permissionConfiguration?: BucketPermissionConfiguration;
}
export interface BucketServerSideEncryption {
  kmsMasterKeyId?: string;
  type?: Type;
}
export interface BucketSortCriteria {
  attributeName?: string;
  orderBy?: OrderBy;
}
export interface BucketStatisticsBySensitivity {
  classificationError?: SensitivityAggregations;
  notClassified?: SensitivityAggregations;
  notSensitive?: SensitivityAggregations;
  sensitive?: SensitivityAggregations;
}
export interface Cell {
  cellReference?: string;
  column?: number;
  columnName?: string;
  row?: number;
}
export type Cells = Array<Cell>;
export interface ClassificationDetails {
  detailedResultsLocation?: string;
  jobArn?: string;
  jobId?: string;
  originType?: OriginType;
  result?: ClassificationResult;
}
export interface ClassificationExportConfiguration {
  s3Destination?: S3Destination;
}
export interface ClassificationResult {
  additionalOccurrences?: boolean;
  customDataIdentifiers?: CustomDataIdentifiers;
  mimeType?: string;
  sensitiveData?: Array<SensitiveDataItem>;
  sizeClassified?: number;
  status?: ClassificationResultStatus;
}
export interface ClassificationResultStatus {
  code?: string;
  reason?: string;
}
export type ClassificationScopeId = string;

export type ClassificationScopeName = string;

export interface ClassificationScopeSummary {
  id?: string;
  name?: string;
}
export type ClassificationScopeUpdateOperation = "ADD" | "REPLACE" | "REMOVE";
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateAllowListRequest {
  clientToken: string;
  criteria: AllowListCriteria;
  description?: string;
  name: string;
  tags?: Record<string, string>;
}
export interface CreateAllowListResponse {
  arn?: string;
  id?: string;
}
export interface CreateClassificationJobRequest {
  allowListIds?: Array<string>;
  clientToken: string;
  customDataIdentifierIds?: Array<string>;
  description?: string;
  initialRun?: boolean;
  jobType: JobType;
  managedDataIdentifierIds?: Array<string>;
  managedDataIdentifierSelector?: ManagedDataIdentifierSelector;
  name: string;
  s3JobDefinition: S3JobDefinition;
  samplingPercentage?: number;
  scheduleFrequency?: JobScheduleFrequency;
  tags?: Record<string, string>;
}
export interface CreateClassificationJobResponse {
  jobArn?: string;
  jobId?: string;
}
export interface CreateCustomDataIdentifierRequest {
  clientToken?: string;
  description?: string;
  ignoreWords?: Array<string>;
  keywords?: Array<string>;
  maximumMatchDistance?: number;
  name: string;
  regex: string;
  severityLevels?: Array<SeverityLevel>;
  tags?: Record<string, string>;
}
export interface CreateCustomDataIdentifierResponse {
  customDataIdentifierId?: string;
}
export interface CreateFindingsFilterRequest {
  action: FindingsFilterAction;
  clientToken?: string;
  description?: string;
  findingCriteria: FindingCriteria;
  name: string;
  position?: number;
  tags?: Record<string, string>;
}
export interface CreateFindingsFilterResponse {
  arn?: string;
  id?: string;
}
export interface CreateInvitationsRequest {
  accountIds: Array<string>;
  disableEmailNotification?: boolean;
  message?: string;
}
export interface CreateInvitationsResponse {
  unprocessedAccounts?: Array<UnprocessedAccount>;
}
export interface CreateMemberRequest {
  account: AccountDetail;
  tags?: Record<string, string>;
}
export interface CreateMemberResponse {
  arn?: string;
}
export interface CreateSampleFindingsRequest {
  findingTypes?: Array<FindingType>;
}
export interface CreateSampleFindingsResponse {}
export interface CriteriaBlockForJob {
  and?: Array<CriteriaForJob>;
}
export interface CriteriaForJob {
  simpleCriterion?: SimpleCriterionForJob;
  tagCriterion?: TagCriterionForJob;
}
export type Criterion = Record<string, CriterionAdditionalProperties>;
export interface CriterionAdditionalProperties {
  eq?: Array<string>;
  eqExactMatch?: Array<string>;
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
  neq?: Array<string>;
}
export type Currency = "USD";
export interface CustomDataIdentifiers {
  detections?: Array<CustomDetection>;
  totalCount?: number;
}
export interface CustomDataIdentifierSummary {
  arn?: string;
  createdAt?: Date | string;
  description?: string;
  id?: string;
  name?: string;
}
export interface CustomDetection {
  arn?: string;
  count?: number;
  name?: string;
  occurrences?: Occurrences;
}
export type CustomDetections = Array<CustomDetection>;
export interface DailySchedule {}
export type DataIdentifierSeverity = "LOW" | "MEDIUM" | "HIGH";
export type DataIdentifierType = "CUSTOM" | "MANAGED";
export type DayOfWeek =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY";
export interface DeclineInvitationsRequest {
  accountIds: Array<string>;
}
export interface DeclineInvitationsResponse {
  unprocessedAccounts?: Array<UnprocessedAccount>;
}
export interface DefaultDetection {
  count?: number;
  occurrences?: Occurrences;
  type?: string;
}
export type DefaultDetections = Array<DefaultDetection>;
export interface DeleteAllowListRequest {
  id: string;
  ignoreJobChecks?: string;
}
export interface DeleteAllowListResponse {}
export interface DeleteCustomDataIdentifierRequest {
  id: string;
}
export interface DeleteCustomDataIdentifierResponse {}
export interface DeleteFindingsFilterRequest {
  id: string;
}
export interface DeleteFindingsFilterResponse {}
export interface DeleteInvitationsRequest {
  accountIds: Array<string>;
}
export interface DeleteInvitationsResponse {
  unprocessedAccounts?: Array<UnprocessedAccount>;
}
export interface DeleteMemberRequest {
  id: string;
}
export interface DeleteMemberResponse {}
export interface DescribeBucketsRequest {
  criteria?: Record<string, BucketCriteriaAdditionalProperties>;
  maxResults?: number;
  nextToken?: string;
  sortCriteria?: BucketSortCriteria;
}
export interface DescribeBucketsResponse {
  buckets?: Array<BucketMetadata>;
  nextToken?: string;
}
export interface DescribeClassificationJobRequest {
  jobId: string;
}
export interface DescribeClassificationJobResponse {
  allowListIds?: Array<string>;
  clientToken?: string;
  createdAt?: Date | string;
  customDataIdentifierIds?: Array<string>;
  description?: string;
  initialRun?: boolean;
  jobArn?: string;
  jobId?: string;
  jobStatus?: JobStatus;
  jobType?: JobType;
  lastRunErrorStatus?: LastRunErrorStatus;
  lastRunTime?: Date | string;
  managedDataIdentifierIds?: Array<string>;
  managedDataIdentifierSelector?: ManagedDataIdentifierSelector;
  name?: string;
  s3JobDefinition?: S3JobDefinition;
  samplingPercentage?: number;
  scheduleFrequency?: JobScheduleFrequency;
  statistics?: Statistics;
  tags?: Record<string, string>;
  userPausedDetails?: UserPausedDetails;
}
export interface DescribeOrganizationConfigurationRequest {}
export interface DescribeOrganizationConfigurationResponse {
  autoEnable?: boolean;
  maxAccountLimitReached?: boolean;
}
export interface DetectedDataDetails {
  value: string;
}
export interface Detection {
  arn?: string;
  count?: number;
  id?: string;
  name?: string;
  suppressed?: boolean;
  type?: DataIdentifierType;
}
export interface DisableMacieRequest {}
export interface DisableMacieResponse {}
export interface DisableOrganizationAdminAccountRequest {
  adminAccountId: string;
}
export interface DisableOrganizationAdminAccountResponse {}
export interface DisassociateFromAdministratorAccountRequest {}
export interface DisassociateFromAdministratorAccountResponse {}
export interface DisassociateFromMasterAccountRequest {}
export interface DisassociateFromMasterAccountResponse {}
export interface DisassociateMemberRequest {
  id: string;
}
export interface DisassociateMemberResponse {}
export interface DomainDetails {
  domainName?: string;
}
export type EffectivePermission = "PUBLIC" | "NOT_PUBLIC" | "UNKNOWN";
export interface EnableMacieRequest {
  clientToken?: string;
  findingPublishingFrequency?: FindingPublishingFrequency;
  status?: MacieStatus;
}
export interface EnableMacieResponse {}
export interface EnableOrganizationAdminAccountRequest {
  adminAccountId: string;
  clientToken?: string;
}
export interface EnableOrganizationAdminAccountResponse {}
export type EncryptionType =
  | "NONE"
  | "AES256"
  | "aws_kms"
  | "UNKNOWN"
  | "aws_kms_dsse";
export type ErrorCode = "ClientError" | "InternalError";
export interface FederatedUser {
  accessKeyId?: string;
  accountId?: string;
  arn?: string;
  principalId?: string;
  sessionContext?: SessionContext;
}
export interface Finding {
  accountId?: string;
  archived?: boolean;
  category?: FindingCategory;
  classificationDetails?: ClassificationDetails;
  count?: number;
  createdAt?: Date | string;
  description?: string;
  id?: string;
  partition?: string;
  policyDetails?: PolicyDetails;
  region?: string;
  resourcesAffected?: ResourcesAffected;
  sample?: boolean;
  schemaVersion?: string;
  severity?: Severity;
  title?: string;
  type?: FindingType;
  updatedAt?: Date | string;
}
export interface FindingAction {
  actionType?: FindingActionType;
  apiCallDetails?: ApiCallDetails;
}
export type FindingActionType = "AWS_API_CALL";
export interface FindingActor {
  domainDetails?: DomainDetails;
  ipAddressDetails?: IpAddressDetails;
  userIdentity?: UserIdentity;
}
export type FindingCategory = "CLASSIFICATION" | "POLICY";
export interface FindingCriteria {
  criterion?: Record<string, CriterionAdditionalProperties>;
}
export type FindingPublishingFrequency =
  | "FIFTEEN_MINUTES"
  | "ONE_HOUR"
  | "SIX_HOURS";
export type FindingsFilterAction = "ARCHIVE" | "NOOP";
export interface FindingsFilterListItem {
  action?: FindingsFilterAction;
  arn?: string;
  id?: string;
  name?: string;
  tags?: Record<string, string>;
}
export type FindingStatisticsSortAttributeName = "groupKey" | "count";
export interface FindingStatisticsSortCriteria {
  attributeName?: FindingStatisticsSortAttributeName;
  orderBy?: OrderBy;
}
export type FindingType =
  | "SensitiveData_S3Object_Multiple"
  | "SensitiveData_S3Object_Financial"
  | "SensitiveData_S3Object_Personal"
  | "SensitiveData_S3Object_Credentials"
  | "SensitiveData_S3Object_CustomIdentifier"
  | "Policy_IAMUser_S3BucketPublic"
  | "Policy_IAMUser_S3BucketSharedExternally"
  | "Policy_IAMUser_S3BucketReplicatedExternally"
  | "Policy_IAMUser_S3BucketEncryptionDisabled"
  | "Policy_IAMUser_S3BlockPublicAccessDisabled"
  | "Policy_IAMUser_S3BucketSharedWithCloudFront";
export interface GetAdministratorAccountRequest {}
export interface GetAdministratorAccountResponse {
  administrator?: Invitation;
}
export interface GetAllowListRequest {
  id: string;
}
export interface GetAllowListResponse {
  arn?: string;
  createdAt?: Date | string;
  criteria?: AllowListCriteria;
  description?: string;
  id?: string;
  name?: string;
  status?: AllowListStatus;
  tags?: Record<string, string>;
  updatedAt?: Date | string;
}
export interface GetAutomatedDiscoveryConfigurationRequest {}
export interface GetAutomatedDiscoveryConfigurationResponse {
  autoEnableOrganizationMembers?: AutoEnableMode;
  classificationScopeId?: string;
  disabledAt?: Date | string;
  firstEnabledAt?: Date | string;
  lastUpdatedAt?: Date | string;
  sensitivityInspectionTemplateId?: string;
  status?: AutomatedDiscoveryStatus;
}
export interface GetBucketStatisticsRequest {
  accountId?: string;
}
export interface GetBucketStatisticsResponse {
  bucketCount?: number;
  bucketCountByEffectivePermission?: BucketCountByEffectivePermission;
  bucketCountByEncryptionType?: BucketCountByEncryptionType;
  bucketCountByObjectEncryptionRequirement?: BucketCountPolicyAllowsUnencryptedObjectUploads;
  bucketCountBySharedAccessType?: BucketCountBySharedAccessType;
  bucketStatisticsBySensitivity?: BucketStatisticsBySensitivity;
  classifiableObjectCount?: number;
  classifiableSizeInBytes?: number;
  lastUpdated?: Date | string;
  objectCount?: number;
  sizeInBytes?: number;
  sizeInBytesCompressed?: number;
  unclassifiableObjectCount?: ObjectLevelStatistics;
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
}
export interface GetClassificationExportConfigurationRequest {}
export interface GetClassificationExportConfigurationResponse {
  configuration?: ClassificationExportConfiguration;
}
export interface GetClassificationScopeRequest {
  id: string;
}
export interface GetClassificationScopeResponse {
  id?: string;
  name?: string;
  s3?: S3ClassificationScope;
}
export interface GetCustomDataIdentifierRequest {
  id: string;
}
export interface GetCustomDataIdentifierResponse {
  arn?: string;
  createdAt?: Date | string;
  deleted?: boolean;
  description?: string;
  id?: string;
  ignoreWords?: Array<string>;
  keywords?: Array<string>;
  maximumMatchDistance?: number;
  name?: string;
  regex?: string;
  severityLevels?: Array<SeverityLevel>;
  tags?: Record<string, string>;
}
export interface GetFindingsFilterRequest {
  id: string;
}
export interface GetFindingsFilterResponse {
  action?: FindingsFilterAction;
  arn?: string;
  description?: string;
  findingCriteria?: FindingCriteria;
  id?: string;
  name?: string;
  position?: number;
  tags?: Record<string, string>;
}
export interface GetFindingsPublicationConfigurationRequest {}
export interface GetFindingsPublicationConfigurationResponse {
  securityHubConfiguration?: SecurityHubConfiguration;
}
export interface GetFindingsRequest {
  findingIds: Array<string>;
  sortCriteria?: SortCriteria;
}
export interface GetFindingsResponse {
  findings?: Array<Finding>;
}
export interface GetFindingStatisticsRequest {
  findingCriteria?: FindingCriteria;
  groupBy: GroupBy;
  size?: number;
  sortCriteria?: FindingStatisticsSortCriteria;
}
export interface GetFindingStatisticsResponse {
  countsByGroup?: Array<GroupCount>;
}
export interface GetInvitationsCountRequest {}
export interface GetInvitationsCountResponse {
  invitationsCount?: number;
}
export interface GetMacieSessionRequest {}
export interface GetMacieSessionResponse {
  createdAt?: Date | string;
  findingPublishingFrequency?: FindingPublishingFrequency;
  serviceRole?: string;
  status?: MacieStatus;
  updatedAt?: Date | string;
}
export interface GetMasterAccountRequest {}
export interface GetMasterAccountResponse {
  master?: Invitation;
}
export interface GetMemberRequest {
  id: string;
}
export interface GetMemberResponse {
  accountId?: string;
  administratorAccountId?: string;
  arn?: string;
  email?: string;
  invitedAt?: Date | string;
  masterAccountId?: string;
  relationshipStatus?: RelationshipStatus;
  tags?: Record<string, string>;
  updatedAt?: Date | string;
}
export interface GetResourceProfileRequest {
  resourceArn: string;
}
export interface GetResourceProfileResponse {
  profileUpdatedAt?: Date | string;
  sensitivityScore?: number;
  sensitivityScoreOverridden?: boolean;
  statistics?: ResourceStatistics;
}
export interface GetRevealConfigurationRequest {}
export interface GetRevealConfigurationResponse {
  configuration?: RevealConfiguration;
  retrievalConfiguration?: RetrievalConfiguration;
}
export interface GetSensitiveDataOccurrencesAvailabilityRequest {
  findingId: string;
}
export interface GetSensitiveDataOccurrencesAvailabilityResponse {
  code?: AvailabilityCode;
  reasons?: Array<UnavailabilityReasonCode>;
}
export interface GetSensitiveDataOccurrencesRequest {
  findingId: string;
}
export interface GetSensitiveDataOccurrencesResponse {
  error?: string;
  sensitiveDataOccurrences?: Record<string, Array<DetectedDataDetails>>;
  status?: RevealRequestStatus;
}
export interface GetSensitivityInspectionTemplateRequest {
  id: string;
}
export interface GetSensitivityInspectionTemplateResponse {
  description?: string;
  excludes?: SensitivityInspectionTemplateExcludes;
  includes?: SensitivityInspectionTemplateIncludes;
  name?: string;
  sensitivityInspectionTemplateId?: string;
}
export interface GetUsageStatisticsRequest {
  filterBy?: Array<UsageStatisticsFilter>;
  maxResults?: number;
  nextToken?: string;
  sortBy?: UsageStatisticsSortBy;
  timeRange?: TimeRange;
}
export interface GetUsageStatisticsResponse {
  nextToken?: string;
  records?: Array<UsageRecord>;
  timeRange?: TimeRange;
}
export interface GetUsageTotalsRequest {
  timeRange?: string;
}
export interface GetUsageTotalsResponse {
  timeRange?: TimeRange;
  usageTotals?: Array<UsageTotal>;
}
export type GroupBy =
  | "resourcesAffected_s3Bucket_name"
  | "type"
  | "classificationDetails_jobId"
  | "severity_description";
export interface GroupCount {
  count?: number;
  groupKey?: string;
}
export interface IamUser {
  accountId?: string;
  arn?: string;
  principalId?: string;
  userName?: string;
}
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export interface Invitation {
  accountId?: string;
  invitationId?: string;
  invitedAt?: Date | string;
  relationshipStatus?: RelationshipStatus;
}
export interface IpAddressDetails {
  ipAddressV4?: string;
  ipCity?: IpCity;
  ipCountry?: IpCountry;
  ipGeoLocation?: IpGeoLocation;
  ipOwner?: IpOwner;
}
export interface IpCity {
  name?: string;
}
export interface IpCountry {
  code?: string;
  name?: string;
}
export interface IpGeoLocation {
  lat?: number;
  lon?: number;
}
export interface IpOwner {
  asn?: string;
  asnOrg?: string;
  isp?: string;
  org?: string;
}
export type IsDefinedInJob = "TRUE" | "FALSE" | "UNKNOWN";
export type IsMonitoredByJob = "TRUE" | "FALSE" | "UNKNOWN";
export type JobComparator =
  | "EQ"
  | "GT"
  | "GTE"
  | "LT"
  | "LTE"
  | "NE"
  | "CONTAINS"
  | "STARTS_WITH";
export interface JobDetails {
  isDefinedInJob?: IsDefinedInJob;
  isMonitoredByJob?: IsMonitoredByJob;
  lastJobId?: string;
  lastJobRunTime?: Date | string;
}
export interface JobScheduleFrequency {
  dailySchedule?: DailySchedule;
  monthlySchedule?: MonthlySchedule;
  weeklySchedule?: WeeklySchedule;
}
export interface JobScopeTerm {
  simpleScopeTerm?: SimpleScopeTerm;
  tagScopeTerm?: TagScopeTerm;
}
export interface JobScopingBlock {
  and?: Array<JobScopeTerm>;
}
export type JobStatus =
  | "RUNNING"
  | "PAUSED"
  | "CANCELLED"
  | "COMPLETE"
  | "IDLE"
  | "USER_PAUSED";
export interface JobSummary {
  bucketCriteria?: S3BucketCriteriaForJob;
  bucketDefinitions?: Array<S3BucketDefinitionForJob>;
  createdAt?: Date | string;
  jobId?: string;
  jobStatus?: JobStatus;
  jobType?: JobType;
  lastRunErrorStatus?: LastRunErrorStatus;
  name?: string;
  userPausedDetails?: UserPausedDetails;
}
export type JobType = "ONE_TIME" | "SCHEDULED";
export interface KeyValuePair {
  key?: string;
  value?: string;
}
export type KeyValuePairList = Array<KeyValuePair>;
export interface LastRunErrorStatus {
  code?: LastRunErrorStatusCode;
}
export type LastRunErrorStatusCode = "NONE" | "ERROR";
export interface ListAllowListsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListAllowListsResponse {
  allowLists?: Array<AllowListSummary>;
  nextToken?: string;
}
export interface ListAutomatedDiscoveryAccountsRequest {
  accountIds?: Array<string>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListAutomatedDiscoveryAccountsResponse {
  items?: Array<AutomatedDiscoveryAccount>;
  nextToken?: string;
}
export interface ListClassificationJobsRequest {
  filterCriteria?: ListJobsFilterCriteria;
  maxResults?: number;
  nextToken?: string;
  sortCriteria?: ListJobsSortCriteria;
}
export interface ListClassificationJobsResponse {
  items?: Array<JobSummary>;
  nextToken?: string;
}
export interface ListClassificationScopesRequest {
  name?: string;
  nextToken?: string;
}
export interface ListClassificationScopesResponse {
  classificationScopes?: Array<ClassificationScopeSummary>;
  nextToken?: string;
}
export interface ListCustomDataIdentifiersRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListCustomDataIdentifiersResponse {
  items?: Array<CustomDataIdentifierSummary>;
  nextToken?: string;
}
export interface ListFindingsFiltersRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListFindingsFiltersResponse {
  findingsFilterListItems?: Array<FindingsFilterListItem>;
  nextToken?: string;
}
export interface ListFindingsRequest {
  findingCriteria?: FindingCriteria;
  maxResults?: number;
  nextToken?: string;
  sortCriteria?: SortCriteria;
}
export interface ListFindingsResponse {
  findingIds?: Array<string>;
  nextToken?: string;
}
export interface ListInvitationsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListInvitationsResponse {
  invitations?: Array<Invitation>;
  nextToken?: string;
}
export interface ListJobsFilterCriteria {
  excludes?: Array<ListJobsFilterTerm>;
  includes?: Array<ListJobsFilterTerm>;
}
export type ListJobsFilterKey = "jobType" | "jobStatus" | "createdAt" | "name";
export interface ListJobsFilterTerm {
  comparator?: JobComparator;
  key?: ListJobsFilterKey;
  values?: Array<string>;
}
export type ListJobsSortAttributeName =
  | "createdAt"
  | "jobStatus"
  | "name"
  | "jobType";
export interface ListJobsSortCriteria {
  attributeName?: ListJobsSortAttributeName;
  orderBy?: OrderBy;
}
export interface ListManagedDataIdentifiersRequest {
  nextToken?: string;
}
export interface ListManagedDataIdentifiersResponse {
  items?: Array<ManagedDataIdentifierSummary>;
  nextToken?: string;
}
export interface ListMembersRequest {
  maxResults?: number;
  nextToken?: string;
  onlyAssociated?: string;
}
export interface ListMembersResponse {
  members?: Array<Member>;
  nextToken?: string;
}
export interface ListOrganizationAdminAccountsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListOrganizationAdminAccountsResponse {
  adminAccounts?: Array<AdminAccount>;
  nextToken?: string;
}
export interface ListResourceProfileArtifactsRequest {
  nextToken?: string;
  resourceArn: string;
}
export interface ListResourceProfileArtifactsResponse {
  artifacts?: Array<ResourceProfileArtifact>;
  nextToken?: string;
}
export interface ListResourceProfileDetectionsRequest {
  maxResults?: number;
  nextToken?: string;
  resourceArn: string;
}
export interface ListResourceProfileDetectionsResponse {
  detections?: Array<Detection>;
  nextToken?: string;
}
export interface ListSensitivityInspectionTemplatesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListSensitivityInspectionTemplatesResponse {
  nextToken?: string;
  sensitivityInspectionTemplates?: Array<SensitivityInspectionTemplatesEntry>;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type MacieStatus = "PAUSED" | "ENABLED";
export type ManagedDataIdentifierSelector =
  | "ALL"
  | "EXCLUDE"
  | "INCLUDE"
  | "NONE"
  | "RECOMMENDED";
export interface ManagedDataIdentifierSummary {
  category?: SensitiveDataItemCategory;
  id?: string;
}
export interface MatchingBucket {
  accountId?: string;
  automatedDiscoveryMonitoringStatus?: AutomatedDiscoveryMonitoringStatus;
  bucketName?: string;
  classifiableObjectCount?: number;
  classifiableSizeInBytes?: number;
  errorCode?: BucketMetadataErrorCode;
  errorMessage?: string;
  jobDetails?: JobDetails;
  lastAutomatedDiscoveryTime?: Date | string;
  objectCount?: number;
  objectCountByEncryptionType?: ObjectCountByEncryptionType;
  sensitivityScore?: number;
  sizeInBytes?: number;
  sizeInBytesCompressed?: number;
  unclassifiableObjectCount?: ObjectLevelStatistics;
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
}
export interface MatchingResource {
  matchingBucket?: MatchingBucket;
}
export type MaxResults = number;

export interface Member {
  accountId?: string;
  administratorAccountId?: string;
  arn?: string;
  email?: string;
  invitedAt?: Date | string;
  masterAccountId?: string;
  relationshipStatus?: RelationshipStatus;
  tags?: Record<string, string>;
  updatedAt?: Date | string;
}
export interface MonthlySchedule {
  dayOfMonth?: number;
}
export type NextToken = string;

export interface ObjectCountByEncryptionType {
  customerManaged?: number;
  kmsManaged?: number;
  s3Managed?: number;
  unencrypted?: number;
  unknown?: number;
}
export interface ObjectLevelStatistics {
  fileType?: number;
  storageClass?: number;
  total?: number;
}
export interface Occurrences {
  cells?: Array<Cell>;
  lineRanges?: Array<Range>;
  offsetRanges?: Array<Range>;
  pages?: Array<Page>;
  records?: Array<Record>;
}
export type OrderBy = "ASC" | "DESC";
export type OriginType =
  | "SENSITIVE_DATA_DISCOVERY_JOB"
  | "AUTOMATED_SENSITIVE_DATA_DISCOVERY";
export interface Page {
  lineRange?: Range;
  offsetRange?: Range;
  pageNumber?: number;
}
export type Pages = Array<Page>;
export interface PolicyDetails {
  action?: FindingAction;
  actor?: FindingActor;
}
export interface PutClassificationExportConfigurationRequest {
  configuration: ClassificationExportConfiguration;
}
export interface PutClassificationExportConfigurationResponse {
  configuration?: ClassificationExportConfiguration;
}
export interface PutFindingsPublicationConfigurationRequest {
  clientToken?: string;
  securityHubConfiguration?: SecurityHubConfiguration;
}
export interface PutFindingsPublicationConfigurationResponse {}
export interface Range {
  end?: number;
  start?: number;
  startColumn?: number;
}
export type Ranges = Array<Range>;
export interface Record {
  jsonPath?: string;
  recordIndex?: number;
}
export type Records = Array<Record>;
export type RelationshipStatus =
  | "Enabled"
  | "Paused"
  | "Invited"
  | "Created"
  | "Removed"
  | "Resigned"
  | "EmailVerificationInProgress"
  | "EmailVerificationFailed"
  | "RegionDisabled"
  | "AccountSuspended";
export interface ReplicationDetails {
  replicated?: boolean;
  replicatedExternally?: boolean;
  replicationAccounts?: Array<string>;
}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface ResourceProfileArtifact {
  arn: string;
  classificationResultStatus: string;
  sensitive?: boolean;
}
export interface ResourcesAffected {
  s3Bucket?: S3Bucket;
  s3Object?: S3Object;
}
export interface ResourceStatistics {
  totalBytesClassified?: number;
  totalDetections?: number;
  totalDetectionsSuppressed?: number;
  totalItemsClassified?: number;
  totalItemsSensitive?: number;
  totalItemsSkipped?: number;
  totalItemsSkippedInvalidEncryption?: number;
  totalItemsSkippedInvalidKms?: number;
  totalItemsSkippedPermissionDenied?: number;
}
export interface RetrievalConfiguration {
  externalId?: string;
  retrievalMode: RetrievalMode;
  roleName?: string;
}
export type RetrievalMode = "CALLER_CREDENTIALS" | "ASSUME_ROLE";
export interface RevealConfiguration {
  kmsKeyId?: string;
  status: RevealStatus;
}
export type RevealRequestStatus = "SUCCESS" | "PROCESSING" | "ERROR";
export type RevealStatus = "ENABLED" | "DISABLED";
export interface S3Bucket {
  allowsUnencryptedObjectUploads?: AllowsUnencryptedObjectUploads;
  arn?: string;
  createdAt?: Date | string;
  defaultServerSideEncryption?: ServerSideEncryption;
  name?: string;
  owner?: S3BucketOwner;
  publicAccess?: BucketPublicAccess;
  tags?: Array<KeyValuePair>;
}
export interface S3BucketCriteriaForJob {
  excludes?: CriteriaBlockForJob;
  includes?: CriteriaBlockForJob;
}
export interface S3BucketDefinitionForJob {
  accountId: string;
  buckets: Array<string>;
}
export type S3BucketName = string;

export interface S3BucketOwner {
  displayName?: string;
  id?: string;
}
export interface S3ClassificationScope {
  excludes: S3ClassificationScopeExclusion;
}
export interface S3ClassificationScopeExclusion {
  bucketNames: Array<string>;
}
export interface S3ClassificationScopeExclusionUpdate {
  bucketNames: Array<string>;
  operation: ClassificationScopeUpdateOperation;
}
export interface S3ClassificationScopeUpdate {
  excludes: S3ClassificationScopeExclusionUpdate;
}
export interface S3Destination {
  bucketName: string;
  keyPrefix?: string;
  kmsKeyArn: string;
}
export interface S3JobDefinition {
  bucketCriteria?: S3BucketCriteriaForJob;
  bucketDefinitions?: Array<S3BucketDefinitionForJob>;
  scoping?: Scoping;
}
export interface S3Object {
  bucketArn?: string;
  eTag?: string;
  extension?: string;
  key?: string;
  lastModified?: Date | string;
  path?: string;
  publicAccess?: boolean;
  serverSideEncryption?: ServerSideEncryption;
  size?: number;
  storageClass?: StorageClass;
  tags?: Array<KeyValuePair>;
  versionId?: string;
}
export interface S3WordsList {
  bucketName: string;
  objectKey: string;
}
export type ScopeFilterKey =
  | "OBJECT_EXTENSION"
  | "OBJECT_LAST_MODIFIED_DATE"
  | "OBJECT_SIZE"
  | "OBJECT_KEY";
export interface Scoping {
  excludes?: JobScopingBlock;
  includes?: JobScopingBlock;
}
export interface SearchResourcesBucketCriteria {
  excludes?: SearchResourcesCriteriaBlock;
  includes?: SearchResourcesCriteriaBlock;
}
export type SearchResourcesComparator = "EQ" | "NE";
export interface SearchResourcesCriteria {
  simpleCriterion?: SearchResourcesSimpleCriterion;
  tagCriterion?: SearchResourcesTagCriterion;
}
export interface SearchResourcesCriteriaBlock {
  and?: Array<SearchResourcesCriteria>;
}
export interface SearchResourcesRequest {
  bucketCriteria?: SearchResourcesBucketCriteria;
  maxResults?: number;
  nextToken?: string;
  sortCriteria?: SearchResourcesSortCriteria;
}
export interface SearchResourcesResponse {
  matchingResources?: Array<MatchingResource>;
  nextToken?: string;
}
export interface SearchResourcesSimpleCriterion {
  comparator?: SearchResourcesComparator;
  key?: SearchResourcesSimpleCriterionKey;
  values?: Array<string>;
}
export type SearchResourcesSimpleCriterionKey =
  | "ACCOUNT_ID"
  | "S3_BUCKET_NAME"
  | "S3_BUCKET_EFFECTIVE_PERMISSION"
  | "S3_BUCKET_SHARED_ACCESS"
  | "AUTOMATED_DISCOVERY_MONITORING_STATUS";
export type SearchResourcesSortAttributeName =
  | "ACCOUNT_ID"
  | "RESOURCE_NAME"
  | "S3_CLASSIFIABLE_OBJECT_COUNT"
  | "S3_CLASSIFIABLE_SIZE_IN_BYTES";
export interface SearchResourcesSortCriteria {
  attributeName?: SearchResourcesSortAttributeName;
  orderBy?: OrderBy;
}
export interface SearchResourcesTagCriterion {
  comparator?: SearchResourcesComparator;
  tagValues?: Array<SearchResourcesTagCriterionPair>;
}
export interface SearchResourcesTagCriterionPair {
  key?: string;
  value?: string;
}
export interface SecurityHubConfiguration {
  publishClassificationFindings: boolean;
  publishPolicyFindings: boolean;
}
export type SensitiveData = Array<SensitiveDataItem>;
export interface SensitiveDataItem {
  category?: SensitiveDataItemCategory;
  detections?: Array<DefaultDetection>;
  totalCount?: number;
}
export type SensitiveDataItemCategory =
  | "FINANCIAL_INFORMATION"
  | "PERSONAL_INFORMATION"
  | "CREDENTIALS"
  | "CUSTOM_IDENTIFIER";
export type SensitiveDataOccurrences = Record<
  string,
  Array<DetectedDataDetails>
>;
export interface SensitivityAggregations {
  classifiableSizeInBytes?: number;
  publiclyAccessibleCount?: number;
  totalCount?: number;
  totalSizeInBytes?: number;
}
export interface SensitivityInspectionTemplateExcludes {
  managedDataIdentifierIds?: Array<string>;
}
export type SensitivityInspectionTemplateId = string;

export interface SensitivityInspectionTemplateIncludes {
  allowListIds?: Array<string>;
  customDataIdentifierIds?: Array<string>;
  managedDataIdentifierIds?: Array<string>;
}
export interface SensitivityInspectionTemplatesEntry {
  id?: string;
  name?: string;
}
export interface ServerSideEncryption {
  encryptionType?: EncryptionType;
  kmsMasterKeyId?: string;
}
export interface ServiceLimit {
  isServiceLimited?: boolean;
  unit?: Unit;
  value?: number;
}
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface SessionContext {
  attributes?: SessionContextAttributes;
  sessionIssuer?: SessionIssuer;
}
export interface SessionContextAttributes {
  creationDate?: Date | string;
  mfaAuthenticated?: boolean;
}
export interface SessionIssuer {
  accountId?: string;
  arn?: string;
  principalId?: string;
  type?: string;
  userName?: string;
}
export interface Severity {
  description?: SeverityDescription;
  score?: number;
}
export type SeverityDescription = "Low" | "Medium" | "High";
export interface SeverityLevel {
  occurrencesThreshold: number;
  severity: DataIdentifierSeverity;
}
export type SeverityLevelList = Array<SeverityLevel>;
export type SharedAccess = "EXTERNAL" | "INTERNAL" | "NOT_SHARED" | "UNKNOWN";
export interface SimpleCriterionForJob {
  comparator?: JobComparator;
  key?: SimpleCriterionKeyForJob;
  values?: Array<string>;
}
export type SimpleCriterionKeyForJob =
  | "ACCOUNT_ID"
  | "S3_BUCKET_NAME"
  | "S3_BUCKET_EFFECTIVE_PERMISSION"
  | "S3_BUCKET_SHARED_ACCESS";
export interface SimpleScopeTerm {
  comparator?: JobComparator;
  key?: ScopeFilterKey;
  values?: Array<string>;
}
export interface SortCriteria {
  attributeName?: string;
  orderBy?: OrderBy;
}
export interface Statistics {
  approximateNumberOfObjectsToProcess?: number;
  numberOfRuns?: number;
}
export type StorageClass =
  | "STANDARD"
  | "REDUCED_REDUNDANCY"
  | "STANDARD_IA"
  | "INTELLIGENT_TIERING"
  | "DEEP_ARCHIVE"
  | "ONEZONE_IA"
  | "GLACIER"
  | "GLACIER_IR"
  | "OUTPOSTS";
export interface SuppressDataIdentifier {
  id?: string;
  type?: DataIdentifierType;
}
export interface TagCriterionForJob {
  comparator?: JobComparator;
  tagValues?: Array<TagCriterionPairForJob>;
}
export interface TagCriterionPairForJob {
  key?: string;
  value?: string;
}
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export interface TagScopeTerm {
  comparator?: JobComparator;
  key?: string;
  tagValues?: Array<TagValuePair>;
  target?: TagTarget;
}
export type TagTarget = "S3_OBJECT";
export interface TagValuePair {
  key?: string;
  value?: string;
}
export interface TestCustomDataIdentifierRequest {
  ignoreWords?: Array<string>;
  keywords?: Array<string>;
  maximumMatchDistance?: number;
  regex: string;
  sampleText: string;
}
export interface TestCustomDataIdentifierResponse {
  matchCount?: number;
}
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type TimeRange = "MONTH_TO_DATE" | "PAST_30_DAYS";
export type Timestamp = Date | string;

export type Type = "NONE" | "AES256" | "aws_kms" | "aws_kms_dsse";
export type UnavailabilityReasonCode =
  | "OBJECT_EXCEEDS_SIZE_QUOTA"
  | "UNSUPPORTED_OBJECT_TYPE"
  | "UNSUPPORTED_FINDING_TYPE"
  | "INVALID_CLASSIFICATION_RESULT"
  | "OBJECT_UNAVAILABLE"
  | "ACCOUNT_NOT_IN_ORGANIZATION"
  | "MISSING_GET_MEMBER_PERMISSION"
  | "ROLE_TOO_PERMISSIVE"
  | "MEMBER_ROLE_TOO_PERMISSIVE"
  | "INVALID_RESULT_SIGNATURE"
  | "RESULT_NOT_SIGNED";
export declare class UnprocessableEntityException extends Data.TaggedError(
  "UnprocessableEntityException",
)<{
  readonly message: string;
}> {}
export interface UnprocessedAccount {
  accountId?: string;
  errorCode?: ErrorCode;
  errorMessage?: string;
}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAllowListRequest {
  criteria: AllowListCriteria;
  description?: string;
  id: string;
  name: string;
}
export interface UpdateAllowListResponse {
  arn?: string;
  id?: string;
}
export interface UpdateAutomatedDiscoveryConfigurationRequest {
  autoEnableOrganizationMembers?: AutoEnableMode;
  status: AutomatedDiscoveryStatus;
}
export interface UpdateAutomatedDiscoveryConfigurationResponse {}
export interface UpdateClassificationJobRequest {
  jobId: string;
  jobStatus: JobStatus;
}
export interface UpdateClassificationJobResponse {}
export interface UpdateClassificationScopeRequest {
  id: string;
  s3?: S3ClassificationScopeUpdate;
}
export interface UpdateClassificationScopeResponse {}
export interface UpdateFindingsFilterRequest {
  action?: FindingsFilterAction;
  clientToken?: string;
  description?: string;
  findingCriteria?: FindingCriteria;
  id: string;
  name?: string;
  position?: number;
}
export interface UpdateFindingsFilterResponse {
  arn?: string;
  id?: string;
}
export interface UpdateMacieSessionRequest {
  findingPublishingFrequency?: FindingPublishingFrequency;
  status?: MacieStatus;
}
export interface UpdateMacieSessionResponse {}
export interface UpdateMemberSessionRequest {
  id: string;
  status: MacieStatus;
}
export interface UpdateMemberSessionResponse {}
export interface UpdateOrganizationConfigurationRequest {
  autoEnable: boolean;
}
export interface UpdateOrganizationConfigurationResponse {}
export interface UpdateResourceProfileDetectionsRequest {
  resourceArn: string;
  suppressDataIdentifiers?: Array<SuppressDataIdentifier>;
}
export interface UpdateResourceProfileDetectionsResponse {}
export interface UpdateResourceProfileRequest {
  resourceArn: string;
  sensitivityScoreOverride?: number;
}
export interface UpdateResourceProfileResponse {}
export interface UpdateRetrievalConfiguration {
  retrievalMode: RetrievalMode;
  roleName?: string;
}
export interface UpdateRevealConfigurationRequest {
  configuration: RevealConfiguration;
  retrievalConfiguration?: UpdateRetrievalConfiguration;
}
export interface UpdateRevealConfigurationResponse {
  configuration?: RevealConfiguration;
  retrievalConfiguration?: RetrievalConfiguration;
}
export interface UpdateSensitivityInspectionTemplateRequest {
  description?: string;
  excludes?: SensitivityInspectionTemplateExcludes;
  id: string;
  includes?: SensitivityInspectionTemplateIncludes;
}
export interface UpdateSensitivityInspectionTemplateResponse {}
export interface UsageByAccount {
  currency?: Currency;
  estimatedCost?: string;
  serviceLimit?: ServiceLimit;
  type?: UsageType;
}
export interface UsageRecord {
  accountId?: string;
  automatedDiscoveryFreeTrialStartDate?: Date | string;
  freeTrialStartDate?: Date | string;
  usage?: Array<UsageByAccount>;
}
export interface UsageStatisticsFilter {
  comparator?: UsageStatisticsFilterComparator;
  key?: UsageStatisticsFilterKey;
  values?: Array<string>;
}
export type UsageStatisticsFilterComparator =
  | "GT"
  | "GTE"
  | "LT"
  | "LTE"
  | "EQ"
  | "NE"
  | "CONTAINS";
export type UsageStatisticsFilterKey =
  | "accountId"
  | "serviceLimit"
  | "freeTrialStartDate"
  | "total";
export interface UsageStatisticsSortBy {
  key?: UsageStatisticsSortKey;
  orderBy?: OrderBy;
}
export type UsageStatisticsSortKey =
  | "accountId"
  | "total"
  | "serviceLimitValue"
  | "freeTrialStartDate";
export interface UsageTotal {
  currency?: Currency;
  estimatedCost?: string;
  type?: UsageType;
}
export type UsageType =
  | "DATA_INVENTORY_EVALUATION"
  | "SENSITIVE_DATA_DISCOVERY"
  | "AUTOMATED_SENSITIVE_DATA_DISCOVERY"
  | "AUTOMATED_OBJECT_MONITORING";
export interface UserIdentity {
  assumedRole?: AssumedRole;
  awsAccount?: AwsAccount;
  awsService?: AwsService;
  federatedUser?: FederatedUser;
  iamUser?: IamUser;
  root?: UserIdentityRoot;
  type?: UserIdentityType;
}
export interface UserIdentityRoot {
  accountId?: string;
  arn?: string;
  principalId?: string;
}
export type UserIdentityType =
  | "AssumedRole"
  | "IAMUser"
  | "FederatedUser"
  | "Root"
  | "AWSAccount"
  | "AWSService";
export interface UserPausedDetails {
  jobExpiresAt?: Date | string;
  jobImminentExpirationHealthEventArn?: string;
  jobPausedAt?: Date | string;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export interface WeeklySchedule {
  dayOfWeek?: DayOfWeek;
}
export declare namespace AcceptInvitation {
  export type Input = AcceptInvitationRequest;
  export type Output = AcceptInvitationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetCustomDataIdentifiers {
  export type Input = BatchGetCustomDataIdentifiersRequest;
  export type Output = BatchGetCustomDataIdentifiersResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchUpdateAutomatedDiscoveryAccounts {
  export type Input = BatchUpdateAutomatedDiscoveryAccountsRequest;
  export type Output = BatchUpdateAutomatedDiscoveryAccountsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAllowList {
  export type Input = CreateAllowListRequest;
  export type Output = CreateAllowListResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateClassificationJob {
  export type Input = CreateClassificationJobRequest;
  export type Output = CreateClassificationJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCustomDataIdentifier {
  export type Input = CreateCustomDataIdentifierRequest;
  export type Output = CreateCustomDataIdentifierResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateFindingsFilter {
  export type Input = CreateFindingsFilterRequest;
  export type Output = CreateFindingsFilterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateInvitations {
  export type Input = CreateInvitationsRequest;
  export type Output = CreateInvitationsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateMember {
  export type Input = CreateMemberRequest;
  export type Output = CreateMemberResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSampleFindings {
  export type Input = CreateSampleFindingsRequest;
  export type Output = CreateSampleFindingsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeclineInvitations {
  export type Input = DeclineInvitationsRequest;
  export type Output = DeclineInvitationsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAllowList {
  export type Input = DeleteAllowListRequest;
  export type Output = DeleteAllowListResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCustomDataIdentifier {
  export type Input = DeleteCustomDataIdentifierRequest;
  export type Output = DeleteCustomDataIdentifierResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteFindingsFilter {
  export type Input = DeleteFindingsFilterRequest;
  export type Output = DeleteFindingsFilterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteInvitations {
  export type Input = DeleteInvitationsRequest;
  export type Output = DeleteInvitationsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMember {
  export type Input = DeleteMemberRequest;
  export type Output = DeleteMemberResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeBuckets {
  export type Input = DescribeBucketsRequest;
  export type Output = DescribeBucketsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeClassificationJob {
  export type Input = DescribeClassificationJobRequest;
  export type Output = DescribeClassificationJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeOrganizationConfiguration {
  export type Input = DescribeOrganizationConfigurationRequest;
  export type Output = DescribeOrganizationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisableMacie {
  export type Input = DisableMacieRequest;
  export type Output = DisableMacieResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisableOrganizationAdminAccount {
  export type Input = DisableOrganizationAdminAccountRequest;
  export type Output = DisableOrganizationAdminAccountResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateFromAdministratorAccount {
  export type Input = DisassociateFromAdministratorAccountRequest;
  export type Output = DisassociateFromAdministratorAccountResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateFromMasterAccount {
  export type Input = DisassociateFromMasterAccountRequest;
  export type Output = DisassociateFromMasterAccountResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateMember {
  export type Input = DisassociateMemberRequest;
  export type Output = DisassociateMemberResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace EnableMacie {
  export type Input = EnableMacieRequest;
  export type Output = EnableMacieResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace EnableOrganizationAdminAccount {
  export type Input = EnableOrganizationAdminAccountRequest;
  export type Output = EnableOrganizationAdminAccountResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAdministratorAccount {
  export type Input = GetAdministratorAccountRequest;
  export type Output = GetAdministratorAccountResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAllowList {
  export type Input = GetAllowListRequest;
  export type Output = GetAllowListResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAutomatedDiscoveryConfiguration {
  export type Input = GetAutomatedDiscoveryConfigurationRequest;
  export type Output = GetAutomatedDiscoveryConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetBucketStatistics {
  export type Input = GetBucketStatisticsRequest;
  export type Output = GetBucketStatisticsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetClassificationExportConfiguration {
  export type Input = GetClassificationExportConfigurationRequest;
  export type Output = GetClassificationExportConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetClassificationScope {
  export type Input = GetClassificationScopeRequest;
  export type Output = GetClassificationScopeResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCustomDataIdentifier {
  export type Input = GetCustomDataIdentifierRequest;
  export type Output = GetCustomDataIdentifierResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFindings {
  export type Input = GetFindingsRequest;
  export type Output = GetFindingsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFindingsFilter {
  export type Input = GetFindingsFilterRequest;
  export type Output = GetFindingsFilterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFindingsPublicationConfiguration {
  export type Input = GetFindingsPublicationConfigurationRequest;
  export type Output = GetFindingsPublicationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFindingStatistics {
  export type Input = GetFindingStatisticsRequest;
  export type Output = GetFindingStatisticsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetInvitationsCount {
  export type Input = GetInvitationsCountRequest;
  export type Output = GetInvitationsCountResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMacieSession {
  export type Input = GetMacieSessionRequest;
  export type Output = GetMacieSessionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMasterAccount {
  export type Input = GetMasterAccountRequest;
  export type Output = GetMasterAccountResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMember {
  export type Input = GetMemberRequest;
  export type Output = GetMemberResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourceProfile {
  export type Input = GetResourceProfileRequest;
  export type Output = GetResourceProfileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRevealConfiguration {
  export type Input = GetRevealConfigurationRequest;
  export type Output = GetRevealConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSensitiveDataOccurrences {
  export type Input = GetSensitiveDataOccurrencesRequest;
  export type Output = GetSensitiveDataOccurrencesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace GetSensitiveDataOccurrencesAvailability {
  export type Input = GetSensitiveDataOccurrencesAvailabilityRequest;
  export type Output = GetSensitiveDataOccurrencesAvailabilityResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetSensitivityInspectionTemplate {
  export type Input = GetSensitivityInspectionTemplateRequest;
  export type Output = GetSensitivityInspectionTemplateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetUsageStatistics {
  export type Input = GetUsageStatisticsRequest;
  export type Output = GetUsageStatisticsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetUsageTotals {
  export type Input = GetUsageTotalsRequest;
  export type Output = GetUsageTotalsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAllowLists {
  export type Input = ListAllowListsRequest;
  export type Output = ListAllowListsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAutomatedDiscoveryAccounts {
  export type Input = ListAutomatedDiscoveryAccountsRequest;
  export type Output = ListAutomatedDiscoveryAccountsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListClassificationJobs {
  export type Input = ListClassificationJobsRequest;
  export type Output = ListClassificationJobsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListClassificationScopes {
  export type Input = ListClassificationScopesRequest;
  export type Output = ListClassificationScopesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCustomDataIdentifiers {
  export type Input = ListCustomDataIdentifiersRequest;
  export type Output = ListCustomDataIdentifiersResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFindings {
  export type Input = ListFindingsRequest;
  export type Output = ListFindingsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFindingsFilters {
  export type Input = ListFindingsFiltersRequest;
  export type Output = ListFindingsFiltersResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListInvitations {
  export type Input = ListInvitationsRequest;
  export type Output = ListInvitationsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListManagedDataIdentifiers {
  export type Input = ListManagedDataIdentifiersRequest;
  export type Output = ListManagedDataIdentifiersResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListMembers {
  export type Input = ListMembersRequest;
  export type Output = ListMembersResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOrganizationAdminAccounts {
  export type Input = ListOrganizationAdminAccountsRequest;
  export type Output = ListOrganizationAdminAccountsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourceProfileArtifacts {
  export type Input = ListResourceProfileArtifactsRequest;
  export type Output = ListResourceProfileArtifactsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourceProfileDetections {
  export type Input = ListResourceProfileDetectionsRequest;
  export type Output = ListResourceProfileDetectionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSensitivityInspectionTemplates {
  export type Input = ListSensitivityInspectionTemplatesRequest;
  export type Output = ListSensitivityInspectionTemplatesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = CommonAwsError;
}

export declare namespace PutClassificationExportConfiguration {
  export type Input = PutClassificationExportConfigurationRequest;
  export type Output = PutClassificationExportConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutFindingsPublicationConfiguration {
  export type Input = PutFindingsPublicationConfigurationRequest;
  export type Output = PutFindingsPublicationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchResources {
  export type Input = SearchResourcesRequest;
  export type Output = SearchResourcesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error = CommonAwsError;
}

export declare namespace TestCustomDataIdentifier {
  export type Input = TestCustomDataIdentifierRequest;
  export type Output = TestCustomDataIdentifierResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error = CommonAwsError;
}

export declare namespace UpdateAllowList {
  export type Input = UpdateAllowListRequest;
  export type Output = UpdateAllowListResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAutomatedDiscoveryConfiguration {
  export type Input = UpdateAutomatedDiscoveryConfigurationRequest;
  export type Output = UpdateAutomatedDiscoveryConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateClassificationJob {
  export type Input = UpdateClassificationJobRequest;
  export type Output = UpdateClassificationJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateClassificationScope {
  export type Input = UpdateClassificationScopeRequest;
  export type Output = UpdateClassificationScopeResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateFindingsFilter {
  export type Input = UpdateFindingsFilterRequest;
  export type Output = UpdateFindingsFilterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateMacieSession {
  export type Input = UpdateMacieSessionRequest;
  export type Output = UpdateMacieSessionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateMemberSession {
  export type Input = UpdateMemberSessionRequest;
  export type Output = UpdateMemberSessionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateOrganizationConfiguration {
  export type Input = UpdateOrganizationConfigurationRequest;
  export type Output = UpdateOrganizationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateResourceProfile {
  export type Input = UpdateResourceProfileRequest;
  export type Output = UpdateResourceProfileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateResourceProfileDetections {
  export type Input = UpdateResourceProfileDetectionsRequest;
  export type Output = UpdateResourceProfileDetectionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRevealConfiguration {
  export type Input = UpdateRevealConfigurationRequest;
  export type Output = UpdateRevealConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSensitivityInspectionTemplate {
  export type Input = UpdateSensitivityInspectionTemplateRequest;
  export type Output = UpdateSensitivityInspectionTemplateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
