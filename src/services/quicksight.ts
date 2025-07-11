import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface QuickSight_20180401 {
  batchCreateTopicReviewedAnswer(
    input: BatchCreateTopicReviewedAnswerRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  batchDeleteTopicReviewedAnswer(
    input: BatchDeleteTopicReviewedAnswerRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  cancelIngestion(
    input: CancelIngestionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createAccountCustomization(
    input: CreateAccountCustomizationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  createAccountSubscription(
    input: CreateAccountSubscriptionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceExistsException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  createAnalysis(
    input: CreateAnalysisRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  createBrand(
    input: CreateBrandRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidRequestException | LimitExceededException | ThrottlingException | CommonAwsError
  >;
  createCustomPermissions(
    input: CreateCustomPermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | PreconditionNotMetException | ResourceExistsException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  createDashboard(
    input: CreateDashboardRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  createDataSet(
    input: CreateDataSetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  createDataSource(
    input: CreateDataSourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | CustomerManagedKeyUnavailableException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createFolder(
    input: CreateFolderRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  createFolderMembership(
    input: CreateFolderMembershipRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  createGroup(
    input: CreateGroupRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | PreconditionNotMetException | ResourceExistsException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  createGroupMembership(
    input: CreateGroupMembershipRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  createIAMPolicyAssignment(
    input: CreateIAMPolicyAssignmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConcurrentUpdatingException | InternalFailureException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createIngestion(
    input: CreateIngestionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createNamespace(
    input: CreateNamespaceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | PreconditionNotMetException | ResourceExistsException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  createRefreshSchedule(
    input: CreateRefreshScheduleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | PreconditionNotMetException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createRoleMembership(
    input: CreateRoleMembershipRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  createTemplate(
    input: CreateTemplateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  createTemplateAlias(
    input: CreateTemplateAliasRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  createTheme(
    input: CreateThemeRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  createThemeAlias(
    input: CreateThemeAliasRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  createTopic(
    input: CreateTopicRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createTopicRefreshSchedule(
    input: CreateTopicRefreshScheduleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createVPCConnection(
    input: CreateVPCConnectionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  deleteAccountCustomization(
    input: DeleteAccountCustomizationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteAccountSubscription(
    input: DeleteAccountSubscriptionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteAnalysis(
    input: DeleteAnalysisRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  deleteBrand(
    input: DeleteBrandRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteBrandAssignment(
    input: DeleteBrandAssignmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteCustomPermissions(
    input: DeleteCustomPermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceExistsException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteDashboard(
    input: DeleteDashboardRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  deleteDataSet(
    input: DeleteDataSetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteDataSetRefreshProperties(
    input: DeleteDataSetRefreshPropertiesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteDataSource(
    input: DeleteDataSourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteDefaultQBusinessApplication(
    input: DeleteDefaultQBusinessApplicationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteFolder(
    input: DeleteFolderRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  deleteFolderMembership(
    input: DeleteFolderMembershipRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  deleteGroup(
    input: DeleteGroupRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteGroupMembership(
    input: DeleteGroupMembershipRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteIAMPolicyAssignment(
    input: DeleteIAMPolicyAssignmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConcurrentUpdatingException | InternalFailureException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteIdentityPropagationConfig(
    input: DeleteIdentityPropagationConfigRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteNamespace(
    input: DeleteNamespaceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteRefreshSchedule(
    input: DeleteRefreshScheduleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteRoleCustomPermission(
    input: DeleteRoleCustomPermissionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteRoleMembership(
    input: DeleteRoleMembershipRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteTemplate(
    input: DeleteTemplateRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  deleteTemplateAlias(
    input: DeleteTemplateAliasRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  deleteTheme(
    input: DeleteThemeRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  deleteThemeAlias(
    input: DeleteThemeAliasRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  deleteTopic(
    input: DeleteTopicRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteTopicRefreshSchedule(
    input: DeleteTopicRefreshScheduleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteUserByPrincipalId(
    input: DeleteUserByPrincipalIdRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteUserCustomPermission(
    input: DeleteUserCustomPermissionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteVPCConnection(
    input: DeleteVPCConnectionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeAccountCustomization(
    input: DescribeAccountCustomizationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describeAccountSettings(
    input: DescribeAccountSettingsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describeAccountSubscription(
    input: DescribeAccountSubscriptionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describeAnalysis(
    input: DescribeAnalysisRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeAnalysisDefinition(
    input: DescribeAnalysisDefinitionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeAnalysisPermissions(
    input: DescribeAnalysisPermissionsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeAssetBundleExportJob(
    input: DescribeAssetBundleExportJobRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeAssetBundleImportJob(
    input: DescribeAssetBundleImportJobRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeBrand(
    input: DescribeBrandRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeBrandAssignment(
    input: DescribeBrandAssignmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeBrandPublishedVersion(
    input: DescribeBrandPublishedVersionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeCustomPermissions(
    input: DescribeCustomPermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describeDashboard(
    input: DescribeDashboardRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeDashboardDefinition(
    input: DescribeDashboardDefinitionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeDashboardPermissions(
    input: DescribeDashboardPermissionsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeDashboardSnapshotJob(
    input: DescribeDashboardSnapshotJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeDashboardSnapshotJobResult(
    input: DescribeDashboardSnapshotJobResultRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeDashboardsQAConfiguration(
    input: DescribeDashboardsQAConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeDataSet(
    input: DescribeDataSetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeDataSetPermissions(
    input: DescribeDataSetPermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeDataSetRefreshProperties(
    input: DescribeDataSetRefreshPropertiesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | PreconditionNotMetException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeDataSource(
    input: DescribeDataSourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeDataSourcePermissions(
    input: DescribeDataSourcePermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeDefaultQBusinessApplication(
    input: DescribeDefaultQBusinessApplicationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeFolder(
    input: DescribeFolderRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeFolderPermissions(
    input: DescribeFolderPermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeFolderResolvedPermissions(
    input: DescribeFolderResolvedPermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeGroup(
    input: DescribeGroupRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describeGroupMembership(
    input: DescribeGroupMembershipRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describeIAMPolicyAssignment(
    input: DescribeIAMPolicyAssignmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeIngestion(
    input: DescribeIngestionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeIpRestriction(
    input: DescribeIpRestrictionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeKeyRegistration(
    input: DescribeKeyRegistrationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ThrottlingException | CommonAwsError
  >;
  describeNamespace(
    input: DescribeNamespaceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describeQPersonalizationConfiguration(
    input: DescribeQPersonalizationConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeQuickSightQSearchConfiguration(
    input: DescribeQuickSightQSearchConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeRefreshSchedule(
    input: DescribeRefreshScheduleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeRoleCustomPermission(
    input: DescribeRoleCustomPermissionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describeTemplate(
    input: DescribeTemplateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeTemplateAlias(
    input: DescribeTemplateAliasRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeTemplateDefinition(
    input: DescribeTemplateDefinitionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeTemplatePermissions(
    input: DescribeTemplatePermissionsRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeTheme(
    input: DescribeThemeRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeThemeAlias(
    input: DescribeThemeAliasRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeThemePermissions(
    input: DescribeThemePermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  describeTopic(
    input: DescribeTopicRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeTopicPermissions(
    input: DescribeTopicPermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeTopicRefresh(
    input: DescribeTopicRefreshRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeTopicRefreshSchedule(
    input: DescribeTopicRefreshScheduleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeUser(
    input: DescribeUserRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describeVPCConnection(
    input: DescribeVPCConnectionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  generateEmbedUrlForAnonymousUser(
    input: GenerateEmbedUrlForAnonymousUserRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | SessionLifetimeInMinutesInvalidException | ThrottlingException | UnsupportedPricingPlanException | UnsupportedUserEditionException | CommonAwsError
  >;
  generateEmbedUrlForRegisteredUser(
    input: GenerateEmbedUrlForRegisteredUserRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | QuickSightUserNotFoundException | ResourceNotFoundException | SessionLifetimeInMinutesInvalidException | ThrottlingException | UnsupportedPricingPlanException | UnsupportedUserEditionException | CommonAwsError
  >;
  generateEmbedUrlForRegisteredUserWithIdentity(
    input: GenerateEmbedUrlForRegisteredUserWithIdentityRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | QuickSightUserNotFoundException | ResourceNotFoundException | SessionLifetimeInMinutesInvalidException | ThrottlingException | UnsupportedPricingPlanException | UnsupportedUserEditionException | CommonAwsError
  >;
  getDashboardEmbedUrl(
    input: GetDashboardEmbedUrlRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | DomainNotWhitelistedException | IdentityTypeNotSupportedException | InternalFailureException | InvalidParameterValueException | QuickSightUserNotFoundException | ResourceExistsException | ResourceNotFoundException | SessionLifetimeInMinutesInvalidException | ThrottlingException | UnsupportedPricingPlanException | UnsupportedUserEditionException | CommonAwsError
  >;
  getSessionEmbedUrl(
    input: GetSessionEmbedUrlRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | QuickSightUserNotFoundException | ResourceExistsException | ResourceNotFoundException | SessionLifetimeInMinutesInvalidException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  listAnalyses(
    input: ListAnalysesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidNextTokenException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  listAssetBundleExportJobs(
    input: ListAssetBundleExportJobsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InvalidNextTokenException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  listAssetBundleImportJobs(
    input: ListAssetBundleImportJobsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InvalidNextTokenException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  listBrands(
    input: ListBrandsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listCustomPermissions(
    input: ListCustomPermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listDashboardVersions(
    input: ListDashboardVersionsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  listDashboards(
    input: ListDashboardsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidNextTokenException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  listDataSets(
    input: ListDataSetsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ThrottlingException | CommonAwsError
  >;
  listDataSources(
    input: ListDataSourcesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ThrottlingException | CommonAwsError
  >;
  listFolderMembers(
    input: ListFolderMembersRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  listFolders(
    input: ListFoldersRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  listFoldersForResource(
    input: ListFoldersForResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  listGroupMemberships(
    input: ListGroupMembershipsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listGroups(
    input: ListGroupsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listIAMPolicyAssignments(
    input: ListIAMPolicyAssignmentsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listIAMPolicyAssignmentsForUser(
    input: ListIAMPolicyAssignmentsForUserRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConcurrentUpdatingException | InternalFailureException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listIdentityPropagationConfigs(
    input: ListIdentityPropagationConfigsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listIngestions(
    input: ListIngestionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listNamespaces(
    input: ListNamespacesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listRefreshSchedules(
    input: ListRefreshSchedulesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listRoleMemberships(
    input: ListRoleMembershipsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | LimitExceededException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listTemplateAliases(
    input: ListTemplateAliasesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidNextTokenException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  listTemplateVersions(
    input: ListTemplateVersionsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  listTemplates(
    input: ListTemplatesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  listThemeAliases(
    input: ListThemeAliasesRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  listThemeVersions(
    input: ListThemeVersionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  listThemes(
    input: ListThemesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  listTopicRefreshSchedules(
    input: ListTopicRefreshSchedulesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listTopicReviewedAnswers(
    input: ListTopicReviewedAnswersRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listTopics(
    input: ListTopicsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ThrottlingException | CommonAwsError
  >;
  listUserGroups(
    input: ListUserGroupsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listUsers(
    input: ListUsersRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listVPCConnections(
    input: ListVPCConnectionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  predictQAResults(
    input: PredictQAResultsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ThrottlingException | CommonAwsError
  >;
  putDataSetRefreshProperties(
    input: PutDataSetRefreshPropertiesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | PreconditionNotMetException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  registerUser(
    input: RegisterUserRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | PreconditionNotMetException | ResourceExistsException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  restoreAnalysis(
    input: RestoreAnalysisRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | PreconditionNotMetException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  searchAnalyses(
    input: SearchAnalysesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  searchDashboards(
    input: SearchDashboardsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  searchDataSets(
    input: SearchDataSetsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchDataSources(
    input: SearchDataSourcesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchFolders(
    input: SearchFoldersRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  searchGroups(
    input: SearchGroupsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  searchTopics(
    input: SearchTopicsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidNextTokenException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  startAssetBundleExportJob(
    input: StartAssetBundleExportJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  startAssetBundleImportJob(
    input: StartAssetBundleImportJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  startDashboardSnapshotJob(
    input: StartDashboardSnapshotJobRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedPricingPlanException | UnsupportedUserEditionException | CommonAwsError
  >;
  startDashboardSnapshotJobSchedule(
    input: StartDashboardSnapshotJobScheduleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateAccountCustomization(
    input: UpdateAccountCustomizationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  updateAccountSettings(
    input: UpdateAccountSettingsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  updateAnalysis(
    input: UpdateAnalysisRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateAnalysisPermissions(
    input: UpdateAnalysisPermissionsRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateApplicationWithTokenExchangeGrant(
    input: UpdateApplicationWithTokenExchangeGrantRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateBrand(
    input: UpdateBrandRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateBrandAssignment(
    input: UpdateBrandAssignmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateBrandPublishedVersion(
    input: UpdateBrandPublishedVersionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateCustomPermissions(
    input: UpdateCustomPermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  updateDashboard(
    input: UpdateDashboardRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateDashboardLinks(
    input: UpdateDashboardLinksRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateDashboardPermissions(
    input: UpdateDashboardPermissionsRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateDashboardPublishedVersion(
    input: UpdateDashboardPublishedVersionRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateDashboardsQAConfiguration(
    input: UpdateDashboardsQAConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateDataSet(
    input: UpdateDataSetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateDataSetPermissions(
    input: UpdateDataSetPermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateDataSource(
    input: UpdateDataSourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | CustomerManagedKeyUnavailableException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateDataSourcePermissions(
    input: UpdateDataSourcePermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateDefaultQBusinessApplication(
    input: UpdateDefaultQBusinessApplicationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateFolder(
    input: UpdateFolderRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateFolderPermissions(
    input: UpdateFolderPermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateGroup(
    input: UpdateGroupRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  updateIAMPolicyAssignment(
    input: UpdateIAMPolicyAssignmentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConcurrentUpdatingException | InternalFailureException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateIdentityPropagationConfig(
    input: UpdateIdentityPropagationConfigRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateIpRestriction(
    input: UpdateIpRestrictionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateKeyRegistration(
    input: UpdateKeyRegistrationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ThrottlingException | CommonAwsError
  >;
  updatePublicSharingSettings(
    input: UpdatePublicSharingSettingsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | UnsupportedPricingPlanException | CommonAwsError
  >;
  updateQPersonalizationConfiguration(
    input: UpdateQPersonalizationConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  updateQuickSightQSearchConfiguration(
    input: UpdateQuickSightQSearchConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateRefreshSchedule(
    input: UpdateRefreshScheduleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | PreconditionNotMetException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateRoleCustomPermission(
    input: UpdateRoleCustomPermissionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  updateSPICECapacityConfiguration(
    input: UpdateSPICECapacityConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateTemplate(
    input: UpdateTemplateRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateTemplateAlias(
    input: UpdateTemplateAliasRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateTemplatePermissions(
    input: UpdateTemplatePermissionsRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateTheme(
    input: UpdateThemeRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateThemeAlias(
    input: UpdateThemeAliasRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidParameterValueException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateThemePermissions(
    input: UpdateThemePermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateTopic(
    input: UpdateTopicRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateTopicPermissions(
    input: UpdateTopicPermissionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
  updateTopicRefreshSchedule(
    input: UpdateTopicRefreshScheduleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateUser(
    input: UpdateUserRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  updateUserCustomPermission(
    input: UpdateUserCustomPermissionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | PreconditionNotMetException | ResourceNotFoundException | ResourceUnavailableException | ThrottlingException | CommonAwsError
  >;
  updateVPCConnection(
    input: UpdateVPCConnectionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalFailureException | InvalidParameterValueException | LimitExceededException | ResourceNotFoundException | ThrottlingException | UnsupportedUserEditionException | CommonAwsError
  >;
}

export type Quicksight = QuickSight_20180401;

export interface AccessDeniedException {
}
export interface AccountCustomization {
}
export interface AccountInfo {
}
export type AccountName = string;

export interface AccountSettings {
}
export type ActionList = Array<unknown>;
export interface ActiveIAMPolicyAssignment {
}
export type ActiveIAMPolicyAssignmentList = Array<unknown>;
export type AdditionalDashboardIdList = Array<unknown>;
export interface AdHocFilteringOption {
}
export interface AggFunction {
}
export type AggFunctionParamKey = string;

export type AggFunctionParamMap = Record<string, unknown>;
export type AggFunctionParamValue = string;

export interface AggregationFunction {
}
export type AggregationFunctionParameters = Record<string, unknown>;
export interface AggregationPartitionBy {
}
export type AggregationPartitionByList = Array<unknown>;
export interface AggregationSortConfiguration {
}
export type AggregationSortConfigurationList = Array<unknown>;
export type AggType = never;
export type AliasName = string;

export interface AllSheetsFilterScopeConfiguration {
}
export type AltText = string;

export interface AmazonElasticsearchParameters {
}
export interface AmazonOpenSearchParameters {
}
export interface AmazonQInQuickSightConsoleConfigurations {
}
export interface AmazonQInQuickSightDashboardConfigurations {
}
export interface Analysis {
}
export interface AnalysisDefaults {
}
export interface AnalysisDefinition {
}
export interface AnalysisError {
}
export type AnalysisErrorList = Array<unknown>;
export type AnalysisErrorType = never;
export type AnalysisFilterAttribute = never;
export type AnalysisName = string;

export interface AnalysisSearchFilter {
}
export type AnalysisSearchFilterList = Array<unknown>;
export interface AnalysisSourceEntity {
}
export interface AnalysisSourceTemplate {
}
export interface AnalysisSummary {
}
export type AnalysisSummaryList = Array<unknown>;
export interface Anchor {
}
export interface AnchorDateConfiguration {
}
export type AnchorOption = never;
export type AnchorType = never;
export interface AnonymousUserDashboardEmbeddingConfiguration {
}
export type AnonymousUserDashboardEmbeddingConfigurationDisabledFeature = never;
export type AnonymousUserDashboardEmbeddingConfigurationDisabledFeatures = Array<unknown>;
export type AnonymousUserDashboardEmbeddingConfigurationEnabledFeature = never;
export type AnonymousUserDashboardEmbeddingConfigurationEnabledFeatures = Array<unknown>;
export interface AnonymousUserDashboardFeatureConfigurations {
}
export interface AnonymousUserDashboardVisualEmbeddingConfiguration {
}
export interface AnonymousUserEmbeddingExperienceConfiguration {
}
export interface AnonymousUserGenerativeQnAEmbeddingConfiguration {
}
export interface AnonymousUserQSearchBarEmbeddingConfiguration {
}
export interface AnonymousUserSnapshotJobResult {
}
export type AnonymousUserSnapshotJobResultList = Array<unknown>;
export type AnswerId = string;

export type AnswerIds = Array<unknown>;
export interface ApplicationTheme {
}
export interface ArcAxisConfiguration {
}
export interface ArcAxisDisplayRange {
}
export interface ArcConfiguration {
}
export interface ArcOptions {
}
export type ArcThickness = never;
export type ArcThicknessOptions = never;
export type Arn = string;

export type ArnList = Array<unknown>;
export interface AssetBundleCloudFormationOverridePropertyConfiguration {
}
export type AssetBundleExportFormat = never;
export interface AssetBundleExportJobAnalysisOverrideProperties {
}
export type AssetBundleExportJobAnalysisOverridePropertiesList = Array<unknown>;
export type AssetBundleExportJobAnalysisPropertyToOverride = never;
export type AssetBundleExportJobAnalysisPropertyToOverrideList = Array<unknown>;
export interface AssetBundleExportJobDashboardOverrideProperties {
}
export type AssetBundleExportJobDashboardOverridePropertiesList = Array<unknown>;
export type AssetBundleExportJobDashboardPropertyToOverride = never;
export type AssetBundleExportJobDashboardPropertyToOverrideList = Array<unknown>;
export interface AssetBundleExportJobDataSetOverrideProperties {
}
export type AssetBundleExportJobDataSetOverridePropertiesList = Array<unknown>;
export type AssetBundleExportJobDataSetPropertyToOverride = never;
export type AssetBundleExportJobDataSetPropertyToOverrideList = Array<unknown>;
export interface AssetBundleExportJobDataSourceOverrideProperties {
}
export type AssetBundleExportJobDataSourceOverridePropertiesList = Array<unknown>;
export type AssetBundleExportJobDataSourcePropertyToOverride = never;
export type AssetBundleExportJobDataSourcePropertyToOverrideList = Array<unknown>;
export interface AssetBundleExportJobError {
}
export type AssetBundleExportJobErrorList = Array<unknown>;
export interface AssetBundleExportJobFolderOverrideProperties {
}
export type AssetBundleExportJobFolderOverridePropertiesList = Array<unknown>;
export type AssetBundleExportJobFolderPropertyToOverride = never;
export type AssetBundleExportJobFolderPropertyToOverrideList = Array<unknown>;
export interface AssetBundleExportJobRefreshScheduleOverrideProperties {
}
export type AssetBundleExportJobRefreshScheduleOverridePropertiesList = Array<unknown>;
export type AssetBundleExportJobRefreshSchedulePropertyToOverride = never;
export type AssetBundleExportJobRefreshSchedulePropertyToOverrideList = Array<unknown>;
export interface AssetBundleExportJobResourceIdOverrideConfiguration {
}
export type AssetBundleExportJobStatus = never;
export interface AssetBundleExportJobSummary {
}
export type AssetBundleExportJobSummaryList = Array<unknown>;
export interface AssetBundleExportJobThemeOverrideProperties {
}
export type AssetBundleExportJobThemeOverridePropertiesList = Array<unknown>;
export type AssetBundleExportJobThemePropertyToOverride = never;
export type AssetBundleExportJobThemePropertyToOverrideList = Array<unknown>;
export interface AssetBundleExportJobValidationStrategy {
}
export interface AssetBundleExportJobVPCConnectionOverrideProperties {
}
export type AssetBundleExportJobVPCConnectionOverridePropertiesList = Array<unknown>;
export type AssetBundleExportJobVPCConnectionPropertyToOverride = never;
export type AssetBundleExportJobVPCConnectionPropertyToOverrideList = Array<unknown>;
export interface AssetBundleExportJobWarning {
}
export type AssetBundleExportJobWarningList = Array<unknown>;
export type AssetBundleImportBodyBlob = Uint8Array | string;

export type AssetBundleImportFailureAction = never;
export interface AssetBundleImportJobAnalysisOverrideParameters {
}
export type AssetBundleImportJobAnalysisOverrideParametersList = Array<unknown>;
export interface AssetBundleImportJobAnalysisOverridePermissions {
}
export type AssetBundleImportJobAnalysisOverridePermissionsList = Array<unknown>;
export interface AssetBundleImportJobAnalysisOverrideTags {
}
export type AssetBundleImportJobAnalysisOverrideTagsList = Array<unknown>;
export interface AssetBundleImportJobDashboardOverrideParameters {
}
export type AssetBundleImportJobDashboardOverrideParametersList = Array<unknown>;
export interface AssetBundleImportJobDashboardOverridePermissions {
}
export type AssetBundleImportJobDashboardOverridePermissionsList = Array<unknown>;
export interface AssetBundleImportJobDashboardOverrideTags {
}
export type AssetBundleImportJobDashboardOverrideTagsList = Array<unknown>;
export interface AssetBundleImportJobDataSetOverrideParameters {
}
export type AssetBundleImportJobDataSetOverrideParametersList = Array<unknown>;
export interface AssetBundleImportJobDataSetOverridePermissions {
}
export type AssetBundleImportJobDataSetOverridePermissionsList = Array<unknown>;
export interface AssetBundleImportJobDataSetOverrideTags {
}
export type AssetBundleImportJobDataSetOverrideTagsList = Array<unknown>;
export interface AssetBundleImportJobDataSourceCredentialPair {
}
export interface AssetBundleImportJobDataSourceCredentials {
}
export interface AssetBundleImportJobDataSourceOverrideParameters {
}
export type AssetBundleImportJobDataSourceOverrideParametersList = Array<unknown>;
export interface AssetBundleImportJobDataSourceOverridePermissions {
}
export type AssetBundleImportJobDataSourceOverridePermissionsList = Array<unknown>;
export interface AssetBundleImportJobDataSourceOverrideTags {
}
export type AssetBundleImportJobDataSourceOverrideTagsList = Array<unknown>;
export interface AssetBundleImportJobError {
}
export type AssetBundleImportJobErrorList = Array<unknown>;
export interface AssetBundleImportJobFolderOverrideParameters {
}
export type AssetBundleImportJobFolderOverrideParametersList = Array<unknown>;
export interface AssetBundleImportJobFolderOverridePermissions {
}
export type AssetBundleImportJobFolderOverridePermissionsList = Array<unknown>;
export interface AssetBundleImportJobFolderOverrideTags {
}
export type AssetBundleImportJobFolderOverrideTagsList = Array<unknown>;
export interface AssetBundleImportJobOverrideParameters {
}
export interface AssetBundleImportJobOverridePermissions {
}
export interface AssetBundleImportJobOverrideTags {
}
export interface AssetBundleImportJobOverrideValidationStrategy {
}
export interface AssetBundleImportJobRefreshScheduleOverrideParameters {
}
export type AssetBundleImportJobRefreshScheduleOverrideParametersList = Array<unknown>;
export interface AssetBundleImportJobResourceIdOverrideConfiguration {
}
export type AssetBundleImportJobStatus = never;
export interface AssetBundleImportJobSummary {
}
export type AssetBundleImportJobSummaryList = Array<unknown>;
export interface AssetBundleImportJobThemeOverrideParameters {
}
export type AssetBundleImportJobThemeOverrideParametersList = Array<unknown>;
export interface AssetBundleImportJobThemeOverridePermissions {
}
export type AssetBundleImportJobThemeOverridePermissionsList = Array<unknown>;
export interface AssetBundleImportJobThemeOverrideTags {
}
export type AssetBundleImportJobThemeOverrideTagsList = Array<unknown>;
export interface AssetBundleImportJobVPCConnectionOverrideParameters {
}
export type AssetBundleImportJobVPCConnectionOverrideParametersList = Array<unknown>;
export interface AssetBundleImportJobVPCConnectionOverrideTags {
}
export type AssetBundleImportJobVPCConnectionOverrideTagsList = Array<unknown>;
export interface AssetBundleImportJobWarning {
}
export type AssetBundleImportJobWarningList = Array<unknown>;
export interface AssetBundleImportSource {
}
export interface AssetBundleImportSourceDescription {
}
export type AssetBundlePrincipalList = Array<unknown>;
export type AssetBundleResourceArns = Array<unknown>;
export interface AssetBundleResourceLinkSharingConfiguration {
}
export interface AssetBundleResourcePermissions {
}
export type AssetBundleRestrictiveResourceId = string;

export type AssetBundleRestrictiveResourceIdList = Array<unknown>;
export interface AssetOptions {
}
export type AssignmentStatus = never;
export interface AthenaParameters {
}
export interface AttributeAggregationFunction {
}
export interface AuroraParameters {
}
export interface AuroraPostgreSqlParameters {
}
export type AuthenticationMethodOption = never;
export type AuthenticationType = never;
export interface AuthorizedTargetsByService {
}
export type AuthorizedTargetsByServices = Array<unknown>;
export type AuthorizedTargetsList = Array<unknown>;
export type AuthorSpecifiedAggregation = never;
export type AuthorSpecifiedAggregations = Array<unknown>;
export type AwsAccountId = string;

export type AwsAndAccountId = string;

export interface AwsIotAnalyticsParameters {
}
export type AxisBinding = never;
export interface AxisDataOptions {
}
export interface AxisDisplayDataDrivenRange {
}
export interface AxisDisplayMinMaxRange {
}
export interface AxisDisplayOptions {
}
export interface AxisDisplayRange {
}
export interface AxisLabelOptions {
}
export type AxisLabelOptionsList = Array<unknown>;
export interface AxisLabelReferenceOptions {
}
export interface AxisLinearScale {
}
export interface AxisLogarithmicScale {
}
export interface AxisScale {
}
export interface AxisTickLabelOptions {
}
export interface BarChartAggregatedFieldWells {
}
export interface BarChartConfiguration {
}
export interface BarChartFieldWells {
}
export type BarChartOrientation = never;
export interface BarChartSortConfiguration {
}
export interface BarChartVisual {
}
export type BarsArrangement = never;
export type BaseMapStyleType = never;
export interface BatchCreateTopicReviewedAnswerRequest {
}
export interface BatchCreateTopicReviewedAnswerResponse {
}
export interface BatchDeleteTopicReviewedAnswerRequest {
}
export interface BatchDeleteTopicReviewedAnswerResponse {
}
export interface BigQueryParameters {
}
export type BinCountLimit = number;

export interface BinCountOptions {
}
export type BinCountValue = number;

export interface BinWidthOptions {
}
export type BinWidthValue = number;

export interface BodySectionConfiguration {
}
export type BodySectionConfigurationList = Array<unknown>;
export interface BodySectionContent {
}
export interface BodySectionDynamicCategoryDimensionConfiguration {
}
export type BodySectionDynamicDimensionLimit = number;

export type BodySectionDynamicDimensionSortConfigurationList = Array<unknown>;
export interface BodySectionDynamicNumericDimensionConfiguration {
}
export interface BodySectionRepeatConfiguration {
}
export interface BodySectionRepeatDimensionConfiguration {
}
export type BodySectionRepeatDimensionConfigurationList = Array<unknown>;
export interface BodySectionRepeatPageBreakConfiguration {
}
export interface BookmarksConfigurations {
}
export type BooleanObject = boolean;

export interface BorderStyle {
}
export interface BoxPlotAggregatedFieldWells {
}
export interface BoxPlotChartConfiguration {
}
export type BoxPlotDimensionFieldList = Array<unknown>;
export interface BoxPlotFieldWells {
}
export type BoxPlotFillStyle = never;
export type BoxPlotMeasureFieldList = Array<unknown>;
export interface BoxPlotOptions {
}
export interface BoxPlotSortConfiguration {
}
export interface BoxPlotStyleOptions {
}
export interface BoxPlotVisual {
}
export interface BrandColorPalette {
}
export interface BrandDefinition {
}
export interface BrandDetail {
}
export interface BrandElementStyle {
}
export type BrandStatus = never;
export interface BrandSummary {
}
export type BrandSummaryList = Array<unknown>;
export type BrandVersionStatus = never;
export interface CalculatedColumn {
}
export type CalculatedColumnList = Array<unknown>;
export interface CalculatedField {
}
export type CalculatedFieldExpression = string;

export type CalculatedFieldReferenceList = Array<unknown>;
export type CalculatedFields = Array<unknown>;
export interface CalculatedMeasureField {
}
export interface CancelIngestionRequest {
}
export interface CancelIngestionResponse {
}
export interface Capabilities {
}
export type CapabilityState = never;
export interface CascadingControlConfiguration {
}
export interface CascadingControlSource {
}
export type CascadingControlSourceList = Array<unknown>;
export interface CastColumnTypeOperation {
}
export type Catalog = string;

export type CategoricalAggregationFunction = never;
export interface CategoricalDimensionField {
}
export interface CategoricalMeasureField {
}
export interface CategoryDrillDownFilter {
}
export interface CategoryFilter {
}
export interface CategoryFilterConfiguration {
}
export type CategoryFilterFunction = never;
export type CategoryFilterMatchOperator = never;
export type CategoryFilterSelectAllOptions = never;
export type CategoryFilterType = never;
export interface CategoryInnerFilter {
}
export type CategoryValue = string;

export type CategoryValueList = Array<unknown>;
export interface CellValueSynonym {
}
export type CellValueSynonyms = Array<unknown>;
export interface ChartAxisLabelOptions {
}
export type CIDR = string;

export type ClusterId = string;

export interface ClusterMarker {
}
export interface ClusterMarkerConfiguration {
}
export interface CollectiveConstant {
}
export interface CollectiveConstantEntry {
}
export type CollectiveConstantEntryList = Array<unknown>;
export type ColorFillType = never;
export type ColorList = Array<unknown>;
export interface ColorScale {
}
export type ColorScaleColorList = Array<unknown>;
export interface ColorsConfiguration {
}
export interface ColumnConfiguration {
}
export type ColumnConfigurationList = Array<unknown>;
export type ColumnDataRole = never;
export type ColumnDataSubType = never;
export type ColumnDataType = never;
export interface ColumnDescription {
}
export type ColumnDescriptiveText = string;

export interface ColumnGroup {
}
export interface ColumnGroupColumnSchema {
}
export type ColumnGroupColumnSchemaList = Array<unknown>;
export type ColumnGroupList = Array<unknown>;
export type ColumnGroupName = string;

export interface ColumnGroupSchema {
}
export type ColumnGroupSchemaList = Array<unknown>;
export interface ColumnHierarchy {
}
export type ColumnHierarchyList = Array<unknown>;
export type ColumnId = string;

export interface ColumnIdentifier {
}
export interface ColumnLevelPermissionRule {
}
export type ColumnLevelPermissionRuleList = Array<unknown>;
export type ColumnList = Array<unknown>;
export type ColumnName = string;

export type ColumnNameList = Array<unknown>;
export type ColumnOrderingType = never;
export type ColumnRole = never;
export interface ColumnSchema {
}
export type ColumnSchemaList = Array<unknown>;
export interface ColumnSort {
}
export interface ColumnTag {
}
export type ColumnTagList = Array<unknown>;
export type ColumnTagName = never;
export type ColumnTagNames = Array<unknown>;
export interface ColumnTooltipItem {
}
export interface ComboChartAggregatedFieldWells {
}
export interface ComboChartConfiguration {
}
export interface ComboChartFieldWells {
}
export interface ComboChartSortConfiguration {
}
export interface ComboChartVisual {
}
export type CommitMode = never;
export interface ComparativeOrder {
}
export interface ComparisonConfiguration {
}
export interface ComparisonFormatConfiguration {
}
export type ComparisonMethod = never;
export type ComparisonMethodType = never;
export interface Computation {
}
export type ComputationList = Array<unknown>;
export interface ConcurrentUpdatingException {
}
export interface ConditionalFormattingColor {
}
export interface ConditionalFormattingCustomIconCondition {
}
export interface ConditionalFormattingCustomIconOptions {
}
export interface ConditionalFormattingGradientColor {
}
export interface ConditionalFormattingIcon {
}
export interface ConditionalFormattingIconDisplayConfiguration {
}
export type ConditionalFormattingIconDisplayOption = never;
export interface ConditionalFormattingIconSet {
}
export type ConditionalFormattingIconSetType = never;
export interface ConditionalFormattingSolidColor {
}
export interface ConflictException {
}
export type ConstantType = never;
export type ConstantValueString = string;

export interface ContextMenuOption {
}
export interface ContributionAnalysisDefault {
}
export type ContributionAnalysisDefaultList = Array<unknown>;
export type ContributionAnalysisDirection = never;
export interface ContributionAnalysisFactor {
}
export type ContributionAnalysisFactorsList = Array<unknown>;
export type ContributionAnalysisSortType = never;
export interface ContributionAnalysisTimeRanges {
}
export type ContributorDimensionList = Array<unknown>;
export type CopySourceArn = string;

export interface CreateAccountCustomizationRequest {
}
export interface CreateAccountCustomizationResponse {
}
export interface CreateAccountSubscriptionRequest {
}
export interface CreateAccountSubscriptionResponse {
}
export interface CreateAnalysisRequest {
}
export interface CreateAnalysisResponse {
}
export interface CreateBrandRequest {
}
export interface CreateBrandResponse {
}
export interface CreateColumnsOperation {
}
export interface CreateCustomPermissionsRequest {
}
export interface CreateCustomPermissionsResponse {
}
export interface CreateDashboardRequest {
}
export interface CreateDashboardResponse {
}
export interface CreateDataSetRequest {
}
export interface CreateDataSetResponse {
}
export interface CreateDataSourceRequest {
}
export interface CreateDataSourceResponse {
}
export interface CreateFolderMembershipRequest {
}
export interface CreateFolderMembershipResponse {
}
export interface CreateFolderRequest {
}
export interface CreateFolderResponse {
}
export interface CreateGroupMembershipRequest {
}
export interface CreateGroupMembershipResponse {
}
export interface CreateGroupRequest {
}
export interface CreateGroupResponse {
}
export interface CreateIAMPolicyAssignmentRequest {
}
export interface CreateIAMPolicyAssignmentResponse {
}
export interface CreateIngestionRequest {
}
export interface CreateIngestionResponse {
}
export interface CreateNamespaceRequest {
}
export interface CreateNamespaceResponse {
}
export interface CreateRefreshScheduleRequest {
}
export interface CreateRefreshScheduleResponse {
}
export interface CreateRoleMembershipRequest {
}
export interface CreateRoleMembershipResponse {
}
export interface CreateTemplateAliasRequest {
}
export interface CreateTemplateAliasResponse {
}
export interface CreateTemplateRequest {
}
export interface CreateTemplateResponse {
}
export interface CreateThemeAliasRequest {
}
export interface CreateThemeAliasResponse {
}
export interface CreateThemeRequest {
}
export interface CreateThemeResponse {
}
export interface CreateTopicRefreshScheduleRequest {
}
export interface CreateTopicRefreshScheduleResponse {
}
export interface CreateTopicRequest {
}
export interface CreateTopicResponse {
}
export interface CreateTopicReviewedAnswer {
}
export type CreateTopicReviewedAnswers = Array<unknown>;
export interface CreateVPCConnectionRequest {
}
export interface CreateVPCConnectionResponse {
}
export interface CredentialPair {
}
export type CrossDatasetTypes = never;
export type CurrencyCode = string;

export interface CurrencyDisplayFormatConfiguration {
}
export type CustomActionColumnList = Array<unknown>;
export interface CustomActionFilterOperation {
}
export interface CustomActionNavigationOperation {
}
export interface CustomActionSetParametersOperation {
}
export interface CustomActionURLOperation {
}
export interface CustomColor {
}
export type CustomColorsList = Array<unknown>;
export interface CustomContentConfiguration {
}
export type CustomContentImageScalingConfiguration = never;
export type CustomContentType = never;
export interface CustomContentVisual {
}
export interface CustomerManagedKeyUnavailableException {
}
export interface CustomFilterConfiguration {
}
export interface CustomFilterListConfiguration {
}
export type CustomLabel = string;

export interface CustomNarrativeOptions {
}
export interface CustomParameterValues {
}
export interface CustomPermissions {
}
export type CustomPermissionsList = Array<unknown>;
export type CustomPermissionsName = string;

export interface CustomSql {
}
export type CustomSqlName = string;

export interface CustomValuesConfiguration {
}
export interface Dashboard {
}
export type DashboardBehavior = never;
export interface DashboardError {
}
export type DashboardErrorList = Array<unknown>;
export type DashboardErrorType = never;
export type DashboardFilterAttribute = never;
export type DashboardName = string;

export interface DashboardPublishOptions {
}
export interface DashboardSearchFilter {
}
export type DashboardSearchFilterList = Array<unknown>;
export interface DashboardSourceEntity {
}
export interface DashboardSourceTemplate {
}
export type DashboardsQAStatus = never;
export interface DashboardSummary {
}
export type DashboardSummaryList = Array<unknown>;
export type DashboardUIState = never;
export interface DashboardVersion {
}
export interface DashboardVersionDefinition {
}
export interface DashboardVersionSummary {
}
export type DashboardVersionSummaryList = Array<unknown>;
export interface DashboardVisualId {
}
export interface DashboardVisualPublishOptions {
}
export interface DashboardVisualResult {
}
export interface DataAggregation {
}
export interface DataBarsOptions {
}
export type Database = string;

export type DatabaseAccessControlRole = string;

export type DatabaseGroup = string;

export type DatabaseGroupList = Array<unknown>;
export type DatabaseUser = string;

export interface DatabricksParameters {
}
export interface DataColor {
}
export interface DataColorPalette {
}
export interface DataFieldSeriesItem {
}
export type DataLabelContent = never;
export interface DataLabelOptions {
}
export type DataLabelOverlap = never;
export type DataLabelPosition = never;
export interface DataLabelType {
}
export type DataLabelTypes = Array<unknown>;
export interface DataPathColor {
}
export type DataPathColorList = Array<unknown>;
export interface DataPathLabelType {
}
export interface DataPathSort {
}
export interface DataPathType {
}
export interface DataPathValue {
}
export type DataPathValueList = Array<unknown>;
export interface DataPointDrillUpDownOption {
}
export interface DataPointMenuLabelOption {
}
export interface DataPointTooltipOption {
}
export interface DataQAEnabledOption {
}
export interface DataQnAConfigurations {
}
export interface DataSet {
}
export type DataSetArnsList = Array<unknown>;
export type DataSetCalculatedFieldExpression = string;

export interface DataSetConfiguration {
}
export type DataSetConfigurationList = Array<unknown>;
export type DataSetFilterAttribute = never;
export type DataSetIdentifier = string;

export interface DataSetIdentifierDeclaration {
}
export type DataSetIdentifierDeclarationList = Array<unknown>;
export type DataSetImportMode = never;
export interface DatasetMetadata {
}
export type DataSetName = string;

export interface DatasetParameter {
}
export type DatasetParameterId = string;

export type DatasetParameterList = Array<unknown>;
export type DatasetParameterName = string;

export type DatasetParameterValueType = never;
export interface DataSetReference {
}
export type DataSetReferenceList = Array<unknown>;
export interface DataSetRefreshProperties {
}
export type DataSetRegion = string;

export type Datasets = Array<unknown>;
export interface DataSetSchema {
}
export interface DataSetSearchFilter {
}
export type DataSetSearchFilterList = Array<unknown>;
export interface DataSetSummary {
}
export type DataSetSummaryList = Array<unknown>;
export interface DataSetUsageConfiguration {
}
export type DataSetUseAs = never;
export interface DataSource {
}
export interface DataSourceCredentials {
}
export interface DataSourceErrorInfo {
}
export type DataSourceErrorInfoType = never;
export type DataSourceFilterAttribute = never;
export type DataSourceList = Array<unknown>;
export type DataSourceParameters = never;
export type DataSourceParametersList = Array<unknown>;
export interface DataSourceSearchFilter {
}
export type DataSourceSearchFilterList = Array<unknown>;
export interface DataSourceSummary {
}
export type DataSourceSummaryList = Array<unknown>;
export type DataSourceType = never;
export interface DataStoriesConfigurations {
}
export type DateAggregationFunction = never;
export interface DateAxisOptions {
}
export interface DateDimensionField {
}
export interface DateMeasureField {
}
export interface DateTimeDatasetParameter {
}
export type DateTimeDatasetParameterDefaultValue = Date | string;

export interface DateTimeDatasetParameterDefaultValues {
}
export type DateTimeDatasetParameterValueList = Array<unknown>;
export type DateTimeDefaultValueList = Array<unknown>;
export interface DateTimeDefaultValues {
}
export type DateTimeFormat = string;

export interface DateTimeFormatConfiguration {
}
export interface DateTimeHierarchy {
}
export interface DateTimeParameter {
}
export interface DateTimeParameterDeclaration {
}
export type DateTimeParameterList = Array<unknown>;
export interface DateTimePickerControlDisplayOptions {
}
export interface DateTimeValueWhenUnsetConfiguration {
}
export type DayOfMonth = string;

export type DayOfTheWeek = never;
export type DayOfWeek = never;
export type DbUsername = string;

export interface DecimalDatasetParameter {
}
export type DecimalDatasetParameterDefaultValue = number;

export interface DecimalDatasetParameterDefaultValues {
}
export type DecimalDatasetParameterValueList = Array<unknown>;
export type DecimalDefaultValueList = Array<unknown>;
export interface DecimalDefaultValues {
}
export interface DecimalParameter {
}
export interface DecimalParameterDeclaration {
}
export type DecimalParameterList = Array<unknown>;
export type DecimalPlaces = number;

export interface DecimalPlacesConfiguration {
}
export interface DecimalValueWhenUnsetConfiguration {
}
export type DefaultAggregation = never;
export interface DefaultDateTimePickerControlOptions {
}
export interface DefaultFilterControlConfiguration {
}
export interface DefaultFilterControlOptions {
}
export interface DefaultFilterDropDownControlOptions {
}
export interface DefaultFilterListControlOptions {
}
export interface DefaultFormatting {
}
export interface DefaultFreeFormLayoutConfiguration {
}
export interface DefaultGridLayoutConfiguration {
}
export interface DefaultInteractiveLayoutConfiguration {
}
export interface DefaultNewSheetConfiguration {
}
export interface DefaultPaginatedLayoutConfiguration {
}
export interface DefaultRelativeDateTimeControlOptions {
}
export interface DefaultSectionBasedLayoutConfiguration {
}
export interface DefaultSliderControlOptions {
}
export interface DefaultTextAreaControlOptions {
}
export interface DefaultTextFieldControlOptions {
}
export interface DeleteAccountCustomizationRequest {
}
export interface DeleteAccountCustomizationResponse {
}
export interface DeleteAccountSubscriptionRequest {
}
export interface DeleteAccountSubscriptionResponse {
}
export interface DeleteAnalysisRequest {
}
export interface DeleteAnalysisResponse {
}
export interface DeleteBrandAssignmentRequest {
}
export interface DeleteBrandAssignmentResponse {
}
export interface DeleteBrandRequest {
}
export interface DeleteBrandResponse {
}
export interface DeleteCustomPermissionsRequest {
}
export interface DeleteCustomPermissionsResponse {
}
export interface DeleteDashboardRequest {
}
export interface DeleteDashboardResponse {
}
export interface DeleteDataSetRefreshPropertiesRequest {
}
export interface DeleteDataSetRefreshPropertiesResponse {
}
export interface DeleteDataSetRequest {
}
export interface DeleteDataSetResponse {
}
export interface DeleteDataSourceRequest {
}
export interface DeleteDataSourceResponse {
}
export interface DeleteDefaultQBusinessApplicationRequest {
}
export interface DeleteDefaultQBusinessApplicationResponse {
}
export interface DeleteFolderMembershipRequest {
}
export interface DeleteFolderMembershipResponse {
}
export interface DeleteFolderRequest {
}
export interface DeleteFolderResponse {
}
export interface DeleteGroupMembershipRequest {
}
export interface DeleteGroupMembershipResponse {
}
export interface DeleteGroupRequest {
}
export interface DeleteGroupResponse {
}
export interface DeleteIAMPolicyAssignmentRequest {
}
export interface DeleteIAMPolicyAssignmentResponse {
}
export interface DeleteIdentityPropagationConfigRequest {
}
export interface DeleteIdentityPropagationConfigResponse {
}
export interface DeleteNamespaceRequest {
}
export interface DeleteNamespaceResponse {
}
export interface DeleteRefreshScheduleRequest {
}
export interface DeleteRefreshScheduleResponse {
}
export interface DeleteRoleCustomPermissionRequest {
}
export interface DeleteRoleCustomPermissionResponse {
}
export interface DeleteRoleMembershipRequest {
}
export interface DeleteRoleMembershipResponse {
}
export interface DeleteTemplateAliasRequest {
}
export interface DeleteTemplateAliasResponse {
}
export interface DeleteTemplateRequest {
}
export interface DeleteTemplateResponse {
}
export interface DeleteThemeAliasRequest {
}
export interface DeleteThemeAliasResponse {
}
export interface DeleteThemeRequest {
}
export interface DeleteThemeResponse {
}
export interface DeleteTopicRefreshScheduleRequest {
}
export interface DeleteTopicRefreshScheduleResponse {
}
export interface DeleteTopicRequest {
}
export interface DeleteTopicResponse {
}
export interface DeleteUserByPrincipalIdRequest {
}
export interface DeleteUserByPrincipalIdResponse {
}
export interface DeleteUserCustomPermissionRequest {
}
export interface DeleteUserCustomPermissionResponse {
}
export interface DeleteUserRequest {
}
export interface DeleteUserResponse {
}
export interface DeleteVPCConnectionRequest {
}
export interface DeleteVPCConnectionResponse {
}
export type Delimiter = string;

export interface DescribeAccountCustomizationRequest {
}
export interface DescribeAccountCustomizationResponse {
}
export interface DescribeAccountSettingsRequest {
}
export interface DescribeAccountSettingsResponse {
}
export interface DescribeAccountSubscriptionRequest {
}
export interface DescribeAccountSubscriptionResponse {
}
export interface DescribeAnalysisDefinitionRequest {
}
export interface DescribeAnalysisDefinitionResponse {
}
export interface DescribeAnalysisPermissionsRequest {
}
export interface DescribeAnalysisPermissionsResponse {
}
export interface DescribeAnalysisRequest {
}
export interface DescribeAnalysisResponse {
}
export interface DescribeAssetBundleExportJobRequest {
}
export interface DescribeAssetBundleExportJobResponse {
}
export interface DescribeAssetBundleImportJobRequest {
}
export interface DescribeAssetBundleImportJobResponse {
}
export interface DescribeBrandAssignmentRequest {
}
export interface DescribeBrandAssignmentResponse {
}
export interface DescribeBrandPublishedVersionRequest {
}
export interface DescribeBrandPublishedVersionResponse {
}
export interface DescribeBrandRequest {
}
export interface DescribeBrandResponse {
}
export interface DescribeCustomPermissionsRequest {
}
export interface DescribeCustomPermissionsResponse {
}
export interface DescribeDashboardDefinitionRequest {
}
export interface DescribeDashboardDefinitionResponse {
}
export interface DescribeDashboardPermissionsRequest {
}
export interface DescribeDashboardPermissionsResponse {
}
export interface DescribeDashboardRequest {
}
export interface DescribeDashboardResponse {
}
export interface DescribeDashboardSnapshotJobRequest {
}
export interface DescribeDashboardSnapshotJobResponse {
}
export interface DescribeDashboardSnapshotJobResultRequest {
}
export interface DescribeDashboardSnapshotJobResultResponse {
}
export interface DescribeDashboardsQAConfigurationRequest {
}
export interface DescribeDashboardsQAConfigurationResponse {
}
export interface DescribeDataSetPermissionsRequest {
}
export interface DescribeDataSetPermissionsResponse {
}
export interface DescribeDataSetRefreshPropertiesRequest {
}
export interface DescribeDataSetRefreshPropertiesResponse {
}
export interface DescribeDataSetRequest {
}
export interface DescribeDataSetResponse {
}
export interface DescribeDataSourcePermissionsRequest {
}
export interface DescribeDataSourcePermissionsResponse {
}
export interface DescribeDataSourceRequest {
}
export interface DescribeDataSourceResponse {
}
export interface DescribeDefaultQBusinessApplicationRequest {
}
export interface DescribeDefaultQBusinessApplicationResponse {
}
export interface DescribeFolderPermissionsRequest {
}
export interface DescribeFolderPermissionsResponse {
}
export interface DescribeFolderRequest {
}
export interface DescribeFolderResolvedPermissionsRequest {
}
export interface DescribeFolderResolvedPermissionsResponse {
}
export interface DescribeFolderResponse {
}
export interface DescribeGroupMembershipRequest {
}
export interface DescribeGroupMembershipResponse {
}
export interface DescribeGroupRequest {
}
export interface DescribeGroupResponse {
}
export interface DescribeIAMPolicyAssignmentRequest {
}
export interface DescribeIAMPolicyAssignmentResponse {
}
export interface DescribeIngestionRequest {
}
export interface DescribeIngestionResponse {
}
export interface DescribeIpRestrictionRequest {
}
export interface DescribeIpRestrictionResponse {
}
export interface DescribeKeyRegistrationRequest {
}
export interface DescribeKeyRegistrationResponse {
}
export interface DescribeNamespaceRequest {
}
export interface DescribeNamespaceResponse {
}
export interface DescribeQPersonalizationConfigurationRequest {
}
export interface DescribeQPersonalizationConfigurationResponse {
}
export interface DescribeQuickSightQSearchConfigurationRequest {
}
export interface DescribeQuickSightQSearchConfigurationResponse {
}
export interface DescribeRefreshScheduleRequest {
}
export interface DescribeRefreshScheduleResponse {
}
export interface DescribeRoleCustomPermissionRequest {
}
export interface DescribeRoleCustomPermissionResponse {
}
export interface DescribeTemplateAliasRequest {
}
export interface DescribeTemplateAliasResponse {
}
export interface DescribeTemplateDefinitionRequest {
}
export interface DescribeTemplateDefinitionResponse {
}
export interface DescribeTemplatePermissionsRequest {
}
export interface DescribeTemplatePermissionsResponse {
}
export interface DescribeTemplateRequest {
}
export interface DescribeTemplateResponse {
}
export interface DescribeThemeAliasRequest {
}
export interface DescribeThemeAliasResponse {
}
export interface DescribeThemePermissionsRequest {
}
export interface DescribeThemePermissionsResponse {
}
export interface DescribeThemeRequest {
}
export interface DescribeThemeResponse {
}
export interface DescribeTopicPermissionsRequest {
}
export interface DescribeTopicPermissionsResponse {
}
export interface DescribeTopicRefreshRequest {
}
export interface DescribeTopicRefreshResponse {
}
export interface DescribeTopicRefreshScheduleRequest {
}
export interface DescribeTopicRefreshScheduleResponse {
}
export interface DescribeTopicRequest {
}
export interface DescribeTopicResponse {
}
export interface DescribeUserRequest {
}
export interface DescribeUserResponse {
}
export interface DescribeVPCConnectionRequest {
}
export interface DescribeVPCConnectionResponse {
}
export type Description = string;

export interface DestinationParameterValueConfiguration {
}
export type DigitGroupingStyle = never;
export interface DimensionField {
}
export type DimensionFieldList = Array<unknown>;
export type DisplayFormat = never;
export interface DisplayFormatOptions {
}
export type DnsResolverList = Array<unknown>;
export type Domain = string;

export interface DomainNotWhitelistedException {
}
export interface DonutCenterOptions {
}
export interface DonutOptions {
}
export type Double = number;

export interface DrillDownFilter {
}
export type DrillDownFilterList = Array<unknown>;
export interface DropDownControlDisplayOptions {
}
export interface DynamicDefaultValue {
}
export type Edition = never;
export type EmbeddingIdentityType = never;
export type EmbeddingUrl = string;

export interface EmptyVisual {
}
export interface Entity {
}
export type EntityList = Array<unknown>;
export type EntryPath = string;

export type EntryPoint = string;

export interface ErrorInfo {
}
export type ErrorList = Array<unknown>;
export type ErrorMessage = string;

export interface ExasolParameters {
}
export type ExceptionResourceType = never;
export interface ExcludePeriodConfiguration {
}
export interface ExecutiveSummaryConfigurations {
}
export interface ExplicitHierarchy {
}
export type ExplicitHierarchyColumnList = Array<unknown>;
export interface ExportHiddenFieldsOption {
}
export interface ExportToCSVOption {
}
export interface ExportWithHiddenFieldsOption {
}
export type Expression = string;

export type FailedKeyRegistrationEntries = Array<unknown>;
export interface FailedKeyRegistrationEntry {
}
export interface FieldBasedTooltip {
}
export interface FieldFolder {
}
export type FieldFolderDescription = string;

export type FieldFolderMap = Record<string, unknown>;
export type FieldFolderPath = string;

export type FieldId = string;

export interface FieldLabelType {
}
export type FieldOrderList = Array<unknown>;
export interface FieldSeriesItem {
}
export interface FieldSort {
}
export interface FieldSortOptions {
}
export type FieldSortOptionsList = Array<unknown>;
export interface FieldTooltipItem {
}
export type FieldValue = string;

export type FileFormat = never;
export interface FilledMapAggregatedFieldWells {
}
export interface FilledMapConditionalFormatting {
}
export interface FilledMapConditionalFormattingOption {
}
export type FilledMapConditionalFormattingOptionList = Array<unknown>;
export interface FilledMapConfiguration {
}
export type FilledMapDimensionFieldList = Array<unknown>;
export interface FilledMapFieldWells {
}
export type FilledMapMeasureFieldList = Array<unknown>;
export interface FilledMapShapeConditionalFormatting {
}
export interface FilledMapSortConfiguration {
}
export interface FilledMapVisual {
}
export interface Filter {
}
export interface FilterAggMetrics {
}
export type FilterAggMetricsList = Array<unknown>;
export type FilterClass = never;
export interface FilterControl {
}
export type FilterControlList = Array<unknown>;
export interface FilterCrossSheetControl {
}
export interface FilterDateTimePickerControl {
}
export interface FilterDropDownControl {
}
export type FilteredVisualsList = Array<unknown>;
export interface FilterGroup {
}
export type FilterGroupList = Array<unknown>;
export type FilterList = Array<unknown>;
export interface FilterListConfiguration {
}
export interface FilterListControl {
}
export type FilterNullOption = never;
export interface FilterOperation {
}
export interface FilterOperationSelectedFieldsConfiguration {
}
export interface FilterOperationTargetVisualsConfiguration {
}
export type FilterOperator = never;
export interface FilterRelativeDateTimeControl {
}
export interface FilterScopeConfiguration {
}
export interface FilterSelectableValues {
}
export interface FilterSliderControl {
}
export interface FilterTextAreaControl {
}
export interface FilterTextFieldControl {
}
export type FilterVisualScope = never;
export interface Folder {
}
export type FolderArnList = Array<unknown>;
export type FolderColumnList = Array<unknown>;
export type FolderFilterAttribute = never;
export interface FolderMember {
}
export type FolderMemberList = Array<unknown>;
export type FolderName = string;

export interface FolderSearchFilter {
}
export type FolderSearchFilterList = Array<unknown>;
export type FoldersForResourceArnList = Array<unknown>;
export interface FolderSummary {
}
export type FolderSummaryList = Array<unknown>;
export type FolderType = never;
export interface Font {
}
export interface FontConfiguration {
}
export type FontDecoration = never;
export type FontList = Array<unknown>;
export interface FontSize {
}
export type FontStyle = never;
export interface FontWeight {
}
export type FontWeightName = never;
export interface ForecastComputation {
}
export type ForecastComputationCustomSeasonalityValue = number;

export type ForecastComputationSeasonality = never;
export interface ForecastConfiguration {
}
export type ForecastConfigurationList = Array<unknown>;
export interface ForecastScenario {
}
export interface FormatConfiguration {
}
export interface FreeFormLayoutCanvasSizeOptions {
}
export interface FreeFormLayoutConfiguration {
}
export interface FreeFormLayoutElement {
}
export interface FreeFormLayoutElementBackgroundStyle {
}
export interface FreeFormLayoutElementBorderStyle {
}
export interface FreeFormLayoutScreenCanvasSizeOptions {
}
export interface FreeFormSectionLayoutConfiguration {
}
export type FreeFromLayoutElementList = Array<unknown>;
export interface FunnelChartAggregatedFieldWells {
}
export interface FunnelChartConfiguration {
}
export interface FunnelChartDataLabelOptions {
}
export type FunnelChartDimensionFieldList = Array<unknown>;
export interface FunnelChartFieldWells {
}
export type FunnelChartMeasureDataLabelStyle = never;
export type FunnelChartMeasureFieldList = Array<unknown>;
export interface FunnelChartSortConfiguration {
}
export interface FunnelChartVisual {
}
export interface GaugeChartArcConditionalFormatting {
}
export interface GaugeChartColorConfiguration {
}
export interface GaugeChartConditionalFormatting {
}
export interface GaugeChartConditionalFormattingOption {
}
export type GaugeChartConditionalFormattingOptionList = Array<unknown>;
export interface GaugeChartConfiguration {
}
export interface GaugeChartFieldWells {
}
export interface GaugeChartOptions {
}
export interface GaugeChartPrimaryValueConditionalFormatting {
}
export interface GaugeChartVisual {
}
export interface GeneratedAnswerResult {
}
export type GeneratedAnswerStatus = never;
export interface GenerateEmbedUrlForAnonymousUserRequest {
}
export interface GenerateEmbedUrlForAnonymousUserResponse {
}
export interface GenerateEmbedUrlForRegisteredUserRequest {
}
export interface GenerateEmbedUrlForRegisteredUserResponse {
}
export interface GenerateEmbedUrlForRegisteredUserWithIdentityRequest {
}
export interface GenerateEmbedUrlForRegisteredUserWithIdentityResponse {
}
export interface GenerativeAuthoringConfigurations {
}
export interface GeospatialCategoricalColor {
}
export interface GeospatialCategoricalDataColor {
}
export type GeospatialCategoricalDataColorList = Array<unknown>;
export interface GeospatialCircleRadius {
}
export interface GeospatialCircleSymbolStyle {
}
export interface GeospatialColor {
}
export type GeospatialColorState = never;
export interface GeoSpatialColumnGroup {
}
export interface GeospatialCoordinateBounds {
}
export type GeoSpatialCountryCode = never;
export type GeoSpatialDataRole = never;
export interface GeospatialDataSourceItem {
}
export interface GeospatialGradientColor {
}
export interface GeospatialGradientStepColor {
}
export type GeospatialGradientStepColorList = Array<unknown>;
export interface GeospatialHeatmapColorScale {
}
export interface GeospatialHeatmapConfiguration {
}
export interface GeospatialHeatmapDataColor {
}
export type GeospatialHeatmapDataColorList = Array<unknown>;
export interface GeospatialLayerColorField {
}
export interface GeospatialLayerDefinition {
}
export type GeospatialLayerDimensionFieldList = Array<unknown>;
export interface GeospatialLayerItem {
}
export interface GeospatialLayerJoinDefinition {
}
export interface GeospatialLayerMapConfiguration {
}
export type GeospatialLayerMeasureFieldList = Array<unknown>;
export type GeospatialLayerType = never;
export interface GeospatialLineLayer {
}
export interface GeospatialLineStyle {
}
export interface GeospatialLineSymbolStyle {
}
export interface GeospatialLineWidth {
}
export interface GeospatialMapAggregatedFieldWells {
}
export interface GeospatialMapConfiguration {
}
export interface GeospatialMapFieldWells {
}
export type GeospatialMapLayerList = Array<unknown>;
export type GeospatialMapNavigation = never;
export interface GeospatialMapState {
}
export interface GeospatialMapStyle {
}
export interface GeospatialMapStyleOptions {
}
export interface GeospatialMapVisual {
}
export interface GeospatialNullDataSettings {
}
export interface GeospatialNullSymbolStyle {
}
export interface GeospatialPointLayer {
}
export interface GeospatialPointStyle {
}
export interface GeospatialPointStyleOptions {
}
export interface GeospatialPolygonLayer {
}
export interface GeospatialPolygonStyle {
}
export interface GeospatialPolygonSymbolStyle {
}
export type GeospatialRadius = number;

export type GeospatialSelectedPointStyle = never;
export interface GeospatialSolidColor {
}
export interface GeospatialStaticFileSource {
}
export type GeospatialWidth = number;

export interface GeospatialWindowOptions {
}
export interface GetDashboardEmbedUrlRequest {
}
export interface GetDashboardEmbedUrlResponse {
}
export interface GetSessionEmbedUrlRequest {
}
export interface GetSessionEmbedUrlResponse {
}
export interface GlobalTableBorderOptions {
}
export interface GradientColor {
}
export interface GradientStop {
}
export type GradientStopList = Array<unknown>;
export interface GridLayoutCanvasSizeOptions {
}
export interface GridLayoutConfiguration {
}
export interface GridLayoutElement {
}
export type GridLayoutElementColumnIndex = number;

export type GridLayoutElementColumnSpan = number;

export type GridLayoutElementList = Array<unknown>;
export type GridLayoutElementRowIndex = number;

export type GridLayoutElementRowSpan = number;

export interface GridLayoutScreenCanvasSizeOptions {
}
export interface Group {
}
export type GroupDescription = string;

export type GroupFilterAttribute = never;
export type GroupFilterOperator = never;
export type GroupList = Array<unknown>;
export interface GroupMember {
}
export type GroupMemberList = Array<unknown>;
export type GroupMemberName = string;

export type GroupName = string;

export interface GroupSearchFilter {
}
export type GroupSearchFilterList = Array<unknown>;
export type GroupsList = Array<unknown>;
export interface GrowthRateComputation {
}
export type GrowthRatePeriodSize = number;

export interface GutterStyle {
}
export interface HeaderFooterSectionConfiguration {
}
export type HeaderFooterSectionConfigurationList = Array<unknown>;
export interface HeatMapAggregatedFieldWells {
}
export interface HeatMapConfiguration {
}
export type HeatMapDimensionFieldList = Array<unknown>;
export interface HeatMapFieldWells {
}
export type HeatMapMeasureFieldList = Array<unknown>;
export interface HeatMapSortConfiguration {
}
export interface HeatMapVisual {
}
export type HexColor = string;

export type HexColorWithTransparency = string;

export type HierarchyId = string;

export interface HistogramAggregatedFieldWells {
}
export interface HistogramBinOptions {
}
export type HistogramBinType = never;
export interface HistogramConfiguration {
}
export interface HistogramFieldWells {
}
export type HistogramMeasureFieldList = Array<unknown>;
export interface HistogramVisual {
}
export type HorizontalTextAlignment = never;
export type Host = string;

export interface IAMPolicyAssignment {
}
export type IAMPolicyAssignmentName = string;

export interface IAMPolicyAssignmentSummary {
}
export type IAMPolicyAssignmentSummaryList = Array<unknown>;
export type Icon = never;
export interface Identifier {
}
export interface IdentityCenterConfiguration {
}
export type IdentityMap = Record<string, unknown>;
export type IdentityName = string;

export type IdentityNameList = Array<unknown>;
export type IdentityProviderResourceUri = string;

export type IdentityStore = never;
export type IdentityType = never;
export interface IdentityTypeNotSupportedException {
}
export interface Image {
}
export interface ImageConfiguration {
}
export interface ImageCustomAction {
}
export type ImageCustomActionList = Array<unknown>;
export type ImageCustomActionName = string;

export interface ImageCustomActionOperation {
}
export type ImageCustomActionOperationList = Array<unknown>;
export type ImageCustomActionTrigger = never;
export interface ImageInteractionOptions {
}
export interface ImageMenuOption {
}
export interface ImageSet {
}
export interface ImageSetConfiguration {
}
export type ImageSource = never;
export interface ImageStaticFile {
}
export type IncludeFolderMembers = never;
export type IncludeGeneratedAnswer = never;
export type IncludeQuickSightQIndex = never;
export interface IncrementalRefresh {
}
export interface Ingestion {
}
export type IngestionErrorType = never;
export type IngestionId = string;

export type IngestionMaxResults = number;

export type IngestionRequestSource = never;
export type IngestionRequestType = never;
export type Ingestions = Array<unknown>;
export type IngestionStatus = never;
export type IngestionType = never;
export interface InnerFilter {
}
export interface InputColumn {
}
export type InputColumnDataType = never;
export type InputColumnList = Array<unknown>;
export interface InsightConfiguration {
}
export interface InsightVisual {
}
export type InstanceId = string;

export type Integer = number;

export interface IntegerDatasetParameter {
}
export type IntegerDatasetParameterDefaultValue = number;

export interface IntegerDatasetParameterDefaultValues {
}
export type IntegerDatasetParameterValueList = Array<unknown>;
export type IntegerDefaultValueList = Array<unknown>;
export interface IntegerDefaultValues {
}
export interface IntegerParameter {
}
export interface IntegerParameterDeclaration {
}
export type IntegerParameterList = Array<unknown>;
export interface IntegerValueWhenUnsetConfiguration {
}
export interface InternalFailureException {
}
export interface InternalServerException {
}
export interface InvalidNextTokenException {
}
export interface InvalidParameterValueException {
}
export interface InvalidRequestException {
}
export interface InvalidTopicReviewedAnswer {
}
export type InvalidTopicReviewedAnswers = Array<unknown>;
export type IpRestrictionRuleDescription = string;

export type IpRestrictionRuleMap = Record<string, unknown>;
export type IPv4Address = string;

export interface ItemsLimitConfiguration {
}
export interface JiraParameters {
}
export interface JoinInstruction {
}
export interface JoinKeyProperties {
}
export type JoinType = never;
export type KeyRegistration = Array<unknown>;
export interface KPIActualValueConditionalFormatting {
}
export interface KPIComparisonValueConditionalFormatting {
}
export interface KPIConditionalFormatting {
}
export interface KPIConditionalFormattingOption {
}
export type KPIConditionalFormattingOptionList = Array<unknown>;
export interface KPIConfiguration {
}
export interface KPIFieldWells {
}
export interface KPIOptions {
}
export interface KPIPrimaryValueConditionalFormatting {
}
export interface KPIProgressBarConditionalFormatting {
}
export interface KPISortConfiguration {
}
export interface KPISparklineOptions {
}
export type KPISparklineType = never;
export interface KPIVisual {
}
export interface KPIVisualLayoutOptions {
}
export interface KPIVisualStandardLayout {
}
export type KPIVisualStandardLayoutType = never;
export interface LabelOptions {
}
export type Latitude = number;

export interface LayerCustomAction {
}
export type LayerCustomActionList = Array<unknown>;
export type LayerCustomActionName = string;

export interface LayerCustomActionOperation {
}
export type LayerCustomActionOperationList = Array<unknown>;
export type LayerCustomActionTrigger = never;
export interface LayerMapVisual {
}
export interface Layout {
}
export interface LayoutConfiguration {
}
export type LayoutElementType = never;
export type LayoutList = Array<unknown>;
export interface LegendOptions {
}
export type LegendPosition = never;
export type Length = string;

export type LimitedString = string;

export interface LimitExceededException {
}
export interface LineChartAggregatedFieldWells {
}
export interface LineChartConfiguration {
}
export interface LineChartDefaultSeriesSettings {
}
export interface LineChartFieldWells {
}
export type LineChartLineStyle = never;
export interface LineChartLineStyleSettings {
}
export type LineChartMarkerShape = never;
export interface LineChartMarkerStyleSettings {
}
export interface LineChartSeriesSettings {
}
export interface LineChartSortConfiguration {
}
export type LineChartType = never;
export interface LineChartVisual {
}
export type LineInterpolation = never;
export interface LineSeriesAxisDisplayOptions {
}
export type LinkEntityArn = string;

export type LinkEntityArnList = Array<unknown>;
export interface LinkSharingConfiguration {
}
export interface ListAnalysesRequest {
}
export interface ListAnalysesResponse {
}
export interface ListAssetBundleExportJobsRequest {
}
export interface ListAssetBundleExportJobsResponse {
}
export interface ListAssetBundleImportJobsRequest {
}
export interface ListAssetBundleImportJobsResponse {
}
export interface ListBrandsRequest {
}
export interface ListBrandsResponse {
}
export interface ListControlDisplayOptions {
}
export interface ListControlSearchOptions {
}
export interface ListControlSelectAllOptions {
}
export interface ListCustomPermissionsRequest {
}
export interface ListCustomPermissionsResponse {
}
export interface ListDashboardsRequest {
}
export interface ListDashboardsResponse {
}
export interface ListDashboardVersionsRequest {
}
export interface ListDashboardVersionsResponse {
}
export interface ListDataSetsRequest {
}
export interface ListDataSetsResponse {
}
export interface ListDataSourcesRequest {
}
export interface ListDataSourcesResponse {
}
export interface ListFolderMembersRequest {
}
export interface ListFolderMembersResponse {
}
export interface ListFoldersForResourceRequest {
}
export interface ListFoldersForResourceResponse {
}
export interface ListFoldersRequest {
}
export interface ListFoldersResponse {
}
export interface ListGroupMembershipsRequest {
}
export interface ListGroupMembershipsResponse {
}
export interface ListGroupsRequest {
}
export interface ListGroupsResponse {
}
export interface ListIAMPolicyAssignmentsForUserRequest {
}
export interface ListIAMPolicyAssignmentsForUserResponse {
}
export interface ListIAMPolicyAssignmentsRequest {
}
export interface ListIAMPolicyAssignmentsResponse {
}
export interface ListIdentityPropagationConfigsRequest {
}
export interface ListIdentityPropagationConfigsResponse {
}
export type ListIdentityPropagationMaxResults = number;

export interface ListIngestionsRequest {
}
export interface ListIngestionsResponse {
}
export interface ListNamespacesRequest {
}
export interface ListNamespacesResponse {
}
export interface ListRefreshSchedulesRequest {
}
export interface ListRefreshSchedulesResponse {
}
export interface ListRoleMembershipsRequest {
}
export interface ListRoleMembershipsResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export interface ListTemplateAliasesRequest {
}
export interface ListTemplateAliasesResponse {
}
export interface ListTemplatesRequest {
}
export interface ListTemplatesResponse {
}
export interface ListTemplateVersionsRequest {
}
export interface ListTemplateVersionsResponse {
}
export interface ListThemeAliasesRequest {
}
export interface ListThemeAliasesResponse {
}
export interface ListThemesRequest {
}
export interface ListThemesResponse {
}
export interface ListThemeVersionsRequest {
}
export interface ListThemeVersionsResponse {
}
export interface ListTopicRefreshSchedulesRequest {
}
export interface ListTopicRefreshSchedulesResponse {
}
export interface ListTopicReviewedAnswersRequest {
}
export interface ListTopicReviewedAnswersResponse {
}
export interface ListTopicsRequest {
}
export interface ListTopicsResponse {
}
export interface ListUserGroupsRequest {
}
export interface ListUserGroupsResponse {
}
export interface ListUsersRequest {
}
export interface ListUsersResponse {
}
export interface ListVPCConnectionsRequest {
}
export interface ListVPCConnectionsResponse {
}
export interface LoadingAnimation {
}
export interface LocalNavigationConfiguration {
}
export interface LogicalTable {
}
export type LogicalTableAlias = string;

export type LogicalTableId = string;

export type LogicalTableMap = Record<string, unknown>;
export interface LogicalTableSource {
}
export interface Logo {
}
export interface LogoConfiguration {
}
export interface LogoSet {
}
export interface LogoSetConfiguration {
}
export type Long = number;

export interface LongFormatText {
}
export type Longitude = number;

export type LongPlainText = string;

export type LongRichText = string;

export interface LookbackWindow {
}
export type LookbackWindowSizeUnit = never;
export interface ManifestFileLocation {
}
export interface MappedDataSetParameter {
}
export type MappedDataSetParameters = Array<unknown>;
export type MapZoomMode = never;
export interface MarginStyle {
}
export interface MariaDbParameters {
}
export interface MaximumLabelType {
}
export interface MaximumMinimumComputation {
}
export type MaximumMinimumComputationType = never;
export type MaxResults = number;

export type MaxTopicsToConsider = number;

export interface MeasureField {
}
export type MeasureFieldList = Array<unknown>;
export interface MemberIdArnPair {
}
export type MemberType = never;
export interface MetricComparisonComputation {
}
export interface MinimumLabelType {
}
export interface MissingDataConfiguration {
}
export type MissingDataConfigurationList = Array<unknown>;
export type MissingDataTreatmentOption = never;
export interface MySqlParameters {
}
export type Name = string;

export type NamedEntityAggType = never;
export interface NamedEntityDefinition {
}
export interface NamedEntityDefinitionMetric {
}
export type NamedEntityDefinitions = Array<unknown>;
export interface NamedEntityRef {
}
export type NamedFilterAggType = never;
export type NamedFilterType = never;
export type Namespace = string;

export interface NamespaceError {
}
export type NamespaceErrorType = never;
export interface NamespaceInfoV2 {
}
export type Namespaces = Array<unknown>;
export type NamespaceStatus = never;
export type NarrativeString = string;

export interface NavbarStyle {
}
export interface NegativeFormat {
}
export interface NegativeValueConfiguration {
}
export type NegativeValueDisplayMode = never;
export interface NestedFilter {
}
export interface NetworkInterface {
}
export type NetworkInterfaceId = string;

export type NetworkInterfaceList = Array<unknown>;
export type NetworkInterfaceStatus = never;
export interface NewDefaultValues {
}
export type NonEmptyString = string;

export type NonRepeatingVisualsList = Array<unknown>;
export type NullableBoolean = boolean;

export type NullFilterOption = never;
export type NullString = string;

export interface NullValueFormatConfiguration {
}
export interface NumberDisplayFormatConfiguration {
}
export interface NumberFormatConfiguration {
}
export type NumberScale = never;
export interface NumericalAggregationFunction {
}
export interface NumericalDimensionField {
}
export interface NumericalMeasureField {
}
export interface NumericAxisOptions {
}
export interface NumericEqualityDrillDownFilter {
}
export interface NumericEqualityFilter {
}
export type NumericEqualityMatchOperator = never;
export type NumericFilterSelectAllOptions = never;
export interface NumericFormatConfiguration {
}
export interface NumericRangeFilter {
}
export interface NumericRangeFilterValue {
}
export interface NumericSeparatorConfiguration {
}
export type NumericSeparatorSymbol = never;
export interface OAuthParameters {
}
export type OAuthScope = string;

export type OnClause = string;

export type Opacity = number;

export type OperandList = Array<unknown>;
export type OptionalPort = number;

export interface OracleParameters {
}
export type OtherCategories = never;
export interface OutputColumn {
}
export type OutputColumnList = Array<unknown>;
export interface OverrideDatasetParameterOperation {
}
export type PageNumber = number;

export interface PaginationConfiguration {
}
export interface Palette {
}
export type PanelBorderStyle = never;
export interface PanelConfiguration {
}
export interface PanelTitleOptions {
}
export type PaperOrientation = never;
export type PaperSize = never;
export interface ParameterControl {
}
export type ParameterControlList = Array<unknown>;
export interface ParameterDateTimePickerControl {
}
export interface ParameterDeclaration {
}
export type ParameterDeclarationList = Array<unknown>;
export interface ParameterDropDownControl {
}
export interface ParameterListControl {
}
export type ParameterName = string;

export interface Parameters {
}
export type ParameterSelectableValueList = Array<unknown>;
export interface ParameterSelectableValues {
}
export interface ParameterSliderControl {
}
export interface ParameterTextAreaControl {
}
export interface ParameterTextFieldControl {
}
export type ParameterValueType = never;
export type Password = string;

export type Path = Array<unknown>;
export interface PercentageDisplayFormatConfiguration {
}
export interface PercentileAggregation {
}
export type PercentileValue = number;

export type PercentNumber = number;

export interface PercentVisibleRange {
}
export interface PerformanceConfiguration {
}
export interface PeriodOverPeriodComputation {
}
export type PeriodsBackward = number;

export type PeriodsForward = number;

export interface PeriodToDateComputation {
}
export type PersonalizationMode = never;
export type PhysicalTable = never;
export type PhysicalTableId = string;

export type PhysicalTableMap = Record<string, unknown>;
export interface PieChartAggregatedFieldWells {
}
export interface PieChartConfiguration {
}
export interface PieChartFieldWells {
}
export interface PieChartSortConfiguration {
}
export interface PieChartVisual {
}
export interface PivotFieldSortOptions {
}
export type PivotFieldSortOptionsList = Array<unknown>;
export type PivotMeasureFieldList = Array<unknown>;
export interface PivotTableAggregatedFieldWells {
}
export interface PivotTableCellConditionalFormatting {
}
export interface PivotTableConditionalFormatting {
}
export interface PivotTableConditionalFormattingOption {
}
export type PivotTableConditionalFormattingOptionList = Array<unknown>;
export interface PivotTableConditionalFormattingScope {
}
export type PivotTableConditionalFormattingScopeList = Array<unknown>;
export type PivotTableConditionalFormattingScopeRole = never;
export interface PivotTableConfiguration {
}
export interface PivotTableDataPathOption {
}
export type PivotTableDataPathOptionList = Array<unknown>;
export type PivotTableDataPathType = never;
export type PivotTableDimensionList = Array<unknown>;
export type PivotTableFieldCollapseState = never;
export interface PivotTableFieldCollapseStateOption {
}
export type PivotTableFieldCollapseStateOptionList = Array<unknown>;
export interface PivotTableFieldCollapseStateTarget {
}
export interface PivotTableFieldOption {
}
export type PivotTableFieldOptionList = Array<unknown>;
export interface PivotTableFieldOptions {
}
export interface PivotTableFieldSubtotalOptions {
}
export type PivotTableFieldSubtotalOptionsList = Array<unknown>;
export interface PivotTableFieldWells {
}
export type PivotTableMetricPlacement = never;
export interface PivotTableOptions {
}
export interface PivotTablePaginatedReportOptions {
}
export interface PivotTableRowsLabelOptions {
}
export type PivotTableRowsLabelText = string;

export type PivotTableRowsLayout = never;
export interface PivotTableSortBy {
}
export interface PivotTableSortConfiguration {
}
export type PivotTableSubtotalLevel = never;
export interface PivotTableTotalOptions {
}
export interface PivotTableVisual {
}
export interface PivotTotalOptions {
}
export type PixelLength = string;

export interface PluginVisual {
}
export type PluginVisualAxisName = never;
export interface PluginVisualConfiguration {
}
export interface PluginVisualFieldWell {
}
export type PluginVisualFieldWells = Array<unknown>;
export interface PluginVisualItemsLimitConfiguration {
}
export interface PluginVisualOptions {
}
export type PluginVisualPropertiesList = Array<unknown>;
export interface PluginVisualProperty {
}
export interface PluginVisualSortConfiguration {
}
export interface PluginVisualTableQuerySort {
}
export type Port = number;

export type PositiveInteger = number;

export type PositiveLong = number;

export interface PostgreSqlParameters {
}
export interface PreconditionNotMetException {
}
export interface PredefinedHierarchy {
}
export type PredefinedHierarchyColumnList = Array<unknown>;
export type PredictionInterval = number;

export interface PredictQAResultsRequest {
}
export interface PredictQAResultsResponse {
}
export type Prefix = string;

export interface PrestoParameters {
}
export type PrimaryValueDisplayType = never;
export type Principal = string;

export type PrincipalList = Array<unknown>;
export interface ProgressBarOptions {
}
export type ProjectedColumnList = Array<unknown>;
export type ProjectId = string;

export interface ProjectOperation {
}
export type PropertyRole = never;
export type PropertyUsage = never;
export type PurchaseMode = never;
export interface PutDataSetRefreshPropertiesRequest {
}
export interface PutDataSetRefreshPropertiesResponse {
}
export type QAQueryText = string;

export interface QAResult {
}
export type QAResults = Array<unknown>;
export type QAResultType = never;
export type QAUrl = string;

export type QBusinessInsightsStatus = never;
export type QSearchStatus = never;
export type Query = string;

export type QueryExecutionMode = never;
export interface QueryExecutionOptions {
}
export type QuestionId = string;

export interface QueueInfo {
}
export interface QuickSightUserNotFoundException {
}
export interface RadarChartAggregatedFieldWells {
}
export interface RadarChartAreaStyleSettings {
}
export type RadarChartAxesRangeScale = never;
export type RadarChartCategoryFieldList = Array<unknown>;
export type RadarChartColorFieldList = Array<unknown>;
export interface RadarChartConfiguration {
}
export interface RadarChartFieldWells {
}
export interface RadarChartSeriesSettings {
}
export type RadarChartShape = never;
export interface RadarChartSortConfiguration {
}
export type RadarChartStartAngle = number;

export type RadarChartValuesFieldList = Array<unknown>;
export interface RadarChartVisual {
}
export interface RangeConstant {
}
export interface RangeEndsLabelType {
}
export interface RdsParameters {
}
export interface RecentSnapshotsConfigurations {
}
export type RecoveryWindowInDays = number;

export interface RedshiftIAMParameters {
}
export interface RedshiftParameters {
}
export interface ReferenceLine {
}
export interface ReferenceLineCustomLabelConfiguration {
}
export interface ReferenceLineDataConfiguration {
}
export interface ReferenceLineDynamicDataConfiguration {
}
export interface ReferenceLineLabelConfiguration {
}
export type ReferenceLineLabelHorizontalPosition = never;
export type ReferenceLineLabelVerticalPosition = never;
export type ReferenceLineList = Array<unknown>;
export type ReferenceLinePatternType = never;
export type ReferenceLineSeriesType = never;
export interface ReferenceLineStaticDataConfiguration {
}
export interface ReferenceLineStyleConfiguration {
}
export interface ReferenceLineValueLabelConfiguration {
}
export type ReferenceLineValueLabelRelativePosition = never;
export interface RefreshConfiguration {
}
export type RefreshFailureAlertStatus = never;
export interface RefreshFailureConfiguration {
}
export interface RefreshFailureEmailAlert {
}
export interface RefreshFrequency {
}
export type RefreshInterval = never;
export interface RefreshSchedule {
}
export type RefreshSchedules = Array<unknown>;
export interface RegisteredCustomerManagedKey {
}
export interface RegisteredUserConsoleFeatureConfigurations {
}
export interface RegisteredUserDashboardEmbeddingConfiguration {
}
export interface RegisteredUserDashboardFeatureConfigurations {
}
export interface RegisteredUserDashboardVisualEmbeddingConfiguration {
}
export interface RegisteredUserEmbeddingExperienceConfiguration {
}
export interface RegisteredUserGenerativeQnAEmbeddingConfiguration {
}
export interface RegisteredUserQSearchBarEmbeddingConfiguration {
}
export interface RegisteredUserQuickSightConsoleEmbeddingConfiguration {
}
export interface RegisterUserRequest {
}
export interface RegisterUserResponse {
}
export interface RelationalTable {
}
export type RelationalTableCatalog = string;

export type RelationalTableName = string;

export type RelationalTableSchema = string;

export interface RelativeDatesFilter {
}
export interface RelativeDateTimeControlDisplayOptions {
}
export type RelativeDateType = never;
export type RelativeFontSize = never;
export interface RenameColumnOperation {
}
export type ResizeOption = never;
export interface ResourceExistsException {
}
export type ResourceId = string;

export type ResourceName = string;

export interface ResourceNotFoundException {
}
export interface ResourcePermission {
}
export type ResourcePermissionList = Array<unknown>;
export type ResourceStatus = never;
export interface ResourceUnavailableException {
}
export interface RestoreAnalysisRequest {
}
export interface RestoreAnalysisResponse {
}
export type RestrictiveResourceId = string;

export type ReviewedAnswerErrorCode = never;
export type Role = never;
export type RoleArn = string;

export type RoleName = string;

export type RoleSessionName = string;

export interface RollingDateConfiguration {
}
export type RowAlternateColorList = Array<unknown>;
export interface RowAlternateColorOptions {
}
export interface RowInfo {
}
export interface RowLevelPermissionDataSet {
}
export type RowLevelPermissionFormatVersion = never;
export type RowLevelPermissionPolicy = never;
export interface RowLevelPermissionTagConfiguration {
}
export type RowLevelPermissionTagDelimiter = string;

export interface RowLevelPermissionTagRule {
}
export type RowLevelPermissionTagRuleConfiguration = Array<unknown>;
export type RowLevelPermissionTagRuleConfigurationList = Array<unknown>;
export type RowLevelPermissionTagRuleList = Array<unknown>;
export type RowSortList = Array<unknown>;
export type S3Bucket = string;

export interface S3BucketConfiguration {
}
export type S3Key = string;

export interface S3Parameters {
}
export interface S3Source {
}
export type S3Uri = string;

export interface SameSheetTargetVisualConfiguration {
}
export interface SankeyDiagramAggregatedFieldWells {
}
export interface SankeyDiagramChartConfiguration {
}
export interface SankeyDiagramFieldWells {
}
export interface SankeyDiagramSortConfiguration {
}
export interface SankeyDiagramVisual {
}
export interface ScatterPlotCategoricallyAggregatedFieldWells {
}
export interface ScatterPlotConfiguration {
}
export interface ScatterPlotFieldWells {
}
export interface ScatterPlotSortConfiguration {
}
export interface ScatterPlotUnaggregatedFieldWells {
}
export interface ScatterPlotVisual {
}
export interface ScheduleRefreshOnEntity {
}
export interface SchedulesConfigurations {
}
export interface ScrollBarOptions {
}
export interface SearchAnalysesRequest {
}
export interface SearchAnalysesResponse {
}
export interface SearchDashboardsRequest {
}
export interface SearchDashboardsResponse {
}
export interface SearchDataSetsRequest {
}
export interface SearchDataSetsResponse {
}
export interface SearchDataSourcesRequest {
}
export interface SearchDataSourcesResponse {
}
export interface SearchFoldersRequest {
}
export interface SearchFoldersResponse {
}
export interface SearchGroupsRequest {
}
export interface SearchGroupsResponse {
}
export interface SearchTopicsRequest {
}
export interface SearchTopicsResponse {
}
export type Seasonality = number;

export interface SecondaryValueOptions {
}
export type SecretArn = string;

export interface SectionAfterPageBreak {
}
export interface SectionBasedLayoutCanvasSizeOptions {
}
export interface SectionBasedLayoutConfiguration {
}
export interface SectionBasedLayoutPaperCanvasSizeOptions {
}
export interface SectionLayoutConfiguration {
}
export interface SectionPageBreakConfiguration {
}
export type SectionPageBreakStatus = never;
export interface SectionStyle {
}
export type SecurityGroupId = string;

export type SecurityGroupIdList = Array<unknown>;
export type SelectAllValueOptions = never;
export type SelectedFieldList = Array<unknown>;
export type SelectedFieldOptions = never;
export interface SelectedSheetsFilterScopeConfiguration {
}
export type SelectedTooltipType = never;
export interface SemanticEntityType {
}
export interface SemanticType {
}
export type SensitiveDouble = number;

export type SensitiveDoubleList = Array<unknown>;
export type SensitiveDoubleObject = number;

export type SensitiveLong = number;

export type SensitiveLongList = Array<unknown>;
export type SensitiveLongObject = number;

export type SensitiveS3Uri = string;

export type SensitiveString = string;

export type SensitiveStringList = Array<unknown>;
export type SensitiveStringObject = string;

export type SensitiveTimestamp = Date | string;

export type SensitiveTimestampList = Array<unknown>;
export interface SeriesItem {
}
export type SeriesItemList = Array<unknown>;
export interface ServiceNowParameters {
}
export type ServiceType = never;
export type SessionLifetimeInMinutes = number;

export interface SessionLifetimeInMinutesInvalidException {
}
export interface SessionTag {
}
export type SessionTagKey = string;

export type SessionTagKeyList = Array<unknown>;
export type SessionTagList = Array<unknown>;
export type SessionTagValue = string;

export interface SetParameterValueConfiguration {
}
export type SetParameterValueConfigurationList = Array<unknown>;
export interface ShapeConditionalFormat {
}
export interface SharedViewConfigurations {
}
export type SharingModel = never;
export interface Sheet {
}
export type SheetContentType = never;
export type SheetControlDateTimePickerType = never;
export interface SheetControlInfoIconLabelOptions {
}
export type SheetControlInfoIconText = string;

export interface SheetControlLayout {
}
export interface SheetControlLayoutConfiguration {
}
export type SheetControlLayoutList = Array<unknown>;
export type SheetControlListType = never;
export type SheetControlSliderType = never;
export interface SheetControlsOption {
}
export type SheetControlTitle = string;

export interface SheetDefinition {
}
export type SheetDefinitionList = Array<unknown>;
export type SheetDescription = string;

export interface SheetElementConfigurationOverrides {
}
export interface SheetElementRenderingRule {
}
export type SheetElementRenderingRuleList = Array<unknown>;
export interface SheetImage {
}
export type SheetImageList = Array<unknown>;
export interface SheetImageScalingConfiguration {
}
export type SheetImageScalingType = never;
export interface SheetImageSource {
}
export interface SheetImageStaticFileSource {
}
export interface SheetImageTooltipConfiguration {
}
export interface SheetImageTooltipText {
}
export interface SheetLayoutElementMaximizationOption {
}
export type SheetList = Array<unknown>;
export type SheetName = string;

export interface SheetStyle {
}
export interface SheetTextBox {
}
export type SheetTextBoxContent = string;

export type SheetTextBoxList = Array<unknown>;
export type SheetTitle = string;

export interface SheetVisualScopingConfiguration {
}
export type SheetVisualScopingConfigurations = Array<unknown>;
export interface ShortFormatText {
}
export type ShortPlainText = string;

export type ShortRestrictiveResourceId = string;

export type ShortRichText = string;

export interface SignupResponse {
}
export type SimpleAttributeAggregationFunction = never;
export interface SimpleClusterMarker {
}
export type SimpleNumericalAggregationFunction = never;
export type SimpleTotalAggregationFunction = never;
export interface SingleAxisOptions {
}
export type SingleYAxisOption = never;
export type SiteBaseUrl = string;

export interface SliderControlDisplayOptions {
}
export interface Slot {
}
export type Slots = Array<unknown>;
export type SmallMultiplesAxisPlacement = never;
export interface SmallMultiplesAxisProperties {
}
export type SmallMultiplesAxisScale = never;
export type SmallMultiplesDimensionFieldList = Array<unknown>;
export interface SmallMultiplesOptions {
}
export interface SnapshotAnonymousUser {
}
export type SnapshotAnonymousUserList = Array<unknown>;
export interface SnapshotAnonymousUserRedacted {
}
export type SnapshotAnonymousUserRedactedList = Array<unknown>;
export interface SnapshotConfiguration {
}
export interface SnapshotDestinationConfiguration {
}
export interface SnapshotFile {
}
export type SnapshotFileFormatType = never;
export interface SnapshotFileGroup {
}
export type SnapshotFileGroupList = Array<unknown>;
export type SnapshotFileList = Array<unknown>;
export interface SnapshotFileSheetSelection {
}
export type SnapshotFileSheetSelectionList = Array<unknown>;
export type SnapshotFileSheetSelectionScope = never;
export type SnapshotFileSheetSelectionVisualIdList = Array<unknown>;
export interface SnapshotJobErrorInfo {
}
export interface SnapshotJobResult {
}
export interface SnapshotJobResultErrorInfo {
}
export type SnapshotJobResultErrorInfoList = Array<unknown>;
export interface SnapshotJobResultFileGroup {
}
export type SnapshotJobResultFileGroupList = Array<unknown>;
export interface SnapshotJobS3Result {
}
export type SnapshotJobS3ResultList = Array<unknown>;
export type SnapshotJobStatus = never;
export interface SnapshotS3DestinationConfiguration {
}
export type SnapshotS3DestinationConfigurationList = Array<unknown>;
export interface SnapshotUserConfiguration {
}
export interface SnapshotUserConfigurationRedacted {
}
export interface SnowflakeParameters {
}
export type SortDirection = never;
export interface Spacing {
}
export interface SparkParameters {
}
export interface SpatialStaticFile {
}
export type SpecialValue = never;
export type SqlEndpointPath = string;

export type SqlQuery = string;

export interface SqlServerParameters {
}
export interface SslProperties {
}
export interface StarburstParameters {
}
export type StarburstProductType = never;
export interface StartAssetBundleExportJobRequest {
}
export interface StartAssetBundleExportJobResponse {
}
export interface StartAssetBundleImportJobRequest {
}
export interface StartAssetBundleImportJobResponse {
}
export interface StartDashboardSnapshotJobRequest {
}
export interface StartDashboardSnapshotJobResponse {
}
export interface StartDashboardSnapshotJobScheduleRequest {
}
export interface StartDashboardSnapshotJobScheduleResponse {
}
export interface StatePersistenceConfigurations {
}
export interface StaticFile {
}
export type StaticFileList = Array<unknown>;
export interface StaticFileS3SourceOptions {
}
export interface StaticFileSource {
}
export interface StaticFileUrlSourceOptions {
}
export type Status = never;
export type StatusCode = number;

export interface StringDatasetParameter {
}
export type StringDatasetParameterDefaultValue = string;

export interface StringDatasetParameterDefaultValues {
}
export type StringDatasetParameterValueList = Array<unknown>;
export type StringDefaultValueList = Array<unknown>;
export interface StringDefaultValues {
}
export interface StringFormatConfiguration {
}
export type StringList = Array<unknown>;
export interface StringParameter {
}
export interface StringParameterDeclaration {
}
export type StringParameterList = Array<unknown>;
export interface StringValueWhenUnsetConfiguration {
}
export type StyledCellType = never;
export type SubnetId = string;

export type SubnetIdList = Array<unknown>;
export interface SubtotalOptions {
}
export interface SucceededTopicReviewedAnswer {
}
export type SucceededTopicReviewedAnswers = Array<unknown>;
export type SuccessfulKeyRegistrationEntries = Array<unknown>;
export interface SuccessfulKeyRegistrationEntry {
}
export type Suffix = string;

export type Synonyms = Array<unknown>;
export interface TableAggregatedFieldWells {
}
export interface TableBorderOptions {
}
export type TableBorderStyle = never;
export type TableBorderThickness = number;

export interface TableCellConditionalFormatting {
}
export type TableCellImageScalingConfiguration = never;
export interface TableCellImageSizingConfiguration {
}
export interface TableCellStyle {
}
export interface TableConditionalFormatting {
}
export interface TableConditionalFormattingOption {
}
export type TableConditionalFormattingOptionList = Array<unknown>;
export interface TableConfiguration {
}
export interface TableFieldCustomIconContent {
}
export interface TableFieldCustomTextContent {
}
export type TableFieldHeight = number;

export type TableFieldIconSetType = never;
export interface TableFieldImageConfiguration {
}
export interface TableFieldLinkConfiguration {
}
export interface TableFieldLinkContentConfiguration {
}
export interface TableFieldOption {
}
export type TableFieldOptionList = Array<unknown>;
export interface TableFieldOptions {
}
export type TableFieldOrderList = Array<unknown>;
export interface TableFieldURLConfiguration {
}
export interface TableFieldWells {
}
export interface TableInlineVisualization {
}
export type TableInlineVisualizationList = Array<unknown>;
export interface TableOptions {
}
export type TableOrientation = never;
export interface TablePaginatedReportOptions {
}
export interface TablePinnedFieldOptions {
}
export interface TableRowConditionalFormatting {
}
export interface TableSideBorderOptions {
}
export interface TableSortConfiguration {
}
export interface TableStyleTarget {
}
export type TableStyleTargetList = Array<unknown>;
export type TableTotalsPlacement = never;
export type TableTotalsScrollStatus = never;
export type TableUnaggregatedFieldList = Array<unknown>;
export interface TableUnaggregatedFieldWells {
}
export interface TableVisual {
}
export interface Tag {
}
export interface TagColumnOperation {
}
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagList = Array<unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValue = string;

export type TargetVisualList = Array<unknown>;
export type TargetVisualOptions = never;
export interface Template {
}
export interface TemplateAlias {
}
export type TemplateAliasList = Array<unknown>;
export interface TemplateError {
}
export type TemplateErrorList = Array<unknown>;
export type TemplateErrorType = never;
export type TemplateName = string;

export interface TemplateSourceAnalysis {
}
export interface TemplateSourceEntity {
}
export interface TemplateSourceTemplate {
}
export interface TemplateSummary {
}
export type TemplateSummaryList = Array<unknown>;
export interface TemplateVersion {
}
export interface TemplateVersionDefinition {
}
export interface TemplateVersionSummary {
}
export type TemplateVersionSummaryList = Array<unknown>;
export interface TeradataParameters {
}
export type TextAreaControlDelimiter = string;

export interface TextAreaControlDisplayOptions {
}
export interface TextBoxInteractionOptions {
}
export interface TextBoxMenuOption {
}
export interface TextConditionalFormat {
}
export interface TextControlPlaceholderOptions {
}
export interface TextFieldControlDisplayOptions {
}
export type TextQualifier = never;
export type TextWrap = never;
export interface Theme {
}
export interface ThemeAlias {
}
export type ThemeAliasList = Array<unknown>;
export interface ThemeConfiguration {
}
export interface ThemeError {
}
export type ThemeErrorList = Array<unknown>;
export type ThemeErrorType = never;
export type ThemeName = string;

export interface ThemeSummary {
}
export type ThemeSummaryList = Array<unknown>;
export type ThemeType = never;
export interface ThemeVersion {
}
export interface ThemeVersionSummary {
}
export type ThemeVersionSummaryList = Array<unknown>;
export interface ThousandSeparatorOptions {
}
export interface ThresholdAlertsConfigurations {
}
export interface ThrottlingException {
}
export interface TileLayoutStyle {
}
export interface TileStyle {
}
export interface TimeBasedForecastProperties {
}
export interface TimeEqualityFilter {
}
export type TimeGranularity = never;
export interface TimeRangeDrillDownFilter {
}
export interface TimeRangeFilter {
}
export interface TimeRangeFilterValue {
}
export type Timestamp = Date | string;

export type TokenProviderUrl = string;

export interface TooltipItem {
}
export type TooltipItemList = Array<unknown>;
export interface TooltipOptions {
}
export type TooltipTarget = never;
export type TooltipTitleType = never;
export type TopBottomComputationType = never;
export interface TopBottomFilter {
}
export interface TopBottomMoversComputation {
}
export type TopBottomMoversComputationMoverSize = number;

export interface TopBottomRankedComputation {
}
export type TopBottomRankedComputationResultSize = number;

export type TopBottomSortOrder = never;
export interface TopicCalculatedField {
}
export type TopicCalculatedFields = Array<unknown>;
export interface TopicCategoryFilter {
}
export interface TopicCategoryFilterConstant {
}
export interface TopicColumn {
}
export type TopicColumns = Array<unknown>;
export interface TopicConfigOptions {
}
export interface TopicConstantValue {
}
export interface TopicDateRangeFilter {
}
export interface TopicDetails {
}
export interface TopicFilter {
}
export type TopicFilterAttribute = never;
export type TopicFilterOperator = never;
export type TopicFilters = Array<unknown>;
export type TopicId = string;

export interface TopicIR {
}
export interface TopicIRComparisonMethod {
}
export interface TopicIRContributionAnalysis {
}
export type TopicIRFilterEntry = Array<unknown>;
export type TopicIRFilterFunction = never;
export type TopicIRFilterList = Array<unknown>;
export interface TopicIRFilterOption {
}
export type TopicIRFilterType = never;
export interface TopicIRGroupBy {
}
export type TopicIRGroupByList = Array<unknown>;
export interface TopicIRMetric {
}
export type TopicIRMetricList = Array<unknown>;
export type TopicNamedEntities = Array<unknown>;
export interface TopicNamedEntity {
}
export interface TopicNumericEqualityFilter {
}
export interface TopicNumericRangeFilter {
}
export type TopicNumericSeparatorSymbol = never;
export interface TopicRangeFilterConstant {
}
export interface TopicRefreshDetails {
}
export interface TopicRefreshSchedule {
}
export type TopicRefreshScheduleSummaries = Array<unknown>;
export interface TopicRefreshScheduleSummary {
}
export type TopicRefreshStatus = never;
export interface TopicRelativeDateFilter {
}
export type TopicRelativeDateFilterFunction = never;
export interface TopicReviewedAnswer {
}
export type TopicReviewedAnswers = Array<unknown>;
export type TopicScheduleType = never;
export interface TopicSearchFilter {
}
export type TopicSearchFilterList = Array<unknown>;
export interface TopicSingularFilterConstant {
}
export interface TopicSortClause {
}
export type TopicSortDirection = never;
export type TopicSummaries = Array<unknown>;
export interface TopicSummary {
}
export interface TopicTemplate {
}
export type TopicTimeGranularity = never;
export type TopicUserExperienceVersion = never;
export interface TopicVisual {
}
export type TopicVisuals = Array<unknown>;
export interface TotalAggregationComputation {
}
export interface TotalAggregationFunction {
}
export interface TotalAggregationOption {
}
export type TotalAggregationOptionList = Array<unknown>;
export interface TotalOptions {
}
export type TransformOperation = never;
export type TransformOperationList = Array<unknown>;
export type TransposedColumnIndex = number;

export type TransposedColumnType = never;
export interface TransposedTableOption {
}
export type TransposedTableOptionList = Array<unknown>;
export interface TreeMapAggregatedFieldWells {
}
export interface TreeMapConfiguration {
}
export type TreeMapDimensionFieldList = Array<unknown>;
export interface TreeMapFieldWells {
}
export type TreeMapMeasureFieldList = Array<unknown>;
export interface TreeMapSortConfiguration {
}
export interface TreeMapVisual {
}
export interface TrendArrowOptions {
}
export interface TrinoParameters {
}
export interface TwitterParameters {
}
export type TypeCastFormat = string;

export type TypeParameters = Record<string, unknown>;
export interface Typography {
}
export interface UIColorPalette {
}
export interface UnaggregatedField {
}
export type UnaggregatedFieldList = Array<unknown>;
export type UndefinedSpecifiedValueType = never;
export type UnicodeIcon = string;

export interface UniqueKey {
}
export type UniqueKeyColumnNameList = Array<unknown>;
export type UniqueKeyList = Array<unknown>;
export interface UniqueValuesComputation {
}
export type UnlimitedPixelLength = string;

export interface UnsupportedPricingPlanException {
}
export interface UnsupportedUserEditionException {
}
export interface UntagColumnOperation {
}
export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateAccountCustomizationRequest {
}
export interface UpdateAccountCustomizationResponse {
}
export interface UpdateAccountSettingsRequest {
}
export interface UpdateAccountSettingsResponse {
}
export interface UpdateAnalysisPermissionsRequest {
}
export interface UpdateAnalysisPermissionsResponse {
}
export interface UpdateAnalysisRequest {
}
export interface UpdateAnalysisResponse {
}
export interface UpdateApplicationWithTokenExchangeGrantRequest {
}
export interface UpdateApplicationWithTokenExchangeGrantResponse {
}
export interface UpdateBrandAssignmentRequest {
}
export interface UpdateBrandAssignmentResponse {
}
export interface UpdateBrandPublishedVersionRequest {
}
export interface UpdateBrandPublishedVersionResponse {
}
export interface UpdateBrandRequest {
}
export interface UpdateBrandResponse {
}
export interface UpdateCustomPermissionsRequest {
}
export interface UpdateCustomPermissionsResponse {
}
export interface UpdateDashboardLinksRequest {
}
export interface UpdateDashboardLinksResponse {
}
export interface UpdateDashboardPermissionsRequest {
}
export interface UpdateDashboardPermissionsResponse {
}
export interface UpdateDashboardPublishedVersionRequest {
}
export interface UpdateDashboardPublishedVersionResponse {
}
export interface UpdateDashboardRequest {
}
export interface UpdateDashboardResponse {
}
export interface UpdateDashboardsQAConfigurationRequest {
}
export interface UpdateDashboardsQAConfigurationResponse {
}
export interface UpdateDataSetPermissionsRequest {
}
export interface UpdateDataSetPermissionsResponse {
}
export interface UpdateDataSetRequest {
}
export interface UpdateDataSetResponse {
}
export interface UpdateDataSourcePermissionsRequest {
}
export interface UpdateDataSourcePermissionsResponse {
}
export interface UpdateDataSourceRequest {
}
export interface UpdateDataSourceResponse {
}
export interface UpdateDefaultQBusinessApplicationRequest {
}
export interface UpdateDefaultQBusinessApplicationResponse {
}
export interface UpdateFolderPermissionsRequest {
}
export interface UpdateFolderPermissionsResponse {
}
export interface UpdateFolderRequest {
}
export interface UpdateFolderResponse {
}
export interface UpdateGroupRequest {
}
export interface UpdateGroupResponse {
}
export interface UpdateIAMPolicyAssignmentRequest {
}
export interface UpdateIAMPolicyAssignmentResponse {
}
export interface UpdateIdentityPropagationConfigRequest {
}
export interface UpdateIdentityPropagationConfigResponse {
}
export interface UpdateIpRestrictionRequest {
}
export interface UpdateIpRestrictionResponse {
}
export interface UpdateKeyRegistrationRequest {
}
export interface UpdateKeyRegistrationResponse {
}
export type UpdateLinkPermissionList = Array<unknown>;
export interface UpdatePublicSharingSettingsRequest {
}
export interface UpdatePublicSharingSettingsResponse {
}
export interface UpdateQPersonalizationConfigurationRequest {
}
export interface UpdateQPersonalizationConfigurationResponse {
}
export interface UpdateQuickSightQSearchConfigurationRequest {
}
export interface UpdateQuickSightQSearchConfigurationResponse {
}
export interface UpdateRefreshScheduleRequest {
}
export interface UpdateRefreshScheduleResponse {
}
export type UpdateResourcePermissionList = Array<unknown>;
export interface UpdateRoleCustomPermissionRequest {
}
export interface UpdateRoleCustomPermissionResponse {
}
export interface UpdateSPICECapacityConfigurationRequest {
}
export interface UpdateSPICECapacityConfigurationResponse {
}
export interface UpdateTemplateAliasRequest {
}
export interface UpdateTemplateAliasResponse {
}
export interface UpdateTemplatePermissionsRequest {
}
export interface UpdateTemplatePermissionsResponse {
}
export interface UpdateTemplateRequest {
}
export interface UpdateTemplateResponse {
}
export interface UpdateThemeAliasRequest {
}
export interface UpdateThemeAliasResponse {
}
export interface UpdateThemePermissionsRequest {
}
export interface UpdateThemePermissionsResponse {
}
export interface UpdateThemeRequest {
}
export interface UpdateThemeResponse {
}
export interface UpdateTopicPermissionsRequest {
}
export interface UpdateTopicPermissionsResponse {
}
export interface UpdateTopicRefreshScheduleRequest {
}
export interface UpdateTopicRefreshScheduleResponse {
}
export interface UpdateTopicRequest {
}
export interface UpdateTopicResponse {
}
export interface UpdateUserCustomPermissionRequest {
}
export interface UpdateUserCustomPermissionResponse {
}
export interface UpdateUserRequest {
}
export interface UpdateUserResponse {
}
export interface UpdateVPCConnectionRequest {
}
export interface UpdateVPCConnectionResponse {
}
export interface UploadSettings {
}
export type URLOperationTemplate = string;

export type URLTargetConfiguration = never;
export interface User {
}
export type UserList = Array<unknown>;
export type UserName = string;

export type UserRole = never;
export interface ValidationStrategy {
}
export type ValidationStrategyMode = never;
export type ValueWhenUnsetOption = never;
export type VersionDescription = string;

export type VersionNumber = number;

export type VerticalTextAlignment = never;
export type Visibility = never;
export type VisiblePanelColumns = number;

export type VisiblePanelRows = number;

export interface VisibleRangeOptions {
}
export interface Visual {
}
export interface VisualAxisSortOption {
}
export interface VisualCustomAction {
}
export interface VisualCustomActionDefaults {
}
export type VisualCustomActionList = Array<unknown>;
export type VisualCustomActionName = string;

export interface VisualCustomActionOperation {
}
export type VisualCustomActionOperationList = Array<unknown>;
export type VisualCustomActionTrigger = never;
export interface VisualHighlightOperation {
}
export type VisualHighlightTrigger = never;
export interface VisualInteractionOptions {
}
export type VisualList = Array<unknown>;
export interface VisualMenuOption {
}
export interface VisualOptions {
}
export interface VisualPalette {
}
export type VisualRole = never;
export type VisualSubtitle = string;

export interface VisualSubtitleLabelOptions {
}
export type VisualTitle = string;

export interface VisualTitleLabelOptions {
}
export interface VPCConnection {
}
export type VPCConnectionAvailabilityStatus = never;
export interface VpcConnectionProperties {
}
export type VPCConnectionResourceIdRestricted = string;

export type VPCConnectionResourceIdUnrestricted = string;

export type VPCConnectionResourceStatus = never;
export interface VPCConnectionSummary {
}
export type VPCConnectionSummaryList = Array<unknown>;
export type VpcEndpointId = string;

export type VpcEndpointIdRestrictionRuleDescription = string;

export type VpcEndpointIdRestrictionRuleMap = Record<string, unknown>;
export type VpcId = string;

export type VpcIdRestrictionRuleDescription = string;

export type VpcIdRestrictionRuleMap = Record<string, unknown>;
export type Warehouse = string;

export interface WaterfallChartAggregatedFieldWells {
}
export interface WaterfallChartColorConfiguration {
}
export interface WaterfallChartConfiguration {
}
export interface WaterfallChartFieldWells {
}
export interface WaterfallChartGroupColorConfiguration {
}
export interface WaterfallChartOptions {
}
export interface WaterfallChartSortConfiguration {
}
export interface WaterfallVisual {
}
export interface WhatIfPointScenario {
}
export interface WhatIfRangeScenario {
}
export type WidgetStatus = never;
export interface WordCloudAggregatedFieldWells {
}
export interface WordCloudChartConfiguration {
}
export type WordCloudCloudLayout = never;
export type WordCloudDimensionFieldList = Array<unknown>;
export interface WordCloudFieldWells {
}
export type WordCloudMaximumStringLength = number;

export type WordCloudMeasureFieldList = Array<unknown>;
export interface WordCloudOptions {
}
export interface WordCloudSortConfiguration {
}
export interface WordCloudVisual {
}
export type WordCloudWordCasing = never;
export type WordCloudWordOrientation = never;
export type WordCloudWordPadding = never;
export type WordCloudWordScaling = never;
export type WorkGroup = string;

export interface YAxisOptions {
}
export declare namespace BatchCreateTopicReviewedAnswer {
  export type Input = BatchCreateTopicReviewedAnswerRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchDeleteTopicReviewedAnswer {
  export type Input = BatchDeleteTopicReviewedAnswerRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CancelIngestion {
  export type Input = CancelIngestionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateAccountCustomization {
  export type Input = CreateAccountCustomizationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateAccountSubscription {
  export type Input = CreateAccountSubscriptionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateAnalysis {
  export type Input = CreateAnalysisRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace CreateBrand {
  export type Input = CreateBrandRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateCustomPermissions {
  export type Input = CreateCustomPermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDashboard {
  export type Input = CreateDashboardRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace CreateDataSet {
  export type Input = CreateDataSetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace CreateDataSource {
  export type Input = CreateDataSourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | CustomerManagedKeyUnavailableException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateFolder {
  export type Input = CreateFolderRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace CreateFolderMembership {
  export type Input = CreateFolderMembershipRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace CreateGroup {
  export type Input = CreateGroupRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateGroupMembership {
  export type Input = CreateGroupMembershipRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateIAMPolicyAssignment {
  export type Input = CreateIAMPolicyAssignmentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConcurrentUpdatingException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateIngestion {
  export type Input = CreateIngestionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateNamespace {
  export type Input = CreateNamespaceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateRefreshSchedule {
  export type Input = CreateRefreshScheduleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateRoleMembership {
  export type Input = CreateRoleMembershipRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateTemplate {
  export type Input = CreateTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace CreateTemplateAlias {
  export type Input = CreateTemplateAliasRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace CreateTheme {
  export type Input = CreateThemeRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace CreateThemeAlias {
  export type Input = CreateThemeAliasRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace CreateTopic {
  export type Input = CreateTopicRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateTopicRefreshSchedule {
  export type Input = CreateTopicRefreshScheduleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateVPCConnection {
  export type Input = CreateVPCConnectionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DeleteAccountCustomization {
  export type Input = DeleteAccountCustomizationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteAccountSubscription {
  export type Input = DeleteAccountSubscriptionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteAnalysis {
  export type Input = DeleteAnalysisRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DeleteBrand {
  export type Input = DeleteBrandRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteBrandAssignment {
  export type Input = DeleteBrandAssignmentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteCustomPermissions {
  export type Input = DeleteCustomPermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDashboard {
  export type Input = DeleteDashboardRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DeleteDataSet {
  export type Input = DeleteDataSetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDataSetRefreshProperties {
  export type Input = DeleteDataSetRefreshPropertiesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDataSource {
  export type Input = DeleteDataSourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDefaultQBusinessApplication {
  export type Input = DeleteDefaultQBusinessApplicationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteFolder {
  export type Input = DeleteFolderRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DeleteFolderMembership {
  export type Input = DeleteFolderMembershipRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DeleteGroup {
  export type Input = DeleteGroupRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteGroupMembership {
  export type Input = DeleteGroupMembershipRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteIAMPolicyAssignment {
  export type Input = DeleteIAMPolicyAssignmentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConcurrentUpdatingException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteIdentityPropagationConfig {
  export type Input = DeleteIdentityPropagationConfigRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteNamespace {
  export type Input = DeleteNamespaceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteRefreshSchedule {
  export type Input = DeleteRefreshScheduleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteRoleCustomPermission {
  export type Input = DeleteRoleCustomPermissionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteRoleMembership {
  export type Input = DeleteRoleMembershipRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteTemplate {
  export type Input = DeleteTemplateRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DeleteTemplateAlias {
  export type Input = DeleteTemplateAliasRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DeleteTheme {
  export type Input = DeleteThemeRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DeleteThemeAlias {
  export type Input = DeleteThemeAliasRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DeleteTopic {
  export type Input = DeleteTopicRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteTopicRefreshSchedule {
  export type Input = DeleteTopicRefreshScheduleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteUser {
  export type Input = DeleteUserRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteUserByPrincipalId {
  export type Input = DeleteUserByPrincipalIdRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteUserCustomPermission {
  export type Input = DeleteUserCustomPermissionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteVPCConnection {
  export type Input = DeleteVPCConnectionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeAccountCustomization {
  export type Input = DescribeAccountCustomizationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAccountSettings {
  export type Input = DescribeAccountSettingsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAccountSubscription {
  export type Input = DescribeAccountSubscriptionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAnalysis {
  export type Input = DescribeAnalysisRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeAnalysisDefinition {
  export type Input = DescribeAnalysisDefinitionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeAnalysisPermissions {
  export type Input = DescribeAnalysisPermissionsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeAssetBundleExportJob {
  export type Input = DescribeAssetBundleExportJobRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeAssetBundleImportJob {
  export type Input = DescribeAssetBundleImportJobRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeBrand {
  export type Input = DescribeBrandRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeBrandAssignment {
  export type Input = DescribeBrandAssignmentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeBrandPublishedVersion {
  export type Input = DescribeBrandPublishedVersionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeCustomPermissions {
  export type Input = DescribeCustomPermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDashboard {
  export type Input = DescribeDashboardRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeDashboardDefinition {
  export type Input = DescribeDashboardDefinitionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeDashboardPermissions {
  export type Input = DescribeDashboardPermissionsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeDashboardSnapshotJob {
  export type Input = DescribeDashboardSnapshotJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeDashboardSnapshotJobResult {
  export type Input = DescribeDashboardSnapshotJobResultRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeDashboardsQAConfiguration {
  export type Input = DescribeDashboardsQAConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDataSet {
  export type Input = DescribeDataSetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDataSetPermissions {
  export type Input = DescribeDataSetPermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDataSetRefreshProperties {
  export type Input = DescribeDataSetRefreshPropertiesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDataSource {
  export type Input = DescribeDataSourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDataSourcePermissions {
  export type Input = DescribeDataSourcePermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDefaultQBusinessApplication {
  export type Input = DescribeDefaultQBusinessApplicationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeFolder {
  export type Input = DescribeFolderRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeFolderPermissions {
  export type Input = DescribeFolderPermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeFolderResolvedPermissions {
  export type Input = DescribeFolderResolvedPermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeGroup {
  export type Input = DescribeGroupRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeGroupMembership {
  export type Input = DescribeGroupMembershipRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeIAMPolicyAssignment {
  export type Input = DescribeIAMPolicyAssignmentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeIngestion {
  export type Input = DescribeIngestionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeIpRestriction {
  export type Input = DescribeIpRestrictionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeKeyRegistration {
  export type Input = DescribeKeyRegistrationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeNamespace {
  export type Input = DescribeNamespaceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeQPersonalizationConfiguration {
  export type Input = DescribeQPersonalizationConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeQuickSightQSearchConfiguration {
  export type Input = DescribeQuickSightQSearchConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeRefreshSchedule {
  export type Input = DescribeRefreshScheduleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeRoleCustomPermission {
  export type Input = DescribeRoleCustomPermissionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeTemplate {
  export type Input = DescribeTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeTemplateAlias {
  export type Input = DescribeTemplateAliasRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeTemplateDefinition {
  export type Input = DescribeTemplateDefinitionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeTemplatePermissions {
  export type Input = DescribeTemplatePermissionsRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeTheme {
  export type Input = DescribeThemeRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeThemeAlias {
  export type Input = DescribeThemeAliasRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeThemePermissions {
  export type Input = DescribeThemePermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeTopic {
  export type Input = DescribeTopicRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeTopicPermissions {
  export type Input = DescribeTopicPermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeTopicRefresh {
  export type Input = DescribeTopicRefreshRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeTopicRefreshSchedule {
  export type Input = DescribeTopicRefreshScheduleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeUser {
  export type Input = DescribeUserRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeVPCConnection {
  export type Input = DescribeVPCConnectionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace GenerateEmbedUrlForAnonymousUser {
  export type Input = GenerateEmbedUrlForAnonymousUserRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | SessionLifetimeInMinutesInvalidException
    | ThrottlingException
    | UnsupportedPricingPlanException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace GenerateEmbedUrlForRegisteredUser {
  export type Input = GenerateEmbedUrlForRegisteredUserRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | QuickSightUserNotFoundException
    | ResourceNotFoundException
    | SessionLifetimeInMinutesInvalidException
    | ThrottlingException
    | UnsupportedPricingPlanException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace GenerateEmbedUrlForRegisteredUserWithIdentity {
  export type Input = GenerateEmbedUrlForRegisteredUserWithIdentityRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | QuickSightUserNotFoundException
    | ResourceNotFoundException
    | SessionLifetimeInMinutesInvalidException
    | ThrottlingException
    | UnsupportedPricingPlanException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace GetDashboardEmbedUrl {
  export type Input = GetDashboardEmbedUrlRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | DomainNotWhitelistedException
    | IdentityTypeNotSupportedException
    | InternalFailureException
    | InvalidParameterValueException
    | QuickSightUserNotFoundException
    | ResourceExistsException
    | ResourceNotFoundException
    | SessionLifetimeInMinutesInvalidException
    | ThrottlingException
    | UnsupportedPricingPlanException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace GetSessionEmbedUrl {
  export type Input = GetSessionEmbedUrlRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | QuickSightUserNotFoundException
    | ResourceExistsException
    | ResourceNotFoundException
    | SessionLifetimeInMinutesInvalidException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListAnalyses {
  export type Input = ListAnalysesRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidNextTokenException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListAssetBundleExportJobs {
  export type Input = ListAssetBundleExportJobsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListAssetBundleImportJobs {
  export type Input = ListAssetBundleImportJobsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListBrands {
  export type Input = ListBrandsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListCustomPermissions {
  export type Input = ListCustomPermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDashboardVersions {
  export type Input = ListDashboardVersionsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListDashboards {
  export type Input = ListDashboardsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidNextTokenException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListDataSets {
  export type Input = ListDataSetsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDataSources {
  export type Input = ListDataSourcesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListFolderMembers {
  export type Input = ListFolderMembersRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListFolders {
  export type Input = ListFoldersRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListFoldersForResource {
  export type Input = ListFoldersForResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListGroupMemberships {
  export type Input = ListGroupMembershipsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListGroups {
  export type Input = ListGroupsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListIAMPolicyAssignments {
  export type Input = ListIAMPolicyAssignmentsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListIAMPolicyAssignmentsForUser {
  export type Input = ListIAMPolicyAssignmentsForUserRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConcurrentUpdatingException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListIdentityPropagationConfigs {
  export type Input = ListIdentityPropagationConfigsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListIngestions {
  export type Input = ListIngestionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListNamespaces {
  export type Input = ListNamespacesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListRefreshSchedules {
  export type Input = ListRefreshSchedulesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListRoleMemberships {
  export type Input = ListRoleMembershipsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTemplateAliases {
  export type Input = ListTemplateAliasesRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListTemplateVersions {
  export type Input = ListTemplateVersionsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListTemplates {
  export type Input = ListTemplatesRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListThemeAliases {
  export type Input = ListThemeAliasesRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListThemeVersions {
  export type Input = ListThemeVersionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListThemes {
  export type Input = ListThemesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListTopicRefreshSchedules {
  export type Input = ListTopicRefreshSchedulesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTopicReviewedAnswers {
  export type Input = ListTopicReviewedAnswersRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTopics {
  export type Input = ListTopicsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListUserGroups {
  export type Input = ListUserGroupsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListUsers {
  export type Input = ListUsersRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListVPCConnections {
  export type Input = ListVPCConnectionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace PredictQAResults {
  export type Input = PredictQAResultsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutDataSetRefreshProperties {
  export type Input = PutDataSetRefreshPropertiesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace RegisterUser {
  export type Input = RegisterUserRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace RestoreAnalysis {
  export type Input = RestoreAnalysisRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace SearchAnalyses {
  export type Input = SearchAnalysesRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace SearchDashboards {
  export type Input = SearchDashboardsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace SearchDataSets {
  export type Input = SearchDataSetsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchDataSources {
  export type Input = SearchDataSourcesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchFolders {
  export type Input = SearchFoldersRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace SearchGroups {
  export type Input = SearchGroupsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchTopics {
  export type Input = SearchTopicsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace StartAssetBundleExportJob {
  export type Input = StartAssetBundleExportJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace StartAssetBundleImportJob {
  export type Input = StartAssetBundleImportJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace StartDashboardSnapshotJob {
  export type Input = StartDashboardSnapshotJobRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedPricingPlanException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace StartDashboardSnapshotJobSchedule {
  export type Input = StartDashboardSnapshotJobScheduleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAccountCustomization {
  export type Input = UpdateAccountCustomizationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAccountSettings {
  export type Input = UpdateAccountSettingsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAnalysis {
  export type Input = UpdateAnalysisRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateAnalysisPermissions {
  export type Input = UpdateAnalysisPermissionsRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateApplicationWithTokenExchangeGrant {
  export type Input = UpdateApplicationWithTokenExchangeGrantRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateBrand {
  export type Input = UpdateBrandRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateBrandAssignment {
  export type Input = UpdateBrandAssignmentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateBrandPublishedVersion {
  export type Input = UpdateBrandPublishedVersionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateCustomPermissions {
  export type Input = UpdateCustomPermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDashboard {
  export type Input = UpdateDashboardRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateDashboardLinks {
  export type Input = UpdateDashboardLinksRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateDashboardPermissions {
  export type Input = UpdateDashboardPermissionsRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateDashboardPublishedVersion {
  export type Input = UpdateDashboardPublishedVersionRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateDashboardsQAConfiguration {
  export type Input = UpdateDashboardsQAConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDataSet {
  export type Input = UpdateDataSetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateDataSetPermissions {
  export type Input = UpdateDataSetPermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDataSource {
  export type Input = UpdateDataSourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | CustomerManagedKeyUnavailableException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDataSourcePermissions {
  export type Input = UpdateDataSourcePermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDefaultQBusinessApplication {
  export type Input = UpdateDefaultQBusinessApplicationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateFolder {
  export type Input = UpdateFolderRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateFolderPermissions {
  export type Input = UpdateFolderPermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateGroup {
  export type Input = UpdateGroupRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateIAMPolicyAssignment {
  export type Input = UpdateIAMPolicyAssignmentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConcurrentUpdatingException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateIdentityPropagationConfig {
  export type Input = UpdateIdentityPropagationConfigRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateIpRestriction {
  export type Input = UpdateIpRestrictionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateKeyRegistration {
  export type Input = UpdateKeyRegistrationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdatePublicSharingSettings {
  export type Input = UpdatePublicSharingSettingsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedPricingPlanException
    | CommonAwsError;
}

export declare namespace UpdateQPersonalizationConfiguration {
  export type Input = UpdateQPersonalizationConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateQuickSightQSearchConfiguration {
  export type Input = UpdateQuickSightQSearchConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateRefreshSchedule {
  export type Input = UpdateRefreshScheduleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateRoleCustomPermission {
  export type Input = UpdateRoleCustomPermissionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateSPICECapacityConfiguration {
  export type Input = UpdateSPICECapacityConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateTemplate {
  export type Input = UpdateTemplateRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateTemplateAlias {
  export type Input = UpdateTemplateAliasRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateTemplatePermissions {
  export type Input = UpdateTemplatePermissionsRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateTheme {
  export type Input = UpdateThemeRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateThemeAlias {
  export type Input = UpdateThemeAliasRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateThemePermissions {
  export type Input = UpdateThemePermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateTopic {
  export type Input = UpdateTopicRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateTopicPermissions {
  export type Input = UpdateTopicPermissionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace UpdateTopicRefreshSchedule {
  export type Input = UpdateTopicRefreshScheduleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateUser {
  export type Input = UpdateUserRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateUserCustomPermission {
  export type Input = UpdateUserCustomPermissionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateVPCConnection {
  export type Input = UpdateVPCConnectionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

